const services = require('../services');
const { generateToken } = require('../auth/JWT');

const findEmailAndPassword = async (req, res) => {
    const { email, password } = req.body;
    const user = await services.getByEmailAndPassword(email, password);
    const { password: _password, ...userWithouthPassword } = user.dataValues;
    if (user.message) return res.status(400).json({ message: user.message });
    const token = generateToken({ data: userWithouthPassword });

    return res.status(200).json({ token });
};

module.exports = { findEmailAndPassword };