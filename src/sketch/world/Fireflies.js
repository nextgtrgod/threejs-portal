import * as THREE from 'three'
import World from './World.js'
import vertexShader from '@/shaders/fireflies/vertex.glsl?raw'
import fragmentShader from '@/shaders/fireflies/fragment.glsl?raw'

export default class Fireflies {
	constructor(count = 30) {
		this.world = new World()
		this.scene = this.world.scene
		this.count = count
		
		this.setMesh()

		this.scene.add(this.mesh)
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
				uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
				uSize: { value: 200 },
			},
			vertexShader,
			fragmentShader,
			blending: THREE.AdditiveBlending,
			transparent: true,
			depthWrite: false,
		})

		this.mesh = new THREE.Points(geometry, material)
	}
}