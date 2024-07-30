"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6359],{37811:(se,z,l)=>{l.d(z,{A:()=>s});function s(I){I.getRowProps.push(N=>[N,C()]),I.getHeaderGroupProps.push(N=>[N,C()]),I.getFooterGroupProps.push(N=>[N,C()]),I.getHeaderProps.push((N,{column:b})=>[N,c(b)]),I.getCellProps.push((N,{cell:b})=>[N,c(b.column)]),I.getFooterProps.push((N,{column:b})=>[N,c(b)])}s.pluginName="useCustomFlexLayout";function c(I){return{style:{flex:I.totalWidth===0?"0 0 auto":`${I.totalWidth} 0 0`}}}function C(){return{style:{display:"flex",flex:"1 0 auto"}}}},66359:(se,z,l)=>{l.d(z,{P:()=>q});var s=l(74848),c=l(32196),C=l(96540),I=l(32885),N=l(91793),b=l(10022),te=l(52622),B=l(40845),le=l(49618),ae=l(69770),ne=l(37811),oe=l(97427),re=l(68284),A=l(70255),ie=l(11261),ce=l(57875),de=l(28240),ue=l(83195),V=l(32264),me=l(19347),Y=l(10880),K=l(14578),he=l(94753),fe=l(56034),Q=l(64149),xe=l(28138),L=l(8484),X=l(84753),ve=l(66253),ge=l(28444),pe=l(40957),ye=l(25897),we=l(37390),je=l(40980),Z=l(32372),Ce=l(1819);const O=[{label:"Score",value:"score"},{label:"Fields",value:"fields"},{label:"Allowed actions",value:"allowed_actions"}];function Pe({name:e,explain:t,frame:d,row:r}){const[i,n]=(0,C.useState)(!0),[h,p]=(0,C.useState)("score"),v=(0,s.jsx)(ye.J,{title:e,icon:"info",tabs:O,activeTab:h,onChangeTab:o=>{p(o.value)}});return(0,s.jsx)(we.a,{title:v,isOpen:i,onDismiss:()=>n(!1),closeOnBackdropClick:!0,closeOnEscape:!0,children:(0,s.jsxs)(je.J,{children:[h===O[0].value&&(0,s.jsx)(Z.B,{width:"100%",height:"70vh",language:"json",showLineNumbers:!1,showMiniMap:!0,value:JSON.stringify(t,null,2),readOnly:!1}),h===O[1].value&&(0,s.jsx)("div",{children:(0,s.jsx)(Ce.e,{data:d,rowIndex:r})}),h===O[2].value&&(0,s.jsx)(Z.B,{width:"100%",height:"70vh",language:"json",showLineNumbers:!1,showMiniMap:!1,value:(()=>{const o=d.fields.find(w=>w.name==="allowed_actions")?.values?.[r],a=d.fields.find(w=>w.name==="ds_uid")?.values?.[r];return JSON.stringify({dsUids:a??[],allowedActions:o??[]},null,2)})(),readOnly:!1})]})})}const Se=175,De=200,Ne=200,Ie=(e,t,d,r,i,n,h,p,v)=>{const o=[],a=e.view.fields,w=a.uid,P=a.kind;let y=0;const S=a[e.view.dataFrame.meta?.custom?.sortBy];S&&(y=175,S.type===ie.PU.time&&(y+=25),t-=y),a.explain&&a.score&&(t-=100);let f=50;d&&r&&(f=0,o.push({id:"column-checkbox",width:f,Header:()=>{const{view:u}=e,g=d("*","*"),m=u.every(D=>d(D.kind,D.uid));return(0,s.jsx)(Y.S,{indeterminate:!m&&g,checked:m,disabled:!e,onChange:D=>{if(g)i();else for(let x=0;x<u.length;x++){const j=u.get(x);r(j.kind,j.uid)}}})},Cell:u=>{const g=w.values[u.row.index],m=P?P.values[u.row.index]:"dashboard",D=d(m,g),x=g!=null,{key:j,...E}=u.cellProps;return(0,s.jsx)("div",{...E,className:n.cell,children:(0,s.jsx)(Y.S,{disabled:!x,value:D&&x,onChange:_=>{r(m,g)}})},j)},field:w}),t-=f),f=Math.max(t*.2,300),o.push({Cell:u=>{let g=(0,c.cx)(n.nameCellStyle),m=a.name.values[u.row.index];const D=a.isDeleted?.values[u.row.index];m?.length||(m=u.row.index>=e.view.dataFrame.length?"Loading...":"Missing title",g+=" "+n.missingTitleText);const{key:x,...j}=u.cellProps;return(0,s.jsx)("div",{className:n.cell,...j,children:e.isItemLoaded(u.row.index)?D?(0,s.jsx)("span",{className:g,children:m}):(0,s.jsx)("a",{href:u.userProps.href,onClick:u.userProps.onClick,className:g,title:m,children:m}):(0,s.jsx)(A.A,{width:200})},x)},id:"column-name",field:a.name,Header:()=>(0,s.jsx)("div",{children:(0,L.t)("search.results-table.name-header","Name")}),width:f}),t-=f,e.view.fields.permanentlyDeleteDate&&W(e.view.fields.permanentlyDeleteDate)&&a.permanentlyDeleteDate?(f=De,o.push(He(e,a.permanentlyDeleteDate,f,n)),t-=f):(f=Se,o.push(Le(e,a.kind,a.panel_type,f,n)),t-=f),a.ds_uid&&p&&(f=Math.min(t/2.5,Ne),o.push(Te(a.ds_uid,f,n.typeIcon,n.datasourceItem,n.invalidDatasourceItem,p)),t-=f);const k=!v||W(e.view.fields.tags),$=e.view.dataFrame.meta?.custom;if($?.locationInfo&&t>0&&(f=k?Math.max(t/1.75,300):t,t-=f,o.push({Cell:u=>{const g=(a.location?.values[u.row.index]??"").split("/"),{key:m,...D}=u.cellProps;return(0,s.jsx)("div",{...D,className:n.cell,children:e.isItemLoaded(u.row.index)?(0,s.jsx)("div",{className:n.locationContainer,children:g.map(x=>{let j=$.locationInfo[x];return!j&&x==="general"&&(j={kind:"folder",url:"/dashboards",name:"Dashboards"}),j?(0,s.jsxs)("a",{href:j.url,className:n.locationItem,children:[(0,s.jsx)(K.I,{name:(0,pe.TM)(j.kind)}),(0,s.jsx)(he.E,{variant:"body",truncate:!0,children:j.name})]},x):(0,s.jsx)("span",{children:x},x)})}):(0,s.jsx)(A.A,{width:150})},m)},id:"column-location",field:a.location??a.url,Header:(0,L.t)("search.results-table.location-header","Location"),width:f})),t>0&&k&&o.push(Me(e,a.tags,t,n,h)),S&&y){const u=S.display??(0,ce.J)({field:S,theme:V.$.theme2});o.push({Header:(0,de.Ct)(S),Cell:g=>{const{key:m,...D}=g.cellProps;return(0,s.jsx)("div",{...D,className:n.cell,children:Re({sortField:S,getDisplay:u,index:g.row.index,kind:a.kind})},m)},id:"column-sort-field",field:S,width:y})}if(a.explain&&a.score){const u=a.score.values,g=m=>{xe.A.publish(new ge.S8({component:Pe,props:{name:a.name.values[m],explain:a.explain.values[m],frame:e.view.dataFrame,row:m}}))};o.push({Header:()=>(0,s.jsx)("div",{className:n.sortedHeader,children:"Score"}),Cell:m=>{const{key:D,...x}=m.cellProps;return(0,s.jsx)("div",{...x,className:(0,c.cx)(n.cell,n.explainItem),onClick:()=>g(m.row.index),children:u[m.row.index]},D)},id:"column-score-field",field:a.score,width:100})}return o};function W(e){for(let t=0;t<e.values.length;t++)if(e.values[t]!=null)return!0;return!1}function Te(e,t,d,r,i,n){const h=(0,me.l)();return{id:"column-datasource",field:e,Header:(0,L.t)("search.results-table.datasource-header","Data source"),Cell:p=>{const v=e.values[p.row.index];if(!v?.length)return null;const{key:o,...a}=p.cellProps;return(0,s.jsx)("div",{...a,className:(0,c.cx)(r),children:v.map((w,P)=>{const y=h.getInstanceSettings(w),S=y?.meta?.info?.logos?.small;return S?(0,s.jsxs)("span",{onClick:f=>{f.stopPropagation(),f.preventDefault(),n(y.uid)},children:[(0,s.jsx)("img",{src:S,alt:"",width:14,height:14,title:y.type,className:d}),y.name]},P):(0,s.jsx)("span",{className:i,children:w},P)})},o)},width:t}}function He(e,t,d,r){return{id:"column-delete-age",field:t,width:d,Header:(0,L.t)("search.results-table.deleted-remaining-header","Time remaining"),Cell:i=>{const n=i.row.index,h=t.values[n],{key:p,...v}=i.cellProps;if(!h||!e.isItemLoaded(i.row.index))return(0,s.jsx)("div",{...v,className:(0,c.cx)(r.cell,r.typeCell),children:(0,s.jsx)(A.A,{width:100})},p);const o=be(new Date,h),w=!Object.values(o).some(P=>P>0)?(0,L.t)("search.results-table.deleted-less-than-1-min","< 1 min"):(0,X.a)(o,{style:"long"});return(0,s.jsx)("div",{...v,className:(0,c.cx)(r.cell,r.typeCell),children:(0,s.jsx)(fe.m,{content:(0,X.Y)(h,{dateStyle:"medium",timeStyle:"short"}),children:(0,s.jsx)("span",{children:w})})},p)}}}function Le(e,t,d,r,i){return{id:"column-type",field:t??d,Header:(0,L.t)("search.results-table.type-header","Type"),Cell:n=>{const h=n.row.index,p=t?.values[h]??"dashboard";let v="apps",o="Dashboard";if(p)switch(o=p,o){case"dashboard":o=(0,L.t)("search.results-table.type-dashboard","Dashboard");break;case"folder":v="folder",o=(0,L.t)("search.results-table.type-folder","Folder");break;case"panel":v=`${ve.Ip.panel}`;const P=d.values[h];if(P){o=P;const y=V.$.panels[o];if(y?.name)o=y.name;else switch(P){case"row":o="Row",v="bars";break;case"singlestat":o="Singlestat";break;default:v="question-circle"}}break}const{key:a,...w}=n.cellProps;return(0,s.jsx)("div",{...w,className:(0,c.cx)(i.cell,i.typeCell),children:e.isItemLoaded(n.row.index)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(K.I,{name:v,size:"sm",title:o,className:i.typeIcon}),o]}):(0,s.jsx)(A.A,{width:100})},a)},width:r}}function Me(e,t,d,r,i){return{Cell:n=>{const h=t.values[n.row.index],{key:p,...v}=n.cellProps;return(0,s.jsx)("div",{...v,className:r.cell,children:e.isItemLoaded(n.row.index)?(0,s.jsx)(s.Fragment,{children:h?(0,s.jsx)(Q.L,{className:r.tagList,tags:h,onClick:i}):null}):(0,s.jsx)(Q.L.Skeleton,{})},p)},id:"column-tags",field:t,Header:(0,L.t)("search.results-table.tags-header","Tags"),width:d}}function Re({kind:e,sortField:t,index:d,getDisplay:r}){const i=t.values[d];return["folder","panel"].includes(e.values[d])&&i===0?"-":(0,ue.cN)(r(i))}function be(e,t){let{years:d=0,months:r=0,days:i=0,hours:n=0,minutes:h=0}=(0,re.F)({start:e,end:t});return d>0?{years:d}:r>0?{months:r}:i>0?{days:i}:n>0?{hours:n}:{minutes:h}}const G=36,q=C.memo(({response:e,width:t,height:d,selection:r,selectionToggle:i,clearSelection:n,onTagSelected:h,onDatasourceChange:p,onClickItem:v,keyboardEvents:o})=>{const a=(0,B.of)(Fe),w=(0,B.of)(ke),P=(0,ae.k)((0,B.$j)(),te.qM.Sm),y=(0,C.useRef)(null),[S,f]=(0,C.useState)(null),J=(0,oe.n)(o,0,e),k=(0,C.useMemo)(()=>e?.view?.dataFrame.fields.length?Array(e.totalRows).fill(0):[],[e]);(0,C.useEffect)(()=>{y.current&&y.current.resetloadMoreItemsCache(),S&&S.scrollTo(0)},[k,S]);const $=(0,C.useMemo)(()=>Ie(e,t,r,i,n,w,h,p,e.view?.length>=e.totalRows),[e,t,w,r,i,n,h,p]),u=(0,C.useMemo)(()=>({columns:$,data:k}),[$,k]),{getTableProps:g,getTableBodyProps:m,headerGroups:D,rows:x,prepareRow:j}=(0,I.useTable)(u,ne.A),E=(0,C.useCallback)(async(T,F)=>{await e.loadMoreItems(T,F);const H=r?.("*","*");if(!(!i||!r||!H))for(let R=T;R<e.view.length;R++){const M=e.view.get(R);r(M.kind,M.uid)||i(M.kind,M.uid)}},[e,r,i]),_=(0,C.useCallback)(({index:T,style:F})=>{const H=x[T];j(H);const R=e.view.fields.url?.values[T];let M=a.rowContainer;T===J.y&&(M+=" "+a.selectedRow);const{key:U,...$e}=H.getRowProps({style:F});return(0,s.jsx)("div",{...$e,className:M,children:H.cells.map((Ae,ee)=>(0,s.jsx)(le.n,{tableStyles:P,cell:Ae,columnIndex:ee,columnCount:H.cells.length,userProps:{href:R,onClick:v},frame:e.view.dataFrame},ee))},U)},[x,j,e.view.fields.url?.values,J,a,P,v,e.view.dataFrame]);return x.length?(0,s.jsxs)("div",{...g(),"aria-label":"Search results table",role:"table",children:[D.map(T=>{const{key:F,...H}=T.getHeaderGroupProps({style:{width:t}});return(0,s.jsx)("div",{...H,className:a.headerRow,children:T.headers.map(R=>{const{key:M,...U}=R.getHeaderProps();return(0,s.jsx)("div",{...U,role:"columnheader",className:a.headerCell,children:R.render("Header")},M)})},F)}),(0,s.jsx)("div",{...m(),children:(0,s.jsx)(b.A,{ref:y,isItemLoaded:e.isItemLoaded,itemCount:x.length,loadMoreItems:E,children:({onItemsRendered:T,ref:F})=>(0,s.jsx)(N.Y1,{ref:H=>{F(H),f(H)},onItemsRendered:T,height:d-G,itemCount:x.length,itemSize:P.rowHeight,width:t,style:{overflow:"hidden auto"},children:_})})})]}):(0,s.jsx)("div",{className:a.noData,children:"No data"})});q.displayName="SearchResultsTable";const Fe=e=>{const t=e.colors.emphasize(e.colors.background.primary,.03);return{noData:(0,c.css)`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    `,headerCell:(0,c.css)`
      align-items: center;
      display: flex;
      overflo: hidden;
      padding: ${e.spacing(1)};
    `,headerRow:(0,c.css)`
      background-color: ${e.colors.background.secondary};
      display: flex;
      gap: ${e.spacing(1)};
      height: ${G}px;
    `,selectedRow:(0,c.css)`
      background-color: ${t};
      box-shadow: inset 3px 0px ${e.colors.primary.border};
    `,rowContainer:(0,c.css)`
      display: flex;
      gap: ${e.spacing(1)};
      height: ${G}px;
      label: row;
      &:hover {
        background-color: ${t};
      }

      &:not(:hover) div[role='cell'] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `}},ke=e=>({cell:(0,c.css)({padding:e.spacing(1),overflow:"hidden",display:"flex",alignItems:"center"}),nameCellStyle:(0,c.css)`
      overflow: hidden;
      text-overflow: ellipsis;
      user-select: text;
      white-space: nowrap;
    `,typeCell:(0,c.css)({gap:e.spacing(.5)}),typeIcon:(0,c.css)`
      fill: ${e.colors.text.secondary};
    `,datasourceItem:(0,c.css)`
      span {
        &:hover {
          color: ${e.colors.text.link};
        }
      }
    `,missingTitleText:(0,c.css)`
      color: ${e.colors.text.disabled};
      font-style: italic;
    `,invalidDatasourceItem:(0,c.css)`
      color: ${e.colors.error.main};
      text-decoration: line-through;
    `,locationContainer:(0,c.css)({display:"flex",flexWrap:"nowrap",gap:e.spacing(1),overflow:"hidden"}),locationItem:(0,c.css)`
      align-items: center;
      color: ${e.colors.text.secondary};
      display: flex;
      flex-wrap: nowrap;
      gap: 4px;
      overflow: hidden;
    `,explainItem:(0,c.css)`
      cursor: pointer;
    `,tagList:(0,c.css)`
      justify-content: flex-start;
      flex-wrap: nowrap;
    `})}}]);

//# sourceMappingURL=6359.5e40810bb47a57590e4a.js.map