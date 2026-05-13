const https = require('https');

https.get('https://share.google/n2sLNXrtXlSh2IA1W', (res) => {
  console.log('Location1:', res.headers.location);
}).on('error', (e) => {
  console.error(e);
});

https.get('https://maps.app.goo.gl/n2sLNXrtXlSh2IA1W', (res) => {
  console.log('Location2:', res.headers.location);
}).on('error', (e) => {
  console.error(e);
});
