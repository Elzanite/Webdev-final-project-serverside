import model from "./reviews-model.js";

export const findAllReviews = () => model.find();

export const findProductReviews = (productId) => model.find({product_id: productId});

export const addReview = (review) => model.create(review);
