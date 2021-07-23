"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = __importDefault(require("chai"));
var myFunc_1 = __importDefault(require("./myFunc"));
var index_1 = require("./index");
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
