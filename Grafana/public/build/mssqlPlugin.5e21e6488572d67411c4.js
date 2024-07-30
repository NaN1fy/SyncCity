"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9040],{91062:(B,T,c)=>{c.d(T,{A:()=>R});var S=c(96540),b=c(47433),e=Object.defineProperty,I=Object.defineProperties,P=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,X=(u,i,l)=>i in u?e(u,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):u[i]=l,w=(u,i)=>{for(var l in i||(i={}))E.call(i,l)&&X(u,l,i[l]);if(A)for(var l of A(i))v.call(i,l)&&X(u,l,i[l]);return u},O=(u,i)=>I(u,P(i)),N=(u,i)=>{var l={};for(var g in u)E.call(u,g)&&i.indexOf(g)<0&&(l[g]=u[g]);if(u!=null&&A)for(var g of A(u))i.indexOf(g)<0&&v.call(u,g)&&(l[g]=u[g]);return l};const R=u=>{var i=u,{children:l}=i,g=N(i,["children"]);return S.createElement(b.x,O(w({},g),{kind:"section"}),l)}},68704:(B,T,c)=>{c.d(T,{I:()=>R});var S=c(96540),b=c(32196),e=c(40845),I=Object.defineProperty,P=Object.defineProperties,A=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,w=(u,i,l)=>i in u?I(u,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):u[i]=l,O=(u,i)=>{for(var l in i||(i={}))v.call(i,l)&&w(u,l,i[l]);if(E)for(var l of E(i))X.call(i,l)&&w(u,l,i[l]);return u},N=(u,i)=>P(u,A(i));const R=({dataSourceName:u,docsLink:i,hasRequiredFields:l=!0,className:g})=>{const L=(0,e.$j)(),z={container:(0,b.css)({p:{margin:0},"p + p":{marginTop:L.spacing(2)}}),text:(0,b.css)(N(O({},L.typography.body),{color:L.colors.text.secondary,a:(0,b.css)({color:L.colors.text.link,textDecoration:"underline","&:hover":{textDecoration:"none"}})}))};return S.createElement("div",{className:(0,b.cx)(z.container,g)},S.createElement("p",{className:z.text},"Before you can use the ",u," data source, you must configure it below or in the config file. For detailed instructions,"," ",S.createElement("a",{href:i,target:"_blank",rel:"noreferrer"},"view the documentation"),"."),l&&S.createElement("p",{className:z.text},S.createElement("i",null,"Fields marked with * are required")))}},56694:(B,T,c)=>{c.r(T),c.d(T,{plugin:()=>Se});var S=c(40187),b=c(84669),e=c(74848),I=c(32196),P=c(40845);function A(){const t=(0,P.of)(E);return(0,e.jsxs)("div",{children:[(0,e.jsx)("h2",{children:"MSSQL cheat sheet"}),"Time series:",(0,e.jsxs)("ul",{className:t.ulPadding,children:[(0,e.jsx)("li",{children:"return column named time (in UTC), as a unix time stamp or any sql native date data type. You can use the macros below."}),(0,e.jsx)("li",{children:"any other columns returned will be the time point values."})]}),"Optional:",(0,e.jsxs)("ul",{className:t.ulPadding,children:[(0,e.jsxs)("li",{children:["return column named ",(0,e.jsx)("i",{children:"metric"})," to represent the series name."]}),(0,e.jsx)("li",{children:"If multiple value columns are returned the metric column is used as prefix."}),(0,e.jsx)("li",{children:"If no column named metric is found the column name of the value column is used as series name"})]}),(0,e.jsx)("p",{children:"Resultsets of time series queries need to be sorted by time."}),"Table:",(0,e.jsx)("ul",{className:t.ulPadding,children:(0,e.jsx)("li",{children:"return any set of columns"})}),"Macros:",(0,e.jsxs)("ul",{className:t.ulPadding,children:[(0,e.jsx)("li",{children:"$__time(column) -> column AS time"}),(0,e.jsx)("li",{children:"$__timeEpoch(column) -> DATEDIFF(second, '1970-01-01', column) AS time"}),(0,e.jsx)("li",{children:"$__timeFilter(column) -> column BETWEEN '2017-04-21T05:01:17Z' AND '2017-04-21T05:01:17Z'"}),(0,e.jsx)("li",{children:"$__unixEpochFilter(column) -> column >= 1492750877 AND column <= 1492750877"}),(0,e.jsx)("li",{children:"$__unixEpochNanoFilter(column) -> column >= 1494410783152415214 AND column <= 1494497183142514872"}),(0,e.jsx)("li",{children:"$__timeGroup(column, '5m'[, fillvalue]) -> CAST(ROUND(DATEDIFF(second, '1970-01-01', column)/300.0, 0) as bigint)*300 by setting fillvalue grafana will fill in missing values according to the interval fillvalue can be either a literal value, NULL or previous; previous will fill in the previous seen value or NULL if none has been seen yet"}),(0,e.jsx)("li",{children:"$__timeGroupAlias(column, '5m'[, fillvalue]) -> CAST(ROUND(DATEDIFF(second, '1970-01-01', column)/300.0, 0) as bigint)*300 AS [time]"}),(0,e.jsx)("li",{children:"$__unixEpochGroup(column,'5m') -> FLOOR(column/300)*300"}),(0,e.jsx)("li",{children:"$__unixEpochGroupAlias(column,'5m') -> FLOOR(column/300)*300 AS [time]"})]}),(0,e.jsx)("p",{children:"Example of group by and order by with $__timeGroup:"}),(0,e.jsx)("pre",{children:(0,e.jsxs)("code",{children:["SELECT $__timeGroup(date_time_col, '1h') AS time, sum(value) as value ",(0,e.jsx)("br",{}),"FROM yourtable",(0,e.jsx)("br",{}),"GROUP BY $__timeGroup(date_time_col, '1h')",(0,e.jsx)("br",{}),"ORDER BY 1",(0,e.jsx)("br",{})]})}),"Or build your own conditionals using these macros which just return the values:",(0,e.jsxs)("ul",{className:t.ulPadding,children:[(0,e.jsx)("li",{children:"$__timeFrom() -> '2017-04-21T05:01:17Z'"}),(0,e.jsx)("li",{children:"$__timeTo() -> '2017-04-21T05:01:17Z'"}),(0,e.jsx)("li",{children:"$__unixEpochFrom() -> 1492750877"}),(0,e.jsx)("li",{children:"$__unixEpochTo() -> 1492750877"}),(0,e.jsx)("li",{children:"$__unixEpochNanoFrom() -> 1494410783152415214"}),(0,e.jsx)("li",{children:"$__unixEpochNanoTo() -> 1494497183142514872"})]})]})}function E(t){return{ulPadding:(0,I.css)({margin:t.spacing(1,0),paddingLeft:t.spacing(5)})}}var v=c(22391),X=c(68704),w=c(91062),O=c(29020),N=c(42418),R=c(50720),u=c(25994),i=c(88575),l=c(10354),g=c(90182),L=c(15292),z=c(9226),M=c(84167),G=c(17081),Q=c(60188),K=c(2913),V=c(96540),H=c(94701),$=c(32264),C=(t=>(t.sqlAuth="SQL Server Authentication",t.windowsAuth="Windows Authentication",t.azureAuth="Azure AD Authentication",t.kerberosRaw="Windows AD: Username + password",t.kerberosKeytab="Windows AD: Keytab",t.kerberosCredentialCache="Windows AD: Credential cache",t.kerberosCredentialCacheLookupFile="Windows AD: Credential cache file",t))(C||{}),F=(t=>(t.disable="disable",t.false="false",t.true="true",t))(F||{}),W=(t=>(t.Public="AzureCloud",t.None="",t))(W||{}),f=(t=>(t.MSI="msi",t.CLIENT_SECRET="clientsecret",t.AD_PASSWORD="ad-password",t))(f||{}),Y=(t=>(t.Public="AzureCloud",t.None="",t))(Y||{});const Z=[{value:"AzureCloud",label:"Azure"}];function Te(t){switch(t.authType){case AzureAuthType.MSI:return!0;case AzureAuthType.CLIENT_SECRET:return!!(t.azureCloud&&t.tenantId&&t.clientId&&t.clientSecret);case AzureAuthType.AD_PASSWORD:return!!(t.clientId&&t.password&&t.userId)}}const _=(t,a)=>t?{authType:f.MSI}:{authType:f.CLIENT_SECRET,azureCloud:a},q=(t,a)=>{const n=Symbol("Concealed client secret");return t?n:typeof a=="string"&&a.length>0?a:void 0},ee=(t,a)=>{const n=t.jsonData?.azureCredentials,r=t.secureJsonFields?.azureClientSecret,s=t.secureJsonData?.azureClientSecret,o=t.secureJsonFields?.password,d=t.secureJsonData?.password,y=!!a.azure?.managedIdentityEnabled,p=a.azure?.cloud||W.Public;if(!n)return _(y,p);switch(n.authType){case f.MSI:return y?{authType:f.MSI}:{authType:f.CLIENT_SECRET,azureCloud:p};case f.CLIENT_SECRET:return{authType:f.CLIENT_SECRET,azureCloud:n.azureCloud||p,tenantId:n.tenantId,clientId:n.clientId,clientSecret:q(r,s)};case f.AD_PASSWORD:return{authType:f.AD_PASSWORD,userId:n.userId,clientId:n.clientId,password:q(o,d)}}},te=(t,a,n)=>{const r=!!a.azure?.managedIdentityEnabled,s=a.azure?.cloud||W.Public;switch(n.authType){case f.MSI:if(!r)throw new Error("Managed Identity authentication is not enabled in Grafana config.");return t={...t,jsonData:{...t.jsonData,azureCredentials:{authType:f.MSI}}},t;case f.CLIENT_SECRET:return t={...t,jsonData:{...t.jsonData,azureCredentials:{authType:f.CLIENT_SECRET,azureCloud:n.azureCloud||s,tenantId:n.tenantId,clientId:n.clientId}},secureJsonData:{...t.secureJsonData,azureClientSecret:typeof n.clientSecret=="string"&&n.clientSecret.length>0?n.clientSecret:void 0},secureJsonFields:{...t.secureJsonFields,azureClientSecret:typeof n.clientSecret=="symbol"}},t;case f.AD_PASSWORD:return{...t,jsonData:{...t.jsonData,azureCredentials:{authType:f.AD_PASSWORD,userId:n.userId,clientId:n.clientId}},secureJsonData:{...t.secureJsonData,password:typeof n.password=="string"&&n.password.length>0?n.password:void 0},secureJsonFields:{...t.secureJsonFields,password:typeof n.password=="symbol"}}}};var J=c(55852);const ae=t=>{const{managedIdentityEnabled:a,azureEntraPasswordCredentialsEnabled:n,credentials:r,azureCloudOptions:s,onCredentialsChange:o,disabled:d}=t,y=m=>{if(o){const h={...r,authType:m.value||f.MSI};o(h)}},p=[{value:f.CLIENT_SECRET,label:"App Registration"}];a&&p.push({value:f.MSI,label:"Managed Identity"}),n&&p.push({value:f.AD_PASSWORD,label:"Azure Entra Password"});const x=({property:m,value:h})=>{if(o){const k={...r,[m]:h};o(k)}};return(0,e.jsxs)("div",{children:[(0,e.jsx)(i.D,{label:"Authentication",description:"Choose the type of authentication to Azure services",htmlFor:"authentication-type",children:(0,e.jsx)(g.l6,{width:20,value:p.find(m=>m.value===r.authType),options:p,onChange:y,disabled:d})}),r.authType===f.CLIENT_SECRET&&(0,e.jsxs)(e.Fragment,{children:[s&&(0,e.jsx)(i.D,{label:"Azure Cloud",htmlFor:"azure-cloud-type",disabled:d,children:(0,e.jsx)(g.l6,{value:s.find(m=>m.value===r.azureCloud),options:s,onChange:m=>{const h=m.value||"";x({property:"azureCloud",value:h})},isDisabled:d,inputId:"azure-cloud-type","aria-label":"Azure Cloud",width:20})}),(0,e.jsx)(i.D,{label:"Directory (tenant) ID",required:!0,htmlFor:"tenant-id",invalid:!r.tenantId,error:"Tenant ID is required",children:(0,e.jsx)(l.p,{width:45,placeholder:"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",value:r.tenantId||"",onChange:m=>{const h=m.target.value;x({property:"tenantId",value:h})},disabled:d,"aria-label":"Tenant ID"})}),(0,e.jsx)(i.D,{label:"Application (client) ID",required:!0,htmlFor:"client-id",invalid:!r.clientId,error:"Client ID is required",children:(0,e.jsx)(l.p,{width:45,placeholder:"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",value:r.clientId||"",onChange:m=>{const h=m.target.value;x({property:"clientId",value:h})},disabled:d,"aria-label":"Client ID"})}),!d&&(typeof r.clientSecret=="symbol"?(0,e.jsx)(i.D,{label:"Client Secret",htmlFor:"client-secret",required:!0,children:(0,e.jsxs)("div",{className:"width-30",style:{display:"flex",gap:"4px"},children:[(0,e.jsx)(l.p,{"aria-label":"Client Secret",placeholder:"configured",disabled:!0,"data-testid":"client-secret",width:45}),(0,e.jsx)(J.$n,{variant:"secondary",type:"button",onClick:()=>{x({property:"clientSecret",value:""})},disabled:d,children:"Reset"})]})}):(0,e.jsx)(i.D,{label:"Client Secret",required:!0,htmlFor:"client-secret",invalid:!r.clientSecret,error:"Client secret is required",children:(0,e.jsx)(l.p,{width:45,"aria-label":"Client Secret",placeholder:"XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",value:r.clientSecret||"",onChange:m=>{const h=m.target.value;x({property:"clientSecret",value:h})},id:"client-secret",disabled:d})}))]}),r.authType===f.AD_PASSWORD&&n&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.D,{label:"User Id",required:!0,htmlFor:"user-id",invalid:!r.userId,error:"User ID is required",children:(0,e.jsx)(l.p,{width:45,value:r.userId||"",onChange:m=>{const h=m.target.value;x({property:"userId",value:h})},disabled:d,"aria-label":"User ID"})}),(0,e.jsx)(i.D,{label:"Application Client ID",required:!0,htmlFor:"application-client-id",invalid:!r.clientId,error:"Application Client ID is required",children:(0,e.jsx)(l.p,{width:45,value:r.clientId||"",onChange:m=>{const h=m.target.value;x({property:"clientId",value:h})},disabled:d,"aria-label":"Application Client ID"})}),!d&&(typeof r.password=="symbol"?(0,e.jsx)(i.D,{label:"Password",htmlFor:"password",required:!0,children:(0,e.jsxs)("div",{className:"width-30",style:{display:"flex",gap:"4px"},children:[(0,e.jsx)(l.p,{"aria-label":"Password",placeholder:"configured",disabled:!0,"data-testid":"password",width:45}),(0,e.jsx)(J.$n,{variant:"secondary",type:"button",onClick:()=>{x({property:"password",value:""})},disabled:d,children:"Reset"})]})}):(0,e.jsx)(i.D,{label:"Password",required:!0,htmlFor:"password",invalid:!r.password,error:"Password is required",children:(0,e.jsx)(l.p,{width:45,"aria-label":"Password",value:r.password||"",onChange:m=>{const h=m.target.value;x({property:"password",value:h})},id:"password",disabled:d})}))]})]})},Ie=null,re=t=>{const{dataSourceConfig:a,onChange:n}=t,r=$.$.azure.managedIdentityEnabled,s=$.$.azure.azureEntraPasswordCredentialsEnabled,o=(0,V.useMemo)(()=>ee(a,$.$),[a]),d=y=>{n(te(a,$.$,y))};return(0,H.A)(()=>{a.jsonData.authType||d(o)}),(0,e.jsx)(ae,{managedIdentityEnabled:r,azureEntraPasswordCredentialsEnabled:s,credentials:o,azureCloudOptions:Z,onCredentialsChange:d,disabled:a.readOnly})},Pe=null,U=(0,e.jsxs)("span",{children:["Use the format ",(0,e.jsx)("code",{children:"user@EXAMPLE.COM"}),". Realm is derived from the username."]}),ne=t=>{const{options:a,onOptionsChange:n}=t,r=a.jsonData,s=40,o=r?.keytabFilePath,d=r?.credentialCache,y=r?.credentialCacheLookupFile,p=h=>{(0,v.lO)(t,"keytabFilePath",h.currentTarget.value)},x=h=>{(0,v.lO)(t,"credentialCache",h.currentTarget.value)},m=h=>{(0,v.lO)(t,"credentialCacheLookupFile",h.currentTarget.value)};return(0,e.jsxs)(e.Fragment,{children:[r.authenticationType===C.kerberosKeytab&&(0,e.jsxs)(M.n,{label:"Windows AD: Keytab",children:[(0,e.jsx)(i.D,{label:"Username",required:!0,invalid:!a.user,error:"Username is required",description:U,children:(0,e.jsx)(l.p,{value:a.user||"",placeholder:"name@EXAMPLE.COM",onChange:h=>n({...a,user:h.currentTarget.value}),width:s})}),(0,e.jsx)(i.D,{label:"Keytab file path",required:!0,invalid:!o,error:"Keytab file path is required",children:(0,e.jsx)(l.p,{placeholder:"/home/grot/grot.keytab",onChange:p,width:s,required:!0,value:o||""})})]}),r.authenticationType===C.kerberosCredentialCache&&(0,e.jsx)(M.n,{label:"Windows AD: Credential cache",children:(0,e.jsx)(i.D,{label:"Credential cache path",required:!0,invalid:!d,error:"Credential cache path is required",children:(0,e.jsx)(l.p,{placeholder:"/tmp/krb5cc_1000",onChange:x,width:s,value:d||"",required:!0})})}),r.authenticationType===C.kerberosCredentialCacheLookupFile&&(0,e.jsxs)(M.n,{label:"Windows AD: Credential cache file",children:[(0,e.jsx)(i.D,{label:"Username",required:!0,invalid:!a.user,error:"Username is required",description:U,children:(0,e.jsx)(l.p,{value:a.user||"",placeholder:"name@EXAMPLE.COM",onChange:h=>n({...a,user:h.currentTarget.value}),width:s})}),(0,e.jsx)(i.D,{label:"Credential cache file path",required:!0,invalid:!y,error:"Credential cache file path is required",children:(0,e.jsx)(l.p,{placeholder:"/home/grot/cache.json",onChange:m,width:s,value:y||"",required:!0})})]})]})},ie=t=>{const{options:a}=t,n=a.jsonData,r=n?.configFilePath,s=40,o=p=>{(0,v.lO)(t,"UDPConnectionLimit",p)},d=p=>{(0,v.lO)(t,"enableDNSLookupKDC",p.currentTarget.value)},y=p=>{(0,v.lO)(t,"configFilePath",p.currentTarget.value)};return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(O.I,{title:"Windows AD: Advanced Settings",children:(0,e.jsxs)(M.n,{children:[(0,e.jsx)(i.D,{label:"UDP Preference Limit",description:(0,e.jsxs)("span",{children:["The default is ",(0,e.jsx)("code",{children:"1"})," and means always use TCP and is optional."]}),children:(0,e.jsx)(l.p,{type:"text",width:s,placeholder:"0",defaultValue:n.UDPConnectionLimit,onChange:p=>{const x=Number(p.currentTarget.value);Number.isNaN(x)||o(x)}})}),(0,e.jsx)(i.D,{label:"DNS Lookup KDC",description:(0,e.jsxs)("span",{children:["Indicate whether DNS `SRV` records should be used to locate the KDCs and other servers for a realm. The default is ",(0,e.jsx)("code",{children:"true"}),"."]}),children:(0,e.jsx)(l.p,{type:"text",width:s,placeholder:"true",defaultValue:n.enableDNSLookupKDC,onChange:d})}),(0,e.jsx)(i.D,{label:"krb5 config file path",description:(0,e.jsxs)("span",{children:["The path to the configuration file for the"," ",(0,e.jsx)("a",{href:"https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html",children:"MIT krb5 package"}),". The default is ",(0,e.jsx)("code",{children:"/etc/krb5.conf"}),"."]}),children:(0,e.jsx)(l.p,{onChange:y,width:s,required:!0,value:r||"/etc/krb5.conf"})})]})})})},D=40,se=t=>{(0,b.nj)(t);const{options:a,onOptionsChange:n}=t,r=(0,P.of)(le),s=a.jsonData,o=K.config.azureAuthEnabled,d={azureAuthIsSupported:o,azureAuthSettingsUI:re},y=()=>{(0,v.QP)(t,"password")},p=j=>Ee=>{n({...a,[j]:Ee.currentTarget.value})},x=j=>{(0,v.lO)(t,"tlsSkipVerify",j.currentTarget.checked)},m=j=>{(0,v.lO)(t,"encrypt",j.value)},h=j=>{n({...a,jsonData:{...s,authenticationType:j.value,azureCredentials:void 0,keytabFilePath:void 0,credentialCache:void 0,credentialCacheLookupFile:void 0},secureJsonData:{...a.secureJsonData,password:""},secureJsonFields:{...a.secureJsonFields,password:!1},user:""})},k=j=>{(0,v.lO)(t,"connectionTimeout",j??0)},we=()=>{const j=[{value:C.sqlAuth,label:"SQL Server Authentication"},{value:C.windowsAuth,label:"Windows Authentication"},{value:C.kerberosRaw,label:"Windows AD: Username + password"},{value:C.kerberosKeytab,label:"Windows AD: Keytab file"},{value:C.kerberosCredentialCache,label:"Windows AD: Credential cache"},{value:C.kerberosCredentialCacheLookupFile,label:"Windows AD: Credential cache file"}];return o?[...j,{value:C.azureAuth,label:C.azureAuth}]:j},Ae=[{value:F.disable,label:"disable"},{value:F.false,label:"false"},{value:F.true,label:"true"}];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(X.I,{dataSourceName:"Microsoft SQL Server",docsLink:"https://grafana.com/docs/grafana/latest/datasources/mssql/",hasRequiredFields:!0}),(0,e.jsxs)(N.F,{title:"User Permission",severity:"info",children:["The database user should only be granted SELECT permissions on the specified database and tables you want to query. Grafana does not validate that queries are safe so queries can contain any SQL statement. For example, statements like ",(0,e.jsx)("code",{children:"USE otherdb;"})," and ",(0,e.jsx)("code",{children:"DROP TABLE user;"})," would be executed. To protect against this we ",(0,e.jsx)("em",{children:"highly"})," recommend you create a specific MS SQL user with restricted permissions. Check out the"," ",(0,e.jsx)(R.N,{rel:"noreferrer",target:"_blank",href:"http://docs.grafana.org/features/datasources/mssql/",children:"Microsoft SQL Server Data Source Docs"})," ","for more information."]}),(0,e.jsx)(u.c,{}),(0,e.jsxs)(w.A,{title:"Connection",children:[(0,e.jsx)(i.D,{label:"Host",required:!0,invalid:!a.url,error:"Host is required",children:(0,e.jsx)(l.p,{width:D,name:"host",type:"text",value:a.url||"",placeholder:"localhost:1433",onChange:p("url")})}),(0,e.jsx)(i.D,{label:"Database",required:!0,invalid:!s.database,error:"Database is required",children:(0,e.jsx)(l.p,{width:D,name:"database",value:s.database||"",placeholder:"database name",onChange:(0,v.PG)(t,"database")})})]}),(0,e.jsxs)(w.A,{title:"TLS/SSL Auth",children:[(0,e.jsx)(i.D,{htmlFor:"encrypt",description:(0,e.jsxs)(e.Fragment,{children:["Determines whether or to which extent a secure SSL TCP/IP connection will be negotiated with the server.",(0,e.jsxs)("ul",{className:r.ulPadding,children:[(0,e.jsxs)("li",{children:[(0,e.jsx)("i",{children:"disable"})," - Data sent between client and server is not encrypted."]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("i",{children:"false"})," - Data sent between client and server is not encrypted beyond the login packet. (default)"]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("i",{children:"true"})," - Data sent between client and server is encrypted."]})]}),"If you're using an older version of Microsoft SQL Server like 2008 and 2008R2 you may need to disable encryption to be able to connect."]}),label:"Encrypt",children:(0,e.jsx)(g.l6,{options:Ae,value:s.encrypt||F.false,inputId:"encrypt",onChange:m,width:D})}),s.encrypt===F.true?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.D,{htmlFor:"skipTlsVerify",label:"Skip TLS Verify",children:(0,e.jsx)(L.d,{id:"skipTlsVerify",onChange:x,value:s.tlsSkipVerify||!1})}),s.tlsSkipVerify?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.D,{description:(0,e.jsx)("span",{children:"Path to file containing the public key certificate of the CA that signed the SQL Server certificate. Needed when the server certificate is self signed."}),label:"TLS/SSL Root Certificate",children:(0,e.jsx)(l.p,{value:s.sslRootCertFile||"",onChange:(0,v.PG)(t,"sslRootCertFile"),placeholder:"TLS/SSL root certificate file path",width:D})}),(0,e.jsx)(i.D,{label:"Hostname in server certificate",children:(0,e.jsx)(l.p,{placeholder:"Common Name (CN) in server certificate",value:s.serverName||"",onChange:(0,v.PG)(t,"serverName"),width:D})})]})]}):null]}),(0,e.jsxs)(w.A,{title:"Authentication",children:[(0,e.jsx)(i.D,{label:"Authentication Type",htmlFor:"authenticationType",description:(0,e.jsxs)("ul",{className:r.ulPadding,children:[(0,e.jsxs)("li",{children:[(0,e.jsx)("i",{children:"SQL Server Authentication"})," This is the default mechanism to connect to MS SQL Server. Enter the SQL Server Authentication login or the Windows Authentication login in the DOMAIN\\User format."]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("i",{children:"Windows Authentication"})," Windows Integrated Security - single sign on for users who are already logged onto Windows and have enabled this option for MS SQL Server."]}),o&&(0,e.jsxs)("li",{children:[(0,e.jsx)("i",{children:"Azure Authentication"})," Securely authenticate and access Azure resources and applications using Azure AD credentials - Managed Service Identity and Client Secret Credentials are supported."]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("i",{children:"Windows AD: Username + password"})," Windows Active Directory - Sign on for domain user via username/password."]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("i",{children:"Windows AD: Keytab"})," Windows Active Directory - Sign on for domain user via keytab file."]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("i",{children:"Windows AD: Credential cache"})," Windows Active Directory - Sign on for domain user via credential cache."]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("i",{children:"Windows AD: Credential cache file"})," Windows Active Directory - Sign on for domain user via credential cache file."]})]}),children:(0,e.jsx)(g.l6,{value:s.authenticationType||C.sqlAuth,inputId:"authenticationType",options:we(),onChange:h,width:D})}),(0,e.jsx)(ne,{...t}),(s.authenticationType===C.sqlAuth||s.authenticationType===C.kerberosRaw||!s.authenticationType)&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.D,{label:"Username",required:!0,invalid:!a.user,error:"Username is required",description:s.authenticationType===C.kerberosRaw?U:"",children:(0,e.jsx)(l.p,{value:a.user||"",placeholder:s.authenticationType===C.kerberosRaw?"name@EXAMPLE.COM":"user",onChange:p("user"),width:D})}),(0,e.jsx)(i.D,{label:"Password",required:!0,invalid:!a.secureJsonFields.password&&!a.secureJsonData?.password,error:"Password is required",children:(0,e.jsx)(z.L4,{width:D,placeholder:"Password",isConfigured:a.secureJsonFields&&a.secureJsonFields.password,onReset:y,onChange:(0,v.mn)(t,"password"),required:!0})})]}),o&&s.authenticationType===C.azureAuth&&(0,e.jsx)(M.n,{label:"Azure Authentication Settings",children:(0,e.jsx)(d.azureAuthSettingsUI,{dataSourceConfig:a,onChange:n})})]}),(0,e.jsx)(u.c,{}),(0,e.jsxs)(w.A,{title:"Additional settings",description:"Additional settings are optional settings that can be configured for more control over your data source. This includes connection limits, connection timeout, group-by time interval, and Secure Socks Proxy.",isCollapsible:!0,isInitiallyOpen:!0,children:[(0,e.jsx)(b.jN,{options:a,onOptionsChange:n}),(0,e.jsxs)(O.I,{title:"Connection details",children:[(0,e.jsx)(i.D,{description:(0,e.jsxs)("span",{children:["A lower limit for the auto group by time interval. Recommended to be set to write frequency, for example",(0,e.jsx)("code",{children:"1m"})," if your data is written every minute."]}),label:"Min time interval",children:(0,e.jsx)(l.p,{width:D,placeholder:"1m",value:s.timeInterval||"",onChange:(0,v.PG)(t,"timeInterval")})}),(0,e.jsx)(i.D,{description:(0,e.jsxs)("span",{children:["The number of seconds to wait before canceling the request when connecting to the database. The default is ",(0,e.jsx)("code",{children:"0"}),", meaning no timeout."]}),label:"Connection timeout",children:(0,e.jsx)(Q.Q,{width:D,placeholder:"60",min:0,value:s.connectionTimeout,onChange:k})})]}),K.config.secureSocksDSProxyEnabled&&(0,e.jsx)(G.Y,{options:a,onOptionsChange:n}),(0,e.jsx)(ie,{...t})]})]})};function le(t){return{ulPadding:(0,I.css)({margin:t.spacing(1,0),paddingLeft:t.spacing(5)})}}function oe(){return"SELECT name FROM sys.databases WHERE name NOT IN ('master', 'tempdb', 'model', 'msdb');"}function ce(t){return`SELECT TABLE_SCHEMA + '.' + TABLE_NAME as schemaAndName
    FROM [${t}].INFORMATION_SCHEMA.TABLES`}function de(t,a){return`
   USE ${t}
   SELECT COLUMN_NAME as 'column',DATA_TYPE as 'type'
   FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME='${a}';`}class ue{constructor(a,n,r){this.target=(0,b.To)(a||{refId:"A"}),this.templateSrv=n,this.scopedVars=r}quoteLiteral(a){return"'"+a.replace(/'/g,"''")+"'"}}var he=c(33125),pe=c(98765);const me=({getColumns:t,getTables:a})=>(n,r)=>({...r&&(0,he.N)(n,r),tables:{resolve:async s=>await a.current(s?.table),parseName:s=>{if(!s)return{table:""};let o=s,d=o.value;for(;o.next&&o.next.type!==pe.ks.Whitespace;)d+=o.next.value,o=o.next;return o.value.endsWith(".")&&(d=o.value.slice(0,o.value.length-1)),{table:d}}},columns:{resolve:async s=>{if(!s?.table)return[];const[o,d,y]=s.table.split(".");return await t.current({table:`${d}.${y}`,dataset:o,refId:"A"})}}});async function fe(t,a){const n=await t.fields(a);return n.length>0?n.map(r=>({name:r.value,type:r.value,description:r.value})):[]}async function ve(t,a){return await t.lookup?.(a)||[]}var ge=c(2543);function Ce(t){switch(t){case"datetimeoffset":case"date":case"datetime2":case"smalldatetime":case"datetime":case"time":return"clock-nine";case"bit":return"toggle-off";case"tinyint":case"smallint":case"int":case"bigint":case"decimal":case"numeric":case"real":case"float":case"money":case"smallmoney":return"calculator-alt";case"char":case"varchar":case"text":case"nchar":case"nvarchar":case"ntext":case"binary":case"varbinary":case"image":return"text";default:return}}function ye(t){switch(t){case"datetimeoffset":case"datetime2":case"smalldatetime":case"datetime":return"datetime";case"time":return"time";case"date":return"date";case"bit":return"boolean";case"tinyint":case"smallint":case"int":case"bigint":case"decimal":case"numeric":case"real":case"float":case"money":case"smallmoney":return"number";case"char":case"varchar":case"text":case"nchar":case"nvarchar":case"ntext":case"binary":case"varbinary":case"image":return"text";default:return"text"}}function xe({sql:t,dataset:a,table:n}){let r="";if(!t||!(0,b.YW)(t.columns))return r;if(r+=be(t.columns,t.limit),a&&n&&(r+=`FROM ${a}.${n} `),t.whereString&&(r+=`WHERE ${t.whereString} `),t.groupBy?.[0]?.property.name){const s=t.groupBy.map(o=>o.property.name).filter(o=>!(0,ge.isEmpty)(o));r+=`GROUP BY ${s.join(", ")} `}return t.orderBy?.property.name&&(r+=`ORDER BY ${t.orderBy.property.name} `),t.orderBy?.property.name&&t.orderByDirection&&(r+=`${t.orderByDirection} `),r}function be(t,a){const n=t.map(r=>{let s="";return r.name&&r.alias?s+=`${r.name}(${r.parameters?.map(o=>`${o.name}`)}) AS ${r.alias}`:r.name?s+=`${r.name}(${r.parameters?.map(o=>`${o.name}`)})`:r.alias?s+=`${r.parameters?.map(o=>`${o.name}`)} AS ${r.alias}`:s+=`${r.parameters?.map(o=>`${o.name}`)}`,s});return`SELECT ${je(a)?"TOP("+a+")":""} ${n.join(", ")} `}const je=t=>t!==void 0&&t>=0;class De extends b.oK{constructor(a){super(a),this.sqlLanguageDefinition=void 0}getQueryModel(a,n,r){return new ue(a,n,r)}async fetchDatasets(){return(await this.runSql(oe(),{refId:"datasets"})).fields.name?.values.flat()??[]}async fetchTables(a){return(await this.runSql(ce(a),{refId:"tables"})).fields.schemaAndName?.values.flat()??[]}async fetchFields(a){if(!a.table)return[];const[n,r]=a.table.split("."),s=await this.runSql(de(a.dataset,r),{refId:"columns"}),o=[];for(let d=0;d<s.length;d++){const y=s.fields.column.values[d],p=s.fields.type.values[d];o.push({label:y,value:y,type:p,icon:Ce(p),raqbFieldType:ye(p)})}return o}getSqlLanguageDefinition(a){if(this.sqlLanguageDefinition!==void 0)return this.sqlLanguageDefinition;const n={getColumns:{current:r=>fe(a,r)},getTables:{current:r=>ve(a,r)}};return this.sqlLanguageDefinition={id:"sql",completionProvider:me(n),formatter:b.se},this.sqlLanguageDefinition}getDB(){return this.db!==void 0?this.db:{init:()=>Promise.resolve(!0),datasets:()=>this.fetchDatasets(),tables:a=>this.fetchTables(a),getEditorLanguageDefinition:()=>this.getSqlLanguageDefinition(this.db),fields:async a=>!a?.dataset||!a?.table?[]:this.fetchFields(a),validateQuery:a=>Promise.resolve({isError:!1,isValid:!0,query:a,error:"",rawSql:a.rawSql}),dsID:()=>this.id,dispose:a=>{},toRawSql:xe,lookup:async a=>{if(a){const n=a.split(".").filter(r=>r);return n.length>2?[]:n.length===1?(await this.fetchTables(n[0])).map(s=>({name:s,completion:s})):[]}else return(await this.fetchDatasets()).map(r=>({name:r,completion:`${r}.`}))}}}}const Se=new S.tD(De).setQueryEditor(b.e_).setQueryEditorHelp(A).setConfigEditor(se)}}]);

//# sourceMappingURL=mssqlPlugin.5e21e6488572d67411c4.js.map