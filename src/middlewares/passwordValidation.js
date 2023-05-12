const badReqCode = 400;

const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res
      .status(badReqCode).json({ message: '"password" length must be at least 6 characters long' });
  }
  next();
};

module.exports = { passwordValidation };