# Admin API Endpoints

This document describes the admin endpoints for managing permissions and roles in the Office Management System.

## Base URL

```
http://localhost:5000/api/v1/admin
```

## Permissions Management

### Get All Permissions

```
GET /permissions
```

**Query Parameters:**

- `search` (optional): Search in name, display name, or controller
- `controller` (optional): Filter by controller name
- `isActive` (optional): Filter by active status (true/false)
- `page` (default: 1): Page number
- `pageSize` (default: 12): Number of items per page

**Response:**

```json
{
  "success": true,
  "message": "Permissions retrieved successfully",
  "data": {
    "totalCount": 50,
    "page": 1,
    "pageSize": 12,
    "items": [
      {
        "id": 1,
        "name": "users.create",
        "displayName": "Create Users",
        "description": "Permission to create new users",
        "controller": "users",
        "action": "create",
        "isActive": true,
        "createdAt": "2024-01-01T00:00:00Z"
      }
    ]
  }
}
```

### Create Permission

```
POST /permissions
```

**Request Body:**

```json
{
  "name": "users.create",
  "displayName": "Create Users",
  "description": "Permission to create new users",
  "controller": "users",
  "action": "create",
  "isActive": true
}
```

### Update Permission

```
PUT /permissions/{permissionId}
```

**Request Body:** Same as Create Permission

### Delete Permission

```
DELETE /permissions/{permissionId}
```

## Roles Management

### Get All Roles

```
GET /roles
```

**Query Parameters:**

- `page` (default: 1): Page number
- `pageSize` (default: 12): Number of items per page

**Response:**

```json
{
  "success": true,
  "message": "Roles retrieved successfully",
  "data": {
    "totalCount": 10,
    "page": 1,
    "pageSize": 12,
    "items": [
      {
        "id": "role-id",
        "name": "Manager",
        "description": "Manager role with elevated permissions",
        "createdAt": "2024-01-01T00:00:00Z",
        "updatedAt": "2024-01-01T00:00:00Z"
      }
    ]
  }
}
```

### Get Role by ID

```
GET /roles/{roleId}
```

### Create Role

```
POST /roles
```

**Request Body:**

```json
{
  "name": "Manager",
  "description": "Manager role with elevated permissions"
}
```

### Update Role

```
PUT /roles/{roleId}
```

**Request Body:** Same as Create Role

### Delete Role

```
DELETE /roles/{roleId}
```

## Role Permissions Management

### Get Role Permissions

```
GET /roles/{roleId}/permissions
```

**Response:**

```json
{
  "success": true,
  "message": "Role permissions retrieved successfully",
  "data": [
    {
      "id": 1,
      "name": "users.create",
      "displayName": "Create Users",
      "description": "Permission to create new users",
      "controller": "users",
      "action": "create",
      "isActive": true
    }
  ]
}
```

### Assign Permissions to Role

```
POST /roles/{roleId}/permissions
```

**Request Body:**

```json
{
  "permissionIds": ["1", "2", "3"]
}
```

### Remove Permission from Role

```
DELETE /roles/{roleId}/permissions/{permissionId}
```

## Error Responses

All endpoints return error responses in the following format:

```json
{
  "success": false,
  "message": "Error description",
  "errors": ["Detailed error message 1", "Detailed error message 2"]
}
```

## Common HTTP Status Codes

- `200 OK`: Request successful
- `201 Created`: Resource created successfully
- `400 Bad Request`: Invalid request data
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

## Testing

Use the provided `admin.http` file to test all endpoints with REST Client extension in VS Code or similar tools.

## Notes

- All timestamps are in UTC format
- Role IDs are strings (GUID format)
- Permission IDs are integers
- The role-permission relationship is many-to-many through the RolePermission table
- Some endpoints may require authentication and authorization
