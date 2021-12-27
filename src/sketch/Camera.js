import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Sketch from './Sketch.js'

export default class Camera {
	constructor() {
		this.sketch = new Sketch()
		this.viewport = this.sketch.viewport
		this.scene = this.sketch.scene
		this.canvas = this.sketch.canvas

		this.setInstance()
		this.setOrbitControls()
	}

	setInstance() {
		this.instance = new THREE.PerspectiveCamera(50, this.viewport.width / this.viewport.height, 1, 50)
		this.instance.position.set(0, 1, 3)
		this.scene.add(this.instance)
	}

	setOrbitControls() {
		this.controls = new OrbitControls(this.instance, this.canvas)
		this.controls.enableDamping = true
	}

	resize() {
		this.instance.aspect = this.viewport.width / this.viewport.height
		this.instance.updateProjectionMatrix()
	}

	update() {
		this.controls.update()
	}
}