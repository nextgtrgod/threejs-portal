import EventEmitter from '../utils/EventEmitter.js'
import Sketch from '../Sketch.js'
import Resources from '../utils/Resources.js'
import { sources } from '@/config'
import Portal from './Portal.js'
import Fireflies from './Fireflies.js'

let instance = null

export default class World extends EventEmitter {
	constructor() {
		super()

		if (instance) return instance
		instance = this

		this.sketch = new Sketch()
		this.scene = this.sketch.scene
		this.resources = new Resources()
		this.resources.load(sources)

		this.resources.on('ready', () => {
			this.portal = new Portal()
			this.fireflies = new Fireflies()

			this.emit('ready')
		})
	}

	update(elapsed) {
		this.portal.update(elapsed)
		this.fireflies.update(elapsed)
	}
}