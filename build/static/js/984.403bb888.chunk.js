"use strict";(self.webpackChunksixsigma=self.webpackChunksixsigma||[]).push([[984],{9756:(e,r,t)=>{t.d(r,{c:()=>c});var a,s=t(6692),n=t(2262),o=t(7884);const i=n.cp.body(a||(a=(0,s.c)(["\n    color: black;\n    background-color: #ffffff;\n    font-size: 20px;\n    margin-top: 2rem;\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n    padding-bottom: 1rem;\n"])));function c(e){let{children:r}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i,{children:r})})}},9976:(e,r,t)=>{t.d(r,{c:()=>g});t(8488);var a=t(9756),s=t(9184),n=t(9584),o=(t(64),t(6556)),i=t(7884);function c(e){let{serverData:r,movePage:t}=e;return(0,i.jsxs)("div",{className:"m-6 flex justify-center pt-3",children:[r.prev?(0,i.jsxs)("div",{className:"m-2 p-2 w-16 text-center  font-bold text-blue-400 cursor-pointer",onClick:()=>t({page:r.prevPage}),children:["\uc774\uc804"," "]}):(0,i.jsx)(i.Fragment,{}),r.pageNumList.map((e=>(0,i.jsx)("div",{className:"m-2 p-2 w-12  text-center rounded shadow-md text-white cursor-pointer ".concat(r.current===e?"bg-[#4F6F52]":"bg-[#80BCBD]"),onClick:()=>t({page:e}),children:e},e))),r.next?(0,i.jsx)("div",{className:"m-2 p-2 w-16 text-center font-bold text-blue-400 cursor-pointer",onClick:()=>t({page:r.nextPage}),children:"\ub2e4\uc74c"}):(0,i.jsx)(i.Fragment,{})]})}const m="".concat(s._K),l={dtoList:[],pageNumList:[],pageRequestDTO:null,prev:!1,next:!1,totoalCount:0,prevPage:0,nextPage:0,totalPage:0,current:0},d={cropCategoryEntity:{cropCateNo:0,cropCateName:""},cropContent:"",cropDictNo:0,cropName:"",effect:"",spring:0,summer:0,fall:0,winter:0,level:0,summary:"",term:0,tip:"",nutrient:"",lowTemp:0,highTemp:0};function g(e){let{numberOfItems:r}=e;const{page:t,size:g,moveToList:x,moveToRead:f,memberMoveToRead:h}=(0,o.c)(),[p,u]=(0,n.useState)({}),[j,N]=(0,n.useState)({...d}),[v,y]=(0,n.useState)(l),[w,b]=(0,n.useState)(!1),[C,S]=(0,n.useState)(null);(0,n.useEffect)((()=>{console.log("http://mam675.synology.me:49575"),(0,s.Qh)().then((e=>{S(e),console.log("memberdata",e),console.log("\uba64\ubc84\ub370\uc774\ud130 ",JSON.stringify(C))})).catch((e=>{console.log("\ub370\uc774\ud130 \uc548\uc634!!!!!!"),console.error(e)}))}),[]),(0,n.useEffect)((()=>{k()}),[t,w]);const k=async()=>{const e=await(0,s.eS)({page:t,size:g,sortByReview:w});E(e.dtoList),y(e)};(0,n.useEffect)((()=>{v.dtoList.length>0&&(async()=>{const e={},r=v.dtoList.map((e=>(0,s.wx)(e.farmNo).then((r=>({farmNo:e.farmNo,imagePath:r}))).catch((r=>({farmNo:e.farmNo,images:[]})))));(await Promise.all(r)).forEach((r=>{e[r.farmNo]=r.imagePath})),u(e)})()}),[v]);(0,n.useEffect)((()=>{v.dtoList.length>0&&(async()=>{const e={},r=v.dtoList.map((e=>(0,s.OC)(e.farmNo).then((r=>({farmNo:e.farmNo,farmCropData:r.getResult}))).catch((r=>({farmNo:e.farmNo,farmCropData:{}})))));(await Promise.all(r)).forEach((r=>{e[r.farmNo]=r.farmCropData})),N(e)})()}),[v]),(0,n.useEffect)((()=>{console.log(JSON.stringify(j)),console.log(JSON.stringify(p))}));const E=e=>{w?e.sort(((e,r)=>r.reviewCnt-e.reviewCnt)):e.sort(((e,r)=>e.farmNo-r.farmNo))},P=v.dtoList.slice(0,r);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.c,{children:[(0,i.jsx)("div",{className:"flex justify-end text-[1rem] text-[#4F6F52]",children:(0,i.jsx)("div",{style:{borderRadius:"10px",overflow:"hidden",backgroundColor:"#D5F0C1"},children:(0,i.jsxs)("select",{onChange:e=>{return r=e.target.value,void b("review"===r);var r},style:{border:"none",outline:"none",padding:"0.5rem",fontSize:"0.9rem",backgroundColor:"inherit",cursor:"pointer"},children:[(0,i.jsx)("option",{value:"default",children:"\uae30\ubcf8\uc21c"}),(0,i.jsx)("option",{value:"review",children:"\ub9ac\ubdf0 \ub9ce\uc740 \uc21c"})]})})}),(0,i.jsx)("div",{children:P.map(((e,r)=>(0,i.jsx)("div",{className:"",children:(0,i.jsxs)("div",{className:"shadow-xl h-28   mt-2 mb-1 rounded-2xl flex cursor-pointer justify-between",onClick:()=>{return r=e.farmNo,void(C?"FARMER"===C.role?f(r):"USER"===C.role&&h(r):h(r));var r},children:[(0,i.jsxs)("div",{className:"mt-auto mb-auto ml-5 ",children:[(0,i.jsx)("div",{className:"text-[1.1rem] font-semibold mt-1",children:e.farmName}),j&&j[e.farmNo]&&j[e.farmNo].cropCategoryEntity&&(0,i.jsxs)("p",{className:"text-xs mb-[2px]",children:[j[e.farmNo].cropCategoryEntity.cropCateName," ","\uc804\ubb38 \ub18d\uc7a5"]}),(0,i.jsxs)("div",{className:"flex text-[0.7rem] mb-1",children:[(0,i.jsxs)("div",{className:"text-[0.7rem] font-semibold flex justify-center items-center",children:[(0,i.jsx)("img",{src:"/img/star.png",alt:"",className:"mr-1 w-4 h-4"}),(0,i.jsx)("span",{children:e.farmRating.toFixed(1)}),(0,i.jsxs)("span",{className:"text-[0.7rem] ml-1",children:["(",e.reviewCnt,")"]})]}),(0,i.jsx)("div",{children:(0,i.jsxs)("span",{className:"ml-1",children:["| \uacbd\ub825 ",e.farmCareer,"\ub144"]})}),(0,i.jsx)("div",{children:(0,i.jsxs)("span",{className:"ml-1",children:["|"," ",e.farmAddress.replace(/ .*/,"")]})})]}),(0,i.jsx)("p",{className:"text-xs text-gray-500",children:e.farmContent})]}),(0,i.jsx)("div",{className:" rounded-2xl w-20 h-20 flex justify-center items-center mr-3",children:p&&p[e.farmNo]&&(0,i.jsx)("img",{src:"".concat(m,"/").concat(p[e.farmNo][0]),alt:"image ".concat(0),className:"h-full rounded-2xl shadow-xl mt-[2rem] "},0)})]})},e.farmNo)))})]}),(0,i.jsx)(c,{serverData:v,movePage:x})]})}},6484:(e,r,t)=>{t.r(r),t.d(r,{default:()=>d});var a=t(8488),s=t(9756),n=t(9584),o=t(924),i=(t(5536),t(736),t(5648)),c=t(7884);function m(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(o.wx,{effect:"coverflow",grabCursor:!0,autoplay:{delay:2500,disableOnInteraction:!1},centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:70,modifier:1,slideShadows:!0},pagination:{clickable:!0},navigation:!0,modules:[i.Ko,i._2,i.sB,i.eM],className:"mySwiper",children:[(0,c.jsx)(o.Ky,{children:(0,c.jsx)("img",{src:"/img/farmImage6.png",alt:""})}),(0,c.jsx)(o.Ky,{children:(0,c.jsx)("img",{src:"/img/farmImage1.png",alt:""})}),(0,c.jsx)(o.Ky,{children:(0,c.jsx)("img",{src:"/img/farmImage2.png",alt:""})}),(0,c.jsx)(o.Ky,{children:(0,c.jsx)("img",{src:"/img/farmImage3.png",alt:""})}),(0,c.jsx)(o.Ky,{children:(0,c.jsx)("img",{src:"/img/farmImage7.png",alt:""})}),(0,c.jsx)(o.Ky,{children:(0,c.jsx)("img",{src:"/img/farmImage8.png",alt:""})}),(0,c.jsx)(o.Ky,{children:(0,c.jsx)("img",{src:"/img/farmImage9.png",alt:""})}),(0,c.jsx)(o.Ky,{children:(0,c.jsx)("img",{src:"/img/farmImage10.png",alt:""})})]})})}t(64);var l=t(9976);const d=()=>((0,n.useEffect)((()=>{const e=window.location.search;"0"===new URLSearchParams(e).get("login")&&(console.log("\ub85c\uadf8\uc544\uc6c3 \ud568\uc218\uac00 \ud638\ucd9c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),document.cookie="auth=; max-age=0; path=/",window.location.href="/")}),[]),(0,c.jsxs)("div",{className:"main",children:[(0,c.jsx)(a.c,{children:(0,c.jsx)(m,{})}),(0,c.jsxs)(s.c,{children:[(0,c.jsxs)("div",{className:"shadow-2xl h-[30rem] mt-2 overflow-hidden rounded-2xl hide-scrollbar",children:[(0,c.jsx)("div",{className:"text-xl",style:{justifyContent:"center",display:"flex",fontWeight:"1000",marginTop:"1rem"},children:"\ub300\ud45c \ub18d\uc7a5"})," ",(0,c.jsx)(l.c,{numberOfItems:3})]}),(0,c.jsx)("img",{src:"/img/banner.png",alt:"\ubc30\ub108\uc0ac\uc9c4",style:{marginTop:"2rem",marginBottom:"2rem",borderRadius:"3rem"}})]})]}))}}]);