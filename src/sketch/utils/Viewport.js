import EventEmitter from './EventEmitter.js'

export default class Viewport extends EventEmitter {
	constructor() {
		super()

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