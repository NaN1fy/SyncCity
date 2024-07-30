"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4501],{39349:(z,B,i)=>{i.r(B),i.d(B,{default:()=>ba,useMuteTimingNavData:()=>ta});var a=i(74848),b=i(96540),M=i(24180),S=i(42418),P=i(83277),I=i(37959),d=i(32196),C=i(49785),k=i(40845),O=i(39558),h=i(84167),n=i(88575),A=i(10354),v=i(55852),j=i(31678),R=i(51488),L=i(70383),V=i(23770),W=i(98164),$=i(57220),w=i(56361),p=i(54486),J=i(48205),F=i(2543),H=i(67061),Z=i(14578),na=i(15292),sa=i(39268),q=i(14186),oa=i(29158),ca=i(56034),ma=i(23896),Y=i(4724);const aa="Times must be between 00:00 and 24:00 UTC",la=({intervalIndex:e})=>{const r=(0,k.of)(ua),{register:t,formState:s,getValues:l,watch:y}=(0,C.xW)(),g=y(`time_intervals.${e}.disable`),{fields:f,append:c,remove:o}=(0,C.jz)({name:`time_intervals.${e}.times`}),m=s.errors.time_intervals?.[e],u=m?.times?.some?.(E=>E?.start_time||E?.end_time)??!1;return(0,a.jsxs)("div",{children:[(0,a.jsx)(n.D,{className:r.field,label:"Time range",description:"The time inclusive of the start and exclusive of the end time (in UTC if no location has been selected, otherwise local time)",invalid:u,children:(0,a.jsx)(a.Fragment,{children:f.map((E,T)=>{const N=m?.times?.[T],U=`time_intervals.${e}.times.${T}.start_time`,X=`time_intervals.${e}.times.${T}.end_time`,_=()=>{const D=l(U),K=l(X);return[D,K]};return(0,a.jsx)("div",{className:r.timeRange,children:(0,a.jsxs)(sa.C,{children:[(0,a.jsx)(q.I,{label:"Start time",invalid:!!N?.start_time,error:N?.start_time?.message,children:(0,a.jsx)(A.p,{...t(U,{validate:D=>{if(!(0,Y.Hy)(D))return aa;const[x,G]=_();if(!(0,Y.oB)(x,G))return"Start time must be before end time"}}),className:r.timeRangeInput,maxLength:5,readOnly:g,suffix:(0,a.jsx)(Z.I,{name:"clock-nine"}),defaultValue:E.start_time,placeholder:"HH:mm","data-testid":"mute-timing-starts-at"})}),(0,a.jsx)(q.I,{label:"End time",invalid:!!N?.end_time,error:N?.end_time?.message,children:(0,a.jsx)(A.p,{...t(`time_intervals.${e}.times.${T}.end_time`,{validate:D=>{if(!(0,Y.Hy)(D))return aa;const[x,G]=_();if(!(0,Y.oB)(x,G))return"End time must be after start time"}}),className:r.timeRangeInput,maxLength:5,readOnly:g,suffix:(0,a.jsx)(Z.I,{name:"clock-nine"}),defaultValue:E.end_time,placeholder:"HH:mm","data-testid":"mute-timing-ends-at"})}),(0,a.jsx)(oa.K,{className:r.deleteTimeRange,title:"Remove",name:"trash-alt",onClick:D=>{D.preventDefault(),o(T)},tooltip:"Remove time range"})]})},E.id)})})}),(0,a.jsx)(ma.A,{shouldWrap:g,wrap:E=>(0,a.jsx)(ca.m,{content:"This time interval is disabled",placement:"right-start",children:E}),children:(0,a.jsx)(v.$n,{className:r.addTimeRange,variant:"secondary",type:"button",icon:"plus",disabled:g,onClick:()=>c({start_time:"",end_time:""}),children:"Add another time range"})})]})},ua=e=>({field:(0,d.css)({marginBottom:0}),timeRange:(0,d.css)({marginBottom:e.spacing(1)}),timeRangeInput:(0,d.css)({width:"90px"}),deleteTimeRange:(0,d.css)({margin:`${e.spacing(1)} 0 0 ${e.spacing(.5)}`}),addTimeRange:(0,d.css)({marginBottom:e.spacing(2)})});var Aa=i(90182);const da=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Ciudad_Juarez","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Fort_Nelson","America/Fortaleza","America/Glace_Bay","America/Godthab","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Inuvik","America/Iqaluit","America/Jamaica","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/Kralendijk","America/La_Paz","America/Lima","America/Los_Angeles","America/Lower_Princes","America/Maceio","America/Managua","America/Manaus","America/Marigot","America/Martinique","America/Matamoros","America/Mazatlan","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Nuuk","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Santa_Isabel","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Shiprock","America/Sitka","America/St_Barthelemy","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/South_Pole","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Arctic/Longyearbyen","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Calcutta","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Colombo","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Katmandu","Asia/Khandyga","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qostanay","Asia/Qyzylorda","Asia/Rangoon","Asia/Riyadh","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ulaanbaatar","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faroe","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belgrade","Europe/Berlin","Europe/Bratislava","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Busingen","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kiev","Europe/Kirov","Europe/Kyiv","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Mariehamn","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Oslo","Europe/Paris","Europe/Podgorica","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/San_Marino","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vatican","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","GMT","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","Local","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kanton","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Ponape","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Truk","Pacific/Wake","Pacific/Wallis","UTC"],ga=e=>{const r=da.map(t=>({label:t,value:t}));return(0,a.jsx)(Aa.l6,{...e,options:r})},fa=()=>{const e=(0,k.of)(ea),{formState:r,register:t,setValue:s}=(0,C.xW)(),{fields:l,append:y,remove:g}=(0,C.jz)({name:"time_intervals"}),{isGrafanaAlertmanager:f}=(0,L.VI)();return(0,a.jsx)(h.n,{label:"Time intervals",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:"A time interval is a definition for a moment in time. All fields are lists, and at least one list element must be satisfied to match the field. If a field is left blank, any moment of time will match the field. For an instant of time to match a complete time interval, all fields must match. A mute timing can contain multiple time intervals."}),(0,a.jsx)(H.B,{direction:"column",gap:2,children:l.map((c,o)=>{const m=r.errors;return t(`time_intervals.${o}.location`),(0,a.jsxs)("div",{className:e.timeIntervalSection,children:[(0,a.jsx)(la,{intervalIndex:o}),(0,a.jsx)(n.D,{label:"Location",invalid:!!m.time_intervals?.[o]?.location,error:m.time_intervals?.[o]?.location?.message,children:(0,a.jsx)(ga,{prefix:(0,a.jsx)(Z.I,{name:"map-marker"}),width:50,onChange:u=>{s(`time_intervals.${o}.location`,u.value)},defaultValue:{label:c.location,value:c.location},"data-testid":"mute-timing-location"})}),(0,a.jsx)(n.D,{label:"Days of the week",children:(0,a.jsx)(va,{onChange:u=>{s(`time_intervals.${o}.weekdays`,u)},defaultValue:c.weekdays})}),(0,a.jsx)(n.D,{label:"Days of the month",description:"The days of the month, 1-31, of a month. Negative values can be used to represent days which begin at the end of the month",invalid:!!m.time_intervals?.[o]?.days_of_month,error:m.time_intervals?.[o]?.days_of_month?.message,children:(0,a.jsx)(A.p,{...t(`time_intervals.${o}.days_of_month`,{validate:u=>(0,p.Ww)(u,E=>{const T=parseInt(E,10);return T>-31&&T<0||T>0&&T<32},"Invalid day")}),width:50,defaultValue:c.days_of_month,placeholder:"Example: 1, 14:16, -1","data-testid":"mute-timing-days"})}),(0,a.jsx)(n.D,{label:"Months",description:"The months of the year in either numerical or the full calendar month",invalid:!!m.time_intervals?.[o]?.months,error:m.time_intervals?.[o]?.months?.message,children:(0,a.jsx)(A.p,{...t(`time_intervals.${o}.months`,{validate:u=>(0,p.Ww)(u,E=>p.KR.includes(E)||parseInt(E,10)<13&&parseInt(E,10)>0,"Invalid month")}),width:50,placeholder:"Example: 1:3, may:august, december",defaultValue:c.months,"data-testid":"mute-timing-months"})}),(0,a.jsx)(n.D,{label:"Years",invalid:!!m.time_intervals?.[o]?.years,error:m.time_intervals?.[o]?.years?.message??"",children:(0,a.jsx)(A.p,{...t(`time_intervals.${o}.years`,{validate:u=>(0,p.Ww)(u,E=>/^\d{4}$/.test(E),"Invalid year")}),width:50,placeholder:"Example: 2021:2022, 2030",defaultValue:c.years,"data-testid":"mute-timing-years"})}),(0,a.jsxs)(H.B,{direction:"row",gap:2,children:[(0,a.jsx)(v.$n,{type:"button",variant:"destructive",fill:"outline",icon:"trash-alt",onClick:()=>g(o),children:"Remove time interval"}),!f&&(0,a.jsx)(na.K,{id:`time_intervals.${o}.disable`,label:"Disable",showLabel:!0,transparent:!0,...t(`time_intervals.${o}.disable`)})]})]},c.id)})}),(0,a.jsx)(v.$n,{type:"button",variant:"secondary",className:e.removeTimeIntervalButton,onClick:()=>{y(p.oU)},icon:"plus",children:"Add another time interval"})]})})},ha=e=>{const r=e.split(",").map(t=>t.trim()).flatMap(t=>t.includes(":")?pa(t):t).map(t=>t.toLowerCase()).filter(t=>p.jU.includes(t));return(0,F.uniq)(r)};function pa(e){const[r="",t=""]=e.split(":"),s=p.jU.indexOf(r),l=p.jU.indexOf(t);return p.jU.slice(s,l+1)}const va=({defaultValue:e="",onChange:r})=>{const t=(0,k.of)(ea),s=ha(e),[l,y]=(0,b.useState)(s),g=f=>{l.includes(f)?y(c=>(0,F.without)(c,f)):y(c=>(0,F.concat)(c,f))};return(0,b.useEffect)(()=>{r(l.join(", "))},[l,r]),(0,a.jsx)("div",{"data-testid":"mute-timing-weekdays",children:(0,a.jsx)(H.B,{gap:1,children:p.jU.map(f=>{const c=(0,d.cx)(t.dayOfTheWeek,l.includes(f)&&"selected"),o=f.slice(0,3);return(0,a.jsx)("button",{type:"button",className:c,onClick:()=>g(f),children:(0,F.upperFirst)(o)},f)})})})},ea=e=>({input:(0,d.css)({width:"400px"}),timeIntervalSection:(0,d.css)({backgroundColor:e.colors.background.secondary,padding:e.spacing(2)}),removeTimeIntervalButton:(0,d.css)({marginTop:e.spacing(2)}),dayOfTheWeek:(0,d.css)({cursor:"pointer",userSelect:"none",padding:`${e.spacing(1)} ${e.spacing(3)}`,border:`solid 1px ${e.colors.border.medium}`,background:"none",borderRadius:e.shape.radius.default,color:e.colors.text.secondary,"&.selected":{fontWeight:e.typography.fontWeightBold,color:e.colors.primary.text,borderColor:e.colors.primary.border,background:e.colors.primary.transparent}})}),ya=e=>{const r={name:"",time_intervals:[p.oU]};if(!e)return r;const t=e.time_intervals.map(s=>({times:s.times,weekdays:s.weekdays?.join(", "),days_of_month:s.days_of_month?.join(", "),months:s.months?.join(", "),years:s.years?.join(", "),location:s.location??p.oU.location,disable:(0,p.jb)(s)}));return{name:e.name,time_intervals:t}},Q=(e,r,t,s)=>{const l=r?e?.filter(({name:y})=>y!==r.name):e;return s?[...l,t]:[...l]},Ea=({fromLegacyTimeInterval:e,fromTimeIntervals:r,showError:t,loading:s,provenance:l})=>{const y=(0,j.useDispatch)(),{selectedAlertmanager:g}=(0,L.VI)(),f=(0,k.of)(Ma),[c,o]=(0,b.useState)(!1),{currentData:m}=(0,R.f)(g),u=m?.alertmanager_config,T=!!r?r:e,N=u?.mute_time_intervals??[],U=u?.time_intervals??[],X=ya(T),_=(0,C.mN)({defaultValues:X}),D=K=>{if(!m)return;const x=(0,p.iF)(K),G=g===$.hY,ra=r===void 0&&e===void 0,Sa=G?{mute_time_intervals:[...Q(U,r,x,!1),...Q(N,e,x,!0)]}:{time_intervals:Q(U,r,x,!!r||ra),mute_time_intervals:e&&!ra?Q(N,e,x,!0):void 0},{mute_time_intervals:Da,time_intervals:ka,...Ba}=u??{},Ca={...m,alertmanager_config:{...Ba,route:T&&x.name!==T.name?(0,W.Lt)(x.name,T.name,u?.route??{}):u?.route,...Sa}},xa=y((0,V.RW)({newConfig:Ca,oldConfig:m,alertManagerSourceName:g,successMessage:"Mute timing saved",redirectPath:"/alerting/routes/",redirectSearch:"tab=mute_timings"}));o(!0),xa.unwrap().finally(()=>{o(!1)})};return(0,a.jsxs)(a.Fragment,{children:[l&&(0,a.jsx)(J.Yi,{resource:J.hk.MuteTiming}),s&&(0,a.jsx)(O._,{text:"Loading mute timing"}),t&&(0,a.jsx)(S.F,{title:"No matching mute timing found"}),m&&!s&&!t&&(0,a.jsx)(C.Op,{..._,children:(0,a.jsx)("form",{onSubmit:_.handleSubmit(D),"data-testid":"mute-timing-form",children:(0,a.jsxs)(h.n,{label:"Create mute timing",disabled:!!l||c,children:[(0,a.jsx)(n.D,{required:!0,label:"Name",description:"A unique name for the mute timing",invalid:!!_.formState.errors?.name,error:_.formState.errors.name?.message,children:(0,a.jsx)(A.p,{..._.register("name",{required:!0,validate:K=>Ta(K,T,N,U)}),className:f.input,"data-testid":"mute-timing-name"})}),(0,a.jsx)(fa,{}),(0,a.jsx)(v.$n,{type:"submit",className:f.submitButton,disabled:c,children:"Save mute timing"}),(0,a.jsx)(v.z9,{type:"button",variant:"secondary",fill:"outline",href:(0,w.nL)("/alerting/routes/",g,{tab:"mute_timings"}),disabled:c,children:"Cancel"})]})})})]})};function Ta(e,r,t,s){if(!r){const l=t?.find(({name:g})=>e===g),y=s?.find(({name:g})=>e===g);return l||y?`Mute timing already exists for "${e}"`:!0}}const Ma=e=>({input:(0,d.css)({width:"400px"}),submitButton:(0,d.css)({marginRight:e.spacing(1)})}),ia=Ea,Pa=()=>{const[e]=(0,P.s)(),{selectedAlertmanager:r}=(0,L.VI)(),{currentData:t,isLoading:s,error:l}=(0,R.f)(r,{refetchOnFocus:!0,refetchOnReconnect:!0}),y=t?.alertmanager_config,g=(0,b.useCallback)((f,c)=>{const m=(c?y?.time_intervals??[]:y?.mute_time_intervals??[]).find(({name:u})=>u===f);if(m){const u=y?.muteTimeProvenances?.[m.name];return{...m,provenance:u}}return m},[y]);return(0,a.jsxs)(a.Fragment,{children:[l&&!s&&!t&&(0,a.jsx)(S.F,{severity:"error",title:`Error loading Alertmanager config for ${r}`,children:l.message||"Unknown error."}),t&&!l&&(0,a.jsxs)(M.dO,{children:[(0,a.jsx)(M.qh,{exact:!0,path:"/alerting/routes/mute-timing/new",children:(0,a.jsx)(ia,{loading:s})}),(0,a.jsx)(M.qh,{exact:!0,path:"/alerting/routes/mute-timing/edit",children:()=>{if(e.muteName){const f=g(String(e.muteName),!1),c=g(String(e.muteName),!0),m=!!c?c:f,u=m?.provenance;return(0,a.jsx)(ia,{loading:s,fromLegacyTimeInterval:f,fromTimeIntervals:c,showError:!m&&!s,provenance:u})}return(0,a.jsx)(M.rd,{to:"/alerting/routes"})}})]})]})},ja=()=>{const e=ta();return(0,a.jsx)(I.y,{navId:"am-routes",pageNav:e,accessType:"notification",children:(0,a.jsx)(Pa,{})})};function ta(){const{isExact:e,path:r}=(0,M.W5)(),[t,s]=(0,b.useState)();return(0,b.useEffect)(()=>{r==="/alerting/routes/mute-timing/new"?s({id:"alert-policy-new",text:"Add mute timing"}):r==="/alerting/routes/mute-timing/edit"&&s({id:"alert-policy-edit",text:"Edit mute timing"})},[r,e]),t}const ba=ja},23896:(z,B,i)=>{i.d(B,{A:()=>M});var a=i(96540);function b({children:S,shouldWrap:P,wrap:I},d){return P?(0,a.cloneElement)(I(S)):S}const M=(0,a.forwardRef)(b)},4724:(z,B,i)=>{i.d(B,{Hy:()=>d,IT:()=>C,av:()=>O,oB:()=>k});var a=i(74848),b=i(95093),M=i.n(b),S=i(96540),P=i(98164);const I=/^((([01][0-9])|(2[0-3])):[0-5][0-9])$|(^24:00$)/,d=h=>h?I.test(h):!0,C=h=>[...h.mute_time_intervals??[],...h.time_intervals??[]],k=(h,n)=>{if(!h&&!n)return!0;if(!h&&n||h&&!n)return!1;const A="HH:mm",v=M()().startOf("day").add(h,A),j=M()().startOf("day").add(n,A);return!!(h&&n&&v.isBefore(j)||h&&n&&j.isAfter(v))};function O(h){return h.time_intervals.map((A,v)=>{const{times:j,weekdays:R,days_of_month:L,months:V,years:W,location:$}=A,w=(0,P.Dm)(j,$),p=(0,P.uH)(R),J=(0,P.UL)(L),F=(0,P.$P)(V),H=(0,P.mP)(W);return(0,a.jsxs)(S.Fragment,{children:[`${w} ${p}`,(0,a.jsx)("br",{}),[J,F,H].join(" | "),(0,a.jsx)("br",{})]},JSON.stringify(A)+v)})}},51488:(z,B,i)=>{i.d(B,{f:()=>b});var a=i(82843);function b(M,S){const P=a.m.endpoints.getAlertmanagerConfiguration.useQuery(M??"",{refetchOnMountOrArgChange:!0,...S,skip:!M});return{...P,error:P.error}}},54486:(z,B,i)=>{i.d(B,{KR:()=>S,Ww:()=>I,d6:()=>h,iF:()=>C,jU:()=>M,jb:()=>O,oU:()=>P});var a=i(2543),b=i.n(a);const M=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],S=["january","february","march","april","may","june","july","august","september","october","november","december"],P={times:[{start_time:"",end_time:""}],weekdays:"",days_of_month:"",months:"",years:"",location:"",disable:!1},I=(n,A,v)=>n?n.split(",").map(j=>j.trim()).every(j=>j.split(":").every(A))||v:!0,d=n=>n?n.split(",").map(A=>A.trim()):void 0,C=n=>{const A=n.time_intervals.map(({times:v,weekdays:j,days_of_month:R,months:L,years:V,location:W,disable:$})=>{const w={times:k(v,$),weekdays:d(j)?.map(p=>p.toLowerCase()),days_of_month:d(R),months:d(L),years:d(V),location:W||void 0};return(0,a.omitBy)(w,a.isUndefined)});return{name:n.name,time_intervals:A}};function k(n,A){if(A)return[];const v=n?.filter(({start_time:j,end_time:R})=>!!j&&!!R);return v?.length?v:void 0}function O(n){return n.times?.length===0||n.weekdays?.length===0||n.days_of_month?.length===0||n.months?.length===0||n.years?.length===0}function h(n){return n.time_intervals.every(A=>O(A))}}}]);

//# sourceMappingURL=MuteTimings.76f4f8d2dffecdd83b47.js.map