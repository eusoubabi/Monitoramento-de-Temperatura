const http = require('http');
const fs = require('fs');
const path = require('path');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline'); // IMPORTADO!
const { WebSocketServer } = require('ws');

// === CONFIGURAÇÕES ===
const PORT_HTTP = 8080;
const SERIAL_PORT = 'COM4';
const BAUD_RATE = 9600;

// === SERVIDOR HTTP ===
const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'frontend', 'index.html');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Erro ao carregar index.html');
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(PORT_HTTP, () => {
  console.log(`Servidor HTTP rodando em http://localhost:${PORT_HTTP}`);
});

// === WEBSOCKET ===
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Cliente WebSocket conectado');
});

// === SERIAL COM COM PARSER ===
const port = new SerialPort({ path: SERIAL_PORT, baudRate: BAUD_RATE });
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

parser.on('data', (line) => {
  const cleanLine = line.trim();
  console.log("Linha completa recebida:", cleanLine);

  const match = cleanLine.match(/Temperatura Celsius:\s*([\d.]+)/);
  if (match) {
    const temp = match[1];
    console.log("Temperatura extraída:", temp);
    wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(temp);
      }
    });
  }
});
