(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"/7QA":function(e,t,a){"use strict";a.d(t,"d",(function(){return d})),a.d(t,"f",(function(){return O})),a.d(t,"c",(function(){return x})),a.d(t,"e",(function(){return C})),a.d(t,"a",(function(){return I.a})),a.d(t,"b",(function(){return S}));var r,n=a("tJVT"),c=a("rAM+"),s=a("q1tI"),l=new Set,i={xs:{min:-1/0,max:576},sm:{min:576,max:768},md:{min:768,max:992},lg:{min:992,max:1200},xl:{min:1200,max:1600},xxl:{min:1600,max:1/0}};function u(){r||(r={size:{height:0,width:0},screen:"xs"},o(),window.addEventListener("resize",()=>{var e=r;if(o(),e!==r){var t,a=Object(c["a"])(l);try{for(a.s();!(t=a.n()).done;){var n=t.value;n()}}catch(s){a.e(s)}finally{a.f()}}}))}function o(){for(var e,t=window.innerWidth,a=window.innerHeight,n={size:{width:t,height:a}},c=!1,s=0,l=Object.keys(i);s<l.length;s++){var u=l[s];if(e=i[u],t>=e.min&&t<e.max){n.screen=u,c=!0;break}}(c||n.size.width!==r.size.width||n.size.height!==r.size.height)&&(r=n)}function d(){u();var e=Object(s["useState"])(r),t=Object(n["a"])(e,2),a=t[0],c=t[1];return Object(s["useEffect"])(()=>{var e=()=>{c(r)};return l.add(e),()=>{l.delete(e)}},[]),a}var b=a("9XV7"),f="__table_columns_";function m(e,t){var a=Object(b["c"])("".concat(f).concat(e),t),r=Object(n["a"])(a,2),c=r[0],s=r[1];return{tableProps:{columnStateMap:c,onColumnsStateChange:s},getColumns:e=>{var t=[];return e&&e.forEach(e=>{var a=e.dataIndex;c&&c[a]&&!1===c[a].show||t.push(a)}),t}}}var v,O=m,j=a("k1fw"),h=a("PpiC"),p=a("0iz5"),g=(a("DwD6"),(e,t)=>{var a=Object(b["e"])(e),r=Object(n["a"])(a,2),c=r[0],s=r[1];return Object(b["f"])(()=>{var e=t();s(e)}),[c,s]}),E=g,y="__WETRIAL_USEFORMTABLE__";function w(e,t){var a=E("".concat(y).concat(t.cacheKey),()=>q()),r=Object(n["a"])(a,1),c=r[0],l=c||{},i=l.active,u=l.defaultType,o=void 0===u?"simple":u,d=l.defaultParams,f=t.form,m=t.refreshDeps,O=void 0===m?[]:m,g=t.manual,w=t.defaultType,x=void 0===w?t.cacheKey&&i?o:"simple":w,S=t.defaultParams,k=void 0===S?t.cacheKey&&i?d:void 0:S,I=(t.cacheKey,Object(h["a"])(t,["form","refreshDeps","manual","defaultType","defaultParams","cacheKey"])),C=Object(p["b"])(e,Object(j["a"])(Object(j["a"])({formatResult:v},I),{},{paginated:!0,manual:!0})),z=C.params,T=C.run,F=z[2]||{},J=Object(s["useState"])(F.type||x),P=Object(n["a"])(J,2),_=P[0],K=P[1],B=Object(s["useState"])(F.allFormData||k&&k[1]||{}),D=Object(n["a"])(B,2),M=D[0],R=D[1],V=Object(s["useCallback"])(()=>f?f.getFieldsValue(null,()=>!0):{},[f]),A=Object(s["useRef"])(f);A.current=f,Object(s["useEffect"])(()=>{if(A.current)if(A.current.getFieldInstance){var e={};Object.keys(M).forEach(t=>{A.current.getFieldInstance&&!A.current.getFieldInstance(t)||(e[t]=M[t])}),A.current.setFieldsValue(e)}else A.current.setFieldsValue(M)},[_]),Object(s["useEffect"])(()=>{z.length>0?T(...z):g||N(k)},[]);var H=Object(s["useCallback"])(()=>{var e=V();R(Object(j["a"])(Object(j["a"])({},M),e));var t="simple"===_?"advance":"simple";K(t)},[_,M,V]),N=Object(s["useCallback"])(e=>{setTimeout(()=>{var t=V(),a=Object(j["a"])(Object(j["a"])({},M),t);R(a),T(e?e[0]:Object(j["a"])(Object(j["a"])({},z[0]||{}),{},{current:1}),t,{allFormData:a,type:_})})},[V,T,z,M,_]),L=Object(s["useCallback"])(()=>{f&&f.resetFields(),N()},[f,N]),W=Object(b["d"])(L),q=()=>{var e=C.tableProps.pagination,t=z[0]||{},a=t.sorter;return{active:!1,defaultType:_,defaultParams:[{current:e.current,pageSize:e.pageSize,sorter:a?{order:a.order,field:a.field}:void 0},M]}};return Object(b["g"])(()=>{g||W()},[...O]),Object(j["a"])(Object(j["a"])({},C),{},{search:{submit:()=>{N()},type:_,changeType:H,reset:L}})}var x=w,S=e=>{if(sessionStorage){var t="".concat(y).concat(e),a=sessionStorage.getItem(t);if(null!==a){var r=JSON.parse(a);sessionStorage.setItem(t,JSON.stringify(Object(j["a"])(Object(j["a"])({},r),{},{active:!0})))}}},k=a("kRpH"),I=a.n(k);function C(e,t){Object(s["useEffect"])(()=>{var a=I.a.subscribe(e,t);return()=>{I.a.unsubscribe(a)}},[])}},dHel:function(e,t,a){"use strict";a.r(t);a("14J3");var r=a("BMrR"),n=(a("jCWc"),a("kPKH")),c=(a("IzEo"),a("bx4M")),s=(a("7Kak"),a("9yH6")),l=a("tJVT"),i=a("q1tI"),u=a.n(i),o=a("/7QA"),d=(e,t)=>{var a={};return"all"===t?a={}:"even"===t?e.forEach((e,t)=>{t%2===1&&(a[e.dataIndex]={show:!1})}):"odd"===t?e.forEach((e,t)=>{t%2===0&&(a[e.dataIndex]={show:!1})}):e.forEach((e,t)=>{a[e.dataIndex]={show:!1}}),a};t["default"]=()=>{var e=[{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"\u5e74\u9f84",dataIndex:"age",key:"age"},{title:"\u6027\u522b",dataIndex:"gender",key:"gender"},{title:"\u4f4f\u5740",dataIndex:"address",key:"address"}],t=Object(i["useState"])("all"),a=Object(l["a"])(t,2),b=a[0],f=a[1],m=Object(o["f"])("/hooks/useTableColumnStateMapStorage"),v=m.tableProps,O=m.getColumns;Object(i["useEffect"])(()=>{var t=d(e,b);v.onColumnsStateChange(t)},[b]);var j=e=>{f(e.target.value)};return u.a.createElement(c["a"],null,u.a.createElement(s["a"].Group,{value:b,onChange:j},u.a.createElement(s["a"].Button,{value:"all"},"\u663e\u793a\u6240\u6709"),u.a.createElement(s["a"].Button,{value:"even"},"\u663e\u793a\u57fa\u6570"),u.a.createElement(s["a"].Button,{value:"odd"},"\u663e\u793a\u5076\u6570"),u.a.createElement(s["a"].Button,{value:"none"},"\u5168\u90e8\u9690\u85cf")),u.a.createElement(r["a"],null,u.a.createElement(n["a"],{span:"8"},u.a.createElement(c["a"],{bordered:!1,title:"\u6240\u6709\u5217"},JSON.stringify(e,null,"\t"))),u.a.createElement(n["a"],{span:"8"},u.a.createElement(c["a"],{bordered:!1,title:"tableProps"},JSON.stringify(v))),u.a.createElement(n["a"],{span:"8"},u.a.createElement(c["a"],{bordered:!1,title:"\u663e\u793a\u7684\u5217"},JSON.stringify(O(e))))))}}}]);