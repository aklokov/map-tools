"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function merge(first, second) {
    const result = new Map(first);
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