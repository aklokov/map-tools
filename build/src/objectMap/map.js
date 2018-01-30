"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_tools_1 = require("@vlr/object-tools");
const extend_1 = require("./extend");
function map(array, keySelector, valSelector) {
    const resultMap = object_tools_1.nullObject();
    if (!array) {
        return resultMap;
    }
    return valSelector ? valuesMap(resultMap, array, keySelector, valSelector) : itemsMap(resultMap, array, keySelector);
}
exports.map = map;
function addMap(map, array, keySelector, valSelector) {
    const resultMap = extend_1.extend(map);
    if (!array) {
        return resultMap;
    }
    return valSelector ? valuesMap(resultMap, array, keySelector, valSelector) : itemsMap(resultMap, array, keySelector);
}
exports.addMap = addMap;
function valuesMap(resultMap, array, keySelector, valSelector) {
    for (let item of array) {
        resultMap[keySelector(item)] = valSelector(item);
    }
    return resultMap;
}
function itemsMap(resultMap, array, keySelector) {
    for (let item of array) {
        resultMap[keySelector(item)] = item;
    }
    return resultMap;
}
//# sourceMappingURL=map.js.map