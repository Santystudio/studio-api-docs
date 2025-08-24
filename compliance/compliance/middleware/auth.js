function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token || token !== process.env.ACCESS_TOKEN) {
    return res.status(403).json({ error: 'Unauthorized access' });
  }
  next();
}

module.exports = authenticateToken;
