import * as THREE from 'three'

export default class Cube {
	constructor() {
		this.mesh = new THREE.Mesh(
			new THREE.BoxBufferGeometry(1, 1, 1),
			new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true }),
		)
	}
}