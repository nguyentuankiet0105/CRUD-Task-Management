(this["webpackJsonpreact-homework2"]=this["webpackJsonpreact-homework2"]||[]).push([[0],{138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){},150:function(e,t,n){},219:function(e,t,n){},220:function(e,t,n){},221:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(29),s=n.n(a),i=(n(138),n(139),n(42)),r=n(223),l=n(229),j=n(97),d=n(227),o=(n(140),n(6)),b=function(){var e=r.a.Header;return Object(o.jsx)(r.a,{children:Object(o.jsx)(e,{className:"header",children:Object(o.jsxs)(l.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],children:[Object(o.jsx)(j.a,{type:"primary",className:"hd_btn",children:Object(o.jsx)(i.b,{to:"/home",children:"Create New Tasks"})}),Object(o.jsx)(d.a,{placeholder:"input search text",id:"hd_ipt"}),Object(o.jsx)(j.a,{type:"primary",className:"hd_btn",children:"Search"})]})})})},u=n(226),h=(n(147),n(148),function(){return Object(o.jsx)("div",{id:"footer",children:Object(o.jsx)(u.a,{defaultCurrent:1,total:50})})}),O=n(231),x=n(68),p=n(95),f=n(27),m=n(76),g=n(225),k=n(224),y=n(228),N=n(24),v=n(230),S=n(33),w=n.n(S),D=n(73),C=(n(149),function(e,t){t.index;return Object(o.jsxs)("div",{id:"task",className:e.status,children:[Object(o.jsxs)("div",{className:"content",children:[Object(o.jsxs)("h3",{children:["Title: ",e.title]}),Object(o.jsxs)("p",{className:"content-creator",children:["Creator: ",e.creator]}),Object(o.jsxs)("p",{className:"stt",id:e.status,children:[" Status: ",Object(o.jsx)("span",{id:"stt-spn",children:e.status})," "]}),Object(o.jsxs)("p",{className:"stt",children:["Deadline: ",w()(e.deadline).format("DD/MM/YYYY")]}),Object(o.jsx)("hr",{}),Object(o.jsx)("h4",{children:"Description:"}),Object(o.jsxs)("p",{children:[" ",e.description]})]}),Object(o.jsxs)("div",{className:"status",children:[Object(o.jsx)("button",{id:"edit",onClick:e.handleEditStatus,children:"Edit"}),Object(o.jsx)("button",{id:"delete",onClick:e.handleDelete,children:"Delete"})]})]})}),I=(n(150),"listTask"),T=function(){Object(D.c)((function(e){return e.task.listTask})),Object(D.b)();var e=g.a.useForm(),t=Object(m.a)(e,1)[0],n=c.useState({title:"",creator:"",description:"",status:1,deadline:new Date}),a=Object(m.a)(n,2),s=a[0],i=a[1],r=c.useState([]),l=Object(m.a)(r,2),b=l[0],u=l[1],h=c.useState(null),O=Object(m.a)(h,2),S=O[0],T=O[1];c.useEffect((function(){var e=localStorage.getItem(I);e&&u(JSON.parse(e))}),[]),c.useEffect((function(){localStorage.setItem(I,JSON.stringify(b))}),[b]);var E=function(e){e.target?i(Object(f.a)(Object(f.a)({},s),{},Object(p.a)({},e.target.name,e.target.value))):i(Object(f.a)(Object(f.a)({},s),{},{deadline:e}))},Y=function(){return u([].concat(Object(x.a)(b),[{title:s.title,creator:s.creator,description:s.description,deadline:s.deadline,status:A(s.status)}]),i(Object(f.a)(Object(f.a)({},s),{},{title:"",creator:"",description:""})),alert("you have added the task successfully!!!"))},J=function(){if(b.trim()){var e=[].concat(Object(x.a)(b),[{title:s.title,creator:s.creator,description:s.description,deadline:s.deadline,status:s.status}]);localStorage.setItem(I,JSON.stringify(e)),u(e),i("")}else T(null)},M=function(e){var t=b;t.splice(e,1,Object(f.a)(Object(f.a)({},t[e]),{},{status:"new"===t[e].status?"inprogress":"done"})),localStorage.setItem(I,JSON.stringify(t)),u(Object(x.a)(t))},R=function(e){return b.length?b.map((function(t,n){return t.status!==e?null:Object(o.jsx)(C,Object(f.a)(Object(f.a)({},t),{},{handleEditStatus:function(){return M(n)},handleDelete:function(){if(window.confirm("B\u1ea1n c\xf3 mu\u1ed1n x\xf3a task n\xe0y kh\xf4ng ?")){var e=b;e.splice(n,1),localStorage.setItem(I,JSON.stringify(e)),u(Object(x.a)(e))}}}),n)})):Object(o.jsx)("h1",{id:"notask",children:"No Task In Here"})},A=function(e){switch(e){case 2:return"INPROGRESS";case 3:return"DONE";default:return"NEW"}},B=function(e){i(Object(f.a)(Object(f.a)({},s),{},{status:e.target.value}))},H=function(){window.confirm("B\u1ea1n c\xf3 mu\u1ed1n x\xf3a t\u1ea5t c\u1ea3 task kh\xf4ng ?")&&(u([]),alert("B\u1ea1n \u0111\xe3 x\xf3a th\xe0nh c\xf4ng !"))};return Object(o.jsx)("div",{id:"content",children:Object(o.jsxs)(N.c,{children:[Object(o.jsx)(N.a,{exact:!0,path:"/inprogress",children:R("inprogress")}),Object(o.jsx)(N.a,{exact:!0,path:"/done",children:R("done")}),Object(o.jsx)(N.a,{exact:!0,path:"/all",children:b.length?b.map((function(e,t){return Object(o.jsx)(C,Object(f.a)(Object(f.a)({},e),{},{handleEditStatus:function(){return M(t)},handleDelete:function(){if(window.confirm("B\u1ea1n c\xf3 mu\u1ed1n x\xf3a task n\xe0y kh\xf4ng ?")){var e=b;e.splice(t,1),localStorage.setItem(I,JSON.stringify(e)),u(Object(x.a)(e))}}}),t)})):Object(o.jsx)("h1",{id:"notask",children:"No Task In Here"})}),Object(o.jsx)(N.a,{exact:!0,path:"/home",children:Object(o.jsxs)(g.a,{layout:"vertical",form:t,onValuesChange:function(e){return console.log(e)},children:[Object(o.jsx)(g.a.Item,{label:"Title",children:Object(o.jsx)(d.a,{name:"title",id:"input",placeholder:S?b[S].title:"Add title new tasks in here",onChange:function(e){return E(e)},value:s.title})}),Object(o.jsx)(g.a.Item,{label:"Creator",children:Object(o.jsx)(d.a,{name:"creator",id:"input",placeholder:S?b[S].creator:"Add creator name in here",onChange:function(e){return E(e)},value:s.creator})}),Object(o.jsx)(g.a.Item,{label:"Description",children:Object(o.jsx)(d.a,{name:"description",id:"input",placeholder:S?b[S].title:"(Option) Add description tasks in here",onChange:function(e){return E(e)},value:s.description})}),Object(o.jsx)(g.a.Item,{label:"Deadline",children:Object(o.jsx)(k.a,{value:w()(s.deadline,"DD/MM/YYYY"),format:"DD/MM/YYYY",onChange:function(e){return E(e)},disabledDate:function(e){return e&&e<w()().endOf("day")}})}),Object(o.jsx)(g.a.Item,{children:Object(o.jsxs)(y.a.Group,{onChange:B,value:s.status,children:[Object(o.jsx)(y.a,{value:1,children:"NEW"}),Object(o.jsx)(y.a,{value:2,children:"INPROGRESS"}),Object(o.jsx)(y.a,{value:3,children:"DONE"})]})}),Object(o.jsx)(g.a.Item,{children:S?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j.a,{type:"ghost",onClick:J,children:"Save"}),Object(o.jsx)(j.a,{type:"dashed",onClick:function(){return T(null)},children:"Cancel"})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j.a,{type:"primary",disabled:(s.title,!s.creator),icon:Object(o.jsx)(v.a,{}),onClick:Y,children:"Add New Task"}),Object(o.jsx)(j.a,{type:"primary",onClick:H,children:"Reset"})]})}),Object(o.jsx)("p",{children:"* you must fill in Title Input and Creator Input."})]})}),Object(o.jsx)(N.a,{path:"/",children:R("new")})]})})},E=(n(219),l.a.SubMenu),Y=function(){var e=r.a.Content,t=r.a.Sider;return Object(o.jsxs)(r.a,{id:"content",children:[Object(o.jsx)(t,{width:200,className:"site-layout-background",children:Object(o.jsx)(l.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0},children:Object(o.jsx)(E,{icon:Object(o.jsx)(O.a,{}),title:"Task Control",children:Object(o.jsxs)("ul",{className:"app-list",children:[Object(o.jsx)("hr",{}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/all",children:"All Task"})}),Object(o.jsx)("br",{})," ",Object(o.jsx)("hr",{}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/",children:"New Task"})}),Object(o.jsx)("br",{})," ",Object(o.jsx)("hr",{}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/inprogress",children:"Doing Task"})}),Object(o.jsx)("br",{})," ",Object(o.jsx)("hr",{}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/done",children:"Done Task"})}),Object(o.jsx)("br",{})," ",Object(o.jsx)("hr",{})]})},"sub2")})}),Object(o.jsx)(r.a,{style:{padding:"0 24px 24px"},children:Object(o.jsx)(e,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:280},children:Object(o.jsx)(T,{})})})]})},J=(n(220),function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(b,{}),Object(o.jsx)(Y,{}),Object(o.jsx)(h,{})]})});var M=function(){return Object(o.jsx)(i.a,{children:Object(o.jsx)(J,{})})},R=n(96),A=Object(R.b)({name:"task",initialState:{listTask:[{title:"demo",description:"demo des",deadline:new Date,status:"new"}]},reducers:{addNewTask:function(e,t){console.log("state, action",e,t),e.listTask.push(t.payload)},reset:function(e,t){e.listTask=[]}}}),B=A.actions,H=(B.addNewTask,B.reset,A.reducer),F=Object(R.a)({reducer:{task:H}});s.a.render(Object(o.jsx)(D.a,{store:F,children:Object(o.jsx)(M,{})}),document.getElementById("root"))}},[[221,1,2]]]);
//# sourceMappingURL=main.b7b3c71d.chunk.js.map