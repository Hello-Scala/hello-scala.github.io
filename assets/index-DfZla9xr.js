function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-BM_j8wmI.js","assets/index-BShbyapt.js","assets/index-BwHJICW6.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BShbyapt.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-BM_j8wmI.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
