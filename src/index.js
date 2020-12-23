/*MODULS*/
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

/*SETTINGS*/
app.set('App name', 'ApiRes Nodejs');
app.set('port', process.env.PORT || 5000);
app.set('viwes', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('json spaces', 2);

/*MILDDLEWARES */
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/*GET ROUTES*/
app.use(require('./routes/index.js'));
app.use(require('./routes/movies.js'));
app.use(require('./routes/usersapi.js'));






/*RUN SERVER*/
app.listen(app.get('port'), function () {
    console.log(app.get('App name'));
    console.log('Run in Port: ', app.get('port'));
});

