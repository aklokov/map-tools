"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function merge(first, second) {
    const result = new Map();
    for (let item of first) {
        result.set(item[0], item[1]);
    }
    for (let item of second) {
        result.set(item[0], item[1]);
    }
    return result;
}
exports.merge = merge;
//# sourceMappingURL=merge.js.map