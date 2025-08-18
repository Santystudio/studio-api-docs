```markdown
# 🔐 Authentication & Token Flow

This document explains how authentication is handled in the Web3 wallet API.

---

## 🧠 Overview

Authentication is token-based using JWT (JSON Web Tokens).  
Each user receives a token upon login, which must be included in all protected requests.

---

## 🔑 `/auth/login`

**Method**: `POST`  
**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
Response:

json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expires_in": 3600
}
🔒 Token Usage
Include the token in the Authorization header for all protected endpoints:

Code
Authorization: Bearer <token>
🔁 Token Refresh
Use /auth/refresh to renew expired tokens. Tokens expire after 1 hour and must be refreshed to maintain session continuity.
