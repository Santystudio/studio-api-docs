const express = require('express');
const router = express.Router();
const { getDataAccess } = require('../controllers/gdprController');
const authenticateToken = require('../middleware/auth');

router.get('/data-access/:userId', authenticateToken, getDataAccess);

module.exports = router;
