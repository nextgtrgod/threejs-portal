var Tf=Object.defineProperty;var dc=Object.getOwnPropertySymbols;var Ef=Object.prototype.hasOwnProperty,Af=Object.prototype.propertyIsEnumerable;var fc=(o,e,t)=>e in o?Tf(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,pc=(o,e)=>{for(var t in e||(e={}))Ef.call(e,t)&&fc(o,t,e[t]);if(dc)for(var t of dc(e))Af.call(e,t)&&fc(o,t,e[t]);return o};/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qo="136",ki={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cf=0,mc=1,Lf=2,gc=1,Rf=2,Vr=3,Hi=0,ut=1,mi=2,_c=1,yn=0,Gr=1,ea=2,xc=3,vc=4,Pf=5,Vi=100,Df=101,If=102,yc=103,bc=104,Ff=200,Nf=201,Of=202,Bf=203,Mc=204,wc=205,Uf=206,kf=207,zf=208,Hf=209,Vf=210,Gf=0,Wf=1,Xf=2,ta=3,jf=4,qf=5,Yf=6,$f=7,Hs=0,Zf=1,Jf=2,kn=0,Kf=1,Qf=2,ep=3,tp=4,np=5,Sc=300,Wr=301,Xr=302,na=303,ia=304,Vs=306,ra=307,Gi=1e3,Pt=1001,Gs=1002,it=1003,sa=1004,oa=1005,rt=1006,Tc=1007,Wi=1008,bn=1009,ip=1010,rp=1011,jr=1012,sp=1013,Ws=1014,Mn=1015,gi=1016,op=1017,ap=1018,lp=1019,Xi=1020,cp=1021,zn=1022,st=1023,hp=1024,up=1025,_i=1026,ji=1027,dp=1028,fp=1029,pp=1030,mp=1031,gp=1032,_p=1033,Ec=33776,Ac=33777,Cc=33778,Lc=33779,Rc=35840,Pc=35841,Dc=35842,Ic=35843,xp=36196,Fc=37492,Nc=37496,vp=37808,yp=37809,bp=37810,Mp=37811,wp=37812,Sp=37813,Tp=37814,Ep=37815,Ap=37816,Cp=37817,Lp=37818,Rp=37819,Pp=37820,Dp=37821,Ip=36492,Fp=37840,Np=37841,Op=37842,Bp=37843,Up=37844,kp=37845,zp=37846,Hp=37847,Vp=37848,Gp=37849,Wp=37850,Xp=37851,jp=37852,qp=37853,Yp=2200,$p=2201,Zp=2202,qr=2300,qi=2301,aa=2302,Yi=2400,$i=2401,Xs=2402,la=2500,Oc=2501,Jp=0,Kp=1,Bc=2,en=3e3,wn=3001,Qp=3200,Uc=3201,xi=0,em=1,ca=7680,tm=519,Yr=35044,js=35048,kc="300 es";class Hn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}}const _t=[];for(let o=0;o<256;o++)_t[o]=(o<16?"0":"")+o.toString(16);let qs=1234567;const $r=Math.PI/180,Zr=180/Math.PI;function Gt(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[o&255]+_t[o>>8&255]+_t[o>>16&255]+_t[o>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toUpperCase()}function Ct(o,e,t){return Math.max(e,Math.min(t,o))}function ha(o,e){return(o%e+e)%e}function nm(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function im(o,e,t){return o!==e?(t-o)/(e-o):0}function Jr(o,e,t){return(1-t)*o+t*e}function rm(o,e,t,n){return Jr(o,e,1-Math.exp(-t*n))}function sm(o,e=1){return e-Math.abs(ha(o,e*2)-e)}function om(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function am(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function lm(o,e){return o+Math.floor(Math.random()*(e-o+1))}function cm(o,e){return o+Math.random()*(e-o)}function hm(o){return o*(.5-Math.random())}function um(o){return o!==void 0&&(qs=o%2147483647),qs=qs*16807%2147483647,(qs-1)/2147483646}function dm(o){return o*$r}function fm(o){return o*Zr}function ua(o){return(o&o-1)==0&&o!==0}function zc(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Hc(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function pm(o,e,t,n,i){const r=Math.cos,s=Math.sin,a=r(t/2),l=s(t/2),c=r((e+n)/2),h=s((e+n)/2),u=r((e-n)/2),d=s((e-n)/2),f=r((n-e)/2),m=s((n-e)/2);switch(i){case"XYX":o.set(a*h,l*u,l*d,a*c);break;case"YZY":o.set(l*d,a*h,l*u,a*c);break;case"ZXZ":o.set(l*u,l*d,a*h,a*c);break;case"XZX":o.set(a*h,l*m,l*f,a*c);break;case"YXY":o.set(l*f,a*h,l*m,a*c);break;case"ZYZ":o.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}var mm=Object.freeze({__proto__:null,DEG2RAD:$r,RAD2DEG:Zr,generateUUID:Gt,clamp:Ct,euclideanModulo:ha,mapLinear:nm,inverseLerp:im,lerp:Jr,damp:rm,pingpong:sm,smoothstep:om,smootherstep:am,randInt:lm,randFloat:cm,randFloatSpread:hm,seededRandom:um,degToRad:dm,radToDeg:fm,isPowerOfTwo:ua,ceilPowerOfTwo:zc,floorPowerOfTwo:Hc,setQuaternionFromProperEuler:pm});class j{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}j.prototype.isVector2=!0;class xt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,s,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=i[0],x=i[3],p=i[6],g=i[1],b=i[4],v=i[7],y=i[2],E=i[5],L=i[8];return r[0]=s*_+a*g+l*y,r[3]=s*x+a*b+l*E,r[6]=s*p+a*v+l*L,r[1]=c*_+h*g+u*y,r[4]=c*x+h*b+u*E,r[7]=c*p+h*v+u*L,r[2]=d*_+f*g+m*y,r[5]=d*x+f*b+m*E,r[8]=d*p+f*v+m*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*a*c-n*r*h+n*a*l+i*r*c-i*s*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*s-a*c,d=a*l-h*r,f=c*r-s*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*s)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(s*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*a)+s+e,-i*c,i*l,-i*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],s=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=t*r+n*l,i[3]=t*s+n*c,i[6]=t*a+n*h,i[1]=-n*r+t*l,i[4]=-n*s+t*c,i[7]=-n*a+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}xt.prototype.isMatrix3=!0;function Vc(o){if(o.length===0)return-1/0;let e=o[0];for(let t=1,n=o.length;t<n;++t)o[t]>e&&(e=o[t]);return e}function Ys(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}let Zi;class Ji{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zi===void 0&&(Zi=Ys("canvas")),Zi.width=e.width,Zi.height=e.height;const n=Zi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let gm=0;class at extends Hn{constructor(e=at.DEFAULT_IMAGE,t=at.DEFAULT_MAPPING,n=Pt,i=Pt,r=rt,s=Wi,a=st,l=bn,c=1,h=en){super();Object.defineProperty(this,"id",{value:gm++}),this.uuid=Gt(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=Gt()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(da(i[s].image)):r.push(da(i[s]))}else r=da(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gi:e.x=e.x-Math.floor(e.x);break;case Pt:e.x=e.x<0?0:1;break;case Gs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gi:e.y=e.y-Math.floor(e.y);break;case Pt:e.y=e.y<0?0:1;break;case Gs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}at.DEFAULT_IMAGE=void 0;at.DEFAULT_MAPPING=Sc;at.prototype.isTexture=!0;function da(o){return typeof HTMLImageElement!="undefined"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&o instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&o instanceof ImageBitmap?Ji.getDataURL(o):o.data?{data:Array.prototype.slice.call(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class qe{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const s=.01,a=.1,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],x=l[6],p=l[10];if(Math.abs(h-d)<s&&Math.abs(u-_)<s&&Math.abs(m-x)<s){if(Math.abs(h+d)<a&&Math.abs(u+_)<a&&Math.abs(m+x)<a&&Math.abs(c+f+p-3)<a)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,v=(f+1)/2,y=(p+1)/2,E=(h+d)/4,L=(u+_)/4,N=(m+x)/4;return b>v&&b>y?b<s?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=E/n,r=L/n):v>y?v<s?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=N/i):y<s?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=L/r,i=N/r),this.set(n,i,r,t),this}let g=Math.sqrt((x-m)*(x-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(x-m)/g,this.y=(u-_)/g,this.z=(d-h)/g,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}qe.prototype.isVector4=!0;class vt extends Hn{constructor(e,t,n={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t),this.texture=new at(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:rt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=pc({},this.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}vt.prototype.isWebGLRenderTarget=!0;class _m extends vt{constructor(e,t,n){super(e,t);const i=this.texture;this.texture=[];for(let r=0;r<n;r++)this.texture[r]=i.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=e,this.texture[i].image.height=t,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}}_m.prototype.isWebGLMultipleRenderTargets=!0;class fa extends vt{constructor(e,t,n={}){super(e,t,n);this.samples=4,this.ignoreDepthForMultisampleCopy=n.ignoreDepth!==void 0?n.ignoreDepth:!0,this.useRenderToTexture=n.useRenderToTexture!==void 0?n.useRenderToTexture:!1,this.useRenderbuffer=this.useRenderToTexture===!1}copy(e){return super.copy.call(this,e),this.samples=e.samples,this.useRenderToTexture=e.useRenderToTexture,this.useRenderbuffer=e.useRenderbuffer,this}}fa.prototype.isWebGLMultisampleRenderTarget=!0;class yt{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,s,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[s+0],f=r[s+1],m=r[s+2],_=r[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==m){let x=1-a;const p=l*d+c*f+h*m+u*_,g=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const y=Math.sqrt(b),E=Math.atan2(y,p*g);x=Math.sin(x*E)/y,a=Math.sin(a*E)/y}const v=a*g;if(l=l*x+d*v,c=c*x+f*v,h=h*x+m*v,u=u*x+_*v,x===1-a){const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,s){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[s],d=r[s+1],f=r[s+2],m=r[s+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(s){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(s-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(s-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,s=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+s*a+i*c-r*l,this._y=i*h+s*l+r*a-n*c,this._z=r*h+s*c+n*l-i*a,this._w=s*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,s=this._w;let a=s*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=s*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}yt.prototype.isQuaternion=!0;class C{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Gc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,a=e.z,l=e.w,c=l*t+s*i-a*n,h=l*n+a*t-r*i,u=l*i+r*n-s*t,d=-r*t-s*n-a*i;return this.x=c*l+d*-r+h*-a-u*-s,this.y=h*l+d*-s+u*-r-c*-a,this.z=u*l+d*-a+c*-s-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,s=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*s-n*l,this.z=n*a-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pa.copy(this).projectOnVector(e),this.sub(pa)}reflect(e){return this.sub(pa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}C.prototype.isVector3=!0;const pa=new C,Gc=new yt;class Wt{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>s&&(s=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,s,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>s&&(s=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,s,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),ma.copy(t.boundingBox),ma.applyMatrix4(e.matrixWorld),this.union(ma));const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kr),Kr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),$s.subVectors(this.max,Qr),Ki.subVectors(e.a,Qr),Qi.subVectors(e.b,Qr),er.subVectors(e.c,Qr),Vn.subVectors(Qi,Ki),Gn.subVectors(er,Qi),vi.subVectors(Ki,er);let t=[0,-Vn.z,Vn.y,0,-Gn.z,Gn.y,0,-vi.z,vi.y,Vn.z,0,-Vn.x,Gn.z,0,-Gn.x,vi.z,0,-vi.x,-Vn.y,Vn.x,0,-Gn.y,Gn.x,0,-vi.y,vi.x,0];return!ga(t,Ki,Qi,er,$s)||(t=[1,0,0,0,1,0,0,0,1],!ga(t,Ki,Qi,er,$s))?!1:(Zs.crossVectors(Vn,Gn),t=[Zs.x,Zs.y,Zs.z],ga(t,Ki,Qi,er,$s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Kr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Kr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Wt.prototype.isBox3=!0;const Sn=[new C,new C,new C,new C,new C,new C,new C,new C],Kr=new C,ma=new Wt,Ki=new C,Qi=new C,er=new C,Vn=new C,Gn=new C,vi=new C,Qr=new C,$s=new C,Zs=new C,yi=new C;function ga(o,e,t,n,i){for(let r=0,s=o.length-3;r<=s;r+=3){yi.fromArray(o,r);const a=i.x*Math.abs(yi.x)+i.y*Math.abs(yi.y)+i.z*Math.abs(yi.z),l=e.dot(yi),c=t.dot(yi),h=n.dot(yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const xm=new Wt,Wc=new C,Js=new C,_a=new C;class bi{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){_a.subVectors(e,this.center);const t=_a.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(_a.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Js.set(0,0,1).multiplyScalar(e.radius):Js.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Wc.copy(e.center).add(Js)),this.expandByPoint(Wc.copy(e.center).sub(Js)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new C,xa=new C,Ks=new C,Wn=new C,va=new C,Qs=new C,ya=new C;class Mi{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.direction).multiplyScalar(t).add(this.origin),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){xa.copy(e).add(t).multiplyScalar(.5),Ks.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(xa);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Ks),a=Wn.dot(this.direction),l=-Wn.dot(Ks),c=Wn.lengthSq(),h=Math.abs(1-s*s);let u,d,f,m;if(h>0)if(u=s*l-a,d=s*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+s*d+2*a)+d*(s*u+d+2*l)+c}else d=r,u=Math.max(0,-(s*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(s*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-s*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(s*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=s>0?-r:r,u=Math.max(0,-(s*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Ks).multiplyScalar(d).add(xa),f}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const n=Tn.dot(this.direction),i=Tn.dot(Tn)-n*n,r=e.radius*e.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,l=n+s;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),n>s||r>i||((r>n||n!==n)&&(n=r),(s<i||i!==i)&&(i=s),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,i,r){va.subVectors(t,e),Qs.subVectors(n,e),ya.crossVectors(va,Qs);let s=this.direction.dot(ya),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Wn.subVectors(this.origin,e);const l=a*this.direction.dot(Qs.crossVectors(Wn,Qs));if(l<0)return null;const c=a*this.direction.dot(va.cross(Wn));if(c<0||l+c>s)return null;const h=-a*Wn.dot(ya);return h<0?null:this.at(h/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,s,a,l,c,h,u,d,f,m,_,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),s=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=s*h,f=s*u,m=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d+_*a,t[4]=m*a-f,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=s*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d-_*a,t[4]=-s*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=s*h,t[9]=_-d*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const d=s*h,f=s*u,m=a*h,_=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,f=s*c,m=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=m*u+f,t[1]=u,t[5]=s*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-_*u}else if(e.order==="XZY"){const d=s*l,f=s*c,m=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=s*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vm,e,ym)}lookAt(e,t,n){const i=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Xn.crossVectors(n,Ut),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Xn.crossVectors(n,Ut)),Xn.normalize(),eo.crossVectors(Ut,Xn),i[0]=Xn.x,i[4]=eo.x,i[8]=Ut.x,i[1]=Xn.y,i[5]=eo.y,i[9]=Ut.y,i[2]=Xn.z,i[6]=eo.z,i[10]=Ut.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],x=n[10],p=n[14],g=n[3],b=n[7],v=n[11],y=n[15],E=i[0],L=i[4],N=i[8],B=i[12],H=i[1],D=i[5],w=i[9],M=i[13],I=i[2],O=i[6],F=i[10],U=i[14],te=i[3],re=i[7],G=i[11],W=i[15];return r[0]=s*E+a*H+l*I+c*te,r[4]=s*L+a*D+l*O+c*re,r[8]=s*N+a*w+l*F+c*G,r[12]=s*B+a*M+l*U+c*W,r[1]=h*E+u*H+d*I+f*te,r[5]=h*L+u*D+d*O+f*re,r[9]=h*N+u*w+d*F+f*G,r[13]=h*B+u*M+d*U+f*W,r[2]=m*E+_*H+x*I+p*te,r[6]=m*L+_*D+x*O+p*re,r[10]=m*N+_*w+x*F+p*G,r[14]=m*B+_*M+x*U+p*W,r[3]=g*E+b*H+v*I+y*te,r[7]=g*L+b*D+v*O+y*re,r[11]=g*N+b*w+v*F+y*G,r[15]=g*B+b*M+v*U+y*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],_=e[7],x=e[11],p=e[15];return m*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+r*s*d-i*s*f+i*c*h-r*l*h)+x*(+t*c*u-t*a*f-r*s*u+n*s*f+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*s*u-n*s*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],_=e[13],x=e[14],p=e[15],g=u*x*c-_*d*c+_*l*f-a*x*f-u*l*p+a*d*p,b=m*d*c-h*x*c-m*l*f+s*x*f+h*l*p-s*d*p,v=h*_*c-m*u*c+m*a*f-s*_*f-h*a*p+s*u*p,y=m*u*l-h*_*l-m*a*d+s*_*d+h*a*x-s*u*x,E=t*g+n*b+i*v+r*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/E;return e[0]=g*L,e[1]=(_*d*r-u*x*r-_*i*f+n*x*f+u*i*p-n*d*p)*L,e[2]=(a*x*r-_*l*r+_*i*c-n*x*c-a*i*p+n*l*p)*L,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*L,e[4]=b*L,e[5]=(h*x*r-m*d*r+m*i*f-t*x*f-h*i*p+t*d*p)*L,e[6]=(m*l*r-s*x*r-m*i*c+t*x*c+s*i*p-t*l*p)*L,e[7]=(s*d*r-h*l*r+h*i*c-t*d*c-s*i*f+t*l*f)*L,e[8]=v*L,e[9]=(m*u*r-h*_*r-m*n*f+t*_*f+h*n*p-t*u*p)*L,e[10]=(s*_*r-m*a*r+m*n*c-t*_*c-s*n*p+t*a*p)*L,e[11]=(h*a*r-s*u*r-h*n*c+t*u*c+s*n*f-t*a*f)*L,e[12]=y*L,e[13]=(h*_*i-m*u*i+m*n*d-t*_*d-h*n*x+t*u*x)*L,e[14]=(m*a*i-s*_*i-m*n*l+t*_*l+s*n*x-t*a*x)*L,e[15]=(s*u*i-h*a*i+h*n*l-t*u*l-s*n*d+t*a*d)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,a=e.y,l=e.z,c=r*s,h=r*a;return this.set(c*s+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*s,0,c*l-i*a,h*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,s=t._y,a=t._z,l=t._w,c=r+r,h=s+s,u=a+a,d=r*c,f=r*h,m=r*u,_=s*h,x=s*u,p=a*u,g=l*c,b=l*h,v=l*u,y=n.x,E=n.y,L=n.z;return i[0]=(1-(_+p))*y,i[1]=(f+v)*y,i[2]=(m-b)*y,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(d+p))*E,i[6]=(x+g)*E,i[7]=0,i[8]=(m+b)*L,i[9]=(x-g)*L,i[10]=(1-(d+_))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=tr.set(i[0],i[1],i[2]).length();const s=tr.set(i[4],i[5],i[6]).length(),a=tr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],tn.copy(this);const c=1/r,h=1/s,u=1/a;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,t.setFromRotationMatrix(tn),n.x=r,n.y=s,n.z=a,this}makePerspective(e,t,n,i,r,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*r/(t-e),c=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(s+r)/(s-r),f=-2*s*r/(s-r);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,s){const a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(s-r),u=(t+e)*l,d=(n+i)*c,f=(s+r)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}me.prototype.isMatrix4=!0;const tr=new C,tn=new me,vm=new C(0,0,0),ym=new C(1,1,1),Xn=new C,eo=new C,Ut=new C,Xc=new me,jc=new yt;class nr{constructor(e=0,t=0,n=0,i=nr.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],s=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ct(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jc.setFromEuler(this),this.setFromQuaternion(jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new C(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}nr.prototype.isEuler=!0;nr.DefaultOrder="XYZ";nr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ba{constructor(){this.mask=1|0}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}}let bm=0;const qc=new C,ir=new yt,En=new me,to=new C,es=new C,Mm=new C,wm=new yt,Yc=new C(1,0,0),$c=new C(0,1,0),Zc=new C(0,0,1),Sm={type:"added"},Jc={type:"removed"};class He extends Hn{constructor(){super();Object.defineProperty(this,"id",{value:bm++}),this.uuid=Gt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DefaultUp.clone();const e=new C,t=new nr,n=new yt,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new xt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=He.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(Yc,e)}rotateY(e){return this.rotateOnAxis($c,e)}rotateZ(e){return this.rotateOnAxis(Zc,e)}translateOnAxis(e,t){return qc.copy(e).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yc,e)}translateY(e){return this.translateOnAxis($c,e)}translateZ(e){return this.translateOnAxis(Zc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?to.copy(e):to.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(es,to,this.up):En.lookAt(to,es,this.up),this.quaternion.setFromRotationMatrix(En),i&&(En.extractRotation(i.matrixWorld),ir.setFromRotationMatrix(En),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Jc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,Mm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,wm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),f=s(e.animations);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f)}return n.object=i,n;function s(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}He.DefaultUp=new C(0,1,0);He.DefaultMatrixAutoUpdate=!0;He.prototype.isObject3D=!0;const nn=new C,An=new C,Ma=new C,Cn=new C,rr=new C,sr=new C,Kc=new C,wa=new C,Sa=new C,Ta=new C;class lt{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),nn.subVectors(e,t),i.cross(nn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){nn.subVectors(i,t),An.subVectors(n,t),Ma.subVectors(e,t);const s=nn.dot(nn),a=nn.dot(An),l=nn.dot(Ma),c=An.dot(An),h=An.dot(Ma),u=s*c-a*a;if(u===0)return r.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,m=(s*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Cn),Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(e,t,n,i,r,s,a,l){return this.getBarycoord(e,t,n,i,Cn),l.set(0,0),l.addScaledVector(r,Cn.x),l.addScaledVector(s,Cn.y),l.addScaledVector(a,Cn.z),l}static isFrontFacing(e,t,n,i){return nn.subVectors(n,t),An.subVectors(e,t),nn.cross(An).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),nn.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return lt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return lt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return lt.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return lt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return lt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let s,a;rr.subVectors(i,n),sr.subVectors(r,n),wa.subVectors(e,n);const l=rr.dot(wa),c=sr.dot(wa);if(l<=0&&c<=0)return t.copy(n);Sa.subVectors(e,i);const h=rr.dot(Sa),u=sr.dot(Sa);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(n).addScaledVector(rr,s);Ta.subVectors(e,r);const f=rr.dot(Ta),m=sr.dot(Ta);if(m>=0&&f<=m)return t.copy(r);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(sr,a);const x=h*m-f*u;if(x<=0&&u-h>=0&&f-m>=0)return Kc.subVectors(r,i),a=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Kc,a);const p=1/(x+_+d);return s=_*p,a=d*p,t.copy(n).addScaledVector(rr,s).addScaledVector(sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Tm=0;class dt extends Hn{constructor(){super();Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Gt(),this.name="",this.type="Material",this.fog=!0,this.blending=Gr,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.format=st,this.transparent=!1,this.blendSrc=Mc,this.blendDst=wc,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===_c;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(n.blending=this.blending),this.side!==Hi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==st&&(n.format=this.format),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const l=r[a];delete l.metadata,s.push(l)}return s}if(t){const r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}dt.prototype.isMaterial=!0;const Qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rn={h:0,s:0,l:0},no={h:0,s:0,l:0};function Ea(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function Aa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ca(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}class ue{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=ha(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=Ea(r,i,e+1/3),this.g=Ea(r,i,e),this.b=Ea(r,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const r=n[1],s=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const a=parseFloat(i[1])/360,l=parseInt(i[2],10)/100,c=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(a,l,c)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Qc[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}copyLinearToSRGB(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),s=Math.min(t,n,i);let a,l;const c=(s+r)/2;if(s===r)a=0,l=0;else{const h=r-s;switch(l=c<=.5?h/(r+s):h/(2-r-s),r){case t:a=(n-i)/h+(n<i?6:0);break;case n:a=(i-t)/h+2;break;case i:a=(t-n)/h+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(rn),rn.h+=e,rn.s+=t,rn.l+=n,this.setHSL(rn.h,rn.s,rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rn),e.getHSL(no);const n=Jr(rn.h,no.h,t),i=Jr(rn.s,no.s,t),r=Jr(rn.l,no.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}ue.NAMES=Qc;ue.prototype.isColor=!0;ue.prototype.r=1;ue.prototype.g=1;ue.prototype.b=1;class Ln extends dt{constructor(e){super();this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Ln.prototype.isMeshBasicMaterial=!0;const Ze=new C,io=new j;class Qe{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Yr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new ue),t[n++]=s.r,t[n++]=s.g,t[n++]=s.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new j),t[n++]=s.x,t[n++]=s.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new C),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let s=e[i];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new qe),t[n++]=s.x,t[n++]=s.y,t[n++]=s.z,t[n++]=s.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)io.fromBufferAttribute(this,t),io.applyMatrix3(e),this.setXY(t,io.x,io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix3(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ze.x=this.getX(t),Ze.y=this.getY(t),Ze.z=this.getZ(t),Ze.applyMatrix4(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ze.x=this.getX(t),Ze.y=this.getY(t),Ze.z=this.getZ(t),Ze.applyNormalMatrix(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ze.x=this.getX(t),Ze.y=this.getY(t),Ze.z=this.getZ(t),Ze.transformDirection(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}Qe.prototype.isBufferAttribute=!0;class eh extends Qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class th extends Qe{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Em extends Qe{constructor(e,t,n){super(new Uint16Array(e),t,n)}}Em.prototype.isFloat16BufferAttribute=!0;class Je extends Qe{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Am=0;const Xt=new me,La=new He,or=new C,kt=new Wt,ts=new Wt,ft=new C;class Ge extends Hn{constructor(){super();Object.defineProperty(this,"id",{value:Am++}),this.uuid=Gt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vc(e)>65535?th:eh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new xt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return La.lookAt(e),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Je(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const a=t[r];ts.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(kt.min,ts.min),kt.expandByPoint(ft),ft.addVectors(kt.max,ts.max),kt.expandByPoint(ft)):(kt.expandByPoint(ts.min),kt.expandByPoint(ts.max))}kt.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ft));if(t)for(let r=0,s=t.length;r<s;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ft.fromBufferAttribute(a,c),l&&(or.fromBufferAttribute(e,c),ft.add(or)),i=Math.max(i,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,s=t.uv.array,a=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new Qe(new Float32Array(4*a),4));const l=t.tangent.array,c=[],h=[];for(let H=0;H<a;H++)c[H]=new C,h[H]=new C;const u=new C,d=new C,f=new C,m=new j,_=new j,x=new j,p=new C,g=new C;function b(H,D,w){u.fromArray(i,H*3),d.fromArray(i,D*3),f.fromArray(i,w*3),m.fromArray(s,H*2),_.fromArray(s,D*2),x.fromArray(s,w*2),d.sub(u),f.sub(u),_.sub(m),x.sub(m);const M=1/(_.x*x.y-x.x*_.y);!isFinite(M)||(p.copy(d).multiplyScalar(x.y).addScaledVector(f,-_.y).multiplyScalar(M),g.copy(f).multiplyScalar(_.x).addScaledVector(d,-x.x).multiplyScalar(M),c[H].add(p),c[D].add(p),c[w].add(p),h[H].add(g),h[D].add(g),h[w].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let H=0,D=v.length;H<D;++H){const w=v[H],M=w.start,I=w.count;for(let O=M,F=M+I;O<F;O+=3)b(n[O+0],n[O+1],n[O+2])}const y=new C,E=new C,L=new C,N=new C;function B(H){L.fromArray(r,H*3),N.copy(L);const D=c[H];y.copy(D),y.sub(L.multiplyScalar(L.dot(D))).normalize(),E.crossVectors(N,D);const M=E.dot(h[H])<0?-1:1;l[H*4]=y.x,l[H*4+1]=y.y,l[H*4+2]=y.z,l[H*4+3]=M}for(let H=0,D=v.length;H<D;++H){const w=v[H],M=w.start,I=w.count;for(let O=M,F=M+I;O<F;O+=3)B(n[O+0]),B(n[O+1]),B(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new C,r=new C,s=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),x=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),h.subVectors(s,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const s=n[i].array,a=e.attributes[i],l=a.array,c=a.itemSize*t,h=Math.min(l.length,s.length-c);for(let u=0,d=c;u<h;u++,d++)s[d]=l[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,x=l.length;_<x;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Qe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ge,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Ge.prototype.isBufferGeometry=!0;const nh=new me,ar=new Mi,Ra=new bi,jn=new C,qn=new C,Yn=new C,Pa=new C,Da=new C,Ia=new C,ro=new C,so=new C,oo=new C,ao=new j,lo=new j,co=new j,Fa=new C,ho=new C;class wt extends He{constructor(e=new Ge,t=new Ln){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(r),e.ray.intersectsSphere(Ra)===!1)||(nh.copy(r).invert(),ar.copy(e.ray).applyMatrix4(nh),n.boundingBox!==null&&ar.intersectsBox(n.boundingBox)===!1))return;let s;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,f=n.groups,m=n.drawRange;if(a!==null)if(Array.isArray(i))for(let _=0,x=f.length;_<x;_++){const p=f[_],g=i[p.materialIndex],b=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,E=v;y<E;y+=3){const L=a.getX(y),N=a.getX(y+1),B=a.getX(y+2);s=uo(this,g,e,ar,l,c,h,u,d,L,N,B),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=_,g=x;p<g;p+=3){const b=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);s=uo(this,i,e,ar,l,c,h,u,d,b,v,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let _=0,x=f.length;_<x;_++){const p=f[_],g=i[p.materialIndex],b=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,E=v;y<E;y+=3){const L=y,N=y+1,B=y+2;s=uo(this,g,e,ar,l,c,h,u,d,L,N,B),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,g=x;p<g;p+=3){const b=p,v=p+1,y=p+2;s=uo(this,i,e,ar,l,c,h,u,d,b,v,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}wt.prototype.isMesh=!0;function Cm(o,e,t,n,i,r,s,a){let l;if(e.side===ut?l=n.intersectTriangle(s,r,i,!0,a):l=n.intersectTriangle(i,r,s,e.side!==mi,a),l===null)return null;ho.copy(a),ho.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(ho);return c<t.near||c>t.far?null:{distance:c,point:ho.clone(),object:o}}function uo(o,e,t,n,i,r,s,a,l,c,h,u){jn.fromBufferAttribute(i,c),qn.fromBufferAttribute(i,h),Yn.fromBufferAttribute(i,u);const d=o.morphTargetInfluences;if(r&&d){ro.set(0,0,0),so.set(0,0,0),oo.set(0,0,0);for(let m=0,_=r.length;m<_;m++){const x=d[m],p=r[m];x!==0&&(Pa.fromBufferAttribute(p,c),Da.fromBufferAttribute(p,h),Ia.fromBufferAttribute(p,u),s?(ro.addScaledVector(Pa,x),so.addScaledVector(Da,x),oo.addScaledVector(Ia,x)):(ro.addScaledVector(Pa.sub(jn),x),so.addScaledVector(Da.sub(qn),x),oo.addScaledVector(Ia.sub(Yn),x)))}jn.add(ro),qn.add(so),Yn.add(oo)}o.isSkinnedMesh&&(o.boneTransform(c,jn),o.boneTransform(h,qn),o.boneTransform(u,Yn));const f=Cm(o,e,t,n,jn,qn,Yn,Fa);if(f){a&&(ao.fromBufferAttribute(a,c),lo.fromBufferAttribute(a,h),co.fromBufferAttribute(a,u),f.uv=lt.getUV(Fa,jn,qn,Yn,ao,lo,co,new j)),l&&(ao.fromBufferAttribute(l,c),lo.fromBufferAttribute(l,h),co.fromBufferAttribute(l,u),f.uv2=lt.getUV(Fa,jn,qn,Yn,ao,lo,co,new j));const m={a:c,b:h,c:u,normal:new C,materialIndex:0};lt.getNormal(jn,qn,Yn,m.normal),f.face=m}return f}class ns extends Ge{constructor(e=1,t=1,n=1,i=1,r=1,s=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,s,r,0),m("z","y","x",1,-1,n,t,-e,s,r,1),m("x","z","y",1,1,e,n,t,i,s,2),m("x","z","y",1,-1,e,n,-t,i,s,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2));function m(_,x,p,g,b,v,y,E,L,N,B){const H=v/L,D=y/N,w=v/2,M=y/2,I=E/2,O=L+1,F=N+1;let U=0,te=0;const re=new C;for(let G=0;G<F;G++){const W=G*D-M;for(let ce=0;ce<O;ce++){const ne=ce*H-w;re[_]=ne*g,re[x]=W*b,re[p]=I,c.push(re.x,re.y,re.z),re[_]=0,re[x]=0,re[p]=E>0?1:-1,h.push(re.x,re.y,re.z),u.push(ce/L),u.push(1-G/N),U+=1}}for(let G=0;G<N;G++)for(let W=0;W<L;W++){const ce=d+W+O*G,ne=d+W+O*(G+1),he=d+(W+1)+O*(G+1),Re=d+(W+1)+O*G;l.push(ce,ne,Re),l.push(ne,he,Re),te+=6}a.addGroup(f,te,B),f+=te,d+=U}}static fromJSON(e){return new ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lr(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function St(o){const e={};for(let t=0;t<o.length;t++){const n=lr(o[t]);for(const i in n)e[i]=n[i]}return e}const is={clone:lr,merge:St};var Lm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dt extends dt{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Lm,this.fragmentShader=Rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}Dt.prototype.isShaderMaterial=!0;class Na extends He{constructor(){super();this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Na.prototype.isCamera=!0;class Lt extends Na{constructor(e=50,t=1,n=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($r*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,t-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}Lt.prototype.isPerspectiveCamera=!0;const cr=90,hr=1;class Oa extends He{constructor(e,t,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Lt(cr,hr,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new C(1,0,0)),this.add(i);const r=new Lt(cr,hr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new C(-1,0,0)),this.add(r);const s=new Lt(cr,hr,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new C(0,1,0)),this.add(s);const a=new Lt(cr,hr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new C(0,-1,0)),this.add(a);const l=new Lt(cr,hr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new C(0,0,1)),this.add(l);const c=new Lt(cr,hr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new C(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,a,l,c]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,s),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h}}class fo extends at{constructor(e,t,n,i,r,s,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Wr;super(e,t,n,i,r,s,a,l,c,h);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}fo.prototype.isCubeTexture=!0;class ih extends vt{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n);super(e,e,t);t=t||{},this.texture=new fo(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:rt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=st,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ns(5,5,5),r=new Dt({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ut,blending:yn});r.uniforms.tEquirect.value=t;const s=new wt(i,r),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=rt),new Oa(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(r)}}ih.prototype.isWebGLCubeRenderTarget=!0;const Ba=new C,Pm=new C,Dm=new xt;class Rn{constructor(e=new C(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ba.subVectors(n,t).cross(Pm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Ba),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dm.getNormalMatrix(e),i=this.coplanarPoint(Ba).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Rn.prototype.isPlane=!0;const ur=new bi,po=new C;class mo{constructor(e=new Rn,t=new Rn,n=new Rn,i=new Rn,r=new Rn,s=new Rn){this.planes=[e,t,n,i,r,s]}set(e,t,n,i,r,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],s=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],f=n[9],m=n[10],_=n[11],x=n[12],p=n[13],g=n[14],b=n[15];return t[0].setComponents(a-i,u-l,_-d,b-x).normalize(),t[1].setComponents(a+i,u+l,_+d,b+x).normalize(),t[2].setComponents(a+r,u+c,_+f,b+p).normalize(),t[3].setComponents(a-r,u-c,_-f,b-p).normalize(),t[4].setComponents(a-s,u-h,_-m,b-g).normalize(),t[5].setComponents(a+s,u+h,_+m,b+g).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(po.x=i.normal.x>0?e.max.x:e.min.x,po.y=i.normal.y>0?e.max.y:e.min.y,po.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(po)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rh(){let o=null,e=!1,t=null,n=null;function i(r,s){t(r,s),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function Im(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=o.createBuffer();o.bindBuffer(h,f),o.bufferData(h,u,d),c.onUploadCallback();let m=5126;return u instanceof Float32Array?m=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?c.isFloat16BufferAttribute?t?m=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):m=5123:u instanceof Int16Array?m=5122:u instanceof Uint32Array?m=5125:u instanceof Int32Array?m=5124:u instanceof Int8Array?m=5120:(u instanceof Uint8Array||u instanceof Uint8ClampedArray)&&(m=5121),{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const d=h.array,f=h.updateRange;o.bindBuffer(u,c),f.count===-1?o.bufferSubData(u,0,d):(t?o.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):o.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(o.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:s,remove:a,update:l}}class Ua extends Ge{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,s=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],_=[],x=[];for(let p=0;p<h;p++){const g=p*d-s;for(let b=0;b<c;b++){const v=b*u-r;m.push(v,-g,0),_.push(0,0,1),x.push(b/a),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let g=0;g<a;g++){const b=g+c*p,v=g+c*(p+1),y=g+1+c*(p+1),E=g+1+c*p;f.push(b,v,E),f.push(v,y,E)}this.setIndex(f),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(_,3)),this.setAttribute("uv",new Je(x,2))}static fromJSON(e){return new Ua(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Om=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Um=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zm="vec3 transformed = vec3( position );",Hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vm=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Gm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Km=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		return texture2D( envMap, uv ).rgb;
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",og=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ag=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,_g=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vg=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,yg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bg=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Eg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ag=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Pg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Fg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ng=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Vg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Xg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$g=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,t_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a_=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,l_=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,c_=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,h_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,f_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,m_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,__=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,v_=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,y_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,b_=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,M_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,w_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,S_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,T_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,E_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,A_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L_=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P_=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,D_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,I_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,F_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,N_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,O_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,U_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,H_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V_=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G_=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,X_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,q_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Y_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,J_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ix=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,rx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ie={alphamap_fragment:Fm,alphamap_pars_fragment:Nm,alphatest_fragment:Om,alphatest_pars_fragment:Bm,aomap_fragment:Um,aomap_pars_fragment:km,begin_vertex:zm,beginnormal_vertex:Hm,bsdfs:Vm,bumpmap_pars_fragment:Gm,clipping_planes_fragment:Wm,clipping_planes_pars_fragment:Xm,clipping_planes_pars_vertex:jm,clipping_planes_vertex:qm,color_fragment:Ym,color_pars_fragment:$m,color_pars_vertex:Zm,color_vertex:Jm,common:Km,cube_uv_reflection_fragment:Qm,defaultnormal_vertex:eg,displacementmap_pars_vertex:tg,displacementmap_vertex:ng,emissivemap_fragment:ig,emissivemap_pars_fragment:rg,encodings_fragment:sg,encodings_pars_fragment:og,envmap_fragment:ag,envmap_common_pars_fragment:lg,envmap_pars_fragment:cg,envmap_pars_vertex:hg,envmap_physical_pars_fragment:bg,envmap_vertex:ug,fog_vertex:dg,fog_pars_vertex:fg,fog_fragment:pg,fog_pars_fragment:mg,gradientmap_pars_fragment:gg,lightmap_fragment:_g,lightmap_pars_fragment:xg,lights_lambert_vertex:vg,lights_pars_begin:yg,lights_toon_fragment:Mg,lights_toon_pars_fragment:wg,lights_phong_fragment:Sg,lights_phong_pars_fragment:Tg,lights_physical_fragment:Eg,lights_physical_pars_fragment:Ag,lights_fragment_begin:Cg,lights_fragment_maps:Lg,lights_fragment_end:Rg,logdepthbuf_fragment:Pg,logdepthbuf_pars_fragment:Dg,logdepthbuf_pars_vertex:Ig,logdepthbuf_vertex:Fg,map_fragment:Ng,map_pars_fragment:Og,map_particle_fragment:Bg,map_particle_pars_fragment:Ug,metalnessmap_fragment:kg,metalnessmap_pars_fragment:zg,morphnormal_vertex:Hg,morphtarget_pars_vertex:Vg,morphtarget_vertex:Gg,normal_fragment_begin:Wg,normal_fragment_maps:Xg,normal_pars_fragment:jg,normal_pars_vertex:qg,normal_vertex:Yg,normalmap_pars_fragment:$g,clearcoat_normal_fragment_begin:Zg,clearcoat_normal_fragment_maps:Jg,clearcoat_pars_fragment:Kg,output_fragment:Qg,packing:e_,premultiplied_alpha_fragment:t_,project_vertex:n_,dithering_fragment:i_,dithering_pars_fragment:r_,roughnessmap_fragment:s_,roughnessmap_pars_fragment:o_,shadowmap_pars_fragment:a_,shadowmap_pars_vertex:l_,shadowmap_vertex:c_,shadowmask_pars_fragment:h_,skinbase_vertex:u_,skinning_pars_vertex:d_,skinning_vertex:f_,skinnormal_vertex:p_,specularmap_fragment:m_,specularmap_pars_fragment:g_,tonemapping_fragment:__,tonemapping_pars_fragment:x_,transmission_fragment:v_,transmission_pars_fragment:y_,uv_pars_fragment:b_,uv_pars_vertex:M_,uv_vertex:w_,uv2_pars_fragment:S_,uv2_pars_vertex:T_,uv2_vertex:E_,worldpos_vertex:A_,background_vert:C_,background_frag:L_,cube_vert:R_,cube_frag:P_,depth_vert:D_,depth_frag:I_,distanceRGBA_vert:F_,distanceRGBA_frag:N_,equirect_vert:O_,equirect_frag:B_,linedashed_vert:U_,linedashed_frag:k_,meshbasic_vert:z_,meshbasic_frag:H_,meshlambert_vert:V_,meshlambert_frag:G_,meshmatcap_vert:W_,meshmatcap_frag:X_,meshnormal_vert:j_,meshnormal_frag:q_,meshphong_vert:Y_,meshphong_frag:$_,meshphysical_vert:Z_,meshphysical_frag:J_,meshtoon_vert:K_,meshtoon_frag:Q_,points_vert:ex,points_frag:tx,shadow_vert:nx,shadow_frag:ix,sprite_vert:rx,sprite_frag:sx},le={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new xt},uv2Transform:{value:new xt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}}},hn={basic:{uniforms:St([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:St([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.fog,le.lights,{emissive:{value:new ue(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:St([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:St([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:St([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ue(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:St([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:St([le.points,le.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:St([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:St([le.common,le.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:St([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:St([le.sprite,le.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},cube:{uniforms:St([le.envmap,{opacity:{value:1}}]),vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:St([le.common,le.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:St([le.lights,le.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};hn.physical={uniforms:St([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new j(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};function ox(o,e,t,n,i){const r=new ue(0);let s=0,a,l,c=null,h=0,u=null;function d(m,_){let x=!1,p=_.isScene===!0?_.background:null;p&&p.isTexture&&(p=e.get(p));const g=o.xr,b=g.getSession&&g.getSession();b&&b.environmentBlendMode==="additive"&&(p=null),p===null?f(r,s):p&&p.isColor&&(f(p,1),x=!0),(o.autoClear||x)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),p&&(p.isCubeTexture||p.mapping===Vs)?(l===void 0&&(l=new wt(new ns(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:lr(hn.cube.uniforms),vertexShader:hn.cube.vertexShader,fragmentShader:hn.cube.fragmentShader,side:ut,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,y,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=p,l.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,(c!==p||h!==p.version||u!==o.toneMapping)&&(l.material.needsUpdate=!0,c=p,h=p.version,u=o.toneMapping),m.unshift(l,l.geometry,l.material,0,0,null)):p&&p.isTexture&&(a===void 0&&(a=new wt(new Ua(2,2),new Dt({name:"BackgroundMaterial",uniforms:lr(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),a.material.uniforms.uvTransform.value.copy(p.matrix),(c!==p||h!==p.version||u!==o.toneMapping)&&(a.material.needsUpdate=!0,c=p,h=p.version,u=o.toneMapping),m.unshift(a,a.geometry,a.material,0,0,null))}function f(m,_){t.buffers.color.setClear(m.r,m.g,m.b,_,i)}return{getClearColor:function(){return r},setClearColor:function(m,_=1){r.set(m),s=_,f(r,s)},getClearAlpha:function(){return s},setClearAlpha:function(m){s=m,f(r,s)},render:d}}function ax(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,a={},l=_(null);let c=l;function h(M,I,O,F,U){let te=!1;if(s){const re=m(F,O,I);c!==re&&(c=re,d(c.object)),te=x(F,U),te&&p(F,U)}else{const re=I.wireframe===!0;(c.geometry!==F.id||c.program!==O.id||c.wireframe!==re)&&(c.geometry=F.id,c.program=O.id,c.wireframe=re,te=!0)}M.isInstancedMesh===!0&&(te=!0),U!==null&&t.update(U,34963),te&&(L(M,I,O,F),U!==null&&o.bindBuffer(34963,t.get(U).buffer))}function u(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function d(M){return n.isWebGL2?o.bindVertexArray(M):r.bindVertexArrayOES(M)}function f(M){return n.isWebGL2?o.deleteVertexArray(M):r.deleteVertexArrayOES(M)}function m(M,I,O){const F=O.wireframe===!0;let U=a[M.id];U===void 0&&(U={},a[M.id]=U);let te=U[I.id];te===void 0&&(te={},U[I.id]=te);let re=te[F];return re===void 0&&(re=_(u()),te[F]=re),re}function _(M){const I=[],O=[],F=[];for(let U=0;U<i;U++)I[U]=0,O[U]=0,F[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:F,object:M,attributes:{},index:null}}function x(M,I){const O=c.attributes,F=M.attributes;let U=0;for(const te in F){const re=O[te],G=F[te];if(re===void 0||re.attribute!==G||re.data!==G.data)return!0;U++}return c.attributesNum!==U||c.index!==I}function p(M,I){const O={},F=M.attributes;let U=0;for(const te in F){const re=F[te],G={};G.attribute=re,re.data&&(G.data=re.data),O[te]=G,U++}c.attributes=O,c.attributesNum=U,c.index=I}function g(){const M=c.newAttributes;for(let I=0,O=M.length;I<O;I++)M[I]=0}function b(M){v(M,0)}function v(M,I){const O=c.newAttributes,F=c.enabledAttributes,U=c.attributeDivisors;O[M]=1,F[M]===0&&(o.enableVertexAttribArray(M),F[M]=1),U[M]!==I&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](M,I),U[M]=I)}function y(){const M=c.newAttributes,I=c.enabledAttributes;for(let O=0,F=I.length;O<F;O++)I[O]!==M[O]&&(o.disableVertexAttribArray(O),I[O]=0)}function E(M,I,O,F,U,te){n.isWebGL2===!0&&(O===5124||O===5125)?o.vertexAttribIPointer(M,I,O,U,te):o.vertexAttribPointer(M,I,O,F,U,te)}function L(M,I,O,F){if(n.isWebGL2===!1&&(M.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const U=F.attributes,te=O.getAttributes(),re=I.defaultAttributeValues;for(const G in te){const W=te[G];if(W.location>=0){let ce=U[G];if(ce===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ce!==void 0){const ne=ce.normalized,he=ce.itemSize,Re=t.get(ce);if(Re===void 0)continue;const $=Re.buffer,Ae=Re.type,ve=Re.bytesPerElement;if(ce.isInterleavedBufferAttribute){const pe=ce.data,ge=pe.stride,Fe=ce.offset;if(pe&&pe.isInstancedInterleavedBuffer){for(let X=0;X<W.locationSize;X++)v(W.location+X,pe.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let X=0;X<W.locationSize;X++)b(W.location+X);o.bindBuffer(34962,$);for(let X=0;X<W.locationSize;X++)E(W.location+X,he/W.locationSize,Ae,ne,ge*ve,(Fe+he/W.locationSize*X)*ve)}else{if(ce.isInstancedBufferAttribute){for(let pe=0;pe<W.locationSize;pe++)v(W.location+pe,ce.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let pe=0;pe<W.locationSize;pe++)b(W.location+pe);o.bindBuffer(34962,$);for(let pe=0;pe<W.locationSize;pe++)E(W.location+pe,he/W.locationSize,Ae,ne,he*ve,he/W.locationSize*pe*ve)}}else if(re!==void 0){const ne=re[G];if(ne!==void 0)switch(ne.length){case 2:o.vertexAttrib2fv(W.location,ne);break;case 3:o.vertexAttrib3fv(W.location,ne);break;case 4:o.vertexAttrib4fv(W.location,ne);break;default:o.vertexAttrib1fv(W.location,ne)}}}}y()}function N(){D();for(const M in a){const I=a[M];for(const O in I){const F=I[O];for(const U in F)f(F[U].object),delete F[U];delete I[O]}delete a[M]}}function B(M){if(a[M.id]===void 0)return;const I=a[M.id];for(const O in I){const F=I[O];for(const U in F)f(F[U].object),delete F[U];delete I[O]}delete a[M.id]}function H(M){for(const I in a){const O=a[I];if(O[M.id]===void 0)continue;const F=O[M.id];for(const U in F)f(F[U].object),delete F[U];delete O[M.id]}}function D(){w(),c!==l&&(c=l,d(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:D,resetDefaultState:w,dispose:N,releaseStatesOfGeometry:B,releaseStatesOfProgram:H,initAttributes:g,enableAttribute:b,disableUnusedAttributes:y}}function lx(o,e,t,n){const i=n.isWebGL2;let r;function s(c){r=c}function a(c,h){o.drawArrays(r,c,h),t.update(h,r,1)}function l(c,h,u){if(u===0)return;let d,f;if(i)d=o,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,c,h,u),t.update(h,r,u)}this.setMode=s,this.render=a,this.renderInstances=l}function cx(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext!="undefined"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&o instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=o.getParameter(34930),d=o.getParameter(35660),f=o.getParameter(3379),m=o.getParameter(34076),_=o.getParameter(34921),x=o.getParameter(36347),p=o.getParameter(36348),g=o.getParameter(36349),b=d>0,v=s||e.has("OES_texture_float"),y=b&&v,E=s?o.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:x,maxVaryings:p,maxFragmentUniforms:g,vertexTextures:b,floatFragmentTextures:v,floatVertexTextures:y,maxSamples:E}}function hx(o){const e=this;let t=null,n=0,i=!1,r=!1;const s=new Rn,a=new xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const m=u.length!==0||d||n!==0||i;return i=d,t=h(u,f,0),n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,c()},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,x=u.clipShadows,p=o.get(u);if(!i||m===null||m.length===0||r&&!x)r?h(null):c();else{const g=r?0:n,b=g*4;let v=p.clippingState||null;l.value=v,v=h(m,d,b,f);for(let y=0;y!==b;++y)v[y]=t[y];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let x=null;if(_!==0){if(x=l.value,m!==!0||x===null){const p=f+_*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(x===null||x.length<p)&&(x=new Float32Array(p));for(let b=0,v=f;b!==_;++b,v+=4)s.copy(u[b]).applyMatrix4(g,a),s.normal.toArray(x,v),x[v+3]=s.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,x}}function ux(o){let e=new WeakMap;function t(s,a){return a===na?s.mapping=Wr:a===ia&&(s.mapping=Xr),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===na||a===ia)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=o.getRenderTarget(),h=new ih(l.height/2);return h.fromEquirectangularTexture(o,s),e.set(s,h),o.setRenderTarget(c),s.addEventListener("dispose",i),t(h.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class dr extends Na{constructor(e=-1,t=1,n=1,i=-1,r=.1,s=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,s=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}dr.prototype.isOrthographicCamera=!0;class go extends Dt{constructor(e){super(e);this.type="RawShaderMaterial"}}go.prototype.isRawShaderMaterial=!0;const fr=4,$n=8,un=Math.pow(2,$n),sh=[.125,.215,.35,.446,.526,.582],oh=$n-fr+1+sh.length,pr=20,_o={[en]:0,[wn]:1},ka=new dr,{_lodPlanes:rs,_sizeLods:ah,_sigmas:xo}=fx(),lh=new ue;let za=null;const wi=(1+Math.sqrt(5))/2,mr=1/wi,ch=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,wi,mr),new C(0,wi,-mr),new C(mr,0,wi),new C(-mr,0,wi),new C(wi,mr,0),new C(-wi,mr,0)];class dx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=px(pr),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){za=this._renderer.getRenderTarget();const r=this._allocateTargets();return this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=dh(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=uh(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<rs.length;e++)rs[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(za),e.scissorTest=!1,vo(e,0,0,e.width,e.height)}_fromTexture(e){za=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:rt,minFilter:rt,generateMipmaps:!1,type:gi,format:st,encoding:en,depthBuffer:!1},n=hh(t);return n.depthBuffer=!e,this._pingPongRenderTarget=hh(t),n}_compileMaterial(e){const t=new wt(rs[0],e);this._renderer.compile(t,ka)}_sceneToCubeUV(e,t,n,i){const r=90,s=1,a=new Lt(r,s,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(lh),h.toneMapping=kn,h.autoClear=!1;const f=new Ln({name:"PMREM.Background",side:ut,depthWrite:!1,depthTest:!1}),m=new wt(new ns,f);let _=!1;const x=e.background;x?x.isColor&&(f.color.copy(x),e.background=null,_=!0):(f.color.copy(lh),_=!0);for(let p=0;p<6;p++){const g=p%3;g==0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):g==1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p])),vo(i,g*un,p>2?un:0,un,un),h.setRenderTarget(i),_&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=x}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===st&&t.type===bn&&t.encoding===wn?e.value=_o[en]:e.value=_o[t.encoding]}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Wr||e.mapping===Xr;i?this._cubemapShader==null&&(this._cubemapShader=dh()):this._equirectShader==null&&(this._equirectShader=uh());const r=i?this._cubemapShader:this._equirectShader,s=new wt(rs[0],r),a=r.uniforms;a.envMap.value=e,i||a.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(a.inputEncoding,e),vo(t,0,0,3*un,2*un),n.setRenderTarget(t),n.render(s,ka)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<oh;i++){const r=Math.sqrt(xo[i]*xo[i]-xo[i-1]*xo[i-1]),s=ch[(i-1)%ch.length];this._blur(e,i-1,i,r,s)}t.autoClear=n}_blur(e,t,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",r),this._halfBlur(s,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new wt(rs[i],c),d=c.uniforms,f=ah[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*pr-1),_=r/m,x=isFinite(r)?1+Math.floor(h*_):pr;x>pr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${pr}`);const p=[];let g=0;for(let E=0;E<pr;++E){const L=E/_,N=Math.exp(-L*L/2);p.push(N),E==0?g+=N:E<x&&(g+=2*N)}for(let E=0;E<p.length;E++)p[E]=p[E]/g;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=p,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a),d.dTheta.value=m,d.mipInt.value=$n-n;const b=ah[i],v=3*Math.max(0,un-2*b),y=(i===0?0:2*un)+2*b*(i>$n-fr?i-$n+fr:0);vo(t,v,y,3*b,2*b),l.setRenderTarget(t),l.render(u,ka)}}function fx(){const o=[],e=[],t=[];let n=$n;for(let i=0;i<oh;i++){const r=Math.pow(2,n);e.push(r);let s=1/r;i>$n-fr?s=sh[i-$n+fr-1]:i==0&&(s=0),t.push(s);const a=1/(r-1),l=-a/2,c=1+a/2,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,m=2,_=1,x=new Float32Array(f*d*u),p=new Float32Array(m*d*u),g=new Float32Array(_*d*u);for(let v=0;v<u;v++){const y=v%3*2/3-1,E=v>2?0:-1,L=[y,E,0,y+2/3,E,0,y+2/3,E+1,0,y,E,0,y+2/3,E+1,0,y,E+1,0];x.set(L,f*d*v),p.set(h,m*d*v);const N=[v,v,v,v,v,v];g.set(N,_*d*v)}const b=new Ge;b.setAttribute("position",new Qe(x,f)),b.setAttribute("uv",new Qe(p,m)),b.setAttribute("faceIndex",new Qe(g,_)),o.push(b),n>fr&&n--}return{_lodPlanes:o,_sizeLods:e,_sigmas:t}}function hh(o){const e=new vt(3*un,3*un,o);return e.texture.mapping=Vs,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function vo(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function px(o){const e=new Float32Array(o),t=new C(0,1,0);return new go({name:"SphericalGaussianBlur",defines:{n:o},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			${Va()}

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function uh(){const o=new j(1,1);return new go({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:o},inputEncoding:{value:_o[en]}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Va()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function dh(){return new go({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:_o[en]}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Va()}

			void main() {

				gl_FragColor = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Ha(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Va(){return`

		uniform int inputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else {

				return sRGBToLinear( value );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function mx(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const l=a.mapping,c=l===na||l===ia,h=l===Wr||l===Xr;if(c||h){if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){const d=o.getRenderTarget();t===null&&(t=new dx(o));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),o.setRenderTarget(d),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function gx(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _x(o,e,t,n){const i={},r=new WeakMap;function s(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",s),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",s),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],34962);const f=u.morphAttributes;for(const m in f){const _=f[m];for(let x=0,p=_.length;x<p;x++)e.update(_[x],34962)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const g=f.array;_=f.version;for(let b=0,v=g.length;b<v;b+=3){const y=g[b+0],E=g[b+1],L=g[b+2];d.push(y,E,E,L,L,y)}}else{const g=m.array;_=m.version;for(let b=0,v=g.length/3-1;b<v;b+=3){const y=b+0,E=b+1,L=b+2;d.push(y,E,E,L,L,y)}}const x=new(Vc(d)>65535?th:eh)(d,1);x.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,x)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function xx(o,e,t,n){const i=n.isWebGL2;let r;function s(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){o.drawElements(r,f,a,d*l),t.update(f,r,1)}function u(d,f,m){if(m===0)return;let _,x;if(i)_=o,x="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[x](r,f,a,d*l,m),t.update(f,r,m)}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=u}function vx(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}class Ga extends at{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=it,this.minFilter=it,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Ga.prototype.isDataTexture2DArray=!0;function yx(o,e){return o[0]-e[0]}function bx(o,e){return Math.abs(e[1])-Math.abs(o[1])}function fh(o,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),o.divideScalar(t)}function Mx(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,s=new C,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position.length;let _=r.get(h);if(_===void 0||_.count!==m){_!==void 0&&_.texture.dispose();const g=h.morphAttributes.normal!==void 0,b=h.morphAttributes.position,v=h.morphAttributes.normal||[],y=h.attributes.position.count,E=g===!0?2:1;let L=y*E,N=1;L>e.maxTextureSize&&(N=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const B=new Float32Array(L*N*4*m),H=new Ga(B,L,N,m);H.format=st,H.type=Mn,H.needsUpdate=!0;const D=E*4;for(let w=0;w<m;w++){const M=b[w],I=v[w],O=L*N*4*w;for(let F=0;F<M.count;F++){s.fromBufferAttribute(M,F),M.normalized===!0&&fh(s,M);const U=F*D;B[O+U+0]=s.x,B[O+U+1]=s.y,B[O+U+2]=s.z,B[O+U+3]=0,g===!0&&(s.fromBufferAttribute(I,F),I.normalized===!0&&fh(s,I),B[O+U+4]=s.x,B[O+U+5]=s.y,B[O+U+6]=s.z,B[O+U+7]=0)}}_={count:m,texture:H,size:new j(L,N)},r.set(h,_)}let x=0;for(let g=0;g<f.length;g++)x+=f[g];const p=h.morphTargetsRelative?1:1-x;d.getUniforms().setValue(o,"morphTargetBaseInfluence",p),d.getUniforms().setValue(o,"morphTargetInfluences",f),d.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const m=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==m){_=[];for(let v=0;v<m;v++)_[v]=[v,0];n[h.id]=_}for(let v=0;v<m;v++){const y=_[v];y[0]=v,y[1]=f[v]}_.sort(bx);for(let v=0;v<8;v++)v<m&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(yx);const x=h.morphAttributes.position,p=h.morphAttributes.normal;let g=0;for(let v=0;v<8;v++){const y=a[v],E=y[0],L=y[1];E!==Number.MAX_SAFE_INTEGER&&L?(x&&h.getAttribute("morphTarget"+v)!==x[E]&&h.setAttribute("morphTarget"+v,x[E]),p&&h.getAttribute("morphNormal"+v)!==p[E]&&h.setAttribute("morphNormal"+v,p[E]),i[v]=L,g+=L):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const b=h.morphTargetsRelative?1:1-g;d.getUniforms().setValue(o,"morphTargetBaseInfluence",b),d.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function wx(o,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function s(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:s}}class ph extends at{constructor(e=null,t=1,n=1,i=1){super(null);this.image={data:e,width:t,height:n,depth:i},this.magFilter=it,this.minFilter=it,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}ph.prototype.isDataTexture3D=!0;const mh=new at,gh=new Ga,_h=new ph,xh=new fo,vh=[],yh=[],bh=new Float32Array(16),Mh=new Float32Array(9),wh=new Float32Array(4);function gr(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=vh[i];if(r===void 0&&(r=new Float32Array(i),vh[i]=r),e!==0){n.toArray(r,0);for(let s=1,a=0;s!==e;++s)a+=t,o[s].toArray(r,a)}return r}function Rt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function Tt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function yo(o,e){let t=yh[e];t===void 0&&(t=new Int32Array(e),yh[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Sx(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Tx(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;o.uniform2fv(this.addr,e),Tt(t,e)}}function Ex(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;o.uniform3fv(this.addr,e),Tt(t,e)}}function Ax(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;o.uniform4fv(this.addr,e),Tt(t,e)}}function Cx(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Rt(t,n))return;wh.set(n),o.uniformMatrix2fv(this.addr,!1,wh),Tt(t,n)}}function Lx(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Rt(t,n))return;Mh.set(n),o.uniformMatrix3fv(this.addr,!1,Mh),Tt(t,n)}}function Rx(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Rt(t,n))return;bh.set(n),o.uniformMatrix4fv(this.addr,!1,bh),Tt(t,n)}}function Px(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Dx(o,e){const t=this.cache;Rt(t,e)||(o.uniform2iv(this.addr,e),Tt(t,e))}function Ix(o,e){const t=this.cache;Rt(t,e)||(o.uniform3iv(this.addr,e),Tt(t,e))}function Fx(o,e){const t=this.cache;Rt(t,e)||(o.uniform4iv(this.addr,e),Tt(t,e))}function Nx(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Ox(o,e){const t=this.cache;Rt(t,e)||(o.uniform2uiv(this.addr,e),Tt(t,e))}function Bx(o,e){const t=this.cache;Rt(t,e)||(o.uniform3uiv(this.addr,e),Tt(t,e))}function Ux(o,e){const t=this.cache;Rt(t,e)||(o.uniform4uiv(this.addr,e),Tt(t,e))}function kx(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||mh,i)}function zx(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||_h,i)}function Hx(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||xh,i)}function Vx(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||gh,i)}function Gx(o){switch(o){case 5126:return Sx;case 35664:return Tx;case 35665:return Ex;case 35666:return Ax;case 35674:return Cx;case 35675:return Lx;case 35676:return Rx;case 5124:case 35670:return Px;case 35667:case 35671:return Dx;case 35668:case 35672:return Ix;case 35669:case 35673:return Fx;case 5125:return Nx;case 36294:return Ox;case 36295:return Bx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return kx;case 35679:case 36299:case 36307:return zx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Vx}}function Wx(o,e){o.uniform1fv(this.addr,e)}function Xx(o,e){const t=gr(e,this.size,2);o.uniform2fv(this.addr,t)}function jx(o,e){const t=gr(e,this.size,3);o.uniform3fv(this.addr,t)}function qx(o,e){const t=gr(e,this.size,4);o.uniform4fv(this.addr,t)}function Yx(o,e){const t=gr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function $x(o,e){const t=gr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Zx(o,e){const t=gr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Jx(o,e){o.uniform1iv(this.addr,e)}function Kx(o,e){o.uniform2iv(this.addr,e)}function Qx(o,e){o.uniform3iv(this.addr,e)}function e0(o,e){o.uniform4iv(this.addr,e)}function t0(o,e){o.uniform1uiv(this.addr,e)}function n0(o,e){o.uniform2uiv(this.addr,e)}function i0(o,e){o.uniform3uiv(this.addr,e)}function r0(o,e){o.uniform4uiv(this.addr,e)}function s0(o,e,t){const n=e.length,i=yo(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTexture2D(e[r]||mh,i[r])}function o0(o,e,t){const n=e.length,i=yo(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture3D(e[r]||_h,i[r])}function a0(o,e,t){const n=e.length,i=yo(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTextureCube(e[r]||xh,i[r])}function l0(o,e,t){const n=e.length,i=yo(t,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||gh,i[r])}function c0(o){switch(o){case 5126:return Wx;case 35664:return Xx;case 35665:return jx;case 35666:return qx;case 35674:return Yx;case 35675:return $x;case 35676:return Zx;case 5124:case 35670:return Jx;case 35667:case 35671:return Kx;case 35668:case 35672:return Qx;case 35669:case 35673:return e0;case 5125:return t0;case 36294:return n0;case 36295:return i0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return s0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return a0;case 36289:case 36303:case 36311:case 36292:return l0}}function h0(o,e,t){this.id=o,this.addr=t,this.cache=[],this.setValue=Gx(e.type)}function Sh(o,e,t){this.id=o,this.addr=t,this.cache=[],this.size=e.size,this.setValue=c0(e.type)}Sh.prototype.updateCache=function(o){const e=this.cache;o instanceof Float32Array&&e.length!==o.length&&(this.cache=new Float32Array(o.length)),Tt(e,o)};function Th(o){this.id=o,this.seq=[],this.map={}}Th.prototype.setValue=function(o,e,t){const n=this.seq;for(let i=0,r=n.length;i!==r;++i){const s=n[i];s.setValue(o,e[s.id],t)}};const Wa=/(\w+)(\])?(\[|\.)?/g;function Eh(o,e){o.seq.push(e),o.map[e.id]=e}function u0(o,e,t){const n=o.name,i=n.length;for(Wa.lastIndex=0;;){const r=Wa.exec(n),s=Wa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===i){Eh(t,c===void 0?new h0(a,o,e):new Sh(a,o,e));break}else{let u=t.map[a];u===void 0&&(u=new Th(a),Eh(t,u)),t=u}}}function Zn(o,e){this.seq=[],this.map={};const t=o.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=o.getActiveUniform(e,n),r=o.getUniformLocation(e,i.name);u0(i,r,this)}}Zn.prototype.setValue=function(o,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(o,t,n)};Zn.prototype.setOptional=function(o,e,t){const n=e[t];n!==void 0&&this.setValue(o,t,n)};Zn.upload=function(o,e,t,n){for(let i=0,r=e.length;i!==r;++i){const s=e[i],a=t[s.id];a.needsUpdate!==!1&&s.setValue(o,a.value,n)}};Zn.seqWithValue=function(o,e){const t=[];for(let n=0,i=o.length;n!==i;++n){const r=o[n];r.id in e&&t.push(r)}return t};function Ah(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let d0=0;function f0(o){const e=o.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Ch(o){switch(o){case en:return["Linear","( value )"];case wn:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Lh(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();return n&&i===""?"":t.toUpperCase()+`

`+i+`

`+f0(o.getShaderSource(e))}function Si(o,e){const t=Ch(e);return"vec4 "+o+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function p0(o,e){const t=Ch(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function m0(o,e){let t;switch(e){case Kf:t="Linear";break;case Qf:t="Reinhard";break;case ep:t="OptimizedCineon";break;case tp:t="ACESFilmic";break;case np:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function g0(o){return[o.extensionDerivatives||o.envMapCubeUV||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ss).join(`
`)}function _0(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function x0(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),s=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[s]={type:r.type,location:o.getAttribLocation(e,s),locationSize:a}}return t}function ss(o){return o!==""}function Rh(o,e){return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ph(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xa(o){return o.replace(v0,y0)}function y0(o,e){const t=Ie[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Xa(t)}const b0=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,M0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(o){return o.replace(M0,Ih).replace(b0,w0)}function w0(o,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Ih(o,e,t,n)}function Ih(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fh(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function S0(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===gc?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Rf?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Vr&&(e="SHADOWMAP_TYPE_VSM"),e}function T0(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Wr:case Xr:e="ENVMAP_TYPE_CUBE";break;case Vs:case ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E0(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Xr:case ra:e="ENVMAP_MODE_REFRACTION";break}return e}function A0(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Hs:e="ENVMAP_BLENDING_MULTIPLY";break;case Zf:e="ENVMAP_BLENDING_MIX";break;case Jf:e="ENVMAP_BLENDING_ADD";break}return e}function C0(o,e,t,n){const i=o.getContext(),r=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=S0(t),c=T0(t),h=E0(t),u=A0(t),d=t.isWebGL2?"":g0(t),f=_0(r),m=i.createProgram();let _,x,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=[f].filter(ss).join(`
`),_.length>0&&(_+=`
`),x=[d,f].filter(ss).join(`
`),x.length>0&&(x+=`
`)):(_=[Fh(t),"#define SHADER_NAME "+t.shaderName,f,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),x=[d,Fh(t),"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==kn?m0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===zn?"#define OPAQUE":"",Ie.encodings_pars_fragment,t.map?Si("mapTexelToLinear",t.mapEncoding):"",t.matcap?Si("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Si("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Si("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularColorMap?Si("specularColorMapTexelToLinear",t.specularColorMapEncoding):"",t.sheenColorMap?Si("sheenColorMapTexelToLinear",t.sheenColorMapEncoding):"",t.lightMap?Si("lightMapTexelToLinear",t.lightMapEncoding):"",p0("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),s=Xa(s),s=Rh(s,t),s=Ph(s,t),a=Xa(a),a=Rh(a,t),a=Ph(a,t),s=Dh(s),a=Dh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",t.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const g=p+_+s,b=p+x+a,v=Ah(i,35633,g),y=Ah(i,35632,b);if(i.attachShader(m,v),i.attachShader(m,y),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),o.debug.checkShaderErrors){const N=i.getProgramInfoLog(m).trim(),B=i.getShaderInfoLog(v).trim(),H=i.getShaderInfoLog(y).trim();let D=!0,w=!0;if(i.getProgramParameter(m,35714)===!1){D=!1;const M=Lh(i,v,"vertex"),I=Lh(i,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+N+`
`+M+`
`+I)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||H==="")&&(w=!1);w&&(this.diagnostics={runnable:D,programLog:N,vertexShader:{log:B,prefix:_},fragmentShader:{log:H,prefix:x}})}i.deleteShader(v),i.deleteShader(y);let E;this.getUniforms=function(){return E===void 0&&(E=new Zn(i,m)),E};let L;return this.getAttributes=function(){return L===void 0&&(L=x0(i,m)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=d0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=y,this}let L0=0;class R0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new P0;t.set(e,n)}return t.get(e)}}class P0{constructor(){this.id=L0++,this.usedTimes=0}}function D0(o,e,t,n,i,r,s){const a=new ba,l=new R0,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.floatVertexTextures,f=i.maxVertexUniforms,m=i.vertexTextures;let _=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(w){const I=w.skeleton.bones;if(d)return 1024;{const F=Math.floor((f-20)/4),U=Math.min(F,I.length);return U<I.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+I.length+" bones. This GPU supports "+U+"."),0):U}}function g(w){let M;return w&&w.isTexture?M=w.encoding:w&&w.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),M=w.texture.encoding):M=en,h&&w&&w.isTexture&&w.format===st&&w.type===bn&&w.encoding===wn&&(M=en),M}function b(w,M,I,O,F){const U=O.fog,te=w.isMeshStandardMaterial?O.environment:null,re=(w.isMeshStandardMaterial?t:e).get(w.envMap||te),G=x[w.type],W=F.isSkinnedMesh?p(F):0;w.precision!==null&&(_=i.getMaxPrecision(w.precision),_!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",_,"instead."));let ce,ne,he,Re;if(G){const ge=hn[G];ce=ge.vertexShader,ne=ge.fragmentShader}else ce=w.vertexShader,ne=w.fragmentShader,l.update(w),he=l.getVertexShaderID(w),Re=l.getFragmentShaderID(w);const $=o.getRenderTarget(),Ae=w.alphaTest>0,ve=w.clearcoat>0;return{isWebGL2:h,shaderID:G,shaderName:w.type,vertexShader:ce,fragmentShader:ne,defines:w.defines,customVertexShaderID:he,customFragmentShaderID:Re,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:_,instancing:F.isInstancedMesh===!0,instancingColor:F.isInstancedMesh===!0&&F.instanceColor!==null,supportsVertexTextures:m,outputEncoding:$!==null?g($.texture):o.outputEncoding,map:!!w.map,mapEncoding:g(w.map),matcap:!!w.matcap,matcapEncoding:g(w.matcap),envMap:!!re,envMapMode:re&&re.mapping,envMapEncoding:g(re),envMapCubeUV:!!re&&(re.mapping===Vs||re.mapping===ra),lightMap:!!w.lightMap,lightMapEncoding:g(w.lightMap),aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,emissiveMapEncoding:g(w.emissiveMap),bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===em,tangentSpaceNormalMap:w.normalMapType===xi,clearcoat:ve,clearcoatMap:ve&&!!w.clearcoatMap,clearcoatRoughnessMap:ve&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:ve&&!!w.clearcoatNormalMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,specularColorMapEncoding:g(w.specularColorMap),alphaMap:!!w.alphaMap,alphaTest:Ae,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenColorMapEncoding:g(w.sheenColorMap),sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!F.geometry&&!!F.geometry.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!F.geometry&&!!F.geometry.attributes.color&&F.geometry.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatNormalMap||w.transmission>0||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||w.sheen>0||!!w.sheenColorMap||!!w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!U,useFog:w.fog,fogExp2:U&&U.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:u,skinning:F.isSkinnedMesh===!0&&W>0,maxBones:W,useVertexTexture:d,morphTargets:!!F.geometry&&!!F.geometry.morphAttributes.position,morphNormals:!!F.geometry&&!!F.geometry.morphAttributes.normal,morphTargetsCount:!!F.geometry&&!!F.geometry.morphAttributes.position?F.geometry.morphAttributes.position.length:0,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,format:w.format,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&I.length>0,shadowMapType:o.shadowMap.type,toneMapping:w.toneMapped?o.toneMapping:kn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===mi,flipSided:w.side===ut,depthPacking:w.depthPacking!==void 0?w.depthPacking:!1,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function v(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)M.push(I),M.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(y(M,w),E(M,w),M.push(o.outputEncoding)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputEncoding),w.push(M.mapEncoding),w.push(M.matcapEncoding),w.push(M.envMapMode),w.push(M.envMapEncoding),w.push(M.lightMapEncoding),w.push(M.emissiveMapEncoding),w.push(M.combine),w.push(M.vertexUvs),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.maxBones),w.push(M.morphTargetsCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.format),w.push(M.specularColorMapEncoding),w.push(M.sheenColorMapEncoding)}function E(w,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.map&&a.enable(4),M.matcap&&a.enable(5),M.envMap&&a.enable(6),M.envMapCubeUV&&a.enable(7),M.lightMap&&a.enable(8),M.aoMap&&a.enable(9),M.emissiveMap&&a.enable(10),M.bumpMap&&a.enable(11),M.normalMap&&a.enable(12),M.objectSpaceNormalMap&&a.enable(13),M.tangentSpaceNormalMap&&a.enable(14),M.clearcoat&&a.enable(15),M.clearcoatMap&&a.enable(16),M.clearcoatRoughnessMap&&a.enable(17),M.clearcoatNormalMap&&a.enable(18),M.displacementMap&&a.enable(19),M.specularMap&&a.enable(20),M.roughnessMap&&a.enable(21),M.metalnessMap&&a.enable(22),M.gradientMap&&a.enable(23),M.alphaMap&&a.enable(24),M.alphaTest&&a.enable(25),M.vertexColors&&a.enable(26),M.vertexAlphas&&a.enable(27),M.vertexUvs&&a.enable(28),M.vertexTangents&&a.enable(29),M.uvsVertexOnly&&a.enable(30),M.fog&&a.enable(31),w.push(a.mask),a.disableAll(),M.useFog&&a.enable(0),M.flatShading&&a.enable(1),M.logarithmicDepthBuffer&&a.enable(2),M.skinning&&a.enable(3),M.useVertexTexture&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.premultipliedAlpha&&a.enable(7),M.shadowMapEnabled&&a.enable(8),M.physicallyCorrectLights&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.depthPacking&&a.enable(12),M.dithering&&a.enable(13),M.specularIntensityMap&&a.enable(14),M.specularColorMap&&a.enable(15),M.transmission&&a.enable(16),M.transmissionMap&&a.enable(17),M.thicknessMap&&a.enable(18),M.sheen&&a.enable(19),M.sheenColorMap&&a.enable(20),M.sheenRoughnessMap&&a.enable(21),w.push(a.mask)}function L(w){const M=x[w.type];let I;if(M){const O=hn[M];I=is.clone(O.uniforms)}else I=w.uniforms;return I}function N(w,M){let I;for(let O=0,F=c.length;O<F;O++){const U=c[O];if(U.cacheKey===M){I=U,++I.usedTimes;break}}return I===void 0&&(I=new C0(o,M,w,r),c.push(I)),I}function B(w){if(--w.usedTimes==0){const M=c.indexOf(w);c[M]=c[c.length-1],c.pop(),w.destroy()}}function H(w){l.remove(w)}function D(){l.dispose()}return{getParameters:b,getProgramCacheKey:v,getUniforms:L,acquireProgram:N,releaseProgram:B,releaseShaderCache:H,programs:c,dispose:D}}function I0(){let o=new WeakMap;function e(r){let s=o.get(r);return s===void 0&&(s={},o.set(r,s)),s}function t(r){o.delete(r)}function n(r,s,a){o.get(r)[s]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function F0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Nh(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Oh(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function s(u,d,f,m,_,x){let p=o[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:x},o[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=x),e++,p}function a(u,d,f,m,_,x){const p=s(u,d,f,m,_,x);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,m,_,x){const p=s(u,d,f,m,_,x);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||F0),n.length>1&&n.sort(d||Nh),i.length>1&&i.sort(d||Nh)}function h(){for(let u=e,d=o.length;u<d;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function N0(){let o=new WeakMap;function e(n,i){let r;return o.has(n)===!1?(r=new Oh,o.set(n,[r])):i>=o.get(n).length?(r=new Oh,o.get(n).push(r)):r=o.get(n)[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function O0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ue};break;case"SpotLight":t={position:new C,direction:new C,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":t={color:new ue,position:new C,halfWidth:new C,halfHeight:new C};break}return o[e.id]=t,t}}}function B0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let U0=0;function k0(o,e){return(e.castShadow?1:0)-(o.castShadow?1:0)}function z0(o,e){const t=new O0,n=B0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new C);const r=new C,s=new me,a=new me;function l(h,u){let d=0,f=0,m=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let _=0,x=0,p=0,g=0,b=0,v=0,y=0,E=0;h.sort(k0);const L=u!==!0?Math.PI:1;for(let B=0,H=h.length;B<H;B++){const D=h[B],w=D.color,M=D.intensity,I=D.distance,O=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=w.r*M*L,f+=w.g*M*L,m+=w.b*M*L;else if(D.isLightProbe)for(let F=0;F<9;F++)i.probe[F].addScaledVector(D.sh.coefficients[F],M);else if(D.isDirectionalLight){const F=t.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity*L),D.castShadow){const U=D.shadow,te=n.get(D);te.shadowBias=U.bias,te.shadowNormalBias=U.normalBias,te.shadowRadius=U.radius,te.shadowMapSize=U.mapSize,i.directionalShadow[_]=te,i.directionalShadowMap[_]=O,i.directionalShadowMatrix[_]=D.shadow.matrix,v++}i.directional[_]=F,_++}else if(D.isSpotLight){const F=t.get(D);if(F.position.setFromMatrixPosition(D.matrixWorld),F.color.copy(w).multiplyScalar(M*L),F.distance=I,F.coneCos=Math.cos(D.angle),F.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),F.decay=D.decay,D.castShadow){const U=D.shadow,te=n.get(D);te.shadowBias=U.bias,te.shadowNormalBias=U.normalBias,te.shadowRadius=U.radius,te.shadowMapSize=U.mapSize,i.spotShadow[p]=te,i.spotShadowMap[p]=O,i.spotShadowMatrix[p]=D.shadow.matrix,E++}i.spot[p]=F,p++}else if(D.isRectAreaLight){const F=t.get(D);F.color.copy(w).multiplyScalar(M),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=F,g++}else if(D.isPointLight){const F=t.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity*L),F.distance=D.distance,F.decay=D.decay,D.castShadow){const U=D.shadow,te=n.get(D);te.shadowBias=U.bias,te.shadowNormalBias=U.normalBias,te.shadowRadius=U.radius,te.shadowMapSize=U.mapSize,te.shadowCameraNear=U.camera.near,te.shadowCameraFar=U.camera.far,i.pointShadow[x]=te,i.pointShadowMap[x]=O,i.pointShadowMatrix[x]=D.shadow.matrix,y++}i.point[x]=F,x++}else if(D.isHemisphereLight){const F=t.get(D);F.skyColor.copy(D.color).multiplyScalar(M*L),F.groundColor.copy(D.groundColor).multiplyScalar(M*L),i.hemi[b]=F,b++}}g>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=m;const N=i.hash;(N.directionalLength!==_||N.pointLength!==x||N.spotLength!==p||N.rectAreaLength!==g||N.hemiLength!==b||N.numDirectionalShadows!==v||N.numPointShadows!==y||N.numSpotShadows!==E)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=g,i.point.length=x,i.hemi.length=b,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotShadowMatrix.length=E,N.directionalLength=_,N.pointLength=x,N.spotLength=p,N.rectAreaLength=g,N.hemiLength=b,N.numDirectionalShadows=v,N.numPointShadows=y,N.numSpotShadows=E,i.version=U0++)}function c(h,u){let d=0,f=0,m=0,_=0,x=0;const p=u.matrixWorldInverse;for(let g=0,b=h.length;g<b;g++){const v=h[g];if(v.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),d++}else if(v.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(v.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),y.direction.normalize(),x++}}}return{setup:l,setupView:c,state:i}}function Bh(o,e){const t=new z0(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function H0(o,e){let t=new WeakMap;function n(r,s=0){let a;return t.has(r)===!1?(a=new Bh(o,e),t.set(r,[a])):s>=t.get(r).length?(a=new Bh(o,e),t.get(r).push(a)):a=t.get(r)[s],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class ja extends dt{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=Qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}ja.prototype.isMeshDepthMaterial=!0;class Uh extends dt{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}Uh.prototype.isMeshDistanceMaterial=!0;const V0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kh(o,e,t){let n=new mo;const i=new j,r=new j,s=new qe,a=new ja({depthPacking:Uc}),l=new Uh,c={},h=t.maxTextureSize,u={0:ut,1:Hi,2:mi},d=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:V0,fragmentShader:G0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ge;m.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wt(m,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gc,this.render=function(v,y,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||v.length===0)return;const L=o.getRenderTarget(),N=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),H=o.state;H.setBlending(yn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);for(let D=0,w=v.length;D<w;D++){const M=v[D],I=M.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",M,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const O=I.getFrameExtents();if(i.multiply(O),r.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/O.x),i.x=r.x*O.x,I.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/O.y),i.y=r.y*O.y,I.mapSize.y=r.y)),I.map===null&&!I.isPointLightShadow&&this.type===Vr){const U={minFilter:rt,magFilter:rt,format:st};I.map=new vt(i.x,i.y,U),I.map.texture.name=M.name+".shadowMap",I.mapPass=new vt(i.x,i.y,U),I.camera.updateProjectionMatrix()}if(I.map===null){const U={minFilter:it,magFilter:it,format:st};I.map=new vt(i.x,i.y,U),I.map.texture.name=M.name+".shadowMap",I.camera.updateProjectionMatrix()}o.setRenderTarget(I.map),o.clear();const F=I.getViewportCount();for(let U=0;U<F;U++){const te=I.getViewport(U);s.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),H.viewport(s),I.updateMatrices(M,U),n=I.getFrustum(),b(y,E,I.camera,M,this.type)}!I.isPointLightShadow&&this.type===Vr&&p(I,E),I.needsUpdate=!1}x.needsUpdate=!1,o.setRenderTarget(L,N,B)};function p(v,y){const E=e.update(_);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,o.setRenderTarget(v.mapPass),o.clear(),o.renderBufferDirect(y,null,E,d,_,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,o.setRenderTarget(v.map),o.clear(),o.renderBufferDirect(y,null,E,f,_,null)}function g(v,y,E,L,N,B,H){let D=null;const w=L.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(w!==void 0?D=w:D=L.isPointLight===!0?l:a,o.localClippingEnabled&&E.clipShadows===!0&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0){const M=D.uuid,I=E.uuid;let O=c[M];O===void 0&&(O={},c[M]=O);let F=O[I];F===void 0&&(F=D.clone(),O[I]=F),D=F}return D.visible=E.visible,D.wireframe=E.wireframe,H===Vr?D.side=E.shadowSide!==null?E.shadowSide:E.side:D.side=E.shadowSide!==null?E.shadowSide:u[E.side],D.alphaMap=E.alphaMap,D.alphaTest=E.alphaTest,D.clipShadows=E.clipShadows,D.clippingPlanes=E.clippingPlanes,D.clipIntersection=E.clipIntersection,D.displacementMap=E.displacementMap,D.displacementScale=E.displacementScale,D.displacementBias=E.displacementBias,D.wireframeLinewidth=E.wireframeLinewidth,D.linewidth=E.linewidth,L.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(L.matrixWorld),D.nearDistance=N,D.farDistance=B),D}function b(v,y,E,L,N){if(v.visible===!1)return;if(v.layers.test(y.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&N===Vr)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,v.matrixWorld);const D=e.update(v),w=v.material;if(Array.isArray(w)){const M=D.groups;for(let I=0,O=M.length;I<O;I++){const F=M[I],U=w[F.materialIndex];if(U&&U.visible){const te=g(v,D,U,L,E.near,E.far,N);o.renderBufferDirect(E,null,D,te,v,F)}}}else if(w.visible){const M=g(v,D,w,L,E.near,E.far,N);o.renderBufferDirect(E,null,D,M,v,null)}}const H=v.children;for(let D=0,w=H.length;D<w;D++)b(H[D],y,E,L,N)}}function W0(o,e,t){const n=t.isWebGL2;function i(){let A=!1;const J=new qe;let Z=null;const xe=new qe(0,0,0,0);return{setMask:function(fe){Z!==fe&&!A&&(o.colorMask(fe,fe,fe,fe),Z=fe)},setLocked:function(fe){A=fe},setClear:function(fe,Se,ae,ye,Ne){Ne===!0&&(fe*=ye,Se*=ye,ae*=ye),J.set(fe,Se,ae,ye),xe.equals(J)===!1&&(o.clearColor(fe,Se,ae,ye),xe.copy(J))},reset:function(){A=!1,Z=null,xe.set(-1,0,0,0)}}}function r(){let A=!1,J=null,Z=null,xe=null;return{setTest:function(fe){fe?ne(2929):he(2929)},setMask:function(fe){J!==fe&&!A&&(o.depthMask(fe),J=fe)},setFunc:function(fe){if(Z!==fe){if(fe)switch(fe){case Gf:o.depthFunc(512);break;case Wf:o.depthFunc(519);break;case Xf:o.depthFunc(513);break;case ta:o.depthFunc(515);break;case jf:o.depthFunc(514);break;case qf:o.depthFunc(518);break;case Yf:o.depthFunc(516);break;case $f:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);Z=fe}},setLocked:function(fe){A=fe},setClear:function(fe){xe!==fe&&(o.clearDepth(fe),xe=fe)},reset:function(){A=!1,J=null,Z=null,xe=null}}}function s(){let A=!1,J=null,Z=null,xe=null,fe=null,Se=null,ae=null,ye=null,Ne=null;return{setTest:function(Xe){A||(Xe?ne(2960):he(2960))},setMask:function(Xe){J!==Xe&&!A&&(o.stencilMask(Xe),J=Xe)},setFunc:function(Xe,sn,on){(Z!==Xe||xe!==sn||fe!==on)&&(o.stencilFunc(Xe,sn,on),Z=Xe,xe=sn,fe=on)},setOp:function(Xe,sn,on){(Se!==Xe||ae!==sn||ye!==on)&&(o.stencilOp(Xe,sn,on),Se=Xe,ae=sn,ye=on)},setLocked:function(Xe){A=Xe},setClear:function(Xe){Ne!==Xe&&(o.clearStencil(Xe),Ne=Xe)},reset:function(){A=!1,J=null,Z=null,xe=null,fe=null,Se=null,ae=null,ye=null,Ne=null}}}const a=new i,l=new r,c=new s;let h={},u={},d=null,f=!1,m=null,_=null,x=null,p=null,g=null,b=null,v=null,y=!1,E=null,L=null,N=null,B=null,H=null;const D=o.getParameter(35661);let w=!1,M=0;const I=o.getParameter(7938);I.indexOf("WebGL")!==-1?(M=parseFloat(/^WebGL (\d)/.exec(I)[1]),w=M>=1):I.indexOf("OpenGL ES")!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),w=M>=2);let O=null,F={};const U=o.getParameter(3088),te=o.getParameter(2978),re=new qe().fromArray(U),G=new qe().fromArray(te);function W(A,J,Z){const xe=new Uint8Array(4),fe=o.createTexture();o.bindTexture(A,fe),o.texParameteri(A,10241,9728),o.texParameteri(A,10240,9728);for(let Se=0;Se<Z;Se++)o.texImage2D(J+Se,0,6408,1,1,0,6408,5121,xe);return fe}const ce={};ce[3553]=W(3553,3553,1),ce[34067]=W(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ne(2929),l.setFunc(ta),Fe(!1),X(mc),ne(2884),pe(yn);function ne(A){h[A]!==!0&&(o.enable(A),h[A]=!0)}function he(A){h[A]!==!1&&(o.disable(A),h[A]=!1)}function Re(A,J){return u[A]!==J?(o.bindFramebuffer(A,J),u[A]=J,n&&(A===36009&&(u[36160]=J),A===36160&&(u[36009]=J)),!0):!1}function $(A){return d!==A?(o.useProgram(A),d=A,!0):!1}const Ae={[Vi]:32774,[Df]:32778,[If]:32779};if(n)Ae[yc]=32775,Ae[bc]=32776;else{const A=e.get("EXT_blend_minmax");A!==null&&(Ae[yc]=A.MIN_EXT,Ae[bc]=A.MAX_EXT)}const ve={[Ff]:0,[Nf]:1,[Of]:768,[Mc]:770,[Vf]:776,[zf]:774,[Uf]:772,[Bf]:769,[wc]:771,[Hf]:775,[kf]:773};function pe(A,J,Z,xe,fe,Se,ae,ye){if(A===yn){f===!0&&(he(3042),f=!1);return}if(f===!1&&(ne(3042),f=!0),A!==Pf){if(A!==m||ye!==y){if((_!==Vi||g!==Vi)&&(o.blendEquation(32774),_=Vi,g=Vi),ye)switch(A){case Gr:o.blendFuncSeparate(1,771,1,771);break;case ea:o.blendFunc(1,1);break;case xc:o.blendFuncSeparate(0,0,769,771);break;case vc:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Gr:o.blendFuncSeparate(770,771,1,771);break;case ea:o.blendFunc(770,1);break;case xc:o.blendFunc(0,769);break;case vc:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}x=null,p=null,b=null,v=null,m=A,y=ye}return}fe=fe||J,Se=Se||Z,ae=ae||xe,(J!==_||fe!==g)&&(o.blendEquationSeparate(Ae[J],Ae[fe]),_=J,g=fe),(Z!==x||xe!==p||Se!==b||ae!==v)&&(o.blendFuncSeparate(ve[Z],ve[xe],ve[Se],ve[ae]),x=Z,p=xe,b=Se,v=ae),m=A,y=null}function ge(A,J){A.side===mi?he(2884):ne(2884);let Z=A.side===ut;J&&(Z=!Z),Fe(Z),A.blending===Gr&&A.transparent===!1?pe(yn):pe(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),a.setMask(A.colorWrite);const xe=A.stencilWrite;c.setTest(xe),xe&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),ie(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?ne(32926):he(32926)}function Fe(A){E!==A&&(A?o.frontFace(2304):o.frontFace(2305),E=A)}function X(A){A!==Cf?(ne(2884),A!==L&&(A===mc?o.cullFace(1029):A===Lf?o.cullFace(1028):o.cullFace(1032))):he(2884),L=A}function ee(A){A!==N&&(w&&o.lineWidth(A),N=A)}function ie(A,J,Z){A?(ne(32823),(B!==J||H!==Z)&&(o.polygonOffset(J,Z),B=J,H=Z)):he(32823)}function de(A){A?ne(3089):he(3089)}function se(A){A===void 0&&(A=33984+D-1),O!==A&&(o.activeTexture(A),O=A)}function Me(A,J){O===null&&se();let Z=F[O];Z===void 0&&(Z={type:void 0,texture:void 0},F[O]=Z),(Z.type!==A||Z.texture!==J)&&(o.bindTexture(A,J||ce[A]),Z.type=A,Z.texture=J)}function we(){const A=F[O];A!==void 0&&A.type!==void 0&&(o.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function Le(){try{o.compressedTexImage2D.apply(o,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function We(){try{o.texSubImage2D.apply(o,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function R(){try{o.texSubImage3D.apply(o,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function S(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Y(){try{o.texStorage2D.apply(o,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Q(){try{o.texStorage3D.apply(o,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function oe(){try{o.texImage2D.apply(o,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function K(){try{o.texImage3D.apply(o,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function be(A){re.equals(A)===!1&&(o.scissor(A.x,A.y,A.z,A.w),re.copy(A))}function _e(A){G.equals(A)===!1&&(o.viewport(A.x,A.y,A.z,A.w),G.copy(A))}function P(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},O=null,F={},u={},d=null,f=!1,m=null,_=null,x=null,p=null,g=null,b=null,v=null,y=!1,E=null,L=null,N=null,B=null,H=null,re.set(0,0,o.canvas.width,o.canvas.height),G.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ne,disable:he,bindFramebuffer:Re,useProgram:$,setBlending:pe,setMaterial:ge,setFlipSided:Fe,setCullFace:X,setLineWidth:ee,setPolygonOffset:ie,setScissorTest:de,activeTexture:se,bindTexture:Me,unbindTexture:we,compressedTexImage2D:Le,texImage2D:oe,texImage3D:K,texStorage2D:Y,texStorage3D:Q,texSubImage2D:We,texSubImage3D:R,compressedTexSubImage2D:S,scissor:be,viewport:_e,reset:P}}function X0(o,e,t,n,i,r,s){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):void 0,m=new WeakMap;let _,x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,S){return x?new OffscreenCanvas(R,S):Ys("canvas")}function g(R,S,Y,Q){let oe=1;if((R.width>Q||R.height>Q)&&(oe=Q/Math.max(R.width,R.height)),oe<1||S===!0)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap){const K=S?Hc:Math.floor,be=K(oe*R.width),_e=K(oe*R.height);_===void 0&&(_=p(be,_e));const P=Y?p(be,_e):_;return P.width=be,P.height=_e,P.getContext("2d").drawImage(R,0,0,be,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+be+"x"+_e+")."),P}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function b(R){return ua(R.width)&&ua(R.height)}function v(R){return a?!1:R.wrapS!==Pt||R.wrapT!==Pt||R.minFilter!==it&&R.minFilter!==rt}function y(R,S){return R.generateMipmaps&&S&&R.minFilter!==it&&R.minFilter!==rt}function E(R){o.generateMipmap(R)}function L(R,S,Y,Q){if(a===!1)return S;if(R!==null){if(o[R]!==void 0)return o[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let oe=S;return S===6403&&(Y===5126&&(oe=33326),Y===5131&&(oe=33325),Y===5121&&(oe=33321)),S===6407&&(Y===5126&&(oe=34837),Y===5131&&(oe=34843),Y===5121&&(oe=32849)),S===6408&&(Y===5126&&(oe=34836),Y===5131&&(oe=34842),Y===5121&&(oe=Q===wn?35907:32856)),(oe===33325||oe===33326||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function N(R,S,Y){return y(R,Y)===!0||R.isFramebufferTexture&&R.minFilter!==it&&R.minFilter!==rt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function B(R){return R===it||R===sa||R===oa?9728:9729}function H(R){const S=R.target;S.removeEventListener("dispose",H),w(S),S.isVideoTexture&&m.delete(S),s.memory.textures--}function D(R){const S=R.target;S.removeEventListener("dispose",D),M(S)}function w(R){const S=n.get(R);S.__webglInit!==void 0&&(o.deleteTexture(S.__webglTexture),n.remove(R))}function M(R){const S=R.texture,Y=n.get(R),Q=n.get(S);if(!!R){if(Q.__webglTexture!==void 0&&(o.deleteTexture(Q.__webglTexture),s.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)o.deleteFramebuffer(Y.__webglFramebuffer[oe]),Y.__webglDepthbuffer&&o.deleteRenderbuffer(Y.__webglDepthbuffer[oe]);else o.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&o.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer&&o.deleteRenderbuffer(Y.__webglColorRenderbuffer),Y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(Y.__webglDepthRenderbuffer);if(R.isWebGLMultipleRenderTargets)for(let oe=0,K=S.length;oe<K;oe++){const be=n.get(S[oe]);be.__webglTexture&&(o.deleteTexture(be.__webglTexture),s.memory.textures--),n.remove(S[oe])}n.remove(S),n.remove(R)}}let I=0;function O(){I=0}function F(){const R=I;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),I+=1,R}function U(R,S){const Y=n.get(R);if(R.isVideoTexture&&se(R),R.version>0&&Y.__version!==R.version){const Q=R.image;if(Q===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(Y,R,S);return}}t.activeTexture(33984+S),t.bindTexture(3553,Y.__webglTexture)}function te(R,S){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){Re(Y,R,S);return}t.activeTexture(33984+S),t.bindTexture(35866,Y.__webglTexture)}function re(R,S){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){Re(Y,R,S);return}t.activeTexture(33984+S),t.bindTexture(32879,Y.__webglTexture)}function G(R,S){const Y=n.get(R);if(R.version>0&&Y.__version!==R.version){$(Y,R,S);return}t.activeTexture(33984+S),t.bindTexture(34067,Y.__webglTexture)}const W={[Gi]:10497,[Pt]:33071,[Gs]:33648},ce={[it]:9728,[sa]:9984,[oa]:9986,[rt]:9729,[Tc]:9985,[Wi]:9987};function ne(R,S,Y){if(Y?(o.texParameteri(R,10242,W[S.wrapS]),o.texParameteri(R,10243,W[S.wrapT]),(R===32879||R===35866)&&o.texParameteri(R,32882,W[S.wrapR]),o.texParameteri(R,10240,ce[S.magFilter]),o.texParameteri(R,10241,ce[S.minFilter])):(o.texParameteri(R,10242,33071),o.texParameteri(R,10243,33071),(R===32879||R===35866)&&o.texParameteri(R,32882,33071),(S.wrapS!==Pt||S.wrapT!==Pt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(R,10240,B(S.magFilter)),o.texParameteri(R,10241,B(S.minFilter)),S.minFilter!==it&&S.minFilter!==rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(S.type===Mn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===gi&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(o.texParameterf(R,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function he(R,S){R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",H),R.__webglTexture=o.createTexture(),s.memory.textures++)}function Re(R,S,Y){let Q=3553;S.isDataTexture2DArray&&(Q=35866),S.isDataTexture3D&&(Q=32879),he(R,S),t.activeTexture(33984+Y),t.bindTexture(Q,R.__webglTexture),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const oe=v(S)&&b(S.image)===!1,K=g(S.image,oe,!1,h),be=b(K)||a,_e=r.convert(S.format);let P=r.convert(S.type),A=L(S.internalFormat,_e,P,S.encoding);ne(Q,S,be);let J;const Z=S.mipmaps,xe=a&&S.isVideoTexture!==!0,fe=R.__version===void 0,Se=N(S,K,be);if(S.isDepthTexture)A=6402,a?S.type===Mn?A=36012:S.type===Ws?A=33190:S.type===Xi?A=35056:A=33189:S.type===Mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===_i&&A===6402&&S.type!==jr&&S.type!==Ws&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=jr,P=r.convert(S.type)),S.format===ji&&A===6402&&(A=34041,S.type!==Xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Xi,P=r.convert(S.type))),xe&&fe?t.texStorage2D(3553,1,A,K.width,K.height):t.texImage2D(3553,0,A,K.width,K.height,0,_e,P,null);else if(S.isDataTexture)if(Z.length>0&&be){xe&&fe&&t.texStorage2D(3553,Se,A,Z[0].width,Z[0].height);for(let ae=0,ye=Z.length;ae<ye;ae++)J=Z[ae],xe?t.texSubImage2D(3553,0,0,0,J.width,J.height,_e,P,J.data):t.texImage2D(3553,ae,A,J.width,J.height,0,_e,P,J.data);S.generateMipmaps=!1}else xe?(fe&&t.texStorage2D(3553,Se,A,K.width,K.height),t.texSubImage2D(3553,0,0,0,K.width,K.height,_e,P,K.data)):t.texImage2D(3553,0,A,K.width,K.height,0,_e,P,K.data);else if(S.isCompressedTexture){xe&&fe&&t.texStorage2D(3553,Se,A,Z[0].width,Z[0].height);for(let ae=0,ye=Z.length;ae<ye;ae++)J=Z[ae],S.format!==st&&S.format!==zn?_e!==null?xe?t.compressedTexSubImage2D(3553,ae,0,0,J.width,J.height,_e,J.data):t.compressedTexImage2D(3553,ae,A,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?t.texSubImage2D(3553,ae,0,0,J.width,J.height,_e,P,J.data):t.texImage2D(3553,ae,A,J.width,J.height,0,_e,P,J.data)}else if(S.isDataTexture2DArray)xe?(fe&&t.texStorage3D(35866,Se,A,K.width,K.height,K.depth),t.texSubImage3D(35866,0,0,0,0,K.width,K.height,K.depth,_e,P,K.data)):t.texImage3D(35866,0,A,K.width,K.height,K.depth,0,_e,P,K.data);else if(S.isDataTexture3D)xe?(fe&&t.texStorage3D(32879,Se,A,K.width,K.height,K.depth),t.texSubImage3D(32879,0,0,0,0,K.width,K.height,K.depth,_e,P,K.data)):t.texImage3D(32879,0,A,K.width,K.height,K.depth,0,_e,P,K.data);else if(S.isFramebufferTexture)xe&&fe?t.texStorage2D(3553,Se,A,K.width,K.height):t.texImage2D(3553,0,A,K.width,K.height,0,_e,P,null);else if(Z.length>0&&be){xe&&fe&&t.texStorage2D(3553,Se,A,Z[0].width,Z[0].height);for(let ae=0,ye=Z.length;ae<ye;ae++)J=Z[ae],xe?t.texSubImage2D(3553,ae,0,0,_e,P,J):t.texImage2D(3553,ae,A,_e,P,J);S.generateMipmaps=!1}else xe?(fe&&t.texStorage2D(3553,Se,A,K.width,K.height),t.texSubImage2D(3553,0,0,0,_e,P,K)):t.texImage2D(3553,0,A,_e,P,K);y(S,be)&&E(Q),R.__version=S.version,S.onUpdate&&S.onUpdate(S)}function $(R,S,Y){if(S.image.length!==6)return;he(R,S),t.activeTexture(33984+Y),t.bindTexture(34067,R.__webglTexture),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const Q=S&&(S.isCompressedTexture||S.image[0].isCompressedTexture),oe=S.image[0]&&S.image[0].isDataTexture,K=[];for(let ae=0;ae<6;ae++)!Q&&!oe?K[ae]=g(S.image[ae],!1,!0,c):K[ae]=oe?S.image[ae].image:S.image[ae];const be=K[0],_e=b(be)||a,P=r.convert(S.format),A=r.convert(S.type),J=L(S.internalFormat,P,A,S.encoding),Z=a&&S.isVideoTexture!==!0,xe=R.__version===void 0;let fe=N(S,be,_e);ne(34067,S,_e);let Se;if(Q){Z&&xe&&t.texStorage2D(34067,fe,J,be.width,be.height);for(let ae=0;ae<6;ae++){Se=K[ae].mipmaps;for(let ye=0;ye<Se.length;ye++){const Ne=Se[ye];S.format!==st&&S.format!==zn?P!==null?Z?t.compressedTexSubImage2D(34069+ae,ye,0,0,Ne.width,Ne.height,P,Ne.data):t.compressedTexImage2D(34069+ae,ye,J,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?t.texSubImage2D(34069+ae,ye,0,0,Ne.width,Ne.height,P,A,Ne.data):t.texImage2D(34069+ae,ye,J,Ne.width,Ne.height,0,P,A,Ne.data)}}}else{Se=S.mipmaps,Z&&xe&&(Se.length>0&&fe++,t.texStorage2D(34067,fe,J,K[0].width,K[0].height));for(let ae=0;ae<6;ae++)if(oe){Z?t.texSubImage2D(34069+ae,0,0,0,K[ae].width,K[ae].height,P,A,K[ae].data):t.texImage2D(34069+ae,0,J,K[ae].width,K[ae].height,0,P,A,K[ae].data);for(let ye=0;ye<Se.length;ye++){const Xe=Se[ye].image[ae].image;Z?t.texSubImage2D(34069+ae,ye+1,0,0,Xe.width,Xe.height,P,A,Xe.data):t.texImage2D(34069+ae,ye+1,J,Xe.width,Xe.height,0,P,A,Xe.data)}}else{Z?t.texSubImage2D(34069+ae,0,0,0,P,A,K[ae]):t.texImage2D(34069+ae,0,J,P,A,K[ae]);for(let ye=0;ye<Se.length;ye++){const Ne=Se[ye];Z?t.texSubImage2D(34069+ae,ye+1,0,0,P,A,Ne.image[ae]):t.texImage2D(34069+ae,ye+1,J,P,A,Ne.image[ae])}}}y(S,_e)&&E(34067),R.__version=S.version,S.onUpdate&&S.onUpdate(S)}function Ae(R,S,Y,Q,oe){const K=r.convert(Y.format),be=r.convert(Y.type),_e=L(Y.internalFormat,K,be,Y.encoding);n.get(S).__hasExternalTextures||(oe===32879||oe===35866?t.texImage3D(oe,0,_e,S.width,S.height,S.depth,0,K,be,null):t.texImage2D(oe,0,_e,S.width,S.height,0,K,be,null)),t.bindFramebuffer(36160,R),S.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,Q,oe,n.get(Y).__webglTexture,0,de(S)):o.framebufferTexture2D(36160,Q,oe,n.get(Y).__webglTexture,0),t.bindFramebuffer(36160,null)}function ve(R,S,Y){if(o.bindRenderbuffer(36161,R),S.depthBuffer&&!S.stencilBuffer){let Q=33189;if(Y||S.useRenderToTexture){const oe=S.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Mn?Q=36012:oe.type===Ws&&(Q=33190));const K=de(S);S.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,K,Q,S.width,S.height):o.renderbufferStorageMultisample(36161,K,Q,S.width,S.height)}else o.renderbufferStorage(36161,Q,S.width,S.height);o.framebufferRenderbuffer(36160,36096,36161,R)}else if(S.depthBuffer&&S.stencilBuffer){const Q=de(S);Y&&S.useRenderbuffer?o.renderbufferStorageMultisample(36161,Q,35056,S.width,S.height):S.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,Q,35056,S.width,S.height):o.renderbufferStorage(36161,34041,S.width,S.height),o.framebufferRenderbuffer(36160,33306,36161,R)}else{const Q=S.isWebGLMultipleRenderTargets===!0?S.texture[0]:S.texture,oe=r.convert(Q.format),K=r.convert(Q.type),be=L(Q.internalFormat,oe,K,Q.encoding),_e=de(S);Y&&S.useRenderbuffer?o.renderbufferStorageMultisample(36161,_e,be,S.width,S.height):S.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,_e,be,S.width,S.height):o.renderbufferStorage(36161,be,S.width,S.height)}o.bindRenderbuffer(36161,null)}function pe(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),U(S.depthTexture,0);const Q=n.get(S.depthTexture).__webglTexture,oe=de(S);if(S.depthTexture.format===_i)S.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,oe):o.framebufferTexture2D(36160,36096,3553,Q,0);else if(S.depthTexture.format===ji)S.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,oe):o.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function ge(R){const S=n.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");pe(S.__webglFramebuffer,R)}else if(Y){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]=o.createRenderbuffer(),ve(S.__webglDepthbuffer[Q],R,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),ve(S.__webglDepthbuffer,R,!1);t.bindFramebuffer(36160,null)}function Fe(R,S,Y){const Q=n.get(R);S!==void 0&&Ae(Q.__webglFramebuffer,R,R.texture,36064,3553),Y!==void 0&&ge(R)}function X(R){const S=R.texture,Y=n.get(R),Q=n.get(S);R.addEventListener("dispose",D),R.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=o.createTexture()),Q.__version=S.version,s.memory.textures++);const oe=R.isWebGLCubeRenderTarget===!0,K=R.isWebGLMultipleRenderTargets===!0,be=S.isDataTexture3D||S.isDataTexture2DArray,_e=b(R)||a;if(a&&S.format===zn&&(S.type===Mn||S.type===gi)&&(S.format=st,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),oe){Y.__webglFramebuffer=[];for(let P=0;P<6;P++)Y.__webglFramebuffer[P]=o.createFramebuffer()}else if(Y.__webglFramebuffer=o.createFramebuffer(),K)if(i.drawBuffers){const P=R.texture;for(let A=0,J=P.length;A<J;A++){const Z=n.get(P[A]);Z.__webglTexture===void 0&&(Z.__webglTexture=o.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(R.useRenderbuffer)if(a){Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=o.createRenderbuffer(),o.bindRenderbuffer(36161,Y.__webglColorRenderbuffer);const P=r.convert(S.format),A=r.convert(S.type),J=L(S.internalFormat,P,A,S.encoding),Z=de(R);o.renderbufferStorageMultisample(36161,Z,J,R.width,R.height),t.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064,36161,Y.__webglColorRenderbuffer),o.bindRenderbuffer(36161,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),ve(Y.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(oe){t.bindTexture(34067,Q.__webglTexture),ne(34067,S,_e);for(let P=0;P<6;P++)Ae(Y.__webglFramebuffer[P],R,S,36064,34069+P);y(S,_e)&&E(34067),t.unbindTexture()}else if(K){const P=R.texture;for(let A=0,J=P.length;A<J;A++){const Z=P[A],xe=n.get(Z);t.bindTexture(3553,xe.__webglTexture),ne(3553,Z,_e),Ae(Y.__webglFramebuffer,R,Z,36064+A,3553),y(Z,_e)&&E(3553)}t.unbindTexture()}else{let P=3553;be&&(a?P=S.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(P,Q.__webglTexture),ne(P,S,_e),Ae(Y.__webglFramebuffer,R,S,36064,P),y(S,_e)&&E(P),t.unbindTexture()}R.depthBuffer&&ge(R)}function ee(R){const S=b(R)||a,Y=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let Q=0,oe=Y.length;Q<oe;Q++){const K=Y[Q];if(y(K,S)){const be=R.isWebGLCubeRenderTarget?34067:3553,_e=n.get(K).__webglTexture;t.bindTexture(be,_e),E(be),t.unbindTexture()}}}function ie(R){if(R.useRenderbuffer)if(a){const S=R.width,Y=R.height;let Q=16384;const oe=[36064],K=R.stencilBuffer?33306:36096;R.depthBuffer&&oe.push(K),R.ignoreDepthForMultisampleCopy||(R.depthBuffer&&(Q|=256),R.stencilBuffer&&(Q|=1024));const be=n.get(R);t.bindFramebuffer(36008,be.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,be.__webglFramebuffer),R.ignoreDepthForMultisampleCopy&&(o.invalidateFramebuffer(36008,[K]),o.invalidateFramebuffer(36009,[K])),o.blitFramebuffer(0,0,S,Y,0,0,S,Y,Q,9728),o.invalidateFramebuffer(36008,oe),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,be.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function de(R){return a&&(R.useRenderbuffer||R.useRenderToTexture)?Math.min(u,R.samples):0}function se(R){const S=s.render.frame;m.get(R)!==S&&(m.set(R,S),R.update())}let Me=!1,we=!1;function Le(R,S){R&&R.isWebGLRenderTarget&&(Me===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Me=!0),R=R.texture),U(R,S)}function We(R,S){R&&R.isWebGLCubeRenderTarget&&(we===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),we=!0),R=R.texture),G(R,S)}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=U,this.setTexture2DArray=te,this.setTexture3D=re,this.setTextureCube=G,this.rebindTextures=Fe,this.setupRenderTarget=X,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Ae,this.safeSetTexture2D=Le,this.safeSetTextureCube=We}function j0(o,e,t){const n=t.isWebGL2;function i(r){let s;if(r===bn)return 5121;if(r===op)return 32819;if(r===ap)return 32820;if(r===lp)return 33635;if(r===ip)return 5120;if(r===rp)return 5122;if(r===jr)return 5123;if(r===sp)return 5124;if(r===Ws)return 5125;if(r===Mn)return 5126;if(r===gi)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===cp)return 6406;if(r===zn)return 6407;if(r===st)return 6408;if(r===hp)return 6409;if(r===up)return 6410;if(r===_i)return 6402;if(r===ji)return 34041;if(r===dp)return 6403;if(r===fp)return 36244;if(r===pp)return 33319;if(r===mp)return 33320;if(r===gp)return 36248;if(r===_p)return 36249;if(r===Ec||r===Ac||r===Cc||r===Lc)if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Ec)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ac)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Rc||r===Pc||r===Dc||r===Ic)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Rc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Dc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ic)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xp)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if((r===Fc||r===Nc)&&(s=e.get("WEBGL_compressed_texture_etc"),s!==null)){if(r===Fc)return s.COMPRESSED_RGB8_ETC2;if(r===Nc)return s.COMPRESSED_RGBA8_ETC2_EAC}if(r===vp||r===yp||r===bp||r===Mp||r===wp||r===Sp||r===Tp||r===Ep||r===Ap||r===Cp||r===Lp||r===Rp||r===Pp||r===Dp||r===Fp||r===Np||r===Op||r===Bp||r===Up||r===kp||r===zp||r===Hp||r===Vp||r===Gp||r===Wp||r===Xp||r===jp||r===qp)return s=e.get("WEBGL_compressed_texture_astc"),s!==null?r:null;if(r===Ip)return s=e.get("EXT_texture_compression_bptc"),s!==null?r:null;if(r===Xi)return n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class zh extends Lt{constructor(e=[]){super();this.cameras=e}}zh.prototype.isArrayCamera=!0;class Jn extends He{constructor(){super();this.type="Group"}}Jn.prototype.isGroup=!0;const q0={type:"move"};class qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(q0))),c&&e.hand){s=!0;for(const _ of e.hand.values()){const x=t.getJointPose(_,n);if(c.joints[_.jointName]===void 0){const g=new Jn;g.matrixAutoUpdate=!1,g.visible=!1,c.joints[_.jointName]=g,c.add(g)}const p=c.joints[_.jointName];x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=x.radius),p.visible=x!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}}class Ya extends at{constructor(e,t,n,i,r,s,a,l,c,h){if(h=h!==void 0?h:_i,h!==_i&&h!==ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_i&&(n=jr),n===void 0&&h===ji&&(n=Xi);super(null,i,r,s,a,l,h,n,c);this.image={width:e,height:t},this.magFilter=a!==void 0?a:it,this.minFilter=l!==void 0?l:it,this.flipY=!1,this.generateMipmaps=!1}}Ya.prototype.isDepthTexture=!0;class Y0 extends Hn{constructor(e,t){super();const n=this;let i=null,r=1,s=null,a="local-floor";const l=e.extensions.has("WEBGL_multisampled_render_to_texture");let c=null,h=null,u=null,d=null,f=!1,m=null;const _=t.getContextAttributes();let x=null,p=null;const g=[],b=new Map,v=new Lt;v.layers.enable(1),v.viewport=new qe;const y=new Lt;y.layers.enable(2),y.viewport=new qe;const E=[v,y],L=new zh;L.layers.enable(1),L.layers.enable(2);let N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let W=g[G];return W===void 0&&(W=new qa,g[G]=W),W.getTargetRaySpace()},this.getControllerGrip=function(G){let W=g[G];return W===void 0&&(W=new qa,g[G]=W),W.getGripSpace()},this.getHand=function(G){let W=g[G];return W===void 0&&(W=new qa,g[G]=W),W.getHandSpace()};function H(G){const W=b.get(G.inputSource);W&&W.dispatchEvent({type:G.type,data:G.inputSource})}function D(){b.forEach(function(G,W){G.disconnect(W)}),b.clear(),N=null,B=null,e.setRenderTarget(x),d=null,u=null,h=null,i=null,p=null,re.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return s},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",D),i.addEventListener("inputsourceschange",w),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,W),i.updateRenderState({baseLayer:d}),p=new vt(d.framebufferWidth,d.framebufferHeight,{format:st,type:bn,encoding:e.outputEncoding})}else{f=_.antialias;let W=null,ce=null,ne=null;_.depth&&(ne=_.stencil?35056:33190,W=_.stencil?ji:_i,ce=_.stencil?Xi:jr);const he={colorFormat:_.alpha||f?32856:32849,depthFormat:ne,scaleFactor:r};h=new XRWebGLBinding(i,t),u=h.createProjectionLayer(he),i.updateRenderState({layers:[u]}),f?p=new fa(u.textureWidth,u.textureHeight,{format:st,type:bn,depthTexture:new Ya(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:_.stencil,ignoreDepth:u.ignoreDepthValues,useRenderToTexture:l,encoding:e.outputEncoding}):p=new vt(u.textureWidth,u.textureHeight,{format:_.alpha?st:zn,type:bn,depthTexture:new Ya(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:_.stencil,ignoreDepth:u.ignoreDepthValues,encoding:e.outputEncoding})}this.setFoveation(1),s=await i.requestReferenceSpace(a),re.setContext(i),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function w(G){const W=i.inputSources;for(let ce=0;ce<g.length;ce++)b.set(W[ce],g[ce]);for(let ce=0;ce<G.removed.length;ce++){const ne=G.removed[ce],he=b.get(ne);he&&(he.dispatchEvent({type:"disconnected",data:ne}),b.delete(ne))}for(let ce=0;ce<G.added.length;ce++){const ne=G.added[ce],he=b.get(ne);he&&he.dispatchEvent({type:"connected",data:ne})}}const M=new C,I=new C;function O(G,W,ce){M.setFromMatrixPosition(W.matrixWorld),I.setFromMatrixPosition(ce.matrixWorld);const ne=M.distanceTo(I),he=W.projectionMatrix.elements,Re=ce.projectionMatrix.elements,$=he[14]/(he[10]-1),Ae=he[14]/(he[10]+1),ve=(he[9]+1)/he[5],pe=(he[9]-1)/he[5],ge=(he[8]-1)/he[0],Fe=(Re[8]+1)/Re[0],X=$*ge,ee=$*Fe,ie=ne/(-ge+Fe),de=ie*-ge;W.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(de),G.translateZ(ie),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const se=$+ie,Me=Ae+ie,we=X-de,Le=ee+(ne-de),We=ve*Ae/Me*se,R=pe*Ae/Me*se;G.projectionMatrix.makePerspective(we,Le,We,R,se,Me)}function F(G,W){W===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(W.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;L.near=y.near=v.near=G.near,L.far=y.far=v.far=G.far,(N!==L.near||B!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,B=L.far);const W=G.parent,ce=L.cameras;F(L,W);for(let he=0;he<ce.length;he++)F(ce[he],W);L.matrixWorld.decompose(L.position,L.quaternion,L.scale),G.position.copy(L.position),G.quaternion.copy(L.quaternion),G.scale.copy(L.scale),G.matrix.copy(L.matrix),G.matrixWorld.copy(L.matrixWorld);const ne=G.children;for(let he=0,Re=ne.length;he<Re;he++)ne[he].updateMatrixWorld(!0);ce.length===2?O(L,v,y):L.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return L},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(G){u!==null&&(u.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)};let U=null;function te(G,W){if(c=W.getViewerPose(s),m=W,c!==null){const ne=c.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let he=!1;ne.length!==L.cameras.length&&(L.cameras.length=0,he=!0);for(let Re=0;Re<ne.length;Re++){const $=ne[Re];let Ae=null;if(d!==null)Ae=d.getViewport($);else{const pe=h.getViewSubImage(u,$);Ae=pe.viewport,Re===0&&(e.setRenderTargetTextures(p,pe.colorTexture,u.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(p))}const ve=E[Re];ve.matrix.fromArray($.transform.matrix),ve.projectionMatrix.fromArray($.projectionMatrix),ve.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),Re===0&&L.matrix.copy(ve.matrix),he===!0&&L.cameras.push(ve)}}const ce=i.inputSources;for(let ne=0;ne<g.length;ne++){const he=g[ne],Re=ce[ne];he.update(Re,W,s)}U&&U(G,W),m=null}const re=new rh;re.setAnimationLoop(te),this.setAnimationLoop=function(G){U=G},this.dispose=function(){}}}function $0(o){function e(p,g){p.fogColor.value.copy(g.color),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function t(p,g,b,v,y){g.isMeshBasicMaterial?n(p,g):g.isMeshLambertMaterial?(n(p,g),l(p,g)):g.isMeshToonMaterial?(n(p,g),h(p,g)):g.isMeshPhongMaterial?(n(p,g),c(p,g)):g.isMeshStandardMaterial?(n(p,g),g.isMeshPhysicalMaterial?d(p,g,y):u(p,g)):g.isMeshMatcapMaterial?(n(p,g),f(p,g)):g.isMeshDepthMaterial?(n(p,g),m(p,g)):g.isMeshDistanceMaterial?(n(p,g),_(p,g)):g.isMeshNormalMaterial?(n(p,g),x(p,g)):g.isLineBasicMaterial?(i(p,g),g.isLineDashedMaterial&&r(p,g)):g.isPointsMaterial?s(p,g,b,v):g.isSpriteMaterial?a(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function n(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.specularMap&&(p.specularMap.value=g.specularMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const b=o.get(g).envMap;b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity);let v;g.map?v=g.map:g.specularMap?v=g.specularMap:g.displacementMap?v=g.displacementMap:g.normalMap?v=g.normalMap:g.bumpMap?v=g.bumpMap:g.roughnessMap?v=g.roughnessMap:g.metalnessMap?v=g.metalnessMap:g.alphaMap?v=g.alphaMap:g.emissiveMap?v=g.emissiveMap:g.clearcoatMap?v=g.clearcoatMap:g.clearcoatNormalMap?v=g.clearcoatNormalMap:g.clearcoatRoughnessMap?v=g.clearcoatRoughnessMap:g.specularIntensityMap?v=g.specularIntensityMap:g.specularColorMap?v=g.specularColorMap:g.transmissionMap?v=g.transmissionMap:g.thicknessMap?v=g.thicknessMap:g.sheenColorMap?v=g.sheenColorMap:g.sheenRoughnessMap&&(v=g.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let y;g.aoMap?y=g.aoMap:g.lightMap&&(y=g.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function i(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity}function r(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function s(p,g,b,v){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*b,p.scale.value=v*.5,g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let y;g.map?y=g.map:g.alphaMap&&(y=g.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map),g.alphaMap&&(p.alphaMap.value=g.alphaMap),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let b;g.map?b=g.map:g.alphaMap&&(b=g.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function l(p,g){g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap)}function c(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===ut&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===ut&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===ut&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===ut&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function u(p,g){p.roughness.value=g.roughness,p.metalness.value=g.metalness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===ut&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===ut&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),o.get(g).envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,b){u(p,g),p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap)),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),p.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===ut&&p.clearcoatNormalScale.value.negate())),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap)}function f(p,g){g.matcap&&(p.matcap.value=g.matcap),g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===ut&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===ut&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function m(p,g){g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}function _(p,g){g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),p.referencePosition.value.copy(g.referencePosition),p.nearDistance.value=g.nearDistance,p.farDistance.value=g.farDistance}function x(p,g){g.bumpMap&&(p.bumpMap.value=g.bumpMap,p.bumpScale.value=g.bumpScale,g.side===ut&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,p.normalScale.value.copy(g.normalScale),g.side===ut&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Z0(){const o=Ys("canvas");return o.style.display="block",o}function je(o={}){const e=o.canvas!==void 0?o.canvas:Z0(),t=o.context!==void 0?o.context:null,n=o.alpha!==void 0?o.alpha:!1,i=o.depth!==void 0?o.depth:!0,r=o.stencil!==void 0?o.stencil:!0,s=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,l=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,c=o.powerPreference!==void 0?o.powerPreference:"default",h=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u=null,d=null;const f=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=en,this.physicallyCorrectLights=!1,this.toneMapping=kn,this.toneMappingExposure=1;const _=this;let x=!1,p=0,g=0,b=null,v=-1,y=null;const E=new qe,L=new qe;let N=null,B=e.width,H=e.height,D=1,w=null,M=null;const I=new qe(0,0,B,H),O=new qe(0,0,B,H);let F=!1;const U=[],te=new mo;let re=!1,G=!1,W=null;const ce=new me,ne=new C,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Re(){return b===null?D:1}let $=t;function Ae(T,k){for(let V=0;V<T.length;V++){const z=T[V],q=e.getContext(z,k);if(q!==null)return q}return null}try{const T={alpha:n,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qo}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",fe,!1),$===null){const k=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&k.shift(),$=Ae(k,T),$===null)throw Ae(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ve,pe,ge,Fe,X,ee,ie,de,se,Me,we,Le,We,R,S,Y,Q,oe,K,be,_e,P,A;function J(){ve=new gx($),pe=new cx($,ve,o),ve.init(pe),P=new j0($,ve,pe),ge=new W0($,ve,pe),U[0]=1029,Fe=new vx($),X=new I0,ee=new X0($,ve,ge,X,pe,P,Fe),ie=new ux(_),de=new mx(_),se=new Im($,pe),A=new ax($,ve,se,pe),Me=new _x($,se,Fe,A),we=new wx($,Me,se,Fe),K=new Mx($,pe,ee),Y=new hx(X),Le=new D0(_,ie,de,ve,pe,A,Y),We=new $0(X),R=new N0,S=new H0(ve,pe),oe=new ox(_,ie,ge,we,a),Q=new kh(_,we,pe),be=new lx($,ve,Fe,pe),_e=new xx($,ve,Fe,pe),Fe.programs=Le.programs,_.capabilities=pe,_.extensions=ve,_.properties=X,_.renderLists=R,_.shadowMap=Q,_.state=ge,_.info=Fe}J();const Z=new Y0(_,$);this.xr=Z,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const T=ve.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ve.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(T){T!==void 0&&(D=T,this.setSize(B,H,!1))},this.getSize=function(T){return T.set(B,H)},this.setSize=function(T,k,V){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,H=k,e.width=Math.floor(T*D),e.height=Math.floor(k*D),V!==!1&&(e.style.width=T+"px",e.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(B*D,H*D).floor()},this.setDrawingBufferSize=function(T,k,V){B=T,H=k,D=V,e.width=Math.floor(T*V),e.height=Math.floor(k*V),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(I)},this.setViewport=function(T,k,V,z){T.isVector4?I.set(T.x,T.y,T.z,T.w):I.set(T,k,V,z),ge.viewport(E.copy(I).multiplyScalar(D).floor())},this.getScissor=function(T){return T.copy(O)},this.setScissor=function(T,k,V,z){T.isVector4?O.set(T.x,T.y,T.z,T.w):O.set(T,k,V,z),ge.scissor(L.copy(O).multiplyScalar(D).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(T){ge.setScissorTest(F=T)},this.setOpaqueSort=function(T){w=T},this.setTransparentSort=function(T){M=T},this.getClearColor=function(T){return T.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(T,k,V){let z=0;(T===void 0||T)&&(z|=16384),(k===void 0||k)&&(z|=256),(V===void 0||V)&&(z|=1024),$.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",fe,!1),R.dispose(),S.dispose(),X.dispose(),ie.dispose(),de.dispose(),we.dispose(),A.dispose(),Le.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",sn),Z.removeEventListener("sessionend",on),W&&(W.dispose(),W=null),fi.stop()};function xe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=Fe.autoReset,k=Q.enabled,V=Q.autoUpdate,z=Q.needsUpdate,q=Q.type;J(),Fe.autoReset=T,Q.enabled=k,Q.autoUpdate=V,Q.needsUpdate=z,Q.type=q}function Se(T){const k=T.target;k.removeEventListener("dispose",Se),ae(k)}function ae(T){ye(T),X.remove(T)}function ye(T){const k=X.get(T).programs;k!==void 0&&(k.forEach(function(V){Le.releaseProgram(V)}),T.isShaderMaterial&&Le.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,V,z,q,Te){k===null&&(k=he);const Ce=q.isMesh&&q.matrixWorld.determinant()<0,Pe=Mf(T,k,V,z,q);ge.setMaterial(z,Ce);let Ee=V.index;const ke=V.attributes.position;if(Ee===null){if(ke===void 0||ke.count===0)return}else if(Ee.count===0)return;let De=1;z.wireframe===!0&&(Ee=Me.getWireframeAttribute(V),De=2),A.setup(q,z,Pe,V,Ee);let Ue,nt=be;Ee!==null&&(Ue=se.get(Ee),nt=_e,nt.setIndex(Ue));const pi=Ee!==null?Ee.count:ke.count,Ui=V.drawRange.start*De,ze=V.drawRange.count*De,an=Te!==null?Te.start*De:0,ht=Te!==null?Te.count*De:1/0,ln=Math.max(Ui,an),zs=Math.min(pi,Ui+ze,an+ht)-1,cn=Math.max(0,zs-ln+1);if(cn!==0){if(q.isMesh)z.wireframe===!0?(ge.setLineWidth(z.wireframeLinewidth*Re()),nt.setMode(1)):nt.setMode(4);else if(q.isLine){let vn=z.linewidth;vn===void 0&&(vn=1),ge.setLineWidth(vn*Re()),q.isLineSegments?nt.setMode(1):q.isLineLoop?nt.setMode(2):nt.setMode(3)}else q.isPoints?nt.setMode(0):q.isSprite&&nt.setMode(4);if(q.isInstancedMesh)nt.renderInstances(ln,cn,q.count);else if(V.isInstancedBufferGeometry){const vn=Math.min(V.instanceCount,V._maxInstanceCount);nt.renderInstances(ln,cn,vn)}else nt.render(ln,cn)}},this.compile=function(T,k){d=S.get(T),d.init(),m.push(d),T.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(d.pushLight(V),V.castShadow&&d.pushShadow(V))}),d.setupLights(_.physicallyCorrectLights),T.traverse(function(V){const z=V.material;if(z)if(Array.isArray(z))for(let q=0;q<z.length;q++){const Te=z[q];Ko(Te,T,V)}else Ko(z,T,V)}),m.pop(),d=null};let Ne=null;function Xe(T){Ne&&Ne(T)}function sn(){fi.stop()}function on(){fi.start()}const fi=new rh;fi.setAnimationLoop(Xe),typeof window!="undefined"&&fi.setContext(window),this.setAnimationLoop=function(T){Ne=T,Z.setAnimationLoop(T),T===null?fi.stop():fi.start()},Z.addEventListener("sessionstart",sn),Z.addEventListener("sessionend",on),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(k),k=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,k,b),d=S.get(T,m.length),d.init(),m.push(d),ce.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),te.setFromProjectionMatrix(ce),G=this.localClippingEnabled,re=Y.init(this.clippingPlanes,G,k),u=R.get(T,f.length),u.init(),f.push(u),cc(T,k,0,_.sortObjects),u.finish(),_.sortObjects===!0&&u.sort(w,M),re===!0&&Y.beginShadows();const V=d.state.shadowsArray;if(Q.render(V,T,k),re===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset(),oe.render(u,T),d.setupLights(_.physicallyCorrectLights),k.isArrayCamera){const z=k.cameras;for(let q=0,Te=z.length;q<Te;q++){const Ce=z[q];hc(u,T,Ce,Ce.viewport)}}else hc(u,T,k);b!==null&&(ee.updateMultisampleRenderTarget(b),ee.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(_,T,k),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1),A.resetDefaultState(),v=-1,y=null,m.pop(),m.length>0?d=m[m.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function cc(T,k,V,z){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||te.intersectsSprite(T)){z&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ce);const Ce=we.update(T),Pe=T.material;Pe.visible&&u.push(T,Ce,Pe,V,ne.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Fe.render.frame&&(T.skeleton.update(),T.skeleton.frame=Fe.render.frame),!T.frustumCulled||te.intersectsObject(T))){z&&ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ce);const Ce=we.update(T),Pe=T.material;if(Array.isArray(Pe)){const Ee=Ce.groups;for(let ke=0,De=Ee.length;ke<De;ke++){const Ue=Ee[ke],nt=Pe[Ue.materialIndex];nt&&nt.visible&&u.push(T,Ce,nt,V,ne.z,Ue)}}else Pe.visible&&u.push(T,Ce,Pe,V,ne.z,null)}}const Te=T.children;for(let Ce=0,Pe=Te.length;Ce<Pe;Ce++)cc(Te[Ce],k,V,z)}function hc(T,k,V,z){const q=T.opaque,Te=T.transmissive,Ce=T.transparent;d.setupLightsView(V),Te.length>0&&yf(q,k,V),z&&ge.viewport(E.copy(z)),q.length>0&&ks(q,k,V),Te.length>0&&ks(Te,k,V),Ce.length>0&&ks(Ce,k,V)}function yf(T,k,V){if(W===null){const Ce=s===!0&&pe.isWebGL2===!0?fa:vt;W=new Ce(1024,1024,{generateMipmaps:!0,type:P.convert(gi)!==null?gi:bn,minFilter:Wi,magFilter:it,wrapS:Pt,wrapT:Pt,useRenderToTexture:ve.has("WEBGL_multisampled_render_to_texture")})}const z=_.getRenderTarget();_.setRenderTarget(W),_.clear();const q=_.toneMapping;_.toneMapping=kn,ks(T,k,V),_.toneMapping=q,ee.updateMultisampleRenderTarget(W),ee.updateRenderTargetMipmap(W),_.setRenderTarget(z)}function ks(T,k,V){const z=k.isScene===!0?k.overrideMaterial:null;for(let q=0,Te=T.length;q<Te;q++){const Ce=T[q],Pe=Ce.object,Ee=Ce.geometry,ke=z===null?Ce.material:z,De=Ce.group;Pe.layers.test(V.layers)&&bf(Pe,k,V,Ee,ke,De)}}function bf(T,k,V,z,q,Te){T.onBeforeRender(_,k,V,z,q,Te),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(_,k,V,z,T,Te),q.transparent===!0&&q.side===mi?(q.side=ut,q.needsUpdate=!0,_.renderBufferDirect(V,k,z,q,T,Te),q.side=Hi,q.needsUpdate=!0,_.renderBufferDirect(V,k,z,q,T,Te),q.side=mi):_.renderBufferDirect(V,k,z,q,T,Te),T.onAfterRender(_,k,V,z,q,Te)}function Ko(T,k,V){k.isScene!==!0&&(k=he);const z=X.get(T),q=d.state.lights,Te=d.state.shadowsArray,Ce=q.state.version,Pe=Le.getParameters(T,q.state,Te,k,V),Ee=Le.getProgramCacheKey(Pe);let ke=z.programs;z.environment=T.isMeshStandardMaterial?k.environment:null,z.fog=k.fog,z.envMap=(T.isMeshStandardMaterial?de:ie).get(T.envMap||z.environment),ke===void 0&&(T.addEventListener("dispose",Se),ke=new Map,z.programs=ke);let De=ke.get(Ee);if(De!==void 0){if(z.currentProgram===De&&z.lightsStateVersion===Ce)return uc(T,Pe),De}else Pe.uniforms=Le.getUniforms(T),T.onBuild(V,Pe,_),T.onBeforeCompile(Pe,_),De=Le.acquireProgram(Pe,Ee),ke.set(Ee,De),z.uniforms=Pe.uniforms;const Ue=z.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=Y.uniform),uc(T,Pe),z.needsLights=Sf(T),z.lightsStateVersion=Ce,z.needsLights&&(Ue.ambientLightColor.value=q.state.ambient,Ue.lightProbe.value=q.state.probe,Ue.directionalLights.value=q.state.directional,Ue.directionalLightShadows.value=q.state.directionalShadow,Ue.spotLights.value=q.state.spot,Ue.spotLightShadows.value=q.state.spotShadow,Ue.rectAreaLights.value=q.state.rectArea,Ue.ltc_1.value=q.state.rectAreaLTC1,Ue.ltc_2.value=q.state.rectAreaLTC2,Ue.pointLights.value=q.state.point,Ue.pointLightShadows.value=q.state.pointShadow,Ue.hemisphereLights.value=q.state.hemi,Ue.directionalShadowMap.value=q.state.directionalShadowMap,Ue.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ue.spotShadowMap.value=q.state.spotShadowMap,Ue.spotShadowMatrix.value=q.state.spotShadowMatrix,Ue.pointShadowMap.value=q.state.pointShadowMap,Ue.pointShadowMatrix.value=q.state.pointShadowMatrix);const nt=De.getUniforms(),pi=Zn.seqWithValue(nt.seq,Ue);return z.currentProgram=De,z.uniformsList=pi,De}function uc(T,k){const V=X.get(T);V.outputEncoding=k.outputEncoding,V.instancing=k.instancing,V.skinning=k.skinning,V.morphTargets=k.morphTargets,V.morphNormals=k.morphNormals,V.morphTargetsCount=k.morphTargetsCount,V.numClippingPlanes=k.numClippingPlanes,V.numIntersection=k.numClipIntersection,V.vertexAlphas=k.vertexAlphas,V.vertexTangents=k.vertexTangents,V.toneMapping=k.toneMapping}function Mf(T,k,V,z,q){k.isScene!==!0&&(k=he),ee.resetTextureUnits();const Te=k.fog,Ce=z.isMeshStandardMaterial?k.environment:null,Pe=b===null?_.outputEncoding:b.texture.encoding,Ee=(z.isMeshStandardMaterial?de:ie).get(z.envMap||Ce),ke=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,De=!!z.normalMap&&!!V.attributes.tangent,Ue=!!V.morphAttributes.position,nt=!!V.morphAttributes.normal,pi=V.morphAttributes.position?V.morphAttributes.position.length:0,Ui=z.toneMapped?_.toneMapping:kn,ze=X.get(z),an=d.state.lights;if(re===!0&&(G===!0||T!==y)){const Qt=T===y&&z.id===v;Y.setState(z,T,Qt)}let ht=!1;z.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==an.state.version||ze.outputEncoding!==Pe||q.isInstancedMesh&&ze.instancing===!1||!q.isInstancedMesh&&ze.instancing===!0||q.isSkinnedMesh&&ze.skinning===!1||!q.isSkinnedMesh&&ze.skinning===!0||ze.envMap!==Ee||z.fog&&ze.fog!==Te||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Y.numPlanes||ze.numIntersection!==Y.numIntersection)||ze.vertexAlphas!==ke||ze.vertexTangents!==De||ze.morphTargets!==Ue||ze.morphNormals!==nt||ze.toneMapping!==Ui||pe.isWebGL2===!0&&ze.morphTargetsCount!==pi)&&(ht=!0):(ht=!0,ze.__version=z.version);let ln=ze.currentProgram;ht===!0&&(ln=Ko(z,k,q));let zs=!1,cn=!1,vn=!1;const Mt=ln.getUniforms(),Hr=ze.uniforms;if(ge.useProgram(ln.program)&&(zs=!0,cn=!0,vn=!0),z.id!==v&&(v=z.id,cn=!0),zs||y!==T){if(Mt.setValue($,"projectionMatrix",T.projectionMatrix),pe.logarithmicDepthBuffer&&Mt.setValue($,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),y!==T&&(y=T,cn=!0,vn=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Qt=Mt.map.cameraPosition;Qt!==void 0&&Qt.setValue($,ne.setFromMatrixPosition(T.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Mt.setValue($,"isOrthographic",T.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||q.isSkinnedMesh)&&Mt.setValue($,"viewMatrix",T.matrixWorldInverse)}if(q.isSkinnedMesh){Mt.setOptional($,q,"bindMatrix"),Mt.setOptional($,q,"bindMatrixInverse");const Qt=q.skeleton;Qt&&(pe.floatVertexTextures?(Qt.boneTexture===null&&Qt.computeBoneTexture(),Mt.setValue($,"boneTexture",Qt.boneTexture,ee),Mt.setValue($,"boneTextureSize",Qt.boneTextureSize)):Mt.setOptional($,Qt,"boneMatrices"))}return!!V&&(V.morphAttributes.position!==void 0||V.morphAttributes.normal!==void 0)&&K.update(q,V,z,ln),(cn||ze.receiveShadow!==q.receiveShadow)&&(ze.receiveShadow=q.receiveShadow,Mt.setValue($,"receiveShadow",q.receiveShadow)),cn&&(Mt.setValue($,"toneMappingExposure",_.toneMappingExposure),ze.needsLights&&wf(Hr,vn),Te&&z.fog&&We.refreshFogUniforms(Hr,Te),We.refreshMaterialUniforms(Hr,z,D,H,W),Zn.upload($,ze.uniformsList,Hr,ee)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Zn.upload($,ze.uniformsList,Hr,ee),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Mt.setValue($,"center",q.center),Mt.setValue($,"modelViewMatrix",q.modelViewMatrix),Mt.setValue($,"normalMatrix",q.normalMatrix),Mt.setValue($,"modelMatrix",q.matrixWorld),ln}function wf(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Sf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,k,V){X.get(T.texture).__webglTexture=k,X.get(T.depthTexture).__webglTexture=V;const z=X.get(T);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=V===void 0,z.__autoAllocateDepthBuffer||T.useRenderToTexture&&(console.warn("render-to-texture extension was disabled because an external texture was provided"),T.useRenderToTexture=!1,T.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(T,k){const V=X.get(T);V.__webglFramebuffer=k,V.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,V=0){b=T,p=k,g=V;let z=!0;if(T){const Ee=X.get(T);Ee.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(36160,null),z=!1):Ee.__webglFramebuffer===void 0?ee.setupRenderTarget(T):Ee.__hasExternalTextures&&ee.rebindTextures(T,X.get(T.texture).__webglTexture,X.get(T.depthTexture).__webglTexture)}let q=null,Te=!1,Ce=!1;if(T){const Ee=T.texture;(Ee.isDataTexture3D||Ee.isDataTexture2DArray)&&(Ce=!0);const ke=X.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(q=ke[k],Te=!0):T.useRenderbuffer?q=X.get(T).__webglMultisampledFramebuffer:q=ke,E.copy(T.viewport),L.copy(T.scissor),N=T.scissorTest}else E.copy(I).multiplyScalar(D).floor(),L.copy(O).multiplyScalar(D).floor(),N=F;if(ge.bindFramebuffer(36160,q)&&pe.drawBuffers&&z){let Ee=!1;if(T)if(T.isWebGLMultipleRenderTargets){const ke=T.texture;if(U.length!==ke.length||U[0]!==36064){for(let De=0,Ue=ke.length;De<Ue;De++)U[De]=36064+De;U.length=ke.length,Ee=!0}}else(U.length!==1||U[0]!==36064)&&(U[0]=36064,U.length=1,Ee=!0);else(U.length!==1||U[0]!==1029)&&(U[0]=1029,U.length=1,Ee=!0);Ee&&(pe.isWebGL2?$.drawBuffers(U):ve.get("WEBGL_draw_buffers").drawBuffersWEBGL(U))}if(ge.viewport(E),ge.scissor(L),ge.setScissorTest(N),Te){const Ee=X.get(T.texture);$.framebufferTexture2D(36160,36064,34069+k,Ee.__webglTexture,V)}else if(Ce){const Ee=X.get(T.texture),ke=k||0;$.framebufferTextureLayer(36160,36064,Ee.__webglTexture,V||0,ke)}v=-1},this.readRenderTargetPixels=function(T,k,V,z,q,Te,Ce){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=X.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe){ge.bindFramebuffer(36160,Pe);try{const Ee=T.texture,ke=Ee.format,De=Ee.type;if(ke!==st&&P.convert(ke)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=De===gi&&(ve.has("EXT_color_buffer_half_float")||pe.isWebGL2&&ve.has("EXT_color_buffer_float"));if(De!==bn&&P.convert(De)!==$.getParameter(35738)&&!(De===Mn&&(pe.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$.checkFramebufferStatus(36160)===36053?k>=0&&k<=T.width-z&&V>=0&&V<=T.height-q&&$.readPixels(k,V,z,q,P.convert(ke),P.convert(De),Te):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Ee=b!==null?X.get(b).__webglFramebuffer:null;ge.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(T,k,V=0){if(k.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const z=Math.pow(2,-V),q=Math.floor(k.image.width*z),Te=Math.floor(k.image.height*z);ee.setTexture2D(k,0),$.copyTexSubImage2D(3553,V,0,0,T.x,T.y,q,Te),ge.unbindTexture()},this.copyTextureToTexture=function(T,k,V,z=0){const q=k.image.width,Te=k.image.height,Ce=P.convert(V.format),Pe=P.convert(V.type);ee.setTexture2D(V,0),$.pixelStorei(37440,V.flipY),$.pixelStorei(37441,V.premultiplyAlpha),$.pixelStorei(3317,V.unpackAlignment),k.isDataTexture?$.texSubImage2D(3553,z,T.x,T.y,q,Te,Ce,Pe,k.image.data):k.isCompressedTexture?$.compressedTexSubImage2D(3553,z,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,Ce,k.mipmaps[0].data):$.texSubImage2D(3553,z,T.x,T.y,Ce,Pe,k.image),z===0&&V.generateMipmaps&&$.generateMipmap(3553),ge.unbindTexture()},this.copyTextureToTexture3D=function(T,k,V,z,q=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=T.max.x-T.min.x+1,Ce=T.max.y-T.min.y+1,Pe=T.max.z-T.min.z+1,Ee=P.convert(z.format),ke=P.convert(z.type);let De;if(z.isDataTexture3D)ee.setTexture3D(z,0),De=32879;else if(z.isDataTexture2DArray)ee.setTexture2DArray(z,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,z.flipY),$.pixelStorei(37441,z.premultiplyAlpha),$.pixelStorei(3317,z.unpackAlignment);const Ue=$.getParameter(3314),nt=$.getParameter(32878),pi=$.getParameter(3316),Ui=$.getParameter(3315),ze=$.getParameter(32877),an=V.isCompressedTexture?V.mipmaps[0]:V.image;$.pixelStorei(3314,an.width),$.pixelStorei(32878,an.height),$.pixelStorei(3316,T.min.x),$.pixelStorei(3315,T.min.y),$.pixelStorei(32877,T.min.z),V.isDataTexture||V.isDataTexture3D?$.texSubImage3D(De,q,k.x,k.y,k.z,Te,Ce,Pe,Ee,ke,an.data):V.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(De,q,k.x,k.y,k.z,Te,Ce,Pe,Ee,an.data)):$.texSubImage3D(De,q,k.x,k.y,k.z,Te,Ce,Pe,Ee,ke,an),$.pixelStorei(3314,Ue),$.pixelStorei(32878,nt),$.pixelStorei(3316,pi),$.pixelStorei(3315,Ui),$.pixelStorei(32877,ze),q===0&&z.generateMipmaps&&$.generateMipmap(De),ge.unbindTexture()},this.initTexture=function(T){ee.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){p=0,g=0,b=null,ge.reset(),A.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}je.prototype.isWebGLRenderer=!0;class J0 extends je{}J0.prototype.isWebGL1Renderer=!0;class Hh extends He{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Hh.prototype.isScene=!0;class _r{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Gt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}_r.prototype.isInterleavedBuffer=!0;const ot=new C;class xr{constructor(e,t,n,i=!1){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ot.x=this.getX(t),ot.y=this.getY(t),ot.z=this.getZ(t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.x=this.getX(t),ot.y=this.getY(t),ot.z=this.getZ(t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.x=this.getX(t),ot.y=this.getY(t),ot.z=this.getZ(t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Qe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}xr.prototype.isInterleavedBufferAttribute=!0;class Vh extends dt{constructor(e){super();this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}Vh.prototype.isSpriteMaterial=!0;let vr;const os=new C,yr=new C,br=new C,Mr=new j,as=new j,Gh=new me,bo=new C,ls=new C,Mo=new C,Wh=new j,$a=new j,Xh=new j;class K0 extends He{constructor(e){super();if(this.type="Sprite",vr===void 0){vr=new Ge;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _r(t,5);vr.setIndex([0,1,2,0,2,3]),vr.setAttribute("position",new xr(n,3,0,!1)),vr.setAttribute("uv",new xr(n,2,3,!1))}this.geometry=vr,this.material=e!==void 0?e:new Vh,this.center=new j(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yr.setFromMatrixScale(this.matrixWorld),Gh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),br.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yr.multiplyScalar(-br.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const s=this.center;wo(bo.set(-.5,-.5,0),br,s,yr,i,r),wo(ls.set(.5,-.5,0),br,s,yr,i,r),wo(Mo.set(.5,.5,0),br,s,yr,i,r),Wh.set(0,0),$a.set(1,0),Xh.set(1,1);let a=e.ray.intersectTriangle(bo,ls,Mo,!1,os);if(a===null&&(wo(ls.set(-.5,.5,0),br,s,yr,i,r),$a.set(0,1),a=e.ray.intersectTriangle(bo,Mo,ls,!1,os),a===null))return;const l=e.ray.origin.distanceTo(os);l<e.near||l>e.far||t.push({distance:l,point:os.clone(),uv:lt.getUV(os,bo,ls,Mo,Wh,$a,Xh,new j),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}K0.prototype.isSprite=!0;function wo(o,e,t,n,i,r){Mr.subVectors(o,t).addScalar(.5).multiply(n),i!==void 0?(as.x=r*Mr.x-i*Mr.y,as.y=i*Mr.x+r*Mr.y):as.copy(Mr),o.copy(e),o.x+=as.x,o.y+=as.y,o.applyMatrix4(Gh)}const jh=new C,qh=new qe,Yh=new qe,Q0=new C,$h=new me;class Za extends wt{constructor(e,t){super(e,t);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new me,this.bindMatrixInverse=new me}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;qh.fromBufferAttribute(i.attributes.skinIndex,e),Yh.fromBufferAttribute(i.attributes.skinWeight,e),jh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const s=Yh.getComponent(r);if(s!==0){const a=qh.getComponent(r);$h.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Q0.copy(jh).applyMatrix4($h),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}Za.prototype.isSkinnedMesh=!0;class Ja extends He{constructor(){super();this.type="Bone"}}Ja.prototype.isBone=!0;class Zh extends at{constructor(e=null,t=1,n=1,i,r,s,a,l,c=it,h=it,u,d){super(null,s,a,l,c,h,i,r,u,d);this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Zh.prototype.isDataTexture=!0;const Jh=new me,ev=new me;class Ka{constructor(e=[],t=[]){this.uuid=Gt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new me)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new me;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,s=e.length;r<s;r++){const a=e[r]?e[r].matrixWorld:ev;Jh.multiplyMatrices(a,t[r]),Jh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ka(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=zc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Zh(t,e,e,st,Mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new Ja),this.bones.push(s),this.boneInverses.push(new me().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const s=t[i];e.bones.push(s.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Qa extends Qe{constructor(e,t,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(e,t,n);this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Qa.prototype.isInstancedBufferAttribute=!0;const Kh=new me,Qh=new me,So=[],cs=new wt;class tv extends wt{constructor(e,t,n){super(e,t);this.instanceMatrix=new Qa(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Kh),Qh.multiplyMatrices(n,Kh),cs.matrixWorld=Qh,cs.raycast(e,So);for(let s=0,a=So.length;s<a;s++){const l=So[s];l.instanceId=r,l.object=this,t.push(l)}So.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}tv.prototype.isInstancedMesh=!0;class wr extends dt{constructor(e){super();this.type="LineBasicMaterial",this.color=new ue(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}wr.prototype.isLineBasicMaterial=!0;const eu=new C,tu=new C,nu=new me,el=new Mi,To=new bi;class Eo extends He{constructor(e=new Ge,t=new wr){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)eu.fromBufferAttribute(t,i-1),tu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=eu.distanceTo(tu);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(i),To.radius+=r,e.ray.intersectsSphere(To)===!1)return;nu.copy(i).invert(),el.copy(e.ray).applyMatrix4(nu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,h=new C,u=new C,d=new C,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const m=n.index,x=n.attributes.position;if(m!==null){const p=Math.max(0,s.start),g=Math.min(m.count,s.start+s.count);for(let b=p,v=g-1;b<v;b+=f){const y=m.getX(b),E=m.getX(b+1);if(c.fromBufferAttribute(x,y),h.fromBufferAttribute(x,E),el.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(d);N<e.near||N>e.far||t.push({distance:N,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,s.start),g=Math.min(x.count,s.start+s.count);for(let b=p,v=g-1;b<v;b+=f){if(c.fromBufferAttribute(x,b),h.fromBufferAttribute(x,b+1),el.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Eo.prototype.isLine=!0;const iu=new C,ru=new C;class Ao extends Eo{constructor(e,t){super(e,t);this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)iu.fromBufferAttribute(t,i),ru.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+iu.distanceTo(ru);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Ao.prototype.isLineSegments=!0;class su extends Eo{constructor(e,t){super(e,t);this.type="LineLoop"}}su.prototype.isLineLoop=!0;class tl extends dt{constructor(e){super();this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}tl.prototype.isPointsMaterial=!0;const ou=new me,nl=new Mi,Co=new bi,Lo=new C;class au extends He{constructor(e=new Ge,t=new tl){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(i),Co.radius+=r,e.ray.intersectsSphere(Co)===!1)return;ou.copy(i).invert(),nl.copy(e.ray).applyMatrix4(ou);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let m=d,_=f;m<_;m++){const x=c.getX(m);Lo.fromBufferAttribute(u,x),lu(Lo,x,l,i,e,t,this)}}else{const d=Math.max(0,s.start),f=Math.min(u.count,s.start+s.count);for(let m=d,_=f;m<_;m++)Lo.fromBufferAttribute(u,m),lu(Lo,m,l,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}au.prototype.isPoints=!0;function lu(o,e,t,n,i,r,s){const a=nl.distanceSqToPoint(o);if(a<t){const l=new C;nl.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:s})}}class nv extends at{constructor(e,t,n,i,r,s,a,l,c){super(e,t,n,i,r,s,a,l,c);this.format=a!==void 0?a:zn,this.minFilter=s!==void 0?s:rt,this.magFilter=r!==void 0?r:rt,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}nv.prototype.isVideoTexture=!0;class iv extends at{constructor(e,t,n){super({width:e,height:t});this.format=n,this.magFilter=it,this.minFilter=it,this.generateMipmaps=!1,this.needsUpdate=!0}}iv.prototype.isFramebufferTexture=!0;class rv extends at{constructor(e,t,n,i,r,s,a,l,c,h,u,d){super(null,s,a,l,c,h,i,r,u,d);this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}rv.prototype.isCompressedTexture=!0;class sv extends at{constructor(e,t,n,i,r,s,a,l,c){super(e,t,n,i,r,s,a,l,c);this.needsUpdate=!0}}sv.prototype.isCanvasTexture=!0;class cu extends Ge{constructor(e=1,t=8,n=0,i=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],s=[],a=[],l=[],c=new C,h=new j;s.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),s.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(s[d]/e+1)/2,h.y=(s[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(a,3)),this.setAttribute("uv",new Je(l,2))}static fromJSON(e){return new cu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}new C;new C;new C;new lt;class jt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let s=1;s<=e;s++)n=this.getPoint(s/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let s;t?s=t:s=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-s,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===s)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(s-h)/d;return(i+f)/(r-1)}getTangent(e,t){const n=1e-4;let i=e-n,r=e+n;i<0&&(i=0),r>1&&(r=1);const s=this.getPoint(i),a=this.getPoint(r),l=t||(s.isVector2?new j:new C);return l.copy(a).sub(s).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,i=[],r=[],s=[],a=new C,l=new me;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new C)}r[0]=new C,s[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),s[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),s[f]=s[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Ct(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}s[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ct(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),s[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ro extends jt{constructor(e=0,t=0,n=1,i=1,r=0,s=Math.PI*2,a=!1,l=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new j,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Ro.prototype.isEllipseCurve=!0;class hu extends Ro{constructor(e,t,n,i,r,s){super(e,t,n,n,i,r,s);this.type="ArcCurve"}}hu.prototype.isArcCurve=!0;function il(){let o=0,e=0,t=0,n=0;function i(r,s,a,l){o=r,e=a,t=-3*r+3*s-2*a-l,n=2*r-2*s+a+l}return{initCatmullRom:function(r,s,a,l,c){i(s,a,c*(a-r),c*(l-s))},initNonuniformCatmullRom:function(r,s,a,l,c,h,u){let d=(s-r)/c-(a-r)/(c+h)+(a-s)/h,f=(a-s)/h-(l-s)/(h+u)+(l-a)/u;d*=h,f*=h,i(s,a,d,f)},calc:function(r){const s=r*r,a=s*r;return o+e*r+t*s+n*a}}}const Po=new C,rl=new il,sl=new il,ol=new il;class uu extends jt{constructor(e=[],t=!1,n="centripetal",i=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){const n=t,i=this.points,r=i.length,s=(r-(this.closed?0:1))*e;let a=Math.floor(s),l=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Po.subVectors(i[0],i[1]).add(i[0]),c=Po);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Po.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Po),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),x<1e-4&&(x=_),rl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,_,x),sl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,_,x),ol.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,_,x)}else this.curveType==="catmullrom"&&(rl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),sl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ol.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(rl.calc(l),sl.calc(l),ol.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}uu.prototype.isCatmullRomCurve3=!0;function du(o,e,t,n,i){const r=(n-e)*.5,s=(i-t)*.5,a=o*o,l=o*a;return(2*t-2*n+r+s)*l+(-3*t+3*n-2*r-s)*a+r*o+t}function ov(o,e){const t=1-o;return t*t*e}function av(o,e){return 2*(1-o)*o*e}function lv(o,e){return o*o*e}function hs(o,e,t,n){return ov(o,e)+av(o,t)+lv(o,n)}function cv(o,e){const t=1-o;return t*t*t*e}function hv(o,e){const t=1-o;return 3*t*t*o*e}function uv(o,e){return 3*(1-o)*o*o*e}function dv(o,e){return o*o*o*e}function us(o,e,t,n,i){return cv(o,e)+hv(o,t)+uv(o,n)+dv(o,i)}class al extends jt{constructor(e=new j,t=new j,n=new j,i=new j){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new j){const n=t,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(us(e,i.x,r.x,s.x,a.x),us(e,i.y,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}al.prototype.isCubicBezierCurve=!0;class fu extends jt{constructor(e=new C,t=new C,n=new C,i=new C){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(us(e,i.x,r.x,s.x,a.x),us(e,i.y,r.y,s.y,a.y),us(e,i.z,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}fu.prototype.isCubicBezierCurve3=!0;class Do extends jt{constructor(e=new j,t=new j){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new j){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new j;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Do.prototype.isLineCurve=!0;class fv extends jt{constructor(e=new C,t=new C){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ll extends jt{constructor(e=new j,t=new j,n=new j){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new j){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(hs(e,i.x,r.x,s.x),hs(e,i.y,r.y,s.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}ll.prototype.isQuadraticBezierCurve=!0;class pu extends jt{constructor(e=new C,t=new C,n=new C){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,i=this.v0,r=this.v1,s=this.v2;return n.set(hs(e,i.x,r.x,s.x),hs(e,i.y,r.y,s.y),hs(e,i.z,r.z,s.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}pu.prototype.isQuadraticBezierCurve3=!0;class cl extends jt{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new j){const n=t,i=this.points,r=(i.length-1)*e,s=Math.floor(r),a=r-s,l=i[s===0?s:s-1],c=i[s],h=i[s>i.length-2?i.length-1:s+1],u=i[s>i.length-3?i.length-1:s+2];return n.set(du(a,l.x,c.x,h.x,u.x),du(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new j().fromArray(i))}return this}}cl.prototype.isSplineCurve=!0;var mu=Object.freeze({__proto__:null,ArcCurve:hu,CatmullRomCurve3:uu,CubicBezierCurve:al,CubicBezierCurve3:fu,EllipseCurve:Ro,LineCurve:Do,LineCurve3:fv,QuadraticBezierCurve:ll,QuadraticBezierCurve3:pu,SplineCurve:cl});class pv extends jt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Do(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const s=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-s/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const s=r[i],a=s&&s.isEllipseCurve?e*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?e*s.points.length:e,l=s.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new mu[i.type]().fromJSON(i))}return this}}class hl extends pv{constructor(e){super();this.type="Path",this.currentPoint=new j,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Do(this.currentPoint.clone(),new j(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new ll(this.currentPoint.clone(),new j(e,t),new j(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,s){const a=new al(this.currentPoint.clone(),new j(e,t),new j(n,i),new j(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new cl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,s){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,s),this}absarc(e,t,n,i,r,s){return this.absellipse(e,t,n,n,i,r,s),this}ellipse(e,t,n,i,r,s,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,s,a,l),this}absellipse(e,t,n,i,r,s,a,l){const c=new Ro(e,t,n,i,r,s,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ds extends hl{constructor(e){super(e);this.uuid=Gt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new hl().fromJSON(i))}return this}}const mv={triangulate:function(o,e,t=2){const n=e&&e.length,i=n?e[0]*t:o.length;let r=gu(o,0,i,t,!0);const s=[];if(!r||r.next===r.prev)return s;let a,l,c,h,u,d,f;if(n&&(r=yv(o,e,r,t)),o.length>80*t){a=c=o[0],l=h=o[1];for(let m=t;m<i;m+=t)u=o[m],d=o[m+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?1/f:0}return fs(r,s,t,a,l,f),s}};function gu(o,e,t,n,i){let r,s;if(i===Pv(o,e,t,n)>0)for(r=e;r<t;r+=n)s=vu(r,o[r],o[r+1],s);else for(r=t-n;r>=e;r-=n)s=vu(r,o[r],o[r+1],s);return s&&Io(s,s.next)&&(ms(s),s=s.next),s}function Kn(o,e){if(!o)return o;e||(e=o);let t=o,n;do if(n=!1,!t.steiner&&(Io(t,t.next)||et(t.prev,t,t.next)===0)){if(ms(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function fs(o,e,t,n,i,r,s){if(!o)return;!s&&r&&Tv(o,n,i,r);let a=o,l,c;for(;o.prev!==o.next;){if(l=o.prev,c=o.next,r?_v(o,n,i,r):gv(o)){e.push(l.i/t),e.push(o.i/t),e.push(c.i/t),ms(o),o=c.next,a=c.next;continue}if(o=c,o===a){s?s===1?(o=xv(Kn(o),e,t),fs(o,e,t,n,i,r,2)):s===2&&vv(o,e,t,n,i,r):fs(Kn(o),e,t,n,i,r,1);break}}}function gv(o){const e=o.prev,t=o,n=o.next;if(et(e,t,n)>=0)return!1;let i=o.next.next;for(;i!==o.prev;){if(Sr(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&et(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function _v(o,e,t,n){const i=o.prev,r=o,s=o.next;if(et(i,r,s)>=0)return!1;const a=i.x<r.x?i.x<s.x?i.x:s.x:r.x<s.x?r.x:s.x,l=i.y<r.y?i.y<s.y?i.y:s.y:r.y<s.y?r.y:s.y,c=i.x>r.x?i.x>s.x?i.x:s.x:r.x>s.x?r.x:s.x,h=i.y>r.y?i.y>s.y?i.y:s.y:r.y>s.y?r.y:s.y,u=ul(a,l,e,t,n),d=ul(c,h,e,t,n);let f=o.prevZ,m=o.nextZ;for(;f&&f.z>=u&&m&&m.z<=d;){if(f!==o.prev&&f!==o.next&&Sr(i.x,i.y,r.x,r.y,s.x,s.y,f.x,f.y)&&et(f.prev,f,f.next)>=0||(f=f.prevZ,m!==o.prev&&m!==o.next&&Sr(i.x,i.y,r.x,r.y,s.x,s.y,m.x,m.y)&&et(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;f&&f.z>=u;){if(f!==o.prev&&f!==o.next&&Sr(i.x,i.y,r.x,r.y,s.x,s.y,f.x,f.y)&&et(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;m&&m.z<=d;){if(m!==o.prev&&m!==o.next&&Sr(i.x,i.y,r.x,r.y,s.x,s.y,m.x,m.y)&&et(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function xv(o,e,t){let n=o;do{const i=n.prev,r=n.next.next;!Io(i,r)&&_u(i,n,n.next,r)&&ps(i,r)&&ps(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),ms(n),ms(n.next),n=o=r),n=n.next}while(n!==o);return Kn(n)}function vv(o,e,t,n,i,r){let s=o;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&Cv(s,a)){let l=xu(s,a);s=Kn(s,s.next),l=Kn(l,l.next),fs(s,e,t,n,i,r),fs(l,e,t,n,i,r);return}a=a.next}s=s.next}while(s!==o)}function yv(o,e,t,n){const i=[];let r,s,a,l,c;for(r=0,s=e.length;r<s;r++)a=e[r]*n,l=r<s-1?e[r+1]*n:o.length,c=gu(o,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Av(c));for(i.sort(bv),r=0;r<i.length;r++)Mv(i[r],t),t=Kn(t,t.next);return t}function bv(o,e){return o.x-e.x}function Mv(o,e){if(e=wv(o,e),e){const t=xu(e,o);Kn(e,e.next),Kn(t,t.next)}}function wv(o,e){let t=e;const n=o.x,i=o.y;let r=-1/0,s;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r){if(r=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}s=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!s)return null;if(n===r)return s;const a=s,l=s.x,c=s.y;let h=1/0,u;t=s;do n>=t.x&&t.x>=l&&n!==t.x&&Sr(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),ps(t,o)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Sv(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function Sv(o,e){return et(o.prev,o,e.prev)<0&&et(e.next,o,o.next)<0}function Tv(o,e,t,n){let i=o;do i.z===null&&(i.z=ul(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==o);i.prevZ.nextZ=null,i.prevZ=null,Ev(i)}function Ev(o){let e,t,n,i,r,s,a,l,c=1;do{for(t=o,o=null,r=null,s=0;t;){for(s++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:o=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(s>1);return o}function ul(o,e,t,n,i){return o=32767*(o-t)*i,e=32767*(e-n)*i,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,o|e<<1}function Av(o){let e=o,t=o;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==o);return t}function Sr(o,e,t,n,i,r,s,a){return(i-s)*(e-a)-(o-s)*(r-a)>=0&&(o-s)*(n-a)-(t-s)*(e-a)>=0&&(t-s)*(r-a)-(i-s)*(n-a)>=0}function Cv(o,e){return o.next.i!==e.i&&o.prev.i!==e.i&&!Lv(o,e)&&(ps(o,e)&&ps(e,o)&&Rv(o,e)&&(et(o.prev,o,e.prev)||et(o,e.prev,e))||Io(o,e)&&et(o.prev,o,o.next)>0&&et(e.prev,e,e.next)>0)}function et(o,e,t){return(e.y-o.y)*(t.x-e.x)-(e.x-o.x)*(t.y-e.y)}function Io(o,e){return o.x===e.x&&o.y===e.y}function _u(o,e,t,n){const i=No(et(o,e,t)),r=No(et(o,e,n)),s=No(et(t,n,o)),a=No(et(t,n,e));return!!(i!==r&&s!==a||i===0&&Fo(o,t,e)||r===0&&Fo(o,n,e)||s===0&&Fo(t,o,n)||a===0&&Fo(t,e,n))}function Fo(o,e,t){return e.x<=Math.max(o.x,t.x)&&e.x>=Math.min(o.x,t.x)&&e.y<=Math.max(o.y,t.y)&&e.y>=Math.min(o.y,t.y)}function No(o){return o>0?1:o<0?-1:0}function Lv(o,e){let t=o;do{if(t.i!==o.i&&t.next.i!==o.i&&t.i!==e.i&&t.next.i!==e.i&&_u(t,t.next,o,e))return!0;t=t.next}while(t!==o);return!1}function ps(o,e){return et(o.prev,o,o.next)<0?et(o,e,o.next)>=0&&et(o,o.prev,e)>=0:et(o,e,o.prev)<0||et(o,o.next,e)<0}function Rv(o,e){let t=o,n=!1;const i=(o.x+e.x)/2,r=(o.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==o);return n}function xu(o,e){const t=new dl(o.i,o.x,o.y),n=new dl(e.i,e.x,e.y),i=o.next,r=e.prev;return o.next=e,e.prev=o,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function vu(o,e,t,n){const i=new dl(o,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ms(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function dl(o,e,t){this.i=o,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Pv(o,e,t,n){let i=0;for(let r=e,s=t-n;r<t;r+=n)i+=(o[s]-o[r])*(o[r+1]+o[s+1]),s=r;return i}class Qn{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Qn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];yu(e),bu(n,e);let s=e.length;t.forEach(yu);for(let l=0;l<t.length;l++)i.push(s),s+=t[l].length,bu(n,t[l]);const a=mv.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function yu(o){const e=o.length;e>2&&o[e-1].equals(o[0])&&o.pop()}function bu(o,e){for(let t=0;t<e.length;t++)o.push(e[t].x),o.push(e[t].y)}class Tr extends Ge{constructor(e=new ds([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];s(c)}this.setAttribute("position",new Je(i,3)),this.setAttribute("uv",new Je(r,2)),this.computeVertexNormals();function s(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:Dv;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let b,v=!1,y,E,L,N;p&&(b=p.getSpacedPoints(h),v=!0,d=!1,y=p.computeFrenetFrames(h,!1),E=new C,L=new C,N=new C),d||(x=0,f=0,m=0,_=0);const B=a.extractPoints(c);let H=B.shape;const D=B.holes;if(!Qn.isClockWise(H)){H=H.reverse();for(let X=0,ee=D.length;X<ee;X++){const ie=D[X];Qn.isClockWise(ie)&&(D[X]=ie.reverse())}}const M=Qn.triangulateShape(H,D),I=H;for(let X=0,ee=D.length;X<ee;X++){const ie=D[X];H=H.concat(ie)}function O(X,ee,ie){return ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().multiplyScalar(ie).add(X)}const F=H.length,U=M.length;function te(X,ee,ie){let de,se,Me;const we=X.x-ee.x,Le=X.y-ee.y,We=ie.x-X.x,R=ie.y-X.y,S=we*we+Le*Le,Y=we*R-Le*We;if(Math.abs(Y)>Number.EPSILON){const Q=Math.sqrt(S),oe=Math.sqrt(We*We+R*R),K=ee.x-Le/Q,be=ee.y+we/Q,_e=ie.x-R/oe,P=ie.y+We/oe,A=((_e-K)*R-(P-be)*We)/(we*R-Le*We);de=K+we*A-X.x,se=be+Le*A-X.y;const J=de*de+se*se;if(J<=2)return new j(de,se);Me=Math.sqrt(J/2)}else{let Q=!1;we>Number.EPSILON?We>Number.EPSILON&&(Q=!0):we<-Number.EPSILON?We<-Number.EPSILON&&(Q=!0):Math.sign(Le)===Math.sign(R)&&(Q=!0),Q?(de=-Le,se=we,Me=Math.sqrt(S)):(de=we,se=Le,Me=Math.sqrt(S/2))}return new j(de/Me,se/Me)}const re=[];for(let X=0,ee=I.length,ie=ee-1,de=X+1;X<ee;X++,ie++,de++)ie===ee&&(ie=0),de===ee&&(de=0),re[X]=te(I[X],I[ie],I[de]);const G=[];let W,ce=re.concat();for(let X=0,ee=D.length;X<ee;X++){const ie=D[X];W=[];for(let de=0,se=ie.length,Me=se-1,we=de+1;de<se;de++,Me++,we++)Me===se&&(Me=0),we===se&&(we=0),W[de]=te(ie[de],ie[Me],ie[we]);G.push(W),ce=ce.concat(W)}for(let X=0;X<x;X++){const ee=X/x,ie=f*Math.cos(ee*Math.PI/2),de=m*Math.sin(ee*Math.PI/2)+_;for(let se=0,Me=I.length;se<Me;se++){const we=O(I[se],re[se],de);Ae(we.x,we.y,-ie)}for(let se=0,Me=D.length;se<Me;se++){const we=D[se];W=G[se];for(let Le=0,We=we.length;Le<We;Le++){const R=O(we[Le],W[Le],de);Ae(R.x,R.y,-ie)}}}const ne=m+_;for(let X=0;X<F;X++){const ee=d?O(H[X],ce[X],ne):H[X];v?(L.copy(y.normals[0]).multiplyScalar(ee.x),E.copy(y.binormals[0]).multiplyScalar(ee.y),N.copy(b[0]).add(L).add(E),Ae(N.x,N.y,N.z)):Ae(ee.x,ee.y,0)}for(let X=1;X<=h;X++)for(let ee=0;ee<F;ee++){const ie=d?O(H[ee],ce[ee],ne):H[ee];v?(L.copy(y.normals[X]).multiplyScalar(ie.x),E.copy(y.binormals[X]).multiplyScalar(ie.y),N.copy(b[X]).add(L).add(E),Ae(N.x,N.y,N.z)):Ae(ie.x,ie.y,u/h*X)}for(let X=x-1;X>=0;X--){const ee=X/x,ie=f*Math.cos(ee*Math.PI/2),de=m*Math.sin(ee*Math.PI/2)+_;for(let se=0,Me=I.length;se<Me;se++){const we=O(I[se],re[se],de);Ae(we.x,we.y,u+ie)}for(let se=0,Me=D.length;se<Me;se++){const we=D[se];W=G[se];for(let Le=0,We=we.length;Le<We;Le++){const R=O(we[Le],W[Le],de);v?Ae(R.x,R.y+b[h-1].y,b[h-1].x+ie):Ae(R.x,R.y,u+ie)}}}he(),Re();function he(){const X=i.length/3;if(d){let ee=0,ie=F*ee;for(let de=0;de<U;de++){const se=M[de];ve(se[2]+ie,se[1]+ie,se[0]+ie)}ee=h+x*2,ie=F*ee;for(let de=0;de<U;de++){const se=M[de];ve(se[0]+ie,se[1]+ie,se[2]+ie)}}else{for(let ee=0;ee<U;ee++){const ie=M[ee];ve(ie[2],ie[1],ie[0])}for(let ee=0;ee<U;ee++){const ie=M[ee];ve(ie[0]+F*h,ie[1]+F*h,ie[2]+F*h)}}n.addGroup(X,i.length/3-X,0)}function Re(){const X=i.length/3;let ee=0;$(I,ee),ee+=I.length;for(let ie=0,de=D.length;ie<de;ie++){const se=D[ie];$(se,ee),ee+=se.length}n.addGroup(X,i.length/3-X,1)}function $(X,ee){let ie=X.length;for(;--ie>=0;){const de=ie;let se=ie-1;se<0&&(se=X.length-1);for(let Me=0,we=h+x*2;Me<we;Me++){const Le=F*Me,We=F*(Me+1),R=ee+de+Le,S=ee+se+Le,Y=ee+se+We,Q=ee+de+We;pe(R,S,Y,Q)}}}function Ae(X,ee,ie){l.push(X),l.push(ee),l.push(ie)}function ve(X,ee,ie){ge(X),ge(ee),ge(ie);const de=i.length/3,se=g.generateTopUV(n,i,de-3,de-2,de-1);Fe(se[0]),Fe(se[1]),Fe(se[2])}function pe(X,ee,ie,de){ge(X),ge(ee),ge(de),ge(ee),ge(ie),ge(de);const se=i.length/3,Me=g.generateSideWallUV(n,i,se-6,se-3,se-2,se-1);Fe(Me[0]),Fe(Me[1]),Fe(Me[3]),Fe(Me[1]),Fe(Me[2]),Fe(Me[3])}function ge(X){i.push(l[X*3+0]),i.push(l[X*3+1]),i.push(l[X*3+2])}function Fe(X){r.push(X.x),r.push(X.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Iv(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new mu[i.type]().fromJSON(i)),new Tr(n,e.options)}}const Dv={generateTopUV:function(o,e,t,n,i){const r=e[t*3],s=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new j(r,s),new j(a,l),new j(c,h)]},generateSideWallUV:function(o,e,t,n,i,r){const s=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],_=e[r*3],x=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(s-c)?[new j(s,1-l),new j(c,1-u),new j(d,1-m),new j(_,1-p)]:[new j(a,1-l),new j(h,1-u),new j(f,1-m),new j(x,1-p)]}};function Iv(o,e,t){if(t.shapes=[],Array.isArray(o))for(let n=0,i=o.length;n<i;n++){const r=o[n];t.shapes.push(r.uuid)}else t.shapes.push(o.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class fl extends Ge{constructor(e=new ds([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],s=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Je(i,3)),this.setAttribute("normal",new Je(r,3)),this.setAttribute("uv",new Je(s,2));function c(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const m=d.holes;Qn.isClockWise(f)===!1&&(f=f.reverse());for(let x=0,p=m.length;x<p;x++){const g=m[x];Qn.isClockWise(g)===!0&&(m[x]=g.reverse())}const _=Qn.triangulateShape(f,m);for(let x=0,p=m.length;x<p;x++){const g=m[x];f=f.concat(g)}for(let x=0,p=f.length;x<p;x++){const g=f[x];i.push(g.x,g.y,0),r.push(0,0,1),s.push(g.x,g.y)}for(let x=0,p=_.length;x<p;x++){const g=_[x],b=g[0]+u,v=g[1]+u,y=g[2]+u;n.push(b,v,y),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Fv(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const s=t[e.shapes[i]];n.push(s)}return new fl(n,e.curveSegments)}}function Fv(o,e){if(e.shapes=[],Array.isArray(o))for(let t=0,n=o.length;t<n;t++){const i=o[t];e.shapes.push(i.uuid)}else e.shapes.push(o.uuid);return e}class Nv extends dt{constructor(e){super();this.type="ShadowMaterial",this.color=new ue(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}Nv.prototype.isShadowMaterial=!0;class gs extends dt{constructor(e){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}gs.prototype.isMeshStandardMaterial=!0;class Ti extends gs{constructor(e){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new j(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}Ti.prototype.isMeshPhysicalMaterial=!0;class Ov extends dt{constructor(e){super();this.type="MeshPhongMaterial",this.color=new ue(16777215),this.specular=new ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Ov.prototype.isMeshPhongMaterial=!0;class Bv extends dt{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ue(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Bv.prototype.isMeshToonMaterial=!0;class Uv extends dt{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Uv.prototype.isMeshNormalMaterial=!0;class kv extends dt{constructor(e){super();this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}kv.prototype.isMeshLambertMaterial=!0;class zv extends dt{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ue(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xi,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}zv.prototype.isMeshMatcapMaterial=!0;class Hv extends wr{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Hv.prototype.isLineDashedMaterial=!0;const Ke={arraySlice:function(o,e,t){return Ke.isTypedArray(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)},convertArray:function(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)},isTypedArray:function(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)},getKeyframeOrder:function(o){function e(i,r){return o[i]-o[r]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(o,e,t){const n=o.length,i=new o.constructor(n);for(let r=0,s=0;s!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[s++]=o[a+l]}return i},flattenJSON:function(o,e,t,n){let i=1,r=o[0];for(;r!==void 0&&r[n]===void 0;)r=o[i++];if(r===void 0)return;let s=r[n];if(s!==void 0)if(Array.isArray(s))do s=r[n],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=o[i++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[n],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=o[i++];while(r!==void 0);else do s=r[n],s!==void 0&&(e.push(r.time),t.push(s)),r=o[i++];while(r!==void 0)},subclip:function(o,e,t,n,i=30){const r=o.clone();r.name=e;const s=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const m=c.times[f]*i;if(!(m<t||m>=n)){u.push(c.times[f]);for(let _=0;_<h;++_)d.push(c.values[f*h+_])}}u.length!==0&&(c.times=Ke.convertArray(u,c.times.constructor),c.values=Ke.convertArray(d,c.values.constructor),s.push(c))}r.tracks=s;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r},makeClipAdditive:function(o,e=0,t=o,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let s=0;s<i;++s){const a=t.tracks[s],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=o.tracks.find(function(p){return p.name===a.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const m=a.times.length-1;let _;if(r<=a.times[0]){const p=h,g=u-h;_=Ke.arraySlice(a.values,p,g)}else if(r>=a.times[m]){const p=m*u+h,g=p+u-h;_=Ke.arraySlice(a.values,p,g)}else{const p=a.createInterpolant(),g=h,b=u-h;p.evaluate(r),_=Ke.arraySlice(p.resultBuffer,g,b)}l==="quaternion"&&new yt().fromArray(_).normalize().conjugate().toArray(_);const x=c.times.length;for(let p=0;p<x;++p){const g=p*f+d;if(l==="quaternion")yt.multiplyQuaternionsFlat(c.values,g,_,0,c.values,g);else{const b=f-d*2;for(let v=0;v<b;++v)c.values[g+v]-=_[v]}}}return o.blendMode=Oc,o}};class Pn{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let s;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}s=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}s=n,n=0;break n}break e}for(;n<s;){const a=n+s>>>1;e<t[a]?s=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Pn.prototype.beforeStart_=Pn.prototype.copySampleValue_;Pn.prototype.afterEnd_=Pn.prototype.copySampleValue_;class Vv extends Pn{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yi,endingEnd:Yi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,s=e+1,a=i[r],l=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case $i:r=e,a=2*t-n;break;case Xs:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $i:s=e,l=2*n-t;break;case Xs:s=1,l=n+i[1]-i[0];break;default:s=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=s*h}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,x=_*m,p=-d*x+2*d*_-d*m,g=(1+d)*x+(-1.5-2*d)*_+(-.5+d)*m+1,b=(-1-f)*x+(1.5+f)*_+.5*m,v=f*x-f*_;for(let y=0;y!==a;++y)r[y]=p*s[h+y]+g*s[c+y]+b*s[l+y]+v*s[u+y];return r}}class Mu extends Pn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=s[c+d]*u+s[l+d]*h;return r}}class Gv extends Pn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class dn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ke.convertArray(t,this.TimeBufferType),this.values=Ke.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ke.convertArray(e.times,Array),values:Ke.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Gv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Vv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qr:t=this.InterpolantFactoryMethodDiscrete;break;case qi:t=this.InterpolantFactoryMethodLinear;break;case aa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return qi;case this.InterpolantFactoryMethodSmooth:return aa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=Ke.arraySlice(n,r,s),this.values=Ke.arraySlice(this.values,r*a,s*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,s),e=!1;break}s=l}if(i!==void 0&&Ke.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Ke.arraySlice(this.times),t=Ke.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===aa,r=e.length-1;let s=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const _=t[u+m];if(_!==t[d+m]||_!==t[f+m]){l=!0;break}}}if(l){if(a!==s){e[s]=e[a];const u=a*n,d=s*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++s}}if(r>0){e[s]=e[r];for(let a=r*n,l=s*n,c=0;c!==n;++c)t[l+c]=t[a+c];++s}return s!==e.length?(this.times=Ke.arraySlice(e,0,s),this.values=Ke.arraySlice(t,0,s*n)):(this.times=e,this.values=t),this}clone(){const e=Ke.arraySlice(this.times,0),t=Ke.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=qi;class Er extends dn{}Er.prototype.ValueTypeName="bool";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=qr;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;class wu extends dn{}wu.prototype.ValueTypeName="color";class _s extends dn{}_s.prototype.ValueTypeName="number";class Wv extends Pn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)yt.slerpFlat(r,0,s,c-a,s,c,l);return r}}class Ei extends dn{InterpolantFactoryMethodLinear(e){return new Wv(this.times,this.values,this.getValueSize(),e)}}Ei.prototype.ValueTypeName="quaternion";Ei.prototype.DefaultInterpolation=qi;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;class Ar extends dn{}Ar.prototype.ValueTypeName="string";Ar.prototype.ValueBufferType=Array;Ar.prototype.DefaultInterpolation=qr;Ar.prototype.InterpolantFactoryMethodLinear=void 0;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends dn{}xs.prototype.ValueTypeName="vector";class pl{constructor(e,t=-1,n,i=la){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Gt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,a=n.length;s!==a;++s)t.push(jv(n[s]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=n.length;r!==s;++r)t.push(dn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,s=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Ke.getKeyframeOrder(l);l=Ke.sortedArray(l,1,h),c=Ke.sortedArray(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),s.push(new _s(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const s=[];for(const a in i)s.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,_){if(f.length!==0){const x=[],p=[];Ke.flattenJSON(f,x,p,m),x.length!==0&&_.push(new u(d,x,p))}},i=[],r=e.name||"default",s=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const x=[],p=[];for(let g=0;g!==d[m].morphTargets.length;++g){const b=d[m];x.push(b.time),p.push(b.morphTarget===_?1:0)}i.push(new _s(".morphTargetInfluence["+_+"]",x,p))}l=f.length*(s||1)}else{const f=".bones["+t[u].name+"]";n(xs,f+".position",d,"pos",i),n(Ei,f+".quaternion",d,"rot",i),n(xs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Xv(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _s;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return wu;case"quaternion":return Ei;case"bool":case"boolean":return Er;case"string":return Ar}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function jv(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Xv(o.type);if(o.times===void 0){const t=[],n=[];Ke.flattenJSON(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Cr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class qv{constructor(e,t,n){const i=this;let r=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,s,a),r=!0},this.itemEnd=function(h){s++,i.onProgress!==void 0&&i.onProgress(h,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const Yv=new qv;class fn{constructor(e){this.manager=e!==void 0?e:Yv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Dn={};class vs extends fn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Cr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Dn[e]!==void 0){Dn[e].push({onLoad:t,onProgress:n,onError:i});return}Dn[e]=[],Dn[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"});fetch(s).then(a=>{if(a.status===200||a.status===0){if(a.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||a.body.getReader===void 0)return a;const l=Dn[e],c=a.body.getReader(),h=a.headers.get("Content-Length"),u=h?parseInt(h):0,d=u!==0;let f=0;const m=new ReadableStream({start(_){x();function x(){c.read().then(({done:p,value:g})=>{if(p)_.close();else{f+=g.byteLength;const b=new ProgressEvent("progress",{lengthComputable:d,loaded:f,total:u});for(let v=0,y=l.length;v<y;v++){const E=l[v];E.onProgress&&E.onProgress(b)}_.enqueue(g),x()}})}}});return new Response(m)}else throw Error(`fetch for "${a.url}" responded with ${a.status}: ${a.statusText}`)}).then(a=>{switch(this.responseType){case"arraybuffer":return a.arrayBuffer();case"blob":return a.blob();case"document":return a.text().then(l=>new DOMParser().parseFromString(l,this.mimeType));case"json":return a.json();default:return a.text()}}).then(a=>{Cr.add(e,a);const l=Dn[e];delete Dn[e];for(let c=0,h=l.length;c<h;c++){const u=l[c];u.onLoad&&u.onLoad(a)}}).catch(a=>{const l=Dn[e];if(l===void 0)throw this.manager.itemError(e),a;delete Dn[e];for(let c=0,h=l.length;c<h;c++){const u=l[c];u.onError&&u.onError(a)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Su extends fn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Cr.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const a=Ys("img");function l(){h(),Cr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class $v extends fn{constructor(e){super(e)}load(e,t,n,i){const r=new fo,s=new Su(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let a=0;function l(c){s.load(e[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class Tu extends fn{constructor(e){super(e)}load(e,t,n,i){const r=new at,s=new Su(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class pn extends He{constructor(e,t=1){super();this.type="Light",this.color=new ue(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}pn.prototype.isLight=!0;class Zv extends pn{constructor(e,t,n){super(e,n);this.type="HemisphereLight",this.position.copy(He.DefaultUp),this.updateMatrix(),this.groundColor=new ue(t)}copy(e){return pn.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}Zv.prototype.isHemisphereLight=!0;const Eu=new me,Au=new C,Cu=new C;class ml{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Au.setFromMatrixPosition(e.matrixWorld),t.position.copy(Au),Cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cu),t.updateMatrixWorld(),Eu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Lu extends ml{constructor(){super(new Lt(50,1,.5,500));this.focus=1}updateMatrices(e){const t=this.camera,n=Zr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Lu.prototype.isSpotLightShadow=!0;class Ru extends pn{constructor(e,t,n=0,i=Math.PI/3,r=0,s=1){super(e,t);this.type="SpotLight",this.position.copy(He.DefaultUp),this.updateMatrix(),this.target=new He,this.distance=n,this.angle=i,this.penumbra=r,this.decay=s,this.shadow=new Lu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Ru.prototype.isSpotLight=!0;const Pu=new me,ys=new C,gl=new C;class Du extends ml{constructor(){super(new Lt(90,1,.5,500));this._frameExtents=new j(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ys.setFromMatrixPosition(e.matrixWorld),n.position.copy(ys),gl.copy(n.position),gl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(gl),n.updateMatrixWorld(),i.makeTranslation(-ys.x,-ys.y,-ys.z),Pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pu)}}Du.prototype.isPointLightShadow=!0;class Iu extends pn{constructor(e,t,n=0,i=1){super(e,t);this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Du}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Iu.prototype.isPointLight=!0;class Fu extends ml{constructor(){super(new dr(-5,5,5,-5,.5,500))}}Fu.prototype.isDirectionalLightShadow=!0;class Nu extends pn{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(He.DefaultUp),this.updateMatrix(),this.target=new He,this.shadow=new Fu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Nu.prototype.isDirectionalLight=!0;class Jv extends pn{constructor(e,t){super(e,t);this.type="AmbientLight"}}Jv.prototype.isAmbientLight=!0;class Kv extends pn{constructor(e,t,n=10,i=10){super(e,t);this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}Kv.prototype.isRectAreaLight=!0;class Ou{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new C)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.282095),t.addScaledVector(s[1],.488603*i),t.addScaledVector(s[2],.488603*r),t.addScaledVector(s[3],.488603*n),t.addScaledVector(s[4],1.092548*(n*i)),t.addScaledVector(s[5],1.092548*(i*r)),t.addScaledVector(s[6],.315392*(3*r*r-1)),t.addScaledVector(s[7],1.092548*(n*r)),t.addScaledVector(s[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.886227),t.addScaledVector(s[1],2*.511664*i),t.addScaledVector(s[2],2*.511664*r),t.addScaledVector(s[3],2*.511664*n),t.addScaledVector(s[4],2*.429043*n*i),t.addScaledVector(s[5],2*.429043*i*r),t.addScaledVector(s[6],.743125*r*r-.247708),t.addScaledVector(s[7],2*.429043*n*r),t.addScaledVector(s[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}Ou.prototype.isSphericalHarmonics3=!0;class _l extends pn{constructor(e=new Ou,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}_l.prototype.isLightProbe=!0;class ei{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Qv extends Ge{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}Qv.prototype.isInstancedBufferGeometry=!0;class Bu extends fn{constructor(e){super(e);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,s=Cr.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Cr.add(e,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){i&&i(l),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}Bu.prototype.isImageBitmapLoader=!0;let Oo;const ey={getContext:function(){return Oo===void 0&&(Oo=new(window.AudioContext||window.webkitAudioContext)),Oo},setContext:function(o){Oo=o}};class ty extends fn{constructor(e){super(e)}load(e,t,n,i){const r=this,s=new vs(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(a){try{const l=a.slice(0);ey.getContext().decodeAudioData(l,function(h){t(h)})}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}}class ny extends _l{constructor(e,t,n=1){super(void 0,n);const i=new ue().set(e),r=new ue().set(t),s=new C(i.r,i.g,i.b),a=new C(r.r,r.g,r.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(s).sub(a).multiplyScalar(c)}}ny.prototype.isHemisphereLightProbe=!0;class iy extends _l{constructor(e,t=1){super(void 0,t);const n=new ue().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}iy.prototype.isAmbientLightProbe=!0;class ry{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Uu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Uu(){return(typeof performance=="undefined"?Date:performance).now()}class sy extends He{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class oy{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,s;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let s=this.cumulativeWeight;if(s===0){for(let a=0;a!==i;++a)n[r+a]=n[a];s=t}else{s+=t;const a=t/s;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=s}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}s>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,s=i;r!==s;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let s=0;s!==r;++s)e[t+s]=e[n+s]}_slerp(e,t,n,i){yt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const s=this._workIndex*r;yt.multiplyQuaternionsFlat(e,s,e,t,e,n),yt.slerpFlat(e,t,e,t,e,s,i)}_lerp(e,t,n,i,r){const s=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*s+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let s=0;s!==r;++s){const a=t+s;e[a]=e[a]+e[n+s]*i}}}const xl="\\[\\]\\.:\\/",ay=new RegExp("["+xl+"]","g"),vl="[^"+xl+"]",ly="[^"+xl.replace("\\.","")+"]",cy=/((?:WC+[\/:])*)/.source.replace("WC",vl),hy=/(WCOD+)?/.source.replace("WCOD",ly),uy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vl),dy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vl),fy=new RegExp("^"+cy+hy+uy+dy+"$"),py=["material","materials","bones"];class my{constructor(e,t,n){const i=n||Ve.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ve{constructor(e,t,n){this.path=t,this.parsedPath=n||Ve.parseTrackName(t),this.node=Ve.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ve.Composite(e,t,n):new Ve(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ay,"")}static parseTrackName(e){const t=fy.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);py.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let s=0;s<r.length;s++){const a=r[s];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ve.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[i];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ve.Composite=my;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class gy{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,s=r.length,a=new Array(s),l={endingStart:Yi,endingEnd:Yi};for(let c=0;c!==s;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=$p,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,s=r/i,a=i/r;e.warp(1,s,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,s=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/s,c[1]=t/s,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;if(l<0||n===0)return;this._startTime=null,t=n*l}t*=this._updateTimeScale(e);const s=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Oc:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(s),c[h].accumulateAdditive(a);break;case la:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(s),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(t*=n.evaluate(e)[0],e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const s=n===Zp;if(e===0)return r===-1?i:s&&(r&1)==1?t-i:i;if(n===Yp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(s&&(r&1)==1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=$i,i.endingEnd=$i):(e?i.endingStart=this.zeroSlopeAtStart?$i:Yi:i.endingStart=Xs,t?i.endingEnd=this.zeroSlopeAtEnd?$i:Yi:i.endingEnd=Xs)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let s=this._weightInterpolant;s===null&&(s=i._lendControlInterpolant(),this._weightInterpolant=s);const a=s.parameterPositions,l=s.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}class _y extends Hn{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,s=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)s[u]=m;else{if(m=s[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;m=new oy(Ve.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),s[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++==0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount==0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let s=r[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=s;else{const a=s.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),s.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,s=this._actionsByClip,a=s[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete s[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount==0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let s=i[t];s===void 0&&(s={},i[t]=s),s[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,s=this._bindingsByRootAndName,a=s[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete s[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Mu(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let s=typeof e=="string"?pl.findByName(i,e):e;const a=s!==null?s.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(s!==null?n=s.blendMode:n=la),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const h=new gy(this,s,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?pl.findByName(n,e):e,s=r?r.uuid:e,a=this._actionsByClip[s];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),s=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,s);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const s=r.knownActions;for(let a=0,l=s.length;a!==l;++a){const c=s[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const s in n){const a=n[s].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const s in r){const a=r[s];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}_y.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class xy extends _r{constructor(e,t,n=1){super(e,t);this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}xy.prototype.isInstancedInterleavedBuffer=!0;class bM{constructor(e,t,n=0,i=1/0){this.ray=new Mi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ba,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return yl(e,this,n,t),n.sort(ku),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)yl(e[i],this,n,t);return n.sort(ku),n}}function ku(o,e){return o.distance-e.distance}function yl(o,e,t,n){if(o.layers.test(e.layers)&&o.raycast(e,t),n===!0){const i=o.children;for(let r=0,s=i.length;r<s;r++)yl(i[r],e,t,!0)}}class zu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){const e=1e-6;return this.phi=Math.max(e,Math.min(Math.PI-e,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ti=new C,Bo=new me,bl=new me;class vy extends Ao{constructor(e){const t=Hu(e),n=new Ge,i=[],r=[],s=new ue(0,0,1),a=new ue(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(s.r,s.g,s.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new Je(i,3)),n.setAttribute("color",new Je(r,3));const l=new wr({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");bl.copy(this.root.matrixWorld).invert();for(let r=0,s=0;r<t.length;r++){const a=t[r];a.parent&&a.parent.isBone&&(Bo.multiplyMatrices(bl,a.matrixWorld),ti.setFromMatrixPosition(Bo),i.setXYZ(s,ti.x,ti.y,ti.z),Bo.multiplyMatrices(bl,a.parent.matrixWorld),ti.setFromMatrixPosition(Bo),i.setXYZ(s+1,ti.x,ti.y,ti.z),s+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Hu(o){const e=[];o&&o.isBone&&e.push(o);for(let t=0;t<o.children.length;t++)e.push.apply(e,Hu(o.children[t]));return e}class yy extends Ao{constructor(e=10,t=10,n=4473924,i=8947848){n=new ue(n),i=new ue(i);const r=t/2,s=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,m=-a;d<=t;d++,m+=s){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const _=d===r?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const h=new Ge;h.setAttribute("position",new Je(l,3)),h.setAttribute("color",new Je(c,3));const u=new wr({vertexColors:!0,toneMapped:!1});super(h,u);this.type="GridHelper"}}const by=new Float32Array(1);new Int32Array(by.buffer);jt.create=function(o,e){return console.log("THREE.Curve.create() has been deprecated"),o.prototype=Object.create(jt.prototype),o.prototype.constructor=o,o.prototype.getPoint=e,o};hl.prototype.fromPoints=function(o){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(o)};yy.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};vy.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};fn.prototype.extractUrlBase=function(o){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),ei.extractUrlBase(o)};fn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Wt.prototype.center=function(o){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(o)};Wt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Wt.prototype.isIntersectionBox=function(o){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(o)};Wt.prototype.isIntersectionSphere=function(o){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(o)};Wt.prototype.size=function(o){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(o)};bi.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};mo.prototype.setFromMatrix=function(o){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(o)};xt.prototype.flattenToArrayOffset=function(o,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(o,e)};xt.prototype.multiplyVector3=function(o){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),o.applyMatrix3(this)};xt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};xt.prototype.applyToBufferAttribute=function(o){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),o.applyMatrix3(this)};xt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};xt.prototype.getInverse=function(o){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(o).invert()};me.prototype.extractPosition=function(o){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(o)};me.prototype.flattenToArrayOffset=function(o,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(o,e)};me.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new C().setFromMatrixColumn(this,3)};me.prototype.setRotationFromQuaternion=function(o){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(o)};me.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};me.prototype.multiplyVector3=function(o){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};me.prototype.multiplyVector4=function(o){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};me.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};me.prototype.rotateAxis=function(o){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),o.transformDirection(this)};me.prototype.crossVector=function(o){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};me.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};me.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};me.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};me.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};me.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};me.prototype.applyToBufferAttribute=function(o){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),o.applyMatrix4(this)};me.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};me.prototype.makeFrustum=function(o,e,t,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(o,e,n,t,i,r)};me.prototype.getInverse=function(o){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(o).invert()};Rn.prototype.isIntersectionLine=function(o){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(o)};yt.prototype.multiplyVector3=function(o){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),o.applyQuaternion(this)};yt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Mi.prototype.isIntersectionBox=function(o){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(o)};Mi.prototype.isIntersectionPlane=function(o){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(o)};Mi.prototype.isIntersectionSphere=function(o){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(o)};lt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};lt.prototype.barycoordFromPoint=function(o,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(o,e)};lt.prototype.midpoint=function(o){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(o)};lt.prototypenormal=function(o){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(o)};lt.prototype.plane=function(o){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(o)};lt.barycoordFromPoint=function(o,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),lt.getBarycoord(o,e,t,n,i)};lt.normal=function(o,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),lt.getNormal(o,e,t,n)};ds.prototype.extractAllPoints=function(o){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(o)};ds.prototype.extrude=function(o){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Tr(this,o)};ds.prototype.makeGeometry=function(o){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new fl(this,o)};j.prototype.fromAttribute=function(o,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(o,e,t)};j.prototype.distanceToManhattan=function(o){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(o)};j.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};C.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};C.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};C.prototype.getPositionFromMatrix=function(o){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(o)};C.prototype.getScaleFromMatrix=function(o){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(o)};C.prototype.getColumnFromMatrix=function(o,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,o)};C.prototype.applyProjection=function(o){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(o)};C.prototype.fromAttribute=function(o,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(o,e,t)};C.prototype.distanceToManhattan=function(o){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(o)};C.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};qe.prototype.fromAttribute=function(o,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(o,e,t)};qe.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};He.prototype.getChildByName=function(o){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(o)};He.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};He.prototype.translate=function(o,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,o)};He.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};He.prototype.applyMatrix=function(o){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(o)};Object.defineProperties(He.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(o){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=o}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});wt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(wt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Jp},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Za.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Lt.prototype.setLens=function(o,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(o)};Object.defineProperties(pn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(o){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=o}},shadowCameraLeft:{set:function(o){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=o}},shadowCameraRight:{set:function(o){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=o}},shadowCameraTop:{set:function(o){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=o}},shadowCameraBottom:{set:function(o){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=o}},shadowCameraNear:{set:function(o){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=o}},shadowCameraFar:{set:function(o){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=o}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(o){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=o}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(o){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=o}},shadowMapHeight:{set:function(o){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=o}}});Object.defineProperties(Qe.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===js},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(js)}}});Qe.prototype.setDynamic=function(o){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(o===!0?js:Yr),this};Qe.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Qe.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ge.prototype.addIndex=function(o){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(o)};Ge.prototype.addAttribute=function(o,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(o,new Qe(arguments[1],arguments[2]))):o==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(o,e)};Ge.prototype.addDrawCall=function(o,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(o,e)};Ge.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Ge.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Ge.prototype.removeAttribute=function(o){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(o)};Ge.prototype.applyMatrix=function(o){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(o)};Object.defineProperties(Ge.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});_r.prototype.setDynamic=function(o){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(o===!0?js:Yr),this};_r.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Tr.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Tr.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Tr.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Hh.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(dt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new ue}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(o){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=o===_c}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(o){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=o}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Dt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(o){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=o}}});je.prototype.clearTarget=function(o,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(o),this.clear(e,t,n)};je.prototype.animate=function(o){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(o)};je.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};je.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};je.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};je.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};je.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};je.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};je.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};je.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};je.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};je.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};je.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};je.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};je.prototype.enableScissorTest=function(o){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(o)};je.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};je.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};je.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};je.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};je.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};je.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};je.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};je.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};je.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};je.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(je.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(o){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=o}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(o){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=o}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(o){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=o===!0?wn:en}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(kh.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(vt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(o){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=o}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(o){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=o}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(o){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=o}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(o){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=o}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(o){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=o}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(o){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=o}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(o){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=o}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(o){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=o}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(o){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=o}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(o){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=o}}});sy.prototype.load=function(o){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new ty().load(o,function(n){e.setBuffer(n)}),this};Oa.prototype.updateCubeMap=function(o,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(o,e)};Oa.prototype.clear=function(o,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(o,e,t,n)};Ji.crossOrigin=void 0;Ji.loadTexture=function(o,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Tu;i.setCrossOrigin(this.crossOrigin);const r=i.load(o,t,void 0,n);return e&&(r.mapping=e),r};Ji.loadTextureCube=function(o,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new $v;i.setCrossOrigin(this.crossOrigin);const r=i.load(o,t,void 0,n);return e&&(r.mapping=e),r};Ji.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Ji.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qo);function In(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Vu(o,e){o.prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e}/*!
 * GSAP 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var zt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Lr={duration:.5,overwrite:!1,delay:0},Ml,qt=1e8,Ye=1/qt,wl=Math.PI*2,My=wl/4,wy=0,Gu=Math.sqrt,Sy=Math.cos,Ty=Math.sin,pt=function(e){return typeof e=="string"},mt=function(e){return typeof e=="function"},Fn=function(e){return typeof e=="number"},Sl=function(e){return typeof e=="undefined"},Nn=function(e){return typeof e=="object"},It=function(e){return e!==!1},Wu=function(){return typeof window!="undefined"},Uo=function(e){return mt(e)||pt(e)},Xu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Et=Array.isArray,Tl=/(?:-?\.?\d|\.)+/gi,ju=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Rr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,El=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qu=/[+-]=-?[.\d]+/,Yu=/[^,'"\[\]\s]+/gi,Ey=/[\d.+\-=]+(?:e[-+]\d*)*/i,tt,mn,Al,Cl,Ht={},ko={},$u,Zu=function(e){return(ko=Pr(e,Ht))&&_n},Ll=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},zo=function(e,t){return!t&&console.warn(e)},Ju=function(e,t){return e&&(Ht[e]=t)&&ko&&(ko[e]=t)||Ht},bs=function(){return 0},Rl={},ni=[],Pl={},Ku,Vt={},Dl={},Qu=30,Ho=[],Il="",Fl=function(e){var t=e[0],n,i;if(Nn(t)||mt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ho.length;i--&&!Ho[i].targetTest(t););n=Ho[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Ed(e[i],n)))||e.splice(i,1);return e},Ai=function(e){return e._gsap||Fl(Zt(e))[0]._gsap},ed=function(e,t,n){return(n=e[t])&&mt(n)?e[t]():Sl(n)&&e.getAttribute&&e.getAttribute(t)||n},Ft=function(e,t){return(e=e.split(",")).forEach(t)||e},ct=function(e){return Math.round(e*1e5)/1e5||0},At=function(e){return Math.round(e*1e7)/1e7||0},Ay=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Vo=function(){var e=ni.length,t=ni.slice(0),n,i;for(Pl={},ni.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},td=function(e,t,n,i){ni.length&&Vo(),e.render(t,n,i),ni.length&&Vo()},nd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Yu).length<2?t:pt(e)?e.trim():e},id=function(e){return e},Yt=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Cy=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Pr=function(e,t){for(var n in t)e[n]=t[n];return e},rd=function o(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Nn(t[n])?o(e[n]||(e[n]={}),t[n]):t[n]);return e},Go=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ms=function(e){var t=e.parent||tt,n=e.keyframes?Cy(Et(e.keyframes)):Yt;if(It(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Ly=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Ry=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e[i],a;if(r)for(a=t[r];s&&s[r]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=s,t.parent=t._dp=e,t},Wo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,s=t._next;r?r._next=s:e[n]===t&&(e[n]=s),s?s._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},On=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Ci=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Py=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Dy=function o(e){return!e||e._ts&&o(e.parent)},sd=function(e){return e._repeat?Dr(e._tTime,e=e.duration()+e._rDelay)*e:0},Dr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Xo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},jo=function(e){return e._end=At(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ye)||0))},od=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=At(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),jo(e),n._dirty||Ci(n,e)),e},ad=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Xo(e.rawTime(),t),(!t._dur||Ss(0,t.totalDuration(),n)-t._tTime>Ye)&&t.render(n,!0)),Ci(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ye}},gn=function(e,t,n,i){return t.parent&&On(t),t._start=At((Fn(n)?n:n||e!==tt?$t(e,n,t):e._time)+t._delay),t._end=At(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ry(e,t,"_first","_last",e._sort?"_start":0),Nl(t)||(e._recent=t),i||ad(e,t),e},ld=function(e,t){return(Ht.ScrollTrigger||Ll("scrollTrigger",t))&&Ht.ScrollTrigger.create(t,e)},cd=function(e,t,n,i){if(tb(e,t),!e._initted)return 1;if(!n&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ku!==Kt.frame)return ni.push(e),e._lazy=[t,i],1},Iy=function o(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||o(t))},Nl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Fy=function(e,t,n,i){var r=e.ratio,s=t<0||!t&&(!e._start&&Iy(e)&&!(!e._initted&&Nl(e))||(e._ts<0||e._dp._ts<0)&&!Nl(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=Ss(0,e._tDur,t),h=Dr(l,a),e._yoyo&&h&1&&(s=1-s),h!==Dr(e._tTime,a)&&(r=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==r||i||e._zTime===Ye||!t&&e._zTime){if(!e._initted&&cd(e,t,i,n))return;for(u=e._zTime,e._zTime=t||(n?Ye:0),n||(n=t&&!u),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=l,c=e._pt;c;)c.r(s,c.d),c=c._next;e._startAt&&t<0&&e._startAt.render(t,!0,!0),e._onUpdate&&!n&&Jt(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Jt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&On(e,1),n||(Jt(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Ny=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ir=function(e,t,n,i){var r=e._repeat,s=At(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=s/e._dur),e._dur=s,e._tDur=r?r<0?1e10:At(s*(r+1)+e._rDelay*r):s,a>0&&!i?od(e,e._tTime=e._tDur*a):e.parent&&jo(e),n||Ci(e.parent,e),e},hd=function(e){return e instanceof Ot?Ci(e):Ir(e,e._dur)},Oy={_start:0,endTime:bs,totalDuration:bs},$t=function o(e,t,n){var i=e.labels,r=e._recent||Oy,s=e.duration()>=qt?r.endTime(!1):e._dur,a,l,c;return pt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=s),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Et(n)?n[0]:n).totalDuration()),a>1?o(e,t.substr(0,a-1),n)+l:s+l)):t==null?s:+t},ws=function(e,t,n){var i=Fn(t[1]),r=(i?2:1)+(e<2?0:1),s=t[r],a,l;if(i&&(s.duration=t[1]),s.parent=n,e){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=It(l.vars.inherit)&&l.parent;s.immediateRender=It(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[r-1]}return new gt(t[0],s,t[r+1])},ii=function(e,t){return e||e===0?t(e):t},Ss=function(e,t,n){return n<e?e:n>t?t:n},Nt=function(e,t){return!pt(e)||!(t=Ey.exec(e))?"":e.substr(t.index+t[0].length)},By=function(e,t,n){return ii(n,function(i){return Ss(e,t,i)})},Ol=[].slice,ud=function(e,t){return e&&Nn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Nn(e[0]))&&!e.nodeType&&e!==mn},Uy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return pt(i)&&!t||ud(i,1)?(r=n).push.apply(r,Zt(i)):n.push(i)})||n},Zt=function(e,t,n){return pt(e)&&!n&&(Al||!Nr())?Ol.call((t||Cl).querySelectorAll(e),0):Et(e)?Uy(e,n):ud(e)?Ol.call(e,0):e?[e]:[]},ky=function(e){return e=Zt(e)[0]||zo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Zt(t,n.querySelectorAll?n:n===e?zo("Invalid scope")||Cl.createElement("div"):e)}},dd=function(e){return e.sort(function(){return .5-Math.random()})},fd=function(e){if(mt(e))return e;var t=Nn(e)?e:{each:e},n=Li(t.ease),i=t.from||0,r=parseFloat(t.base)||0,s={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return pt(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,m){var _=(m||t).length,x=s[_],p,g,b,v,y,E,L,N,B;if(!x){if(B=t.grid==="auto"?0:(t.grid||[1,qt])[1],!B){for(L=-qt;L<(L=m[B++].getBoundingClientRect().left)&&B<_;);B--}for(x=s[_]=[],p=l?Math.min(B,_)*h-.5:i%B,g=B===qt?0:l?_*u/B-.5:i/B|0,L=0,N=qt,E=0;E<_;E++)b=E%B-p,v=g-(E/B|0),x[E]=y=c?Math.abs(c==="y"?v:b):Gu(b*b+v*v),y>L&&(L=y),y<N&&(N=y);i==="random"&&dd(x),x.max=L-N,x.min=N,x.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(B>_?_-1:c?c==="y"?_/B:B:Math.max(B,_/B))||0)*(i==="edges"?-1:1),x.b=_<0?r-_:r,x.u=Nt(t.amount||t.each)||0,n=n&&_<0?wd(n):n}return _=(x[d]-x.min)/x.max||0,At(x.b+(n?n(_):_)*x.v)+x.u}},Bl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Math.round(parseFloat(n)/e)*e*t;return(i-i%1)/t+(Fn(n)?0:Nt(n))}},pd=function(e,t){var n=Et(e),i,r;return!n&&Nn(e)&&(i=n=e.radius||qt,e.values?(e=Zt(e.values),(r=!Fn(e[0]))&&(i*=i)):e=Bl(e.increment)),ii(t,n?mt(e)?function(s){return r=e(s),Math.abs(r-s)<=i?r:s}:function(s){for(var a=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=qt,h=0,u=e.length,d,f;u--;)r?(d=e[u].x-a,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?e[h]:s,r||h===s||Fn(s)?h:h+Nt(s)}:Bl(e))},md=function(e,t,n,i){return ii(Et(e)?!t:n===!0?!!(n=0):!i,function(){return Et(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},zy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,s){return s(r)},i)}},Hy=function(e,t){return function(n){return e(parseFloat(n))+(t||Nt(n))}},Vy=function(e,t,n){return _d(e,t,0,1,n)},gd=function(e,t,n){return ii(n,function(i){return e[~~t(i)]})},Gy=function o(e,t,n){var i=t-e;return Et(e)?gd(e,o(0,e.length),t):ii(n,function(r){return(i+(r-e)%i)%i+e})},Wy=function o(e,t,n){var i=t-e,r=i*2;return Et(e)?gd(e,o(0,e.length-1),t):ii(n,function(s){return s=(r+(s-e)%r)%r||0,e+(s>i?r-s:s)})},Ts=function(e){for(var t=0,n="",i,r,s,a;~(i=e.indexOf("random(",t));)s=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,s-i-7).match(a?Yu:Tl),n+=e.substr(t,i-t)+md(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=s+1;return n+e.substr(t,e.length-t)},_d=function(e,t,n,i,r){var s=t-e,a=i-n;return ii(r,function(l){return n+((l-e)/s*a||0)})},Xy=function o(e,t,n,i){var r=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!r){var s=pt(e),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),s)e={p:e},t={p:t};else if(Et(e)&&!Et(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(o(e[c-1],e[c]));u--,r=function(m){m*=u;var _=Math.min(d,~~m);return h[_](m-_)},n=t}else i||(e=Pr(Et(e)?[]:{},e));if(!h){for(l in t)Hl.call(a,e,l,"get",t[l]);r=function(m){return Wl(m,a)||(s?e.p:e)}}}return ii(n,r)},xd=function(e,t,n){var i=e.labels,r=qt,s,a,l;for(s in i)a=i[s]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=s,r=a);return l},Jt=function(e,t,n){var i=e.vars,r=i[t],s,a;if(!!r)return s=i[t+"Params"],a=i.callbackScope||e,n&&ni.length&&Vo(),s?r.apply(a,s):r.call(a)},Es=function(e){return On(e),e.scrollTrigger&&e.scrollTrigger.kill(!1),e.progress()<1&&Jt(e,"onInterrupt"),e},Fr,jy=function(e){e=!e.name&&e.default||e;var t=e.name,n=mt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:bs,render:Wl,add:Hl,kill:lb,modifier:ab,rawVars:0},s={targetTest:0,get:0,getSetter:Gl,aliases:{},register:0};if(Nr(),e!==i){if(Vt[t])return;Yt(i,Yt(Go(e,r),s)),Pr(i.prototype,Pr(r,Go(e,s))),Vt[i.prop=t]=i,e.targetTest&&(Ho.push(i),Rl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ju(t,i),e.register&&e.register(_n,i,Bt)},$e=255,As={aqua:[0,$e,$e],lime:[0,$e,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,$e],navy:[0,0,128],white:[$e,$e,$e],olive:[128,128,0],yellow:[$e,$e,0],orange:[$e,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[$e,0,0],pink:[$e,192,203],cyan:[0,$e,$e],transparent:[$e,$e,$e,0]},Ul=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*$e+.5|0},vd=function(e,t,n){var i=e?Fn(e)?[e>>16,e>>8&$e,e&$e]:0:As.black,r,s,a,l,c,h,u,d,f,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),As[e])i=As[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+r+r+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&$e,i&$e,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&$e,e&$e]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(Tl),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,s=h<=.5?h*(c+1):h+c-h*c,r=h*2-s,i.length>3&&(i[3]*=1),i[0]=Ul(l+1/3,r,s),i[1]=Ul(l,r,s),i[2]=Ul(l-1/3,r,s);else if(~e.indexOf("="))return i=e.match(ju),n&&i.length<4&&(i[3]=1),i}else i=e.match(Tl)||As.transparent;i=i.map(Number)}return t&&!m&&(r=i[0]/$e,s=i[1]/$e,a=i[2]/$e,u=Math.max(r,s,a),d=Math.min(r,s,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===r?(s-a)/f+(s<a?6:0):u===s?(a-r)/f+2:(r-s)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},yd=function(e){var t=[],n=[],i=-1;return e.split(ri).forEach(function(r){var s=r.match(Rr)||[];t.push.apply(t,s),n.push(i+=s.length+1)}),t.c=n,t},bd=function(e,t,n){var i="",r=(e+i).match(ri),s=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return e;if(r=r.map(function(d){return(d=vd(d,t,1))&&s+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=yd(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(ri,"1").split(Rr),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||s+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=e.split(ri),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},ri=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in As)o+="|"+e+"\\b";return new RegExp(o+")","gi")}(),qy=/hsl[a]?\(/,Md=function(e){var t=e.join(" "),n;if(ri.lastIndex=0,ri.test(t))return n=qy.test(t),e[1]=bd(e[1],n),e[0]=bd(e[0],n,yd(e[1])),!0},qo,Kt=function(){var o=Date.now,e=500,t=33,n=o(),i=n,r=1e3/240,s=r,a=[],l,c,h,u,d,f,m=function _(x){var p=o()-i,g=x===!0,b,v,y,E;if(p>e&&(n+=p-t),i+=p,y=i-n,b=y-s,(b>0||g)&&(E=++u.frame,d=y-u.time*1e3,u.time=y=y/1e3,s+=b+(b>=r?4:r-b),v=1),g||(l=c(_)),v)for(f=0;f<a.length;f++)a[f](y,d,E,x)};return u={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(x){return d/(1e3/(x||60))},wake:function(){$u&&(!Al&&Wu()&&(mn=Al=window,Cl=mn.document||{},Ht.gsap=_n,(mn.gsapVersions||(mn.gsapVersions=[])).push(_n.version),Zu(ko||mn.GreenSockGlobals||!mn.gsap&&mn||{}),h=mn.requestAnimationFrame),l&&u.sleep(),c=h||function(x){return setTimeout(x,s-u.time*1e3+1|0)},qo=1,m(2))},sleep:function(){(h?mn.cancelAnimationFrame:clearTimeout)(l),qo=0,c=bs},lagSmoothing:function(x,p){e=x||1/Ye,t=Math.min(p,e,0)},fps:function(x){r=1e3/(x||240),s=u.time*1e3+r},add:function(x){a.indexOf(x)<0&&a.push(x),Nr()},remove:function(x,p){~(p=a.indexOf(x))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u}(),Nr=function(){return!qo&&Kt.wake()},Oe={},Yy=/^[\d.\-M][\d.\-,\s]/,$y=/["']/g,Zy=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,s=n.length,a,l,c;r<s;r++)l=n[r],a=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace($y,"").trim():+c,i=l.substr(a+1).trim();return t},Jy=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Ky=function(e){var t=(e+"").split("("),n=Oe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Zy(t[1])]:Jy(e).split(",").map(nd)):Oe._CE&&Yy.test(e)?Oe._CE("",e):n},wd=function(e){return function(t){return 1-e(1-t)}},Sd=function o(e,t){for(var n=e._first,i;n;)n instanceof Ot?o(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?o(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Li=function(e,t){return e&&(mt(e)?e:Oe[e]||Ky(e))||t},Ri=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},s;return Ft(e,function(a){Oe[a]=Ht[a]=r,Oe[s=a.toLowerCase()]=n;for(var l in r)Oe[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Oe[a+"."+l]=r[l]}),r},Td=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},kl=function o(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),s=r/wl*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Ty((h-s)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Td(a);return r=wl/r,l.config=function(c,h){return o(e,c,h)},l},zl=function o(e,t){t===void 0&&(t=1.70158);var n=function(s){return s?--s*s*((t+1)*s+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Td(n);return i.config=function(r){return o(e,r)},i};Ft("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,e){var t=e<5?e+1:e;Ri(o+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Oe.Linear.easeNone=Oe.none=Oe.Linear.easeIn;Ri("Elastic",kl("in"),kl("out"),kl());(function(o,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?o*a*a:a<n?o*Math.pow(a-1.5/e,2)+.75:a<i?o*(a-=2.25/e)*a+.9375:o*Math.pow(a-2.625/e,2)+.984375};Ri("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);Ri("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Ri("Circ",function(o){return-(Gu(1-o*o)-1)});Ri("Sine",function(o){return o===1?1:-Sy(o*My)+1});Ri("Back",zl("in"),zl("out"),zl());Oe.SteppedEase=Oe.steps=Ht.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,s=1-Ye;return function(a){return((i*Ss(0,s,a)|0)+r)*n}}};Lr.ease=Oe["quad.out"];Ft("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Il+=o+","+o+"Params,"});var Ed=function(e,t){this.id=wy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ed,this.set=t?t.getSetter:Gl},Cs=function(){function o(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ir(this,+t.duration,1,1),this.data=t.data,qo||Kt.wake()}var e=o.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ir(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Nr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(od(this,n),!r._dp||r.parent||ad(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&gn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ye||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),td(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+sd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+sd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Dr(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ye?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Xo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ye?0:this._rts,Py(this.totalTime(Ss(-this._delay,this._tDur,i),!0)),jo(this),this},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Nr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ye&&(this._tTime-=Ye)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&gn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(It(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Xo(i.rawTime(n),this):this._tTime:this._tTime},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,hd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,hd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime($t(this,n),It(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,It(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ye:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ye,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ye)},e.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},e.then=function(n){var i=this;return new Promise(function(r){var s=mt(n)?n:id,a=function(){var c=i.then;i.then=null,mt(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),r(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Es(this)},o}();Yt(Cs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ye,_prom:0,_ps:!1,_rts:1});var Ot=function(o){Vu(e,o);function e(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=It(n.sortChildren),tt&&gn(n.parent||tt,In(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&ld(In(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,s){return ws(0,arguments,this),this},t.from=function(i,r,s){return ws(1,arguments,this),this},t.fromTo=function(i,r,s,a){return ws(2,arguments,this),this},t.set=function(i,r,s){return r.duration=0,r.parent=this,Ms(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new gt(i,r,$t(this,s),1),this},t.call=function(i,r,s){return gn(this,gt.delayedCall(0,i,r),s)},t.staggerTo=function(i,r,s,a,l,c,h){return s.duration=r,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=h,s.parent=this,new gt(i,s,$t(this,l)),this},t.staggerFrom=function(i,r,s,a,l,c,h){return s.runBackwards=1,Ms(s).immediateRender=It(s.immediateRender),this.staggerTo(i,r,s,a,l,c,h)},t.staggerFromTo=function(i,r,s,a,l,c,h,u){return a.startAt=s,Ms(a).immediateRender=It(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},t.render=function(i,r,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:At(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,m,_,x,p,g,b,v,y,E,L;if(this!==tt&&h>l&&i>=0&&(h=l),h!==this._tTime||s||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,v=this._start,b=this._ts,p=!b,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,x=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(x*100+i,r,s);if(d=At(h%x),h===l?(_=this._repeat,d=c):(_=~~(h/x),_&&_===h/x&&(d=c,_--),d>c&&(d=c)),y=Dr(this._tTime,x),!a&&this._tTime&&y!==_&&(y=_),E&&_&1&&(d=c-d,L=1),_!==y&&!this._lock){var N=E&&y&1,B=N===(E&&_&1);if(_<y&&(N=!N),a=N?0:c,this._lock=1,this.render(a||(L?0:At(_*x)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Jt(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,B&&(this._lock=2,a=N?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Sd(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=Ny(this,At(a),At(d)),g&&(h-=d-(d=g._start))),this._tTime=h,this._time=d,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&(Jt(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||d>=f._start)&&f._ts&&g!==f){if(f.parent!==this)return this.render(i,r,s);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,s),d!==this._time||!this._ts&&!p){g=0,m&&(h+=this._zTime=-Ye);break}}f=m}else{f=this._last;for(var H=i<0?i:d;f;){if(m=f._prev,(f._act||H<=f._end)&&f._ts&&g!==f){if(f.parent!==this)return this.render(i,r,s);if(f.render(f._ts>0?(H-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(H-f._start)*f._ts,r,s),d!==this._time||!this._ts&&!p){g=0,m&&(h+=this._zTime=H?-Ye:Ye);break}}f=m}}if(g&&!r&&(this.pause(),g.render(d>=a?0:-Ye)._zTime=d>=a?1:-1,this._ts))return this._start=v,jo(this),this.render(i,r,s);this._onUpdate&&!r&&Jt(this,"onUpdate",!0),(h===l&&l>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&On(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(Jt(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var s=this;if(Fn(r)||(r=$t(this,r,i)),!(i instanceof Cs)){if(Et(i))return i.forEach(function(a){return s.add(a,r)}),this;if(pt(i))return this.addLabel(i,r);if(mt(i))i=gt.delayedCall(0,i);else return this}return this!==i?gn(this,i,r):this},t.getChildren=function(i,r,s,a){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=-qt);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof gt?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},t.remove=function(i){return pt(i)?this.removeLabel(i):mt(i)?this.killTweensOf(i):(Wo(this,i),i===this._recent&&(this._recent=this._last),Ci(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=At(Kt.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=$t(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,s){var a=gt.delayedCall(0,r||bs,s);return a.data="isPause",this._hasPause=1,gn(this,a,$t(this,i))},t.removePause=function(i){var r=this._first;for(i=$t(this,i);r;)r._start===i&&r.data==="isPause"&&On(r),r=r._next},t.killTweensOf=function(i,r,s){for(var a=this.getTweensOf(i,s),l=a.length;l--;)si!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var s=[],a=Zt(i),l=this._first,c=Fn(r),h;l;)l instanceof gt?Ay(l._targets,a)&&(c?(!si||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(h=l.getTweensOf(a,r)).length&&s.push.apply(s,h),l=l._next;return s},t.tweenTo=function(i,r){r=r||{};var s=this,a=$t(s,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,m=gt.to(s,Yt({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||Ye,onStart:function(){if(s.pause(),!f){var x=r.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());m._dur!==x&&Ir(m,x,0,1).render(m._time,!0,!0),f=1}h&&h.apply(m,u||[])}},r));return d?m.render(0):m},t.tweenFromTo=function(i,r,s){return this.tweenTo(r,Yt({startAt:{time:$t(this,i)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),xd(this,$t(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),xd(this,$t(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ye)},t.shiftChildren=function(i,r,s){s===void 0&&(s=0);for(var a=this._first,l=this.labels,c;a;)a._start>=s&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return Ci(this)},t.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return o.prototype.invalidate.call(this)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ci(this)},t.totalDuration=function(i){var r=0,s=this,a=s._last,l=qt,c,h,u;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(u=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,gn(s,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!s._dp||u&&u.smoothChildTiming)&&(s._start+=h/s._ts,s._time-=h,s._tTime-=h),s.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Ir(s,s===tt&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(i){if(tt._ts&&(td(tt,Xo(i,tt)),Ku=Kt.frame),Kt.frame>=Qu){Qu+=zt.autoSleep||120;var r=tt._first;if((!r||!r._ts)&&zt.autoSleep&&Kt._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Kt.sleep()}}},e}(Cs);Yt(Ot.prototype,{_lock:0,_hasPause:0,_forcing:0});var Qy=function(e,t,n,i,r,s,a){var l=new Bt(this._pt,e,t,0,1,Dd,null,r),c=0,h=0,u,d,f,m,_,x,p,g;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ts(i)),s&&(g=[n,i],s(g,e,t),n=g[0],i=g[1]),d=n.match(El)||[];u=El.exec(i);)m=u[0],_=i.substring(c,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==d[h++]&&(x=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:x,c:m.charAt(1)==="="?parseFloat(m.substr(2))*(m.charAt(0)==="-"?-1:1):parseFloat(m)-x,m:f&&f<4?Math.round:0},c=El.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(qu.test(i)||p)&&(l.e=0),this._pt=l,l},Hl=function(e,t,n,i,r,s,a,l,c){mt(i)&&(i=i(r||0,e,s));var h=e[t],u=n!=="get"?n:mt(h)?c?e[t.indexOf("set")||!mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=mt(h)?c?rb:Rd:Vl,f;if(pt(i)&&(~i.indexOf("random(")&&(i=Ts(i)),i.charAt(1)==="="&&(f=parseFloat(u)+parseFloat(i.substr(2))*(i.charAt(0)==="-"?-1:1)+(Nt(u)||0),(f||f===0)&&(i=f))),u!==i)return!isNaN(u*i)&&i!==""?(f=new Bt(this._pt,e,t,+u||0,i-(u||0),typeof h=="boolean"?ob:Pd,0,d),c&&(f.fp=c),a&&f.modifier(a,this,e),this._pt=f):(!h&&!(t in e)&&Ll(t,i),Qy.call(this,e,t,u,i,d,l||zt.stringFilter,c))},eb=function(e,t,n,i,r){if(mt(e)&&(e=Ls(e,r,t,n,i)),!Nn(e)||e.style&&e.nodeType||Et(e)||Xu(e))return pt(e)?Ls(e,r,t,n,i):e;var s={},a;for(a in e)s[a]=Ls(e[a],r,t,n,i);return s},Ad=function(e,t,n,i,r,s){var a,l,c,h;if(Vt[e]&&(a=new Vt[e]).init(r,a.rawVars?t[e]:eb(t[e],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new Bt(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Fr))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},si,tb=function o(e,t){var n=e.vars,i=n.ease,r=n.startAt,s=n.immediateRender,a=n.lazy,l=n.onUpdate,c=n.onUpdateParams,h=n.callbackScope,u=n.runBackwards,d=n.yoyoEase,f=n.keyframes,m=n.autoRevert,_=e._dur,x=e._startAt,p=e._targets,g=e.parent,b=g&&g.data==="nested"?g.parent._targets:p,v=e._overwrite==="auto"&&!Ml,y=e.timeline,E,L,N,B,H,D,w,M,I,O,F,U,te;if(y&&(!f||!i)&&(i="none"),e._ease=Li(i,Lr.ease),e._yEase=d?wd(Li(d===!0?i:d,Lr.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!n.runBackwards,!y||f&&!n.stagger){if(M=p[0]?Ai(p[0]).harness:0,U=M&&n[M.prop],E=Go(n,Rl),x&&On(x.render(-1,!0)),r)if(On(e._startAt=gt.set(p,Yt({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:It(a),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:h,stagger:0},r))),t<0&&!s&&!m&&e._startAt.render(-1,!0),s){if(t>0&&!m&&(e._startAt=0),_&&t<=0){t&&(e._zTime=t);return}}else m===!1&&(e._startAt=0);else if(u&&_){if(x)!m&&(e._startAt=0);else if(t&&(s=!1),N=Yt({overwrite:!1,data:"isFromStart",lazy:s&&It(a),immediateRender:s,stagger:0,parent:g},E),U&&(N[M.prop]=U),On(e._startAt=gt.set(p,N)),t<0&&e._startAt.render(-1,!0),e._zTime=t,!s)o(e._startAt,Ye);else if(!t)return}for(e._pt=0,a=_&&It(a)||a&&!_,L=0;L<p.length;L++){if(H=p[L],w=H._gsap||Fl(p)[L]._gsap,e._ptLookup[L]=O={},Pl[w.id]&&ni.length&&Vo(),F=b===p?L:b.indexOf(H),M&&(I=new M).init(H,U||E,e,F,b)!==!1&&(e._pt=B=new Bt(e._pt,H,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(re){O[re]=B}),I.priority&&(D=1)),!M||U)for(N in E)Vt[N]&&(I=Ad(N,E,e,F,H,b))?I.priority&&(D=1):O[N]=B=Hl.call(e,H,N,"get",E[N],F,b,0,n.stringFilter);e._op&&e._op[L]&&e.kill(H,e._op[L]),v&&e._pt&&(si=e,tt.killTweensOf(H,O,e.globalTime(t)),te=!e.parent,si=0),e._pt&&a&&(Pl[w.id]=1)}D&&Id(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!te,f&&t<=0&&y.render(qt,!0,!0)},nb=function(e,t){var n=e[0]?Ai(e[0]).harness:0,i=n&&n.aliases,r,s,a,l;if(!i)return t;r=Pr({},t);for(s in i)if(s in r)for(l=i[s].split(","),a=l.length;a--;)r[l[a]]=r[s];return r},ib=function(e,t,n,i){var r=t.ease||i||"power1.inOut",s,a;if(Et(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(s in t)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:r})},Ls=function(e,t,n,i,r){return mt(e)?e.call(t,n,i,r):pt(e)&&~e.indexOf("random(")?Ts(e):e},Cd=Il+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Ld={};Ft(Cd+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Ld[o]=1});var gt=function(o){Vu(e,o);function e(n,i,r,s){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=o.call(this,s?i:Ms(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,x=l.scrollTrigger,p=l.yoyoEase,g=i.parent||tt,b=(Et(n)||Xu(n)?Fn(n[0]):"length"in i)?[n]:Zt(n),v,y,E,L,N,B,H,D;if(a._targets=b.length?Fl(b):zo("GSAP target "+n+" not found. https://greensock.com",!zt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||d||Uo(c)||Uo(h)){if(i=a.vars,v=a.timeline=new Ot({data:"nested",defaults:_||{}}),v.kill(),v.parent=v._dp=In(a),v._start=0,d||Uo(c)||Uo(h)){if(L=b.length,H=d&&fd(d),Nn(d))for(N in d)~Cd.indexOf(N)&&(D||(D={}),D[N]=d[N]);for(y=0;y<L;y++)E=Go(i,Ld),E.stagger=0,p&&(E.yoyoEase=p),D&&Pr(E,D),B=b[y],E.duration=+Ls(c,In(a),y,B,b),E.delay=(+Ls(h,In(a),y,B,b)||0)-a._delay,!d&&L===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),v.to(B,E,H?H(y,B,b):0),v._ease=Oe.none;v.duration()?c=h=0:a.timeline=0}else if(m){Ms(Yt(v.vars.defaults,{ease:"none"})),v._ease=Li(m.ease||i.ease||"none");var w=0,M,I,O;if(Et(m))m.forEach(function(F){return v.to(b,F,">")});else{E={};for(N in m)N==="ease"||N==="easeEach"||ib(N,m[N],E,m.easeEach);for(N in E)for(M=E[N].sort(function(F,U){return F.t-U.t}),w=0,y=0;y<M.length;y++)I=M[y],O={ease:I.e,duration:(I.t-(y?M[y-1].t:0))/100*c},O[N]=I.v,v.to(b,O,w),w+=O.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return f===!0&&!Ml&&(si=In(a),tt.killTweensOf(b),si=0),gn(g,In(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!m&&a._start===At(g._time)&&It(u)&&Dy(In(a))&&g.data!=="nested")&&(a._tTime=-Ye,a.render(Math.max(0,-h))),x&&ld(In(a),x),a}var t=e.prototype;return t.render=function(i,r,s){var a=this._time,l=this._tDur,c=this._dur,h=i>l-Ye&&i>=0?l:i<Ye?0:i,u,d,f,m,_,x,p,g,b;if(!c)Fy(this,i,r,s);else if(h!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=i<0){if(u=h,g=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,s);if(u=At(h%m),h===l?(f=this._repeat,u=c):(f=~~(h/m),f&&f===h/m&&(u=c,f--),u>c&&(u=c)),x=this._yoyo&&f&1,x&&(b=this._yEase,u=c-u),_=Dr(this._tTime,m),u===a&&!s&&this._initted)return this;f!==_&&(g&&this._yEase&&Sd(g,x),this.vars.repeatRefresh&&!x&&!this._lock&&(this._lock=s=1,this.render(At(m*f),!0).invalidate()._lock=0))}if(!this._initted){if(cd(this,i<0?i:u,s,r))return this._tTime=0,this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=h,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=p=(b||this._ease)(u/c),this._from&&(this.ratio=p=1-p),u&&!a&&!r&&(Jt(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(p,d.d),d=d._next;g&&g.render(i<0?i:!u&&x?-Ye:g._dur*g._ease(u/this._dur),r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(i<0&&this._startAt&&this._startAt.render(i,!0,s),Jt(this,"onUpdate")),this._repeat&&f!==_&&this.vars.onRepeat&&!r&&this.parent&&Jt(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(i<0&&this._startAt&&!this._onUpdate&&this._startAt.render(i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&On(this,1),!r&&!(i<0&&!a)&&(h||a)&&(Jt(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),o.prototype.invalidate.call(this)},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Es(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,si&&si.vars.overwrite!==!0)._first||Es(this),this.parent&&s!==this.timeline.totalDuration()&&Ir(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=i?Zt(i):a,c=this._ptLookup,h=this._pt,u,d,f,m,_,x,p;if((!r||r==="all")&&Ly(a,l))return r==="all"&&(this._pt=0),Es(this);for(u=this._op=this._op||[],r!=="all"&&(pt(r)&&(_={},Ft(r,function(g){return _[g]=1}),r=_),r=nb(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],r==="all"?(u[p]=r,m=d,f={}):(f=u[p]=u[p]||{},m=r);for(_ in m)x=d&&d[_],x&&((!("kill"in x.d)||x.d.kill(_)===!0)&&Wo(this,x,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Es(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return ws(1,arguments)},e.delayedCall=function(i,r,s,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(i,r,s){return ws(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,s){return tt.killTweensOf(i,r,s)},e}(Cs);Yt(gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ft("staggerTo,staggerFrom,staggerFromTo",function(o){gt[o]=function(){var e=new Ot,t=Ol.call(arguments,0);return t.splice(o==="staggerFromTo"?5:4,0,0),e[o].apply(e,t)}});var Vl=function(e,t,n){return e[t]=n},Rd=function(e,t,n){return e[t](n)},rb=function(e,t,n,i){return e[t](i.fp,n)},sb=function(e,t,n){return e.setAttribute(t,n)},Gl=function(e,t){return mt(e[t])?Rd:Sl(e[t])&&e.setAttribute?sb:Vl},Pd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ob=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Dd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Wl=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},ab=function(e,t,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(e,t,n),r=s},lb=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Wo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},cb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Id=function(e){for(var t=e._pt,n,i,r,s;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:s)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:s=t,t=n}e._pt=r},Bt=function(){function o(t,n,i,r,s,a,l,c,h){this.t=n,this.s=r,this.c=s,this.p=i,this.r=a||Pd,this.d=l||this,this.set=c||Vl,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=o.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=cb,this.m=n,this.mt=r,this.tween=i},o}();Ft(Il+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Rl[o]=1});Ht.TweenMax=Ht.TweenLite=gt;Ht.TimelineLite=Ht.TimelineMax=Ot;tt=new Ot({sortChildren:!1,defaults:Lr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zt.stringFilter=Md;var Yo={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return jy(i)})},timeline:function(e){return new Ot(e)},getTweensOf:function(e,t){return tt.getTweensOf(e,t)},getProperty:function(e,t,n,i){pt(e)&&(e=Zt(e)[0]);var r=Ai(e||{}).get,s=n?id:nd;return n==="native"&&(n=""),e&&(t?s((Vt[t]&&Vt[t].get||r)(e,t,n,i)):function(a,l,c){return s((Vt[a]&&Vt[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Zt(e),e.length>1){var i=e.map(function(h){return _n.quickSetter(h,t,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}e=e[0]||{};var s=Vt[t],a=Ai(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=s?function(h){var u=new s;Fr._pt=0,u.init(e,n?h+n:h,Fr,0,[e]),u.render(1,u),Fr._pt&&Wl(1,Fr)}:a.set(e,l);return s?c:function(h){return c(e,l,n?h+n:h,a,1)}},isTweening:function(e){return tt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Li(e.ease,Lr.ease)),rd(Lr,e||{})},config:function(e){return rd(zt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,s=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Vt[a]&&!Ht[a]&&zo(t+" effect requires "+a+" plugin.")}),Dl[t]=function(a,l,c){return n(Zt(a),Yt(l||{},r),c)},s&&(Ot.prototype[t]=function(a,l,c){return this.add(Dl[t](a,Nn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Oe[e]=Li(t)},parseEase:function(e,t){return arguments.length?Li(e,t):Oe},getById:function(e){return tt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ot(e),i,r;for(n.smoothChildTiming=It(e.smoothChildTiming),tt.remove(n),n._dp=0,n._time=n._tTime=tt._time,i=tt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof gt&&i.vars.onComplete===i._targets[0]))&&gn(n,i,i._start-i._delay),i=r;return gn(tt,n,0),n},utils:{wrap:Gy,wrapYoyo:Wy,distribute:fd,random:md,snap:pd,normalize:Vy,getUnit:Nt,clamp:By,splitColor:vd,toArray:Zt,selector:ky,mapRange:_d,pipe:zy,unitize:Hy,interpolate:Xy,shuffle:dd},install:Zu,effects:Dl,ticker:Kt,updateRoot:Ot.updateRoot,plugins:Vt,globalTimeline:tt,core:{PropTween:Bt,globals:Ju,Tween:gt,Timeline:Ot,Animation:Cs,getCache:Ai,_removeLinkedListItem:Wo,suppressOverwrites:function(e){return Ml=e}}};Ft("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Yo[o]=gt[o]});Kt.add(Ot.updateRoot);Fr=Yo.to({},{duration:0});var hb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},ub=function(e,t){var n=e._targets,i,r,s;for(i in t)for(r=n.length;r--;)s=e._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=hb(s,i)),s&&s.modifier&&s.modifier(t[i],e,n[r],i))},Xl=function(e,t){return{name:e,rawVars:1,init:function(i,r,s){s._onInit=function(a){var l,c;if(pt(r)&&(l={},Ft(r,function(h){return l[h]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}ub(a,r)}}}},_n=Yo.registerPlugin({name:"attr",init:function(e,t,n,i,r){var s,a;for(s in t)a=this.add(e,"setAttribute",(e.getAttribute(s)||0)+"",t[s],i,r,0,0,s),a&&(a.op=s),this._props.push(s)}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n])}},Xl("roundProps",Bl),Xl("modifiers"),Xl("snap",pd))||Yo;gt.version=Ot.version=_n.version="3.9.1";$u=1;Wu()&&Nr();Oe.Power0;Oe.Power1;Oe.Power2;Oe.Power3;Oe.Power4;Oe.Linear;Oe.Quad;Oe.Cubic;Oe.Quart;Oe.Quint;Oe.Strong;Oe.Elastic;Oe.Back;Oe.SteppedEase;Oe.Bounce;Oe.Sine;Oe.Expo;Oe.Circ;/*!
 * CSSPlugin 3.9.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Fd,oi,Or,jl,Pi,Nd,db=function(){return typeof window!="undefined"},ai={},Di=180/Math.PI,Br=Math.PI/180,Ur=Math.atan2,Od=1e8,Bd=/([A-Z])/g,fb=/(?:left|right|width|margin|padding|x)/i,pb=/[\s,\(]\S/,li={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ud=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},mb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},_b=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},kd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},zd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},xb=function(e,t,n){return e.style[t]=n},vb=function(e,t,n){return e.style.setProperty(t,n)},yb=function(e,t,n){return e._gsap[t]=n},bb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Mb=function(e,t,n,i,r){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},wb=function(e,t,n,i,r){var s=e._gsap;s[t]=n,s.renderTransform(r,s)},bt="transform",ci=bt+"Origin",Hd,ql=function(e,t){var n=oi.createElementNS?oi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):oi.createElement(e);return n.style?n:oi.createElement(e)},Bn=function o(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Bd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&o(e,kr(t)||t,1)||""},Vd="O,Moz,ms,Ms,Webkit".split(","),kr=function(e,t,n){var i=t||Pi,r=i.style,s=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(Vd[s]+e in r););return s<0?null:(s===3?"ms":s>=0?Vd[s]:"")+e},Yl=function(){db()&&window.document&&(Fd=window,oi=Fd.document,Or=oi.documentElement,Pi=ql("div")||{style:{}},ql("div"),bt=kr(bt),ci=bt+"Origin",Pi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hd=!!kr("perspective"),jl=1)},$l=function o(e){var t=ql("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,s;if(Or.appendChild(t),t.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(s=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Or.removeChild(t),this.style.cssText=r,s},Gd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Wd=function(e){var t;try{t=e.getBBox()}catch{t=$l.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===$l||(t=$l.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Gd(e,["x","cx","x1"])||0,y:+Gd(e,["y","cy","y1"])||0,width:0,height:0}:t},Xd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Wd(e))},Rs=function(e,t){if(t){var n=e.style;t in ai&&t!==ci&&(t=bt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Bd,"-$1").toLowerCase())):n.removeAttribute(t)}},hi=function(e,t,n,i,r,s){var a=new Bt(e._pt,t,n,0,1,s?zd:kd);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},jd={deg:1,rad:1,turn:1},ui=function o(e,t,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",a=Pi.style,l=fb.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",m,_,x,p;return i===s||!r||jd[i]||jd[s]?r:(s!=="px"&&!d&&(r=o(e,t,n,"px")),p=e.getCTM&&Xd(e),(f||s==="%")&&(ai[t]||~t.indexOf("adius"))?(m=p?e.getBBox()[l?"width":"height"]:e[h],ct(f?r/m*u:r/100*m)):(a[l?"width":"height"]=u+(d?s:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===oi||!_.appendChild)&&(_=oi.body),x=_._gsap,x&&f&&x.width&&l&&x.time===Kt.time?ct(r/x.width*u):((f||s==="%")&&(a.position=Bn(e,"position")),_===e&&(a.position="static"),_.appendChild(Pi),m=Pi[h],_.removeChild(Pi),a.position="absolute",l&&f&&(x=Ai(_),x.time=Kt.time,x.width=_[h]),ct(d?m*r/u:m&&r?u/m*r:0))))},Ii=function(e,t,n,i){var r;return jl||Yl(),t in li&&t!=="transform"&&(t=li[t],~t.indexOf(",")&&(t=t.split(",")[0])),ai[t]&&t!=="transform"?(r=Ds(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:Zo(Bn(e,ci))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=$o[t]&&$o[t](e,t,n)||Bn(e,t)||ed(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ui(e,t,r,n)+n:r},Sb=function(e,t,n,i){if(!n||n==="none"){var r=kr(t,e,1),s=r&&Bn(e,r,1);s&&s!==n?(t=r,n=s):t==="borderColor"&&(n=Bn(e,"borderTopColor"))}var a=new Bt(this._pt,e.style,t,0,1,Dd),l=0,c=0,h,u,d,f,m,_,x,p,g,b,v,y,E;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Bn(e,t)||i,e.style[t]=n),h=[n,i],Md(h),n=h[0],i=h[1],d=n.match(Rr)||[],E=i.match(Rr)||[],E.length){for(;u=Rr.exec(i);)x=u[0],g=i.substring(l,u.index),m?m=(m+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(m=1),x!==(_=d[c++]||"")&&(f=parseFloat(_)||0,v=_.substr((f+"").length),y=x.charAt(1)==="="?+(x.charAt(0)+"1"):0,y&&(x=x.substr(2)),p=parseFloat(x),b=x.substr((p+"").length),l=Rr.lastIndex-b.length,b||(b=b||zt.units[t]||v,l===i.length&&(i+=b,a.e+=b)),v!==b&&(f=ui(e,t,_,b)||0),a._pt={_next:a._pt,p:g||c===1?g:",",s:f,c:y?y*p:p-f,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?zd:kd;return qu.test(i)&&(a.e=0),this._pt=a,a},qd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Tb=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=qd[n]||n,t[1]=qd[i]||i,t.join(" ")},Eb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,s=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],ai[a]&&(l=1,a=a==="transformOrigin"?ci:bt),Rs(n,a);l&&(Rs(n,bt),s&&(s.svg&&n.removeAttribute("transform"),Ds(n,1),s.uncache=1))}},$o={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var s=e._pt=new Bt(e._pt,t,n,0,0,Eb);return s.u=i,s.pr=-10,s.tween=r,e._props.push(n),1}}},Ps=[1,0,0,1,0,0],Yd={},$d=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Zd=function(e){var t=Bn(e,bt);return $d(t)?Ps:t.substr(7).match(ju).map(ct)},Zl=function(e,t){var n=e._gsap||Ai(e),i=e.style,r=Zd(e),s,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ps:r):(r===Ps&&!e.offsetParent&&e!==Or&&!n.svg&&(l=i.display,i.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(c=1,a=e.nextSibling,Or.appendChild(e)),r=Zd(e),l?i.display=l:Rs(e,"display"),c&&(a?s.insertBefore(e,a):s?s.appendChild(e):Or.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Jl=function(e,t,n,i,r,s){var a=e._gsap,l=r||Zl(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],m=l[1],_=l[2],x=l[3],p=l[4],g=l[5],b=t.split(" "),v=parseFloat(b[0])||0,y=parseFloat(b[1])||0,E,L,N,B;n?l!==Ps&&(L=f*x-m*_)&&(N=v*(x/L)+y*(-_/L)+(_*g-x*p)/L,B=v*(-m/L)+y*(f/L)-(f*g-m*p)/L,v=N,y=B):(E=Wd(e),v=E.x+(~b[0].indexOf("%")?v/100*E.width:v),y=E.y+(~(b[1]||b[0]).indexOf("%")?y/100*E.height:y)),i||i!==!1&&a.smooth?(p=v-c,g=y-h,a.xOffset=u+(p*f+g*_)-p,a.yOffset=d+(p*m+g*x)-g):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=y,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[ci]="0px 0px",s&&(hi(s,a,"xOrigin",c,v),hi(s,a,"yOrigin",h,y),hi(s,a,"xOffset",u,a.xOffset),hi(s,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+y)},Ds=function(e,t){var n=e._gsap||new Ed(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,s="px",a="deg",l=Bn(e,ci)||"0",c,h,u,d,f,m,_,x,p,g,b,v,y,E,L,N,B,H,D,w,M,I,O,F,U,te,re,G,W,ce,ne,he;return c=h=u=m=_=x=p=g=b=0,d=f=1,n.svg=!!(e.getCTM&&Xd(e)),E=Zl(e,n.svg),n.svg&&(F=(!n.uncache||l==="0px 0px")&&!t&&e.getAttribute("data-svg-origin"),Jl(e,F||l,!!F||n.originIsAbsolute,n.smooth!==!1,E)),v=n.xOrigin||0,y=n.yOrigin||0,E!==Ps&&(H=E[0],D=E[1],w=E[2],M=E[3],c=I=E[4],h=O=E[5],E.length===6?(d=Math.sqrt(H*H+D*D),f=Math.sqrt(M*M+w*w),m=H||D?Ur(D,H)*Di:0,p=w||M?Ur(w,M)*Di+m:0,p&&(f*=Math.abs(Math.cos(p*Br))),n.svg&&(c-=v-(v*H+y*w),h-=y-(v*D+y*M))):(he=E[6],ce=E[7],re=E[8],G=E[9],W=E[10],ne=E[11],c=E[12],h=E[13],u=E[14],L=Ur(he,W),_=L*Di,L&&(N=Math.cos(-L),B=Math.sin(-L),F=I*N+re*B,U=O*N+G*B,te=he*N+W*B,re=I*-B+re*N,G=O*-B+G*N,W=he*-B+W*N,ne=ce*-B+ne*N,I=F,O=U,he=te),L=Ur(-w,W),x=L*Di,L&&(N=Math.cos(-L),B=Math.sin(-L),F=H*N-re*B,U=D*N-G*B,te=w*N-W*B,ne=M*B+ne*N,H=F,D=U,w=te),L=Ur(D,H),m=L*Di,L&&(N=Math.cos(L),B=Math.sin(L),F=H*N+D*B,U=I*N+O*B,D=D*N-H*B,O=O*N-I*B,H=F,I=U),_&&Math.abs(_)+Math.abs(m)>359.9&&(_=m=0,x=180-x),d=ct(Math.sqrt(H*H+D*D+w*w)),f=ct(Math.sqrt(O*O+he*he)),L=Ur(I,O),p=Math.abs(L)>2e-4?L*Di:0,b=ne?1/(ne<0?-ne:ne):0),n.svg&&(F=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!$d(Bn(e,bt)),F&&e.setAttribute("transform",F))),Math.abs(p)>90&&Math.abs(p)<270&&(r?(d*=-1,p+=m<=0?180:-180,m+=m<=0?180:-180):(f*=-1,p+=p<=0?180:-180)),n.x=c-((n.xPercent=c&&(n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=h-((n.yPercent=h&&(n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=u+s,n.scaleX=ct(d),n.scaleY=ct(f),n.rotation=ct(m)+a,n.rotationX=ct(_)+a,n.rotationY=ct(x)+a,n.skewX=p+a,n.skewY=g+a,n.transformPerspective=b+s,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[ci]=Zo(l)),n.xOffset=n.yOffset=0,n.force3D=zt.force3D,n.renderTransform=n.svg?Cb:Hd?Jd:Ab,n.uncache=0,n},Zo=function(e){return(e=e.split(" "))[0]+" "+e[1]},Kl=function(e,t,n){var i=Nt(t);return ct(parseFloat(t)+parseFloat(ui(e,"x",n+"px",i)))+i},Ab=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Jd(e,t)},Fi="0deg",Is="0px",Ni=") ",Jd=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,x=n.transformPerspective,p=n.force3D,g=n.target,b=n.zOrigin,v="",y=p==="auto"&&e&&e!==1||p===!0;if(b&&(u!==Fi||h!==Fi)){var E=parseFloat(h)*Br,L=Math.sin(E),N=Math.cos(E),B;E=parseFloat(u)*Br,B=Math.cos(E),s=Kl(g,s,L*B*-b),a=Kl(g,a,-Math.sin(E)*-b),l=Kl(g,l,N*B*-b+b)}x!==Is&&(v+="perspective("+x+Ni),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(y||s!==Is||a!==Is||l!==Is)&&(v+=l!==Is||y?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+Ni),c!==Fi&&(v+="rotate("+c+Ni),h!==Fi&&(v+="rotateY("+h+Ni),u!==Fi&&(v+="rotateX("+u+Ni),(d!==Fi||f!==Fi)&&(v+="skew("+d+", "+f+Ni),(m!==1||_!==1)&&(v+="scale("+m+", "+_+Ni),g.style[bt]=v||"translate(0, 0)"},Cb=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,s=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,x=n.xOffset,p=n.yOffset,g=n.forceCSS,b=parseFloat(s),v=parseFloat(a),y,E,L,N,B;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Br,c*=Br,y=Math.cos(l)*u,E=Math.sin(l)*u,L=Math.sin(l-c)*-d,N=Math.cos(l-c)*d,c&&(h*=Br,B=Math.tan(c-h),B=Math.sqrt(1+B*B),L*=B,N*=B,h&&(B=Math.tan(h),B=Math.sqrt(1+B*B),y*=B,E*=B)),y=ct(y),E=ct(E),L=ct(L),N=ct(N)):(y=u,N=d,E=L=0),(b&&!~(s+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(b=ui(f,"x",s,"px"),v=ui(f,"y",a,"px")),(m||_||x||p)&&(b=ct(b+m-(m*y+_*L)+x),v=ct(v+_-(m*E+_*N)+p)),(i||r)&&(B=f.getBBox(),b=ct(b+i/100*B.width),v=ct(v+r/100*B.height)),B="matrix("+y+","+E+","+L+","+N+","+b+","+v+")",f.setAttribute("transform",B),g&&(f.style[bt]=B)},Lb=function(e,t,n,i,r,s){var a=360,l=pt(r),c=parseFloat(r)*(l&&~r.indexOf("rad")?Di:1),h=s?c*s:c-i,u=i+h+"deg",d,f;return l&&(d=r.split("_")[1],d==="short"&&(h%=a,h!==h%(a/2)&&(h+=h<0?a:-a)),d==="cw"&&h<0?h=(h+a*Od)%a-~~(h/a)*a:d==="ccw"&&h>0&&(h=(h-a*Od)%a-~~(h/a)*a)),e._pt=f=new Bt(e._pt,t,n,i,h,mb),f.e=u,f.u="deg",e._props.push(n),f},Kd=function(e,t){for(var n in t)e[n]=t[n];return e},Rb=function(e,t,n){var i=Kd({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,c,h,u,d,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[bt]=t,a=Ds(n,1),Rs(n,bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[bt],s[bt]=t,a=Ds(n,1),s[bt]=c);for(l in ai)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=Nt(c),m=Nt(h),u=f!==m?ui(n,l,c,m):parseFloat(c),d=parseFloat(h),e._pt=new Bt(e._pt,a,l,u,d-u,Ud),e._pt.u=m||0,e._props.push(l));Kd(a,i)};Ft("padding,margin,Width,Radius",function(o,e){var t="Top",n="Right",i="Bottom",r="Left",s=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?o+a:"border"+a+o});$o[e>1?"border"+o:o]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=s.map(function(m){return Ii(a,m,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},s.forEach(function(m,_){return f[m]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,u)}});var Qd={name:"css",register:Yl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var s=this._props,a=e.style,l=n.vars.startAt,c,h,u,d,f,m,_,x,p,g,b,v,y,E,L;jl||Yl();for(_ in t)if(_!=="autoRound"&&(h=t[_],!(Vt[_]&&Ad(_,t,n,i,e,r)))){if(f=typeof h,m=$o[_],f==="function"&&(h=h.call(n,i,e,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Ts(h)),m)m(this,e,_,h,n)&&(L=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",ri.lastIndex=0,ri.test(c)||(x=Nt(c),p=Nt(h)),p?x!==p&&(c=ui(e,_,c,p)+p):x&&(h+=x),this.add(a,"setProperty",c,h,i,r,0,0,_),s.push(_);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],pt(c)&&~c.indexOf("random(")&&(c=Ts(c)),Nt(c+"")||(c+=zt.units[_]||Nt(Ii(e,_))||""),(c+"").charAt(1)==="="&&(c=Ii(e,_))):c=Ii(e,_),d=parseFloat(c),g=f==="string"&&h.charAt(1)==="="?+(h.charAt(0)+"1"):0,g&&(h=h.substr(2)),u=parseFloat(h),_ in li&&(_==="autoAlpha"&&(d===1&&Ii(e,"visibility")==="hidden"&&u&&(d=0),hi(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=li[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in ai,b){if(v||(y=e._gsap,y.renderTransform&&!t.parseTransform||Ds(e,t.parseTransform),E=t.smoothOrigin!==!1&&y.smooth,v=this._pt=new Bt(this._pt,a,bt,0,1,y.renderTransform,y,0,-1),v.dep=1),_==="scale")this._pt=new Bt(this._pt,y,"scaleY",y.scaleY,(g?g*u:u-y.scaleY)||0),s.push("scaleY",_),_+="X";else if(_==="transformOrigin"){h=Tb(h),y.svg?Jl(e,h,0,E,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==y.zOrigin&&hi(this,y,"zOrigin",y.zOrigin,p),hi(this,a,_,Zo(c),Zo(h)));continue}else if(_==="svgOrigin"){Jl(e,h,1,E,0,this);continue}else if(_ in Yd){Lb(this,y,_,d,h,g);continue}else if(_==="smoothOrigin"){hi(this,y,"smooth",y.smooth,h);continue}else if(_==="force3D"){y[_]=h;continue}else if(_==="transform"){Rb(this,h,e);continue}}else _ in a||(_=kr(_)||_);if(b||(u||u===0)&&(d||d===0)&&!pb.test(h)&&_ in a)x=(c+"").substr((d+"").length),u||(u=0),p=Nt(h)||(_ in zt.units?zt.units[_]:x),x!==p&&(d=ui(e,_,c,p)),this._pt=new Bt(this._pt,b?y:a,_,d,g?g*u:u-d,!b&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?_b:Ud),this._pt.u=p||0,x!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=gb);else if(_ in a)Sb.call(this,e,_,c,h);else if(_ in e)this.add(e,_,c||e[_],h,i,r);else{Ll(_,h);continue}s.push(_)}}L&&Id(this)},get:Ii,aliases:li,getSetter:function(e,t,n){var i=li[t];return i&&i.indexOf(",")<0&&(t=i),t in ai&&t!==ci&&(e._gsap.x||Ii(e,"x"))?n&&Nd===n?t==="scale"?bb:yb:(Nd=n||{})&&(t==="scale"?Mb:wb):e.style&&!Sl(e.style[t])?xb:~t.indexOf("-")?vb:Gl(e,t)},core:{_removeProperty:Rs,_getMatrix:Zl}};_n.utils.checkPrefix=kr;(function(o,e,t,n){var i=Ft(o+","+e+","+t,function(r){ai[r]=1});Ft(e,function(r){zt.units[r]="deg",Yd[r]=1}),li[i[13]]=o+","+e,Ft(n,function(r){var s=r.split(":");li[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ft("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){zt.units[o]="px"});_n.registerPlugin(Qd);var Pb=_n.registerPlugin(Qd)||_n;Pb.core.Tween;/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.16.0
 * @author George Michael Brower
 * @license MIT
 */class xn{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),xn.nextNameID=xn.nextNameID||0,this.$name.id=`lil-gui-name-${++xn.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback),this.updateDisplay()}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Db extends xn{constructor(e,t,n){super(e,t,n,"boolean","label");this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ql(o){let e,t;return(e=o.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Ib={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:Ql,toHexString:Ql},Fs={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},Fb={isPrimitive:!1,match:Array.isArray,fromHexString(o,e,t=1){const n=Fs.fromHexString(o);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([o,e,t],n=1){n=255/n;const i=o*n<<16^e*n<<8^t*n<<0;return Fs.toHexString(i)}},Nb={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,e,t=1){const n=Fs.fromHexString(o);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:o,g:e,b:t},n=1){n=255/n;const i=o*n<<16^e*n<<8^t*n<<0;return Fs.toHexString(i)}},Ob=[Ib,Fs,Fb,Nb];function Bb(o){return Ob.find(e=>e.match(o))}class Ub extends xn{constructor(e,t,n,i){super(e,t,n,"color");this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Bb(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Ql(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ec extends xn{constructor(e,t,n){super(e,t,n,"function");this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{}),this.$disable=this.$button}}class kb extends xn{constructor(e,t,n,i,r,s){super(e,t,n,"number");this._initInput(),this.min(i),this.max(r);const a=s!==void 0;this.step(a?s:this._getImplicitStep(),a),this.updateDisplay()}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=e),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{const p=parseFloat(this.$input.value);isNaN(p)||this.setValue(this._clamp(p))},t=p=>{const g=parseFloat(this.$input.value);isNaN(g)||(this._snapClampSetValue(g+p),this.$input.value=this.getValue())},n=p=>{p.code==="Enter"&&this.$input.blur(),p.code==="ArrowUp"&&(p.preventDefault(),t(this._step*this._arrowKeyMultiplier(p))),p.code==="ArrowDown"&&(p.preventDefault(),t(this._step*this._arrowKeyMultiplier(p)*-1))},i=p=>{this._inputFocused&&(p.preventDefault(),t(this._step*this._normalizeMouseWheel(p)))};let r=!1,s,a,l,c,h;const u=5,d=p=>{s=p.clientX,a=l=p.clientY,r=!0,c=this.getValue(),h=0,window.addEventListener("mousemove",f),window.addEventListener("mouseup",m)},f=p=>{if(r){const g=p.clientX-s,b=p.clientY-a;Math.abs(b)>u?(p.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(g)>u&&m()}r||(h-=(p.clientY-l)*this._step*this._arrowKeyMultiplier(p),c+h>this._max?h=this._max-c:c+h<this._min&&(h=this._min-c),this._snapClampSetValue(c+h)),l=p.clientY},m=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",m)},_=()=>{this._inputFocused=!0},x=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",_),this.$input.addEventListener("blur",x)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(p,g,b,v,y)=>(p-g)/(b-g)*(y-v)+v,t=p=>{const g=this.$slider.getBoundingClientRect();let b=e(p,g.left,g.right,this._min,this._max);this._snapClampSetValue(b)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=p=>{t(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let s=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),s=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,s=!0):c(p),window.addEventListener("touchmove",u),window.addEventListener("touchend",d))},u=p=>{if(s){const g=p.touches[0].clientX-a,b=p.touches[0].clientY-l;Math.abs(g)>Math.abs(b)?c(p):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else p.preventDefault(),t(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),m=400;let _;const x=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const b=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+b),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(f,m)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h),this.$slider.addEventListener("wheel",x)}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class zb extends xn{constructor(e,t,n,i){super(e,t,n,"option");this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const s=document.createElement("option");s.innerHTML=r,this.$select.appendChild(s)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class Hb extends xn{constructor(e,t,n){super(e,t,n,"string");this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Vb=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "\u2195";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "\u25BE";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "\u25B8";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "\u2713";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Gb(o){const e=document.createElement("style");e.innerHTML=o;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let ef=!1;class tf{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",injectStyles:s=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),a&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!ef&&s&&(Gb(Vb),ef=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,n,i,r){if(Object(n)===n)return new zb(this,e,t,n);const s=e[t];switch(typeof s){case"number":return new kb(this,e,t,n,i,r);case"boolean":return new Db(this,e,t);case"string":return new Hb(this,e,t);case"function":return new ec(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,s)}addColor(e,t,n=1){return new Ub(this,e,t,n)}addFolder(e){return new tf({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof ec||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ec)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}var Wb=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},nf={exports:{}};(function(o,e){(function(t,n){o.exports=n()})(Wb,function(){var t=function(){function n(f){return s.appendChild(f.dom),f}function i(f){for(var m=0;m<s.children.length;m++)s.children[m].style.display=m===f?"block":"none";r=f}var r=0,s=document.createElement("div");s.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",s.addEventListener("click",function(f){f.preventDefault(),i(++r%s.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,h=n(new t.Panel("FPS","#0ff","#002")),u=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=n(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:s,addPanel:n,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var f=(performance||Date).now();if(u.update(f-a,200),f>l+1e3&&(h.update(1e3*c/(f-l),100),l=f,c=0,d)){var m=performance.memory;d.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return f},update:function(){a=this.end()},domElement:s,setMode:i}};return t.Panel=function(n,i,r){var s=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),h=80*c,u=48*c,d=3*c,f=2*c,m=3*c,_=15*c,x=74*c,p=30*c,g=document.createElement("canvas");g.width=h,g.height=u,g.style.cssText="width:80px;height:48px";var b=g.getContext("2d");return b.font="bold "+9*c+"px Helvetica,Arial,sans-serif",b.textBaseline="top",b.fillStyle=r,b.fillRect(0,0,h,u),b.fillStyle=i,b.fillText(n,d,f),b.fillRect(m,_,x,p),b.fillStyle=r,b.globalAlpha=.9,b.fillRect(m,_,x,p),{dom:g,update:function(v,y){s=Math.min(s,v),a=Math.max(a,v),b.fillStyle=r,b.globalAlpha=1,b.fillRect(0,0,h,_),b.fillStyle=i,b.fillText(l(v)+" "+n+" ("+l(s)+"-"+l(a)+")",d,f),b.drawImage(g,m+c,_,x-c,p,m,_,x-c,p),b.fillRect(m+x-c,_,c,p),b.fillStyle=r,b.globalAlpha=.9,b.fillRect(m+x-c,_,c,l((1-v/y)*p))}}},t})})(nf);var MM=nf.exports;const rf={type:"change"},tc={type:"start"},sf={type:"end"};class wM extends Hn{constructor(e,t){super();t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",R),this._domElementKeyEvents=P},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(rf),n.update(),r=i.NONE},this.update=function(){const P=new C,A=new yt().setFromUnitVectors(e.up,new C(0,1,0)),J=A.clone().invert(),Z=new C,xe=new yt,fe=2*Math.PI;return function(){const ae=n.object.position;P.copy(ae).sub(n.target),P.applyQuaternion(A),a.setFromVector3(P),n.autoRotate&&r===i.NONE&&B(L()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ye=n.minAzimuthAngle,Ne=n.maxAzimuthAngle;return isFinite(ye)&&isFinite(Ne)&&(ye<-Math.PI?ye+=fe:ye>Math.PI&&(ye-=fe),Ne<-Math.PI?Ne+=fe:Ne>Math.PI&&(Ne-=fe),ye<=Ne?a.theta=Math.max(ye,Math.min(Ne,a.theta)):a.theta=a.theta>(ye+Ne)/2?Math.max(ye,a.theta):Math.min(Ne,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),P.setFromSpherical(a),P.applyQuaternion(J),ae.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||Z.distanceToSquared(n.object.position)>s||8*(1-xe.dot(n.object.quaternion))>s?(n.dispatchEvent(rf),Z.copy(n.object.position),xe.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Q),n.domElement.removeEventListener("pointerdown",ie),n.domElement.removeEventListener("pointercancel",Me),n.domElement.removeEventListener("wheel",We),n.domElement.removeEventListener("pointermove",de),n.domElement.removeEventListener("pointerup",se),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",R)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const s=1e-6,a=new zu,l=new zu;let c=1;const h=new C;let u=!1;const d=new j,f=new j,m=new j,_=new j,x=new j,p=new j,g=new j,b=new j,v=new j,y=[],E={};function L(){return 2*Math.PI/60/60*n.autoRotateSpeed}function N(){return Math.pow(.95,n.zoomSpeed)}function B(P){l.theta-=P}function H(P){l.phi-=P}const D=function(){const P=new C;return function(J,Z){P.setFromMatrixColumn(Z,0),P.multiplyScalar(-J),h.add(P)}}(),w=function(){const P=new C;return function(J,Z){n.screenSpacePanning===!0?P.setFromMatrixColumn(Z,1):(P.setFromMatrixColumn(Z,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(J),h.add(P)}}(),M=function(){const P=new C;return function(J,Z){const xe=n.domElement;if(n.object.isPerspectiveCamera){const fe=n.object.position;P.copy(fe).sub(n.target);let Se=P.length();Se*=Math.tan(n.object.fov/2*Math.PI/180),D(2*J*Se/xe.clientHeight,n.object.matrix),w(2*Z*Se/xe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(J*(n.object.right-n.object.left)/n.object.zoom/xe.clientWidth,n.object.matrix),w(Z*(n.object.top-n.object.bottom)/n.object.zoom/xe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(P){n.object.isPerspectiveCamera?c/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(P){n.object.isPerspectiveCamera?c*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(P){d.set(P.clientX,P.clientY)}function U(P){g.set(P.clientX,P.clientY)}function te(P){_.set(P.clientX,P.clientY)}function re(P){f.set(P.clientX,P.clientY),m.subVectors(f,d).multiplyScalar(n.rotateSpeed);const A=n.domElement;B(2*Math.PI*m.x/A.clientHeight),H(2*Math.PI*m.y/A.clientHeight),d.copy(f),n.update()}function G(P){b.set(P.clientX,P.clientY),v.subVectors(b,g),v.y>0?I(N()):v.y<0&&O(N()),g.copy(b),n.update()}function W(P){x.set(P.clientX,P.clientY),p.subVectors(x,_).multiplyScalar(n.panSpeed),M(p.x,p.y),_.copy(x),n.update()}function ce(P){P.deltaY<0?O(N()):P.deltaY>0&&I(N()),n.update()}function ne(P){let A=!1;switch(P.code){case n.keys.UP:M(0,n.keyPanSpeed),A=!0;break;case n.keys.BOTTOM:M(0,-n.keyPanSpeed),A=!0;break;case n.keys.LEFT:M(n.keyPanSpeed,0),A=!0;break;case n.keys.RIGHT:M(-n.keyPanSpeed,0),A=!0;break}A&&(P.preventDefault(),n.update())}function he(){if(y.length===1)d.set(y[0].pageX,y[0].pageY);else{const P=.5*(y[0].pageX+y[1].pageX),A=.5*(y[0].pageY+y[1].pageY);d.set(P,A)}}function Re(){if(y.length===1)_.set(y[0].pageX,y[0].pageY);else{const P=.5*(y[0].pageX+y[1].pageX),A=.5*(y[0].pageY+y[1].pageY);_.set(P,A)}}function $(){const P=y[0].pageX-y[1].pageX,A=y[0].pageY-y[1].pageY,J=Math.sqrt(P*P+A*A);g.set(0,J)}function Ae(){n.enableZoom&&$(),n.enablePan&&Re()}function ve(){n.enableZoom&&$(),n.enableRotate&&he()}function pe(P){if(y.length==1)f.set(P.pageX,P.pageY);else{const J=_e(P),Z=.5*(P.pageX+J.x),xe=.5*(P.pageY+J.y);f.set(Z,xe)}m.subVectors(f,d).multiplyScalar(n.rotateSpeed);const A=n.domElement;B(2*Math.PI*m.x/A.clientHeight),H(2*Math.PI*m.y/A.clientHeight),d.copy(f)}function ge(P){if(y.length===1)x.set(P.pageX,P.pageY);else{const A=_e(P),J=.5*(P.pageX+A.x),Z=.5*(P.pageY+A.y);x.set(J,Z)}p.subVectors(x,_).multiplyScalar(n.panSpeed),M(p.x,p.y),_.copy(x)}function Fe(P){const A=_e(P),J=P.pageX-A.x,Z=P.pageY-A.y,xe=Math.sqrt(J*J+Z*Z);b.set(0,xe),v.set(0,Math.pow(b.y/g.y,n.zoomSpeed)),I(v.y),g.copy(b)}function X(P){n.enableZoom&&Fe(P),n.enablePan&&ge(P)}function ee(P){n.enableZoom&&Fe(P),n.enableRotate&&pe(P)}function ie(P){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",de),n.domElement.addEventListener("pointerup",se)),oe(P),P.pointerType==="touch"?S(P):we(P))}function de(P){n.enabled!==!1&&(P.pointerType==="touch"?Y(P):Le(P))}function se(P){K(P),y.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",de),n.domElement.removeEventListener("pointerup",se)),n.dispatchEvent(sf),r=i.NONE}function Me(P){K(P)}function we(P){let A;switch(P.button){case 0:A=n.mouseButtons.LEFT;break;case 1:A=n.mouseButtons.MIDDLE;break;case 2:A=n.mouseButtons.RIGHT;break;default:A=-1}switch(A){case ki.DOLLY:if(n.enableZoom===!1)return;U(P),r=i.DOLLY;break;case ki.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;te(P),r=i.PAN}else{if(n.enableRotate===!1)return;F(P),r=i.ROTATE}break;case ki.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;F(P),r=i.ROTATE}else{if(n.enablePan===!1)return;te(P),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(tc)}function Le(P){if(n.enabled!==!1)switch(r){case i.ROTATE:if(n.enableRotate===!1)return;re(P);break;case i.DOLLY:if(n.enableZoom===!1)return;G(P);break;case i.PAN:if(n.enablePan===!1)return;W(P);break}}function We(P){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(P.preventDefault(),n.dispatchEvent(tc),ce(P),n.dispatchEvent(sf))}function R(P){n.enabled===!1||n.enablePan===!1||ne(P)}function S(P){switch(be(P),y.length){case 1:switch(n.touches.ONE){case zi.ROTATE:if(n.enableRotate===!1)return;he(),r=i.TOUCH_ROTATE;break;case zi.PAN:if(n.enablePan===!1)return;Re(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case zi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ae(),r=i.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(tc)}function Y(P){switch(be(P),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;pe(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ge(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;X(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ee(P),n.update();break;default:r=i.NONE}}function Q(P){n.enabled!==!1&&P.preventDefault()}function oe(P){y.push(P)}function K(P){delete E[P.pointerId];for(let A=0;A<y.length;A++)if(y[A].pointerId==P.pointerId){y.splice(A,1);return}}function be(P){let A=E[P.pointerId];A===void 0&&(A=new j,E[P.pointerId]=A),A.set(P.pageX,P.pageY)}function _e(P){const A=P.pointerId===y[0].pointerId?y[1]:y[0];return E[A.pointerId]}n.domElement.addEventListener("contextmenu",Q),n.domElement.addEventListener("pointerdown",ie),n.domElement.addEventListener("pointercancel",Me),n.domElement.addEventListener("wheel",We,{passive:!1}),this.update()}}var Jo={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}`};class zr{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const Xb=new dr(-1,1,1,-1,0,1),nc=new Ge;nc.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3));nc.setAttribute("uv",new Je([0,2,0,0,2,0],2));class ic{constructor(e){this._mesh=new wt(nc,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class of extends zr{constructor(e,t){super();this.textureID=t!==void 0?t:"tDiffuse",e instanceof Dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=is.clone(e.uniforms),this.material=new Dt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ic(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class af extends zr{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let s,a;this.inverse?(s=0,a=1):(s=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,s,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class jb extends zr{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class SM{constructor(e,t){if(this.renderer=e,t===void 0){const n={minFilter:rt,magFilter:rt,format:st},i=e.getSize(new j);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new vt(this._width*this._pixelRatio,this._height*this._pixelRatio,n),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Jo===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),of===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new of(Jo),this.clock=new ry}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const s=this.passes[i];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),s.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}af!==void 0&&(s instanceof af?n=!0:s instanceof jb&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new j);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new dr(-1,1,1,-1,0,1);const lf=new Ge;lf.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3));lf.setAttribute("uv",new Je([0,2,0,0,2,0],2));class TM extends zr{constructor(e,t,n,i,r){super();this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r!==void 0?r:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ue}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,s;this.overrideMaterial!==void 0&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),r=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,r),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=s),e.autoClear=i}}const cf={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ue(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ns extends zr{constructor(e,t,n,i){super();this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new j(e.x,e.y):new j(256,256),this.clearColor=new ue(0,0,0);const r={minFilter:rt,magFilter:rt,format:st};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new vt(s,a,r),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new vt(s,a,r);f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new vt(s,a,r);m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),a=Math.round(a/2)}cf===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const l=cf;this.highPassUniforms=is.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Dt({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.texSize.value=new j(s,a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,Jo===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const u=Jo;this.copyUniforms=is.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new Dt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ea,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ue,this.oldClearAlpha=1,this.basic=new Ln,this.fsQuad=new ic(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.texSize.value=new j(n,i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ns.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ns.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}getSeperableBlurMaterial(e){return new Dt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new j(.5,.5)},direction:{value:new j(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform sampler2D dirtTexture;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ns.BlurDirectionX=new j(1,0);Ns.BlurDirectionY=new j(0,1);const hf={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class EM extends zr{constructor(e,t,n){super();this.scene=e,this.camera=t;const i=n.focus!==void 0?n.focus:1,r=n.aspect!==void 0?n.aspect:t.aspect,s=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1,l=n.width||window.innerWidth||1,c=n.height||window.innerHeight||1;this.renderTargetDepth=new vt(l,c,{minFilter:it,magFilter:it}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new ja,this.materialDepth.depthPacking=Uc,this.materialDepth.blending=yn,hf===void 0&&console.error("THREE.BokehPass relies on BokehShader");const h=hf,u=is.clone(h.uniforms);u.tDepth.value=this.renderTargetDepth.texture,u.focus.value=i,u.aspect.value=r,u.aperture.value=s,u.maxblur.value=a,u.nearClip.value=t.near,u.farClip.value=t.far,this.materialBokeh=new Dt({defines:Object.assign({},h.defines),uniforms:u,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.uniforms=u,this.needsSwap=!1,this.fsQuad=new ic(this.materialBokeh),this._oldClearColor=new ue}render(e,t,n){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const i=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(i),e.autoClear=r}}class AM extends fn{constructor(e){super(e);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Zb(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new Jb(t)}),this.register(function(t){return new Kb(t)}),this.register(function(t){return new Qb(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new Yb(t)}),this.register(function(t){return new rM(t)})}load(e,t,n,i){const r=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=ei.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new vs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,s,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const s={},a={};if(typeof e=="string")r=e;else if(ei.decodeText(new Uint8Array(e,0,4))===uf){try{s[Be.KHR_BINARY_GLTF]=new sM(e)}catch(u){i&&i(u);return}r=s[Be.KHR_BINARY_GLTF].content}else r=ei.decodeText(new Uint8Array(e));const l=JSON.parse(r);if(l.asset===void 0||l.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new _M(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);a[u.name]=u,s[u.name]=!0}if(l.extensionsUsed)for(let h=0;h<l.extensionsUsed.length;++h){const u=l.extensionsUsed[h],d=l.extensionsRequired||[];switch(u){case Be.KHR_MATERIALS_UNLIT:s[u]=new $b;break;case Be.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:s[u]=new lM;break;case Be.KHR_DRACO_MESH_COMPRESSION:s[u]=new oM(l,this.dracoLoader);break;case Be.KHR_TEXTURE_TRANSFORM:s[u]=new aM;break;case Be.KHR_MESH_QUANTIZATION:s[u]=new cM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(s),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function qb(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Be={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class Yb{constructor(e){this.parser=e,this.name=Be.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new ue(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Nu(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Iu(h),c.distance=u;break;case"spot":c=new Ru(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class $b{constructor(){this.name=Be.KHR_MATERIALS_UNLIT}getMaterialType(){return Ln}extendParams(e,t,n){const i=[];e.color=new ue(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const s=r.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture))}return Promise.all(i)}}class Zb{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new j(a,a)}return Promise.all(r)}}class Jb{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}}class Kb{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}}class Qb{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||0;const a=s.attenuationColor||[1,1,1];return t.attenuationColor=new ue(a[0],a[1],a[2]),Promise.all(r)}}class eM{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class tM{constructor(e){this.parser=e,this.name=Be.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return t.specularColor=new ue(a[0],a[1],a[2]),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture).then(function(l){l.encoding=wn})),Promise.all(r)}}class nM{constructor(e){this.parser=e,this.name=Be.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],s=n.images[r.source],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s,a)}}class iM{constructor(e){this.parser=e,this.name=Be.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const s=r.extensions[t],a=i.images[s.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rM{constructor(e){this.name=Be.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([r,s.ready]).then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new ArrayBuffer(h*u),f=new Uint8Array(a[0],l,c);return s.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})}else return null}}const uf="glTF",Os=12,df={JSON:1313821514,BIN:5130562};class sM{constructor(e){this.name=Be.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Os);if(this.header={magic:ei.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==uf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Os,i=new DataView(e,Os);let r=0;for(;r<n;){const s=i.getUint32(r,!0);r+=4;const a=i.getUint32(r,!0);if(r+=4,a===df.JSON){const l=new Uint8Array(e,Os+r,s);this.content=ei.decodeText(l)}else if(a===df.BIN){const l=Os+r;this.body=e.slice(l,l+s)}r+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class oM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Be.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,a={},l={},c={};for(const h in s){const u=sc[h]||h.toLowerCase();a[u]=s[h]}for(const h in e.attributes){const u=sc[h]||h.toLowerCase();if(s[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Bs[d.componentType];c[u]=f,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(d){for(const f in d.attributes){const m=d.attributes[f],_=l[f];_!==void 0&&(m.normalized=_)}u(d)},a,c)})})}}class aM{constructor(){this.name=Be.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class rc extends gs{constructor(e){super();this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),r=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),s=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new ue().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(l){for(const c in a)l.uniforms[c]=a[c];l.fragmentShader=l.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",r).replace("#include <lights_physical_fragment>",s)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(l){a.specular.value=l}},specularMap:{get:function(){return a.specularMap.value},set:function(l){a.specularMap.value=l,l?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(l){a.glossiness.value=l}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(l){a.glossinessMap.value=l,l?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class lM{constructor(){this.name=Be.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"]}getMaterialType(){return rc}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new ue(1,1,1),e.opacity=1;const r=[];if(Array.isArray(i.diffuseFactor)){const s=i.diffuseFactor;e.color.fromArray(s),e.opacity=s[3]}if(i.diffuseTexture!==void 0&&r.push(n.assignTexture(e,"map",i.diffuseTexture)),e.emissive=new ue(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new ue(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const s=i.specularGlossinessTexture;r.push(n.assignTexture(e,"glossinessMap",s)),r.push(n.assignTexture(e,"specularMap",s))}return Promise.all(r)}createMaterial(e){const t=new rc(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=xi,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}}class cM{constructor(){this.name=Be.KHR_MESH_QUANTIZATION}}class Oi extends Pn{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}}Oi.prototype.beforeStart_=Oi.prototype.copySampleValue_;Oi.prototype.afterEnd_=Oi.prototype.copySampleValue_;Oi.prototype.interpolate_=function(o,e,t,n){const i=this.resultBuffer,r=this.sampleValues,s=this.valueSize,a=s*2,l=s*3,c=n-e,h=(t-e)/c,u=h*h,d=u*h,f=o*l,m=f-l,_=-2*d+3*u,x=d-u,p=1-_,g=x-u+h;for(let b=0;b!==s;b++){const v=r[m+b+s],y=r[m+b+a]*c,E=r[f+b+s],L=r[f+b]*c;i[b]=p*v+g*y+_*E+x*L}return i};const hM=new yt;class uM extends Oi{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return hM.fromArray(r).normalize().toArray(r),r}}const Un={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Bs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ff={9728:it,9729:rt,9984:sa,9985:Tc,9986:oa,9987:Wi},pf={33071:Pt,33648:Gs,10497:Gi},mf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},dM={CUBICSPLINE:void 0,LINEAR:qi,STEP:qr},oc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fM(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new gs({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hi})),o.DefaultMaterial}function Us(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bi(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function pM(o,e,t){let n=!1,i=!1;for(let a=0,l=e.length;a<l;a++){const c=e[a];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(i=!0),n&&i)break}if(!n&&!i)return Promise.resolve(o);const r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];if(n){const h=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):o.attributes.position;r.push(h)}if(i){const h=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):o.attributes.normal;s.push(h)}}return Promise.all([Promise.all(r),Promise.all(s)]).then(function(a){const l=a[0],c=a[1];return n&&(o.morphAttributes.position=l),i&&(o.morphAttributes.normal=c),o.morphTargetsRelative=!0,o})}function mM(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gM(o){const e=o.extensions&&o.extensions[Be.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+gf(e.attributes):t=o.indices+":"+gf(o.attributes)+":"+o.mode,t}function gf(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function ac(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}class _M{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new qb,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.textureCache={},this.nodeNamesUsed={},typeof createImageBitmap!="undefined"&&/Firefox|Safari/.test(navigator.userAgent)===!1?this.textureLoader=new Bu(this.options.manager):this.textureLoader=new Tu(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const a={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};Us(r,a,i),Bi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i].joints;for(let a=0,l=s.length;a<l;a++)e[s[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(s,a)=>{const l=this.associations.get(s);l!=null&&this.associations.set(a,l);for(const[c,h]of s.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this.loadAnimation(t);break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Be.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,s){n.load(ei.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){const a=s[0],l=mf[i.type],c=Bs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,x;if(f&&f!==u){const p=Math.floor(d/f),g="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let b=t.cache.get(g);b||(_=new c(a,p*f,i.count*f/h),b=new _r(_,f/h),t.cache.add(g,b)),x=new xr(b,l,d%f/h,m)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),x=new Qe(_,l,m);if(i.sparse!==void 0){const p=mf.SCALAR,g=Bs[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,y=new g(s[1],b,i.sparse.count*p),E=new c(s[2],v,i.sparse.count*l);a!==null&&(x=new Qe(x.array.slice(),x.itemSize,x.normalized));for(let L=0,N=y.length;L<N;L++){const B=y[L];if(x.setX(B,E[L*l]),l>=2&&x.setY(B,E[L*l+1]),l>=3&&x.setZ(B,E[L*l+2]),l>=4&&x.setW(B,E[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return x})}loadTexture(e){const t=this.json,n=this.options,i=t.textures[e],r=t.images[i.source];let s=this.textureLoader;if(r.uri){const a=n.manager.getHandler(r.uri);a!==null&&(s=a)}return this.loadTextureImage(e,r,s)}loadTextureImage(e,t,n){const i=this,r=this.json,s=this.options,a=r.textures[e],l=(t.uri||t.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=self.URL||self.webkitURL;let h=t.uri||"",u=!1;if(t.bufferView!==void 0)h=i.getDependency("bufferView",t.bufferView).then(function(f){u=!0;const m=new Blob([f],{type:t.mimeType});return h=c.createObjectURL(m),h});else if(t.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(h).then(function(f){return new Promise(function(m,_){let x=m;n.isImageBitmapLoader===!0&&(x=function(p){const g=new at(p);g.needsUpdate=!0,m(g)}),n.load(ei.resolveURL(f,s.path),x,void 0,_)})}).then(function(f){u===!0&&c.revokeObjectURL(h),f.flipY=!1,a.name&&(f.name=a.name);const _=(r.samplers||{})[a.sampler]||{};return f.magFilter=ff[_.magFilter]||rt,f.minFilter=ff[_.minFilter]||Wi,f.wrapS=pf[_.wrapS]||Gi,f.wrapT=pf[_.wrapT]||Gi,i.associations.set(f,{textures:e}),f}).catch(function(){return console.error("THREE.GLTFLoader: Couldn't load texture",h),null});return this.textureCache[l]=d,d}assignTexture(e,t,n){const i=this;return this.getDependency("texture",n.index).then(function(r){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),i.extensions[Be.KHR_TEXTURE_TRANSFORM]){const s=n.extensions!==void 0?n.extensions[Be.KHR_TEXTURE_TRANSFORM]:void 0;if(s){const a=i.associations.get(r);r=i.extensions[Be.KHR_TEXTURE_TRANSFORM].extendTexture(r,s),i.associations.set(r,a)}}return e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new tl,dt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new wr,dt.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||r||s){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),s&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return gs}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let s;const a={},l=r.extensions||{},c=[];if(l[Be.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const u=i[Be.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];s=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else if(l[Be.KHR_MATERIALS_UNLIT]){const u=i[Be.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new ue(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=mi);const h=r.alphaMode||oc.OPAQUE;if(h===oc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.format=zn,a.transparent=!1,h===oc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==Ln&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new j(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}return r.occlusionTexture!==void 0&&s!==Ln&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==Ln&&(a.emissive=new ue().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&s!==Ln&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture)),Promise.all(c).then(function(){let u;return s===rc?u=i[Be.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):u=new s(a),r.name&&(u.name=r.name),u.map&&(u.map.encoding=wn),u.emissiveMap&&(u.emissiveMap.encoding=wn),Bi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Us(i,u,r),u})}createUniqueName(e){const t=Ve.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Be.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return xf(l,a,t)})}const s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=gM(c),u=i[h];if(u)s.push(u.promise);else{let d;c.extensions&&c.extensions[Be.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=xf(new Ge,c,t),i[h]={primitive:c,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,a=[];for(let l=0,c=s.length;l<c;l++){const h=s[l].material===void 0?fM(this.cache):this.getDependency("material",s[l].material);a.push(h)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const _=h[f],x=s[f];let p;const g=c[f];if(x.mode===Un.TRIANGLES||x.mode===Un.TRIANGLE_STRIP||x.mode===Un.TRIANGLE_FAN||x.mode===void 0)p=r.isSkinnedMesh===!0?new Za(_,g):new wt(_,g),p.isSkinnedMesh===!0&&!p.geometry.attributes.skinWeight.normalized&&p.normalizeSkinWeights(),x.mode===Un.TRIANGLE_STRIP?p.geometry=vf(p.geometry,Kp):x.mode===Un.TRIANGLE_FAN&&(p.geometry=vf(p.geometry,Bc));else if(x.mode===Un.LINES)p=new Ao(_,g);else if(x.mode===Un.LINE_STRIP)p=new Eo(_,g);else if(x.mode===Un.LINE_LOOP)p=new su(_,g);else if(x.mode===Un.POINTS)p=new au(_,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(p.geometry.morphAttributes).length>0&&mM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Bi(p,r),x.extensions&&Us(i,p,x),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return u[0];const d=new Jn;t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(mm.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new dr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],r=[],s=[],a=[],l=[];for(let c=0,h=n.channels.length;c<h;c++){const u=n.channels[c],d=n.samplers[u.sampler],f=u.target,m=f.node!==void 0?f.node:f.id,_=n.parameters!==void 0?n.parameters[d.input]:d.input,x=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",m)),r.push(this.getDependency("accessor",_)),s.push(this.getDependency("accessor",x)),a.push(d),l.push(f)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(s),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2],f=c[3],m=c[4],_=[];for(let p=0,g=h.length;p<g;p++){const b=h[p],v=u[p],y=d[p],E=f[p],L=m[p];if(b===void 0)continue;b.updateMatrix(),b.matrixAutoUpdate=!0;let N;switch(di[L.path]){case di.weights:N=_s;break;case di.rotation:N=Ei;break;case di.position:case di.scale:default:N=xs;break}const B=b.name?b.name:b.uuid,H=E.interpolation!==void 0?dM[E.interpolation]:qi,D=[];di[L.path]===di.weights?b.traverse(function(M){M.morphTargetInfluences&&D.push(M.name?M.name:M.uuid)}):D.push(B);let w=y.array;if(y.normalized){const M=ac(w.constructor),I=new Float32Array(w.length);for(let O=0,F=w.length;O<F;O++)I[O]=w[O]*M;w=I}for(let M=0,I=D.length;M<I;M++){const O=new N(D[M]+"."+di[L.path],v.array,w,H);E.interpolation==="CUBICSPLINE"&&(O.createInterpolant=function(U){const te=this instanceof Ei?uM:Oi;return new te(this.times,this.values,this.getValueSize()/3,U)},O.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),_.push(O)}}const x=n.name?n.name:"animation_"+e;return new pl(x,void 0,_)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(a){if(!!a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),s})}loadNode(e){const t=this.json,n=this.extensions,i=this,r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"";return function(){const a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let l;if(r.isBone===!0?l=new Ja:a.length>1?l=new Jn:a.length===1?l=a[0]:l=new He,l!==a[0])for(let c=0,h=a.length;c<h;c++)l.add(a[c]);if(r.name&&(l.userData.name=r.name,l.name=s),Bi(l,r),r.extensions&&Us(n,l,r),r.matrix!==void 0){const c=new me;c.fromArray(r.matrix),l.applyMatrix4(c)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],r=this,s=new Jn;i.name&&(s.name=r.createUniqueName(i.name)),Bi(s,i),i.extensions&&Us(n,s,i);const a=i.nodes||[],l=[];for(let c=0,h=a.length;c<h;c++)l.push(_f(a[c],s,t,r));return Promise.all(l).then(function(){const c=h=>{const u=new Map;for(const[d,f]of r.associations)(d instanceof dt||d instanceof at)&&u.set(d,f);return h.traverse(d=>{const f=r.associations.get(d);f!=null&&u.set(d,f)}),u};return r.associations=c(s),s})}}function _f(o,e,t,n){const i=t.nodes[o];return n.getDependency("node",o).then(function(r){if(i.skin===void 0)return r;let s;return n.getDependency("skin",i.skin).then(function(a){s=a;const l=[];for(let c=0,h=s.joints.length;c<h;c++)l.push(n.getDependency("node",s.joints[c]));return Promise.all(l)}).then(function(a){return r.traverse(function(l){if(!l.isMesh)return;const c=[],h=[];for(let u=0,d=a.length;u<d;u++){const f=a[u];if(f){c.push(f);const m=new me;s.inverseBindMatrices!==void 0&&m.fromArray(s.inverseBindMatrices.array,u*16),h.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',s.joints[u])}l.bind(new Ka(c,h),l.matrixWorld)}),r})}).then(function(r){e.add(r);const s=[];if(i.children){const a=i.children;for(let l=0,c=a.length;l<c;l++){const h=a[l];s.push(_f(h,r,t,n))}}return Promise.all(s)})}function xM(o,e,t){const n=e.attributes,i=new Wt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){const h=ac(Bs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new C,l=new C;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=ac(Bs[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const s=new bi;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=s}function xf(o,e,t){const n=e.attributes,i=[];function r(s,a){return t.getDependency("accessor",s).then(function(l){o.setAttribute(a,l)})}for(const s in n){const a=sc[s]||s.toLowerCase();a in o.attributes||i.push(r(n[s],a))}if(e.indices!==void 0&&!o.index){const s=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(s)}return Bi(o,e),xM(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?pM(o,e.targets,t):o})}function vf(o,e){let t=o.getIndex();if(t===null){const s=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)s.push(l);o.setIndex(s),t=o.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===Bc)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2==0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=o.clone();return r.setIndex(i),r}const lc=new WeakMap;class CM extends fn{constructor(e){super(e);this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new vs(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,s=>{const a={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(s,a).then(t).catch(i)},n,i)}decodeDracoFile(e,t,n,i){const r={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};this.decodeGeometry(e,r).then(t)}decodeGeometry(e,t){for(const l in t.attributeTypes){const c=t.attributeTypes[l];c.BYTES_PER_ELEMENT!==void 0&&(t.attributeTypes[l]=c.name)}const n=JSON.stringify(t);if(lc.has(e)){const l=lc.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,s=e.byteLength,a=this._getWorker(r,s).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[r]={resolve:c,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),lc.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Ge;e.index&&t.setIndex(new Qe(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,s=i.array,a=i.itemSize;t.setAttribute(r,new Qe(s,a))}return t}_loadLibrary(e,t){const n=new vs(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=vM.toString(),s=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([s]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const s=r.data;switch(s.type){case"decode":i._callbacks[s.id].resolve(s);break;case"error":i._callbacks[s.id].reject(s);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+s.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function vM(){let o,e;onmessage=function(s){const a=s.data;switch(a.type){case"init":o=a.decoderConfig,e=new Promise(function(h){o.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(o)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder,f=new u.DecoderBuffer;f.Init(new Int8Array(l),l.byteLength);try{const m=t(u,d,f,c),_=m.attributes.map(x=>x.array.buffer);m.index&&_.push(m.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:m},_)}catch(m){console.error(m),self.postMessage({type:"error",id:a.id,error:m.message})}finally{u.destroy(f),u.destroy(d)}});break}};function t(s,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const m=a.GetEncodedGeometryType(l);if(m===s.TRIANGULAR_MESH)d=new s.Mesh,f=a.DecodeBufferToMesh(l,d);else if(m===s.POINT_CLOUD)d=new s.PointCloud,f=a.DecodeBufferToPointCloud(l,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const x in h){const p=self[u[x]];let g,b;if(c.useUniqueIDs)b=h[x],g=a.GetAttributeByUniqueId(d,b);else{if(b=a.GetAttributeId(d,s[h[x]]),b===-1)continue;g=a.GetAttribute(d,b)}_.attributes.push(i(s,a,d,x,p,g))}return m===s.TRIANGULAR_MESH&&(_.index=n(s,a,d)),s.destroy(d),_}function n(s,a,l){const h=l.num_faces()*3,u=h*4,d=s._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(s.HEAPF32.buffer,d,h).slice();return s._free(d),{array:f,itemSize:1}}function i(s,a,l,c,h,u){const d=u.num_components(),m=l.num_points()*d,_=m*h.BYTES_PER_ELEMENT,x=r(s,h),p=s._malloc(_);a.GetAttributeDataArrayForAllPoints(l,u,x,_,p);const g=new h(s.HEAPF32.buffer,p,m).slice();return s._free(p),{name:c,array:g,itemSize:d}}function r(s,a){switch(a){case Float32Array:return s.DT_FLOAT32;case Int8Array:return s.DT_INT8;case Int16Array:return s.DT_INT16;case Int32Array:return s.DT_INT32;case Uint8Array:return s.DT_UINT8;case Uint16Array:return s.DT_UINT16;case Uint32Array:return s.DT_UINT32}}}export{ea as A,EM as B,ue as C,CM as D,SM as E,tf as G,rt as L,Ln as M,it as N,wM as O,Lt as P,zn as R,MM as S,Tu as T,Ns as U,C as V,je as W,TM as a,j as b,vt as c,AM as d,nv as e,cu as f,wt as g,Dt as h,Pb as i,Ge as j,Qe as k,au as l,Jn as m,bM as n,Hh as o,wn as s};
