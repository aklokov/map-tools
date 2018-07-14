"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloneMap_1 = require("./cloneMap");
function toMap(array, keySelector, valSelector) {
    const resultMap = new Map();
    if (!array) {
        return resultMap;
    }
    return valSelector ? valuesMap(resultMap, array, keySelector, valSelector) : itemsMap(resultMap, array, keySelector);
}
exports.toMap = toMap;
function addToMap(map, array, keySelector, valSelector) {
    const resultMap = cloneMap_1.cloneMap(map);
    if (!array) {
        return resultMap;
    }
    return valSelector ? valuesMap(resultMap, array, keySelector, valSelector) : itemsMap(resultMap, array, keySelector);
}
exports.addToMap = addToMap;
function itemsMap(map, array, keySelector) {
    for (let item of array) {
        map.set(keySelector(item), item);
    }
    return map;
}
function valuesMap(map, array, key, val) {
    for (let item of array) {
        map.set(key(item), val(item));
    }
    return map;
}
//# sourceMappingURL=toMap.js.map