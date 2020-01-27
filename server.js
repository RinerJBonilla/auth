const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();

mongoose.connect(process.env.DBCONNECT,
 { useNewUrlParser: true,
   useUnifiedTopology: true },
 () => console.log('yay'));

//middle
app.use(express.json());

app.use('/user',authRoute);
app.use('/posts',postRoute);


app.listen(3000, () => console.log('Server running...'));

