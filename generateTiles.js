const sharp = require('sharp')

sharp('./src/assets/textures/baked.jpg')
	.tile({ size: 2048, depth: 'one' })
	.toFile('./src/assets/textures/baked-tiles')
