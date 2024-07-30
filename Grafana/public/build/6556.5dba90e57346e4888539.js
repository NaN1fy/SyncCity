"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[6556],{16556:($t,ne,E)=>{E.r(ne),E.d(ne,{ReactMonacoEditor:()=>Ut});var ye=E(74848);function we(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?oe(Object(r),!0).forEach(function(n){we(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Oe(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function je(e,t){if(e==null)return{};var r=Oe(e,t),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Me(e,t){return Ee(e)||Se(e,t)||Pe(e,t)||Ce()}function Ee(e){if(Array.isArray(e))return e}function Se(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var r=[],n=!0,o=!1,i=void 0;try{for(var c=e[Symbol.iterator](),s;!(n=(s=c.next()).done)&&(r.push(s.value),!(t&&r.length===t));n=!0);}catch(d){o=!0,i=d}finally{try{!n&&c.return!=null&&c.return()}finally{if(o)throw i}}return r}}function Pe(e,t){if(e){if(typeof e=="string")return ae(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ae(e,t)}}function ae(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ce(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Re(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ue(Object(r),!0).forEach(function(n){Re(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Te(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return t.reduceRight(function(o,i){return i(o)},n)}}function I(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var c=arguments.length,s=new Array(c),d=0;d<c;d++)s[d]=arguments[d];return t.apply(r,[].concat(o,s))}}}function V(e){return{}.toString.call(e).includes("Object")}function Ae(e){return!Object.keys(e).length}function T(e){return typeof e=="function"}function Le(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ke(e,t){return V(t)||j("changeType"),Object.keys(t).some(function(r){return!Le(e,r)})&&j("changeField"),t}function De(e){T(e)||j("selectorType")}function ze(e){T(e)||V(e)||j("handlerType"),V(e)&&Object.values(e).some(function(t){return!T(t)})&&j("handlersType")}function Ne(e){e||j("initialIsRequired"),V(e)||j("initialType"),Ae(e)&&j("initialContent")}function Ve(e,t){throw new Error(e[t]||e.default)}var xe={initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"},j=I(Ve)(xe),x={changes:ke,selector:De,handler:ze,initial:Ne};function Be(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};x.initial(e),x.handler(t);var r={current:e},n=I(He)(r,t),o=I(Ue)(r),i=I(x.changes)(e),c=I(Fe)(r);function s(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(C){return C};return x.selector(b),b(r.current)}function d(b){Te(n,o,i,c)(b)}return[s,d]}function Fe(e,t){return T(t)?t(e.current):t}function Ue(e,t){return e.current=le(le({},e.current),t),t}function He(e,t,r){return T(t)?t(e.current):Object.keys(r).forEach(function(n){var o;return(o=t[n])===null||o===void 0?void 0:o.call(t,e.current[n])}),r}var $e={create:Be};const We=$e;var qe={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs"}};const Ge=qe;function Ye(e){return function t(){for(var r=this,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var c=arguments.length,s=new Array(c),d=0;d<c;d++)s[d]=arguments[d];return t.apply(r,[].concat(o,s))}}}const Je=Ye;function Ke(e){return{}.toString.call(e).includes("Object")}const Qe=Ke;function Xe(e){return e||fe("configIsRequired"),Qe(e)||fe("configType"),e.urls?(Ze(),{paths:{vs:e.urls.monacoBase}}):e}function Ze(){console.warn(se.deprecation)}function _e(e,t){throw new Error(e[t]||e.default)}var se={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},fe=Je(_e)(se),et={config:Xe};const tt=et;var rt=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(o){return r.reduceRight(function(i,c){return c(i)},o)}};const nt=rt;function de(e,t){return Object.keys(t).forEach(function(r){t[r]instanceof Object&&e[r]&&Object.assign(t[r],de(e[r],t[r]))}),ie(ie({},e),t)}const ot=de;var it={type:"cancelation",msg:"operation is manually canceled"};function at(e){var t=!1,r=new Promise(function(n,o){e.then(function(i){return t?o(it):n(i)}),e.catch(o)});return r.cancel=function(){return t=!0},r}const $=at;var ut=We.create({config:Ge,isInitialized:!1,resolve:null,reject:null,monaco:null}),ge=Me(ut,2),A=ge[0],B=ge[1];function ct(e){var t=tt.config(e),r=t.monaco,n=je(t,["monaco"]);B(function(o){return{config:ot(o.config,n),monaco:r}})}function lt(){var e=A(function(t){var r=t.monaco,n=t.isInitialized,o=t.resolve;return{monaco:r,isInitialized:n,resolve:o}});if(!e.isInitialized){if(B({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),$(W);if(window.monaco&&window.monaco.editor)return pe(window.monaco),e.resolve(window.monaco),$(W);nt(st,dt)(gt)}return $(W)}function st(e){return document.body.appendChild(e)}function ft(e){var t=document.createElement("script");return e&&(t.src=e),t}function dt(e){var t=A(function(n){var o=n.config,i=n.reject;return{config:o,reject:i}}),r=ft("".concat(t.config.paths.vs,"/loader.js"));return r.onload=function(){return e()},r.onerror=t.reject,r}function gt(){var e=A(function(r){var n=r.config,o=r.resolve,i=r.reject;return{config:n,resolve:o,reject:i}}),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],function(r){pe(r),e.resolve(r)},function(r){e.reject(r)})}function pe(e){A().monaco||B({monaco:e})}function pt(){return A(function(e){var t=e.monaco;return t})}var W=new Promise(function(e,t){return B({resolve:e,reject:t})}),vt={config:ct,init:lt,__getMonacoInstance:pt};const q=vt;var a=E(96540),ht={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},G=ht,mt={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},bt=mt;function yt({children:e}){return a.createElement("div",{style:bt.container},e)}var wt=yt,Ot=wt;function jt({width:e,height:t,isEditorReady:r,loading:n,_ref:o,className:i,wrapperProps:c}){return a.createElement("section",{style:{...G.wrapper,width:e,height:t},...c},!r&&a.createElement(Ot,null,n),a.createElement("div",{ref:o,style:{...G.fullWidth,...!r&&G.hide},className:i}))}var Mt=jt,ve=(0,a.memo)(Mt);function Et(e){(0,a.useEffect)(e,[])}var Y=Et;function St(e,t,r=!0){let n=(0,a.useRef)(!0);(0,a.useEffect)(n.current||!r?()=>{n.current=!1}:e,t)}var w=St;function L(){}function P(e,t,r,n){return Pt(e,n)||Ct(e,t,r,n)}function Pt(e,t){return e.editor.getModel(he(e,t))}function Ct(e,t,r,n){return e.editor.createModel(t,r,n?he(e,n):void 0)}function he(e,t){return e.Uri.parse(t)}function Rt({original:e,modified:t,language:r,originalLanguage:n,modifiedLanguage:o,originalModelPath:i,modifiedModelPath:c,keepCurrentOriginalModel:s=!1,keepCurrentModifiedModel:d=!1,theme:b="light",loading:C="Loading...",options:O={},height:J="100%",width:K="100%",className:Q,wrapperProps:X={},beforeMount:Z=L,onMount:_=L}){let[y,k]=(0,a.useState)(!1),[D,g]=(0,a.useState)(!0),p=(0,a.useRef)(null),f=(0,a.useRef)(null),z=(0,a.useRef)(null),h=(0,a.useRef)(_),u=(0,a.useRef)(Z),R=(0,a.useRef)(!1);Y(()=>{let l=q.init();return l.then(v=>(f.current=v)&&g(!1)).catch(v=>v?.type!=="cancelation"&&console.error("Monaco initialization: error:",v)),()=>p.current?N():l.cancel()}),w(()=>{if(p.current&&f.current){let l=p.current.getOriginalEditor(),v=P(f.current,e||"",n||r||"text",i||"");v!==l.getModel()&&l.setModel(v)}},[i],y),w(()=>{if(p.current&&f.current){let l=p.current.getModifiedEditor(),v=P(f.current,t||"",o||r||"text",c||"");v!==l.getModel()&&l.setModel(v)}},[c],y),w(()=>{let l=p.current.getModifiedEditor();l.getOption(f.current.editor.EditorOption.readOnly)?l.setValue(t||""):t!==l.getValue()&&(l.executeEdits("",[{range:l.getModel().getFullModelRange(),text:t||"",forceMoveMarkers:!0}]),l.pushUndoStop())},[t],y),w(()=>{p.current?.getModel()?.original.setValue(e||"")},[e],y),w(()=>{let{original:l,modified:v}=p.current.getModel();f.current.editor.setModelLanguage(l,n||r||"text"),f.current.editor.setModelLanguage(v,o||r||"text")},[r,n,o],y),w(()=>{f.current?.editor.setTheme(b)},[b],y),w(()=>{p.current?.updateOptions(O)},[O],y);let U=(0,a.useCallback)(()=>{if(!f.current)return;u.current(f.current);let l=P(f.current,e||"",n||r||"text",i||""),v=P(f.current,t||"",o||r||"text",c||"");p.current?.setModel({original:l,modified:v})},[r,t,o,e,n,i,c]),H=(0,a.useCallback)(()=>{!R.current&&z.current&&(p.current=f.current.editor.createDiffEditor(z.current,{automaticLayout:!0,...O}),U(),f.current?.editor.setTheme(b),k(!0),R.current=!0)},[O,b,U]);(0,a.useEffect)(()=>{y&&h.current(p.current,f.current)},[y]),(0,a.useEffect)(()=>{!D&&!y&&H()},[D,y,H]);function N(){let l=p.current?.getModel();s||l?.original?.dispose(),d||l?.modified?.dispose(),p.current?.dispose()}return a.createElement(ve,{width:K,height:J,isEditorReady:y,loading:C,_ref:z,className:Q,wrapperProps:X})}var It=Rt,Wt=(0,a.memo)(It);function qt(){let[e,t]=Ie(ce.__getMonacoInstance());return Y(()=>{let r;return e||(r=ce.init(),r.then(n=>{t(n)})),()=>r?.cancel()}),e}var Gt=null;function Tt(e){let t=(0,a.useRef)();return(0,a.useEffect)(()=>{t.current=e},[e]),t.current}var At=Tt,F=new Map;function Lt({defaultValue:e,defaultLanguage:t,defaultPath:r,value:n,language:o,path:i,theme:c="light",line:s,loading:d="Loading...",options:b={},overrideServices:C={},saveViewState:O=!0,keepCurrentModel:J=!1,width:K="100%",height:Q="100%",className:X,wrapperProps:Z={},beforeMount:_=L,onMount:y=L,onChange:k,onValidate:D=L}){let[g,p]=(0,a.useState)(!1),[f,z]=(0,a.useState)(!0),h=(0,a.useRef)(null),u=(0,a.useRef)(null),R=(0,a.useRef)(null),U=(0,a.useRef)(y),H=(0,a.useRef)(_),N=(0,a.useRef)(),l=(0,a.useRef)(n),v=At(i),me=(0,a.useRef)(!1),ee=(0,a.useRef)(!1);Y(()=>{let m=q.init();return m.then(M=>(h.current=M)&&z(!1)).catch(M=>M?.type!=="cancelation"&&console.error("Monaco initialization: error:",M)),()=>u.current?Ht():m.cancel()}),w(()=>{let m=P(h.current,e||n||"",t||o||"",i||r||"");m!==u.current?.getModel()&&(O&&F.set(v,u.current?.saveViewState()),u.current?.setModel(m),O&&u.current?.restoreViewState(F.get(i)))},[i],g),w(()=>{u.current?.updateOptions(b)},[b],g),w(()=>{!u.current||n===void 0||(u.current.getOption(h.current.editor.EditorOption.readOnly)?u.current.setValue(n):n!==u.current.getValue()&&(ee.current=!0,u.current.executeEdits("",[{range:u.current.getModel().getFullModelRange(),text:n,forceMoveMarkers:!0}]),u.current.pushUndoStop(),ee.current=!1))},[n],g),w(()=>{let m=u.current?.getModel();m&&o&&h.current?.editor.setModelLanguage(m,o)},[o],g),w(()=>{s!==void 0&&u.current?.revealLine(s)},[s],g),w(()=>{h.current?.editor.setTheme(c)},[c],g);let be=(0,a.useCallback)(()=>{if(!(!R.current||!h.current)&&!me.current){H.current(h.current);let m=i||r,M=P(h.current,n||e||"",t||o||"",m||"");u.current=h.current?.editor.create(R.current,{model:M,automaticLayout:!0,...b},C),O&&u.current.restoreViewState(F.get(m)),h.current.editor.setTheme(c),s!==void 0&&u.current.revealLine(s),p(!0),me.current=!0}},[e,t,r,n,o,i,b,C,O,c,s]);(0,a.useEffect)(()=>{g&&U.current(u.current,h.current)},[g]),(0,a.useEffect)(()=>{!f&&!g&&be()},[f,g,be]),l.current=n,(0,a.useEffect)(()=>{g&&k&&(N.current?.dispose(),N.current=u.current?.onDidChangeModelContent(m=>{ee.current||k(u.current.getValue(),m)}))},[g,k]),(0,a.useEffect)(()=>{if(g){let m=h.current.editor.onDidChangeMarkers(M=>{let te=u.current.getModel()?.uri;if(te&&M.find(re=>re.path===te.path)){let re=h.current.editor.getModelMarkers({resource:te});D?.(re)}});return()=>{m?.dispose()}}return()=>{}},[g,D]);function Ht(){N.current?.dispose(),J?O&&F.set(i,u.current.saveViewState()):u.current.getModel()?.dispose(),u.current.dispose()}return a.createElement(ve,{width:K,height:Q,isEditorReady:g,loading:d,_ref:R,className:X,wrapperProps:Z})}var kt=Lt,Dt=(0,a.memo)(kt),zt=Dt,Nt=E(88477),Vt=E(40845),xt=E(84140);function Bt(e){if(e===void 0)return{};{const t={"editor.background":e.components.input.background,"minimap.background":e.colors.background.secondary};return Object.keys(t).forEach(r=>{t[r]=S(t[r])}),t}}function S(e){return(0,xt.A)(e).toHexString()}function Ft(e,t){const r=Bt(t);e.editor.defineTheme("grafana-dark",{base:"vs-dark",inherit:!0,colors:r,rules:[{token:"predefined",foreground:S(t?.visualization.getColorByName("purple"))},{token:"operator",foreground:S(t?.visualization.getColorByName("orange"))},{token:"tag",foreground:S(t?.visualization.getColorByName("green"))}]}),e.editor.defineTheme("grafana-light",{base:"vs",inherit:!0,colors:r,rules:[{token:"predefined",foreground:S(t?.visualization.getColorByName("purple"))},{token:"operator",foreground:S(t?.visualization.getColorByName("orange"))},{token:"tag",foreground:S(t?.visualization.getColorByName("green"))}]})}q.config({monaco:Nt});const Ut=e=>{const{beforeMount:t}=e,r=(0,Vt.$j)(),n=(0,a.useCallback)(o=>{Ft(o,r),t?.(o)},[t,r]);return(0,ye.jsx)(zt,{...e,theme:r.isDark?"grafana-dark":"grafana-light",beforeMount:n})}}}]);

//# sourceMappingURL=6556.5dba90e57346e4888539.js.map