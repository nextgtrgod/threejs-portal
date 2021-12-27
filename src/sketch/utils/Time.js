import EventEmitter from './EventEmitter.js'

export default class Time extends EventEmitter {
	constructor(autoStart = true) {
		super()
	
		this.current = performance.now()
		this.elapsed = 0
		this.delta = 0

		this.rafId = 0

		if (autoStart) this.start()
	}

	start() {
		if (this.running) return

		this.running = true
		this.update()
	}

	stop() {
		if (!this.running) return

		window.cancelAnimationFrame(this.rafId)
		this.running = false
	}

	pause() {
		this.stop()
	}

	resume() {
		this.current = performance.now()
		this.start()
	}

	update() {
		const now = performance.now()
		this.delta = (now - this.current) / 1000
		this.current = now
		this.elapsed += this.delta

		this.emit('update', this.elapsed, this.delta)

		this.rafId = window.requestAnimationFrame(this.update.bind(this))
	}
}