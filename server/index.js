require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const rootRouter = require('./routers/root-router');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', rootRouter);


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