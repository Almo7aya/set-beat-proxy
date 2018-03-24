const app = require('express')();
const proxy = require('http-proxy-middleware');
const cros = require('cors');

const port = process.env.PORT || 3000;

const setBeatAPIUrl = 'https://api-beta.setbeat.com/v1/';

app.use(cros());

app.use('/', proxy({
    target: setBeatAPIUrl,
    changeOrigin: true
}));

app.listen(port, () => console.log('the server is running at port =>' + port));