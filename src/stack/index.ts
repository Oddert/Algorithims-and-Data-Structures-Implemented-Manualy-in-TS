

export default class Stack {
	data: any[]
	length: number
	constructor (...inVals: any[]) {
		this.data = []
		this.length = 0
	}

	push (_val: any) {
		this.data.push(_val)
		this.length ++
	}

	pop () {
		return this.data.unshift()
	}

	peak () {
		return this.data[this.data.length]
	}

	getLength () {
		return this.length
	}
}