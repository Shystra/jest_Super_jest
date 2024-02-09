import express, { Application } from 'express';


class App {
    private app: Application
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true}));
    }

    routes(){
        this.app.use('/', (req, resp) => {
            return resp.json({ ok: true })
        })
    }

    listen(port:number){
        this.app.listen(port, () => {
            console.log('Server is running')
        })
    }
}

export {App}