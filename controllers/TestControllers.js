// index, show, store, update, destroy

module.exports = 
  {
    async show(req, res)
      {
        const users =
          [
            {
              name: 'Jose', 
              email: 'Jose@gmail.com'
            },
            {
              name: 'Helo', 
              email: 'helo@hotmail.com'
            }
          ]
        return res.json(users);
      }
  }