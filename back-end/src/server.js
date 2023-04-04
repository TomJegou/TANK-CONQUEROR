import * as http from "http"

export default function StartServer (){
    const host = "localhost";
    const port = 8000;
    const requestListener = function (req, res) {
        res.writeHead(200);
        res.end("Server back-end")
    };
    const server = http.createServer(requestListener);
    server.listen(port, host, () => {
        console.log(`Server is running on http://${host}:${port}`);
    });
}