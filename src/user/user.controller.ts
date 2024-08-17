import { Controller, Get, Query } from '@nestjs/common';
import {
  GetOptionPipeTransfrom,
  GetOptionsDto,
  GetUsersDto,
  GetUsersPipeTransfrom,
} from './dto/get-users.dto'; // Kita akan membuat DTO ini selanjutnya
import { User } from './user.interface';
import userDummy from './user.dummy';
import { getNestedProperyValue } from '../utils';

@Controller('user')
export class UserController {
  private readonly dummyUsers: User[] = userDummy;

  @Get()
  getUsers(@Query(GetUsersPipeTransfrom) query: GetUsersDto) {
    const { page, limit, search, country, minAge, maxAge, sortBy, sortOrder } =
      query;

    let filteredUsers = this.dummyUsers;

    if (search) {
      const lowerCaseSearch = search.toLowerCase();
      filteredUsers = this.dummyUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(lowerCaseSearch) ||
          user.email.toLowerCase().includes(lowerCaseSearch) ||
          user.address.city.toLowerCase().includes(lowerCaseSearch) ||
          user.address.country.toLowerCase().includes(lowerCaseSearch),
      );
    }

    if (country) {
      filteredUsers = filteredUsers.filter((user) =>
        JSON.parse(country).some((c: string) => c == user.address.country),
      );
    }

    if (minAge) {
      filteredUsers = filteredUsers.filter((user) => user.age >= minAge);
    }

    if (maxAge) {
      filteredUsers = filteredUsers.filter((user) => user.age <= maxAge);
    }

    if (sortBy) {
      filteredUsers.sort((a, b) => {
        const comparison = String(
          getNestedProperyValue(a, sortBy),
        ).localeCompare(b[sortBy]);
        return sortOrder == 1 ? comparison : -comparison;
      });
    } else {
      filteredUsers.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }

    const startIndex = limit && page ? (page - 1) * limit : 0;
    const endIndex = limit && page ? startIndex + limit : undefined;

    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

    return {
      data: paginatedUsers,
      totalRecords: filteredUsers.length, // Total setelah filter
    };
  }

  @Get('options')
  getCountryOptions(@Query(GetOptionPipeTransfrom) query: GetOptionsDto) {
    const { country } = query;
    const countries = new Set(
      this.dummyUsers.map((user) => user.address.country),
    );

    const countryOptions = country
      ? Array.from(countries).map((c) => ({
          label: c,
          value: c,
        }))
      : [];

    return {
      data: {
        country: countryOptions,
      },
    };
  }
}
