import * as express from 'express';

class App {
    public app: express.Application;

    constructor(){
        this.app = express();
        this.routes();
    }

    routes(){
        this.app.route('/').get((req, resp) => resp.status(200).json({ 'message': 'Hello world'}) )
    }
}

export default new App();