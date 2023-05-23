const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const badReqCode = 401;

const tokenValidation = async (req, res, next) => {
    try {
        const { authorization: token } = req.headers;
        if (!token) return res.status(badReqCode).json({ message: 'Token not found' });
        const data = jwt.verify(token, secret);  
        req.payload = data;      
    } catch (error) {
        console.error(error);
       return res.status(badReqCode).json({ message: 'Expired or invalid token' });
    } 
    next();   
};

module.exports = { tokenValidation };