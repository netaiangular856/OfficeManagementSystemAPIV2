# Employee KPI Management System

## Overview

The Employee KPI (Key Performance Indicators) Management System automatically calculates and tracks employee performance metrics based on their activities across the Office Management System.

## Features

### 🔍 **KPI Metrics Calculated**

- **Task Performance (40% weight)**

  - Tasks assigned in the period
  - Tasks completed successfully
  - Tasks completed late
  - Average completion time in days

- **Meeting Attendance (20% weight)**

  - Meetings attended
  - Meetings missed
  - Attendance rate

- **Task Timeliness (25% weight)**

  - Percentage of tasks completed on time
  - Late task penalty calculation

- **Response Speed (15% weight)**
  - Average response time to task updates
  - Normalized response speed score

### 📊 **Overall Score Calculation**

The system calculates a weighted score (0-100) based on the above metrics:

```
Overall Score = (Task Completion Rate × 40) + (Meeting Attendance Rate × 20) + (Task Timeliness Rate × 25) + (Response Speed Score × 15)
```

## API Endpoints

### **Get Employee KPIs**

```
GET /api/employees/{id}/kpis
```

Returns the latest KPI data for a specific employee.

### **Get Employee KPI History**

```
GET /api/employees/{id}/kpis/history?count=12
```

Returns KPI history for an employee (default: last 12 periods).

### **Get Employee KPI Summary**

```
GET /api/employees/{id}/kpis/summary
```

Returns comprehensive KPI summary including:

- Current period KPI
- Previous period KPI
- Performance trend analysis

### **Recalculate KPIs**

```
POST /api/employees/kpis/recalculate
```

Manually triggers KPI recalculation for:

- All employees
- Specific employees
- Custom date ranges

### **Schedule Monthly Calculation**

```
POST /api/employees/kpis/schedule-monthly
```

Schedules automatic monthly KPI calculation.

## Background Service

### **Automatic Monthly Calculation**

The system includes a background service that automatically calculates KPIs every month:

- **Schedule**: 1st day of each month at 2:00 AM UTC
- **Scope**: All employees in the system
- **Period**: Previous month's data
- **Storage**: Results stored in `EmployeeKPI` table

### **Service Configuration**

```csharp
// Check every hour
private readonly TimeSpan _checkInterval = TimeSpan.FromHours(1);

// Calculate on 1st of month
private readonly int _targetDayOfMonth = 1;

// At 2:00 AM
private readonly TimeSpan _targetTime = new TimeSpan(2, 0, 0);
```

## Data Sources

### **Task Data**

- `TaskItem` table: Assigned tasks, completion status, due dates
- `TaskUpdate` table: Response times and updates
- `TaskAttachment` table: Task-related files

### **Meeting Data**

- `Meeting` table: Meeting information
- `MeetingAttendee` table: Attendance records and RSVP status

### **Employee Data**

- `Employee` table: Employee information and job titles
- `EmployeeKPI` table: Calculated KPI results

## Database Schema

### **EmployeeKPI Table**

```sql
CREATE TABLE EmployeeKPI (
    Id INT PRIMARY KEY IDENTITY(1,1),
    EmployeeId INT NOT NULL,
    PeriodStart DATE NOT NULL,
    PeriodEnd DATE NOT NULL,
    TasksAssigned INT NOT NULL DEFAULT 0,
    TasksCompleted INT NOT NULL DEFAULT 0,
    TasksLate INT NOT NULL DEFAULT 0,
    AvgCompletionDays DECIMAL(10,2) NOT NULL DEFAULT 0,
    MeetingsAttended INT NOT NULL DEFAULT 0,
    MeetingsMissed INT NOT NULL DEFAULT 0,
    ResponseSpeedAvgHours DECIMAL(10,2) NOT NULL DEFAULT 0,
    Score DECIMAL(5,2) NOT NULL DEFAULT 0,
    FOREIGN KEY (EmployeeId) REFERENCES Employee(Id)
);
```

## Usage Examples

