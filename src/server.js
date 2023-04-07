import express from 'express';
import request from 'request';

const host = "localhost";
const app = express();
const port = 8000;
const urlFilserverHtml = `http://app:8000/html`;

export default function StartServer (){
    app.use(express.static('./public'));

    app.get('/', (req, res) => {
        req.pipe(request(`${urlFilserverHtml}/index.html`)).pipe(res);
    });

    app.get('/tuto', (req, res) => {
        res.send(`Welcome to tuto`);
    });

    app.get('/solo', (req, res) => {
        req.pipe(request(`${urlFilserverHtml}/menuIA.html`)).pipe(res);
    });

    app.get('/multi', (req, res) => {
        res.send(`Welcome to multi`);
    });

    app.listen(port, ()=>{
        console.log(`Server listening on http://${host}:${port}`);
    });
}