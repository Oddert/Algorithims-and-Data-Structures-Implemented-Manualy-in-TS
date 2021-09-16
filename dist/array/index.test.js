"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = __importDefault(require("chai"));
var assert = chai_1.default.assert;
describe('Array : Default implamentation', function () {
    it('begins with length zero', function () {
        var arr = [];
        assert.isEmpty(arr);
    });
    it('can add items with the push() method', function () {
        var arr = [];
        var testPhrase = 'hello';
        arr.push(testPhrase);
        assert.deepEqual(arr, [testPhrase]);
        assert.lengthOf(arr, 1);
        assert.equal(arr[0], testPhrase);
    });
    it('can remove the last item with the pop function', function () {
        var expectedPopValue = 4;
        var arr = [1, 2, 3, expectedPopValue];
        var popedValue = arr.pop();
        assert.equal(popedValue, expectedPopValue);
        assert.deepEqual(arr, [1, 2, 3]);
    });
    it('can prepend items to the begining of the queue with unshift()', function () {
        var expectedShiftValue = 4;
        var originalArr = [1, 2, 3];
        var arr = originalArr.slice();
        arr.unshift(expectedShiftValue);
        assert.lengthOf(arr, 4);
        assert.deepEqual(arr, __spreadArray([expectedShiftValue], originalArr));
    });
    it('can remove items from the "front" of the array with shift()', function () {
        var expectedShiftValue = 4;
        var baseArr = [1, 2, 3];
        var arr = __spreadArray([expectedShiftValue], baseArr);
        var shiftValue = arr.shift();
        assert.equal(shiftValue, expectedShiftValue);
        assert.lengthOf(arr, 3);
        assert.deepEqual(arr, baseArr);
    });
    it('updates its length property to reflect the number of items contained', function () {
        var valuesToAdd = [1, 2, 3, 4];
        var arr = [];
        assert.property(arr, 'length');
        assert.isNumber(arr.length);
        assert.equal(arr.length, 0);
        valuesToAdd.forEach(function (e) { return arr.push(e); });
        assert.equal(arr.length, 4);
    });
    it('can remove items by overwriting the length property', function () {
        var begining = [1, 2, 3];
        var ending = [4, 5, 6];
        var concatinatedExpected = [1, 2, 3, 4, 5, 6];
        var arr = __spreadArray(__spreadArray([], begining), ending);
        assert.deepEqual(arr, concatinatedExpected);
        assert.lengthOf(arr, 6);
        arr.length = 3;
        assert.deepEqual(arr, begining);
        assert.lengthOf(arr, 3);
    });
});
