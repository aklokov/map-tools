"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_tools_1 = require("@vlr/object-tools");
function lookup(array, keySelector, valSelector) {
    if (!array) {
        return object_tools_1.nullObject();
    }
    return valSelector ? valuesLookup(array, keySelector, valSelector) : itemsLookup(array, keySelector);
}
exports.lookup = lookup;
function valuesLookup(array, keySelector, valSelector) {
    const result = object_tools_1.nullObject();
    for (let item of array) {
        const key = keySelector(item);
        const list = result[key] || (result[key] = []);
        list.push(valSelector(item));
    }
    return result;
}
exports.valuesLookup = valuesLookup;
function itemsLookup(array, keySelector) {
    const result = object_tools_1.nullObject();
    for (let item of array) {
        const key = keySelector(item);
        const list = result[key] || (result[key] = []);
        list.push(item);
    }
    return result;
}
exports.itemsLookup = itemsLookup;
//# sourceMappingURL=lookup.js.map