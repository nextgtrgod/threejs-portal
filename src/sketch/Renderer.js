import * as THREE from 'three'
import Sketch from './Sketch.js'

export default class Renderer {
	constructor() {
		this.sketch = new Sketch()
		this.canvas = this.sketch.canvas
		this.viewport = this.sketch.viewport
		this.scene = this.sketch.scene
		this.camera = this.sketch.camera
		this.debug = this.sketch.debug

		this.setInstance()
	}

	setInstance() {
		this.instance = new THREE.WebGLRenderer({
			canvas: this.canvas,
			antialias: true,
			// alpha: true,
			powerPreference: 'high-performance',
		})
		this.instance.outputEncoding = THREE.sRGBEncoding
		// this.instance.physicallyCorrectLights = true
		this.instance.toneMapping = THREE.ACESFilmicToneMapping
		this.instance.setClearColor('#232323')
		this.instance.setSize(this.viewport.width, this.viewport.height)
		this.instance.setPixelRatio(this.viewport.pixelRatio)
	}

	resize() {
		this.instance.setSize(this.viewport.width, this.viewport.height)
		this.instance.setPixelRatio(this.viewport.pixelRatio)
	}

	update() {
		this.instance.render(this.scene, this.camera.instance)
	}
}