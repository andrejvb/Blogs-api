const services = require('../services');

const badReqCode = 404;

const postIdValidation = async (req, res, next) => {
    const { id } = req.params;
    const post = await services.findPostById(Number(id));
    if (post === null || post === '' || post === undefined) {
      return res.status(badReqCode).json({ message: 'Post does not exist' });
    }  
    next();
};

module.exports = { postIdValidation };