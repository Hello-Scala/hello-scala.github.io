function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D0g7zxuK.js","assets/index-BShbyapt.js","assets/index-BwHJICW6.css","assets/index-BpBGGhBE.js","assets/index-IVF3VOvb.js","assets/index-C7CE0eI-.js","assets/index-IjbyaPfA.js","assets/index-Bqu-IvmP.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BShbyapt.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-D0g7zxuK.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BpBGGhBE.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-IVF3VOvb.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-C7CE0eI-.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-IjbyaPfA.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Bqu-IvmP.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
