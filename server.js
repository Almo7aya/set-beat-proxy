const app = require('express')();
const proxy = require('http-proxy-middleware');

const port = process.env.PORT || 3000;

const setBeatAPIUrl = 'http://api-beta.setbeat.com/v1/';

app.use('/', proxy({
    target: setBeatAPIUrl
}));


app.listen(port, () => console.log('the server is running' + port));