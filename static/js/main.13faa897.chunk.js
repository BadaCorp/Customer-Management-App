(this["webpackJsonpcustomer-management-app"]=this["webpackJsonpcustomer-management-app"]||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var c=s(6),a=s(3),n=s(4),i=s(8),r=s(7),l=s(0),o=s(1),d=s.n(o),j=s(5),m=s.n(j),h=(s(14),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))}),b=s.p+"static/media/customers.fde0ba20.png",u=function(e){Object(i.a)(s,e);var t=Object(r.a)(s);function s(e){var c;return Object(a.a)(this,s),(c=t.call(this,e)).state={Customers:[{id:1,firstName:"James",lastName:"Peterson",age:22},{id:2,firstName:"John",lastName:"Hernandez",age:24},{id:3,firstName:"Luke",lastName:"Goodman",age:23}],id:4},c}return Object(n.a)(s,[{key:"handleSubmit",value:function(e){e.preventDefault();this.firstName.value,this.lastName.value,this.age.value;var t={id:this.state.id,firstName:this.firstName.value,lastName:this.lastName.value,age:Number(this.age.value)};this.setState({Customers:[].concat(Object(c.a)(this.state.Customers),[t]),id:this.state.id+1})}},{key:"render",value:function(){var e=this,t=this.state.Customers;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("header",{class:"text-center",children:[Object(l.jsx)("img",{src:b,width:"200px",height:"150px",className:"App-logo",alt:"logo"}),Object(l.jsx)("h1",{children:"Customers Management System"})]}),Object(l.jsx)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:Object(l.jsxs)("div",{class:"form-row",children:[Object(l.jsxs)("div",{class:"col",children:[Object(l.jsx)("label",{for:"firstName",children:"First Name"}),Object(l.jsx)("input",{ref:function(t){return e.firstName=t},type:"text",class:"form-control",id:"firstName",placeholder:"Add first name"})]}),Object(l.jsxs)("div",{class:"col",children:[Object(l.jsx)("label",{for:"lastName",children:"Last Name"}),Object(l.jsx)("input",{ref:function(t){return e.lastName=t},type:"text",class:"form-control",id:"lastName",placeholder:"Add last name"})]}),Object(l.jsxs)("div",{class:"col",children:[Object(l.jsx)("label",{for:"age",children:"Age"}),Object(l.jsx)("input",{ref:function(t){return e.age=t},type:"number",min:"18",max:"120",class:"form-control",id:"age",placeholder:"Add age"})]}),Object(l.jsxs)("div",{class:"col",children:[Object(l.jsx)("br",{}),Object(l.jsx)("button",{class:"btn btn-primary",type:"submit",children:"Submit"})]})]})}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"#"}),Object(l.jsx)("th",{scope:"col",children:"First Name"}),Object(l.jsx)("th",{scope:"col",children:"Last Name"}),Object(l.jsx)("th",{scope:"col",children:"Age"}),Object(l.jsx)("th",{scope:"col",children:"Action"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"row",children:e.id}),Object(l.jsx)("td",{children:e.firstName}),Object(l.jsx)("td",{children:e.lastName}),Object(l.jsx)("td",{children:e.age})]},e.id)}))})]})})]})}}]),s}(d.a.Component);m.a.render(Object(l.jsx)(u,{}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.13faa897.chunk.js.map