import{j as n,a as r}from"./app-22fcf5ab.js";import{S as o}from"./Spinner-19cd8a22.js";function u({className:s="",Icon:t=null,disabled:i,children:a,isLoading:e,...l}){return n("button",{...l,className:`
                relative inline-flex items-center justify-center
                px-4 py-2.5 rounded-lg font-medium
                bg-black text-white
                border border-amber-500/20
                transition-all duration-300
                hover:bg-gray-900 hover:border-amber-500/30
                focus:outline-none focus:ring-2 focus:ring-amber-500/50
                ${(i||e)&&"opacity-70 cursor-not-allowed"}
                ${s}
            `,disabled:i||e,children:[n("div",{className:`inline-flex items-center ${e?"invisible":"visible"}`,children:[t&&r(t,{className:"w-5 h-5 mr-2 text-amber-400"}),a]}),e&&r("div",{className:"absolute inset-0 flex items-center justify-center",children:r(o,{className:"w-5 h-5 text-amber-500"})})]})}export{u as P};
