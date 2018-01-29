"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_tools_1 = require("@vlr/object-tools");
function toObjectMap(map) {
    const result = object_tools_1.nullObject();
    for (let [key, val] of map) {
        result[key] = val;
    }
    return result;
}
exports.toObjectMap = toObjectMap;
//# sourceMappingURL=toObjectMap.js.map