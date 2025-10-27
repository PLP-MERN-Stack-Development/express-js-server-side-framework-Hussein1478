// Checks for valid API key in headers
require('dotenv').config();

const auth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Unauthorized - Invalid API Key' });
  }

  next();
};

module.exports = auth;
