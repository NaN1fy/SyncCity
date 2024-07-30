"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9981],{32429:(se,R,s)=>{s.r(R),s.d(R,{default:()=>We});var e=s(74848),x=s(32196),O=s(2543),f=s(96540),j=s(14110),F=s(17172),ae=s(91605),I=s(55852),P=s(14578),J=s(39558),N=s(42418),ie=s(48840),le=s(19384),E=s(40845),ce=s(39938),Y=s(69444),de=s(10096),ue=s(25249),t=s(8484),fe=s(31678),me=s(52494),xe=s(25469),g=s(49785);const Z=(0,f.createContext)(void 0);function ge(o){const[r,n]=(0,f.useState)(0),{pages:a,onSubmit:i,children:d}=o;return(0,e.jsx)(Z.Provider,{value:{currentPage:r,CurrentPageComponent:a[r],isLastPage:r===a.length-1,nextPage:()=>n(r+1),prevPage:()=>n(r-1),onSubmit:i},children:d})}const H=()=>{const o=(0,f.useContext)(Z);if(!o)throw new Error("useWizardContext must be used within a WizardContextProvider");return o};function he(o){const{navigation:r}=o,{handleSubmit:n}=(0,g.xW)(),{CurrentPageComponent:a,isLastPage:i,nextPage:d,onSubmit:l}=H(),c=r;return(0,e.jsxs)("form",{onSubmit:n(u=>{i?l(u):d()}),children:[(0,e.jsx)(a,{}),(0,e.jsx)(c,{})]})}function G(o){const{defaultValues:r,pages:n,onSubmit:a,navigation:i}=o,d=(0,g.mN)({defaultValues:r});return(0,e.jsx)(g.Op,{...d,children:(0,e.jsx)(ge,{pages:n,onSubmit:a,children:(0,e.jsx)(he,{navigation:i})})})}var B=s(40511),L=s(84167),y=s(88575),V=s(10354),pe=s(21744);const X=(0,f.createContext)({loading:!1,correlation:void 0,readOnly:!1}),q=o=>{const{data:r,children:n}=o;return(0,e.jsx)(X.Provider,{value:r,children:n})},A=()=>(0,f.useContext)(X),z=(o,r)=>r?`${o}_${r.sourceUID}-${r.uid}`:o,ve=o=>({label:(0,x.css)`
    max-width: ${o.spacing(80)};
  `,description:(0,x.css)`
    max-width: ${o.spacing(80)};
  `}),k=()=>{const{register:o,formState:r}=(0,g.xW)(),n=(0,E.of)(ve),{correlation:a,readOnly:i}=A();return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(L.n,{label:(0,t.t)("correlations.basic-info-form.title","Define correlation label (Step 1 of 3)"),children:[(0,e.jsx)(t.x6,{i18nKey:"correlations.basic-info-form.sub-text",children:(0,e.jsx)("p",{children:"Define text that will describe the correlation."})}),(0,e.jsx)("input",{type:"hidden",...o("config.type")}),(0,e.jsx)(y.D,{label:(0,t.t)("correlations.basic-info-form.label-label","Label"),description:(0,t.t)("correlations.basic-info-form.label-description","This name will be used as the label for the correlation. This will show as button text, a menu item, or hover text on a link."),className:n.label,invalid:!!r.errors.label,error:r.errors.label?.message,children:(0,e.jsx)(V.p,{id:z("label",a),...o("label",{required:{value:!0,message:(0,t.t)("correlations.basic-info-form.label-required","This field is required.")}}),readOnly:i,placeholder:(0,t.t)("correlations.basic-info-form.label-placeholder","e.g. Tempo traces")})}),(0,e.jsx)(y.D,{label:(0,t.t)("correlations.basic-info-form.description-label","Description"),description:(0,t.t)("correlations.basic-info-form.description-description","Optional description with more information about the link"),className:(0,x.cx)(n.description),children:(0,e.jsx)(pe.f,{id:z("description",a),...o("description"),readOnly:i})})]})})};var S=s(10860),_=s(51612),je=s(31193),ye=s(96192),C=s(67061),be=s(94753),W=s(60029),U=s(56034),Ce=s(90182),De=s(29158),T=s(2864);const we=()=>({removeButton:(0,x.css)({marginTop:"25px"})}),Ie=o=>{const{index:r,value:n,readOnly:a,remove:i}=o,{control:d,formState:l,register:c,setValue:u,watch:p,getValues:D}=(0,g.xW)(),[w,h]=(0,f.useState)({});c(`config.transformations.${r}.type`,{required:{value:!0,message:(0,t.t)("correlations.transform-row.transform-required","Please select a transformation type")}});const b=(0,g.FH)({name:`config.transformations.${r}.type`,control:d}),v=(0,E.of)(we),Q=(0,T.j)();return(0,e.jsxs)(C.B,{direction:"row",alignItems:"flex-start",children:[(0,e.jsx)(y.D,{label:(0,e.jsxs)(C.B,{gap:.5,children:[(0,e.jsx)(W.J,{htmlFor:`config.transformations.${n.id}-${r}.type`,children:(0,e.jsx)(t.x6,{i18nKey:"correlations.transform-row.type-label",children:"Type"})}),(0,e.jsx)(U.m,{content:(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:(0,e.jsx)(t.x6,{i18nKey:"correlations.transform-row.type-tooltip",children:"The type of transformation that will be applied to the source data."})})}),children:(0,e.jsx)(P.I,{name:"info-circle",size:"sm"})})]}),invalid:!!l.errors?.config?.transformations?.[r]?.type,error:l.errors?.config?.transformations?.[r]?.message,validationMessageHorizontalOverflow:!0,children:(0,e.jsx)(Ce.l6,{value:b,onChange:K=>{if(!a){const m=D()?.config?.transformations?.[r];if(m&&h({expression:m.expression,mapValue:m.mapValue}),K.value){const $=(0,T.h)(K.value);$.expressionDetails.show?u(`config.transformations.${r}.expression`,w?.expression||""):u(`config.transformations.${r}.expression`,""),$.mapValueDetails.show?u(`config.transformations.${r}.mapValue`,w?.mapValue||""):u(`config.transformations.${r}.mapValue`,""),u(`config.transformations.${r}.type`,K.value)}}},options:Q,width:25,inputId:`config.transformations.${n.id}-${r}.type`})}),(0,e.jsx)(y.D,{label:(0,e.jsxs)(C.B,{gap:.5,children:[(0,e.jsx)(W.J,{htmlFor:`config.transformations.${n.id}.field`,children:(0,e.jsx)(t.x6,{i18nKey:"correlations.transform-row.field-label",children:"Field"})}),(0,e.jsx)(U.m,{content:(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:(0,e.jsx)(t.x6,{i18nKey:"correlations.transform-row.field-tooltip",children:"Optional. The field to transform. If not specified, the transformation will be applied to the results field."})})}),children:(0,e.jsx)(P.I,{name:"info-circle",size:"sm"})})]}),children:(0,e.jsx)(V.p,{...c(`config.transformations.${r}.field`),readOnly:a,defaultValue:n.field,label:(0,t.t)("correlations.transform-row.field-input","field"),id:`config.transformations.${n.id}.field`})}),(0,e.jsx)(y.D,{label:(0,e.jsxs)(C.B,{gap:.5,children:[(0,e.jsxs)(W.J,{htmlFor:`config.transformations.${n.id}.expression`,children:[(0,e.jsx)(t.x6,{i18nKey:"correlations.transform-row.expression-label",children:"Expression"}),(0,T.h)(p(`config.transformations.${r}.type`)).expressionDetails.required?" *":""]}),(0,e.jsx)(U.m,{content:(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:(0,e.jsx)(t.x6,{i18nKey:"correlations.transform-row.expression-tooltip",children:"Required for regular expression. The expression the transformation will use. Logfmt does not use further specifications."})})}),children:(0,e.jsx)(P.I,{name:"info-circle",size:"sm"})})]}),invalid:!!l.errors?.config?.transformations?.[r]?.expression,error:l.errors?.config?.transformations?.[r]?.expression?.message,children:(0,e.jsx)(V.p,{...c(`config.transformations.${r}.expression`,{required:(0,T.h)(p(`config.transformations.${r}.type`)).expressionDetails.required?(0,t.t)("correlations.transform-row.expression-required","Please define an expression"):void 0}),defaultValue:n.expression,readOnly:a,disabled:!(0,T.h)(p(`config.transformations.${r}.type`)).expressionDetails.show,id:`config.transformations.${n.id}.expression`})}),(0,e.jsx)(y.D,{label:(0,e.jsxs)(C.B,{gap:.5,children:[(0,e.jsx)(W.J,{htmlFor:`config.transformations.${n.id}.mapValue`,children:(0,e.jsx)(t.x6,{i18nKey:"correlations.transform-row.map-value-label",children:"Map value"})}),(0,e.jsx)(U.m,{content:(0,e.jsx)("div",{children:(0,e.jsx)("p",{children:(0,e.jsx)(t.x6,{i18nKey:"correlations.transform-row.map-value-tooltip",children:"Optional. Defines the name of the variable. This is currently only valid for regular expressions with a single, unnamed capture group."})})}),children:(0,e.jsx)(P.I,{name:"info-circle",size:"sm"})})]}),children:(0,e.jsx)(V.p,{...c(`config.transformations.${r}.mapValue`),defaultValue:n.mapValue,readOnly:a,disabled:!(0,T.h)(p(`config.transformations.${r}.type`)).mapValueDetails.show,id:`config.transformations.${n.id}.mapValue`})}),!a&&(0,e.jsx)("div",{className:v.removeButton,children:(0,e.jsx)(De.K,{tooltip:(0,t.t)("correlations.transform-row.remove-tooltip","Remove transformation"),name:"trash-alt",onClick:()=>{i(r)},children:(0,e.jsx)(t.x6,{i18nKey:"correlations.transform-row.remove-button",children:"Remove"})})})]},n.id)},Se=o=>{const{control:r,register:n}=(0,g.xW)(),{fields:a,append:i,remove:d}=(0,g.jz)({control:r,name:"config.transformations"}),{readOnly:l}=o;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("input",{type:"hidden",...n("id")}),(0,e.jsxs)(C.B,{direction:"column",alignItems:"flex-start",children:[(0,e.jsx)(be.E,{variant:"h5",children:(0,e.jsx)(t.x6,{i18nKey:"correlations.transform.heading",children:"Transformations"})}),a.length===0&&(0,e.jsx)("div",{children:(0,e.jsx)(t.x6,{i18nKey:"correlations.transform.no-transform",children:"No transformations defined."})}),a.length>0&&(0,e.jsx)("div",{children:a.map((c,u)=>(0,e.jsx)(Ie,{value:c,index:u,readOnly:l,remove:d},u))}),!l&&(0,e.jsx)(I.$n,{icon:"plus",onClick:()=>i({type:void 0},{shouldFocus:!1}),variant:"secondary",type:"button",children:(0,e.jsx)(t.x6,{i18nKey:"correlations.transform.add-button",children:"Add transformation"})})]})]})},Te=o=>({label:(0,x.css)`
    max-width: ${o.spacing(80)};
  `,variable:(0,x.css)`
    font-family: ${o.typography.fontFamilyMonospace};
    font-weight: ${o.typography.fontWeightMedium};
  `}),ee=()=>{const{control:o,formState:r,register:n,getValues:a}=(0,g.xW)(),i=(0,E.of)(Te),d=h=>b=>h(b.uid),{correlation:l,readOnly:c}=A(),u=a("config.target"),p=(0,ye.O1)(u,{}).variables.map(h=>h.variableName+(h.fieldPath?`.${h.fieldPath}`:""));function D(){return(0,e.jsx)(e.Fragment,{children:p.map((h,b)=>(0,e.jsxs)("span",{className:i.variable,children:[h,b<p.length-1?", ":""]},b))})}const w=(0,je.tR)().getInstanceSettings(a("targetUID"))?.name;return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(L.n,{label:(0,t.t)("correlations.source-form.title","Configure the data source that will link to {{dataSourceName}} (Step 3 of 3)",{dataSourceName:w}),children:[(0,e.jsx)(t.x6,{i18nKey:"correlations.source-form.sub-text",children:(0,e.jsx)("p",{children:"Define what data source will display the correlation, and what data will replace previously defined variables."})}),(0,e.jsx)(g.xI,{control:o,name:"sourceUID",rules:{required:{value:!0,message:(0,t.t)("correlations.source-form.control-required","This field is required.")}},render:({field:{onChange:h,value:b}})=>(0,e.jsx)(y.D,{label:(0,t.t)("correlations.source-form.source-label","Source"),description:(0,t.t)("correlations.source-form.source-description","Results from selected source data source have links displayed in the panel"),htmlFor:"source",invalid:!!r.errors.sourceUID,error:r.errors.sourceUID?.message,children:(0,e.jsx)(_.s,{onChange:d(h),noDefault:!0,current:b,inputId:"source",width:32,disabled:l!==void 0})})}),(0,e.jsx)(y.D,{label:(0,t.t)("correlations.source-form.results-label","Results field"),description:(0,t.t)("correlations.source-form.results-description","The link will be shown next to the value of this field"),className:i.label,invalid:!!r.errors?.config?.field,error:r.errors?.config?.field?.message,children:(0,e.jsx)(V.p,{id:z("field",l),...n("config.field",{required:(0,t.t)("correlations.source-form.results-required","This field is required.")}),readOnly:c})}),p.length>0&&(0,e.jsxs)(S.Z,{children:[(0,e.jsx)(S.Z.Heading,{children:(0,e.jsx)(t.x6,{i18nKey:"correlations.source-form.heading",children:"Variables used in the target query"})}),(0,e.jsx)(S.Z.Description,{children:(0,e.jsxs)(t.x6,{i18nKey:"correlations.source-form.description",children:["You have used following variables in the target query: ",(0,e.jsx)(D,{}),(0,e.jsx)("br",{}),"A data point needs to provide values to all variables as fields or as transformations output to make the correlation button appear in the visualization.",(0,e.jsx)("br",{}),"Note: Not every variable needs to be explicitly defined below. A transformation such as"," ",(0,e.jsx)("span",{className:i.variable,children:"logfmt"})," will create variables for every key/value pair."]})})]}),(0,e.jsx)(Se,{readOnly:c})]})})};var $e=s(16817),Fe=s(41987),Pe=s(19347);const Ee=({dsUid:o,invalid:r,error:n,name:a})=>{const{value:i,loading:d,error:l}=(0,$e.A)(async()=>{if(o)return(0,Pe.l)().get(o)},[o]),c=i?.components?.QueryEditor;return(0,e.jsx)(y.D,{label:(0,t.t)("correlations.query-editor.query-label","Query"),description:(0,e.jsx)("span",{children:(0,e.jsxs)(t.x6,{i18nKey:"correlations.query-editor.query-description",children:["Define the query that is run when the link is clicked. You can use"," ",(0,e.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/panels-visualizations/configure-data-links/",target:"_blank",rel:"noreferrer",children:"variables"})," ","to access specific field values."]})}),invalid:r,error:n,children:(0,e.jsx)(g.xI,{name:a,rules:{validate:{hasQueryEditor:()=>c!==void 0||(0,t.t)("correlations.query-editor.control-rules","The selected target data source must export a query editor.")}},render:({field:{value:u,onChange:p}})=>d?(0,e.jsx)(J._,{text:(0,t.t)("correlations.query-editor.loading","Loading query editor...")}):l?(0,e.jsx)(N.F,{title:(0,t.t)("correlations.query-editor.error-title","Error loading data source"),children:(0,e.jsx)(t.x6,{i18nKey:"correlations.query-editor.error-text",children:"The selected data source could not be loaded."})}):i?c?(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(c,{onRunQuery:()=>{},app:Fe.Jk.Correlations,onChange:D=>{p(D)},datasource:i,query:u})}):(0,e.jsx)(N.F,{title:(0,t.t)("correlations.query-editor.query-editor-title","Data source does not export a query editor.")}):(0,e.jsx)(N.F,{title:(0,t.t)("correlations.query-editor.data-source-title","No data source selected"),severity:"info",children:(0,e.jsx)(t.x6,{i18nKey:"correlations.query-editor.data-source-text",children:"Please select a target data source first."})})})})},re=()=>{const{control:o,formState:r}=(0,g.xW)(),n=d=>l=>d(l.uid),{correlation:a}=A(),i=(0,g.FH)({name:"targetUID"})||a?.targetUID;return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(L.n,{label:(0,t.t)("correlations.target-form.title","Setup the target for the correlation (Step 2 of 3)"),children:[(0,e.jsx)(t.x6,{i18nKey:"correlations.target-form.sub-text",children:(0,e.jsx)("p",{children:"Define what data source the correlation will link to, and what query will run when the correlation is clicked."})}),(0,e.jsx)(g.xI,{control:o,name:"targetUID",rules:{required:{value:!0,message:(0,t.t)("correlations.target-form.control-rules","This field is required.")}},render:({field:{onChange:d,value:l}})=>(0,e.jsx)(y.D,{label:(0,t.t)("correlations.target-form.target-label","Target"),description:(0,t.t)("correlations.target-form.target-description","Specify which data source is queried when the link is clicked"),htmlFor:"target",invalid:!!r.errors.targetUID,error:r.errors.targetUID?.message,children:(0,e.jsx)(_.s,{onChange:n(d),noDefault:!0,current:l,inputId:"target",width:32,disabled:a!==void 0})})}),(0,e.jsx)(Ee,{name:"config.target",dsUid:i,invalid:!!r.errors?.config?.target,error:r.errors?.config?.target?.message})]})})},te=()=>{const{currentPage:o,prevPage:r,isLastPage:n}=H(),{readOnly:a,loading:i,correlation:d}=A(),l=!a&&(0,e.jsx)(I.$n,{variant:"primary",icon:i?"spinner":"save",type:"submit",disabled:i,children:d===void 0?(0,t.t)("correlations.navigation-form.add-button","Add"):(0,t.t)("correlations.navigation-form.save-button","Save")}),c=(0,e.jsx)(I.$n,{variant:"primary",type:"submit",children:(0,e.jsx)(t.x6,{i18nKey:"correlations.navigation-form.next-button",children:"Next"})});return(0,e.jsxs)(C.B,{justifyContent:"flex-start",children:[o>0?(0,e.jsx)(I.$n,{variant:"secondary",onClick:r,children:(0,e.jsx)(t.x6,{i18nKey:"correlations.navigation-form.back-button",children:"Back"})}):void 0,n?l:c]})},Ve=o=>({panelContainer:(0,x.css)`
    position: relative;
    padding: ${o.spacing(1)};
    margin-bottom: ${o.spacing(2)};
  `,infoBox:(0,x.css)`
    margin-top: 20px; // give space for close button
  `}),Ke=({onClose:o,onCreated:r})=>{const n=(0,E.of)(Ve),{create:{execute:a,loading:i,error:d,value:l}}=(0,B.lW)();(0,f.useEffect)(()=>{!d&&!i&&l&&r()},[d,i,l,r]);const c={config:{type:"query",target:{},field:""}};return(0,e.jsxs)(me._,{className:n.panelContainer,children:[(0,e.jsx)(xe.J,{onClick:o}),(0,e.jsx)(q,{data:{loading:i,readOnly:!1,correlation:void 0},children:(0,e.jsx)(G,{defaultValues:c,pages:[k,re,ee],navigation:te,onSubmit:a})})]})},Re=({onUpdated:o,correlation:r,readOnly:n=!1})=>{const{update:{execute:a,loading:i,error:d,value:l}}=(0,B.lW)(),c=u=>a({...u,sourceUID:r.sourceUID,uid:r.uid});return(0,f.useEffect)(()=>{!d&&!i&&l&&o()},[d,i,l,o]),(0,e.jsx)(q,{data:{loading:i,readOnly:n,correlation:r},children:(0,e.jsx)(G,{defaultValues:r,pages:[k,re,ee],onSubmit:n?u=>()=>{}:c,navigation:te})})};var Oe=s(69529);const Ne=({onClick:o,canWriteCorrelations:r})=>r?(0,e.jsx)(Oe.p,{variant:"call-to-action",button:(0,e.jsx)(I.$n,{icon:"gf-glue",onClick:o,size:"lg",children:(0,e.jsx)(t.x6,{i18nKey:"correlations.empty-state.button-title",children:"Add correlation"})}),message:(0,t.t)("correlations.empty-state.title","You haven't defined any correlations yet"),children:(0,e.jsx)(t.x6,{i18nKey:"correlations.empty-state.pro-tip",children:"You can also define correlations via datasource provisioning"})}):(0,e.jsxs)(S.Z,{children:[(0,e.jsx)(S.Z.Heading,{children:"There are no correlations configured yet."}),(0,e.jsx)(S.Z.Description,{children:"Please contact your administrator to create new correlations."})]}),oe=(o,r,n)=>o.values[n].name.localeCompare(r.values[n].name),M=o=>o.provisioned,Ae=(0,x.css)`
  display: flex;
  justify-content: center;
