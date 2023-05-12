const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const badReqCode = 400;

const emailValidation = (req, res, next) => {
    const { email } = req.body;
    if (!regexEmail.test(email)) {
      return res.status(badReqCode).json({ message: '"email" must be a valid email' });
    }
    next();
  };
  
  module.exports = { emailValidation };