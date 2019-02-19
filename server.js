const express = require('express');
const app = express();
const hbs = require('hbs');



app.use(express.static(__dirname + '/public'));
//express hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


require('./hbs/helpers');

const port = process.env.PORT || 3000;






app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'maxmiliano'
    });

});
app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'maximiliano'
    });

});

app.listen(port, () => {
    console.log(`escuchando peticiones en el puerto ${port}`);
});