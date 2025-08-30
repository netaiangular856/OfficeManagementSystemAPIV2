# Seeding Operations

This document describes the seeding operations available for the Office Management System.

## Base URL

```
http://localhost:5000/api/v1/admin
```

## Seeding Endpoints

### 1. Seed Permissions

```
POST /seed-permissions
```

**Description:** Seeds all permissions for all controllers in the system.

**Response:**

```json
{
  "message": "Permissions seeded successfully!",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

**Permissions Created:**

- **Admin Controller:** 11 permissions (permissions management, roles management, role permissions)
- **Dashboard Controller:** 3 permissions (dashboard data, statistics, charts)
- **Calendar Controller:** 5 permissions (calendar, events CRUD)
- **WorkFlow Controller:** 2 permissions (workflow, logs)
- **Meetings Controller:** 15 permissions (meetings CRUD, attendees, minutes, attachments)
- **Employees Controller:** 15 permissions (employees CRUD, notes, KPI)
- **Users Controller:** 9 permissions (users CRUD, profile, avatar)
- **Departments Controller:** 5 permissions (departments CRUD)
- **Letters Controller:** 8 permissions (letters CRUD, attachments)
- **Partners Controller:** 8 permissions (partners CRUD, contacts)
- **Documents Controller:** 7 permissions (documents CRUD, download, upload)
- **Visits Controller:** 8 permissions (visits CRUD, participants)
- **Notifications Controller:** 7 permissions (notifications CRUD, mark read/unread)
- **Tasks Controller:** 13 permissions (tasks CRUD, assign, status, priority, updates, attachments)

**Total:** 106 permissions

### 2. Seed Roles

```
POST /seed-roles
```

**Description:** Seeds basic roles for the system.

**Response:**

```json
{
  "message": "Roles seeded successfully!",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

**Roles Created:**

- **Admin:** System Administrator with full permissions
- **Manager:** Department Manager with elevated permissions
- **Secretary:** Secretary with limited permissions for scheduling
- **Employee:** Regular employee with basic permissions

### 3. Seed All

```
POST /seed-all
```

**Description:** Seeds both permissions and roles in one operation.

**Response:**

```json
{
  "message": "Permissions and roles seeded successfully!",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

## Permission Naming Convention

Permissions follow this naming convention:

```
{controller}.{action}
```

Examples:

- `admin.permissions.get` - Get permissions in admin controller
- `users.create` - Create user in users controller
- `meetings.attendees.add` - Add attendee to meeting

## Permission Structure

Each permission includes:

- **Name:** Unique identifier (e.g., `admin.permissions.get`)
- **DisplayName:** Human-readable name (e.g., `Get Permissions`)
- **Description:** Detailed description of the permission
- **Controller:** Controller name (e.g., `admin`)
- **Action:** Action name (e.g., `permissions.get`)
- **IsActive:** Whether the permission is active (default: true)

## Usage Instructions

1. **First Time Setup:**

   ```
   POST http://localhost:5000/api/v1/admin/seed-all
   ```

2. **Add New Permissions Only:**

   ```
   POST http://localhost:5000/api/v1/admin/seed-permissions
   ```

3. **Add New Roles Only:**
   ```
   POST http://localhost:5000/api/v1/admin/seed-roles
   ```

## Important Notes

- **Idempotent Operations:** Seeding operations are idempotent - they won't create duplicates
- **Permissions Check:** Permissions seeder checks if permissions already exist before creating new ones
- **Roles Check:** Roles seeder checks if roles already exist before creating new ones
- **Database Required:** Make sure the database is properly configured and accessible
- **Admin Access:** These endpoints should be protected and only accessible by administrators

## Testing

Use the provided `admin.http` file to test all seeding endpoints:

```http
### Seed all data
POST {{BaseUrl}}/api/v1/admin/seed-all
Content-Type: application/json
```

## Error Handling

If seeding fails, you'll receive a detailed error response:

```json
{
  "error": "Failed to seed data",
  "message": "Detailed error message",
  "stackTrace": "Full stack trace for debugging"
}
```

## Next Steps

After seeding:

1. Assign permissions to roles using the role permissions endpoints
2. Create users and assign them to appropriate roles
3. Test the permission system with different user roles
