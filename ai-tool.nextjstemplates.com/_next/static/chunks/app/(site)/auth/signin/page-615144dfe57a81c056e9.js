(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4716],{95640:function(e,r,n){Promise.resolve().then(n.t.bind(n,68326,23)),Promise.resolve().then(n.bind(n,4819))},4819:function(e,r,n){"use strict";n.r(r);var l=n(57437),d=n(82749),c=n(16691),m=n.n(c),h=n(61396),f=n.n(h),x=n(2265),g=n(5925);r.default=()=>{let[e,r]=(0,x.useState)({email:"",password:""}),[n,c]=(0,x.useState)(!1),loginUser=async r=>{r.preventDefault(),(0,d.signIn)("credentials",{...e,redirect:!1}).then(e=>{(null==e?void 0:e.error)&&g.ZP.error(e.error),(null==e?void 0:e.ok)&&!(null==e?void 0:e.error)&&g.ZP.success("Logged in successfully")})};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("section",{className:"pb-17.5 pt-17.5 lg:pb-22.5 xl:pb-27.5",children:(0,l.jsx)("div",{className:"mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0",children:(0,l.jsx)("div",{className:"wow fadeInUp rounded-3xl bg-white/[0.05]",children:(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("div",{className:"hidden w-full lg:block lg:w-1/2",children:(0,l.jsxs)("div",{className:"relative py-20 pl-17.5 pr-22",children:[(0,l.jsx)("div",{className:"absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-white/0 via-white/20 to-white/0"}),(0,l.jsx)("h2",{className:"mb-10 max-w-[292px] text-heading-4 font-bold text-white",children:"Unlock the Power of Writing Tool"}),(0,l.jsx)("div",{className:"relative aspect-[61/50] w-full max-w-[427px]",children:(0,l.jsx)(m(),{src:"/images/signin/sigin.svg",alt:"signin",fill:!0})})]})}),(0,l.jsx)("div",{className:"w-full lg:w-1/2",children:(0,l.jsx)("div",{className:"py-8 pl-8 pr-8 sm:py-20 sm:pl-21 sm:pr-20",children:(0,l.jsxs)("div",{children:[(0,l.jsxs)("button",{onClick:()=>(0,d.signIn)("google"),className:"flex w-full items-center justify-center gap-3 rounded-lg border border-white/[0.12] p-3.5 font-medium text-white duration-300 ease-in hover:border-purple",children:[(0,l.jsxs)("svg",{width:"23",height:"22",viewBox:"0 0 23 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsxs)("g",{clipPath:"url(#clip0_132_14584)",children:[(0,l.jsx)("path",{d:"M22.5001 11.2438C22.5134 10.4876 22.4338 9.73256 22.2629 8.995H11.7246V13.0771H17.9105C17.7933 13.7929 17.5296 14.478 17.1352 15.0914C16.7409 15.7047 16.224 16.2335 15.6158 16.646L15.5942 16.7827L18.9264 19.3124L19.1571 19.335C21.2772 17.4161 22.4997 14.5926 22.4997 11.2438",fill:"#4285F4"}),(0,l.jsx)("path",{d:"M11.7245 22C14.755 22 17.2992 21.0221 19.1577 19.3355L15.6156 16.6464C14.6679 17.2944 13.3958 17.7467 11.7245 17.7467C10.3051 17.7385 8.92433 17.2926 7.77814 16.472C6.63195 15.6515 5.77851 14.4981 5.33892 13.1755L5.20737 13.1865L1.74255 15.8142L1.69727 15.9376C2.63043 17.7602 4.06252 19.2925 5.83341 20.3631C7.60429 21.4337 9.64416 22.0005 11.7249 22",fill:"#34A853"}),(0,l.jsx)("path",{d:"M5.33889 13.1755C5.09338 12.4753 4.96669 11.7404 4.96388 11C4.9684 10.2608 5.09041 9.52685 5.32552 8.8245L5.31927 8.67868L1.81196 6.00867L1.69724 6.06214C0.910039 7.5938 0.5 9.28491 0.5 10.9999C0.5 12.7148 0.910039 14.406 1.69724 15.9376L5.33889 13.1755Z",fill:"#FBBC05"}),(0,l.jsx)("path",{d:"M11.7249 4.25337C13.3333 4.22889 14.8888 4.8159 16.065 5.89121L19.2329 2.86003C17.2011 0.992106 14.5106 -0.0328008 11.7249 3.27798e-05C9.64418 -0.000452376 7.60433 0.566279 5.83345 1.63686C4.06256 2.70743 2.63046 4.23965 1.69727 6.06218L5.32684 8.82455C5.77077 7.50213 6.62703 6.34962 7.77491 5.5295C8.9228 4.70938 10.3044 4.26302 11.7249 4.25337Z",fill:"#EB4335"})]}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0_132_14584",children:(0,l.jsx)("rect",{width:"22",height:"22",fill:"white",transform:"translate(0.5)"})})})]}),"Sign in with Google"]}),(0,l.jsxs)("button",{onClick:()=>(0,d.signIn)("github"),className:"mt-4 flex w-full items-center justify-center gap-3 rounded-lg border border-white/[0.12] p-3.5 font-medium text-white duration-300 ease-in hover:border-purple",children:[(0,l.jsx)("svg",{fill:"currentColor",width:"22",height:"22",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M32 1.7998C15 1.7998 1 15.5998 1 32.7998C1 46.3998 9.9 57.9998 22.3 62.1998C23.9 62.4998 24.4 61.4998 24.4 60.7998C24.4 60.0998 24.4 58.0998 24.3 55.3998C15.7 57.3998 13.9 51.1998 13.9 51.1998C12.5 47.6998 10.4 46.6998 10.4 46.6998C7.6 44.6998 10.5 44.6998 10.5 44.6998C13.6 44.7998 15.3 47.8998 15.3 47.8998C18 52.6998 22.6 51.2998 24.3 50.3998C24.6 48.3998 25.4 46.9998 26.3 46.1998C19.5 45.4998 12.2 42.7998 12.2 30.9998C12.2 27.5998 13.5 24.8998 15.4 22.7998C15.1 22.0998 14 18.8998 15.7 14.5998C15.7 14.5998 18.4 13.7998 24.3 17.7998C26.8 17.0998 29.4 16.6998 32.1 16.6998C34.8 16.6998 37.5 16.9998 39.9 17.7998C45.8 13.8998 48.4 14.5998 48.4 14.5998C50.1 18.7998 49.1 22.0998 48.7 22.7998C50.7 24.8998 51.9 27.6998 51.9 30.9998C51.9 42.7998 44.6 45.4998 37.8 46.1998C38.9 47.1998 39.9 49.1998 39.9 51.9998C39.9 56.1998 39.8 59.4998 39.8 60.4998C39.8 61.2998 40.4 62.1998 41.9 61.8998C54.1 57.7998 63 46.2998 63 32.5998C62.9 15.5998 49 1.7998 32 1.7998Z"})}),"Sign in with Github"]}),(0,l.jsxs)("span",{className:"relative my-7.5 block text-center text-sm font-medium",children:[(0,l.jsx)("span",{className:"absolute left-0 top-1/2 block h-[1px] w-22.5 bg-white/[0.12]"}),(0,l.jsx)("span",{className:"absolute right-0 top-1/2 block h-[1px] w-22.5 bg-white/[0.12]"}),"Or sign in with email"]}),(0,l.jsxs)("form",{onSubmit:loginUser,children:[(0,l.jsxs)("div",{className:"relative mb-4",children:[(0,l.jsx)("span",{className:"absolute left-6 top-1/2 -translate-y-1/2",children:(0,l.jsx)("svg",{width:"16",height:"12",viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M13.9998 0.399994H1.9998C1.1498 0.399994 0.424805 1.09999 0.424805 1.97499V10.075C0.424805 10.925 1.1248 11.65 1.9998 11.65H13.9998C14.8498 11.65 15.5748 10.95 15.5748 10.075V1.94999C15.5748 1.09999 14.8498 0.399994 13.9998 0.399994ZM13.9998 1.52499C14.0248 1.52499 14.0498 1.52499 14.0748 1.52499L7.9998 5.42499L1.9248 1.52499C1.9498 1.52499 1.9748 1.52499 1.9998 1.52499H13.9998ZM13.9998 10.475H1.9998C1.7498 10.475 1.5498 10.275 1.5498 10.025V2.62499L7.3998 6.37499C7.5748 6.49999 7.7748 6.54999 7.9748 6.54999C8.1748 6.54999 8.3748 6.49999 8.5498 6.37499L14.3998 2.62499V10.05C14.4498 10.3 14.2498 10.475 13.9998 10.475Z",fill:"#918EA0"})})}),(0,l.jsx)("input",{type:"email",placeholder:"Enter your email",value:e.email,onChange:n=>r({...e,email:n.target.value}),className:"w-full rounded-lg border border-white/[0.12] bg-transparent py-3.5 pl-14.5 pr-4 font-medium text-white outline-none focus:border-purple focus-visible:shadow-none"})]}),(0,l.jsxs)("div",{className:"relative mb-5",children:[(0,l.jsx)("span",{className:"absolute left-6 top-1/2 -translate-y-1/2",children:(0,l.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsxs)("g",{clipPath:"url(#clip0_368_6544)",children:[(0,l.jsx)("path",{d:"M14.0752 1.92501C13.1252 0.975012 11.8502 0.450012 10.5002 0.450012C9.1502 0.450012 7.8502 0.975012 6.9002 1.92501C5.6252 3.20001 5.1252 5.00001 5.5752 6.75001L0.725195 11.575C0.550195 11.75 0.450195 12 0.450195 12.275V14.6C0.450195 15.125 0.875195 15.575 1.4252 15.575H3.7502C4.0002 15.575 4.2502 15.475 4.4502 15.3L5.0252 14.725C5.2252 14.525 5.3502 14.225 5.3002 13.925V13.875L5.6002 13.85C6.0752 13.8 6.4252 13.45 6.4752 12.975L6.5002 12.675H6.5502C6.8252 12.7 7.1002 12.625 7.3252 12.425C7.5252 12.25 7.6502 11.975 7.6502 11.7V11.5H7.8252C8.0752 11.5 8.3252 11.4 8.5002 11.225L9.3252 10.425C11.0502 10.85 12.8502 10.375 14.1002 9.12501C16.0502 7.12501 16.0502 3.90001 14.0752 1.92501ZM13.2752 8.30001C12.2502 9.32501 10.7252 9.70001 9.3002 9.22501C9.1002 9.15001 8.8752 9.20001 8.7252 9.35001L7.7252 10.35H7.0502C6.7502 10.35 6.4752 10.6 6.4752 10.925V11.525L6.0252 11.475C5.8752 11.45 5.7252 11.5 5.6002 11.6C5.4752 11.7 5.4002 11.825 5.4002 11.975L5.3252 12.725L4.5752 12.8C4.4252 12.825 4.2752 12.9 4.2002 13C4.1002 13.125 4.0502 13.275 4.0752 13.425L4.1502 13.975L3.6752 14.45H1.5752V12.35L6.6002 7.32501C6.7502 7.17501 6.8002 6.95001 6.7252 6.75001C6.2752 5.32501 6.6252 3.80001 7.6752 2.75001C8.4252 2.00001 9.4002 1.60001 10.4752 1.60001C11.5252 1.60001 12.5252 2.00001 13.2752 2.75001C14.8252 4.25001 14.8252 6.75001 13.2752 8.30001Z",fill:"#918EA0"}),(0,l.jsx)("path",{d:"M11.3498 2.875C10.8748 2.875 10.4248 3.05 10.0748 3.4C9.3748 4.1 9.3748 5.225 10.0748 5.925C10.4248 6.275 10.8748 6.45 11.3498 6.45C11.8248 6.45 12.2748 6.275 12.6248 5.925C12.9748 5.575 13.1498 5.125 13.1498 4.65C13.1498 4.175 12.9748 3.725 12.6248 3.375C12.2748 3.05 11.8248 2.875 11.3498 2.875ZM11.8248 5.125C11.5748 5.375 11.1248 5.375 10.8748 5.125C10.6248 4.875 10.6248 4.45 10.8748 4.175C10.9998 4.05 11.1748 3.975 11.3498 3.975C11.5248 3.975 11.6998 4.05 11.8248 4.175C11.9498 4.3 12.0248 4.475 12.0248 4.65C12.0248 4.825 11.9498 5 11.8248 5.125Z",fill:"#918EA0"})]}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0_368_6544",children:(0,l.jsx)("rect",{width:"16",height:"16",fill:"white"})})})]})}),(0,l.jsx)("input",{type:"password",placeholder:"Password",value:e.password,onChange:n=>r({...e,password:n.target.value}),className:"w-full rounded-lg border border-white/[0.12] bg-transparent py-3.5 pl-14.5 pr-4 font-medium text-white outline-none focus:border-purple focus-visible:shadow-none"})]}),(0,l.jsxs)("div",{className:"mb-7.5 flex items-center justify-between",children:[(0,l.jsx)("div",{"x-data":"{ checkboxToggle: false }",children:(0,l.jsxs)("label",{htmlFor:"checkboxLabelTwo",className:"flex cursor-pointer select-none items-center text-sm font-medium",children:[(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)("input",{type:"checkbox",id:"checkboxLabelTwo",className:"sr-only text-white",onChange:()=>c(!n)}),(0,l.jsx)("div",{className:"mr-2 flex h-5 w-5 items-center justify-center rounded-md border ".concat(n?"border-purple bg-purple":"border-white/[0.12]"),children:(0,l.jsx)("span",{className:"".concat(n?"opacity-100":"opacity-0"),children:(0,l.jsx)("svg",{width:"11",height:"8",viewBox:"0 0 11 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z",fill:"#FFF",stroke:"#FF",strokeWidth:"0.4"})})})})]}),"Remember me"]})}),(0,l.jsx)("a",{href:"/#",className:"text-sm font-medium text-purple",children:"Forgot Password?"})]}),(0,l.jsx)("button",{type:"submit",className:"hero-button-gradient flex w-full justify-center rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80",children:"Sign in with AI Tool"})]}),(0,l.jsxs)("p",{className:"mt-5 text-center font-medium text-white",children:["Don","'","t have an account?"," ",(0,l.jsx)(f(),{href:"/auth/signup",className:"text-purple",children:"Sign Up for Free"})]})]})})})]})})})})})}},30622:function(e,r,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=n(2265),d=Symbol.for("react.element"),c=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,h=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function q(e,r,n){var l,c={},x=null,g=null;for(l in void 0!==n&&(x=""+n),void 0!==r.key&&(x=""+r.key),void 0!==r.ref&&(g=r.ref),r)m.call(r,l)&&!f.hasOwnProperty(l)&&(c[l]=r[l]);if(e&&e.defaultProps)for(l in r=e.defaultProps)void 0===c[l]&&(c[l]=r[l]);return{$$typeof:d,type:e,key:x,ref:g,props:c,_owner:h.current}}r.Fragment=c,r.jsx=q,r.jsxs=q},57437:function(e,r,n){"use strict";e.exports=n(30622)},5925:function(e,r,n){"use strict";let l,d;n.d(r,{ZP:function(){return Y}});var c,m=n(2265);let h={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||h,f=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,x=/\/\*[^]*?\*\/|  +/g,g=/\n+/g,o=(e,r)=>{let n="",l="",d="";for(let c in e){let m=e[c];"@"==c[0]?"i"==c[1]?n=c+" "+m+";":l+="f"==c[1]?o(m,c):c+"{"+o(m,"k"==c[1]?"":r)+"}":"object"==typeof m?l+=o(m,r?r.replace(/([^,])+/g,e=>c.replace(/(^:.*)|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):c):null!=m&&(c=/^--/.test(c)?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),d+=o.p?o.p(c,m):c+":"+m+";")}return n+(r&&d?r+"{"+d+"}":d)+l},b={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,l,d)=>{var c;let m=s(e),h=b[m]||(b[m]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(m));if(!b[h]){let r=m!==e?e:(e=>{let r,n,l=[{}];for(;r=f.exec(e.replace(x,""));)r[4]?l.shift():r[3]?(n=r[3].replace(g," ").trim(),l.unshift(l[0][n]=l[0][n]||{})):l[0][r[1]]=r[2].replace(g," ").trim();return l[0]})(e);b[h]=o(d?{["@keyframes "+h]:r}:r,n?"":"."+h)}let w=n&&b.g?b.g:null;return n&&(b.g=b[h]),c=b[h],w?r.data=r.data.replace(w,c):-1===r.data.indexOf(c)&&(r.data=l?c+r.data:r.data+c),h},p=(e,r,n)=>e.reduce((e,l,d)=>{let c=r[d];if(c&&c.call){let e=c(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;c=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==c?"":c)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let w,C,y,j=u.bind({k:1});function goober_modern_j(e,r){let n=this||{};return function(){let l=arguments;function a(d,c){let m=Object.assign({},d),h=m.className||a.className;n.p=Object.assign({theme:C&&C()},m),n.o=/ *go\d+/.test(h),m.className=u.apply(n,l)+(h?" "+h:""),r&&(m.ref=c);let f=e;return e[0]&&(f=m.as||e,delete m.as),y&&f[0]&&y(m),w(f,m)}return r?r(a):a}}var W=e=>"function"==typeof e,T=(e,r)=>W(e)?e(r):e,_=(l=0,()=>(++l).toString()),dist_b=()=>{if(void 0===d&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");d=!e||e.matches}return d},L=new Map,$=e=>{if(L.has(e))return;let r=setTimeout(()=>{L.delete(e),dist_u({type:4,toastId:e})},1e3);L.set(e,r)},J=e=>{let r=L.get(e);r&&clearTimeout(r)},v=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return r.toast.id&&J(r.toast.id),{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return e.toasts.find(e=>e.id===n.id)?v(e,{type:1,toast:n}):v(e,{type:0,toast:n});case 3:let{toastId:l}=r;return l?$(l):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let d=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+d}))}}},N=[],k={toasts:[],pausedAt:void 0},dist_u=e=>{k=v(k,e),N.forEach(e=>{e(k)})},G=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||_()}),dist_h=e=>(r,n)=>{let l=G(r,e,n);return dist_u({type:2,toast:l}),l.id},dist_n=(e,r)=>dist_h("blank")(e,r);dist_n.error=dist_h("error"),dist_n.success=dist_h("success"),dist_n.loading=dist_h("loading"),dist_n.custom=dist_h("custom"),dist_n.dismiss=e=>{dist_u({type:3,toastId:e})},dist_n.remove=e=>dist_u({type:4,toastId:e}),dist_n.promise=(e,r,n)=>{let l=dist_n.loading(r.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(dist_n.success(T(r.success,e),{id:l,...n,...null==n?void 0:n.success}),e)).catch(e=>{dist_n.error(T(r.error,e),{id:l,...n,...null==n?void 0:n.error})}),e};var E=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,F=j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,P=j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,O=goober_modern_j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${E} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${F} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${P} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Z=j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,A=goober_modern_j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Z} 1s linear infinite;
`,I=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,S=j`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,H=goober_modern_j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${I} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${S} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,V=goober_modern_j("div")`
  position: absolute;
`,B=goober_modern_j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,z=j`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,D=goober_modern_j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${z} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:l}=e;return void 0!==r?"string"==typeof r?m.createElement(D,null,r):r:"blank"===n?null:m.createElement(B,null,m.createElement(A,{...l}),"loading"!==n&&m.createElement(V,null,"error"===n?m.createElement(O,{...l}):m.createElement(H,{...l})))},ye=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,U=goober_modern_j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,R=goober_modern_j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,r)=>{let n=e.includes("top")?1:-1,[l,d]=dist_b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:r?`${j(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(d)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};m.memo(({toast:e,position:r,style:n,children:l})=>{let d=e.height?Ae(e.position||r||"top-center",e.visible):{opacity:0},c=m.createElement(M,{toast:e}),h=m.createElement(R,{...e.ariaProps},T(e.message,e));return m.createElement(U,{className:e.className,style:{...d,...n,...e.style}},"function"==typeof l?l({icon:c,message:h}):m.createElement(m.Fragment,null,c,h))}),c=m.createElement,o.p=void 0,w=c,C=void 0,y=void 0,u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var Y=dist_n}},function(e){e.O(0,[8326,413,1324,2971,2472,1744],function(){return e(e.s=95640)}),_N_E=e.O()}]);