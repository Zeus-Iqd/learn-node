const http = require('http');

let server = http.createServer((req, res) => {
  switch(req.url){
    case '/1.html':
    res.write('111111111')
    break;
    case '/2.html':
    res.write('222222');
    break;
    default:
    res.write('404');
    break;
  }
  res.end();
})

// 监听端口

server.listen(8080)