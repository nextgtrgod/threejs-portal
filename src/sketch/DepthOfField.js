import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js'
import Sketch from './Sketch.js'
import parameters from '@/config/scene.js'

export default class DepthOfField {
	constructor() {
		this.sketch = new Sketch()
		this.scene = this.sketch.scene
		this.camera = this.sketch.camera
		this.raycaster = this.sketch.raycaster

		this.bokehPass = new BokehPass(this.scene, this.camera.instance, {
			focus: parameters.bokeh.focus,
			aperture: parameters.bokeh.aperture,
			maxblur: parameters.bokeh.maxblur,
		})

		this.focus = {
			value: parameters.bokeh.focus,
			target: parameters.bokeh.focus,
			easing: 0.1,
			defaultObject: null,
		}
	}

	setFocusObject(object) {
		this.focus.defaultObject = object
	}

	update() {
		this.focus.target = this.raycaster.intersections.length
			? this.raycaster.intersections[0].distance
			: this.camera.instance.position.distanceTo(this.focus.defaultObject.position)

		// easing focus
		this.focus.value += (this.focus.target - this.focus.value) * this.focus.easing
		this.bokehPass.materialBokeh.uniforms.focus.value = this.focus.value
	}
}