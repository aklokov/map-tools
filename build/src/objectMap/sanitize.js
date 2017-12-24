"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_tools_1 = require("@vlr/object-tools");
function sanitize(obj) {
    if (Array.isArray(obj)) {
        return obj.map(item => sanitize(item));
    }
    if (object_tools_1.isObject(obj)) {
        const result = object_tools_1.nullObject();
        object_tools_1.forIn(obj, (value, field) => result[field] = sanitize(value));
        return result;
    }
    return obj;
}
exports.sanitize = sanitize;
//# sourceMappingURL=sanitize.js.map