import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import Sketch from './Sketch.js'
import DepthOfField from './DepthOfField.js'
import parameters from '@/config/scene.js'

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
		this.setDebug()
	}

	setInstance() {
		this.instance = new THREE.WebGLRenderer({
			canvas: this.canvas,
			antialias: true,
			powerPreference: 'high-performance',
			// stencil: false,
			// depth: false,
		})
		this.instance.outputEncoding = THREE.sRGBEncoding
		// this.instance.physicallyCorrectLights = true
		// this.instance.toneMapping = THREE.ReinhardToneMapping
		// this.instance.toneMappingExposure = 1.5
		this.instance.setClearColor(parameters.renderer.background)
		this.instance.setSize(this.viewport.width, this.viewport.height)
		this.instance.setPixelRatio(this.viewport.pixelRatio)
	}

	setPostProcess() {
		this.postProcess = {}

		// const RenderTarget = this.viewport.pixelRatio >= 2
		// 	? THREE.WebGLRenderTarget
		// 	: THREE.WebGLMultisampleRenderTarget // this one has ios bug

		const RenderTarget = THREE.WebGLRenderTarget
	
		const renderTarget = new RenderTarget(
			this.viewport.width,
			this.viewport.height,
			{
				generateMipmaps: false,
				minFilter: THREE.LinearFilter,
				magFilter: THREE.LinearFilter,
				format: THREE.RGBFormat,
				encoding: THREE.sRGBEncoding,
			},
		)

		this.postProcess.composer = new EffectComposer(this.instance, renderTarget)
	
		this.postProcess.renderPass = new RenderPass(this.scene, this.camera.instance)

		this.depthOfField = new DepthOfField()
		this.postProcess.bokehPass = this.depthOfField.bokehPass

		this.postProcess.bloomPass = new UnrealBloomPass(
			new THREE.Vector2( this.viewport.width, this.viewport.height ),
			parameters.bloom.strength,
			parameters.bloom.radius,
			parameters.bloom.threshold,
		)

		this.postProcess.composer.addPass(this.postProcess.renderPass)
		this.postProcess.composer.addPass(this.postProcess.bloomPass)
		this.postProcess.composer.addPass(this.postProcess.bokehPass)

		this.postProcess.composer.setSize(this.viewport.width, this.viewport.height)
		this.postProcess.composer.setPixelRatio(this.viewport.pixelRatio)
	}

	setDebug() {
		if (!this.debug.active) return

		{
			const folder = this.debug.ui.addFolder('renderer')

			folder
				.addColor(parameters.renderer, 'background')
				.onChange(value => {
					this.instance.setClearColor(value)
				})
		}

		{
			const folder = this.debug.ui.addFolder('bokeh')

			folder.add(this.postProcess.bokehPass, 'enabled')
			folder
				.add(this.postProcess.bokehPass.uniforms.focus, 'value')
				.min(1)
				.max(16)
				.step(0.001)
				.name('focus')
			folder
				.add(this.postProcess.bokehPass.uniforms.aperture, 'value')
				.min(0)
				.max(0.005)
				.step(0.0001)
				.name('aperture')
			folder
				.add(this.postProcess.bokehPass.uniforms.maxblur, 'value')
				.min(0)
				.max(0.025)
				.step(0.0001)
				.name('maxBlur')
		}

		{
			const folder = this.debug.ui.addFolder('bloom')
			folder.add(this.postProcess.bloomPass, 'strength').min(0).max(2).step(0.001)
			folder.add(this.postProcess.bloomPass, 'radius').min(0).max(2).step(0.001)
			folder.add(this.postProcess.bloomPass, 'threshold').min(0).max(2).step(0.001)
		}
	}

	resize() {
		this.instance.setSize(this.viewport.width, this.viewport.height)
		this.instance.setPixelRatio(this.viewport.pixelRatio)

		this.postProcess.composer.setSize(this.viewport.width, this.viewport.height)
		this.postProcess.composer.setPixelRatio(this.viewport.pixelRatio)
	}

	update(elapsed, delta) {
		// this.instance.render(this.scene, this.camera.instance)
		this.depthOfField.update(elapsed, delta)
		this.postProcess.composer.render()
	}
}