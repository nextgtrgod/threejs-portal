import EventEmitter from './EventEmitter.js'

let instance = null

export default class Viewport extends EventEmitter {
	constructor() {
		super()

		if (instance) return instance
		instance = this

		this.setSizes()

		window.addEventListener('resize', () => {
			this.setSizes()
			this.emit('resize')
		})
	}

	setSizes() {
		this.width = window.innerWidth
		this.height = window.innerHeight
		this.pixelRatio = Math.min(window.devicePixelRatio, 2)
	}
}