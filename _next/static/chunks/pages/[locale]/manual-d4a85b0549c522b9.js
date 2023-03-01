(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[502],{7776:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]/manual",function(){return l(2319)}])},2494:function(e,n,l){"use strict";l.d(n,{Z:function(){return c}});var t=l(5893),s=l(9094),i=l(6137),r=l(5117),o=l(778),a=l(9583);function c(){let{t:e}=(0,o.$G)("common");return(0,t.jsx)(s.M,{style:{width:"100%",height:"90vh"},children:(0,t.jsxs)(i.Z,{spacing:6,children:[(0,t.jsx)(a.DAO,{}),(0,t.jsx)(r.x,{children:e("developing-description")})]})})}},1339:function(e,n){"use strict";n.Z={default:"#595757"}},5236:function(e,n,l){"use strict";l.d(n,{Z:function(){return L}});var t=l(5893),s=l(6817),i=l(719),r=l(6137),o=l(9094),a=l(3643),c=l(2445),u=l(4736),h=l(1310),d=l(1759),x=l(5675),j=l.n(x),f=l(1163),m=l(6893),k=l(6972),g=l(8495),p=l(4910),b=l(9583);function v(){let{colorScheme:e,toggleColorScheme:n}=(0,k.X)(),l=(0,g.rZ)();return(0,t.jsx)(r.Z,{position:"center",my:30,children:(0,t.jsx)(p.r,{checked:"dark"===e,onChange:()=>n(),size:"lg",onLabel:(0,t.jsx)(b.Mei,{color:l.white,size:20}),offLabel:(0,t.jsx)(b.TLr,{color:l.colors.gray[6],size:20})})})}let y=(0,s.k)(e=>({inner:{height:74,display:"flex",justifyContent:"space-between",alignItems:"center"},links:{[e.fn.smallerThan("sm")]:{display:"none"}},burger:{[e.fn.largerThan("sm")]:{display:"none"}},link:{display:"flex",lineHeight:1,padding:"8px 12px",borderRadius:e.radius.sm,textDecoration:"none",color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[7],fontSize:e.fontSizes.sm,fontWeight:500,justifyContent:"space-between",alignItems:"center","&:hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]}},linkLabel:{marginRight:5},toolbar:{display:"flex",justifyContent:"space-between",alignItems:"center",[e.fn.smallerThan("sm")]:{display:"none"}}}));function w(e){let{links:n,extraElements:l}=e,s=(0,f.useRouter)(),[x,{toggle:k}]=(0,d.q)(!1),{classes:g}=y(),p=(e,n)=>{e.preventDefault(),s.push(n)},b=n.map(e=>{var n;let l=null===(n=e.links)||void 0===n?void 0:n.map(e=>(0,t.jsx)(i.v.Item,{onClick:()=>s.push(e.link),children:(0,t.jsxs)(r.Z,{spacing:6,children:[e.startIcon,e.label]})},e.link));return l?(0,t.jsxs)(i.v,{trigger:"hover",exitTransitionDuration:0,children:[(0,t.jsx)(i.v.Target,{children:(0,t.jsx)("a",{href:e.link,className:g.link,onClick:n=>p(n,e.link),children:(0,t.jsxs)(o.M,{children:[(0,t.jsxs)(r.Z,{spacing:6,children:[e.startIcon,e.label]}),(0,t.jsx)(m.bTu,{size:12})]})})}),(0,t.jsx)(i.v.Dropdown,{children:l})]},e.label):(0,t.jsx)("a",{href:e.link,className:g.link,onClick:n=>p(n,e.link),children:(0,t.jsxs)(r.Z,{spacing:6,children:[e.startIcon,e.label]})},e.label)});return(0,t.jsx)(a.h,{height:74,children:(0,t.jsx)(c.W,{style:{maxWidth:"90%"},children:(0,t.jsxs)("div",{className:g.inner,children:[(0,t.jsx)(u.k,{onClick:()=>s.push("/"+s.query.locale),children:(0,t.jsx)(j(),{src:"/logo.svg",alt:"Logo",width:220,height:48,priority:!0})}),(0,t.jsx)(r.Z,{spacing:5,className:g.links,children:b}),(0,t.jsx)("div",{className:g.toolbar,children:(0,t.jsxs)(r.Z,{spacing:20,children:[null==l?void 0:l.map(e=>e),(0,t.jsx)(v,{})]})}),(0,t.jsx)(h.O,{opened:x,onClick:k,className:g.burger,size:"sm"})]})})})}var C=l(778);function I(e){let{icon:n,onClick:l}=e;return(0,t.jsx)(u.k,{onClick:l,children:n})}var _=l(3750),Z=l(5434),N=l(1339),z=l(9834),T=l(7421),q=l(9274);function D(){let e=(0,f.useRouter)(),{t:n}=(0,T.$G)("common"),l=n=>{e.push(e.asPath,e.asPath.replace(e.query.locale,n),{locale:n})};return(0,t.jsxs)(i.v,{position:"bottom",offset:5,children:[(0,t.jsx)(i.v.Target,{children:(0,t.jsx)(z.A,{children:(0,t.jsx)(q.QoC,{size:24,color:N.Z.default})})}),(0,t.jsxs)(i.v.Dropdown,{children:[(0,t.jsx)(i.v.Label,{children:n("language")}),(0,t.jsx)(i.v.Item,{onClick:()=>l("zh"),children:"中文"}),(0,t.jsx)(i.v.Item,{onClick:()=>l("en"),children:"English"})]})]})}var E=l(4593);function L(e){let{children:n}=e,{t:l}=(0,C.$G)(),s=(0,f.useRouter)();function i(e){return(0,E.n)(e,s.query.locale)}let r=[{link:i("/"),label:l("home"),startIcon:(0,t.jsx)(b.xng,{})},{link:i("/gameshell-ext"),label:l("gameshell-ext"),startIcon:(0,t.jsx)(b.iVx,{}),links:[{link:i("/gameshell-ext/screen"),label:l("screen"),startIcon:(0,t.jsx)(Z.fY5,{})},{link:i("/gameshell-ext/joypad"),label:l("joypad"),startIcon:(0,t.jsx)(_.ubU,{})}]},{link:(0,E.I)("https://manual.clockworkpi-fans.com",s.query.locale),label:l("manual"),startIcon:(0,t.jsx)(b.Mp$,{})},{link:i("/about"),label:l("about"),startIcon:(0,t.jsx)(b.DAO,{})},{link:i("/faq"),label:l("faq"),startIcon:(0,t.jsx)(b.MXt,{})}];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(w,{links:r,extraElements:[(0,t.jsx)(D,{},"language"),(0,t.jsx)(I,{icon:(0,t.jsx)(b.hJX,{size:24,color:N.Z.default}),onClick:()=>window.open("https://github.com/ClockworkPiFans","_blank")},"github")]}),n]})}},4593:function(e,n,l){"use strict";function t(e,n){return"/".concat(n).concat(e)}function s(e,n){return"en"===n?e:e+"/"+n}l.d(n,{I:function(){return s},n:function(){return t}})},2319:function(e,n,l){"use strict";l.r(n),l.d(n,{__N_SSG:function(){return c},default:function(){return u}});var t=l(5893),s=l(5236),i=l(9008),r=l.n(i),o=l(778),a=l(2494),c=!0;function u(){let{t:e}=(0,o.$G)("common");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r(),{children:[(0,t.jsx)("title",{children:e("title",{title:e("manual")})}),(0,t.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)(a.Z,{})]})}u.getLayout=e=>(0,t.jsx)(s.Z,{children:e})}},function(e){e.O(0,[228,445,13,827,967,774,888,179],function(){return e(e.s=7776)}),_N_E=e.O()}]);