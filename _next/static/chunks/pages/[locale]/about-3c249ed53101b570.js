(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[721],{815:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/about",function(){return t(3150)}])},2494:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var l=t(5893),i=t(9094),s=t(6137),r=t(5117),o=t(778),a=t(9583);function c(){let{t:e}=(0,o.$G)("common");return(0,l.jsx)(i.M,{style:{width:"100%",height:"90vh"},children:(0,l.jsxs)(s.Z,{spacing:6,children:[(0,l.jsx)(a.DAO,{}),(0,l.jsx)(r.x,{children:e("developing-description")})]})})}},1339:function(e,n){"use strict";n.Z={default:"#595757"}},5236:function(e,n,t){"use strict";t.d(n,{Z:function(){return q}});var l=t(5893),i=t(6817),s=t(719),r=t(6137),o=t(9094),a=t(3643),c=t(2445),u=t(4736),h=t(1310),d=t(1759),x=t(5675),j=t.n(x),f=t(1163),k=t(6893),g=t(6972),m=t(8495),p=t(4910),b=t(9583);function v(){let{colorScheme:e,toggleColorScheme:n}=(0,g.X)(),t=(0,m.rZ)();return(0,l.jsx)(r.Z,{position:"center",my:30,children:(0,l.jsx)(p.r,{checked:"dark"===e,onChange:()=>n(),size:"lg",onLabel:(0,l.jsx)(b.Mei,{color:t.white,size:20}),offLabel:(0,l.jsx)(b.TLr,{color:t.colors.gray[6],size:20})})})}let w=(0,i.k)(e=>({inner:{height:74,display:"flex",justifyContent:"space-between",alignItems:"center"},links:{[e.fn.smallerThan("sm")]:{display:"none"}},burger:{[e.fn.largerThan("sm")]:{display:"none"}},link:{display:"flex",lineHeight:1,padding:"8px 12px",borderRadius:e.radius.sm,textDecoration:"none",color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[7],fontSize:e.fontSizes.sm,fontWeight:500,justifyContent:"space-between",alignItems:"center","&:hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]}},linkLabel:{marginRight:5},toolbar:{display:"flex",justifyContent:"space-between",alignItems:"center",[e.fn.smallerThan("sm")]:{display:"none"}}}));function y(e){let{links:n,extraElements:t}=e,i=(0,f.useRouter)(),[x,{toggle:g}]=(0,d.q)(!1),{classes:m}=w(),p=(e,n,t)=>{e.preventDefault(),t&&!0===t?window.open(n,"_blank"):i.push(n)},b=n.map(e=>{var n;let t=null===(n=e.links)||void 0===n?void 0:n.map(e=>(0,l.jsx)(s.v.Item,{onClick:n=>p(n,e.link,e.external),children:(0,l.jsxs)(r.Z,{spacing:6,children:[e.startIcon,e.label]})},e.link));return t?(0,l.jsxs)(s.v,{trigger:"hover",exitTransitionDuration:0,children:[(0,l.jsx)(s.v.Target,{children:(0,l.jsx)("a",{href:e.link,className:m.link,onClick:n=>p(n,e.link,e.external),children:(0,l.jsxs)(o.M,{children:[(0,l.jsxs)(r.Z,{spacing:6,children:[e.startIcon,e.label]}),(0,l.jsx)(k.bTu,{size:12})]})})}),(0,l.jsx)(s.v.Dropdown,{children:t})]},e.label):(0,l.jsx)("a",{href:e.link,className:m.link,onClick:n=>p(n,e.link,e.external),children:(0,l.jsxs)(r.Z,{spacing:6,children:[e.startIcon,e.label]})},e.label)});return(0,l.jsx)(a.h,{height:74,children:(0,l.jsx)(c.W,{style:{maxWidth:"90%"},children:(0,l.jsxs)("div",{className:m.inner,children:[(0,l.jsx)(u.k,{onClick:()=>i.push("/"+i.query.locale),children:(0,l.jsx)(j(),{src:"/website/logo.svg",alt:"Logo",width:220,height:48,priority:!0})}),(0,l.jsx)(r.Z,{spacing:5,className:m.links,children:b}),(0,l.jsx)("div",{className:m.toolbar,children:(0,l.jsxs)(r.Z,{spacing:20,children:[null==t?void 0:t.map(e=>e),(0,l.jsx)(v,{})]})}),(0,l.jsx)(h.O,{opened:x,onClick:g,className:m.burger,size:"sm"})]})})})}var C=t(778);function I(e){let{icon:n,onClick:t}=e;return(0,l.jsx)(u.k,{onClick:t,children:n})}var _=t(3750),Z=t(5434),N=t(1339),z=t(9834),T=t(7421),D=t(9274);function E(){let e=(0,f.useRouter)(),{t:n}=(0,T.$G)("common"),t=n=>{e.push(e.asPath,e.asPath.replace(e.query.locale,n),{locale:n})};return(0,l.jsxs)(s.v,{position:"bottom",offset:5,children:[(0,l.jsx)(s.v.Target,{children:(0,l.jsx)(z.A,{children:(0,l.jsx)(D.QoC,{size:24,color:N.Z.default})})}),(0,l.jsxs)(s.v.Dropdown,{children:[(0,l.jsx)(s.v.Label,{children:n("language")}),(0,l.jsx)(s.v.Item,{onClick:()=>t("zh"),children:"中文"}),(0,l.jsx)(s.v.Item,{onClick:()=>t("en"),children:"English"})]})]})}var L=t(4593);function q(e){let{children:n}=e,{t}=(0,C.$G)(),i=(0,f.useRouter)();function s(e){return(0,L.n)(e,i.query.locale)}let r=[{link:s("/"),label:t("home"),startIcon:(0,l.jsx)(b.xng,{})},{link:s("/gameshell-ext"),label:t("gameshell-ext"),startIcon:(0,l.jsx)(b.iVx,{}),links:[{link:s("/gameshell-ext/screen"),label:t("screen"),startIcon:(0,l.jsx)(Z.fY5,{})},{link:s("/gameshell-ext/joypad"),label:t("joypad"),startIcon:(0,l.jsx)(_.ubU,{})}]},{link:"https://clockworkpifans.github.io/manual",label:t("manual"),startIcon:(0,l.jsx)(b.Mp$,{}),external:!0},{link:s("/about"),label:t("about"),startIcon:(0,l.jsx)(b.DAO,{})},{link:s("/faq"),label:t("faq"),startIcon:(0,l.jsx)(b.MXt,{})}];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y,{links:r,extraElements:[(0,l.jsx)(E,{},"language"),(0,l.jsx)(I,{icon:(0,l.jsx)(b.hJX,{size:24,color:N.Z.default}),onClick:()=>window.open("https://github.com/ClockworkPiFans","_blank")},"github")]}),n]})}},4593:function(e,n,t){"use strict";function l(e,n){return"/".concat(n).concat(e)}function i(e,n){return"en"===n?e:e+"/"+n}t.d(n,{I:function(){return i},n:function(){return l}})},3150:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return c},default:function(){return u}});var l=t(5893),i=t(5236),s=t(9008),r=t.n(s),o=t(778),a=t(2494),c=!0;function u(){let{t:e}=(0,o.$G)("common");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r(),{children:[(0,l.jsx)("title",{children:e("title",{title:e("about")})}),(0,l.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsx)(a.Z,{})]})}u.getLayout=e=>(0,l.jsx)(i.Z,{children:e})}},function(e){e.O(0,[228,445,13,827,967,774,888,179],function(){return e(e.s=815)}),_N_E=e.O()}]);