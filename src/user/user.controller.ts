import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/creatUser.dto";
import { UserService } from "./user.service";

@Controller('/users')

export class UserController{
constructor( private userService: UserService){}

    @Post()
    async createUser(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto)
    }
    
    @Get()
    async findAllUsers() {
        return this.userService.findAllUsers()
    }
}