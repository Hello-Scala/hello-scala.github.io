function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-B3oGZdE0.js","assets/index-BShbyapt.js","assets/index-BwHJICW6.css","assets/OptionsColor-CsytPRJ9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-BShbyapt.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-B3oGZdE0.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
