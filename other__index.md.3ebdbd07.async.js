(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7,6],{"/7QA":function(e,t,a){"use strict";a.d(t,"d",(function(){return m})),a.d(t,"c",(function(){return y})),a.d(t,"e",(function(){return F})),a.d(t,"a",(function(){return w.a})),a.d(t,"b",(function(){return k}));var n,r=a("ODXe"),c=a("uFwe"),i=a("q1tI"),s=new Set,u={xs:{min:-1/0,max:576},sm:{min:576,max:768},md:{min:768,max:992},lg:{min:992,max:1200},xl:{min:1200,max:1600},xxl:{min:1600,max:1/0}};function l(){n||(n={size:{height:0,width:0},screen:"xs"},o(),window.addEventListener("resize",()=>{var e=n;if(o(),e!==n){var t,a=Object(c["a"])(s);try{for(a.s();!(t=a.n()).done;){var r=t.value;r()}}catch(i){a.e(i)}finally{a.f()}}}))}function o(){for(var e,t=window.innerWidth,a=window.innerHeight,r={size:{width:t,height:a}},c=!1,i=0,s=Object.keys(u);i<s.length;i++){var l=s[i];if(e=u[l],t>=e.min&&t<e.max){r.screen=l,c=!0;break}}(c||r.size.width!==n.size.width||r.size.height!==n.size.height)&&(n=r)}function m(){l();var e=Object(i["useState"])(n),t=Object(r["a"])(e,2),a=t[0],c=t[1];return Object(i["useEffect"])(()=>{var e=()=>{c(n)};return s.add(e),()=>{s.delete(e)}},[]),a}var d,f=a("VTBJ"),b=a("Ff2n"),h=a("TTbB"),p=(a("BXCy"),a("n+Aq")),v=(e,t)=>{var a=Object(p["b"])(e),n=Object(r["a"])(a,2),c=n[0],i=n[1];return Object(p["c"])(()=>{var e=t();i(e)}),[c,i]},j=v,O="__WETRIAL_USEFORMTABLE__";function g(e,t){var a=j("".concat(O).concat(t.cacheKey),()=>Q()),n=Object(r["a"])(a,1),c=n[0],s=c||{},u=s.active,l=s.defaultType,o=void 0===l?"simple":l,m=s.defaultParams,v=t.form,g=t.refreshDeps,y=void 0===g?[]:g,k=t.manual,E=t.defaultType,w=void 0===E?t.cacheKey&&u?o:"simple":E,F=t.defaultParams,x=void 0===F?t.cacheKey&&u?m:void 0:F,T=(t.cacheKey,Object(b["a"])(t,["form","refreshDeps","manual","defaultType","defaultParams","cacheKey"])),S=Object(h["a"])(e,Object(f["a"])({formatResult:d},T,{paginated:!0,manual:!0})),I=S.params,B=S.run,C=I[2]||{},z=Object(i["useState"])(C.type||w),R=Object(r["a"])(z,2),_=R[0],q=R[1],J=Object(i["useState"])(C.allFormData||x&&x[1]||{}),P=Object(r["a"])(J,2),A=P[0],D=P[1],K=Object(i["useCallback"])(()=>{if(!v)return{};if(v.getFieldInstance){var e=v.getFieldsValue(),t={};return Object.keys(e).forEach(a=>{v.getFieldInstance&&!v.getFieldInstance(a)||(t[a]=e[a])}),t}return v.getFieldsValue(null,()=>!0)},[v]),N=Object(i["useRef"])(v);N.current=v,Object(i["useEffect"])(()=>{if(N.current)if(N.current.getFieldInstance){var e={};Object.keys(A).forEach(t=>{N.current.getFieldInstance&&!N.current.getFieldInstance(t)||(e[t]=A[t])}),N.current.setFieldsValue(e)}else N.current.setFieldsValue(A)},[_]),Object(i["useEffect"])(()=>{I.length>0?B(...I):k||L(x)},[]);var V=Object(i["useCallback"])(()=>{var e=K();D(Object(f["a"])({},A,{},e));var t="simple"===_?"advance":"simple";q(t)},[_,A,K]),L=Object(i["useCallback"])(e=>{setTimeout(()=>{var a=K(),n=Object(f["a"])({},A,{},a);D(n),B(e?e[0]:Object(f["a"])({pageSize:t.defaultPageSize||10},I[0]||{},{current:1}),a,{allFormData:n,type:_})})},[K,B,I,A,_]),M=Object(i["useCallback"])(()=>{v&&v.resetFields(),L()},[v,L]),H=Object(p["a"])(M),Q=()=>{var e=S.tableProps.pagination,t=I[0]||{},a=t.sorter;return{active:!1,defaultType:_,defaultParams:[{current:e.current,pageSize:e.pageSize,sorter:a?{order:a.order,field:a.field}:void 0},A]}};return Object(p["d"])(()=>{k||H()},[...y]),Object(f["a"])({},S,{search:{submit:()=>{L()},type:_,changeType:V,reset:M}})}var y=g,k=e=>{if(sessionStorage){var t="".concat(O).concat(e),a=sessionStorage.getItem(t);if(null!==a){var n=JSON.parse(a);sessionStorage.setItem(t,JSON.stringify(Object(f["a"])({},n,{active:!0})))}}},E=a("kRpH"),w=a.n(E);function F(e,t){Object(i["useEffect"])(()=>{var a=w.a.subscribe(e,t);return()=>{w.a.unsubscribe(a)}},[])}},TqRt:function(e,t){function a(e){return e&&e.__esModule?e:{default:e}}e.exports=a},dMjx:function(e,t,a){"use strict";a.r(t);a("+L6B");var n=a("2/Rp"),r=a("q1tI"),c=a.n(r),i=a("/7QA"),s=a("9kvl");t["default"]=()=>c.a.createElement(n["a"],{type:"default",onClick:()=>{Object(i["b"])("antd/use-form-table"),s["c"].push({pathname:"/hooks/antd/use-form-table",hash:"#\u6570\u636e\u7f13\u5b58"})}},"\u8fd4\u56deuseFormTable\u9875\u9762")},rvlF:function(e,t,a){"use strict";a.r(t);var n=a("wx14"),r=a("q1tI"),c=a.n(r),i=(a("B2uJ"),a("+su7"),a("5Yjd")),s=a.n(i),u=c.a.memo((function(){var e=a("TqRt"),t=e(a("q1tI")),n=e(a("dMjx")),r=function(){return t["default"].createElement(n["default"],null)};return t["default"].createElement(r)}));t["default"]=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"sample"},c.a.createElement("a",{"aria-hidden":"true",href:"#sample"},c.a.createElement("span",{className:"icon icon-link"})),"Sample"),c.a.createElement("p",null,"\u4f9b\u5176\u4ed6\u9875\u9762\u6f14\u793a\u4f7f\u7528"),c.a.createElement("h2",{id:"useformtable-\u6570\u636e\u7f13\u5b58"},c.a.createElement("a",{"aria-hidden":"true",href:"#useformtable-\u6570\u636e\u7f13\u5b58"},c.a.createElement("span",{className:"icon icon-link"})),"useFormTable \u6570\u636e\u7f13\u5b58")),c.a.createElement(s.a,Object(n["a"])({source:{tsx:"import React from 'react';\nimport { Button } from 'antd';\nimport { activeCache } from '@wetrial/hooks';\nimport { history } from 'umi';\n\nexport default () => {\n  return (\n    <Button\n      type=\"default\"\n      onClick={() => {\n        activeCache('antd/use-form-table');\n        history.push({\n          pathname: '/hooks/antd/use-form-table',\n          hash: '#\u6570\u636e\u7f13\u5b58',\n        });\n      }}\n    >\n      \u8fd4\u56deuseFormTable\u9875\u9762\n    </Button>\n  );\n};\n",jsx:"import React from 'react';\nimport { Button } from 'antd';\nimport { activeCache } from '@wetrial/hooks';\nimport { history } from 'umi';\n\nexport default () => (\n  <Button\n    type=\"default\"\n    onClick={() => {\n      activeCache('antd/use-form-table');\n      history.push({\n        pathname: '/hooks/antd/use-form-table',\n        hash: '#\u6570\u636e\u7f13\u5b58',\n      });\n    }}\n  >\n    \u8fd4\u56deuseFormTable\u9875\u9762\n  </Button>\n);\n"}},{path:"/_demos/use-form-table",dependencies:{"@babel/runtime":"7.9.2",antd:"4.1.5","@wetrial/hooks":"2.0.4",umi:"3.1.2"},files:{}}),c.a.createElement(u,null)))}}}]);