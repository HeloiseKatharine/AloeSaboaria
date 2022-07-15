//async function authenticate() {

//const authenticate = {
  
const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('postgres://namlhwumxschsb:61ef3085f22ae14ce13439bb7cdc911d62e102c1fc2b3800688a35bada812be6@ec2-3-219-229-143.compute-1.amazonaws.com:5432/d5t5huhnt06dca')

try {
    //await
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}
  
//}

