import * as THREE from 'three'
import World from './World.js'
import sources from '@/config/videos.js'

export default class Video {
	constructor({ position } = {}) {
		this.world = new World()
		this.scene = this.world.group

		this.setElement()
		this.load(sources)
		this.setCurrent()
		this.setMesh(position)
	}

	setElement() {
		this.element = document.createElement('video')
		this.element.preload = 'auto'
		this.element.muted = true
		this.element.loop = true
		this.element.playsInline = true
	}

	setMesh(position) {
		const texture = new THREE.VideoTexture(this.element)
		texture.encoding = THREE.sRGBEncoding
		texture.generateMipmaps = false
		texture.minFilter = THREE.NearestFilter
		texture.magFilter = THREE.NearestFilter
		texture.anisotropy = 16

		const material = new THREE.MeshBasicMaterial({
			map: texture,
		})

		const geometry = new THREE.CircleBufferGeometry(0.6665305495262146, 32)

		this.mesh = new THREE.Mesh(
			geometry,
			material,
		)
		this.mesh.position.copy(position)
		this.mesh.position.z -= 0.001

		this.mesh.name = 'video'
		this.scene.add(this.mesh)
	}

	setCurrent() {
		const index = this.videos.indexOf(this.current)
		this.current = this.videos[(index + 1) % this.videos.length]

		if (!this.current) return

		this.element.src = this.current.src
		this.element.play()
	}

	load(sources = []) {
		this.videos = sources.map(({ formats, link }) => {
			for (const { type, path } of Object.values(formats)) {
				if (this.element.canPlayType(type) === 'probably') {
					return {
						src: path,
						link,
					}
				}
			}
		})
	}
}