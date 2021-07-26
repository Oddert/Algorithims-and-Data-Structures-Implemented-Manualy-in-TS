import chai from 'chai'

import myFunc from './myFunc'
import slice, { sliceDefault } from './index'

const assert = chai.assert

describe('my first test', () => {
	it('does litterally enything', () => {
		const arr = []
		assert.equal(arr.length, 0)
	})
	it('returns a string from the function', () => {
		assert.isString(myFunc())
	})
})

describe('Slice : already built in', () => {
	it('produces a subset of an array', () => {
		const arr = [1,2,3,4,5]
		assert.deepEqual(sliceDefault(arr, 2,4), [3,4])
	})
	it('produces a subset of a string', () => {
		const str = "hello world"
		assert.equal(sliceDefault(str, 2, 7), "llo w")
	})
	it('does not modify the original array', () => {
		const oldArr = [1,2,3,4,5]
		const copyOfOldArr = [1,2,3,4,5]
		const newArr = sliceDefault(oldArr, 2, 4)
		assert.deepEqual(oldArr, copyOfOldArr)
		assert.deepEqual(newArr, [3, 4])
	})
	it('does not modify the original string', () => {
		const oldStr = "hello world"
		const copyOfOldStr = "hello world"
		const newStr = sliceDefault(oldStr, 3, 4)
		assert.equal(oldStr, copyOfOldStr)
	})
	it('providing zero arguments thorws an error', () => {
		// @ts-ignore
		assert.throw(() => sliceDefault())
	})
	it('omitting start and end returns an exact copy', () => {
		const oldArr = [false, 'hello', 528, { my: 'name' }]
		const oldStr = "hello world"
		const newArr = sliceDefault(oldArr)
		const newStr = sliceDefault(oldStr)
		assert.deepEqual(oldArr, newArr)
		assert.deepEqual(oldStr, newStr)
	})
	it('omitting end returns a copy from including the start index onward', () => {
		const oldArr = [false, 'hello', 528, { my: 'name' }]
		const oldStr = "hello world"
		const newArr = sliceDefault(oldArr, 2)
		const newStr = sliceDefault(oldStr, 2)
		assert.deepEqual(newArr, [528, { my: 'name' }])
		assert.deepEqual(newStr, "llo world")
	})
	it('attempts type conversion on arguments', () => {
		const arr = [1,2,3,4,5]
		assert.deepEqual(sliceDefault(arr, 1), [2,3,4,5])
		// @ts-ignore
		assert.deepEqual(sliceDefault(arr, true), [2,3,4,5])
		// @ts-ignore
		assert.deepEqual(sliceDefault(arr, false, true), [1])
	})
	it('adviserial and complex values for start and end are ignored', () => {
		const arr = [1,2,3,4,5]
		// @ts-ignore
		assert.deepEqual(sliceDefault(arr, {}, () => {}), [])
		// @ts-ignore
		assert.deepEqual(sliceDefault(arr, {}), [1,2,3,4,5])
	})
})

describe('Slice : self implamented', () => {
	it('produces a subset of an array', () => {
		const arr = [1,2,3,4,5]
		assert.deepEqual(slice(arr, 2,4), [3,4])
	})
	it('produces a subset of a string', () => {
		const str = "hello world"
		assert.equal(slice(str, 2, 7), "llo w")
	})
	it('does not modify the original array', () => {
		const oldArr = [1,2,3,4,5]
		const copyOfOldArr = [1,2,3,4,5]
		const newArr = slice(oldArr, 2, 4)
		assert.deepEqual(oldArr, copyOfOldArr)
		assert.deepEqual(newArr, [3, 4])
	})
	it('does not modify the original string', () => {
		const oldStr = "hello world"
		const copyOfOldStr = "hello world"
		const newStr = slice(oldStr, 3, 4)
		assert.equal(oldStr, copyOfOldStr)
	})
	it('providing zero arguments thorws an error', () => {
		// @ts-ignore
		assert.throw(() => slice())
	})
	it('omitting start and end returns an exact copy', () => {
		const oldArr = [false, 'hello', 528, { my: 'name' }]
		const oldStr = "hello world"
		const newArr = slice(oldArr)
		const newStr = slice(oldStr)
		assert.deepEqual(oldArr, newArr)
		assert.deepEqual(oldStr, newStr)
	})
	it('omitting end returns a copy from including the start index onward', () => {
		const oldArr = [false, 'hello', 528, { my: 'name' }]
		const oldStr = "hello world"
		const newArr = slice(oldArr, 2)
		const newStr = slice(oldStr, 2)
		assert.deepEqual(newArr, [528, { my: 'name' }])
		assert.deepEqual(newStr, "llo world")
	})
	it('attempts type conversion on arguments', () => {
		const arr = [1,2,3,4,5]
		assert.deepEqual(slice(arr, 1), [2,3,4,5])
		// @ts-ignore
		assert.deepEqual(slice(arr, true), [2,3,4,5])
		// @ts-ignore
		assert.deepEqual(slice(arr, false, true), [1])
	})
	it('adviserial and complex values for start and end are ignored', () => {
		const arr = [1,2,3,4,5]
		// @ts-ignore
		assert.deepEqual(slice(arr, {}, () => {}), [])
		// @ts-ignore
		assert.deepEqual(slice(arr, {}), [1,2,3,4,5])
	})
})