`;function We(){const o=(0,ue.C)("correlations"),[r,n]=(0,f.useState)(!1),a=(0,f.useRef)(1),i=m=>{n(m),m&&(0,j.rR)("grafana_correlations_adding_started")},{remove:d,get:{execute:l,...c}}=(0,B.lW)(),u=de.TP.hasPermission(fe.AccessControlAction.DataSourcesWrite),p=(0,f.useCallback)(()=>{(0,j.rR)("grafana_correlations_added"),l({page:a.current}),i(!1)},[l]),D=(0,f.useCallback)(()=>{(0,j.rR)("grafana_correlations_edited"),l({page:a.current})},[l]),w=(0,f.useCallback)(async(m,$)=>{await d.execute(m),(0,j.rR)("grafana_correlations_deleted"),$&&a.current--,l({page:a.current})},[d,l]);(0,f.useEffect)(()=>{l({page:a.current})},[l]);const h=(0,f.useCallback)(({row:{index:m,original:{source:{uid:$},provisioned:Me,uid:Qe}}})=>!Me&&(0,e.jsx)(ae.e,{"aria-label":(0,t.t)("correlations.list.delete","delete correlation"),onConfirm:()=>w({sourceUID:$,uid:Qe},a.current>1&&m===0&&v?.correlations.length===1),closeOnConfirm:!0}),[w]),b=(0,f.useMemo)(()=>[{id:"info",cell:ze,disableGrow:!0,visible:m=>m.some(M)},{id:"source",header:(0,t.t)("correlations.list.source","Source"),cell:ne,sortType:oe},{id:"target",header:(0,t.t)("correlations.list.target","Target"),cell:ne,sortType:oe},{id:"label",header:(0,t.t)("correlations.list.label","Label"),sortType:"alphanumeric"},{id:"actions",cell:h,disableGrow:!0,visible:m=>u&&m.some((0,O.negate)(M))}],[h,u]),v=(0,f.useMemo)(()=>c.value,[c.value]),Q=v?.correlations.length===0&&!r&&!c.error,K=u&&v?.correlations?.length!==0&&v!==void 0&&!r&&(0,e.jsx)(I.$n,{icon:"plus",onClick:()=>i(!0),children:(0,e.jsx)(t.x6,{i18nKey:"correlations.add-new",children:"Add new"})});return(0,e.jsx)(Y.Y,{navModel:o,subTitle:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(t.x6,{i18nKey:"correlations.sub-title",children:["Define how data living in different data sources relates to each other. Read more in the"," ",(0,e.jsxs)("a",{href:"https://grafana.com/docs/grafana/next/administration/correlations/",target:"_blank",rel:"noreferrer",children:["documentation",(0,e.jsx)(P.I,{name:"external-link-alt"})]})]})}),actions:K,children:(0,e.jsx)(Y.Y.Contents,{children:(0,e.jsxs)("div",{children:[!v&&c.loading&&(0,e.jsx)("div",{className:Ae,children:(0,e.jsx)(J._,{text:(0,t.t)("correlations.list.loading","loading...")})}),Q&&(0,e.jsx)(Ne,{canWriteCorrelations:u,onClick:()=>i(!0)}),c.error&&(0,e.jsx)(N.F,{severity:"error",title:(0,t.t)("correlations.alert.title","Error fetching correlation data"),topSpacing:2,children:(0,F.NF)(c.error)&&c.error.data?.message||(0,t.t)("correlations.alert.error-message","An unknown error occurred while fetching correlation data. Please try again.")}),r&&(0,e.jsx)(Ke,{onClose:()=>i(!1),onCreated:p}),v&&v.correlations.length>=1&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(ie.j,{renderExpandedRow:m=>(0,e.jsx)(Ue,{correlation:m,onUpdated:D,readOnly:M(m)||!u}),columns:b,data:v.correlations,getRowId:m=>`${m.source.uid}-${m.uid}`}),(0,e.jsx)(le.d,{currentPage:a.current,numberOfPages:Math.ceil(v.totalCount/v.limit),onNavigate:m=>{l({page:a.current=m})}})]})]})})})}function Ue({correlation:{source:o,target:r,...n},readOnly:a,onUpdated:i}){return(0,f.useEffect)(()=>(0,j.rR)("grafana_correlations_details_expanded"),[]),(0,e.jsx)(Re,{correlation:{...n,sourceUID:o.uid,targetUID:r.uid},onUpdated:i,readOnly:a})}const Be=o=>({root:(0,x.css)`
    display: flex;
    align-items: center;
  `,dsLogo:(0,x.css)`
    margin-right: ${o.spacing()};
    height: 16px;
    width: 16px;
  `}),ne=(0,f.memo)(function({cell:{value:r}}){const n=(0,E.of)(Be);return(0,e.jsxs)("span",{className:n.root,children:[(0,e.jsx)("img",{src:r.meta.info.logos.small,alt:"",className:n.dsLogo}),r.name]})},({cell:{value:o}},{cell:{value:r}})=>o.type===r.type&&o.name===r.name),Le=(0,x.css)`
  white-space: nowrap;
