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

module.exports = { createUser };