"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNestedProperyValue = void 0;
const getNestedProperyValue = (object, property) => {
    const properties = property.split('.');
    return properties.reduce((o, p) => o?.[p], object);
};
exports.getNestedProperyValue = getNestedProperyValue;
//# sourceMappingURL=index.js.map