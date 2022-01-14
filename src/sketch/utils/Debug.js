import GUI from 'lil-gui'
import Stats from 'stats.js'

let instance = null

export default class Debug {
	constructor() {
		if (instance) return instance
		instance = this

		this.active = import.meta.env.DEV || window.location.hash === '#debug'

		if (this.active) {
			this.ui = new GUI()
			if (window.innerWidth < 720) this.ui.close()

			this.stats = new Stats()
			this.stats.showPanel(1)
			document.body.appendChild(this.stats.dom)
		}
	}

	beforeRender() {
		if (this.stats) this.stats.begin()
	}

	afterRender() {
		if (this.stats) this.stats.end()
	}
}
