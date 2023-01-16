// Server Class
import express from 'express';

export class App_Server{
    private server: express.Application;

    constructor (private PORT?: number | string){
        this.server = express();
        this.server.set('PORT', this.PORT || process.env.PORT || 3000);
        
    }

    listen(){
        this.server.listen(this.server.get('PORT'), ()=>
            console.log('Server on port', this.server.get('PORT')))
    }
}
