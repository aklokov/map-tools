"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("./create");
function map(array, keySelector, valSelector) {
    if (!array) {
        return create_1.create();
    }
    return valSelector ? valuesMap(array, keySelector, valSelector) : itemsMap(array, keySelector);
}
exports.map = map;
function valuesMap(array, keySelector, valSelector) {
    const result = create_1.create();
    for (let item of array) {
        result[keySelector(item)] = valSelector(item);
    }
    return result;
}
exports.valuesMap = valuesMap;
function itemsMap(array, keySelector) {
    const result = create_1.create();
    for (let item of array) {
        result[keySelector(item)] = item;
    }
    return result;
}
exports.itemsMap = itemsMap;
//# sourceMappingURL=map.js.map