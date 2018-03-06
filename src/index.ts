require('http')
    .createServer((req, res) => res.end('hello'))
    .listen(3000, () => console.log('bind 3000'))