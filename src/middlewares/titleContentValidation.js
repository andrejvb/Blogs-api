const badReqCode = 400;

const titleContentValidation = async (req, res, next) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(badReqCode).json({ message: 'Some required fields are missing' });
    }
    next();
};

module.exports = { titleContentValidation };