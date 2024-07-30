"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6777],{23645:(re,F,t)=>{t.r(F),t.d(F,{ServiceAccountsListPageUnconnected:()=>ee,default:()=>oe});var e=t(74848),N=t(55127),v=t.n(N),C=t(96540),h=t(71468),A=t(55852),i=t(14186),S=t(67647),z=t(90613),P=t(94354),V=t(69529),U=t(96374),W=t(69444),Q=t(2913),l=t(10096),O=t(8484),c=t(31678),m=t(70255),n=t(67061),a=t(48840),$=t(19384),I=t(12942),f=t(72109),R=t(14578),k=t(29158),B=t(89062),Y=t(5133);const K=({services:s,onRoleChange:o,roleOptions:p,onRemoveButtonClick:x,onDisable:r,onEnable:D,onAddTokenClick:L,showPaging:b,totalPages:ne,onChangePage:X,currentPage:ae,isLoading:M})=>{const Z=(0,C.useMemo)(()=>[{id:"avatarUrl",header:"",cell:({cell:{value:d},row:{original:y}})=>j(d,y,M,"avatarUrl")},{id:"name",header:"Account",cell:({cell:{value:d},row:{original:y}})=>j(d,y,M),sortType:"string"},{id:"id",header:"ID",cell:({cell:{value:d},row:{original:y}})=>j(d,y,M,"id")},{id:"role",header:"Roles",cell:({cell:{value:d},row:{original:y}})=>T(d,y,M,p,o)},{id:"tokens",header:"Tokens",cell:({cell:{value:d},row:{original:y}})=>j(d,y,M,"tokens")},{id:"actions",header:"",cell:({row:{original:d}})=>H(d,M,L,D,r,x)}],[M,L,r,D,x,o,p]);return(0,e.jsxs)(n.B,{direction:"column",gap:2,children:[(0,e.jsx)(a.j,{columns:Z,data:s,getRowId:d=>String(d.id)}),b&&ne>1&&(0,e.jsx)(n.B,{justifyContent:"flex-end",children:(0,e.jsx)($.d,{numberOfPages:ne,currentPage:ae,onNavigate:X})})]})},j=(s,o,p,x)=>{if(p)return x==="avatarUrl"?(0,e.jsx)(m.A,{circle:!0,width:24,height:24}):(0,e.jsx)(m.A,{width:100});const r=`/org/serviceaccounts/${o.id}`,D=`Edit service account's ${name} details`;switch(x){case"avatarUrl":return(0,e.jsx)("a",{"aria-label":D,href:r,children:(0,e.jsx)(I.e,{src:s,alt:"User avatar"})});case"id":return(0,e.jsx)(f.Y,{href:r,"aria-label":D,color:"secondary",inline:!1,children:o.login});case"tokens":return(0,e.jsxs)(n.B,{alignItems:"center",children:[(0,e.jsx)(R.I,{name:"key-skeleton-alt"}),(0,e.jsx)(f.Y,{href:r,"aria-label":D,color:"primary",inline:!1,children:s||"No tokens"})]});default:return(0,e.jsx)(f.Y,{href:r,"aria-label":D,color:"primary",inline:!1,children:s})}},T=(s,o,p,x,r)=>{const D=l.TP.hasPermission(c.AccessControlAction.ActionRolesList)&&l.TP.hasPermission(c.AccessControlAction.ActionUserRolesList),L=l.TP.hasPermissionInMetadata(c.AccessControlAction.ServiceAccountsWrite,o);return p?(0,e.jsx)(m.A,{width:100}):l.TP.licensedAccessControlEnabled()?D&&(0,e.jsx)(B.y,{userId:o.id,orgId:o.orgId,basicRole:s,roles:o.roles||[],onBasicRoleChange:b=>r(b,o),roleOptions:x,basicRoleDisabled:!L,disabled:o.isExternal||o.isDisabled,width:40}):(0,e.jsx)(Y.r,{"aria-label":"Role",value:s,disabled:o.isExternal||!L||o.isDisabled,onChange:b=>r(b,o)})},H=(s,o,p,x,r,D)=>o?(0,e.jsx)(m.A,{width:100}):s.isExternal?(0,e.jsx)(n.B,{alignItems:"center",justifyContent:"flex-end",children:(0,e.jsx)(k.K,{disabled:!0,name:"lock",size:"md",tooltip:"This is a managed service account and cannot be modified."})}):(0,e.jsxs)(n.B,{alignItems:"center",justifyContent:"flex-end",children:[l.TP.hasPermission(c.AccessControlAction.ServiceAccountsWrite)&&!s.tokens&&(0,e.jsx)(A.$n,{onClick:()=>p(s),disabled:s.isDisabled,children:"Add token"}),l.TP.hasPermissionInMetadata(c.AccessControlAction.ServiceAccountsWrite,s)&&(s.isDisabled?(0,e.jsx)(A.$n,{variant:"secondary",size:"md",onClick:()=>x(s),children:"Enable"}):(0,e.jsx)(A.$n,{variant:"secondary",size:"md",onClick:()=>r(s),children:"Disable"})),l.TP.hasPermissionInMetadata(c.AccessControlAction.ServiceAccountsDelete,s)&&(0,e.jsx)(k.K,{name:"trash-alt","aria-label":`Delete service account ${s.name}`,variant:"secondary",onClick:()=>D(s)})]});K.displayName="ServiceAccountTable";var J=t(98788),g=t(12966);function se(s){return{...s.serviceAccounts}}const q={changePage:g.yd,changeQuery:g.nM,fetchACOptions:g.pJ,fetchServiceAccounts:g.iJ,deleteServiceAccount:g.W4,updateServiceAccount:g.mV,changeStateFilter:g.qS,createServiceAccountToken:g.yC},w=(0,h.connect)(se,q),_=[{label:"All",value:c.ServiceAccountStateFilter.All},{label:"With expired tokens",value:c.ServiceAccountStateFilter.WithExpiredTokens},{label:"Disabled",value:c.ServiceAccountStateFilter.Disabled}];Q.Ay.featureToggles.externalServiceAccounts&&_.push({label:"Managed",value:c.ServiceAccountStateFilter.External});const ee=({page:s,changePage:o,totalPages:p,serviceAccounts:x,isLoading:r,roleOptions:D,query:L,serviceAccountStateFilter:b,changeQuery:ne,fetchACOptions:X,fetchServiceAccounts:ae,deleteServiceAccount:M,updateServiceAccount:Z,changeStateFilter:d,createServiceAccountToken:y})=>{const[Ae,ie]=(0,C.useState)(!1),[me,le]=(0,C.useState)(!1),[xe,de]=(0,C.useState)(!1),[fe,ue]=(0,C.useState)(""),[E,G]=(0,C.useState)(null);(0,C.useEffect)(()=>{ae({withLoadingIndicator:!0}),l.TP.licensedAccessControlEnabled()&&X()},[X,ae]);const ce=x.length===0&&b===c.ServiceAccountStateFilter.All&&!L,De=async(u,Re)=>{const Be={...Re,role:u};Z(Be),l.TP.licensedAccessControlEnabled()&&X()},Ee=u=>{ne(u)},Ce=u=>{d(u)},Pe=u=>{G(u),le(!0)},Te=async()=>{E&&M(E.id),ve()},ge=u=>{G(u),de(!0)},ye=()=>{E&&Z({...E,isDisabled:!0}),he()},Se=u=>{Z({...u,isDisabled:!1})},je=u=>{G(u),ie(!0)},pe=async u=>{E&&y(E.id,u,ue)},Ie=()=>{ie(!1),G(null),ue("")},ve=()=>{le(!1),G(null)},he=()=>{de(!1),G(null)},Me=(0,e.jsx)("a",{className:"external-link",href:"https://grafana.com/docs/grafana/latest/administration/service-accounts/",target:"_blank",rel:"noopener noreferrer",children:"documentation."}),Oe=(0,e.jsxs)("span",{children:["Service accounts and their tokens can be used to authenticate against the Grafana API. Find out more in our"," ",Me]});return(0,e.jsx)(W.Y,{navId:"serviceaccounts",subTitle:Oe,actions:(0,e.jsx)(e.Fragment,{children:!ce&&l.TP.hasPermission(c.AccessControlAction.ServiceAccountsCreate)&&(0,e.jsx)(A.z9,{href:"org/serviceaccounts/create",variant:"primary",children:"Add service account"})}),children:(0,e.jsxs)(W.Y.Contents,{children:[(0,e.jsxs)("div",{className:"page-action-bar",children:[(0,e.jsx)(i.I,{grow:!0,children:(0,e.jsx)(S.Z,{placeholder:"Search service account by name",value:L,onChange:Ee,width:50})}),(0,e.jsx)(z.a,{marginBottom:1,children:(0,e.jsx)(P.z,{options:_,onChange:Ce,value:b})})]}),!r&&!ce&&x.length===0&&(0,e.jsx)(V.p,{variant:"not-found",message:(0,O.t)("service-accounts.empty-state.message","No services accounts found")}),!r&&ce&&(0,e.jsx)(V.p,{variant:"call-to-action",button:(0,e.jsx)(A.z9,{disabled:!l.TP.hasPermission(c.AccessControlAction.ServiceAccountsCreate),href:"org/serviceaccounts/create",icon:"key-skeleton-alt",size:"lg",children:(0,e.jsx)(O.x6,{i18nKey:"service-accounts.empty-state.button-title",children:"Add service account"})}),message:(0,O.t)("service-accounts.empty-state.title","You haven't created any service accounts yet"),children:(0,e.jsx)(O.x6,{i18nKey:"service-accounts.empty-state.more-info",children:"Remember, you can provide specific permissions for API access to other applications"})}),(r||x.length!==0)&&(0,e.jsx)(K,{services:x,showPaging:!0,totalPages:p,onChangePage:o,currentPage:s,onRoleChange:De,roleOptions:D,onRemoveButtonClick:Pe,onDisable:ge,onEnable:Se,onAddTokenClick:je,isLoading:r}),E&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(U.u,{isOpen:me,body:`Are you sure you want to delete '${E.name}'${E.tokens?` and ${E.tokens} accompanying ${v()("token",E.tokens)}`:""}?`,confirmText:"Delete",title:"Delete service account",onConfirm:Te,onDismiss:ve}),(0,e.jsx)(U.u,{isOpen:xe,title:"Disable service account",body:`Are you sure you want to disable '${E.name}'?`,confirmText:"Disable service account",onConfirm:ye,onDismiss:he}),(0,e.jsx)(J.z,{isOpen:Ae,token:fe,serviceAccountLogin:E.login,onCreateToken:pe,onClose:Ie})]})]})})},oe=w(ee)},98788:(re,F,t)=>{t.d(F,{z:()=>l});var e=t(74848),N=t(32196),v=t(96540),C=t(62938),h=t(32264),A=t(40845),i=t(37390),S=t(88575),z=t(10354),P=t(94354),V=t(98239),U=t(55852),W=t(10534);const Q=[{label:"No expiration",value:!1},{label:"Set expiration date",value:!0}],l=({isOpen:m,token:n,serviceAccountLogin:a,onCreateToken:$,onClose:I})=>{const f=new Date;f.setDate(f.getDate()+1);const R=new Date;h.$.tokenExpirationDayLimit!==void 0&&h.$.tokenExpirationDayLimit>-1?R.setDate(R.getDate()+h.$.tokenExpirationDayLimit+1):R.setDate(864e13);const k=h.$.tokenExpirationDayLimit!==void 0&&h.$.tokenExpirationDayLimit>0,[B,Y]=(0,v.useState)(""),[K,j]=(0,v.useState)(""),[T,H]=(0,v.useState)(k),[J,g]=(0,v.useState)(f),[se,q]=(0,v.useState)(J!==""),w=(0,A.of)(c);(0,v.useEffect)(()=>{m&&Y(`${a}-${(0,C.A)()}`)},[a,m]);const _=s=>{q(s!==""),g(s)},ee=()=>{$({name:K||B,secondsToLive:T?O(J):void 0})},te=()=>{j(""),Y(""),H(k),g(f),q(J!==""),I()},oe=n?"Service account token created":"Add service account token";return(0,e.jsx)(i.a,{isOpen:m,title:oe,onDismiss:te,className:w.modal,children:n?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(S.D,{label:"Token",description:"Copy the token now as you will not be able to see it again. Losing a token requires creating a new one.",children:(0,e.jsxs)("div",{className:w.modalTokenRow,children:[(0,e.jsx)(z.p,{name:"tokenValue",value:n,readOnly:!0}),(0,e.jsx)(W.b,{className:w.modalCopyToClipboardButton,variant:"primary",size:"md",icon:"copy",getText:()=>n,children:"Copy clipboard"})]})}),(0,e.jsxs)(i.a.ButtonRow,{children:[(0,e.jsx)(W.b,{variant:"primary",getText:()=>n,onClipboardCopy:te,children:"Copy to clipboard and close"}),(0,e.jsx)(U.$n,{variant:"secondary",onClick:te,children:"Close"})]})]}):(0,e.jsxs)("div",{children:[(0,e.jsx)(S.D,{label:"Display name",description:"Name to easily identify the token",required:!0,children:(0,e.jsx)(z.p,{name:"tokenName",value:K,placeholder:B,onChange:s=>{j(s.currentTarget.value)}})}),(0,e.jsx)(S.D,{label:"Expiration",children:(0,e.jsx)(P.z,{options:Q,value:T,onChange:H,size:"md"})}),T&&(0,e.jsx)(S.D,{label:"Expiration date",children:(0,e.jsx)(V.l,{onChange:_,value:J,placeholder:"",minDate:f,maxDate:R})}),(0,e.jsx)(i.a.ButtonRow,{children:(0,e.jsx)(U.$n,{onClick:ee,disabled:T&&!se,children:"Generate token"})})]})})},O=m=>{const n=new Date(m),a=new Date;return Math.ceil((n.getTime()-a.getTime())/1e3)},c=m=>({modal:(0,N.css)({width:"550px"}),modalTokenRow:(0,N.css)({display:"flex"}),modalCopyToClipboardButton:(0,N.css)({marginLeft:m.spacing(.5)})})},12966:(re,F,t)=>{t.d(F,{W4:()=>W,iJ:()=>P,mV:()=>U,nM:()=>O,pJ:()=>z,qS:()=>c,yC:()=>Q,yd:()=>m});var e=t(2543),N=t.n(e),v=t(17172),C=t(85927),h=t(16233),A=t(31678),i=t(1936);const S="/api/serviceaccounts";function z(){return async n=>{try{if(h.TP.licensedAccessControlEnabled()&&h.TP.hasPermission(A.AccessControlAction.ActionRolesList)){const a=await(0,C.RL)();n((0,i.ew)(a))}}catch(a){console.error(a)}}}function P({withLoadingIndicator:n}={withLoadingIndicator:!1}){return async(a,$)=>{try{if(h.TP.hasPermission(A.AccessControlAction.ServiceAccountsRead)){n&&a((0,i.FW)());const{perPage:I,page:f,query:R,serviceAccountStateFilter:k}=$().serviceAccounts,B=await(0,v.AI)().get(`/api/serviceaccounts/search?perpage=${I}&page=${f}&query=${R}${l(k)}&accesscontrol=true`);if(h.TP.licensedAccessControlEnabled()&&h.TP.hasPermission(A.AccessControlAction.ActionUserRolesList)){a((0,i.dJ)());const Y=h.TP.user.orgId,K=B?.serviceAccounts.map(T=>T.id),j=await(0,v.AI)().post("/api/access-control/users/roles/search",{userIds:K,orgId:Y});B.serviceAccounts.forEach(T=>{T.roles=j?j[T.id]||[]:[]}),a((0,i.jE)())}a((0,i.zh)(B))}}catch(I){console.error(I)}finally{a((0,i.Yh)())}}}const V=(0,e.debounce)(n=>n(P()),500,{leading:!0});function U(n){return async a=>{await(0,v.AI)().patch(`${S}/${n.id}?accesscontrol=true`,{...n}),a(P())}}function W(n){return async a=>{await(0,v.AI)().delete(`${S}/${n}`),a(P())}}function Q(n,a,$){return async I=>{const f=await(0,v.AI)().post(`${S}/${n}/tokens`,a);$(f.key),I(P())}}const l=n=>{switch(n){case A.ServiceAccountStateFilter.WithExpiredTokens:return"&expiredTokens=true";case A.ServiceAccountStateFilter.Disabled:return"&disabled=true";case A.ServiceAccountStateFilter.External:return"&external=true";default:return""}};function O(n){return async a=>{a((0,i.L5)(n)),V(a)}}function c(n){return async a=>{a((0,i.c3)(n)),a(P())}}function m(n){return async a=>{a((0,i.EC)(n)),a(P())}}}}]);

//# sourceMappingURL=ServiceAccountsPage.b64e31354c48e72c28bc.js.map