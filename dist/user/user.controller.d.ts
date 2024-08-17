import { GetOptionsDto, GetUsersDto } from './dto/get-users.dto';
import { User } from './user.interface';
export declare class UserController {
    private readonly dummyUsers;
    getUsers(query: GetUsersDto): {
        data: User[];
        totalRecords: number;
    };
    getCountryOptions(query: GetOptionsDto): {
        data: {
            country: {
                label: string;
                value: string;
            }[];
        };
    };
}
