"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack() {
        var inVals = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inVals[_i] = arguments[_i];
        }
        this.data = [];
        this.length = 0;
    }
    Stack.prototype.push = function (_val) {
        this.data.push(_val);
        this.length++;
    };
    Stack.prototype.pop = function () {
        return this.data.unshift();
    };
    Stack.prototype.peak = function () {
        return this.data[this.data.length];
    };
    Stack.prototype.getLength = function () {
        return this.length;
    };
    return Stack;
}());
exports.default = Stack;
