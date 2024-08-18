"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9736],{24870:(z,c,s)=>{s.r(c),s.d(c,{default:()=>$});var e=s(74848),h=s(96540),f=s(5805),i=s(17172),m=s(55852),x=s(69444),u=s(16233),g=s(31678),A=s(32196),d=s(70255),y=s(96374),O=s(40845),C=s(72129),D=s(10096);const j=()=>(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"ID"}),(0,e.jsx)("th",{children:"Name"}),(0,e.jsx)("th",{style:{width:"1%"}})]})});function N({orgs:t,onDelete:n}){const r=D.TP.hasPermission(g.AccessControlAction.OrgsDelete),[l,o]=(0,h.useState)();return(0,e.jsxs)("table",{className:"filter-table form-inline filter-table--hover",children:[j(),(0,e.jsx)("tbody",{children:t.map(a=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{className:"link-td",children:(0,e.jsx)("a",{href:`admin/orgs/edit/${a.id}`,children:a.id})}),(0,e.jsx)("td",{className:"link-td",children:(0,e.jsx)("a",{href:`admin/orgs/edit/${a.id}`,children:a.name})}),(0,e.jsx)("td",{className:"text-right",children:(0,e.jsx)(m.$n,{variant:"destructive",size:"sm",icon:"times",onClick:()=>o(a),"aria-label":"Delete org",disabled:!r})})]},`${a.id}-${a.name}`))}),l&&(0,e.jsx)(y.u,{isOpen:!0,icon:"trash-alt",title:"Delete",body:(0,e.jsxs)("div",{children:["Are you sure you want to delete '",l.name,"'?",(0,e.jsx)("br",{})," ",(0,e.jsx)("small",{children:"All dashboards for this organization will be removed!"})]}),confirmText:"Delete",onDismiss:()=>o(void 0),onConfirm:()=>{n(l.id),o(void 0)}})]})}const T=({rootProps:t})=>{const n=(0,O.of)(b);return(0,e.jsxs)("table",{className:"filter-table",...t,children:[j(),(0,e.jsx)("tbody",{children:new Array(3).fill(null).map((r,l)=>(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:(0,e.jsx)(d.A,{width:16})}),(0,e.jsx)("td",{children:(0,e.jsx)(d.A,{width:240})}),(0,e.jsx)("td",{children:(0,e.jsx)(d.A,{containerClassName:n.deleteButton,width:22,height:24})})]},l))})]})},v=(0,C.j)(N,T),b=t=>({deleteButton:(0,A.css)({alignItems:"center",display:"flex",height:30,lineHeight:1})}),P=async t=>await(0,i.AI)().delete("/api/orgs/"+t),S=async()=>await(0,i.AI)().get("/api/orgs"),I=t=>(0,i.NF)(t)?t?.data?.message:"An unexpected error happened.";function $(){const[t,n]=(0,f.default)(async()=>await S(),[]),r=u.TP.hasPermission(g.AccessControlAction.OrgsCreate);return(0,h.useEffect)(()=>{n()},[n]),(0,e.jsx)(x.Y,{navId:"global-orgs",actions:(0,e.jsx)(m.z9,{icon:"plus",href:"org/new",disabled:!r,children:"New org"}),children:(0,e.jsxs)(x.Y.Contents,{children:[t.error&&I(t.error),t.loading&&(0,e.jsx)(v.Skeleton,{}),t.value&&(0,e.jsx)(v,{orgs:t.value,onDelete:l=>{P(l).then(()=>n())}})]})})}}}]);

//# sourceMappingURL=AdminListOrgsPage.4ff739d20a2d1a9709b4.js.map