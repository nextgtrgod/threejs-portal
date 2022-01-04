import * as THREE from 'three'

const parameters = {
	renderer: {
		background: new THREE.Color(0x232323),
	},
	bokeh: {
		focus: 5.133,
		aperture: 0.003,
		maxblur: 0.005,
	},
	bloom: {
		strength: 0.5,
		radius: 0.4,
		threshold: 0.8,
	},
	portal: {
		innerColor: new THREE.Color(0x000000),
		outerColor: new THREE.Color(0xffffff),
	},
	fireflies: {
		count: 30,
		size: 200,
	},
}

export default parameters