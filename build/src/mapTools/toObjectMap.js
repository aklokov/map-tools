"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectMap_1 = require("../objectMap");
function toObjectMap(map) {
    const result = objectMap_1.create();
    for (let [key, val] of map) {
        result[key] = val;
    }
    return result;
}
exports.toObjectMap = toObjectMap;
//# sourceMappingURL=toObjectMap.js.map