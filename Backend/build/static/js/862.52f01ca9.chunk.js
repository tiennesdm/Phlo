"use strict";(self.webpackChunkphlo=self.webpackChunkphlo||[]).push([[862],{2862:function(e,n,r){r.r(n),r.d(n,{default:function(){return x}});var a=r(1413),t=r(2982),o=r(5861),s=r(885),l=r(7757),u=r.n(l),i=r(2791),c=r(4554),d=r(142),v=r(9271),p=r(9505),m=r(6808),h=r(3593),f=r(6575),g=r(184);function x(){var e=(0,v.k6)(),n=(0,f.Z)(),r=(0,i.useState)(!0),l=(0,s.Z)(r,2),x=l[0],b=l[1],y=(0,i.useContext)(p.Il),Z=y.setIsLoading,k=y.setAuthenticated,S=y.setData,w=y.setIsAuthUser,j=(0,i.useState)([{id:0,label:"Username",variant:"standard",name:"username",value:"",type:"text",error:!1,errorText:"Space is not Allowed"},{id:1,label:"Password",variant:"standard",name:"password",value:"",type:"password",showPassword:!1,error:!1,errorText:"Length should max 30",max:30},{id:2,label:"Age",variant:"standard",name:"age",value:"",type:"number",max:100,errorText:"Age should not be more than 100",error:!1},{id:3,label:"Score",variant:"standard",name:"score",value:"",type:"number",max:100,errorText:"Score should not be more than 100",error:!1}]),C=(0,s.Z)(j,2),U=C[0],I=C[1],D=(0,i.useCallback)(function(){var r=(0,o.Z)(u().mark((function r(a){var t,o,s,l,i,c;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,h.Z.signUpUser(a);case 3:t=r.sent,console.log(t),(o=t.data)&&(localStorage.setItem("auth",o.token),localStorage.setItem("username",o.username),localStorage.setItem("userDetail",JSON.stringify(o)),k(!0),S(JSON.stringify(o)),Z(!1),w(o.token),n("Signup Successful","success"),e.push("/")),b(!1),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(0),b(!1),n(null!==r.t0&&void 0!==r.t0&&null!==(s=r.t0.response)&&void 0!==s&&null!==(l=s.data)&&void 0!==l&&l.message?null===r.t0||void 0===r.t0||null===(i=r.t0.response)||void 0===i||null===(c=i.data)||void 0===c?void 0:c.message:null!==r.t0&&void 0!==r.t0&&r.t0.message?r.t0.message:r.t0,"error");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(e){return r.apply(this,arguments)}}(),[n,k,S,Z,w,e]),T=function(e,n){var r,a,o,s,l=(0,t.Z)(U);"username"===(null===(r=l[n])||void 0===r?void 0:r.name)&&(console.log(l[n]),console.log(l[n].value.includes(" ")),e.includes(" ")?l[n].error=!0:l[n].error=!1),"password"===(null===(a=l[n])||void 0===a?void 0:a.name)&&(e.length>l[n].max?l[n].error=!0:l[n].error=!1),"age"===(null===(o=l[n])||void 0===o?void 0:o.name)&&(e>l[n].max?l[n].error=!0:l[n].error=!1),"score"===(null===(s=l[n])||void 0===s?void 0:s.name)&&(e>l[n].max?l[n].error=!0:l[n].error=!1),l[n].value=e,I(l)};return(0,i.useEffect)((function(){for(var e=0;e<U.length;e++)U[e].value&&!U[e].error?b(!1):b(!0)}),[U,b]),(0,g.jsxs)(c.Z,{sx:{display:"flex",flexWrap:"wrap",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"10%"},children:[(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)("span",{children:"SignUp"}),U.map((function(e){return n=e,(0,i.createElement)(m.Z,(0,a.Z)((0,a.Z)({},n),{},{key:"".concat(n.id,"-").concat(n.name),handleChange:T}));var n})),(0,g.jsx)(d.Z,{variant:"outlined",margin:"dense",size:"small",color:"error",disabled:x,onClick:function(){b(!0);for(var e={},n=0;n<U.length;n++)e[U[n].name]=U[n].value;D(e)},children:"Sign-Up"})]}),(0,g.jsx)("span",{children:"Do you have account ?"}),(0,g.jsx)(d.Z,{variant:"outlined",margin:"dense",size:"small",color:"secondary",onClick:function(){e.push("/auth/login")},children:"Login"})]})}},6808:function(e,n,r){r.d(n,{Z:function(){return s}});var a=r(6987),t=r(2791),o=r(184);function s(e){var n=e.handleChange,r=e.id,s=e.label,l=e.variant,u=e.value,i=e.type,c=e.error,d=e.errorText;return(0,o.jsxs)(t.Fragment,{children:[(0,o.jsx)(a.Z,{id:r,label:s,type:i,InputLabelProps:{shrink:!0},value:u,margin:"dense",onChange:function(e){return n(e.target.value,r)},variant:l,error:c}),c?(0,o.jsx)("p",{style:{color:"red",fontSize:"8px"},children:d}):""]})}},6575:function(e,n,r){r.d(n,{Z:function(){return t}});var a=r(9105);function t(){var e=(0,a.Ds)().enqueueSnackbar;return function(n,r,a){e(n,{variant:r,autoHideDuration:a})}}},3593:function(e,n,r){r.d(n,{Z:function(){return l}});var a=r(5671),t=r(3144),o=r(4569),s=r.n(o)().create({baseURL:"/api",headers:{"Content-type":"application/json"}}),l=new(function(){function e(){(0,a.Z)(this,e)}return(0,t.Z)(e,[{key:"loginUser",value:function(e){return s.post("/auth/login",e)}},{key:"signUpUser",value:function(e){return s.post("/auth/signup",e)}}]),e}())}}]);
//# sourceMappingURL=862.52f01ca9.chunk.js.map