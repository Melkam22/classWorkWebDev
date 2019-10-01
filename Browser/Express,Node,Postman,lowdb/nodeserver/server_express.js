//server created using express, & gives back inf'n to clients
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const querystring = require('querystring');
const urlencodeParser = bodyParser.urlencoded({ extended: false });//middleware
//to get jsonfile from the body, based on route change, ajax request, jqueryCDN
const jsonParser = bodyParser.json();



//this is middleware, to be able to use the styles.css on separate page
app.use('/css', express.static(__dirname + '/public/css'))
app.use('/', (req, res, next) => {//we can choose the router we like for cookies
    res.cookie('cookiename', 'cookievalue')//to put cookies on application
    next()
})

//if only localhost; '/' is typed on the browser the bellow data ll be send
app.get('/', (req, res) => {
    res.send(`
    <html>
    <head>
        <link type="text/css" rel="stylesheet" href="/css/styles.css">
    </head>
    <body>
        Hello world!
    </body>
    </html>
    `)
});
//linking the form on html, with data&server, when user is written on browser 
app.get('/user', (req, res) => {
    let HTML = fs.readFileSync(`${__dirname}/querystring.html`)
    res.send(`${HTML}`);
})


app.get('/user_post', (req, res) => {
    let HTML = fs.readFileSync(`${__dirname}/jsonpost.html`)
    res.send(`${HTML}`);
})

app.post('/enteruser', urlencodeParser, (req, res) => {//middleware urlencodeParser
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    res.sendStatus(200);//successful submit message 
})//every submit click it ll get the inf'n from html & pass it

//to allow routing
app.post('/enteruser_post', jsonParser, (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
})


//if after localhost; '/api/user' is typed on the browser the bellow data ll be send
app.get('/api/user', (req, res) => {
    res.send({
        name: 'Melkam',
        residences: ['apartment', 'villa', 'castle', 'shared flat']
    })
})

//on terminal, to route through using userName, id etc.
app.get('/api/:user/:id', (req, res) => {
    let givenUser = req.params.user;//targeting user on app.get
    let id = req.params.id;
    res.send(`
    <html>
    <body>
        The userName is: ${givenUser} & the user id is: ${id}
    </body>
    </html>
    `)
})

const port = process.env.PORT || 3000;//for deployment, ex: heroku
app.listen(port);