const { validateToken } = require('../auth/JWT');
const services = require('../services');

const badReqCode = 401;

const userValidation = async (req, res, next) => {
    const { authorization: token } = req.headers;
    const { id } = req.params;
    const post = await services.findPostById(Number(id));
    console.log('ID DO USER', post.dataValues.userId);
    const data = validateToken(token);
    const userId = data.user.id;
    if (post.dataValues.userId !== userId) {
        return res.status(badReqCode).json({ message: 'Unauthorized user' });
    }
    next();
};

module.exports = { userValidation };