"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4737],{27013:(E,l,a)=>{a.r(l),a.d(l,{plugin:()=>P});var h=a(40187),e=a(74848),c=a(1932),u=a(96540),g=a(54625),f=a(61765),v=a(90613),m=a(14186),p=a(90182),j=a(15292),x=a(94753),A=a(91409),y=a(2913),o=a(60021);const S=[{value:o.Oz.mimir,label:"Mimir",description:"https://grafana.com/oss/mimir/. An open source, horizontally scalable, highly available, multi-tenant, long-term storage for Prometheus."},{value:o.Oz.cortex,label:"Cortex",description:"https://cortexmetrics.io/"},{value:o.Oz.prometheus,label:"Prometheus",description:"https://prometheus.io/. Does not support editing configuration via API, so contact points and notification policies are read-only."}],C=r=>{const{options:t,onOptionsChange:s}=r;return(0,u.useEffect)(()=>{t.jsonData.implementation||s((0,c.jM)(t,n=>{n.jsonData.implementation=o.Oz.mimir}))},[t,s]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("h3",{className:"page-heading",children:"Alertmanager"}),(0,e.jsxs)(v.a,{marginBottom:5,children:[(0,e.jsx)(m.I,{label:"Implementation",labelWidth:26,children:(0,e.jsx)(p.l6,{width:40,options:S,value:t.jsonData.implementation||o.Oz.mimir,onChange:n=>s({...t,jsonData:{...t.jsonData,implementation:n.value}})})}),(0,e.jsx)(m.I,{label:"Receive Grafana Alerts",tooltip:"When enabled, Grafana-managed alerts are sent to this Alertmanager.",labelWidth:26,children:(0,e.jsx)(j.K,{value:t.jsonData.handleGrafanaManagedAlerts??!1,onChange:n=>{s((0,c.jM)(t,i=>{i.jsonData.handleGrafanaManagedAlerts=n.currentTarget.checked}))}})}),t.jsonData.handleGrafanaManagedAlerts&&(0,e.jsxs)(x.E,{variant:"bodySmall",color:"secondary",children:["Make sure to enable the alert forwarding on the ",(0,e.jsx)(g.Link,{to:"/alerting/admin",children:"settings page"}),"."]})]}),(0,e.jsx)(A.t,{defaultUrl:"",dataSourceConfig:t,showAccessOptions:!0,onChange:s,sigV4AuthToggleEnabled:y.config.sigV4AuthEnabled,renderSigV4Editor:(0,e.jsx)(f._r,{...r}),secureSocksDSProxyEnabled:!1})]})};var D=a(62467),I=a(75505),d=a(17172),M=a(92240),O=a(88467);class z extends h.mA{constructor(t){super(t),this.instanceSettings=t}query(){return(0,D.of)({data:[]})}_request(t){const s={headers:{},method:"GET",url:this.instanceSettings.url+t};return(this.instanceSettings.basicAuth||this.instanceSettings.withCredentials)&&(this.instanceSettings.withCredentials=!0),this.instanceSettings.basicAuth&&(s.headers.Authorization=this.instanceSettings.basicAuth),(0,I.s)((0,d.AI)().fetch(s))}async testDatasource(){let t;const s=this.instanceSettings.url,n=s?await(0,M.O5)(s):{lazyConfigInit:!1};if(this.instanceSettings.jsonData.implementation===o.Oz.prometheus){try{if(t=await this._request("/alertmanager/api/v2/status"),t&&t?.status===200)return{status:"error",message:"It looks like you have chosen Prometheus implementation, but detected a Mimir or Cortex endpoint. Please update implementation selection and try again."}}catch{}try{t=await this._request("/api/v2/status")}catch{}}else{try{if(t=await this._request("/api/v2/status"),t&&t?.status===200)return{status:"error",message:"It looks like you have chosen a Mimir or Cortex implementation, but detected a Prometheus endpoint. Please update implementation selection and try again."}}catch{}try{t=await this._request("/alertmanager/api/v2/status")}catch(i){if((0,d.NF)(i)&&n.lazyConfigInit&&(0,O.CZ)(i)?.includes("the Alertmanager is not configured"))return{status:"success",message:"Health check passed.",details:{message:"Mimir Alertmanager without the fallback configuration has been discovered."}}}}return t?.status===200?{status:"success",message:"Health check passed."}:{status:"error",message:"Health check failed."}}}const P=new h.tD(z).setConfigEditor(C)}}]);

//# sourceMappingURL=alertmanagerPlugin.21b7e912969500f29463.js.map