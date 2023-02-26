const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.indexPath = '/';

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
    }

    routes() {
        this.app.use( this.indexPath, require('../routes'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`App listening on port ${ this.port }!`)
          });
    }
}

module.exports = Server;