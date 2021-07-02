import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { CreateUserDto } from "src/user/dto/creatUser.dto";
import { LoginUserDto } from "src/user/dto/loginUser.dto";
import { AuthService } from "./auth.service";

export interface RegistrationStatus {
    success: boolean;
    message: string;
}

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    public async register(@Body() createUserDto: CreateUserDto): Promise<RegistrationStatus> {
        const result: RegistrationStatus = await this.authService.register(createUserDto);
        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
        }
        return result;
    }

    @Post('login')
    public async login(@Body() loginUserDto: LoginUserDto): Promise<any> {
        return await this.authService.login(loginUserDto);
    }
}