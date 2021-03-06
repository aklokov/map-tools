"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toGroup(array, keySelector, valSelector) {
    if (!array) {
        return new Map();
    }
    return valSelector ? valuesLookup(array, keySelector, valSelector) : itemsLookup(array, keySelector);
}
exports.toGroup = toGroup;
function itemsLookup(array, keySelector) {
    const result = new Map();
    for (let item of array) {
        const key = keySelector(item);
        let list = result.get(key);
        if (!list) {
            result.set(key, list = []);
        }
        list.push(item);
    }
    return result;
}
function valuesLookup(array, keySelector, valSelector) {
    const result = new Map();
    for (let item of array) {
        const key = keySelector(item);
        let list = result.get(key);
        if (!list) {
            result.set(key, list = []);
        }
        list.push(valSelector(item));
    }
    return result;
}
//# sourceMappingURL=toGroup.js.map