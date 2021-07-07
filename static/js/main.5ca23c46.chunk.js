(this.webpackJsonpartemis=this.webpackJsonpartemis||[]).push([[0],{186:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){},190:function(e,t,n){},192:function(e,t,n){},198:function(e,t){},200:function(e,t){},210:function(e,t){},212:function(e,t){},239:function(e,t){},241:function(e,t){},242:function(e,t){},247:function(e,t){},249:function(e,t){},255:function(e,t){},257:function(e,t){},276:function(e,t){},288:function(e,t){},291:function(e,t){},318:function(e,t,n){},322:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),i=n(43),a=n.n(i),o=(n(186),n(59)),r=n(61),j=(n(187),n(10)),l=(n(188),n(3));function d(){return Object(l.jsx)("div",{className:"Home",children:Object(l.jsxs)("div",{className:"lander",children:[Object(l.jsx)("h1",{children:"Project Artemis"}),Object(l.jsx)("p",{className:"text-muted",children:"Project Artemis fully automated data pipeline."})]})})}n(190);function u(){return Object(l.jsx)("div",{className:"NotFound text-center",children:Object(l.jsx)("h3",{children:"Sorry, page not found!"})})}var b=n(44),h=n.n(b),O=n(170),x=n(32),m=n(178),f=(n(192),n(329)),p=Object(c.createContext)(null);function g(){var e=Object(c.useContext)(p).userHasAuthenticated,t=Object(c.useState)(""),n=Object(o.a)(t,2),s=n[0],i=n[1],a=Object(c.useState)(""),r=Object(o.a)(a,2),j=r[0],d=r[1];function u(){return(u=Object(O.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,f.a.signIn(s,j);case 4:e(!0),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),alert(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}return Object(l.jsx)("div",{className:"Login",children:Object(l.jsxs)(x.a,{onSubmit:function(e){return u.apply(this,arguments)},children:[Object(l.jsxs)(x.a.Group,{size:"lg",controlId:"email",children:[Object(l.jsx)(x.a.Label,{children:"Email"}),Object(l.jsx)(x.a.Control,{autoFocus:!0,type:"email",value:s,onChange:function(e){return i(e.target.value)}})]}),Object(l.jsxs)(x.a.Group,{size:"lg",controlId:"password",children:[Object(l.jsx)(x.a.Label,{children:"Password"}),Object(l.jsx)(x.a.Control,{type:"password",value:j,onChange:function(e){return d(e.target.value)}})]}),Object(l.jsx)(m.a,{block:!0,size:"lg",type:"submit",disabled:!(s.length>0&&j.length>0),children:"Login"})]})})}n(318);function v(){return Object(l.jsx)("div",{className:"Models",children:Object(l.jsxs)("div",{className:"lander",children:[Object(l.jsx)("h1",{children:"Project Artemis Models"}),Object(l.jsx)("p",{className:"text-muted",children:"Below is an up to date list of models that exist."})]})})}function L(){return Object(l.jsxs)(j.g,{children:[Object(l.jsx)(j.d,{exact:!0,path:"/",children:Object(l.jsx)(d,{})}),Object(l.jsx)(j.d,{exact:!0,path:"/models",children:Object(l.jsx)(v,{})}),Object(l.jsx)(j.d,{exact:!0,path:"/home",children:Object(l.jsx)(d,{})}),Object(l.jsx)(j.d,{exact:!0,path:"/login",children:Object(l.jsx)(g,{})}),Object(l.jsx)(j.d,{children:Object(l.jsx)(u,{})})]})}var N=n(49),C=n(60);var I=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(l.jsxs)("div",{className:"App container py-3",children:[Object(l.jsxs)(r.a,{collapseOnSelect:!0,bg:"light",expand:"md",className:"mb-3",children:[Object(l.jsx)(C.LinkContainer,{to:"/",children:Object(l.jsx)(r.a.Brand,{className:"font-weight-bold text-muted",children:"Project Artemis"})}),Object(l.jsx)(r.a.Toggle,{}),Object(l.jsx)(r.a.Collapse,{className:"justify-content-end",children:Object(l.jsx)(N.a,{activeKey:window.location.pathname,children:n?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(N.a.Link,{onClick:function(){s(!1)},children:"Logout"}),Object(l.jsx)(C.LinkContainer,{to:"/models",children:Object(l.jsx)(N.a.Link,{children:"Models"})})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(C.LinkContainer,{to:"/home",children:Object(l.jsx)(N.a.Link,{children:"Home"})}),Object(l.jsx)(C.LinkContainer,{to:"/login",children:Object(l.jsx)(N.a.Link,{children:"Login"})})]})})})]}),Object(l.jsx)(p.Provider,{value:{isAuthenticated:n,userHasAuthenticated:s},children:Object(l.jsx)(L,{})})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,330)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))},P=n(56),_={s3:{REGION:"YOUR_S3_UPLOADS_BUCKET_REGION",BUCKET:"YOUR_S3_UPLOADS_BUCKET_NAME"},apiGateway:{REGION:"us-west-2",URL:"Yhttps://hmseb5az9d.execute-api.us-west-2.amazonaws.com/06/devReturnModels"},cognito:{REGION:"us-west-2",USER_POOL_ID:"us-west-2_13Zfxy52S",APP_CLIENT_ID:"1h2d5t5seb5fail9k28jpelnhu"}};n(101).a.configure({Auth:{mandatorySignIn:!0,region:_.cognito.REGION,userPoolId:_.cognito.USER_POOL_ID,userPoolWebClientId:_.cognito.APP_CLIENT_ID},API:{endpoints:[{name:"notes",endpoint:_.apiGateway.URL,region:_.apiGateway.REGION}]}}),a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(P.BrowserRouter,{children:Object(l.jsx)(I,{})})}),document.getElementById("root")),w()}},[[322,1,2]]]);
//# sourceMappingURL=main.5ca23c46.chunk.js.map