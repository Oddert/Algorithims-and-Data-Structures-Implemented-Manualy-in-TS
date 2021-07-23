

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


function slice (arrStr: [] | string): [] | string {
	return arrStr
}

export default slice