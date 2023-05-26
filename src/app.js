const express = require('express');
const controllers = require('./controllers');
const { emailPasswordValidation } = require('./middlewares/emailPasswordValidation');
const { displayNameValidation } = require('./middlewares/displayNameValidation');
const { emailValidation } = require('./middlewares/emailValidation');
const { passwordValidation } = require('./middlewares/passwordValidation');
const { tokenValidation } = require('./middlewares/tokenvalidation');
const { blogPostValidation } = require('./middlewares/blogPostValidation');
const { titleContentValidation } = require('./middlewares/titleContentValidation');
const { userValidation } = require('./middlewares/userPostValidation');
const { postIdValidation } = require('./middlewares/postIdValidation');

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

app.get('/user', tokenValidation, controllers.findAllUsers);

app.get('/user/:id', tokenValidation, controllers.findUser);

app.post('/categories', tokenValidation, controllers.createCategory);

app.get('/categories', tokenValidation, controllers.findAllCategories);

app.post('/post', tokenValidation, blogPostValidation, controllers.newPost);

app.get('/post', tokenValidation, controllers.findAllPost);

app.get('/post/:id', tokenValidation, controllers.findPostById);

app.put(
  '/post/:id', 
  tokenValidation, 
  titleContentValidation, 
  userValidation, 
  controllers.updatePost,
  );

  app.delete(
    '/post/:id', 
    tokenValidation, 
    postIdValidation, 
    userValidation,
    controllers.deletePost,
    );

module.exports = app;
