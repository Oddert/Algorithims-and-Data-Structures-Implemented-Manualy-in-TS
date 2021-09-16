

export function sliceDefault (
	arrStr: any[] | string,
	start?: string | number,
	end?: string | number,
	...rest: any
): any {
	if (start !== undefined) {
		if (end !== undefined) {
			return arrStr.slice(Number(start), Number(end))
		}
		return arrStr.slice(Number(start))
	}
	return arrStr.slice()
}


function slice (
	arrStr: any[] | string,
	start?: string | number,
	end?: string | number,
	...rest: any
): any[] | string {
	if (arguments.length === 0) throw new Error('no arguments supplied')
	if (arrStr === undefined) return []
	const arr = typeof arrStr === "string" ? arrStr.split('') : arrStr
	const out = []
	const startIdx = assignStartEnd(start, 0)
	const endIdx = assignStartEnd(end, arr.length)

	function assignStartEnd (startEnd: unknown, fallback: number) {
		if (typeof startEnd === "function") return 0
		if (typeof startEnd === "object") return 0
		if (startEnd !== undefined) {
			const n = Number(startEnd)
			if (isNaN(n)) {
				return fallback
			}
			return n
		}
		return fallback
	}

	for (let i = 0; i < arr.length; i++) {
		if (i >= startIdx && i < endIdx) {
			out.push(arr[i])
		}
	}

	if (typeof arrStr === "string") return out.join('')
	return out
}

export default slice