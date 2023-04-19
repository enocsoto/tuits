import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TuitsService } from './tuits.service';
import { tuitEntity } from './tuit.entity';


@Controller('tuits')
export class TuitsController {
    
    constructor(
        private readonly tuitService: TuitsService
    ){}
    @Get()
    getTuits(@Query() filterQuery): tuitEntity[] {
        const {orderBy, searchTerm } = filterQuery;
        return this.tuitService.getTuits();
    }
    @Get(':id')
    getTuit(@Param('id') id: string): tuitEntity {
        return this.tuitService.getTuit(id);
    }

    @Post()
    createTuit(@Body('message') message: string) {
        return this.tuitService.createTuit(message);
    }

    @Patch(':id')
    updateTuit(
        @Param('id') id: string,
        @Body('message') tuit): tuitEntity {
        return this.tuitService.updateTuit(id, tuit);
    }

    @Delete(':id')
    removeTuit(@Param('id') id: string): void {
        return this.tuitService.removeTuit(id)
    }
}
