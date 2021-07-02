import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/creatUser.dto';
import { LoginUserDto } from 'src/user/dto/loginUser.dto';
import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';

export interface RegistrationStatus {  
    success: boolean;  
    message: string;
}

export interface JwtPayload {  username: string;}

@Injectable()

export class AuthService {
    
    constructor(private readonly usersService: UserService, private readonly jwtService: JwtService,  ) {}

    async register(userDto: CreateUserDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
        success: true,   
        message: 'user registered',
        };
    try {
        await this.usersService.createUser(userDto);
    } catch (err) {
        status = {
            success: false,        
            message: err,
        };    
    }
    return status;  
}

async login(loginUserDto: LoginUserDto): Promise<any> {    
    // find user in db    
    const user = await this.usersService.findByLogin(loginUserDto);
    
    // generate and sign token    
    const token = this._createToken(user);
    
    return {
        username: user.username, ...token,    
    };  
}

private _createToken({ username }: UserDto): any {
    const user: JwtPayload = { username };    
    const accessToken = this.jwtService.sign(user);    
    return {
        expiresIn: process.env.EXPIRESIN,
        accessToken,    
    };  
}

async validateUser(payload: JwtPayload): Promise<UserDto> {
    const user = await this.usersService.findByPayload(payload);    
    if (!user) {
        throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);    
    }    
    return user;  
}

}
