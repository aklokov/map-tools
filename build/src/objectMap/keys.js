"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_tools_1 = require("@vlr/object-tools");
function keys(map) {
    const result = [];
    object_tools_1.forIn(map, (value, key) => result.push(key));
    return result;
}
exports.keys = keys;
function Nkeys(map) {
    const result = [];
    object_tools_1.forIn(map, (value, key) => result.push(+key));
    return result;
}
exports.Nkeys = Nkeys;
//# sourceMappingURL=keys.js.map