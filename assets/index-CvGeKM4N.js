function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Grabber-Cw-A9rP0.js","assets/CanvasUtils-WSe1mUaS.js","assets/index-BShbyapt.js","assets/index-BwHJICW6.css","assets/ExternalInteractorBase-CIi3zRdK.js","assets/OptionsColor-CsytPRJ9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-BShbyapt.js";import{O as s}from"./OptionsColor-CsytPRJ9.js";class r{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(i){i&&(i.blink!==void 0&&(this.blink=i.blink),i.color!==void 0&&(this.color=s.create(this.color,i.color)),i.consent!==void 0&&(this.consent=i.consent),i.opacity!==void 0&&(this.opacity=i.opacity))}}class f{constructor(){this.distance=100,this.links=new r}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links))}}async function a(n,i=!0){await n.addInteractor("externalGrab",async o=>{const{Grabber:t}=await e(()=>import("./Grabber-Cw-A9rP0.js"),__vite__mapDeps([0,1,2,3,4,5]));return new t(o)},i)}export{f as Grab,r as GrabLinks,a as loadExternalGrabInteraction};
