import express from 'express';
import request from 'request';

const host = "localhost";
const app = express();
const port = 8000;
const urlFilserver = `http://fileserver:5000/`;

export default function StartServer (){
    app.use(express.static('./public'))

    app.get('/', (req, res) => {
        req.pipe(request(`${urlFilserver}index.html`)).pipe(res);
    });

    app.get('/tuto', (req, res) => {
        res.send(`Welcome to tuto`)
    });

    app.get('/solo', (req, res) => {
        req.pipe(request(`${urlFilserver}menuIA.html`)).pipe(res)
    });

    app.get('/multi', (req, res) => {
        res.send(`Welcome to multi`)
    });

    app.listen(port, ()=>{
        console.log(`Server listening on http://${host}:${port}`);
    });
}