"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6576],{82936:(me,W,s)=>{s.r(W),s.d(W,{ServiceAccountPageUnconnected:()=>Ee,default:()=>Re});var e=s(74848),c=s(96540),f=s(71468),Q=s(1933),l=s(67061),E=s(55852),u=s(29158),j=s(96374),$=s(69444),r=s(10096),D=s(31678),K=s(5108),k=s(16233);const X=t=>{const n=k.TP.hasPermissionInMetadata(D.AccessControlAction.ServiceAccountsPermissionsWrite,t.serviceAccount);return(0,e.jsx)(K.x,{title:"Permissions",addPermissionTitle:"Add permission",buttonLabel:"Add permission",resource:"serviceaccounts",resourceId:t.serviceAccount.id,canSetPermissions:n})};var Z=s(98788),x=s(32196),L=s(72724),h=s(40845),o=s(60029),a=s(72109),b=s(85927),g=s(91634),T=s(10354),y=s(82702);const S=({label:t,value:n,inputType:i,disabled:m,onChange:v})=>{const P=(0,c.useRef)(null),[d,N]=(0,c.useState)(n),[O,p]=(0,c.useState)(!1),R=(0,h.of)(I),oe=`${t}-input`;(0,c.useEffect)(()=>{O&&xe()},[O]);const ae=()=>{p(!0)},de=()=>{p(!1),N(n||"")},ie=(G,U)=>{U!==g.O.Invalid&&N(G.target.value)},ue=(G,U)=>{U!==g.O.Invalid&&N(G.target.value)},xe=()=>{P?.current?.focus()},he=()=>{p(!1),v&&v(d)};return(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:(0,e.jsx)(o.J,{htmlFor:oe,children:t})}),(0,e.jsx)("td",{className:"width-25",colSpan:2,children:!m&&O?(0,e.jsx)(T.p,{id:oe,type:i,defaultValue:n,onBlur:ue,onChange:ie,ref:P,width:30}):(0,e.jsx)("span",{className:(0,x.cx)({[R.disabled]:m}),children:n})}),(0,e.jsx)("td",{children:v&&(0,e.jsx)(y.Z,{closeOnConfirm:!0,confirmText:"Save",onConfirm:he,onClick:ae,onCancel:de,disabled:m,children:"Edit"})})]})},I=t=>({disabled:(0,x.css)`
      color: ${t.colors.text.secondary};
    `});var F=s(89062),V=s(5133);const B=({label:t,serviceAccount:n,roleOptions:i,onRoleChange:m})=>{const v=`${t}-input`,P=r.TP.hasPermissionInMetadata(D.AccessControlAction.ServiceAccountsWrite,n);return(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:(0,e.jsx)(o.J,{htmlFor:v,children:t})}),r.TP.licensedAccessControlEnabled()?(0,e.jsx)("td",{colSpan:3,children:(0,e.jsx)(F.y,{userId:n.id,orgId:n.orgId,basicRole:n.role,onBasicRoleChange:m,roleOptions:i,basicRoleDisabled:!P,disabled:n.isExternal||n.isDisabled})}):(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("td",{children:(0,e.jsx)(V.r,{width:24,inputId:v,"aria-label":"Role",value:n.role,disabled:n.isExternal||n.isDisabled,onChange:m})}),(0,e.jsx)("td",{colSpan:2})]})]})};function C({serviceAccount:t,timeZone:n,onChange:i}){const m=(0,h.of)(_),v=r.TP.hasPermission(D.AccessControlAction.ServiceAccountsWrite),[P,d]=(0,c.useState)([]),N=p=>{i({...t,role:p})},O=p=>{i({...t,name:p})};return(0,c.useEffect)(()=>{async function p(){try{if(r.TP.hasPermission(D.AccessControlAction.ActionRolesList)){let R=await(0,b.RL)(t.orgId);d(R)}}catch{console.error("Error loading options for service account")}}r.TP.licensedAccessControlEnabled()&&p()},[t.orgId]),(0,e.jsxs)("div",{className:m.section,children:[(0,e.jsx)("h3",{children:"Information"}),(0,e.jsx)("table",{className:"filter-table",children:(0,e.jsxs)("tbody",{children:[(0,e.jsx)(S,{label:"Name",value:t.name,onChange:t.isExternal?void 0:O,disabled:!v||t.isDisabled}),(0,e.jsx)(S,{label:"ID",value:t.login,disabled:t.isDisabled}),(0,e.jsx)(B,{label:"Roles",serviceAccount:t,onRoleChange:N,roleOptions:P}),(0,e.jsx)(S,{label:"Creation date",value:(0,L.LE)(t.createdAt,{timeZone:n}),disabled:t.isDisabled}),t.isExternal&&t.requiredBy&&(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:(0,e.jsx)(o.J,{children:"Used by"})}),(0,e.jsx)("td",{children:(0,e.jsx)(a.Y,{href:`/plugins/${t.requiredBy}`,children:t.requiredBy})})]})]})})]})}const _=t=>({section:(0,x.css)`
    margin-bottom: ${t.spacing(4)};
  `});var z=s(91605),w=s(56034),ee=s(14578);const te=({tokens:t,timeZone:n,tokenActionsDisabled:i,onDelete:m})=>{const v=(0,h.$j)(),P=M(v);return(0,e.jsxs)("table",{className:(0,x.cx)(P.section,"filter-table"),children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"Name"}),(0,e.jsx)("th",{children:"Expires"}),(0,e.jsx)("th",{children:"Created"}),(0,e.jsx)("th",{children:"Last used at"}),(0,e.jsx)("th",{}),(0,e.jsx)("th",{})]})}),(0,e.jsx)("tbody",{children:t.map(d=>(0,e.jsxs)("tr",{className:P.tableRow(d.hasExpired||d.isRevoked),children:[(0,e.jsx)("td",{children:d.name}),(0,e.jsx)("td",{children:(0,e.jsx)(ce,{timeZone:n,token:d})}),(0,e.jsx)("td",{children:ne(n,d.created)}),(0,e.jsx)("td",{children:H(n,d.lastUsedAt)}),(0,e.jsx)("td",{className:"width-1 text-center",children:d.isRevoked&&(0,e.jsx)(q,{})}),(0,e.jsx)("td",{children:(0,e.jsx)(z.e,{"aria-label":`Delete service account token ${d.name}`,size:"sm",onConfirm:()=>m(d),disabled:i})})]},d.id))})]})};function H(t,n){return n?(0,L.LE)(n,{timeZone:t}):"Never"}function ne(t,n){return n?(0,L.LE)(n,{timeZone:t}):"No expiration date"}function re(t){const n=Math.ceil(t/86400);return`Expires in ${n>1?`${n} days`:`${n} day`}`}const q=()=>{const t=(0,h.of)(M);return(0,e.jsxs)("span",{className:t.hasExpired,children:["Revoked",(0,e.jsx)("span",{className:t.tooltipContainer,children:(0,e.jsx)(w.m,{content:"This token has been publicly exposed. Please rotate this token",children:(0,e.jsx)(ee.I,{name:"exclamation-triangle",className:t.toolTipIcon})})})]})},ce=({timeZone:t,token:n})=>{const i=(0,h.of)(M);return n.expiration?n.secondsUntilExpiration?(0,e.jsx)("span",{className:i.secondsUntilExpiration,children:re(n.secondsUntilExpiration)}):n.hasExpired?(0,e.jsxs)("span",{className:i.hasExpired,children:["Expired",(0,e.jsx)("span",{className:i.tooltipContainer,children:(0,e.jsx)(w.m,{content:"This token has expired",children:(0,e.jsx)(ee.I,{name:"exclamation-triangle",className:i.toolTipIcon})})})]}):(0,e.jsx)("span",{children:ne(t,n.expiration)}):(0,e.jsx)("span",{className:i.neverExpire,children:"Never"})},M=t=>({tableRow:n=>(0,x.css)`
    color: ${n?t.colors.text.secondary:t.colors.text.primary};
  `,tooltipContainer:(0,x.css)`
    margin-left: ${t.spacing(1)};
  `,toolTipIcon:(0,x.css)`
    color: ${t.colors.error.text};
  `,secondsUntilExpiration:(0,x.css)`
    color: ${t.colors.warning.text};
  `,hasExpired:(0,x.css)`
    color: ${t.colors.error.text};
  `,neverExpire:(0,x.css)`
    color: ${t.colors.text.secondary};
  `,section:(0,x.css)`
    margin-bottom: ${t.spacing(4)};
  `});var fe=s(12966),J=s(17172),Ce=s(12131),Pe=s(80714),se=s(1936);const Y="/api/serviceaccounts";function ve(t){return async n=>{n((0,se.G3)());try{const i=await(0,J.AI)().get(`${Y}/${t}`,(0,Pe.F)());n((0,se.QM)(i))}catch(i){console.error(i)}finally{n((0,se.aD)())}}}function ge(t){return async n=>{await(0,J.AI)().patch(`${Y}/${t.id}?accesscontrol=true`,{...t}),n(ve(t.id))}}function Ae(t){return async()=>{await(0,J.AI)().delete(`${Y}/${t}`),Ce.Ny.push("/org/serviceaccounts")}}function ye(t,n,i){return async m=>{const v=await(0,J.AI)().post(`${Y}/${t}/tokens`,n);i(v.key),m(le(t))}}function Se(t,n){return async i=>{await(0,J.AI)().delete(`${Y}/${t}/tokens/${n}`),i(le(t))}}function le(t){return async n=>{try{const i=await(0,J.AI)().get(`${Y}/${t}/tokens`);n((0,se.ch)(i))}catch(i){console.error(i)}}}function Ie(t){return{serviceAccount:t.serviceAccountProfile.serviceAccount,tokens:t.serviceAccountProfile.tokens,isLoading:t.serviceAccountProfile.isLoading,timezone:(0,Q.O)(t.user)}}const Me={createServiceAccountToken:ye,deleteServiceAccount:Ae,deleteServiceAccountToken:Se,loadServiceAccount:ve,loadServiceAccountTokens:le,updateServiceAccount:ge},Oe=(0,f.connect)(Ie,Me),Ee=({match:t,serviceAccount:n,tokens:i,timezone:m,isLoading:v,createServiceAccountToken:P,deleteServiceAccount:d,deleteServiceAccountToken:N,loadServiceAccount:O,loadServiceAccountTokens:p,updateServiceAccount:R})=>{const[oe,ae]=(0,c.useState)(""),[de,ie]=(0,c.useState)(!1),[ue,xe]=(0,c.useState)(!1),[he,G]=(0,c.useState)(!1),U=parseInt(t.params.id,10),De=n.isDisabled||n.isExternal||!r.TP.hasPermission(D.AccessControlAction.ServiceAccountsWrite),pe=r.TP.hasPermission(D.AccessControlAction.ServiceAccountsWrite),$e=r.TP.hasPermissionInMetadata(D.AccessControlAction.ServiceAccountsPermissionsRead,n),Le={text:n.name,img:n.avatarUrl,subTitle:"Manage settings for an individual service account."};(0,c.useEffect)(()=>{O(U),p(U),r.TP.licensedAccessControlEnabled()&&(0,fe.pJ)()},[O,p,U]);const be=A=>{R(A)},je=A=>()=>{xe(A)},Te=A=>()=>{G(A)},Be=()=>{d(n.id)},Ne=()=>{R({...n,isDisabled:!0}),G(!1)},Ue=()=>{R({...n,isDisabled:!1})},We=A=>{N(n?.id,A.id)},Ke=A=>{P(n?.id,A,ae)},ke=()=>{ie(!1),ae("")};return(0,e.jsx)($.Y,{navId:"serviceaccounts",pageNav:Le,children:(0,e.jsxs)($.Y.Contents,{isLoading:v,children:[(0,e.jsxs)("div",{children:[n&&!n.isExternal&&(0,e.jsxs)(l.B,{gap:2,height:"auto",justifyContent:"flex-end",children:[(0,e.jsx)(E.$n,{type:"button",variant:"destructive",onClick:je(!0),disabled:!r.TP.hasPermission(D.AccessControlAction.ServiceAccountsDelete),children:"Delete service account"}),n.isDisabled?(0,e.jsx)(E.$n,{type:"button",variant:"secondary",onClick:Ue,disabled:!pe,children:"Enable service account"}):(0,e.jsx)(E.$n,{type:"button",variant:"secondary",onClick:Te(!0),disabled:!pe,children:"Disable service account"})]}),n&&n.isExternal&&(0,e.jsx)(l.B,{gap:2,height:"auto",justifyContent:"flex-end",children:(0,e.jsx)(u.K,{disabled:!0,name:"lock",size:"md",tooltip:"This is a managed service account and cannot be modified."})}),n&&(0,e.jsx)(C,{serviceAccount:n,timeZone:m,onChange:be}),(0,e.jsxs)(l.B,{justifyContent:"space-between",height:"auto",children:[(0,e.jsx)("h3",{children:"Tokens"}),!n.isExternal&&(0,e.jsx)(E.$n,{onClick:()=>ie(!0),disabled:De,children:"Add service account token"})]}),i&&(0,e.jsx)(te,{tokens:i,timeZone:m,onDelete:We,tokenActionsDisabled:De}),!n.isExternal&&$e&&(0,e.jsx)(X,{serviceAccount:n})]}),(0,e.jsx)(j.u,{isOpen:ue,title:"Delete service account",body:"Are you sure you want to delete this service account?",confirmText:"Delete service account",onConfirm:Be,onDismiss:je(!1)}),(0,e.jsx)(j.u,{isOpen:he,title:"Disable service account",body:"Are you sure you want to disable this service account?",confirmText:"Disable service account",onConfirm:Ne,onDismiss:Te(!1)}),(0,e.jsx)(Z.z,{isOpen:de,token:oe,serviceAccountLogin:n.login,onCreateToken:Ke,onClose:ke})]})})},Re=Oe(Ee)},98788:(me,W,s)=>{s.d(W,{z:()=>Z});var e=s(74848),c=s(32196),f=s(96540),Q=s(62938),l=s(32264),E=s(40845),u=s(37390),j=s(88575),$=s(10354),r=s(94354),D=s(98239),K=s(55852),k=s(10534);const X=[{label:"No expiration",value:!1},{label:"Set expiration date",value:!0}],Z=({isOpen:h,token:o,serviceAccountLogin:a,onCreateToken:b,onClose:g})=>{const T=new Date;T.setDate(T.getDate()+1);const y=new Date;l.$.tokenExpirationDayLimit!==void 0&&l.$.tokenExpirationDayLimit>-1?y.setDate(y.getDate()+l.$.tokenExpirationDayLimit+1):y.setDate(864e13);const S=l.$.tokenExpirationDayLimit!==void 0&&l.$.tokenExpirationDayLimit>0,[I,F]=(0,f.useState)(""),[V,B]=(0,f.useState)(""),[C,_]=(0,f.useState)(S),[z,w]=(0,f.useState)(T),[ee,te]=(0,f.useState)(z!==""),H=(0,E.of)(L);(0,f.useEffect)(()=>{h&&F(`${a}-${(0,Q.A)()}`)},[a,h]);const ne=M=>{te(M!==""),w(M)},re=()=>{b({name:V||I,secondsToLive:C?x(z):void 0})},q=()=>{B(""),F(""),_(S),w(T),te(z!==""),g()},ce=o?"Service account token created":"Add service account token";return(0,e.jsx)(u.a,{isOpen:h,title:ce,onDismiss:q,className:H.modal,children:o?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(j.D,{label:"Token",description:"Copy the token now as you will not be able to see it again. Losing a token requires creating a new one.",children:(0,e.jsxs)("div",{className:H.modalTokenRow,children:[(0,e.jsx)($.p,{name:"tokenValue",value:o,readOnly:!0}),(0,e.jsx)(k.b,{className:H.modalCopyToClipboardButton,variant:"primary",size:"md",icon:"copy",getText:()=>o,children:"Copy clipboard"})]})}),(0,e.jsxs)(u.a.ButtonRow,{children:[(0,e.jsx)(k.b,{variant:"primary",getText:()=>o,onClipboardCopy:q,children:"Copy to clipboard and close"}),(0,e.jsx)(K.$n,{variant:"secondary",onClick:q,children:"Close"})]})]}):(0,e.jsxs)("div",{children:[(0,e.jsx)(j.D,{label:"Display name",description:"Name to easily identify the token",required:!0,children:(0,e.jsx)($.p,{name:"tokenName",value:V,placeholder:I,onChange:M=>{B(M.currentTarget.value)}})}),(0,e.jsx)(j.D,{label:"Expiration",children:(0,e.jsx)(r.z,{options:X,value:C,onChange:_,size:"md"})}),C&&(0,e.jsx)(j.D,{label:"Expiration date",children:(0,e.jsx)(D.l,{onChange:ne,value:z,placeholder:"",minDate:T,maxDate:y})}),(0,e.jsx)(u.a.ButtonRow,{children:(0,e.jsx)(K.$n,{onClick:re,disabled:C&&!ee,children:"Generate token"})})]})})},x=h=>{const o=new Date(h),a=new Date;return Math.ceil((o.getTime()-a.getTime())/1e3)},L=h=>({modal:(0,c.css)({width:"550px"}),modalTokenRow:(0,c.css)({display:"flex"}),modalCopyToClipboardButton:(0,c.css)({marginLeft:h.spacing(.5)})})},12966:(me,W,s)=>{s.d(W,{W4:()=>k,iJ:()=>r,mV:()=>K,nM:()=>x,pJ:()=>$,qS:()=>L,yC:()=>X,yd:()=>h});var e=s(2543),c=s.n(e),f=s(17172),Q=s(85927),l=s(16233),E=s(31678),u=s(1936);const j="/api/serviceaccounts";function $(){return async o=>{try{if(l.TP.licensedAccessControlEnabled()&&l.TP.hasPermission(E.AccessControlAction.ActionRolesList)){const a=await(0,Q.RL)();o((0,u.ew)(a))}}catch(a){console.error(a)}}}function r({withLoadingIndicator:o}={withLoadingIndicator:!1}){return async(a,b)=>{try{if(l.TP.hasPermission(E.AccessControlAction.ServiceAccountsRead)){o&&a((0,u.FW)());const{perPage:g,page:T,query:y,serviceAccountStateFilter:S}=b().serviceAccounts,I=await(0,f.AI)().get(`/api/serviceaccounts/search?perpage=${g}&page=${T}&query=${y}${Z(S)}&accesscontrol=true`);if(l.TP.licensedAccessControlEnabled()&&l.TP.hasPermission(E.AccessControlAction.ActionUserRolesList)){a((0,u.dJ)());const F=l.TP.user.orgId,V=I?.serviceAccounts.map(C=>C.id),B=await(0,f.AI)().post("/api/access-control/users/roles/search",{userIds:V,orgId:F});I.serviceAccounts.forEach(C=>{C.roles=B?B[C.id]||[]:[]}),a((0,u.jE)())}a((0,u.zh)(I))}}catch(g){console.error(g)}finally{a((0,u.Yh)())}}}const D=(0,e.debounce)(o=>o(r()),500,{leading:!0});function K(o){return async a=>{await(0,f.AI)().patch(`${j}/${o.id}?accesscontrol=true`,{...o}),a(r())}}function k(o){return async a=>{await(0,f.AI)().delete(`${j}/${o}`),a(r())}}function X(o,a,b){return async g=>{const T=await(0,f.AI)().post(`${j}/${o}/tokens`,a);b(T.key),g(r())}}const Z=o=>{switch(o){case E.ServiceAccountStateFilter.WithExpiredTokens:return"&expiredTokens=true";case E.ServiceAccountStateFilter.Disabled:return"&disabled=true";case E.ServiceAccountStateFilter.External:return"&external=true";default:return""}};function x(o){return async a=>{a((0,u.L5)(o)),D(a)}}function L(o){return async a=>{a((0,u.c3)(o)),a(r())}}function h(o){return async a=>{a((0,u.EC)(o)),a(r())}}}}]);

//# sourceMappingURL=ServiceAccountPage.f7cc8c6b0df8a4b4e995.js.map