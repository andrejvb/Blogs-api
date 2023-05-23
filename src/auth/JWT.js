const jwt = require('jsonwebtoken');

const generateToken = (email) => {
    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
    };
    const secret = process.env.JWT_SECRET;

    const payload = { 
        user: email,
        admin: false,
    };
    return jwt.sign(payload, secret, jwtConfig);
};

module.exports = { generateToken };