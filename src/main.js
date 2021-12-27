import './styles/index.css'
import Sketch from './sketch/Sketch.js'

const sketch = new Sketch({
	canvas: document.getElementById('scene'),
})

if (import.meta.env.DEV) window.sketch = sketch