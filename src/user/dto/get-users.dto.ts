// ./dto/get-users.dto.ts
import { IsOptional, IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { Injectable, PipeTransform } from '@nestjs/common';

export class GetUsersDto {
  @IsOptional()
  @IsString()
  sortBy?: string; // Kolom untuk sorting (misalnya: 'name', 'email')

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  sortOrder?: -1 | 1; // Urutan sorting (naik atau turun)

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  page?: number; // Nomor halaman untuk pagination

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  limit?: number; // Jumlah data per halaman

  @IsOptional()
  @IsString()
  country?: string; // Filter berdasarkan country

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  minAge?: number; // Filter berdasarkan age

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  maxAge?: number; // Filter berdasarkan age

  @IsOptional()
  @IsString()
  search?: string; // Pencarian teks pada beberapa kolom
}

export class GetOptionsDto {
  @IsOptional()
  country?: boolean;
}

@Injectable()
export class GetOptionPipeTransfrom implements PipeTransform {
  transform(value: any) {
    for (const key in value) {
      value[key] = value[key] === 'true';
    }

    return value;
  }
}

@Injectable()
export class GetUsersPipeTransfrom implements PipeTransform {
  transform(value: any) {
    if (value.minAge) {
      value.minAge = parseInt(value.minAge);
    }

    if (value.maxAge) {
      value.maxAge = parseInt(value.maxAge);
    }

    return value;
  }
}
