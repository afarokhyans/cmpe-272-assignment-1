'use strict';


const http = require('http');

// env vars.
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

// Always sending the same response
http.createServer((req, res) => {

  // Tell the browser what’s coming.
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
  });

  
  //res.write('<h1>I’m a Node app!</h1>');
  res.write('<p>Hello, welcome to the Web Server of team [team_name]</p>');
  res.end();
}).listen(port, host);

// This message prints in the console when the app starts.
//console.log(`App running at http://${host}:${port}`);
