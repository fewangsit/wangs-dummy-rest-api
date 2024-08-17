import { PipeTransform } from '@nestjs/common';
export declare class GetUsersDto {
    sortBy?: string;
    sortOrder?: -1 | 1;
    page?: number;
    limit?: number;
    country?: string;
    minAge?: number;
    maxAge?: number;
    search?: string;
}
export declare class GetOptionsDto {
    country?: boolean;
}
export declare class GetOptionPipeTransfrom implements PipeTransform {
    transform(value: any): any;
}
export declare class GetUsersPipeTransfrom implements PipeTransform {
    transform(value: any): any;
}
