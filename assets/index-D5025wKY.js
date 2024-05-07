function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DestroyUpdater-CKMnDL8e.js","assets/index-BShbyapt.js","assets/index-BwHJICW6.css","assets/ValueWithRandom-CHmK2ILS.js","assets/AnimationOptions-B9XhRS-k.js","assets/OptionsColor-CsytPRJ9.js","assets/OptionsUtils-C_iMO9fv.js","assets/AnimatableColor-BoSyCEGK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-BShbyapt.js";async function _(t,r=!0){await t.addParticleUpdater("destroy",async a=>{const{DestroyUpdater:e}=await o(()=>import("./DestroyUpdater-CKMnDL8e.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]));return new e(t,a)},r)}export{_ as loadDestroyUpdater};
