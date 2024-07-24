"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5356,9299],{51372:(U,v,a)=>{a.r(v),a.d(v,{ServerStats:()=>$});var r=a(32196),e=a(96540),A=a(32264),u=a(40845),p=a(55852),d=a(31678),E=a(16233),b=a(70255),D=a(10860),S=a(67061),P=a(56034),C=a(14578);const g=({content:n,footer:o,isLoading:i})=>{const t=(0,u.of)(N);return e.createElement(D.Z,{className:t.container},n.map((c,h)=>e.createElement(S.B,{key:h,justifyContent:"space-between",alignItems:"center"},e.createElement(S.B,{alignItems:"center"},e.createElement("span",{className:(0,r.cx)({[t.indent]:!!c.indent})},c.name),c.tooltip&&e.createElement(P.m,{content:String(c.tooltip),placement:"auto-start"},e.createElement(C.I,{name:"info-circle",className:t.tooltip}))),i?e.createElement(b.A,{width:60}):e.createElement("span",{className:c.highlight?t.highlight:""},c.value))),o&&e.createElement("div",null,o))},N=n=>({container:(0,r.css)({display:"flex",flexDirection:"column",gap:n.spacing(2),padding:n.spacing(2)}),indent:(0,r.css)({marginLeft:n.spacing(2)}),tooltip:(0,r.css)({color:n.colors.secondary.text}),highlight:(0,r.css)({color:n.colors.warning.text,padding:`${n.spacing(.5)} ${n.spacing(1)}`,marginRight:`-${n.spacing(1)}`})});var x=a(17172);const T=async()=>(0,x.AI)().get("api/admin/stats").catch(n=>(console.error(n),null)),$=()=>{const[n,o]=(0,e.useState)(null),[i,t]=(0,e.useState)(!0),c=(0,u.of)(L),h=E.TP.hasPermission(d.AccessControlAction.DataSourcesRead),s=E.TP.hasPermission(d.AccessControlAction.UsersRead);return(0,e.useEffect)(()=>{E.TP.hasPermission(d.AccessControlAction.ActionServerStatsRead)&&T().then(l=>{o(l),t(!1)})},[]),E.TP.hasPermission(d.AccessControlAction.ActionServerStatsRead)?e.createElement(e.Fragment,null,e.createElement("h2",{className:c.title},"Instance statistics"),!i&&!n?e.createElement("p",{className:c.notFound},"No stats found."):e.createElement("div",{className:c.row},e.createElement(g,{isLoading:i,content:[{name:"Dashboards (starred)",value:`${n?.dashboards} (${n?.stars})`},{name:"Tags",value:n?.tags},{name:"Playlists",value:n?.playlists},{name:"Snapshots",value:n?.snapshots}],footer:e.createElement(p.z9,{href:"/dashboards",variant:"secondary"},"Manage dashboards")}),e.createElement("div",{className:c.doubleRow},e.createElement(g,{isLoading:i,content:[{name:"Data sources",value:n?.datasources}],footer:h&&e.createElement(p.z9,{href:"/datasources",variant:"secondary"},"Manage data sources")}),e.createElement(g,{isLoading:i,content:[{name:"Alerts",value:n?.alerts}],footer:e.createElement(p.z9,{href:"/alerting/list",variant:"secondary"},"Manage alerts")})),e.createElement(g,{isLoading:i,content:[{name:"Organisations",value:n?.orgs},{name:"Users total",value:n?.users},{name:"Active sessions",value:n?.activeSessions},{name:"Active users in last 30 days",value:n?.activeUsers},...I(n,A.$)],footer:s&&e.createElement(p.z9,{href:"/admin/users",variant:"secondary"},"Manage users")}))):null},I=(n,o)=>!o.anonymousEnabled||!n?.activeDevices?[]:o.anonymousDeviceLimit?[{name:"Active anonymous devices",value:`${n.activeDevices} / ${o.anonymousDeviceLimit}`,tooltip:"Detected devices that are not logged in, in last 30 days.",highlight:n.activeDevices>o.anonymousDeviceLimit}]:[{name:"Active anonymous devices",value:`${n.activeDevices}`,tooltip:"Detected devices that are not logged in, in last 30 days."}],L=n=>({title:(0,r.css)({marginBottom:n.spacing(4)}),row:(0,r.css)({display:"flex",justifyContent:"space-between",width:"100%","& > div:not(:last-of-type)":{marginRight:n.spacing(2)},"& > div":{width:"33.3%"}}),doubleRow:(0,r.css)({display:"flex",flexDirection:"column","& > div:first-of-type":{marginBottom:n.spacing(2)}}),notFound:(0,r.css)({fontSize:n.typography.h6.fontSize,textAlign:"center",height:"290px"})})},55356:(U,v,a)=>{a.r(v),a.d(v,{UpgradeInfo:()=>x,UpgradePage:()=>g,default:()=>h});var r=a(32196),e=a(96540),A=a(63329),u=a(40845),p=a(55852),d=a(17205),E=a(17422);const b={fontWeight:500,fontSize:"26px",lineHeight:"123%"},D=s=>{const l=s.isDark?"public/img/licensing/header_dark.svg":"public/img/licensing/header_light.svg",m=s.isDark?s.v1.palette.dark9:s.v1.palette.gray6;return{container:(0,r.css)`
      padding: 36px 79px;
      background: ${s.components.panel.background};
    `,footer:(0,r.css)`
      text-align: center;
      padding: 16px;
      background: ${m};
    `,header:(0,r.css)`
      height: 137px;
      padding: 40px 0 0 79px;
      position: relative;
      background: url('${l}') right;
    `}};function S({header:s,editionNotice:l,subheader:m,children:f}){const y=(0,u.of)(D);return e.createElement(e.Fragment,null,e.createElement("div",{className:y.header},e.createElement("h2",{style:b},s),m&&e.createElement("h3",null,m),e.createElement(P,{size:"128px",style:{boxShadow:"0px 0px 24px rgba(24, 58, 110, 0.45)",background:"#0A1C36",position:"absolute",top:"19px",left:"71%"}},e.createElement("img",{src:"public/img/grafana_icon.svg",alt:"SyncCity",width:"80px",style:{position:"absolute",left:"23px",top:"20px"}}))),e.createElement("div",{className:y.container},f),l&&e.createElement("div",{className:y.footer},l))}const P=({size:s,style:l,children:m})=>{const f=(0,u.$j)();return e.createElement("div",{style:{width:s,height:s,position:"absolute",bottom:0,right:0,borderRadius:f.shape.radius.circle,...l}},m)};var C=a(51372);function g({navModel:s}){return e.createElement(d.Y,{navModel:s},e.createElement(d.Y.Contents,null,e.createElement(C.ServerStats,null),e.createElement(x,{editionNotice:`You are running the open-source version of Grafana.
        You have to install the Enterprise edition in order enable Enterprise features.`})))}const N={fontWeight:500,fontSize:"26px",lineHeight:"123%"},x=({editionNotice:s})=>{const l=(0,u.of)(T);return e.createElement(e.Fragment,null,e.createElement("h2",{className:l.title},"Enterprise license"),e.createElement(S,{header:"Grafana Enterprise",subheader:"Get your free trial",editionNotice:s},e.createElement("div",{className:l.column},e.createElement(n,null),e.createElement(L,null))))},T=s=>({column:(0,r.css)`
      display: grid;
      grid-template-columns: 100%;
      column-gap: 20px;
      row-gap: 40px;

      @media (min-width: 1050px) {
        grid-template-columns: 50% 50%;
      }
    `,title:(0,r.css)`
      margin: ${s.spacing(4)} 0;
    `}),$=()=>e.createElement("div",{style:{marginTop:"40px",marginBottom:"30px"}},e.createElement("h2",{style:N},"Get Grafana Enterprise"),e.createElement(I,null),e.createElement("p",{style:{paddingTop:"12px"}},"You can use the trial version for free for 30 days. We will remind you about it five days before the trial period ends.")),I=()=>e.createElement(p.z9,{variant:"primary",size:"lg",href:"https://grafana.com/contact?about=grafana-enterprise&utm_source=grafana-upgrade-page"},"Contact us and get a free trial"),L=()=>e.createElement("div",null,e.createElement("h4",null,"At your service"),e.createElement(i,null,e.createElement(t,{title:"Enterprise Plugins",image:"public/img/licensing/plugin_enterprise.svg"}),e.createElement(t,{title:"Critical SLA: 2 hours",image:"public/img/licensing/sla.svg"}),e.createElement(t,{title:"Unlimited Expert Support",image:"public/img/licensing/customer_support.svg"},"24 x 7 x 365 support via",e.createElement(i,{nested:!0},e.createElement(t,{title:"Email"}),e.createElement(t,{title:"Private Slack channel"}),e.createElement(t,{title:"Phone"}))),e.createElement(t,{title:"Hand-in-hand support",image:"public/img/licensing/handinhand_support.svg"},"in the upgrade process")),e.createElement("div",{style:{marginTop:"20px"}},e.createElement("strong",null,"Also included:"),e.createElement("br",null),"Indemnification, working with Grafana Labs on future prioritization, and training from the core Grafana team."),e.createElement($,null)),n=()=>e.createElement("div",{style:{paddingRight:"11px"}},e.createElement("h4",null,"Enhanced functionality"),e.createElement(o,null)),o=()=>e.createElement(i,null,e.createElement(t,{title:"Data source permissions"}),e.createElement(t,{title:"Reporting"}),e.createElement(t,{title:"SAML authentication"}),e.createElement(t,{title:"Enhanced LDAP integration"}),e.createElement(t,{title:"Team Sync"},"LDAP, GitHub OAuth, Auth Proxy, Okta"),e.createElement(t,{title:"White labeling"}),e.createElement(t,{title:"Auditing"}),e.createElement(t,{title:"Settings updates at runtime"}),e.createElement(t,{title:"Grafana usage insights"},e.createElement(i,{nested:!0},e.createElement(t,{title:"Sort dashboards by popularity in search"}),e.createElement(t,{title:"Find unused dashboards"}),e.createElement(t,{title:"Dashboard usage stats drawer"}),e.createElement(t,{title:"Dashboard presence indicators"}))),e.createElement(t,{title:"Enterprise plugins"},e.createElement(i,{nested:!0},e.createElement(t,{title:"Oracle"}),e.createElement(t,{title:"Splunk"}),e.createElement(t,{title:"Service Now"}),e.createElement(t,{title:"Dynatrace"}),e.createElement(t,{title:"New Relic"}),e.createElement(t,{title:"DataDog"}),e.createElement(t,{title:"AppDynamics"}),e.createElement(t,{title:"SAP HANA\xAE"}),e.createElement(t,{title:"Gitlab"}),e.createElement(t,{title:"Honeycomb"}),e.createElement(t,{title:"Jira"}),e.createElement(t,{title:"MongoDB"}),e.createElement(t,{title:"Salesforce"}),e.createElement(t,{title:"Snowflake"}),e.createElement(t,{title:"Wavefront"})))),i=({children:s,nested:l})=>{const m=(0,r.css)`
    display: flex;
    flex-direction: column;
    padding-top: 8px;

    > div {
      margin-bottom: ${l?0:8}px;
    }
  `;return e.createElement("div",{className:m},s)},t=({children:s,title:l,image:m})=>{const f=m||"public/img/licensing/checkmark.svg",y=(0,r.css)`
    display: flex;

    > img {
      display: block;
      height: 22px;
      flex-grow: 0;
      padding-right: 12px;
    }
  `,G=(0,r.css)`
    font-weight: 500;
    line-height: 1.7;
  `;return e.createElement("div",{className:y},e.createElement("img",{src:f,alt:""}),e.createElement("div",null,e.createElement("div",{className:G},l),s))},c=s=>({navModel:(0,E.tc)(s.navIndex,"upgrading")}),h=(0,A.connect)(c)(g)}}]);

//# sourceMappingURL=5356.bc8698e4ad688ff5968b.js.map