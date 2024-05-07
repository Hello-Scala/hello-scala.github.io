function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorbersPlugin-bFgi4GY8.js","assets/index-BShbyapt.js","assets/index-BwHJICW6.css","assets/ValueWithRandom-CHmK2ILS.js","assets/AnimationOptions-B9XhRS-k.js","assets/OptionsColor-CsytPRJ9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BShbyapt.js";async function n(o,r=!0){const{AbsorbersPlugin:t}=await i(()=>import("./AbsorbersPlugin-bFgi4GY8.js").then(a=>a.a),__vite__mapDeps([0,1,2,3,4,5]));await o.addPlugin(new t,r)}export{n as loadAbsorbersPlugin};
