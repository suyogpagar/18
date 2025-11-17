const http = require("http");


const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.url === "/") {
        res.end("Welcome to My College");
    } else if (req.url === "/about") {
        res.end("This is the About Page of My College");
    } else if (req.url === "/contact") {
        res.end("Contact us at: contact@mycollege.com");
    } else {
        res.end("404 Page Not Found");
    }
});


server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});