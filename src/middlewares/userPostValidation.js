const { validateToken } = require('../auth/JWT');
const services = require('../services');

const badReqCode = 401;

const userValidation = async (req, res, next) => {
    const { authorization: token } = req.headers;
    const { id } = req.params;
        const post = await services.findPostById(Number(id));
        console.log('LOG DO POST =>', post);
        if (!post) return res.status(404).json({ message: 'Post does not exist' });
        const data = validateToken(token);
        console.log('LOG DO DATA =>', data);
        const userId = data.user.id;
        if (userId !== post.dataValues.userId) {
            return res.status(badReqCode).json({ message: 'Unauthorized user' });    
        }
    next();
};

module.exports = { userValidation };