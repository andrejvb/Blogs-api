const services = require('../services');
const { generateToken } = require('../auth/JWT');

const findEmailAndPassword = async (req, res) => {
    const { email, password } = req.body;
    const result = await services.emailAndPassword(email, password);
    if (result.message) return res.status(400).json({ message: result.message });
    const token = generateToken(email);

    return res.status(200).json({ token });
};

module.exports = { findEmailAndPassword };