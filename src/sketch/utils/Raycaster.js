import * as THREE from 'three'
import EventEmitter from './EventEmitter.js'
import Sketch from '../Sketch.js'

let instance = null

export default class Raycaster extends EventEmitter {
	constructor() {
		super()

		if (instance) return instance
		instance = this

		this.sketch = new Sketch()
		this.canvas = this.sketch.canvas
		this.camera = this.sketch.camera
		this.objects = []
		this.instance = new THREE.Raycaster()
		this.instance.params.Points.threshold = 0

		this.mouse = new THREE.Vector2()
		this.intersections = []

		this.canvas.addEventListener('mousemove', ({ clientX, clientY }) => {
			this.mouse.x = 2 * (clientX / this.sketch.viewport.width) - 1
			this.mouse.y = -2 * (clientY / this.sketch.viewport.height) + 1

			this.update()
		})

		this.canvas.addEventListener('click', () => {
			if (!this.intersections.length) return
			this.emit('click', this.intersections[0])
		})
	}

	setObjects(objects) {
		this.objects = objects
	}

	update() {
		this.instance.setFromCamera(this.mouse, this.camera.instance)
		this.intersections = this.instance.intersectObjects(this.objects)
	}
}