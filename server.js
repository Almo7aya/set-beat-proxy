const app = require('express')();
const proxy = require('http-proxy-middleware');
const cros = require('cors');

const port = process.env.PORT || 3000;

const setBeatAPIUrl = 'https://api-beta.setbeat.com';

app.get('/', (req, res) => {
    res.end('working');
});

app.use('/v1', proxy({
    target: setBeatAPIUrl,
    changeOrigin: true
}));

app.use(cros());

app.listen(port, () => console.log('the server is running at port =>' + port));