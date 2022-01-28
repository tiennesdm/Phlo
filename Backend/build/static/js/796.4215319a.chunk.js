"use strict";(self.webpackChunkphlo=self.webpackChunkphlo||[]).push([[796],{5796:function(r,t,a){a.r(t),a.d(t,{default:function(){return F}});var n=a(2791),o=a(4554),e=a(7462),i=a(3366),s=a(8182),c=a(767),u=a(7630),l=a(1046),p=a(703),d=a(5159),g=a(208);function h(r){return(0,d.Z)("MuiCard",r)}(0,g.Z)("MuiCard",["root"]);var m=a(184),v=["className","raised"],f=(0,u.ZP)(p.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(r,t){return t.root}})((function(){return{overflow:"hidden"}})),Z=n.forwardRef((function(r,t){var a=(0,l.Z)({props:r,name:"MuiCard"}),n=a.className,o=a.raised,u=void 0!==o&&o,p=(0,i.Z)(a,v),d=(0,e.Z)({},a,{raised:u}),g=function(r){var t=r.classes;return(0,c.Z)({root:["root"]},h,t)}(d);return(0,m.jsx)(f,(0,e.Z)({className:(0,s.Z)(g.root,n),elevation:u?8:void 0,ref:t,ownerState:d},p))}));function x(r){return(0,d.Z)("MuiCardContent",r)}(0,g.Z)("MuiCardContent",["root"]);var y=["className","component"],C=(0,u.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(r,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),S=n.forwardRef((function(r,t){var a=(0,l.Z)({props:r,name:"MuiCardContent"}),n=a.className,o=a.component,u=void 0===o?"div":o,p=(0,i.Z)(a,y),d=(0,e.Z)({},a,{component:u}),g=function(r){var t=r.classes;return(0,c.Z)({root:["root"]},x,t)}(d);return(0,m.jsx)(C,(0,e.Z)({as:u,className:(0,s.Z)(g.root,n),ownerState:d,ref:t},p))})),b=a(8519),w=a(4036);function M(r){return(0,d.Z)("MuiTypography",r)}(0,g.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var j=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],N=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(r,t){var a=r.ownerState;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t["align".concat((0,w.Z)(a.align))],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((function(r){var t=r.theme,a=r.ownerState;return(0,e.Z)({margin:0},a.variant&&t.typography[a.variant],"inherit"!==a.align&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16})})),B={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},R={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},W=n.forwardRef((function(r,t){var a=(0,l.Z)({props:r,name:"MuiTypography"}),n=function(r){return R[r]||r}(a.color),o=(0,b.Z)((0,e.Z)({},a,{color:n})),u=o.align,p=void 0===u?"inherit":u,d=o.className,g=o.component,h=o.gutterBottom,v=void 0!==h&&h,f=o.noWrap,Z=void 0!==f&&f,x=o.paragraph,y=void 0!==x&&x,C=o.variant,S=void 0===C?"body1":C,W=o.variantMapping,A=void 0===W?B:W,L=(0,i.Z)(o,j),k=(0,e.Z)({},o,{align:p,color:n,className:d,component:g,gutterBottom:v,noWrap:Z,paragraph:y,variant:S,variantMapping:A}),I=g||(y?"p":A[S]||B[S])||"span",P=function(r){var t=r.align,a=r.gutterBottom,n=r.noWrap,o=r.paragraph,e=r.variant,i=r.classes,s={root:["root",e,"inherit"!==r.align&&"align".concat((0,w.Z)(t)),a&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,c.Z)(s,M,i)}(k);return(0,m.jsx)(N,(0,e.Z)({as:I,ref:t,ownerState:k,className:(0,s.Z)(P.root,d)},L))})),A=a(142);function L(r){return(0,d.Z)("MuiCardActions",r)}(0,g.Z)("MuiCardActions",["root","spacing"]);var k=["disableSpacing","className"],I=(0,u.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(r,t){var a=r.ownerState;return[t.root,!a.disableSpacing&&t.spacing]}})((function(r){var t=r.ownerState;return(0,e.Z)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),P=n.forwardRef((function(r,t){var a=(0,l.Z)({props:r,name:"MuiCardActions"}),n=a.disableSpacing,o=void 0!==n&&n,u=a.className,p=(0,i.Z)(a,k),d=(0,e.Z)({},a,{disableSpacing:o}),g=function(r){var t=r.classes,a={root:["root",!r.disableSpacing&&"spacing"]};return(0,c.Z)(a,L,t)}(d);return(0,m.jsx)(I,(0,e.Z)({className:(0,s.Z)(g.root,u),ownerState:d,ref:t},p))}));function T(r){var t=r.username,a=r.age,o=r.score,e=r.handleLogout;return(0,m.jsx)(n.Fragment,{children:(0,m.jsxs)(Z,{variant:"outlined",children:[(0,m.jsxs)(S,{children:[(0,m.jsx)(W,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"Hi ".concat(t)}),(0,m.jsx)(W,{variant:"h5",component:"div",children:"You are ".concat(a," years older")}),(0,m.jsx)(W,{sx:{mb:1.5},color:"text.secondary",children:"You have got ".concat(o," points out of 100")})]}),(0,m.jsx)(P,{children:(0,m.jsx)(A.Z,{variant:"outlined",margin:"dense",size:"small",color:"error",onClick:e,children:"Logout"})})]})})}var D=a(6575),z=a(9505);function F(){var r=(0,n.useContext)(z.Il),t=r.setIsLoading,a=r.setAuthenticated,e=r.data,i=r.setData,s=r.setIsAuthUser,c=(0,D.Z)(),u=JSON.parse(e);return(0,m.jsx)(o.Z,{sx:{display:"flex",flexWrap:"wrap",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"10%"},children:(0,m.jsx)(n.Fragment,{children:e?(0,m.jsx)(T,{username:u.username,age:u.age,score:u.score,handleLogout:function(){localStorage.clear(),a(!1),i(null),s(null),t(!1),c("Logout Successful","success")}}):""})})}},6575:function(r,t,a){a.d(t,{Z:function(){return o}});var n=a(9105);function o(){var r=(0,n.Ds)().enqueueSnackbar;return function(t,a,n){r(t,{variant:a,autoHideDuration:n})}}}}]);
//# sourceMappingURL=796.4215319a.chunk.js.map