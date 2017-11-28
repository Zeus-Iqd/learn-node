const http = require('http');

let server = http.createServer((req, res) => {
  console.log('有人来了')
})

// 监听端口

server.listen(8080)