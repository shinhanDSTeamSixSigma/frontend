"use strict";(self.webpackChunksixsigma=self.webpackChunksixsigma||[]).push([[192],{9756:(e,t,r)=>{r.d(t,{c:()=>i});var a,n=r(6692),s=r(2262),o=r(7884);const c=s.cp.body(a||(a=(0,n.c)(["\n    color: black;\n    background-color: #ffffff;\n    font-size: 20px;\n    margin-top: 2rem;\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n    padding-bottom: 1rem;\n"])));function i(e){let{children:t}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(c,{children:t})})}},9976:(e,t,r)=>{r.d(t,{c:()=>f});r(8488);var a=r(9756),n=r(9184),s=r(9584),o=(r(64),r(6556)),c=r(7884);function i(e){let{serverData:t,movePage:r}=e;return(0,c.jsxs)("div",{className:"m-6 flex justify-center pt-3",children:[t.prev?(0,c.jsxs)("div",{className:"m-2 p-2 w-16 text-center  font-bold text-blue-400 cursor-pointer",onClick:()=>r({page:t.prevPage}),children:["\uc774\uc804"," "]}):(0,c.jsx)(c.Fragment,{}),t.pageNumList.map((e=>(0,c.jsx)("div",{className:"m-2 p-2 w-12  text-center rounded shadow-md text-white cursor-pointer ".concat(t.current===e?"bg-[#4F6F52]":"bg-[#80BCBD]"),onClick:()=>r({page:e}),children:e},e))),t.next?(0,c.jsx)("div",{className:"m-2 p-2 w-16 text-center font-bold text-blue-400 cursor-pointer",onClick:()=>r({page:t.nextPage}),children:"\ub2e4\uc74c"}):(0,c.jsx)(c.Fragment,{})]})}const l="".concat(n._K),m={dtoList:[],pageNumList:[],pageRequestDTO:null,prev:!1,next:!1,totoalCount:0,prevPage:0,nextPage:0,totalPage:0,current:0},d={cropCategoryEntity:{cropCateNo:0,cropCateName:""},cropContent:"",cropDictNo:0,cropName:"",effect:"",spring:0,summer:0,fall:0,winter:0,level:0,summary:"",term:0,tip:"",nutrient:"",lowTemp:0,highTemp:0};function f(e){let{numberOfItems:t}=e;const{page:r,size:f,moveToList:u,moveToRead:p,memberMoveToRead:x}=(0,o.c)(),[g,h]=(0,s.useState)({}),[N,v]=(0,s.useState)({...d}),[j,C]=(0,s.useState)(m),[w,y]=(0,s.useState)(!1),[b,E]=(0,s.useState)(null);(0,s.useEffect)((()=>{console.log("http://mam675.synology.me:49575"),(0,n.Qh)().then((e=>{E(e),console.log("memberdata",e),console.log("\uba64\ubc84\ub370\uc774\ud130 ",JSON.stringify(b))})).catch((e=>{console.log("\ub370\uc774\ud130 \uc548\uc634!!!!!!"),console.error(e)}))}),[]),(0,s.useEffect)((()=>{k()}),[r,w]);const k=async()=>{const e=await(0,n.eS)({page:r,size:f,sortByReview:w});S(e.dtoList),C(e)};(0,s.useEffect)((()=>{j.dtoList.length>0&&(async()=>{const e={},t=j.dtoList.map((e=>(0,n.wx)(e.farmNo).then((t=>({farmNo:e.farmNo,imagePath:t}))).catch((t=>({farmNo:e.farmNo,images:[]})))));(await Promise.all(t)).forEach((t=>{e[t.farmNo]=t.imagePath})),h(e)})()}),[j]);(0,s.useEffect)((()=>{j.dtoList.length>0&&(async()=>{const e={},t=j.dtoList.map((e=>(0,n.OC)(e.farmNo).then((t=>({farmNo:e.farmNo,farmCropData:t.getResult}))).catch((t=>({farmNo:e.farmNo,farmCropData:{}})))));(await Promise.all(t)).forEach((t=>{e[t.farmNo]=t.farmCropData})),v(e)})()}),[j]),(0,s.useEffect)((()=>{console.log(JSON.stringify(N)),console.log(JSON.stringify(g))}));const S=e=>{w?e.sort(((e,t)=>t.reviewCnt-e.reviewCnt)):e.sort(((e,t)=>e.farmNo-t.farmNo))},F=j.dtoList.slice(0,t);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(a.c,{children:[(0,c.jsx)("div",{className:"flex justify-end text-[1rem] text-[#4F6F52]",children:(0,c.jsx)("div",{style:{borderRadius:"10px",overflow:"hidden",backgroundColor:"#D5F0C1"},children:(0,c.jsxs)("select",{onChange:e=>{return t=e.target.value,void y("review"===t);var t},style:{border:"none",outline:"none",padding:"0.5rem",fontSize:"0.9rem",backgroundColor:"inherit",cursor:"pointer"},children:[(0,c.jsx)("option",{value:"default",children:"\uae30\ubcf8\uc21c"}),(0,c.jsx)("option",{value:"review",children:"\ub9ac\ubdf0 \ub9ce\uc740 \uc21c"})]})})}),(0,c.jsx)("div",{children:F.map(((e,t)=>(0,c.jsx)("div",{className:"",children:(0,c.jsxs)("div",{className:"shadow-xl h-28   mt-2 mb-1 rounded-2xl flex cursor-pointer justify-between",onClick:()=>{return t=e.farmNo,void(b?"FARMER"===b.role?p(t):"USER"===b.role&&x(t):x(t));var t},children:[(0,c.jsxs)("div",{className:"mt-auto mb-auto ml-5 ",children:[(0,c.jsx)("div",{className:"text-[1.1rem] font-semibold mt-1",children:e.farmName}),N&&N[e.farmNo]&&N[e.farmNo].cropCategoryEntity&&(0,c.jsxs)("p",{className:"text-xs mb-[2px]",children:[N[e.farmNo].cropCategoryEntity.cropCateName," ","\uc804\ubb38 \ub18d\uc7a5"]}),(0,c.jsxs)("div",{className:"flex text-[0.7rem] mb-1",children:[(0,c.jsxs)("div",{className:"text-[0.7rem] font-semibold flex justify-center items-center",children:[(0,c.jsx)("img",{src:"/img/star.png",alt:"",className:"mr-1 w-4 h-4"}),(0,c.jsx)("span",{children:e.farmRating.toFixed(1)}),(0,c.jsxs)("span",{className:"text-[0.7rem] ml-1",children:["(",e.reviewCnt,")"]})]}),(0,c.jsx)("div",{children:(0,c.jsxs)("span",{className:"ml-1",children:["| \uacbd\ub825 ",e.farmCareer,"\ub144"]})}),(0,c.jsx)("div",{children:(0,c.jsxs)("span",{className:"ml-1",children:["|"," ",e.farmAddress.replace(/ .*/,"")]})})]}),(0,c.jsx)("p",{className:"text-xs text-gray-500",children:e.farmContent})]}),(0,c.jsx)("div",{className:" rounded-2xl w-20 h-20 flex justify-center items-center mr-3",children:g&&g[e.farmNo]&&(0,c.jsx)("img",{src:"".concat(l,"/").concat(g[e.farmNo][0]),alt:"image ".concat(0),className:"h-full rounded-2xl shadow-xl mt-[2rem] "},0)})]})},e.farmNo)))})]}),(0,c.jsx)(i,{serverData:j,movePage:u})]})}},9192:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var a=r(6692),n=r(9584);const s="react-horizontal-scrolling-menu",o="-separator",c="".concat(s,"-").concat(o),i="".concat(s,"--item"),l="".concat(s,"--scroll-container"),m="".concat(s,"--wrapper"),d="".concat(s,"--inner-wrapper"),f="".concat(s,"--header"),u="".concat(s,"--arrow-left"),p="".concat(s,"--arrow-right"),x="".concat(s,"--footer"),g="itemId",h="data-key",N="data-index",v={first:"first",last:"last",onInit:"onInit",onUpdate:"onUpdate"};Object.freeze({__proto__:null,rootClassName:s,separatorString:o,separatorClassName:c,itemClassName:i,scrollContainerClassName:l,wrapperClassName:m,innerWrapperClassName:d,headerClassName:f,arrowLeftClassName:u,arrowRightClassName:p,footerClassName:x,id:g,dataKeyAttribute:h,dataIndexAttribute:N,events:v});n.memo((function(e){let{className:t,id:r,index:a,refs:s}=e;const o=n.useRef(null);return s[a]=o,n.createElement("div",{className:t,[h]:r,[N]:a,ref:o})})),n.memo((function(e){let{children:t,className:r,id:a,index:s,refs:o}=e;const c=n.useRef(null);return o[String(s)]=c,n.createElement("div",{className:r,[h]:a,[N]:s,ref:c},t)}));"undefined"!=typeof window?n.useLayoutEffect:n.useEffect;Map;n.createContext({});var j,C=r(2262),w=r(7884);C.cp.div(j||(j=(0,a.c)(["\n    overflow: hidden;\n    .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {\n        display: none;\n    }\n    .react-horizontal-scrolling-menu--scroll-container {\n        -ms-overflow-style: none; /* IE and Edge */\n        scrollbar-width: none; /* Firefox */\n    }\n"])));(0,C.cp)("button")({cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"2px",opacity:e=>e.disabled?"0":"1",userSelect:"none"});var y=r(9976);function b(){return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)("div",{className:"divide-y divide-gray-200",children:(0,w.jsx)(y.c,{numberOfItems:10})})})}}}]);