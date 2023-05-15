const badReqCode = 400;

const emailPasswordValidation = (req, res, next) => {
    const { email, password } = req.body;
if (!email || !password) {
    return res.status(badReqCode).json({ message: 'Some required fields are missing' });
}
    next();
};

module.exports = { emailPasswordValidation };