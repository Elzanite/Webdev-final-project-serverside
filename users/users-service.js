const dao = require('../db/users/dao');

module.exports = (app) => {
  const fetchUsers = (req, res) => {
    dao.findAllUsers()
    .then(users => res.json(users));
  }

  app.get('/api/users', fetchUsers);


  const fetchUserByCredentials = (req, res) => {
    dao.findByCredentials(req.params["username"], req.params["password"])
    .then(result => res.json(result));
  }

  app.get('/api/users/:username/:password', fetchUserByCredentials);


  const fetchUserByUsername = (req, res) => {
    dao.fetchUserByUsername(req.params["username"])
    .then(result => res.json(result));
  }

  app.get('/api/users/:username', fetchUserByUsername);

  const addUser = (req, res) => {
    dao.addUser(req.body)
    .then(result => res.json(result));
  }

  app.post('/api/users', addUser);


  const updateUser = (req, res) => {
    dao.updateUser(req.body)
    .then(result => res.json(result));
  }

  app.put('/api/profile/:profileId', updateUser);
}