import * as THREE from 'three'
import { gsap } from 'gsap'
import EventEmitter from '../utils/EventEmitter.js'
import Sketch from '../Sketch.js'
import Resources from '../utils/Resources.js'
import { sources } from '@/config'
import Portal from './Portal.js'
import Fireflies from './Fireflies.js'
import Video from './Video.js'

let instance = null

export default class World extends EventEmitter {
	constructor() {
		super()

		if (instance) return instance
		instance = this

		this.sketch = new Sketch()
		this.group = new THREE.Group()
		this.group.name = 'world'
		this.resources = new Resources()
		this.resources.load(sources)

		this.resources.on('ready', () => {
			this.portal = new Portal()
			this.fireflies = new Fireflies()
			this.video = new Video()

			this.animate()

			this.emit('ready')
		})
	}

	animate() {
		this.group.position.y = -2
		gsap.to(
			this.group.position,
			{
				y: 0,
				duration: 1,
				delay: .5,
				ease: 'back.out(1)',
			}
		)
	}

	update(elapsed) {
		this.portal.update(elapsed)
		this.fireflies.update(elapsed)
	}
}