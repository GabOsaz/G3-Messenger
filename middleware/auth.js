import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export default (req, res, next) => {
  const token = req.cookies.token;

  // Check for token
  if (!token)
    return res.status(401).json({ msg: 'No token, authorizaton denied' });

  try {
    // Verify token. The verify method returns the token payload, i.e id and email in this case
    const decoded = jwt.verify(token, JWT_SECRET);
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
};
