"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4519],{50691:(oe,C,n)=>{n.d(C,{fk:()=>$,yf:()=>A,Df:()=>i,Uj:()=>E,Jn:()=>N,z$:()=>D});var e=n(74848),o=n(43429),f=n(39938);function i({error:r}){const d=j(r);return(0,e.jsx)(f.E,{icon:"exclamation-triangle",text:"Disabled",color:"red",tooltip:d})}function j(r){switch(r){case o.ZK.modifiedSignature:return"Plugin disabled due to modified content";case o.ZK.invalidSignature:return"Plugin disabled due to invalid plugin signature";case o.ZK.missingSignature:return"Plugin disabled due to missing plugin signature";case null:case void 0:return"Plugin disabled";default:return`Plugin disabled due to unknown error${r?`: ${r}`:""}`}}var g=n(40845),P=n(32196);const S=r=>(0,P.css)`
  background: ${r.colors.background.primary};
  border-color: ${r.colors.border.strong};
  color: ${r.colors.text.secondary};
`;function N(){const r=(0,g.of)(S);return(0,e.jsx)(f.E,{text:"Installed",color:"orange",className:r})}var B=n(33378),G=n(67061),R=n(98624);function E({plugin:r}){const d=(0,g.of)(S);return(0,B.a)("enterprise.plugins")?(0,e.jsx)(f.E,{text:"Enterprise",color:"blue"}):(0,e.jsxs)(G.B,{wrap:"wrap",children:[(0,e.jsx)(R.B,{status:r.signature}),(0,e.jsx)(f.E,{icon:"lock",role:"img","aria-label":"lock icon",text:"Enterprise",color:"blue",className:d,title:"Requires a Grafana Enterprise license"})]})}function D({plugin:r}){const d=(0,g.of)(M);return(0,e.jsx)("p",{className:d.hasUpdate,children:"Update available!"})}const M=r=>({hasUpdate:(0,P.css)`
      color: ${r.colors.text.secondary};
      font-size: ${r.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `});function $(){return(0,e.jsx)(f.E,{icon:"exclamation-triangle",text:"Angular",color:"orange",tooltip:"This plugin uses deprecated functionality, support for which is being removed."})}function A(){return(0,e.jsx)(f.E,{icon:"exclamation-triangle",text:"Deprecated",color:"orange",tooltip:"This plugin is deprecated and no longer receives updates."})}},65965:(oe,C,n)=>{n.r(C),n.d(C,{default:()=>ne});var e=n(74848),o=n(32196),f=n(24180),i=n(12131),j=n(40845),g=n(88575),P=n(90182),S=n(94354),N=n(56034),B=n(69444),G=n(17422),R=n(6320),E=n(31678),D=n(42930),M=n(32264),$=n(69529),A=n(71259),r=n(8484),d=n(66253),T=n(70255),Q=n(14110),X=n(14578),W=n(67061),Z=n(39938),Y=n(72129),V=n(43429),w=n(98624),v=n(50691);function k({plugin:t}){const p=t.hasUpdate&&!t.isCore&&t.type!==V.QE.renderer;return t.isEnterprise?(0,e.jsxs)(W.B,{height:"auto",wrap:"wrap",children:[(0,e.jsx)(v.Uj,{plugin:t}),t.isDisabled&&(0,e.jsx)(v.Df,{error:t.error}),p&&(0,e.jsx)(v.z$,{plugin:t}),t.angularDetected&&(0,e.jsx)(v.fk,{})]}):(0,e.jsxs)(W.B,{height:"auto",wrap:"wrap",children:[(0,e.jsx)(w.B,{status:t.signature}),t.isDisabled&&(0,e.jsx)(v.Df,{error:t.error}),t.isDeprecated&&(0,e.jsx)(v.yf,{}),t.isInstalled&&(0,e.jsx)(v.Jn,{}),p&&(0,e.jsx)(v.z$,{plugin:t}),t.angularDetected&&(0,e.jsx)(v.fk,{})]})}function q({alt:t,className:p,src:l,height:u}){return(0,e.jsx)("img",{src:l,className:p,alt:t,loading:"lazy",height:u})}const z="48px";function _({plugin:t,pathName:p,displayMode:l=d.fy.Grid}){const u=(0,j.of)(J),y=l===d.fy.List,U=()=>{i.Ny.getSearchObject()?.q&&(0,Q.rR)("plugins_search_user_click",{})};return(0,e.jsxs)("a",{href:`${p}/${t.id}`,className:(0,o.cx)(u.container,{[u.list]:y}),onClick:U,children:[(0,e.jsx)(q,{src:t.info.logos.small,className:u.pluginLogo,height:z,alt:""}),(0,e.jsx)("h2",{className:(0,o.cx)(u.name,"plugin-name"),children:t.name}),(0,e.jsxs)("div",{className:(0,o.cx)(u.content,"plugin-content"),children:[(0,e.jsxs)("p",{children:["By ",t.orgName]}),(0,e.jsx)(k,{plugin:t})]}),(0,e.jsx)("div",{className:u.pluginType,children:t.type&&(0,e.jsx)(X.I,{name:d.Ip[t.type],title:`${t.type} plugin`})})]})}const ee=({displayMode:t=d.fy.Grid,rootProps:p})=>{const l=(0,j.of)(J),u=t===d.fy.List;return(0,e.jsxs)("div",{className:(0,o.cx)(l.container,{[l.list]:u}),...p,children:[(0,e.jsx)(T.A,{containerClassName:(0,o.cx)(l.pluginLogo,(0,o.css)({lineHeight:1})),width:z,height:z}),(0,e.jsx)("h2",{className:l.name,children:(0,e.jsx)(T.A,{width:100})}),(0,e.jsxs)("div",{className:l.content,children:[(0,e.jsx)("p",{children:(0,e.jsx)(T.A,{width:120})}),(0,e.jsxs)(W.B,{direction:"row",children:[(0,e.jsx)(Z.E.Skeleton,{}),(0,e.jsx)(Z.E.Skeleton,{})]})]}),(0,e.jsx)("div",{className:l.pluginType,children:(0,e.jsx)(T.A,{width:16,height:16})})]})},F=(0,Y.j)(_,ee),J=t=>({container:(0,o.css)({display:"grid",gridTemplateColumns:`${z} 1fr ${t.spacing(3)}`,gridTemplateRows:"auto",gap:t.spacing(2),gridAutoFlow:"row",background:t.colors.background.secondary,borderRadius:t.shape.radius.default,padding:t.spacing(3),[t.transitions.handleMotion("no-preference","reduce")]:{transition:t.transitions.create(["background-color","box-shadow","border-color","color"],{duration:t.transitions.duration.short})},"&:hover":{background:t.colors.emphasize(t.colors.background.secondary,.03)}}),list:(0,o.css)({rowGap:0,"> img":{alignSelf:"start"},"> .plugin-content":{minHeight:0,gridArea:"2 / 2 / 4 / 3","> p":{margin:t.spacing(0,0,.5,0)}},"> .plugin-name":{alignSelf:"center",gridArea:"1 / 2 / 2 / 3"}}),pluginType:(0,o.css)({gridArea:"1 / 3 / 2 / 4",color:t.colors.text.secondary}),pluginLogo:(0,o.css)({gridArea:"1 / 1 / 3 / 2",maxWidth:"100%",alignSelf:"center",objectFit:"contain"}),content:(0,o.css)({gridArea:"3 / 1 / 4 / 3",color:t.colors.text.secondary}),name:(0,o.css)({gridArea:"1 / 2 / 3 / 3",alignSelf:"center",fontSize:t.typography.h4.fontSize,color:t.colors.text.primary,margin:0,wordBreak:"normal",overflowWrap:"anywhere"})}),se=({plugins:t,displayMode:p,isLoading:l})=>{const u=p===d.fy.List,{pathname:y}=(0,f.zy)(),U=M.$.appSubUrl+(y.endsWith("/")?y.slice(0,-1):y);return!l&&t.length===0?(0,e.jsx)($.p,{variant:"not-found",message:(0,r.t)("plugins.empty-state.message","No plugins found")}):(0,e.jsx)(A.x,{gap:3,...u?{columns:1}:{minColumnWidth:34},"data-testid":"plugin-list",children:l?new Array(50).fill(null).map((I,b)=>(0,e.jsx)(F.Skeleton,{displayMode:p},b)):t.map(I=>(0,e.jsx)(F,{plugin:I,pathName:U,displayMode:p},I.id))})};var H=n(96540),te=n(40996),s=n(67647);const a=(t,p=0,l=[])=>{const u=(0,H.useRef)(!0),y=[...l,u];return(0,te.A)(()=>{if(u.current){u.current=!1;return}return t()},p,y)},c=({value:t,onSearch:p})=>{const[l,u]=(0,H.useState)(t);return a(()=>p(l??""),500,[l]),(0,e.jsx)(s.Z,{value:l,onKeyDown:y=>{(y.key==="Enter"||y.keyCode===13)&&p(y.currentTarget.value)},placeholder:"Search Grafana plugins",onChange:y=>{u(y)},width:46})};var h=n(5129);const x=()=>({push:({query:t})=>{i.Ny.partial(t)}});var L=n(83391);function ne({route:t}){const p=(0,f.zy)(),l=(0,i.SE)(p.search),u=(0,E.useSelector)(m=>(0,G.tc)(m.navIndex,"plugins")),{displayMode:y,setDisplayMode:U}=(0,L.Tr)(),I=(0,j.of)(de),b=x(),ue=(0,L.pw)(),ae=l.q?.toString()||"",K=l.filterBy?.toString()||"all",O=l.filterByType||"all",re=l.sortBy||h.by.nameAsc,{isLoading:ge,error:le,plugins:pe}=(0,L.PW)({keyword:ae,type:O!=="all"?O:void 0,isInstalled:K==="installed"?!0:void 0},re),ie=[{value:"all",label:"All"},{value:"installed",label:"Installed"}],he=m=>{b.push({query:{sortBy:m.value}})},ce=m=>{b.push({query:{filterBy:m}})},ye=m=>{b.push({query:{filterByType:m.value}})},fe=m=>{b.push({query:{filterBy:K,filterByType:O,q:m}})};if(le)return console.error(le.message),null;const xe=(0,e.jsxs)("div",{children:["Extend the Grafana experience with panel plugins and apps. To find more data sources go to"," ",(0,e.jsx)("a",{className:"external-link",href:`${R.b.AddNewConnection}?cat=data-source`,children:"Connections"}),"."]});return(0,e.jsx)(B.Y,{navModel:u,subTitle:xe,children:(0,e.jsxs)(B.Y.Contents,{children:[(0,e.jsxs)(D.G,{wrap:!0,children:[(0,e.jsx)(g.D,{label:"Search",children:(0,e.jsx)(c,{value:ae,onSearch:fe})}),(0,e.jsxs)(D.G,{wrap:!0,className:I.actionBar,children:[(0,e.jsx)(g.D,{label:"Type",children:(0,e.jsx)(P.l6,{"aria-label":"Plugin type filter",value:O,onChange:ye,width:18,options:[{value:"all",label:"All"},{value:"datasource",label:"Data sources"},{value:"panel",label:"Panels"},{value:"app",label:"Applications"}]})}),ue?(0,e.jsx)(g.D,{label:"State",children:(0,e.jsx)(S.z,{value:K,onChange:ce,options:ie})}):(0,e.jsx)(N.m,{content:"This filter has been disabled because the Grafana server cannot access grafana.com",placement:"top",children:(0,e.jsx)("div",{children:(0,e.jsx)(g.D,{label:"State",children:(0,e.jsx)(S.z,{disabled:!0,value:K,onChange:ce,options:ie})})})}),(0,e.jsx)(g.D,{label:"Sort",children:(0,e.jsx)(P.l6,{"aria-label":"Sort Plugins List",width:24,value:re,onChange:he,options:[{value:"nameAsc",label:"By name (A-Z)"},{value:"nameDesc",label:"By name (Z-A)"},{value:"updated",label:"By updated date"},{value:"published",label:"By published date"},{value:"downloads",label:"By downloads"}]})}),(0,e.jsx)(g.D,{label:"View",children:(0,e.jsx)(S.z,{className:I.displayAs,value:y,onChange:U,options:[{value:d.fy.Grid,icon:"table",description:"Display plugins in a grid layout"},{value:d.fy.List,icon:"list-ul",description:"Display plugins in list"}]})})]})]}),(0,e.jsx)("div",{className:I.listWrap,children:(0,e.jsx)(se,{plugins:pe,displayMode:y,isLoading:ge})})]})})}const de=t=>({actionBar:(0,o.css)({[t.breakpoints.up("xl")]:{marginLeft:"auto"}}),listWrap:(0,o.css)({marginTop:t.spacing(2)}),displayAs:(0,o.css)({svg:{marginRight:0}})})},83391:(oe,C,n)=>{n.d(C,{Tr:()=>te,A5:()=>H,wr:()=>z,m5:()=>q,PW:()=>Q,F9:()=>Z,ob:()=>X,xX:()=>Y,XN:()=>_,pw:()=>v,Gp:()=>w,qG:()=>ee,SQ:()=>V});var e=n(96540),o=n(31678),f=n(5129),i=n(20701),j=n(31326),g=n(25508),P=n(54479),S=n(14110),N=n(66253);const B=s=>s.plugins,G=(0,g.Mz)(B,({items:s})=>s),R=(0,g.Mz)(B,({settings:s})=>s.displayMode),{selectAll:E,selectById:D}=j.AI.getSelectors(G),M=s=>(0,g.Mz)(E,a=>{const c=s.keyword?(0,P.xb)(s.keyword.toLowerCase()):"",h=c!==""?(0,f.TD)(a,c):null;return c&&(0,S.rR)("plugins_search",{resultsCount:h?.length}),a.filter(x=>!(c&&h==null||c&&!h?.includes(x.id)||s.type&&x.type!==s.type||s.isInstalled!==void 0&&x.isInstalled!==s.isInstalled||s.isEnterprise!==void 0&&x.isEnterprise!==s.isEnterprise))}),$=s=>(0,g.Mz)(E,a=>{const c=[];for(const h of a)h.error&&(!s||h.type===s)&&c.push({pluginId:h.id,errorCode:h.error,pluginType:h.type});return c}),A=s=>(0,g.Mz)(B,({requests:a={}})=>a[s]),r=s=>(0,g.Mz)(A(s),a=>a?.status===N.IZ.Pending),d=s=>(0,g.Mz)(A(s),a=>a?.status===N.IZ.Rejected?a?.error:null),T=s=>(0,g.Mz)(A(s),a=>a===void 0),Q=(s,a=f.by.nameAsc)=>{F();const c=(0,e.useMemo)(()=>M(s),[s]),h=(0,o.useSelector)(c),{isLoading:x,error:L}=k(),ne=(0,f.Xc)(h,a);return{isLoading:x,error:L,plugins:ne}},X=s=>(F(),se(s),(0,o.useSelector)(a=>D(a,s))),W=s=>(J(),useSelector(a=>selectById(a,s))),Z=s=>(F(),(0,o.useSelector)($(s))),Y=()=>{const s=(0,o.useDispatch)();return(a,c,h)=>s((0,i.ai)({id:a,version:c,isUpdating:h}))},V=()=>{const s=(0,o.useDispatch)();return()=>s((0,i.nT)())},w=()=>{const s=(0,o.useDispatch)();return a=>s((0,i.JC)(a))},v=()=>(0,o.useSelector)(d(i.JJ.typePrefix))===null,k=()=>{const s=(0,o.useSelector)(r("plugins/fetchLocal")),a=(0,o.useSelector)(d("plugins/fetchLocal"));return{isLoading:s,error:a}},q=()=>{const s=(0,o.useSelector)(r(i.mj.typePrefix)),a=(0,o.useSelector)(r("plugins/fetchLocal")),c=(0,o.useSelector)(r("plugins/fetchRemote")),h=s||a||c,x=(0,o.useSelector)(d(i.mj.typePrefix));return{isLoading:h,error:x}},z=()=>{const s=(0,o.useSelector)(r(i.t5.typePrefix)),a=(0,o.useSelector)(d(i.t5.typePrefix));return{isLoading:s,error:a}},_=()=>{const s=(0,o.useSelector)(r(i.ai.typePrefix)),a=(0,o.useSelector)(d(i.ai.typePrefix));return{isInstalling:s,error:a}},ee=()=>{const s=(0,o.useSelector)(r(i.JC.typePrefix)),a=(0,o.useSelector)(d(i.JC.typePrefix));return{isUninstalling:s,error:a}},F=()=>{const s=(0,o.useDispatch)(),a=(0,o.useSelector)(T(i.mj.typePrefix));(0,e.useEffect)(()=>{a&&s((0,i.mj)())},[])},J=()=>{const s=useDispatch(),a=useSelector(selectIsRequestNotFetched(fetchAllLocal.typePrefix));useEffect(()=>{a&&s(fetchAllLocal())},[])},se=s=>{const a=(0,o.useDispatch)(),c=(0,o.useSelector)(L=>D(L,s)),x=!(0,o.useSelector)(r(i.t5.typePrefix))&&c&&!c.details;(0,e.useEffect)(()=>{x&&a((0,i.t5)(s))},[c])},H=()=>{const s=(0,o.useDispatch)();return a=>s((0,i.t5)(a))},te=()=>{const s=(0,o.useDispatch)();return{displayMode:(0,o.useSelector)(R),setDisplayMode:c=>s((0,j.qo)(c))}}}}]);

//# sourceMappingURL=PluginListPage.795cae309bfb61e32d5c.js.map