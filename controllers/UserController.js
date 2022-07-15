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
  },
  async destroy(req,res){
      let user = await User.findByIdAndRemove(req.params.id);
         return res.json(user);
    },

  async update(req,res){
      let user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}); 
        return res.json(user);
    }
 
};