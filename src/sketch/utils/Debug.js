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

			this.stats = new Stats()
			this.stats.showPanel(0)
			document.body.appendChild(this.stats.dom)
		}
	}

	begin() {
		if (this.stats) this.stats.begin()
	}

	end() {
		if (this.stats) this.stats.end()
	}
}
