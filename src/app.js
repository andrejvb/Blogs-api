const express = require('express');
const controllers = require('./controllers');
const { emailPasswordValidation } = require('./middlewares/emailPasswordValidation');
const { displayNameValidation } = require('./middlewares/displayNameValidation');
const { emailValidation } = require('./middlewares/emailValidation');
const { passwordValidation } = require('./middlewares/passwordValidation');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

// É importante exportar a constante `apppDeleteDelete`,
// para que possa ser utilizada pelo arquivo `src/server.js`

app.post('/login', emailPasswordValidation, controllers.findEmailAndPassword);

app.post(
  '/user', 
  displayNameValidation, 
  emailValidation, 
  passwordValidation, 
  controllers.createUser,
  );

module.exports = app;
