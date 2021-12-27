import * as THREE from 'three'
import Debug from './utils/Debug.js'
import Viewport from './utils/Viewport.js'
import Time from './utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './world/World.js'

let instance = null

export default class Sketch {
	constructor({ canvas } = {}) {
		if (instance) return instance
		instance = this

		this.canvas = canvas

		this.debug = new Debug()
		this.viewport = new Viewport()
		this.time = new Time()
		this.scene = new THREE.Scene()
		this.camera = new Camera()
		this.renderer = new Renderer()
		this.world = new World()

		this.viewport.on('resize', this.resize.bind(this))
		this.time.on('update', this.update.bind(this))
	}

	resize() {
		this.camera.resize()
		this.renderer.resize()
	}

	update(elapsed, delta) {
		this.debug.begin()

		this.camera.update()

		this.world.update(elapsed)

		this.renderer.update()

		this.debug.end()
	}
}