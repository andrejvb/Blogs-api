const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
    try {
        const availableEmail = await User.findOne({ where: { email } });

        if (availableEmail) return ({ message: 'User already registered' });

        const newUser = await User.create({
            displayName,
            email,
            password,
            image,
        });

        return newUser;
    } catch (error) {
        console.error(error);
    }
};

const findAllUsers = async () => {
    const allUsers = await User.findAll({ attributes: { exclude: 'password' } });
    return allUsers;
};

const findUser = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!user) return ({ message: 'User does not exist' });
    return user;
};

module.exports = { createUser, findAllUsers, findUser };