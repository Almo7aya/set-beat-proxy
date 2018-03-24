const app = require('express')();

const port = process.env.PORT || 443;


app.get('/', (req, res) => {
    res.end('DONE');
});

app.listen(port, () => console.log('the server is running'));