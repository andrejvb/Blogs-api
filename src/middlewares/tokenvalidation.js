const { validateToken } = require('../auth/JWT');

const badReqCode = 401;

const tokenValidation = async (req, res, next) => {
    const { authorization: token } = req.headers;
    if (!token) return res.status(badReqCode).json({ message: 'Token not found' }); 
    try {
       validateToken(token); 
       next();
    } catch (e) {
        return res.status(badReqCode).json({ message: 'Expired or invalid token' });            
    } 
};

module.exports = { tokenValidation };