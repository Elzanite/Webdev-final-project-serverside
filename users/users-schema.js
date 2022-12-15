import mongoose from 'mongoose'; 

const schema = mongoose.Schema({
  username: String,   
  password: String, 
  first: String, 
  last: String, 
  dob: Date, 
  address: String,
  isSeller: Number // 0 if the user is a buyer, 1 if seller
}, {collection: 'users'});


export default schema