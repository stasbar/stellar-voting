(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{CQ3q:function(e,t,n){"use strict";n.d(t,"a",function(){return p}),n.d(t,"c",function(){return h}),n.d(t,"d",function(){return E}),n.d(t,"b",function(){return g});n("+L6B");var a=n("2/Rp"),r=n("fFZ8"),o=n.n(r),l=n("vOnD"),i=n("xhQn");function c(){var e=o()(["\n  background-color: #00000000;\n  color: ",";\n  width: 150px;\n  font-size: 16px;\n  padding: 10px 0;\n  &:disabled {\n    opacity: 0.5;\n    cursor: default;\n  }\n"]);return c=function(){return e},e}function u(){var e=o()(["\n  background-color: ",";\n  width: 150px;\n  font-size: 16px;\n  padding: 10px 0;\n  &:disabled {\n    opacity: 0.5;\n    cursor: default;\n  }\n"]);return u=function(){return e},e}function s(){var e=o()(["\n  background-color: ",";\n  color: ",";\n  border-color: ",";\n  float: right;\n  border: 1px solid;\n  width: 150px;\n  font-size: 16px;\n  padding: 10px 0;\n  &:disabled {\n    opacity: 0.5;\n    cursor: default;\n  }\n  &:hover {\n    color: ",";\n    background-color: #00000000;\n    border-color: ",";\n  }\n"]);return s=function(){return e},e}function d(){var e=o()(["\n  background-color: ",";\n  color: ",";\n  border-color: ",";\n  float: right;\n  width: 120px;\n  font-size: 16px;\n  padding: 10px 0;\n  &:disabled {\n    background: ",";\n    opacity: 0.6;\n    pointer-events: none;\n    cursor: default;\n  }\n  &:hover {\n    color: ",";\n    background-color: ",";\n  }\n"]);return d=function(){return e},e}function m(){var e=o()(["\n  background-color: ",";\n  border-radius: 5px;\n  border: 0;\n  color: ",";\n  cursor: pointer;\n  font-family: 'Clear Sans Bold','Nitti Grotesk','Museo Sans','Helvetica Neue',Verdana,Arial,sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: initial;\n  padding: 14px 0 18px 0;\n  &:hover {\n    opacity: 0.8;\n  }\n  &:focus {\n    outline: 0;\n  }\n"]);return m=function(){return e},e}var f=Object(l["a"])(a["a"])(m(),i["a"],i["c"]),p=Object(l["a"])(f)(d(),e=>e.color?e.color:i["a"],i["c"],e=>e.color?e.color:i["a"],i["b"],i["c"],e=>e.color?e.color:i["a"]),h=Object(l["a"])(f)(s(),i["c"],e=>e.color?e.color:i["a"],e=>e.color?e.color:i["a"],e=>e.color?e.color:i["a"],e=>e.color?e.color:i["a"]),E=Object(l["a"])(f)(u(),e=>e.color?e.color:i["a"]),g=Object(l["a"])(f)(c(),e=>e.color?e.color:i["a"])},DpHA:function(e,t,n){e.exports={switch:"switch___3EZ1C",cipher:"cipher___1buAG",option:"option___3rNNl",myVoteCardTitle:"myVoteCardTitle___3s5EE"}},"c+yx":function(e,t,n){"use strict";(function(e){function a(e){return e&&0!==e.length&&e.trim()}function r(e){return e.charAt(0).toUpperCase()+e.substring(1)}function o(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}catch(e){console.error(e)}document.body.removeChild(t)}function l(e){navigator.clipboard?navigator.clipboard.writeText(e).then(()=>{console.log("Async: Copying to clipboard was successful!")},e=>{console.error("Async: Could not copy text: ",e)}):o(e)}n.d(t,"d",function(){return a}),n.d(t,"a",function(){return r}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return i});var i=e=>e.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}).call(this,n("HDXh").Buffer)},dDcW:function(e,t,n){"use strict";var a=n("fFZ8"),r=n.n(a),o=n("q1tI"),l=n.n(o),i=n("vOnD"),c=n("hBab"),u=n("71ry"),s=n("c+yx"),d=n("wd/R"),m=n.n(d);function f(){var e=r()(["\n    font-size: .833rem;\n    line-height: 1.4;\n    font-weight: 500;\n    font-family: inherit;\n"]);return f=function(){return e},e}function p(){var e=r()(["\n      display: inline-block;\n      background: #e2f7f3;\n      color: #41ccb4;\n      padding: 5px 6px 5px 5px;\n      border-radius: 5px;\n      border: 0;\n      font-size: 100%;\n      vertical-align: baseline;\n      margin-right: 4px;\n  "]);return p=function(){return e},e}var h=i["a"].span(p()),E=i["a"].p(f()),g=e=>{var t=e.voting;return l.a.createElement("div",null,l.a.createElement("h1",{style:{marginTop:8,fontSize:"2rem"}},null===t||void 0===t?void 0:t.title),l.a.createElement("div",{style:{fontSize:12}},l.a.createElement(E,null,l.a.createElement(h,null,{[c["Visibility"].PUBLIC]:l.a.createElement(u["EyeOutlined"],null),[c["Visibility"].UNLISTED]:l.a.createElement(u["LinkOutlined"],null),[c["Visibility"].PRIVATE]:l.a.createElement(u["LockOutlined"],null)}[null===t||void 0===t?void 0:t.visibility],l.a.createElement("span",{style:{marginLeft:2}},Object(s["a"])(null===t||void 0===t?void 0:t.visibility))),l.a.createElement(h,null,{[c["Authorization"].OPEN]:l.a.createElement(u["NotificationOutlined"],null),[c["Authorization"].EMAILS]:l.a.createElement(u["MailOutlined"],null),[c["Authorization"].DOMAIN]:l.a.createElement(u["MailOutlined"],null),[c["Authorization"].CODE]:l.a.createElement(u["KeyOutlined"],null),[c["Authorization"].KEYBASE]:l.a.createElement(u["KeyOutlined"],null)}[null===t||void 0===t?void 0:t.authorization],l.a.createElement("span",{style:{marginLeft:2}},Object(s["a"])(null===t||void 0===t?void 0:t.authorization))),l.a.createElement("span",{style:{color:"#999"}},l.a.createElement("span",{style:{marginRight:4}},m()(null===t||void 0===t?void 0:t.startDate).format("ll")),"-",l.a.createElement("span",{style:{marginLeft:4}},m()(null===t||void 0===t?void 0:t.endDate).format("ll"))))))};t["a"]=g},rAdt:function(e,t,n){"use strict";n.r(t);n("5Dmo");var a,r=n("3S7+"),o=(n("IzEo"),n("bx4M")),l=(n("+L6B"),n("2/Rp")),i=(n("BoS7"),n("Sdc0")),c=(n("cWXX"),n("/ezw")),u=n("qIgq"),s=n.n(u),d=n("q1tI"),m=n.n(d),f=n("tbAx"),p=n("/MKj"),h=n("4XXU"),E=n("CQ3q"),g=n("55Ip"),v=n("dDcW"),b=n("UdsK"),y=n("x9r5"),x=n("y3Kf"),k=n("8Skl"),C=n("/Faj"),L=n("Lyp1"),O=n("8ub7"),w=()=>m.a.createElement("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 84 67"},m.a.createElement("path",{d:"M 40.559 0.729 L 62.334 10.882 C 62.768 11.085 62.952 11.598 62.753 12.029 L 54.366 30.015 L 49.749 30.015 L 57.282 13.859 C 57.484 13.427 57.296 12.912 56.864 12.709 L 42.4 5.965 C 42.114 5.834 41.771 5.957 41.637 6.247 L 30.554 30.015 L 25.972 30.015 C 25.984 29.96 26.005 29.902 26.032 29.848 L 39.415 1.147 C 39.616 0.716 40.128 0.527 40.559 0.729 Z M 22.716 28.668 L 58.873 28.666 C 59.416 28.666 59.85 29.107 59.846 29.649 L 59.827 31.779 C 59.822 32.321 59.38 32.759 58.838 32.759 L 22.682 32.761 C 22.139 32.761 21.703 32.323 21.708 31.78 L 21.726 29.651 C 21.729 29.108 22.174 28.668 22.716 28.668 Z"}),m.a.createElement("path",{style:{stroke:"currentColor",strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:5,fill:"none"},d:"M 57.221 19.904 L 66.294 19.829 L 80.871 44.106 C 80.92 44.325 3.047 44.325 3.021 44.325 L 2.92 73.986 C 2.92 73.986 80.708 74.007 80.82 73.742 L 80.92 44.325 M 3.039 43.646 L 17.615 20.177 L 32.321 20.087"})),A=e=>m.a.createElement(O["a"],Object.assign({component:w},e)),S=n("QEzC"),j=n("d6i3"),M=n.n(j),z=n("1l/V"),T=n.n(z),B=n("1Ewi"),I=n("DpHA"),R=n.n(I),_=e=>{var t=e.voting,n=e.myTxMemo,a=Object(d["useState"])(void 0),o=s()(a,2),l=o[0],i=o[1],c=Object(d["useState"])(n),u=s()(c,2),f=u[0],p=u[1];function h(e,t){return Math.floor(Math.random()*(t-e+1))+e}function E(){return String.fromCharCode(h(97,122))}var g=e=>new Promise(t=>setTimeout(t,e));function v(e,t){return b.apply(this,arguments)}function b(){return b=T()(M.a.mark(function e(t,n){var a;return M.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!(n>t.length)){e.next=2;break}return e.abrupt("return");case 2:p(f.substring(n*Math.ceil(f.toString().length/t.length))),a=0;case 4:if(!(a<10)){e.next=11;break}return i(t.substring(0,n)+E()),e.next=8,g(30);case 8:a+=1,e.next=4;break;case 11:i(t.substring(0,n+1)),v(t,n+1);case 13:case"end":return e.stop()}},e)})),b.apply(this,arguments)}return m.a.createElement(m.a.Fragment,null,l,m.a.createElement(r["a"],{title:"Ballot is encrypted, click to decrypt"},m.a.createElement("span",{onClick:()=>{var e,a=null===(e=Object(B["e"])(t,n))||void 0===e?void 0:e.name;a&&n?(p(null===n||void 0===n?void 0:n.toString()),v(a,0)):i("Could not decode voting option")},className:R.a.cipher,style:{marginLeft:4}},f)))},N=_,D=n("c+yx");(function(e){e[e["Pie"]=0]="Pie",e[e["Bar"]=1]="Bar"})(a||(a={}));var V=e=>{var t=Math.PI/180,n=e.cx,a=e.cy,r=e.midAngle,o=e.innerRadius,l=e.outerRadius,i=e.startAngle,c=e.endAngle,u=e.fill,s=e.payload,d=e.percent,f=e.value,p=Math.sin(-t*r),E=Math.cos(-t*r),g=n+(l+10)*E,v=a+(l+10)*p,b=n+(l+30)*E,y=a+(l+30)*p,x=b+22*(E>=0?1:-1),k=y,C=E>=0?"start":"end";return m.a.createElement("g",null,m.a.createElement("text",{x:n,y:a,dy:8,textAnchor:"middle",fill:u},f," Votes"),m.a.createElement("text",{x:n,y:a,dy:28,textAnchor:"middle",fill:"#999"},(100*d).toFixed(2),"%"),m.a.createElement(h["g"],{cx:n,cy:a,innerRadius:o,outerRadius:l,startAngle:i,endAngle:c,fill:u}),m.a.createElement(h["g"],{cx:n,cy:a,startAngle:i,endAngle:c,innerRadius:l+6,outerRadius:l+10,fill:u}),m.a.createElement("path",{d:"M".concat(g,",").concat(v,"L").concat(b,",").concat(y,"L").concat(x,",").concat(k),stroke:u,fill:"none"}),m.a.createElement("circle",{cx:x,cy:k,r:2,fill:u,stroke:"none"}),m.a.createElement("text",{x:x+12*(E>=0?1:-1),y:k,textAnchor:C,fill:"#333"},s.name))},F=e=>{var t=e.loading,n=e.loadingResults,u=e.results,p=e.match,O=e.dispatch,w=e.voting,j=w?S["b"](w.id):void 0,M=j||{},z=M.myTxHash,T=M.myTxMemo,B=null===p||void 0===p?void 0:p.params["id"],I=Object(d["useState"])(a.Bar),_=s()(I,2),F=_[0],K=_[1],P=Object(d["useState"])(0),H=s()(P,2),q=H[0],Z=H[1],U=Object(d["useState"])(!1),G=s()(U,2),Q=G[0],W=G[1];return Object(d["useEffect"])(()=>{w||Object(f["dispatchFetchVoting"])(O,B)},[B,w]),Object(d["useEffect"])(()=>{w&&Object(f["dispatchFetchResults"])(O,w)},[w]),t?m.a.createElement(m.a.Fragment,null,m.a.createElement("p",null,"Loading voting metadata..."),m.a.createElement(c["a"],{active:!0})):n?m.a.createElement(m.a.Fragment,null,m.a.createElement("p",null,"Loading results from stellar blockchain..."),m.a.createElement(c["a"],{active:!0})):w?m.a.createElement("div",null,m.a.createElement(v["a"],{voting:w}),m.a.createElement("div",{style:{float:"right"}},m.a.createElement(i["a"],{className:R.a.switch,onChange:e=>K(e?a.Bar:a.Pie),checkedChildren:m.a.createElement(b["a"],null),unCheckedChildren:m.a.createElement(y["a"],null),defaultChecked:!0})),m.a.createElement("h3",{style:{marginBottom:24}},null===w||void 0===w?void 0:w.polls[0].question),F===a.Bar&&m.a.createElement(h["f"],{width:"100%",height:100+50*((null===u||void 0===u?void 0:u.length)||0)},m.a.createElement(h["b"],{layout:"vertical",data:u,margin:{top:5,bottom:5}},m.a.createElement(h["i"],{type:"number"}),m.a.createElement(h["j"],{type:"category",dataKey:"name"}),m.a.createElement(h["h"],null),m.a.createElement(h["c"],null),m.a.createElement(h["a"],{dataKey:"votes",fill:"#8884d8"}))),F===a.Pie&&m.a.createElement(h["f"],{width:"100%",maxHeight:400,aspect:1},m.a.createElement(h["e"],null,m.a.createElement(h["d"],{activeIndex:q,activeShape:V,data:u,dataKey:"votes",innerRadius:"50%",outerRadius:"80%",fill:"#8884d8",onMouseEnter:(e,t)=>Z(t)}))),z&&T&&m.a.createElement(l["a"],{type:"link",onClick:()=>W(!Q)},m.a.createElement("span",{style:{marginLeft:2}},Q?m.a.createElement(x["a"],null):m.a.createElement(k["a"],null),"My vote")),m.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://testnet.lumenscan.io/account/".concat(w.distributionAccountId)},m.a.createElement(l["a"],{type:"link",icon:m.a.createElement(C["a"],null)},m.a.createElement("span",{style:{marginLeft:2}},"Distribution account"))),m.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://testnet.lumenscan.io/account/".concat(w.ballotBoxAccountId)},m.a.createElement(l["a"],{type:"link",icon:m.a.createElement(A,null)},m.a.createElement("span",{style:{marginLeft:2}},"Ballot-box account"))),Q&&z&&T&&m.a.createElement(m.a.Fragment,null,m.a.createElement(o["a"],{title:m.a.createElement(r["a"],{title:"Copy to clipboard"},m.a.createElement("h2",{style:{cursor:"pointer"},onClick:()=>Object(D["b"])(z),className:R.a.myVoteCardTitle},z)),extra:[m.a.createElement(r["a"],{title:"This information is stored in your browser only, if you clear it, you will be unable to track your vote. Store the vote identifier in safe place."},m.a.createElement(L["a"],null))],actions:[m.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://testnet.lumenscan.io/txns/".concat(z)},"Show in blockchain")],style:{maxWidth:350}},m.a.createElement("p",{className:R.a.option},"Option: ",m.a.createElement(N,{voting:w,myTxMemo:T.toString()})))),m.a.createElement("div",{style:{float:"right",marginBottom:24,marginTop:12}},m.a.createElement(g["Link"],{to:"/wall"},m.a.createElement(E["d"],{type:"primary",size:"large"},"More")))):m.a.createElement("p",null,"Failed to load voting")};t["default"]=Object(p["c"])(e=>{var t=e.voting,n=e.loading;return{voting:t.voting,status:t.status,loading:n.effects["".concat(f["VOTING"],"/").concat(f["FETCH_VOTING"])],loadingResults:n.effects["".concat(f["VOTING"],"/").concat(f["FETCH_RESULTS"])],results:t.results}})(F)},xhQn:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var a="#ffffff",r="#979797",o="#6c72f9"}}]);