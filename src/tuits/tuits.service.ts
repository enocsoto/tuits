import { Injectable, NotFoundException } from '@nestjs/common';
import { tuitEntity } from './tuit.entity';

@Injectable()
export class TuitsService {
    private tuits: tuitEntity[] = [
        {
            id: "1",
            message: "Hello world from nestJs "
        }
    ];

    getTuits(): tuitEntity[] {
        return this.tuits;
    }

    getTuit(id: string): tuitEntity {
        const tuit = this.tuits.find((item) => item.id === id);

        if(!tuit) throw new NotFoundException(`Resource not Found`);

        return tuit;
    }

    createTuit(message: string){
        this.tuits.push({
            id: (Math.floor(Math.random()*2000) + 1 ).toString(),
            message,
        });
    }
    updateTuit(id: string, message: any){
        const tuit : tuitEntity = this.getTuit(id);
        tuit.message = message;
        return tuit;
    }
    
    removeTuit(id: string){
        const index = this.tuits.findIndex((tuit)=> tuit.id === id);
        if(index >= 0) this.tuits.splice(index, 1);
    }
    

}
