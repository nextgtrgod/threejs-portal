import EventEmitter from './EventEmitter.js'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

let instance = null

export default class Resources extends EventEmitter {
	constructor() {
		super()

		if (instance) return instance
		instance = this

		this.items = {}

		this.toLoad = 0
		this.loaded = 0

		this.ui = document.querySelector('#loader .bar')

		this.setLoaders()
	}

	setLoaders() {
		const dracoLoader = new DRACOLoader()
		dracoLoader.setDecoderPath('/draco/')

		const gltfLoader = new GLTFLoader()
		gltfLoader.setDRACOLoader(dracoLoader)

		const textureLoader = new THREE.TextureLoader()

		this.loaders = {
			gltfLoader,
			textureLoader,
		}
	}

	load(sources = []) {
		this.sources = sources
		this.toLoad = this.sources.length
		this.loaded = 0

		for (const source of this.sources) {
			if (this.items[source.name]) {
				this.sourceLoaded(source, this.items[source.name])
				continue
			}

			switch (source.type) {
				case 'gltf': {
					this.loaders.gltfLoader.load(
						source.path,
						file => this.sourceLoaded(source, file),
					)
					break
				}
				case 'texture': {
					this.loaders.textureLoader.load(
						source.path,
						file => this.sourceLoaded(source, file),
					)
					break
				}
			}
		}
	}

	sourceLoaded(source, file) {
		file.name = source.name
		this.items[source.name] = file
		this.loaded++

		this.updateUI()

		if (this.loaded === this.toLoad) {
			this.emit('ready')
		}
	}

	updateUI() {
		if (!this.ui) return

		const progress = Math.round(100 * (this.loaded / this.toLoad))

		this.ui.style.transform = `scaleX(${progress}%)`
	}
}
