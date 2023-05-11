const { User } = require('../models');

const emailAndPassword = async (email, password) => {
    const user = await User.findOne({
        where: { email, password },
    });
    if (!user) return ({ message: 'Invalid fields' });

    return true;
};

module.exports = { emailAndPassword };