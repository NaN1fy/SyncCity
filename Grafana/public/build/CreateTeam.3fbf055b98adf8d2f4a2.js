"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5436],{31084:(h,E,s)=>{s.d(E,{Y:()=>_});var a=s(74848),O=s(96540),c=s(41053),n=s(10096),r=s(31678),d=s(37425),o=s(85927);const _=({teamId:t,roleOptions:l,disabled:C,roles:P,onApplyRoles:A,pendingRoles:e,apply:m=!1,maxWidth:v,width:M,isLoading:I})=>{const[{loading:U,value:T=P||[]},D]=(0,c.A)(async()=>{try{if(P)return P;if(m&&e?.length)return e;if(n.TP.hasPermission(r.AccessControlAction.ActionTeamsRolesList)&&t>0)return await(0,o.xN)(t)}catch(i){console.error("Error loading options",i)}return[]},[t,e,P]);(0,O.useEffect)(()=>{D()},[D]);const u=async i=>{m?A&&A(i):(await(0,o.G3)(i,t),await D())},L=n.TP.hasPermission(r.AccessControlAction.ActionTeamsRolesAdd)&&n.TP.hasPermission(r.AccessControlAction.ActionTeamsRolesRemove);return(0,a.jsx)(d.n,{apply:m,onRolesChange:u,roleOptions:l,appliedRoles:T,isLoading:U||I,disabled:C,basicRoleDisabled:!0,canUpdateRoles:L,maxWidth:v,width:M})}},54939:(h,E,s)=>{s.d(E,{o:()=>d});var a=s(96540),O=s(24705),c=s(10096),n=s(31678),r=s(85927);const d=o=>{const[_,t]=(0,a.useState)(o),{value:l=[]}=(0,O.A)(async()=>c.TP.licensedAccessControlEnabled()&&c.TP.hasPermission(n.AccessControlAction.ActionRolesList)?(0,r.RL)(_):Promise.resolve([]),[_]);return[{roleOptions:l},t]}},80011:(h,E,s)=>{s.r(E),s.d(E,{CreateTeam:()=>M,default:()=>I});var a=s(74848),O=s(96540),c=s(49785),n=s(17172),r=s(12131),d=s(84167),o=s(88575),_=s(10354),t=s(55852),l=s(69444),C=s(31084),P=s(85927),A=s(54939),e=s(10096),m=s(31678);const v={icon:"users-alt",id:"team-new",text:"New team",subTitle:"Create a new team. Teams let you grant permissions to a group of users."},M=()=>{const U=e.TP.user.orgId,[T,D]=(0,O.useState)([]),[{roleOptions:u}]=(0,A.o)(U),{handleSubmit:L,register:i,formState:{errors:W}}=(0,c.mN)(),f=e.TP.hasPermission(m.AccessControlAction.ActionUserRolesAdd)&&e.TP.hasPermission(m.AccessControlAction.ActionUserRolesRemove),B=async K=>{const R=await(0,n.AI)().post("/api/teams",K);if(R.teamId){try{await e.TP.fetchUserPermissions(),e.TP.licensedAccessControlEnabled()&&f&&await(0,P.G3)(T,R.teamId,R.orgId)}catch(g){console.error(g)}r.Ny.push(`/org/teams/edit/${R.teamId}`)}};return(0,a.jsx)(l.Y,{navId:"teams",pageNav:v,children:(0,a.jsx)(l.Y.Contents,{children:(0,a.jsxs)("form",{onSubmit:L(B),style:{maxWidth:"600px"},children:[(0,a.jsxs)(d.n,{children:[(0,a.jsx)(o.D,{label:"Name",required:!0,invalid:!!W.name,error:"Team name is required",children:(0,a.jsx)(_.p,{...i("name",{required:!0}),id:"team-name"})}),e.TP.licensedAccessControlEnabled()&&(0,a.jsx)(o.D,{label:"Role",children:(0,a.jsx)(C.Y,{teamId:0,roleOptions:u,disabled:!1,apply:!0,onApplyRoles:D,pendingRoles:T,maxWidth:"100%"})}),(0,a.jsx)(o.D,{label:"Email",description:"This is optional and is primarily used for allowing custom team avatars.",children:(0,a.jsx)(_.p,{...i("email"),type:"email",id:"team-email",placeholder:"email@test.com"})})]}),(0,a.jsx)(t.$n,{type:"submit",variant:"primary",children:"Create"})]})})})},I=M}}]);

//# sourceMappingURL=CreateTeam.3fbf055b98adf8d2f4a2.js.map