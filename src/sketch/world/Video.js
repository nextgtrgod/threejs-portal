import * as THREE from 'three'
import World from './World.js'
import videoSrc from '@/assets/videos/1.mp4?url'

export default class Video {
	constructor() {
		this.world = new World()
		this.scene = this.world.group

		const element = document.createElement('video')

		// const supports = element.canPlayType('video/webm; codecs="vp9"')
		// console.log(supports)

		element.src = videoSrc
		element.preload = 'auto'
		element.muted = true
		element.loop = true
		element.playsInline = true
		element.play()

		const texture = new THREE.VideoTexture(element)
		texture.encoding = THREE.sRGBEncoding
		texture.generateMipmaps = false
		texture.minFilter = THREE.NearestFilter
		texture.magFilter = THREE.NearestFilter
		texture.anisotropy = 16

		const material = new THREE.MeshBasicMaterial({
			map: texture,
		})

		const geometry = new THREE.CircleBufferGeometry(0.6665305495262146, 32)

		const mesh = new THREE.Mesh(
			geometry,
			material,
		)
		mesh.position.copy( this.world.portal.meshes.portalLight.position )
		mesh.position.z -= 0.001

		mesh.name = 'video'
		this.scene.add(mesh)

		// console.log(this.meshes.portalLight.position)

		// const box = new THREE.Box3()
		// this.meshes.portalLight.geometry.computeBoundingBox()
		// box.copy( this.meshes.portalLight.geometry.boundingBox ).applyMatrix4( this.meshes.portalLight.matrixWorld )

		// console.log(box)
	}
}