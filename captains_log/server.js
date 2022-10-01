//const { append } = require('dom/lib/mutation');
const express = require('express');
const methodOverride = require('method-override');
const mongoConfig = require('./config')

require('dotenv').config()

const app = express();

const logRoutes = require('./routes/logRoutes')
const logs = require('./models/logs')




const port = process.env.PORT;



app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static(__dirname + '/public'));
//MiddleWare
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))
app.use(methodOverride("_method"))
app.use(express.json())
app.use('/logs', logRoutes)










app.listen(port, () =>{console.log('Listening on port:', port)})


mongoConfig();