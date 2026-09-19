import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
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
		// this.instance.logarithmicDepthBuffer = false
		// this.instance.physicallyCorrectLights = true
		// this.instance.toneMapping = THREE.ReinhardToneMapping
		// this.instance.toneMappingExposure = 1.5
		this.instance.setClearColor(parameters.renderer.background)
		this.instance.setSize(this.viewport.width, this.viewport.height)
		this.instance.setPixelRatio(this.viewport.pixelRatio)
	}

	setPostProcess() {
		this.postProcess = {}

		const renderTarget = new THREE.WebGLRenderTarget(
			this.viewport.width,
			this.viewport.height,
			{
				type: THREE.HalfFloatType,
				generateMipmaps: false,
				minFilter: THREE.LinearFilter,
				magFilter: THREE.LinearFilter,
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

		this.postProcess.ditherPass = new ShaderPass({
			uniforms: {
				tDiffuse: { value: null },
				uAmount: { value: parameters.dither.amount },
			},
			vertexShader: /* glsl */`
				varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
				}
			`,
			fragmentShader: /* glsl */`
				uniform sampler2D tDiffuse;
				uniform float uAmount;
				varying vec2 vUv;

				float gradientNoise(vec2 p) {
					return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
				}

				void main() {
					vec4 color = texture2D(tDiffuse, vUv);

					float n0 = gradientNoise(gl_FragCoord.xy);
					float n1 = gradientNoise(gl_FragCoord.yx * 1.3 + vec2(17.0, 31.0));

					float dither = (n0 - n1) * uAmount / 255.0;

					gl_FragColor = vec4(color.rgb + dither, color.a);
				}
			`,
		})

		this.postProcess.composer.addPass(this.postProcess.renderPass)
		this.postProcess.composer.addPass(this.postProcess.bloomPass)
		this.postProcess.composer.addPass(this.postProcess.bokehPass)
		this.postProcess.composer.addPass(this.postProcess.ditherPass)

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
			folder.add(this.postProcess.bloomPass, 'enabled')
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

	update() {
		// this.instance.render(this.scene, this.camera.instance)
		this.depthOfField.update()
		this.postProcess.composer.render()
	}
}