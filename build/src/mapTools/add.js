"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloneMap_1 = require("./cloneMap");
function add(map, newKey, newVal) {
    const result = cloneMap_1.cloneMap(map);
    result.set(newKey, newVal);
    return result;
}
exports.add = add;
//# sourceMappingURL=add.js.map