import{v as u}from"./index-CwUMUwsV.js";import{a as j,l as h,e as D,i as v,a9 as x}from"./index-BShbyapt.js";function y(d){const{context:o,particle:e,radius:n,opacity:i}=d,t=e.emojiData,r=2,c=n*r,m=o.globalAlpha;t&&(o.globalAlpha=i,o.drawImage(t,-n,-n,c,c),o.globalAlpha=m)}const g='"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';class b{constructor(){this._emojiShapeDict=new Map}destroy(){for(const[o,e]of this._emojiShapeDict)e instanceof ImageBitmap&&(e==null||e.close(),this._emojiShapeDict.delete(o))}draw(o){y(o)}async init(o){const e=o.actualOptions;if(!u.find(t=>j(t,e.particles.shape.type)))return;const n=[h(g)],i=u.map(t=>e.particles.shape.options[t]).find(t=>!!t);i&&D(i,t=>{t.font&&n.push(h(t.font))}),await Promise.all(n)}particleDestroy(o){delete o.emojiData}particleInit(o,e){const i=e.shapeData;if(!(i!=null&&i.value))return;const t=v(i.value,e.randomIndexData),r=i.font??g;if(!t)return;const c=`${t}_${r}`,m=this._emojiShapeDict.get(c);if(m){e.emojiData=m;return}const f=x(e.size.value)*2;let p;const l=x(e.size.value);if(typeof OffscreenCanvas<"u"){const s=new OffscreenCanvas(f,f),a=s.getContext("2d");if(!a)return;a.font=`400 ${l*2}px ${r}`,a.textBaseline="middle",a.textAlign="center",a.fillText(t,l,l),p=s.transferToImageBitmap()}else{const s=document.createElement("canvas");s.width=f,s.height=f;const a=s.getContext("2d");if(!a)return;a.font=`400 ${l*2}px ${r}`,a.textBaseline="middle",a.textAlign="center",a.fillText(t,l,l),p=s}this._emojiShapeDict.set(c,p),e.emojiData=p}}export{b as EmojiDrawer};
