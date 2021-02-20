const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

function setDate() {
  return new Date().toISOString();
};

function gethLogs() {
  const command = shell.exec(
    `geth --exec "var count = net; console.log('peercount: ' + count.peerCount)" attach --datadir /media/rrs/crucialHD/new-geth`
  );
  const split = command.split('\n');
  return split[0];
};

async function log() {
  fs.appendFile(path.join(__dirname, 'log.txt'), gethLogs() + ' ' + setDate() + '\n', (err) => {
    if (err) throw err;
    logText = '';
  });
}

setInterval(log, 1000);