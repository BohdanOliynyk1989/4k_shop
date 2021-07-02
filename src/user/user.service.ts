import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schema/user.schema";
import { Model } from 'mongoose';
import { CreateUserDto } from "./dto/creatUser.dto";
import { UserDto }  from "./dto/user.dto";
import { toUserDto } from "./shared/mapper";
import { LoginUserDto } from "./dto/loginUser.dto";

@Injectable()

export class UserService{
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async createUser(userDto: CreateUserDto): Promise<UserDto> {    
        const { username } = userDto;
        
        // check if the user exists in the db    
        const userInDb = await this.userModel.find({ username });
        if (userInDb) {
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);    
        }
        
        const user = new this.userModel(userDto);
        await user.save();
        return toUserDto(user);  
    }
    
    async findAllUsers(): Promise<User[]> {
        return this.userModel.find().exec();
    }
    async findOneUsers(options?: object): Promise<UserDto> {
        const user = await this.userModel.findOne(options);
        return toUserDto(user);
    }

    async findByLogin({ username, password }: LoginUserDto): Promise<UserDto> {    
        const user = await this.userModel.findOne({ where: { username } });
        
        if (!user) {
            throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);    
        }
        
        // compare passwords    
        
        if (user.password !== password) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);    
        }
        
        return toUserDto(user);  
    }

    async findByPayload({ username }: any): Promise<UserDto> {
        const user = await this.userModel.findOne({ where:  { username } });  
        return toUserDto(user);
    }
}