`,ze=(0,f.memo)(function({...r}){return r.row.original.provisioned?(0,e.jsx)(ce.E,{text:(0,t.t)("correlations.list.read-only","Read only"),color:"purple",className:Le}):null},(o,r)=>o.row.original.source.readOnly===r.row.original.source.readOnly)},2864:(se,R,s)=>{s.d(R,{h:()=>O,j:()=>f});var e=s(91890),x=s(8484);function O(j){switch(j){case e.CC.Logfmt:return{label:(0,x.t)("correlations.trans-details.logfmt-label","Logfmt"),value:e.CC.Logfmt,description:(0,x.t)("correlations.trans-details.logfmt-description","Parse provided field with logfmt to get variables"),expressionDetails:{show:!1},mapValueDetails:{show:!1}};case e.CC.Regex:return{label:(0,x.t)("correlations.trans-details.regex-label","Regular expression"),value:e.CC.Regex,description:(0,x.t)("correlations.trans-details.regex-description","Field will be parsed with regex. Use named capture groups to return multiple variables, or a single unnamed capture group to add variable to named map value. Regex is case insensitive."),expressionDetails:{show:!0,required:!0,helpText:(0,x.t)("correlations.trans-details.regex-expression","Use capture groups to extract a portion of the field.")},mapValueDetails:{show:!0,required:!1,helpText:(0,x.t)("correlations.trans-details.regex-map-values","Defines the name of the variable if the capture group is not named.")}};default:return{label:j,value:j,expressionDetails:{show:!1},mapValueDetails:{show:!1}}}}const f=()=>Object.values(e.CC).map(j=>{const F=O(j);return{label:F.label,value:F.value,description:F.description}})}}]);

//# sourceMappingURL=CorrelationsPage.7d2bc5bfcf42131404ff.js.map