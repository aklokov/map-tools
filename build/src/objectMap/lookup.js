"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("./create");
function lookup(array, keySelector, valSelector) {
    if (!array) {
        return create_1.create();
    }
    return valSelector ? valuesLookup(array, keySelector, valSelector) : itemsLookup(array, keySelector);
}
exports.lookup = lookup;
function valuesLookup(array, keySelector, valSelector) {
    const result = create_1.create();
    for (let item of array) {
        const key = keySelector(item);
        const list = result[key] || (result[key] = []);
        list.push(valSelector(item));
    }
    return result;
}
exports.valuesLookup = valuesLookup;
function itemsLookup(array, keySelector) {
    const result = create_1.create();
    for (let item of array) {
        const key = keySelector(item);
        const list = result[key] || (result[key] = []);
        list.push(item);
    }
    return result;
}
exports.itemsLookup = itemsLookup;
//# sourceMappingURL=lookup.js.map