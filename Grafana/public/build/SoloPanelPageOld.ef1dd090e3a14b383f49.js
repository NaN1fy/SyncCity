"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4492],{55087:(x,r,t)=>{t.r(r),t.d(r,{SoloPanel:()=>d,SoloPanelPage:()=>i,default:()=>O});var e=t(74848),h=t(32196),u=t(96540),P=t(71468),_=t(70713),E=t(40845),c=t(42418),p=t(76888),D=t(39569),f=t(20470);const g=o=>({dashboard:o.dashboard.getModel()}),m={initDashboard:f.vR},M=(0,P.connect)(g,m);class i extends u.Component{constructor(){super(...arguments),this.state={panel:null,notFound:!1}}static{this.contextType=p.YE}componentDidMount(){const{match:n,route:a}=this.props;this.props.initDashboard({urlSlug:n.params.slug,urlUid:n.params.uid,urlType:n.params.type,routeName:a.routeName,fixUrl:!1,keybindingSrv:this.context.keybindings})}getPanelId(){return parseInt(this.props.queryParams.panelId??"0",10)}componentDidUpdate(n){const{dashboard:a}=this.props;if(a&&(!n.dashboard||n.dashboard.uid!==a.uid)){const s=a.getPanelByUrlId(this.props.queryParams.panelId);if(!s){this.setState({notFound:!0});return}s&&a.exitViewPanel(s),this.setState({panel:s}),a.initViewPanel(s)}}render(){return(0,e.jsx)(d,{dashboard:this.props.dashboard,notFound:this.state.notFound,panel:this.state.panel,panelId:this.getPanelId(),timezone:this.props.queryParams.timezone})}}const d=({dashboard:o,notFound:n,panel:a,panelId:s,timezone:y})=>{const T=(0,E.of)(I);return n?(0,e.jsx)(c.F,{severity:"error",title:`Panel with id ${s} not found`}):!a||!o?(0,e.jsx)("div",{children:"Loading & initializing dashboard"}):(0,e.jsx)("div",{className:T.container,children:(0,e.jsx)(_.Ay,{children:({width:l,height:v})=>l===0?null:(0,e.jsx)(D.L,{stateKey:a.key,width:l,height:v,dashboard:o,panel:a,isEditing:!1,isViewing:!0,lazy:!1,timezone:y,hideMenu:!0})})})},O=M(i),I=o=>({container:(0,h.css)({position:"fixed",bottom:0,right:0,margin:0,left:0,top:0,width:"100%",height:"100%"})})}}]);

//# sourceMappingURL=SoloPanelPageOld.ef1dd090e3a14b383f49.js.map