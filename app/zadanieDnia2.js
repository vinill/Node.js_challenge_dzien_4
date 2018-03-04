//Twój kod

const http = require('http');

const srv = http.createServer((req, res) => {
    const user_agent = req.headers['user-agent'];
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(user_agent);
});

srv.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});