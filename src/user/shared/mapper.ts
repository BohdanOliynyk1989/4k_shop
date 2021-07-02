import { UserDto } from "../dto/user.dto";

export const toUserDto = (data) => {  
    const { id, username, email } = data;
    let userDto: UserDto = { id, username, email };
    return userDto;
};