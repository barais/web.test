import{d as p,aj as u,z as h,o as s,b as n,e as t,x as a,B as r,F as f,ag as g,aa as v,l as x,g as b}from"../modules/vue-D5ZkGzYe.js";import{a as y,u as N,y as m}from"../index-CWKICRmr.js";import{_ as k}from"./NoteDisplay.vue_vue_type_style_index_0_lang-CHhFQF-9.js";import"../modules/shiki-BxSF2CvA.js";const w={id:"page-root"},B={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},H={class:"text-lg"},S={class:"font-bold flex gap-2"},j={class:"opacity-50"},z=t("div",{class:"flex-auto"},null,-1),C={key:0,class:"border-main mb-8"},E=p({__name:"print",setup(D){const{slides:_,total:d}=y();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),N({title:`Notes - ${m.title}`});const c=h(()=>_.value.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(s(),n("div",w,[t("div",B,[t("div",L,[t("h1",T,a(r(m).title),1),t("div",V,a(new Date().toLocaleString()),1)]),(s(!0),n(f,null,g(c.value,(e,i)=>(s(),n("div",{key:i,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",S,[t("div",j,a(e==null?void 0:e.no)+"/"+a(r(d)),1),v(" "+a(e==null?void 0:e.title)+" ",1),z])]),x(k,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),i<c.value.length-1?(s(),n("hr",C)):b("v-if",!0)]))),128))])]))}});export{E as default};
