import fs from 'fs';
import http from 'http';
import WebSocket from 'ws';
 
const server = http.createServer();
const wss = new WebSocket.Server({ server });
 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  ws.send('something');
});
 
server.listen(8080, () => console.log('listening on ws://localhost:8080'));

