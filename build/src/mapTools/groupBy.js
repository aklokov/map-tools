"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectMap_1 = require("../objectMap");
const objectHash = require("object-hash");
const values_1 = require("./values");
function groupBy(arr, ...selectors) {
    const store = new Map();
    if (selectors.length === 1) {
        arr.forEach(item => {
            const key = selectors[0](item);
            const hash = objectHash(key);
            getResult(store, hash, key).values.push(item);
        });
    }
    else {
        arr.forEach(item => {
            const key = createKey(item, selectors);
            const hash = objectHash(key);
            getResult(store, hash, key).values.push(item);
        });
    }
    const output = new Map();
    values_1.values(store).forEach(results => results.forEach(result => { output.set(result.key, result.values); }));
    return output;
}
exports.groupBy = groupBy;
function getResult(store, hash, key) {
    const results = store.get(hash);
    if (!results) {
        const result = { key, values: [] };
        store.set(hash, [result]);
        return result;
    }
    let result = results.find(r => compareKey(r.key, key));
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
function compareKey(key1, key2) {
    const fields = objectMap_1.keys(key1);
    let i = fields.length;
    while (i--) {
        if (key1[fields[i]] !== key2[fields[i]]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=groupBy.js.map