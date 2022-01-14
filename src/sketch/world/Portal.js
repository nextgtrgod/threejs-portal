import * as THREE from 'three'
import { gsap } from 'gsap'
import World from './World.js'
import Resources from '../utils/Resources.js'
import Video from './Video.js'
import vertexShader from '@/shaders/portal/vertex.glsl?raw'
import fragmentShader from '@/shaders/portal/fragment.glsl?raw'
import Debug from '../utils/Debug.js'
import parameters from '@/config/scene.js'

export default class Portal {
	constructor() {
		this.world = new World()
		this.scene = this.world.group
		this.raycaster = this.world.sketch.raycaster
		this.resources = new Resources()
		this.debug = new Debug()

		this.opened = false

		this.createMaterials()
		this.setMaterials()
		this.setVideo()
		this.setAnimation()
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
				uAlpha: { value: 1 },
				uOffset: { value: 1.4 },
			},
			vertexShader,
			fragmentShader,
			transparent: true,
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
				// this.meshes[child.name].material.wireframe = true
			}
		}

		model.name = 'portal'
		this.scene.add(model)
	}

	setVideo() {
		this.video = new Video({
			position: this.meshes.portalLight.position,
		})
	}

	setAnimation() {
		const uniforms = this.meshes.portalLight.material.uniforms

		const params = {
			uAlpha: 1,
			uOffset: 1.4,
		}
		const tween = gsap.to(
			params,
			{
				uAlpha: 0,
				uOffset: 2.5,
				duration: 0.85,
				ease: 'power1.inOut',
				onUpdate() {
					uniforms.uAlpha.value = params.uAlpha
					uniforms.uOffset.value = params.uOffset
				},
				onComplete: () => {
					this.opened = true

					setTimeout(() => {
						tween.reverse()
					}, 2500)
				},
				onReverseComplete: () => {
					this.opened = false
					this.video.setCurrent()
				},
				paused: true,
			},
		)

		this.raycaster.on('click', ({ object }) => {
			if (object.name !== 'portalLight') return
			if (tween.isActive()) return

			if (this.opened) {
				window.open(this.video.current.link, '_blank').focus()
				return tween.reverse()
			}

			tween.play()
		})
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