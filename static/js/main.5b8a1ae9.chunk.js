(this.webpackJsonpartemis=this.webpackJsonpartemis||[]).push([[0],{264:function(e,t,n){},266:function(e,t,n){},267:function(e,t,n){},269:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){},281:function(e,t){},283:function(e,t){},293:function(e,t){},295:function(e,t){},322:function(e,t){},324:function(e,t){},325:function(e,t){},330:function(e,t){},332:function(e,t){},338:function(e,t){},340:function(e,t){},359:function(e,t){},371:function(e,t){},374:function(e,t){},399:function(e,t,n){},423:function(e,t,n){},429:function(e,t,n){},431:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(35),s=n.n(r),i=(n(264),n(18)),o=n.n(i),l=n(36),u=n(25),j=n(96),d=(n(266),n(19)),b=(n(267),n(5));function h(){return Object(b.jsx)("div",{className:"Home",children:Object(b.jsxs)("div",{className:"lander",children:[Object(b.jsx)("h1",{children:"Project Artemis"}),Object(b.jsx)("p",{className:"text-muted",children:"Project Artemis fully automated data pipeline."})]})})}n(269);function O(){return Object(b.jsx)("div",{className:"NotFound text-center",children:Object(b.jsx)("h3",{children:"Sorry, page not found!"})})}var p=n(27),x=n(153),f=n(246),m=n(236),g=n(245),v=(n(270),["isLoading","className","disabled"]);function y(e){var t=e.isLoading,n=e.className,c=void 0===n?"":n,a=e.disabled,r=void 0!==a&&a,s=Object(f.a)(e,v);return Object(b.jsxs)(m.a,Object(x.a)(Object(x.a)({disabled:r||t,className:"LoaderButton ".concat(c)},s),{},{children:[t&&Object(b.jsx)(g.a,{className:"spinning"}),s.children]}))}n(271);var k=n(149),N=Object(c.createContext)(null);function w(e){var t=e.toString();e instanceof Error||!e.message||(t=e.message),alert(t)}function I(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(d.k)(),s=Object(c.useContext)(N).userHasAuthenticated,i=Object(c.useState)(""),j=Object(u.a)(i,2),h=j[0],O=j[1],x=Object(c.useState)(""),f=Object(u.a)(x,2),m=f[0],g=f[1];function v(){return(v=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a(!0),e.prev=2,e.next=5,k.a.signIn(h,m);case 5:s(!0),r.push("/Artemis"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),w(e.t0),a(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}return Object(b.jsx)("div",{className:"Login",children:Object(b.jsxs)(p.a,{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(b.jsxs)(p.a.Group,{size:"lg",controlId:"email",children:[Object(b.jsx)(p.a.Label,{children:"Email"}),Object(b.jsx)(p.a.Control,{autoFocus:!0,type:"email",value:h,onChange:function(e){return O(e.target.value)}})]}),Object(b.jsxs)(p.a.Group,{size:"lg",controlId:"password",children:[Object(b.jsx)(p.a.Label,{children:"Password"}),Object(b.jsx)(p.a.Control,{type:"password",value:m,onChange:function(e){return g(e.target.value)}})]}),Object(b.jsx)(y,{block:!0,size:"lg",type:"submit",isLoading:n,disabled:!(h.length>0&&m.length>0),children:"Login"})]})})}n(399);var S={MAX_ATTACHMENT_SIZE:5e10,s3:{REGION:"us-west-2",BUCKET:"dev-orion-models"},apiGateway:{REGION:"us-west-2",URL:"https://hmseb5az9d.execute-api.us-west-2.amazonaws.com/06/devReturnModels"},cognito:{REGION:"us-west-2",USER_POOL_ID:"us-west-2_13Zfxy52S",APP_CLIENT_ID:"1h2d5t5seb5fail9k28jpelnhu",IDENTITY_POOL_ID:"us-west-2:49482d7c-aa5a-4137-b865-f20c648c3732"}},A=n(454);function E(e){return L.apply(this,arguments)}function L(){return(L=Object(l.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="existing-project/".concat(t.name),e.next=3,A.a.vault.put(n,t,{contentType:t.type});case 3:return c=e.sent,e.abrupt("return",c.key);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return T.apply(this,arguments)}function T(){return(T=Object(l.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="training-data/".concat(t.name),e.next=3,A.a.vault.put(n,t,{contentType:t.type});case 3:return c=e.sent,e.abrupt("return",c.key);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=n(453),_=n(456);function M(){var e=Object(c.useRef)(null),t=Object(d.k)(),n=Object(c.useState)(""),r=Object(u.a)(n,2),s=(r[0],r[1],Object(c.useState)(!1)),i=Object(u.a)(s,2),j=i[0],h=i[1],O=a.a.useState(!0),x=Object(u.a)(O,2),f=x[0],m=x[1],g=Object(c.useState)([{key:""}]),v=Object(u.a)(g,2),k=v[0],N=v[1];function I(){return(I=Object(l.a)(o.a.mark((function n(c){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c.preventDefault(),!(e.current&&e.current.size>S.MAX_ATTACHMENT_SIZE)){n.next=4;break}return alert("Please pick a file smaller than ".concat(S.MAX_ATTACHMENT_SIZE/1e6," MB.")),n.abrupt("return");case 4:if(h(!0),n.prev=5,!e.current){n.next=12;break}return n.next=9,C(e.current);case 9:n.t0=n.sent,n.next=13;break;case 12:n.t0=null;case 13:n.t0,t.push("/success"),n.next=21;break;case 17:n.prev=17,n.t1=n.catch(5),w(n.t1),h(!1);case 21:case"end":return n.stop()}}),n,null,[[5,17]])})))).apply(this,arguments)}Object(c.useEffect)((function(){A.a.list("").then((function(e){return N(e)}))}),[]),console.log(k);var E=k.map((function(e){return 0==e.key.length?null:e.key.length>1?(e.key=e.key.replace("_Cubist Model.rds",""),Object(b.jsx)(_.a,{children:e.key},e.key)):void 0}));return Object(b.jsxs)("div",{className:"Models",children:[Object(b.jsxs)("div",{className:"lander",children:[Object(b.jsx)("h1",{children:"Project Artemis Models"}),Object(b.jsx)("p",{className:"text-muted",children:"Below is an up to date list of models that exist in the system."}),Object(b.jsx)("div",{className:"list",children:Object(b.jsx)(P.a,{style:{maxHeight:200,overflow:"auto"},children:E})})]}),Object(b.jsxs)("div",{className:"lander",children:[Object(b.jsx)("h4",{children:"If you would like to create a new model upload data here "}),Object(b.jsx)("p",{className:"text-muted",children:"Select your training data to upload."}),Object(b.jsxs)(p.a,{onSubmit:function(e){return I.apply(this,arguments)},children:[Object(b.jsx)(p.a.Group,{controlId:"file",children:Object(b.jsx)(p.a.Control,{onChange:function(t){e.current=t.target.files[0],console.log(e.current),void 0!=e.current?(console.log(e.current.name.length>1),m(!1)):m(!0)},type:"file"})}),Object(b.jsx)(y,{block:!0,type:"submit",size:"lg",variant:"primary",isLoading:j,disabled:f,children:"Submit Training Data to Generate A New Model for A New Project"})]})]})]})}n(423),n(455);function D(){var e=Object(c.useRef)(null),t=Object(d.k)(),n=Object(c.useState)(""),r=Object(u.a)(n,2),s=(r[0],r[1],Object(c.useState)(!1)),i=Object(u.a)(s,2),j=i[0],h=i[1],O=a.a.useState(!0),x=Object(u.a)(O,2),f=x[0],m=x[1],g=Object(c.useState)([{key:""}]),v=Object(u.a)(g,2),k=v[0],N=v[1];function I(){return(I=Object(l.a)(o.a.mark((function n(c){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c.preventDefault(),!(e.current&&e.current.size>S.MAX_ATTACHMENT_SIZE)){n.next=4;break}return alert("Please pick a file smaller than ".concat(S.MAX_ATTACHMENT_SIZE/1e6," MB.")),n.abrupt("return");case 4:if(h(!0),n.prev=5,!e.current){n.next=12;break}return n.next=9,E(e.current);case 9:n.t0=n.sent,n.next=13;break;case 12:n.t0=null;case 13:n.t0,t.push("/success"),n.next=21;break;case 17:n.prev=17,n.t1=n.catch(5),w(n.t1),h(!1);case 21:case"end":return n.stop()}}),n,null,[[5,17]])})))).apply(this,arguments)}Object(c.useEffect)((function(){A.a.list("existing-project/",{level:"private"}).then((function(e){return N(e)}))}),[]),console.log(k);var L=k.map((function(e){return 0==e.key.length?null:e.key.length>1?(e.key=e.key.replace("existing-project/",""),Object(b.jsx)(_.a,{children:e.key},e.key)):void 0}));return Object(b.jsxs)("div",{className:"NewNote",children:[Object(b.jsxs)("div",{className:"lander",children:[Object(b.jsx)("h1",{children:"Previous Project Data Uploads"}),Object(b.jsx)("p",{className:"text-muted",children:"Below is a list of all files uploaded by the current user."})]}),Object(b.jsx)("div",{className:"list",children:Object(b.jsx)(P.a,{style:{maxHeight:200,overflow:"auto"},children:L})}),Object(b.jsxs)(p.a,{onSubmit:function(e){return I.apply(this,arguments)},children:[Object(b.jsx)(p.a.Group,{controlId:"file",children:Object(b.jsx)(p.a.Control,{onChange:function(t){e.current=t.target.files[0],console.log(e.current),void 0!=e.current?(console.log(e.current.name.length>1),m(!1)):m(!0)},type:"file"})}),Object(b.jsx)(y,{block:!0,type:"submit",size:"lg",variant:"primary",isLoading:j,disabled:f,children:"Submit File to S3 for Processing"})]})]})}n(429);function R(){return Object(b.jsx)("div",{className:"Success",children:Object(b.jsx)("div",{className:"lander",children:Object(b.jsx)("p",{className:"text-muted",children:"Your file was uploaded successfully."})})})}function G(){return Object(b.jsxs)(d.g,{children:[Object(b.jsx)(d.d,{exact:!0,path:"/upload",children:Object(b.jsx)(D,{})}),Object(b.jsx)(d.d,{exact:!0,path:"/Artemis",children:Object(b.jsx)(h,{})}),Object(b.jsx)(d.d,{exact:!0,path:"/models",children:Object(b.jsx)(M,{})}),Object(b.jsx)(d.d,{exact:!0,path:"/home",children:Object(b.jsx)(h,{})}),Object(b.jsx)(d.d,{exact:!0,path:"/login",children:Object(b.jsx)(I,{})}),Object(b.jsx)(d.d,{exact:!0,path:"/success",children:Object(b.jsx)(R,{})}),Object(b.jsx)(d.d,{children:Object(b.jsx)(O,{})})]})}var B=n(64),H=n(83);var F=function(){var e=Object(d.k)(),t=Object(c.useState)(!0),n=Object(u.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!1),i=Object(u.a)(s,2),h=i[0],O=i[1];function p(){return(p=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.currentSession();case 3:O(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),"No current user"!==e.t0&&w(e.t0);case 9:r(!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function x(){return(x=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.signOut();case 2:O(!1),e.push("/login");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[]),!a&&Object(b.jsxs)("div",{className:"App container py-3",children:[Object(b.jsxs)(j.a,{collapseOnSelect:!0,bg:"light",expand:"md",className:"mb-3",children:[Object(b.jsx)(H.LinkContainer,{to:"/Artemis",children:Object(b.jsx)(j.a.Brand,{className:"font-weight-bold text-muted",children:"Project Artemis"})}),Object(b.jsx)(j.a.Toggle,{}),Object(b.jsx)(j.a.Collapse,{className:"justify-content-end",children:Object(b.jsx)(B.a,{activeKey:window.location.pathname,children:h?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(B.a.Link,{onClick:function(){return x.apply(this,arguments)},children:"Logout"}),Object(b.jsx)(H.LinkContainer,{to:"/models",children:Object(b.jsx)(B.a.Link,{children:"Create New Model"})}),Object(b.jsx)(H.LinkContainer,{to:"/upload",children:Object(b.jsx)(B.a.Link,{children:"Upload File for Existing Model"})})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(H.LinkContainer,{to:"/Artemis",children:Object(b.jsx)(B.a.Link,{children:"Home"})}),Object(b.jsx)(H.LinkContainer,{to:"/login",children:Object(b.jsx)(B.a.Link,{children:"Login"})})]})})})]}),Object(b.jsx)(N.Provider,{value:{isAuthenticated:h,userHasAuthenticated:O},children:Object(b.jsx)(G,{})})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,457)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},U=n(48);n(43).a.configure({Auth:{mandatorySignIn:!0,region:S.cognito.REGION,userPoolId:S.cognito.USER_POOL_ID,identityPoolId:S.cognito.IDENTITY_POOL_ID,userPoolWebClientId:S.cognito.APP_CLIENT_ID},Storage:{region:S.s3.REGION,bucket:S.s3.BUCKET,identityPoolId:S.cognito.IDENTITY_POOL_ID},API:{endpoints:[{name:"dev-Orion-REST-Api",endpoint:S.apiGateway.URL,region:S.apiGateway.REGION}]}}),s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(U.BrowserRouter,{children:Object(b.jsx)(F,{})})}),document.getElementById("root")),z()}},[[431,1,2]]]);
//# sourceMappingURL=main.5b8a1ae9.chunk.js.map