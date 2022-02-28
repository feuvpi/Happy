//importar dependências
const express = require('express');
const path = require('path');
const pages = require('./pages')


//inicializando o express
const server = express();

    //utilizando body do req
    server
        .use(express.urlencoded({ extended: true }))
    //utilizando arquivos estaticos 
    server
        .use(express.static('public'));

    //configurar template engine 
    server
        .set('views', path.join(__dirname, 'views'))
        .set('view engine', 'hbs') 


//iniciar o servidor
server.listen(7000);


//criar uma rota
server
    .get('/', pages.index)
    .get('/orphanages', pages.orphanages)
    .get('/orphanage', pages.orphanage)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)