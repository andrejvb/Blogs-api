const { validateToken } = require('../auth/JWT');

const badReqCode = 401;

const tokenValidation = async (req, res, next) => {
    try {
        const { authorization: token } = req.headers;
        if (!token) throw new Error({ message: 'Token not found' });
        validateToken(token);
        next();
    } catch (error) {
        console.error(error);
        if (error.message === 'Token not found') {
            return res.status(badReqCode).json();
        }
        return res.status(badReqCode).json({ message: 'Expired or invalid token' });       
    } 
};

module.exports = { tokenValidation };