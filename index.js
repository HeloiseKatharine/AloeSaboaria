/*https://blog.logrocket.com/crud-rest-api-node-js-express-postgresql/#:~:text=Essentially%2C%20node%2Dpostgres%20is%20a,%2C%20and%20C%2FC%2B%2B%20bindings.*/
// https://sequelize.org/docs/v6/getting-started/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Conecção do banco de dados 
const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('postgres://namlhwumxschsb:61ef3085f22ae14ce13439bb7cdc911d62e102c1fc2b3800688a35bada812be6@ec2-3-219-229-143.compute-1.amazonaws.com:5432/d5t5huhnt06dca');


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