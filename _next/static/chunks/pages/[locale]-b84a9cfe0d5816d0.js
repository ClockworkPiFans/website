(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[513],{3124:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[locale]",function(){return l(7772)}])},2494:function(e,n,l){"use strict";l.d(n,{Z:function(){return c}});var s=l(5893),i=l(9094),t=l(6137),r=l(5117),o=l(778),a=l(9583);function c(){let{t:e}=(0,o.$G)("common");return(0,s.jsx)(i.M,{style:{width:"100%",height:"90vh"},children:(0,s.jsxs)(t.Z,{spacing:6,children:[(0,s.jsx)(a.DAO,{}),(0,s.jsx)(r.x,{children:e("developing-description")})]})})}},5236:function(e,n,l){"use strict";l.d(n,{Z:function(){return E}});var s=l(5893),i=l(6817),t=l(118),r=l(6137),o=l(9094),a=l(3643),c=l(2445),h=l(4736),d=l(1310),u=l(1759),x=l(5675),j=l.n(x),m=l(1163),g=l(6893),k=l(6972),p=l(8495),f=l(3234),b=l(9583);function v(){let{colorScheme:e,toggleColorScheme:n}=(0,k.X)(),l=(0,p.rZ)();return(0,s.jsx)(r.Z,{position:"center",my:30,children:(0,s.jsx)(f.r,{checked:"dark"===e,onChange:()=>n(),size:"lg",onLabel:(0,s.jsx)(b.Mei,{color:l.white,size:20}),offLabel:(0,s.jsx)(b.TLr,{color:l.colors.gray[6],size:20})})})}let y=(0,i.k)(e=>({inner:{height:74,display:"flex",justifyContent:"space-between",alignItems:"center"},links:{[e.fn.smallerThan("sm")]:{display:"none"}},burger:{[e.fn.largerThan("sm")]:{display:"none"}},link:{display:"flex",lineHeight:1,padding:"8px 12px",borderRadius:e.radius.sm,textDecoration:"none",color:"dark"===e.colorScheme?e.colors.dark[0]:e.colors.gray[7],fontSize:e.fontSizes.sm,fontWeight:500,justifyContent:"space-between",alignItems:"center","&:hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]}},linkLabel:{marginRight:5},toolbar:{display:"flex",justifyContent:"space-between",alignItems:"center",[e.fn.smallerThan("sm")]:{display:"none"}}}));function w(e){let{links:n,extraElements:l}=e,i=(0,m.useRouter)(),[x,{toggle:k}]=(0,u.q)(!1),{classes:p}=y(),f=(e,n)=>{e.preventDefault(),i.push(n)},b=n.map(e=>{var n;let l=null===(n=e.links)||void 0===n?void 0:n.map(e=>(0,s.jsx)(t.v.Item,{onClick:()=>i.push(e.link),children:(0,s.jsxs)(r.Z,{spacing:6,children:[e.startIcon,e.label]})},e.link));return l?(0,s.jsxs)(t.v,{trigger:"hover",exitTransitionDuration:0,children:[(0,s.jsx)(t.v.Target,{children:(0,s.jsx)("a",{href:e.link,className:p.link,onClick:n=>f(n,e.link),children:(0,s.jsxs)(o.M,{children:[(0,s.jsxs)(r.Z,{spacing:6,children:[e.startIcon,e.label]}),(0,s.jsx)(g.bTu,{size:12})]})})}),(0,s.jsx)(t.v.Dropdown,{children:l})]},e.label):(0,s.jsx)("a",{href:e.link,className:p.link,onClick:n=>f(n,e.link),children:(0,s.jsxs)(r.Z,{spacing:6,children:[e.startIcon,e.label]})},e.label)});return(0,s.jsx)(a.h,{height:74,children:(0,s.jsx)(c.W,{style:{maxWidth:"90%"},children:(0,s.jsxs)("div",{className:p.inner,children:[(0,s.jsx)(h.k,{onClick:()=>i.push("/"+i.query.locale),children:(0,s.jsx)(j(),{src:"/logo.svg",alt:"Logo",width:220,height:48,priority:!0})}),(0,s.jsx)(r.Z,{spacing:5,className:p.links,children:b}),(0,s.jsx)("div",{className:p.toolbar,children:(0,s.jsxs)(r.Z,{spacing:20,children:[null==l?void 0:l.map(e=>e),(0,s.jsx)(v,{})]})}),(0,s.jsx)(d.O,{opened:x,onClick:k,className:p.burger,size:"sm"})]})})})}var C=l(778);function I(e){let{icon:n,onClick:l}=e;return(0,s.jsx)(h.k,{onClick:l,children:n})}var _=l(3750),N=l(5434),Z=l(4131),z=l(7421),T=l(9274);function D(){let e=(0,m.useRouter)(),{t:n}=(0,z.$G)("common"),l=n=>{e.push(e.asPath,e.asPath.replace(e.query.locale,n),{locale:n})};return(0,s.jsxs)(t.v,{position:"bottom",offset:5,children:[(0,s.jsx)(t.v.Target,{children:(0,s.jsx)(Z.A,{children:(0,s.jsx)(T.QoC,{size:24,color:"#595757"})})}),(0,s.jsxs)(t.v.Dropdown,{children:[(0,s.jsx)(t.v.Label,{children:n("language")}),(0,s.jsx)(t.v.Item,{onClick:()=>l("zh"),children:"中文"}),(0,s.jsx)(t.v.Item,{onClick:()=>l("en"),children:"English"})]})]})}function E(e){let{children:n}=e,{t:l}=(0,C.$G)(),i=(0,m.useRouter)();function t(e){return"/".concat(i.query.locale).concat(e)}let r=[{link:t("/"),label:l("home"),startIcon:(0,s.jsx)(b.xng,{})},{link:t("/gameshell-ext"),label:l("gameshell-ext"),startIcon:(0,s.jsx)(b.iVx,{}),links:[{link:t("/gameshell-ext/screen"),label:l("screen"),startIcon:(0,s.jsx)(N.fY5,{})},{link:t("/gameshell-ext/joypad"),label:l("joypad"),startIcon:(0,s.jsx)(_.ubU,{})}]},{link:t("/manual"),label:l("manual"),startIcon:(0,s.jsx)(b.Mp$,{})},{link:t("/about"),label:l("about"),startIcon:(0,s.jsx)(b.DAO,{})},{link:t("/faq"),label:l("faq"),startIcon:(0,s.jsx)(b.MXt,{})}];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w,{links:r,extraElements:[(0,s.jsx)(D,{},"language"),(0,s.jsx)(I,{icon:(0,s.jsx)(b.hJX,{size:24,color:"#595757"}),onClick:()=>window.open("https://github.com/ClockworkPiFans","_blank")},"github")]}),n]})}},7772:function(e,n,l){"use strict";l.r(n),l.d(n,{__N_SSG:function(){return c},default:function(){return h}});var s=l(5893),i=l(5236),t=l(9008),r=l.n(t),o=l(778),a=l(2494),c=!0;function h(){let{t:e}=(0,o.$G)("common");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r(),{children:[(0,s.jsx)("title",{children:e("title",{title:e("home")})}),(0,s.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)(a.Z,{})]})}h.getLayout=e=>(0,s.jsx)(i.Z,{children:e})}},function(e){e.O(0,[228,445,13,827,234,774,888,179],function(){return e(e.s=3124)}),_N_E=e.O()}]);