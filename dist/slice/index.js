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
function slice(arrStr, start, end) {
    var rest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        rest[_i - 3] = arguments[_i];
    }
    if (arguments.length === 0)
        throw new Error('no arguments supplied');
    if (arrStr === undefined)
        return [];
    var arr = typeof arrStr === "string" ? arrStr.split('') : arrStr;
    var out = [];
    var startIdx = assignStartEnd(start, 0);
    var endIdx = assignStartEnd(end, arr.length);
    console.log({ arr: arr, startIdx: startIdx, endIdx: endIdx });
    function assignStartEnd(startEnd, fallback) {
        if (typeof startEnd === "function")
            return 0;
        if (typeof startEnd === "object")
            return 0;
        if (startEnd !== undefined) {
            var n = Number(startEnd);
            if (isNaN(n)) {
                return fallback;
            }
            return n;
        }
        return fallback;
    }
    for (var i = 0; i < arr.length; i++) {
        if (i >= startIdx && i < endIdx) {
            out.push(arr[i]);
        }
    }
    if (typeof arrStr === "string")
        return out.join('');
    return out;
}
exports.default = slice;
