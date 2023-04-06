const express = require('express');
const app = express();
const host = "localhost";
const port = 5000;

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.send('Welcome to front-end server');
});


app.listen(port, ()=>{
    console.log(`Filserver is running on http://${host}:${port}`);
});