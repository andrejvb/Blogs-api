const { generateToken } = require('../auth/JWT');

const services = require('../services');

const createUser = async (req, res) => {
    const {
        displayName,
        email,
        password,
        image,
      } = req.body;

      const result = await services.createUser(
        displayName,
        email,
        password,
        image,
      );
    if (result.message) return res.status(409).json({ message: result.message });

    const token = generateToken(email);

    return res.status(201).json({ token });
};

module.exports = { createUser };