import * as express from 'express';
import * as bodyparser from 'body-parser';

import database from './database';
import controller from '../services/controller';

class App {
    public app: express.Application;
    private db: database;
    private controller: controller;

    constructor(){
        this.app = express();
        this.middleware();
        this.db = new database();
        this.db.createConnection();
        this.controller = new controller; 

        this.routes();
    }

    middleware(){
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({ extended: true }));
    }

    routes(){
        this.app.route('/').get((req, resp) => resp.status(200).json({ 'message': 'Hello world'}) )
        
        //Criar novo crush
        this.app.route('/api/crushes').post((req, resp) => this.controller.insert(req, resp));
        
        //Editar um crush pelo ID
        this.app.route('/api/crushes/:id').put((req, resp) => this.controller.update(req, resp));
        
        //Listar crushes
        this.app.route('/api/crushes').get((req, resp) => this.controller.select(req, resp));
        
        //Listar um crush pelo ID
        this.app.route('/api/crushes/:id').get((req, resp) => this.controller.selectOne(req, resp));
        
        //Deletar um crush pelo ID
        this.app.route('/api/crushes/:id').delete((req, resp) => this.controller.delete(req, resp));
    }
}


export default new App();