import Sketch from '../Sketch.js'
import Cube from './Cube.js'

let instance = null

export default class World {
	constructor() {
		if (instance) return instance
		instance = this

		this.sketch = new Sketch()
		this.scene = this.sketch.scene

		this.cube = new Cube()

		this.scene.add(this.cube.mesh)
	}

	update(elapsed) {
		this.cube.mesh.rotation.y = elapsed * 0.5
	}
}