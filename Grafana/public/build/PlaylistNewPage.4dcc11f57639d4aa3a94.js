"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7616],{23833:(O,j,t)=>{t.d(j,{$:()=>H});var a=t(74848),m=t(96540),u=t(13544),b=t(32264),g=t(88575),p=t(10354),v=t(84167),E=t(67061),P=t(55852),A=t(72235),C=t(59429),T=t(99818),n=t(8484),N=t(24439),B=t(38127),I=t(32196),S=t(55127),$=t.n(S),F=t(40845),K=t(62930),M=t(14578),R=t(29158),U=t(46334);const L=({items:o,onDelete:e})=>{const r=(0,F.of)(W);if(!o?.length)return(0,a.jsx)("div",{children:(0,a.jsx)("em",{children:(0,a.jsx)(n.x6,{i18nKey:"playlist-edit.form.table-empty",children:"Playlist is empty. Add dashboards below."})})});const h=s=>{let c=s.type==="dashboard_by_tag"?"apps":"tag-alt";const i=[],l=s.dashboards?.[0];return s.dashboards?s.type==="dashboard_by_tag"?(i.push((0,a.jsx)(U.E,{label:s.value,removeIcon:!1,count:0},s.value)),l?i.push((0,a.jsxs)("span",{children:["\xA0 ",$()("dashboard",s.dashboards.length,!0)]},"info")):(c="exclamation-triangle",i.push((0,a.jsx)("span",{children:"\xA0 No dashboards found"},"info")))):l?i.push(s.dashboards.length>1?(0,a.jsxs)("span",{children:["Multiple items found: $",s.value]},"info"):(0,a.jsx)("span",{children:l.name??s.value},"info")):(c="exclamation-triangle",i.push((0,a.jsxs)("span",{children:["\xA0 Not found: ",s.value]},"info"))):i.push((0,a.jsx)(K.y,{},"spinner")),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(M.I,{name:c,className:r.rightMargin},"icon"),i]})};return(0,a.jsx)(a.Fragment,{children:o.map((s,c)=>(0,a.jsx)(B.sx,{draggableId:`${c}`,index:c,children:i=>(0,a.jsxs)("div",{className:r.row,ref:i.innerRef,...i.draggableProps,...i.dragHandleProps,role:"row",children:[(0,a.jsx)("div",{className:r.actions,role:"cell","aria-label":`Playlist item, ${s.type}, ${s.value}`,children:h(s)}),(0,a.jsxs)("div",{className:r.actions,children:[(0,a.jsx)(R.K,{name:"times",size:"md",onClick:()=>e(c),"data-testid":u.Tp.pages.PlaylistForm.itemDelete,tooltip:(0,n.t)("playlist-edit.form.table-delete","Delete playlist item")}),(0,a.jsx)(M.I,{title:(0,n.t)("playlist-edit.form.table-drag","Drag and drop to reorder"),name:"draggabledots",size:"md"})]})]})},`${c}/${s.value}`))})};function W(o){return{row:(0,I.css)`
      padding: 6px;
      background: ${o.colors.background.secondary};
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 3px;

      border: 1px solid ${o.colors.border.medium};
      &:hover {
        border: 1px solid ${o.colors.border.strong};
      }
    `,rightMargin:(0,I.css)`
      margin-right: 5px;
    `,actions:(0,I.css)`
      align-items: center;
      justify-content: center;
      display: flex;
    `,settings:(0,I.css)`
      label: settings;
      text-align: right;
    `}}const z=({items:o,deleteItem:e,moveItem:r})=>{const h=s=>{s.destination&&r(s.source.index,s.destination?.index)};return(0,a.jsx)(v.n,{label:(0,n.t)("playlist-edit.form.table-heading","Dashboards"),children:(0,a.jsx)(B.JY,{onDragEnd:h,children:(0,a.jsx)(B.gL,{droppableId:"playlist-list",direction:"vertical",children:s=>(0,a.jsxs)("div",{ref:s.innerRef,...s.droppableProps,children:[(0,a.jsx)(L,{items:o,onDelete:e}),s.placeholder]})})})})};var V=t(16817),Y=t(86022);function G(o){const[e,r]=(0,m.useState)(o??[]);(0,V.A)(async()=>{for(const l of e)if(!l.dashboards){r(await(0,Y.qY)(e));return}},[e]);const h=(0,m.useCallback)(l=>{l&&r([...e,{type:"dashboard_by_uid",value:l.uid}])},[e]),s=(0,m.useCallback)(l=>{const d=l[0];if(!d||e.find(f=>f.value===d))return;const y={type:"dashboard_by_tag",value:d};r([...e,y])},[e]),c=(0,m.useCallback)((l,d)=>{if(l===d||!e[l])return;const y=Array.from(e),[f]=y.splice(l,1);y.splice(d,0,f),r(y)},[e]),i=(0,m.useCallback)(l=>{const d=e.slice();d.splice(l,1),r(d)},[e]);return{items:e,addByUID:h,addByTag:s,deleteItem:i,moveItem:c}}const H=({onSubmit:o,playlist:e})=>{const[r,h]=(0,m.useState)(!1),{name:s,interval:c,items:i}=e,l=(0,m.useMemo)(()=>()=>(0,N.getGrafanaSearcher)().tags({kind:["dashboard"]}),[]),{items:d,addByUID:y,addByTag:f,deleteItem:J,moveItem:X}=G(i),Q=D=>{h(!0),o({...D,items:d,uid:e.uid})};return(0,a.jsx)(A.l,{onSubmit:Q,validateOn:"onBlur",children:({register:D,errors:x})=>{const Z=d.length===0||Object.keys(x).length>0;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g.D,{label:(0,n.t)("playlist-edit.form.name-label","Name"),invalid:!!x.name,error:x?.name?.message,children:(0,a.jsx)(p.p,{type:"text",...D("name",{required:(0,n.t)("playlist-edit.form.name-required","Name is required")}),placeholder:(0,n.t)("playlist-edit.form.name-placeholder","Name"),defaultValue:s,"aria-label":u.Tp.pages.PlaylistForm.name})}),(0,a.jsx)(g.D,{label:(0,n.t)("playlist-edit.form.interval-label","Interval"),invalid:!!x.interval,error:x?.interval?.message,children:(0,a.jsx)(p.p,{type:"text",...D("interval",{required:(0,n.t)("playlist-edit.form.interval-required","Interval is required")}),placeholder:(0,n.t)("playlist-edit.form.interval-placeholder","5m"),defaultValue:c??"5m","aria-label":u.Tp.pages.PlaylistForm.interval})}),(0,a.jsx)(z,{items:d,deleteItem:J,moveItem:X}),(0,a.jsxs)(v.n,{label:(0,n.t)("playlist-edit.form.heading","Add dashboards"),children:[(0,a.jsx)(g.D,{label:(0,n.t)("playlist-edit.form.add-title-label","Add by title"),children:(0,a.jsx)(C.b,{id:"dashboard-picker",onChange:y},d.length)}),(0,a.jsx)(g.D,{label:(0,n.t)("playlist-edit.form.add-tag-label","Add by tag"),children:(0,a.jsx)(T.$,{isClearable:!0,tags:[],hideValues:!0,tagOptions:l,onChange:f,placeholder:(0,n.t)("playlist-edit.form.add-tag-placeholder","Select a tag")})})]}),(0,a.jsxs)(E.B,{children:[(0,a.jsx)(P.$n,{type:"submit",variant:"primary",disabled:Z,icon:r?"spinner":void 0,children:(0,a.jsx)(n.x6,{i18nKey:"playlist-edit.form.save",children:"Save"})}),(0,a.jsx)(P.z9,{variant:"secondary",href:`${b.$.appSubUrl}/playlists`,children:(0,a.jsx)(n.x6,{i18nKey:"playlist-edit.form.cancel",children:"Cancel"})})]})]})}})}},62579:(O,j,t)=>{t.r(j),t.d(j,{PlaylistNewPage:()=>v,default:()=>E});var a=t(74848),m=t(96540),u=t(12131),b=t(69444),g=t(23833),p=t(86022);const v=()=>{const[P]=(0,m.useState)((0,p.aV)()),A=async T=>{await(0,p.NF)().createPlaylist(T),u.Ny.push("/playlists")},C={text:"New playlist",subTitle:"A playlist rotates through a pre-selected list of dashboards. A playlist can be a great way to build situational awareness, or just show off your metrics to your team or visitors."};return(0,a.jsx)(b.Y,{navId:"dashboards/playlists",pageNav:C,children:(0,a.jsx)(b.Y.Contents,{children:(0,a.jsx)(g.$,{onSubmit:A,playlist:P})})})},E=v}}]);

//# sourceMappingURL=PlaylistNewPage.4dcc11f57639d4aa3a94.js.map