
// const http = require('http');
// const app = http.createServer((req, res) => {
//     res.write("Welcome");
//     res.end();
// })

const http = require('http');
const fsPromises = require('fs/promises')

const app = http.createServer(async (req, res) => {
    console.log(req.url)
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    const stream = await fsPromises.readFile('./Pages/index.html');
    res.end(stream);
})



const port = 3000
app.listen(3000);
console.log(`Port Started at ${port}`);