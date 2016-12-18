var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'pug', {pretty: true});

app.use(function(req, res, next){
    if (req.headers['x-forwarded-proto'] === 'https'){
        res.redirect('http://' + req.hostname + req.url);
    }else{
        next();
    }
});

app.get('/', function(req, res){
    res.render('index');
});

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('Timer App listening on port ' + PORT);
});
