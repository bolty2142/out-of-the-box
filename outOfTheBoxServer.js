/**
 * Created by beebe on 6/20/2017.
 */
`use strict`
const express = require(`express`),
    app = express(),
    bodyParser = require(`body-parser`),
    cors = require(`cors`),
    session = require(`express-session`),
    corsOptions = {origin: 'http://localhost:3001'},
    config = require(`./.config.js`);

app.use(cors(corsOptions));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.secret
}));
app.use(bodyParser(JSON));
app.use(express.static(`public`));
app.listen(3045,()=>console.log(`On The Line on 3045`));