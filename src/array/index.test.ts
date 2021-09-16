import chai, { expect } from 'chai'

import Array from './index'

const { assert } = chai

describe('Array : Default implamentation', () => {
	it('begins with length zero', () => {
		const arr: any[] = []
		assert.isEmpty(arr)
	})
	it('can add items with the push() method', () => {
		const arr: any[] = []
		const testPhrase = 'hello'
		arr.push(testPhrase)
		assert.deepEqual(arr, [testPhrase])
		assert.lengthOf(arr, 1)
		assert.equal(arr[0], testPhrase)
	})
	it('can remove the last item with the pop function', () => {
		const expectedPopValue = 4
		const arr: number[] = [1, 2, 3, expectedPopValue]
		const popedValue = arr.pop()
		assert.equal(popedValue, expectedPopValue)
		assert.deepEqual(arr, [1, 2, 3])
	})
	it('can prepend items to the begining of the queue with unshift()', () => {
		const expectedShiftValue = 4
		const originalArr: number[] = [1, 2, 3]
		const arr: number[] = originalArr.slice()
		arr.unshift(expectedShiftValue)
		assert.lengthOf(arr, 4)
		assert.deepEqual(arr, [expectedShiftValue, ...originalArr])
	})
	it('can remove items from the "front" of the array with shift()', () => {
		const expectedShiftValue = 4
		const baseArr: number[] = [1, 2, 3]
		const arr: number[] = [expectedShiftValue, ...baseArr]
		const shiftValue = arr.shift()
		assert.equal(shiftValue, expectedShiftValue)
		assert.lengthOf(arr, 3)
		assert.deepEqual(arr, baseArr)
	})
	it('updates its length property to reflect the number of items contained', () => {
		const valuesToAdd = [1, 2, 3, 4]
		const arr: number[] = []
		assert.property(arr, 'length')
		assert.isNumber(arr.length)
		assert.equal(arr.length, 0)
		valuesToAdd.forEach((e: number) => arr.push(e))
		assert.equal(arr.length, 4)
	})
	it('can remove items by overwriting the length property', () => {
		const begining = [1, 2, 3]
		const ending = [4, 5, 6]
		const concatinatedExpected = [1, 2, 3, 4, 5, 6]
		const arr = [...begining, ...ending]
		assert.deepEqual(arr, concatinatedExpected)
		assert.lengthOf(arr, 6)
		arr.length = 3
		assert.deepEqual(arr, begining)
		assert.lengthOf(arr, 3)
	})
})