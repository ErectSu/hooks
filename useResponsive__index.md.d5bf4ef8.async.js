(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15,14],{"/7QA":function(e,a,t){"use strict";t.d(a,"d",(function(){return i})),t.d(a,"c",(function(){return g})),t.d(a,"e",(function(){return x})),t.d(a,"a",(function(){return j.a})),t.d(a,"b",(function(){return w}));var n,c=t("ODXe"),s=t("uFwe"),l=t("q1tI"),r=new Set,m={xs:{min:-1/0,max:576},sm:{min:576,max:768},md:{min:768,max:992},lg:{min:992,max:1200},xl:{min:1200,max:1600},xxl:{min:1600,max:1/0}};function u(){n||(n={size:{height:0,width:0},screen:"xs"},o(),window.addEventListener("resize",()=>{var e=n;if(o(),e!==n){var a,t=Object(s["a"])(r);try{for(t.s();!(a=t.n()).done;){var c=a.value;c()}}catch(l){t.e(l)}finally{t.f()}}}))}function o(){for(var e,a=window.innerWidth,t=window.innerHeight,c={size:{width:a,height:t}},s=!1,l=0,r=Object.keys(m);l<r.length;l++){var u=r[l];if(e=m[u],a>=e.min&&a<e.max){c.screen=u,s=!0;break}}(s||c.size.width!==n.size.width||c.size.height!==n.size.height)&&(n=c)}function i(){u();var e=Object(l["useState"])(n),a=Object(c["a"])(e,2),t=a[0],s=a[1];return Object(l["useEffect"])(()=>{var e=()=>{s(n)};return r.add(e),()=>{r.delete(e)}},[]),t}var p,E=t("VTBJ"),d=t("Ff2n"),k=t("TTbB"),b=(t("BXCy"),t("n+Aq")),N=(e,a)=>{var t=Object(b["b"])(e),n=Object(c["a"])(t,2),s=n[0],l=n[1];return Object(b["c"])(()=>{var e=a();l(e)}),[s,l]},f=N,h="__WETRIAL_USEFORMTABLE__";function v(e,a){var t=f("".concat(h).concat(a.cacheKey),()=>M()),n=Object(c["a"])(t,1),s=n[0],r=s||{},m=r.active,u=r.defaultType,o=void 0===u?"simple":u,i=r.defaultParams,N=a.form,v=a.refreshDeps,g=void 0===v?[]:v,w=a.manual,O=a.defaultType,j=void 0===O?a.cacheKey&&m?o:"simple":O,x=a.defaultParams,y=void 0===x?a.cacheKey&&m?i:void 0:x,z=(a.cacheKey,Object(d["a"])(a,["form","refreshDeps","manual","defaultType","defaultParams","cacheKey"])),R=Object(k["a"])(e,Object(E["a"])({formatResult:p},z,{paginated:!0,manual:!0})),F=R.params,I=R.run,T=F[2]||{},S=Object(l["useState"])(T.type||j),P=Object(c["a"])(S,2),q=P[0],_=P[1],A=Object(l["useState"])(T.allFormData||y&&y[1]||{}),J=Object(c["a"])(A,2),B=J[0],C=J[1],D=Object(l["useCallback"])(()=>{if(!N)return{};if(N.getFieldInstance){var e=N.getFieldsValue(),a={};return Object.keys(e).forEach(t=>{N.getFieldInstance&&!N.getFieldInstance(t)||(a[t]=e[t])}),a}return N.getFieldsValue(null,()=>!0)},[N]),K=Object(l["useRef"])(N);K.current=N,Object(l["useEffect"])(()=>{if(K.current)if(K.current.getFieldInstance){var e={};Object.keys(B).forEach(a=>{K.current.getFieldInstance&&!K.current.getFieldInstance(a)||(e[a]=B[a])}),K.current.setFieldsValue(e)}else K.current.setFieldsValue(B)},[q]),Object(l["useEffect"])(()=>{F.length>0?I(...F):w||L(y)},[]);var V=Object(l["useCallback"])(()=>{var e=D();C(Object(E["a"])({},B,{},e));var a="simple"===q?"advance":"simple";_(a)},[q,B,D]),L=Object(l["useCallback"])(e=>{setTimeout(()=>{var t=D(),n=Object(E["a"])({},B,{},t);C(n),I(e?e[0]:Object(E["a"])({pageSize:a.defaultPageSize||10},F[0]||{},{current:1}),t,{allFormData:n,type:q})})},[D,I,F,B,q]),G=Object(l["useCallback"])(()=>{N&&N.resetFields(),L()},[N,L]),H=Object(b["a"])(G),M=()=>{var e=R.tableProps.pagination,a=F[0]||{},t=a.sorter;return{active:!1,defaultType:q,defaultParams:[{current:e.current,pageSize:e.pageSize,sorter:t?{order:t.order,field:t.field}:void 0},B]}};return Object(b["d"])(()=>{w||H()},[...g]),Object(E["a"])({},R,{search:{submit:()=>{L()},type:q,changeType:V,reset:G}})}var g=v,w=e=>{if(sessionStorage){var a="".concat(h).concat(e),t=sessionStorage.getItem(a);if(null!==t){var n=JSON.parse(t);sessionStorage.setItem(a,JSON.stringify(Object(E["a"])({},n,{active:!0})))}}},O=t("kRpH"),j=t.n(O);function x(e,a){Object(l["useEffect"])(()=>{var t=j.a.subscribe(e,a);return()=>{j.a.unsubscribe(t)}},[])}},OEk7:function(e,a,t){"use strict";t.r(a);var n=t("wx14"),c=t("q1tI"),s=t.n(c),l=(t("B2uJ"),t("+su7"),t("5Yjd")),r=t.n(l),m=s.a.memo((function(){var e=t("TqRt"),a=e(t("q1tI")),n=e(t("TGq+")),c=function(){return a["default"].createElement(n["default"],null)};return a["default"].createElement(c)}));a["default"]=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"markdown"},s.a.createElement("h1",{id:"useresponsive"},s.a.createElement("a",{"aria-hidden":"true",href:"#useresponsive"},s.a.createElement("span",{className:"icon icon-link"})),"useResponsive"),s.a.createElement("p",null,"\u83b7\u53d6\u54cd\u5e94\u5f0f\u4fe1\u606f\u3002"),s.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},s.a.createElement("a",{"aria-hidden":"true",href:"#\u4ee3\u7801\u6f14\u793a"},s.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),s.a.createElement("h3",{id:"\u5728\u7ec4\u4ef6\u4e2d\u83b7\u53d6\u54cd\u5e94\u5f0f\u4fe1\u606f"},s.a.createElement("a",{"aria-hidden":"true",href:"#\u5728\u7ec4\u4ef6\u4e2d\u83b7\u53d6\u54cd\u5e94\u5f0f\u4fe1\u606f"},s.a.createElement("span",{className:"icon icon-link"})),"\u5728\u7ec4\u4ef6\u4e2d\u83b7\u53d6\u54cd\u5e94\u5f0f\u4fe1\u606f")),s.a.createElement(r.a,Object(n["a"])({source:{tsx:"import React from 'react';\nimport { useResponsive } from '@wetrial/hooks';\n\n// configResponsive({\n//   small: 0,\n//   middle: 800,\n//   large: 1200,\n// });\n\nexport default function() {\n  const { screen, size } = useResponsive();\n  return (\n    <>\n      <p>Please change the width of the browser window to see the effect: </p>\n      <p>screen:{screen}</p>\n      <p>\n        height:{size.height},width:{size.width}\n      </p>\n    </>\n  );\n}\n",jsx:"import React from 'react';\nimport { useResponsive } from '@wetrial/hooks'; // configResponsive({\n//   small: 0,\n//   middle: 800,\n//   large: 1200,\n// });\n\nexport default function() {\n  const { screen, size } = useResponsive();\n  return (\n    <>\n      <p>Please change the width of the browser window to see the effect: </p>\n      <p>screen:{screen}</p>\n      <p>\n        height:{size.height},width:{size.width}\n      </p>\n    </>\n  );\n}\n"}},{path:"/_demos/demo1-2",dependencies:{"@babel/runtime":"7.9.2","@wetrial/hooks":"2.0.3"},files:{}}),s.a.createElement(m,null)),s.a.createElement("div",{className:"markdown"},s.a.createElement("h2",{id:"api"},s.a.createElement("a",{"aria-hidden":"true",href:"#api"},s.a.createElement("span",{className:"icon icon-link"})),"API"),s.a.createElement("pre",{className:"language-typescript"},s.a.createElement("code",{className:"language-typescript"},s.a.createElement("span",{className:"token keyword"},"interface")," ",s.a.createElement("span",{className:"token class-name"},"ResponsiveInfo")," ",s.a.createElement("span",{className:"token punctuation"},"{"),s.a.createElement("br",null),"  screen",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token builtin"},"string"),s.a.createElement("span",{className:"token punctuation"},";"),s.a.createElement("br",null),"  size",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token punctuation"},"{"),s.a.createElement("br",null),"    height",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token builtin"},"number"),s.a.createElement("span",{className:"token punctuation"},";"),s.a.createElement("br",null),"    width",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token builtin"},"number"),s.a.createElement("span",{className:"token punctuation"},";"),s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"token punctuation"},"}"),s.a.createElement("span",{className:"token punctuation"},";"),s.a.createElement("br",null),s.a.createElement("span",{className:"token punctuation"},"}"),s.a.createElement("br",null),s.a.createElement("span",{className:"token keyword"},"function")," ",s.a.createElement("span",{className:"token function"},"useResponsive"),s.a.createElement("span",{className:"token punctuation"},"("),s.a.createElement("span",{className:"token punctuation"},")"),s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token maybe-class-name"},"ResponsiveInfo"),s.a.createElement("span",{className:"token punctuation"},";"),s.a.createElement("br",null))),s.a.createElement("h3",{id:"\u914d\u7f6e"},s.a.createElement("a",{"aria-hidden":"true",href:"#\u914d\u7f6e"},s.a.createElement("span",{className:"icon icon-link"})),"\u914d\u7f6e"),s.a.createElement("p",null,"\u9ed8\u8ba4\u7684\u54cd\u5e94\u5f0f\u914d\u7f6e\u548c bootstrap \u662f\u4e00\u81f4\u7684\uff1a"),s.a.createElement("pre",{className:"language-javascript"},s.a.createElement("code",{className:"language-javascript"},s.a.createElement("span",{className:"token punctuation"},"{"),s.a.createElement("br",null),"   xs",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token punctuation"},"{"),s.a.createElement("br",null),"    min",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token operator"},"-"),s.a.createElement("span",{className:"token number"},"Infinity"),s.a.createElement("span",{className:"token punctuation"},","),s.a.createElement("br",null),"    max",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"576"),s.a.createElement("span",{className:"token punctuation"},","),s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"token punctuation"},"}"),s.a.createElement("span",{className:"token punctuation"},","),s.a.createElement("br",null),"  sm",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token punctuation"},"{"),s.a.createElement("br",null),"    min",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"576"),s.a.createElement("span",{className:"token punctuation"},","),s.a.createElement("br",null),"    max",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"768"),s.a.createElement("span",{className:"token punctuation"},","),s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"token punctuation"},"}"),s.a.createElement("span",{className:"token punctuation"},","),s.a.createElement("br",null),"  md",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token punctuation"},"{"),s.a.createElement("br",null),"    min",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"768"),s.a.createElement("span",{className:"token punctuation"},","),s.a.createElement("br",null),"    max",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"992"),s.a.createElement("span",{className:"token punctuation"},","),s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"token punctuation"},"}"),s.a.createElement("span",{className:"token punctuation"},","),s.a.createElement("br",null),"  lg",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token punctuation"},"{"),s.a.createElement("br",null),"    min",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"992"),s.a.createElement("span",{className:"token punctuation"},","),s.a.createElement("br",null),"    max",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"1200"),s.a.createElement("span",{className:"token punctuation"},","),s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"token punctuation"},"}"),s.a.createElement("span",{className:"token punctuation"},","),s.a.createElement("br",null),"  xl",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token punctuation"},"{"),s.a.createElement("br",null),"    min",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"1200"),s.a.createElement("span",{className:"token punctuation"},","),s.a.createElement("br",null),"    max",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"1600"),s.a.createElement("span",{className:"token punctuation"},","),s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"token punctuation"},"}"),s.a.createElement("span",{className:"token punctuation"},","),s.a.createElement("br",null),"  xxl",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token punctuation"},"{"),s.a.createElement("br",null),"    min",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token number"},"1600"),s.a.createElement("span",{className:"token punctuation"},","),s.a.createElement("br",null),"    max",s.a.createElement("span",{className:"token punctuation"},":")," ",s.a.createElement("span",{className:"token operator"},"+"),s.a.createElement("span",{className:"token number"},"Infinity"),s.a.createElement("span",{className:"token punctuation"},","),s.a.createElement("br",null),"  ",s.a.createElement("span",{className:"token punctuation"},"}"),s.a.createElement("br",null),s.a.createElement("span",{className:"token punctuation"},"}"),s.a.createElement("br",null)))))}},"TGq+":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),c=t.n(n),s=t("/7QA");a["default"]=function(){var e=Object(s["d"])(),a=e.screen,t=e.size;return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Please change the width of the browser window to see the effect: "),c.a.createElement("p",null,"screen:",a),c.a.createElement("p",null,"height:",t.height,",width:",t.width))}},TqRt:function(e,a){function t(e){return e&&e.__esModule?e:{default:e}}e.exports=t}}]);