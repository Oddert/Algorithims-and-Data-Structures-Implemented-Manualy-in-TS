"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArraySelf = /** @class */ (function () {
    function ArraySelf() {
        var _this = this;
        var _vals = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _vals[_i] = arguments[_i];
        }
        this.data = [];
        if (_vals.length) {
            _vals.forEach(function (each) { return _this.data.push(each); });
        }
    }
    ArraySelf.prototype.push = function (_val) {
        return this.data.push(_val);
    };
    ArraySelf.prototype.pop = function (_val) {
        return this.data.pop();
    };
    ArraySelf.prototype.shift = function (_val) {
        return this.data.shift();
    };
    ArraySelf.prototype.unshift = function (_val) {
        return this.data.unshift(_val);
    };
    ArraySelf.prototype.access = function (idx) {
        var d = this.data[idx];
        if (d)
            return d;
        else
            return undefined;
    };
    return ArraySelf;
}());
exports.default = ArraySelf;
