import * as http from "http"
import * as fs from "fs/promises";

let indexFile;

export default function StartServer (){
    const host = "localhost";
    const port = 8000;
    const requestListener = function (req, res) {
        res.writeHead(200);
        res.end(indexFile)
    };
    const server = http.createServer(requestListener);
    fs.readFile("./static/html/index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    });
}