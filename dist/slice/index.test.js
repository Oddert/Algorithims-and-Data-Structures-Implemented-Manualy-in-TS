"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = __importDefault(require("chai"));
var myFunc_1 = __importDefault(require("./myFunc"));
var index_1 = __importStar(require("./index"));
var assert = chai_1.default.assert;
describe('my first test', function () {
    it('does litterally enything', function () {
        var arr = [];
        assert.equal(arr.length, 0);
    });
    it('returns a string from the function', function () {
        assert.isString(myFunc_1.default());
    });
});
describe('Slice : already built in', function () {
    it('produces a subset of an array', function () {
        var arr = [1, 2, 3, 4, 5];
        assert.deepEqual(index_1.sliceDefault(arr, 2, 4), [3, 4]);
    });
    it('produces a subset of a string', function () {
        var str = "hello world";
        assert.equal(index_1.sliceDefault(str, 2, 7), "llo w");
    });
    it('does not modify the original array', function () {
        var oldArr = [1, 2, 3, 4, 5];
        var copyOfOldArr = [1, 2, 3, 4, 5];
        var newArr = index_1.sliceDefault(oldArr, 2, 4);
        assert.deepEqual(oldArr, copyOfOldArr);
        assert.deepEqual(newArr, [3, 4]);
    });
    it('does not modify the original string', function () {
        var oldStr = "hello world";
        var copyOfOldStr = "hello world";
        var newStr = index_1.sliceDefault(oldStr, 3, 4);
        assert.equal(oldStr, copyOfOldStr);
    });
    it('providing zero arguments thorws an error', function () {
        // @ts-ignore
        assert.throw(function () { return index_1.sliceDefault(); });
    });
    it('omitting start and end returns an exact copy', function () {
        var oldArr = [false, 'hello', 528, { my: 'name' }];
        var oldStr = "hello world";
        var newArr = index_1.sliceDefault(oldArr);
        var newStr = index_1.sliceDefault(oldStr);
        assert.deepEqual(oldArr, newArr);
        assert.deepEqual(oldStr, newStr);
    });
    it('omitting end returns a copy from including the start index onward', function () {
        var oldArr = [false, 'hello', 528, { my: 'name' }];
        var oldStr = "hello world";
        var newArr = index_1.sliceDefault(oldArr, 2);
        var newStr = index_1.sliceDefault(oldStr, 2);
        assert.deepEqual(newArr, [528, { my: 'name' }]);
        assert.deepEqual(newStr, "llo world");
    });
    it('attempts type conversion on arguments', function () {
        var arr = [1, 2, 3, 4, 5];
        assert.deepEqual(index_1.sliceDefault(arr, 1), [2, 3, 4, 5]);
        // @ts-ignore
        assert.deepEqual(index_1.sliceDefault(arr, true), [2, 3, 4, 5]);
        // @ts-ignore
        assert.deepEqual(index_1.sliceDefault(arr, false, true), [1]);
    });
    it('adviserial and complex values for start and end are ignored', function () {
        var arr = [1, 2, 3, 4, 5];
        // @ts-ignore
        assert.deepEqual(index_1.sliceDefault(arr, {}, function () { }), []);
        // @ts-ignore
        assert.deepEqual(index_1.sliceDefault(arr, {}), [1, 2, 3, 4, 5]);
    });
});
describe('Slice : self implamented', function () {
    it('produces a subset of an array', function () {
        var arr = [1, 2, 3, 4, 5];
        assert.deepEqual(index_1.default(arr, 2, 4), [3, 4]);
    });
    it('produces a subset of a string', function () {
        var str = "hello world";
        assert.equal(index_1.default(str, 2, 7), "llo w");
    });
    it('does not modify the original array', function () {
        var oldArr = [1, 2, 3, 4, 5];
        var copyOfOldArr = [1, 2, 3, 4, 5];
        var newArr = index_1.default(oldArr, 2, 4);
        assert.deepEqual(oldArr, copyOfOldArr);
        assert.deepEqual(newArr, [3, 4]);
    });
    it('does not modify the original string', function () {
        var oldStr = "hello world";
        var copyOfOldStr = "hello world";
        var newStr = index_1.default(oldStr, 3, 4);
        assert.equal(oldStr, copyOfOldStr);
    });
    it('providing zero arguments thorws an error', function () {
        // @ts-ignore
        assert.throw(function () { return index_1.default(); });
    });
    it('omitting start and end returns an exact copy', function () {
        var oldArr = [false, 'hello', 528, { my: 'name' }];
        var oldStr = "hello world";
        var newArr = index_1.default(oldArr);
        var newStr = index_1.default(oldStr);
        assert.deepEqual(oldArr, newArr);
        assert.deepEqual(oldStr, newStr);
    });
    it('omitting end returns a copy from including the start index onward', function () {
        var oldArr = [false, 'hello', 528, { my: 'name' }];
        var oldStr = "hello world";
        var newArr = index_1.default(oldArr, 2);
        var newStr = index_1.default(oldStr, 2);
        assert.deepEqual(newArr, [528, { my: 'name' }]);
        assert.deepEqual(newStr, "llo world");
    });
    it('attempts type conversion on arguments', function () {
        var arr = [1, 2, 3, 4, 5];
        assert.deepEqual(index_1.default(arr, 1), [2, 3, 4, 5]);
        // @ts-ignore
        assert.deepEqual(index_1.default(arr, true), [2, 3, 4, 5]);
        // @ts-ignore
        assert.deepEqual(index_1.default(arr, false, true), [1]);
    });
    it('adviserial and complex values for start and end are ignored', function () {
        var arr = [1, 2, 3, 4, 5];
        // @ts-ignore
        assert.deepEqual(index_1.default(arr, {}, function () { }), []);
        // @ts-ignore
        assert.deepEqual(index_1.default(arr, {}), [1, 2, 3, 4, 5]);
    });
});
