"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5761],{53371:(Q,y,s)=>{s.r(y),s.d(y,{ListPublicDashboardPage:()=>$,default:()=>H});var a=s(74848),r=s(32196),P=s(96540),C=s(49045),S=s(13544),U=s(14110),v=s(40845),x=s(10860),N=s(56034),A=s(14578),I=s(15292),m=s(55852),B=s(62930),R=s(69529),z=s(72109),E=s(66864),M=s(19384),D=s(69444),o=s(8484),Y=s(16233),f=s(72686),L=s(72254),Z=s(31678),O=s(71678),W=s(90591);const K=({dashboard:t,publicDashboard:i,loader:d,children:n,onDismiss:e,...g})=>{const[l,{isLoading:j}]=(0,f.bN)(),c=(h,b)=>{l({dashboard:t,uid:h.uid,dashboardUid:h.dashboardUid}),b()};return(0,a.jsx)(O.$s,{children:({showModal:h,hideModal:b})=>{const u=(0,o.t)("public-dashboard-list.button.revoke-button-text","Revoke public URL");return(0,a.jsx)(m.$n,{"aria-label":u,title:u,onClick:()=>h(W.m,{dashboardTitle:i.title,onConfirm:()=>c(i,b),onDismiss:()=>{e?e():b()}}),...g,children:j&&d?d:n})}})},F=({pd:t})=>{const i=(0,v.of)(T),d=(0,v.$j)(),n=(0,C.A)(`(max-width: ${d.breakpoints.values.sm}px)`),[e,{isLoading:g}]=(0,f.T2)(),l=S.Tp.pages.PublicDashboards,j=Y.TP.hasPermission(Z.AccessControlAction.DashboardsPublicWrite),c=!t.dashboardUid,h=(p,V)=>{const J={dashboard:{uid:p.dashboardUid},payload:{uid:p.uid,isEnabled:!V}};e(J)},b=(0,P.useMemo)(()=>n?x.Z.Actions:x.Z.SecondaryActions,[n]),u=(0,o.t)("public-dashboard-list.toggle.pause-sharing-toggle-text","Pause sharing");return(0,a.jsxs)(x.Z,{className:i.card,href:c?void 0:`/d/${t.dashboardUid}`,children:[(0,a.jsx)(x.Z.Heading,{className:i.heading,children:c?(0,a.jsx)(N.m,{content:(0,o.t)("public-dashboard-list.dashboard-title.orphaned-tooltip","The linked dashboard has already been deleted"),placement:"top",children:(0,a.jsxs)("div",{className:i.orphanedTitle,children:[(0,a.jsx)(o.x6,{i18nKey:"public-dashboard-list.dashboard-title.orphaned-title",children:(0,a.jsx)("span",{children:"Orphaned public dashboard"})}),(0,a.jsx)(A.I,{name:"info-circle"})]})}):(0,a.jsx)("span",{children:t.title})}),(0,a.jsxs)(b,{className:i.actions,children:[(0,a.jsxs)("div",{className:i.pauseSwitch,children:[(0,a.jsx)(I.d,{value:!t.isEnabled,label:u,disabled:g,onChange:p=>{(0,U.rR)("grafana_dashboards_public_enable_clicked",{action:p.currentTarget.checked?"disable":"enable"}),h(t,p.currentTarget.checked)},"data-testid":l.ListItem.pauseSwitch}),(0,a.jsx)("span",{children:u})]}),(0,a.jsx)(m.z9,{disabled:c,fill:"text",icon:"external-link-alt",variant:"secondary",target:"_blank",color:d.colors.warning.text,href:(0,L.mL)(t.accessToken),tooltip:(0,o.t)("public-dashboard-list.button.view-button-tooltip","View public dashboard"),"data-testid":l.ListItem.linkButton},"public-dashboard-url"),(0,a.jsx)(m.z9,{disabled:c,fill:"text",icon:"cog",variant:"secondary",color:d.colors.warning.text,href:(0,L.gN)(t.dashboardUid,t.slug),tooltip:(0,o.t)("public-dashboard-list.button.config-button-tooltip","Configure public dashboard"),"data-testid":l.ListItem.configButton},"public-dashboard-config-url"),j&&(0,a.jsx)(K,{fill:"text",icon:"trash-alt",variant:"secondary",publicDashboard:t,tooltip:(0,o.t)("public-dashboard-list.button.revoke-button-tooltip","Revoke public dashboard URL"),loader:(0,a.jsx)(B.y,{}),"data-testid":l.ListItem.trashcanButton})]})]})},G=()=>{const[t,i]=(0,P.useState)(1),d=(0,v.of)(T),{data:n,isLoading:e,isError:g}=(0,f._e)(t);return(0,a.jsx)(D.Y,{navId:"dashboards/public",children:(0,a.jsx)(D.Y.Contents,{isLoading:e,children:!e&&!g&&!!n&&(0,a.jsx)("div",{children:n.publicDashboards.length===0?(0,a.jsx)(R.p,{variant:"call-to-action",message:(0,o.t)("public-dashboard-list.empty-state.message","You haven't created any public dashboards yet"),children:(0,a.jsxs)(o.x6,{i18nKey:"public-dashboard-list.empty-state.more-info",children:["Create a public dashboard from any existing dashboard through the ",(0,a.jsx)("b",{children:"Share"})," modal."," ",(0,a.jsx)(z.Y,{external:!0,href:"https://grafana.com/docs/grafana/latest/dashboards/dashboard-public/#make-a-dashboard-public",children:"Learn more"})]})}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("ul",{className:d.list,children:n.publicDashboards.map(l=>(0,a.jsx)("li",{children:(0,a.jsx)(F,{pd:l})},l.uid))}),(0,a.jsx)(E.Gy,{justify:"flex-end",children:(0,a.jsx)(M.d,{onNavigate:i,currentPage:n.page,numberOfPages:n.totalPages,hideWhenSinglePage:!0})})]})})})})},T=t=>({list:(0,r.css)`
    list-style-type: none;
    margin-bottom: ${t.spacing(2)};
  `,card:(0,r.css)`
    ${t.breakpoints.up("sm")} {
      display: flex;
    }
  `,heading:(0,r.css)`
    display: flex;
    align-items: center;
    gap: ${t.spacing(1)};
    flex: 1;
  `,orphanedTitle:(0,r.css)`
    display: flex;
    align-items: center;
    gap: ${t.spacing(1)};
  `,actions:(0,r.css)`
    display: flex;
    align-items: center;
    position: relative;

    gap: ${t.spacing(.5)};
    ${t.breakpoints.up("sm")} {
      gap: ${t.spacing(1)};
    }
  `,pauseSwitch:(0,r.css)`
    display: flex;
    gap: ${t.spacing(1)};
    align-items: center;
    font-size: ${t.typography.bodySmall.fontSize};
    margin-bottom: 0;
    flex: 1;

    ${t.breakpoints.up("sm")} {
      padding-right: ${t.spacing(2)};
    }
  `}),$=({})=>(0,a.jsx)(G,{}),H=$}}]);

//# sourceMappingURL=ListPublicDashboardPage.3d88c64c78aa97a4b502.js.map