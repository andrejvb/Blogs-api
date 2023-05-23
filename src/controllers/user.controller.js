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

    const user = await services.getByEmailAndPassword(email, password);
    const { password: _password, ...userWithouthPassword } = user.dataValues;

    const token = generateToken({ data: userWithouthPassword });

    return res.status(201).json({ token });
};

const findAllUsers = async (_req, res) => {
  const allUsers = await services.findAllUsers();
  return res.status(200).json(allUsers);
};

const findUser = async (req, res) => {
  const { id } = req.params;
  const user = await services.findUser(Number(id));
  if (user.message) return res.status(404).json({ message: user.message });
  return res.status(200).json(user);
};

module.exports = { createUser, findAllUsers, findUser };