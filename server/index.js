const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello postgress + nodejs');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});