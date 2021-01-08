const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const userRoute = require('./routers/user');

mongoose.connect(process.env.DATABASES, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('DB CONNECTED');
});


const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
    return res.send('Hello World');
});

app.use('/api', userRoute);
 
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
console.log(`server is running at PORT: ${PORT}`);
})