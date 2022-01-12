import * as THREE from 'three'
import { gsap } from 'gsap'
import Debug from './utils/Debug.js'
import Viewport from './utils/Viewport.js'
import Time from './utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './world/World.js'
import Raycaster from './utils/Raycaster.js'

let instance = null

// unhooks the GSAP ticker
gsap.ticker.remove(gsap.updateRoot)

export default class Sketch {
	constructor({ canvas } = {}) {
		if (instance) return instance
		instance = this

		this.canvas = canvas

		this.debug = new Debug()
		this.viewport = new Viewport()
		this.scene = new THREE.Scene()
		this.camera = new Camera()
		this.raycaster = new Raycaster()
		this.renderer = new Renderer()
		this.world = new World()

		this.viewport.on('resize', this.resize.bind(this))

		this.world.on('ready', () => {
			this.scene.add(this.world.group)

			this.renderer.depthOfField.setFocusObject( this.world.portal.meshes.poleLightA )
			this.raycaster.setObjects( Object.values(this.world.portal.meshes) )

			this.time = new Time()
			this.time.on('update', this.update.bind(this))
			
			document.body.classList.remove('loading')
		})
	}

	resize() {
		this.camera.resize()
		this.renderer.resize()
	}

	update(elapsed, delta) {
		this.debug.beforeRender()

		this.camera.update()

		this.raycaster.update()

		this.world.update(elapsed)

		gsap.updateRoot(elapsed)

		this.renderer.update(elapsed)

		this.debug.afterRender()
	}
}