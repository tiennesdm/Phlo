"use strict";(self.webpackChunkphlo=self.webpackChunkphlo||[]).push([[767],{7767:function(e,n,r){r.r(n),r.d(n,{default:function(){return x}});var t=r(1413),a=r(5861),o=r(2982),s=r(885),l=r(7757),u=r.n(l),i=r(2791),c=r(4554),d=r(142),v=r(9271),p=r(3593),f=r(6575),h=r(9505),g=r(6808),m=r(184);function x(){var e=(0,v.k6)(),n=(0,i.useContext)(h.Il),r=n.setIsLoading,l=n.setAuthenticated,x=n.setData,Z=n.setIsAuthUser,k=(0,f.Z)(),y=(0,i.useState)(!0),w=(0,s.Z)(y,2),b=w[0],S=w[1],j=(0,i.useState)([{id:0,label:"Username",variant:"standard",name:"username",value:"",type:"text",error:!1,errorText:"Space is not Allowed"},{id:1,label:"Password",variant:"standard",name:"password",value:"",type:"password",showPassword:!1,error:!1,errorText:"Length should max 30",max:30}]),C=(0,s.Z)(j,2),I=C[0],U=C[1],L=function(e,n){var r,t,a=(0,o.Z)(I);"username"===(null===(r=a[n])||void 0===r?void 0:r.name)&&(console.log(a[n]),console.log(a[n].value.includes(" ")),e.includes(" ")?a[n].error=!0:a[n].error=!1),"password"===(null===(t=a[n])||void 0===t?void 0:t.name)&&(e.length>a[n].max?a[n].error=!0:a[n].error=!1),a[n].value=e,U(a)},D=(0,i.useCallback)(function(){var n=(0,a.Z)(u().mark((function n(t){var a,o,s,i,c,d;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.Z.loginUser(t);case 3:a=n.sent,console.log(a),console.log(a.data),(o=a.data)&&(localStorage.setItem("auth",o.token),localStorage.setItem("username",o.username),localStorage.setItem("userDetail",JSON.stringify(o)),l(!0),x(JSON.stringify(o)),r(!1),Z(o.token),k("Login Successful","success"),e.push("/")),S(!1),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),S(!1),k(null!==n.t0&&void 0!==n.t0&&null!==(s=n.t0.response)&&void 0!==s&&null!==(i=s.data)&&void 0!==i&&i.message?null===n.t0||void 0===n.t0||null===(c=n.t0.response)||void 0===c||null===(d=c.data)||void 0===d?void 0:d.message:null!==n.t0&&void 0!==n.t0&&n.t0.message?n.t0.message:n.t0,"error");case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}(),[k,l,x,r,Z,e]);return(0,i.useEffect)((function(){for(var e=0;e<I.length;e++)I[e].value&&!I[e].error?S(!1):S(!0)}),[I,S]),(0,m.jsxs)(c.Z,{sx:{display:"flex",flexWrap:"wrap",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"10%"},children:[(0,m.jsxs)(i.Fragment,{children:[(0,m.jsx)("span",{children:"Login"}),I.map((function(e){return n=e,(0,i.createElement)(g.Z,(0,t.Z)((0,t.Z)({},n),{},{key:"".concat(n.id,"-").concat(n.name),handleChange:L}));var n})),(0,m.jsx)(d.Z,{variant:"outlined",margin:"dense",size:"small",color:"error",disabled:b,onClick:function(){S(!0);for(var e={},n=0;n<I.length;n++)e[I[n].name]=I[n].value;D(e)},children:"Login"})]}),(0,m.jsx)("span",{children:"Do you have account ?"}),(0,m.jsx)(d.Z,{variant:"outlined",margin:"dense",size:"small",color:"secondary",onClick:function(){e.push("/auth/signup")},children:"Sign-Up"})]})}},6808:function(e,n,r){r.d(n,{Z:function(){return s}});var t=r(6987),a=r(2791),o=r(184);function s(e){var n=e.handleChange,r=e.id,s=e.label,l=e.variant,u=e.value,i=e.type,c=e.error,d=e.errorText;return(0,o.jsxs)(a.Fragment,{children:[(0,o.jsx)(t.Z,{id:r,label:s,type:i,InputLabelProps:{shrink:!0},value:u,margin:"dense",onChange:function(e){return n(e.target.value,r)},variant:l,error:c}),c?(0,o.jsx)("p",{style:{color:"red",fontSize:"8px"},children:d}):""]})}},6575:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(9105);function a(){var e=(0,t.Ds)().enqueueSnackbar;return function(n,r,t){e(n,{variant:r,autoHideDuration:t})}}},3593:function(e,n,r){r.d(n,{Z:function(){return l}});var t=r(5671),a=r(3144),o=r(4569),s=r.n(o)().create({baseURL:"http://localhost:3000/api",headers:{"Content-type":"application/json"}}),l=new(function(){function e(){(0,t.Z)(this,e)}return(0,a.Z)(e,[{key:"loginUser",value:function(e){return s.post("/auth/login",e)}},{key:"signUpUser",value:function(e){return s.post("/auth/signup",e)}}]),e}())}}]);
//# sourceMappingURL=767.95033806.chunk.js.map