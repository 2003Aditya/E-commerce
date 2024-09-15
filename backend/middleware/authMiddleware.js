
const jwt = require('jsonwebtoken');

// Middleware to authenticate and authorize users
const authenticateToken = (req, res, next) => {
  // Get the token from the request header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Assuming the token is in the form "Bearer TOKEN"

  if (token == null) return res.sendStatus(401); // If there's no token, return 401 Unauthorized

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // If the token is invalid, return 403 Forbidden

    // Attach the user object to the request
    req.user = user;

    // Proceed to the next middleware or route handler
    next();
  });
};

module.exports = authenticateToken;
