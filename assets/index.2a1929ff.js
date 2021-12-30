import{G as b,S as L,P as M,O as S,W as k,s as v,A as C,D as A,a as T,T as I,B as _,b as f,c as m,d as R,e as F,N as p,M as x,C as w,f as D}from"./vendor.9a0549d0.js";const E=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}};E();let h=null;class U{constructor(){if(h)return h;h=this,this.active=window.location.hash==="#debug",this.active&&(this.ui=new b,this.stats=new L,this.stats.showPanel(0),document.body.appendChild(this.stats.dom))}begin(){this.stats&&this.stats.begin()}end(){this.stats&&this.stats.end()}}class l{constructor(){this.callbacks={}}on(t,e){typeof e=="function"&&(this.callbacks[t]=[...this.callbacks[t]||[],e])}emit(t,...e){(this.callbacks[t]||[]).forEach(s=>s(...e))}off(t,e){!this.callbacks[t]||(this.callbacks[t]=this.callbacks[t].filter(s=>s!==e))}}class j extends l{constructor(){super();this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.emit("resize")})}}class O extends l{constructor(t=!0){super();this.current=performance.now(),this.elapsed=0,this.delta=0,this.rafId=0,t&&this.start()}start(){this.running||(this.running=!0,this.update())}stop(){!this.running||(window.cancelAnimationFrame(this.rafId),this.running=!1)}pause(){this.stop()}resume(){this.current=performance.now(),this.start()}update(){const t=performance.now();this.delta=(t-this.current)/1e3,this.current=t,this.elapsed+=this.delta,this.emit("update",this.elapsed,this.delta),this.rafId=window.requestAnimationFrame(this.update.bind(this))}}const y={minDistance:4,maxDistance:12,minAzimuthAngle:-Math.PI/2,maxAzimuthAngle:Math.PI/4,minPolarAngle:-Math.PI,maxPolarAngle:Math.PI/3};var B="/threejs-portal/assets/portal.0f866fc7.glb",G="/threejs-portal/assets/baked.ed87f214.jpg";const N=[{type:"gltf",name:"model",path:B},{type:"texture",name:"bakedTexture",path:G}];class W{constructor(){this.sketch=new c,this.viewport=this.sketch.viewport,this.scene=this.sketch.scene,this.canvas=this.sketch.canvas,this.setInstance(),this.setOrbitControls()}setInstance(){this.instance=new M(45,this.viewport.width/this.viewport.height,.1,50),this.instance.position.set(4,2,4),this.scene.add(this.instance)}setOrbitControls(){this.controls=new S(this.instance,this.canvas),this.controls.enableDamping=!0,this.controls.minDistance=y.minDistance,this.controls.maxDistance=y.maxDistance}resize(){this.instance.aspect=this.viewport.width/this.viewport.height,this.instance.updateProjectionMatrix()}update(){this.controls.update()}}class q{constructor(){this.sketch=new c,this.canvas=this.sketch.canvas,this.viewport=this.sketch.viewport,this.scene=this.sketch.scene,this.camera=this.sketch.camera,this.debug=this.sketch.debug,this.setInstance()}setInstance(){this.instance=new k({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.instance.outputEncoding=v,this.instance.toneMapping=C,this.instance.setClearColor("#232323"),this.instance.setSize(this.viewport.width,this.viewport.height),this.instance.setPixelRatio(this.viewport.pixelRatio)}resize(){this.instance.setSize(this.viewport.width,this.viewport.height),this.instance.setPixelRatio(this.viewport.pixelRatio)}update(){this.instance.render(this.scene,this.camera.instance)}}let d=null;class $ extends l{constructor(){super();if(d)return d;d=this,this.items={},this.toLoad=0,this.loaded=0,this.setLoaders()}setLoaders(){const t=new A;t.setDecoderPath("/draco/");const e=new T;e.setDRACOLoader(t),this.loaders={gltfLoader:e,textureLoader:new I}}load(t=[]){this.sources=t,this.toLoad=this.sources.length,this.loaded=0;for(const e of this.sources){if(this.items[e.name]){this.sourceLoaded(e,this.items[e.name]);continue}switch(e.type){case"gltf":{this.loaders.gltfLoader.load(e.path,s=>this.sourceLoaded(e,s));break}case"texture":{this.loaders.textureLoader.load(e.path,s=>this.sourceLoaded(e,s));break}}}}sourceLoaded(t,e){e.name=t.name,this.items[t.name]=e,this.loaded++,this.loaded===this.toLoad&&this.emit("ready")}}var H=`
varying vec2 vUv;

void main() {
	vec4 modelPosition = modelMatrix * vec4(position, 1.0);
	vec4 viewPosition = viewMatrix * modelPosition;
	vec4 projectionPosition = projectionMatrix * viewPosition;

	gl_Position = projectionPosition;

	vUv = uv;
}`,V=`
uniform float uTime;
uniform vec3 uColorStart;
uniform vec3 uColorEnd;

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
	vec3 color = mix(uColorStart, uColorEnd, strength);

	gl_FragColor = vec4(color, 1.0);
}`,K=`
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
}`,Y=`
void main() {
	float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
	float strength = 0.05 / distanceToCenter - 0.1 * 2.0;

	gl_FragColor = vec4(1.0, 1.0, 1.0, strength);
}`;class J{constructor(t=30){this.world=new P,this.scene=this.world.scene,this.count=t,this.setMesh(),this.scene.add(this.mesh)}setMesh(){const t=new _,e=new Float32Array(this.count*3),s=new Float32Array(this.count*1);for(let i=0;i<this.count;i++)e[i*3+0]=(Math.random()-.5)*4,e[i*3+1]=Math.random()*.75+.5,e[i*3+2]=(Math.random()-.5)*3+.25,s[i]=Math.random();t.setAttribute("position",new f(e,3)),t.setAttribute("aScale",new f(s,1));const n=new m({uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uSize:{value:200}},vertexShader:K,fragmentShader:Y,blending:R,transparent:!0,depthWrite:!1});this.mesh=new F(t,n)}}let u=null;class P{constructor(){if(u)return u;u=this,this.sketch=new c,this.scene=this.sketch.scene,this.resources=new $,this.resources.load(N),this.resources.on("ready",()=>{this.setMesh(),this.fireflies=new J(30)})}setMesh(){const t=this.resources.items.bakedTexture;t.flipY=!1,t.encoding=v,t.generateMipmaps=!1,t.minFilter=p,t.magFilter=p,t.anisotropy=16;const e=new x({map:t}),s=new x({color:16711664}),n=new m({uniforms:{uTime:{value:0},uColorStart:{value:new w(0)},uColorEnd:{value:new w(16777215)}},vertexShader:H,fragmentShader:V});this.model=this.resources.items.model.scene;const i=this.model.children.find(r=>r.name==="baked");i.material=e,this.portalLight=this.model.children.find(r=>r.name==="portalLight"),this.portalLight.material=n;const a=this.model.children.find(r=>r.name==="poleLightA");a.material=s;const z=this.model.children.find(r=>r.name==="poleLightB");z.material=s,this.scene.add(this.model)}setTexture(){this.texture=this.resources.items.protalTexture}update(t){this.portalLight&&(this.portalLight.material.uniforms.uTime.value=t),this.fireflies&&(this.fireflies.mesh.material.uniforms.uTime.value=t)}}let g=null;class c{constructor({canvas:t}={}){if(g)return g;g=this,this.canvas=t,this.debug=new U,this.viewport=new j,this.time=new O,this.scene=new D,this.camera=new W,this.renderer=new q,this.world=new P,this.viewport.on("resize",this.resize.bind(this)),this.time.on("update",this.update.bind(this))}resize(){this.camera.resize(),this.renderer.resize()}update(t,e){this.debug.begin(),this.camera.update(),this.world.update(t),this.renderer.update(),this.debug.end()}}new c({canvas:document.getElementById("scene")});
