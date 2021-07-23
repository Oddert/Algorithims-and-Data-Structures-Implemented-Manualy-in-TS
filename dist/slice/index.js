"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sliceDefault = void 0;
function sliceDefault(arrStr, start, end) {
    var rest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        rest[_i - 3] = arguments[_i];
    }
    if (start !== undefined) {
        if (end !== undefined) {
            return arrStr.slice(Number(start), Number(end));
        }
        return arrStr.slice(Number(start));
    }
    return arrStr.slice();
}
exports.sliceDefault = sliceDefault;
function slice(arrStr) {
    return arrStr;
}
exports.default = slice;
