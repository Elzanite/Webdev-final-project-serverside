import * as dao from './users-dao.js';
const UsersController = (app) => {
  const fetchUsers = (req, res) => {
    dao.findAllUsers()
    .then(users => res.json(users))
  }

  const fetchUserByCredentials = (req, res) => {
    dao.findByCredentials(req.params["username"], req.params["password"])
    .then(result => res.json(result))
  }

  const fetchUserByUsername = (req, res) => {
    dao.fetchUserByUsername(req.params["username"])
    .then(result => res.json(result))
  }

  const addUser = (req, res) => {
    dao.addUser(req.body)
    .then(result => res.json(result))
  }

  const updateUser = (req, res) => {
    dao.updateUser(req.body)
    .then(result => res.json(result))
  }

  app.get('/api/users', fetchUsers)
  app.get('/api/users/:username/:password', fetchUserByCredentials)
  app.get('/api/users/:username', fetchUserByUsername)
  app.post('/api/users', addUser)
  app.put('/api/profile/:profileId', updateUser)
}

export default UsersController