"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectHash = require("object-hash");
const values_1 = require("./values");
function groupBy(arr, ...selectors) {
    const store = new Map();
    arr.forEach(item => {
        const key = createKey(item, selectors);
        const hash = objectHash(key);
        const result = getResult(store, hash, key, selectors.length);
        result.values.push(item);
    });
    const output = new Map();
    values_1.values(store).forEach(results => results.forEach(result => { output.set(result.key, result.values); }));
    return output;
}
exports.groupBy = groupBy;
function getResult(store, hash, key, length) {
    const results = store.get(hash);
    if (!results) {
        const result = { key, values: [] };
        store.set(hash, [result]);
        return result;
    }
    let result = results.find(r => compareKey(r.key, key, length));
    if (result) {
        return result;
    }
    result = { key, values: [] };
    results.push(result);
    return result;
}
function createKey(item, by) {
    const obj = {};
    let i = by.length;
    while (i--) {
        obj[i] = by[i](item);
    }
    return obj;
}
function compareKey(obj1, obj2, length) {
    let i = length;
    while (i--) {
        if (obj1[i] !== obj2[i]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=groupBy.js.map