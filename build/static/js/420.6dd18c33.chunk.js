"use strict";(self.webpackChunksixsigma=self.webpackChunksixsigma||[]).push([[420],{8420:(e,s,a)=>{a.r(s),a.d(s,{default:()=>g});var r=a(9584),t=a(9184),n=a(6556),l=a(9792),i=a(7884);const o={farmName:"",farmAddress:"",farmContent:"",farmDescription:"",farmPhone:"",farmSize:"",farmCareer:"",farmOrderNum:0,farmConnect:"",farmCategory:"",farmRating:0,reviewCnt:0,memberNo:0},c={files:[],manageDiv:"FARM",fileManageNo:0},d={farmNo:0,cropName:0};function m(){const[e,s]=(0,r.useState)({...o}),[a,m]=(0,r.useState)({...c}),[g,x]=(0,r.useState)({...d}),[h,f]=(0,r.useState)([]),[u,p]=(0,r.useState)(null),[y,b]=(0,r.useState)(null),[j,N]=(0,r.useState)(null),{moveToList:v}=(0,n.c)();(0,r.useEffect)((()=>{})),(0,r.useEffect)((()=>{(0,t.Qh)().then((e=>{p(e.memberNo),console.log(e),console.log("\uba64\ubc84\ub370\uc774\ud130 ",JSON.stringify(u)),"FARMER"!==e.role&&(console.log(e.role),alert("\ub18d\ubd80\ub9cc \ub4e4\uc5b4\uac08 \uc218 \uc788\ub294 \ud398\uc774\uc9c0 \uc785\ub2c8\ub2e4!"),window.location.href="/")})).catch((e=>{console.log("\ub370\uc774\ud130 \uc548\uc634!!!!!!"),console.error(e)}))}),[u]);const w=e=>{const{name:s,value:a}=e.target;x({...g,[s]:a})};(0,r.useEffect)((()=>{(0,t.Y7)().then((e=>{console.log("test:"+JSON.stringify(e)),f(e)}))}),[]);const k=a=>{e[a.target.name]=a.target.value,s({...e})},F=e=>{m({...a,files:e.target.files});const s={...a,files:e.target.files};m(s)},C={...a},S={...e,memberNo:u};return(0,i.jsxs)("div",{className:"mt-10 m-2 p-4",children:[y?(0,i.jsx)(l.c,{title:"\ucd94\uac00 \uc644\ub8cc",content:"\uc0c8\ub85c\uc6b4 FarmNo - ".concat(y," \ucd94\uac00"),callbackFnc:()=>{b(null),v()}}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)("div",{className:"flex justify-left",children:(0,i.jsx)("div",{className:"relative mb-4 flex w-full flex-wrap items-stretch",children:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("form",{children:(0,i.jsxs)("div",{className:"space-y-12",children:[(0,i.jsxs)("div",{className:"border-b border-gray-900/10 pb-12",children:[(0,i.jsx)("h1",{className:"text-xl font-semibold leading-7 text-gray-900",children:"\ub18d\uc7a5 \uc815\ubcf4"}),(0,i.jsx)("p",{className:"mt-2 text-sm leading-6 text-gray-600",children:"\uc791\uc131\ud558\uc2e0 \ub0b4\uc6a9\uc740 \ub18d\uc7a5 \uc18c\uac1c\uc5d0 \uacf5\uac1c\uc801\uc73c\ub85c \ubcf4\uc774\ub294 \ub0b4\uc6a9\uc785\ub2c8\ub2e4."}),(0,i.jsxs)("div",{className:"mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[(0,i.jsxs)("div",{className:"sm:col-span-4",children:[(0,i.jsx)("label",{htmlFor:"\ub18d\uc7a5\uc774\ub984",className:"block text-sm font-medium leading-6 text-gray-900",children:"\ub18d\uc7a5 \uc774\ub984"}),(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)("div",{className:"flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md",children:(0,i.jsx)("input",{type:"text",name:"farmName",id:"\ub18d\uc7a5\uc774\ub984",className:"block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",placeholder:"\ud1a0\uc2ec\ub18d\uc7a5",onChange:k})})})]}),(0,i.jsxs)("div",{className:"sm:col-span-4",children:[(0,i.jsx)("label",{htmlFor:"\ub18d\uc7a5 \ud55c \uc904 \uc18c\uac1c",className:"block text-sm font-medium leading-6 text-gray-900",children:"\ub18d\uc7a5 \ud55c \uc904 \uc18c\uac1c"}),(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)("div",{className:"flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md",children:(0,i.jsx)("input",{type:"text",name:"farmContent",id:"\ub18d\uc7a5 \ud55c \uc904 \uc18c\uac1c",className:"block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6",placeholder:"\uc720\uae30\ub18d \ub2f9\uadfc \ub18d\uc7a5",onChange:k})})})]}),(0,i.jsxs)("div",{className:"col-span-full",children:[(0,i.jsx)("label",{htmlFor:"\ub18d\uc7a5 \uc0c1\uc138 \uc124\uba85",className:"block text-sm font-medium leading-6 text-gray-900",children:"\ub18d\uc7a5 \uc0c1\uc138 \uc124\uba85"}),(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)("textarea",{id:"\ub18d\uc7a5 \uc0c1\uc138 \uc124\uba85",name:"farmDescription",rows:3,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",defaultValue:"",onChange:k})})]}),(0,i.jsx)("div",{class:"flex items-center justify-center w-[35rem] ml-[5rem] ",children:(0,i.jsxs)("label",{for:"dropzone-file",class:"flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",children:[(0,i.jsxs)("div",{class:"flex flex-col items-center justify-center pt-3 pb-4 w-28",children:[(0,i.jsx)("svg",{class:"w-6 h-6 mb-3 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 16",children:(0,i.jsx)("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"})}),(0,i.jsxs)("p",{class:"mb-2 text-sm text-gray-500 dark:text-gray-400",children:[(0,i.jsx)("span",{class:"font-semibold",children:"Click to upload"})," ","or drag and drop"]}),(0,i.jsx)("p",{class:"text-xs text-gray-500 dark:text-gray-400",children:"SVG, PNG, JPG or GIF (MAX. 800x400px)"})]}),(0,i.jsx)("input",{id:"dropzone-file",type:"file",class:"hidden",onChange:F,multiple:!0})]})})]})]}),(0,i.jsx)("div",{className:"border-b border-gray-900/10 pb-12",children:(0,i.jsxs)("div",{className:"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6",children:[(0,i.jsxs)("div",{className:"sm:col-span-4",children:[(0,i.jsx)("label",{htmlFor:"\ub18d\uc7a5\ubc88\ud638",className:"block text-sm font-medium leading-6 text-gray-900",children:"\ub18d\uc7a5 \uc804\ud654 \ubc88\ud638"}),(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)("input",{id:"\ub18d\uc7a5\ubc88\ud638",name:"farmPhone",type:"text",onChange:k,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,i.jsxs)("div",{className:"sm:col-span-4",children:[(0,i.jsx)("label",{htmlFor:"\ub18d\ubd80 \uacbd\ub825",className:"block text-sm font-medium leading-6 text-gray-900",children:"\ub18d\ubd80 \uacbd\ub825"}),(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)("input",{id:"\ub18d\ubd80 \uacbd\ub825",name:"farmCareer",type:"text",onChange:k,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,i.jsxs)("div",{className:"sm:col-span-4",children:[(0,i.jsx)("label",{htmlFor:"\ub18d\uc7a5 \ud3c9 \uc218",className:"block text-sm font-medium leading-6 text-gray-900",children:"\ub18d\uc7a5 \ud3c9 \uc218"}),(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)("input",{id:"\ub18d\uc7a5 \ud3c9 \uc218",name:"farmSize",type:"text",onChange:k,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,i.jsxs)("div",{className:"sm:col-span-3",children:[(0,i.jsx)("label",{htmlFor:"\ub300\ud45c \uc791\ubb3c",className:"block text-sm font-medium leading-6 text-gray-900",children:"\ub300\ud45c \uc791\ubb3c"}),(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)("select",{id:"\ub300\ud45c \uc791\ubb3c",name:"cropDictNo",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6",onChange:w,children:h.map(((e,s)=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("option",{children:e.cropName})})))})})]}),(0,i.jsxs)("div",{className:"col-span-full",children:[(0,i.jsx)("label",{htmlFor:"\ub18d\uc7a5 \uc8fc\uc18c",className:"block text-sm font-medium leading-6 text-gray-900",children:"\ub18d\uc7a5 \uc8fc\uc18c"}),(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)("input",{type:"text",name:"farmAddress",id:"\ub18d\uc7a5 \uc8fc\uc18c",onChange:k,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,i.jsxs)("div",{className:"col-span-full",children:[(0,i.jsx)("label",{htmlFor:"\uc5f0\ub77d \uac00\ub2a5 \uc2dc\uac04",className:"block text-sm font-medium leading-6 text-gray-900",children:"\uc5f0\ub77d \uac00\ub2a5 \uc2dc\uac04"}),(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)("input",{type:"text",name:"farmConnect",id:"\uc5f0\ub77d \uac00\ub2a5 \uc2dc\uac04",onChange:k,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]})]})}),(0,i.jsx)("div",{className:"border-b border-gray-900/10 pb-12",children:(0,i.jsxs)("div",{className:"mt-10 space-y-10",children:[(0,i.jsx)("legend",{className:"text-sm font-semibold leading-6 text-gray-900",children:"\ud478\uc2dc \uc54c\ub9bc"}),(0,i.jsxs)("div",{className:"mt-6 space-y-6",children:[(0,i.jsxs)("div",{className:"flex items-center gap-x-3",children:[(0,i.jsx)("input",{id:"push-everything",name:"push-notifications",type:"radio",className:"h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"}),(0,i.jsx)("label",{htmlFor:"push-everything",className:"block text-sm font-medium leading-6 text-gray-900",children:"\uc5b4\ub514\ub4e0"})]}),(0,i.jsxs)("div",{className:"flex items-center gap-x-3",children:[(0,i.jsx)("input",{id:"push-email",name:"push-notifications",type:"radio",className:"h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"}),(0,i.jsx)("label",{htmlFor:"push-email",className:"block text-sm font-medium leading-6 text-gray-900",children:"\uc774\uba54\uc77c"})]}),(0,i.jsxs)("div",{className:"flex items-center gap-x-3",children:[(0,i.jsx)("input",{id:"push-nothing",name:"push-notifications",type:"radio",className:"h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"}),(0,i.jsx)("label",{htmlFor:"push-nothing",className:"block text-sm font-medium leading-6 text-gray-900",children:"\ub3d9\uc758\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"})]})]})]})})]})})})})}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)("button",{type:"button",className:"rounded w-20 h-10 text-center bg-[#4F6F52] text-xm  text-white ",onClick:()=>{(0,t.y)(S).then((e=>{console.log(e);const a=e.FarmNO;b(a);const r=new FormData;for(let s=0;s<C.files.length;s++)r.append("files",C.files[s]);r.append("manageDiv","FARM"),r.append("fileManageNo",a),(0,t.KW)(r).then((e=>{console.log(e),N(e.FileNO),m({...c})})).catch((e=>{console.error(e)})),(0,t.iC)({farmNo:a,cropName:g.cropDictNo}).then((e=>{console.log(e),x({...d})})).catch((e=>{console.error(e)})),s({...o})})).catch((e=>{console.error(e)}))},children:"\ub18d\uc7a5 \ub4f1\ub85d"})})]})}function g(){return(0,i.jsx)("div",{className:" pr-3 pl-3 w-full bg-white",children:(0,i.jsx)(m,{})})}}}]);