(this.webpackJsonpartemis=this.webpackJsonpartemis||[]).push([[0],{250:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){},255:function(e,t,n){},256:function(e,t,n){},257:function(e,t,n){},267:function(e,t){},269:function(e,t){},279:function(e,t){},281:function(e,t){},308:function(e,t){},310:function(e,t){},311:function(e,t){},316:function(e,t){},318:function(e,t){},324:function(e,t){},326:function(e,t){},345:function(e,t){},357:function(e,t){},360:function(e,t){},385:function(e,t,n){},409:function(e,t,n){},415:function(e,t,n){},417:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(67),s=n.n(r),i=(n(250),n(19)),o=n.n(i),u=n(36),l=n(24),j=n(86),d=(n(252),n(16)),b=(n(253),n(4));function O(){return Object(b.jsx)("div",{className:"Home",children:Object(b.jsxs)("div",{className:"lander",children:[Object(b.jsx)("h1",{children:"Project Artemis"}),Object(b.jsx)("p",{className:"text-muted",children:"Project Artemis fully automated data pipeline."})]})})}n(255);function h(){return Object(b.jsx)("div",{className:"NotFound text-center",children:Object(b.jsx)("h3",{children:"Sorry, page not found!"})})}var p=n(25),x=n(142),f=n(236),m=n(225),g=n(235),v=(n(256),["isLoading","className","disabled"]);function k(e){var t=e.isLoading,n=e.className,c=void 0===n?"":n,a=e.disabled,r=void 0!==a&&a,s=Object(f.a)(e,v);return Object(b.jsxs)(m.a,Object(x.a)(Object(x.a)({disabled:r||t,className:"LoaderButton ".concat(c)},s),{},{children:[t&&Object(b.jsx)(g.a,{className:"spinning"}),s.children]}))}n(257);var y=n(138),N=Object(c.createContext)(null);function I(e){var t=e.toString();e instanceof Error||!e.message||(t=e.message),alert(t)}function w(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(d.k)(),s=Object(c.useContext)(N).userHasAuthenticated,i=Object(c.useState)(""),j=Object(l.a)(i,2),O=j[0],h=j[1],x=Object(c.useState)(""),f=Object(l.a)(x,2),m=f[0],g=f[1];function v(){return(v=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a(!0),e.prev=2,e.next=5,y.a.signIn(O,m);case 5:s(!0),r.push("/Artemis"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),I(e.t0),a(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}return Object(b.jsx)("div",{className:"Login",children:Object(b.jsxs)(p.a,{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(b.jsxs)(p.a.Group,{size:"lg",controlId:"email",children:[Object(b.jsx)(p.a.Label,{children:"Email"}),Object(b.jsx)(p.a.Control,{autoFocus:!0,type:"email",value:O,onChange:function(e){return h(e.target.value)}})]}),Object(b.jsxs)(p.a.Group,{size:"lg",controlId:"password",children:[Object(b.jsx)(p.a.Label,{children:"Password"}),Object(b.jsx)(p.a.Control,{type:"password",value:m,onChange:function(e){return g(e.target.value)}})]}),Object(b.jsx)(k,{block:!0,size:"lg",type:"submit",isLoading:n,disabled:!(O.length>0&&m.length>0),children:"Login"})]})})}n(385);var S={MAX_ATTACHMENT_SIZE:5e10,s3:{REGION:"us-west-2",BUCKET:"dev-orion-models"},apiGateway:{REGION:"us-west-2",URL:"https://hmseb5az9d.execute-api.us-west-2.amazonaws.com/06/devReturnModels"},cognito:{REGION:"us-west-2",USER_POOL_ID:"us-west-2_13Zfxy52S",APP_CLIENT_ID:"1h2d5t5seb5fail9k28jpelnhu",IDENTITY_POOL_ID:"us-west-2:49482d7c-aa5a-4137-b865-f20c648c3732"}},L=n(426);function A(e){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(Date.now(),"-").concat(t.name),e.next=3,L.a.vault.put(n,t,{contentType:t.type});case 3:return c=e.sent,e.abrupt("return",c.key);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){var e=Object(c.useRef)(null),t=Object(d.k)(),n=Object(c.useState)(""),r=Object(l.a)(n,2),s=(r[0],r[1],Object(c.useState)(!1)),i=Object(l.a)(s,2),j=i[0],O=i[1],h=a.a.useState(!0),x=Object(l.a)(h,2),f=x[0],m=x[1],g=Object(c.useState)([{key:"No Models Found"}]),v=Object(l.a)(g,2),y=v[0],N=v[1];function w(){return(w=Object(u.a)(o.a.mark((function n(c){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c.preventDefault(),!(e.current&&e.current.size>S.MAX_ATTACHMENT_SIZE)){n.next=4;break}return alert("Please pick a file smaller than ".concat(S.MAX_ATTACHMENT_SIZE/1e6," MB.")),n.abrupt("return");case 4:if(O(!0),n.prev=5,!e.current){n.next=12;break}return n.next=9,A(e.current);case 9:n.t0=n.sent,n.next=13;break;case 12:n.t0=null;case 13:n.t0,t.push("/success"),n.next=21;break;case 17:n.prev=17,n.t1=n.catch(5),I(n.t1),O(!1);case 21:case"end":return n.stop()}}),n,null,[[5,17]])})))).apply(this,arguments)}Object(c.useEffect)((function(){L.a.list("").then((function(e){return N(e)}))}),[]),console.log(y);var E=y.map((function(e){return 0==e.key.length?null:e.key.length>1?Object(b.jsx)("li",{children:e.key},e.key):void 0}));return Object(b.jsxs)("div",{className:"Models",children:[Object(b.jsxs)("div",{className:"lander",children:[Object(b.jsx)("h1",{children:"Project Artemis Models"}),Object(b.jsx)("p",{className:"text-muted",children:"Below is an up to date list of models that exist."}),Object(b.jsx)("div",{className:"list",children:Object(b.jsx)("ol",{children:E})})]}),Object(b.jsxs)("div",{className:"lander",children:[Object(b.jsx)("h4",{children:"If you would like to create a new model upload data here "}),Object(b.jsx)("p",{className:"text-muted",children:"Select your training data to upload."}),Object(b.jsxs)(p.a,{onSubmit:function(e){return w.apply(this,arguments)},children:[Object(b.jsx)(p.a.Group,{controlId:"file",children:Object(b.jsx)(p.a.Control,{onChange:function(t){e.current=t.target.files[0],m(!f)},type:"file"})}),Object(b.jsx)(k,{block:!0,type:"submit",size:"lg",variant:"primary",isLoading:j,disabled:f,children:"Submit File to generate a new Model for a New Project"})]})]})]})}n(409),n(427);function T(){var e=Object(c.useRef)(null),t=Object(d.k)(),n=Object(c.useState)(""),r=Object(l.a)(n,2),s=(r[0],r[1],Object(c.useState)(!1)),i=Object(l.a)(s,2),j=i[0],O=i[1],h=a.a.useState(!0),x=Object(l.a)(h,2),f=x[0],m=x[1];function g(){return(g=Object(u.a)(o.a.mark((function n(c){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c.preventDefault(),!(e.current&&e.current.size>S.MAX_ATTACHMENT_SIZE)){n.next=4;break}return alert("Please pick a file smaller than ".concat(S.MAX_ATTACHMENT_SIZE/1e6," MB.")),n.abrupt("return");case 4:if(O(!0),n.prev=5,!e.current){n.next=12;break}return n.next=9,A(e.current);case 9:n.t0=n.sent,n.next=13;break;case 12:n.t0=null;case 13:n.t0,t.push("/success"),n.next=21;break;case 17:n.prev=17,n.t1=n.catch(5),I(n.t1),O(!1);case 21:case"end":return n.stop()}}),n,null,[[5,17]])})))).apply(this,arguments)}return Object(b.jsx)("div",{className:"NewNote",children:Object(b.jsxs)(p.a,{onSubmit:function(e){return g.apply(this,arguments)},children:[Object(b.jsx)(p.a.Group,{controlId:"file",children:Object(b.jsx)(p.a.Control,{onChange:function(t){e.current=t.target.files[0],m(!f)},type:"file"})}),Object(b.jsx)(k,{block:!0,type:"submit",size:"lg",variant:"primary",isLoading:j,disabled:f,children:"Submit File to S3 for Processing"})]})})}n(415);function P(){return Object(b.jsx)("div",{className:"Success",children:Object(b.jsx)("div",{className:"lander",children:Object(b.jsx)("p",{className:"text-muted",children:"Your file was uploaded successfully."})})})}function _(){return Object(b.jsxs)(d.g,{children:[Object(b.jsx)(d.d,{exact:!0,path:"/upload",children:Object(b.jsx)(T,{})}),Object(b.jsx)(d.d,{exact:!0,path:"/Artemis",children:Object(b.jsx)(O,{})}),Object(b.jsx)(d.d,{exact:!0,path:"/models",children:Object(b.jsx)(C,{})}),Object(b.jsx)(d.d,{exact:!0,path:"/home",children:Object(b.jsx)(O,{})}),Object(b.jsx)(d.d,{exact:!0,path:"/login",children:Object(b.jsx)(w,{})}),Object(b.jsx)(d.d,{exact:!0,path:"/success",children:Object(b.jsx)(P,{})}),Object(b.jsx)(d.d,{children:Object(b.jsx)(h,{})})]})}var M=n(57),D=n(75);var R=function(){var e=Object(d.k)(),t=Object(c.useState)(!0),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!1),i=Object(l.a)(s,2),O=i[0],h=i[1];function p(){return(p=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.currentSession();case 3:h(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),"No current user"!==e.t0&&I(e.t0);case 9:r(!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function x(){return(x=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.signOut();case 2:h(!1),e.push("/login");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[]),!a&&Object(b.jsxs)("div",{className:"App container py-3",children:[Object(b.jsxs)(j.a,{collapseOnSelect:!0,bg:"light",expand:"md",className:"mb-3",children:[Object(b.jsx)(D.LinkContainer,{to:"/Artemis",children:Object(b.jsx)(j.a.Brand,{className:"font-weight-bold text-muted",children:"Project Artemis"})}),Object(b.jsx)(j.a.Toggle,{}),Object(b.jsx)(j.a.Collapse,{className:"justify-content-end",children:Object(b.jsx)(M.a,{activeKey:window.location.pathname,children:O?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(M.a.Link,{onClick:function(){return x.apply(this,arguments)},children:"Logout"}),Object(b.jsx)(D.LinkContainer,{to:"/models",children:Object(b.jsx)(M.a.Link,{children:"Models"})}),Object(b.jsx)(D.LinkContainer,{to:"/upload",children:Object(b.jsx)(M.a.Link,{children:"Upload File"})})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(D.LinkContainer,{to:"/home",children:Object(b.jsx)(M.a.Link,{children:"Home"})}),Object(b.jsx)(D.LinkContainer,{to:"/login",children:Object(b.jsx)(M.a.Link,{children:"Login"})})]})})})]}),Object(b.jsx)(N.Provider,{value:{isAuthenticated:O,userHasAuthenticated:h},children:Object(b.jsx)(_,{})})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,428)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},F=n(44);n(39).a.configure({Auth:{mandatorySignIn:!0,region:S.cognito.REGION,userPoolId:S.cognito.USER_POOL_ID,identityPoolId:S.cognito.IDENTITY_POOL_ID,userPoolWebClientId:S.cognito.APP_CLIENT_ID},Storage:{region:S.s3.REGION,bucket:S.s3.BUCKET,identityPoolId:S.cognito.IDENTITY_POOL_ID},API:{endpoints:[{name:"dev-Orion-REST-Api",endpoint:S.apiGateway.URL,region:S.apiGateway.REGION}]}}),s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(F.BrowserRouter,{children:Object(b.jsx)(R,{})})}),document.getElementById("root")),G()}},[[417,1,2]]]);
//# sourceMappingURL=main.ad2080ce.chunk.js.map