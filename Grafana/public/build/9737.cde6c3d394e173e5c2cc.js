"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9737],{19737:(v,i,t)=>{t.r(i),t.d(i,{default:()=>p});var n=t(74848),l=t(42418),d=t(7392),f=t(51488),c=t(70383),u=t(33594);const g=({config:a,templateName:e,alertManagerSourceName:r})=>{const s=a.template_files?.[e],o=a.template_file_provenances?.[e];return s?(0,n.jsx)(u.By,{alertManagerSourceName:r,config:a,existing:{name:e,content:s},provenance:o}):(0,n.jsx)(l.F,{severity:"error",title:"Template not found",children:"Sorry, this template does not seem to exist."})},p=({match:a})=>{const{selectedAlertmanager:e}=(0,c.VI)(),{data:r,isLoading:s,error:o}=(0,f.f)(e),m=a?.params.name;return m?s&&!r?"loading...":o?(0,n.jsx)(l.F,{severity:"error",title:"Failed to fetch notification template",children:String(o)}):r?(0,n.jsx)(g,{alertManagerSourceName:e,config:r,templateName:decodeURIComponent(m)}):null:(0,n.jsx)(d.L,{entity:"Notification template"})}}}]);

//# sourceMappingURL=9737.cde6c3d394e173e5c2cc.js.map