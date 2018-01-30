"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extend_1 = require("./extend");
function add(map, newKey, newVal) {
    const newMap = extend_1.extend(map);
    newMap[newKey] = newVal;
    return newMap;
}
exports.add = add;
//# sourceMappingURL=add.js.map