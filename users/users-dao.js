
import model from './users-model.js';

export const findAllUsers = () => model.find();

export const findByCredentials = (username, password) => model.find({username: username, password: password})

export const addUser = (user) => model.create(user);

export const updateUser = (user) => model.updateOne({_id: user._id}, user);

export const fetchUserById = (id) => model.findOne({_id: id});

export const fetchUserByUsername = (username) => model.findOne({username: username})
