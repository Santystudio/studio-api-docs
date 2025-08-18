# 🧩 Wallet API Endpoints

This document outlines key endpoints for integrating a Web3 wallet system.  
Each endpoint is designed for clarity, modularity, and developer ease.

---

## 🔐 `/wallet/initiate`

**Method**: `POST`  
**Purpose**: Initializes a new wallet for a user  
**Request Body**:
```json
{
  "user_id": "12345",
  "wallet_type": "multi-sig"
}
💸 /wallet/transaction
Method: POST Purpose: Executes a transaction from the wallet Request Body:
{
  "wallet_id": "abc123",
  "amount": "250.00",
  "currency": "USDC",
  "destination": "0xA1B2C3D4"
}
Response:
{
  "transaction_id": "tx789",
  "status": "pending"
}
/wallet/balance
Method: GET Purpose: Retrieves current wallet balance Query Params: wallet_id=abc123
Response:
{
  "balance": "750.00",
  "currency": "USDC"
}
