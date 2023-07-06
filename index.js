//  const http = require('http');  // important for creating API
// const data = require('./data');

//  http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application\json'});  //to send data
//     resp.write(JSON.stringify(data));
//     resp.end();

//  }).listen(5000)

const express = require('express');
const app = express();

app.get('',(req,resp)=>{
    resp.send(`
    Hello, this is home page.<a href="/about"/>Go to about page</a>
    `);
})

app.get('/about',(req,resp)=>{
    resp.send(`
    Hello, this is About us.<a href="/"/>Go to Home page</a>`
    );
})

app.get('/help',(req,resp)=>{
    resp.send("Hello, this is Help us.");
})

app.listen(5000);
