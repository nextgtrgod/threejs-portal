import{G as A,S as M,C as h,P as R,O as S,W as F,s as u,a as I,b as T,L as P,R as D,E as _,c as O,B as U,U as j,V as B,D as G,d as E,T as W,N as b,M as y,e as z,f as N,g as k,A as $,h as q,i as V}from"./vendor.8ffb4f08.js";const H=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}};H();let m=null;class g{constructor(){if(m)return m;m=this,this.active=window.location.hash==="#debug",this.active&&(this.ui=new A,this.stats=new M,this.stats.showPanel(1),document.body.appendChild(this.stats.dom))}beforeRender(){this.stats&&this.stats.begin()}afterRender(){this.stats&&this.stats.end()}}class c{constructor(){this.callbacks={}}on(e,t){typeof t=="function"&&(this.callbacks[e]=[...this.callbacks[e]||[],t])}emit(e,...t){(this.callbacks[e]||[]).forEach(n=>n(...t))}off(e,t){!this.callbacks[e]||(this.callbacks[e]=this.callbacks[e].filter(n=>n!==t))}}let p=null;class L extends c{constructor(){super();if(p)return p;p=this,this.setSizes(),window.addEventListener("resize",()=>{this.setSizes(),this.emit("resize")})}setSizes(){this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2)}}class K extends c{constructor(e=!0){super();this.current=performance.now(),this.elapsed=0,this.delta=0,this.rafId=0,e&&this.start()}start(){this.running||(this.running=!0,this.update())}stop(){!this.running||(window.cancelAnimationFrame(this.rafId),this.running=!1)}pause(){this.stop()}resume(){this.current=performance.now(),this.start()}update(){const e=performance.now();this.delta=(e-this.current)/1e3,this.current=e,this.elapsed+=this.delta,this.emit("update",this.elapsed,this.delta),this.rafId=window.requestAnimationFrame(this.update.bind(this))}}const a={minDistance:4,maxDistance:12,minPolarAngle:-Math.PI,maxPolarAngle:Math.PI/2,minAzimuthAngle:-Math.PI/2,maxAzimuthAngle:Math.PI/2};var Y="/threejs-portal/assets/portal.0f866fc7.glb",J="/threejs-portal/assets/baked.ed87f214.jpg";const Q=[{type:"gltf",name:"model",path:Y},{type:"texture",name:"bakedTexture",path:J}],o={renderer:{background:new h(2302755)},bokeh:{focus:5.133,aperture:.003,maxblur:.005},bloom:{strength:.5,radius:.4,threshold:.8},portal:{innerColor:new h(0),outerColor:new h(16777215)},fireflies:{count:30,size:200}};class X{constructor(){this.sketch=new l,this.viewport=this.sketch.viewport,this.scene=this.sketch.scene,this.canvas=this.sketch.canvas,this.setInstance(),this.setOrbitControls()}setInstance(){this.instance=new R(45,this.viewport.width/this.viewport.height,.1,50),this.instance.position.set(4,2,4),this.scene.add(this.instance)}setOrbitControls(){this.controls=new S(this.instance,this.canvas),this.controls.enableDamping=!0,this.controls.minDistance=a.minDistance,this.controls.maxDistance=a.maxDistance,this.controls.minPolarAngle=a.minPolarAngle,this.controls.maxPolarAngle=a.maxPolarAngle,this.controls.minAzimuthAngle=a.minAzimuthAngle,this.controls.maxAzimuthAngle=a.maxAzimuthAngle}resize(){this.instance.aspect=this.viewport.width/this.viewport.height,this.instance.updateProjectionMatrix()}update(){this.controls.update()}}class Z{constructor(){this.sketch=new l,this.canvas=this.sketch.canvas,this.viewport=this.sketch.viewport,this.scene=this.sketch.scene,this.camera=this.sketch.camera,this.debug=this.sketch.debug,this.setInstance(),this.setPostProcess(),this.setDebug()}setInstance(){this.instance=new F({canvas:this.canvas,antialias:!1,powerPreference:"high-performance"}),this.instance.outputEncoding=u,this.instance.setClearColor(o.renderer.background),this.instance.setSize(this.viewport.width,this.viewport.height),this.instance.setPixelRatio(this.viewport.pixelRatio)}setPostProcess(){this.postProcess={};const e=this.viewport.pixelRatio>2?I:T,t=new e(this.viewport.width,this.viewport.height,{generateMipmaps:!1,minFilter:P,magFilter:P,format:D,encoding:u});this.postProcess.composer=new _(this.instance,t),this.postProcess.renderPass=new O(this.scene,this.camera.instance),this.postProcess.bokehPass=new U(this.scene,this.camera.instance,{focus:o.bokeh.focus,aperture:o.bokeh.aperture,maxblur:o.bokeh.maxblur}),this.postProcess.bloomPass=new j(new B(this.viewport.width,this.viewport.height),o.bloom.strength,o.bloom.radius,o.bloom.threshold),this.postProcess.composer.addPass(this.postProcess.renderPass),this.postProcess.composer.addPass(this.postProcess.bloomPass),this.postProcess.composer.addPass(this.postProcess.bokehPass),this.postProcess.composer.setSize(this.viewport.width,this.viewport.height),this.postProcess.composer.setPixelRatio(this.viewport.pixelRatio)}setDebug(){if(!!this.debug.active){this.debug.ui.addFolder("renderer").addColor(o.renderer,"background").onChange(t=>{this.instance.setClearColor(t)});{const e=this.debug.ui.addFolder("bokeh");e.add(this.postProcess.bokehPass,"enabled"),e.add(this.postProcess.bokehPass.uniforms.focus,"value").min(1).max(10).step(.001).name("focus"),e.add(this.postProcess.bokehPass.uniforms.aperture,"value").min(0).max(.005).step(1e-4).name("aperture"),e.add(this.postProcess.bokehPass.uniforms.maxblur,"value").min(0).max(.025).step(1e-4).name("maxBlur")}{const e=this.debug.ui.addFolder("bloom");e.add(this.postProcess.bloomPass,"strength").min(0).max(2).step(.001),e.add(this.postProcess.bloomPass,"radius").min(0).max(2).step(.001),e.add(this.postProcess.bloomPass,"threshold").min(0).max(2).step(.001)}}}resize(){this.instance.setSize(this.viewport.width,this.viewport.height),this.instance.setPixelRatio(this.viewport.pixelRatio),this.postProcess.composer.setSize(this.viewport.width,this.viewport.height),this.postProcess.composer.setPixelRatio(this.viewport.pixelRatio)}update(){this.postProcess.composer.render()}}let f=null;class C extends c{constructor(){super();if(f)return f;f=this,this.items={},this.toLoad=0,this.loaded=0,this.setLoaders()}setLoaders(){const e=new G;e.setDecoderPath("/draco/");const t=new E;t.setDRACOLoader(e),this.loaders={gltfLoader:t,textureLoader:new W}}load(e=[]){this.sources=e,this.toLoad=this.sources.length,this.loaded=0;for(const t of this.sources){if(this.items[t.name]){this.sourceLoaded(t,this.items[t.name]);continue}switch(t.type){case"gltf":{this.loaders.gltfLoader.load(t.path,n=>this.sourceLoaded(t,n));break}case"texture":{this.loaders.textureLoader.load(t.path,n=>this.sourceLoaded(t,n));break}}}}sourceLoaded(e,t){t.name=e.name,this.items[e.name]=t,this.loaded++,this.loaded===this.toLoad&&this.emit("ready")}}var ee=`
varying vec2 vUv;

void main() {
	vec4 modelPosition = modelMatrix * vec4(position, 1.0);
	vec4 viewPosition = viewMatrix * modelPosition;
	vec4 projectionPosition = projectionMatrix * viewPosition;

	gl_Position = projectionPosition;

	vUv = uv;
}`,te=`
uniform float uTime;
uniform vec3 uInnerColor;
uniform vec3 uOuterColor;

varying vec2 vUv;

//  Classic Perlin 3D Noise 
//  by Stefan Gustavson
vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec3 fade(vec3 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

float cnoise(vec3 P) {
	vec3 Pi0 = floor(P); // Integer part for indexing
	vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
	Pi0 = mod(Pi0, 289.0);
	Pi1 = mod(Pi1, 289.0);
	vec3 Pf0 = fract(P); // Fractional part for interpolation
	vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
	vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
	vec4 iy = vec4(Pi0.yy, Pi1.yy);
	vec4 iz0 = Pi0.zzzz;
	vec4 iz1 = Pi1.zzzz;

	vec4 ixy = permute(permute(ix) + iy);
	vec4 ixy0 = permute(ixy + iz0);
	vec4 ixy1 = permute(ixy + iz1);

	vec4 gx0 = ixy0 / 7.0;
	vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
	gx0 = fract(gx0);
	vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
	vec4 sz0 = step(gz0, vec4(0.0));
	gx0 -= sz0 * (step(0.0, gx0) - 0.5);
	gy0 -= sz0 * (step(0.0, gy0) - 0.5);

	vec4 gx1 = ixy1 / 7.0;
	vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
	gx1 = fract(gx1);
	vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
	vec4 sz1 = step(gz1, vec4(0.0));
	gx1 -= sz1 * (step(0.0, gx1) - 0.5);
	gy1 -= sz1 * (step(0.0, gy1) - 0.5);

	vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
	vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
	vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
	vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
	vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
	vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
	vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
	vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

	vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
	g000 *= norm0.x;
	g010 *= norm0.y;
	g100 *= norm0.z;
	g110 *= norm0.w;
	vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
	g001 *= norm1.x;
	g011 *= norm1.y;
	g101 *= norm1.z;
	g111 *= norm1.w;

	float n000 = dot(g000, Pf0);
	float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
	float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
	float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
	float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
	float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
	float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
	float n111 = dot(g111, Pf1);

	vec3 fade_xyz = fade(Pf0);
	vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
	vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
	float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 

	return 2.2 * n_xyz;
}

void main() {

	// Diplace the UV
	vec2 displacedUv = vUv + cnoise( vec3(vUv * 5.0, uTime * 0.1) );

	// Perlin noise
	float strength = cnoise( vec3(displacedUv * 5.0, uTime * 0.2) );

	// Outer glow
	float outerGlow = distance(vUv, vec2(0.5)) * 5.0 - 1.4;
	strength += outerGlow;

	// Apply cool step
	strength += step(-0.2, strength) * 0.8;

	// Clamp value from 0 to 1
	strength = clamp(strength, 0.0, 1.0);

	// Final color
	vec3 color = mix(uInnerColor, uOuterColor, strength);

	gl_FragColor = vec4(color, 1.0);
}`;class se{constructor(){this.world=new w,this.scene=this.world.scene,this.resources=new C,this.debug=new g,this.createMaterials(),this.setMaterials(),this.setDebug()}createMaterials(){this.materials={};const e=this.resources.items.bakedTexture;e.flipY=!1,e.encoding=u,e.generateMipmaps=!1,e.minFilter=b,e.magFilter=b,e.anisotropy=16,this.materials.baked=new y({map:e}),this.materials.poleLight=new y({color:16711664}),this.materials.portalLight=new z({uniforms:{uTime:{value:0},uInnerColor:{value:new h(0)},uOuterColor:{value:new h(16777215)}},vertexShader:ee,fragmentShader:te})}setMaterials(){const e=this.resources.items.model.scene,t={baked:"baked",poleLightA:"poleLight",poleLightB:"poleLight",portalLight:"portalLight"};this.meshes={};const n=Object.keys(t);for(const s of e.children){if(Object.keys(this.meshes).length===n.length)break;n.includes(s.name)&&(this.meshes[s.name]=s,this.meshes[s.name].material=this.materials[t[s.name]])}this.scene.add(e)}setDebug(){if(!this.debug.active)return;const e=this.debug.ui.addFolder("portal");e.addColor(o.portal,"innerColor").onChange(t=>{this.meshes.portalLight.material.uniforms.uInnerColor.value=t}),e.addColor(o.portal,"outerColor").onChange(t=>{this.meshes.portalLight.material.uniforms.uOuterColor.value=t})}update(e){this.meshes.portalLight.material.uniforms.uTime.value=e}}var ie=`
uniform float uTime;
uniform float uPixelRatio;
uniform float uSize;

attribute float aScale;

void main() {
	vec4 modelPosition = modelMatrix * vec4(position, 1.0);

	modelPosition.y += sin(uTime + modelPosition.x * 100.0) * aScale * 0.2;

	vec4 viewPosition = viewMatrix * modelPosition;
	vec4 projectionPosition = projectionMatrix * viewPosition;

	gl_Position = projectionPosition;

	gl_PointSize = uSize * aScale * uPixelRatio;
	gl_PointSize *= (1.0 / -viewPosition.z);
}`,ne=`
void main() {
	float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
	float strength = 0.05 / distanceToCenter - 0.1 * 2.0;

	gl_FragColor = vec4(1.0, 1.0, 1.0, strength);
}`;class oe{constructor(e=o.fireflies.count){this.count=e,this.world=new w,this.scene=this.world.scene,this.viewport=new L,this.debug=new g,this.setMesh(),this.setDebug(),this.viewport.on("resize",()=>{this.mesh.material.uniforms.uPixelRatio.value=this.viewport.pixelRatio})}setMesh(){const e=new N,t=new Float32Array(this.count*3),n=new Float32Array(this.count*1);for(let i=0;i<this.count;i++)t[i*3+0]=(Math.random()-.5)*4,t[i*3+1]=Math.random()*.75+.5,t[i*3+2]=(Math.random()-.5)*3+.25,n[i]=Math.random();e.setAttribute("position",new k(t,3)),e.setAttribute("aScale",new k(n,1));const s=new z({uniforms:{uTime:{value:0},uPixelRatio:{value:this.viewport.pixelRatio},uSize:{value:o.fireflies.size}},vertexShader:ie,fragmentShader:ne,blending:$,transparent:!0,depthWrite:!1});this.mesh=new q(e,s),this.scene.add(this.mesh)}disposeMesh(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.scene.remove(this.mesh)}setDebug(){if(!this.debug.active)return;const e=this.debug.ui.addFolder("fireflies");e.add(o.fireflies,"size").min(50).max(500).step(1).onChange(t=>{this.mesh.material.uniforms.uSize.value=t}),e.add(o.fireflies,"count").min(10).max(100).step(1).onFinishChange(t=>{this.count=t,this.disposeMesh(),this.setMesh()})}update(e){this.mesh.material.uniforms.uTime.value=e}}let v=null;class w extends c{constructor(){super();if(v)return v;v=this,this.sketch=new l,this.scene=this.sketch.scene,this.resources=new C,this.resources.load(Q),this.resources.on("ready",()=>{this.portal=new se,this.fireflies=new oe,this.emit("ready")})}update(e){this.portal.update(e),this.fireflies.update(e)}}let x=null;class l{constructor({canvas:e}={}){if(x)return x;x=this,this.canvas=e,this.debug=new g,this.viewport=new L,this.scene=new V,this.camera=new X,this.renderer=new Z,this.world=new w,this.viewport.on("resize",this.resize.bind(this)),this.world.on("ready",()=>{this.time=new K,this.time.on("update",this.update.bind(this)),document.body.classList.remove("loading")})}resize(){this.camera.resize(),this.renderer.resize()}update(e,t){this.debug.beforeRender(),this.camera.update(),this.world.update(e),this.renderer.update(),this.debug.afterRender()}}new l({canvas:document.getElementById("scene")});