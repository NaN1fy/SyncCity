"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1927],{68932:(X,W,s)=>{s.r(W),s.d(W,{default:()=>Pe});var e=s(74848),i=s(32196),u=s(96540),R=s(16817),K=s(14236),z=s(12131),P=s(40845),B=s(62930),U=s(42418),H=s(90613),l=s(8984),g=s(67061),w=s(55852),O=s(63021),A=s(40675),S=s(28138),V=s(69444),k=s(25249),q=s(28444);function _({onPathChange:t}){return(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{children:"TODO... Add ROOT"}),(0,e.jsx)(w.$n,{variant:"secondary",onClick:()=>t("/"),children:"Cancel"})]})}var Z=s(2543),G=s(14578);function ee({pathName:t,onPathChange:r,rootIcon:f}){const n=(0,P.of)(te),a=t.split("/").filter(Boolean);return(0,e.jsxs)("ul",{className:n.breadCrumb,children:[f&&(0,e.jsx)("li",{children:(0,e.jsx)(G.I,{name:f,onClick:()=>r("")})}),a.map((o,$)=>{let h="/"+a.slice(0,$+1).join("/");const m=()=>r(h),C=$===a.length-1;return(0,e.jsx)("li",{onClick:C?void 0:m,children:o},(0,Z.uniqueId)(o))})]})}function te(t){return{breadCrumb:(0,i.css)`
      list-style: none;
      padding: ${t.spacing(2,1)};

      li {
        display: inline;

        :not(:last-child) {
          color: ${t.colors.text.link};
          cursor: pointer;
        }
        + li:before {
          content: '>';
          padding: ${t.spacing(1)};
          color: ${t.colors.text.secondary};
        }
      }
    `}}var J=s(37390),se=s(88575),ne=s(10354),re=s(72235);const ae={folderName:""};function oe({validate:t,onDismiss:r,onSubmit:f}){return(0,e.jsx)(J.a,{onDismiss:r,isOpen:!0,title:"New Folder",children:(0,e.jsx)(re.l,{defaultValues:ae,onSubmit:f,maxWidth:"none",children:({register:n,errors:a})=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(se.D,{label:"Folder name",invalid:!!a.folderName,error:a.folderName&&a.folderName.message,children:(0,e.jsx)(ne.p,{id:"folder-name-input",...n("folderName",{required:"Folder name is required.",validate:{validate:t}})})}),(0,e.jsx)(J.a.ButtonRow,{children:(0,e.jsx)(w.$n,{type:"submit",children:"Create"})})]})})})}var Y=s(70713),ie=s(32372),le=s(47694),b=s(53652),F=(t=>(t.Data="data",t.Config="config",t.Perms="perms",t.History="history",t.AddRoot="add",t))(F||{}),ce=(t=>(t.Save="save",t.PR="pr",t.Push="push",t))(ce||{});function de({listing:t,path:r,onPathChange:f,view:n}){const a=(0,P.of)(ue),o=(0,u.useMemo)(()=>ge(r),[r]),$=(0,R.A)(async()=>{if(o.category==="text"){const m=await(0,b.o)().get(r);return(0,Z.isString)(m)?m:JSON.stringify(m,null,2)}return null},[o,r]);switch(n){case F.Config:return(0,e.jsx)("div",{children:"CONFIGURE?"});case F.Perms:return(0,e.jsx)("div",{children:"Permissions"});case F.History:return(0,e.jsx)("div",{children:"TODO... history"})}let h=`api/storage/read/${r}`;switch(h.endsWith("/")&&(h=h.substring(0,h.length-1)),o.category){case"svg":return(0,e.jsx)("div",{children:(0,e.jsx)(le.y,{src:h,className:a.icon})});case"image":return(0,e.jsx)("div",{children:(0,e.jsx)("a",{target:"_self",href:h,children:(0,e.jsx)("img",{src:h,alt:"File preview",className:a.img})})});case"text":return(0,e.jsx)("div",{className:a.tableWrapper,children:(0,e.jsx)(Y.Ay,{children:({width:m,height:C})=>(0,e.jsx)(ie.B,{width:m,height:C,value:$.value??"",showLineNumbers:!1,readOnly:!0,language:o.language??"text",showMiniMap:!1,onBlur:p=>{console.log("CHANGED!",p)}})})})}return(0,e.jsxs)("div",{children:["FILE: ",(0,e.jsx)("a",{href:h,children:r})]})}function ge(t){const r=t.lastIndexOf(".");if(r<0)return{};switch(t.substring(r+1).toLowerCase()){case"svg":return{category:"svg"};case"jpg":case"jpeg":case"png":case"webp":case"gif":return{category:"image"};case"geojson":case"json":return{category:"text",language:"json"};case"text":case"go":case"md":return{category:"text"}}return{}}const ue=t=>({wrapper:(0,i.css)`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,tableControlRowWrapper:(0,i.css)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${t.spacing(2)};
  `,tableWrapper:(0,i.css)`
    border: 1px solid ${t.colors.border.medium};
    height: 100%;
  `,uploadSpot:(0,i.css)`
    margin-left: ${t.spacing(2)};
  `,border:(0,i.css)`
    border: 1px solid ${t.colors.border.medium};
    padding: ${t.spacing(2)};
  `,img:(0,i.css)`
    max-width: 100%;
    // max-height: 147px;
    // fill: ${t.colors.text.primary};
  `,icon:(0,i.css)`
    // max-width: 100%;
    // max-height: 147px;
    // fill: ${t.colors.text.primary};
  `});var fe=s(77093);function he({listing:t,view:r}){const f=(0,P.of)(xe);switch(r){case F.Config:return(0,e.jsx)("div",{children:"CONFIGURE?"});case F.Perms:return(0,e.jsx)("div",{children:"Permissions"})}return(0,e.jsx)("div",{className:f.tableWrapper,children:(0,e.jsx)(Y.Ay,{children:({width:n,height:a})=>(0,e.jsx)("div",{style:{width:`${n}px`,height:`${a}px`},children:(0,e.jsx)(fe.X,{height:a,width:n,data:t,noHeader:!1,showTypeIcons:!1,resizable:!1})})})})}const xe=t=>({wrapper:(0,i.css)`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,tableControlRowWrapper:(0,i.css)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${t.spacing(2)};
  `,tableWrapper:(0,i.css)`
    border: 1px solid ${t.colors.border.medium};
    height: 100%;
  `,uploadSpot:(0,i.css)`
    margin-left: ${t.spacing(2)};
  `,border:(0,i.css)`
    border: 1px solid ${t.colors.border.medium};
    padding: ${t.spacing(2)};
  `});var L=s(10860),me=s(64149),pe=s(14186),ve=s(67647);function ye({root:t,onPathChange:r}){const f=(0,P.of)(je),n=(0,R.A)((0,b.o)().getConfig),[a,o]=(0,u.useState)("");let $=location.pathname;$.endsWith("/")||($+="/");const h=(0,u.useMemo)(()=>{let C=n.value??[];if(a?.length){const v=a.toLowerCase();C=C.filter(I=>{const d=I.config;return d.name.toLowerCase().indexOf(v)>=0||d.description.toLowerCase().indexOf(v)>=0})}const p=[],c=[];for(const v of C??[])v.config.underContentRoot?c.push(v):v.config.prefix!=="content"&&p.push(v);return{base:p,content:c}},[a,n]),m=(C,p)=>(0,e.jsx)(g.B,{direction:"column",children:p.map(c=>{const v=c.ready;return(0,e.jsxs)(L.Z,{href:v?`admin/storage/${C}${c.config.prefix}/`:void 0,children:[(0,e.jsx)(L.Z.Heading,{children:c.config.name}),(0,e.jsxs)(L.Z.Meta,{className:f.clickable,children:[c.config.description,c.config.git?.remote&&(0,e.jsx)("a",{href:c.config.git?.remote,children:c.config.git?.remote})]}),c.notice?.map(I=>(0,e.jsx)(U.F,{severity:I.severity,title:I.text},I.text)),(0,e.jsx)(L.Z.Tags,{className:f.clickable,children:(0,e.jsx)(g.B,{children:(0,e.jsx)(me.L,{tags:Ce(c)})})}),(0,e.jsx)(L.Z.Figure,{className:f.clickable,children:(0,e.jsx)(G.I,{name:Fe(c.config.type),size:"xxxl",className:f.secondaryTextColor})})]},c.config.prefix)})});return(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"page-action-bar",children:[(0,e.jsx)(pe.I,{grow:!0,children:(0,e.jsx)(ve.Z,{placeholder:"Search Storage",value:a,onChange:o})}),(0,e.jsx)("div",{className:"page-action-bar__spacer"}),(0,e.jsx)(w.$n,{onClick:()=>r("",F.AddRoot),children:"Add Root"})]}),(0,e.jsx)("div",{children:m("",h.base)}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"Content"}),m("content/",h.content)]})]})}function je(t){return{secondaryTextColor:(0,i.css)({color:t.colors.text.secondary}),clickable:(0,i.css)({pointerEvents:"none"})}}function Ce(t){const r=[];return t.builtin&&r.push("Builtin"),t.ready||r.push("Not ready"),r}function Fe(t){switch(t){case"git":return"code-branch";case"disk":return"folder-open";case"sql":return"database";default:return"folder-open"}}var we=s(73546),$e=s(96374);const Ne="image/jpg, image/jpeg, image/png, image/gif, image/webp";function Ae({setErrorMessages:t,setPath:r,path:f,fileNames:n}){const a=(0,P.of)(Oe),[o,$]=(0,u.useState)(void 0),[h,m]=(0,u.useState)(!1),[C,p]=(0,u.useState)(1),[c,v]=(0,u.useState)(!0);(0,u.useEffect)(()=>{p(x=>x+1)},[o]);const I=x=>{console.log("Uploaded: "+f),x.path?r(x.path):r(f)},d=async(x,E)=>{if(!x){t(["Please select a file."]);return}const D=await(0,b.o)().upload(f,x,E);D.status!==200?t([D.message]):I(D)},y=x=>{t([]);const E=x.currentTarget.files&&x.currentTarget.files.length>0&&x.currentTarget.files[0]?x.currentTarget.files[0]:void 0;E&&($(E),(0,b.E)(E.name,n)?(m(!0),v(!0)):(m(!1),d(E,!1).then(j=>{})))},N=()=>{o&&(d(o,!0).then(x=>{}),v(!1))},T=()=>{$(void 0),m(!1),v(!1)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(we.e,{accept:Ne,onFileUpload:y,className:a.uploadButton,children:"Upload"},C),o&&h&&(0,e.jsx)($e.u,{isOpen:c,body:(0,e.jsxs)("div",{children:[(0,e.jsx)("p",{children:o?.name}),(0,e.jsx)("p",{children:"A file with this name already exists."}),(0,e.jsx)("p",{children:"What would you like to do?"})]}),title:"This file already exists",confirmText:"Replace",onConfirm:N,onDismiss:T})]})}const Oe=t=>({uploadButton:(0,i.css)`
    margin-right: ${t.spacing(2)};
  `}),Se=/^[a-z\d!\-_.*'() ]+$/,Q=256,Ie=t=>{const r=t.lastIndexOf("/");return r<1?"":t.substring(0,r)};function Pe(t){const r=(0,P.of)(be),f=(0,k.C)("storage"),n=t.match.params.path??"",a=t.queryParams.view??F.Data,o=(d,y)=>{let N=("/admin/storage/"+d).replace("//","/");y&&y!==F.Data&&(N+="?view="+y),z.Ny.push(N)},[$,h]=(0,u.useState)(!1),[m,C]=(0,u.useState)([]),p=(0,R.A)(()=>(0,b.o)().list(n).then(d=>{if(d){const y=d.fields[0];d.fields[0]={...y,getLinks:N=>{const T=y.values[N.valueRowIndex??0],x=n+"/"+T;return[{title:`Open ${T}`,href:`/admin/storage/${x}`,target:"_self",origin:y,onClick:()=>{o(x)}}]}}}return d}),[n]),c=(0,u.useMemo)(()=>{let d=n?.indexOf("/")<0;if(p.value)if(p.value.length===1){const N=p.value.fields[0].values[0];d=!n.endsWith(N)}else d=!0;return d},[n,p]),v=(0,u.useMemo)(()=>p.value?.fields?.find(d=>d.name==="name")?.values.filter(d=>typeof d=="string")??[],[p]),I=()=>{const d=!n?.length||n==="/";switch(a){case F.AddRoot:return d?(0,e.jsx)(_,{onPathChange:o}):(o(""),(0,e.jsx)(B.y,{}))}const y=p.value;if(!(0,K.ci)(y))return(0,e.jsx)(e.Fragment,{});if(d)return(0,e.jsx)(ye,{root:y,onPathChange:o});const N=[{what:F.Data,text:"Data"}];n.indexOf("/")<0&&N.push({what:F.Config,text:"Configure"}),c||N.push({what:F.History,text:"History"});const T=c&&(n.startsWith("resources")||n.startsWith("content")),x=n.startsWith("resources/")||n.startsWith("content/"),E=()=>(0,e.jsx)("div",{className:r.errorAlert,children:(0,e.jsx)(U.F,{title:"Upload failed",severity:"error",onRemove:D,children:m.map(j=>(0,e.jsx)("div",{children:j},j))})}),D=()=>{C([])};return(0,e.jsxs)("div",{className:r.wrapper,children:[(0,e.jsxs)(H.a,{display:"flex",justifyContent:"space-between",width:"100%",height:3,children:[(0,e.jsx)(ee,{pathName:n,onPathChange:o,rootIcon:(0,l.toIconName)(f.node.icon??"")}),(0,e.jsxs)(g.B,{children:[T&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ae,{path:n,setErrorMessages:C,fileNames:v,setPath:o}),(0,e.jsx)(w.$n,{onClick:()=>h(!0),children:"New Folder"})]}),x&&(0,e.jsx)(w.$n,{variant:"destructive",onClick:()=>{const j=c?"Are you sure you want to delete this folder and all its contents?":"Are you sure you want to delete this file?",M=Ie(n);S.A.publish(new q.bY({title:`Delete ${c?"folder":"file"}`,text:j,icon:"trash-alt",yesText:"Delete",onConfirm:()=>(0,b.o)().delete({path:n,isFolder:c}).then(()=>{o(M)})}))},children:"Delete"})]})]}),m.length>0&&E(),(0,e.jsx)(O.U,{children:N.map(j=>(0,e.jsx)(A.o,{label:j.text,active:j.what===a,onChangeTab:()=>o(n,j.what)},j.what))}),c?(0,e.jsx)(he,{listing:y,view:a}):(0,e.jsx)(de,{path:n,listing:y,onPathChange:o,view:a}),$&&(0,e.jsx)(oe,{onSubmit:async({folderName:j})=>{const M=`${n}/${j}`;typeof(await(0,b.o)().createFolder(M))?.error!="string"&&(o(M),h(!1))},onDismiss:()=>{h(!1)},validate:j=>{const M=j.toLowerCase();return(0,b.E)(j,v)?"A file or a folder with the same name already exists":Se.test(M)?j.length>Q?`Name is too long, maximum length: ${Q} characters`:!0:"Name contains illegal characters"}})]})};return(0,e.jsx)(V.Y,{navModel:f,children:(0,e.jsx)(V.Y.Contents,{isLoading:p.loading,children:I()})})}const be=t=>({wrapper:(0,i.css)`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,tableControlRowWrapper:(0,i.css)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${t.spacing(2)};
  `,tableWrapper:(0,i.css)`
    border: 1px solid ${t.colors.border.medium};
    height: 100%;
  `,border:(0,i.css)`
    border: 1px solid ${t.colors.border.medium};
    padding: ${t.spacing(2)};
  `,errorAlert:(0,i.css)`
    padding-top: 20px;
  `,uploadButton:(0,i.css)`
    margin-right: ${t.spacing(2)};
  `})},53652:(X,W,s)=>{s.d(W,{E:()=>P,o:()=>U});var e=s(89667),i=s(57875),u=s(17172),R=s(32264),K=s(27677);class z{constructor(){}async get(l){const g=`api/storage/read/${l}`.replace("//","/");return(0,u.AI)().get(g)}async list(l){let g="api/storage/list/";l&&(g+=l+"/");const w=await(0,u.AI)().get(g);if(w?.data){const O=(0,e.or)(w);for(const A of O.fields)A.display=(0,i.J)({field:A,theme:R.$.theme2});return O}}async createFolder(l){const g=await(0,u.AI)().post("/api/storage/createFolder",JSON.stringify({path:l}));return g.success?{}:{error:g.message??"unknown error"}}async deleteFolder(l){const g=await(0,u.AI)().post("/api/storage/deleteFolder",JSON.stringify(l));return g.success?{}:{error:g.message??"unknown error"}}async deleteFile(l){const g=await(0,u.AI)().post(`/api/storage/delete/${l.path}`);return g.success?{}:{error:g.message??"unknown error"}}async delete(l){return l.isFolder?this.deleteFolder({path:l.path,force:!0}):this.deleteFile({path:l.path})}async upload(l,g,w){const O=new FormData;O.append("folder",l),O.append("file",g),O.append("overwriteExistingFile",String(w));const A=await fetch("/api/storage/upload",{method:"POST",body:O});let S=await A.json();return S||(S={}),S.status=A.status,S.statusText=A.statusText,A.status!==200&&!S.err&&(S.err=!0),S}async write(l,g){return K.IB.post(`/api/storage/write/${l}`,g)}async getConfig(){return(0,u.AI)().get("/api/storage/config")}async getOptions(l){return(0,u.AI)().get(`/api/storage/options/${l}`)}}function P(H,l){const w=H.toLowerCase().trim();return l.map(A=>A.trim().toLowerCase()).includes(w)}let B;function U(){return B||(B=new z),B}}}]);

//# sourceMappingURL=StoragePage.98d459aaf780b9691aff.js.map