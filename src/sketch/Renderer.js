import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js'
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
		this.setPostProcess()
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
		// this.instance.toneMapping = THREE.ACESFilmicToneMapping
		this.instance.setClearColor('#232323')
		this.instance.setSize(this.viewport.width, this.viewport.height)
		this.instance.setPixelRatio(this.viewport.pixelRatio)
	}

	setPostProcess() {
		const RenderTarget = this.viewport.pixelRatio >= 2
			? THREE.WebGLRenderTarget
			: THREE.WebGLMultisampleRenderTarget

		const renderTarget = new RenderTarget(
			this.viewport.width,
			this.viewport.height,
			{
				generateMipmaps: false,
				minFilter: THREE.LinearFilter,
				magFilter: THREE.LinearFilter,
				format: THREE.RGBFormat,
				encoding: THREE.sRGBEncoding
			},
		)

		this.composer = new EffectComposer(this.instance, renderTarget)

		const renderPass = new RenderPass(this.scene, this.camera.instance)
		const bokehPass = new BokehPass(this.scene, this.camera.instance, {
			focus: 6.9,
			aperture: 0.003,
			maxblur: 0.005,
		})

		const folder = this.debug.ui.addFolder('postprocessing')
		folder.add(bokehPass.uniforms.focus, 'value').min(1).max(10).step(0.001).name('focus')
		folder.add(bokehPass.uniforms.aperture, 'value').min(0).max(0.1).step(0.0001).name('aperture')
		folder.add(bokehPass.uniforms.maxblur, 'value').min(0).max(0.01).step(0.0001).name('maxblur')

		this.composer.addPass(renderPass)
		this.composer.addPass(bokehPass)

		this.composer.setSize(this.viewport.width, this.viewport.height)
		this.composer.setPixelRatio(this.viewport.pixelRatio)
	}

	resize() {
		this.instance.setSize(this.viewport.width, this.viewport.height)
		this.instance.setPixelRatio(this.viewport.pixelRatio)

		this.composer.setSize(this.viewport.width, this.viewport.height)
		this.composer.setPixelRatio(this.viewport.pixelRatio)
	}

	update() {
		// this.instance.render(this.scene, this.camera.instance)

		this.composer.render()
	}
}