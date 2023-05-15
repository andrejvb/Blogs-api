const jwt = require('jsonwebtoken');

const generateToken = (email) => {
    const jwtConfig = {
        expiresIn: '1d',
        algorithm: 'HS256',
    };
    const secret = process.env.JWT_SECRET;

    const payload = { 
        username: email,
        admin: false,
    };
    return jwt.sign(payload, secret, jwtConfig);
};

module.exports = { generateToken };