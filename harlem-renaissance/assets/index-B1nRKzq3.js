(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Xu="harlem-a11y";function uc(){var r,e;return((e=(r=window.matchMedia)==null?void 0:r.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:e.matches)??!1}function dc(){var r,e;return((e=(r=window.matchMedia)==null?void 0:r.call(window,"(prefers-contrast: more)"))==null?void 0:e.matches)??!1}function ju(){return{reducedMotion:uc(),reducedFollowOs:!0,highContrast:dc(),contrastFollowOs:!0,largeText:!1,readableFont:!1,underlineLinks:!0,extraSpacing:!1,chromeHidden:!1,hideShortcut:!0,v:1}}function cf(){const r=ju();try{const e=JSON.parse(localStorage.getItem(Xu)||"null");if(!e||typeof e!="object")return r;const t=Object.assign(r,e);return t.reducedFollowOs!==!1&&(t.reducedMotion=uc(),t.reducedFollowOs=!0),t.contrastFollowOs!==!1&&(t.highContrast=dc(),t.contrastFollowOs=!0),t}catch{return r}}function qu(r){try{localStorage.setItem(Xu,JSON.stringify(r))}catch{}}function Yu(r){return r.reducedFollowOs!==!1?uc():!!r.reducedMotion}function $u(r){return r.contrastFollowOs!==!1?dc():!!r.highContrast}function Ku(r){const e=document.documentElement;e.classList.toggle("a11y-reduced",Yu(r)),e.classList.toggle("a11y-high-contrast",$u(r)),e.classList.toggle("a11y-large-text",!!r.largeText),e.classList.toggle("a11y-readable",!!r.readableFont),e.classList.toggle("a11y-underline",r.underlineLinks!==!1),e.classList.toggle("a11y-spacing",!!r.extraSpacing),e.classList.toggle("a11y-chrome-hidden",!!r.chromeHidden)}function hf(r){const e=document.getElementById("a11y-announcer");!e||!r||(e.setAttribute("aria-live","polite"),e.textContent="",requestAnimationFrame(()=>{e.textContent=r}))}const ot=cf();Ku(ot);qu(ot);const mt=document.getElementById("a11y-settings"),Nt=document.getElementById("a11y-settings-btn"),zi=document.getElementById("a11y-hide"),Hi=document.getElementById("a11y-tab"),No={reducedMotion:"a11y-reduced",highContrast:"a11y-contrast",largeText:"a11y-large",readableFont:"a11y-font",underlineLinks:"a11y-links",extraSpacing:"a11y-space",hideShortcut:"a11y-hide-key"};function Ju(){Object.keys(No).forEach(r=>{const e=document.getElementById(No[r]);e&&(r==="reducedMotion"?e.checked=Yu(ot):r==="highContrast"?e.checked=$u(ot):e.checked=!!ot[r])}),zi&&(zi.setAttribute("aria-pressed",ot.chromeHidden?"true":"false"),zi.tabIndex=ot.chromeHidden?-1:0),Nt&&(Nt.setAttribute("aria-expanded",mt&&mt.open?"true":"false"),Nt.tabIndex=ot.chromeHidden?-1:0),Hi&&(Hi.setAttribute("aria-hidden",ot.chromeHidden?"false":"true"),Hi.tabIndex=ot.chromeHidden?0:-1),[zi,Hi].forEach(r=>{r&&(ot.hideShortcut?r.setAttribute("aria-keyshortcuts","h"):r.removeAttribute("aria-keyshortcuts"))})}function Ns(r){qu(ot),Ku(ot),Ju(),r&&hf(r)}Object.keys(No).forEach(r=>{const e=document.getElementById(No[r]);e&&e.addEventListener("change",()=>{ot[r]=e.checked,r==="reducedMotion"&&(ot.reducedFollowOs=!1),r==="highContrast"&&(ot.contrastFollowOs=!1),Ns("Accessibility settings updated.")})});function uf(){var r;ot.chromeHidden&&(ot.chromeHidden=!1,Ns()),mt&&typeof mt.showModal=="function"?mt.showModal():mt&&mt.setAttribute("open",""),Nt==null||Nt.setAttribute("aria-expanded","true"),(r=document.getElementById("a11y-settings-title"))==null||r.focus()}function fc(){mt&&typeof mt.close=="function"?mt.close():mt&&mt.removeAttribute("open"),Nt&&(Nt.setAttribute("aria-expanded","false"),Nt.focus())}Nt==null||Nt.addEventListener("click",()=>{mt!=null&&mt.open?fc():uf()});var Ou;(Ou=document.getElementById("a11y-close"))==null||Ou.addEventListener("click",fc);mt==null||mt.addEventListener("cancel",r=>{r.preventDefault(),fc()});mt==null||mt.addEventListener("keydown",r=>{r.stopPropagation()});function Vo(r){ot.chromeHidden=!!r,Ns(r?"Tour controls hidden. Press H or Show tour controls to bring them back.":"Tour controls shown.")}zi==null||zi.addEventListener("click",()=>Vo(!0));Hi==null||Hi.addEventListener("click",()=>{Vo(!1),Nt==null||Nt.focus()});var Bu;(Bu=document.getElementById("a11y-reset"))==null||Bu.addEventListener("click",()=>{const r=ju();Object.keys(r).forEach(e=>{ot[e]=r[e]}),Ns("Accessibility settings reset to defaults.")});var zu;(zu=document.querySelector('a.skip-link[href="#a11y-settings-btn"]'))==null||zu.addEventListener("click",r=>{r.preventDefault(),ot.chromeHidden&&Vo(!1),Nt==null||Nt.focus()});window.addEventListener("keydown",r=>{var t,n;if(r.code!=="KeyH"||r.repeat)return;const e=(t=r.target)==null?void 0:t.tagName;e==="INPUT"||e==="SELECT"||e==="TEXTAREA"||(n=r.target)!=null&&n.isContentEditable||mt!=null&&mt.open||(r.preventDefault(),r.stopImmediatePropagation(),ot.hideShortcut&&Vo(!ot.chromeHidden))},!0);var Hu,So,Gu;(Gu=(So=(Hu=window.matchMedia)==null?void 0:Hu.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:So.addEventListener)==null||Gu.call(So,"change",r=>{ot.reducedFollowOs!==!1&&(ot.reducedMotion=r.matches,Ns())});var Vu,wo,Wu;(Wu=(wo=(Vu=window.matchMedia)==null?void 0:Vu.call(window,"(prefers-contrast: more)"))==null?void 0:wo.addEventListener)==null||Wu.call(wo,"change",r=>{ot.contrastFollowOs!==!1&&(ot.highContrast=r.matches,Ns())});Ju();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wo="175",df=0,Vc=1,ff=2,Zu=1,Qu=2,Yn=3,xn=0,kt=1,ut=2,_i=0,xs=1,Wc=2,Xc=3,jc=4,pf=5,Oi=100,mf=101,gf=102,_f=103,bf=104,xf=200,yf=201,vf=202,Mf=203,al=204,ll=205,Sf=206,wf=207,Ef=208,Af=209,Tf=210,Cf=211,Rf=212,Pf=213,Lf=214,cl=0,hl=1,ul=2,ws=3,dl=4,fl=5,pl=6,ml=7,ed=0,If=1,Df=2,ei=0,td=1,nd=2,id=3,Xo=4,Nf=5,sd=6,rd=7,qc="attached",Ff="detached",od=300,Es=301,As=302,gl=303,_l=304,jo=306,Ts=1e3,Nn=1001,Fo=1002,Jt=1003,ad=1004,or=1005,Dt=1006,Eo=1007,Fn=1008,ii=1009,ld=1010,cd=1011,pr=1012,pc=1013,bi=1014,Wt=1015,Zn=1016,mc=1017,gc=1018,mr=1020,hd=35902,ud=1021,dd=1022,nn=1023,fd=1024,pd=1025,gr=1026,_r=1027,_c=1028,qo=1029,md=1030,bc=1031,xc=1033,Ao=33776,To=33777,Co=33778,Ro=33779,bl=35840,xl=35841,yl=35842,vl=35843,Ml=36196,Sl=37492,wl=37496,El=37808,Al=37809,Tl=37810,Cl=37811,Rl=37812,Pl=37813,Ll=37814,Il=37815,Dl=37816,Nl=37817,Fl=37818,Ul=37819,kl=37820,Ol=37821,Po=36492,Bl=36494,zl=36495,gd=36283,Hl=36284,Gl=36285,Vl=36286,br=2300,xr=2301,sa=2302,Yc=2400,$c=2401,Kc=2402,Uf=2500,kf=0,_d=1,Wl=2,Of=3200,Bf=3201,bd=0,zf=1,pi="",ht="srgb",Ot="srgb-linear",Uo="linear",it="srgb",ji=7680,Jc=519,Hf=512,Gf=513,Vf=514,xd=515,Wf=516,Xf=517,jf=518,qf=519,Xl=35044,Zc="300 es",Qn=2e3,ko=2001;class Fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qc=1234567;const cr=Math.PI/180,Cs=180/Math.PI;function Cn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[r&255]+zt[r>>8&255]+zt[r>>16&255]+zt[r>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Oe(r,e,t){return Math.max(e,Math.min(t,r))}function yc(r,e){return(r%e+e)%e}function Yf(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function $f(r,e,t){return r!==e?(t-r)/(e-r):0}function hr(r,e,t){return(1-t)*r+t*e}function Kf(r,e,t,n){return hr(r,e,1-Math.exp(-t*n))}function Jf(r,e=1){return e-Math.abs(yc(r,e*2)-e)}function Zf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Qf(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ep(r,e){return r+Math.floor(Math.random()*(e-r+1))}function tp(r,e){return r+Math.random()*(e-r)}function np(r){return r*(.5-Math.random())}function ip(r){r!==void 0&&(Qc=r);let e=Qc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sp(r){return r*cr}function rp(r){return r*Cs}function op(r){return(r&r-1)===0&&r!==0}function ap(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function lp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function cp(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*p,a*c);break;case"YXY":r.set(l*p,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Mt={DEG2RAD:cr,RAD2DEG:Cs,generateUUID:Cn,clamp:Oe,euclideanModulo:yc,mapLinear:Yf,inverseLerp:$f,lerp:hr,damp:Kf,pingpong:Jf,smoothstep:Zf,smootherstep:Qf,randInt:ep,randFloat:tp,randFloatSpread:np,seededRandom:ip,degToRad:sp,radToDeg:rp,isPowerOfTwo:op,ceilPowerOfTwo:ap,floorPowerOfTwo:lp,setQuaternionFromProperEuler:cp,normalize:tt,denormalize:Tn};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,n,i,s,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],b=i[0],m=i[3],f=i[6],_=i[1],y=i[4],x=i[7],M=i[2],E=i[5],w=i[8];return s[0]=o*b+a*_+l*M,s[3]=o*m+a*y+l*E,s[6]=o*f+a*x+l*w,s[1]=c*b+h*_+u*M,s[4]=c*m+h*y+u*E,s[7]=c*f+h*x+u*w,s[2]=d*b+p*_+g*M,s[5]=d*m+p*y+g*E,s[8]=d*f+p*x+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,p=c*s-o*l,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=u*b,e[1]=(i*c-h*n)*b,e[2]=(a*n-i*o)*b,e[3]=d*b,e[4]=(h*t-i*l)*b,e[5]=(i*s-a*t)*b,e[6]=p*b,e[7]=(n*l-c*t)*b,e[8]=(o*t-n*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ra.makeScale(e,t)),this}rotate(e){return this.premultiply(ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new Fe;function yd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function yr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hp(){const r=yr("canvas");return r.style.display="block",r}const eh={};function Lo(r){r in eh||(eh[r]=!0,console.warn(r))}function up(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function dp(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fp(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const th=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nh=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pp(){const r={enabled:!0,workingColorSpace:Ot,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===it&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pi?Uo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ot]:{primaries:e,whitePoint:n,transfer:Uo,toXYZ:th,fromXYZ:nh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ht},outputColorSpaceConfig:{drawingBufferColorSpace:ht}},[ht]:{primaries:e,whitePoint:n,transfer:it,toXYZ:th,fromXYZ:nh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ht}}}),r}const Ge=pp();function ti(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ys(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let qi;class mp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qi===void 0&&(qi=yr("canvas")),qi.width=e.width,qi.height=e.height;const i=qi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=qi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ti(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gp=0;class vc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Cn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(oa(i[o].image)):s.push(oa(i[o]))}else s=oa(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function oa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?mp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _p=0;class Ct extends Fs{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=Nn,i=Nn,s=Dt,o=Fn,a=nn,l=ii,c=Ct.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Cn(),this.name="",this.source=new vc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==od)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ts:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case Fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ts:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case Fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=od;Ct.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,i=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],b=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(p+1)/2,M=(f+1)/2,E=(h+d)/4,w=(u+b)/4,T=(g+m)/4;return y>x&&y>M?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=w/n):x>M?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=T/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=w/s,i=T/s),this.set(n,i,s,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-b)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bp extends Fs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new vc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends bp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vd extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xp extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],p=s[o+1],g=s[o+2],b=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=b;return}if(u!==b||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*b,_=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const M=Math.sqrt(y),E=Math.atan2(M,f*_);m=Math.sin(m*E)/M,a=Math.sin(a*E)/M}const x=a*_;if(l=l*m+d*x,c=c*m+p*x,h=h*m+g*x,u=u*m+b*x,m===1-a){const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ih.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ih.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return aa.copy(this).projectOnVector(e),this.sub(aa)}reflect(e){return this.sub(aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new A,ih=new Bn;class Ce{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(s,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Cr.subVectors(this.max,Gs),Yi.subVectors(e.a,Gs),$i.subVectors(e.b,Gs),Ki.subVectors(e.c,Gs),ri.subVectors($i,Yi),oi.subVectors(Ki,$i),Ei.subVectors(Yi,Ki);let t=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Ei.z,Ei.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Ei.z,0,-Ei.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Ei.y,Ei.x,0];return!la(t,Yi,$i,Ki,Cr)||(t=[1,0,0,0,1,0,0,0,1],!la(t,Yi,$i,Ki,Cr))?!1:(Rr.crossVectors(ri,oi),t=[Rr.x,Rr.y,Rr.z],la(t,Yi,$i,Ki,Cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gn=[new A,new A,new A,new A,new A,new A,new A,new A],Mn=new A,Tr=new Ce,Yi=new A,$i=new A,Ki=new A,ri=new A,oi=new A,Ei=new A,Gs=new A,Cr=new A,Rr=new A,Ai=new A;function la(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ai.fromArray(r,s);const a=i.x*Math.abs(Ai.x)+i.y*Math.abs(Ai.y)+i.z*Math.abs(Ai.z),l=e.dot(Ai),c=t.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const yp=new Ce,Vs=new A,ca=new A;class Xt{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const t=Vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(ca)),this.expandByPoint(Vs.copy(e.center).sub(ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new A,ha=new A,Pr=new A,ai=new A,ua=new A,Lr=new A,da=new A;class Us{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ha.copy(e).add(t).multiplyScalar(.5),Pr.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(ha);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Pr),a=ai.dot(this.direction),l=-ai.dot(Pr),c=ai.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const b=1/h;u*=b,d*=b,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ha).addScaledVector(Pr,d),p}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,i,s){ua.subVectors(t,e),Lr.subVectors(n,e),da.crossVectors(ua,Lr);let o=this.direction.dot(da),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,e);const l=a*this.direction.dot(Lr.crossVectors(ai,Lr));if(l<0)return null;const c=a*this.direction.dot(ua.cross(ai));if(c<0||l+c>o)return null;const h=-a*ai.dot(da);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(e,t,n,i,s,o,a,l,c,h,u,d,p,g,b,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,d,p,g,b,m)}set(e,t,n,i,s,o,a,l,c,h,u,d,p,g,b,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ji.setFromMatrixColumn(e,0).length(),s=1/Ji.setFromMatrixColumn(e,1).length(),o=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,b=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-b*c,t[9]=-a*l,t[2]=b-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,b=c*u;t[0]=d+b*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=b+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,b=c*u;t[0]=d-b*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=b-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,b=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+b,t[1]=l*u,t[5]=b*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,b=a*c;t[0]=l*h,t[4]=b-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-b*u}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,b=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+b,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vp,e,Mp)}lookAt(e,t,n){const i=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),li.crossVectors(n,rn),li.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),li.crossVectors(n,rn)),li.normalize(),Ir.crossVectors(rn,li),i[0]=li.x,i[4]=Ir.x,i[8]=rn.x,i[1]=li.y,i[5]=Ir.y,i[9]=rn.y,i[2]=li.z,i[6]=Ir.z,i[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],b=n[6],m=n[10],f=n[14],_=n[3],y=n[7],x=n[11],M=n[15],E=i[0],w=i[4],T=i[8],S=i[12],v=i[1],P=i[5],I=i[9],D=i[13],N=i[2],z=i[6],k=i[10],j=i[14],W=i[3],Q=i[7],ie=i[11],be=i[15];return s[0]=o*E+a*v+l*N+c*W,s[4]=o*w+a*P+l*z+c*Q,s[8]=o*T+a*I+l*k+c*ie,s[12]=o*S+a*D+l*j+c*be,s[1]=h*E+u*v+d*N+p*W,s[5]=h*w+u*P+d*z+p*Q,s[9]=h*T+u*I+d*k+p*ie,s[13]=h*S+u*D+d*j+p*be,s[2]=g*E+b*v+m*N+f*W,s[6]=g*w+b*P+m*z+f*Q,s[10]=g*T+b*I+m*k+f*ie,s[14]=g*S+b*D+m*j+f*be,s[3]=_*E+y*v+x*N+M*W,s[7]=_*w+y*P+x*z+M*Q,s[11]=_*T+y*I+x*k+M*ie,s[15]=_*S+y*D+x*j+M*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],b=e[7],m=e[11],f=e[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*p-n*l*p)+b*(+t*l*p-t*c*d+s*o*d-i*o*p+i*c*h-s*l*h)+m*(+t*c*u-t*a*p-s*o*u+n*o*p+s*a*h-n*c*h)+f*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],b=e[13],m=e[14],f=e[15],_=u*m*c-b*d*c+b*l*p-a*m*p-u*l*f+a*d*f,y=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,x=h*b*c-g*u*c+g*a*p-o*b*p-h*a*f+o*u*f,M=g*u*l-h*b*l-g*a*d+o*b*d+h*a*m-o*u*m,E=t*_+n*y+i*x+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=_*w,e[1]=(b*d*s-u*m*s-b*i*p+n*m*p+u*i*f-n*d*f)*w,e[2]=(a*m*s-b*l*s+b*i*c-n*m*c-a*i*f+n*l*f)*w,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*p-n*l*p)*w,e[4]=y*w,e[5]=(h*m*s-g*d*s+g*i*p-t*m*p-h*i*f+t*d*f)*w,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*f-t*l*f)*w,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*p+t*l*p)*w,e[8]=x*w,e[9]=(g*u*s-h*b*s-g*n*p+t*b*p+h*n*f-t*u*f)*w,e[10]=(o*b*s-g*a*s+g*n*c-t*b*c-o*n*f+t*a*f)*w,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*p-t*a*p)*w,e[12]=M*w,e[13]=(h*b*i-g*u*i+g*n*d-t*b*d-h*n*m+t*u*m)*w,e[14]=(g*a*i-o*b*i-g*n*l+t*b*l+o*n*m-t*a*m)*w,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,p=s*h,g=s*u,b=o*h,m=o*u,f=a*u,_=l*c,y=l*h,x=l*u,M=n.x,E=n.y,w=n.z;return i[0]=(1-(b+f))*M,i[1]=(p+x)*M,i[2]=(g-y)*M,i[3]=0,i[4]=(p-x)*E,i[5]=(1-(d+f))*E,i[6]=(m+_)*E,i[7]=0,i[8]=(g+y)*w,i[9]=(m-_)*w,i[10]=(1-(d+b))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ji.set(i[0],i[1],i[2]).length();const o=Ji.set(i[4],i[5],i[6]).length(),a=Ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Sn.copy(this);const c=1/s,h=1/o,u=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,t.setFromRotationMatrix(Sn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Qn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(a===Qn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ko)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Qn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-s),d=(t+e)*c,p=(n+i)*h;let g,b;if(a===Qn)g=(o+s)*u,b=-2*u;else if(a===ko)g=s*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=b,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ji=new A,Sn=new ve,vp=new A(0,0,0),Mp=new A(1,1,1),li=new A,Ir=new A,rn=new A,sh=new ve,rh=new Bn;class Rn{constructor(e=0,t=0,n=0,i=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rh.setFromEuler(this),this.setFromQuaternion(rh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class Mc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sp=0;const oh=new A,Zi=new Bn,Wn=new ve,Dr=new A,Ws=new A,wp=new A,Ep=new Bn,ah=new A(1,0,0),lh=new A(0,1,0),ch=new A(0,0,1),hh={type:"added"},Ap={type:"removed"},Qi={type:"childadded",child:null},fa={type:"childremoved",child:null};class st extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new A,t=new Rn,n=new Bn,i=new A(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ve},normalMatrix:{value:new Fe}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(ah,e)}rotateY(e){return this.rotateOnAxis(lh,e)}rotateZ(e){return this.rotateOnAxis(ch,e)}translateOnAxis(e,t){return oh.copy(e).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ah,e)}translateY(e){return this.translateOnAxis(lh,e)}translateZ(e){return this.translateOnAxis(ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dr.copy(e):Dr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Ws,Dr,this.up):Wn.lookAt(Dr,Ws,this.up),this.quaternion.setFromRotationMatrix(Wn),i&&(Wn.extractRotation(i.matrixWorld),Zi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hh),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ap),fa.child=e,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hh),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,wp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Ep,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}st.DEFAULT_UP=new A(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new A,Xn=new A,pa=new A,jn=new A,es=new A,ts=new A,uh=new A,ma=new A,ga=new A,_a=new A,ba=new Je,xa=new Je,ya=new Je;class It{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),wn.subVectors(e,t),i.cross(wn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){wn.subVectors(i,t),Xn.subVectors(n,t),pa.subVectors(e,t);const o=wn.dot(wn),a=wn.dot(Xn),l=wn.dot(pa),c=Xn.dot(Xn),h=Xn.dot(pa),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return ba.setScalar(0),xa.setScalar(0),ya.setScalar(0),ba.fromBufferAttribute(e,t),xa.fromBufferAttribute(e,n),ya.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ba,s.x),o.addScaledVector(xa,s.y),o.addScaledVector(ya,s.z),o}static isFrontFacing(e,t,n,i){return wn.subVectors(n,t),Xn.subVectors(e,t),wn.cross(Xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),wn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return It.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return It.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return It.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return It.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return It.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;es.subVectors(i,n),ts.subVectors(s,n),ma.subVectors(e,n);const l=es.dot(ma),c=ts.dot(ma);if(l<=0&&c<=0)return t.copy(n);ga.subVectors(e,i);const h=es.dot(ga),u=ts.dot(ga);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(es,o);_a.subVectors(e,s);const p=es.dot(_a),g=ts.dot(_a);if(g>=0&&p<=g)return t.copy(s);const b=p*c-l*g;if(b<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ts,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return uh.subVectors(s,i),a=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(uh,a);const f=1/(m+b+d);return o=b*f,a=d*f,t.copy(n).addScaledVector(es,o).addScaledVector(ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function va(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ge.workingColorSpace){if(e=yc(e,1),t=Oe(t,0,1),n=Oe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=va(o,s,e+1/3),this.g=va(o,s,e),this.b=va(o,s,e-1/3)}return Ge.toWorkingColorSpace(this,i),this}setStyle(e,t=ht){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){const n=Md[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return Ge.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Oe(Ht.r*255,0,255))*65536+Math.round(Oe(Ht.g*255,0,255))*256+Math.round(Oe(Ht.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.fromWorkingColorSpace(Ht.copy(this),t);const n=Ht.r,i=Ht.g,s=Ht.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=ht){Ge.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,i=Ht.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Nr);const n=hr(ci.h,Nr.h,t),i=hr(ci.s,Nr.s,t),s=hr(ci.l,Nr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new we;we.NAMES=Md;let Tp=0;class Un extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=xs,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=al,this.blendDst=ll,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ji,this.stencilZFail=ji,this.stencilZPass=ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==al&&(n.blendSrc=this.blendSrc),this.blendDst!==ll&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Be extends Un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jn=Cp();function Cp(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function Rp(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Oe(r,-65504,65504),Jn.floatView[0]=r;const e=Jn.uint32View[0],t=e>>23&511;return Jn.baseTable[t]+((e&8388607)>>Jn.shiftTable[t])}function Pp(r){const e=r>>10;return Jn.uint32View[0]=Jn.mantissaTable[Jn.offsetTable[e]+(r&1023)]+Jn.exponentTable[e],Jn.floatView[0]}class Fr{static toHalfFloat(e){return Rp(e)}static fromHalfFloat(e){return Pp(e)}}const At=new A,Ur=new De;let Lp=0;class dt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xl,this.updateRanges=[],this.gpuType=Wt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xl&&(e.usage=this.usage),e}}class Sd extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wd extends dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lt extends dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ip=0;const dn=new ve,Ma=new st,ns=new A,on=new Ce,Xs=new Ce,Lt=new A;class rt extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yd(e)?wd:Sd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return Ma.lookAt(e),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ce);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(on.min,Xs.min),on.expandByPoint(Lt),Lt.addVectors(on.max,Xs.max),on.expandByPoint(Lt)):(on.expandByPoint(Xs.min),on.expandByPoint(Xs.max))}on.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Lt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Lt.fromBufferAttribute(a,c),l&&(ns.fromBufferAttribute(e,c),Lt.add(ns)),i=Math.max(i,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new A,l[T]=new A;const c=new A,h=new A,u=new A,d=new De,p=new De,g=new De,b=new A,m=new A;function f(T,S,v){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,v),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,v),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[T].add(b),a[S].add(b),a[v].add(b),l[T].add(m),l[S].add(m),l[v].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let T=0,S=_.length;T<S;++T){const v=_[T],P=v.start,I=v.count;for(let D=P,N=P+I;D<N;D+=3)f(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const y=new A,x=new A,M=new A,E=new A;function w(T){M.fromBufferAttribute(i,T),E.copy(M);const S=a[T];y.copy(S),y.sub(M.multiplyScalar(M.dot(S))).normalize(),x.crossVectors(E,S);const P=x.dot(l[T])<0?-1:1;o.setXYZW(T,y.x,y.y,y.z,P)}for(let T=0,S=_.length;T<S;++T){const v=_[T],P=v.start,I=v.count;for(let D=P,N=P+I;D<N;D+=3)w(e.getX(D+0)),w(e.getX(D+1)),w(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new A,s=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,b),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?p=l[b]*a.data.stride+a.offset:p=l[b]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new dt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dh=new ve,Ti=new Us,kr=new Xt,fh=new A,Or=new A,Br=new A,zr=new A,Sa=new A,Hr=new A,ph=new A,Gr=new A;class he extends st{constructor(e=new rt,t=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Hr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Sa.fromBufferAttribute(u,e),o?Hr.addScaledVector(Sa,h):Hr.addScaledVector(Sa.sub(t),h))}t.add(Hr)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(s),Ti.copy(e.ray).recast(e.near),!(kr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(kr,fh)===null||Ti.origin.distanceToSquared(fh)>(e.far-e.near)**2))&&(dh.copy(s).invert(),Ti.copy(e.ray).applyMatrix4(dh),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,b=d.length;g<b;g++){const m=d[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,M=y;x<M;x+=3){const E=a.getX(x),w=a.getX(x+1),T=a.getX(x+2);i=Vr(this,f,e,n,c,h,u,E,w,T),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),b=Math.min(a.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){const _=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=Vr(this,o,e,n,c,h,u,_,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,b=d.length;g<b;g++){const m=d[g],f=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,M=y;x<M;x+=3){const E=x,w=x+1,T=x+2;i=Vr(this,f,e,n,c,h,u,E,w,T),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){const _=m,y=m+1,x=m+2;i=Vr(this,o,e,n,c,h,u,_,y,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Dp(r,e,t,n,i,s,o,a){let l;if(e.side===kt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===xn,a),l===null)return null;Gr.copy(a),Gr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Gr);return c<t.near||c>t.far?null:{distance:c,point:Gr.clone(),object:r}}function Vr(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Or),r.getVertexPosition(l,Br),r.getVertexPosition(c,zr);const h=Dp(r,e,t,n,Or,Br,zr,ph);if(h){const u=new A;It.getBarycoord(ph,Or,Br,zr,u),i&&(h.uv=It.getInterpolatedAttribute(i,a,l,c,u,new De)),s&&(h.uv1=It.getInterpolatedAttribute(s,a,l,c,u,new De)),o&&(h.normal=It.getInterpolatedAttribute(o,a,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new A,materialIndex:0};It.getNormal(Or,Br,zr,d.normal),h.face=d,h.barycoord=u}return h}class jt extends rt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function g(b,m,f,_,y,x,M,E,w,T,S){const v=x/w,P=M/T,I=x/2,D=M/2,N=E/2,z=w+1,k=T+1;let j=0,W=0;const Q=new A;for(let ie=0;ie<k;ie++){const be=ie*P-D;for(let Ae=0;Ae<z;Ae++){const ze=Ae*v-I;Q[b]=ze*_,Q[m]=be*y,Q[f]=N,c.push(Q.x,Q.y,Q.z),Q[b]=0,Q[m]=0,Q[f]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(Ae/w),u.push(1-ie/T),j+=1}}for(let ie=0;ie<T;ie++)for(let be=0;be<w;be++){const Ae=d+be+z*ie,ze=d+be+z*(ie+1),q=d+(be+1)+z*(ie+1),te=d+(be+1)+z*ie;l.push(Ae,ze,te),l.push(ze,q,te),W+=6}a.addGroup(p,W,S),p+=W,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $t(r){const e={};for(let t=0;t<r.length;t++){const n=Rs(r[t]);for(const i in n)e[i]=n[i]}return e}function Np(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ed(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const Fp={clone:Rs,merge:$t};var Up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Up,this.fragmentShader=kp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=Np(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ad extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new A,mh=new De,gh=new De;class Kt extends Ad{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,mh,gh),t.subVectors(gh,mh)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const is=-90,ss=1;class Op extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Kt(is,ss,e,t);i.layers=this.layers,this.add(i);const s=new Kt(is,ss,e,t);s.layers=this.layers,this.add(s);const o=new Kt(is,ss,e,t);o.layers=this.layers,this.add(o);const a=new Kt(is,ss,e,t);a.layers=this.layers,this.add(a);const l=new Kt(is,ss,e,t);l.layers=this.layers,this.add(l);const c=new Kt(is,ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Td extends Ct{constructor(e=[],t=Es,n,i,s,o,a,l,c,h){super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bp extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Td(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new jt(5,5,5),s=new xi({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:_i});s.uniforms.tEquirect.value=t;const o=new he(i,s),a=t.minFilter;return t.minFilter===Fn&&(t.minFilter=Dt),new Op(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class gt extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zp={type:"move"};class wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),f=this._getHandJoint(c,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Oo extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Hp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xl,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new A;class Sc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Sc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const _h=new A,bh=new Je,xh=new Je,Gp=new A,yh=new ve,Wr=new A,Ea=new Xt,vh=new ve,Aa=new Us;class Vp extends he{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qc,this.bindMatrix=new ve,this.bindMatrixInverse=new ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ce),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wr),this.boundingBox.expandByPoint(Wr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wr),this.boundingSphere.expandByPoint(Wr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ea.copy(this.boundingSphere),Ea.applyMatrix4(i),e.ray.intersectsSphere(Ea)!==!1&&(vh.copy(i).invert(),Aa.copy(e.ray).applyMatrix4(vh),!(this.boundingBox!==null&&Aa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Aa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ff?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;bh.fromBufferAttribute(i.attributes.skinIndex,e),xh.fromBufferAttribute(i.attributes.skinWeight,e),_h.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=xh.getComponent(s);if(o!==0){const a=bh.getComponent(s);yh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Gp.copy(_h).applyMatrix4(yh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Cd extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class vs extends Ct{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Jt,h=Jt,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mh=new ve,Wp=new ve;class wc{constructor(e=[],t=[]){this.uuid=Cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Wp;Mh.multiplyMatrices(a,t[s]),Mh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new wc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new vs(t,e,e,nn,Wt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Cd),this.bones.push(o),this.boneInverses.push(new ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class jl extends dt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const rs=new ve,Sh=new ve,Xr=[],wh=new Ce,Xp=new ve,js=new he,qs=new Xt;class jp extends he{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Xp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ce),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rs),wh.copy(e.boundingBox).applyMatrix4(rs),this.boundingBox.union(wh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rs),qs.copy(e.boundingSphere).applyMatrix4(rs),this.boundingSphere.union(qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),e.ray.intersectsSphere(qs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,rs),Sh.multiplyMatrices(n,rs),js.matrixWorld=Sh,js.raycast(e,Xr);for(let o=0,a=Xr.length;o<a;o++){const l=Xr[o];l.instanceId=s,l.object=this,t.push(l)}Xr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new vs(new Float32Array(i*this.count),i,this.count,_c,Wt));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ta=new A,qp=new A,Yp=new Fe;class An{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ta.subVectors(n,t).cross(qp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ta),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yp.getNormalMatrix(e),i=this.coplanarPoint(Ta).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ci=new Xt,jr=new A;class Yo{constructor(e=new An,t=new An,n=new An,i=new An,s=new An,o=new An){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],b=i[10],m=i[11],f=i[12],_=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-s,d-c,m-p,x-f).normalize(),n[1].setComponents(l+s,d+c,m+p,x+f).normalize(),n[2].setComponents(l+o,d+h,m+g,x+_).normalize(),n[3].setComponents(l-o,d-h,m-g,x-_).normalize(),n[4].setComponents(l-a,d-u,m-b,x-y).normalize(),t===Qn)n[5].setComponents(l+a,d+u,m+b,x+y).normalize();else if(t===ko)n[5].setComponents(a,u,b,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(e){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(jr.x=i.normal.x>0?e.max.x:e.min.x,jr.y=i.normal.y>0?e.max.y:e.min.y,jr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(jr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ca(r,e){return r-e}function $p(r,e){return r.z-e.z}function Kp(r,e){return e.z-r.z}class Jp{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){const s=this.pool,o=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});const a=s[this.index];o.push(a),this.index++,a.start=e,a.count=t,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}const en=new ve,Zp=new we(1,1,1),Ra=new Yo,qr=new Ce,Ri=new Xt,Ys=new A,Eh=new A,Qp=new A,Pa=new Jp,Gt=new he,Yr=[];function em(r,e,t=0){const n=e.itemSize;if(r.isInterleavedBufferAttribute||r.array.constructor!==e.array.constructor){const i=r.count;for(let s=0;s<i;s++)for(let o=0;o<n;o++)e.setComponent(s+t,o,r.getComponent(s,o))}else e.array.set(r.array,t*n);e.needsUpdate=!0}function Pi(r,e){if(r.constructor!==e.constructor){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)e[n]=r[n]}else{const t=Math.min(r.length,e.length);e.set(new r.constructor(r.buffer,0,t))}}class tm extends he{constructor(e,t,n=t*2,i){super(new rt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new vs(t,e,e,nn,Wt);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new vs(t,e,e,qo,bi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new vs(t,e,e,nn,Wt);n.colorSpace=Ge.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const s in e.attributes){const o=e.getAttribute(s),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),u=new dt(h,l,c);t.setAttribute(s,u)}if(e.getIndex()!==null){const s=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new dt(s,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),s=t.getAttribute(n);if(i.itemSize!==s.itemSize||i.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ce);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,en),this.getBoundingBoxAt(s,qr).applyMatrix4(en),e.union(qr)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const s=t[n].geometryIndex;this.getMatrixAt(n,en),this.getBoundingSphereAt(s,Ri).applyMatrix4(en),e.union(Ri)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Ca),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const s=this._matricesTexture;en.identity().toArray(s.image.data,i*16),s.needsUpdate=!0;const o=this._colorsTexture;return o&&(Zp.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const o=e.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Ca),l=this._availableGeometryIds.shift(),s[l]=i):(l=this._geometryCount,this._geometryCount++,s.push(i)),this.setGeometryAt(l,e),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,s=n.getIndex(),o=t.getIndex(),a=this._geometryInfo[e];if(i&&o.count>a.reservedIndexCount||t.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=t.getAttribute("position").count;for(const h in n.attributes){const u=t.getAttribute(h),d=n.getAttribute(h);em(u,d,l);const p=u.itemSize;for(let g=u.count,b=c;g<b;g++){const m=l+g;for(let f=0;f<p;f++)d.setComponent(m,f,0)}d.needsUpdate=!0,d.addUpdateRange(l*p,c*p)}if(i){const h=a.indexStart,u=a.reservedIndexCount;a.indexCount=t.getIndex().count;for(let d=0;d<o.count;d++)s.setX(h+d,l+o.getX(d));for(let d=o.count,p=u;d<p;d++)s.setX(h+d,l);s.needsUpdate=!0,s.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,t.boundingBox!==null&&(a.boundingBox=t.boundingBox.clone()),a.boundingSphere=null,t.boundingSphere!==null&&(a.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let i=0,s=n.length;i<s;i++)n[i].active&&n[i].geometryIndex===e&&this.deleteInstance(i);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),s=this.geometry;for(let o=0,a=n.length;o<a;o++){const l=i[o],c=n[l];if(c.active!==!1){if(s.index!==null){if(c.indexStart!==t){const{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,p=s.index,g=p.array,b=e-u;for(let m=h;m<h+d;m++)g[m]=g[m]+b;p.array.copyWithin(t,h,h+d),p.addUpdateRange(t,d),c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:h,reservedVertexCount:u}=c,d=s.attributes;for(const p in d){const g=d[p],{array:b,itemSize:m}=g;b.copyWithin(e*m,h*m,(h+u)*m),g.addUpdateRange(e*m,u*m)}c.vertexStart=e}e+=c.reservedVertexCount,c.start=s.index?c.indexStart:c.vertexStart,this._nextIndexStart=s.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingBox===null){const s=new Ce,o=n.index,a=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;o&&(h=o.getX(h)),s.expandByPoint(Ys.fromBufferAttribute(a,h))}i.boundingBox=s}return t.copy(i.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[e];if(i.boundingSphere===null){const s=new Xt;this.getBoundingBoxAt(e,qr),qr.getCenter(s.center);const o=n.index,a=n.attributes.position;let l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let u=c;o&&(u=o.getX(u)),Ys.fromBufferAttribute(a,u),l=Math.max(l,s.center.distanceToSquared(Ys))}s.radius=Math.sqrt(l),i.boundingSphere=s}return t.copy(i.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,i=this._matricesTexture.image.data;return t.toArray(i,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(Ca);t[t.length-1]===n.length;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const i=new Int32Array(e),s=new Int32Array(e);Pi(this._multiDrawCounts,i),Pi(this._multiDrawStarts,s),this._multiDrawCounts=i,this._multiDrawStarts=s,this._maxInstanceCount=e;const o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Pi(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Pi(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Pi(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const s=this.geometry;s.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new rt,this._initializeGeometry(s));const o=this.geometry;s.index&&Pi(s.index.array,o.index.array);for(const a in s.attributes)Pi(s.attributes[a].array,o.attributes[a].array)}raycast(e,t){const n=this._instanceInfo,i=this._geometryInfo,s=this.matrixWorld,o=this.geometry;Gt.material=this.material,Gt.geometry.index=o.index,Gt.geometry.attributes=o.attributes,Gt.geometry.boundingBox===null&&(Gt.geometry.boundingBox=new Ce),Gt.geometry.boundingSphere===null&&(Gt.geometry.boundingSphere=new Xt);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;const c=n[a].geometryIndex,h=i[c];Gt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,Gt.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,Gt.geometry.boundingBox),this.getBoundingSphereAt(c,Gt.geometry.boundingSphere),Gt.raycast(e,Yr);for(let u=0,d=Yr.length;u<d;u++){const p=Yr[u];p.object=this,p.batchId=a,t.push(p)}Yr.length=0}Gt.material=null,Gt.geometry.index=null,Gt.geometry.attributes={},Gt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,i,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,p=this._indirectTexture,g=p.image.data;d&&(en.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Ra.setFromProjectionMatrix(en,e.coordinateSystem));let b=0;if(this.sortObjects){en.copy(this.matrixWorld).invert(),Ys.setFromMatrixPosition(n.matrixWorld).applyMatrix4(en),Eh.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(en);for(let _=0,y=l.length;_<y;_++)if(l[_].visible&&l[_].active){const x=l[_].geometryIndex;this.getMatrixAt(_,en),this.getBoundingSphereAt(x,Ri).applyMatrix4(en);let M=!1;if(d&&(M=!Ra.intersectsSphere(Ri)),!M){const E=u[x],w=Qp.subVectors(Ri.center,Ys).dot(Eh);Pa.push(E.start,E.count,w,_)}}const m=Pa.list,f=this.customSort;f===null?m.sort(s.transparent?Kp:$p):f.call(this,m,n);for(let _=0,y=m.length;_<y;_++){const x=m[_];c[b]=x.start*a,h[b]=x.count,g[b]=x.index,b++}Pa.reset()}else for(let m=0,f=l.length;m<f;m++)if(l[m].visible&&l[m].active){const _=l[m].geometryIndex;let y=!1;if(d&&(this.getMatrixAt(m,en),this.getBoundingSphereAt(_,Ri).applyMatrix4(en),y=!Ra.intersectsSphere(Ri)),!y){const x=u[_];c[b]=x.start*a,h[b]=x.count,g[b]=m,b++}}p.needsUpdate=!0,this._multiDrawCount=b,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,s,o){this.onBeforeRender(e,null,i,s,o)}}class vi extends Un{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bo=new A,zo=new A,Ah=new ve,$s=new Us,$r=new Xt,La=new A,Th=new A;class Wi extends st{constructor(e=new rt,t=new vi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Bo.fromBufferAttribute(t,i-1),zo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Bo.distanceTo(zo);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=s,e.ray.intersectsSphere($r)===!1)return;Ah.copy(i).invert(),$s.copy(e.ray).applyMatrix4(Ah);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let b=p,m=g-1;b<m;b+=c){const f=h.getX(b),_=h.getX(b+1),y=Kr(this,e,$s,l,f,_,b);y&&t.push(y)}if(this.isLineLoop){const b=h.getX(g-1),m=h.getX(p),f=Kr(this,e,$s,l,b,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let b=p,m=g-1;b<m;b+=c){const f=Kr(this,e,$s,l,b,b+1,b);f&&t.push(f)}if(this.isLineLoop){const b=Kr(this,e,$s,l,g-1,p,g-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Kr(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Bo.fromBufferAttribute(a,i),zo.fromBufferAttribute(a,s),t.distanceSqToSegment(Bo,zo,La,Th)>n)return;La.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(La);if(!(c<e.near||c>e.far))return{distance:c,point:Th.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Ch=new A,Rh=new A;class Rd extends Wi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ch.fromBufferAttribute(t,i),Rh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ch.distanceTo(Rh);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nm extends Wi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Pd extends Un{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ph=new ve,ql=new Us,Jr=new Xt,Zr=new A;class im extends st{constructor(e=new rt,t=new Pd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),Jr.radius+=s,e.ray.intersectsSphere(Jr)===!1)return;Ph.copy(i).invert(),ql.copy(e.ray).applyMatrix4(Ph);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,b=p;g<b;g++){const m=c.getX(g);Zr.fromBufferAttribute(u,m),Lh(Zr,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,b=p;g<b;g++)Zr.fromBufferAttribute(u,g),Lh(Zr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Lh(r,e,t,n,i,s,o){const a=ql.distanceSqToPoint(r);if(a<t){const l=new A;ql.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ld extends Ct{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Id extends Ct{constructor(e,t,n=bi,i,s,o,a=Jt,l=Jt,c,h=gr){if(h!==gr&&h!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ec extends rt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new A,h=new De;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class $o extends rt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],p=[];let g=0;const b=[],m=n/2;let f=0;_(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(p,2));function _(){const x=new A,M=new A;let E=0;const w=(t-e)/n;for(let T=0;T<=s;T++){const S=[],v=T/s,P=v*(t-e)+e;for(let I=0;I<=i;I++){const D=I/i,N=D*l+a,z=Math.sin(N),k=Math.cos(N);M.x=P*z,M.y=-v*n+m,M.z=P*k,u.push(M.x,M.y,M.z),x.set(z,w,k).normalize(),d.push(x.x,x.y,x.z),p.push(D,1-v),S.push(g++)}b.push(S)}for(let T=0;T<i;T++)for(let S=0;S<s;S++){const v=b[S][T],P=b[S+1][T],I=b[S+1][T+1],D=b[S][T+1];(e>0||S!==0)&&(h.push(v,P,D),E+=3),(t>0||S!==s-1)&&(h.push(P,I,D),E+=3)}c.addGroup(f,E,0),f+=E}function y(x){const M=g,E=new De,w=new A;let T=0;const S=x===!0?e:t,v=x===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,m*v,0),d.push(0,v,0),p.push(.5,.5),g++;const P=g;for(let I=0;I<=i;I++){const N=I/i*l+a,z=Math.cos(N),k=Math.sin(N);w.x=S*k,w.y=m*v,w.z=S*z,u.push(w.x,w.y,w.z),d.push(0,v,0),E.x=z*.5+.5,E.y=k*.5*v+.5,p.push(E.x,E.y),g++}for(let I=0;I<i;I++){const D=M+I,N=P+I;x===!0?h.push(N,N+1,D):h.push(N+1,N,D),T+=3}c.addGroup(f,T,x===!0?1:2),f+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vt extends rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],b=[],m=[];for(let f=0;f<h;f++){const _=f*d-o;for(let y=0;y<c;y++){const x=y*u-s;g.push(x,-_,0),b.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const y=_+c*f,x=_+c*(f+1),M=_+1+c*(f+1),E=_+1+c*f;p.push(y,x,E),p.push(x,M,E)}this.setIndex(p),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(b,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ko extends rt{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,p=new A,g=new De;for(let b=0;b<=i;b++){for(let m=0;m<=n;m++){const f=s+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let b=0;b<i;b++){const m=b*(n+1);for(let f=0;f<n;f++){const _=f+m,y=_,x=_+n+1,M=_+n+2,E=_+1;a.push(y,x,E),a.push(x,M,E)}}this.setIndex(a),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ln extends rt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new A,d=new A,p=[],g=[],b=[],m=[];for(let f=0;f<=n;f++){const _=[],y=f/n;let x=0;f===0&&o===0?x=.5/t:f===n&&l===Math.PI&&(x=-.5/t);for(let M=0;M<=t;M++){const E=M/t;u.x=-e*Math.cos(i+E*s)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+E*s)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),m.push(E+x,1-y),_.push(c++)}h.push(_)}for(let f=0;f<n;f++)for(let _=0;_<t;_++){const y=h[f][_+1],x=h[f][_],M=h[f+1][_],E=h[f+1][_+1];(f!==0||o>0)&&p.push(y,x,E),(f!==n-1||l<Math.PI)&&p.push(x,M,E)}this.setIndex(p),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(b,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Jo extends rt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new A,u=new A,d=new A;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const b=g/i*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(b),u.y=(e+t*Math.cos(m))*Math.sin(b),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const b=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,_=(i+1)*p+g;o.push(b,m,_),o.push(m,f,_)}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class kn extends Un{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bd,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zn extends kn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class sm extends Un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rm extends Un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Qr(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function om(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function am(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ih(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Dd(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Sr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class lm extends Sr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yc,endingEnd:Yc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case $c:s=e,a=2*t-n;break;case Kc:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $c:o=e,l=2*n-t;break;case Kc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,f=-d*m+2*d*b-d*g,_=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*b+.5*g,x=p*m-p*b;for(let M=0;M!==a;++M)s[M]=f*o[h+M]+_*o[c+M]+y*o[l+M]+x*o[u+M];return s}}class cm extends Sr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}class hm extends Sr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ln{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qr(t,this.TimeBufferType),this.values=Qr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qr(e.times,Array),values:Qr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case br:t=this.InterpolantFactoryMethodDiscrete;break;case xr:t=this.InterpolantFactoryMethodLinear;break;case sa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return xr;case this.InterpolantFactoryMethodSmooth:return sa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&om(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===sa,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const b=t[u+g];if(b!==t[d+g]||b!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=xr;class ks extends Ln{constructor(e,t,n){super(e,t,n)}}ks.prototype.ValueTypeName="bool";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=br;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;class Nd extends Ln{constructor(e,t,n,i){super(e,t,n,i)}}Nd.prototype.ValueTypeName="color";class Ps extends Ln{constructor(e,t,n,i){super(e,t,n,i)}}Ps.prototype.ValueTypeName="number";class um extends Sr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Bn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Ls extends Ln{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new um(this.times,this.values,this.getValueSize(),e)}}Ls.prototype.ValueTypeName="quaternion";Ls.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends Ln{constructor(e,t,n){super(e,t,n)}}Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=br;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class Is extends Ln{constructor(e,t,n,i){super(e,t,n,i)}}Is.prototype.ValueTypeName="vector";class dm{constructor(e="",t=-1,n=[],i=Uf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Cn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(pm(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Ln.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=am(l);l=Ih(l,1,h),c=Ih(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ps(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,b){if(p.length!==0){const m=[],f=[];Dd(p,m,f,g),m.length!==0&&b.push(new u(d,m,f))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)p[d[g].morphTargets[b]]=-1;for(const b in p){const m=[],f=[];for(let _=0;_!==d[g].morphTargets.length;++_){const y=d[g];m.push(y.time),f.push(y.morphTarget===b?1:0)}i.push(new Ps(".morphTargetInfluence["+b+"]",m,f))}l=p.length*o}else{const p=".bones["+t[u].name+"]";n(Is,p+".position",d,"pos",i),n(Ls,p+".quaternion",d,"rot",i),n(Is,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function fm(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ps;case"vector":case"vector2":case"vector3":case"vector4":return Is;case"color":return Nd;case"quaternion":return Ls;case"bool":case"boolean":return ks;case"string":return Os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function pm(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fm(r.type);if(r.times===void 0){const t=[],n=[];Dd(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const mi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class mm{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const gm=new mm;class Mi{constructor(e){this.manager=e!==void 0?e:gm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Mi.DEFAULT_MATERIAL_NAME="__DEFAULT";const qn={};class _m extends Error{constructor(e,t){super(e),this.response=t}}class vr extends Mi{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=mi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(qn[e]!==void 0){qn[e].push({onLoad:t,onProgress:n,onError:i});return}qn[e]=[],qn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=qn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let b=0;const m=new ReadableStream({start(f){_();function _(){u.read().then(({done:y,value:x})=>{if(y)f.close();else{b+=x.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:p});for(let E=0,w=h.length;E<w;E++){const T=h[E];T.onProgress&&T.onProgress(M)}f.enqueue(x),_()}},y=>{f.error(y)})}}});return new Response(m)}else throw new _m(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{mi.add(e,c);const h=qn[e];delete qn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=qn[e];if(h===void 0)throw this.manager.itemError(e),c;delete qn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class bm extends Mi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=mi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=yr("img");function l(){h(),mi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class xm extends Mi{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new vs,a=new vr(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Nn,o.wrapT=c.wrapT!==void 0?c.wrapT:Nn,o.magFilter=c.magFilter!==void 0?c.magFilter:Dt,o.minFilter=c.minFilter!==void 0?c.minFilter:Dt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Fn),c.mipmapCount===1&&(o.minFilter=Dt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class ym extends Mi{constructor(e){super(e)}load(e,t,n,i){const s=new Ct,o=new bm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class wr extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class vm extends wr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ia=new ve,Dh=new A,Nh=new A;class Ac{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yo,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Dh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dh),Nh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nh),t.updateMatrixWorld(),Ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Mm extends Ac{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Cs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Sm extends wr{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Mm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Fh=new ve,Ks=new A,Da=new A;class wm extends Ac{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ks.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ks),Da.copy(n.position),Da.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Da),n.updateMatrixWorld(),i.makeTranslation(-Ks.x,-Ks.y,-Ks.z),Fh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh)}}class Fd extends wr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new wm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Tc extends Ad{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Em extends Ac{constructor(){super(new Tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ud extends wr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new Em}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Na extends wr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ur{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Am extends Mi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=mi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return mi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),mi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});mi.add(e,l),s.manager.itemStart(e)}}class Tm extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Cm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Uh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Uh(){return performance.now()}const Cc="\\[\\]\\.:\\/",Rm=new RegExp("["+Cc+"]","g"),Rc="[^"+Cc+"]",Pm="[^"+Cc.replace("\\.","")+"]",Lm=/((?:WC+[\/:])*)/.source.replace("WC",Rc),Im=/(WCOD+)?/.source.replace("WCOD",Pm),Dm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rc),Nm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rc),Fm=new RegExp("^"+Lm+Im+Dm+Nm+"$"),Um=["material","materials","bones","map"];class km{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rm,"")}static parseTrackName(e){const t=Fm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Um.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=km;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const kh=new ve;class Vi{constructor(e,t,n=0,i=1/0){this.ray=new Us(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return kh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kh),this}intersectObject(e,t=!0,n=[]){return Yl(e,this,n,t),n.sort(Oh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Yl(e[i],this,n,t);return n.sort(Oh),n}}function Oh(r,e){return r.distance-e.distance}function Yl(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)Yl(s[o],e,t,!0)}}const Bh=new A,eo=new A;class ni{constructor(e=new A,t=new A){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Bh.subVectors(e,this.start),eo.subVectors(this.end,this.start);const n=eo.dot(eo);let s=eo.dot(Bh)/n;return t&&(s=Oe(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Om extends Rd{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new rt;i.setAttribute("position",new lt(t,3)),i.setAttribute("color",new lt(n,3));const s=new vi({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new we,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function zh(r,e,t,n){const i=Bm(n);switch(t){case ud:return r*e;case fd:return r*e;case pd:return r*e*2;case _c:return r*e/i.components*i.byteLength;case qo:return r*e/i.components*i.byteLength;case md:return r*e*2/i.components*i.byteLength;case bc:return r*e*2/i.components*i.byteLength;case dd:return r*e*3/i.components*i.byteLength;case nn:return r*e*4/i.components*i.byteLength;case xc:return r*e*4/i.components*i.byteLength;case Ao:case To:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Co:case Ro:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xl:case vl:return Math.max(r,16)*Math.max(e,8)/4;case bl:case yl:return Math.max(r,8)*Math.max(e,8)/2;case Ml:case Sl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case El:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Al:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Il:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case kl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Po:case Bl:case zl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case gd:case Hl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Gl:case Vl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bm(r){switch(r){case ii:case ld:return{byteLength:1,components:1};case pr:case cd:case Zn:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case bi:case pc:case Wt:return{byteLength:4,components:1};case hd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kd(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function zm(r){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],b=u[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,u[d]=b)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const b=u[p];r.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$m=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Km=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hg=`#define PI 3.141592653589793
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
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ug=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,dg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_g="gl_FragColor = linearToOutputTexel( gl_FragColor );",bg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xg=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,yg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ig=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Dg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Og=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
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
}`,zg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,i_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,r_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,h_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,g_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,__=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,S_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,w_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,E_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,A_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,C_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R_=`#ifdef USE_SKINNING
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
#endif`,P_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,F_=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,B_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,q_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Y_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,$_=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,tb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ib=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,rb=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ob=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ab=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,cb=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ub=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,db=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,fb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
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
}`,mb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_b=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,xb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Hm,alphahash_pars_fragment:Gm,alphamap_fragment:Vm,alphamap_pars_fragment:Wm,alphatest_fragment:Xm,alphatest_pars_fragment:jm,aomap_fragment:qm,aomap_pars_fragment:Ym,batching_pars_vertex:$m,batching_vertex:Km,begin_vertex:Jm,beginnormal_vertex:Zm,bsdfs:Qm,iridescence_fragment:eg,bumpmap_pars_fragment:tg,clipping_planes_fragment:ng,clipping_planes_pars_fragment:ig,clipping_planes_pars_vertex:sg,clipping_planes_vertex:rg,color_fragment:og,color_pars_fragment:ag,color_pars_vertex:lg,color_vertex:cg,common:hg,cube_uv_reflection_fragment:ug,defaultnormal_vertex:dg,displacementmap_pars_vertex:fg,displacementmap_vertex:pg,emissivemap_fragment:mg,emissivemap_pars_fragment:gg,colorspace_fragment:_g,colorspace_pars_fragment:bg,envmap_fragment:xg,envmap_common_pars_fragment:yg,envmap_pars_fragment:vg,envmap_pars_vertex:Mg,envmap_physical_pars_fragment:Dg,envmap_vertex:Sg,fog_vertex:wg,fog_pars_vertex:Eg,fog_fragment:Ag,fog_pars_fragment:Tg,gradientmap_pars_fragment:Cg,lightmap_pars_fragment:Rg,lights_lambert_fragment:Pg,lights_lambert_pars_fragment:Lg,lights_pars_begin:Ig,lights_toon_fragment:Ng,lights_toon_pars_fragment:Fg,lights_phong_fragment:Ug,lights_phong_pars_fragment:kg,lights_physical_fragment:Og,lights_physical_pars_fragment:Bg,lights_fragment_begin:zg,lights_fragment_maps:Hg,lights_fragment_end:Gg,logdepthbuf_fragment:Vg,logdepthbuf_pars_fragment:Wg,logdepthbuf_pars_vertex:Xg,logdepthbuf_vertex:jg,map_fragment:qg,map_pars_fragment:Yg,map_particle_fragment:$g,map_particle_pars_fragment:Kg,metalnessmap_fragment:Jg,metalnessmap_pars_fragment:Zg,morphinstance_vertex:Qg,morphcolor_vertex:e_,morphnormal_vertex:t_,morphtarget_pars_vertex:n_,morphtarget_vertex:i_,normal_fragment_begin:s_,normal_fragment_maps:r_,normal_pars_fragment:o_,normal_pars_vertex:a_,normal_vertex:l_,normalmap_pars_fragment:c_,clearcoat_normal_fragment_begin:h_,clearcoat_normal_fragment_maps:u_,clearcoat_pars_fragment:d_,iridescence_pars_fragment:f_,opaque_fragment:p_,packing:m_,premultiplied_alpha_fragment:g_,project_vertex:__,dithering_fragment:b_,dithering_pars_fragment:x_,roughnessmap_fragment:y_,roughnessmap_pars_fragment:v_,shadowmap_pars_fragment:M_,shadowmap_pars_vertex:S_,shadowmap_vertex:w_,shadowmask_pars_fragment:E_,skinbase_vertex:A_,skinning_pars_vertex:T_,skinning_vertex:C_,skinnormal_vertex:R_,specularmap_fragment:P_,specularmap_pars_fragment:L_,tonemapping_fragment:I_,tonemapping_pars_fragment:D_,transmission_fragment:N_,transmission_pars_fragment:F_,uv_pars_fragment:U_,uv_pars_vertex:k_,uv_vertex:O_,worldpos_vertex:B_,background_vert:z_,background_frag:H_,backgroundCube_vert:G_,backgroundCube_frag:V_,cube_vert:W_,cube_frag:X_,depth_vert:j_,depth_frag:q_,distanceRGBA_vert:Y_,distanceRGBA_frag:$_,equirect_vert:K_,equirect_frag:J_,linedashed_vert:Z_,linedashed_frag:Q_,meshbasic_vert:eb,meshbasic_frag:tb,meshlambert_vert:nb,meshlambert_frag:ib,meshmatcap_vert:sb,meshmatcap_frag:rb,meshnormal_vert:ob,meshnormal_frag:ab,meshphong_vert:lb,meshphong_frag:cb,meshphysical_vert:hb,meshphysical_frag:ub,meshtoon_vert:db,meshtoon_frag:fb,points_vert:pb,points_frag:mb,shadow_vert:gb,shadow_frag:_b,sprite_vert:bb,sprite_frag:xb},ne={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Dn={basic:{uniforms:$t([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:$t([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new we(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:$t([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:$t([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:$t([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new we(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:$t([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:$t([ne.points,ne.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:$t([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:$t([ne.common,ne.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:$t([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:$t([ne.sprite,ne.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:$t([ne.common,ne.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:$t([ne.lights,ne.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Dn.physical={uniforms:$t([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const to={r:0,b:0,g:0},Li=new Rn,yb=new ve;function vb(r,e,t,n,i,s,o){const a=new we(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function b(y){let x=!1;const M=g(y);M===null?f(a,l):M&&M.isColor&&(f(M,1),x=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,x){const M=g(x);M&&(M.isCubeTexture||M.mapping===jo)?(h===void 0&&(h=new he(new jt(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Rs(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Li.copy(x.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yb.makeRotationFromEuler(Li)),h.material.toneMapped=Ge.getTransfer(M.colorSpace)!==it,(u!==M||d!==M.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,p=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new he(new Vt(2,2),new xi({name:"BackgroundMaterial",uniforms:Rs(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(M.colorSpace)!==it,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,p=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,x){y.getRGB(to,Ed(r)),n.buffers.color.setClear(to.r,to.g,to.b,x,o)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:b,addToRenderList:m,dispose:_}}function Mb(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(v,P,I,D,N){let z=!1;const k=u(D,I,P);s!==k&&(s=k,c(s.object)),z=p(v,D,I,N),z&&g(v,D,I,N),N!==null&&e.update(N,r.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(v,P,I,D),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function u(v,P,I){const D=I.wireframe===!0;let N=n[v.id];N===void 0&&(N={},n[v.id]=N);let z=N[P.id];z===void 0&&(z={},N[P.id]=z);let k=z[D];return k===void 0&&(k=d(l()),z[D]=k),k}function d(v){const P=[],I=[],D=[];for(let N=0;N<t;N++)P[N]=0,I[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:D,object:v,attributes:{},index:null}}function p(v,P,I,D){const N=s.attributes,z=P.attributes;let k=0;const j=I.getAttributes();for(const W in j)if(j[W].location>=0){const ie=N[W];let be=z[W];if(be===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(be=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(be=v.instanceColor)),ie===void 0||ie.attribute!==be||be&&ie.data!==be.data)return!0;k++}return s.attributesNum!==k||s.index!==D}function g(v,P,I,D){const N={},z=P.attributes;let k=0;const j=I.getAttributes();for(const W in j)if(j[W].location>=0){let ie=z[W];ie===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(ie=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(ie=v.instanceColor));const be={};be.attribute=ie,ie&&ie.data&&(be.data=ie.data),N[W]=be,k++}s.attributes=N,s.attributesNum=k,s.index=D}function b(){const v=s.newAttributes;for(let P=0,I=v.length;P<I;P++)v[P]=0}function m(v){f(v,0)}function f(v,P){const I=s.newAttributes,D=s.enabledAttributes,N=s.attributeDivisors;I[v]=1,D[v]===0&&(r.enableVertexAttribArray(v),D[v]=1),N[v]!==P&&(r.vertexAttribDivisor(v,P),N[v]=P)}function _(){const v=s.newAttributes,P=s.enabledAttributes;for(let I=0,D=P.length;I<D;I++)P[I]!==v[I]&&(r.disableVertexAttribArray(I),P[I]=0)}function y(v,P,I,D,N,z,k){k===!0?r.vertexAttribIPointer(v,P,I,N,z):r.vertexAttribPointer(v,P,I,D,N,z)}function x(v,P,I,D){b();const N=D.attributes,z=I.getAttributes(),k=P.defaultAttributeValues;for(const j in z){const W=z[j];if(W.location>=0){let Q=N[j];if(Q===void 0&&(j==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),j==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor)),Q!==void 0){const ie=Q.normalized,be=Q.itemSize,Ae=e.get(Q);if(Ae===void 0)continue;const ze=Ae.buffer,q=Ae.type,te=Ae.bytesPerElement,ge=q===r.INT||q===r.UNSIGNED_INT||Q.gpuType===pc;if(Q.isInterleavedBufferAttribute){const re=Q.data,Ee=re.stride,Ke=Q.offset;if(re.isInstancedInterleavedBuffer){for(let Re=0;Re<W.locationSize;Re++)f(W.location+Re,re.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Re=0;Re<W.locationSize;Re++)m(W.location+Re);r.bindBuffer(r.ARRAY_BUFFER,ze);for(let Re=0;Re<W.locationSize;Re++)y(W.location+Re,be/W.locationSize,q,ie,Ee*te,(Ke+be/W.locationSize*Re)*te,ge)}else{if(Q.isInstancedBufferAttribute){for(let re=0;re<W.locationSize;re++)f(W.location+re,Q.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let re=0;re<W.locationSize;re++)m(W.location+re);r.bindBuffer(r.ARRAY_BUFFER,ze);for(let re=0;re<W.locationSize;re++)y(W.location+re,be/W.locationSize,q,ie,be*te,be/W.locationSize*re*te,ge)}}else if(k!==void 0){const ie=k[j];if(ie!==void 0)switch(ie.length){case 2:r.vertexAttrib2fv(W.location,ie);break;case 3:r.vertexAttrib3fv(W.location,ie);break;case 4:r.vertexAttrib4fv(W.location,ie);break;default:r.vertexAttrib1fv(W.location,ie)}}}}_()}function M(){T();for(const v in n){const P=n[v];for(const I in P){const D=P[I];for(const N in D)h(D[N].object),delete D[N];delete P[I]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const P=n[v.id];for(const I in P){const D=P[I];for(const N in D)h(D[N].object),delete D[N];delete P[I]}delete n[v.id]}function w(v){for(const P in n){const I=n[P];if(I[v.id]===void 0)continue;const D=I[v.id];for(const N in D)h(D[N].object),delete D[N];delete I[v.id]}}function T(){S(),o=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:m,disableUnusedAttributes:_}}function Sb(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let b=0;b<u;b++)g+=h[b]*d[b];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wb(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==nn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const T=w===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ii&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Wt&&!T)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:M,maxSamples:E}}function Eb(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new An,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,f=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const _=s?0:n,y=_*4;let x=f.clippingState||null;l.value=x,x=h(g,d,y,p);for(let M=0;M!==y;++M)x[M]=t[M];f.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const b=u!==null?u.length:0;let m=null;if(b!==0){if(m=l.value,g!==!0||m===null){const f=p+b*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,x=p;y!==b;++y,x+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function Ab(r){let e=new WeakMap;function t(o,a){return a===gl?o.mapping=Es:a===_l&&(o.mapping=As),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===gl||a===_l)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Bp(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const _s=4,Hh=[.125,.215,.35,.446,.526,.582],Bi=20,Fa=new Tc,Gh=new we;let Ua=null,ka=0,Oa=0,Ba=!1;const ki=(1+Math.sqrt(5))/2,os=1/ki,Vh=[new A(-ki,os,0),new A(ki,os,0),new A(-os,0,ki),new A(os,0,ki),new A(0,ki,-os),new A(0,ki,os),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Tb=new A;class $l{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=Tb}=s;Ua=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ua,ka,Oa),this._renderer.xr.enabled=Ba,e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ua=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Zn,format:nn,colorSpace:Ot,depthBuffer:!1},i=Wh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cb(s)),this._blurMaterial=Rb(s,e,t)}return i}_compileMaterial(e){const t=new he(this._lodPlanes[0],e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,n,i,s){const l=new Kt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Gh),u.toneMapping=ei,u.autoClear=!1;const g=new Be({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),b=new he(new jt,g);let m=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,m=!0):(g.color.copy(Gh),m=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[_],s.y,s.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[_]));const x=this._cubeSize;no(i,y*x,_>2?x:0,x,x),u.setRenderTarget(i),m&&u.render(b,l),u.render(e,l)}b.geometry.dispose(),b.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Es||e.mapping===As;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new he(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;no(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Fa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vh[(i-s-1)%Vh.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new he(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Bi-1),b=s/g,m=isFinite(s)?1+Math.floor(h*b):Bi;m>Bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);const f=[];let _=0;for(let w=0;w<Bi;++w){const T=w/b,S=Math.exp(-T*T/2);f.push(S),w===0?_+=S:w<m&&(_+=2*S)}for(let w=0;w<f.length;w++)f[w]=f[w]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[i],M=3*x*(i>y-_s?i-y+_s:0),E=4*(this._cubeSize-x);no(t,M,E,3*x,2*x),l.setRenderTarget(t),l.render(u,Fa)}}function Cb(r){const e=[],t=[],n=[];let i=r;const s=r-_s+1+Hh.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-_s?l=Hh[o-r+_s-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,b=3,m=2,f=1,_=new Float32Array(b*g*p),y=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let E=0;E<p;E++){const w=E%3*2/3-1,T=E>2?0:-1,S=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];_.set(S,b*g*E),y.set(d,m*g*E);const v=[E,E,E,E,E,E];x.set(v,f*g*E)}const M=new rt;M.setAttribute("position",new dt(_,b)),M.setAttribute("uv",new dt(y,m)),M.setAttribute("faceIndex",new dt(x,f)),e.push(M),i>_s&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wh(r,e,t){const n=new Gi(r,e,t);return n.texture.mapping=jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function no(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Rb(r,e,t){const n=new Float32Array(Bi),i=new A(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Xh(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function jh(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

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
	`}function Pb(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===gl||l===_l,h=l===Es||l===As;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new $l(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new $l(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Lb(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Lo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ib(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],r.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let b=0;if(p!==null){const _=p.array;b=p.version;for(let y=0,x=_.length;y<x;y+=3){const M=_[y+0],E=_[y+1],w=_[y+2];d.push(M,E,E,w,w,M)}}else if(g!==void 0){const _=g.array;b=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const M=y+0,E=y+1,w=y+2;d.push(M,E,E,w,w,M)}}else return;const m=new(yd(d)?wd:Sd)(d,1);m.version=b;const f=s.get(u);f&&e.remove(f),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Db(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){r.drawElements(n,p,s,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],b[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,b,0,g);let f=0;for(let _=0;_<g;_++)f+=p[_]*b[_];t.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Nb(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Fb(r,e,t){const n=new WeakMap,i=new Je;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let v=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var p=v;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,b=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),b===!0&&(x=2),m===!0&&(x=3);let M=a.attributes.position.count*x,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*E*4*u),T=new vd(w,M,E,u);T.type=Wt,T.needsUpdate=!0;const S=x*4;for(let P=0;P<u;P++){const I=f[P],D=_[P],N=y[P],z=M*E*4*P;for(let k=0;k<I.count;k++){const j=k*S;g===!0&&(i.fromBufferAttribute(I,k),w[z+j+0]=i.x,w[z+j+1]=i.y,w[z+j+2]=i.z,w[z+j+3]=0),b===!0&&(i.fromBufferAttribute(D,k),w[z+j+4]=i.x,w[z+j+5]=i.y,w[z+j+6]=i.z,w[z+j+7]=0),m===!0&&(i.fromBufferAttribute(N,k),w[z+j+8]=i.x,w[z+j+9]=i.y,w[z+j+10]=i.z,w[z+j+11]=N.itemSize===4?i.w:1)}}d={count:u,texture:T,size:new De(M,E)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const b=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",b),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Ub(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Od=new Ct,qh=new Id(1,1),Bd=new vd,zd=new xp,Hd=new Td,Yh=[],$h=[],Kh=new Float32Array(16),Jh=new Float32Array(9),Zh=new Float32Array(4);function Bs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Yh[i];if(s===void 0&&(s=new Float32Array(i),Yh[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Rt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Pt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Zo(r,e){let t=$h[e];t===void 0&&(t=new Int32Array(e),$h[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function kb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ob(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2fv(this.addr,e),Pt(t,e)}}function Bb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;r.uniform3fv(this.addr,e),Pt(t,e)}}function zb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4fv(this.addr,e),Pt(t,e)}}function Hb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;Zh.set(n),r.uniformMatrix2fv(this.addr,!1,Zh),Pt(t,n)}}function Gb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;Jh.set(n),r.uniformMatrix3fv(this.addr,!1,Jh),Pt(t,n)}}function Vb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,n))return;Kh.set(n),r.uniformMatrix4fv(this.addr,!1,Kh),Pt(t,n)}}function Wb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Xb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2iv(this.addr,e),Pt(t,e)}}function jb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;r.uniform3iv(this.addr,e),Pt(t,e)}}function qb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4iv(this.addr,e),Pt(t,e)}}function Yb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function $b(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2uiv(this.addr,e),Pt(t,e)}}function Kb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;r.uniform3uiv(this.addr,e),Pt(t,e)}}function Jb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4uiv(this.addr,e),Pt(t,e)}}function Zb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(qh.compareFunction=xd,s=qh):s=Od,t.setTexture2D(e||s,i)}function Qb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zd,i)}function ex(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Hd,i)}function tx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Bd,i)}function nx(r){switch(r){case 5126:return kb;case 35664:return Ob;case 35665:return Bb;case 35666:return zb;case 35674:return Hb;case 35675:return Gb;case 35676:return Vb;case 5124:case 35670:return Wb;case 35667:case 35671:return Xb;case 35668:case 35672:return jb;case 35669:case 35673:return qb;case 5125:return Yb;case 36294:return $b;case 36295:return Kb;case 36296:return Jb;case 35678:case 36198:case 36298:case 36306:case 35682:return Zb;case 35679:case 36299:case 36307:return Qb;case 35680:case 36300:case 36308:case 36293:return ex;case 36289:case 36303:case 36311:case 36292:return tx}}function ix(r,e){r.uniform1fv(this.addr,e)}function sx(r,e){const t=Bs(e,this.size,2);r.uniform2fv(this.addr,t)}function rx(r,e){const t=Bs(e,this.size,3);r.uniform3fv(this.addr,t)}function ox(r,e){const t=Bs(e,this.size,4);r.uniform4fv(this.addr,t)}function ax(r,e){const t=Bs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function lx(r,e){const t=Bs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function cx(r,e){const t=Bs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function hx(r,e){r.uniform1iv(this.addr,e)}function ux(r,e){r.uniform2iv(this.addr,e)}function dx(r,e){r.uniform3iv(this.addr,e)}function fx(r,e){r.uniform4iv(this.addr,e)}function px(r,e){r.uniform1uiv(this.addr,e)}function mx(r,e){r.uniform2uiv(this.addr,e)}function gx(r,e){r.uniform3uiv(this.addr,e)}function _x(r,e){r.uniform4uiv(this.addr,e)}function bx(r,e,t){const n=this.cache,i=e.length,s=Zo(t,i);Rt(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Od,s[o])}function xx(r,e,t){const n=this.cache,i=e.length,s=Zo(t,i);Rt(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||zd,s[o])}function yx(r,e,t){const n=this.cache,i=e.length,s=Zo(t,i);Rt(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Hd,s[o])}function vx(r,e,t){const n=this.cache,i=e.length,s=Zo(t,i);Rt(n,s)||(r.uniform1iv(this.addr,s),Pt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Bd,s[o])}function Mx(r){switch(r){case 5126:return ix;case 35664:return sx;case 35665:return rx;case 35666:return ox;case 35674:return ax;case 35675:return lx;case 35676:return cx;case 5124:case 35670:return hx;case 35667:case 35671:return ux;case 35668:case 35672:return dx;case 35669:case 35673:return fx;case 5125:return px;case 36294:return mx;case 36295:return gx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return vx}}class Sx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=nx(t.type)}}class wx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mx(t.type)}}class Ex{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const za=/(\w+)(\])?(\[|\.)?/g;function Qh(r,e){r.seq.push(e),r.map[e.id]=e}function Ax(r,e,t){const n=r.name,i=n.length;for(za.lastIndex=0;;){const s=za.exec(n),o=za.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Qh(t,c===void 0?new Sx(a,r,e):new wx(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Ex(a),Qh(t,u)),t=u}}}class Io{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Ax(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function eu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Tx=37297;let Cx=0;function Rx(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const tu=new Fe;function Px(r){Ge._getMatrix(tu,Ge.workingColorSpace,r);const e=`mat3( ${tu.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(r)){case Uo:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function nu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Rx(r.getShaderSource(e),o)}else return i}function Lx(r,e){const t=Px(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ix(r,e){let t;switch(e){case td:t="Linear";break;case nd:t="Reinhard";break;case id:t="Cineon";break;case Xo:t="ACESFilmic";break;case sd:t="AgX";break;case rd:t="Neutral";break;case Nf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const io=new A;function Dx(){Ge.getLuminanceCoefficients(io);const r=io.x.toFixed(4),e=io.y.toFixed(4),t=io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function Fx(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ux(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ar(r){return r!==""}function iu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function su(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(r){return r.replace(kx,Bx)}const Ox=new Map;function Bx(r,e){let t=ke[e];if(t===void 0){const n=Ox.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Kl(t)}const zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ru(r){return r.replace(zx,Hx)}function Hx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ou(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Zu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Qu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function Vx(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Es:case As:e="ENVMAP_TYPE_CUBE";break;case jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function Xx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ed:e="ENVMAP_BLENDING_MULTIPLY";break;case If:e="ENVMAP_BLENDING_MIX";break;case Df:e="ENVMAP_BLENDING_ADD";break}return e}function jx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function qx(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Gx(t),c=Vx(t),h=Wx(t),u=Xx(t),d=jx(t),p=Nx(t),g=Fx(s),b=i.createProgram();let m,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ar).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ar).join(`
`),f.length>0&&(f+=`
`)):(m=[ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),f=[ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?ke.tonemapping_pars_fragment:"",t.toneMapping!==ei?Ix("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Lx("linearToOutputTexel",t.outputColorSpace),Dx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),o=Kl(o),o=iu(o,t),o=su(o,t),a=Kl(a),a=iu(a,t),a=su(a,t),o=ru(o),a=ru(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=_+m+o,x=_+f+a,M=eu(i,i.VERTEX_SHADER,y),E=eu(i,i.FRAGMENT_SHADER,x);i.attachShader(b,M),i.attachShader(b,E),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function w(P){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(b).trim(),D=i.getShaderInfoLog(M).trim(),N=i.getShaderInfoLog(E).trim();let z=!0,k=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,b,M,E);else{const j=nu(i,M,"vertex"),W=nu(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+j+`
`+W)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(D===""||N==="")&&(k=!1);k&&(P.diagnostics={runnable:z,programLog:I,vertexShader:{log:D,prefix:m},fragmentShader:{log:N,prefix:f}})}i.deleteShader(M),i.deleteShader(E),T=new Io(i,b),S=Ux(i,b)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(b,Tx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cx++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=E,this}let Yx=0;class $x{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Kx(e),t.set(e,n)),n}}class Kx{constructor(e){this.id=Yx++,this.code=e,this.usedTimes=0}}function Jx(r,e,t,n,i,s,o){const a=new Mc,l=new $x,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,v,P,I,D){const N=I.fog,z=D.geometry,k=S.isMeshStandardMaterial?I.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),W=j&&j.mapping===jo?j.image.height:null,Q=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,be=ie!==void 0?ie.length:0;let Ae=0;z.morphAttributes.position!==void 0&&(Ae=1),z.morphAttributes.normal!==void 0&&(Ae=2),z.morphAttributes.color!==void 0&&(Ae=3);let ze,q,te,ge;if(Q){const et=Dn[Q];ze=et.vertexShader,q=et.fragmentShader}else ze=S.vertexShader,q=S.fragmentShader,l.update(S),te=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const re=r.getRenderTarget(),Ee=r.state.buffers.depth.getReversed(),Ke=D.isInstancedMesh===!0,Re=D.isBatchedMesh===!0,St=!!S.map,_t=!!S.matcap,Ve=!!j,F=!!S.aoMap,cn=!!S.lightMap,je=!!S.bumpMap,We=!!S.normalMap,ye=!!S.displacementMap,ct=!!S.emissiveMap,xe=!!S.metalnessMap,L=!!S.roughnessMap,C=S.anisotropy>0,H=S.clearcoat>0,$=S.dispersion>0,J=S.iridescence>0,Y=S.sheen>0,_e=S.transmission>0,oe=C&&!!S.anisotropyMap,de=H&&!!S.clearcoatMap,qe=H&&!!S.clearcoatNormalMap,ee=H&&!!S.clearcoatRoughnessMap,fe=J&&!!S.iridescenceMap,Te=J&&!!S.iridescenceThicknessMap,Le=Y&&!!S.sheenColorMap,pe=Y&&!!S.sheenRoughnessMap,Xe=!!S.specularMap,Ue=!!S.specularColorMap,at=!!S.specularIntensityMap,U=_e&&!!S.transmissionMap,ae=_e&&!!S.thicknessMap,X=!!S.gradientMap,K=!!S.alphaMap,ce=S.alphaTest>0,le=!!S.alphaHash,Ne=!!S.extensions;let xt=ei;S.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(xt=r.toneMapping);const Bt={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:ze,fragmentShader:q,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Re,batchingColor:Re&&D._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&D.instanceColor!==null,instancingMorph:Ke&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ot,alphaToCoverage:!!S.alphaToCoverage,map:St,matcap:_t,envMap:Ve,envMapMode:Ve&&j.mapping,envMapCubeUVHeight:W,aoMap:F,lightMap:cn,bumpMap:je,normalMap:We,displacementMap:d&&ye,emissiveMap:ct,normalMapObjectSpace:We&&S.normalMapType===zf,normalMapTangentSpace:We&&S.normalMapType===bd,metalnessMap:xe,roughnessMap:L,anisotropy:C,anisotropyMap:oe,clearcoat:H,clearcoatMap:de,clearcoatNormalMap:qe,clearcoatRoughnessMap:ee,dispersion:$,iridescence:J,iridescenceMap:fe,iridescenceThicknessMap:Te,sheen:Y,sheenColorMap:Le,sheenRoughnessMap:pe,specularMap:Xe,specularColorMap:Ue,specularIntensityMap:at,transmission:_e,transmissionMap:U,thicknessMap:ae,gradientMap:X,opaque:S.transparent===!1&&S.blending===xs&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:ce,alphaHash:le,combine:S.combine,mapUv:St&&b(S.map.channel),aoMapUv:F&&b(S.aoMap.channel),lightMapUv:cn&&b(S.lightMap.channel),bumpMapUv:je&&b(S.bumpMap.channel),normalMapUv:We&&b(S.normalMap.channel),displacementMapUv:ye&&b(S.displacementMap.channel),emissiveMapUv:ct&&b(S.emissiveMap.channel),metalnessMapUv:xe&&b(S.metalnessMap.channel),roughnessMapUv:L&&b(S.roughnessMap.channel),anisotropyMapUv:oe&&b(S.anisotropyMap.channel),clearcoatMapUv:de&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:qe&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:pe&&b(S.sheenRoughnessMap.channel),specularMapUv:Xe&&b(S.specularMap.channel),specularColorMapUv:Ue&&b(S.specularColorMap.channel),specularIntensityMapUv:at&&b(S.specularIntensityMap.channel),transmissionMapUv:U&&b(S.transmissionMap.channel),thicknessMapUv:ae&&b(S.thicknessMap.channel),alphaMapUv:K&&b(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(We||C),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(St||K),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ee,skinning:D.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Ae,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:xt,decodeVideoTexture:St&&S.map.isVideoTexture===!0&&Ge.getTransfer(S.map.colorSpace)===it,decodeVideoTextureEmissive:ct&&S.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(S.emissiveMap.colorSpace)===it,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ut,flipSided:S.side===kt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ne&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&S.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Bt.vertexUv1s=c.has(1),Bt.vertexUv2s=c.has(2),Bt.vertexUv3s=c.has(3),c.clear(),Bt}function f(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)v.push(P),v.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(_(v,S),y(v,S),v.push(r.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function _(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function y(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const v=g[S.type];let P;if(v){const I=Dn[v];P=Fp.clone(I.uniforms)}else P=S.uniforms;return P}function M(S,v){let P;for(let I=0,D=h.length;I<D;I++){const N=h[I];if(N.cacheKey===v){P=N,++P.usedTimes;break}}return P===void 0&&(P=new qx(r,v,S,s),h.push(P)),P}function E(S){if(--S.usedTimes===0){const v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function w(S){l.remove(S)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:M,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:T}}function Zx(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Qx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function au(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function lu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,p,g,b,m){let f=r[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},r[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=b,f.group=m),e++,f}function a(u,d,p,g,b,m){const f=o(u,d,p,g,b,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(u,d,p,g,b,m){const f=o(u,d,p,g,b,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Qx),n.length>1&&n.sort(d||au),i.length>1&&i.sort(d||au)}function h(){for(let u=e,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function ey(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new lu,r.set(n,[o])):i>=s.length?(o=new lu,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function ty(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new we};break;case"SpotLight":t={position:new A,direction:new A,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new A,halfWidth:new A,halfHeight:new A};break}return r[e.id]=t,t}}}function ny(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let iy=0;function sy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ry(r){const e=new ty,t=ny(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const i=new A,s=new ve,o=new ve;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,b=0,m=0,f=0,_=0,y=0,x=0,M=0,E=0,w=0;c.sort(sy);for(let S=0,v=c.length;S<v;S++){const P=c[S],I=P.color,D=P.intensity,N=P.distance,z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=I.r*D,u+=I.g*D,d+=I.b*D;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],D);w++}else if(P.isDirectionalLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,W=t.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=z,n.directionalShadowMatrix[p]=P.shadow.matrix,_++}n.directional[p]=k,p++}else if(P.isSpotLight){const k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(I).multiplyScalar(D),k.distance=N,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[b]=k;const j=P.shadow;if(P.map&&(n.spotLightMap[M]=P.map,M++,j.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[b]=j.matrix,P.castShadow){const W=t.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.spotShadow[b]=W,n.spotShadowMap[b]=z,x++}b++}else if(P.isRectAreaLight){const k=e.get(P);k.color.copy(I).multiplyScalar(D),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=k,m++}else if(P.isPointLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const j=P.shadow,W=t.get(P);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=k,g++}else if(P.isHemisphereLight){const k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(D),k.groundColor.copy(P.groundColor).multiplyScalar(D),n.hemi[f]=k,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const T=n.hash;(T.directionalLength!==p||T.pointLength!==g||T.spotLength!==b||T.rectAreaLength!==m||T.hemiLength!==f||T.numDirectionalShadows!==_||T.numPointShadows!==y||T.numSpotShadows!==x||T.numSpotMaps!==M||T.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,T.directionalLength=p,T.pointLength=g,T.spotLength=b,T.rectAreaLength=m,T.hemiLength=f,T.numDirectionalShadows=_,T.numPointShadows=y,T.numSpotShadows=x,T.numSpotMaps=M,T.numLightProbes=w,n.version=iy++)}function l(c,h){let u=0,d=0,p=0,g=0,b=0;const m=h.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const y=c[f];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[b];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),b++}}}return{setup:a,setupView:l,state:n}}function cu(r){const e=new ry(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function oy(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new cu(r),e.set(i,[a])):s>=o.length?(a=new cu(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ly=`uniform sampler2D shadow_pass;
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
}`;function cy(r,e,t){let n=new Yo;const i=new De,s=new De,o=new Je,a=new sm({depthPacking:Bf}),l=new rm,c={},h=t.maxTextureSize,u={[xn]:kt,[kt]:xn,[ut]:ut},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:ay,fragmentShader:ly}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new rt;g.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new he(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zu;let f=this.type;this.render=function(E,w,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=r.getRenderTarget(),v=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),I=r.state;I.setBlending(_i),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const D=f!==Yn&&this.type===Yn,N=f===Yn&&this.type!==Yn;for(let z=0,k=E.length;z<k;z++){const j=E[z],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const Q=W.getFrameExtents();if(i.multiply(Q),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Q.x),i.x=s.x*Q.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Q.y),i.y=s.y*Q.y,W.mapSize.y=s.y)),W.map===null||D===!0||N===!0){const be=this.type!==Yn?{minFilter:Jt,magFilter:Jt}:{};W.map!==null&&W.map.dispose(),W.map=new Gi(i.x,i.y,be),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const ie=W.getViewportCount();for(let be=0;be<ie;be++){const Ae=W.getViewport(be);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),I.viewport(o),W.updateMatrices(j,be),n=W.getFrustum(),x(w,T,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===Yn&&_(W,T),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(S,v,P)};function _(E,w){const T=e.update(b);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Gi(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(w,null,T,d,b,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(w,null,T,p,b,null)}function y(E,w,T,S){let v=null;const P=T.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)v=P;else if(v=T.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const I=v.uuid,D=w.uuid;let N=c[I];N===void 0&&(N={},c[I]=N);let z=N[D];z===void 0&&(z=v.clone(),N[D]=z,w.addEventListener("dispose",M)),v=z}if(v.visible=w.visible,v.wireframe=w.wireframe,S===Yn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,T.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const I=r.properties.get(v);I.light=T}return v}function x(E,w,T,S,v){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Yn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,E.matrixWorld);const D=e.update(E),N=E.material;if(Array.isArray(N)){const z=D.groups;for(let k=0,j=z.length;k<j;k++){const W=z[k],Q=N[W.materialIndex];if(Q&&Q.visible){const ie=y(E,Q,S,v);E.onBeforeShadow(r,E,w,T,D,ie,W),r.renderBufferDirect(T,null,D,ie,E,W),E.onAfterShadow(r,E,w,T,D,ie,W)}}}else if(N.visible){const z=y(E,N,S,v);E.onBeforeShadow(r,E,w,T,D,z,null),r.renderBufferDirect(T,null,D,z,E,null),E.onAfterShadow(r,E,w,T,D,z,null)}}const I=E.children;for(let D=0,N=I.length;D<N;D++)x(I[D],w,T,S,v)}function M(E){E.target.removeEventListener("dispose",M);for(const T in c){const S=c[T],v=E.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const hy={[cl]:hl,[ul]:pl,[dl]:ml,[ws]:fl,[hl]:cl,[pl]:ul,[ml]:dl,[fl]:ws};function uy(r,e){function t(){let U=!1;const ae=new Je;let X=null;const K=new Je(0,0,0,0);return{setMask:function(ce){X!==ce&&!U&&(r.colorMask(ce,ce,ce,ce),X=ce)},setLocked:function(ce){U=ce},setClear:function(ce,le,Ne,xt,Bt){Bt===!0&&(ce*=xt,le*=xt,Ne*=xt),ae.set(ce,le,Ne,xt),K.equals(ae)===!1&&(r.clearColor(ce,le,Ne,xt),K.copy(ae))},reset:function(){U=!1,X=null,K.set(-1,0,0,0)}}}function n(){let U=!1,ae=!1,X=null,K=null,ce=null;return{setReversed:function(le){if(ae!==le){const Ne=e.get("EXT_clip_control");le?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ae=le;const xt=ce;ce=null,this.setClear(xt)}},getReversed:function(){return ae},setTest:function(le){le?re(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(le){X!==le&&!U&&(r.depthMask(le),X=le)},setFunc:function(le){if(ae&&(le=hy[le]),K!==le){switch(le){case cl:r.depthFunc(r.NEVER);break;case hl:r.depthFunc(r.ALWAYS);break;case ul:r.depthFunc(r.LESS);break;case ws:r.depthFunc(r.LEQUAL);break;case dl:r.depthFunc(r.EQUAL);break;case fl:r.depthFunc(r.GEQUAL);break;case pl:r.depthFunc(r.GREATER);break;case ml:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=le}},setLocked:function(le){U=le},setClear:function(le){ce!==le&&(ae&&(le=1-le),r.clearDepth(le),ce=le)},reset:function(){U=!1,X=null,K=null,ce=null,ae=!1}}}function i(){let U=!1,ae=null,X=null,K=null,ce=null,le=null,Ne=null,xt=null,Bt=null;return{setTest:function(et){U||(et?re(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(et){ae!==et&&!U&&(r.stencilMask(et),ae=et)},setFunc:function(et,yn,Hn){(X!==et||K!==yn||ce!==Hn)&&(r.stencilFunc(et,yn,Hn),X=et,K=yn,ce=Hn)},setOp:function(et,yn,Hn){(le!==et||Ne!==yn||xt!==Hn)&&(r.stencilOp(et,yn,Hn),le=et,Ne=yn,xt=Hn)},setLocked:function(et){U=et},setClear:function(et){Bt!==et&&(r.clearStencil(et),Bt=et)},reset:function(){U=!1,ae=null,X=null,K=null,ce=null,le=null,Ne=null,xt=null,Bt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,b=!1,m=null,f=null,_=null,y=null,x=null,M=null,E=null,w=new we(0,0,0),T=0,S=!1,v=null,P=null,I=null,D=null,N=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,j=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=j>=2);let Q=null,ie={};const be=r.getParameter(r.SCISSOR_BOX),Ae=r.getParameter(r.VIEWPORT),ze=new Je().fromArray(be),q=new Je().fromArray(Ae);function te(U,ae,X,K){const ce=new Uint8Array(4),le=r.createTexture();r.bindTexture(U,le),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ne=0;Ne<X;Ne++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ae,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(ae+Ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return le}const ge={};ge[r.TEXTURE_2D]=te(r.TEXTURE_2D,r.TEXTURE_2D,1),ge[r.TEXTURE_CUBE_MAP]=te(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[r.TEXTURE_2D_ARRAY]=te(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ge[r.TEXTURE_3D]=te(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(r.DEPTH_TEST),o.setFunc(ws),je(!1),We(Vc),re(r.CULL_FACE),F(_i);function re(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function Ee(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Ke(U,ae){return u[U]!==ae?(r.bindFramebuffer(U,ae),u[U]=ae,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ae),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ae),!0):!1}function Re(U,ae){let X=p,K=!1;if(U){X=d.get(ae),X===void 0&&(X=[],d.set(ae,X));const ce=U.textures;if(X.length!==ce.length||X[0]!==r.COLOR_ATTACHMENT0){for(let le=0,Ne=ce.length;le<Ne;le++)X[le]=r.COLOR_ATTACHMENT0+le;X.length=ce.length,K=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,K=!0);K&&r.drawBuffers(X)}function St(U){return g!==U?(r.useProgram(U),g=U,!0):!1}const _t={[Oi]:r.FUNC_ADD,[mf]:r.FUNC_SUBTRACT,[gf]:r.FUNC_REVERSE_SUBTRACT};_t[_f]=r.MIN,_t[bf]=r.MAX;const Ve={[xf]:r.ZERO,[yf]:r.ONE,[vf]:r.SRC_COLOR,[al]:r.SRC_ALPHA,[Tf]:r.SRC_ALPHA_SATURATE,[Ef]:r.DST_COLOR,[Sf]:r.DST_ALPHA,[Mf]:r.ONE_MINUS_SRC_COLOR,[ll]:r.ONE_MINUS_SRC_ALPHA,[Af]:r.ONE_MINUS_DST_COLOR,[wf]:r.ONE_MINUS_DST_ALPHA,[Cf]:r.CONSTANT_COLOR,[Rf]:r.ONE_MINUS_CONSTANT_COLOR,[Pf]:r.CONSTANT_ALPHA,[Lf]:r.ONE_MINUS_CONSTANT_ALPHA};function F(U,ae,X,K,ce,le,Ne,xt,Bt,et){if(U===_i){b===!0&&(Ee(r.BLEND),b=!1);return}if(b===!1&&(re(r.BLEND),b=!0),U!==pf){if(U!==m||et!==S){if((f!==Oi||x!==Oi)&&(r.blendEquation(r.FUNC_ADD),f=Oi,x=Oi),et)switch(U){case xs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wc:r.blendFunc(r.ONE,r.ONE);break;case Xc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jc:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case xs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Xc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jc:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}_=null,y=null,M=null,E=null,w.set(0,0,0),T=0,m=U,S=et}return}ce=ce||ae,le=le||X,Ne=Ne||K,(ae!==f||ce!==x)&&(r.blendEquationSeparate(_t[ae],_t[ce]),f=ae,x=ce),(X!==_||K!==y||le!==M||Ne!==E)&&(r.blendFuncSeparate(Ve[X],Ve[K],Ve[le],Ve[Ne]),_=X,y=K,M=le,E=Ne),(xt.equals(w)===!1||Bt!==T)&&(r.blendColor(xt.r,xt.g,xt.b,Bt),w.copy(xt),T=Bt),m=U,S=!1}function cn(U,ae){U.side===ut?Ee(r.CULL_FACE):re(r.CULL_FACE);let X=U.side===kt;ae&&(X=!X),je(X),U.blending===xs&&U.transparent===!1?F(_i):F(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const K=U.stencilWrite;a.setTest(K),K&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ct(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function je(U){v!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),v=U)}function We(U){U!==df?(re(r.CULL_FACE),U!==P&&(U===Vc?r.cullFace(r.BACK):U===ff?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),P=U}function ye(U){U!==I&&(k&&r.lineWidth(U),I=U)}function ct(U,ae,X){U?(re(r.POLYGON_OFFSET_FILL),(D!==ae||N!==X)&&(r.polygonOffset(ae,X),D=ae,N=X)):Ee(r.POLYGON_OFFSET_FILL)}function xe(U){U?re(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function L(U){U===void 0&&(U=r.TEXTURE0+z-1),Q!==U&&(r.activeTexture(U),Q=U)}function C(U,ae,X){X===void 0&&(Q===null?X=r.TEXTURE0+z-1:X=Q);let K=ie[X];K===void 0&&(K={type:void 0,texture:void 0},ie[X]=K),(K.type!==U||K.texture!==ae)&&(Q!==X&&(r.activeTexture(X),Q=X),r.bindTexture(U,ae||ge[U]),K.type=U,K.texture=ae)}function H(){const U=ie[Q];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function $(){try{r.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{r.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{r.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{r.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{r.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{r.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(){try{r.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{r.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{r.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{r.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(U){ze.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),ze.copy(U))}function pe(U){q.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),q.copy(U))}function Xe(U,ae){let X=c.get(ae);X===void 0&&(X=new WeakMap,c.set(ae,X));let K=X.get(U);K===void 0&&(K=r.getUniformBlockIndex(ae,U.name),X.set(U,K))}function Ue(U,ae){const K=c.get(ae).get(U);l.get(ae)!==K&&(r.uniformBlockBinding(ae,K,U.__bindingPointIndex),l.set(ae,K))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},Q=null,ie={},u={},d=new WeakMap,p=[],g=null,b=!1,m=null,f=null,_=null,y=null,x=null,M=null,E=null,w=new we(0,0,0),T=0,S=!1,v=null,P=null,I=null,D=null,N=null,ze.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:Ee,bindFramebuffer:Ke,drawBuffers:Re,useProgram:St,setBlending:F,setMaterial:cn,setFlipSided:je,setCullFace:We,setLineWidth:ye,setPolygonOffset:ct,setScissorTest:xe,activeTexture:L,bindTexture:C,unbindTexture:H,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:fe,texImage3D:Te,updateUBOMapping:Xe,uniformBlockBinding:Ue,texStorage2D:qe,texStorage3D:ee,texSubImage2D:Y,texSubImage3D:_e,compressedTexSubImage2D:oe,compressedTexSubImage3D:de,scissor:Le,viewport:pe,reset:at}}function dy(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,C){return p?new OffscreenCanvas(L,C):yr("canvas")}function b(L,C,H){let $=1;const J=xe(L);if((J.width>H||J.height>H)&&($=H/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Y=Math.floor($*J.width),_e=Math.floor($*J.height);u===void 0&&(u=g(Y,_e));const oe=C?g(Y,_e):u;return oe.width=Y,oe.height=_e,oe.getContext("2d").drawImage(L,0,0,Y,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+_e+")."),oe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),L;return L}function m(L){return L.generateMipmaps}function f(L){r.generateMipmap(L)}function _(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(L,C,H,$,J=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Y=C;if(C===r.RED&&(H===r.FLOAT&&(Y=r.R32F),H===r.HALF_FLOAT&&(Y=r.R16F),H===r.UNSIGNED_BYTE&&(Y=r.R8)),C===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(Y=r.R8UI),H===r.UNSIGNED_SHORT&&(Y=r.R16UI),H===r.UNSIGNED_INT&&(Y=r.R32UI),H===r.BYTE&&(Y=r.R8I),H===r.SHORT&&(Y=r.R16I),H===r.INT&&(Y=r.R32I)),C===r.RG&&(H===r.FLOAT&&(Y=r.RG32F),H===r.HALF_FLOAT&&(Y=r.RG16F),H===r.UNSIGNED_BYTE&&(Y=r.RG8)),C===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(Y=r.RG8UI),H===r.UNSIGNED_SHORT&&(Y=r.RG16UI),H===r.UNSIGNED_INT&&(Y=r.RG32UI),H===r.BYTE&&(Y=r.RG8I),H===r.SHORT&&(Y=r.RG16I),H===r.INT&&(Y=r.RG32I)),C===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),H===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),H===r.UNSIGNED_INT&&(Y=r.RGB32UI),H===r.BYTE&&(Y=r.RGB8I),H===r.SHORT&&(Y=r.RGB16I),H===r.INT&&(Y=r.RGB32I)),C===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),H===r.UNSIGNED_INT&&(Y=r.RGBA32UI),H===r.BYTE&&(Y=r.RGBA8I),H===r.SHORT&&(Y=r.RGBA16I),H===r.INT&&(Y=r.RGBA32I)),C===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),C===r.RGBA){const _e=J?Uo:Ge.getTransfer($);H===r.FLOAT&&(Y=r.RGBA32F),H===r.HALF_FLOAT&&(Y=r.RGBA16F),H===r.UNSIGNED_BYTE&&(Y=_e===it?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(L,C){let H;return L?C===null||C===bi||C===mr?H=r.DEPTH24_STENCIL8:C===Wt?H=r.DEPTH32F_STENCIL8:C===pr&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===bi||C===mr?H=r.DEPTH_COMPONENT24:C===Wt?H=r.DEPTH_COMPONENT32F:C===pr&&(H=r.DEPTH_COMPONENT16),H}function M(L,C){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Jt&&L.minFilter!==Dt?Math.log2(Math.max(C.width,C.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?C.mipmaps.length:1}function E(L){const C=L.target;C.removeEventListener("dispose",E),T(C),C.isVideoTexture&&h.delete(C)}function w(L){const C=L.target;C.removeEventListener("dispose",w),v(C)}function T(L){const C=n.get(L);if(C.__webglInit===void 0)return;const H=L.source,$=d.get(H);if($){const J=$[C.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(L),Object.keys($).length===0&&d.delete(H)}n.remove(L)}function S(L){const C=n.get(L);r.deleteTexture(C.__webglTexture);const H=L.source,$=d.get(H);delete $[C.__cacheKey],o.memory.textures--}function v(L){const C=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(C.__webglFramebuffer[$]))for(let J=0;J<C.__webglFramebuffer[$].length;J++)r.deleteFramebuffer(C.__webglFramebuffer[$][J]);else r.deleteFramebuffer(C.__webglFramebuffer[$]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[$])}else{if(Array.isArray(C.__webglFramebuffer))for(let $=0;$<C.__webglFramebuffer.length;$++)r.deleteFramebuffer(C.__webglFramebuffer[$]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let $=0;$<C.__webglColorRenderbuffer.length;$++)C.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[$]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const H=L.textures;for(let $=0,J=H.length;$<J;$++){const Y=n.get(H[$]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(H[$])}n.remove(L)}let P=0;function I(){P=0}function D(){const L=P;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),P+=1,L}function N(L){const C=[];return C.push(L.wrapS),C.push(L.wrapT),C.push(L.wrapR||0),C.push(L.magFilter),C.push(L.minFilter),C.push(L.anisotropy),C.push(L.internalFormat),C.push(L.format),C.push(L.type),C.push(L.generateMipmaps),C.push(L.premultiplyAlpha),C.push(L.flipY),C.push(L.unpackAlignment),C.push(L.colorSpace),C.join()}function z(L,C){const H=n.get(L);if(L.isVideoTexture&&ye(L),L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){const $=L.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(H,L,C);return}}t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+C)}function k(L,C){const H=n.get(L);if(L.version>0&&H.__version!==L.version){q(H,L,C);return}t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+C)}function j(L,C){const H=n.get(L);if(L.version>0&&H.__version!==L.version){q(H,L,C);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+C)}function W(L,C){const H=n.get(L);if(L.version>0&&H.__version!==L.version){te(H,L,C);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+C)}const Q={[Ts]:r.REPEAT,[Nn]:r.CLAMP_TO_EDGE,[Fo]:r.MIRRORED_REPEAT},ie={[Jt]:r.NEAREST,[ad]:r.NEAREST_MIPMAP_NEAREST,[or]:r.NEAREST_MIPMAP_LINEAR,[Dt]:r.LINEAR,[Eo]:r.LINEAR_MIPMAP_NEAREST,[Fn]:r.LINEAR_MIPMAP_LINEAR},be={[Hf]:r.NEVER,[qf]:r.ALWAYS,[Gf]:r.LESS,[xd]:r.LEQUAL,[Vf]:r.EQUAL,[jf]:r.GEQUAL,[Wf]:r.GREATER,[Xf]:r.NOTEQUAL};function Ae(L,C){if(C.type===Wt&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Dt||C.magFilter===Eo||C.magFilter===or||C.magFilter===Fn||C.minFilter===Dt||C.minFilter===Eo||C.minFilter===or||C.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,Q[C.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,Q[C.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,Q[C.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,ie[C.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,ie[C.minFilter]),C.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,be[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Jt||C.minFilter!==or&&C.minFilter!==Fn||C.type===Wt&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function ze(L,C){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,C.addEventListener("dispose",E));const $=C.source;let J=d.get($);J===void 0&&(J={},d.set($,J));const Y=N(C);if(Y!==L.__cacheKey){J[Y]===void 0&&(J[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),J[Y].usedTimes++;const _e=J[L.__cacheKey];_e!==void 0&&(J[L.__cacheKey].usedTimes--,_e.usedTimes===0&&S(C)),L.__cacheKey=Y,L.__webglTexture=J[Y].texture}return H}function q(L,C,H){let $=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&($=r.TEXTURE_3D);const J=ze(L,C),Y=C.source;t.bindTexture($,L.__webglTexture,r.TEXTURE0+H);const _e=n.get(Y);if(Y.version!==_e.__version||J===!0){t.activeTexture(r.TEXTURE0+H);const oe=Ge.getPrimaries(Ge.workingColorSpace),de=C.colorSpace===pi?null:Ge.getPrimaries(C.colorSpace),qe=C.colorSpace===pi||oe===de?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ee=b(C.image,!1,i.maxTextureSize);ee=ct(C,ee);const fe=s.convert(C.format,C.colorSpace),Te=s.convert(C.type);let Le=y(C.internalFormat,fe,Te,C.colorSpace,C.isVideoTexture);Ae($,C);let pe;const Xe=C.mipmaps,Ue=C.isVideoTexture!==!0,at=_e.__version===void 0||J===!0,U=Y.dataReady,ae=M(C,ee);if(C.isDepthTexture)Le=x(C.format===_r,C.type),at&&(Ue?t.texStorage2D(r.TEXTURE_2D,1,Le,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,Le,ee.width,ee.height,0,fe,Te,null));else if(C.isDataTexture)if(Xe.length>0){Ue&&at&&t.texStorage2D(r.TEXTURE_2D,ae,Le,Xe[0].width,Xe[0].height);for(let X=0,K=Xe.length;X<K;X++)pe=Xe[X],Ue?U&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,pe.width,pe.height,fe,Te,pe.data):t.texImage2D(r.TEXTURE_2D,X,Le,pe.width,pe.height,0,fe,Te,pe.data);C.generateMipmaps=!1}else Ue?(at&&t.texStorage2D(r.TEXTURE_2D,ae,Le,ee.width,ee.height),U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee.width,ee.height,fe,Te,ee.data)):t.texImage2D(r.TEXTURE_2D,0,Le,ee.width,ee.height,0,fe,Te,ee.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Ue&&at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,Le,Xe[0].width,Xe[0].height,ee.depth);for(let X=0,K=Xe.length;X<K;X++)if(pe=Xe[X],C.format!==nn)if(fe!==null)if(Ue){if(U)if(C.layerUpdates.size>0){const ce=zh(pe.width,pe.height,C.format,C.type);for(const le of C.layerUpdates){const Ne=pe.data.subarray(le*ce/pe.data.BYTES_PER_ELEMENT,(le+1)*ce/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,le,pe.width,pe.height,1,fe,Ne)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,pe.width,pe.height,ee.depth,fe,pe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,Le,pe.width,pe.height,ee.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,pe.width,pe.height,ee.depth,fe,Te,pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,X,Le,pe.width,pe.height,ee.depth,0,fe,Te,pe.data)}else{Ue&&at&&t.texStorage2D(r.TEXTURE_2D,ae,Le,Xe[0].width,Xe[0].height);for(let X=0,K=Xe.length;X<K;X++)pe=Xe[X],C.format!==nn?fe!==null?Ue?U&&t.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(r.TEXTURE_2D,X,Le,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?U&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,pe.width,pe.height,fe,Te,pe.data):t.texImage2D(r.TEXTURE_2D,X,Le,pe.width,pe.height,0,fe,Te,pe.data)}else if(C.isDataArrayTexture)if(Ue){if(at&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,Le,ee.width,ee.height,ee.depth),U)if(C.layerUpdates.size>0){const X=zh(ee.width,ee.height,C.format,C.type);for(const K of C.layerUpdates){const ce=ee.data.subarray(K*X/ee.data.BYTES_PER_ELEMENT,(K+1)*X/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,fe,Te,ce)}C.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,fe,Te,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,ee.width,ee.height,ee.depth,0,fe,Te,ee.data);else if(C.isData3DTexture)Ue?(at&&t.texStorage3D(r.TEXTURE_3D,ae,Le,ee.width,ee.height,ee.depth),U&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,fe,Te,ee.data)):t.texImage3D(r.TEXTURE_3D,0,Le,ee.width,ee.height,ee.depth,0,fe,Te,ee.data);else if(C.isFramebufferTexture){if(at)if(Ue)t.texStorage2D(r.TEXTURE_2D,ae,Le,ee.width,ee.height);else{let X=ee.width,K=ee.height;for(let ce=0;ce<ae;ce++)t.texImage2D(r.TEXTURE_2D,ce,Le,X,K,0,fe,Te,null),X>>=1,K>>=1}}else if(Xe.length>0){if(Ue&&at){const X=xe(Xe[0]);t.texStorage2D(r.TEXTURE_2D,ae,Le,X.width,X.height)}for(let X=0,K=Xe.length;X<K;X++)pe=Xe[X],Ue?U&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,fe,Te,pe):t.texImage2D(r.TEXTURE_2D,X,Le,fe,Te,pe);C.generateMipmaps=!1}else if(Ue){if(at){const X=xe(ee);t.texStorage2D(r.TEXTURE_2D,ae,Le,X.width,X.height)}U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe,Te,ee)}else t.texImage2D(r.TEXTURE_2D,0,Le,fe,Te,ee);m(C)&&f($),_e.__version=Y.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function te(L,C,H){if(C.image.length!==6)return;const $=ze(L,C),J=C.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+H);const Y=n.get(J);if(J.version!==Y.__version||$===!0){t.activeTexture(r.TEXTURE0+H);const _e=Ge.getPrimaries(Ge.workingColorSpace),oe=C.colorSpace===pi?null:Ge.getPrimaries(C.colorSpace),de=C.colorSpace===pi||_e===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const qe=C.isCompressedTexture||C.image[0].isCompressedTexture,ee=C.image[0]&&C.image[0].isDataTexture,fe=[];for(let K=0;K<6;K++)!qe&&!ee?fe[K]=b(C.image[K],!0,i.maxCubemapSize):fe[K]=ee?C.image[K].image:C.image[K],fe[K]=ct(C,fe[K]);const Te=fe[0],Le=s.convert(C.format,C.colorSpace),pe=s.convert(C.type),Xe=y(C.internalFormat,Le,pe,C.colorSpace),Ue=C.isVideoTexture!==!0,at=Y.__version===void 0||$===!0,U=J.dataReady;let ae=M(C,Te);Ae(r.TEXTURE_CUBE_MAP,C);let X;if(qe){Ue&&at&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,Xe,Te.width,Te.height);for(let K=0;K<6;K++){X=fe[K].mipmaps;for(let ce=0;ce<X.length;ce++){const le=X[ce];C.format!==nn?Le!==null?Ue?U&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,le.width,le.height,Le,le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,Xe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,0,0,le.width,le.height,Le,pe,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce,Xe,le.width,le.height,0,Le,pe,le.data)}}}else{if(X=C.mipmaps,Ue&&at){X.length>0&&ae++;const K=xe(fe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,Xe,K.width,K.height)}for(let K=0;K<6;K++)if(ee){Ue?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,fe[K].width,fe[K].height,Le,pe,fe[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xe,fe[K].width,fe[K].height,0,Le,pe,fe[K].data);for(let ce=0;ce<X.length;ce++){const Ne=X[ce].image[K].image;Ue?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,Ne.width,Ne.height,Le,pe,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,Xe,Ne.width,Ne.height,0,Le,pe,Ne.data)}}else{Ue?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Le,pe,fe[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Xe,Le,pe,fe[K]);for(let ce=0;ce<X.length;ce++){const le=X[ce];Ue?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,0,0,Le,pe,le.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ce+1,Xe,Le,pe,le.image[K])}}}m(C)&&f(r.TEXTURE_CUBE_MAP),Y.__version=J.version,C.onUpdate&&C.onUpdate(C)}L.__version=C.version}function ge(L,C,H,$,J,Y){const _e=s.convert(H.format,H.colorSpace),oe=s.convert(H.type),de=y(H.internalFormat,_e,oe,H.colorSpace),qe=n.get(C),ee=n.get(H);if(ee.__renderTarget=C,!qe.__hasExternalTextures){const fe=Math.max(1,C.width>>Y),Te=Math.max(1,C.height>>Y);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,Y,de,fe,Te,C.depth,0,_e,oe,null):t.texImage2D(J,Y,de,fe,Te,0,_e,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),We(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,J,ee.__webglTexture,0,je(C)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,J,ee.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(L,C,H){if(r.bindRenderbuffer(r.RENDERBUFFER,L),C.depthBuffer){const $=C.depthTexture,J=$&&$.isDepthTexture?$.type:null,Y=x(C.stencilBuffer,J),_e=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=je(C);We(C)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,Y,C.width,C.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,Y,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,Y,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,L)}else{const $=C.textures;for(let J=0;J<$.length;J++){const Y=$[J],_e=s.convert(Y.format,Y.colorSpace),oe=s.convert(Y.type),de=y(Y.internalFormat,_e,oe,Y.colorSpace),qe=je(C);H&&We(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe,de,C.width,C.height):We(C)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe,de,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,de,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ee(L,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(C.depthTexture);$.__renderTarget=C,(!$.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),z(C.depthTexture,0);const J=$.__webglTexture,Y=je(C);if(C.depthTexture.format===gr)We(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(C.depthTexture.format===_r)We(C)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ke(L){const C=n.get(L),H=L.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==L.depthTexture){const $=L.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),$){const J=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),C.__depthDisposeCallback=J}C.__boundDepthTexture=$}if(L.depthTexture&&!C.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ee(C.__webglFramebuffer,L)}else if(H){C.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[$]),C.__webglDepthbuffer[$]===void 0)C.__webglDepthbuffer[$]=r.createRenderbuffer(),re(C.__webglDepthbuffer[$],L,!1);else{const J=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=C.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),re(C.__webglDepthbuffer,L,!1);else{const $=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,J)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(L,C,H){const $=n.get(L);C!==void 0&&ge($.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Ke(L)}function St(L){const C=L.texture,H=n.get(L),$=n.get(C);L.addEventListener("dispose",w);const J=L.textures,Y=L.isWebGLCubeRenderTarget===!0,_e=J.length>1;if(_e||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=C.version,o.memory.textures++),Y){H.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(C.mipmaps&&C.mipmaps.length>0){H.__webglFramebuffer[oe]=[];for(let de=0;de<C.mipmaps.length;de++)H.__webglFramebuffer[oe][de]=r.createFramebuffer()}else H.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){H.__webglFramebuffer=[];for(let oe=0;oe<C.mipmaps.length;oe++)H.__webglFramebuffer[oe]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(_e)for(let oe=0,de=J.length;oe<de;oe++){const qe=n.get(J[oe]);qe.__webglTexture===void 0&&(qe.__webglTexture=r.createTexture(),o.memory.textures++)}if(L.samples>0&&We(L)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let oe=0;oe<J.length;oe++){const de=J[oe];H.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[oe]);const qe=s.convert(de.format,de.colorSpace),ee=s.convert(de.type),fe=y(de.internalFormat,qe,ee,de.colorSpace,L.isXRRenderTarget===!0),Te=je(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Te,fe,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,H.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),re(H.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,C);for(let oe=0;oe<6;oe++)if(C.mipmaps&&C.mipmaps.length>0)for(let de=0;de<C.mipmaps.length;de++)ge(H.__webglFramebuffer[oe][de],L,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de);else ge(H.__webglFramebuffer[oe],L,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(C)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let oe=0,de=J.length;oe<de;oe++){const qe=J[oe],ee=n.get(qe);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture),Ae(r.TEXTURE_2D,qe),ge(H.__webglFramebuffer,L,qe,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,0),m(qe)&&f(r.TEXTURE_2D)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(oe=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,$.__webglTexture),Ae(oe,C),C.mipmaps&&C.mipmaps.length>0)for(let de=0;de<C.mipmaps.length;de++)ge(H.__webglFramebuffer[de],L,C,r.COLOR_ATTACHMENT0,oe,de);else ge(H.__webglFramebuffer,L,C,r.COLOR_ATTACHMENT0,oe,0);m(C)&&f(oe),t.unbindTexture()}L.depthBuffer&&Ke(L)}function _t(L){const C=L.textures;for(let H=0,$=C.length;H<$;H++){const J=C[H];if(m(J)){const Y=_(L),_e=n.get(J).__webglTexture;t.bindTexture(Y,_e),f(Y),t.unbindTexture()}}}const Ve=[],F=[];function cn(L){if(L.samples>0){if(We(L)===!1){const C=L.textures,H=L.width,$=L.height;let J=r.COLOR_BUFFER_BIT;const Y=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=n.get(L),oe=C.length>1;if(oe)for(let de=0;de<C.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let de=0;de<C.length;de++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,_e.__webglColorRenderbuffer[de]);const qe=n.get(C[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,qe,0)}r.blitFramebuffer(0,0,H,$,0,0,H,$,J,r.NEAREST),l===!0&&(Ve.length=0,F.length=0,Ve.push(r.COLOR_ATTACHMENT0+de),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ve.push(Y),F.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,F)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let de=0;de<C.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,_e.__webglColorRenderbuffer[de]);const qe=n.get(C[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,qe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const C=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function je(L){return Math.min(i.maxSamples,L.samples)}function We(L){const C=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function ye(L){const C=o.render.frame;h.get(L)!==C&&(h.set(L,C),L.update())}function ct(L,C){const H=L.colorSpace,$=L.format,J=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||H!==Ot&&H!==pi&&(Ge.getTransfer(H)===it?($!==nn||J!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),C}function xe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=I,this.setTexture2D=z,this.setTexture2DArray=k,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=Re,this.setupRenderTarget=St,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=We}function fy(r,e){function t(n,i=pi){let s;const o=Ge.getTransfer(i);if(n===ii)return r.UNSIGNED_BYTE;if(n===mc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===gc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===hd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ld)return r.BYTE;if(n===cd)return r.SHORT;if(n===pr)return r.UNSIGNED_SHORT;if(n===pc)return r.INT;if(n===bi)return r.UNSIGNED_INT;if(n===Wt)return r.FLOAT;if(n===Zn)return r.HALF_FLOAT;if(n===ud)return r.ALPHA;if(n===dd)return r.RGB;if(n===nn)return r.RGBA;if(n===fd)return r.LUMINANCE;if(n===pd)return r.LUMINANCE_ALPHA;if(n===gr)return r.DEPTH_COMPONENT;if(n===_r)return r.DEPTH_STENCIL;if(n===_c)return r.RED;if(n===qo)return r.RED_INTEGER;if(n===md)return r.RG;if(n===bc)return r.RG_INTEGER;if(n===xc)return r.RGBA_INTEGER;if(n===Ao||n===To||n===Co||n===Ro)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ao)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ao)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===To)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bl||n===xl||n===yl||n===vl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===bl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ml||n===Sl||n===wl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ml||n===Sl)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===wl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===El||n===Al||n===Tl||n===Cl||n===Rl||n===Pl||n===Ll||n===Il||n===Dl||n===Nl||n===Fl||n===Ul||n===kl||n===Ol)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===El)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Al)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Rl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ll)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Il)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ul)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kl)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ol)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Po||n===Bl||n===zl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Po)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gd||n===Hl||n===Gl||n===Vl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Po)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Hl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const py=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,my=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ct,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xi({vertexShader:py,fragmentShader:my,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new he(new Vt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _y extends Fs{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const b=new gy,m=t.getContextAttributes();let f=null,_=null;const y=[],x=[],M=new De;let E=null;const w=new Kt;w.viewport=new Je;const T=new Kt;T.viewport=new Je;const S=[w,T],v=new Tm;let P=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=y[q];return te===void 0&&(te=new wa,y[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=y[q];return te===void 0&&(te=new wa,y[q]=te),te.getGripSpace()},this.getHand=function(q){let te=y[q];return te===void 0&&(te=new wa,y[q]=te),te.getHandSpace()};function D(q){const te=x.indexOf(q.inputSource);if(te===-1)return;const ge=y[te];ge!==void 0&&(ge.update(q.inputSource,q.frame,c||o),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",z);for(let q=0;q<y.length;q++){const te=x[q];te!==null&&(x[q]=null,y[q].disconnect(te))}P=null,I=null,b.reset(),e.setRenderTarget(f),p=null,d=null,u=null,i=null,_=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",N),i.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(M),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,re=null,Ee=null;m.depth&&(Ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=m.stencil?_r:gr,re=m.stencil?mr:bi);const Ke={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ke),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Gi(d.textureWidth,d.textureHeight,{format:nn,type:ii,depthTexture:new Id(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ge={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Gi(p.framebufferWidth,p.framebufferHeight,{format:nn,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),ze.setContext(i),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function z(q){for(let te=0;te<q.removed.length;te++){const ge=q.removed[te],re=x.indexOf(ge);re>=0&&(x[re]=null,y[re].disconnect(ge))}for(let te=0;te<q.added.length;te++){const ge=q.added[te];let re=x.indexOf(ge);if(re===-1){for(let Ke=0;Ke<y.length;Ke++)if(Ke>=x.length){x.push(ge),re=Ke;break}else if(x[Ke]===null){x[Ke]=ge,re=Ke;break}if(re===-1)break}const Ee=y[re];Ee&&Ee.connect(ge)}}const k=new A,j=new A;function W(q,te,ge){k.setFromMatrixPosition(te.matrixWorld),j.setFromMatrixPosition(ge.matrixWorld);const re=k.distanceTo(j),Ee=te.projectionMatrix.elements,Ke=ge.projectionMatrix.elements,Re=Ee[14]/(Ee[10]-1),St=Ee[14]/(Ee[10]+1),_t=(Ee[9]+1)/Ee[5],Ve=(Ee[9]-1)/Ee[5],F=(Ee[8]-1)/Ee[0],cn=(Ke[8]+1)/Ke[0],je=Re*F,We=Re*cn,ye=re/(-F+cn),ct=ye*-F;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ct),q.translateZ(ye),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ee[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const xe=Re+ye,L=St+ye,C=je-ct,H=We+(re-ct),$=_t*St/L*xe,J=Ve*St/L*xe;q.projectionMatrix.makePerspective(C,H,$,J,xe,L),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Q(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let te=q.near,ge=q.far;b.texture!==null&&(b.depthNear>0&&(te=b.depthNear),b.depthFar>0&&(ge=b.depthFar)),v.near=T.near=w.near=te,v.far=T.far=w.far=ge,(P!==v.near||I!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,I=v.far),w.layers.mask=q.layers.mask|2,T.layers.mask=q.layers.mask|4,v.layers.mask=w.layers.mask|T.layers.mask;const re=q.parent,Ee=v.cameras;Q(v,re);for(let Ke=0;Ke<Ee.length;Ke++)Q(Ee[Ke],re);Ee.length===2?W(v,w,T):v.projectionMatrix.copy(w.projectionMatrix),ie(q,v,re)};function ie(q,te,ge){ge===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Cs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(v)};let be=null;function Ae(q,te){if(h=te.getViewerPose(c||o),g=te,h!==null){const ge=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let re=!1;ge.length!==v.cameras.length&&(v.cameras.length=0,re=!0);for(let Re=0;Re<ge.length;Re++){const St=ge[Re];let _t=null;if(p!==null)_t=p.getViewport(St);else{const F=u.getViewSubImage(d,St);_t=F.viewport,Re===0&&(e.setRenderTargetTextures(_,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(_))}let Ve=S[Re];Ve===void 0&&(Ve=new Kt,Ve.layers.enable(Re),Ve.viewport=new Je,S[Re]=Ve),Ve.matrix.fromArray(St.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(St.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(_t.x,_t.y,_t.width,_t.height),Re===0&&(v.matrix.copy(Ve.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),re===!0&&v.cameras.push(Ve)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Re=u.getDepthInformation(ge[0]);Re&&Re.isValid&&Re.texture&&b.init(e,Re,i.renderState)}}for(let ge=0;ge<y.length;ge++){const re=x[ge],Ee=y[ge];re!==null&&Ee!==void 0&&Ee.update(re,te,c||o)}be&&be(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const ze=new kd;ze.setAnimationLoop(Ae),this.setAnimationLoop=function(q){be=q},this.dispose=function(){}}}const Ii=new Rn,by=new ve;function xy(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ed(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,_,y,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),u(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),b(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===kt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===kt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,Ii.copy(x),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(by.makeRotationFromEuler(Ii)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===kt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yy(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function c(_,y){let x=i[_.id];x===void 0&&(g(_),x=h(_),i[_.id]=x,_.addEventListener("dispose",m));const M=y.program;n.updateUBOMapping(_,M);const E=e.render.frame;s[_.id]!==E&&(d(_),s[_.id]=E)}function h(_){const y=u();_.__bindingPointIndex=y;const x=r.createBuffer(),M=_.__size,E=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,M,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,x),x}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=i[_.id],x=_.uniforms,M=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let E=0,w=x.length;E<w;E++){const T=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,v=T.length;S<v;S++){const P=T[S];if(p(P,E,S,M)===!0){const I=P.__offset,D=Array.isArray(P.value)?P.value:[P.value];let N=0;for(let z=0;z<D.length;z++){const k=D[z],j=b(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,I+N,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,N),N+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(_,y,x,M){const E=_.value,w=y+"_"+x;if(M[w]===void 0)return typeof E=="number"||typeof E=="boolean"?M[w]=E:M[w]=E.clone(),!0;{const T=M[w];if(typeof E=="number"||typeof E=="boolean"){if(T!==E)return M[w]=E,!0}else if(T.equals(E)===!1)return T.copy(E),!0}return!1}function g(_){const y=_.uniforms;let x=0;const M=16;for(let w=0,T=y.length;w<T;w++){const S=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,P=S.length;v<P;v++){const I=S[v],D=Array.isArray(I.value)?I.value:[I.value];for(let N=0,z=D.length;N<z;N++){const k=D[N],j=b(k),W=x%M,Q=W%j.boundary,ie=W+Q;x+=Q,ie!==0&&M-ie<j.storage&&(x+=M-ie),I.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=j.storage}}}const E=x%M;return E>0&&(x+=M-E),_.__size=x,_.__cache={},this}function b(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function f(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:l,update:c,dispose:f}}class vy{constructor(e={}){const{canvas:t=hp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),b=new Int32Array(4);let m=null,f=null;const _=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let M=!1;this._outputColorSpace=ht;let E=0,w=0,T=null,S=-1,v=null;const P=new Je,I=new Je;let D=null;const N=new we(0);let z=0,k=t.width,j=t.height,W=1,Q=null,ie=null;const be=new Je(0,0,k,j),Ae=new Je(0,0,k,j);let ze=!1;const q=new Yo;let te=!1,ge=!1;const re=new ve,Ee=new ve,Ke=new A,Re=new Je,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function Ve(){return T===null?W:1}let F=n;function cn(R,O){return t.getContext(R,O)}try{const R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wo}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",le,!1),F===null){const O="webgl2";if(F=cn(O,R),F===null)throw cn(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let je,We,ye,ct,xe,L,C,H,$,J,Y,_e,oe,de,qe,ee,fe,Te,Le,pe,Xe,Ue,at,U;function ae(){je=new Lb(F),je.init(),Ue=new fy(F,je),We=new wb(F,je,e,Ue),ye=new uy(F,je),We.reverseDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),ct=new Nb(F),xe=new Zx,L=new dy(F,je,ye,xe,We,Ue,ct),C=new Ab(x),H=new Pb(x),$=new zm(F),at=new Mb(F,$),J=new Ib(F,$,ct,at),Y=new Ub(F,J,$,ct),Le=new Fb(F,We,L),ee=new Eb(xe),_e=new Jx(x,C,H,je,We,at,ee),oe=new xy(x,xe),de=new ey,qe=new oy(je),Te=new vb(x,C,H,ye,Y,p,l),fe=new cy(x,Y,We),U=new yy(F,ct,We,ye),pe=new Sb(F,je,ct),Xe=new Db(F,je,ct),ct.programs=_e.programs,x.capabilities=We,x.extensions=je,x.properties=xe,x.renderLists=de,x.shadowMap=fe,x.state=ye,x.info=ct}ae();const X=new _y(x,F);this.xr=X,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=je.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=je.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(k,j,!1))},this.getSize=function(R){return R.set(k,j)},this.setSize=function(R,O,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,j=O,t.width=Math.floor(R*W),t.height=Math.floor(O*W),G===!0&&(t.style.width=R+"px",t.style.height=O+"px"),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(k*W,j*W).floor()},this.setDrawingBufferSize=function(R,O,G){k=R,j=O,W=G,t.width=Math.floor(R*G),t.height=Math.floor(O*G),this.setViewport(0,0,R,O)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(be)},this.setViewport=function(R,O,G,V){R.isVector4?be.set(R.x,R.y,R.z,R.w):be.set(R,O,G,V),ye.viewport(P.copy(be).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(Ae)},this.setScissor=function(R,O,G,V){R.isVector4?Ae.set(R.x,R.y,R.z,R.w):Ae.set(R,O,G,V),ye.scissor(I.copy(Ae).multiplyScalar(W).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(R){ye.setScissorTest(ze=R)},this.setOpaqueSort=function(R){Q=R},this.setTransparentSort=function(R){ie=R},this.getClearColor=function(R){return R.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(R=!0,O=!0,G=!0){let V=0;if(R){let B=!1;if(T!==null){const Z=T.texture.format;B=Z===xc||Z===bc||Z===qo}if(B){const Z=T.texture.type,se=Z===ii||Z===bi||Z===pr||Z===mr||Z===mc||Z===gc,ue=Te.getClearColor(),me=Te.getClearAlpha(),Ie=ue.r,Pe=ue.g,Me=ue.b;se?(g[0]=Ie,g[1]=Pe,g[2]=Me,g[3]=me,F.clearBufferuiv(F.COLOR,0,g)):(b[0]=Ie,b[1]=Pe,b[2]=Me,b[3]=me,F.clearBufferiv(F.COLOR,0,b))}else V|=F.COLOR_BUFFER_BIT}O&&(V|=F.DEPTH_BUFFER_BIT),G&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Te.dispose(),de.dispose(),qe.dispose(),xe.dispose(),C.dispose(),H.dispose(),Y.dispose(),at.dispose(),U.dispose(),_e.dispose(),X.dispose(),X.removeEventListener("sessionstart",Uc),X.removeEventListener("sessionend",kc),Si.stop()};function K(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=ct.autoReset,O=fe.enabled,G=fe.autoUpdate,V=fe.needsUpdate,B=fe.type;ae(),ct.autoReset=R,fe.enabled=O,fe.autoUpdate=G,fe.needsUpdate=V,fe.type=B}function le(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ne(R){const O=R.target;O.removeEventListener("dispose",Ne),xt(O)}function xt(R){Bt(R),xe.remove(R)}function Bt(R){const O=xe.get(R).programs;O!==void 0&&(O.forEach(function(G){_e.releaseProgram(G)}),R.isShaderMaterial&&_e.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,G,V,B,Z){O===null&&(O=St);const se=B.isMesh&&B.matrixWorld.determinant()<0,ue=nf(R,O,G,V,B);ye.setMaterial(V,se);let me=G.index,Ie=1;if(V.wireframe===!0){if(me=J.getWireframeAttribute(G),me===void 0)return;Ie=2}const Pe=G.drawRange,Me=G.attributes.position;let Ye=Pe.start*Ie,Ze=(Pe.start+Pe.count)*Ie;Z!==null&&(Ye=Math.max(Ye,Z.start*Ie),Ze=Math.min(Ze,(Z.start+Z.count)*Ie)),me!==null?(Ye=Math.max(Ye,0),Ze=Math.min(Ze,me.count)):Me!=null&&(Ye=Math.max(Ye,0),Ze=Math.min(Ze,Me.count));const Et=Ze-Ye;if(Et<0||Et===1/0)return;at.setup(B,V,ue,G,me);let yt,$e=pe;if(me!==null&&(yt=$.get(me),$e=Xe,$e.setIndex(yt)),B.isMesh)V.wireframe===!0?(ye.setLineWidth(V.wireframeLinewidth*Ve()),$e.setMode(F.LINES)):$e.setMode(F.TRIANGLES);else if(B.isLine){let Se=V.linewidth;Se===void 0&&(Se=1),ye.setLineWidth(Se*Ve()),B.isLineSegments?$e.setMode(F.LINES):B.isLineLoop?$e.setMode(F.LINE_LOOP):$e.setMode(F.LINE_STRIP)}else B.isPoints?$e.setMode(F.POINTS):B.isSprite&&$e.setMode(F.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Lo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$e.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))$e.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Se=B._multiDrawStarts,Ft=B._multiDrawCounts,Qe=B._multiDrawCount,vn=me?$.get(me).bytesPerElement:1,Xi=xe.get(V).currentProgram.getUniforms();for(let sn=0;sn<Qe;sn++)Xi.setValue(F,"_gl_DrawID",sn),$e.render(Se[sn]/vn,Ft[sn])}else if(B.isInstancedMesh)$e.renderInstances(Ye,Et,B.count);else if(G.isInstancedBufferGeometry){const Se=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ft=Math.min(G.instanceCount,Se);$e.renderInstances(Ye,Et,Ft)}else $e.render(Ye,Et)};function et(R,O,G){R.transparent===!0&&R.side===ut&&R.forceSinglePass===!1?(R.side=kt,R.needsUpdate=!0,Ar(R,O,G),R.side=xn,R.needsUpdate=!0,Ar(R,O,G),R.side=ut):Ar(R,O,G)}this.compile=function(R,O,G=null){G===null&&(G=R),f=qe.get(G),f.init(O),y.push(f),G.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),R!==G&&R.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const V=new Set;return R.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const Z=B.material;if(Z)if(Array.isArray(Z))for(let se=0;se<Z.length;se++){const ue=Z[se];et(ue,G,B),V.add(ue)}else et(Z,G,B),V.add(Z)}),f=y.pop(),V},this.compileAsync=function(R,O,G=null){const V=this.compile(R,O,G);return new Promise(B=>{function Z(){if(V.forEach(function(se){xe.get(se).currentProgram.isReady()&&V.delete(se)}),V.size===0){B(R);return}setTimeout(Z,10)}je.get("KHR_parallel_shader_compile")!==null?Z():setTimeout(Z,10)})};let yn=null;function Hn(R){yn&&yn(R)}function Uc(){Si.stop()}function kc(){Si.start()}const Si=new kd;Si.setAnimationLoop(Hn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(R){yn=R,X.setAnimationLoop(R),R===null?Si.stop():Si.start()},X.addEventListener("sessionstart",Uc),X.addEventListener("sessionend",kc),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(O),O=X.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,O,T),f=qe.get(R,y.length),f.init(O),y.push(f),Ee.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),q.setFromProjectionMatrix(Ee),ge=this.localClippingEnabled,te=ee.init(this.clippingPlanes,ge),m=de.get(R,_.length),m.init(),_.push(m),X.enabled===!0&&X.isPresenting===!0){const Z=x.xr.getDepthSensingMesh();Z!==null&&na(Z,O,-1/0,x.sortObjects)}na(R,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Q,ie),_t=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,_t&&Te.addToRenderList(m,R),this.info.render.frame++,te===!0&&ee.beginShadows();const G=f.state.shadowsArray;fe.render(G,R,O),te===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,B=m.transmissive;if(f.setupLights(),O.isArrayCamera){const Z=O.cameras;if(B.length>0)for(let se=0,ue=Z.length;se<ue;se++){const me=Z[se];Bc(V,B,R,me)}_t&&Te.render(R);for(let se=0,ue=Z.length;se<ue;se++){const me=Z[se];Oc(m,R,me,me.viewport)}}else B.length>0&&Bc(V,B,R,O),_t&&Te.render(R),Oc(m,R,O);T!==null&&w===0&&(L.updateMultisampleRenderTarget(T),L.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(x,R,O),at.resetDefaultState(),S=-1,v=null,y.pop(),y.length>0?(f=y[y.length-1],te===!0&&ee.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function na(R,O,G,V){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)G=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)f.pushLight(R),R.castShadow&&f.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||q.intersectsSprite(R)){V&&Re.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ee);const se=Y.update(R),ue=R.material;ue.visible&&m.push(R,se,ue,G,Re.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||q.intersectsObject(R))){const se=Y.update(R),ue=R.material;if(V&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Re.copy(R.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Re.copy(se.boundingSphere.center)),Re.applyMatrix4(R.matrixWorld).applyMatrix4(Ee)),Array.isArray(ue)){const me=se.groups;for(let Ie=0,Pe=me.length;Ie<Pe;Ie++){const Me=me[Ie],Ye=ue[Me.materialIndex];Ye&&Ye.visible&&m.push(R,se,Ye,G,Re.z,Me)}}else ue.visible&&m.push(R,se,ue,G,Re.z,null)}}const Z=R.children;for(let se=0,ue=Z.length;se<ue;se++)na(Z[se],O,G,V)}function Oc(R,O,G,V){const B=R.opaque,Z=R.transmissive,se=R.transparent;f.setupLightsView(G),te===!0&&ee.setGlobalState(x.clippingPlanes,G),V&&ye.viewport(P.copy(V)),B.length>0&&Er(B,O,G),Z.length>0&&Er(Z,O,G),se.length>0&&Er(se,O,G),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Bc(R,O,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new Gi(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Zn:ii,minFilter:Fn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));const Z=f.state.transmissionRenderTarget[V.id],se=V.viewport||P;Z.setSize(se.z*x.transmissionResolutionScale,se.w*x.transmissionResolutionScale);const ue=x.getRenderTarget();x.setRenderTarget(Z),x.getClearColor(N),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),_t&&Te.render(G);const me=x.toneMapping;x.toneMapping=ei;const Ie=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),te===!0&&ee.setGlobalState(x.clippingPlanes,V),Er(R,G,V),L.updateMultisampleRenderTarget(Z),L.updateRenderTargetMipmap(Z),je.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Me=0,Ye=O.length;Me<Ye;Me++){const Ze=O[Me],Et=Ze.object,yt=Ze.geometry,$e=Ze.material,Se=Ze.group;if($e.side===ut&&Et.layers.test(V.layers)){const Ft=$e.side;$e.side=kt,$e.needsUpdate=!0,zc(Et,G,V,yt,$e,Se),$e.side=Ft,$e.needsUpdate=!0,Pe=!0}}Pe===!0&&(L.updateMultisampleRenderTarget(Z),L.updateRenderTargetMipmap(Z))}x.setRenderTarget(ue),x.setClearColor(N,z),Ie!==void 0&&(V.viewport=Ie),x.toneMapping=me}function Er(R,O,G){const V=O.isScene===!0?O.overrideMaterial:null;for(let B=0,Z=R.length;B<Z;B++){const se=R[B],ue=se.object,me=se.geometry,Ie=se.group;let Pe=se.material;Pe.allowOverride===!0&&V!==null&&(Pe=V),ue.layers.test(G.layers)&&zc(ue,O,G,me,Pe,Ie)}}function zc(R,O,G,V,B,Z){R.onBeforeRender(x,O,G,V,B,Z),R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),B.onBeforeRender(x,O,G,V,R,Z),B.transparent===!0&&B.side===ut&&B.forceSinglePass===!1?(B.side=kt,B.needsUpdate=!0,x.renderBufferDirect(G,O,V,B,R,Z),B.side=xn,B.needsUpdate=!0,x.renderBufferDirect(G,O,V,B,R,Z),B.side=ut):x.renderBufferDirect(G,O,V,B,R,Z),R.onAfterRender(x,O,G,V,B,Z)}function Ar(R,O,G){O.isScene!==!0&&(O=St);const V=xe.get(R),B=f.state.lights,Z=f.state.shadowsArray,se=B.state.version,ue=_e.getParameters(R,B.state,Z,O,G),me=_e.getProgramCacheKey(ue);let Ie=V.programs;V.environment=R.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(R.isMeshStandardMaterial?H:C).get(R.envMap||V.environment),V.envMapRotation=V.environment!==null&&R.envMap===null?O.environmentRotation:R.envMapRotation,Ie===void 0&&(R.addEventListener("dispose",Ne),Ie=new Map,V.programs=Ie);let Pe=Ie.get(me);if(Pe!==void 0){if(V.currentProgram===Pe&&V.lightsStateVersion===se)return Gc(R,ue),Pe}else ue.uniforms=_e.getUniforms(R),R.onBeforeCompile(ue,x),Pe=_e.acquireProgram(ue,me),Ie.set(me,Pe),V.uniforms=ue.uniforms;const Me=V.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Me.clippingPlanes=ee.uniform),Gc(R,ue),V.needsLights=rf(R),V.lightsStateVersion=se,V.needsLights&&(Me.ambientLightColor.value=B.state.ambient,Me.lightProbe.value=B.state.probe,Me.directionalLights.value=B.state.directional,Me.directionalLightShadows.value=B.state.directionalShadow,Me.spotLights.value=B.state.spot,Me.spotLightShadows.value=B.state.spotShadow,Me.rectAreaLights.value=B.state.rectArea,Me.ltc_1.value=B.state.rectAreaLTC1,Me.ltc_2.value=B.state.rectAreaLTC2,Me.pointLights.value=B.state.point,Me.pointLightShadows.value=B.state.pointShadow,Me.hemisphereLights.value=B.state.hemi,Me.directionalShadowMap.value=B.state.directionalShadowMap,Me.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Me.spotShadowMap.value=B.state.spotShadowMap,Me.spotLightMatrix.value=B.state.spotLightMatrix,Me.spotLightMap.value=B.state.spotLightMap,Me.pointShadowMap.value=B.state.pointShadowMap,Me.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Pe,V.uniformsList=null,Pe}function Hc(R){if(R.uniformsList===null){const O=R.currentProgram.getUniforms();R.uniformsList=Io.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function Gc(R,O){const G=xe.get(R);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function nf(R,O,G,V,B){O.isScene!==!0&&(O=St),L.resetTextureUnits();const Z=O.fog,se=V.isMeshStandardMaterial?O.environment:null,ue=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ot,me=(V.isMeshStandardMaterial?H:C).get(V.envMap||se),Ie=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Pe=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Me=!!G.morphAttributes.position,Ye=!!G.morphAttributes.normal,Ze=!!G.morphAttributes.color;let Et=ei;V.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Et=x.toneMapping);const yt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,$e=yt!==void 0?yt.length:0,Se=xe.get(V),Ft=f.state.lights;if(te===!0&&(ge===!0||R!==v)){const qt=R===v&&V.id===S;ee.setState(V,R,qt)}let Qe=!1;V.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Ft.state.version||Se.outputColorSpace!==ue||B.isBatchedMesh&&Se.batching===!1||!B.isBatchedMesh&&Se.batching===!0||B.isBatchedMesh&&Se.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Se.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Se.instancing===!1||!B.isInstancedMesh&&Se.instancing===!0||B.isSkinnedMesh&&Se.skinning===!1||!B.isSkinnedMesh&&Se.skinning===!0||B.isInstancedMesh&&Se.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Se.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Se.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Se.instancingMorph===!1&&B.morphTexture!==null||Se.envMap!==me||V.fog===!0&&Se.fog!==Z||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ee.numPlanes||Se.numIntersection!==ee.numIntersection)||Se.vertexAlphas!==Ie||Se.vertexTangents!==Pe||Se.morphTargets!==Me||Se.morphNormals!==Ye||Se.morphColors!==Ze||Se.toneMapping!==Et||Se.morphTargetsCount!==$e)&&(Qe=!0):(Qe=!0,Se.__version=V.version);let vn=Se.currentProgram;Qe===!0&&(vn=Ar(V,O,B));let Xi=!1,sn=!1,Hs=!1;const pt=vn.getUniforms(),hn=Se.uniforms;if(ye.useProgram(vn.program)&&(Xi=!0,sn=!0,Hs=!0),V.id!==S&&(S=V.id,sn=!0),Xi||v!==R){ye.buffers.depth.getReversed()?(re.copy(R.projectionMatrix),dp(re),fp(re),pt.setValue(F,"projectionMatrix",re)):pt.setValue(F,"projectionMatrix",R.projectionMatrix),pt.setValue(F,"viewMatrix",R.matrixWorldInverse);const Qt=pt.map.cameraPosition;Qt!==void 0&&Qt.setValue(F,Ke.setFromMatrixPosition(R.matrixWorld)),We.logarithmicDepthBuffer&&pt.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pt.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),v!==R&&(v=R,sn=!0,Hs=!0)}if(B.isSkinnedMesh){pt.setOptional(F,B,"bindMatrix"),pt.setOptional(F,B,"bindMatrixInverse");const qt=B.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),pt.setValue(F,"boneTexture",qt.boneTexture,L))}B.isBatchedMesh&&(pt.setOptional(F,B,"batchingTexture"),pt.setValue(F,"batchingTexture",B._matricesTexture,L),pt.setOptional(F,B,"batchingIdTexture"),pt.setValue(F,"batchingIdTexture",B._indirectTexture,L),pt.setOptional(F,B,"batchingColorTexture"),B._colorsTexture!==null&&pt.setValue(F,"batchingColorTexture",B._colorsTexture,L));const un=G.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Le.update(B,G,vn),(sn||Se.receiveShadow!==B.receiveShadow)&&(Se.receiveShadow=B.receiveShadow,pt.setValue(F,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(hn.envMap.value=me,hn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(hn.envMapIntensity.value=O.environmentIntensity),sn&&(pt.setValue(F,"toneMappingExposure",x.toneMappingExposure),Se.needsLights&&sf(hn,Hs),Z&&V.fog===!0&&oe.refreshFogUniforms(hn,Z),oe.refreshMaterialUniforms(hn,V,W,j,f.state.transmissionRenderTarget[R.id]),Io.upload(F,Hc(Se),hn,L)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Io.upload(F,Hc(Se),hn,L),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pt.setValue(F,"center",B.center),pt.setValue(F,"modelViewMatrix",B.modelViewMatrix),pt.setValue(F,"normalMatrix",B.normalMatrix),pt.setValue(F,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const qt=V.uniformsGroups;for(let Qt=0,ia=qt.length;Qt<ia;Qt++){const wi=qt[Qt];U.update(wi,vn),U.bind(wi,vn)}}return vn}function sf(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function rf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,O,G){const V=xe.get(R);V.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),xe.get(R.texture).__webglTexture=O,xe.get(R.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,O){const G=xe.get(R);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0};const of=F.createFramebuffer();this.setRenderTarget=function(R,O=0,G=0){T=R,E=O,w=G;let V=!0,B=null,Z=!1,se=!1;if(R){const me=xe.get(R);if(me.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(F.FRAMEBUFFER,null),V=!1;else if(me.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(me.__hasExternalTextures)L.rebindTextures(R,xe.get(R.texture).__webglTexture,xe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Me=R.depthTexture;if(me.__boundDepthTexture!==Me){if(Me!==null&&xe.has(Me)&&(R.width!==Me.image.width||R.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const Ie=R.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(se=!0);const Pe=xe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Pe[O])?B=Pe[O][G]:B=Pe[O],Z=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?B=xe.get(R).__webglMultisampledFramebuffer:Array.isArray(Pe)?B=Pe[G]:B=Pe,P.copy(R.viewport),I.copy(R.scissor),D=R.scissorTest}else P.copy(be).multiplyScalar(W).floor(),I.copy(Ae).multiplyScalar(W).floor(),D=ze;if(G!==0&&(B=of),ye.bindFramebuffer(F.FRAMEBUFFER,B)&&V&&ye.drawBuffers(R,B),ye.viewport(P),ye.scissor(I),ye.setScissorTest(D),Z){const me=xe.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,me.__webglTexture,G)}else if(se){const me=xe.get(R.texture),Ie=O;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,me.__webglTexture,G,Ie)}else if(R!==null&&G!==0){const me=xe.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,me.__webglTexture,G)}S=-1},this.readRenderTargetPixels=function(R,O,G,V,B,Z,se){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&se!==void 0&&(ue=ue[se]),ue){ye.bindFramebuffer(F.FRAMEBUFFER,ue);try{const me=R.texture,Ie=me.format,Pe=me.type;if(!We.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!We.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-V&&G>=0&&G<=R.height-B&&F.readPixels(O,G,V,B,Ue.convert(Ie),Ue.convert(Pe),Z)}finally{const me=T!==null?xe.get(T).__webglFramebuffer:null;ye.bindFramebuffer(F.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(R,O,G,V,B,Z,se){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=xe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&se!==void 0&&(ue=ue[se]),ue)if(O>=0&&O<=R.width-V&&G>=0&&G<=R.height-B){ye.bindFramebuffer(F.FRAMEBUFFER,ue);const me=R.texture,Ie=me.format,Pe=me.type;if(!We.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!We.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Me=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Me),F.bufferData(F.PIXEL_PACK_BUFFER,Z.byteLength,F.STREAM_READ),F.readPixels(O,G,V,B,Ue.convert(Ie),Ue.convert(Pe),0);const Ye=T!==null?xe.get(T).__webglFramebuffer:null;ye.bindFramebuffer(F.FRAMEBUFFER,Ye);const Ze=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await up(F,Ze,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Me),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Z),F.deleteBuffer(Me),F.deleteSync(Ze),Z}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,O=null,G=0){const V=Math.pow(2,-G),B=Math.floor(R.image.width*V),Z=Math.floor(R.image.height*V),se=O!==null?O.x:0,ue=O!==null?O.y:0;L.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,se,ue,B,Z),ye.unbindTexture()};const af=F.createFramebuffer(),lf=F.createFramebuffer();this.copyTextureToTexture=function(R,O,G=null,V=null,B=0,Z=null){Z===null&&(B!==0?(Lo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Z=B,B=0):Z=0);let se,ue,me,Ie,Pe,Me,Ye,Ze,Et;const yt=R.isCompressedTexture?R.mipmaps[Z]:R.image;if(G!==null)se=G.max.x-G.min.x,ue=G.max.y-G.min.y,me=G.isBox3?G.max.z-G.min.z:1,Ie=G.min.x,Pe=G.min.y,Me=G.isBox3?G.min.z:0;else{const un=Math.pow(2,-B);se=Math.floor(yt.width*un),ue=Math.floor(yt.height*un),R.isDataArrayTexture?me=yt.depth:R.isData3DTexture?me=Math.floor(yt.depth*un):me=1,Ie=0,Pe=0,Me=0}V!==null?(Ye=V.x,Ze=V.y,Et=V.z):(Ye=0,Ze=0,Et=0);const $e=Ue.convert(O.format),Se=Ue.convert(O.type);let Ft;O.isData3DTexture?(L.setTexture3D(O,0),Ft=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(L.setTexture2DArray(O,0),Ft=F.TEXTURE_2D_ARRAY):(L.setTexture2D(O,0),Ft=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);const Qe=F.getParameter(F.UNPACK_ROW_LENGTH),vn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Xi=F.getParameter(F.UNPACK_SKIP_PIXELS),sn=F.getParameter(F.UNPACK_SKIP_ROWS),Hs=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,yt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,yt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ie),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Me);const pt=R.isDataArrayTexture||R.isData3DTexture,hn=O.isDataArrayTexture||O.isData3DTexture;if(R.isDepthTexture){const un=xe.get(R),qt=xe.get(O),Qt=xe.get(un.__renderTarget),ia=xe.get(qt.__renderTarget);ye.bindFramebuffer(F.READ_FRAMEBUFFER,Qt.__webglFramebuffer),ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,ia.__webglFramebuffer);for(let wi=0;wi<me;wi++)pt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xe.get(R).__webglTexture,B,Me+wi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xe.get(O).__webglTexture,Z,Et+wi)),F.blitFramebuffer(Ie,Pe,se,ue,Ye,Ze,se,ue,F.DEPTH_BUFFER_BIT,F.NEAREST);ye.bindFramebuffer(F.READ_FRAMEBUFFER,null),ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(B!==0||R.isRenderTargetTexture||xe.has(R)){const un=xe.get(R),qt=xe.get(O);ye.bindFramebuffer(F.READ_FRAMEBUFFER,af),ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,lf);for(let Qt=0;Qt<me;Qt++)pt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,un.__webglTexture,B,Me+Qt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,un.__webglTexture,B),hn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qt.__webglTexture,Z,Et+Qt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,qt.__webglTexture,Z),B!==0?F.blitFramebuffer(Ie,Pe,se,ue,Ye,Ze,se,ue,F.COLOR_BUFFER_BIT,F.NEAREST):hn?F.copyTexSubImage3D(Ft,Z,Ye,Ze,Et+Qt,Ie,Pe,se,ue):F.copyTexSubImage2D(Ft,Z,Ye,Ze,Ie,Pe,se,ue);ye.bindFramebuffer(F.READ_FRAMEBUFFER,null),ye.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else hn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Ft,Z,Ye,Ze,Et,se,ue,me,$e,Se,yt.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(Ft,Z,Ye,Ze,Et,se,ue,me,$e,yt.data):F.texSubImage3D(Ft,Z,Ye,Ze,Et,se,ue,me,$e,Se,yt):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Z,Ye,Ze,se,ue,$e,Se,yt.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Z,Ye,Ze,yt.width,yt.height,$e,yt.data):F.texSubImage2D(F.TEXTURE_2D,Z,Ye,Ze,se,ue,$e,Se,yt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Qe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,vn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Xi),F.pixelStorei(F.UNPACK_SKIP_ROWS,sn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Hs),Z===0&&O.generateMipmaps&&F.generateMipmap(Ft),ye.unbindTexture()},this.copyTextureToTexture3D=function(R,O,G=null,V=null,B=0){return Lo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,O,G,V,B)},this.initRenderTarget=function(R){xe.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),ye.unbindTexture()},this.resetState=function(){E=0,w=0,T=null,ye.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}function gs(r){const e=String(r??"");if(!e||/^https?:\/\//i.test(e)||e.startsWith("data:")||e.startsWith("blob:"))return e;const t="/xr-lab-projects/harlem-renaissance/";return`${t.endsWith("/")?t:`${t}/`}${e.replace(/^\/+/,"")}`}const Jl=[{id:"apartment",name:"Harlem Apartment",modelUrl:gs("Models/HarlemApto_Sketchfab_Centered.glb"),hotspotsUrl:gs("content/hotspots-apartment.json"),sketchfab:"https://sketchfab.com/3d-models/harlem-renaissance-apartment-bfc26004964d408fb36c4dc52e8cc199",modelPosition:[0,0,0],modelScale:1.45,modelExtra:{url:gs("Models/HarlemFridge.glb"),nodeNames:["fridge"],place:{feet:[2.971,.06,-3.761],worldRotationsDeg:[{axis:[0,0,1],deg:90},{axis:[1,0,0],deg:90}]}},spawnPosition:[0,0,0],safetyVolume:{padXZ:4,wallHeight:6,wallThickness:.4}},{id:"cotton-club",name:"The Cotton Club",modelUrl:gs("Models/CottonClub_Sketchfab.glb"),hotspotsUrl:gs("content/hotspots-cotton-club.json"),sketchfab:"https://sketchfab.com/3d-models/harlem-renaissance-the-cotton-club-bb855270f2a143d989427737fec14496",stairRamps:[{meshName:"Stairs001",widthScale:1,yBias:.14,footExtend:.18,topExtend:.12,skipSourceCollision:!1,debug:!1}],stageRamps:[{meshName:"Cube001",footExtend:1.25,topInset:.85,widthScale:.92,debug:!1}],spawnPosition:[-9.204,1.86,11.208],spawnYawDeg:-17.6,safetyVolume:{padXZ:10,wallHeight:8,wallThickness:.45}}];function Ms(){const r=new URLSearchParams(window.location.search).get("room");return Jl.find(e=>e.id===r)||Jl[0]}const fn={model:{url:Ms().modelUrl,navmeshUrl:null,navmeshNodeName:"NavMesh",scale:Ms().modelScale??1,position:Ms().modelPosition||[0,0,0],rotation:[0,0,0],centerMode:"floor",enableShadows:!1,forceDoubleSide:!0},player:{eyeHeight:1.9,xrEyeBoost:.3,spawnPosition:[0,0,0],moveSpeed:2.8,sprintMultiplier:1.75,snapTurnDegrees:45,smoothTurnSpeed:0,teleportMaxDistance:12,teleportMaxPitchDeg:60,collisionMode:"auto",colliderRadius:.28,stepHeight:.45,maxWalkSlopeDeg:50,jumpSpeed:7.5,fallGravity:22,flySpeedMultiplier:2.5},lighting:{environment:"None",background:!1,backgroundMode:"color",backgroundColor:"#b4ab97",backgroundBlur:.2,toneMapping:"ACES Filmic",exposure:.82,punctualLights:!0,ambientIntensity:.73,ambientColor:"#ffecd1",directIntensity:.95,directColor:"#ffd4a8",hemiIntensity:.22,sunAzimuth:40,sunElevation:55},debug:{showNavmesh:!1,showOriginAxes:!1,showSpawnMarker:!1,showMeshCollisionDebug:!1,showModelPanel:!1,showLightingPanel:!1,showHotspotTool:!1}};Ms().modelExtra&&(fn.model.modelExtra=Ms().modelExtra);function My(r=document.body){const e=new vy({antialias:!0,alpha:!1,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(window.innerWidth,window.innerHeight),e.outputColorSpace=ht,e.toneMapping=Xo,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=Qu,e.xr.enabled=!0;const t=e.domElement;t.style.position="fixed",t.style.inset="0",t.style.zIndex="0",t.style.touchAction="none",r.appendChild(t);const n=()=>{e.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",n),{renderer:e,dispose(){window.removeEventListener("resize",n),e.dispose(),e.domElement.remove()}}}class Sy extends Oo{constructor(){super();const e=new jt;e.deleteAttribute("uv");const t=new kn({side:kt}),n=new kn,i=new Fd(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new he(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new he(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new he(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new he(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new he(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new he(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new he(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new he(e,as(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new he(e,as(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new he(e,as(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const b=new he(e,as(43));b.position.set(-.462,8.89,14.52),b.scale.set(4.38,5.441,.088),this.add(b);const m=new he(e,as(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new he(e,as(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function as(r){const e=new Be;return e.color.setScalar(r),e}class wy extends xm{constructor(e){super(e),this.type=Zn}parse(e){const o=function(T,S){switch(T){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(S||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(S||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(S||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(S||""))}},u=function(T,S,v){S=S||1024;let I=T.pos,D=-1,N=0,z="",k=String.fromCharCode.apply(null,new Uint16Array(T.subarray(I,I+128)));for(;0>(D=k.indexOf(`
`))&&N<S&&I<T.byteLength;)z+=k,N+=k.length,I+=128,k+=String.fromCharCode.apply(null,new Uint16Array(T.subarray(I,I+128)));return-1<D?(T.pos+=N+D+1,z+k.slice(0,D)):!1},d=function(T){const S=/^#\?(\S+)/,v=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*FORMAT=(\S+)\s*$/,D=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,N={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let z,k;for((T.pos>=T.byteLength||!(z=u(T)))&&o(1,"no header found"),(k=z.match(S))||o(3,"bad initial token"),N.valid|=1,N.programtype=k[1],N.string+=z+`
`;z=u(T),z!==!1;){if(N.string+=z+`
`,z.charAt(0)==="#"){N.comments+=z+`
`;continue}if((k=z.match(v))&&(N.gamma=parseFloat(k[1])),(k=z.match(P))&&(N.exposure=parseFloat(k[1])),(k=z.match(I))&&(N.valid|=2,N.format=k[1]),(k=z.match(D))&&(N.valid|=4,N.height=parseInt(k[1],10),N.width=parseInt(k[2],10)),N.valid&2&&N.valid&4)break}return N.valid&2||o(3,"missing format specifier"),N.valid&4||o(3,"missing image size specifier"),N},p=function(T,S,v){const P=S;if(P<8||P>32767||T[0]!==2||T[1]!==2||T[2]&128)return new Uint8Array(T);P!==(T[2]<<8|T[3])&&o(3,"wrong scanline width");const I=new Uint8Array(4*S*v);I.length||o(4,"unable to allocate buffer space");let D=0,N=0;const z=4*P,k=new Uint8Array(4),j=new Uint8Array(z);let W=v;for(;W>0&&N<T.byteLength;){N+4>T.byteLength&&o(1),k[0]=T[N++],k[1]=T[N++],k[2]=T[N++],k[3]=T[N++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=P)&&o(3,"bad rgbe scanline format");let Q=0,ie;for(;Q<z&&N<T.byteLength;){ie=T[N++];const Ae=ie>128;if(Ae&&(ie-=128),(ie===0||Q+ie>z)&&o(3,"bad scanline data"),Ae){const ze=T[N++];for(let q=0;q<ie;q++)j[Q++]=ze}else j.set(T.subarray(N,N+ie),Q),Q+=ie,N+=ie}const be=P;for(let Ae=0;Ae<be;Ae++){let ze=0;I[D]=j[Ae+ze],ze+=P,I[D+1]=j[Ae+ze],ze+=P,I[D+2]=j[Ae+ze],ze+=P,I[D+3]=j[Ae+ze],D+=4}W--}return I},g=function(T,S,v,P){const I=T[S+3],D=Math.pow(2,I-128)/255;v[P+0]=T[S+0]*D,v[P+1]=T[S+1]*D,v[P+2]=T[S+2]*D,v[P+3]=1},b=function(T,S,v,P){const I=T[S+3],D=Math.pow(2,I-128)/255;v[P+0]=Fr.toHalfFloat(Math.min(T[S+0]*D,65504)),v[P+1]=Fr.toHalfFloat(Math.min(T[S+1]*D,65504)),v[P+2]=Fr.toHalfFloat(Math.min(T[S+2]*D,65504)),v[P+3]=Fr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const f=d(m),_=f.width,y=f.height,x=p(m.subarray(m.pos),_,y);let M,E,w;switch(this.type){case Wt:w=x.length/4;const T=new Float32Array(w*4);for(let v=0;v<w;v++)g(x,v*4,T,v*4);M=T,E=Wt;break;case Zn:w=x.length/4;const S=new Uint16Array(w*4);for(let v=0;v<w;v++)b(x,v*4,S,v*4);M=S,E=Zn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:_,height:y,data:M,header:f.string,gamma:f.gamma,exposure:f.exposure,type:E}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){switch(o.type){case Wt:case Zn:o.colorSpace=Ot,o.minFilter=Dt,o.magFilter=Dt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,s,n,i)}}const Gd={None:null,"Room (procedural)":"room","Studio soft":"studio","Neutral warehouse":"warehouse","Royal Esplanade":"https://threejs.org/examples/textures/equirectangular/royal_esplanade_1k.hdr","Venice Sunset":"https://threejs.org/examples/textures/equirectangular/venice_sunset_1k.hdr","Pedestrian Overpass":"https://threejs.org/examples/textures/equirectangular/pedestrian_overpass_1k.hdr",Quarry:"https://threejs.org/examples/textures/equirectangular/quarry_01_1k.hdr"},Vd={None:ei,Linear:td,Reinhard:nd,Cineon:id,"ACES Filmic":Xo,AgX:sd,Neutral:rd};class Ey{constructor(e,t,n={}){this.scene=e,this.renderer=t,this.defaults={environment:"None",background:!1,backgroundBlur:.2,backgroundColor:"#b4ab97",backgroundMode:"color",toneMapping:"ACES Filmic",exposure:.82,punctualLights:!0,ambientIntensity:.38,ambientColor:"#c4a882",directIntensity:.95,directColor:"#ffd4a8",hemiIntensity:.22,sunAzimuth:40,sunElevation:55,...n},delete this.defaults.fogEnabled,delete this.defaults.fogColor,delete this.defaults.fogNear,delete this.defaults.fogFar,this.state={...this.defaults},this.pmrem=new $l(t),this.pmrem.compileEquirectangularShader(),this._envTexture=null,this._bgTexture=null,this._loadingEnv=null,this.scene.background=new we(11840407),this.ambient=new Na(this.state.ambientColor,this.state.ambientIntensity),e.add(this.ambient),this.hemi=new vm(14544639,3359829,this.state.hemiIntensity),e.add(this.hemi),this.sun=new Ud(this.state.directColor,this.state.directIntensity),this.sun.position.set(6,14,4),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.camera.near=.5,this.sun.shadow.camera.far=80,this.sun.shadow.camera.left=-30,this.sun.shadow.camera.right=30,this.sun.shadow.camera.top=30,this.sun.shadow.camera.bottom=-30,this.sun.shadow.bias=-2e-4,e.add(this.sun),e.add(this.sun.target),this.rgbeLoader=new wy,this.scene.fog=null,this.applySunDirection(this.state.sunAzimuth,this.state.sunElevation),this.applyAll()}get guiState(){return this.state}getSnapshot(){const e=this.state;return{environment:e.environment,background:!!e.background,backgroundMode:e.backgroundMode,backgroundColor:e.backgroundColor,backgroundBlur:Number(e.backgroundBlur),toneMapping:e.toneMapping,exposure:Number(e.exposure),punctualLights:!!e.punctualLights,ambientIntensity:Number(e.ambientIntensity),ambientColor:e.ambientColor,directIntensity:Number(e.directIntensity),directColor:e.directColor,hemiIntensity:Number(e.hemiIntensity),sunAzimuth:Number(e.sunAzimuth??40),sunElevation:Number(e.sunElevation??55)}}formatConfigSnippet(){const e=this.getSnapshot();return`  lighting: {
${Object.entries(e).map(([n,i])=>{const s=typeof i=="string"?`'${i}'`:i;return`    ${n}: ${s},`}).join(`
`)}
  },`}resetToDefaults(){Object.assign(this.state,this.defaults),this.applySunDirection(this.state.sunAzimuth??40,this.state.sunElevation??55),this.applyAll()}applyLightingObject(e,{bakeAsDefaults:t=!0}={}){!e||typeof e!="object"||(t&&Object.assign(this.defaults,e),Object.assign(this.state,e),this.applySunDirection(this.state.sunAzimuth??40,this.state.sunElevation??55),this.applyAll())}applyAll(){this.scene.fog=null,this.applyToneMapping(),this.applyPunctualLights(),this.applyAmbient(),this.applyDirect(),this.applyEnvironment(this.state.environment).then(()=>this.applyBackground())}applySunDirection(e,t){const n=(e??40)*Math.PI/180,i=(t??55)*Math.PI/180,s=20;this.sun.position.set(s*Math.cos(i)*Math.sin(n),s*Math.sin(i),s*Math.cos(i)*Math.cos(n)),this.sun.target.position.set(0,0,0),this.sun.target.updateMatrixWorld(),this.state.sunAzimuth=e??40,this.state.sunElevation=t??55}applyToneMapping(){const e=Vd[this.state.toneMapping]??Xo;this.renderer.toneMapping=e,this.renderer.toneMappingExposure=this.state.exposure}applyPunctualLights(){const e=!!this.state.punctualLights;this.sun.visible=e,this.hemi.visible=e}applyAmbient(){this.ambient.intensity=this.state.ambientIntensity,this.ambient.color.set(this.state.ambientColor),this.hemi.intensity=this.state.hemiIntensity*(this.state.punctualLights?1:0)}applyDirect(){this.sun.intensity=this.state.directIntensity,this.sun.color.set(this.state.directColor)}async applyEnvironment(e){this.state.environment=e;const t=Symbol("env");this._loadingEnv=t;const n=Gd[e];try{let i=null;if(n===null||e==="None"?i=null:n==="room"?i=this._makeRoomEnv():n==="studio"?i=this._makeStudioEnv():n==="warehouse"?i=this._makeWarehouseEnv():typeof n=="string"&&n.startsWith("http")&&(i=await this._loadHDR(n)),this._loadingEnv!==t)return;if(this._disposeEnvTextures(),!i){this.scene.environment=null,this._envTexture=null,this.applyBackground();return}this._envTexture=i,this.scene.environment=i,this.applyBackground()}catch(i){console.warn("[Environment] Failed to load env",e,i),this._loadingEnv===t&&e!=="Room (procedural)"&&await this.applyEnvironment("Room (procedural)")}}applyBackground(){const e=new we(this.state.backgroundColor);this.state.backgroundMode==="environment"&&this.state.background&&this.scene.environment?(this.scene.background=this.scene.environment,"backgroundBlurriness"in this.scene&&(this.scene.backgroundBlurriness=this.state.backgroundBlur),"backgroundIntensity"in this.scene&&(this.scene.backgroundIntensity=1)):(this.scene.background=e,"backgroundBlurriness"in this.scene&&(this.scene.backgroundBlurriness=0))}setBackgroundVisible(e){this.state.background=e,this.applyBackground()}setBackgroundColor(e){this.state.backgroundColor=e,this.applyBackground()}setBackgroundMode(e){this.state.backgroundMode=e==="color"?"color":"environment",this.applyBackground()}setBackgroundBlur(e){this.state.backgroundBlur=e,"backgroundBlurriness"in this.scene&&this.state.backgroundMode==="environment"&&this.state.background&&this.scene.environment&&(this.scene.backgroundBlurriness=e)}aimSunAt(e=new A(0,0,0)){this.sun.target.position.copy(e),this.sun.target.updateMatrixWorld()}addOriginAxes(e=1.5){const t=new Om(e);return t.name="OriginAxes",this.scene.add(t),t}dispose(){this._disposeEnvTextures(),this.pmrem.dispose()}_makeRoomEnv(){const e=new Sy,t=this.pmrem.fromScene(e,.04).texture;return e.traverse(n=>{var i,s;n.geometry&&((s=(i=n.geometry).dispose)==null||s.call(i)),n.material&&(Array.isArray(n.material)?n.material:[n.material]).forEach(a=>{var l;return(l=a.dispose)==null?void 0:l.call(a)})}),t}_makeStudioEnv(){const e=new Oo;e.add(new Na(16777215,.4));const t=new he(new ln(.6,16,16),new Be({color:16777215}));t.position.set(3,4,2),e.add(t);const n=new he(new ln(.9,16,16),new Be({color:8956671}));n.position.set(-4,2,-1),e.add(n);const i=new he(new Vt(20,20),new Be({color:2236968}));i.rotation.x=-Math.PI/2,i.position.y=-1,e.add(i);const s=this.pmrem.fromScene(e,.04).texture;return e.traverse(o=>{var a,l,c,h;o.geometry&&((l=(a=o.geometry).dispose)==null||l.call(a)),o.material&&((h=(c=o.material).dispose)==null||h.call(c))}),s}_makeWarehouseEnv(){const e=new Oo;e.background=new we(5592405),e.add(new Na(16777215,.55));const t=new he(new jt(12,8,12),new kn({color:8947848,side:kt,roughness:.9,metalness:.05}));e.add(t);const n=new he(new Vt(4,1),new Be({color:16777198}));n.position.set(0,3.5,0),n.rotation.x=Math.PI/2,e.add(n);const i=this.pmrem.fromScene(e,.04).texture;return e.traverse(s=>{var o,a,l,c;s.geometry&&((a=(o=s.geometry).dispose)==null||a.call(o)),s.material&&((c=(l=s.material).dispose)==null||c.call(l))}),i}_loadHDR(e){return new Promise((t,n)=>{this.rgbeLoader.load(e,i=>{const s=this.pmrem.fromEquirectangular(i).texture;i.dispose(),t(s)},void 0,n)})}_disposeEnvTextures(){var e,t;this._envTexture&&((t=(e=this._envTexture).dispose)==null||t.call(e),this._envTexture=null)}}function Ay(r,e="floor"){r.updateWorldMatrix(!0,!0);const t=new Ce().setFromObject(r);if(t.isEmpty())return console.warn("[floorCenter] empty bounds — skip centering"),t;const n=new A;return t.getCenter(n),e==="bounds"?r.position.sub(n):(r.position.x-=n.x,r.position.z-=n.z,r.position.y-=t.min.y),r.updateWorldMatrix(!0,!0),new Ce().setFromObject(r)}function Ty({size:r=12,wallHeight:e=3,wallThickness:t=.15}={}){const n=new gt;n.name="PlaceholderRoom";const i=r/2,s=new kn({color:7043727,roughness:.9,metalness:.05}),o=new kn({color:12963288,roughness:.85,metalness:.02}),a=new kn({color:4033533,roughness:.5,metalness:.1}),l=new he(new jt(r,.1,r),s);l.position.y=.05,l.receiveShadow=!0,l.castShadow=!1,n.add(l);const c=new he(new jt(.6,.02,.6),a);c.position.y=.11,n.add(c);const h=(m,f,_)=>new jt(m,f,_),u=[{pos:[0,e/2,-i],geo:h(r,e,t)},{pos:[0,e/2,i],geo:h(r,e,t)},{pos:[-i,e/2,0],geo:h(t,e,r)},{pos:[i,e/2,0],geo:h(t,e,r)}];for(const m of u){const f=new he(m.geo,o);f.position.set(...m.pos),f.castShadow=!0,f.receiveShadow=!0,n.add(f)}const d=new $o(.25,.25,e,16);for(const[m,f]of[[-3,-3],[3,3],[-3,3]]){const _=new he(d,o);_.position.set(m,e/2,f),_.castShadow=!0,_.receiveShadow=!0,n.add(_)}const p=r-t*2-.1,g=new Vt(p,p,8,8);g.rotateX(-Math.PI/2);const b=new he(g,new Be({color:65416,wireframe:!0,transparent:!0,opacity:.35,side:ut,depthWrite:!1}));return b.name="NavMesh",b.position.y=.12,b.visible=!1,{visual:n,navmeshMesh:b}}function hu(r,e){if(e===kf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Wl||e===_d){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Wl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Wd extends Mi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Iy(t)}),this.register(function(t){return new Dy(t)}),this.register(function(t){return new Gy(t)}),this.register(function(t){return new Vy(t)}),this.register(function(t){return new Wy(t)}),this.register(function(t){return new Fy(t)}),this.register(function(t){return new Uy(t)}),this.register(function(t){return new ky(t)}),this.register(function(t){return new Oy(t)}),this.register(function(t){return new Ly(t)}),this.register(function(t){return new By(t)}),this.register(function(t){return new Ny(t)}),this.register(function(t){return new Hy(t)}),this.register(function(t){return new zy(t)}),this.register(function(t){return new Ry(t)}),this.register(function(t){return new Xy(t)}),this.register(function(t){return new jy(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ur.extractUrlBase(e);o=ur.resolveURL(c,this.path)}else o=ur.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new vr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Xd){try{o[He.KHR_BINARY_GLTF]=new qy(e)}catch(u){i&&i(u);return}s=JSON.parse(o[He.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new ov(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case He.KHR_MATERIALS_UNLIT:o[u]=new Py;break;case He.KHR_DRACO_MESH_COMPRESSION:o[u]=new Yy(s,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:o[u]=new $y;break;case He.KHR_MESH_QUANTIZATION:o[u]=new Ky;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Cy(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ry{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new we(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ot);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ud(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Fd(h),c.distance=u;break;case"spot":c=new Sm(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Kn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Py{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return Be}extendParams(e,t,n){const i=[];e.color=new we(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ot),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,ht))}return Promise.all(i)}}class Ly{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Iy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(a,a)}return Promise.all(s)}}class Dy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Ny{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Fy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ot)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ht)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Uy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class ky{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(a[0],a[1],a[2],Ot),Promise.all(s)}}class Oy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class By{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(a[0],a[1],a[2],Ot),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ht)),Promise.all(s)}}class zy{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Hy{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Gy{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Vy{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Wy{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Xy{constructor(e){this.name=He.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}class jy{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==pn.TRIANGLES&&c.mode!==pn.TRIANGLE_STRIP&&c.mode!==pn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(const g of u){const b=new ve,m=new A,f=new Bn,_=new A(1,1,1),y=new jp(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,x),l.SCALE&&_.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,b.compose(m,f,_));for(const x in l)if(x==="_COLOR_0"){const M=l[x];y.instanceColor=new jl(M.array,M.itemSize,M.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);st.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Xd="glTF",Js=12,uu={JSON:1313821514,BIN:5130562};class qy{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Js),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Xd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Js,s=new DataView(e,Js);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===uu.JSON){const c=new Uint8Array(e,Js+o,a);this.content=n.decode(c)}else if(l===uu.BIN){const c=Js+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Yy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Zl[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Zl[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],p=Ss[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(const g in p.attributes){const b=p.attributes[g],m=l[g];m!==void 0&&(b.normalized=m)}u(p)},a,c,Ot,d)})})}}class $y{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Ky{constructor(){this.name=He.KHR_MESH_QUANTIZATION}}class jd extends Sr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,g=e*c,b=g-c,m=-2*p+3*d,f=p-d,_=1-m,y=f-d+u;for(let x=0;x!==a;x++){const M=o[b+x+a],E=o[b+x+l]*h,w=o[g+x+a],T=o[g+x]*h;s[x]=_*M+y*E+m*w+f*T}return s}}const Jy=new Bn;class Zy extends jd{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Jy.fromArray(s).normalize().toArray(s),s}}const pn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ss={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},du={9728:Jt,9729:Dt,9984:ad,9985:Eo,9986:or,9987:Fn},fu={33071:Nn,33648:Fo,10497:Ts},Ha={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Qy={CUBICSPLINE:void 0,LINEAR:xr,STEP:br},Ga={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ev(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new kn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xn})),r.DefaultMaterial}function Di(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Kn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function tv(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function nv(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iv(r){let e;const t=r.extensions&&r.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Va(t.attributes):e=r.indices+":"+Va(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Va(r.targets[n]);return e}function Va(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ql(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function sv(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const rv=new ve;class ov{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Cy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new ym(this.options.manager):this.textureLoader=new Am(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new vr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Di(s,a,i),Kn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(ur.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ha[i.type],a=Ss[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new dt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Ha[i.type],c=Ss[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let b,m;if(p&&p!==u){const f=Math.floor(d/p),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let y=t.cache.get(_);y||(b=new c(a,f*p,i.count*p/h),y=new Hp(b,p/h),t.cache.add(_,y)),m=new Sc(y,l,d%p/h,g)}else a===null?b=new c(i.count*l):b=new c(a,d,i.count*l),m=new dt(b,l,g);if(i.sparse!==void 0){const f=Ha.SCALAR,_=Ss[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,M=new _(o[1],y,i.sparse.count*f),E=new c(o[2],x,i.sparse.count*l);a!==null&&(m=new dt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,T=M.length;w<T;w++){const S=M[w];if(m.setX(S,E[w*l]),l>=2&&m.setY(S,E[w*l+1]),l>=3&&m.setZ(S,E[w*l+2]),l>=4&&m.setW(S,E[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=du[d.magFilter]||Dt,h.minFilter=du[d.minFilter]||Fn,h.wrapS=fu[d.wrapS]||Ts,h.wrapT=fu[d.wrapT]||Ts,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Jt&&h.minFilter!==Dt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){const m=new Ct(b);m.needsUpdate=!0,d(m)}),t.load(ur.resolveURL(u,s.path),g,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Kn(u,o),u.userData.mimeType=o.mimeType||sv(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[He.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Pd,Un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new vi,Un.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return kn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[He.KHR_MATERIALS_UNLIT]){const u=i[He.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new we(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Ot),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,ht)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=ut);const h=s.alphaMode||Ga.OPAQUE;if(h===Ga.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ga.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Be&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new De(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&o!==Be&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Be){const u=s.emissiveFactor;a.emissive=new we().setRGB(u[0],u[1],u[2],Ot)}return s.emissiveTexture!==void 0&&o!==Be&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,ht)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),Kn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Di(i,u,s),u})}createUniqueName(e){const t=nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return pu(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=iv(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[He.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=pu(new rt,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?ev(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const b=h[p],m=o[p];let f;const _=c[p];if(m.mode===pn.TRIANGLES||m.mode===pn.TRIANGLE_STRIP||m.mode===pn.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new Vp(b,_):new he(b,_),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===pn.TRIANGLE_STRIP?f.geometry=hu(f.geometry,_d):m.mode===pn.TRIANGLE_FAN&&(f.geometry=hu(f.geometry,Wl));else if(m.mode===pn.LINES)f=new Rd(b,_);else if(m.mode===pn.LINE_STRIP)f=new Wi(b,_);else if(m.mode===pn.LINE_LOOP)f=new nm(b,_);else if(m.mode===pn.POINTS)f=new im(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&nv(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),Kn(f,s),m.extensions&&Di(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&Di(i,u[0],s),u[0];const d=new gt;s.extensions&&Di(i,d,s),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kt(Mt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Tc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Kn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new ve;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new wc(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],g=i.samplers[p.sampler],b=p.target,m=b.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,_=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",_)),c.push(g),h.push(b))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],b=u[3],m=u[4],f=[];for(let _=0,y=d.length;_<y;_++){const x=d[_],M=p[_],E=g[_],w=b[_],T=m[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=n._createAnimationTracks(x,M,E,w,T);if(S)for(let v=0;v<S.length;v++)f.push(S[v])}return new dm(s,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,rv)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new Cd:c.length>1?h=new gt:c.length===1?h=c[0]:h=new st,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),Kn(h,s),s.extensions&&Di(n,h,s),s.matrix!==void 0){const u=new ve;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new gt;n.name&&(s.name=i.createUniqueName(n.name)),Kn(s,n),n.extensions&&Di(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof Un||d instanceof Ct)&&u.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];ui[s.path]===ui.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ui[s.path]){case ui.weights:c=Ps;break;case ui.rotation:c=Ls;break;case ui.translation:case ui.scale:c=Is;break;default:switch(n.itemSize){case 1:c=Ps;break;case 2:case 3:default:c=Is;break}break}const h=i.interpolation!==void 0?Qy[i.interpolation]:xr,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+ui[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ql(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ls?Zy:jd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function av(r,e,t){const n=e.attributes,i=new Ce;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new A(l[0],l[1],l[2]),new A(c[0],c[1],c[2])),a.normalized){const h=Ql(Ss[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new A,l=new A;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const b=Ql(Ss[d.componentType]);l.multiplyScalar(b)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Xt;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function pu(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Zl[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Ge.workingColorSpace!==Ot&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ge.workingColorSpace}" not supported.`),Kn(r,e),av(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?tv(r,e.targets,t):r})}const Wa=new WeakMap;class lv extends Mi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new vr(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,ht,n).catch(n)}decodeDracoFile(e,t,n,i,s=Ot,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Wa.has(e)){const l=Wa.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Wa.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new rt;e.index&&t.setIndex(new dt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,l=new dt(o,a);s==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==ht)return;const n=new we;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),Ge.toWorkingColorSpace(n,ht),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new vr(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=cv.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function cv(){let r,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(h){r.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(r)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const p=t(u,d,new Int8Array(l),c),g=p.attributes.map(b=>b.array.buffer);p.index&&g.push(p.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:p},g)}catch(p){console.error(p),self.postMessage({type:"error",id:a.id,error:p.message})}finally{u.destroy(d)}});break}};function t(o,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,p;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,p=a.DecodeArrayToMesh(l,l.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,p=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const b={index:null,attributes:[]};for(const m in h){const f=self[u[m]];let _,y;if(c.useUniqueIDs)y=h[m],_=a.GetAttributeByUniqueId(d,y);else{if(y=a.GetAttributeId(d,o[h[m]]),y===-1)continue;_=a.GetAttribute(d,y)}const x=i(o,a,d,m,f,_);m==="color"&&(x.vertexColorSpace=c.vertexColorSpace),b.attributes.push(x)}return g===o.TRIANGULAR_MESH&&(b.index=n(o,a,d)),o.destroy(d),b}function n(o,a,l){const h=l.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const p=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:p,itemSize:1}}function i(o,a,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,b=g*h.BYTES_PER_ELEMENT,m=s(o,h),f=o._malloc(b);a.GetAttributeDataArrayForAllPoints(l,u,m,b,f);const _=new h(o.HEAPF32.buffer,f,g).slice();return o._free(f),{name:c,array:_,itemSize:d}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var hv=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:r,s,o=WebAssembly.instantiate(a(i),{}).then(function(f){s=f.instance,s.exports.__wasm_call_ctors()});function a(f){for(var _=new Uint8Array(f.length),y=0;y<f.length;++y){var x=f.charCodeAt(y);_[y]=x>96?x-97:x>64?x-39:x+4}for(var M=0,y=0;y<f.length;++y)_[M++]=_[y]<60?n[_[y]]:(_[y]-60)*64+_[++y];return _.buffer.slice(0,M)}function l(f,_,y,x,M,E){var w=s.exports.sbrk,T=y+3&-4,S=w(T*x),v=w(M.length),P=new Uint8Array(s.exports.memory.buffer);P.set(M,v);var I=f(S,y,x,v,M.length);if(I==0&&E&&E(S,T,x),_.set(P.subarray(S,S+y*x)),w(S-w(0)),I!=0)throw new Error("Malformed buffer data: "+I)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function p(f){var _={object:new Worker(f),pending:0,requests:{}};return _.object.onmessage=function(y){var x=y.data;_.pending-=x.count,_.requests[x.id][x.action](x.value),delete _.requests[x.id]},_}function g(f){for(var _="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+l.toString()+m.toString(),y=new Blob([_],{type:"text/javascript"}),x=URL.createObjectURL(y),M=0;M<f;++M)u[M]=p(x);URL.revokeObjectURL(x)}function b(f,_,y,x,M){for(var E=u[0],w=1;w<u.length;++w)u[w].pending<E.pending&&(E=u[w]);return new Promise(function(T,S){var v=new Uint8Array(y),P=d++;E.pending+=f,E.requests[P]={resolve:T,reject:S},E.object.postMessage({id:P,count:f,size:_,source:v,mode:x,filter:M},[v.buffer])})}function m(f){o.then(function(){var _=f.data;try{var y=new Uint8Array(_.count*_.size);l(s.exports[_.mode],y,_.count,_.size,_.source,s.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:y},[y.buffer])}catch(x){self.postMessage({id:_.id,count:_.count,action:"reject",value:x})}})}return{ready:o,supported:!0,useWorkers:function(f){g(f)},decodeVertexBuffer:function(f,_,y,x,M){l(s.exports.meshopt_decodeVertexBuffer,f,_,y,x,s.exports[c[M]])},decodeIndexBuffer:function(f,_,y,x){l(s.exports.meshopt_decodeIndexBuffer,f,_,y,x)},decodeIndexSequence:function(f,_,y,x){l(s.exports.meshopt_decodeIndexSequence,f,_,y,x)},decodeGltfBuffer:function(f,_,y,x,M,E){l(s.exports[h[M]],f,_,y,x,s.exports[c[E]])},decodeGltfBufferAsync:function(f,_,y,x,M){return u.length>0?b(f,_,y,h[x],c[M]):o.then(function(){var E=new Uint8Array(f*_);return l(s.exports[h[x]],E,f,_,y,s.exports[c[M]]),E})}}})();let ls=null;function uv(){const r=new Wd;return ls||(ls=new lv,ls.setDecoderPath("/draco/gltf/"),ls.setDecoderConfig({type:"wasm"}),ls.preload()),r.setDRACOLoader(ls),r.setMeshoptDecoder(hv),r}class dv{constructor(e,t={}){this.config=e,this.onProgress=t.onProgress||null,this.loader=uv(),this.contentRoot=new gt,this.contentRoot.name="ContentRoot",this.centerGroup=new gt,this.centerGroup.name="CenterGroup",this.contentRoot.add(this.centerGroup),this.visual=null,this.navmeshMesh=null,this.bounds=null,this.usedPlaceholder=!1,this.navmeshSource="none"}async load(){var i,s,o;const{url:e,navmeshUrl:t,navmeshNodeName:n}=this.config;if(!e)return this._loadPlaceholder("No model.url in config — using placeholder room.");try{const a=await this._loadGltf(e);this.visual=a.scene,this.visual.name=this.visual.name||"RoomModel";const l=!!this.config.enableShadows,c=this.config.forceDoubleSide!==!1;if(this.visual.traverse(h=>{if(h.isMesh&&(h.castShadow=l,h.receiveShadow=l,h.material)){const u=Array.isArray(h.material)?h.material:[h.material];for(const d of u)d&&(d.map&&(d.map.colorSpace=ht),c&&(d.side=ut,d.needsUpdate=!0))}}),this.centerGroup.add(this.visual),t){const u=(await this._loadGltf(t)).scene;u.name="NavMeshFile",this.centerGroup.add(u),this.navmeshMesh=this._findNavmeshMesh(u,n)||this._firstMesh(u),this.navmeshMesh&&(this.navmeshSource="authored")}else this.navmeshMesh=this._findNavmeshMesh(this.visual,n),this.navmeshMesh&&(this.navmeshSource="authored");if(this.navmeshMesh||(console.warn(`[ContentLoader] No authored navmesh (node "${n}" / navmeshUrl). Using mesh BVH collision for walk/walls; fallback plane kept for optional pathfinding debug.`),this.navmeshMesh=this._createBoundsFloorNavmesh(),this.centerGroup.add(this.navmeshMesh),this.navmeshSource="fallback"),this._prepareNavmeshMesh(),this._applyCenteringAndTransform(),(i=this.config.modelExtra)!=null&&i.url&&((o=(s=this.config.modelExtra)==null?void 0:s.nodeNames)!=null&&o.length))try{await this._mergeExtraNodes(this.config.modelExtra),this.visual.updateWorldMatrix(!0,!0),this.bounds=new Ce().setFromObject(this.contentRoot)}catch(h){console.warn("[ContentLoader] modelExtra merge failed",h)}return this._result()}catch(a){return console.error("[ContentLoader] Failed to load model:",a),this._clearCenter(),this.visual=null,this.navmeshMesh=null,this._loadPlaceholder(`Failed to load ${e} — using placeholder room. (${(a==null?void 0:a.message)||a})`)}}applyTransformFromConfig(){this._applyCenteringAndTransform()}_loadGltf(e){return new Promise((t,n)=>{this.loader.load(e,i=>t(i),i=>{if(!this.onProgress)return;const s=i.total||0,o=i.loaded||0,a=s>0?o/s:0;this.onProgress({loaded:o,total:s,ratio:a})},i=>n(i))})}_loadPlaceholder(e){console.info(`[ContentLoader] ${e}`),this.usedPlaceholder=!0,this._clearCenter();const{visual:t,navmeshMesh:n}=Ty();return this.visual=t,this.navmeshMesh=n,this.navmeshSource="authored",this.centerGroup.add(t),this.centerGroup.add(n),this._prepareNavmeshMesh(),this._applyCenteringAndTransform(),this._result()}async _mergeExtraNodes(e){const{url:t,nodeNames:n,alignNodeName:i="sink"}=e,o=(await this._loadGltf(t)).scene;o.updateWorldMatrix(!0,!0),this.visual.updateWorldMatrix(!0,!0);const a=(_,y)=>{const x=String(y).toLowerCase();let M=null;return _.traverse(E=>{M||E.name&&E.name.toLowerCase()===x&&(M=E)}),M},l=(_,y)=>{for(const x of y){if(!x)continue;const M=a(_,x);if(M)return{node:M,name:x}}return null},c=(_,y)=>{_.updateWorldMatrix(!0,!0);const x=new Ce().setFromObject(_);if(x.isEmpty())return;const M=x.getCenter(new A),E=_.parent,w=M.clone(),T=y.clone();E.worldToLocal(w),E.worldToLocal(T),_.position.add(T.sub(w))},h=_=>{const y=!!this.config.enableShadows;_.traverse(x=>{if(!x.isMesh||!x.material)return;x.castShadow=y,x.receiveShadow=y;const E=(Array.isArray(x.material)?x.material:[x.material]).map(w=>{if(!w)return w;const T=w.clone();return T.map&&(T.map.colorSpace=ht),T.transparent=!1,T.opacity=1,T.depthWrite=!0,T.alphaTest=0,T.side=xn,T.needsUpdate=!0,T});x.material=E.length===1?E[0]:E})},u=_=>{_.updateWorldMatrix(!0,!0);const x=new Ce().setFromObject(_).getSize(new A);if(!(x.x>2.5||x.y>3||x.z>2.5))return _;let E=null,w=0;return _.traverse(T=>{if(!T.isMesh)return;const S=new Ce().setFromObject(T);if(S.isEmpty())return;const v=S.getSize(new A);if(v.x<.35||v.y<.8||v.z<.35||v.x>2.5||v.y>2.8||v.z>2.5)return;const P=v.x*v.y*v.z;P>w&&(w=P,E=T)}),E?(console.info("[ContentLoader] fridge source was oversized group; using mesh child",E.name,x.toArray().map(T=>Number(T.toFixed(3)))),E):_},d=[i,"sink","Sink","kitchen","Kitchen","Fridge_Spot"].filter(Boolean),p=l(this.visual,d),g=l(o,d),b=(p==null?void 0:p.node)||null,m=(g==null?void 0:g.node)||null;b?p.name!==i&&console.info("[ContentLoader] align fallback in main:",p.name,"(wanted",i+")"):console.warn("[ContentLoader] main align missing; tried",d.join(", "));const f=new Ce().setFromObject(this.visual);for(const _ of n){const y=a(o,_);if(!y){console.warn("[ContentLoader] modelExtra node not found:",_);continue}const x=String(_).toLowerCase()==="fridge"?u(y):y,M=x.clone(!0);M.name=y.name||_,h(M),M.position.set(0,0,0),M.rotation.set(0,0,0),M.scale.copy(y.scale),M.visible=!0,M.traverse(S=>{S.visible=!0}),this.visual.add(M),M.updateWorldMatrix(!0,!0);let E=new Ce().setFromObject(M),w=E.getSize(new A);if(String(_).toLowerCase()==="fridge"){if(w.x>8||w.y>8||w.z>8){console.warn("[ContentLoader] fridge clone still room-sized, skipping",w.toArray()),M.removeFromParent();continue}const S=e.place;if(S!=null&&S.feet){M.rotation.set(0,0,0);const P=S.worldRotationsDeg;if(Array.isArray(P)&&P.length){const k=new A,j=new Bn;for(const W of P){const Q=W.axis||[0,1,0];k.set(Q[0],Q[1],Q[2]).normalize(),j.setFromAxisAngle(k,Mt.degToRad(W.deg||0)),M.quaternion.premultiply(j)}}else{const[k,j,W]=S.rotationDeg||[0,0,0];k&&M.rotateX(Mt.degToRad(k)),j&&M.rotateY(Mt.degToRad(j)),W&&M.rotateZ(Mt.degToRad(W))}M.updateWorldMatrix(!0,!0),E=new Ce().setFromObject(M),w=E.getSize(new A);const[I,D,N]=S.feet,z=new A(I,D+w.y*.5,N);c(M,z),M.updateWorldMatrix(!0,!0),E=new Ce().setFromObject(M),w=E.getSize(new A),console.info("[ContentLoader] fridge placed at kitchen feet",S.feet,"rotDeg",S.rotationDeg,"size",w.toArray().map(k=>Number(k.toFixed(3))));continue}let v;if(b){const P=new Ce().setFromObject(b),I=P.getCenter(new A),D=P.getSize(new A);v=new A(I.x-(D.x*.5+w.x*.5+.08),P.min.y+w.y*.5,I.z)}else if(f.isEmpty()){console.info("[ContentLoader] merged",_,"(unplaced)");continue}else{const P=f.getCenter(new A),I=f.getSize(new A);v=new A(f.min.x+I.x*.22,f.min.y+w.y*.5,P.z-I.z*.18),console.warn("[ContentLoader] fridge placed via content-bounds kitchen offset (no align)",v.toArray().map(D=>Number(D.toFixed(3))))}c(M,v)}else if(b&&m){const S=new Ce().setFromObject(m).getCenter(new A),P=new Ce().setFromObject(y).getCenter(new A).clone().sub(S),D=new Ce().setFromObject(b).getCenter(new A).clone().add(P);c(M,D)}else console.info("[ContentLoader] merged",_,"(unplaced)");M.visible=!0,M.traverse(S=>{S.visible=!0}),M.updateWorldMatrix(!0,!0),E=new Ce().setFromObject(M),w=E.getSize(new A);const T=E.getCenter(new A);console.info("[ContentLoader] merged extra node",_,"worldCenter",T.toArray().map(S=>Number(S.toFixed(3))),"size",w.toArray().map(S=>Number(S.toFixed(3))))}}_clearCenter(){for(;this.centerGroup.children.length;)this.centerGroup.remove(this.centerGroup.children[0])}_applyCenteringAndTransform(){const{scale:e,position:t,rotation:n,centerMode:i}=this.config;this.centerGroup.position.set(0,0,0),this.centerGroup.rotation.set(0,0,0),this.centerGroup.scale.set(1,1,1),this.contentRoot.position.set(0,0,0),this.contentRoot.rotation.set(0,0,0),this.contentRoot.scale.set(1,1,1),Ay(this.centerGroup,i||"floor");const[s,o,a]=t||[0,0,0],[l,c,h]=n||[0,0,0];this.contentRoot.scale.setScalar(e??1),this.contentRoot.rotation.set(Mt.degToRad(l),Mt.degToRad(c),Mt.degToRad(h)),this.contentRoot.position.set(s,o,a),this.contentRoot.updateWorldMatrix(!0,!0),this.bounds=new Ce().setFromObject(this.contentRoot)}_prepareNavmeshMesh(){this.navmeshMesh&&(this.navmeshMesh.visible=!1,this.navmeshMesh.traverse(e=>{e.isMesh&&(e.visible=!1,e.castShadow=!1,e.receiveShadow=!1)}))}_findNavmeshMesh(e,t){if(!e||!t)return null;const n=String(t).toLowerCase();let i=null;return e.traverse(s=>{i||s.isMesh&&s.name&&s.name.toLowerCase()===n&&(i=s)}),i||e.traverse(s=>{i||s.name&&s.name.toLowerCase()===n&&(i=this._firstMesh(s))}),i}_firstMesh(e){let t=null;return e.traverse(n=>{!t&&n.isMesh&&(t=n)}),t}_createBoundsFloorNavmesh(){this.centerGroup.updateWorldMatrix(!0,!0);const e=new Ce().setFromObject(this.centerGroup),t=new A,n=new A;e.getSize(t),e.getCenter(n);const i=.05,s=Math.max(t.x-i,.5),o=Math.max(t.z-i,.5),a=Math.min(32,Math.max(4,Math.ceil(s/2))),l=Math.min(32,Math.max(4,Math.ceil(o/2))),c=new Vt(s,o,a,l);c.rotateX(-Math.PI/2);const h=new he(c,new Be({color:65416,wireframe:!0,transparent:!0,opacity:.35,side:ut}));h.name="NavMesh";const u=n.clone();return this.centerGroup.worldToLocal(u),h.position.set(u.x,u.y+.02,u.z),h}_result(){return{contentRoot:this.contentRoot,visual:this.visual,navmeshMesh:this.navmeshMesh,bounds:this.bounds,usedPlaceholder:this.usedPlaceholder,navmeshSource:this.navmeshSource}}}class wt{static roundNumber(e,t){const n=Math.pow(10,t);return Math.round(e*n)/n}static sample(e){return e[Math.floor(Math.random()*e.length)]}static distanceToSquared(e,t){var n=e.x-t.x,i=e.y-t.y,s=e.z-t.z;return n*n+i*i+s*s}static isPointInPoly(e,t){for(var n=!1,i=-1,s=e.length,o=s-1;++i<s;o=i)(e[i].z<=t.z&&t.z<e[o].z||e[o].z<=t.z&&t.z<e[i].z)&&t.x<(e[o].x-e[i].x)*(t.z-e[i].z)/(e[o].z-e[i].z)+e[i].x&&(n=!n);return n}static isVectorInPolygon(e,t,n){var i=1e5,s=-1e5,o=[];return t.vertexIds.forEach(a=>{i=Math.min(n[a].y,i),s=Math.max(n[a].y,s),o.push(n[a])}),!!(e.y<s+.5&&e.y>i-.5&&this.isPointInPoly(o,e))}static triarea2(e,t,n){return(n.x-e.x)*(t.z-e.z)-(t.x-e.x)*(n.z-e.z)}static vequal(e,t){return this.distanceToSquared(e,t)<1e-5}static mergeVertices(e,t=1e-4){t=Math.max(t,Number.EPSILON);for(var n={},i=e.getIndex(),s=e.getAttribute("position"),o=i?i.count:s.count,a=0,l=[],c=[],h=Math.log10(1/t),u=Math.pow(10,h),d=0;d<o;d++){var p=i?i.getX(d):d,g="";g+=~~(s.getX(p)*u)+",",g+=~~(s.getY(p)*u)+",",(g+=~~(s.getZ(p)*u)+",")in n?l.push(n[g]):(c.push(s.getX(p)),c.push(s.getY(p)),c.push(s.getZ(p)),n[g]=a,l.push(a),a++)}const b=new dt(new Float32Array(c),s.itemSize,s.normalized),m=new rt;return m.setAttribute("position",b),m.setIndex(l),m}}class fv{constructor(e){this.content=[],this.scoreFunction=e}push(e){this.content.push(e),this.sinkDown(this.content.length-1)}pop(){const e=this.content[0],t=this.content.pop();return this.content.length>0&&(this.content[0]=t,this.bubbleUp(0)),e}remove(e){const t=this.content.indexOf(e),n=this.content.pop();t!==this.content.length-1&&(this.content[t]=n,this.scoreFunction(n)<this.scoreFunction(e)?this.sinkDown(t):this.bubbleUp(t))}size(){return this.content.length}rescoreElement(e){this.sinkDown(this.content.indexOf(e))}sinkDown(e){const t=this.content[e];for(;e>0;){const n=(e+1>>1)-1,i=this.content[n];if(!(this.scoreFunction(t)<this.scoreFunction(i)))break;this.content[n]=t,this.content[e]=i,e=n}}bubbleUp(e){const t=this.content.length,n=this.content[e],i=this.scoreFunction(n);for(;;){const s=e+1<<1,o=s-1;let a,l=null;if(o<t&&(a=this.scoreFunction(this.content[o]),a<i&&(l=o)),s<t&&this.scoreFunction(this.content[s])<(l===null?i:a)&&(l=s),l===null)break;this.content[e]=this.content[l],this.content[l]=n,e=l}}}class pv{constructor(){this.portals=[]}push(e,t){t===void 0&&(t=e),this.portals.push({left:e,right:t})}stringPull(){const e=this.portals,t=[];let n,i,s,o=0,a=0,l=0;n=e[0].left,i=e[0].left,s=e[0].right,t.push(n);for(let c=1;c<e.length;c++){const h=e[c].left,u=e[c].right;if(wt.triarea2(n,s,u)<=0){if(!(wt.vequal(n,s)||wt.triarea2(n,i,u)>0)){t.push(i),n=i,o=a,i=n,s=n,a=o,l=o,c=o;continue}s=u,l=c}if(wt.triarea2(n,i,h)>=0){if(!(wt.vequal(n,i)||wt.triarea2(n,s,h)<0)){t.push(s),n=s,o=l,i=n,s=n,a=o,l=o,c=o;continue}i=h,a=c}}return t.length!==0&&wt.vequal(t[t.length-1],e[e.length-1].left)||t.push(e[e.length-1].left),this.path=t,t}}class Ho{constructor(){this.zones={}}static createZone(e,t=1e-4){return(class{static buildZone(n,i){const s=this._buildNavigationMesh(n,i),o={};s.vertices.forEach(l=>{l.x=wt.roundNumber(l.x,2),l.y=wt.roundNumber(l.y,2),l.z=wt.roundNumber(l.z,2)}),o.vertices=s.vertices;const a=this._buildPolygonGroups(s);return o.groups=new Array(a.length),a.forEach((l,c)=>{const h=new Map;l.forEach((d,p)=>{h.set(d,p)});const u=new Array(l.length);l.forEach((d,p)=>{const g=[];d.neighbours.forEach(f=>g.push(h.get(f)));const b=[];d.neighbours.forEach(f=>b.push(this._getSharedVerticesInOrder(d,f)));const m=new A(0,0,0);m.add(o.vertices[d.vertexIds[0]]),m.add(o.vertices[d.vertexIds[1]]),m.add(o.vertices[d.vertexIds[2]]),m.divideScalar(3),m.x=wt.roundNumber(m.x,2),m.y=wt.roundNumber(m.y,2),m.z=wt.roundNumber(m.z,2),u[p]={id:p,neighbours:g,vertexIds:d.vertexIds,centroid:m,portals:b}}),o.groups[c]=u}),o}static _buildNavigationMesh(n,i){return n=wt.mergeVertices(n,i),this._buildPolygonsFromGeometry(n)}static _spreadGroupId(n){let i=new Set([n]);for(;i.size>0;){const s=i;i=new Set,s.forEach(o=>{o.group=n.group,o.neighbours.forEach(a=>{a.group===void 0&&i.add(a)})})}}static _buildPolygonGroups(n){const i=[];return n.polygons.forEach(s=>{s.group!==void 0?i[s.group].push(s):(s.group=i.length,this._spreadGroupId(s),i.push([s]))}),i}static _buildPolygonNeighbours(n,i){const s=new Set,o=i[n.vertexIds[1]],a=i[n.vertexIds[2]];return i[n.vertexIds[0]].forEach(l=>{l!==n&&(o.includes(l)||a.includes(l))&&s.add(l)}),o.forEach(l=>{l!==n&&a.includes(l)&&s.add(l)}),s}static _buildPolygonsFromGeometry(n){const i=[],s=[],o=n.attributes.position,a=n.index,l=[];for(let c=0;c<o.count;c++)s.push(new A().fromBufferAttribute(o,c)),l[c]=[];for(let c=0;c<n.index.count;c+=3){const h=a.getX(c),u=a.getX(c+1),d=a.getX(c+2),p={vertexIds:[h,u,d],neighbours:null};i.push(p),l[h].push(p),l[u].push(p),l[d].push(p)}return i.forEach(c=>{c.neighbours=this._buildPolygonNeighbours(c,l)}),{polygons:i,vertices:s}}static _getSharedVerticesInOrder(n,i){const s=n.vertexIds,o=s[0],a=s[1],l=s[2],c=i.vertexIds,h=c.includes(o),u=c.includes(a),d=c.includes(l);return h&&u&&d?Array.from(s):h&&u?[o,a]:u&&d?[a,l]:h&&d?[l,o]:(console.warn("Error processing navigation mesh neighbors; neighbors with <2 shared vertices found."),[])}}).buildZone(e,t)}setZoneData(e,t){this.zones[e]=t}getRandomNode(e,t,n,i){if(!this.zones[e])return new A;n=n||null,i=i||0;const s=[];return this.zones[e].groups[t].forEach(o=>{n&&i?wt.distanceToSquared(n,o.centroid)<i*i&&s.push(o.centroid):s.push(o.centroid)}),wt.sample(s)||new A}getClosestNode(e,t,n,i=!1){const s=this.zones[t].vertices;let o=null,a=1/0;return this.zones[t].groups[n].forEach(l=>{const c=wt.distanceToSquared(l.centroid,e);c<a&&(!i||wt.isVectorInPolygon(e,l,s))&&(o=l,a=c)}),o}findPath(e,t,n,i){const s=this.zones[n].groups[i],o=this.zones[n].vertices,a=this.getClosestNode(e,n,i,!0),l=this.getClosestNode(t,n,i,!0);if(!a||!l)return null;const c=(class{static init(p){for(let g=0;g<p.length;g++){const b=p[g];b.f=0,b.g=0,b.h=0,b.cost=1,b.visited=!1,b.closed=!1,b.parent=null}}static cleanUp(p){for(let g=0;g<p.length;g++){const b=p[g];delete b.f,delete b.g,delete b.h,delete b.cost,delete b.visited,delete b.closed,delete b.parent}}static heap(){return new fv(function(p){return p.f})}static search(p,g,b){this.init(p);const m=this.heap();for(m.push(g);m.size()>0;){const f=m.pop();if(f===b){let y=f;const x=[];for(;y.parent;)x.push(y),y=y.parent;return this.cleanUp(x),x.reverse()}f.closed=!0;const _=this.neighbours(p,f);for(let y=0,x=_.length;y<x;y++){const M=_[y];if(M.closed)continue;const E=f.g+M.cost,w=M.visited;if(!w||E<M.g){if(M.visited=!0,M.parent=f,!M.centroid||!b.centroid)throw new Error("Unexpected state");M.h=M.h||this.heuristic(M.centroid,b.centroid),M.g=E,M.f=M.g+M.h,w?m.rescoreElement(M):m.push(M)}}}return[]}static heuristic(p,g){return wt.distanceToSquared(p,g)}static neighbours(p,g){const b=[];for(let m=0;m<g.neighbours.length;m++)b.push(p[g.neighbours[m]]);return b}}).search(s,a,l),h=function(p,g){for(var b=0;b<p.neighbours.length;b++)if(p.neighbours[b]===g.id)return p.portals[b]},u=new pv;u.push(e);for(let p=0;p<c.length;p++){const g=c[p],b=c[p+1];if(b){const m=h(g,b);u.push(o[m[0]],o[m[1]])}}u.push(t),u.stringPull();const d=u.path.map(p=>new A(p.x,p.y,p.z));return d.shift(),d}}Ho.prototype.getGroup=(function(){const r=new An;return function(e,t,n=!1){if(!this.zones[e])return null;let i=null,s=Math.pow(50,2);const o=this.zones[e];for(let a=0;a<o.groups.length;a++){const l=o.groups[a];for(const c of l){if(n&&(r.setFromCoplanarPoints(o.vertices[c.vertexIds[0]],o.vertices[c.vertexIds[1]],o.vertices[c.vertexIds[2]]),Math.abs(r.distanceToPoint(t))<.01)&&wt.isPointInPoly([o.vertices[c.vertexIds[0]],o.vertices[c.vertexIds[1]],o.vertices[c.vertexIds[2]]],t))return a;const h=wt.distanceToSquared(c.centroid,t);h<s&&(i=a,s=h)}}return i}})(),Ho.prototype.clampStep=(function(){const r=new A,e=new An,t=new It,n=new A;let i,s,o=new A;return function(a,l,c,h,u,d){const p=this.zones[h].vertices,g=this.zones[h].groups[u],b=[c],m={};m[c.id]=0,i=void 0,o.set(0,0,0),s=1/0,e.setFromCoplanarPoints(p[c.vertexIds[0]],p[c.vertexIds[1]],p[c.vertexIds[2]]),e.projectPoint(l,r),n.copy(r);for(let f=b.pop();f;f=b.pop()){t.set(p[f.vertexIds[0]],p[f.vertexIds[1]],p[f.vertexIds[2]]),t.closestPointToPoint(n,r),r.distanceToSquared(n)<s&&(i=f,o.copy(r),s=r.distanceToSquared(n));const _=m[f.id];if(!(_>2))for(let y=0;y<f.neighbours.length;y++){const x=g[f.neighbours[y]];x.id in m||(b.push(x),m[x.id]=_+1)}}return d.copy(o),i}})();class mv extends st{constructor(){super(),this._playerMarker=new he(new ln(.25,32,32),new Be({color:15631215})),this._targetMarker=new he(new jt(.3,.3,.3),new Be({color:14469912})),this._nodeMarker=new he(new jt(.1,.8,.1),new Be({color:4417387})),this._stepMarker=new he(new jt(.1,1,.1),new Be({color:14472114})),this._pathMarker=new st,this._pathLineMaterial=new vi({color:41903,linewidth:2}),this._pathPointMaterial=new Be({color:41903}),this._pathPointGeometry=new ln(.08),this._markers=[this._playerMarker,this._targetMarker,this._nodeMarker,this._stepMarker,this._pathMarker],this._markers.forEach(e=>{e.visible=!1,this.add(e)})}setPath(e){for(;this._pathMarker.children.length;)this._pathMarker.children[0].visible=!1,this._pathMarker.remove(this._pathMarker.children[0]);e=[this._playerMarker.position].concat(e);const t=new rt;t.setAttribute("position",new dt(new Float32Array(3*e.length),3));for(let n=0;n<e.length;n++)t.attributes.position.setXYZ(n,e[n].x,e[n].y+.2,e[n].z);this._pathMarker.add(new Wi(t,this._pathLineMaterial));for(let n=0;n<e.length-1;n++){const i=new he(this._pathPointGeometry,this._pathPointMaterial);i.position.copy(e[n]),i.position.y+=.2,this._pathMarker.add(i)}return this._pathMarker.visible=!0,this}setPlayerPosition(e){return this._playerMarker.position.copy(e),this._playerMarker.visible=!0,this}setTargetPosition(e){return this._targetMarker.position.copy(e),this._targetMarker.visible=!0,this}setNodePosition(e){return this._nodeMarker.position.copy(e),this._nodeMarker.visible=!0,this}setStepPosition(e){return this._stepMarker.position.copy(e),this._stepMarker.visible=!0,this}reset(){for(;this._pathMarker.children.length;)this._pathMarker.children[0].visible=!1,this._pathMarker.remove(this._pathMarker.children[0]);return this._markers.forEach(e=>{e.visible=!1}),this}}const gv="level";class _v{constructor(){this.pathfinding=new Ho,this.zoneId=gv,this.groupId=null,this._node=null,this.worldGeometry=null,this.hitMesh=null,this.helper=new mv,this.helper.visible=!1,this._scratch=new A,this._end=new A,this._ready=!1}get ready(){return this._ready}get debugMesh(){return this.hitMesh}buildFromMesh(e,t,{showDebug:n=!1}={}){var a,l,c;if(this._ready=!1,this._node=null,this._clearHitMesh(t),!e)return console.error("[NavMeshSystem] No navmesh mesh provided"),!1;e.updateWorldMatrix(!0,!0);const i=this._toWorldGeometry(e);if(!i)return console.error("[NavMeshSystem] Failed to extract geometry"),!1;const s=i.attributes.position;if(!s||s.count<3)return console.error("[NavMeshSystem] Geometry has too few vertices"),!1;this.worldGeometry=i;try{const h=Ho.createZone(i);this.pathfinding.setZoneData(this.zoneId,h);const u=((a=h.groups)==null?void 0:a.length)??0,d=((l=h.groups)==null?void 0:l.reduce((p,g)=>p+g.length,0))??0;if(console.info(`[NavMeshSystem] Zone built: ${u} group(s), ${d} poly(s), ${((c=h.vertices)==null?void 0:c.length)??0} verts`),!u||!d)return console.error("[NavMeshSystem] Zone has no walkable groups"),!1}catch(h){return console.error("[NavMeshSystem] createZone failed:",h),!1}i.computeBoundingBox();const o=new A;i.boundingBox.getCenter(o),o.y=i.boundingBox.min.y+.05,this.groupId=this.pathfinding.getGroup(this.zoneId,o),(this.groupId===null||this.groupId===void 0)&&(this.groupId=this.pathfinding.getGroup(this.zoneId,new A(0,.1,0))),(this.groupId===null||this.groupId===void 0)&&(this.groupId=0),this._addHitMesh(t,i,n),t.children.includes(this.helper)||t.add(this.helper);try{const h=this.pathfinding.getClosestNode(o,this.zoneId,this.groupId,!1);if(!h)return console.error("[NavMeshSystem] getClosestNode returned null at seed"),this._ready=!1,!1;this._node=h}catch(h){return console.error("[NavMeshSystem] node probe failed:",h),this._ready=!1,!1}return this._ready=!0,console.info("[NavMeshSystem] Zone ready, groupId=",this.groupId),!0}getClosestPoint(e,t=new A){if(!this._ready)return null;const n=this._resolveGroup(e);if(n===null)return null;let i=null;try{i=this.pathfinding.getClosestNode(e,this.zoneId,n,!1)}catch(a){return console.warn("[NavMeshSystem] getClosestNode failed:",a),null}if(!i)return null;const s=this._scratch.copy(i.centroid),o=this._end.copy(e);try{const a=this.pathfinding.clampStep(s,o,i,this.zoneId,n,t);if(a)return this._node=a,this.groupId=n,t}catch(a){console.warn("[NavMeshSystem] clampStep in getClosestPoint failed:",a)}return t.copy(i.centroid),this._node=i,this.groupId=n,t}clampStep(e,t,n){if(!this._ready)return n.copy(e),!1;const i=this._resolveGroup(e);if(i===null)return n.copy(e),!1;let s=this._node;try{!s||!s.vertexIds?s=this.pathfinding.getClosestNode(e,this.zoneId,i,!1):s=this.pathfinding.getClosestNode(e,this.zoneId,i,!0)||this.pathfinding.getClosestNode(e,this.zoneId,i,!1)}catch(o){return console.warn("[NavMeshSystem] getClosestNode in clampStep failed:",o),n.copy(e),!1}if(!s||!s.vertexIds)return n.copy(e),!1;try{const o=this.pathfinding.clampStep(e,t,s,this.zoneId,i,n);return o?(this._node=o,this.groupId=i,!0):(n.copy(e),!1)}catch(o){return console.warn("[NavMeshSystem] clampStep failed:",o),n.copy(e),!1}}isOnNavmesh(e,t=.35){const n=this.getClosestPoint(e,this._scratch);if(!n)return!1;const i=e.x-n.x,s=e.z-n.z,o=Math.hypot(i,s),a=Math.abs(e.y-n.y);return o<=t&&a<=1}getSpawnPosition(e=new A(0,0,0)){const t=new A;try{const n=this.getClosestPoint(e,t);if(n)return n.clone()}catch(n){console.warn("[NavMeshSystem] getSpawnPosition failed:",n)}try{const n=this.groupId??0,i=this.pathfinding.getClosestNode(e,this.zoneId,n,!1);if(i!=null&&i.centroid)return this._node=i,i.centroid.clone()}catch{}return e.clone()}setDebugVisible(e){this.hitMesh&&(this.hitMesh.material.wireframe=!0,this.hitMesh.material.transparent=!0,this.hitMesh.material.depthWrite=!1,this.hitMesh.material.opacity=e?.4:0,this.hitMesh.visible=!0)}_resolveGroup(e){let t=null;try{t=this.pathfinding.getGroup(this.zoneId,e)}catch{t=null}return t==null&&(t=this.groupId),t??null}_toWorldGeometry(e){const t=e.geometry;if(!t)return null;const i=(t.index?t.toNonIndexed():t.clone()).attributes.position;if(!i)return null;const s=new rt;s.setAttribute("position",i.clone()),e.updateWorldMatrix(!0,!0);const o=s.attributes.position,a=new A,l=e.matrixWorld;for(let c=0;c<o.count;c+=1)a.fromBufferAttribute(o,c).applyMatrix4(l),o.setXYZ(c,a.x,a.y,a.z);return o.needsUpdate=!0,s.computeVertexNormals(),s.computeBoundingBox(),s.computeBoundingSphere(),s}_addHitMesh(e,t,n){const i=new Be({color:65416,wireframe:!0,transparent:!0,opacity:n?.4:0,depthWrite:!1,side:ut});this.hitMesh=new he(t,i),this.hitMesh.name="NavMeshHit",this.hitMesh.renderOrder=999,this.hitMesh.visible=!0,e.add(this.hitMesh)}_clearHitMesh(e){var t,n;this.hitMesh&&(e.remove(this.hitMesh),(n=(t=this.hitMesh.material)==null?void 0:t.dispose)==null||n.call(t),this.hitMesh=null),this.worldGeometry&&(this.worldGeometry.dispose(),this.worldGeometry=null)}}const qd=0,bv=1,xv=2,mu=2,Xa=1.25,gu=1,dr=32,Qo=65535,yv=Math.pow(2,-24),ja=Symbol("SKIP_GENERATION");function vv(r){return r.index?r.index.count:r.attributes.position.count}function zs(r){return vv(r)/3}function Mv(r,e=ArrayBuffer){return r>65535?new Uint32Array(new e(4*r)):new Uint16Array(new e(2*r))}function Sv(r,e){if(!r.index){const t=r.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Mv(t,n);r.setIndex(new dt(i,1));for(let s=0;s<t;s++)i[s]=s}}function Yd(r,e){const t=zs(r),n=e||r.drawRange,i=n.start/3,s=(n.start+n.count)/3,o=Math.max(0,i),a=Math.min(t,s)-o;return[{offset:Math.floor(o),count:Math.floor(a)}]}function $d(r,e){if(!r.groups||!r.groups.length)return Yd(r,e);const t=[],n=new Set,i=e||r.drawRange,s=i.start/3,o=(i.start+i.count)/3;for(const l of r.groups){const c=l.start/3,h=(l.start+l.count)/3;n.add(Math.max(s,c)),n.add(Math.min(o,h))}const a=Array.from(n.values()).sort((l,c)=>l-c);for(let l=0;l<a.length-1;l++){const c=a[l],h=a[l+1];t.push({offset:Math.floor(c),count:Math.floor(h-c)})}return t}function wv(r,e){const t=zs(r),n=$d(r,e).sort((o,a)=>o.offset-a.offset),i=n[n.length-1];i.count=Math.min(t-i.offset,i.count);let s=0;return n.forEach(({count:o})=>s+=o),t!==s}function qa(r,e,t,n,i){let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0,u=1/0,d=1/0,p=1/0,g=-1/0,b=-1/0,m=-1/0;for(let f=e*6,_=(e+t)*6;f<_;f+=6){const y=r[f+0],x=r[f+1],M=y-x,E=y+x;M<s&&(s=M),E>l&&(l=E),y<u&&(u=y),y>g&&(g=y);const w=r[f+2],T=r[f+3],S=w-T,v=w+T;S<o&&(o=S),v>c&&(c=v),w<d&&(d=w),w>b&&(b=w);const P=r[f+4],I=r[f+5],D=P-I,N=P+I;D<a&&(a=D),N>h&&(h=N),P<p&&(p=P),P>m&&(m=P)}n[0]=s,n[1]=o,n[2]=a,n[3]=l,n[4]=c,n[5]=h,i[0]=u,i[1]=d,i[2]=p,i[3]=g,i[4]=b,i[5]=m}function Ev(r,e=null,t=null,n=null){const i=r.attributes.position,s=r.index?r.index.array:null,o=zs(r),a=i.normalized;let l;e===null?(l=new Float32Array(o*6),t=0,n=o):(l=e,t=t||0,n=n||o);const c=i.array,h=i.offset||0;let u=3;i.isInterleavedBufferAttribute&&(u=i.data.stride);const d=["getX","getY","getZ"];for(let p=t;p<t+n;p++){const g=p*3,b=p*6;let m=g+0,f=g+1,_=g+2;s&&(m=s[m],f=s[f],_=s[_]),a||(m=m*u+h,f=f*u+h,_=_*u+h);for(let y=0;y<3;y++){let x,M,E;a?(x=i[d[y]](m),M=i[d[y]](f),E=i[d[y]](_)):(x=c[m+y],M=c[f+y],E=c[_+y]);let w=x;M<w&&(w=M),E<w&&(w=E);let T=x;M>T&&(T=M),E>T&&(T=E);const S=(T-w)/2,v=y*2;l[b+v+0]=w+S,l[b+v+1]=S+(Math.abs(w)+S)*yv}}return l}function bt(r,e,t){return t.min.x=e[r],t.min.y=e[r+1],t.min.z=e[r+2],t.max.x=e[r+3],t.max.y=e[r+4],t.max.z=e[r+5],t}function _u(r){let e=-1,t=-1/0;for(let n=0;n<3;n++){const i=r[n+3]-r[n];i>t&&(t=i,e=n)}return e}function bu(r,e){e.set(r)}function xu(r,e,t){let n,i;for(let s=0;s<3;s++){const o=s+3;n=r[s],i=e[s],t[s]=n<i?n:i,n=r[o],i=e[o],t[o]=n>i?n:i}}function so(r,e,t){for(let n=0;n<3;n++){const i=e[r+2*n],s=e[r+2*n+1],o=i-s,a=i+s;o<t[n]&&(t[n]=o),a>t[n+3]&&(t[n+3]=a)}}function Zs(r){const e=r[3]-r[0],t=r[4]-r[1],n=r[5]-r[2];return 2*(e*t+t*n+n*e)}const $n=32,Av=(r,e)=>r.candidate-e.candidate,di=new Array($n).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),ro=new Float32Array(6);function Tv(r,e,t,n,i,s){let o=-1,a=0;if(s===qd)o=_u(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(s===bv)o=_u(r),o!==-1&&(a=Cv(t,n,i,o));else if(s===xv){const l=Zs(r);let c=Xa*i;const h=n*6,u=(n+i)*6;for(let d=0;d<3;d++){const p=e[d],m=(e[d+3]-p)/$n;if(i<$n/4){const f=[...di];f.length=i;let _=0;for(let x=h;x<u;x+=6,_++){const M=f[_];M.candidate=t[x+2*d],M.count=0;const{bounds:E,leftCacheBounds:w,rightCacheBounds:T}=M;for(let S=0;S<3;S++)T[S]=1/0,T[S+3]=-1/0,w[S]=1/0,w[S+3]=-1/0,E[S]=1/0,E[S+3]=-1/0;so(x,t,E)}f.sort(Av);let y=i;for(let x=0;x<y;x++){const M=f[x];for(;x+1<y&&f[x+1].candidate===M.candidate;)f.splice(x+1,1),y--}for(let x=h;x<u;x+=6){const M=t[x+2*d];for(let E=0;E<y;E++){const w=f[E];M>=w.candidate?so(x,t,w.rightCacheBounds):(so(x,t,w.leftCacheBounds),w.count++)}}for(let x=0;x<y;x++){const M=f[x],E=M.count,w=i-M.count,T=M.leftCacheBounds,S=M.rightCacheBounds;let v=0;E!==0&&(v=Zs(T)/l);let P=0;w!==0&&(P=Zs(S)/l);const I=gu+Xa*(v*E+P*w);I<c&&(o=d,c=I,a=M.candidate)}}else{for(let y=0;y<$n;y++){const x=di[y];x.count=0,x.candidate=p+m+y*m;const M=x.bounds;for(let E=0;E<3;E++)M[E]=1/0,M[E+3]=-1/0}for(let y=h;y<u;y+=6){let E=~~((t[y+2*d]-p)/m);E>=$n&&(E=$n-1);const w=di[E];w.count++,so(y,t,w.bounds)}const f=di[$n-1];bu(f.bounds,f.rightCacheBounds);for(let y=$n-2;y>=0;y--){const x=di[y],M=di[y+1];xu(x.bounds,M.rightCacheBounds,x.rightCacheBounds)}let _=0;for(let y=0;y<$n-1;y++){const x=di[y],M=x.count,E=x.bounds,T=di[y+1].rightCacheBounds;M!==0&&(_===0?bu(E,ro):xu(E,ro,ro)),_+=M;let S=0,v=0;_!==0&&(S=Zs(ro)/l);const P=i-_;P!==0&&(v=Zs(T)/l);const I=gu+Xa*(S*_+v*P);I<c&&(o=d,c=I,a=x.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function Cv(r,e,t,n){let i=0;for(let s=e,o=e+t;s<o;s++)i+=r[s*6+n*2];return i/t}class Ya{constructor(){this.boundingData=new Float32Array(6)}}function Rv(r,e,t,n,i,s){let o=n,a=n+i-1;const l=s.pos,c=s.axis*2;for(;;){for(;o<=a&&t[o*6+c]<l;)o++;for(;o<=a&&t[a*6+c]>=l;)a--;if(o<a){for(let h=0;h<3;h++){let u=e[o*3+h];e[o*3+h]=e[a*3+h],e[a*3+h]=u}for(let h=0;h<6;h++){let u=t[o*6+h];t[o*6+h]=t[a*6+h],t[a*6+h]=u}o++,a--}else return o}}function Pv(r,e,t,n,i,s){let o=n,a=n+i-1;const l=s.pos,c=s.axis*2;for(;;){for(;o<=a&&t[o*6+c]<l;)o++;for(;o<=a&&t[a*6+c]>=l;)a--;if(o<a){let h=r[o];r[o]=r[a],r[a]=h;for(let u=0;u<6;u++){let d=t[o*6+u];t[o*6+u]=t[a*6+u],t[a*6+u]=d}o++,a--}else return o}}function tn(r,e){return e[r+15]===65535}function an(r,e){return e[r+6]}function mn(r,e){return e[r+14]}function gn(r){return r+8}function _n(r,e){return e[r+6]}function Kd(r,e){return e[r+7]}let Jd,lr,Do,Zd;const Lv=Math.pow(2,32);function ec(r){return"count"in r?1:1+ec(r.left)+ec(r.right)}function Iv(r,e,t){return Jd=new Float32Array(t),lr=new Uint32Array(t),Do=new Uint16Array(t),Zd=new Uint8Array(t),tc(r,e)}function tc(r,e){const t=r/4,n=r/2,i="count"in e,s=e.boundingData;for(let o=0;o<6;o++)Jd[t+o]=s[o];if(i)if(e.buffer){const o=e.buffer;Zd.set(new Uint8Array(o),r);for(let a=r,l=r+o.byteLength;a<l;a+=dr){const c=a/2;tn(c,Do)||(lr[a/4+6]+=t)}return r+o.byteLength}else{const o=e.offset,a=e.count;return lr[t+6]=o,Do[n+14]=a,Do[n+15]=Qo,r+dr}else{const o=e.left,a=e.right,l=e.splitAxis;let c;if(c=tc(r+dr,o),c/4>Lv)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return lr[t+6]=c/4,c=tc(c,a),lr[t+7]=l,c}}function Dv(r,e){const t=(r.index?r.index.count:r.attributes.position.count)/3,n=t>2**16,i=n?4:2,s=e?new SharedArrayBuffer(t*i):new ArrayBuffer(t*i),o=n?new Uint32Array(s):new Uint16Array(s);for(let a=0,l=o.length;a<l;a++)o[a]=a;return o}function Nv(r,e,t,n,i){const{maxDepth:s,verbose:o,maxLeafTris:a,strategy:l,onProgress:c,indirect:h}=i,u=r._indirectBuffer,d=r.geometry,p=d.index?d.index.array:null,g=h?Pv:Rv,b=zs(d),m=new Float32Array(6);let f=!1;const _=new Ya;return qa(e,t,n,_.boundingData,m),x(_,t,n,m),_;function y(M){c&&c(M/b)}function x(M,E,w,T=null,S=0){if(!f&&S>=s&&(f=!0,o&&(console.warn(`MeshBVH: Max depth of ${s} reached when generating BVH. Consider increasing maxDepth.`),console.warn(d))),w<=a||S>=s)return y(E+w),M.offset=E,M.count=w,M;const v=Tv(M.boundingData,T,e,E,w,l);if(v.axis===-1)return y(E+w),M.offset=E,M.count=w,M;const P=g(u,p,e,E,w,v);if(P===E||P===E+w)y(E+w),M.offset=E,M.count=w;else{M.splitAxis=v.axis;const I=new Ya,D=E,N=P-E;M.left=I,qa(e,D,N,I.boundingData,m),x(I,D,N,m,S+1);const z=new Ya,k=P,j=w-N;M.right=z,qa(e,k,j,z.boundingData,m),x(z,k,j,m,S+1)}return M}}function Fv(r,e){const t=r.geometry;e.indirect&&(r._indirectBuffer=Dv(t,e.useSharedArrayBuffer),wv(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),r._indirectBuffer||Sv(t,e);const n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Ev(t),s=e.indirect?Yd(t,e.range):$d(t,e.range);r._roots=s.map(o=>{const a=Nv(r,i,o.offset,o.count,e),l=ec(a),c=new n(dr*l);return Iv(0,a,c),c})}class si{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let s=0,o=e.length;s<o;s++){const l=e[s][t];n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let s=0,o=t.length;s<o;s++){const a=t[s],l=e.dot(a);n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}si.prototype.setFromBox=(function(){const r=new A;return function(t,n){const i=n.min,s=n.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let h=0;h<=1;h++){r.x=i.x*l+s.x*(1-l),r.y=i.y*c+s.y*(1-c),r.z=i.z*h+s.z*(1-h);const u=t.dot(r);o=Math.min(u,o),a=Math.max(u,a)}this.min=o,this.max=a}})();const Uv=(function(){const r=new A,e=new A,t=new A;return function(i,s,o){const a=i.start,l=r,c=s.start,h=e;t.subVectors(a,c),r.subVectors(i.end,i.start),e.subVectors(s.end,s.start);const u=t.dot(h),d=h.dot(l),p=h.dot(h),g=t.dot(l),m=l.dot(l)*p-d*d;let f,_;m!==0?f=(u*d-g*p)/m:f=0,_=(u+f*d)/p,o.x=f,o.y=_}})(),Lc=(function(){const r=new De,e=new A,t=new A;return function(i,s,o,a){Uv(i,s,r);let l=r.x,c=r.y;if(l>=0&&l<=1&&c>=0&&c<=1){i.at(l,o),s.at(c,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),i.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?i.at(0,o):i.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let h;l<0?h=i.start:h=i.end;let u;c<0?u=s.start:u=s.end;const d=e,p=t;if(i.closestPointToPoint(u,!0,e),s.closestPointToPoint(h,!0,t),d.distanceToSquared(u)<=p.distanceToSquared(h)){o.copy(d),a.copy(u);return}else{o.copy(h),a.copy(p);return}}}})(),kv=(function(){const r=new A,e=new A,t=new An,n=new ni;return function(s,o){const{radius:a,center:l}=s,{a:c,b:h,c:u}=o;if(n.start=c,n.end=h,n.closestPointToPoint(l,!0,r).distanceTo(l)<=a||(n.start=c,n.end=u,n.closestPointToPoint(l,!0,r).distanceTo(l)<=a)||(n.start=h,n.end=u,n.closestPointToPoint(l,!0,r).distanceTo(l)<=a))return!0;const b=o.getPlane(t);if(Math.abs(b.distanceToPoint(l))<=a){const f=b.projectPoint(l,e);if(o.containsPoint(f))return!0}return!1}})(),Ov=1e-15;function $a(r){return Math.abs(r)<Ov}class Pn extends It{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new A),this.satBounds=new Array(4).fill().map(()=>new si),this.points=[this.a,this.b,this.c],this.sphere=new Xt,this.plane=new An,this.needsUpdate=!0}intersectsSphere(e){return kv(e,this)}update(){const e=this.a,t=this.b,n=this.c,i=this.points,s=this.satAxes,o=this.satBounds,a=s[0],l=o[0];this.getNormal(a),l.setFromPoints(a,i);const c=s[1],h=o[1];c.subVectors(e,t),h.setFromPoints(c,i);const u=s[2],d=o[2];u.subVectors(t,n),d.setFromPoints(u,i);const p=s[3],g=o[3];p.subVectors(n,e),g.setFromPoints(p,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}}Pn.prototype.closestPointToSegment=(function(){const r=new A,e=new A,t=new ni;return function(i,s=null,o=null){const{start:a,end:l}=i,c=this.points;let h,u=1/0;for(let d=0;d<3;d++){const p=(d+1)%3;t.start.copy(c[d]),t.end.copy(c[p]),Lc(t,i,r,e),h=r.distanceToSquared(e),h<u&&(u=h,s&&s.copy(r),o&&o.copy(e))}return this.closestPointToPoint(a,r),h=a.distanceToSquared(r),h<u&&(u=h,s&&s.copy(r),o&&o.copy(a)),this.closestPointToPoint(l,r),h=l.distanceToSquared(r),h<u&&(u=h,s&&s.copy(r),o&&o.copy(l)),Math.sqrt(u)}})();Pn.prototype.intersectsTriangle=(function(){const r=new Pn,e=new Array(3),t=new Array(3),n=new si,i=new si,s=new A,o=new A,a=new A,l=new A,c=new A,h=new ni,u=new ni,d=new ni,p=new A;function g(b,m,f){const _=b.points;let y=0,x=-1;for(let M=0;M<3;M++){const{start:E,end:w}=h;E.copy(_[M]),w.copy(_[(M+1)%3]),h.delta(o);const T=$a(m.distanceToPoint(E));if($a(m.normal.dot(o))&&T){f.copy(h),y=2;break}const S=m.intersectLine(h,p);if(!S&&T&&p.copy(E),(S||T)&&!$a(p.distanceTo(w))){if(y<=1)(y===1?f.start:f.end).copy(p),T&&(x=y);else if(y>=2){(x===1?f.start:f.end).copy(p),y=2;break}if(y++,y===2&&x===-1)break}}return y}return function(m,f=null,_=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(r.copy(m),r.update(),m=r);const y=this.plane,x=m.plane;if(Math.abs(y.normal.dot(x.normal))>1-1e-10){const M=this.satBounds,E=this.satAxes;t[0]=m.a,t[1]=m.b,t[2]=m.c;for(let S=0;S<4;S++){const v=M[S],P=E[S];if(n.setFromPoints(P,t),v.isSeparated(n))return!1}const w=m.satBounds,T=m.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let S=0;S<4;S++){const v=w[S],P=T[S];if(n.setFromPoints(P,e),v.isSeparated(n))return!1}for(let S=0;S<4;S++){const v=E[S];for(let P=0;P<4;P++){const I=T[P];if(s.crossVectors(v,I),n.setFromPoints(s,e),i.setFromPoints(s,t),n.isSeparated(i))return!1}}return f&&(_||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),f.start.set(0,0,0),f.end.set(0,0,0)),!0}else{const M=g(this,x,u);if(M===1&&m.containsPoint(u.end))return f&&(f.start.copy(u.end),f.end.copy(u.end)),!0;if(M!==2)return!1;const E=g(m,y,d);if(E===1&&this.containsPoint(d.end))return f&&(f.start.copy(d.end),f.end.copy(d.end)),!0;if(E!==2)return!1;if(u.delta(a),d.delta(l),a.dot(l)<0){let D=d.start;d.start=d.end,d.end=D}const w=u.start.dot(a),T=u.end.dot(a),S=d.start.dot(a),v=d.end.dot(a),P=T<S,I=w<v;return w!==v&&S!==T&&P===I?!1:(f&&(c.subVectors(u.start,d.start),c.dot(a)>0?f.start.copy(u.start):f.start.copy(d.start),c.subVectors(u.end,d.end),c.dot(a)<0?f.end.copy(u.end):f.end.copy(d.end)),!0)}}})();Pn.prototype.distanceToPoint=(function(){const r=new A;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}})();Pn.prototype.distanceToTriangle=(function(){const r=new A,e=new A,t=["a","b","c"],n=new ni,i=new ni;return function(o,a=null,l=null){const c=a||l?n:null;if(this.intersectsTriangle(o,c))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let h=1/0;for(let u=0;u<3;u++){let d;const p=t[u],g=o[p];this.closestPointToPoint(g,r),d=g.distanceToSquared(r),d<h&&(h=d,a&&a.copy(r),l&&l.copy(g));const b=this[p];o.closestPointToPoint(b,r),d=b.distanceToSquared(r),d<h&&(h=d,a&&a.copy(b),l&&l.copy(r))}for(let u=0;u<3;u++){const d=t[u],p=t[(u+1)%3];n.set(this[d],this[p]);for(let g=0;g<3;g++){const b=t[g],m=t[(g+1)%3];i.set(o[b],o[m]),Lc(n,i,r,e);const f=r.distanceToSquared(e);f<h&&(h=f,a&&a.copy(r),l&&l.copy(e))}}return Math.sqrt(h)}})();class Zt{constructor(e,t,n){this.isOrientedBox=!0,this.min=new A,this.max=new A,this.matrix=new ve,this.invMatrix=new ve,this.points=new Array(8).fill().map(()=>new A),this.satAxes=new Array(3).fill().map(()=>new A),this.satBounds=new Array(3).fill().map(()=>new si),this.alignedSatBounds=new Array(3).fill().map(()=>new si),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}Zt.prototype.update=(function(){return function(){const e=this.matrix,t=this.min,n=this.max,i=this.points;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let u=0;u<=1;u++){const d=1*c|2*h|4*u,p=i[d];p.x=c?n.x:t.x,p.y=h?n.y:t.y,p.z=u?n.z:t.z,p.applyMatrix4(e)}const s=this.satBounds,o=this.satAxes,a=i[0];for(let c=0;c<3;c++){const h=o[c],u=s[c],d=1<<c,p=i[d];h.subVectors(a,p),u.setFromPoints(h,i)}const l=this.alignedSatBounds;l[0].setFromPointsField(i,"x"),l[1].setFromPointsField(i,"y"),l[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Zt.prototype.intersectsBox=(function(){const r=new si;return function(t){this.needsUpdate&&this.update();const n=t.min,i=t.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(r.min=n.x,r.max=i.x,a[0].isSeparated(r)||(r.min=n.y,r.max=i.y,a[1].isSeparated(r))||(r.min=n.z,r.max=i.z,a[2].isSeparated(r)))return!1;for(let l=0;l<3;l++){const c=o[l],h=s[l];if(r.setFromBox(c,t),h.isSeparated(r))return!1}return!0}})();Zt.prototype.intersectsTriangle=(function(){const r=new Pn,e=new Array(3),t=new si,n=new si,i=new A;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(r.copy(o),r.update(),o=r);const a=this.satBounds,l=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let d=0;d<3;d++){const p=a[d],g=l[d];if(t.setFromPoints(g,e),p.isSeparated(t))return!1}const c=o.satBounds,h=o.satAxes,u=this.points;for(let d=0;d<3;d++){const p=c[d],g=h[d];if(t.setFromPoints(g,u),p.isSeparated(t))return!1}for(let d=0;d<3;d++){const p=l[d];for(let g=0;g<4;g++){const b=h[g];if(i.crossVectors(p,b),t.setFromPoints(i,e),n.setFromPoints(i,u),t.isSeparated(n))return!1}}return!0}})();Zt.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();Zt.prototype.distanceToPoint=(function(){const r=new A;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}})();Zt.prototype.distanceToBox=(function(){const r=["x","y","z"],e=new Array(12).fill().map(()=>new ni),t=new Array(12).fill().map(()=>new ni),n=new A,i=new A;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),l&&l.copy(n),c&&c.copy(i)),0;const h=a*a,u=o.min,d=o.max,p=this.points;let g=1/0;for(let m=0;m<8;m++){const f=p[m];i.copy(f).clamp(u,d);const _=f.distanceToSquared(i);if(_<g&&(g=_,l&&l.copy(f),c&&c.copy(i),_<h))return Math.sqrt(_)}let b=0;for(let m=0;m<3;m++)for(let f=0;f<=1;f++)for(let _=0;_<=1;_++){const y=(m+1)%3,x=(m+2)%3,M=f<<y|_<<x,E=1<<m|f<<y|_<<x,w=p[M],T=p[E];e[b].set(w,T);const v=r[m],P=r[y],I=r[x],D=t[b],N=D.start,z=D.end;N[v]=u[v],N[P]=f?u[P]:d[P],N[I]=_?u[I]:d[P],z[v]=d[v],z[P]=f?u[P]:d[P],z[I]=_?u[I]:d[P],b++}for(let m=0;m<=1;m++)for(let f=0;f<=1;f++)for(let _=0;_<=1;_++){i.x=m?d.x:u.x,i.y=f?d.y:u.y,i.z=_?d.z:u.z,this.closestPointToPoint(i,n);const y=i.distanceToSquared(n);if(y<g&&(g=y,l&&l.copy(n),c&&c.copy(i),y<h))return Math.sqrt(y)}for(let m=0;m<12;m++){const f=e[m];for(let _=0;_<12;_++){const y=t[_];Lc(f,y,n,i);const x=n.distanceToSquared(i);if(x<g&&(g=x,l&&l.copy(n),c&&c.copy(i),x<h))return Math.sqrt(x)}}return Math.sqrt(g)}})();class Ic{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class Bv extends Ic{constructor(){super(()=>new Pn)}}const bn=new Bv;class zv{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const ft=new zv;let gi,bs;const cs=[],oo=new Ic(()=>new Ce);function Hv(r,e,t,n,i,s){gi=oo.getPrimitive(),bs=oo.getPrimitive(),cs.push(gi,bs),ft.setBuffer(r._roots[e]);const o=nc(0,r.geometry,t,n,i,s);ft.clearBuffer(),oo.releasePrimitive(gi),oo.releasePrimitive(bs),cs.pop(),cs.pop();const a=cs.length;return a>0&&(bs=cs[a-1],gi=cs[a-2]),o}function nc(r,e,t,n,i=null,s=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:c}=ft;let h=r*2;if(tn(h,l)){const g=an(r,c),b=mn(h,l);return bt(r,a,gi),n(g,b,!1,o,s+r,gi)}else{let I=function(N){const{uint16Array:z,uint32Array:k}=ft;let j=N*2;for(;!tn(j,z);)N=gn(N),j=N*2;return an(N,k)},D=function(N){const{uint16Array:z,uint32Array:k}=ft;let j=N*2;for(;!tn(j,z);)N=_n(N,k),j=N*2;return an(N,k)+mn(j,z)};var d=I,p=D;const g=gn(r),b=_n(r,c);let m=g,f=b,_,y,x,M;if(i&&(x=gi,M=bs,bt(m,a,x),bt(f,a,M),_=i(x),y=i(M),y<_)){m=b,f=g;const N=_;_=y,y=N,x=M}x||(x=gi,bt(m,a,x));const E=tn(m*2,l),w=t(x,E,_,o+1,s+m);let T;if(w===mu){const N=I(m),k=D(m)-N;T=n(N,k,!0,o+1,s+m,x)}else T=w&&nc(m,e,t,n,i,s,o+1);if(T)return!0;M=bs,bt(f,a,M);const S=tn(f*2,l),v=t(M,S,y,o+1,s+f);let P;if(v===mu){const N=I(f),k=D(f)-N;P=n(N,k,!0,o+1,s+f,M)}else P=v&&nc(f,e,t,n,i,s,o+1);return!!P}}const Qs=new A,Ka=new A;function Gv(r,e,t={},n=0,i=1/0){const s=n*n,o=i*i;let a=1/0,l=null;if(r.shapecast({boundsTraverseOrder:h=>(Qs.copy(e).clamp(h.min,h.max),Qs.distanceToSquared(e)),intersectsBounds:(h,u,d)=>d<a&&d<o,intersectsTriangle:(h,u)=>{h.closestPointToPoint(e,Qs);const d=e.distanceToSquared(Qs);return d<a&&(Ka.copy(Qs),a=d,l=u),d<s}}),a===1/0)return null;const c=Math.sqrt(a);return t.point?t.point.copy(Ka):t.point=Ka.clone(),t.distance=c,t.faceIndex=l,t}const Vv=parseInt(Wo)>=169,Ni=new A,Fi=new A,Ui=new A,ao=new De,lo=new De,co=new De,yu=new A,vu=new A,Mu=new A,er=new A;function Wv(r,e,t,n,i,s,o,a){let l;if(s===kt?l=r.intersectTriangle(n,t,e,!0,i):l=r.intersectTriangle(e,t,n,s!==ut,i),l===null)return null;const c=r.origin.distanceTo(i);return c<o||c>a?null:{distance:c,point:i.clone()}}function Xv(r,e,t,n,i,s,o,a,l,c,h){Ni.fromBufferAttribute(e,s),Fi.fromBufferAttribute(e,o),Ui.fromBufferAttribute(e,a);const u=Wv(r,Ni,Fi,Ui,er,l,c,h);if(u){const d=new A;It.getBarycoord(er,Ni,Fi,Ui,d),n&&(ao.fromBufferAttribute(n,s),lo.fromBufferAttribute(n,o),co.fromBufferAttribute(n,a),u.uv=It.getInterpolation(er,Ni,Fi,Ui,ao,lo,co,new De)),i&&(ao.fromBufferAttribute(i,s),lo.fromBufferAttribute(i,o),co.fromBufferAttribute(i,a),u.uv1=It.getInterpolation(er,Ni,Fi,Ui,ao,lo,co,new De)),t&&(yu.fromBufferAttribute(t,s),vu.fromBufferAttribute(t,o),Mu.fromBufferAttribute(t,a),u.normal=It.getInterpolation(er,Ni,Fi,Ui,yu,vu,Mu,new A),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const p={a:s,b:o,c:a,normal:new A,materialIndex:0};It.getNormal(Ni,Fi,Ui,p.normal),u.face=p,u.faceIndex=s,Vv&&(u.barycoord=d)}return u}function ea(r,e,t,n,i,s,o){const a=n*3;let l=a+0,c=a+1,h=a+2;const u=r.index;r.index&&(l=u.getX(l),c=u.getX(c),h=u.getX(h));const{position:d,normal:p,uv:g,uv1:b}=r.attributes,m=Xv(t,d,p,g,b,l,c,h,e,s,o);return m?(m.faceIndex=n,i&&i.push(m),m):null}function Tt(r,e,t,n){const i=r.a,s=r.b,o=r.c;let a=e,l=e+1,c=e+2;t&&(a=t.getX(a),l=t.getX(l),c=t.getX(c)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),s.x=n.getX(l),s.y=n.getY(l),s.z=n.getZ(l),o.x=n.getX(c),o.y=n.getY(c),o.z=n.getZ(c)}function jv(r,e,t,n,i,s,o,a){const{geometry:l,_indirectBuffer:c}=r;for(let h=n,u=n+i;h<u;h++)ea(l,e,t,h,s,o,a)}function qv(r,e,t,n,i,s,o){const{geometry:a,_indirectBuffer:l}=r;let c=1/0,h=null;for(let u=n,d=n+i;u<d;u++){let p;p=ea(a,e,t,u,null,s,o),p&&p.distance<c&&(h=p,c=p.distance)}return h}function Yv(r,e,t,n,i,s,o){const{geometry:a}=t,{index:l}=a,c=a.attributes.position;for(let h=r,u=e+r;h<u;h++){let d;if(d=h,Tt(o,d*3,l,c),o.needsUpdate=!0,n(o,d,i,s))return!0}return!1}function $v(r,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=r.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let s,o,a,l,c=0;const h=r._roots;for(let d=0,p=h.length;d<p;d++)s=h[d],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),u(0,c),c+=s.byteLength;function u(d,p,g=!1){const b=d*2;if(a[b+15]===Qo){const f=o[d+6],_=a[b+14];let y=1/0,x=1/0,M=1/0,E=-1/0,w=-1/0,T=-1/0;for(let S=3*f,v=3*(f+_);S<v;S++){let P=n[S];const I=i.getX(P),D=i.getY(P),N=i.getZ(P);I<y&&(y=I),I>E&&(E=I),D<x&&(x=D),D>w&&(w=D),N<M&&(M=N),N>T&&(T=N)}return l[d+0]!==y||l[d+1]!==x||l[d+2]!==M||l[d+3]!==E||l[d+4]!==w||l[d+5]!==T?(l[d+0]=y,l[d+1]=x,l[d+2]=M,l[d+3]=E,l[d+4]=w,l[d+5]=T,!0):!1}else{const f=d+8,_=o[d+6],y=f+p,x=_+p;let M=g,E=!1,w=!1;e?M||(E=e.has(y),w=e.has(x),M=!E&&!w):(E=!0,w=!0);const T=M||E,S=M||w;let v=!1;T&&(v=u(f,p,M));let P=!1;S&&(P=u(_,p,M));const I=v||P;if(I)for(let D=0;D<3;D++){const N=f+D,z=_+D,k=l[N],j=l[N+3],W=l[z],Q=l[z+3];l[d+D]=k<W?k:W,l[d+D+3]=j>Q?j:Q}return I}}}function yi(r,e,t,n,i){let s,o,a,l,c,h;const u=1/t.direction.x,d=1/t.direction.y,p=1/t.direction.z,g=t.origin.x,b=t.origin.y,m=t.origin.z;let f=e[r],_=e[r+3],y=e[r+1],x=e[r+3+1],M=e[r+2],E=e[r+3+2];return u>=0?(s=(f-g)*u,o=(_-g)*u):(s=(_-g)*u,o=(f-g)*u),d>=0?(a=(y-b)*d,l=(x-b)*d):(a=(x-b)*d,l=(y-b)*d),s>l||a>o||((a>s||isNaN(s))&&(s=a),(l<o||isNaN(o))&&(o=l),p>=0?(c=(M-m)*p,h=(E-m)*p):(c=(E-m)*p,h=(M-m)*p),s>h||c>o)?!1:((c>s||s!==s)&&(s=c),(h<o||o!==o)&&(o=h),s<=i&&o>=n)}function Kv(r,e,t,n,i,s,o,a){const{geometry:l,_indirectBuffer:c}=r;for(let h=n,u=n+i;h<u;h++){let d=c?c[h]:h;ea(l,e,t,d,s,o,a)}}function Jv(r,e,t,n,i,s,o){const{geometry:a,_indirectBuffer:l}=r;let c=1/0,h=null;for(let u=n,d=n+i;u<d;u++){let p;p=ea(a,e,t,l?l[u]:u,null,s,o),p&&p.distance<c&&(h=p,c=p.distance)}return h}function Zv(r,e,t,n,i,s,o){const{geometry:a}=t,{index:l}=a,c=a.attributes.position;for(let h=r,u=e+r;h<u;h++){let d;if(d=t.resolveTriangleIndex(h),Tt(o,d*3,l,c),o.needsUpdate=!0,n(o,d,i,s))return!0}return!1}function Qv(r,e,t,n,i,s,o){ft.setBuffer(r._roots[e]),ic(0,r,t,n,i,s,o),ft.clearBuffer()}function ic(r,e,t,n,i,s,o){const{float32Array:a,uint16Array:l,uint32Array:c}=ft,h=r*2;if(tn(h,l)){const d=an(r,c),p=mn(h,l);jv(e,t,n,d,p,i,s,o)}else{const d=gn(r);yi(d,a,n,s,o)&&ic(d,e,t,n,i,s,o);const p=_n(r,c);yi(p,a,n,s,o)&&ic(p,e,t,n,i,s,o)}}const e0=["x","y","z"];function t0(r,e,t,n,i,s){ft.setBuffer(r._roots[e]);const o=sc(0,r,t,n,i,s);return ft.clearBuffer(),o}function sc(r,e,t,n,i,s){const{float32Array:o,uint16Array:a,uint32Array:l}=ft;let c=r*2;if(tn(c,a)){const u=an(r,l),d=mn(c,a);return qv(e,t,n,u,d,i,s)}else{const u=Kd(r,l),d=e0[u],g=n.direction[d]>=0;let b,m;g?(b=gn(r),m=_n(r,l)):(b=_n(r,l),m=gn(r));const _=yi(b,o,n,i,s)?sc(b,e,t,n,i,s):null;if(_){const M=_.point[d];if(g?M<=o[m+u]:M>=o[m+u+3])return _}const x=yi(m,o,n,i,s)?sc(m,e,t,n,i,s):null;return _&&x?_.distance<=x.distance?_:x:_||x||null}}const ho=new Ce,hs=new Pn,us=new Pn,tr=new ve,Su=new Zt,uo=new Zt;function n0(r,e,t,n){ft.setBuffer(r._roots[e]);const i=rc(0,r,t,n);return ft.clearBuffer(),i}function rc(r,e,t,n,i=null){const{float32Array:s,uint16Array:o,uint32Array:a}=ft;let l=r*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Su.set(t.boundingBox.min,t.boundingBox.max,n),i=Su),tn(l,o)){const h=e.geometry,u=h.index,d=h.attributes.position,p=t.index,g=t.attributes.position,b=an(r,a),m=mn(l,o);if(tr.copy(n).invert(),t.boundsTree)return bt(r,s,uo),uo.matrix.copy(tr),uo.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:_=>uo.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(n),_.b.applyMatrix4(n),_.c.applyMatrix4(n),_.needsUpdate=!0;for(let y=b*3,x=(m+b)*3;y<x;y+=3)if(Tt(us,y,u,d),us.needsUpdate=!0,_.intersectsTriangle(us))return!0;return!1}});for(let f=b*3,_=(m+b)*3;f<_;f+=3){Tt(hs,f,u,d),hs.a.applyMatrix4(tr),hs.b.applyMatrix4(tr),hs.c.applyMatrix4(tr),hs.needsUpdate=!0;for(let y=0,x=p.count;y<x;y+=3)if(Tt(us,y,p,g),us.needsUpdate=!0,hs.intersectsTriangle(us))return!0}}else{const h=r+8,u=a[r+6];return bt(h,s,ho),!!(i.intersectsBox(ho)&&rc(h,e,t,n,i)||(bt(u,s,ho),i.intersectsBox(ho)&&rc(u,e,t,n,i)))}}const fo=new ve,Ja=new Zt,nr=new Zt,i0=new A,s0=new A,r0=new A,o0=new A;function a0(r,e,t,n={},i={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Ja.set(e.boundingBox.min,e.boundingBox.max,t),Ja.needsUpdate=!0;const a=r.geometry,l=a.attributes.position,c=a.index,h=e.attributes.position,u=e.index,d=bn.getPrimitive(),p=bn.getPrimitive();let g=i0,b=s0,m=null,f=null;i&&(m=r0,f=o0);let _=1/0,y=null,x=null;return fo.copy(t).invert(),nr.matrix.copy(fo),r.shapecast({boundsTraverseOrder:M=>Ja.distanceToBox(M),intersectsBounds:(M,E,w)=>w<_&&w<o?(E&&(nr.min.copy(M.min),nr.max.copy(M.max),nr.needsUpdate=!0),!0):!1,intersectsRange:(M,E)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:T=>nr.distanceToBox(T),intersectsBounds:(T,S,v)=>v<_&&v<o,intersectsRange:(T,S)=>{for(let v=T,P=T+S;v<P;v++){Tt(p,3*v,u,h),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let I=M,D=M+E;I<D;I++){Tt(d,3*I,c,l),d.needsUpdate=!0;const N=d.distanceToTriangle(p,g,m);if(N<_&&(b.copy(g),f&&f.copy(m),_=N,y=I,x=v),N<s)return!0}}}});{const w=zs(e);for(let T=0,S=w;T<S;T++){Tt(p,3*T,u,h),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let v=M,P=M+E;v<P;v++){Tt(d,3*v,c,l),d.needsUpdate=!0;const I=d.distanceToTriangle(p,g,m);if(I<_&&(b.copy(g),f&&f.copy(m),_=I,y=v,x=T),I<s)return!0}}}}}),bn.releasePrimitive(d),bn.releasePrimitive(p),_===1/0?null:(n.point?n.point.copy(b):n.point=b.clone(),n.distance=_,n.faceIndex=y,i&&(i.point?i.point.copy(f):i.point=f.clone(),i.point.applyMatrix4(fo),b.applyMatrix4(fo),i.distance=b.sub(i.point).length(),i.faceIndex=x),n)}function l0(r,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=r.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let s,o,a,l,c=0;const h=r._roots;for(let d=0,p=h.length;d<p;d++)s=h[d],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),u(0,c),c+=s.byteLength;function u(d,p,g=!1){const b=d*2;if(a[b+15]===Qo){const f=o[d+6],_=a[b+14];let y=1/0,x=1/0,M=1/0,E=-1/0,w=-1/0,T=-1/0;for(let S=f,v=f+_;S<v;S++){const P=3*r.resolveTriangleIndex(S);for(let I=0;I<3;I++){let D=P+I;D=n?n[D]:D;const N=i.getX(D),z=i.getY(D),k=i.getZ(D);N<y&&(y=N),N>E&&(E=N),z<x&&(x=z),z>w&&(w=z),k<M&&(M=k),k>T&&(T=k)}}return l[d+0]!==y||l[d+1]!==x||l[d+2]!==M||l[d+3]!==E||l[d+4]!==w||l[d+5]!==T?(l[d+0]=y,l[d+1]=x,l[d+2]=M,l[d+3]=E,l[d+4]=w,l[d+5]=T,!0):!1}else{const f=d+8,_=o[d+6],y=f+p,x=_+p;let M=g,E=!1,w=!1;e?M||(E=e.has(y),w=e.has(x),M=!E&&!w):(E=!0,w=!0);const T=M||E,S=M||w;let v=!1;T&&(v=u(f,p,M));let P=!1;S&&(P=u(_,p,M));const I=v||P;if(I)for(let D=0;D<3;D++){const N=f+D,z=_+D,k=l[N],j=l[N+3],W=l[z],Q=l[z+3];l[d+D]=k<W?k:W,l[d+D+3]=j>Q?j:Q}return I}}}function c0(r,e,t,n,i,s,o){ft.setBuffer(r._roots[e]),oc(0,r,t,n,i,s,o),ft.clearBuffer()}function oc(r,e,t,n,i,s,o){const{float32Array:a,uint16Array:l,uint32Array:c}=ft,h=r*2;if(tn(h,l)){const d=an(r,c),p=mn(h,l);Kv(e,t,n,d,p,i,s,o)}else{const d=gn(r);yi(d,a,n,s,o)&&oc(d,e,t,n,i,s,o);const p=_n(r,c);yi(p,a,n,s,o)&&oc(p,e,t,n,i,s,o)}}const h0=["x","y","z"];function u0(r,e,t,n,i,s){ft.setBuffer(r._roots[e]);const o=ac(0,r,t,n,i,s);return ft.clearBuffer(),o}function ac(r,e,t,n,i,s){const{float32Array:o,uint16Array:a,uint32Array:l}=ft;let c=r*2;if(tn(c,a)){const u=an(r,l),d=mn(c,a);return Jv(e,t,n,u,d,i,s)}else{const u=Kd(r,l),d=h0[u],g=n.direction[d]>=0;let b,m;g?(b=gn(r),m=_n(r,l)):(b=_n(r,l),m=gn(r));const _=yi(b,o,n,i,s)?ac(b,e,t,n,i,s):null;if(_){const M=_.point[d];if(g?M<=o[m+u]:M>=o[m+u+3])return _}const x=yi(m,o,n,i,s)?ac(m,e,t,n,i,s):null;return _&&x?_.distance<=x.distance?_:x:_||x||null}}const po=new Ce,ds=new Pn,fs=new Pn,ir=new ve,wu=new Zt,mo=new Zt;function d0(r,e,t,n){ft.setBuffer(r._roots[e]);const i=lc(0,r,t,n);return ft.clearBuffer(),i}function lc(r,e,t,n,i=null){const{float32Array:s,uint16Array:o,uint32Array:a}=ft;let l=r*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),wu.set(t.boundingBox.min,t.boundingBox.max,n),i=wu),tn(l,o)){const h=e.geometry,u=h.index,d=h.attributes.position,p=t.index,g=t.attributes.position,b=an(r,a),m=mn(l,o);if(ir.copy(n).invert(),t.boundsTree)return bt(r,s,mo),mo.matrix.copy(ir),mo.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:_=>mo.intersectsBox(_),intersectsTriangle:_=>{_.a.applyMatrix4(n),_.b.applyMatrix4(n),_.c.applyMatrix4(n),_.needsUpdate=!0;for(let y=b,x=m+b;y<x;y++)if(Tt(fs,3*e.resolveTriangleIndex(y),u,d),fs.needsUpdate=!0,_.intersectsTriangle(fs))return!0;return!1}});for(let f=b,_=m+b;f<_;f++){const y=e.resolveTriangleIndex(f);Tt(ds,3*y,u,d),ds.a.applyMatrix4(ir),ds.b.applyMatrix4(ir),ds.c.applyMatrix4(ir),ds.needsUpdate=!0;for(let x=0,M=p.count;x<M;x+=3)if(Tt(fs,x,p,g),fs.needsUpdate=!0,ds.intersectsTriangle(fs))return!0}}else{const h=r+8,u=a[r+6];return bt(h,s,po),!!(i.intersectsBox(po)&&lc(h,e,t,n,i)||(bt(u,s,po),i.intersectsBox(po)&&lc(u,e,t,n,i)))}}const go=new ve,Za=new Zt,sr=new Zt,f0=new A,p0=new A,m0=new A,g0=new A;function _0(r,e,t,n={},i={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Za.set(e.boundingBox.min,e.boundingBox.max,t),Za.needsUpdate=!0;const a=r.geometry,l=a.attributes.position,c=a.index,h=e.attributes.position,u=e.index,d=bn.getPrimitive(),p=bn.getPrimitive();let g=f0,b=p0,m=null,f=null;i&&(m=m0,f=g0);let _=1/0,y=null,x=null;return go.copy(t).invert(),sr.matrix.copy(go),r.shapecast({boundsTraverseOrder:M=>Za.distanceToBox(M),intersectsBounds:(M,E,w)=>w<_&&w<o?(E&&(sr.min.copy(M.min),sr.max.copy(M.max),sr.needsUpdate=!0),!0):!1,intersectsRange:(M,E)=>{if(e.boundsTree){const w=e.boundsTree;return w.shapecast({boundsTraverseOrder:T=>sr.distanceToBox(T),intersectsBounds:(T,S,v)=>v<_&&v<o,intersectsRange:(T,S)=>{for(let v=T,P=T+S;v<P;v++){const I=w.resolveTriangleIndex(v);Tt(p,3*I,u,h),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let D=M,N=M+E;D<N;D++){const z=r.resolveTriangleIndex(D);Tt(d,3*z,c,l),d.needsUpdate=!0;const k=d.distanceToTriangle(p,g,m);if(k<_&&(b.copy(g),f&&f.copy(m),_=k,y=D,x=v),k<s)return!0}}}})}else{const w=zs(e);for(let T=0,S=w;T<S;T++){Tt(p,3*T,u,h),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let v=M,P=M+E;v<P;v++){const I=r.resolveTriangleIndex(v);Tt(d,3*I,c,l),d.needsUpdate=!0;const D=d.distanceToTriangle(p,g,m);if(D<_&&(b.copy(g),f&&f.copy(m),_=D,y=v,x=T),D<s)return!0}}}}}),bn.releasePrimitive(d),bn.releasePrimitive(p),_===1/0?null:(n.point?n.point.copy(b):n.point=b.clone(),n.distance=_,n.faceIndex=y,i&&(i.point?i.point.copy(f):i.point=f.clone(),i.point.applyMatrix4(go),b.applyMatrix4(go),i.distance=b.sub(i.point).length(),i.faceIndex=x),n)}function b0(){return typeof SharedArrayBuffer<"u"}const fr=new ft.constructor,Go=new ft.constructor,fi=new Ic(()=>new Ce),ps=new Ce,ms=new Ce,Qa=new Ce,el=new Ce;let tl=!1;function x0(r,e,t,n){if(tl)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");tl=!0;const i=r._roots,s=e._roots;let o,a=0,l=0;const c=new ve().copy(t).invert();for(let h=0,u=i.length;h<u;h++){fr.setBuffer(i[h]),l=0;const d=fi.getPrimitive();bt(0,fr.float32Array,d),d.applyMatrix4(c);for(let p=0,g=s.length;p<g&&(Go.setBuffer(s[p]),o=En(0,0,t,c,n,a,l,0,0,d),Go.clearBuffer(),l+=s[p].length,!o);p++);if(fi.releasePrimitive(d),fr.clearBuffer(),a+=i[h].length,o)break}return tl=!1,o}function En(r,e,t,n,i,s=0,o=0,a=0,l=0,c=null,h=!1){let u,d;h?(u=Go,d=fr):(u=fr,d=Go);const p=u.float32Array,g=u.uint32Array,b=u.uint16Array,m=d.float32Array,f=d.uint32Array,_=d.uint16Array,y=r*2,x=e*2,M=tn(y,b),E=tn(x,_);let w=!1;if(E&&M)h?w=i(an(e,f),mn(e*2,_),an(r,g),mn(r*2,b),l,o+e,a,s+r):w=i(an(r,g),mn(r*2,b),an(e,f),mn(e*2,_),a,s+r,l,o+e);else if(E){const T=fi.getPrimitive();bt(e,m,T),T.applyMatrix4(t);const S=gn(r),v=_n(r,g);bt(S,p,ps),bt(v,p,ms);const P=T.intersectsBox(ps),I=T.intersectsBox(ms);w=P&&En(e,S,n,t,i,o,s,l,a+1,T,!h)||I&&En(e,v,n,t,i,o,s,l,a+1,T,!h),fi.releasePrimitive(T)}else{const T=gn(e),S=_n(e,f);bt(T,m,Qa),bt(S,m,el);const v=c.intersectsBox(Qa),P=c.intersectsBox(el);if(v&&P)w=En(r,T,t,n,i,s,o,a,l+1,c,h)||En(r,S,t,n,i,s,o,a,l+1,c,h);else if(v)if(M)w=En(r,T,t,n,i,s,o,a,l+1,c,h);else{const I=fi.getPrimitive();I.copy(Qa).applyMatrix4(t);const D=gn(r),N=_n(r,g);bt(D,p,ps),bt(N,p,ms);const z=I.intersectsBox(ps),k=I.intersectsBox(ms);w=z&&En(T,D,n,t,i,o,s,l,a+1,I,!h)||k&&En(T,N,n,t,i,o,s,l,a+1,I,!h),fi.releasePrimitive(I)}else if(P)if(M)w=En(r,S,t,n,i,s,o,a,l+1,c,h);else{const I=fi.getPrimitive();I.copy(el).applyMatrix4(t);const D=gn(r),N=_n(r,g);bt(D,p,ps),bt(N,p,ms);const z=I.intersectsBox(ps),k=I.intersectsBox(ms);w=z&&En(S,D,n,t,i,o,s,l,a+1,I,!h)||k&&En(S,N,n,t,i,o,s,l,a+1,I,!h),fi.releasePrimitive(I)}}return w}const _o=new Zt,Eu=new Ce,y0={strategy:qd,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class ta{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,i=e._roots,s=e._indirectBuffer,o=n.getIndex();let a;return t.cloneBuffers?a={roots:i.map(l=>l.slice()),index:o?o.array.slice():null,indirectBuffer:s?s.slice():null}:a={roots:i,index:o?o.array:null,indirectBuffer:s},a}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:i,roots:s,indirectBuffer:o}=e,a=new ta(t,{...n,[ja]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){const l=t.getIndex();if(l===null){const c=new dt(e.index,1,!1);t.setIndex(c)}else l.array!==i&&(l.array.set(i),l.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...y0,[ja]:!1},t),t.useSharedArrayBuffer&&!b0())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[ja]||(Fv(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Ce))),this.resolveTriangleIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n}refit(e=null){return(this.indirect?l0:$v)(this,e)}traverse(e,t=0){const n=this._roots[t],i=new Uint32Array(n),s=new Uint16Array(n);o(0);function o(a,l=0){const c=a*2,h=s[c+15]===Qo;if(h){const u=i[a+6],d=s[c+14];e(l,h,new Float32Array(n,a*4,6),u,d)}else{const u=a+dr/4,d=i[a+6],p=i[a+7];e(l,h,new Float32Array(n,a*4,6),p)||(o(u,l+1),o(d,l+1))}}}raycast(e,t=xn,n=0,i=1/0){const s=this._roots,o=this.geometry,a=[],l=t.isMaterial,c=Array.isArray(t),h=o.groups,u=l?t.side:t,d=this.indirect?c0:Qv;for(let p=0,g=s.length;p<g;p++){const b=c?t[h[p].materialIndex].side:u,m=a.length;if(d(this,p,b,e,a,n,i),c){const f=h[p].materialIndex;for(let _=m,y=a.length;_<y;_++)a[_].face.materialIndex=f}}return a}raycastFirst(e,t=xn,n=0,i=1/0){const s=this._roots,o=this.geometry,a=t.isMaterial,l=Array.isArray(t);let c=null;const h=o.groups,u=a?t.side:t,d=this.indirect?u0:t0;for(let p=0,g=s.length;p<g;p++){const b=l?t[h[p].materialIndex].side:u,m=d(this,p,b,e,n,i);m!=null&&(c==null||m.distance<c.distance)&&(c=m,l&&(m.face.materialIndex=h[p].materialIndex))}return c}intersectsGeometry(e,t){let n=!1;const i=this._roots,s=this.indirect?d0:n0;for(let o=0,a=i.length;o<a&&(n=s(this,o,e,t),!n);o++);return n}shapecast(e){const t=bn.getPrimitive(),n=this.indirect?Zv:Yv;let{boundsTraverseOrder:i,intersectsBounds:s,intersectsRange:o,intersectsTriangle:a}=e;if(o&&a){const u=o;o=(d,p,g,b,m)=>u(d,p,g,b,m)?!0:n(d,p,this,a,g,b,t)}else o||(a?o=(u,d,p,g)=>n(u,d,this,a,p,g,t):o=(u,d,p)=>p);let l=!1,c=0;const h=this._roots;for(let u=0,d=h.length;u<d;u++){const p=h[u];if(l=Hv(this,u,s,o,i,c),l)break;c+=p.byteLength}return bn.releasePrimitive(t),l}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:s}=n;const o=bn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?g=>{const b=this.resolveTriangleIndex(g);Tt(o,b*3,a,l)}:g=>{Tt(o,g*3,a,l)},h=bn.getPrimitive(),u=e.geometry.index,d=e.geometry.attributes.position,p=e.indirect?g=>{const b=e.resolveTriangleIndex(g);Tt(h,b*3,u,d)}:g=>{Tt(h,g*3,u,d)};if(s){const g=(b,m,f,_,y,x,M,E)=>{for(let w=f,T=f+_;w<T;w++){p(w),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let S=b,v=b+m;S<v;S++)if(c(S),o.needsUpdate=!0,s(o,h,S,w,y,x,M,E))return!0}return!1};if(i){const b=i;i=function(m,f,_,y,x,M,E,w){return b(m,f,_,y,x,M,E,w)?!0:g(m,f,_,y,x,M,E,w)}}else i=g}return x0(this,e,t,i)}intersectsBox(e,t){return _o.set(e.min,e.max,t),_o.needsUpdate=!0,this.shapecast({intersectsBounds:n=>_o.intersectsBox(n),intersectsTriangle:n=>_o.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},s=0,o=1/0){return(this.indirect?_0:a0)(this,e,t,n,i,s,o)}closestPointToPoint(e,t={},n=0,i=1/0){return Gv(this,e,t,n,i)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{bt(0,new Float32Array(n),Eu),e.union(Eu)}),e}}const Au=new Ce,Tu=new ve;class v0 extends st{get isMesh(){return!this.displayEdges}get isLineSegments(){return this.displayEdges}get isLine(){return this.displayEdges}getVertexPosition(...e){return he.prototype.getVertexPosition.call(this,...e)}constructor(e,t,n=10,i=0){super(),this.material=t,this.geometry=new rt,this.name="MeshBVHRootHelper",this.depth=n,this.displayParents=!1,this.bvh=e,this.displayEdges=!0,this._group=i}raycast(){}update(){const e=this.geometry,t=this.bvh,n=this._group;if(e.dispose(),this.visible=!1,t){const i=this.depth-1,s=this.displayParents;let o=0;t.traverse((d,p)=>{if(d>=i||p)return o++,!0;s&&o++},n);let a=0;const l=new Float32Array(24*o);t.traverse((d,p,g)=>{const b=d>=i||p;if(b||s){bt(0,g,Au);const{min:m,max:f}=Au;for(let _=-1;_<=1;_+=2){const y=_<0?m.x:f.x;for(let x=-1;x<=1;x+=2){const M=x<0?m.y:f.y;for(let E=-1;E<=1;E+=2){const w=E<0?m.z:f.z;l[a+0]=y,l[a+1]=M,l[a+2]=w,a+=3}}}return b}},n);let c,h;this.displayEdges?h=new Uint8Array([0,4,1,5,2,6,3,7,0,2,1,3,4,6,5,7,0,1,2,3,4,5,6,7]):h=new Uint8Array([0,1,2,2,1,3,4,6,5,6,7,5,1,4,5,0,4,1,2,3,6,3,7,6,0,2,4,2,6,4,1,5,3,3,5,7]),l.length>65535?c=new Uint32Array(h.length*o):c=new Uint16Array(h.length*o);const u=h.length;for(let d=0;d<o;d++){const p=d*8,g=d*u;for(let b=0;b<u;b++)c[g+b]=p+h[b]}e.setIndex(new dt(c,1,!1)),e.setAttribute("position",new dt(l,3,!1)),this.visible=!0}}}class Dc extends gt{get color(){return this.edgeMaterial.color}get opacity(){return this.edgeMaterial.opacity}set opacity(e){this.edgeMaterial.opacity=e,this.meshMaterial.opacity=e}constructor(e=null,t=null,n=10){e instanceof ta&&(n=t||10,t=e,e=null),typeof t=="number"&&(n=t,t=null),super(),this.name="MeshBVHHelper",this.depth=n,this.mesh=e,this.bvh=t,this.displayParents=!1,this.displayEdges=!0,this.objectIndex=0,this._roots=[];const i=new vi({color:65416,transparent:!0,opacity:.3,depthWrite:!1}),s=new Be({color:65416,transparent:!0,opacity:.3,depthWrite:!1});s.color=i.color,this.edgeMaterial=i,this.meshMaterial=s,this.update()}update(){const e=this.mesh;let t=this.bvh||e.geometry.boundsTree||null;if(e.isBatchedMesh&&e.boundsTrees&&!t){const i=e._drawInfo[this.objectIndex];i&&(t=e.boundsTrees[i.geometryIndex]||t)}const n=t?t._roots.length:0;for(;this._roots.length>n;){const i=this._roots.pop();i.geometry.dispose(),this.remove(i)}for(let i=0;i<n;i++){const{depth:s,edgeMaterial:o,meshMaterial:a,displayParents:l,displayEdges:c}=this;if(i>=this._roots.length){const u=new v0(t,o,s,i);this.add(u),this._roots.push(u)}const h=this._roots[i];h.bvh=t,h.depth=s,h.displayParents=l,h.displayEdges=c,h.material=c?o:a,h.update()}}updateMatrixWorld(...e){const t=this.mesh,n=this.parent;t!==null&&(t.updateWorldMatrix(!0,!1),n?this.matrix.copy(n.matrixWorld).invert().multiply(t.matrixWorld):this.matrix.copy(t.matrixWorld),(t.isInstancedMesh||t.isBatchedMesh)&&(t.getMatrixAt(this.objectIndex,Tu),this.matrix.multiply(Tu)),this.matrix.decompose(this.position,this.quaternion,this.scale)),super.updateMatrixWorld(...e)}copy(e){this.depth=e.depth,this.mesh=e.mesh,this.bvh=e.bvh,this.opacity=e.opacity,this.color.copy(e.color)}clone(){return new Dc(this.mesh,this.bvh,this.depth)}dispose(){this.edgeMaterial.dispose(),this.meshMaterial.dispose();const e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].geometry.dispose()}}function Cu(r,e,t){return r===null?null:(r.point.applyMatrix4(e.matrixWorld),r.distance=r.point.distanceTo(t.ray.origin),r.object=e,r)}const bo=new Us,Ru=new A,Pu=new ve,M0=he.prototype.raycast,S0=tm.prototype.raycast,Lu=new A,Ut=new he,xo=[];function w0(r,e){this.isBatchedMesh?E0.call(this,r,e):A0.call(this,r,e)}function E0(r,e){if(this.boundsTrees){const t=this.boundsTrees,n=this._drawInfo||this._instanceInfo,i=this._drawRanges||this._geometryInfo,s=this.matrixWorld;Ut.material=this.material,Ut.geometry=this.geometry;const o=Ut.geometry.boundsTree,a=Ut.geometry.drawRange;Ut.geometry.boundingSphere===null&&(Ut.geometry.boundingSphere=new Xt);for(let l=0,c=n.length;l<c;l++){if(!this.getVisibleAt(l))continue;const h=n[l].geometryIndex;if(Ut.geometry.boundsTree=t[h],this.getMatrixAt(l,Ut.matrixWorld).premultiply(s),!Ut.geometry.boundsTree){this.getBoundingBoxAt(h,Ut.geometry.boundingBox),this.getBoundingSphereAt(h,Ut.geometry.boundingSphere);const u=i[h];Ut.geometry.setDrawRange(u.start,u.count)}Ut.raycast(r,xo);for(let u=0,d=xo.length;u<d;u++){const p=xo[u];p.object=this,p.batchId=l,e.push(p)}xo.length=0}Ut.geometry.boundsTree=o,Ut.geometry.drawRange=a,Ut.material=null,Ut.geometry=null}else S0.call(this,r,e)}function A0(r,e){if(this.geometry.boundsTree){if(this.material===void 0)return;Pu.copy(this.matrixWorld).invert(),bo.copy(r.ray).applyMatrix4(Pu),Lu.setFromMatrixScale(this.matrixWorld),Ru.copy(bo.direction).multiply(Lu);const t=Ru.length(),n=r.near/t,i=r.far/t,s=this.geometry.boundsTree;if(r.firstHitOnly===!0){const o=Cu(s.raycastFirst(bo,this.material,n,i),this,r);o&&e.push(o)}else{const o=s.raycast(bo,this.material,n,i);for(let a=0,l=o.length;a<l;a++){const c=Cu(o[a],this,r);c&&e.push(c)}}}else M0.call(this,r,e)}function T0(r={}){return this.boundsTree=new ta(this,r),this.boundsTree}function C0(){this.boundsTree=null}he.prototype.raycast=w0;rt.prototype.computeBoundsTree=T0;rt.prototype.disposeBoundsTree=C0;class R0{constructor(e={}){this.playerConfig=e,this.ready=!1,this.colliders=[],this.radius=e.colliderRadius??.28,this.skin=.02,this.stepHeight=e.stepHeight??.4,this.groundMaxSlopeDot=Math.cos(Mt.degToRad(e.maxWalkSlopeDeg??50)),this.eyeHeight=e.eyeHeight??1.6,this.raycaster=new Vi,this.raycaster.firstHitOnly=!0,this._origin=new A,this._dir=new A,this._tmp=new A,this._slide=new A,this._hitPoint=new A,this._normal=new A,this._debugHelperRoot=null}buildFromObject(e,{showDebug:t=!1,scene:n=null}={}){if(this.dispose(n),this.colliders=[],!e)return this.ready=!1,!1;e.updateWorldMatrix(!0,!0);let i=0,s=0;if(e.traverse(o=>{var a;if(!(!o.isMesh||!o.geometry)&&!(o.name==="NavMesh"||o.name==="NavMeshHit")&&!((a=o.userData)!=null&&a.skipCollision))try{o.geometry.boundsTree||o.geometry.computeBoundsTree({maxLeafTris:10}),o.updateWorldMatrix(!0,!1),this.colliders.push(o),i+=1;const l=o.geometry.attributes.position;l&&(s+=Math.floor(l.count/3))}catch(l){console.warn("[MeshCollision] BVH failed for",o.name,l)}}),this.ready=this.colliders.length>0,console.info(`[MeshCollision] Ready: ${i} mesh(es), ~${s} tris (BVH)`),t&&n){this._debugHelperRoot=new gt,this._debugHelperRoot.name="MeshCollisionDebug";const o=8;for(let a=0;a<Math.min(o,this.colliders.length);a+=1){const l=new Dc(this.colliders[a],10);l.opacity=.25,l.color.set(16737928),this._debugHelperRoot.add(l)}n.add(this._debugHelperRoot)}return this.ready}refreshMatrices(){for(const e of this.colliders)e.updateWorldMatrix(!0,!1)}addCollider(e){var t;if(!(e!=null&&e.isMesh)||!e.geometry||(t=e.userData)!=null&&t.skipCollision)return!1;try{return e.geometry.boundsTree||e.geometry.computeBoundsTree({maxLeafTris:10}),e.updateWorldMatrix(!0,!1),this.colliders.includes(e)||this.colliders.push(e),this.ready=this.colliders.length>0,!0}catch(n){return console.warn("[MeshCollision] addCollider failed for",e.name,n),!1}}move(e,t,n){if(!this.ready)return n.copy(e).add(t),!1;this.refreshMatrices(),n.copy(e);const i=this._tmp.set(t.x,0,t.z),s=i.length();return s>1e-8&&this._moveHorizontal(n,i,s),this._snapGround(n),!0}getGroundAt(e,t=new A,n={}){var b;if(!this.ready)return null;this.refreshMatrices();const i=n.maxStepUp??this.stepHeight,s=n.maxDrop??2.5,o=e.y+i+.4,a=i+s+.6;this._origin.set(e.x,o,e.z),this._dir.set(0,-1,0),this.raycaster.set(this._origin,this._dir),this.raycaster.far=a,this.raycaster.near=0;const l=this.raycaster.firstHitOnly;this.raycaster.firstHitOnly=!1;const c=this.raycaster.intersectObjects(this.colliders,!1);this.raycaster.firstHitOnly=l;let h=null,u=1/0,d=!1;const p=e.y-s,g=e.y+i;for(const m of c){if(!m.face||(this._normal.copy(m.face.normal).transformDirection(m.object.matrixWorld).normalize(),this._normal.y<this.groundMaxSlopeDot))continue;const f=m.point.y;if(f<p||f>g)continue;const _=Math.abs(f-e.y),y=!!((b=m.object.userData)!=null&&b.isStairRamp);(!h||y&&!d&&_<=u+.35||y===d&&_<u||!y&&d&&_<u-.35)&&(u=_,h=m.point,d=y)}return h?(t.copy(h),t):null}getSpawnPosition(e=new A(0,0,0)){const t=[e.clone()],n=[.25,.75,1.5,3,5,8],i=12;for(const c of n)for(let h=0;h<i;h+=1){const u=h/i*Math.PI*2;t.push(new A(e.x+Math.cos(u)*c,e.y,e.z+Math.sin(u)*c))}let s=null,o=1/0;for(const c of t){const h=this._allGroundHits(c.x,c.z,e.y);for(const u of h){const d=Math.hypot(u.x-e.x,u.z-e.z),p=u.y*8+d*.35;p<o&&(o=p,s=u)}}if(s)return s.clone();const a=this._allGroundHits(e.x,e.z,e.y);if(a.length)return a.sort((c,h)=>c.y-h.y),a[0].clone();const l=this.getGroundAt(new A(e.x,e.y+2,e.z));return l?l.clone():e.clone()}raycastWalkable(e,t,n,i=new A){if(!this.ready)return null;this.refreshMatrices(),this.raycaster.set(e,t.clone().normalize()),this.raycaster.far=n,this.raycaster.near=.05;const s=this.raycaster.intersectObjects(this.colliders,!1);for(const o of s)if(o.face&&(this._normal.copy(o.face.normal).transformDirection(o.object.matrixWorld).normalize(),!(this._normal.y<this.groundMaxSlopeDot)))return i.copy(o.point),i;return null}dispose(e=null){var t;this._debugHelperRoot&&e&&(e.remove(this._debugHelperRoot),this._debugHelperRoot=null);for(const n of this.colliders)(t=n.geometry)!=null&&t.boundsTree&&n.geometry.disposeBoundsTree();this.colliders=[],this.ready=!1}_moveHorizontal(e,t,n){const i=t.clone().normalize();let s=n;const o=this.radius;for(let a=0;a<2&&s>1e-5;a+=1){const l=this._wallProbe(e,i,s+o);if(!l){e.x+=i.x*s,e.z+=i.z*s;return}const c=Math.max(0,l.distance-o-this.skin);c>0&&(e.x+=i.x*c,e.z+=i.z*c,s-=c);const h=l.normal;if(h.y=0,h.lengthSq()<1e-6)break;h.normalize();const u=i.dot(h);if(u>=0||(i.addScaledVector(h,-u),i.y=0,i.lengthSq()<1e-6))break;i.normalize(),s*=.95}}_wallProbe(e,t,n){var o,a,l;const i=[this.radius+.05,Math.min(this.eyeHeight*.5,.9),Math.min(this.eyeHeight*.85,1.5)];let s=null;for(const c of i){this._origin.set(e.x,e.y+c,e.z),this.raycaster.set(this._origin,t),this.raycaster.far=n,this.raycaster.near=0;const h=this.raycaster.intersectObjects(this.colliders,!1);for(const u of h)if(u.face&&!((o=u.object.userData)!=null&&o.isStairRamp||(a=u.object.userData)!=null&&a.isStairSource||(l=u.object.userData)!=null&&l.skipCollision)&&(this._normal.copy(u.face.normal).transformDirection(u.object.matrixWorld).normalize(),!(this._normal.y>.55))){(!s||u.distance<s.distance)&&(s={distance:u.distance,point:u.point.clone(),normal:this._normal.clone()});break}}return s}_snapGround(e){const t=this.getGroundAt(e,this._hitPoint,{maxStepUp:this.stepHeight,maxDrop:1.5});t&&(e.y=t.y)}_allGroundHits(e,t,n){const i=[];this._origin.set(e,n+25,t),this._dir.set(0,-1,0),this.raycaster.set(this._origin,this._dir),this.raycaster.far=60,this.raycaster.near=0;const s=this.raycaster.firstHitOnly;this.raycaster.firstHitOnly=!1;const o=this.raycaster.intersectObjects(this.colliders,!1);this.raycaster.firstHitOnly=s;for(const a of o)a.face&&(this._normal.copy(a.face.normal).transformDirection(a.object.matrixWorld).normalize(),!(this._normal.y<this.groundMaxSlopeDot)&&i.push(a.point.clone()));return i}}function Iu({bottom:r,top:e,width:t,yBias:n=.03,debug:i=!1}){const s=r.clone(),o=e.clone();s.y+=n,o.y+=n;const a=s.clone().add(o).multiplyScalar(.5),l=o.clone().sub(s),c=Math.max(l.length(),1e-4),h=l.normalize(),u=new A(0,1,0),d=new A(h.x,0,h.z);d.lengthSq()<1e-8?d.set(1,0,0):d.normalize();const p=new A().crossVectors(u,d).normalize(),g=new A().crossVectors(h,p).normalize();g.y<0&&(g.negate(),p.negate());const b=.08,m=new jt(t,b,c),f=new Be({color:i?16711935:65535,transparent:!0,opacity:i?.35:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,side:ut}),_=new he(m,f);_.name="StairRamp",_.userData.isStairRamp=!0,_.userData.debugColor=i?16711935:void 0,_.frustumCulled=!1;const y=new ve().makeBasis(p,g,h);return _.quaternion.setFromRotationMatrix(y),_.position.copy(a).addScaledVector(g,-b*.5),_.visible=!0,_}class P0{constructor(e,{eyeHeight:t=1.6,xrEyeBoost:n=0}={}){this.camera=e,this.eyeHeight=t,this.xrEyeBoost=n,this.root=new gt,this.root.name="PlayerRig",this.head=new gt,this.head.name="PlayerHead",this.root.add(this.head),this.camera.position.set(0,t,0),this.camera.rotation.set(0,0,0),this.head.add(e),this.yaw=0,this.pitch=0,this.renderer=null}setRenderer(e){this.renderer=e}get position(){return this.root.position}setFeetPosition(e){this.root.position.copy(e)}setLook(e,t){var n,i;this.yaw=e,this.pitch=t,!((i=(n=this.renderer)==null?void 0:n.xr)!=null&&i.isPresenting)&&(this.root.rotation.y=e,this.camera.rotation.x=t)}addYaw(e){var t,n;this.yaw+=e,(n=(t=this.renderer)==null?void 0:t.xr)!=null&&n.isPresenting?this.root.rotation.y+=e:this.root.rotation.y=this.yaw}onEnterXR(){this.head.position.set(0,this.xrEyeBoost,0),this.camera.position.set(0,0,0),this.camera.rotation.set(0,0,0)}onExitXR(){this.head.position.set(0,0,0),this.camera.position.set(0,this.eyeHeight,0),this.root.rotation.y=this.yaw,this.camera.rotation.x=this.pitch}getMoveBasis(e,t){var s,o;const n=new A(0,1,0);((o=(s=this.renderer)==null?void 0:s.xr)==null?void 0:o.isPresenting)?(this.camera.getWorldDirection(e),e.y=0,e.lengthSq()<1e-6?e.set(0,0,-1):e.normalize(),t.crossVectors(e,n).normalize()):(e.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),t.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)))}getFlyBasis(e,t){if(this.camera.getWorldDirection(e),e.lengthSq()<1e-8?e.set(0,0,-1):e.normalize(),t.set(1,0,0).transformDirection(this.camera.matrixWorld),t.y=0,t.lengthSq()<1e-6){const n=new A(0,1,0);t.crossVectors(n,e),t.y=0}t.lengthSq()<1e-6?t.set(1,0,0):t.normalize()}}class L0{constructor(e,t,n,i=null){this.rig=e,this.nav=t,this.mesh=i,this.config=n,this.mode=n.collisionMode||"auto",this.noClip=!1,this.grounded=!0,this.velocityY=0,this._head=new A,this._ceilHit=new A,this._forward=new A,this._right=new A,this._desired=new A,this._next=new A,this._from=new A,this._closest=new A,this._delta=new A,this._snapCooldown=0}setMeshCollision(e){this.mesh=e}setNoClip(e){this.noClip=!!e,this.noClip?(this.velocityY=0,this.grounded=!1):(this.velocityY=0,this.grounded=!0)}update(e,t,n,i=!1,s={}){this._applyTurn(e,n);const o=s.vertical??0,a=!!s.jumpPressed;if(this.noClip){this._updateNoClip(e,t,i,o);return}const l=this._shouldUseMesh(),c=this._shouldUseNav();if(!l&&!c)return;a&&this.grounded&&(this.velocityY=this.config.jumpSpeed??7.5,this.grounded=!1);let h=this.config.moveSpeed??2.8;i&&(h*=this.config.sprintMultiplier??1.75),this.rig.getMoveBasis(this._forward,this._right);const u=t.x,d=t.y,p=Math.abs(u)>=.12||Math.abs(d)>=.12;this._desired.set(0,0,0),p&&(this._desired.addScaledVector(this._right,u).addScaledVector(this._forward,d),this._desired.lengthSq()>1e-6&&this._desired.normalize().multiplyScalar(h*e)),this._from.copy(this.rig.position);const g=this.config.fallGravity??22;(!this.grounded||this.velocityY>0)&&(this.velocityY-=g*e);const b=this.velocityY*e;try{if(l){this._delta.set(this._desired.x,0,this._desired.z),this.mesh.move(this._from,this._delta,this._next)&&(this._next.y=this._from.y+b,b>0&&this._resolveCeilingMesh(this._next),this._resolveGroundMesh(this._next,b),this.rig.setFeetPosition(this._next));return}if(this._next.copy(this._from).add(this._desired),p){if(!this.nav.clampStep(this._from,this._next,this._next)){const m=this.nav.getClosestPoint(this._next,this._closest);if(m){const f=Math.hypot(m.x-this._from.x,m.z-this._from.z),_=this._desired.length();f>5e-4&&f<=_*2.5+.05?this._next.copy(m):this._next.copy(this._from)}else this._next.copy(this._from)}}else this._next.copy(this._from);this._next.y=this._from.y+b,this._resolveGroundNav(this._next),this.rig.setFeetPosition(this._next)}catch(m){console.warn("[Locomotion] step failed:",m)}}_updateNoClip(e,t,n,i){let s=this.config.moveSpeed??2.8;s*=this.config.flySpeedMultiplier??2.5,n&&(s*=this.config.sprintMultiplier??1.75),this.rig.getFlyBasis(this._forward,this._right),this._desired.set(0,0,0);const o=t.x,a=t.y;Math.abs(o)>=.12&&this._desired.addScaledVector(this._right,o),Math.abs(a)>=.12&&this._desired.addScaledVector(this._forward,a),this._desired.lengthSq()>1e-6&&this._desired.normalize().multiplyScalar(s*e),Math.abs(i)>=.12&&(this._desired.y+=i*s*e),!(this._desired.lengthSq()<1e-8)&&(this._from.copy(this.rig.position),this._next.copy(this._from).add(this._desired),this.rig.setFeetPosition(this._next),this.grounded=!1,this.velocityY=0)}_resolveCeilingMesh(e){var p,g;if(!((p=this.mesh)!=null&&p.ready))return;const t=this.config.eyeHeight??1.6,n=.08,i=this._head.set(e.x,e.y+t*.35,e.z),s=this.mesh;(g=s.refreshMatrices)==null||g.call(s);const o=s.raycaster;if(!o)return;const a=this._ceilHit.set(0,1,0);o.set(i,a),o.near=0,o.far=t+.5,o.firstHitOnly=!0;const l=o.intersectObjects(s.colliders||[],!1);if(!l.length)return;const c=l[0];if(!(c!=null&&c.face)||this._closest.copy(c.face.normal).transformDirection(c.object.matrixWorld).normalize().y>-.35)return;const d=c.point.y-n-t;e.y>d&&(e.y=d,this.velocityY>0&&(this.velocityY=0))}_resolveGroundMesh(e,t){var a;if(!((a=this.mesh)!=null&&a.ready)){this.grounded=!1;return}const n=this.config.stepHeight??.45,i=this.velocityY<-.5?4:1.5,s=this.mesh.getGroundAt(e,this._closest,{maxStepUp:n,maxDrop:i});if(!s){this.grounded=!1;return}const o=s.y;if(this.velocityY<=0&&e.y<=o+.12){e.y=o,this.velocityY=0,this.grounded=!0;return}if(e.y>o+.05){this.grounded=!1,this.velocityY<0&&e.y<=o+n+Math.abs(t)&&(e.y=o,this.velocityY=0,this.grounded=!0);return}o-e.y<=n&&(e.y=o,this.velocityY<0&&(this.velocityY=0),this.grounded=this.velocityY<=.01)}_resolveGroundNav(e){var n;if(!((n=this.nav)!=null&&n.ready)){this.grounded=!1;return}const t=this.nav.getClosestPoint(new A(e.x,e.y,e.z),this._closest);if(!t){this.grounded=!1;return}this.velocityY<=0&&e.y<=t.y+.1?(e.y=t.y,this.velocityY=0,this.grounded=!0):e.y>t.y+.1&&(this.grounded=!1)}_shouldUseMesh(){var e;return this.noClip||!((e=this.mesh)!=null&&e.ready)?!1:this.mode==="mesh"?!0:this.mode!=="navmesh"}_shouldUseNav(){var e;return this.noClip||!((e=this.nav)!=null&&e.ready)?!1:this.mode==="navmesh"?!0:this.mode==="mesh"?!1:!this._shouldUseMesh()}_applyTurn(e,t){const n=this.config.snapTurnDegrees??45,i=this.config.smoothTurnSpeed??0;if(i>0&&Math.abs(t.x)>.35){this.rig.addYaw(-t.x*Mt.degToRad(i)*e);return}if(this._snapCooldown=Math.max(0,this._snapCooldown-e),Math.abs(t.x)>.65&&this._snapCooldown<=0){const o=Math.sign(t.x);o!==0&&(this.rig.addYaw(-o*Mt.degToRad(n)),this._snapCooldown=.28)}}}class I0{constructor(e,t,n,i=null){this.rig=e,this.nav=t,this.mesh=i,this.config=n,this.enabled=!0,this.valid=!1,this.target=new A,this.marker=this._createMarker(),this.line=this._createLine(),this.group=new gt,this.group.name="TeleportVisuals",this.group.add(this.marker),this.group.add(this.line),this.group.visible=!1,this._raycaster=new Vi,this._origin=new A,this._dir=new A,this._quat=new Bn,this._hit=new A,this._closest=new A,this._controllers=[],this._activeIndex=-1}setMeshCollision(e){this.mesh=e}attachToScene(e){e.add(this.group)}setControllers(e){this._controllers=e;for(const t of e)t.addEventListener("selectstart",()=>{this._activeIndex=e.indexOf(t)}),t.addEventListener("selectend",()=>{this._activeIndex===e.indexOf(t)&&(this._tryTeleport(),this._activeIndex=-1,this.group.visible=!1,this.valid=!1)})}update(){var l,c;const e=!!((l=this.mesh)!=null&&l.ready),t=!!((c=this.nav)!=null&&c.ready);if(!this.enabled||!e&&!t){this.group.visible=!1;return}if(this._activeIndex<0){this.group.visible=!1,this.valid=!1;return}const n=this._controllers[this._activeIndex];if(!n)return;n.getWorldPosition(this._origin),n.getWorldQuaternion(this._quat),this._dir.set(0,0,-1).applyQuaternion(this._quat).normalize();const i=this.config.teleportMaxDistance??12;let s=null;if(e&&(s=this.mesh.raycastWalkable(this._origin,this._dir,i,this._hit)),!s&&t){this._raycaster.set(this._origin,this._dir),this._raycaster.far=i;const h=this.nav.debugMesh;if(h){const u=this._raycaster.intersectObject(h,!0);u.length>0&&(s=u[0].point)}if(s||(s=this._rayMarchNavmesh(this._origin,this._dir,i)),s){const u=this.nav.getClosestPoint(s,this._closest);u&&this.nav.isOnNavmesh(u,.5)?s=u:s=null}}if(!s){this.valid=!1,this.group.visible=!0,this.marker.visible=!1,this._updateLine(this._origin,this._origin.clone().addScaledVector(this._dir,2),!1);return}const o=this.rig.position;if(Math.hypot(s.x-o.x,s.z-o.z)>i){this.valid=!1,this.group.visible=!0,this.marker.visible=!0,this.marker.position.copy(s),this._setMarkerValid(!1),this._updateLine(this._origin,s,!1);return}this.valid=!0,this.target.copy(s),this.group.visible=!0,this.marker.visible=!0,this.marker.position.copy(s),this._setMarkerValid(!0),this._updateLine(this._origin,s,!0)}_tryTeleport(){this.valid&&this.rig.setFeetPosition(this.target)}_rayMarchNavmesh(e,t,n){const s=this._hit;for(let o=1;o<=24;o+=1){const a=o/24*n;s.copy(e).addScaledVector(t,a);const l=this.nav.getClosestPoint(s,this._closest);if(!l)continue;const c=Math.hypot(s.x-l.x,s.z-l.z),h=Math.abs(s.y-l.y);if(c<.4&&h<1.5&&l.y<=e.y+.5&&t.y<.35)return l.clone()}return null}_createMarker(){const e=new gt,t=new he(new Ko(.18,.28,32),new Be({color:5046170,side:ut,transparent:!0,opacity:.9,depthWrite:!1}));t.rotation.x=-Math.PI/2,e.add(t);const n=new he(new Ec(.16,32),new Be({color:5046170,transparent:!0,opacity:.25,depthWrite:!1,side:ut}));return n.rotation.x=-Math.PI/2,e.add(n),e.visible=!1,e}_setMarkerValid(e){const t=e?5046170:16734810;this.marker.traverse(n=>{n.isMesh&&n.material&&n.material.color.setHex(t)})}_createLine(){const e=new rt().setFromPoints([new A,new A(0,0,-1)]),t=new vi({color:5046170,transparent:!0,opacity:.85});return new Wi(e,t)}_updateLine(e,t,n){const i=this.line.geometry.attributes.position;i.setXYZ(0,e.x,e.y,e.z),i.setXYZ(1,t.x,t.y,t.z),i.needsUpdate=!0,this.line.geometry.computeBoundingSphere(),this.line.material.color.setHex(n?5046170:16734810)}}class D0{constructor(e,t,n={}){this.rig=e,this.dom=t,this.onNoClipToggle=n.onNoClipToggle||null,this.enabled=!0,this.rightMouseDown=!1,this.keys=new Set,this.moveAxes={x:0,y:0},this.vertical=0,this.lookAxes={x:0,y:0},this.sprint=!1,this.jumpPressed=!1,this._jumpLatched=!1,this.noClip=!1,this.sensitivity=.0024,this.touchLookSensitivity=.0045,this.minPitch=-Math.PI/2+.05,this.maxPitch=Math.PI/2-.05,this.didLookDrag=!1,this._lookPending=!1,this._lookPointerId=null,this._lookStartX=0,this._lookStartY=0,this._onLookDown=i=>this._lookDown(i),this._onLookMove=i=>this._lookMove(i),this._onLookUp=i=>this._lookUp(i),this._onKeyDown=i=>this._key(i,!0),this._onKeyUp=i=>this._key(i,!1),this._onMouseMove=i=>this._mouseMove(i),this._onMouseDown=i=>this._mouseDown(i),this._onMouseUp=i=>this._mouseUp(i),this._onContextMenu=i=>{var s,o;(i.target===this.dom||(o=(s=this.dom).contains)!=null&&o.call(s,i.target))&&i.preventDefault()},this._onBlur=()=>this.clearInput(),this._onVisibility=()=>{document.hidden&&this.clearInput()},window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),window.addEventListener("blur",this._onBlur),document.addEventListener("visibilitychange",this._onVisibility),document.addEventListener("mousemove",this._onMouseMove),document.addEventListener("mouseup",this._onMouseUp),this.dom.addEventListener("mousedown",this._onMouseDown),this.dom.addEventListener("contextmenu",this._onContextMenu),this.dom.addEventListener("pointerdown",this._onLookDown),this.dom.addEventListener("pointermove",this._onLookMove),window.addEventListener("pointerup",this._onLookUp),window.addEventListener("pointercancel",this._onLookUp)}setNoClip(e){this.noClip=!!e}clearInput(){this.keys.clear(),this.rightMouseDown=!1,this.didLookDrag=!1,this._lookPending=!1,this._lookPointerId=null,this.moveAxes.x=0,this.moveAxes.y=0,this.lookAxes.x=0,this.vertical=0,this.sprint=!1,this.jumpPressed=!1,this._jumpLatched=!1}dispose(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),window.removeEventListener("blur",this._onBlur),document.removeEventListener("visibilitychange",this._onVisibility),document.removeEventListener("mousemove",this._onMouseMove),document.removeEventListener("mouseup",this._onMouseUp),this.dom.removeEventListener("mousedown",this._onMouseDown),this.dom.removeEventListener("contextmenu",this._onContextMenu),this.dom.removeEventListener("pointerdown",this._onLookDown),this.dom.removeEventListener("pointermove",this._onLookMove),window.removeEventListener("pointerup",this._onLookUp),window.removeEventListener("pointercancel",this._onLookUp)}_isTextEntry(e){if(!e||!(e instanceof Element))return!1;if(e.isContentEditable)return!0;const t=e.tagName;if(t==="TEXTAREA"||t==="SELECT")return!0;if(t!=="INPUT")return!1;const n=String(e.type||"text").toLowerCase();return new Set(["text","number","search","email","url","password","tel",""]).has(n)}_shouldIgnoreMovementKeys(){var t;if(this._isTextEntry(document.activeElement))return!0;const e=document.activeElement;return!e||!(e instanceof Element)?!1:!!((t=e.closest)!=null&&t.call(e,".room-contents, .room-switcher, .skip-link, #vr-entry, .hotspot-tool, .model-panel, .lil-gui, .media-overlay, .virtual-joystick, .hint-toggle, .a11y-chrome, .a11y-tab, #a11y-settings"))}update(){var s,o;if(this.jumpPressed=!1,(o=(s=this.rig.renderer)==null?void 0:s.xr)!=null&&o.isPresenting)return this.moveAxes.x=0,this.moveAxes.y=0,this.lookAxes.x=0,this.vertical=0,this.sprint=!1,this;if(this._shouldIgnoreMovementKeys())return this.moveAxes.x=0,this.moveAxes.y=0,this.lookAxes.x=0,this.vertical=0,this.sprint=!1,this;let e=0,t=0;this.keys.has("KeyW")&&(t+=1),this.keys.has("KeyS")&&(t-=1),this.keys.has("KeyA")&&(e-=1),this.keys.has("KeyD")&&(e+=1);let n=0;this.keys.has("KeyQ")&&(n-=1),this.keys.has("KeyE")&&(n+=1);let i=0;return this.keys.has("Space")&&(i+=1),(this.keys.has("KeyC")||this.keys.has("PageDown"))&&(i-=1),this.moveAxes.x=e,this.moveAxes.y=t,this.lookAxes.x=n,this.vertical=i,this.sprint=this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),this.noClip?this._jumpLatched=!1:(this.keys.has("Space")&&!this._jumpLatched&&(this.jumpPressed=!0,this._jumpLatched=!0),this.keys.has("Space")||(this._jumpLatched=!1)),this}_key(e,t){var s;const n=e.code||"";if(!t){this.keys.delete(n);return}if(this._isTextEntry(e.target)||this._shouldIgnoreMovementKeys()||n==="ControlLeft"||n==="ControlRight"||e.key==="Control")return;if(n==="ArrowLeft"||n==="ArrowRight"||n==="ArrowUp"||n==="ArrowDown"){e.preventDefault(),this._arrowLook(n);return}if(n==="Escape"){this._shouldIgnoreMovementKeys()&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),this.clearInput(),e.preventDefault();return}if(n==="KeyW"||n==="KeyA"||n==="KeyS"||n==="KeyD"||n==="KeyQ"||n==="KeyE"||n==="ShiftLeft"||n==="ShiftRight"||n==="Space"||n==="KeyC"||n==="PageDown"||n==="KeyN"){if(e.preventDefault(),n==="KeyN"&&!e.repeat){this.noClip=!this.noClip,(s=this.onNoClipToggle)==null||s.call(this,this.noClip);return}this.keys.add(n)}}_mouseDown(e){var t,n;(n=(t=this.rig.renderer)==null?void 0:t.xr)!=null&&n.isPresenting||e.button===2&&(this.rightMouseDown=!0,e.preventDefault())}_mouseUp(e){e.button===2&&(this.rightMouseDown=!1)}_mouseMove(e){var i,s;if(this._lookPending||!this.rightMouseDown||(s=(i=this.rig.renderer)==null?void 0:i.xr)!=null&&s.isPresenting)return;const t=this.rig.yaw-e.movementX*this.sensitivity,n=Mt.clamp(this.rig.pitch-e.movementY*this.sensitivity,this.minPitch,this.maxPitch);this.rig.setLook(t,n)}_isUiLookBlock(e){var t;return!!((t=e==null?void 0:e.closest)!=null&&t.call(e,".virtual-joystick, #hud, .room-switcher, .room-contents, .skip-link, #vr-entry, .media-overlay, .hint-toggle, .a11y-chrome, .a11y-tab, #a11y-settings, button, a, input, select, textarea"))}_lookDown(e){var n,i;if((i=(n=this.rig.renderer)==null?void 0:n.xr)!=null&&i.isPresenting||this._isUiLookBlock(e.target))return;const t=e.pointerType==="touch"||e.pointerType==="pen";if(e.button===2){this.rightMouseDown=!0,this.didLookDrag=!0,this._lookPending=!0,this._lookPointerId=e.pointerId,this._lookStartX=e.clientX,this._lookStartY=e.clientY,e.preventDefault();return}e.button===0&&(!t&&!(navigator.maxTouchPoints>1)||(this.didLookDrag=!1,this._lookPending=!0,this._lookPointerId=e.pointerId,this._lookStartX=e.clientX,this._lookStartY=e.clientY))}_lookMove(e){var c,h;if(!this._lookPending||e.pointerId!==this._lookPointerId||(h=(c=this.rig.renderer)==null?void 0:c.xr)!=null&&h.isPresenting)return;const t=e.clientX-this._lookStartX,n=e.clientY-this._lookStartY;if(!this.didLookDrag&&(Math.abs(t)>8||Math.abs(n)>8)&&(this.didLookDrag=!0),!this.didLookDrag&&!this.rightMouseDown)return;const i=e.movementX||t,s=e.movementY||n;this._lookStartX=e.clientX,this._lookStartY=e.clientY;const o=e.pointerType==="touch"||e.pointerType==="pen"?this.touchLookSensitivity:this.sensitivity,a=this.rig.yaw-i*o,l=Mt.clamp(this.rig.pitch-s*o,this.minPitch,this.maxPitch);this.rig.setLook(a,l)}_lookUp(e){e&&this._lookPointerId!=null&&e.pointerId!==this._lookPointerId||(this._lookPending=!1,this._lookPointerId=null,(e==null?void 0:e.button)===2&&(this.rightMouseDown=!1))}_arrowLook(e){var a,l;if(!this.rig||(l=(a=this.rig.renderer)==null?void 0:a.xr)!=null&&l.isPresenting)return;const t=document.documentElement.classList.contains("a11y-reduced"),n=t?.18:.12,i=t?.14:.09;let s=this.rig.yaw,o=this.rig.pitch;e==="ArrowLeft"&&(s+=n),e==="ArrowRight"&&(s-=n),e==="ArrowUp"&&(o+=i),e==="ArrowDown"&&(o-=i),o=Mt.clamp(o,this.minPitch,this.maxPitch),this.rig.setLook(s,o)}}const vt={ComponentState:Object.freeze({DEFAULT:"default",TOUCHED:"touched",PRESSED:"pressed"}),ComponentProperty:Object.freeze({BUTTON:"button",X_AXIS:"xAxis",Y_AXIS:"yAxis",STATE:"state"}),ComponentType:Object.freeze({TRIGGER:"trigger",SQUEEZE:"squeeze",TOUCHPAD:"touchpad",THUMBSTICK:"thumbstick",BUTTON:"button"}),ButtonTouchThreshold:.05,AxisTouchThreshold:.1,VisualResponseProperty:Object.freeze({TRANSFORM:"transform",VISIBILITY:"visibility"})};async function Qd(r){const e=await fetch(r);if(e.ok)return e.json();throw new Error(e.statusText)}async function N0(r){if(!r)throw new Error("No basePath supplied");return await Qd(`${r}/profilesList.json`)}async function F0(r,e,t=null,n=!0){if(!r)throw new Error("No xrInputSource supplied");if(!e)throw new Error("No basePath supplied");const i=await N0(e);let s;if(r.profiles.some(l=>{const c=i[l];return c&&(s={profileId:l,profilePath:`${e}/${c.path}`,deprecated:!!c.deprecated}),!!s}),!s){if(!t)throw new Error("No matching profile name found");const l=i[t];if(!l)throw new Error(`No matching profile name found and default profile "${t}" missing.`);s={profileId:t,profilePath:`${e}/${l.path}`,deprecated:!!l.deprecated}}const o=await Qd(s.profilePath);let a;if(n){let l;if(r.handedness==="any"?l=o.layouts[Object.keys(o.layouts)[0]]:l=o.layouts[r.handedness],!l)throw new Error(`No matching handedness, ${r.handedness}, in profile ${s.profileId}`);l.assetPath&&(a=s.profilePath.replace("profile.json",l.assetPath))}return{profile:o,assetPath:a}}const U0={xAxis:0,yAxis:0,button:0,state:vt.ComponentState.DEFAULT};function k0(r=0,e=0){let t=r,n=e;if(Math.sqrt(r*r+e*e)>1){const o=Math.atan2(e,r);t=Math.cos(o),n=Math.sin(o)}return{normalizedXAxis:t*.5+.5,normalizedYAxis:n*.5+.5}}class O0{constructor(e){this.componentProperty=e.componentProperty,this.states=e.states,this.valueNodeName=e.valueNodeName,this.valueNodeProperty=e.valueNodeProperty,this.valueNodeProperty===vt.VisualResponseProperty.TRANSFORM&&(this.minNodeName=e.minNodeName,this.maxNodeName=e.maxNodeName),this.value=0,this.updateFromComponent(U0)}updateFromComponent({xAxis:e,yAxis:t,button:n,state:i}){const{normalizedXAxis:s,normalizedYAxis:o}=k0(e,t);switch(this.componentProperty){case vt.ComponentProperty.X_AXIS:this.value=this.states.includes(i)?s:.5;break;case vt.ComponentProperty.Y_AXIS:this.value=this.states.includes(i)?o:.5;break;case vt.ComponentProperty.BUTTON:this.value=this.states.includes(i)?n:0;break;case vt.ComponentProperty.STATE:this.valueNodeProperty===vt.VisualResponseProperty.VISIBILITY?this.value=this.states.includes(i):this.value=this.states.includes(i)?1:0;break;default:throw new Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`)}}}class B0{constructor(e,t){if(!e||!t||!t.visualResponses||!t.gamepadIndices||Object.keys(t.gamepadIndices).length===0)throw new Error("Invalid arguments supplied");this.id=e,this.type=t.type,this.rootNodeName=t.rootNodeName,this.touchPointNodeName=t.touchPointNodeName,this.visualResponses={},Object.keys(t.visualResponses).forEach(n=>{const i=new O0(t.visualResponses[n]);this.visualResponses[n]=i}),this.gamepadIndices=Object.assign({},t.gamepadIndices),this.values={state:vt.ComponentState.DEFAULT,button:this.gamepadIndices.button!==void 0?0:void 0,xAxis:this.gamepadIndices.xAxis!==void 0?0:void 0,yAxis:this.gamepadIndices.yAxis!==void 0?0:void 0}}get data(){return{id:this.id,...this.values}}updateFromGamepad(e){if(this.values.state=vt.ComponentState.DEFAULT,this.gamepadIndices.button!==void 0&&e.buttons.length>this.gamepadIndices.button){const t=e.buttons[this.gamepadIndices.button];this.values.button=t.value,this.values.button=this.values.button<0?0:this.values.button,this.values.button=this.values.button>1?1:this.values.button,t.pressed||this.values.button===1?this.values.state=vt.ComponentState.PRESSED:(t.touched||this.values.button>vt.ButtonTouchThreshold)&&(this.values.state=vt.ComponentState.TOUCHED)}this.gamepadIndices.xAxis!==void 0&&e.axes.length>this.gamepadIndices.xAxis&&(this.values.xAxis=e.axes[this.gamepadIndices.xAxis],this.values.xAxis=this.values.xAxis<-1?-1:this.values.xAxis,this.values.xAxis=this.values.xAxis>1?1:this.values.xAxis,this.values.state===vt.ComponentState.DEFAULT&&Math.abs(this.values.xAxis)>vt.AxisTouchThreshold&&(this.values.state=vt.ComponentState.TOUCHED)),this.gamepadIndices.yAxis!==void 0&&e.axes.length>this.gamepadIndices.yAxis&&(this.values.yAxis=e.axes[this.gamepadIndices.yAxis],this.values.yAxis=this.values.yAxis<-1?-1:this.values.yAxis,this.values.yAxis=this.values.yAxis>1?1:this.values.yAxis,this.values.state===vt.ComponentState.DEFAULT&&Math.abs(this.values.yAxis)>vt.AxisTouchThreshold&&(this.values.state=vt.ComponentState.TOUCHED)),Object.values(this.visualResponses).forEach(t=>{t.updateFromComponent(this.values)})}}class z0{constructor(e,t,n){if(!e)throw new Error("No xrInputSource supplied");if(!t)throw new Error("No profile supplied");this.xrInputSource=e,this.assetUrl=n,this.id=t.profileId,this.layoutDescription=t.layouts[e.handedness],this.components={},Object.keys(this.layoutDescription.components).forEach(i=>{const s=this.layoutDescription.components[i];this.components[i]=new B0(i,s)}),this.updateFromGamepad()}get gripSpace(){return this.xrInputSource.gripSpace}get targetRaySpace(){return this.xrInputSource.targetRaySpace}get data(){const e=[];return Object.values(this.components).forEach(t=>{e.push(t.data)}),e}updateFromGamepad(){Object.values(this.components).forEach(e=>{e.updateFromGamepad(this.xrInputSource.gamepad)})}}const H0="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles",G0="generic-trigger";class V0 extends st{constructor(){super(),this.motionController=null,this.envMap=null}setEnvironmentMap(e){return this.envMap==e?this:(this.envMap=e,this.traverse(t=>{t.isMesh&&(t.material.envMap=this.envMap,t.material.needsUpdate=!0)}),this)}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&(this.motionController.updateFromGamepad(),Object.values(this.motionController.components).forEach(t=>{Object.values(t.visualResponses).forEach(n=>{const{valueNode:i,minNode:s,maxNode:o,value:a,valueNodeProperty:l}=n;i&&(l===vt.VisualResponseProperty.VISIBILITY?i.visible=a:l===vt.VisualResponseProperty.TRANSFORM&&(i.quaternion.slerpQuaternions(s.quaternion,o.quaternion,a),i.position.lerpVectors(s.position,o.position,a)))})}))}}function W0(r,e){Object.values(r.components).forEach(t=>{const{type:n,touchPointNodeName:i,visualResponses:s}=t;if(n===vt.ComponentType.TOUCHPAD)if(t.touchPointNode=e.getObjectByName(i),t.touchPointNode){const o=new ln(.001),a=new Be({color:255}),l=new he(o,a);t.touchPointNode.add(l)}else console.warn(`Could not find touch dot, ${t.touchPointNodeName}, in touchpad component ${t.id}`);Object.values(s).forEach(o=>{const{valueNodeName:a,minNodeName:l,maxNodeName:c,valueNodeProperty:h}=o;if(h===vt.VisualResponseProperty.TRANSFORM){if(o.minNode=e.getObjectByName(l),o.maxNode=e.getObjectByName(c),!o.minNode){console.warn(`Could not find ${l} in the model`);return}if(!o.maxNode){console.warn(`Could not find ${c} in the model`);return}}o.valueNode=e.getObjectByName(a),o.valueNode||console.warn(`Could not find ${a} in the model`)})})}function Du(r,e){W0(r.motionController,e),r.envMap&&e.traverse(t=>{t.isMesh&&(t.material.envMap=r.envMap,t.material.needsUpdate=!0)}),r.add(e)}class X0{constructor(e=null,t=null){this.gltfLoader=e,this.path=H0,this._assetCache={},this.onLoad=t,this.gltfLoader||(this.gltfLoader=new Wd)}setPath(e){return this.path=e,this}createControllerModel(e){const t=new V0;let n=null;return e.addEventListener("connected",i=>{const s=i.data;s.targetRayMode!=="tracked-pointer"||!s.gamepad||s.hand||F0(s,this.path,G0).then(({profile:o,assetPath:a})=>{t.motionController=new z0(s,o,a);const l=this._assetCache[t.motionController.assetUrl];if(l)n=l.scene.clone(),Du(t,n),this.onLoad&&this.onLoad(n);else{if(!this.gltfLoader)throw new Error("GLTFLoader not set.");this.gltfLoader.setPath(""),this.gltfLoader.load(t.motionController.assetUrl,c=>{this._assetCache[t.motionController.assetUrl]=c,n=c.scene.clone(),Du(t,n),this.onLoad&&this.onLoad(n)},null,()=>{throw new Error(`Asset ${t.motionController.assetUrl} missing or malformed.`)})}}).catch(o=>{console.warn(o)})}),e.addEventListener("disconnected",()=>{t.motionController=null,t.remove(n),n=null}),t}}class j0{constructor(e,t,n={}){var s,o,a,l;this.renderer=e,this.scene=t,this.dolly=n.dolly||t,this.controllers=[],this.grips=[],this.moveAxes={x:0,y:0},this.lookAxes={x:0,y:0},this.menuButtonJustPressed=!1,this._menuPrev={left:!1,right:!1},this.triggerJustPressed=[],this._triggerPrev={left:!1,right:!1,none:!1};const i=new X0;i.onLoad=c=>yo(c);for(let c=0;c<2;c+=1){const h=e.xr.getController(c);h.name=`XRController_${c}`,h.visible=!0,this.dolly.add(h),this.controllers.push(h);const u=q0(c===0?8377599:16756848);h.add(u),h.userData.aimRay=u;const d=e.xr.getControllerGrip(c);d.name=`XRGrip_${c}`,d.visible=!0;const p=i.createControllerModel(d);p.name=`XRControllerModel_${c}`,d.add(p),this.dolly.add(d),this.grips.push(d);const g=b=>{const m=b.data,f=(m==null?void 0:m.handedness)||"unknown";h.userData.inputSource=m,h.userData.handedness=f,d.userData.handedness=f,h.visible=!0;const _=!nl(m);d.visible=_,p.visible=_,h.userData.aimRay&&(h.userData.aimRay.visible=!0),yo(p),console.info("[XR] controller connected",{index:c,handedness:f,profiles:m==null?void 0:m.profiles,handTracking:!!(m!=null&&m.hand)})};h.addEventListener("connected",g),d.addEventListener("connected",b=>{var f;d.userData.handedness=(f=b.data)==null?void 0:f.handedness;const m=!nl(b.data);d.visible=m,p.visible=m,yo(p)}),h.addEventListener("disconnected",()=>{h.userData.inputSource=null})}(o=(s=e.xr).addEventListener)==null||o.call(s,"sessionstart",()=>this.forceControllersVisible()),(l=(a=e.xr).addEventListener)==null||l.call(a,"sessionend",()=>{})}forceControllersVisible(){var t;const e=!!this.renderer.xr.isPresenting;for(let n=0;n<this.controllers.length;n+=1){const i=this.controllers[n],s=this.grips[n],o=(t=i==null?void 0:i.userData)==null?void 0:t.inputSource,a=e&&!nl(o);i&&(i.visible=e,i.userData.aimRay&&(i.userData.aimRay.visible=e)),s&&(s.visible=a)}}update(){var t,n,i,s,o,a;if(this.moveAxes.x=0,this.moveAxes.y=0,this.lookAxes.x=0,this.lookAxes.y=0,this.menuButtonJustPressed=!1,this.triggerJustPressed=[],!this.renderer.xr.isPresenting){this.forceControllersVisible();return}this.forceControllersVisible(),this._stripHandModels();const e=this.renderer.xr.getSession();if(e){for(const l of e.inputSources){if(!$0(l))continue;const c=l.gamepad;if(!c)continue;const h=Y0(c),u=l.handedness||"none";u==="left"?(this.moveAxes.x+=h.x,this.moveAxes.y+=h.y):u==="right"?(this.lookAxes.x+=h.x,this.lookAxes.y+=h.y):this.moveAxes.x===0&&this.moveAxes.y===0?(this.moveAxes.x=h.x,this.moveAxes.y=h.y):(this.lookAxes.x=h.x,this.lookAxes.y=h.y);const d=!!((n=(t=c.buttons)==null?void 0:t[4])!=null&&n.pressed||(s=(i=c.buttons)==null?void 0:i[5])!=null&&s.pressed),p=u==="right"?"right":"left";d&&!this._menuPrev[p]&&(this.menuButtonJustPressed=!0),this._menuPrev[p]=d;const g=!!((a=(o=c.buttons)==null?void 0:o[0])!=null&&a.pressed),b=u==="left"||u==="right"?u:"none";if(g&&!this._triggerPrev[b]){let m=this.controllers.find(f=>f.userData.handedness===u);m||(m=this.controllers[u==="left"?0:u==="right"?1:0]),this.triggerJustPressed.push({handedness:u,controller:m,source:l})}this._triggerPrev[b]=g}this.moveAxes.x=Mt.clamp(this.moveAxes.x,-1,1),this.moveAxes.y=Mt.clamp(this.moveAxes.y,-1,1),this.lookAxes.x=Mt.clamp(this.lookAxes.x,-1,1)}}_stripHandModels(){var e;for(const t of this.grips){yo(t);const n=t.children.find(s=>String(s.name||"").startsWith("XRControllerModel"));if(!(n!=null&&n.motionController))continue;const i=String(n.motionController.id||((e=n.motionController.profile)==null?void 0:e.profileId)||n.motionController.profileId||"");/hand/i.test(i)&&(n.visible=!1)}}}function q0(r){const e=new gt;e.name="BuiltInAimRay";const t=new Wi(new rt().setFromPoints([new A(0,0,0),new A(0,0,-1)]),new vi({color:r,transparent:!0,opacity:.85,depthTest:!1}));t.scale.z=1.25,t.frustumCulled=!1,t.renderOrder=1e3,e.add(t);const n=new he(new ln(.007,10,10),new Be({color:16777215,depthTest:!1}));return n.position.z=-1.25,n.renderOrder=1001,e.add(n),e}function Y0(r,e=.12){const t=r==null?void 0:r.axes;if(!(t!=null&&t.length))return{x:0,y:0};let n=0,i=0;if(t.length>=4){const s=Math.hypot(t[0]||0,t[1]||0);Math.hypot(t[2]||0,t[3]||0)>=s?(n=t[2]||0,i=t[3]||0):(n=t[0]||0,i=t[1]||0)}else n=t[0]||0,i=t[1]||0;return i=-i,Math.hypot(n,i)<e?{x:0,y:0}:{x:n,y:i}}function $0(r){return!(!(r!=null&&r.gamepad)||r.hand)}function nl(r){if(!r)return!1;if(r.hand)return!0;const e=r.profiles||[],t=e.some(i=>/hand/i.test(i)),n=e.some(i=>/touch|oculus|quest|vive|pico|wmr|go|daydream|generic-trigger/i.test(i));return t&&!n}function K0(r){const e=String(r||"").toLowerCase();return/controller|oculus|quest|touch|trigger|squeeze|thumbstick|button/.test(e)?!1:/hand|wrist|finger|thumb|palm|knuckle|phalanx|index_|middle_|ring_|pinky/.test(e)}function yo(r){r!=null&&r.traverse&&r.traverse(e=>{K0(e.name)&&(e.visible=!1)})}class Ds{static createButton(e,t={}){const n=document.createElement("button");function i(){let c=null;async function h(p){p.addEventListener("end",u),await e.xr.setSession(p),n.textContent="EXIT VR",c=p}function u(){c.removeEventListener("end",u),n.textContent="ENTER VR",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const d={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-vr",d).then(h):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",d).then(h).catch(p=>{console.warn(p)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",d).then(h).catch(p=>{console.warn(p)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function o(){s(),n.textContent="VR NOT SUPPORTED"}function a(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="VR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?i():o(),c&&Ds.xrSessionIsGranted&&n.click()}).catch(a),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Ds.xrSessionIsGranted=!0})}}}Ds.xrSessionIsGranted=!1;Ds.registerSessionGrantedListener();function J0(r,{containerId:e="vr-entry"}={}){r.xr.enabled=!0;let t=document.getElementById(e);t||(t=document.createElement("div"),t.id=e,t.className="vr-entry",t.setAttribute("aria-label","Virtual reality controls"),document.body.appendChild(t));const n=Ds.createButton(r);return n.classList.add("vr-system-btn"),n.id=n.id||"vr-enable",n.setAttribute("aria-label","Enter virtual reality mode. Requires a compatible VR headset."),t.prepend(n),n}class Z0{constructor({onNudge:e,onReset:t,onRespawn:n,getTransform:i,getViewYaw:s,onStepChange:o}){this.onNudge=e,this.onReset=t,this.onRespawn=n,this.getTransform=i,this.getViewYaw=s||(()=>0),this.onStepChange=o,this.step=.5,this.moveSpace="view",this.el=this._build(),document.body.appendChild(this.el),this.refreshReadout(),this.updateCompass()}setStep(e){this.step=e;const t=this.el.querySelector("#model-step");t&&(t.value=String(e)),this.refreshReadout()}updateCompass(){const e=this.el.querySelector("#model-compass-needle"),t=this.el.querySelector("#model-compass-label");if(!e)return;const i=-this.getViewYaw()*180/Math.PI;e.style.transform=`translate(-50%, -100%) rotate(${i}deg)`,t&&(t.textContent=this.moveSpace==="view"?"Arrows: relative to view":"Arrows: world X / Z")}refreshReadout(){var a;const e=(a=this.getTransform)==null?void 0:a.call(this);if(!e)return;const[t,n,i]=e.position,s=this.el.querySelector("#model-transform-readout");s&&(s.textContent=`pos ${t.toFixed(2)}, ${n.toFixed(2)}, ${i.toFixed(2)} · scale ${Number(e.scale).toFixed(3)} · ${this.moveSpace}`);const o=this.el.querySelector("#model-transform-config");o&&(o.textContent=`position: [${t.toFixed(3)}, ${n.toFixed(3)}, ${i.toFixed(3)}],
  scale: ${Number(e.scale).toFixed(4)},`)}dispose(){this.el.remove()}_build(){const e=document.createElement("div");e.id="model-transform-panel",e.className="model-panel",e.setAttribute("aria-label","Model transform controls"),e.innerHTML=`
      <div class="model-panel__header">
        <strong>Model position</strong>
        <button type="button" class="model-panel__toggle" id="model-panel-toggle" title="Collapse">−</button>
      </div>
      <div class="model-panel__body" id="model-panel-body">
        <p class="model-panel__hint">
          Nudge the room under you. Horizontal moves follow <em>where you look</em> (view mode).
          Player stays put — <em>Respawn</em> jumps to origin.
        </p>

        <label class="model-panel__row">
          <span>Step (m)</span>
          <select id="model-step">
            <option value="0.1">0.1</option>
            <option value="0.25">0.25</option>
            <option value="0.5" selected>0.5</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="5">5</option>
          </select>
        </label>

        <label class="model-panel__row">
          <span>Move space</span>
          <select id="model-move-space">
            <option value="view" selected>View (look)</option>
            <option value="world">World (X / Z)</option>
          </select>
        </label>

        <div class="model-panel__section">Horizontal</div>

        <div class="model-compass" aria-hidden="true">
          <div class="model-compass__dial">
            <!-- World compass: N = −Z (Three.js default “forward”), E = +X -->
            <span class="model-compass__cardinal model-compass__n">
              <span class="model-compass__nesw">N</span>
              <span class="model-compass__axis">−Z</span>
            </span>
            <span class="model-compass__cardinal model-compass__e">
              <span class="model-compass__nesw">E</span>
              <span class="model-compass__axis">+X</span>
            </span>
            <span class="model-compass__cardinal model-compass__s">
              <span class="model-compass__nesw">S</span>
              <span class="model-compass__axis">+Z</span>
            </span>
            <span class="model-compass__cardinal model-compass__w">
              <span class="model-compass__nesw">W</span>
              <span class="model-compass__axis">−X</span>
            </span>
            <div id="model-compass-needle" class="model-compass__needle" title="View forward"></div>
            <div class="model-compass__hub"></div>
          </div>
          <p id="model-compass-label" class="model-compass__label">Arrows: relative to view</p>
        </div>

        <div class="model-pad" role="group" aria-label="Horizontal nudge">
          <button type="button" data-pad-f="1" data-pad-r="0" title="Forward (look dir)">↑</button>
          <div class="model-pad__mid">
            <button type="button" data-pad-f="0" data-pad-r="-1" title="Left (relative)">←</button>
            <button type="button" data-pad-f="0" data-pad-r="1" title="Right (relative)">→</button>
          </div>
          <button type="button" data-pad-f="-1" data-pad-r="0" title="Back">↓</button>
        </div>

        <div class="model-panel__section">Height (Y)</div>
        <div class="model-panel__btns">
          <button type="button" data-dy="1" title="Raise model">Up +Y</button>
          <button type="button" data-dy="-1" title="Lower model">Down −Y</button>
        </div>

        <div class="model-panel__section">Scale</div>
        <div class="model-panel__btns">
          <button type="button" data-scale="-1" title="Smaller">Scale −</button>
          <button type="button" data-scale="1" title="Larger">Scale +</button>
        </div>

        <div class="model-panel__section">Actions</div>
        <div class="model-panel__btns">
          <button type="button" id="model-respawn" class="primary">Respawn at center</button>
          <button type="button" id="model-reset">Reset transform</button>
          <button type="button" id="model-copy">Copy for config.js</button>
        </div>

        <p id="model-transform-readout" class="model-panel__readout"></p>
        <pre id="model-transform-config" class="model-panel__config"></pre>
      </div>
    `,e.addEventListener("mousedown",i=>i.stopPropagation()),e.addEventListener("contextmenu",i=>i.preventDefault()),e.addEventListener("keydown",i=>i.stopPropagation()),e.querySelector("#model-step").addEventListener("change",i=>{var s;this.step=parseFloat(i.target.value)||.5,(s=this.onStepChange)==null||s.call(this,this.step)}),e.querySelector("#model-move-space").addEventListener("change",i=>{this.moveSpace=i.target.value==="world"?"world":"view",this.updateCompass(),this.refreshReadout()}),e.querySelectorAll("button[data-pad-f], button[data-pad-r]").forEach(i=>{i.addEventListener("click",()=>{const s=i.hasAttribute("data-pad-f")?Number(i.getAttribute("data-pad-f")):0,o=i.hasAttribute("data-pad-r")?Number(i.getAttribute("data-pad-r")):0;this.onNudge({padForward:s*this.step,padRight:o*this.step,space:this.moveSpace})})}),e.querySelectorAll("button[data-dy], button[data-scale]").forEach(i=>{i.addEventListener("click",()=>{const s=i.hasAttribute("data-dy")?Number(i.getAttribute("data-dy"))*this.step:0;let o;i.hasAttribute("data-scale")&&(o=Number(i.getAttribute("data-scale"))>0?1.1:1/1.1),this.onNudge({y:s,scaleMul:o,space:this.moveSpace})})}),e.querySelector("#model-reset").addEventListener("click",()=>this.onReset()),e.querySelector("#model-respawn").addEventListener("click",()=>this.onRespawn()),e.querySelector("#model-copy").addEventListener("click",async()=>{const i=this.getTransform(),[s,o,a]=i.position,l=`  position: [${s.toFixed(3)}, ${o.toFixed(3)}, ${a.toFixed(3)}],
  scale: ${Number(i.scale).toFixed(4)},`;try{await navigator.clipboard.writeText(l),this._flashCopy(!0)}catch{this._flashCopy(!1)}});const t=e.querySelector("#model-panel-body"),n=e.querySelector("#model-panel-toggle");return n.addEventListener("click",()=>{const i=t.hidden;t.hidden=!i,n.textContent=i?"−":"+"}),e}_flashCopy(e){const t=this.el.querySelector("#model-copy");if(!t)return;const n=t.textContent;t.textContent=e?"Copied!":"Copy failed",window.setTimeout(()=>{t.textContent=n},1200)}}class Q0{constructor({getFeetPosition:e,getCameraPosition:t,getViewYaw:n}){this.getFeetPosition=e,this.getCameraPosition=t,this.getViewYaw=n||(()=>0),this._last={feet:{x:0,y:0,z:0},camera:{x:0,y:0,z:0},portal:{x:0,y:0,z:0},yawDeg:0},this.el=this._build(),document.body.appendChild(this.el),this.refresh()}dispose(){this.el.remove()}refresh(){var u,d;const e=(u=this.getFeetPosition)==null?void 0:u.call(this),t=(d=this.getCameraPosition)==null?void 0:d.call(this);if(!e||!t)return;const i=this.getViewYaw()*180/Math.PI,s={x:e.x,y:e.y+1.15,z:e.z};this._last={feet:e,camera:t,portal:s,yawDeg:i};const o=p=>`[${Number(p.x).toFixed(3)}, ${Number(p.y).toFixed(3)}, ${Number(p.z).toFixed(3)}]`,a=this.el.querySelector("#player-pos-feet"),l=this.el.querySelector("#player-pos-camera"),c=this.el.querySelector("#player-pos-portal"),h=this.el.querySelector("#player-pos-yaw");a&&(a.textContent=o(e)),l&&(l.textContent=o(t)),c&&(c.textContent=o(s)),h&&(h.textContent=`${i.toFixed(1)}°`),this._reposition()}_reposition(){const e=document.getElementById("model-transform-panel");let t=12;e&&(t=e.getBoundingClientRect().bottom+8),this.el.style.top=`${t}px`}_build(){const e=document.createElement("div");e.id="player-position-panel",e.className="model-panel player-pos-panel",e.setAttribute("aria-label","Player position debug"),e.innerHTML=`
      <div class="model-panel__header">
        <strong>Player position</strong>
        <button type="button" class="model-panel__toggle" id="player-pos-toggle" title="Collapse">−</button>
      </div>
      <div class="model-panel__body" id="player-pos-body">
        <p class="model-panel__hint">
          Stand where the portal should be, then copy and send the sample.
        </p>

        <div class="player-pos-row"><span>Feet</span><code id="player-pos-feet">[—, —, —]</code></div>
        <div class="player-pos-row"><span>Camera</span><code id="player-pos-camera">[—, —, —]</code></div>
        <div class="player-pos-row"><span>Portal ~</span><code id="player-pos-portal">[—, —, —]</code></div>
        <div class="player-pos-row"><span>Yaw</span><code id="player-pos-yaw">—°</code></div>

        <div class="model-panel__btns" style="margin-top: 8px;">
          <button type="button" id="player-pos-copy-portal" class="primary">Copy portal sample</button>
          <button type="button" id="player-pos-copy-feet">Copy feet</button>
        </div>
        <p id="player-pos-status" class="model-panel__readout" aria-live="polite"></p>
      </div>
    `,e.addEventListener("mousedown",i=>i.stopPropagation()),e.addEventListener("contextmenu",i=>i.preventDefault()),e.addEventListener("keydown",i=>i.stopPropagation()),e.querySelector("#player-pos-copy-portal").addEventListener("click",()=>{this._copyText(this._portalSampleText(),"Portal sample copied")}),e.querySelector("#player-pos-copy-feet").addEventListener("click",()=>{const i=this._last.feet,s=`[${Number(i.x).toFixed(3)}, ${Number(i.y).toFixed(3)}, ${Number(i.z).toFixed(3)}]`;this._copyText(s,"Feet copied")});const t=e.querySelector("#player-pos-body"),n=e.querySelector("#player-pos-toggle");return n.addEventListener("click",()=>{const i=t.hidden;t.hidden=!i,n.textContent=i?"−":"+",requestAnimationFrame(()=>this._reposition())}),e}_portalSampleText(){const{feet:e,camera:t,portal:n,yawDeg:i}=this._last,s=o=>Number(o).toFixed(3);return`position: [${s(n.x)}, ${s(n.y)}, ${s(n.z)}],
yawDeg: ${Number(i).toFixed(1)},
feet: [${s(e.x)}, ${s(e.y)}, ${s(e.z)}],
camera: [${s(t.x)}, ${s(t.y)}, ${s(t.z)}],`}async _copyText(e,t){const n=this.el.querySelector("#player-pos-status");try{await navigator.clipboard.writeText(e),n&&(n.textContent=t||"Copied")}catch{n&&(n.textContent="Copy failed")}window.setTimeout(()=>{n&&(n.textContent===t||n.textContent==="Copy failed")&&(n.textContent="")},1400)}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class On{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),On.nextNameID=On.nextNameID||0,this.$name.id=`lil-gui-name-${++On.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class eM extends On{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function cc(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const tM={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:cc,toHexString:cc},Mr={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},nM={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,e,t=1){const n=Mr.fromHexString(r);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([r,e,t],n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Mr.toHexString(i)}},iM={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const n=Mr.fromHexString(r);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r,g:e,b:t},n=1){n=255/n;const i=r*n<<16^e*n<<8^t*n<<0;return Mr.toHexString(i)}},sM=[tM,Mr,nM,iM];function rM(r){return sM.find(e=>e.match(r))}class oM extends On{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=rM(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=cc(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class il extends On{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class aM extends On{constructor(e,t,n,i,s,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let _=parseFloat(this.$input.value);isNaN(_)||(this._stepExplicit&&(_=this._snap(_)),this.setValue(this._clamp(_)))},n=_=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+_),this.$input.value=this.getValue())},i=_=>{_.key==="Enter"&&this.$input.blur(),_.code==="ArrowUp"&&(_.preventDefault(),n(this._step*this._arrowKeyMultiplier(_))),_.code==="ArrowDown"&&(_.preventDefault(),n(this._step*this._arrowKeyMultiplier(_)*-1))},s=_=>{this._inputFocused&&(_.preventDefault(),n(this._step*this._normalizeMouseWheel(_)))};let o=!1,a,l,c,h,u;const d=5,p=_=>{a=_.clientX,l=c=_.clientY,o=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",b)},g=_=>{if(o){const y=_.clientX-a,x=_.clientY-l;Math.abs(x)>d?(_.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>d&&b()}if(!o){const y=_.clientY-c;u-=y*this._step*this._arrowKeyMultiplier(_),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=_.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",b)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(f,_,y,x,M)=>(f-_)/(y-_)*(M-x)+x,t=f=>{const _=this.$slider.getBoundingClientRect();let y=e(f,_.left,_.right,this._min,this._max);this._snapClampSetValue(y)},n=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=f=>{t(f.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),o=!1},h=f=>{f.touches.length>1||(this._hasScrollBar?(a=f.touches[0].clientX,l=f.touches[0].clientY,o=!0):c(f),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=f=>{if(o){const _=f.touches[0].clientX-a,y=f.touches[0].clientY-l;Math.abs(_)>Math.abs(y)?c(f):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else f.preventDefault(),t(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),g=400;let b;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const y=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(b),b=setTimeout(p,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class lM extends On{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class cM extends On{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var hM=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
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
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
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
  background: var(--background-color);
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
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
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
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
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
.lil-gui .controller.boolean {
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
  content: "↕";
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
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
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
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
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
  content: "▸";
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

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
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
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function uM(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Nu=!1;class Nc{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Nu&&a&&(uM(hM),Nu=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,s){if(Object(n)===n)return new lM(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new aM(this,e,t,n,i,s);case"boolean":return new eM(this,e,t);case"string":return new cM(this,e,t);case"function":return new il(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new oM(this,e,t,n)}addFolder(e){const t=new Nc({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof il||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof il)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class dM{constructor(e,t={}){this.environment=e,this.state=e.guiState,this.playerState=t.playerState||{noClip:!1},this.onNoClipChange=t.onNoClipChange||null,this.gui=new Nc({title:t.title??"Lighting",width:t.width??300,container:t.container}),this.gui.domElement.classList.add("lighting-gui"),t.container||(this.gui.domElement.style.position="fixed",this.gui.domElement.style.left="12px",this.gui.domElement.style.top="118px",this.gui.domElement.style.zIndex="19"),this._noClipController=null,this._sun={azimuth:this.state.sunAzimuth??40,elevation:this.state.sunElevation??55},this._build()}setNoClip(e){var t;this.playerState.noClip=!!e,(t=this._noClipController)==null||t.updateDisplay()}_build(){const e=this.environment,t=this.state,n=this.gui,i=Object.keys(Gd);n.add(t,"environment",i).name("environment").onChange(c=>{e.applyEnvironment(c)}),n.add(t,"backgroundMode",["environment","color"]).name("backgroundMode").onChange(c=>e.setBackgroundMode(c)),n.add(t,"background").name("env as background").onChange(c=>e.setBackgroundVisible(c)),n.addColor(t,"backgroundColor").name("backgroundColor").onChange(c=>e.setBackgroundColor(c)),n.add(t,"backgroundBlur",0,1,.01).name("bg blur").onChange(c=>e.setBackgroundBlur(c)),n.add(t,"toneMapping",Object.keys(Vd)).name("toneMapping").onChange(()=>e.applyToneMapping()),n.add(t,"exposure",0,2,.01).name("exposure").onChange(()=>e.applyToneMapping()),n.add(t,"punctualLights").name("punctualLights").onChange(()=>{e.applyPunctualLights(),e.applyAmbient()}),n.add(t,"ambientIntensity",0,3,.01).name("ambientIntensity").onChange(()=>e.applyAmbient()),n.addColor(t,"ambientColor").name("ambientColor").onChange(()=>e.applyAmbient()),n.add(t,"directIntensity",0,5,.01).name("directIntensity").onChange(()=>e.applyDirect()),n.addColor(t,"directColor").name("directColor").onChange(()=>e.applyDirect()),n.add(t,"hemiIntensity",0,2,.01).name("hemiIntensity").onChange(()=>e.applyAmbient());const s=()=>{e.applySunDirection(this._sun.azimuth,this._sun.elevation)},o=n.addFolder("Sun direction");o.add(this._sun,"azimuth",-180,180,1).name("azimuth").onChange(s),o.add(this._sun,"elevation",5,89,1).name("elevation").onChange(s),o.close();const a=n.addFolder("Player / movement");this._noClipController=a.add(this.playerState,"noClip").name("noClip (Fly)").onChange(c=>{var h;(h=this.onNoClipChange)==null||h.call(this,!!c)}),a.add({hint:"Space jump · N Fly · C down in Fly"},"hint").name("keys").disable(),a.open();const l={copyConfig:async()=>{const c=e.formatConfigSnippet();try{await navigator.clipboard.writeText(c),this._flash("copyConfig","Copied!")}catch{console.info(`[Lighting]
`+c),this._flash("copyConfig","See console")}},saveSnapshot:async()=>{const c={savedAt:new Date().toISOString(),lighting:e.getSnapshot(),configSnippet:e.formatConfigSnippet()};try{const h=await fetch("/__save-lighting",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!h.ok)throw new Error(await h.text());const u=await h.json();console.info("[Lighting] Snapshot saved →",u.path||"lighting.snapshot.json"),this._flash("saveSnapshot","Saved!")}catch(h){console.warn("[Lighting] Snapshot save failed (dev server only):",h),this._downloadJson("lighting.snapshot.json",c),this._flash("saveSnapshot","Downloaded")}},reset:()=>{e.resetToDefaults(),this._sun.azimuth=e.state.sunAzimuth??40,this._sun.elevation=e.state.sunElevation??55,this.gui.controllersRecursive().forEach(c=>c.updateDisplay())}};n.add(l,"copyConfig").name("Copy for config.js"),n.add(l,"saveSnapshot").name("Save snapshot (for AI)"),n.add(l,"reset").name("Reset lighting")}_flash(e,t){console.info(`[Lighting] ${t}`);const n=document.getElementById("status");if(n){const i=n.textContent;n.textContent=e==="copyConfig"?"Copied to clipboard only — use “Save snapshot” to keep after refresh":e==="saveSnapshot"?"Saved lighting.snapshot.json — will load on every refresh":i,window.setTimeout(()=>{(n.textContent.includes("clipboard")||n.textContent.includes("snapshot"))&&(n.textContent=i)},4e3)}}_downloadJson(e,t){const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),i=URL.createObjectURL(n),s=document.createElement("a");s.href=i,s.download=e,s.click(),URL.revokeObjectURL(i)}dispose(){this.gui.destroy()}}const Fu="harlem-hotspot-coordinates-v1";function sl(r){return Number(r.toFixed(3))}class fM{constructor({scene:e,camera:t,renderer:n,getTarget:i,onStatus:s}){this.scene=e,this.camera=t,this.renderer=n,this.getTarget=i,this.onStatus=s||(()=>{}),this.raycaster=new Vi,this.pointer=new De,this.saved=this._loadSaved(),this.marker=this._createMarker(),this.marker.position.set(0,1,0),this.scene.add(this.marker),this._buildPanel(),this._onPointerDown=o=>this._placeFromPointer(o),this.renderer.domElement.addEventListener("pointerdown",this._onPointerDown),this.refresh()}_createMarker(){const e=new gt;e.name="HotspotCoordinateMarker";const t=new Be({color:16726899,depthTest:!1,transparent:!0,opacity:.95}),n=new he(new ln(.09,20,14),t);n.renderOrder=999,e.add(n);const i=new he(new Jo(.18,.018,10,36),t);i.rotation.x=Math.PI/2,i.renderOrder=999,e.add(i);const s=new he(new $o(.008,.008,.5,8),t);return s.position.y=.25,s.renderOrder=999,e.add(s),e}_buildPanel(){this.panel=document.createElement("section"),this.panel.className="hotspot-tool",this.panel.innerHTML=`
      <div class="hotspot-tool__header">
        <strong>Hotspot coordinates</strong>
        <button type="button" data-action="toggle" aria-label="Collapse hotspot tool">−</button>
      </div>
      <div class="hotspot-tool__body">
        <p class="hotspot-tool__hint">Left-click a surface to place the pink marker. Use these controls for exact adjustments.</p>
        <output class="hotspot-tool__coords"></output>
        <div class="hotspot-tool__row">
          <label>Step <select data-step>
            <option value="0.01">0.01 m</option>
            <option value="0.1" selected>0.10 m</option>
            <option value="0.5">0.50 m</option>
            <option value="1">1.00 m</option>
          </select></label>
        </div>
        <div class="hotspot-tool__axes">
          <span>X</span><button data-axis="x" data-sign="-1">−</button><button data-axis="x" data-sign="1">+</button>
          <span>Y</span><button data-axis="y" data-sign="-1">−</button><button data-axis="y" data-sign="1">+</button>
          <span>Z</span><button data-axis="z" data-sign="-1">−</button><button data-axis="z" data-sign="1">+</button>
        </div>
        <input data-name type="text" placeholder="Hotspot name (optional)" aria-label="Hotspot name">
        <div class="hotspot-tool__actions">
          <button type="button" data-action="copy">Copy coordinates</button>
          <button type="button" data-action="save" class="primary">Save point</button>
          <button type="button" data-action="export">Export JSON</button>
        </div>
        <div class="hotspot-tool__saved"></div>
      </div>`,document.body.appendChild(this.panel),this.body=this.panel.querySelector(".hotspot-tool__body"),this.coords=this.panel.querySelector(".hotspot-tool__coords"),this.savedEl=this.panel.querySelector(".hotspot-tool__saved"),this.nameInput=this.panel.querySelector("[data-name]"),this.panel.addEventListener("click",e=>{var s;const t=e.target.closest("button");if(!t)return;const n=t.dataset.axis;if(n){this.marker.position[n]+=Number(t.dataset.sign)*this._step(),this.refresh();return}const i={toggle:()=>{const o=this.body.hidden;this.body.hidden=!o,t.textContent=o?"−":"+"},copy:()=>this.copy(),save:()=>this.save(),export:()=>this.exportJson()};(s=i[t.dataset.action])==null||s.call(i)})}_step(){return Number(this.panel.querySelector("[data-step]").value)}_placeFromPointer(e){var s,o,a;if(e.button!==0||this.renderer.xr.isPresenting||(o=(s=e.target).closest)!=null&&o.call(s,".hotspot-tool, .model-panel, .lil-gui, #hud, #vr-entry"))return;const t=(a=this.getTarget)==null?void 0:a.call(this);if(!t)return;const n=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-n.left)/n.width*2-1,this.pointer.y=-((e.clientY-n.top)/n.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const i=this.raycaster.intersectObject(t,!0).find(l=>l.object.visible);i&&(this.marker.position.copy(i.point),this.refresh(),this.onStatus(`Hotspot marker placed at ${this.coordinateText()}`))}values(){const{x:e,y:t,z:n}=this.marker.position;return{x:sl(e),y:sl(t),z:sl(n)}}coordinateText(){const{x:e,y:t,z:n}=this.values();return`x: ${e.toFixed(3)}, y: ${t.toFixed(3)}, z: ${n.toFixed(3)}`}refresh(){this.coords.textContent=this.coordinateText(),this._renderSaved()}async copy(){const e=JSON.stringify(this.values());try{await navigator.clipboard.writeText(e),this.onStatus(`Copied hotspot coordinates: ${e}`)}catch{window.prompt("Copy these hotspot coordinates:",e)}}save(){const e={id:Date.now(),name:this.nameInput.value.trim()||`Hotspot ${this.saved.length+1}`,position:this.values()};this.saved.push(e),localStorage.setItem(Fu,JSON.stringify(this.saved)),this.nameInput.value="",this.refresh(),this.onStatus(`Saved ${e.name} at ${this.coordinateText()}`)}exportJson(){const e=new Blob([JSON.stringify(this.saved,null,2)],{type:"application/json"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download="hotspot-coordinates.json",n.click(),URL.revokeObjectURL(t)}_loadSaved(){try{return JSON.parse(localStorage.getItem(Fu))||[]}catch{return[]}}_renderSaved(){if(!this.saved.length){this.savedEl.textContent="No saved points yet.";return}this.savedEl.innerHTML=`<strong>Saved points (${this.saved.length})</strong>`;for(const e of this.saved){const t=document.createElement("div");t.className="hotspot-tool__saved-row",t.textContent=`${e.name}: ${JSON.stringify(e.position)}`,this.savedEl.appendChild(t)}}}function ef(r){const e=String(r||""),t=e.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);return t?t[1]:/^[\w-]{11}$/.test(e)?e:""}function Fc(r){if(!r)return{type:"info"};if(r.kind==="portal"&&r.targetRoom)return{type:"portal",targetRoom:r.targetRoom};const e=String(r.url||""),t=ef(r.youtubeId||r.youtube||e);return r.kind==="youtube"||t?{type:"youtube",youtubeId:t,url:e||(t?`https://www.youtube.com/watch?v=${t}`:"")}:(r.kind==="pdf"||r.kind==="document"||/\.pdf($|\?)/i.test(e))&&e?{type:"pdf",url:e}:e?{type:"web",url:e}:{type:"info"}}function pM(r){if(!r)return"";const e=new URLSearchParams({rel:"0",modestbranding:"1",playsinline:"1"});return`https://www.youtube-nocookie.com/embed/${r}?${e.toString()}`}function mM(r){return r?`https://i.ytimg.com/vi/${r}/hqdefault.jpg`:""}const gM="This video plays in desktop mode. Exit VR and return to the desktop browser to watch.",_M="This document opens in a browser. Exit VR and return to the desktop browser to read it.";function bM(r){try{return new URL(r).hostname.replace(/^www\./,"")}catch{return""}}function Uu(r,e,t,n,i,s,o=12){const a=String(e||"").split(/\s+/).filter(Boolean),l=[];let c="";for(const h of a){const u=c?`${c} ${h}`:h;if(r.measureText(u).width>i&&c){if(l.push(c),c=h,l.length>=o)break}else c=u}c&&l.length<o&&l.push(c);for(let h=0;h<l.length;h+=1)r.fillText(l[h],t,n+h*s);return l.length}class xM{constructor({scene:e,camera:t,renderer:n,getPlayerPosition:i,getOccluders:s,onOpen:o,onClose:a,reducedMotion:l,mediaOverlay:c,worldMedia:h}){this.scene=e,this.camera=t,this.renderer=n,this.getPlayerPosition=i,this.getOccluders=s||null,this.onOpen=o||null,this.onClose=a||null,this.reducedMotion=!!l,this.mediaOverlay=c||null,this.worldMedia=h||null,this.group=new gt,this.group.name="Hotspots",this.scene.add(this.group),this.items=[],this.active=null,this._dismissed=new Set,this.defaultRadius=1.8,this.raycaster=new Vi,this._hover=null,this._closeRect=null,this._linkRect=null,this._linkUrl="",this._linkLabel="",this._portalRoom="",this._tmpCam=new A,this._tmpDir=new A,this._panelOffset=new A,this._losNormal=new A,this._buildWorldPanel()}_buildWorldPanel(){this.canvasW=768,this.canvasH=480,this.canvas=document.createElement("canvas"),this.canvas.width=this.canvasW,this.canvas.height=this.canvasH,this.ctx=this.canvas.getContext("2d"),this.tex=new Ld(this.canvas),this.tex.colorSpace=ht,this.tex.needsUpdate=!0;const e=.55,t=e*(this.canvasW/this.canvasH);this.worldW=t,this.worldH=e,this.panelRoot=new gt,this.panelRoot.name="HotspotWorldPanel",this.panelRoot.visible=!1,this.panelRoot.renderOrder=998,this.scene.add(this.panelRoot),this.panelMesh=new he(new Vt(t,e),new Be({map:this.tex,transparent:!0,depthTest:!1,depthWrite:!1,side:ut})),this.panelMesh.name="HotspotWorldPanelMesh",this.panelMesh.renderOrder=999,this.panelMesh.userData.isHotspotPanel=!0,this.panelMesh.position.y=e*.5,this.panelRoot.add(this.panelMesh),this._redraw()}async load(e){if(this.clear(),!e)return;const t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`Hotspots ${t.status}`);const n=await t.json();this.loadFromData(n)}loadFromData(e){if(this.clear(),!!e){this.defaultRadius=e.proximityRadius||1.8;for(const t of e.hotspots||[])t.position&&this._add(t)}}_add(e){const t=new A(e.position[0],e.position[1],e.position[2]),n=e.kind==="portal",i=n?6211839:16761162,s=n?8312575:16769162,o=new ln(.11,18,12),a=new Be({color:i,transparent:!0,opacity:.92,depthTest:!1}),l=new he(o,a);l.renderOrder=20,l.position.copy(t),l.userData.hotspotId=e.id,l.userData.isHotspotMarker=!0,l.userData.isPortal=n,this.group.add(l);const c=new he(new Jo(.2,.02,8,28),new Be({color:s,transparent:!0,opacity:.7,depthTest:!1}));c.rotation.x=Math.PI/2,c.renderOrder=20,l.add(c),this.items.push({...e,position:t,radius:e.radius||this.defaultRadius,marker:l})}clear(){this.close(),this._dismissed.clear();for(const e of this.items)e.marker.geometry.dispose(),e.marker.material.dispose();this.items=[],this.group.clear()}_hasLineOfSight(e,t){var o,a,l,c,h;const n=((o=this.getOccluders)==null?void 0:o.call(this))||[];if(!n.length)return!0;this._tmpDir.subVectors(t,e);const i=this._tmpDir.length();if(i<.05)return!0;this._tmpDir.multiplyScalar(1/i),this.raycaster.set(e,this._tmpDir),this.raycaster.near=.08,this.raycaster.far=Math.max(.1,i-.12),this.raycaster.firstHitOnly=!1;const s=this.raycaster.intersectObjects(n,!1);for(const u of s){const d=u.object;if(d&&!((a=d.userData)!=null&&a.isHotspotPanel||(l=d.userData)!=null&&l.hotspotId)&&!((c=d.userData)!=null&&c.isStairRamp||(h=d.userData)!=null&&h.skipCollision)&&!(d.name==="NavMesh"||d.name==="NavMeshHit")&&!(u.face&&(this._losNormal.copy(u.face.normal).transformDirection(d.matrixWorld).normalize(),this._losNormal.y>.7)))return!1}return!0}_effectiveRadius(e,t){const n=e.radius||this.defaultRadius,i=Math.max(0,e.position.y-t.y),s=Mt.clamp(i*1.25,0,2.5);return n+s}_eyePosition(e=this._tmpCam){return this.camera.getWorldPosition(e),e}update(e){var f,_;const t=e||((f=this.getPlayerPosition)==null?void 0:f.call(this));if(!t||!this.items.length){this.active&&this.active._fromProximity&&this.close();return}const n=this._eyePosition();let i=null,s=1/0;for(const y of this.items){const x=t.distanceTo(y.position),M=this._effectiveRadius(y,n),E=x<M&&this._hasLineOfSight(n,y.position);y.marker.scale.setScalar(this.reducedMotion||!E?1:1.35),E||this._dismissed.delete(y.id),E&&x<s&&(i=y,s=x)}if(this.active&&this.active._fromProximity===!1){const y=t.distanceTo(this.active.position),x=this._effectiveRadius(this.active,n);y<x&&this._hasLineOfSight(n,this.active.position)||this.close()}else i&&!this._dismissed.has(i.id)?((_=this.active)==null?void 0:_.id)!==i.id&&this.open(i,{fromProximity:!0}):this.active&&this.active._fromProximity&&this.close();if(!this.active||!this.panelRoot.visible)return;const o=this.active;this.camera.getWorldPosition(this._tmpCam),this._tmpDir.subVectors(this._tmpCam,o.position),this._tmpDir.y=0,this._tmpDir.lengthSq()<1e-6?this._tmpDir.set(0,0,1):this._tmpDir.normalize();const a=.26;this._panelOffset.copy(o.position).addScaledVector(this._tmpDir,.28),this._panelOffset.y=o.position.y+a,this.panelRoot.position.copy(this._panelOffset),this.panelRoot.rotation.order="YXZ";const l=this._tmpCam.x-this.panelRoot.position.x,c=this._tmpCam.y-this.panelRoot.position.y,h=this._tmpCam.z-this.panelRoot.position.z,u=Math.atan2(l,h),d=-Math.atan2(c,Math.hypot(l,h));this.panelRoot.rotation.set(d,u,0);const p=t.distanceTo(o.position),g=this._effectiveRadius(o,this._tmpCam),b=Mt.clamp(p/Math.max(.05,g),0,1),m=Mt.lerp(1.15,.45,b);this.panelRoot.scale.setScalar(m),this._poseMedia()}_syncMediaSurfaces(e){var o,a,l,c,h,u,d,p;const t=Fc(e),n=!!((a=(o=this.renderer)==null?void 0:o.xr)!=null&&a.isPresenting),i=t.type==="youtube"||t.type==="pdf"||t.type==="web",s=t.type==="youtube"||t.type==="pdf";if(this._mediaXr=n,i&&!n){this.panelMesh.visible=!1,(l=this.mediaOverlay)==null||l.show(e,this.panelRoot.position),(c=this.worldMedia)==null||c.hide({silent:!0});return}if(s&&n){this.panelMesh.visible=!1,(h=this.mediaOverlay)==null||h.hide(),(u=this.worldMedia)==null||u.show(e);return}this.panelMesh.visible=!0,(d=this.mediaOverlay)==null||d.hide(),(p=this.worldMedia)==null||p.hide({silent:!0})}_poseMedia(){var t,n,i,s;const e=!!((n=(t=this.renderer)==null?void 0:t.xr)!=null&&n.isPresenting);this.active&&e!==this._mediaXr&&this._syncMediaSurfaces(this.active),(i=this.mediaOverlay)!=null&&i.isOpen()&&(this.mediaOverlay.anchor=this.panelRoot.position,this.mediaOverlay.update()),(s=this.worldMedia)!=null&&s.isActive()&&this.worldMedia.syncPose(this.panelRoot)}open(e,{fromProximity:t=!0}={}){var o;const n=this._eyePosition();if(!this._hasLineOfSight(n,e.position))return!1;this.active=e,this.active._fromProximity=t,this._dismissed.delete(e.id),this._hover=null;const i=e.kind||"info",s=ef(e.youtubeId||e.youtube||e.url);if(this._linkUrl="",this._linkLabel="",this._portalRoom="",i==="portal"&&e.targetRoom)this._portalRoom=e.targetRoom,this._linkUrl="",this._linkLabel=e.urlLabel||"Enter";else if(i==="youtube"||s){const a=s;this._linkUrl=e.url||(a?`https://www.youtube.com/watch?v=${a}`:""),this._linkLabel=e.urlLabel||"Open video"}else i==="link"&&e.url&&(this._linkUrl=e.url,this._linkLabel=e.urlLabel||"Open website");return this.panelRoot.visible=!0,this._syncMediaSurfaces(e),this._redraw(),(o=this.onOpen)==null||o.call(this,e),!0}close({dismiss:e=!1}={}){var n,i,s;const t=this.active;t&&(t._fromProximity=!1),e&&(t!=null&&t.id)&&this._dismissed.add(t.id),this.active=null,this._hover=null,this._linkUrl="",this._linkLabel="",this._portalRoom="",this.panelRoot.visible=!1,(n=this.mediaOverlay)==null||n.hide(),(i=this.worldMedia)==null||i.hide({silent:!0}),this.panelMesh&&(this.panelMesh.visible=!0),t&&((s=this.onClose)==null||s.call(this,t))}getWorldUiMeshes(){var t,n,i;const e=[];this.panelRoot.visible&&((t=this.panelMesh)!=null&&t.visible)&&e.push(this.panelMesh),(i=(n=this.worldMedia)==null?void 0:n.isActive)!=null&&i.call(n)&&e.push(...this.worldMedia.getMeshes());for(const s of this.items)s.marker&&e.push(s.marker);return e}pick(e){if(!this.panelRoot.visible)return null;const t=e.intersectObject(this.panelMesh,!1);if(!t.length)return this._hover&&(this._hover=null,this._redraw()),null;const n=t[0].uv;if(!n)return null;const i=n.x*this.canvasW,s=(1-n.y)*this.canvasH;let o=null;return this._hitRect(this._closeRect,i,s,14)?o="close":(this._linkUrl||this._portalRoom)&&this._hitRect(this._linkRect,i,s,6)&&(o="link"),o!==this._hover&&(this._hover=o,this._redraw()),o}onPointerMove(e){this.pick(e)}onActivate(e){var i,s,o,a;if((s=(i=this.worldMedia)==null?void 0:i.isActive)!=null&&s.call(i)){const l=this.worldMedia.pick(e);if(l==="close"||l==="open"||l==="prev"||l==="next")return this.worldMedia.onActivate(e)}if(this.panelRoot.visible){const l=this.pick(e);if(l==="close")return this.close({dismiss:!0}),!0;if(l==="link"&&(this._linkUrl||this._portalRoom)){if(this._portalRoom)try{const c=new URLSearchParams(window.location.search);c.set("room",this._portalRoom),console.info("[HotspotSystem] portal navigate →",this._portalRoom),window.location.assign("?"+c.toString())}catch(c){console.warn("[HotspotSystem] portal navigate failed",c)}else try{window.open(this._linkUrl,"_blank","noopener,noreferrer")}catch(c){console.warn("[HotspotSystem] open link failed",c)}return!0}}const t=this.items.map(l=>l.marker),n=e.intersectObjects(t,!1);if(n.length){const l=n[0].object.userData.hotspotId,c=this.items.find(h=>h.id===l);return c?((o=this.active)==null?void 0:o.id)===c.id&&this.panelRoot.visible?(this.close({dismiss:!0}),!0):(this.active&&this.active.id!==c.id&&this.close({dismiss:!0}),this.open(c,{fromProximity:!1}),!0):!1}return!!(this.panelRoot.visible&&((a=this.panelMesh)!=null&&a.visible)&&e.intersectObject(this.panelMesh,!1).length)}_hitRect(e,t,n,i=0){return e?t>=e.x-i&&t<=e.x+e.w+i&&n>=e.y-i&&n<=e.y+e.h+i:!1}_redraw(){const e=this.ctx,t=this.canvasW,n=this.canvasH,i=this.active;e.clearRect(0,0,t,n);const s=22;e.fillStyle="rgba(12, 14, 20, 0.92)",rr(e,8,8,t-16,n-16,s),e.fill(),e.strokeStyle="#ffc14a",e.lineWidth=3,rr(e,8,8,t-16,n-16,s),e.stroke(),e.strokeStyle="rgba(255, 224, 138, 0.45)",e.lineWidth=1.5,rr(e,14,14,t-28,n-28,s-4),e.stroke();const o=(i==null?void 0:i.title)||"Hotspot";e.fillStyle="#ffc14a",e.font="bold 32px system-ui, Segoe UI, sans-serif",e.textAlign="left",e.textBaseline="top";const a=t-140,l=36,c=Uu(e,o,36,26,a,l,3),h=26+Math.max(1,c)*l,u=t-52,d=46,p=48;this._closeRect={x:u-p/2,y:d-p/2,w:p,h:p},e.beginPath(),e.arc(u,d,p/2,0,Math.PI*2),e.fillStyle=this._hover==="close"?"rgba(255, 193, 74, 0.35)":"rgba(255,255,255,0.08)",e.fill(),e.strokeStyle=this._hover==="close"?"#ffe08a":"#ffc14a",e.lineWidth=2,e.stroke(),e.strokeStyle="#e8e4d8",e.lineWidth=3,e.beginPath(),e.moveTo(u-10,d-10),e.lineTo(u+10,d+10),e.moveTo(u+10,d-10),e.lineTo(u-10,d+10),e.stroke(),e.fillStyle="#e8e4d8",e.font="22px system-ui, Segoe UI, sans-serif",e.textAlign="left",e.textBaseline="top";const g=(i==null?void 0:i.body)||"",b=Math.max(90,h+10);if(Uu(e,g,36,b,t-72,30,9),this._linkRect=null,this._linkUrl||this._portalRoom){const m=this._linkLabel||(this._portalRoom?"Enter":"Open link"),f=Math.min(t-72,Math.max(220,e.measureText(m).width+48)),_=52,y=(t-f)/2,x=n-78;this._linkRect={x:y,y:x,w:f,h:_},e.fillStyle=this._hover==="link"?"rgba(255, 193, 74, 0.28)":"rgba(255, 193, 74, 0.12)",rr(e,y,x,f,_,12),e.fill(),e.strokeStyle=this._hover==="link"?"#ffe08a":"#ffc14a",e.lineWidth=2.5,rr(e,y,x,f,_,12),e.stroke(),e.fillStyle="#ffc14a",e.font="bold 24px system-ui, Segoe UI, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(m,t/2,x+_/2)}this.tex.needsUpdate=!0}}function rr(r,e,t,n,i,s){const o=Math.min(s,n/2,i/2);r.beginPath(),r.moveTo(e+o,t),r.arcTo(e+n,t,e+n,t+i,o),r.arcTo(e+n,t+i,e,t+i,o),r.arcTo(e,t+i,e,t,o),r.arcTo(e,t,e+n,t,o),r.closePath()}function In(r){return String(r??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class yM{constructor({camera:e,renderer:t}){this.camera=e,this.renderer=t,this.item=null,this.anchor=null,this._tmp=new A,this.onClose=null,this.layer=document.createElement("div"),this.layer.className="media-overlay-layer",this.layer.setAttribute("aria-hidden","true"),document.body.appendChild(this.layer),this.root=document.createElement("div"),this.root.className="media-overlay",this.root.hidden=!0,this.root.setAttribute("role","dialog"),this.root.setAttribute("aria-modal","true"),this.layer.appendChild(this.root)}isOpen(){return!!this.item&&!this.root.hidden}show(e,t){var o;this.item=e,this.anchor=t;const n=Fc(e),i=e.title||"Story";this.root.setAttribute("aria-label",i);let s="";if(n.type==="youtube"&&n.youtubeId){const a=pM(n.youtubeId);s=`<div class="media-overlay__stage media-overlay__stage--video">
        <iframe
          class="media-overlay__frame"
          src="${In(a)}"
          title="${In(i)}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowfullscreen
        ></iframe>
      </div>`}else if(n.type==="pdf"&&n.url)s=`<div class="media-overlay__stage media-overlay__stage--web">
        <p class="media-overlay__body">${In(e.body||"")}</p>
        <p class="media-overlay__note">Open the PDF in your browser to read the full document.</p>
        <a class="media-overlay__open" href="${In(n.url)}" target="_blank" rel="noopener noreferrer">${In(e.urlLabel||"Open PDF")}</a>
      </div>`;else if(n.type==="web"&&n.url){const a=bM(n.url);s=`<div class="media-overlay__stage media-overlay__stage--web">
        <p class="media-overlay__body">${In(e.body||"")}</p>
        <p class="media-overlay__host">${In(a)}</p>
        <p class="media-overlay__note">This page cannot play inside the room (most sites block embedding). Open it in the browser.</p>
        <a class="media-overlay__open" href="${In(n.url)}" target="_blank" rel="noopener noreferrer">${In(e.urlLabel||"Open website")}</a>
      </div>`}else{this.hide();return}this.root.innerHTML=`
      <button type="button" class="media-overlay__close" aria-label="Close">×</button>
      <h2 class="media-overlay__title">${In(i)}</h2>
      ${s}
    `,(o=this.root.querySelector(".media-overlay__close"))==null||o.addEventListener("click",a=>{var l;a.preventDefault(),a.stopPropagation(),(l=this.onClose)==null||l.call(this)}),this.root.hidden=!1,this.layer.setAttribute("aria-hidden","false"),this.update()}hide(){this.item=null,this.anchor=null,this.root.hidden=!0,this.root.innerHTML="",this.layer.setAttribute("aria-hidden","true")}update(){var c,h;if(!this.item||this.root.hidden)return;if((h=(c=this.renderer)==null?void 0:c.xr)!=null&&h.isPresenting){this.root.style.visibility="hidden";return}if(!this.anchor){this.root.style.visibility="hidden";return}const e=this.camera,t=this.renderer.domElement.clientWidth,n=this.renderer.domElement.clientHeight;if(!t||!n)return;const i=this._tmp.copy(this.anchor).project(e);if(i.z>1){this.root.style.visibility="hidden";return}const s=(i.x*.5+.5)*t,o=(-i.y*.5+.5)*n,a=e.position.distanceTo(this.anchor),l=Math.min(1.15,Math.max(.55,3.2/Math.max(.8,a)));this.root.style.visibility="visible",this.root.style.left=`${s}px`,this.root.style.top=`${o}px`,this.root.style.transformOrigin="center bottom",this.root.style.transform=`translate(-50%, -100%) scale(${l})`}}function ku(r,e,t,n){const i=String(e||"").split(/\s+/).filter(Boolean),s=[];let o="";for(const a of i){const l=o?`${o} ${a}`:a;if(r.measureText(l).width>t&&o){if(s.push(o),o=a,s.length>=n)break}else o=l}return o&&s.length<n&&s.push(o),s}class vM{constructor({scene:e}){this.scene=e,this.group=new gt,this.group.name="WorldMediaScreen",this.group.visible=!1,e.add(this.group),this.canvas=document.createElement("canvas"),this.canvas.width=1024,this.canvas.height=640,this.ctx=this.canvas.getContext("2d"),this.tex=new Ld(this.canvas),this.tex.colorSpace=ht,this.mesh=new he(new Vt(1.55,.97),new Be({map:this.tex,transparent:!0,depthTest:!1,depthWrite:!1,side:ut})),this.mesh.renderOrder=1002,this.mesh.position.y=.97*.5,this.group.add(this.mesh),this.item=null,this.media=null,this._closeRect={x:960,y:24,w:48,h:48},this._openRect=null,this._thumb=null,this._token=0,this.onClose=null,this.onOpenExternal=null}isActive(){return this.group.visible}getMeshes(){return this.group.visible?[this.mesh]:[]}async show(e){if(this.hide({silent:!0}),this.item=e,this.media=Fc(e),this.media.type!=="youtube"&&this.media.type!=="pdf")return;this.group.visible=!0;const t=++this._token;this._paint(),this.media.type==="youtube"&&this.media.youtubeId&&(await this._loadThumb(this.media.youtubeId,t),t===this._token&&this._paint())}hide({silent:e=!1}={}){var t;this._token+=1,this.item=null,this.media=null,this._thumb=null,this.group.visible=!1,e||(t=this.onClose)==null||t.call(this)}syncPose(e){!this.group.visible||!e||(this.group.position.copy(e.position),this.group.quaternion.copy(e.quaternion),this.group.scale.copy(e.scale))}pick(e){if(!this.group.visible)return null;const t=e.intersectObject(this.mesh,!1);if(!t.length||!t[0].uv)return null;const n=t[0].uv,i=n.x*this.canvas.width,s=(1-n.y)*this.canvas.height;return this._hit(this._closeRect,i,s)?"close":this._hit(this._openRect,i,s)?"open":"body"}onActivate(e){var n,i,s;const t=this.pick(e);return t?t==="close"?((n=this.onClose)==null||n.call(this),!0):(t==="open"&&((i=this.media)!=null&&i.url)&&((s=this.onOpenExternal)==null||s.call(this,this.media.url)),!0):!1}_hit(e,t,n){return e?t>=e.x&&t<=e.x+e.w&&n>=e.y&&n<=e.y+e.h:!1}async _loadThumb(e,t){if(!e)return;const n=await new Promise(i=>{const s=new Image;s.crossOrigin="anonymous",s.onload=()=>i(s),s.onerror=()=>i(null),s.src=mM(e)});t===this._token&&(this._thumb=n)}_paint(){var c,h,u,d,p;const e=this.ctx,t=this.canvas.width,n=this.canvas.height;e.clearRect(0,0,t,n),e.fillStyle="rgba(12, 10, 8, 0.94)",vo(e,0,0,t,n,28),e.fill(),e.strokeStyle="#ffc14a",e.lineWidth=4,vo(e,0,0,t,n,28),e.stroke();const i=((c=this.item)==null?void 0:c.title)||"Media";e.fillStyle="#ffc14a",e.font="bold 32px system-ui, Segoe UI, sans-serif",e.textAlign="left",e.textBaseline="top",e.fillText(i,28,22,t-120),this._closeRect={x:t-72,y:16,w:52,h:52},e.beginPath(),e.arc(t-46,42,22,0,Math.PI*2),e.strokeStyle="#ffc14a",e.stroke(),e.strokeStyle="#e8e4d8",e.lineWidth=3,e.beginPath(),e.moveTo(t-54,34),e.lineTo(t-38,50),e.moveTo(t-38,34),e.lineTo(t-54,50),e.stroke();let s=88;if(((h=this.media)==null?void 0:h.type)==="youtube"&&this._thumb){const g={x:28,y:84,w:t-56,h:280};e.fillStyle="#000",e.fillRect(g.x,g.y,g.w,g.h);const b=this._thumb.width||1,m=this._thumb.height||1,f=Math.min(g.w/b,g.h/m),_=b*f,y=m*f;e.drawImage(this._thumb,g.x+(g.w-_)/2,g.y+(g.h-y)/2,_,y),s=g.y+g.h+18}e.fillStyle="#e8e4d8",e.font="22px system-ui, Segoe UI, sans-serif",e.textAlign="left";const o=ku(e,((u=this.item)==null?void 0:u.body)||"",t-64,4);for(const g of o)e.fillText(g,32,s,t-64),s+=30;const a=((d=this.media)==null?void 0:d.type)==="pdf"?_M:gM;e.fillStyle="#cbb88a",e.font="20px system-ui, Segoe UI, sans-serif",s+=8;for(const g of ku(e,a,t-64,4))e.fillText(g,32,s,t-64),s+=28;this._openRect={x:t/2-150,y:n-70,w:300,h:48};const l=((p=this.media)==null?void 0:p.type)==="pdf"?"Open PDF":"Open video";e.fillStyle="rgba(255, 193, 74, 0.16)",vo(e,this._openRect.x,this._openRect.y,this._openRect.w,this._openRect.h,12),e.fill(),e.strokeStyle="#ffc14a",e.lineWidth=2,vo(e,this._openRect.x,this._openRect.y,this._openRect.w,this._openRect.h,12),e.stroke(),e.fillStyle="#ffc14a",e.font="bold 22px system-ui, Segoe UI, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(l,t/2,this._openRect.y+24),this.tex.needsUpdate=!0}}function vo(r,e,t,n,i,s){const o=Math.min(s,n/2,i/2);r.beginPath(),r.moveTo(e+o,t),r.arcTo(e+n,t,e+n,t+i,o),r.arcTo(e+n,t+i,e,t+i,o),r.arcTo(e,t+i,e,t,o),r.arcTo(e,t,e+n,t,o),r.closePath()}function hc(r){return String(r??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function MM(r){return hc(r).replace(/"/g,"&quot;")}function SM(r){return r.kind==="portal"?"Navigation":r.kind==="youtube"?"Video":r.kind==="link"?"Link":"Story"}class wM{constructor({container:e,onActivateEntry:t}){this.container=e,this.onActivateEntry=t,this.entries=[]}setEntries(e=[]){this.entries=e,this.render()}render(){if(!this.container)return;const e=window.matchMedia("(max-width: 1100px), (max-height: 700px), (pointer: coarse)").matches,t=this.container.classList.contains("is-open");if(!this.entries.length){this.container.innerHTML=`
        <button type="button" class="room-contents-toggle" aria-expanded="false">In this room</button>
        <p class="room-contents-empty">No stories placed in this room yet.</p>
      `,this._bindToggle(e,t);return}const n=this.entries.map(i=>`<li>
          <button
            type="button"
            class="room-content-btn${i.kind==="portal"?" room-content-btn--portal":""}"
            data-entry-id="${MM(i.id)}"
          >
            <span class="room-content-btn__label">${hc(i.title||"Hotspot")}</span>
            <span class="room-content-btn__meta">${hc(SM(i))}</span>
          </button>
        </li>`).join("");this.container.innerHTML=`
      <button type="button" class="room-contents-toggle" aria-expanded="true">
        In this room
      </button>
      <ul class="room-contents-list">${n}</ul>
    `,this._bindToggle(e,t),this.container.querySelectorAll("[data-entry-id]").forEach(i=>{i.addEventListener("click",()=>{var s;window.matchMedia("(max-width: 1100px), (max-height: 700px), (pointer: coarse)").matches&&(this.container.classList.remove("is-open"),this._syncToggle()),(s=this.onActivateEntry)==null||s.call(this,i.dataset.entryId)})})}_bindToggle(e,t){this.container.classList.toggle("is-open",e?t:!0);const n=this.container.querySelector(".room-contents-toggle");n&&(n.addEventListener("click",()=>{this.container.classList.toggle("is-open"),this._syncToggle()}),this._syncToggle())}_syncToggle(){const e=this.container.querySelector(".room-contents-toggle");if(!e)return;const t=this.container.classList.contains("is-open");e.setAttribute("aria-expanded",t?"true":"false"),e.textContent=t?"In this room":"Stories"}}class EM{constructor(){this.el=document.getElementById("a11y-announcer")}announce(e,{priority:t="polite"}={}){!this.el||!e||(this.el.setAttribute("aria-live",t),this.el.textContent="",requestAnimationFrame(()=>{this.el.textContent=e}))}}const AM=8,Mo=1.2;class TM{constructor(e,t,n,i){this.scene=e,this.camera=t,this.renderer=n,this.xrInput=i,this._raycaster=new Vi,this._origin=new A,this._dir=new A,this._hitPoint=new A,this._lasers=[],this.domDot=null,this._ensureControllerLasers()}_ensureControllerLasers(){var t;const e=((t=this.xrInput)==null?void 0:t.controllers)||[];for(let n=0;n<e.length;n+=1){const i=e[n];if(!i||i.userData.uiLaserAttached)continue;i.userData.uiLaserAttached=!0,i.visible=!0;const s=n===0?8377599:16756848,o=new vi({color:s,transparent:!0,opacity:.9,depthTest:!1}),a=new Wi(new rt().setFromPoints([new A(0,0,0),new A(0,0,-1)]),o);a.name="UILaserBeam",a.frustumCulled=!1,a.renderOrder=1001,a.scale.z=Mo,a.visible=!0,i.add(a);const l=new he(new ln(.006,12,12),new Be({color:16777215,transparent:!0,opacity:.95,depthTest:!1}));l.name="UILaserTip",l.position.z=-Mo,l.renderOrder=1002,l.visible=!0,i.add(l);const c=new gt;c.name="UILaserHitMarker",c.visible=!1;const h=new he(new ln(.012,16,16),new Be({color:16777215,transparent:!0,opacity:1,depthTest:!1})),u=new he(new Ko(.018,.028,24),new Be({color:s,transparent:!0,opacity:.95,side:ut,depthTest:!1}));u.rotation.x=Math.PI/2,c.add(h,u),c.renderOrder=1003,this.scene.add(c),this._lasers.push({controller:i,beam:a,tip:l,marker:c,index:n})}}update(e=[]){var n;if(this._ensureControllerLasers(),!this.renderer.xr.isPresenting){for(const i of this._lasers)i.beam.visible=!1,i.tip.visible=!1,i.marker.visible=!1;for(const i of((n=this.xrInput)==null?void 0:n.controllers)||[])i.userData.aimRay&&(i.userData.aimRay.visible=!1);return}const t=(e||[]).filter(Boolean);for(const i of this._lasers){const{controller:s,beam:o,tip:a,marker:l}=i;s.visible=!0,o.visible=!0,a.visible=!0,s.updateMatrixWorld(!0),s.getWorldPosition(this._origin),this._dir.set(0,0,-1).transformDirection(s.matrixWorld).normalize(),this._raycaster.set(this._origin,this._dir),this._raycaster.far=AM;let c=null;if(t.length){const h=this._raycaster.intersectObjects(t,!0);h.length&&(c=h[0])}if(o.visible=!0,a.visible=!0,c){const h=Math.max(.05,c.distance);o.scale.z=h,a.position.z=-h,o.material.opacity=.95,a.material.color.setHex(16777215),l.visible=!0,l.position.copy(c.point),l.lookAt(this._origin);const u=Mt.clamp(.7+h*.05,.75,1.4);l.scale.setScalar(u)}else o.scale.z=Mo,a.position.z=-Mo,o.material.opacity=.35,a.material.color.setHex(8956603),l.visible=!1}}dispose(){for(const e of this._lasers)e.controller.remove(e.beam),e.controller.remove(e.tip),this.scene.remove(e.marker);this._lasers.length=0}}async function CM(){const r={...fn.lighting||{}};try{const e=await fetch(`${gs("lighting.snapshot.json")}?t=${Date.now()}`,{cache:"no-store"});if(!e.ok)return r;const t=await e.json(),n=t==null?void 0:t.lighting;return!n||typeof n!="object"?r:(console.info("[Lighting] Loaded lighting.snapshot.json"),{...r,...n})}catch{return r}}function RM(){var r,e;return((e=(r=window.matchMedia)==null?void 0:r.call(window,"(prefers-reduced-motion: reduce)"))==null?void 0:e.matches)??!1}function rl(){if(typeof window>"u")return!1;const r=navigator.userAgent||"";return/Android|iPhone|iPad|iPod|Mobile|Tablet|Quest|OculusBrowser|PicoBrowser/i.test(r)||navigator.maxTouchPoints>1||"ontouchstart"in window?!0:window.matchMedia("(pointer: coarse), (hover: none), (max-width: 1100px), (max-height: 700px)").matches}class PM{constructor({deadzone:e=.16}={}){var t,n;this.deadzone=e,this.max=46,this.moveX=0,this.moveY=0,this.active=!1,this._pointerId=null,this.onCompactChange=null,this.root=document.getElementById("mobile-move"),this.root||(this.root=document.createElement("div"),this.root.id="mobile-move",this.root.className="virtual-joystick",document.body.appendChild(this.root)),this.root.classList.add("virtual-joystick"),this.root.setAttribute("aria-hidden","true"),this.root.setAttribute("aria-label","Movement joystick"),this.knob=this.root.querySelector(".virtual-joystick__knob"),this.knob||(this.knob=document.createElement("div"),this.knob.className="virtual-joystick__knob",this.root.appendChild(this.knob)),this.root.addEventListener("pointerdown",i=>this._down(i)),window.addEventListener("pointermove",i=>this._move(i)),window.addEventListener("pointerup",i=>this._up(i)),window.addEventListener("pointercancel",i=>this._up(i)),window.addEventListener("resize",()=>this._syncVisibility()),this._mq=window.matchMedia("(pointer: coarse), (hover: none), (max-width: 1100px), (max-height: 700px)"),this._syncVisibility(),(n=(t=this._mq).addEventListener)==null||n.call(t,"change",()=>this._syncVisibility())}isCompact(){return rl()}isActive(){return this.active}sample(){return{moveX:this.moveX,moveY:this.moveY}}refreshVisibility(){this._syncVisibility()}_syncVisibility(){var n;const e=rl(),t=e&&!document.body.classList.contains("xr-presenting");this.root.classList.toggle("is-visible",t),document.body.classList.toggle("is-compact",e),t||this._reset(),(n=this.onCompactChange)==null||n.call(this,e)}_down(e){var t,n;rl()&&(document.body.classList.contains("xr-presenting")||(e.preventDefault(),e.stopPropagation(),this.active=!0,this._pointerId=e.pointerId,(n=(t=this.root).setPointerCapture)==null||n.call(t,e.pointerId),this._update(e)))}_move(e){!this.active||e.pointerId!==this._pointerId||(e.preventDefault(),this._update(e))}_up(e){!this.active||e&&e.pointerId!==this._pointerId||this._reset()}_update(e){const t=this.root.getBoundingClientRect(),n=t.left+t.width/2,i=t.top+t.height/2;let s=e.clientX-n,o=e.clientY-i;const a=Math.hypot(s,o)||1;a>this.max&&(s*=this.max/a,o*=this.max/a),this.knob.style.transform=`translate(calc(-50% + ${s}px), calc(-50% + ${o}px))`;let l=s/this.max,c=-o/this.max;Math.hypot(l,c)<this.deadzone&&(l=0,c=0),this.moveX=l,this.moveY=c}_reset(){this.active=!1,this._pointerId=null,this.moveX=0,this.moveY=0,this.knob.style.transform="translate(-50%, -50%)"}}function ol(r){if(!r||r<=0)return"";const e=r/(1024*1024);return e>=1?`${e.toFixed(1)} MB`:`${(r/1024).toFixed(0)} KB`}class LM{constructor(){this.config=fn,this.clock=new Cm,this.statusEl=document.getElementById("status"),this.progressEl=document.getElementById("load-progress"),this.barEl=document.getElementById("load-bar"),this.scene=new Oo,this.camera=new Kt(70,window.innerWidth/window.innerHeight,.05,500);const{renderer:e}=My(document.body);this.renderer=e,e.domElement.setAttribute("role","img"),e.domElement.setAttribute("aria-label","Walkable Harlem Renaissance scene. Hold right mouse button to look, WASD to move, Tab for rooms and stories."),e.domElement.setAttribute("tabindex","-1"),this.announcer=new EM,this.hotspotA11yEl=document.getElementById("hotspot-a11y"),this.defaultStatus="Walk up to a gold marker for stories, videos, and links. Tab for rooms and stories. Esc closes a story.",this.roomContents=null,fn.model.enableShadows||(e.shadowMap.enabled=!1),this.environment=new Ey(this.scene,e,fn.lighting||{}),fn.debug.showOriginAxes&&this.environment.addOriginAxes(1.25),this.playerGuiState={noClip:!1},this.rig=new P0(this.camera,{eyeHeight:fn.player.eyeHeight,xrEyeBoost:fn.player.xrEyeBoost}),this.rig.setRenderer(e),this.scene.add(this.rig.root),this.nav=new _v,this.meshCollision=new R0(fn.player),this.locomotion=new L0(this.rig,this.nav,fn.player,this.meshCollision),this.teleport=new I0(this.rig,this.nav,fn.player,this.meshCollision),this.teleport.attachToScene(this.scene),this.desktop=new D0(this.rig,e.domElement,{onNoClipToggle:t=>this.setNoClip(t)}),this.mobile=new PM,this.mobile.onCompactChange=()=>this._applyCompactHud(),this.xrInput=new j0(e,this.scene,{dolly:this.rig.head}),this.teleport.setControllers(this.xrInput.controllers),this.uiLaser=new TM(this.scene,this.camera,e,this.xrInput),this._uiRaycaster=new Vi,this._uiNdc=new De,this._uiOrigin=new A,this._uiDir=new A,this.camera.userData.renderer=e,this._onUiPointerMove=t=>this._handleUiPointerMove(t),this._onUiPointerDown=t=>this._handleUiPointerDown(t),this._onUiPointerUp=t=>this._handleUiPointerUp(t),e.domElement.addEventListener("pointermove",this._onUiPointerMove),e.domElement.addEventListener("pointerdown",this._onUiPointerDown),e.domElement.addEventListener("pointerup",this._onUiPointerUp),this.vrButton=J0(e),this.lightingPanel=null,fn.debug.showLightingPanel!==!1&&(this.lightingPanel=new dM(this.environment,{playerState:this.playerGuiState,onNoClipChange:t=>this.setNoClip(t)})),this.contentLoader=null,this.spawnMarker=null,this.transformPanel=null,this.playerPosPanel=null,this.hotspotTool=null,this.hotspots=null,this.room=Ms(),this._navRebuildTimer=null,this._stairRamps=[],this._stageRamps=[],this.navmeshSource="none",this._onResize=()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()},window.addEventListener("resize",this._onResize),e.xr.addEventListener("sessionstart",()=>{var t,n;this.rig.onEnterXR(),document.body.classList.add("xr-presenting"),(t=this.mobile)==null||t.refreshVisibility(),this.setStatus("VR session active"),(n=this.announcer)==null||n.announce("VR session active.",{priority:"assertive"})}),e.xr.addEventListener("sessionend",()=>{var t,n;this.rig.onExitXR(),document.body.classList.remove("xr-presenting"),(t=this.mobile)==null||t.refreshVisibility(),this.setStatus("VR session ended - desktop browser controls"),(n=this.announcer)==null||n.announce("VR session ended. Desktop browser controls.",{priority:"assertive"})}),this._onA11yKeyDown=t=>{var n;t.key==="Escape"&&(n=this.hotspots)!=null&&n.active&&this.hotspots.close({dismiss:!0})},window.addEventListener("keydown",this._onA11yKeyDown),this.renderer.setAnimationLoop(()=>this.update()),this.setStatus("Desktop view ready - loading model..."),this._mountRoomSwitcher(),this._bindHudToggle(),this._applyCompactHud(),navigator.xr&&document.body.classList.add("has-webxr")}setNoClip(e){var n;const t=!!e;this.playerGuiState.noClip=t,this.locomotion.setNoClip(t),this.desktop.setNoClip(t),(n=this.lightingPanel)==null||n.setNoClip(t),this.setStatus(t?"No-clip ON - Fly (W/S look dir, Space up, C down, Esc cancel keys)":"No-clip OFF - walk + Space jump, collision on")}setStatus(e){this.statusEl&&(this.statusEl.textContent=e)}setProgress(e,{loaded:t=0,total:n=0}={}){!this.progressEl||!this.barEl||(e<=0?(this.progressEl.hidden=!1,this.barEl.style.width="0%"):e>=1?(this.barEl.style.width="100%",window.setTimeout(()=>{this.progressEl&&(this.progressEl.hidden=!0)},400)):(this.progressEl.hidden=!1,this.barEl.style.width=`${Math.round(e*100)}%`),n>0&&e<1?this.setStatus(`Loading model... ${Math.round(e*100)}% (${ol(t)} / ${ol(n)})`):e>0&&e<1&&n<=0&&this.setStatus(`Loading model... ${ol(t)} received`))}async init(){var s,o,a,l,c,h,u,d,p,g,b,m;try{const f=await CM();this.environment.applyLightingObject(f,{bakeAsDefaults:!0}),this.lightingPanel&&(this.lightingPanel._sun.azimuth=f.sunAzimuth??40,this.lightingPanel._sun.elevation=f.sunElevation??55,(o=(s=this.lightingPanel.gui)==null?void 0:s.controllersRecursive)==null||o.call(s).forEach(_=>_.updateDisplay()))}catch(f){console.warn("[App] lighting load skipped",f)}this.setProgress(0),this.room.modelExtra?this.config.model.modelExtra=this.room.modelExtra:delete this.config.model.modelExtra,this.contentLoader=new dv(this.config.model,{onProgress:({loaded:f,total:_,ratio:y})=>{this.setProgress(y,{loaded:f,total:_})}});const e=await this.contentLoader.load();this.setProgress(1),this.contentRoot=e.contentRoot,this.scene.add(e.contentRoot),this.config.debug.showHotspotTool!==!1&&(this.hotspotTool=new fM({scene:this.scene,camera:this.camera,renderer:this.renderer,getTarget:()=>e.visual,onStatus:f=>this.setStatus(f)})),this.mediaOverlay=new yM({camera:this.camera,renderer:this.renderer}),this.worldMedia=new vM({scene:this.scene}),this.mediaOverlay.onClose=()=>{var f;return(f=this.hotspots)==null?void 0:f.close({dismiss:!0})},this.worldMedia.onClose=()=>{var f;return(f=this.hotspots)==null?void 0:f.close({dismiss:!0})},this.worldMedia.onOpenExternal=f=>{try{window.open(f,"_blank","noopener,noreferrer")}catch(_){console.warn("[App] open media failed",_)}},this.hotspots=new xM({scene:this.scene,camera:this.camera,renderer:this.renderer,getPlayerPosition:()=>{const f=new A;return this.camera.getWorldPosition(f),f},getOccluders:()=>{var f;return((f=this.meshCollision)==null?void 0:f.colliders)||[]},reducedMotion:RM(),onOpen:f=>this._onHotspotOpened(f),onClose:f=>this._onHotspotClosed(f),mediaOverlay:this.mediaOverlay,worldMedia:this.worldMedia});try{if(this.room.hotspotsUrl){const f=await fetch(this.room.hotspotsUrl,{cache:"no-store"});if(!f.ok)throw new Error(`Hotspots ${f.status}`);const _=await f.json();this._resolveHotspotMeshPositions(_),this.hotspots.loadFromData(_)}}catch(f){console.warn("[App] hotspot load skipped",f)}if(this._mountRoomContents(),this.navmeshSource=e.navmeshSource||"none",e.bounds&&!e.bounds.isEmpty()){const f=new A;e.bounds.getSize(f);const _=f.length()*.5;this.camera.far=Math.max(200,_*4+50),this.camera.updateProjectionMatrix()}this._fixCottonFloorZFight(e.visual),this._fixCottonAwningZFight(e.visual),this._fixCottonPianoKeys(e.visual),(l=(a=this.room)==null?void 0:a.stairRamps)!=null&&l.length&&this._prepareStairRampSources(e.visual),(h=(c=this.room)==null?void 0:c.stageRamps)!=null&&h.length&&this._prepareStageRampSources(e.visual),this.setStatus("Building mesh collision (BVH)...");const t=this.meshCollision.buildFromObject(e.visual,{showDebug:!!this.config.debug.showMeshCollisionDebug,scene:this.scene});(d=(u=this.room)==null?void 0:u.stairRamps)!=null&&d.length&&this._installStairRamps(e.visual),(g=(p=this.room)==null?void 0:p.stageRamps)!=null&&g.length&&this._installStageRamps(e.visual),this._installSafetyVolume(e.visual);let n=!1;if(this.navmeshSource==="authored"||this.config.player.collisionMode==="navmesh"?(this.setStatus("Building navmesh..."),n=this._rebuildNavmesh()):this.config.debug.showNavmesh&&e.navmeshMesh&&(n=this._rebuildNavmesh()),this._applyCollisionMode(),this._snapHotspotMarkerHeights(),!t&&!n){this.setStatus("No collision available - view only. Check console."),this.config.debug.showModelPanel!==!1&&(this._mountTransformPanel(),this._mountPlayerPosPanel());return}this.respawnAtCenter(),this.config.debug.showModelPanel!==!1&&(this._mountTransformPanel(),this._mountPlayerPosPanel());const i=((b=this.room)==null?void 0:b.name)||"Room";this.defaultStatus=`${i} ready. Walk up to a gold marker for stories, videos, and links.`,this.setStatus(this.defaultStatus),(m=this.announcer)==null||m.announce(`${i} loaded.`,{priority:"assertive"})}_applyCollisionMode(){const e=this.config.player.collisionMode||"auto";e==="mesh"?this.locomotion.mode="mesh":e==="navmesh"?this.locomotion.mode="navmesh":this.locomotion.mode=this.navmeshSource==="authored"&&this.nav.ready?"navmesh":"mesh",this.locomotion.setMeshCollision(this.meshCollision),this.teleport.setMeshCollision(this.meshCollision),console.info(`[App] Collision mode=${this.locomotion.mode} (navmeshSource=${this.navmeshSource}, meshReady=${this.meshCollision.ready})`)}_mountTransformPanel(){this.transformPanel||this.config.debug.showModelPanel===!1||(this.transformPanel=new Z0({getTransform:()=>this._getTransform(),getViewYaw:()=>this._getViewYaw(),onNudge:e=>this.nudgeModel(e),onReset:()=>this.resetModelTransform(),onRespawn:()=>{this.respawnAtCenter(),this.setStatus("Respawned on floor")}}))}_mountPlayerPosPanel(){this.playerPosPanel||this.config.debug.showModelPanel===!1||(this.playerPosPanel=new Q0({getFeetPosition:()=>this.rig.root.position.clone(),getCameraPosition:()=>{const e=new A;return this.camera.getWorldPosition(e),e},getViewYaw:()=>this._getViewYaw()}))}_getViewYaw(){return this.renderer.xr.isPresenting?new Rn().setFromQuaternion(this.camera.quaternion,"YXZ").y:this.rig.yaw}_getTransform(){const e=this.config.model;return{position:[...e.position||[0,0,0]],scale:e.scale??1,rotation:[...e.rotation||[0,0,0]]}}nudgeModel(e={}){var m;if(!this.contentLoader)return;const{x:t=0,y:n=0,z:i=0,padForward:s=0,padRight:o=0,space:a="view",scaleMul:l}=e;let c=t,h=n,u=i;if(s!==0||o!==0)if(a==="world")c+=o,u+=-s;else{const f=this._getViewYaw(),_=-Math.sin(f),y=-Math.cos(f),x=Math.cos(f),M=-Math.sin(f);c+=_*s+x*o,u+=y*s+M*o}const d=this.config.model.position||[0,0,0];if(this.config.model.position=[d[0]+c,d[1]+h,d[2]+u],l&&l>0){const f=(this.config.model.scale??1)*l;this.config.model.scale=Math.min(50,Math.max(.01,f))}this.contentLoader.applyTransformFromConfig(),this.meshCollision.refreshMatrices(),(this.locomotion.mode==="navmesh"||this.config.debug.showNavmesh)&&this._scheduleNavRebuild(),(m=this.transformPanel)==null||m.refreshReadout();const[p,g,b]=this.config.model.position;this.setStatus(`Model pos ${p.toFixed(2)}, ${g.toFixed(2)}, ${b.toFixed(2)} - scale ${(this.config.model.scale??1).toFixed(3)} - ${a}`)}resetModelTransform(){var e;this.contentLoader&&(this.config.model.position=[0,0,0],this.config.model.scale=1,this.contentLoader.applyTransformFromConfig(),this.meshCollision.refreshMatrices(),(this.locomotion.mode==="navmesh"||this.config.debug.showNavmesh)&&this._scheduleNavRebuild(!0),(e=this.transformPanel)==null||e.refreshReadout(),this.setStatus("Model transform reset to centered defaults"))}_resolveHotspotMeshPositions(e){const t=this.contentRoot;if(!t||!(e!=null&&e.hotspots))return;t.updateWorldMatrix(!0,!0);const n=o=>{const a=String(o).toLowerCase();let l=null;return t.traverse(c=>{l||c.name&&c.name.toLowerCase()===a&&(l=c)}),l},i=o=>{const a=new Ce().setFromObject(o);return a.isEmpty()?null:a.getCenter(new A)};let s=0;for(const o of e.hotspots){if(Array.isArray(o.position)&&o.position.length===3){s+=1;continue}let a=o.meshHint?n(o.meshHint):null;if(!a&&o.fallbackMesh&&(a=n(o.fallbackMesh)),!a){console.warn("[App] hotspot mesh missing:",o.id,o.meshHint,o.fallbackMesh);continue}const l=i(a);if(l){if(Number.isFinite(Number(o.markerHeight))){const c=Number.isFinite(Number(o.floorY))?Number(o.floorY):1.864;l.y=c+Number(o.markerHeight)}else l.y+=o.yOffset??.15;Array.isArray(o.offset)&&o.offset.length===3&&(l.x+=Number(o.offset[0])||0,l.y+=Number(o.offset[1])||0,l.z+=Number(o.offset[2])||0),o.position=[Number(l.x.toFixed(3)),Number(l.y.toFixed(3)),Number(l.z.toFixed(3))],s+=1,console.info("[App] placed hotspot",o.id,o.position,"via",a.name)}}console.info("[App] hotspots placed",s,"/",e.hotspots.length)}_snapHotspotMarkerHeights(){var d,p;const e=(d=this.hotspots)==null?void 0:d.items;if(!(e!=null&&e.length)||((p=this.room)==null?void 0:p.id)==="apartment")return;const t="portal-to-apartment",n=.12,i=.4,s=2.8,o=.16,a=4,l=1.15,c=(g,b)=>{const m=g.filter(y=>y.area>=a&&y.y<=b+.35);if(m.length)return Math.max(...m.map(y=>y.y));if(!g.length)return null;const f=g.filter(y=>y.y<=b+.05),_=f.length?f:g;return Math.min(..._.map(y=>y.y))},h=e.find(g=>g.id===t);let u=l;if(h!=null&&h.position){const g=this._sphereHitsDown(h.position.x,h.position.y+.05,h.position.z,n,s),b=c(g,h.position.y);if(b!=null){const m=h.position.y-b;m>.4&&m<2.2&&(u=m),console.info("[App] exit-portal sphereCast",{pinY:Number(h.position.y.toFixed(3)),groundY:Number(b.toFixed(3)),copiedHeight:Number(u.toFixed(3))})}}for(const g of e){if(!g.position||g.id===t)continue;const b=g.position.y,m=this._sphereHitsDown(g.position.x,b+i,g.position.z,n,s),f=c(m,b);if(f==null){console.info("[App] hotspot height skip (no ground)",g.id);continue}let _=f+u;const y=m.filter(x=>x.y>f+.08&&x.y<_+n);if(y.length){const x=Math.max(...y.map(M=>M.y));_<x+n&&(_=x+o)}g.position.y=_,g.marker&&(g.marker.position.y=_),console.info("[App] hotspot height",g.id,_.toFixed(3),{groundY:Number(f.toFixed(3)),copiedHeight:Number(u.toFixed(3)),blocker:y.length?Number(Math.max(...y.map(x=>x.y)).toFixed(3)):null})}}_sphereHitsDown(e,t,n,i,s){var m,f;const o=[];(m=this.contentRoot)==null||m.traverse(_=>{var y,x;_.isMesh&&((y=_.userData)!=null&&y.isHotspotMarker||(x=_.userData)!=null&&x.isHotspotPanel||String(_.name||"").startsWith("SafetyWall")||o.push(_))});for(const _ of((f=this.meshCollision)==null?void 0:f.colliders)||[])_.isMesh&&(String(_.name||"").startsWith("SafetyWall")||o.push(_));if(!o.length)return[];const a=new Vi;a.firstHitOnly=!1;const l=new A(0,-1,0),c=new A,h=new A,u=new A,d=new Ce,p=[[0,0]],g=8;for(let _=0;_<g;_+=1){const y=_/g*Math.PI*2;p.push([Math.cos(y)*i,Math.sin(y)*i])}const b=[];for(const[_,y]of p){c.set(e+_,t,n+y),a.set(c,l),a.near=0,a.far=s;const x=a.intersectObjects(o,!1);for(const M of x){if(!M.face||!M.object||(h.copy(M.face.normal).transformDirection(M.object.matrixWorld).normalize(),h.y<.45))continue;const E=M.point.y;b.some(w=>Math.abs(w.y-E)<.08)||(d.setFromObject(M.object),d.getSize(u),b.push({y:E,area:Math.abs(u.x*u.z),name:M.object.name||""}))}}return b}_fixCottonFloorZFight(e){var o;if(((o=this.room)==null?void 0:o.id)!=="cotton-club"||!e)return;const t=[];if(e.traverse(a=>{!a.isMesh||!a.name||!/^Plane00[25]$/i.test(a.name)&&a.name!=="Plane002"&&a.name!=="Plane005"||t.push(a)}),t.length||e.traverse(a=>{a.isMesh&&(a.name==="Plane002"||a.name==="Plane005")&&t.push(a)}),t.length<2){console.info("[App] cotton floor z-fight: expected Plane002+Plane005, found",t.map(a=>a.name));return}t.sort((a,l)=>a.name.localeCompare(l.name));const n=t[0],i=t[1];i.position.y-=.004;const s=(a,l)=>{const c=Array.isArray(a.material)?a.material:[a.material];for(const h of c)h&&(h.polygonOffset=!0,h.polygonOffsetFactor=l,h.polygonOffsetUnits=l,h.needsUpdate=!0)};s(n,-1),s(i,2),i.updateMatrixWorld(!0),console.info("[App] cotton floor z-fight fix",n.name,"over",i.name)}_fixCottonAwningZFight(e){var f;if(((f=this.room)==null?void 0:f.id)!=="cotton-club"||!e)return;let t=null,n=null;e.traverse(_=>{!_.isMesh||!_.name||(_.name==="Mesh_1"&&(t=_),_.name==="polySurface117_2"&&(n=_))});const i=n||t;if(!i){console.info("[App] cotton awning: no Mesh_1 / polySurface117_2");return}t&&(t.visible=!1,t.userData.skipCollision=!0),n&&(n.visible=!1,n.userData.skipCollision=!0),i.updateWorldMatrix(!0,!1);const s=new Ce().setFromObject(i),o=s.getSize(new A),a=s.getCenter(new A);this._marqueeFix&&(this.scene.remove(this._marqueeFix),this._marqueeFix.traverse(_=>{_.geometry&&_.geometry.dispose(),_.material&&_.material.dispose()}),this._marqueeFix=null);const l=Array.isArray(i.material)?i.material[0]:i.material,c=new gt;c.name="MarqueeSolid",c.position.copy(a);const h=o.x,u=o.y,d=o.z,p=new kn({color:1052688,roughness:.88,metalness:0,transparent:!1,depthWrite:!0,side:ut}),g=(_,y,x,M,E,w)=>{const T=new he(_,p);T.position.set(y,x,M),T.rotation.set(E,w,0),c.add(T)};g(new Vt(h,d),0,u*.5,0,-Math.PI/2,0),g(new Vt(h,u),0,0,d*.5,0,0),g(new Vt(h,u),0,0,-d*.5,0,Math.PI),g(new Vt(d,u),h*.5,0,0,0,Math.PI/2),g(new Vt(d,u),-h*.5,0,0,0,-Math.PI/2);const b=new Be({color:10132122,map:(l==null?void 0:l.map)||null,transparent:!1,depthWrite:!0,side:ut}),m=new he(new Vt(h*.998,d*.998),b);m.rotation.x=Math.PI/2,m.position.y=-u*.5+.01,m.renderOrder=2,c.add(m),this.scene.add(c),this._marqueeFix=c,c.updateMatrixWorld(!0),console.info("[App] cotton awning: open-bottom marquee",h.toFixed(2),u.toFixed(2),d.toFixed(2))}_fixCottonPianoKeys(e){var i;if(((i=this.room)==null?void 0:i.id)!=="cotton-club"||!e)return;let t=null;if(e.traverse(s=>{s.isMesh&&s.name==="PianoLP"&&(t=s)}),!t){console.warn("[App] PianoLP missing");return}const n=Array.isArray(t.material)?t.material:[t.material];for(let s=0;s<n.length;s+=1){const o=n[s];if(!o)continue;const a=o.clone();a.transparent=!1,a.opacity=1,a.depthWrite=!0,a.depthTest=!0,a.alphaTest=0,a.side=ut,a.needsUpdate=!0,n[s]=a}t.material=n.length===1?n[0]:n,console.info("[App] PianoLP keys: opaque depthWrite on")}_prepareStairRampSources(e){var s;const t=(s=this.room)==null?void 0:s.stairRamps;if(!(t!=null&&t.length)||!e)return;const n=o=>String(o).toLowerCase().replace(/[._\s-]+/g,""),i=new Set(["Stairs.001","Stairs001","Stairs"].map(n));for(const o of t){if(!(o!=null&&o.meshName))continue;i.add(n(o.meshName));const a=this._findStairSource(e,o.meshName);if(!a){console.warn("[App] stair ramp source missing:",o.meshName);continue}const l=c=>{if(!(c!=null&&c.isMesh))return;c.userData.isStairSource=!0;const h=!!(c.name&&i.has(n(c.name))),u=c===a;o.skipSourceCollision&&(u||h)?(c.userData.skipCollision=!0,console.info("[App] stair source skipCollision",c.name||a.name)):(u||h)&&console.info("[App] stair source marked (keep collision)",c.name||a.name)};l(a),a.traverse(c=>{c!==a&&l(c)})}}_prepareStageRampSources(e){var n;const t=(n=this.room)==null?void 0:n.stageRamps;if(!(!(t!=null&&t.length)||!e))for(const i of t){const s=this._findStairSource(e,i.meshName||"Cube001");if(!s)continue;const o=a=>{a.isMesh&&(a.userData.isStagePlatform=!0,a.userData.skipCollision=!0)};o(s),s.traverse(a=>{a!==s&&o(a)}),console.info("[App] stage source skipCollision",s.name)}}_installStageRamps(e){var i;this._disposeStageRamps();const t=(i=this.room)==null?void 0:i.stageRamps;if(!(t!=null&&t.length)||!e)return;e.updateWorldMatrix(!0,!0);const n=!!this.config.debug.showMeshCollisionDebug;for(const s of t){const o=s.meshName||"Cube001",a=this._findStairSource(e,o);if(!a){console.warn("[App] stage ramp mesh not found:",o);continue}a.traverse(P=>{P.isMesh&&(P.userData.isStagePlatform=!0,P.userData.skipCollision=!0)});const l=new Ce().setFromObject(a);if(l.isEmpty())continue;const c=l.min,h=l.max,u=(c.z+h.z)*.5,d=s.footExtend??1.25,p=s.topInset??.85,g=s.widthScale??.95,b=!!(s.debug||n),m=c.y+.02,f=h.y+.08,_=new A(c.x-d,m,u),y=new A(c.x+p,f,u),x=(h.z-c.z)*g,M=Iu({bottom:_,top:y,width:x,yBias:0,debug:b});M.name="StageRamp",M.userData.isStairRamp=!0,this.scene.add(M),this.meshCollision.addCollider(M),this._stageRamps.push(M);const E=(h.x-c.x)*.98,w=(h.z-c.z)*.98,T=new jt(E,.06,w),S=new Be({color:65416,transparent:!0,opacity:b?.25:0,depthWrite:!1}),v=new he(T,S);v.name="StageTop",v.userData.isStairRamp=!0,v.position.set((c.x+h.x)*.5,h.y+.02,u),this.scene.add(v),this.meshCollision.addCollider(v),this._stageRamps.push(v),console.info("[App] stage ramp+deck installed",a.name,"rise",(f-m).toFixed(2),"debug",b)}}_installStairRamps(e){var i;this._disposeStairRamps();const t=(i=this.room)==null?void 0:i.stairRamps;if(!(t!=null&&t.length)||!e)return;e.updateWorldMatrix(!0,!0);const n=!!this.config.debug.showMeshCollisionDebug;for(const s of t){const o=s.meshName||"Stairs001",a=this._findStairSource(e,o);if(!a){console.warn("[App] stair ramp mesh not found (tried alts):",o);continue}const l=new Ce().setFromObject(a);if(l.isEmpty()){console.warn("[App] stair ramp empty bounds:",o,"runtime=",a.name);continue}const c=l.getSize(new A),h=l.min,u=l.max,d=(h.x+u.x)*.5,p=(h.z+u.z)*.5,g=s.yBias??.14,b=s.footExtend??.38,m=s.topExtend??.12,f=s.widthScale??.92,_=!!(s.debug||n);let y,x,M;if(c.z>=c.x){const w=h.y+Math.min(c.y*.95,c.z*.62);y=new A(d,h.y+Math.min(g,.05),u.z+b),x=new A(d,w+g+.08,h.z-m),M=c.x*f}else{const w=h.y+Math.min(c.y*.95,c.x*.62);y=new A(u.x+b,h.y+Math.min(g,.05),p),x=new A(h.x-m,w+g+.08,p),M=c.z*f}const E=Iu({bottom:y,top:x,width:M,yBias:0,debug:_});E.userData.debugColor=_?16711935:void 0,this.scene.add(E),this.meshCollision.addCollider(E),this._stairRamps.push(E),console.info(`[App] stair ramp installed runtime=${a.name} spec=${o} debug=${_}`,"bottom",y.toArray().map(w=>Number(w.toFixed(3))),"top",x.toArray().map(w=>Number(w.toFixed(3))),"size",c.toArray().map(w=>Number(w.toFixed(3))))}}_disposeStageRamps(){var e,t,n,i,s;if(!((e=this._stageRamps)!=null&&e.length)){this._stageRamps=[];return}for(const o of this._stageRamps)this.scene.remove(o),(n=(t=o.geometry)==null?void 0:t.dispose)==null||n.call(t),o.material&&(Array.isArray(o.material)?o.material.forEach(a=>{var l;return(l=a.dispose)==null?void 0:l.call(a)}):(s=(i=o.material).dispose)==null||s.call(i));this._stageRamps=[]}_disposeStairRamps(){var e,t,n,i,s;if(!((e=this._stairRamps)!=null&&e.length)){this._stairRamps=[];return}for(const o of this._stairRamps)this.scene.remove(o),(n=(t=o.geometry)==null?void 0:t.dispose)==null||n.call(t),o.material&&(Array.isArray(o.material)?o.material.forEach(a=>{var l;return(l=a.dispose)==null?void 0:l.call(a)}):(s=(i=o.material).dispose)==null||s.call(i));this._stairRamps=[]}_findStairSource(e,t){if(!e||!t)return null;const n=s=>String(s).toLowerCase().replace(/[._\s-]+/g,""),i=[...new Set([t,"Stairs.001","Stairs001","Stairs"])];for(const s of i){const o=n(s);if(!o)continue;let a=null;if(e.traverse(l=>{a||!l.name||n(l.name)===o&&(a=l)}),a)return a}return null}_findNamedObject(e,t){if(!e||!t)return null;const n=a=>String(a).toLowerCase().replace(/[._\s-]+/g,""),i=n(t);let s=null,o=null;return e.traverse(a=>{if(s||!a.name)return;const l=n(a.name);l===i?s=a:!o&&l.length>3&&(l.includes(i)||i.includes(l))&&(o=a)}),s||o}respawnAtCenter(){var c,h,u;const e=(c=this.room)==null?void 0:c.spawnPosition,t=this.config.player.spawnPosition||[0,0,0],[n,i,s]=e||t,o=new A(n,i,s);let a=o.clone();if((h=this.meshCollision)!=null&&h.ready){const d=this.meshCollision.getGroundAt(o,new A,{maxStepUp:3,maxDrop:3});a=d?d.clone():this.meshCollision.getSpawnPosition(o)}this.rig.setFeetPosition(a);const l=(u=this.room)==null?void 0:u.spawnYawDeg;Number.isFinite(l)&&this.rig.setLook(Mt.degToRad(l),0),this.locomotion.velocityY=0,this.locomotion.grounded=!this.locomotion.noClip,this._updateSpawnMarker(a)}_updateSpawnMarker(e){this.config.debug.showSpawnMarker&&(this.spawnMarker||(this.spawnMarker=new he(new ln(.08,16,16),new Be({color:16763955})),this.scene.add(this.spawnMarker)),this.spawnMarker.position.copy(e).add(new A(0,.08,0)))}_installSafetyVolume(e){var f,_;if(this._safetyGroup&&(this.scene.remove(this._safetyGroup),this._safetyGroup.traverse(y=>{y.geometry&&y.geometry.dispose(),y.material&&y.material.dispose()}),this._safetyGroup=null),!e||!this.meshCollision)return;const t=((f=this.room)==null?void 0:f.safetyVolume)||{},n=t.padXZ??5,i=t.wallHeight??6,s=t.wallThickness??.4;e.updateWorldMatrix(!0,!0);const o=new Ce().setFromObject(e),a=((_=this.room)==null?void 0:_.spawnPosition)||[0,0,0];o.expandByPoint(new A(a[0],a[1],a[2])),o.min.x-=n,o.max.x+=n,o.min.z-=n,o.max.z+=n;const c=(Number.isFinite(a[1])?a[1]:o.min.y)-.02,h=o.max.x-o.min.x,u=o.max.z-o.min.z,d=(o.min.x+o.max.x)*.5,p=(o.min.z+o.max.z)*.5,g=new Be({visible:!1,side:ut});this._safetyGroup=new gt,this._safetyGroup.name="SafetyVolume";const b=(y,x,M,E,w,T,S)=>{const v=new he(new jt(y,x,M),g);v.name=S,v.position.set(E,w,T),v.updateMatrixWorld(!0),this._safetyGroup.add(v),this.meshCollision.addCollider(v)};b(h,.16,u,d,c,p,"SafetyFloor");const m=c+i*.5;b(s,i,u,o.min.x,m,p,"SafetyWall-X"),b(s,i,u,o.max.x,m,p,"SafetyWall+X"),b(h,i,s,d,m,o.min.z,"SafetyWall-Z"),b(h,i,s,d,m,o.max.z,"SafetyWall+Z"),this.scene.add(this._safetyGroup),this._fallY=c-2.5,console.info(`[App] safety volume ${h.toFixed(1)}×${u.toFixed(1)} pad=${n} floorY=${c.toFixed(2)}`)}_checkFallRespawn(){var i,s,o;if((i=this.locomotion)!=null&&i.noClip)return;const e=this.rig.root.position.y,t=((o=(s=this.room)==null?void 0:s.spawnPosition)==null?void 0:o[1])??0,n=Number.isFinite(this._fallY)?this._fallY:t-5;e<n&&(this.respawnAtCenter(),this.setStatus("Returned to spawn"))}_scheduleNavRebuild(e=!1){if(this._navRebuildTimer&&(clearTimeout(this._navRebuildTimer),this._navRebuildTimer=null),e){this._rebuildNavmesh();return}this._navRebuildTimer=setTimeout(()=>{this._navRebuildTimer=null,this._rebuildNavmesh()},120)}_rebuildNavmesh(){var t;if(!((t=this.contentLoader)!=null&&t.navmeshMesh))return!1;let e=!1;try{e=this.nav.buildFromMesh(this.contentLoader.navmeshMesh,this.scene,{showDebug:this.config.debug.showNavmesh})}catch(n){console.error("[App] navmesh build threw:",n),e=!1}return e&&this.nav.setDebugVisible(!!this.config.debug.showNavmesh),e}update(){var s,o,a,l,c,h,u,d,p,g,b,m;const e=Math.min(this.clock.getDelta(),.05);if(this.renderer.xr.isPresenting){this.xrInput.update(),this.locomotion.update(e,this.xrInput.moveAxes,this.xrInput.lookAxes,!1,{vertical:0,jumpPressed:!1}),this.teleport.update();for(const f of this.xrInput.controllers)this._setControllerRay(f),(o=(s=this.hotspots)==null?void 0:s.onPointerMove)==null||o.call(s,this._uiRaycaster);for(const f of this.xrInput.triggerJustPressed||[])f!=null&&f.controller&&(this._setControllerRay(f.controller),(l=(a=this.hotspots)==null?void 0:a.onActivate)==null||l.call(a,this._uiRaycaster))}else{this.desktop.update();const f=((h=(c=this.mobile)==null?void 0:c.sample)==null?void 0:h.call(c))||{moveX:0,moveY:0},_={x:this.desktop.moveAxes.x+(f.moveX||0),y:this.desktop.moveAxes.y+(f.moveY||0)};this.locomotion.update(e,_,this.desktop.lookAxes,this.desktop.sprint,{vertical:this.desktop.vertical,jumpPressed:this.desktop.jumpPressed})}this._checkFallRespawn(),(u=this.transformPanel)==null||u.updateCompass(),(d=this.playerPosPanel)==null||d.refresh();const n=new A;this.camera.getWorldPosition(n),(p=this.hotspots)==null||p.update(n);const i=((b=(g=this.hotspots)==null?void 0:g.getWorldUiMeshes)==null?void 0:b.call(g))||[];(m=this.uiLaser)==null||m.update(i),this.renderer.render(this.scene,this.camera)}_setMenuRayFromEvent(e){const t=this.renderer.domElement.getBoundingClientRect();this._uiNdc.x=(e.clientX-t.left)/t.width*2-1,this._uiNdc.y=-((e.clientY-t.top)/t.height)*2+1,this._uiRaycaster.setFromCamera(this._uiNdc,this.camera)}_setControllerRay(e){e&&(e.updateMatrixWorld(!0),e.getWorldPosition(this._uiOrigin),this._uiDir.set(0,0,-1).transformDirection(e.matrixWorld).normalize(),this._uiRaycaster.set(this._uiOrigin,this._uiDir),this._uiRaycaster.far=8)}_handleUiPointerMove(e){var t,n;this.renderer.xr.isPresenting||(this._setMenuRayFromEvent(e),(n=(t=this.hotspots)==null?void 0:t.onPointerMove)==null||n.call(t,this._uiRaycaster))}_handleUiPointerDown(e){var t,n,i,s;e.button!==0||this.renderer.xr.isPresenting||(n=(t=e.target).closest)!=null&&n.call(t,".hotspot-tool, .model-panel, .lil-gui, #hud, #vr-entry, .room-switcher, .room-contents, .skip-link, .media-overlay, .media-overlay-layer, .virtual-joystick, .hint-toggle, .a11y-chrome, .a11y-tab, #a11y-settings")||(this._setMenuRayFromEvent(e),(s=(i=this.hotspots)==null?void 0:i.onPointerMove)==null||s.call(i,this._uiRaycaster))}_handleUiPointerUp(e){var t,n,i,s,o,a,l;e.button!==0||this.renderer.xr.isPresenting||(t=this.desktop)!=null&&t.didLookDrag||(i=(n=this.mobile)==null?void 0:n.isActive)!=null&&i.call(n)||(o=(s=e.target).closest)!=null&&o.call(s,".hotspot-tool, .model-panel, .lil-gui, #hud, #vr-entry, .room-switcher, .room-contents, .skip-link, .media-overlay, .media-overlay-layer, .virtual-joystick, .hint-toggle, .a11y-chrome, .a11y-tab, #a11y-settings")||(this._setMenuRayFromEvent(e),(l=(a=this.hotspots)==null?void 0:a.onActivate)==null||l.call(a,this._uiRaycaster))}_bindHudToggle(){const e=document.getElementById("hud"),t=document.getElementById("hide-hints"),n=()=>{if(!t||!e)return;const i=e.classList.contains("is-hidden");t.textContent=i?"Show hints":"Hide hints",t.setAttribute("aria-expanded",i?"false":"true")};t==null||t.addEventListener("click",()=>{e==null||e.classList.toggle("is-hidden"),e==null||e.classList.toggle("is-open",!e.classList.contains("is-hidden")),n()}),window.addEventListener("keydown",i=>{i.code!=="KeyH"||i.repeat||i.target instanceof HTMLInputElement||i.target instanceof HTMLTextAreaElement||(e==null||e.classList.toggle("is-hidden"),e==null||e.classList.toggle("is-open",!e.classList.contains("is-hidden")),n())}),n()}_applyCompactHud(){const e=document.getElementById("hud"),t=document.getElementById("hide-hints");t&&(t.textContent=e!=null&&e.classList.contains("is-hidden")?"Show hints":"Hide hints")}_mountRoomContents(){var t;const e=document.getElementById("room-contents");e&&(this.roomContents=new wM({container:e,onActivateEntry:n=>this._activateRoomEntry(n)}),this.roomContents.setEntries(((t=this.hotspots)==null?void 0:t.items)||[]))}_activateRoomEntry(e){var i,s;const t=(s=(i=this.hotspots)==null?void 0:i.items)==null?void 0:s.find(o=>o.id===e);if(!t)return;this.hotspots.open(t,{fromProximity:!1})||this._onHotspotOpened(t,{blocked:!0})}_onHotspotOpened(e,{blocked:t=!1}={}){var o;const n=(e==null?void 0:e.title)||"Story",i=(e==null?void 0:e.body)||"",s=t?`${n}. ${i} Walk to the gold marker to view this in the room.`:`Opened ${n}. ${i}`;(o=this.announcer)==null||o.announce(s.trim(),{priority:"polite"}),this.hotspotA11yEl&&(this.hotspotA11yEl.textContent=`${n}. ${i}`.trim())}_onHotspotClosed(e){var n;const t=(e==null?void 0:e.title)||"Story";(n=this.announcer)==null||n.announce(`Closed ${t}.`,{priority:"polite"}),this.hotspotA11yEl&&(this.hotspotA11yEl.textContent="")}_mountRoomSwitcher(){const e=document.createElement("nav");e.id="room-nav",e.className="room-switcher",e.tabIndex=-1,e.setAttribute("aria-label","Rooms"),e.innerHTML=Jl.map(t=>{const n=t.id===this.room.id?' aria-current="page"':"";return`<a href="?room=${t.id}"${n}>${t.name}</a>`}).join(""),document.body.appendChild(e)}}const tf=new LM;window.__harlemApp=tf;tf.init().catch(r=>{console.error(r);const e=document.getElementById("status");e&&(e.textContent=`Init failed: ${r.message||r}`)});
