import { Controller, Get,Delete,Post,Body,Param } from '@nestjs/common';
import {UsersService} from './shared/users.service'
import {User} from '../models/user'
@Controller('users')
export class UsersController {
    constructor(private user:UsersService){}
    @Post()
    async create(@Body() user:User):Promise<User>{
        console.log(user,'ddd')
        return this.user.create(user);
    }
    @Get()
    async getAll():Promise<User[]>{
        return this.user.findAll();
    }
    @Get(':id')
    async getById(@Param('id') id:string):Promise<User>{
        return this.user.findOne(id)
    }
    @Delete(':id')
    async deleteById(@Param('id') id:string):Promise<void>{
        return this.user.remove(id)
    }
}
