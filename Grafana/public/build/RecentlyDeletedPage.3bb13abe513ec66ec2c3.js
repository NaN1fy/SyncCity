"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6299],{10421:(Y,x,e)=>{e.r(x),e.d(x,{default:()=>q});var a=e(74848),P=e(32196),u=e(96540),D=e(70713),A=e(40845),n=e(67647),g=e(69444),r=e(8484),y=e(19519),I=e(24439),l=e(31678),i=e(53477),_=e(39788);class j extends _.lC{setStateAndDoSearch(d){const C=d.sort||this.state.sort||localStorage.getItem(i.w7)||void 0,h=d.query??this.state.query,L=d.tag??this.state.tag,M=h.length===0&&L.length===0;this.setState({sort:C,result:M?void 0:this.state.result,...d}),this.updateLocation({query:this.state.query.length===0?null:this.state.query,tag:this.state.tag,datasource:this.state.datasource,panel_type:this.state.panel_type,starred:this.state.starred?this.state.starred:null,sort:this.state.sort}),this.hasSearchFilters()&&this.doSearchWithDebounce()}}let p;function T(){return p||(p=new j({..._.ue,includePanels:!1,deleted:!0})),p}function s(){const c=T();return[c.useState(),c]}var m=e(14110),t=e(67061),o=e(55852),S=e(28138),E=e(28444),v=e(55314),O=e(37690),F=e(96374),B=e(94753);const K=({onConfirm:c,onDismiss:d,selectedDashboards:C,isLoading:h,...L})=>{const M=C.length,W=async()=>{(0,m.rR)("grafana_delete_permanently_confirm_clicked",{item_counts:{dashboard:M}}),await c(),d()};return(0,a.jsx)(F.u,{body:(0,a.jsx)(B.E,{element:"p",children:(0,a.jsxs)(r.x6,{i18nKey:"recently-deleted.permanently-delete-modal.text",count:M,children:["This action will delete ",{numberOfDashboards:M}," dashboards."]})}),title:(0,r.t)("recently-deleted.permanently-delete-modal.title","Permanently Delete Dashboards"),confirmationText:(0,r.t)("recently-deleted.permanently-delete-modal.confirm-text","Delete"),confirmText:h?(0,r.t)("recently-deleted.permanently-delete-modal.delete-loading","Deleting..."):(0,r.t)("recently-deleted.permanently-delete-modal.delete-button","Delete"),confirmButtonVariant:"destructive",onConfirm:W,onDismiss:d,...L})},N=({onConfirm:c,onDismiss:d,selectedDashboards:C,isLoading:h,...L})=>{const M=C.length,W=async()=>{(0,m.rR)("grafana_restore_confirm_clicked",{item_counts:{dashboard:M}}),await c(),d()};return(0,a.jsx)(F.u,{body:(0,a.jsx)(B.E,{element:"p",children:(0,a.jsxs)(r.x6,{i18nKey:"recently-deleted.restore-modal.text",count:M,children:["This action will restore ",{numberOfDashboards:M}," dashboards."]})}),confirmText:h?(0,r.t)("recently-deleted.restore-modal.restore-loading","Restoring..."):(0,r.t)("recently-deleted.restore-modal.restore-button","Restore"),confirmButtonVariant:"primary",onDismiss:d,onConfirm:W,title:(0,r.t)("recently-deleted.restore-modal.title","Restore Dashboards"),...L})};function V(){const c=(0,l.useDispatch)(),d=(0,O.xK)(),[,C]=s(),[h,{isLoading:L}]=(0,v.vR)(),[M,{isLoading:W}]=(0,v.D$)(),U=(0,u.useMemo)(()=>Object.entries(d.dashboard).filter(([b,z])=>z).map(([b])=>b),[d.dashboard]),G=()=>{c((0,O.cT)({isSelected:!1,folderUID:void 0})),C.doSearchWithDebounce()},H=async()=>{const b=C.state.result?.view.toArray();if(!b)return;const z=U.map(Z=>h({dashboardUID:Z}));await Promise.all(z);const w=new Set;for(const Z of U){const J=b.find(ne=>ne.uid===Z);if(!J)continue;const se=J.location===i.TF?void 0:J.location;w.add(se)}c((0,O.xN)(Array.from(w))),G()},ee=async()=>{const b=U.map(z=>M({dashboardUID:z}));await Promise.all(b),G()},te=()=>{(0,m.rR)("grafana_restore_clicked",{item_counts:{dashboard:U.length}}),S.A.publish(new E.S8({component:N,props:{selectedDashboards:U,onConfirm:H,isLoading:L}}))},ae=()=>{(0,m.rR)("grafana_delete_permanently_clicked",{item_counts:{dashboard:U.length}}),S.A.publish(new E.S8({component:K,props:{selectedDashboards:U,onConfirm:ee,isLoading:W}}))};return(0,a.jsxs)(t.B,{gap:1,children:[(0,a.jsx)(o.$n,{onClick:te,variant:"secondary",children:(0,a.jsx)(r.x6,{i18nKey:"recently-deleted.buttons.restore",children:"Restore"})}),(0,a.jsx)(o.$n,{onClick:ae,variant:"destructive",children:(0,a.jsx)(r.x6,{i18nKey:"recently-deleted.buttons.delete",children:"Delete permanently"})})]})}var Q=e(69529);const f=({searchState:c})=>{const d=!!(c.query||c.tag.length);return(0,a.jsx)(Q.p,{message:d?(0,r.t)("recently-deleted.page.no-search-result","No results found for your query"):(0,r.t)("recently-deleted.page.no-deleted-dashboards","You haven't deleted any dashboards recently."),variant:d?"not-found":"completed",role:"alert",children:(0,a.jsx)(r.x6,{i18nKey:"recently-deleted.page.no-deleted-dashboards-text",children:"When you delete a dashboard, it will appear here for 30 days before being permanently deleted. Your organization administrator can restore recently-deleted dashboards."})})};var R=e(2960),$=e(49904);const X=(0,u.memo)(()=>{const c=(0,l.useDispatch)(),d=(0,A.of)(k),[C,h]=s(),L=(0,O.QE)(),{canEditFolders:M,canEditDashboards:W}=(0,$.N)(),U=M||W;return(0,u.useEffect)(()=>{h.initStateFromUrl(void 0),c((0,O.cT)({isSelected:!1,folderUID:void 0}))},[c,h]),(0,a.jsx)(g.Y,{navId:"dashboards/recently-deleted",children:(0,a.jsxs)(g.Y.Contents,{className:d.pageContents,children:[(0,a.jsx)("div",{children:(0,a.jsx)(n.Z,{placeholder:(0,r.t)("recentlyDeleted.filter.placeholder","Search for dashboards"),value:C.query,escapeRegex:!1,onChange:h.onQueryChange})}),L?(0,a.jsx)(V,{}):(0,a.jsx)("div",{className:d.filters,children:(0,a.jsx)(y.bj,{state:C,getTagOptions:h.getTagOptions,getSortOptions:(0,I.getGrafanaSearcher)().getSortOptions,sortPlaceholder:(0,I.getGrafanaSearcher)().sortPlaceholder,onLayoutChange:h.onLayoutChange,onSortChange:h.onSortChange,onTagFilterChange:h.onTagFilterChange,onDatasourceChange:h.onDatasourceChange,onPanelTypeChange:h.onPanelTypeChange,onSetIncludePanels:h.onSetIncludePanels})}),(0,a.jsx)("div",{className:d.subView,children:(0,a.jsx)(D.Ay,{children:({width:G,height:H})=>(0,a.jsx)(R.Q,{canSelect:U,width:G,height:H,searchStateManager:h,searchState:C,emptyState:(0,a.jsx)(f,{searchState:C})})})})]})})}),k=c=>({pageContents:(0,P.css)({display:"flex",flexDirection:"column",gap:c.spacing(1),height:"100%"}),subView:(0,P.css)({height:"100%"}),filters:(0,P.css)({display:"none",[c.breakpoints.up("md")]:{display:"block"}})});X.displayName="RecentlyDeletedPage";const q=X},2960:(Y,x,e)=>{e.d(x,{Q:()=>j});var a=e(74848),P=e(96540),u=e(78368),D=e(14236),A=e(69529),n=e(55852),g=e(8484),r=e(97427),y=e(66359),I=e(31678),l=e(37690);const i=25,_={view:new u.R((0,D.Vc)({fields:[{name:"uid",display:!0,values:Array(i).fill(null)},{name:"kind",display:!0,values:Array(i).fill("dashboard")},{name:"name",display:!0,values:Array(i).fill("")},{name:"location",display:!0,values:Array(i).fill("")},{name:"tags",display:!0,values:Array(i).fill([])}],meta:{custom:{locationInfo:[]}}})),loadMoreItems:()=>Promise.resolve(),isItemLoaded:()=>!1,totalRows:i};function j({width:T,height:s,canSelect:m,searchState:t,searchStateManager:o,emptyState:S}){const E=(0,I.useDispatch)(),v=(0,I.useSelector)(f=>f.browseDashboards.selectedItems),O=(0,l.QE)(),{keyboardEvents:F}=(0,r.d)(),B=t.result??_,K=(0,P.useCallback)((f,R)=>f?f==="*"&&R==="*"?O:f==="*"?!1:v[p(f)][R]??!1:!1,[v,O]),N=(0,P.useCallback)(()=>{E((0,l.cT)({isSelected:!1,folderUID:void 0}))},[E]),V=(0,P.useCallback)((f,R)=>{const $=!K(f,R);E((0,l.t$)({item:{kind:p(f),uid:R},isSelected:$}))},[K,E]);if(B.totalRows===0){const f=S??(0,a.jsx)(A.p,{button:(0,a.jsx)(n.$n,{variant:"secondary",onClick:o.onClearSearchAndFilters,children:(0,a.jsx)(g.x6,{i18nKey:"browse-dashboards.no-results.clear",children:"Clear search and filters"})}),message:(0,g.t)("browse-dashboards.no-results.text","No results found for your query"),variant:"not-found",role:"alert"});return(0,a.jsx)("div",{style:{width:T},children:f})}const Q={response:B,selection:m?K:void 0,selectionToggle:m?V:void 0,clearSelection:N,width:T,height:s,onTagSelected:o.onAddTag,keyboardEvents:F,onDatasourceChange:t.datasource?o.onDatasourceChange:void 0,onClickItem:o.onSearchItemClicked};return(0,a.jsx)(y.P,{...Q})}function p(T){switch(T){case"folder":return"folder";case"dashboard":return"dashboard";case"panel":return"panel"}throw new Error("Unsupported kind"+T)}},49904:(Y,x,e)=>{e.d(x,{N:()=>A});var a=e(32264),P=e(10096),u=e(31678);function D(n,g){return g?P.TP.hasPermissionInMetadata(n,g):P.TP.hasPermission(n)}function A(n){const g=D(u.AccessControlAction.DashboardsCreate,n),r=!!((!n||a.$.featureToggles.nestedFolders)&&D(u.AccessControlAction.FoldersCreate)),y=D(u.AccessControlAction.FoldersDelete,n),I=D(u.AccessControlAction.DashboardsWrite,n),l=D(u.AccessControlAction.FoldersWrite,n),i=D(u.AccessControlAction.FoldersPermissionsWrite,n),_=D(u.AccessControlAction.FoldersPermissionsRead,n);return{canCreateDashboards:g,canCreateFolders:r,canDeleteFolders:y,canEditDashboards:I,canEditFolders:l,canSetPermissions:i,canViewPermissions:_}}},19519:(Y,x,e)=>{e.d(x,{bj:()=>p});var a=e(74848),P=e(32196),u=e(32264),D=e(40845),A=e(67061),n=e(10880),g=e(55852),r=e(94354),y=e(73725),I=e(99818),l=e(8484),i=e(64161);function _(){return[{value:i.P.Folders,icon:"folder",description:(0,l.t)("search.actions.view-as-folders","View by folders")},{value:i.P.List,icon:"list-ul",description:(0,l.t)("search.actions.view-as-list","View as list")}]}function j(s){const m=s.layout??i.P.Folders;return m===i.P.Folders&&(s.query||s.sort||s.starred||s.tag.length>0)?i.P.List:m}const p=({state:s,showStarredFilter:m,showLayout:t,sortPlaceholder:o,onLayoutChange:S,onSortChange:E,onStarredFilterChange:v=()=>{},onTagFilterChange:O,getTagOptions:F,getSortOptions:B,onDatasourceChange:K,onPanelTypeChange:N,onSetIncludePanels:V})=>{const Q=(0,D.of)(T),f=j(s),R=s.tag.length||s.starred||s.query||s.datasource||s.panel_type?[i.P.Folders]:[];return(0,a.jsxs)(A.B,{justifyContent:"space-between",alignItems:"center",children:[(0,a.jsxs)(A.B,{gap:2,alignItems:"center",children:[(0,a.jsx)(I.$,{isClearable:!1,tags:s.tag,tagOptions:F,onChange:O}),u.$.featureToggles.panelTitleSearch&&(0,a.jsx)(n.S,{"data-testid":"include-panels",disabled:f===i.P.Folders,value:s.includePanels,onChange:()=>V(!s.includePanels),label:(0,l.t)("search.actions.include-panels","Include panels")}),m&&(0,a.jsx)("div",{className:Q.checkboxWrapper,children:(0,a.jsx)(n.S,{label:(0,l.t)("search.actions.starred","Starred"),onChange:v,value:s.starred})}),s.datasource&&(0,a.jsx)(g.$n,{icon:"times",variant:"secondary",onClick:()=>K(void 0),children:(0,a.jsxs)(l.x6,{i18nKey:"search.actions.remove-datasource-filter",children:["Datasource: ",{datasource:s.datasource}]})}),s.panel_type&&(0,a.jsxs)(g.$n,{icon:"times",variant:"secondary",onClick:()=>N(void 0),children:["Panel: ",s.panel_type]})]}),(0,a.jsxs)(A.B,{gap:2,children:[t&&(0,a.jsx)(r.z,{options:_(),disabledOptions:R,onChange:S,value:f}),(0,a.jsx)(y.r,{onChange:$=>E($?.value),value:s.sort,getSortOptions:B,placeholder:o||(0,l.t)("search.actions.sort-placeholder","Sort"),isClearable:!0})]})]})};p.displayName="ActionRow";const T=s=>({checkboxWrapper:(0,P.css)({label:{lineHeight:"1.2"}})})},39788:(Y,x,e)=>{e.d(x,{ET:()=>s,lC:()=>j,ue:()=>l});var a=e(2543),P=e.n(a),u=e(12131),D=e(2619),A=e(33390),n=e(53477),g=e(6204),r=e(24439),y=e(64161),I=e(16757);const l={query:"",tag:[],starred:!1,layout:y.P.Folders,sort:void 0,prevSort:void 0,eventTrackingNamespace:"dashboard_search",deleted:!1},i={sort:null,starred:null,query:null,tag:null,layout:null},_=()=>localStorage.getItem(n.YU)===y.P.List?y.P.List:y.P.Folders;class j extends D.Q{constructor(){super(...arguments),this.updateLocation=(0,a.debounce)(t=>u.Ny.partial(t,!0),300),this.doSearchWithDebounce=(0,a.debounce)(()=>this.doSearch(),300),this.lastSearchTimestamp=0,this.onCloseSearch=()=>{this.updateLocation({search:null,folder:null,...i})},this.onClearSearchAndFilters=()=>{this.setStateAndDoSearch({query:"",datasource:void 0,tag:[],panel_type:void 0,starred:void 0,sort:void 0})},this.onQueryChange=t=>{this.setStateAndDoSearch({query:t})},this.onRemoveTag=t=>{this.setStateAndDoSearch({tag:this.state.tag.filter(o=>o!==t)})},this.onTagFilterChange=t=>{this.setStateAndDoSearch({tag:t})},this.onAddTag=t=>{this.state.tag&&this.state.tag.includes(t)||this.setStateAndDoSearch({tag:[...this.state.tag,t]})},this.onDatasourceChange=t=>{this.setStateAndDoSearch({datasource:t})},this.onPanelTypeChange=t=>{this.setStateAndDoSearch({panel_type:t})},this.onStarredFilterChange=t=>{const o=t.currentTarget.checked;this.setStateAndDoSearch({starred:o})},this.onClearStarred=()=>{this.setStateAndDoSearch({starred:!1})},this.onSetStarred=t=>{t!==this.state.starred&&this.setStateAndDoSearch({starred:t})},this.onSortChange=t=>{t?localStorage.setItem(n.w7,t):localStorage.removeItem(n.w7),this.state.layout===y.P.Folders?this.setStateAndDoSearch({sort:t,layout:y.P.List}):this.setStateAndDoSearch({sort:t})},this.onLayoutChange=t=>{localStorage.setItem(n.YU,t),this.state.sort&&t===y.P.Folders?this.setStateAndDoSearch({layout:t,prevSort:this.state.sort,sort:void 0}):this.setStateAndDoSearch({layout:t,sort:this.state.prevSort})},this.onSetIncludePanels=t=>{this.setStateAndDoSearch({includePanels:t}),A.A.set(n.d7,t)},this.getTagOptions=()=>{const t=this.lastQuery??{kind:["dashboard","folder"],query:"*"};return(0,r.getGrafanaSearcher)().tags(t)},this.onSearchItemClicked=t=>{(0,g.MK)(this.state.eventTrackingNamespace,{layout:this.state.layout,starred:this.state.starred,sortValue:this.state.sort,query:this.state.query,tagCount:this.state.tag?.length,includePanels:this.state.includePanels,deleted:this.state.deleted})},this.onReportSearchUsage=()=>{(0,g.Pf)(this.state.eventTrackingNamespace,{layout:this.state.layout,starred:this.state.starred,sortValue:this.state.sort,query:this.state.query,tagCount:this.state.tag?.length,includePanels:this.state.includePanels,deleted:this.state.deleted})}}initStateFromUrl(t,o=!0){const S=(0,I.N1)(u.Ny.getSearchObject());(S.query||S.datasource||S.panel_type)&&(S.layout=y.P.List);const E=_(),v=localStorage.getItem(n.w7)??void 0,O=E===y.P.List?S.sort||v:null;this.setState({...l,...S,layout:E,sort:O??l.sort,prevSort:v,folderUid:t,eventTrackingNamespace:t?"manage_dashboards":"dashboard_search",deleted:this.state.deleted}),o&&this.hasSearchFilters()&&this.doSearch()}setStateAndDoSearch(t){const o=t.sort||this.state.sort||localStorage.getItem(n.w7)||void 0;this.setState({sort:o,...t}),this.updateLocation({query:this.state.query.length===0?null:this.state.query,tag:this.state.tag,datasource:this.state.datasource,panel_type:this.state.panel_type,starred:this.state.starred?this.state.starred:null,sort:this.state.sort}),this.hasSearchFilters()&&this.doSearchWithDebounce()}hasSearchFilters(){return!!(this.state.query||this.state.tag.length||this.state.starred||this.state.panel_type||this.state.sort||this.state.deleted||this.state.layout===y.P.List)}getSearchQuery(){const t={query:this.state.query,tags:this.state.tag,ds_uid:this.state.datasource,panel_type:this.state.panel_type,location:this.state.folderUid,sort:this.state.sort,explain:this.state.explain,withAllowedActions:this.state.explain,starred:this.state.starred,deleted:this.state.deleted};return t.sort?.length&&!t.sort.includes("name")&&(t.kind=["dashboard","folder"]),t.query?.length||(t.query="*",t.location||(t.kind=["dashboard","folder"])),!this.state.includePanels&&!t.kind&&(t.kind=["dashboard","folder"]),t.panel_type?.length&&(t.kind=["panel"]),t}doSearch(){const t={layout:this.state.layout,starred:this.state.starred,sortValue:this.state.sort,query:this.state.query,tagCount:this.state.tag?.length,includePanels:this.state.includePanels,deleted:this.state.deleted};(0,g.J$)(this.state.eventTrackingNamespace,t),this.lastQuery=this.getSearchQuery(),this.setState({loading:!0});const o=(0,r.getGrafanaSearcher)(),S=Date.now();(this.state.starred?o.starred(this.lastQuery):o.search(this.lastQuery)).then(v=>{S>this.lastSearchTimestamp&&(this.setState({result:v,loading:!1}),this.lastSearchTimestamp=S)}).catch(v=>{(0,g.KZ)(this.state.eventTrackingNamespace,{...t,error:v?.message}),this.setState({loading:!1})})}}let p;function T(){if(!p){const t=localStorage.getItem(n.YU)??l.layout;let o=A.A.getBool(n.d7,!0);o&&(o=!1),p=new j({...l,layout:t,includePanels:o})}return p}function s(){const m=T();return[m.useState(),m]}}}]);

//# sourceMappingURL=RecentlyDeletedPage.3bb13abe513ec66ec2c3.js.map