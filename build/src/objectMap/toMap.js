"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toMap(map) {
    const result = new Map();
    for (let field in map) {
        if (map.hasOwnProperty(field)) {
            result.set(field, map[field]);
        }
    }
    return result;
}
exports.toMap = toMap;
//# sourceMappingURL=toMap.js.map