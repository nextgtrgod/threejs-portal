import * as THREE from 'three'
import World from './World.js'
import Resources from '../utils/Resources.js'
import vertexShader from '@/shaders/portal/vertex.glsl?raw'
import fragmentShader from '@/shaders/portal/fragment.glsl?raw'
import Debug from '../utils/Debug.js'
import parameters from '@/config/scene.js'

export default class Portal {
	constructor() {
		this.world = new World()
		this.scene = this.world.scene
		this.resources = new Resources()
		this.debug = new Debug()

		this.createMaterials()
		this.setMaterials()
		this.setDebug()
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
				uInnerColor: { value: new THREE.Color(0x000000) },
				uOuterColor: { value: new THREE.Color(0xffffff) },
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
		for (const child of model.children) {

			if (Object.keys(this.meshes).length === names.length) break

			if (names.includes(child.name)) {
				this.meshes[child.name] = child
				this.meshes[child.name].material = this.materials[ map[child.name] ]
			}
		}

		model.name = 'portal'
		this.scene.add(model)
	}

	setDebug() {
		if (!this.debug.active) return

		const folder = this.debug.ui.addFolder('portal')

		folder
			.addColor(parameters.portal, 'innerColor')
			.onChange(value => {
				this.meshes.portalLight.material.uniforms.uInnerColor.value = value
			})

		folder
			.addColor(parameters.portal, 'outerColor')
			.onChange(value => {
				this.meshes.portalLight.material.uniforms.uOuterColor.value = value
			})
	}

	update(elapsed) {
		this.meshes.portalLight.material.uniforms.uTime.value = elapsed
	}
}