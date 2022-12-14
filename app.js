import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import UserController from './users/users-controller.js';
import ReviewController from './reviews/reviews-controller.js';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}

mongoose.connect('mongodb://localhost:27017/cs4550-fa22-final', options);

const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(session({
    secret: 'should be an environment variable',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(express.json())
UserController(app)
ReviewController(app)

app.listen(4000);     