### **1. Get Current Employee KPIs**

```http
GET /api/employees/1/kpis
Authorization: Bearer {token}
```

### **2. Recalculate KPIs for Previous Month**

```http
POST /api/employees/kpis/recalculate
Authorization: Bearer {token}
Content-Type: application/json

{
  "recalculateAllEmployees": true,
  "periodStart": "2024-01-01",
  "periodEnd": "2024-01-31"
}
```

### **3. Get KPI Summary with Trends**

```http
GET /api/employees/1/kpis/summary
Authorization: Bearer {token}
```

## Integration with Angular Dashboard

### **Dashboard Display**

```typescript
// Get employee KPIs
const kpis = await this.employeeService.getEmployeeKpis(employeeId);

// Display in dashboard
this.kpiData = {
  currentScore: kpis.score,
  taskCompletion: (kpis.tasksCompleted / kpis.tasksAssigned) * 100,
  meetingAttendance:
    (kpis.meetingsAttended / (kpis.meetingsAttended + kpis.meetingsMissed)) *
    100,
  responseSpeed: kpis.responseSpeedAvgHours,
};
```

### **Performance Trends**

```typescript
// Get KPI summary for trend analysis
const summary = await this.employeeService.getEmployeeKpiSummary(employeeId);

// Display trend
this.performanceTrend = summary.performanceTrend; // Percentage change
```

## Configuration

### **Service Registration**

```csharp
// In infrastructureRegisteration.cs
services.AddScoped<IEmployeeKpiService, EmployeeKpiService>();
services.AddHostedService<MonthlyKpiCalculationService>();
```

### **Background Service Settings**

```csharp
// Customize calculation schedule
private readonly int _targetDayOfMonth = 1; // 1st of month
private readonly TimeSpan _targetTime = new TimeSpan(2, 0, 0); // 2:00 AM
private readonly TimeSpan _checkInterval = TimeSpan.FromHours(1); // Check every hour
```

## Monitoring and Logging

### **Service Logs**

The background service provides comprehensive logging:

- Service start/stop events
- Monthly calculation triggers
- Success/failure statistics
- Error details and retry attempts

### **Performance Metrics**

Track calculation performance:

- Total employees processed
- Successful calculations
- Failed calculations
- Processing duration
- Error details

## Error Handling

### **Common Scenarios**

- **Employee not found**: Returns 404 with appropriate message
- **No KPI data**: Returns informative message
- **Calculation failures**: Logs errors and continues with other employees
- **Invalid date ranges**: Validates input parameters

### **Recovery Mechanisms**

- Automatic retry for failed calculations
- Graceful degradation for partial failures
- Detailed error logging for debugging

## Security

### **Authentication Required**

All KPI endpoints require valid JWT authentication:

```http
Authorization: Bearer {jwt_token}
```

### **Authorization**

- Employees can view their own KPIs
- Managers can view team member KPIs
- Administrators can recalculate all KPIs

## Performance Considerations

### **Optimization Strategies**

- Efficient database queries with proper indexing
- Batch processing for multiple employees
- Asynchronous calculation to avoid blocking
- Configurable calculation intervals

### **Scalability**

- Background service handles large employee counts
- Database operations optimized for performance
- Memory-efficient processing for large datasets

## Troubleshooting

### **Common Issues**

1. **KPIs not calculating**: Check background service logs
2. **Incorrect scores**: Verify data source integrity
3. **Missing data**: Check employee and task data completeness
4. **Service not starting**: Verify service registration in DI container

### **Debug Information**

- Enable detailed logging for troubleshooting
- Check database connection and permissions
- Verify employee role assignments
- Monitor background service status

## Future Enhancements

### **Planned Features**

- Real-time KPI updates
- Advanced analytics and reporting
- Performance benchmarking
- Goal setting and tracking
- Automated performance alerts

### **Integration Opportunities**

- Email notifications for performance changes
- Dashboard widgets and charts
- Export functionality for reports
- API rate limiting and caching
