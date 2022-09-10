var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,o,a)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[o]=a,l=(e,t)=>{for(var o in t||(t={}))n.call(t,o)&&s(e,o,t[o]);if(a)for(var o of a(t))r.call(t,o)&&s(e,o,t[o]);return e},i=(e,a)=>t(e,o(a)),c=("undefined"!=typeof require&&require,(e,t)=>{var o={};for(var s in e)n.call(e,s)&&t.indexOf(s)<0&&(o[s]=e[s]);if(null!=e&&a)for(var s of a(e))t.indexOf(s)<0&&r.call(e,s)&&(o[s]=e[s]);return o});import"./modulepreload-polyfill.b7f2da20.js";import{d as u,a as h,c as d,b as p,e as g,n as m,o as f,r as v,f as y,g as w,F as b,h as k,i as _,j as x,t as C,l as S,s as P,k as z,m as E,w as I,v as O,p as q,q as D,u as j,x as A}from"./vendor.f5330ee6.js";const N=/Android|iPhone|webOS|BlackBerry|SymbianOS|Windows Phone|iPad|iPod/i.test(window.navigator.userAgent);async function U(e,t){if(!e)return Promise.resolve("");const o=await u.toPng(e,{filter:e=>function(e){e instanceof SVGElement&&Array.from(e.querySelectorAll("use")||[]).forEach((t=>{const o=t.getAttribute("xlink:href");if(o&&!e.querySelector(o)){const t=document.querySelector(o);t&&e.insertBefore(t.cloneNode(!0),e.children[0])}}));return!0}(e),quality:1});if(!N){const e=document.createElement("a");return e.download=`zelda-words-${Date.now()}.png`,e.href=o,e.click(),""}return o}var W=h({name:"WordIcon",props:{name:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""},color:{type:String,default:""},opacity:{type:String,default:""}},setup:e=>({fullName:d((()=>`#icon-${e.name}`)),iconStyle:d((()=>{const t={};return e.color&&(t.color=e.color),null!=e.width&&(t.width="number"==typeof e.width?`${e.width}px`:e.width),null!=e.height&&(t.height="number"==typeof e.height?`${e.height}px`:e.height),null!=e.opacity&&(t.opacity=e.opacity),t}))})});const $=["xlink:href"];W.render=function(e,t,o,a,n,r){return f(),p("svg",{class:"word-icon","aria-hidden":"true",style:m(e.iconStyle)},[e.name?(f(),p("use",{key:0,"xlink:href":e.fullName},null,8,$)):g("",!0)],4)};var M={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",a:"a",b:"b",c:"c",d:"d",e:"e",f:"f",g:"g",h:"h",i:"i",j:"j",k:"k",l:"l",m:"m",n:"n",o:"o",p:"p",q:"q",r:"r",s:"s",t:"t",u:"u",v:"v",w:"w",x:"x",y:"y",z:"z",".":"period","!":"exclam","?":"question","-":"hyphen"},R=h({name:"WordsPanel",components:{WordIcon:W},props:{words:{type:String,required:!0},size:{type:String,default:"60"},fontColor:{type:String,required:!0},backgroundColor:{type:String,required:!0},vertical:{type:Boolean,default:!1}},setup:e=>{const t=v(null),o=d((()=>{let t=0,o=0;const a=Number(e.size),n=e.words.toLowerCase().split("\n").map((n=>{const r=n.length*a;t=Math.max(r,t),o+=Number(a);return{style:e.vertical?{width:`${a}px`,height:`${r}px`}:{width:`${r}px`,height:`${a}px`},items:n.split("").map((e=>M[e]||""))}}));t+=2*a,o+=2*a;const r=e.vertical?o:t,s=e.vertical?t:o;return{items:n,containerWidth:r,containerHeight:s,style:{width:`${r}px`,height:`${s}px`,padding:`${a}px`,color:e.fontColor,backgroundColor:e.backgroundColor}}})),a=d((()=>{if(window.innerWidth<768){const{innerWidth:e,innerHeight:t}=window,a=e,n=t-380,{containerWidth:r,containerHeight:s}=o.value;return{transform:`scale(${Math.min(a/r,n/s)})`}}return{}}));return{container:t,wrapStyle:a,groups:o,download:()=>U(t.value,(Number(e.size),e.words,e.vertical,e.fontColor,e.backgroundColor,o.value.containerWidth,o.value.containerHeight)).catch((e=>{window.alert(e.message||"图片导出出错！"),console.log(e)}))}}});R.render=function(e,t,o,a,n,r){const s=y("WordIcon");return f(),p("section",{style:m(e.wrapStyle)},[w("div",{class:_(["words-panel",{"words-panel--vertical":e.vertical}]),ref:"container",style:m(e.groups.style)},[(f(!0),p(b,null,k(e.groups.items,((t,o)=>(f(),p("div",{class:"words-panel__groups",key:o,style:m(t.style)},[(f(!0),p(b,null,k(t.items,((t,o)=>(f(),x(s,{key:o,name:t,width:e.size,height:e.size},null,8,["name","width","height"])))),128))],4)))),128))],6)],4)};var L=[{symbol:"a",path:"sheikah-icon/a.svg"},{symbol:"b",path:"sheikah-icon/b.svg"},{symbol:"c",path:"sheikah-icon/c.svg"},{symbol:"d",path:"sheikah-icon/d.svg"},{symbol:"e",path:"sheikah-icon/e.svg"},{symbol:"f",path:"sheikah-icon/f.svg"},{symbol:"g",path:"sheikah-icon/g.svg"},{symbol:"h",path:"sheikah-icon/h.svg"},{symbol:"i",path:"sheikah-icon/i.svg"},{symbol:"j",path:"sheikah-icon/j.svg"},{symbol:"k",path:"sheikah-icon/k.svg"},{symbol:"l",path:"sheikah-icon/l.svg"},{symbol:"m",path:"sheikah-icon/m.svg"},{symbol:"n",path:"sheikah-icon/n.svg"},{symbol:"o",path:"sheikah-icon/o.svg"},{symbol:"p",path:"sheikah-icon/p.svg"},{symbol:"q",path:"sheikah-icon/q.svg"},{symbol:"r",path:"sheikah-icon/r.svg"},{symbol:"s",path:"sheikah-icon/s.svg"},{symbol:"t",path:"sheikah-icon/t.svg"},{symbol:"u",path:"sheikah-icon/u.svg"},{symbol:"v",path:"sheikah-icon/v.svg"},{symbol:"w",path:"sheikah-icon/w.svg"},{symbol:"x",path:"sheikah-icon/x.svg"},{symbol:"y",path:"sheikah-icon/y.svg"},{symbol:"z",path:"sheikah-icon/z.svg"},{symbol:"0",path:"sheikah-icon/0.svg"},{symbol:"1",path:"sheikah-icon/1.svg"},{symbol:"2",path:"sheikah-icon/2.svg"},{symbol:"3",path:"sheikah-icon/3.svg"},{symbol:"4",path:"sheikah-icon/4.svg"},{symbol:"5",path:"sheikah-icon/5.svg"},{symbol:"6",path:"sheikah-icon/6.svg"},{symbol:"7",path:"sheikah-icon/7.svg"},{symbol:"8",path:"sheikah-icon/8.svg"},{symbol:"9",path:"sheikah-icon/9.svg"},{symbol:".",path:"sheikah-icon/period.svg"},{symbol:"-",path:"sheikah-icon/hyphen.svg"},{symbol:"!",path:"sheikah-icon/exclam.svg"},{symbol:"?",path:"sheikah-icon/question.svg"}];function V(e){const t=function(e){const t=(e,t,o)=>Math.floor(.299*e+.587*t+.114*o),o=[];for(let a=0;a<e.width;a++)for(let n=0;n<e.height;n++){const r=4*(a+n*e.width),s=t(e.data[r+0],e.data[r+1],e.data[r+2]);o.push(s)}return o}(e);let o=0,a=Array(256).fill(0),n=t.length;for(;o<n;){a[255&t[o++]]++}let r=0;for(let h=0;h<256;h++)r+=h*a[h];let s=0,l=0,i=0,c=0,u=0;for(let h=0;h<256;h++){if(s+=a[h],0===s)continue;if(l=n-s,0===l)break;i+=h*a[h];let e=s*l*(i/s-(r-i)/l)**2;e>c&&(c=e,u=h)}return u}function B(e){return new Promise(((t,o)=>{const a=new Image;a.crossOrigin="anonymous",a.onload=()=>t(a),a.onerror=e=>o(e),a.src=e}))}function H(e,t){const o=document.createElement("canvas");return o.width=e,o.height=t,o}function F(e,t=!1){const{width:o,height:a,data:n}=e,r=[0,1,2],s=r.map((e=>n[e])),l=[];if(t)for(let i=0;i<a;i++){let e=0;for(let t=0;t<o;t++){const a=4*(i*o+t);e+=r.every((e=>s[e]===n[a+e]))?0:1}l.push(e)}else for(let i=0;i<o;i++){let e=0;for(let t=0;t<a;t++){const a=4*(t*o+i);e+=r.every((e=>s[e]===n[a+e]))?0:1}l.push(e)}return l}function T(e){const t=[];let o=0,a=0;return e.forEach((e=>{e?(o+=1,a&&(t.push({background:!0,value:a}),a=0)):(a+=1,o&&(t.push({foreground:!0,value:o}),o=0))})),o&&t.push({foreground:!0,value:o}),a&&t.push({background:!0,value:a}),t}function G(e){return e.reduce(((e,t)=>t.foreground?Math.max(e,t.value):e),0)}function J(e,t){const o=[];let a=[];return e.forEach((e=>{if(a.length){a.push(e);const n=a.reduce(((e,t)=>e+t.value),0);(n>=t||Math.pow(n-t,2)<4)&&(o.push({foreground:!0,value:n}),a=[])}else e.foreground&&e.value<t?a=[e]:o.push(e)})),o}function X(e){const t=[];let o=0;return e.forEach((e=>{e.foreground&&t.push({offset:o,size:e.value}),o+=e.value})),t}function K(e,t){const{naturalWidth:o,naturalHeight:a}=e,n=H(o,a).getContext("2d");n.drawImage(e,0,0);const r=function(e){const{width:t,height:o,data:a}=e,n=V(e),r=((a[0]+a[1]+a[2])/3|0)>n?[0,255]:[255,0],s=new ImageData(t,o);for(let l=0;l<t;l++)for(let e=0;e<o;e++){const o=4*(e*t+l),i=((a[o]+a[o+1]+a[o+2])/3|0)>n?r[0]:r[1];s.data[o]=i,s.data[o+1]=i,s.data[o+2]=i,s.data[o+3]=255}return s}(n.getImageData(0,0,o,a)),s=H(o,a).getContext("2d");s.putImageData(r,0,0);const l=F(r,!0),i=F(r,!1);t&&(console.log("rowsPixels:",JSON.stringify(l)),console.log("colsPixels:",JSON.stringify(i)));const c=T(l),u=T(i),h=Math.max(G(c),G(u)),d=X(J(c,h)),p=[];return d.forEach((e=>{X(J(T(F(s.getImageData(0,e.offset,o,e.size),!1)),h)).forEach((t=>{const o=H(t.size,e.size),a=o.getContext("2d"),n=s.getImageData(t.offset,e.offset,t.size,e.size);a.putImageData(n,0,0),p.push({x:t.offset,y:e.offset,width:t.size,height:t.size,canvas:o})}))})),p}function Q(e,t){const o=H(t,t).getContext("2d");return o.drawImage(e,0,0,e.width,e.height,0,0,t,t),o.getImageData(0,0,t,t)}async function Y(e,t){return K(e,t).map((e=>{var t=e,{canvas:o}=t,a=c(t,["canvas"]);const n=function(e){const{width:t,height:o,data:a}=e,n=V(e),r=((a[0]+a[1]+a[2])/3|0)>n?[0,1]:[1,0],s=new Uint8Array(t*o);for(let l=0;l<t;l++)for(let e=0;e<o;e++){const o=e*t+l,i=a[4*o]>n?r[0]:r[1];s.set([i],o)}return s}(Q(o,16));return i(l({},a),{hash:n})}))}function Z(e,t,o){const a=H(t,o),n=a.getContext("2d"),r=e[0];return n.fillStyle="#000",n.strokeStyle="#000",n.font=`${Math.floor(r.width)}px -apple-system, Arial, sans-serif`,n.textAlign="center",n.textBaseline="middle",e.forEach((e=>{n.fillText(e.word,e.x+Math.round(e.width/2),e.y+Math.round(e.height/2),e.width)})),a.toDataURL()}async function ee(e,t){const o=await B(t),a=await Y(o,!1),n=a.map(((e,t)=>({name:"abcdefghijklmnopqrstuvwxyz0123456789.-!?"[t],value:e.hash})));const r=await B(e),s=function(e,t){return e.map((e=>{var o=e,{hash:a}=o,n=c(o,["hash"]);if(a.every((e=>e===a[0])))return" ";let r=Number.MAX_SAFE_INTEGER,s="*";return t.forEach((e=>{const t=function(e,t){let o=0;return e.forEach(((e,a)=>{o+=e^t[a]})),o}(a,e.value);t<r&&(r=t,s=e.name)})),i(l({},n),{word:s,diff:r})}))}(await Y(r,!0),n);if(s.length)return Z(s,r.naturalWidth,r.naturalHeight);throw window.alert("无法解析"),new Error("PARSE ERROR")}async function te(e){const t=await B(e),o=K(t,!1),a=function(e,t){e.forEach((e=>{const o=Q(e.canvas,t),a=new Float32Array(o.data.length/4);let n=0;for(let t=0;t<o.data.length;t+=4){const e=o.data[t],r=o.data[t+1],s=o.data[t+2];a[n]=(.299*e+.587*r+.114*s)/255,n+=1}e.data=a}));const o=[e.length,t,t,1],a=P(o),n=new Float32Array(a);return e.forEach(((e,o)=>{n.set(e.data,o*t*t)})),C(n,o)}(o,28),n=(await S("https://markdown-write.oss-cn-hangzhou.aliyuncs.com/model.json")).predict(a),r=Array.from(n.argMax(1).dataSync()).map(((e,t)=>{const a=L[e];return i(l({},o[t]),{word:a.symbol})}));if(console.log("results",r),r.length)return Z(r,t.naturalWidth,t.naturalHeight);throw window.alert("无法解析"),new Error("PARSE ERROR")}var oe=h({name:"ParsePanel",props:{url:{type:String,default:""},useConvnet:{type:Boolean,default:!1}},setup:(e,t)=>{const o=v(null),a=v(""),n=()=>t.emit("close"),r=e=>{o.value.contains(e.target)||n()};return z((()=>{document.body.addEventListener("click",r,!1),console.log("使用卷积神经网络进行识别：",e.useConvnet),(async()=>{try{a.value=e.useConvnet?await te(e.url):await ee(e.url,"/zelda-words/assets/map.efa40bbb.png")}catch(t){console.log(t),a.value=""}})()})),E((()=>{document.body.removeEventListener("click",r,!1)})),{container:o,resultImage:a,close:n}}});const ae={ref:"container",class:"parse-panel"},ne=["src"],re={key:1,class:"parse-panel__message"};oe.render=function(e,t,o,a,n,r){return f(),p("section",ae,[w("span",{class:"parse-panel__close",onClick:t[0]||(t[0]=(...t)=>e.close&&e.close(...t))},"×"),e.resultImage?(f(),p("img",{key:0,class:"parse-panel__result",src:e.resultImage},null,8,ne)):(f(),p("span",re," 图片解析中...... "))],512)};var se=h({name:"Download",props:{url:{type:String,default:""}},setup:(e,t)=>{const o=v(null),a=e=>{o.value.contains(e.target)||t.emit("close")};return z((()=>{document.body.addEventListener("click",a,!1)})),E((()=>{document.body.removeEventListener("click",a,!1)})),{container:o}}});const le={ref:"container",class:"download"},ie=["src"];se.render=function(e,t,o,a,n,r){return f(),p("section",le,[w("img",{src:e.url},null,8,ie)],512)};var ce=h({name:"App",components:{WordsPanel:R,ParsePanel:oe,Download:se},setup:()=>{const e=v("60"),t=v("#13c2fe"),o=v("#12181a"),a=v(!1),n=v("hello world"),r=v(null),s=v(!1),l=d((()=>{let t=Number(e.value);return t=t%2==0?t:t-1,t=Math.max(20,t),t=Math.min(200,t),String(t)})),i=v(!1),c=v(""),u=v(!1),h=v(""),p=v(!0);return{size:e,limitSize:l,resetSize:()=>{e.value=l.value},fontColor:t,backgroundColor:o,vertical:a,words:n,loading:s,wordsPanel:r,useConvnet:p,downloadImage:async()=>{const e=r.value||{download:()=>{}};s.value=!0;const t=await e.download();t&&(c.value=t,i.value=!0),s.value=!1},uploadImage:({target:e})=>{const[t]=e.files;h.value=URL.createObjectURL(t),u.value=!0,e.value=""},parseImageUrl:h,showParsePanel:u,showDownload:i,downloadUrl:c}}});const ue={class:"container"},he={class:"header"},de={class:"header__group"},pe={class:"header__item",for:"font-color-input"},ge={class:"header__item",for:"background-color-input"},me={class:"header__group"},fe={class:"header__item",for:"vertical-radio"},ve=w("span",null,"Vertical:",-1),ye={class:"header__item",for:"font-size-input"},we=w("span",null,"Size:",-1),be={class:"header__group"},ke={class:"header__item",for:"use-convnet"},_e=w("span",null,"Use Convnet:",-1),xe={class:"header__group"},Ce={class:"header__item header__button",for:"image-upload"},Se=w("span",null,"Parse Image",-1),Pe={class:"content"},ze={class:"words"},Ee={class:"results"};ce.render=function(e,t,o,a,n,r){const s=y("WordsPanel"),l=y("ParsePanel"),i=y("Download");return f(),p("main",ue,[w("section",he,[w("div",de,[w("label",pe,[I(w("input",{class:"header__color",type:"color",id:"font-color-input","onUpdate:modelValue":t[0]||(t[0]=t=>e.fontColor=t)},null,512),[[O,e.fontColor]])]),w("label",ge,[I(w("input",{class:"header__color",type:"color",id:"background-color-input","onUpdate:modelValue":t[1]||(t[1]=t=>e.backgroundColor=t)},null,512),[[O,e.backgroundColor]])])]),w("div",me,[w("label",fe,[ve,I(w("input",{type:"checkbox","onUpdate:modelValue":t[2]||(t[2]=t=>e.vertical=t)},null,512),[[q,e.vertical]])]),w("label",ye,[we,I(w("input",{type:"number",id:"font-size-input",min:"20",max:"200",step:"2","onUpdate:modelValue":t[3]||(t[3]=t=>e.size=t),onBlur:t[4]||(t[4]=(...t)=>e.resetSize&&e.resetSize(...t))},null,544),[[O,e.size]])])]),w("div",be,[w("label",ke,[_e,I(w("input",{id:"use-convnet",type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=t=>e.useConvnet=t)},null,512),[[q,e.useConvnet]])])]),w("div",xe,[w("label",Ce,[Se,w("input",{class:"header__upload",type:"file",id:"image-upload",accept:"image/*",onChange:t[6]||(t[6]=(...t)=>e.uploadImage&&e.uploadImage(...t))},null,32)]),w("span",{class:"header__item header__button",onClick:t[7]||(t[7]=(...t)=>e.downloadImage&&e.downloadImage(...t))},D(e.loading?"Download...":"Download"),1)])]),w("section",Pe,[w("div",ze,[I(w("textarea",{placeholder:"input...","onUpdate:modelValue":t[8]||(t[8]=t=>e.words=t)},null,512),[[O,e.words]])]),w("div",Ee,[j(s,{ref:"wordsPanel",words:e.words,size:e.limitSize,vertical:e.vertical,fontColor:e.fontColor,backgroundColor:e.backgroundColor},null,8,["words","size","vertical","fontColor","backgroundColor"])])]),e.showParsePanel?(f(),x(l,{key:0,url:e.parseImageUrl,"use-convnet":e.useConvnet,onClose:t[9]||(t[9]=t=>e.showParsePanel=!1)},null,8,["url","use-convnet"])):g("",!0),e.showDownload?(f(),x(i,{key:1,url:e.downloadUrl,onClose:t[10]||(t[10]=t=>e.showDownload=!1)},null,8,["url"])):g("",!0)])},function(e){const t="ICON_FONT_SCRIPT";if(document.querySelector(`#${t}`)||!e)return;const o=document.createElement("script");o.id=t,document.body.appendChild(o),o.src=e}("//at.alicdn.com/t/font_2375469_s4wmtifuqro.js"),A(ce).mount("#app");
