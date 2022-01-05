import * as THREE from 'three'
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js'
import Sketch from './Sketch.js'
import parameters from '@/config/scene.js'

export default class DepthOfField {
	constructor() {
		this.sketch = new Sketch()
		this.scene = this.sketch.scene
		this.camera = this.sketch.camera

		this.bokehPass = new BokehPass(this.scene, this.camera.instance, {
			focus: parameters.bokeh.focus,
			aperture: parameters.bokeh.aperture,
			maxblur: parameters.bokeh.maxblur,
		})
		
		this.raycaster = new THREE.Raycaster()

		this.focus = {
			value: parameters.bokeh.focus,
			target: parameters.bokeh.focus,
			easing: 0.1,
			objects: [],
			defaultObject: null,
		}

		this.mouse = new THREE.Vector2()

		window.addEventListener('mousemove', this.onMouseMove.bind(this))
	}

	onMouseMove({ clientX, clientY }) {
		this.mouse.x = 2 * (clientX / this.sketch.viewport.width) - 1
		this.mouse.y = -2 * (clientY / this.sketch.viewport.height) + 1
	}

	setFocusObjects(objects) {
		this.focus.objects = objects
		this.focus.defaultObject = objects.find(object => object.name === 'poleLightA')
	}

	update() {
		this.raycaster.setFromCamera(this.mouse, this.camera.instance)

		const intersects = this.raycaster.intersectObjects(this.focus.objects)

		this.focus.target = intersects.length
			? intersects[0].distance
			: this.camera.instance.position.distanceTo(this.focus.defaultObject.position)

		// easing focus
		this.focus.value += (this.focus.target - this.focus.value) * this.focus.easing
		this.bokehPass.materialBokeh.uniforms.focus.value = this.focus.value
	}
}