import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Sketch from './Sketch.js'
import { controls } from '@/config'

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
		this.instance = new THREE.PerspectiveCamera(45, this.viewport.width / this.viewport.height, 0.1, 50)
		this.instance.position.set(4, 2, 4)
		this.scene.add(this.instance)
	}

	setOrbitControls() {
		this.controls = new OrbitControls(this.instance, this.canvas)
		this.controls.enableDamping = true
		// this.controls.minDistance = controls.minDistance
		// this.controls.maxDistance = controls.maxDistance
		// this.controls.minAzimuthAngle = controls.minAzimuthAngle
		// this.controls.maxAzimuthAngle = controls.maxAzimuthAngle
		// this.controls.minPolarAngle = controls.minPolarAngle
		// this.controls.maxPolarAngle = controls.maxPolarAngle
	}

	resize() {
		this.instance.aspect = this.viewport.width / this.viewport.height
		this.instance.updateProjectionMatrix()
	}

	update() {
		this.controls.update()
	}
}