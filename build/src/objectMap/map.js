"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_tools_1 = require("@vlr/object-tools");
function map(array, keySelector, valSelector) {
    if (!array) {
        return object_tools_1.nullObject();
    }
    return valSelector ? valuesMap(array, keySelector, valSelector) : itemsMap(array, keySelector);
}
exports.map = map;
function valuesMap(array, keySelector, valSelector) {
    const result = object_tools_1.nullObject();
    for (let item of array) {
        result[keySelector(item)] = valSelector(item);
    }
    return result;
}
exports.valuesMap = valuesMap;
function itemsMap(array, keySelector) {
    const result = object_tools_1.nullObject();
    for (let item of array) {
        result[keySelector(item)] = item;
    }
    return result;
}
exports.itemsMap = itemsMap;
//# sourceMappingURL=map.js.map