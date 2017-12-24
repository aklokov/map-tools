"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function map(array, keySelector, valSelector) {
    if (!array) {
        return new Map();
    }
    return valSelector ? valuesMap(array, keySelector, valSelector) : itemsMap(array, keySelector);
}
exports.map = map;
function itemsMap(array, keySelector) {
    const result = new Map();
    for (let item of array) {
        result.set(keySelector(item), item);
    }
    return result;
}
function valuesMap(array, keySelector, valSelector) {
    const result = new Map();
    for (let item of array) {
        result.set(keySelector(item), valSelector(item));
    }
    return result;
}
//# sourceMappingURL=map.js.map