const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = {
  async store(req, res){
    const user = await User.create(req.body);

    return res.json(user);
      
    },
  async show(req, res){ 
    let user = await User.find();
    return res.json(user);
  },
  async index(req, res){
    let user = await User.find(
      {email: req.query.email}
    );
    return res.json(user);
  }
};