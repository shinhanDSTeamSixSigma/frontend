"use strict";(self.webpackChunksixsigma=self.webpackChunksixsigma||[]).push([[132],{9756:(e,n,t)=>{t.d(n,{c:()=>l});var s,i=t(6692),r=t(2262),c=t(7884);const a=r.cp.body(s||(s=(0,i.c)(["\n    color: black;\n    background-color: #ffffff;\n    font-size: 20px;\n    margin-top: 2rem;\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n    padding-bottom: 1rem;\n"])));function l(e){let{children:n}=e;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a,{children:n})})}},3984:(e,n,t)=>{t.d(n,{c:()=>l});var s,i=t(6692),r=t(2262),c=t(7884);const a=r.cp.div(s||(s=(0,i.c)(["\n  border-top: 0.2rem solid #90c8ac;\n"])));function l(){return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(a,{})})}},2132:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var s,i=t(9584),r=t(6692),c=(t(64),t(3424)),a=t(9184),l=t(2262),d=t(3984),m=t(7884);"".concat(a._K);const o=l.cp.div(s||(s=(0,r.c)(["\n    // row\ub85c \ubd99\uc5ec\uc8fc\ub294 \ub290\ub08c\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n"])));function u(){const[e,n]=(0,i.useState)([]),[t,s]=(0,i.useState)(0),r=(0,c.i6)(),{farmNo:l}=(0,c.W4)(),[u,x]=(0,i.useState)(),[h,p]=(0,i.useState)();console.log(h),(0,i.useEffect)((()=>{g()}),[e]),(0,i.useEffect)((()=>{(0,a.ek)(l).then((e=>{console.log(e),x(e)}))}),[l]),(0,i.useEffect)((()=>{(0,a.OC)(l).then((e=>{console.log(e.getResult),p(e.getResult)}))}),[l]);const g=()=>{let n=0;e.forEach((e=>{n+=e.price*e.quantity})),s(n)};return(0,m.jsxs)("div",{children:[u&&(0,m.jsx)("div",{style:{fontWeight:"bold",textAlign:"center",paddingBottom:"1rem",fontSize:"1.5rem"},children:u.farmName}),(0,m.jsx)(d.c,{}),(0,m.jsxs)(o,{style:{paddingTop:"1rem",paddingBottom:"1rem"},children:[(0,m.jsx)("div",{children:(0,m.jsx)("img",{className:"cropImage",alt:"crop",src:"/img/memberMypage/NoFarm.png",style:{width:"130px",marginRight:"1rem"}})}),(0,m.jsxs)("div",{children:[(0,m.jsx)(o,{style:{fontWeight:"bold"},children:h&&(0,m.jsxs)("div",{children:["\uc791\ubb3c - ",h.cropName]})}),(0,m.jsxs)("div",{className:"menuList",children:[(0,m.jsx)("div",{className:"text-xl mt-2 mb-3",children:"\ub18d\uc7a5 \ud3c9\uc218"}),(0,m.jsxs)("div",{className:"menu border-2  mb-1",style:{borderRadius:"8px"},children:[(0,m.jsx)("input",{type:"checkbox",id:"menu1",onChange:e=>((e,t,s,i)=>{const r=e.target.checked,c={optionNumber:t,name:s,price:i,quantity:1};n(r?e=>[...e,c]:e=>e.filter((e=>e.optionNumber!==t)))})(e,1,"1\ud3c9",5e4)}),(0,m.jsx)("label",{htmlFor:"menu1",children:"1\ud3c9 - 50,000\uc6d0"})]})]})]})]}),(0,m.jsx)(d.c,{}),(0,m.jsxs)("div",{id:"rightmenus",children:[(0,m.jsx)("div",{className:"text-2xl mt-4 mb-3",children:"\uc7a5\ubc14\uad6c\ub2c8"}),e.map((e=>(0,m.jsxs)("div",{className:"rightmenu border-2 mb-2","data-menu-name":e.name,children:[(0,m.jsx)("input",{type:"hidden",value:e.menuUrl}),(0,m.jsx)("div",{children:e.name}),(0,m.jsxs)("div",{className:"",children:["\uc218\ub7c9:"," ",(0,m.jsx)("input",{type:"number",min:"1",value:e.quantity,onChange:t=>((e,t)=>{const s=parseInt(e.target.value);n((e=>e.map((e=>e.name===t?{...e,quantity:s}:e))))})(t,e.name)})]}),(0,m.jsx)("div",{children:(0,m.jsxs)("span",{children:[e.price*e.quantity,"\uc6d0"]})})]},e.name)))]}),(0,m.jsxs)("div",{className:"flex justify-end  bottom-10",children:[(0,m.jsxs)("div",{className:"sumAmount text-right mr-4",children:["\ucd1d \uae08\uc561: ",t,"\uc6d0"]}),(0,m.jsx)("div",{children:(0,m.jsx)("button",{onClick:()=>{r("/pay",{state:{totalPrice:t,cartItems:e,myCrop:h,myFarm:u}})},className:"w-20 bg-[#80BCBD] block rounded-md ",children:"\uacb0\uc81c\ud558\uae30"})})]})]})}var x=t(9756);function h(){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(x.c,{children:(0,m.jsx)(u,{})})})}}}]);