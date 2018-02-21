const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, 'googleindex.html'))
})

app.listen(PORT, function(){
    console.log(`App listening on PORT: ${PORT}`)
});