import express, { json } from 'express';
import cors from 'cors';
import router from '../routes';

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
        this.app.use( json() );
    }

    routes() {
        this.app.use( this.indexPath, router('../routes/index'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`App listening on port ${ this.port }!`)
        });
    }
}

export default Server;
