import{m as b}from"../modules/unplugin-icons-lIOkelRg.js";import{d as g,z as i,o as u,b as c,e as s,l as h,B as w,F as f,x as v,ag as B,ae as S,af as z,i as d,h as x}from"../modules/vue-HnJgEBgE.js";import{q as M,r as F,C as V,_ as $}from"../index-BL8tWdVa.js";const D=["title"],I={class:"flex gap-0.2 items-center min-w-16 font-mono mr1"},L={"text-primary":""},N={op50:"","text-sm":""},T={key:1,op50:"","flex-auto":"",pl1:""},j={relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~"},q=["min","max"],A=g({__name:"ClicksSlider",props:{clicksContext:{},readonly:{type:Boolean},active:{type:Boolean,default:!0}},setup(_){const l=_,t=i(()=>l.clicksContext.total),p=i(()=>M(0,l.clicksContext.clicksStart,t.value)),r=i(()=>t.value-p.value+1),o=i({get(){return l.clicksContext.current>t.value?-1:l.clicksContext.current},set(n){l.clicksContext.current=n}}),y=i(()=>F(p.value,t.value+1));function k(){l.readonly||(o.value<0||o.value>t.value)&&(o.value=0)}return(n,a)=>{const C=b;return u(),c("div",{class:d(["flex gap-1 items-center select-none",r.value&&l.clicksContext.isMounted?"":"op50"]),title:`Clicks in this slide: ${r.value}`},[s("div",I,[h(C,{"text-sm":"",op50:""}),o.value>=0&&o.value!==w(V)&&n.active?(u(),c(f,{key:0},[a[2]||(a[2]=s("div",{"flex-auto":""},null,-1)),s("span",L,v(o.value),1),a[3]||(a[3]=s("span",{op25:"","text-sm":""},"/",-1)),s("span",N,v(t.value),1)],64)):(u(),c("div",T,v(t.value),1))]),s("div",j,[(u(!0),c(f,null,B(y.value,e=>(u(),c("div",{key:e,border:"y main","of-hidden":"",relative:"",class:d([e===0?"rounded-l border-l":"",e===t.value?"rounded-r border-r":""]),style:x({width:r.value>0?`${1/r.value*100}%`:"100%"})},[s("div",{absolute:"","inset-0":"",class:d(e<=o.value&&n.active?"bg-primary op15":"")},null,2),s("div",{class:d([+e==+o.value&&n.active?"text-primary font-bold op100 border-primary":"op30 border-main",e===0?"rounded-l":"",e===t.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},v(e),3)],6))),128)),S(s("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e),class:d(["range",n.readonly?"pointer-events-none":""]),type:"range",min:p.value,max:t.value,step:1,absolute:"","inset-0":"","z-10":"",op0:"",style:x({"--thumb-width":`${1/(r.value+1)*100}%`}),onMousedown:k,onFocus:a[1]||(a[1]=e=>{var m;return(m=e.currentTarget)==null?void 0:m.blur()})},null,46,q),[[z,o.value]])])],10,D)}}}),U=$(A,[["__scopeId","data-v-ef0c5640"]]);export{U as C};
