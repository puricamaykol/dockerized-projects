const express = require('express')
const app = express()
const port = 8080

let address = '';
const os = require('os');
const ifaces = os.networkInterfaces();

for (let dev in ifaces) {
  let iface = ifaces[dev].filter(function (details) {
    return details.family === 'IPv4' && details.internal === false;
  });
  if (iface.length > 0) address = iface[0].address;
}

app.get('/*', (_, res) => {
  res.send(`Hello World!, ${address}`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
