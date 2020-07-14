import jwtDecode from 'jwt-decode'

export default (req, res, next) => {
  const token = req.cookies.token;
  // Check for token
  if (!token)
  return res.status(401).json({ msg: 'No token, authorizaton denied' });
  
  try {
    console.log('token', req.cookies.token);
    // Verify token. The verify method returns the token payload, i.e id in this case
    const decoded = jwtDecode(token)
    console.log('from auth: ', decoded)
    if(!decoded) {
      return res.status(401).json({msg: 'Problem authorizing token'})
    } else {
      // Add user from payload
      req.user = decoded;
      next();
    }
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
};
