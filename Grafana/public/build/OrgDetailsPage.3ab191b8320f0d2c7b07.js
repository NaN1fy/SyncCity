"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1510],{39745:(N,P,e)=>{e.d(P,{A:()=>h,u:()=>T});var a=e(74848),D=e(32196),M=e(96540),y=e(97594),O=e(41987),u=e(13544),i=e(14110),U=e(32264),m=e(84167),l=e(88575),E=e(90182),v=e(60029),j=e(20333),A=e(15648),I=e(29678),b=e(55852),S=e(3911),C=e(59429),n=e(8484),g=e(74513),W=e(65615),L=e(2769);function _(){const r=g.Yj.map(t=>({value:t.code,label:t.name})).sort((t,d)=>t.value===g.wi?1:d.value===g.wi?-1:t.label.localeCompare(d.label));return[{value:"",label:(0,n.t)("common.locale.default","Default")},...r]}class T extends M.PureComponent{constructor(s){super(s),this.onSubmitForm=async t=>{if(t.preventDefault(),this.props.onConfirm?await this.props.onConfirm():!0){const{homeDashboardUID:R,theme:K,timezone:B,weekStart:p,language:x,queryHistory:z}=this.state;await this.service.update({homeDashboardUID:R,theme:K,timezone:B,weekStart:p,language:x,queryHistory:z}),window.location.reload()}},this.onThemeChanged=t=>{this.setState({theme:t.value}),t.value&&(0,L.K)(t.value,!0)},this.onTimeZoneChanged=t=>{typeof t=="string"&&this.setState({timezone:t})},this.onWeekStartChanged=t=>{this.setState({weekStart:t})},this.onHomeDashboardChanged=t=>{this.setState({homeDashboardUID:t})},this.onLanguageChanged=t=>{this.setState({language:t}),(0,i.rR)("grafana_preferences_language_changed",{toLanguage:t,preferenceType:this.props.preferenceType})},this.service=new W.W(s.resourceUri),this.state={theme:"",timezone:"",weekStart:"",language:"",queryHistory:{homeTab:""}},this.themeOptions=(0,y.k)(U.$.featureToggles.extraThemes).map(t=>({value:t.id,label:f(t)})),this.themeOptions.unshift({value:"",label:(0,n.t)("shared-preferences.theme.default-label","Default")})}async componentDidMount(){const s=await this.service.load();this.setState({homeDashboardUID:s.homeDashboardUID,theme:s.theme,timezone:s.timezone,weekStart:s.weekStart,language:s.language,queryHistory:s.queryHistory})}render(){const{theme:s,timezone:t,weekStart:d,homeDashboardUID:R,language:K}=this.state,{disabled:B}=this.props,p=o(),x=_(),z=this.themeOptions.find(c=>c.value===s)??this.themeOptions[0];return(0,a.jsxs)("form",{onSubmit:this.onSubmitForm,className:p.form,children:[(0,a.jsxs)(m.n,{label:(0,a.jsx)(n.x6,{i18nKey:"shared-preferences.title",children:"Preferences"}),disabled:B,children:[(0,a.jsx)(l.D,{label:(0,n.t)("shared-preferences.fields.theme-label","Interface theme"),children:(0,a.jsx)(E.l6,{options:this.themeOptions,value:z,onChange:this.onThemeChanged,inputId:"shared-preferences-theme-select"})}),(0,a.jsx)(l.D,{label:(0,a.jsx)(v.J,{htmlFor:"home-dashboard-select",children:(0,a.jsx)("span",{className:p.labelText,children:(0,a.jsx)(n.x6,{i18nKey:"shared-preferences.fields.home-dashboard-label",children:"Home Dashboard"})})}),"data-testid":"User preferences home dashboard drop down",children:(0,a.jsx)(C.b,{value:R,onChange:c=>this.onHomeDashboardChanged(c?.uid??""),defaultOptions:!0,isClearable:!0,placeholder:(0,n.t)("shared-preferences.fields.home-dashboard-placeholder","Default dashboard"),inputId:"home-dashboard-select"})}),(0,a.jsx)(l.D,{label:(0,n.t)("shared-dashboard.fields.timezone-label","Timezone"),"data-testid":u.Tp.components.TimeZonePicker.containerV2,children:(0,a.jsx)(j.U,{includeInternal:!0,value:t,onChange:this.onTimeZoneChanged,inputId:"shared-preferences-timezone-picker"})}),(0,a.jsx)(l.D,{label:(0,n.t)("shared-preferences.fields.week-start-label","Week start"),"data-testid":u.Tp.components.WeekStartPicker.containerV2,children:(0,a.jsx)(A.l,{value:d||"",onChange:this.onWeekStartChanged,inputId:"shared-preferences-week-start-picker"})}),(0,a.jsx)(l.D,{label:(0,a.jsxs)(v.J,{htmlFor:"locale-select",children:[(0,a.jsx)("span",{className:p.labelText,children:(0,a.jsx)(n.x6,{i18nKey:"shared-preferences.fields.locale-label",children:"Language"})}),(0,a.jsx)(I.y,{featureState:O.Ay.beta})]}),"data-testid":"User preferences language drop down",children:(0,a.jsx)(E.l6,{value:x.find(c=>c.value===K),onChange:c=>this.onLanguageChanged(c.value??""),options:x,placeholder:(0,n.t)("shared-preferences.fields.locale-placeholder","Choose language"),inputId:"locale-select"})})]}),(0,a.jsx)(b.$n,{type:"submit",variant:"primary","data-testid":u.Tp.components.UserProfile.preferencesSaveButton,children:(0,a.jsx)(n.x6,{i18nKey:"common.save",children:"Save"})})]})}}const h=T,o=(0,S.N)(()=>({labelText:(0,D.css)({marginRight:"6px"}),form:(0,D.css)({width:"100%",maxWidth:"600px"})}));function f(r){switch(r.id){case"dark":return(0,n.t)("shared.preferences.theme.dark-label","Dark");case"light":return(0,n.t)("shared.preferences.theme.light-label","Light");case"system":return(0,n.t)("shared.preferences.theme.system-label","System preference");default:return r.name}}},69047:(N,P,e)=>{e.r(P),e.d(P,{OrgDetailsPage:()=>g,default:()=>T});var a=e(74848),D=e(96540),M=e(71468),y=e(67061),O=e(69444),u=e(39745),i=e(10096),U=e(17422),m=e(31678),l=e(28444),E=e(84167),v=e(88575),j=e(10354),A=e(55852),I=e(72235);const S=({onSubmit:h,orgName:o})=>{const f=i.TP.hasPermission(m.AccessControlAction.OrgsWrite);return(0,a.jsx)(I.l,{defaultValues:{orgName:o},onSubmit:({orgName:r})=>h(r),children:({register:r})=>(0,a.jsxs)(E.n,{label:"Organization profile",disabled:!f,children:[(0,a.jsx)(v.D,{label:"Organization name",children:(0,a.jsx)(j.p,{id:"org-name-input",type:"text",...r("orgName",{required:!0})})}),(0,a.jsx)(A.$n,{type:"submit",children:"Update organization name"})]})})};var C=e(32931),n=e(10943);class g extends D.PureComponent{constructor(){super(...arguments),this.onUpdateOrganization=o=>{this.props.setOrganizationName(o),this.props.updateOrganization()},this.handleConfirm=()=>new Promise(o=>{i.lE.publish(new l.bY({title:"Confirm preferences update",text:"This will update the preferences for the whole organization. Are you sure you want to update the preferences?",yesText:"Save",yesButtonVariant:"primary",onConfirm:async()=>o(!0),onDismiss:async()=>o(!1)}))})}async componentDidMount(){await this.props.loadOrganization()}render(){const{navModel:o,organization:f}=this.props,r=Object.keys(f).length===0,s=i.TP.hasPermission(m.AccessControlAction.OrgsRead),t=i.TP.hasPermission(m.AccessControlAction.OrgsPreferencesRead),d=i.TP.hasPermission(m.AccessControlAction.OrgsPreferencesWrite);return(0,a.jsx)(O.Y,{navModel:o,children:(0,a.jsx)(O.Y.Contents,{isLoading:r,children:!r&&(0,a.jsxs)(y.B,{direction:"column",gap:3,children:[s&&(0,a.jsx)(S,{onSubmit:this.onUpdateOrganization,orgName:f.name}),t&&(0,a.jsx)(u.A,{resourceUri:"org",disabled:!d,preferenceType:"org",onConfirm:this.handleConfirm})]})})})}}function W(h){return{navModel:(0,U.tc)(h.navIndex,"org-settings"),organization:h.organization.organization}}const L={loadOrganization:C.YS,setOrganizationName:n.n,updateOrganization:C.L_},T=(0,M.connect)(W,L)(g)}}]);

//# sourceMappingURL=OrgDetailsPage.3ab191b8320f0d2c7b07.js.map