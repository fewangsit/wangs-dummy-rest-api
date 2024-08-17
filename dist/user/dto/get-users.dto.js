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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsersPipeTransfrom = exports.GetOptionPipeTransfrom = exports.GetOptionsDto = exports.GetUsersDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const common_1 = require("@nestjs/common");
class GetUsersDto {
}
exports.GetUsersDto = GetUsersDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetUsersDto.prototype, "sortBy", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetUsersDto.prototype, "sortOrder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetUsersDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetUsersDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetUsersDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GetUsersDto.prototype, "minAge", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], GetUsersDto.prototype, "maxAge", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetUsersDto.prototype, "search", void 0);
class GetOptionsDto {
}
exports.GetOptionsDto = GetOptionsDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], GetOptionsDto.prototype, "country", void 0);
let GetOptionPipeTransfrom = class GetOptionPipeTransfrom {
    transform(value) {
        for (const key in value) {
            value[key] = value[key] === 'true';
        }
        return value;
    }
};
exports.GetOptionPipeTransfrom = GetOptionPipeTransfrom;
exports.GetOptionPipeTransfrom = GetOptionPipeTransfrom = __decorate([
    (0, common_1.Injectable)()
], GetOptionPipeTransfrom);
let GetUsersPipeTransfrom = class GetUsersPipeTransfrom {
    transform(value) {
        if (value.minAge) {
            value.minAge = parseInt(value.minAge);
        }
        if (value.maxAge) {
            value.maxAge = parseInt(value.maxAge);
        }
        return value;
    }
};
exports.GetUsersPipeTransfrom = GetUsersPipeTransfrom;
exports.GetUsersPipeTransfrom = GetUsersPipeTransfrom = __decorate([
    (0, common_1.Injectable)()
], GetUsersPipeTransfrom);
//# sourceMappingURL=get-users.dto.js.map