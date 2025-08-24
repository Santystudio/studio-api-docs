# 🔍 KYC Verification API

Initiates KYC verification for a registered user.  
Accepts identity details and document uploads, returns verification status and audit trail.

**Endpoint:** `POST /api/v1/kyc/verify`  
**Auth Required:** `Bearer Token`  
**Content-Type:** `application/json`

---

## 📦 Sample Request

```json
{
  "user_id": "a7b9c2d1",
  "full_name": "John Abraham",
  "dob": "1990-05-12",
  "document_type": "passport",
  "document_number": "M1234567",
  "document_image_url": "https://cdn.santystudio.com/docs/John-passport.jpg"
}
