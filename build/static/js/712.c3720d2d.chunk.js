"use strict";(self.webpackChunksixsigma=self.webpackChunksixsigma||[]).push([[712],{8476:(t,e,r)=>{r.r(e),r.d(e,{default:()=>u});var a,o=r(6692),n=r(2262),c=r(6838),i=r(3424),s=r(9584),d=r(5440),l=r(7884);const m=n.cp.div(a||(a=(0,o.c)(["\n    background-color:white;\n    border-radius:0.6rem;\n    margin:1.5rem;\n"]))),u=()=>{const{boardNo:t,memberNo:e,farmNo:r}=(0,i.W4)(),[a,o]=(0,s.useState)(null);return(0,s.useEffect)((()=>{(async()=>{try{const e=await c.c.get("".concat("http://mam675.synology.me:49575","/board/detail/").concat(t),{withCredentials:!0});o(e.data)}catch(e){console.error("Error fetching inquiry detail:",e)}})()}),[t]),(0,l.jsx)(m,{children:a&&(0,l.jsx)(d.c,{title:a.title,content:a.boardContent,boardNo:t,isEdit:!0,memberNo:e,farmNo:r})})}}}]);