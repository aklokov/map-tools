"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_tools_1 = require("@vlr/object-tools");
function values(map) {
    const result = [];
    object_tools_1.forIn(map, value => result.push(value));
    return result;
}
exports.values = values;
//# sourceMappingURL=values.js.map