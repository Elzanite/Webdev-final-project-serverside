import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema({
    username: String,   
    product_id: String, 
    first: String,
    last: String, 
    body: String,
}, {collection: 'reviews'})
export default reviewsSchema