"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toEs6Map(map) {
    const result = new Map();
    for (let field in map) {
        if (map.hasOwnProperty(field)) {
            result.set(field, map[field]);
        }
    }
    return result;
}
exports.toEs6Map = toEs6Map;
//# sourceMappingURL=toEs6Map.js.map