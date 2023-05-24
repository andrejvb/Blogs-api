const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const badReqCode = 401;

const tokenValidation = async (req, res, next) => {
    const { authorization: token } = req.headers;
    if (!token) return res.status(badReqCode).json({ message: 'Token not found' }); 
    try {
        jwt.verify(token, secret); 
        next();
    } catch (error) {
        console.error(error);
        return res.status(badReqCode).json({ message: 'Expired or invalid token' });            
    } 
};

module.exports = { tokenValidation };