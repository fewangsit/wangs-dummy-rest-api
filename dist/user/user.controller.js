"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const get_users_dto_1 = require("./dto/get-users.dto");
const user_dummy_1 = require("./user.dummy");
const utils_1 = require("../utils");
let UserController = class UserController {
    constructor() {
        this.dummyUsers = user_dummy_1.default;
    }
    getUsers(query) {
        const { page, limit, search, country, minAge, maxAge, sortBy, sortOrder } = query;
        let filteredUsers = this.dummyUsers;
        if (search) {
            const lowerCaseSearch = search.toLowerCase();
            filteredUsers = this.dummyUsers.filter((user) => user.name.toLowerCase().includes(lowerCaseSearch) ||
                user.email.toLowerCase().includes(lowerCaseSearch) ||
                user.address.city.toLowerCase().includes(lowerCaseSearch) ||
                user.address.country.toLowerCase().includes(lowerCaseSearch));
        }
        if (country) {
            filteredUsers = filteredUsers.filter((user) => JSON.parse(country).some((c) => c == user.address.country));
        }
        if (minAge) {
            filteredUsers = filteredUsers.filter((user) => user.age >= minAge);
        }
        if (maxAge) {
            filteredUsers = filteredUsers.filter((user) => user.age <= maxAge);
        }
        if (sortBy) {
            filteredUsers.sort((a, b) => {
                const comparison = String((0, utils_1.getNestedProperyValue)(a, sortBy)).localeCompare(b[sortBy]);
                return sortOrder == 1 ? comparison : -comparison;
            });
        }
        else {
            filteredUsers.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
        }
        const startIndex = limit && page ? (page - 1) * limit : 0;
        const endIndex = limit && page ? startIndex + limit : undefined;
        const paginatedUsers = filteredUsers.slice(startIndex, endIndex);
        return {
            data: paginatedUsers,
            totalRecords: filteredUsers.length,
        };
    }
    getCountryOptions(query) {
        const { country } = query;
        const countries = new Set(this.dummyUsers.map((user) => user.address.country));
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
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)(get_users_dto_1.GetUsersPipeTransfrom)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_users_dto_1.GetUsersDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('options'),
    __param(0, (0, common_1.Query)(get_users_dto_1.GetOptionPipeTransfrom)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_users_dto_1.GetOptionsDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getCountryOptions", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user')
], UserController);
//# sourceMappingURL=user.controller.js.map