(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"/sTe":function(e,t,a){"use strict";a.r(t);a("BoS7");var l=a("Sdc0"),n=(a("iQDF"),a("+eQT")),i=(a("giR+"),a("fyUT")),r=(a("7Kak"),a("9yH6")),o=(a("+L6B"),a("2/Rp")),c=(a("tU7J"),a("wFql")),m=(a("jCWc"),a("kPKH")),u=(a("14J3"),a("BMrR")),s=(a("5NDa"),a("5rEg")),E=(a("y8nQ"),a("Vl3Y")),d=a("qIgq"),p=a.n(d),v=a("q1tI"),y=a.n(v),b=a("71ry"),h=a("JKkQ"),g=a("c+yx"),f=a("ih5i"),I=a("/MKj"),C=a("NFtC"),B=a.n(C),P=e=>{var t=e.dispatch,a=e.loading,d=E["a"].useForm(),v=p()(d,1),I=v[0],C=e=>{var a=e;console.log({val:a});var l={title:a.title,polls:[{question:a.question,options:a.options.filter(g["a"]).map((e,t)=>({name:e,code:t+1}))}],authorization:a.authorization,visibility:a.visibility,votesCap:a.votesCap,encrypted:a.encrypted,challenges:a.challenges,startDate:a.period[0],endDate:a.period[1]};console.log({createVoting:l}),Object(f["dispatchCreateVoting"])(t,l)};return y.a.createElement(E["a"],{layout:"vertical",form:I,name:"options_form",onFinish:C,initialValues:{votesCap:100,authorization:"public",visibility:"public",encrypted:!1,challenges:100}},y.a.createElement(E["a"].Item,{name:"title",label:"Title",rules:[{required:!0}]},y.a.createElement(s["a"],{placeholder:"Favorite color"})),y.a.createElement(E["a"].Item,{name:"question",label:"Question",rules:[{required:!0}]},y.a.createElement(s["a"],{placeholder:"What is your favorite color ?"})),y.a.createElement(E["a"].List,{name:"options"},(e,t)=>{var a=t.add,l=t.remove;return y.a.createElement("div",null,e.map((e,t)=>y.a.createElement(E["a"].Item,{label:0===t?"Options":"",required:0===t,key:e.key},y.a.createElement(u["a"],null,y.a.createElement(m["a"],{flex:"10px",style:{marginRight:10}},y.a.createElement(c["a"],null,t+1)),y.a.createElement(m["a"],{flex:"auto"},y.a.createElement(E["a"].Item,Object.assign({},e,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:"Please input option value or delete this field."}],noStyle:!0}),y.a.createElement(s["a"],{placeholder:"Option",style:{marginRight:32}}))),y.a.createElement(m["a"],{flex:"30px",style:{marginRight:10}},y.a.createElement(b["MinusCircleOutlined"],{className:B.a.dynamicDeleteButton,onClick:()=>{l(e.name)}}))))),y.a.createElement(E["a"].Item,null,y.a.createElement(o["a"],{type:"dashed",onClick:()=>{a()}},y.a.createElement(b["PlusOutlined"],null)," Add an option")))}),y.a.createElement(E["a"].Item,{name:"authorization",label:"Authorization method"},y.a.createElement(r["a"].Group,null,y.a.createElement(r["a"].Button,{value:h["a"].PUBLIC},"Public"),y.a.createElement(r["a"].Button,{value:h["a"].EMAIL},"Emails"),y.a.createElement(r["a"].Button,{value:h["a"].CODE},"Codes"))),y.a.createElement(E["a"].Item,{name:"visibility",label:"Voting visibility"},y.a.createElement(r["a"].Group,null,y.a.createElement(r["a"].Button,{value:h["b"].PUBLIC},"Public"),y.a.createElement(r["a"].Button,{value:h["b"].UNLISTED},"Unlisted"),y.a.createElement(r["a"].Button,{value:h["b"].PRIVATE},"Private"))),y.a.createElement(E["a"].Item,{label:"Number of votes cap"},y.a.createElement(E["a"].Item,{name:"votesCap",noStyle:!0},y.a.createElement(i["a"],{min:2}))),y.a.createElement(E["a"].Item,{name:"period",label:"Select time period",rules:[{type:"array",required:!0,message:"Please select time!"}]},y.a.createElement(n["a"].RangePicker,{showTime:!0,format:"YYYY-MM-DD HH:mm:ss"})),y.a.createElement(E["a"].Item,{name:"encrypted",label:"Encrypt results until the end of voting",valuePropName:"checked"},y.a.createElement(l["a"],null)),y.a.createElement(E["a"].Item,{label:"Security level (number of challenges)"},y.a.createElement(E["a"].Item,{name:"challenges",noStyle:!0},y.a.createElement(i["a"],{min:2,max:100}))),y.a.createElement(E["a"].Item,null,y.a.createElement(o["a"],{type:"primary",htmlType:"submit",loading:a},"Create")))};t["default"]=Object(I["c"])(e=>{var t=e.loading;return{loading:t.effects["".concat(f["CREATE"],"/").concat(f["CREATE_VOTING"])]}})(P)},JKkQ:function(e,t,a){"use strict";var l,n;a.d(t,"b",function(){return l}),a.d(t,"a",function(){return n}),function(e){e["PUBLIC"]="public",e["UNLISTED"]="unlisted",e["PRIVATE"]="private"}(l||(l={})),function(e){e["PUBLIC"]="public",e["EMAIL"]="email",e["CODE"]="code",e["CUSTOM"]="custom"}(n||(n={}))},NFtC:function(e,t,a){e.exports={"dynamic-delete-button":"dynamic-delete-button___NsKQg"}},"c+yx":function(e,t,a){"use strict";(function(e){function l(e){return e&&0!==e.length&&e.trim()}a.d(t,"a",function(){return l})}).call(this,a("HDXh").Buffer)}}]);