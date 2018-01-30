"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloneMap_1 = require("./cloneMap");
function merge(first, second) {
    const result = cloneMap_1.cloneMap(first);
    if (!second) {
        return result;
    }
    for (let item of second) {
        result.set(item[0], item[1]);
    }
    return result;
}
exports.merge = merge;
//# sourceMappingURL=merge.js.map