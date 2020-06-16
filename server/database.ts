import * as mongoose from 'mongoose';

class Database {
    private dburl = 'mongodb://127.0.0.1/api-crushes';
    private dbconnection;

    constructor(){

    }

    createConnection(){
        mongoose.connect(this.dburl, { useUnifiedTopology: true , useNewUrlParser: true, useCreateIndex: true });
        this.logger(this.dburl); 
    }

    logger(uri){
        this.dbconnection = mongoose.connection;
        this.dbconnection.on('connected', () => console.log('Mongoose está conectado'));
        this.dbconnection.on('error', error => console.error.bind(console, 'Erro na conexão:' + error));
    }

}

export default Database;