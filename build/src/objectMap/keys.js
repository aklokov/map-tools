"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_tools_1 = require("@vlr/object-tools");
function keys(map) {
    const result = [];
    object_tools_1.forIn(map, (value, key) => result.push(key));
    return result;
}
exports.keys = keys;
function nkeys(map) {
    const result = [];
    object_tools_1.forIn(map, (value, key) => result.push(+key));
    return result;
}
exports.nkeys = nkeys;
//# sourceMappingURL=keys.js.map