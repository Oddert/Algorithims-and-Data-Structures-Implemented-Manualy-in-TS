

export default class ArraySelf {
	data: any[]
	constructor (..._vals: any[]) {
		this.data = []
		if (_vals.length) {
			_vals.forEach((each: any) => this.data.push(each))
		}
	}
	push(_val: any) {
		return this.data.push(_val)
	}
	pop(_val: any) {
		return this.data.pop()
	}
	shift(_val: any) {
		return this.data.shift()
	}
	unshift(_val: any) {
		return this.data.unshift(_val)
	}
	access(idx: number) {
		const d = this.data[idx]
		if (d) return d
		else return undefined
	}
}