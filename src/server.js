import express from 'express';
import request from 'request';

const host = "localhost";
const app = express();
const port = 8000;
const urlFilserverHtml = `http://app:8000/html`;

export default function StartServer (){
    app.use(express.urlencoded({extended: true}));
    app.use(express.static('./public'));

    app.get('/', (req, res) => {
        req.pipe(request(`${urlFilserverHtml}/index.html`)).pipe(res);
    });

    app.get('/tutoMenu', (req, res) => {
        res.send(`Welcome to tuto`);
    });

    app.get('/soloMenu', (req, res) => {
        req.pipe(request(`${urlFilserverHtml}/menuIA.html`)).pipe(res);
    });

    app.get('/multiMenu', (req, res) => {
        res.send(`Welcome to multi`);
    });
    
    app.post('/menuIA-submit', (req, res) => {
        console.log(req.body)
        res.redirect('/soloGame')
    })

    app.get('/soloGame', (req, res) => {
        req.pipe(request(`${urlFilserverHtml}/soloGame.html`)).pipe(res);
    })

    app.listen(port, ()=>{
        console.log(`Server listening on http://${host}:${port}`);
    });
}