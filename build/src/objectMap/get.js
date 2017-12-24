"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_tools_1 = require("@vlr/object-tools");
function get(map, key) {
    if (object_tools_1.isFunction(map.hasOwnProperty) && !map.hasOwnProperty(key)) {
        return undefined;
    }
    return map[key];
}
exports.get = get;
//# sourceMappingURL=get.js.map