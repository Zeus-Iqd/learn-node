const http = require('http');

let server = http.createServer((req, res) => {
  // 向前台写东西
  res.write('abc')
  // 发送完了
  res.end()
  console.log('有人来了')
})

// 监听端口

server.listen(8080)