// Set express as Node.js web application
// server framework.
// To install express before using it as
// an application server by using
// "npm install express" command.
var express = require('express');
var app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
    res.render('pages/index');
    });

app.get('/about', (req, res)=>{
   res.render('pages/about');
    });
    
var server = app.listen(4013, function(){
        console.log('listining to port 4000')
});
    