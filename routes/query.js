const app = require('express');
const service = require('../services');

module.exports = app => {

    app.get('/home', 

    )
    app.get('/podcast', arg => {
        return service.getPod(arg);
    });


    app.get('/youtube', arg => {

    });

}