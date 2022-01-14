import video1_mp4 from '@/assets/videos/1.mp4?url'
import video1_webm from '@/assets/videos/1.webm?url'
import video2_mp4 from '@/assets/videos/2.mp4?url'
import video2_webm from '@/assets/videos/2.webm?url'

const videos = [
	{
		link: 'https://nextgtrgod.github.io/threejs-raging-sea/',
		formats: {
			webm: {
				type: 'video/webm; codecs="vp9"',
				path: video1_webm,
			},
			mp4: {
				type: 'video/mp4; codecs="avc1.4D4029"',
				path: video1_mp4,
			},
		},
	},
	{
		link: 'https://nextgtrgod.github.io/threejs-floating-island/',
		formats: {
			webm: {
				type: 'video/webm; codecs="vp9"',
				path: video2_webm,
			},
			mp4: {
				type: 'video/mp4; codecs="avc1.4D4029"',
				path: video2_mp4,
			},
		},
	},
]

export default videos