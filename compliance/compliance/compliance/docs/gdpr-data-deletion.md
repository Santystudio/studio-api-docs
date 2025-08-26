# GDPR Data Deletion API

## Endpoint
`DELETE /api/gdpr/data-deletion/:userId`

## Description
Erases all personal data associated with a user ID, in compliance with GDPR Article 17.

## Headers
- `Authorization: Bearer <access_token>`
- `Content-Type: application/json`

## Success Response
- **Code:** 200 OK
- **Payload:** See `gdpr-data-deletion.json`

## Error Response
- **Code:** 404 Not Found
- **Payload:**
```json
{
  "error": "User not found or already deleted.",
  "timestamp": "2025-08-26T12:45:00Z"
}
