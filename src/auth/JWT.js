const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const generateToken = (email) => {
    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
    };

    const payload = { 
        user: email,
        admin: false,
    };
    return jwt.sign(payload, secret, jwtConfig);
};

const validateToken = (token) => jwt.verify(token, secret);

module.exports = { generateToken, validateToken };