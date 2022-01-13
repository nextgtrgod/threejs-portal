
export default function debounce(fn, timeout) {
	let timer = 0
	return (...args) => {
		clearTimeout(timer)
		timer = setTimeout(() => fn.apply(this, args), timeout)
	}
}