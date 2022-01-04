import * as THREE from 'three'
import EventEmitter from '../utils/EventEmitter.js'
import Sketch from '../Sketch.js'
import Resources from '../utils/Resources.js'
import { sources } from '@/config'
import vertexShader from '@/shaders/portal/vertex.glsl?raw'
import fragmentShader from '@/shaders/portal/fragment.glsl?raw'
import Fireflies from './Fireflies.js'

let instance = null

export default class World extends EventEmitter {
	constructor() {
		super()

		if (instance) return instance
		instance = this

		this.sketch = new Sketch()
		this.scene = this.sketch.scene
		this.resources = new Resources()
		this.resources.load(sources)

		this.resources.on('ready', () => {
			this.createMaterials()
			this.setMaterials()

			const fireflies = new Fireflies(30)

			this.meshes['fireflies'] = fireflies.mesh
		})
	}

	createMaterials() {
		this.materials = {}

		const bakedTexture = this.resources.items['bakedTexture']
		bakedTexture.flipY = false
		bakedTexture.encoding = THREE.sRGBEncoding
		bakedTexture.generateMipmaps = false
		bakedTexture.minFilter = THREE.NearestFilter
		bakedTexture.magFilter = THREE.NearestFilter
		bakedTexture.anisotropy = 16

		this.materials['baked'] = new THREE.MeshBasicMaterial({
			map: bakedTexture,
		})

		this.materials['poleLight'] = new THREE.MeshBasicMaterial({
			color: 0xfefff0,
		})

		this.materials['portalLight'] = new THREE.ShaderMaterial({
			uniforms: {
				uTime: { value: 0 },
				uColorStart: { value: new THREE.Color(0x000000) },
				uColorEnd: { value: new THREE.Color(0xffffff) },
			},
			vertexShader,
			fragmentShader,
		})
	}

	setMaterials() {
		const model = this.resources.items['model'].scene

		const map = {
			baked: 'baked',
			poleLightA: 'poleLight',
			poleLightB: 'poleLight',
			portalLight: 'portalLight',
		}

		this.meshes = {}

		const names = Object.keys(map)
		for (let i = 0; i < model.children.length; i++) {

			if (Object.keys(this.meshes).length === names.length) break

			const child = model.children[i]

			if (names.includes(child.name)) {
				this.meshes[child.name] = child
				this.meshes[child.name].material = this.materials[ map[child.name] ]
			}
		}

		this.scene.add(model)

		this.emit('ready')
	}

	update(elapsed) {
		this.meshes.portalLight.material.uniforms.uTime.value = elapsed
		this.meshes.fireflies.material.uniforms.uTime.value = elapsed
	}
}