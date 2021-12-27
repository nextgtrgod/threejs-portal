
export default class EventEmitter {
	constructor() {
		this.callbacks = {}
	}

	on(event, callback) {
		if (typeof callback !== 'function') return

		this.callbacks[event] = [
			...this.callbacks[event] || [],
			callback,
		]
	}

	emit(event, ...args) {
		(this.callbacks[event] || []).forEach(callback => callback(...args))
	}

	off(event, callback) {
		if (!this.callbacks[event]) return

		this.callbacks[event] = this.callbacks[event].filter(f => f !== callback)
	}
}