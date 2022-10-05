import express from 'express';
import http from 'http';
import WebSocket from 'ws';

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => res.render('home'));
app.get('/*', (req, res) => res.redirect('/'));

const server = http.createServer(app);
server.listen(3000, () => {
    console.log('Listening on http:3000');
});

const wss = new WebSocket.Server({ server });
const sockets = [];

wss.on('connection', (socket) => {
  socket.nickname = 'Anon';
  sockets.push(socket);
  socket.on('message', (jsonStr) => {
    const { type, payload } = JSON.parse(jsonStr);
    switch (type) {
      case 'nickname':
        socket.nickname = payload;
        break;
      case 'message':
        const message = `${socket.nickname}: ${payload}`;
        sockets.forEach((s) => s.send(message));
        break;
    }
  });
});