"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sanitize_1 = require("./sanitize");
function parse(input) {
    return sanitize_1.sanitize(JSON.parse(input));
}
exports.parse = parse;
//# sourceMappingURL=parse.js.map