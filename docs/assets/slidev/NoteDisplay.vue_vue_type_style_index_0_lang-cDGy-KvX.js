import{d as D,z as B,t as b,E as H,n as N,O as $,D as I,o as d,b as k,i as v,e as M,x as E}from"../modules/vue-HnJgEBgE.js";import{C as P}from"../index-DDp99HiI.js";const T=["innerHTML"],z=["textContent"],K=["textContent"],h="slidev-note-fade",r="slidev-note-click-mark",q=D({__name:"NoteDisplay",props:{class:{},noteHtml:{},note:{},highlight:{type:Boolean,default:!0},placeholder:{},clicksContext:{},autoScroll:{type:Boolean}},emits:["markerDblclick","markerClick"],setup(S,{emit:A}){const n=S,g=A,C=B(()=>{var i;return n.clicksContext!=null&&((i=n.noteHtml)==null?void 0:i.includes("slidev-note-click-mark"))}),p=b(null);function x(){var w,L;if(!p.value||!C.value)return;const i=Array.from(p.value.querySelectorAll(`.${r}`)),c=new Map,a=new Map;let y=0;for(const s of i){const o=Number(s.dataset.clicks);c.set(s,o);let t=s,e=s.parentElement;for(;e&&t!==p.value;)a.has(e)||a.set(e,[[null,y]]),a.get(e).push([t,o]),t=e,e=e.parentElement;y=o}const _=new Map;for(const[s,o]of a){let t=!1,e=0;for(const l of Array.from(s.childNodes)){let f=!1;for(;l===((w=o[e+1])==null?void 0:w[0]);)f=!0,e++;if(f)continue;let u=l;if(l.nodeType===3){if(!((L=l.textContent)!=null&&L.trim()))continue;u=document.createElement("span"),u.textContent=l.textContent,s.insertBefore(u,l),l.remove()}t||(t=e===0),_.set(u,o[e][1])}t||(o[0][1]=-1)}return s=>{const o=n.highlight;for(const[t,e]of a)t.classList.toggle(h,o&&!e.some(([l,f])=>f===s));for(const[t,e]of _)t.classList.toggle(h,o&&e!==s);for(const[t,e]of c)t.classList.remove(h),t.classList.toggle(`${r}-past`,o&&e<s),t.classList.toggle(`${r}-active`,o&&e===s),t.classList.toggle(`${r}-next`,o&&e===s+1),t.classList.toggle(`${r}-future`,o&&e>s+1),t.ondblclick=o?l=>{g("markerDblclick",l,e),!l.defaultPrevented&&(n.clicksContext.current=e,l.stopPropagation(),l.stopImmediatePropagation())}:null,t.onclick=o?l=>{g("markerClick",l,e)}:null,o&&n.autoScroll&&e===s&&t.scrollIntoView({block:"center",behavior:"smooth"})}}const m=b();return H(()=>[n.noteHtml,n.highlight],()=>{N(()=>{m.value=x()})},{immediate:!0}),$(()=>{x()}),I(()=>{var c,a;const i=((c=n.clicksContext)==null?void 0:c.current)??P;(a=m.value)==null||a.call(m,i)}),(i,c)=>i.noteHtml?(d(),k("div",{key:0,ref_key:"noteDisplay",ref:p,class:v(["prose overflow-auto outline-none slidev-note",[n.class,C.value?"slidev-note-with-clicks":""]]),innerHTML:i.noteHtml},null,10,T)):i.note?(d(),k("div",{key:1,class:v(["prose overflow-auto outline-none slidev-note",n.class])},[M("p",{textContent:E(i.note)},null,8,z)],2)):(d(),k("div",{key:2,class:v(["prose overflow-auto outline-none opacity-50 italic select-none slidev-note",n.class])},[M("p",{textContent:E(n.placeholder||"No notes.")},null,8,K)],2))}});export{q as _};