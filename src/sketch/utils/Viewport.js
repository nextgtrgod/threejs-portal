import EventEmitter from './EventEmitter.js'
import debounce from '@/utils/debounce.js'

export default class Viewport extends EventEmitter {
	constructor() {
		super()

		this.setSizes()

		window.addEventListener('resize', debounce(
			() => {
				this.setSizes()
				this.emit('resize')
			},
			250,
		))
	}

	setSizes() {
		this.width = window.innerWidth
		this.height = window.innerHeight
		this.pixelRatio = Math.min(window.devicePixelRatio, 2)
	}
}