import * as THREE from 'three'
import Sketch from '../Sketch.js'
import Resources from '../utils/Resources.js'
import { sources } from '@/config'
import portalVertexShader from '@/shaders/portal/vertex.glsl?raw'
import portalFragmentShader from '@/shaders/portal/fragment.glsl?raw'
import Fireflies from './Fireflies.js'

let instance = null

export default class World {
	constructor() {
		if (instance) return instance
		instance = this

		this.sketch = new Sketch()
		this.scene = this.sketch.scene
		this.resources = new Resources()
		this.resources.load(sources)

		this.resources.on('ready', () => {
			this.setMesh()

			this.fireflies = new Fireflies(30)
		})
	}

	setMesh() {
		console.log(this.resources.items['model'].scene)

		const bakedTexture = this.resources.items['bakedTexture']
		bakedTexture.flipY = false
		bakedTexture.encoding = THREE.sRGBEncoding
		bakedTexture.generateMipmaps = false
		bakedTexture.minFilter = THREE.NearestFilter
		bakedTexture.magFilter = THREE.NearestFilter
		bakedTexture.anisotropy = 16

		const bakedMaterial = new THREE.MeshBasicMaterial({
			map: bakedTexture,
		})

		const poleLightMaterial = new THREE.MeshBasicMaterial({
			color: 0xfefff0,
		})

		const portalLightMaterial = new THREE.ShaderMaterial({
			uniforms: {
				uTime: { value: 0 },
				uColorStart: { value: new THREE.Color(0x000000) },
				uColorEnd: { value: new THREE.Color(0xffffff) },
			},
			vertexShader: portalVertexShader,
			fragmentShader: portalFragmentShader,
		})

		this.model = this.resources.items['model'].scene
		
		const bakedMesh = this.model.children.find(child => child.name === 'baked')
		bakedMesh.material = bakedMaterial

		this.portalLight = this.model.children.find(child => child.name === 'portalLight')
		this.portalLight.material = portalLightMaterial

		const poleLightA = this.model.children.find(child => child.name === 'poleLightA')
		poleLightA.material = poleLightMaterial

		const poleLightB = this.model.children.find(child => child.name === 'poleLightB')
		poleLightB.material = poleLightMaterial

		this.scene.add(this.model)
	}

	setTexture() {
		this.texture = this.resources.items['protalTexture']
	}

	update(elapsed) {
		if (this.portalLight) {
			this.portalLight.material.uniforms.uTime.value = elapsed
		}

		if (this.fireflies) {
			this.fireflies.mesh.material.uniforms.uTime.value = elapsed
		}
	}
}