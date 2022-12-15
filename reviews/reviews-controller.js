import * as dao from "./reviews-dao.js"

const ReviewsController = (app) => {
    const fetchReviews = (req, res) => {
      dao.findAllReviews()
      .then(result => res.json(result));
    }

    const fetchProductReviews = (req, res) => {
      dao.findProductReviews(req.params["productId"])
      .then(result => res.json(result));
    }
  
    const addProductReview = (req, res) => {
      const review = {
        product_id: req.body.productId,
        username: req.body.username,
        first: req.body.first,
        last: req.body.last,
        body: req.body.body,
        rating: req.body.rating
      };
  
      dao.addReview(review)
      .then(result => res.json(result));
    }

    app.get('/api/reviews', fetchReviews);
    app.get('/api/reviews/:productId', fetchProductReviews);
    app.post('/api/reviews/:productId', addProductReview)
  }

export default ReviewsController