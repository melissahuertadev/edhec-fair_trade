const express = require('express');
const app = express();
const path = require('path');
const indexRoute = require('./routes/index');

//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares

//routes
app.use(indexRoute);

//static files

//listenigng the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});