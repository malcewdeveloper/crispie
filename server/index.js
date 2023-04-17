require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user-routes')

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use('/api', userRouter);


const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    }catch(error) {
        console.log(error);
    }
}
start();