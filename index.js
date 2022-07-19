/*https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/#:~:text=Essentially%2C%20node%2Dpostgres%20is%20a,%2C%20and%20C%2FC%2B%2B%20bindings.*/
// https://sequelize.org/docs/v6/getting-started/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./models/connection_db');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



sequelize.authenticate().then(() => {
  console.log("Success!");
}).catch((err) => {
  console.log(err);
});




app.listen(3000, () => console.log('server started'));


app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' })
})

//app.get('/users', sequelize.getUsers)


// app.use(express.static('public'));

// const userController = 
//   require('./controllers/UserController');
//   app.post('/user',userController.store);
//   app.get('/user',userController.show);
//   app.get('/user/buscaemail/*',userController.index);

// exclui user
//req.params  = route params (post, put, delete)
// app.delete('/user/:id', userController.destroy);

// https://reqbin.com/