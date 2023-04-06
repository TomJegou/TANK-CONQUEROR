import express from 'express';
import request from 'request'

const host = "localhost";
const app = express();
const port = 8000;
const urlFilserver = `http://${host}:5000/`

export default function StartServer (){
    app.get('/', (req, res) => {
        req.pipe(request(`${urlFilserver}static/html/index.html`)).pipe(res)
    });
    app.listen(port, ()=>{
        console.log(`Server listening on http://${host}:${port}`)
    });
}