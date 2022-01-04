import * as THREE from 'three'
import World from './World.js'
import Viewport from '../utils/Viewport.js'
import Debug from '../utils/Debug.js'
import vertexShader from '@/shaders/fireflies/vertex.glsl?raw'
import fragmentShader from '@/shaders/fireflies/fragment.glsl?raw'
import parameters from '@/config/scene.js'

export default class Fireflies {
	constructor(count = parameters.fireflies.count) {
		this.count = count
		this.world = new World()
		this.scene = this.world.scene
		this.viewport = new Viewport()
		this.debug = new Debug()

		this.setMesh()
		this.setDebug()

		this.viewport.on('resize', () => {
			this.mesh.material.uniforms.uPixelRatio.value = this.viewport.pixelRatio
		})
	}

	setMesh() {
		const geometry = new THREE.BufferGeometry()
		const positionArray = new Float32Array(this.count * 3)
		const scaleArray = new Float32Array(this.count * 1)

		for (let i = 0; i < this.count; i++) {
			positionArray[i * 3 + 0] = (Math.random() - 0.5) * 4
			positionArray[i * 3 + 1] = Math.random() * .75 + .5
			positionArray[i * 3 + 2] = (Math.random() - 0.5) * 3 + .25

			scaleArray[i] = Math.random()
		}
		geometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3))
		geometry.setAttribute('aScale', new THREE.BufferAttribute(scaleArray, 1))

		const material = new THREE.ShaderMaterial({
			uniforms: {
				uTime: { value: 0 },
				uPixelRatio: { value: this.viewport.pixelRatio },
				uSize: { value: parameters.fireflies.size },
			},
			vertexShader,
			fragmentShader,
			blending: THREE.AdditiveBlending,
			transparent: true,
			depthWrite: false,
		})

		this.mesh = new THREE.Points(geometry, material)

		this.scene.add(this.mesh)
	}

	disposeMesh() {
		this.mesh.geometry.dispose()
		this.mesh.material.dispose()

		this.scene.remove(this.mesh)
	}

	setDebug() {
		if (!this.debug.active) return

		const folder = this.debug.ui.addFolder('fireflies')

		folder
			.add(parameters.fireflies, 'size')
			.min(50)
			.max(500)
			.step(1)
			.onChange(value => {
				this.mesh.material.uniforms.uSize.value = value
			})

		folder
			.add(parameters.fireflies, 'count')
			.min(10)
			.max(100)
			.step(1)
			.onFinishChange(value => {
				this.count = value
				this.disposeMesh()
				this.setMesh()
			})
	}

	update(elapsed) {
		this.mesh.material.uniforms.uTime.value = elapsed
	}
}