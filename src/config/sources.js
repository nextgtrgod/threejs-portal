import modelUrl from '@/assets/models/portal.glb?url'
import bakedTextureUrl from '@/assets/textures/baked.jpg?url'

const sources = [
	{ type: 'gltf', name: 'model', path: modelUrl },
	{ type: 'texture', name: 'bakedTexture', path: bakedTextureUrl },
]

export default sources