import{G as S,S as O,C as c,P as F,V as R,O as M,B as j,W as I,s as u,L as z,R as T,E as D,a as _,U,b as k,c as B,D as E,d as G,T as $,N as m,M as g,e as C,g as l,f as V,h as L,A as W,i as q,j as N,k as H,l as K,m as X,n as Y,o as J}from"./vendor.898e662e.js";const Q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}};Q();let v=null;class w{constructor(){if(v)return v;v=this,this.active=window.location.hash==="#debug",this.active&&(this.ui=new S,this.stats=new O,this.stats.showPanel(1),document.body.appendChild(this.stats.dom))}beforeRender(){this.stats&&this.stats.begin()}afterRender(){this.stats&&this.stats.end()}}class d{constructor(){this.callbacks={}}on(e,t){typeof t=="function"&&(this.callbacks[e]=[...this.callbacks[e]||[],t])}emit(e,...t){(this.callbacks[e]||[]).forEach(i=>i(...t))}off(e,t){!this.callbacks[e]||(this.callbacks[e]=this.callbacks[e].filter(i=>i!==t))}}class Z extends d{constructor(){super();this.setSizes(),window.addEventListener("resize",()=>{this.setSizes(),this.emit("resize")})}setSizes(){this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2)}}class ee extends d{constructor(e=!0){super();this.current=performance.now(),this.elapsed=0,this.delta=0,this.rafId=0,e&&this.start()}start(){this.running||(this.running=!0,this.update())}stop(){!this.running||(window.cancelAnimationFrame(this.rafId),this.running=!1)}pause(){this.stop()}resume(){this.current=performance.now(),this.start()}update(){const e=performance.now();this.delta=(e-this.current)/1e3,this.current=e,this.elapsed+=this.delta,this.emit("update",this.elapsed,this.delta),this.rafId=window.requestAnimationFrame(this.update.bind(this))}}const a={minDistance:6,maxDistance:20,zoomSpeed:.5,minPolarAngle:-Math.PI,maxPolarAngle:Math.PI/2,minAzimuthAngle:-Math.PI/2,maxAzimuthAngle:Math.PI/2};var te="/threejs-portal/assets/portal.0f866fc7.glb",se="/threejs-portal/assets/baked.ed87f214.jpg";const ie=[{type:"gltf",name:"model",path:te},{type:"texture",name:"bakedTexture",path:se}],n={renderer:{background:new c(2302755)},bokeh:{focus:11.945,aperture:.003,maxblur:.0075},bloom:{strength:.6,radius:.4,threshold:.8},portal:{innerColor:new c(0),outerColor:new c(16777215)},fireflies:{count:40,size:200}};class oe{constructor(){this.sketch=new h,this.viewport=this.sketch.viewport,this.scene=this.sketch.scene,this.canvas=this.sketch.canvas,this.setInstance(),this.setOrbitControls()}setInstance(){this.instance=new F(25,this.viewport.width/this.viewport.height,.1,50),this.instance.position.set(8,6,8),this.instance.lookAt(new R(0,0,0)),this.scene.add(this.instance)}setOrbitControls(){this.controls=new M(this.instance,this.canvas),this.controls.enableDamping=!0,this.controls.minDistance=a.minDistance,this.controls.maxDistance=a.maxDistance,this.controls.zoomSpeed=a.zoomSpeed,this.controls.minPolarAngle=a.minPolarAngle,this.controls.maxPolarAngle=a.maxPolarAngle,this.controls.minAzimuthAngle=a.minAzimuthAngle,this.controls.maxAzimuthAngle=a.maxAzimuthAngle}resize(){this.instance.aspect=this.viewport.width/this.viewport.height,this.instance.updateProjectionMatrix()}update(){this.controls.update()}}class ne{constructor(){this.sketch=new h,this.scene=this.sketch.scene,this.camera=this.sketch.camera,this.raycaster=this.sketch.raycaster,this.bokehPass=new j(this.scene,this.camera.instance,{focus:n.bokeh.focus,aperture:n.bokeh.aperture,maxblur:n.bokeh.maxblur}),this.focus={value:n.bokeh.focus,target:n.bokeh.focus,easing:.1,defaultObject:null}}setFocusObject(e){this.focus.defaultObject=e}update(){this.focus.target=this.raycaster.intersections.length?this.raycaster.intersections[0].distance:this.camera.instance.position.distanceTo(this.focus.defaultObject.position),this.focus.value+=(this.focus.target-this.focus.value)*this.focus.easing,this.bokehPass.materialBokeh.uniforms.focus.value=this.focus.value}}class re{constructor(){this.sketch=new h,this.canvas=this.sketch.canvas,this.viewport=this.sketch.viewport,this.scene=this.sketch.scene,this.camera=this.sketch.camera,this.debug=this.sketch.debug,this.setInstance(),this.setPostProcess(),this.setDebug()}setInstance(){this.instance=new I({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.instance.outputEncoding=u,this.instance.setClearColor(n.renderer.background),this.instance.setSize(this.viewport.width,this.viewport.height),this.instance.setPixelRatio(this.viewport.pixelRatio)}setPostProcess(){this.postProcess={};const e=B,t=new e(this.viewport.width,this.viewport.height,{generateMipmaps:!1,minFilter:z,magFilter:z,format:T,encoding:u});this.postProcess.composer=new D(this.instance,t),this.postProcess.renderPass=new _(this.scene,this.camera.instance),this.depthOfField=new ne,this.postProcess.bokehPass=this.depthOfField.bokehPass,this.postProcess.bloomPass=new U(new k(this.viewport.width,this.viewport.height),n.bloom.strength,n.bloom.radius,n.bloom.threshold),this.postProcess.composer.addPass(this.postProcess.renderPass),this.postProcess.composer.addPass(this.postProcess.bloomPass),this.postProcess.composer.addPass(this.postProcess.bokehPass),this.postProcess.composer.setSize(this.viewport.width,this.viewport.height),this.postProcess.composer.setPixelRatio(this.viewport.pixelRatio)}setDebug(){if(!!this.debug.active){this.debug.ui.addFolder("renderer").addColor(n.renderer,"background").onChange(t=>{this.instance.setClearColor(t)});{const e=this.debug.ui.addFolder("bokeh");e.add(this.postProcess.bokehPass,"enabled"),e.add(this.postProcess.bokehPass.uniforms.focus,"value").min(1).max(16).step(.001).name("focus"),e.add(this.postProcess.bokehPass.uniforms.aperture,"value").min(0).max(.005).step(1e-4).name("aperture"),e.add(this.postProcess.bokehPass.uniforms.maxblur,"value").min(0).max(.025).step(1e-4).name("maxBlur")}{const e=this.debug.ui.addFolder("bloom");e.add(this.postProcess.bloomPass,"strength").min(0).max(2).step(.001),e.add(this.postProcess.bloomPass,"radius").min(0).max(2).step(.001),e.add(this.postProcess.bloomPass,"threshold").min(0).max(2).step(.001)}}}resize(){this.instance.setSize(this.viewport.width,this.viewport.height),this.instance.setPixelRatio(this.viewport.pixelRatio),this.postProcess.composer.setSize(this.viewport.width,this.viewport.height),this.postProcess.composer.setPixelRatio(this.viewport.pixelRatio)}update(){this.depthOfField.update(),this.postProcess.composer.render()}}const ae=["gltf","texture"];let x=null;class A extends d{constructor(){super();if(x)return x;x=this,this.items={},this.toLoad=0,this.loaded=0,this.ui=document.querySelector("#loader .bar"),this.setLoaders()}setLoaders(){const e=new E;e.setDecoderPath("/draco/");const t=new G;t.setDRACOLoader(e);const i=new $;this.loaders={gltfLoader:t,textureLoader:i}}load(e=[]){this.sources=e.filter(t=>ae.includes(t.type)),this.toLoad=this.sources.length,this.loaded=0;for(const t of this.sources){if(this.items[t.name]){this.sourceLoaded(t,this.items[t.name]);continue}switch(t.type){case"gltf":{this.loaders.gltfLoader.load(t.path,i=>this.sourceLoaded(t,i));break}case"texture":{this.loaders.textureLoader.load(t.path,i=>this.sourceLoaded(t,i));break}}}}sourceLoaded(e,t){t.name=e.name,this.items[e.name]=t,this.loaded++,this.updateUI(),this.loaded===this.toLoad&&this.emit("ready")}updateUI(){!this.ui||(this.ui.style.transform=`scaleX(${this.loaded/this.toLoad})`)}}var he=`
varying vec2 vUv;

void main() {
	vec4 modelPosition = modelMatrix * vec4(position, 1.0);
	vec4 viewPosition = viewMatrix * modelPosition;
	vec4 projectionPosition = projectionMatrix * viewPosition;

	gl_Position = projectionPosition;

	vUv = uv;
}`,ce=`
uniform float uTime;
uniform vec3 uInnerColor;
uniform vec3 uOuterColor;
uniform float uAlpha;
uniform float uOffset;

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
	float outerGlow = distance(vUv, vec2(0.5)) * 5.0 - uOffset;
	strength += outerGlow;

	// Apply cool step
	strength += step(-0.2, strength) * 0.8;

	// Clamp value from 0 to 1
	strength = clamp(strength, 0.0, 1.0);

	// Colors wrap with alpha
	vec4 innerColor = vec4(uInnerColor, uAlpha);
	vec4 outerColor = vec4(uOuterColor, 1.0);

	// Final color
	vec4 color = mix(innerColor, outerColor, strength);

	gl_FragColor = color;
}`;class le{constructor(){this.world=new p,this.scene=this.world.group,this.raycaster=this.world.sketch.raycaster,this.resources=new A,this.debug=new w,this.createMaterials(),this.setMaterials(),this.setAnimation(),this.setDebug()}createMaterials(){this.materials={};const e=this.resources.items.bakedTexture;e.flipY=!1,e.encoding=u,e.generateMipmaps=!1,e.minFilter=m,e.magFilter=m,e.anisotropy=16,this.materials.baked=new g({map:e}),this.materials.poleLight=new g({color:16711664}),this.materials.portalLight=new C({uniforms:{uTime:{value:0},uInnerColor:{value:new c(0)},uOuterColor:{value:new c(16777215)},uAlpha:{value:1},uOffset:{value:1.4}},vertexShader:he,fragmentShader:ce,transparent:!0})}setMaterials(){const e=this.resources.items.model.scene,t={baked:"baked",poleLightA:"poleLight",poleLightB:"poleLight",portalLight:"portalLight"};this.meshes={};const i=Object.keys(t);for(const s of e.children){if(Object.keys(this.meshes).length===i.length)break;i.includes(s.name)&&(this.meshes[s.name]=s,this.meshes[s.name].material=this.materials[t[s.name]])}e.name="portal",this.scene.add(e)}setAnimation(){const e=this.meshes.portalLight.material.uniforms,t={uAlpha:1,uOffset:1.4},i=l.to(t,{uAlpha:0,uOffset:2.5,duration:1,ease:"power1.inOut",onUpdate(){e.uAlpha.value=t.uAlpha,e.uOffset.value=t.uOffset},paused:!0});this.raycaster.on("click",({object:s})=>{s.name==="portalLight"&&(i.isActive()||(i.progress()===0&&i.play(),i.progress()===1&&i.reverse()))})}setDebug(){if(!this.debug.active)return;const e=this.debug.ui.addFolder("portal");e.addColor(n.portal,"innerColor").onChange(t=>{this.meshes.portalLight.material.uniforms.uInnerColor.value=t}),e.addColor(n.portal,"outerColor").onChange(t=>{this.meshes.portalLight.material.uniforms.uOuterColor.value=t})}update(e){this.meshes.portalLight.material.uniforms.uTime.value=e}}var de=`
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
}`,ue=`
void main() {
	float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
	float strength = 0.05 / distanceToCenter - 0.1 * 2.0;

	gl_FragColor = vec4(1.0, 1.0, 1.0, strength);
}`;class me{constructor(e=n.fireflies.count){this.count=e,this.world=new p,this.scene=this.world.group,this.viewport=this.world.sketch.viewport,this.debug=new w,this.setMesh(),this.setDebug(),this.viewport.on("resize",()=>{this.mesh.material.uniforms.uPixelRatio.value=this.viewport.pixelRatio})}setMesh(){const e=new V,t=new Float32Array(this.count*3),i=new Float32Array(this.count*1);for(let o=0;o<this.count;o++)t[o*3+0]=(Math.random()-.5)*4,t[o*3+1]=Math.random()*.75+.5,t[o*3+2]=(Math.random()-.5)*3+.25,i[o]=Math.random();e.setAttribute("position",new L(t,3)),e.setAttribute("aScale",new L(i,1));const s=new C({uniforms:{uTime:{value:0},uPixelRatio:{value:this.viewport.pixelRatio},uSize:{value:n.fireflies.size}},vertexShader:de,fragmentShader:ue,blending:W,transparent:!0,depthWrite:!1});this.mesh=new q(e,s),this.mesh.name="fireflies",this.scene.add(this.mesh)}disposeMesh(){this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.scene.remove(this.mesh)}setDebug(){if(!this.debug.active)return;const e=this.debug.ui.addFolder("fireflies");e.add(n.fireflies,"size").min(50).max(500).step(1).onChange(t=>{this.mesh.material.uniforms.uSize.value=t}),e.add(n.fireflies,"count").min(10).max(100).step(1).onFinishChange(t=>{this.count=t,this.disposeMesh(),this.setMesh()})}update(e){this.mesh.material.uniforms.uTime.value=e}}var pe="/threejs-portal/assets/1.c9c3c5fd.mp4";class fe{constructor(){this.world=new p,this.scene=this.world.group;const e=document.createElement("video");e.src=pe,e.preload="auto",e.muted=!0,e.loop=!0,e.playsInline=!0,e.play();const t=new N(e);t.encoding=u,t.generateMipmaps=!1,t.minFilter=m,t.magFilter=m,t.anisotropy=16;const i=new g({map:t}),s=new H(.6665305495262146,32),o=new K(s,i);o.position.copy(this.world.portal.meshes.portalLight.position),o.position.z-=.001,o.name="video",this.scene.add(o)}}let P=null;class p extends d{constructor(){super();if(P)return P;P=this,this.sketch=new h,this.group=new X,this.group.name="world",this.resources=new A,this.resources.load(ie),this.resources.on("ready",()=>{this.portal=new le,this.fireflies=new me,this.video=new fe,this.animate(),this.emit("ready")})}animate(){this.group.position.y=-2,l.to(this.group.position,{y:0,duration:1,delay:.5,ease:"back.out(1)"})}update(e){this.portal.update(e),this.fireflies.update(e)}}let y=null;class ge extends d{constructor(){super();if(y)return y;y=this,this.sketch=new h,this.canvas=this.sketch.canvas,this.camera=this.sketch.camera,this.objects=[],this.instance=new Y,this.instance.params.Points.threshold=0,this.mouse=new k,this.intersections=[],this.canvas.addEventListener("mousemove",({clientX:e,clientY:t})=>{this.mouse.x=2*(e/this.sketch.viewport.width)-1,this.mouse.y=-2*(t/this.sketch.viewport.height)+1}),this.canvas.addEventListener("click",()=>{!this.intersections.length||this.emit("click",this.intersections[0])})}setObjects(e){this.objects=e}update(){this.instance.setFromCamera(this.mouse,this.camera.instance),this.intersections=this.instance.intersectObjects(this.objects)}}let b=null;l.ticker.remove(l.updateRoot);class h{constructor({canvas:e}={}){if(b)return b;b=this,this.canvas=e,this.debug=new w,this.viewport=new Z,this.scene=new J,this.camera=new oe,this.raycaster=new ge,this.renderer=new re,this.world=new p,this.viewport.on("resize",this.resize.bind(this)),this.world.on("ready",()=>{this.scene.add(this.world.group),this.renderer.depthOfField.setFocusObject(this.world.portal.meshes.poleLightA),this.raycaster.setObjects(Object.values(this.world.portal.meshes)),this.time=new ee,this.time.on("update",this.update.bind(this)),document.body.classList.remove("loading")})}resize(){this.camera.resize(),this.renderer.resize()}update(e,t){this.debug.beforeRender(),this.camera.update(),this.raycaster.update(),this.world.update(e),l.updateRoot(e),this.renderer.update(),this.debug.afterRender()}}new h({canvas:document.getElementById("scene")});
