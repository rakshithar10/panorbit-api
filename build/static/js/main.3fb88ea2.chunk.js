(this["webpackJsonppanorbit-api"]=this["webpackJsonppanorbit-api"]||[]).push([[0],{24:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){},70:function(e,t,s){},78:function(e,t,s){"use strict";s.r(t);var c=s(0),i=s(3),n=s.n(i),a=s(41),l=s.n(a),r=(s(52),s(9)),j=s(10),o=s(12),d=s(11),b=(s(53),s(6)),h=s(8),O=s(20),p=s(46),m=s(42),x=s.n(m),u=n.a.createContext(),g=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).getUser=function(e){return c.state.users.find((function(t){return t.id===e}))},c.singleUser=function(e){var t=Object(p.a)(c.state.users),s=t.indexOf(c.getUser(e)),i=t[s];c.setState((function(){return{user:i}}))},c.state={users:[],user:null},c}return Object(j.a)(s,[{key:"componentDidMount",value:function(){var e=this;x.a.get("".concat("https://panorbit.in/api/users.json")).then((function(t){console.log("data",t.data.users),e.setState({users:t.data.users})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(c.jsx)(u.Provider,{value:Object(O.a)(Object(O.a)({},this.state),{},{singleUser:this.singleUser}),children:this.props.children})}}]),s}(i.Component),v=u.Consumer,f=(s(70),function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"container dashboard",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-md-6 col-md-offset-3",children:Object(c.jsx)(v,{children:function(e){return Object(c.jsxs)("div",{className:"panel panel-default",children:[Object(c.jsx)("div",{className:"panel-heading",children:Object(c.jsx)("h4",{className:"text-center",children:"Select an account"})}),Object(c.jsx)("div",{className:"panel-body",children:Object(c.jsx)("ul",{className:"list-group list",children:e.users.map((function(e,t){return Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsx)("img",{src:e.profilepicture,alt:e.name,className:"img-responsive img-circle userImg"}),Object(c.jsx)(b.b,{to:"/profile/"+e.id,children:Object(c.jsxs)("p",{children:[" ",e.name]})})]})}))})})]})}})})})})}}]),s}(i.Component)),N=s(17),y=s(45),k=(i.Component,s(24),function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).state={id:c.props.match.params.id,blkStatus:!1,viewport:{width:400,height:400,latitude:37.7577,longitude:-122.4376,zoom:8}},c.toggle=c.toggle.bind(Object(N.a)(c)),c}return Object(j.a)(s,[{key:"toggle",value:function(){this.setState({blkStatus:!this.state.blkStatus})}},{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-3 sidebar",children:Object(c.jsxs)("nav",{className:"nav nav-pills nav-stacked",children:[Object(c.jsxs)("li",{className:"active",children:[Object(c.jsx)(b.b,{to:"/profile/".concat(this.state.id),children:" Profile"}),Object(c.jsx)("span",{className:"glyphicon glyphicon-chevron-right"})]}),Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/posts/".concat(this.state.id),children:" Posts"})}),Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/gallery/".concat(this.state.id),children:" Gallery"})}),Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/todo/".concat(this.state.id),children:" ToDo"})})]})}),Object(c.jsx)(v,{children:function(t){console.log(t.users);var s=t.users.find((function(t){return t.id==e.props.match.params.id}));return console.log("single",s),Object(c.jsxs)("div",{className:"col-md-9 profile-body",children:[Object(c.jsxs)("div",{className:"heading",children:[Object(c.jsx)("h5",{children:" Profile "}),Object(c.jsxs)("div",{className:"profile-heading pull-right",onClick:e.toggle,children:[Object(c.jsx)("img",{src:s.profilepicture,alt:"",className:"img-responsive img-circle user"}),Object(c.jsxs)("p",{children:[" ",s.name," "]})]}),e.state.blkStatus?Object(c.jsxs)("div",{className:"profile-block text-center",children:[Object(c.jsx)("img",{src:s.profilepicture,alt:"",className:"img-responsive img-circle block-img"}),Object(c.jsxs)("h5",{children:[" ",s.name," "]}),Object(c.jsxs)("p",{children:[" ",s.email," "]}),Object(c.jsx)(b.b,{className:"btn btn-danger",to:"/",children:"SignOut"})]}):null,Object(c.jsx)("div",{className:"hr"})]}),Object(c.jsx)("div",{className:"panel-body",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-md-4",children:[Object(c.jsx)("img",{src:s.profilepicture,alt:"",className:"img-circle img-responsive proImg"}),Object(c.jsxs)("h6",{className:"text-center",children:[" ",s.name," "]}),Object(c.jsxs)("div",{className:"userinfo",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Username : "})," ",s.username]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"e-mail : "})," ",s.email]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Phone : "})," ",s.phone]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Website : "})," ",s.website]})]}),Object(c.jsx)("div",{className:"hr"}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"company",children:[Object(c.jsx)("h6",{className:"text-center",children:"Company"}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Name : "})," ",s.company.name]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"catchPhrase : "})," ",s.company.catchPhrase]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"bs : "})," ",s.company.bs]})]})]}),Object(c.jsxs)("div",{className:"col-md-8",children:[Object(c.jsx)("h6",{children:"Address"}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Street :"})," ",s.address.street," "]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Suite :"})," ",s.address.suite," "]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"City :"})," ",s.address.city," "]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Zipcode :"})," ",s.address.zipcode," "]}),Object(c.jsx)(y.a,Object(O.a)(Object(O.a)({},e.state.viewport),{},{onViewportChange:function(t){return e.setState({viewport:t})}}))]})]})}),Object(c.jsx)("div",{className:"chat",children:Object(c.jsxs)("div",{className:"panel panel-primary",children:[Object(c.jsx)("div",{className:"panel-heading",children:Object(c.jsx)("a",{"data-toggle":"collapse",href:"#collapse1",children:Object(c.jsxs)("h5",{children:[" ",Object(c.jsx)("span",{className:"glyphicon glyphicon-comment"})," Chats ",Object(c.jsx)("span",{className:"glyphicon glyphicon-menu-up pull-right"})," "]})})}),Object(c.jsx)("div",{id:"collapse1",class:"panel-collapse collapse",children:Object(c.jsx)("div",{className:"panel-body",children:Object(c.jsx)("ul",{className:"list-group",children:t.users.map((function(e,t){return Object(c.jsxs)("li",{className:"list-group-item chatList",children:[Object(c.jsx)("img",{src:e.profilepicture,alt:"",className:"img-responsive img-circle chat-img"}),Object(c.jsxs)("p",{children:[" ",e.name," "]})]},t)}))})})})]})})]})}})]})})}}]),s}(i.Component)),S=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).state={id:c.props.match.params.id,blkStatus:!1},c.toggle=c.toggle.bind(Object(N.a)(c)),c}return Object(j.a)(s,[{key:"toggle",value:function(){this.setState({blkStatus:!this.state.blkStatus})}},{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-3 sidebar",children:Object(c.jsxs)("nav",{className:"nav nav-pills nav-stacked",children:[Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/profile/".concat(this.state.id),children:"Profile"})}),Object(c.jsxs)("li",{className:"active",children:[Object(c.jsx)(b.b,{to:"/posts/".concat(this.state.id),children:"Posts"}),Object(c.jsx)("span",{className:"glyphicon glyphicon-chevron-right"})]}),Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/gallery/".concat(this.state.id),children:"Gallery"})}),Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/todo/".concat(this.state.id),children:"ToDo"})})]})}),Object(c.jsx)(v,{children:function(t){console.log(t.users);var s=t.users.find((function(t){return t.id==e.props.match.params.id}));return console.log("single",s),Object(c.jsxs)("div",{className:"col-md-9 profile-body",children:[Object(c.jsxs)("div",{className:"heading",children:[Object(c.jsx)("h5",{children:" Posts "}),Object(c.jsxs)("div",{className:"profile-heading pull-right",onClick:e.toggle,children:[Object(c.jsx)("img",{src:s.profilepicture,alt:"",className:"img-responsive img-circle user"}),Object(c.jsxs)("p",{children:[" ",s.name," "]})]}),e.state.blkStatus?Object(c.jsxs)("div",{className:"profile-block text-center",children:[Object(c.jsx)("img",{src:s.profilepicture,alt:"",className:"img-responsive img-circle block-img"}),Object(c.jsxs)("h5",{children:[" ",s.name," "]}),Object(c.jsxs)("p",{children:[" ",s.email," "]}),Object(c.jsx)(b.b,{className:"btn btn-danger",to:"/",children:"SignOut"})]}):null,Object(c.jsx)("div",{className:"hr"})]}),Object(c.jsx)("div",{className:"profile-content",children:Object(c.jsx)("h3",{className:"title text-center",children:"Coming Soon"})})]})}})]})})}}]),s}(i.Component),C=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).state={id:c.props.match.params.id,blkStatus:!1},c.toggle=c.toggle.bind(Object(N.a)(c)),c}return Object(j.a)(s,[{key:"toggle",value:function(){this.setState({blkStatus:!this.state.blkStatus})}},{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-3 sidebar",children:Object(c.jsxs)("nav",{className:"nav nav-pills nav-stacked",children:[Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/profile/".concat(this.state.id),children:" Profile"})}),Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/posts/".concat(this.state.id),children:"Posts"})}),Object(c.jsxs)("li",{className:"active",children:[Object(c.jsx)(b.b,{to:"/gallery/".concat(this.state.id),children:"Gallery"}),Object(c.jsx)("span",{className:"glyphicon glyphicon-chevron-right"})]}),Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/todo/".concat(this.state.id),children:"ToDo"})})]})}),Object(c.jsx)(v,{children:function(t){console.log(t.users);var s=t.users.find((function(t){return t.id==e.props.match.params.id}));return console.log("single",s),Object(c.jsxs)("div",{className:"col-md-9 profile-body",children:[Object(c.jsxs)("div",{className:"heading",children:[Object(c.jsx)("h5",{children:" Gallery "}),Object(c.jsxs)("div",{className:"profile-heading pull-right",onClick:e.toggle,children:[Object(c.jsx)("img",{src:s.profilepicture,alt:"",className:"img-responsive img-circle user"}),Object(c.jsxs)("p",{children:[" ",s.name," "]})]}),e.state.blkStatus?Object(c.jsxs)("div",{className:"profile-block text-center",children:[Object(c.jsx)("img",{src:s.profilepicture,alt:"",className:"img-responsive img-circle block-img"}),Object(c.jsxs)("h5",{children:[" ",s.name," "]}),Object(c.jsxs)("p",{children:[" ",s.email," "]}),Object(c.jsx)(b.b,{className:"btn btn-danger",to:"/",children:"SignOut"})]}):null,Object(c.jsx)("div",{className:"hr"})]}),Object(c.jsx)("div",{className:"profile-content",children:Object(c.jsx)("h3",{className:"title text-center",children:"Coming Soon"})})]})}})]})})}}]),s}(i.Component),P=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).state={id:c.props.match.params.id,blkStatus:!1},c.toggle=c.toggle.bind(Object(N.a)(c)),c}return Object(j.a)(s,[{key:"toggle",value:function(){this.setState({blkStatus:!this.state.blkStatus})}},{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-3 sidebar",children:Object(c.jsxs)("nav",{className:"nav nav-pills nav-stacked",children:[Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/profile/".concat(this.state.id),children:"Profile"})}),Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/posts/".concat(this.state.id),children:"Posts"})}),Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:"/gallery/".concat(this.state.id),children:"Gallery"})}),Object(c.jsxs)("li",{className:"active",children:[Object(c.jsx)(b.b,{to:"/todo/".concat(this.state.id),children:"ToDo"}),Object(c.jsx)("span",{className:"glyphicon glyphicon-chevron-right"})]})]})}),Object(c.jsx)(v,{children:function(t){console.log(t.users);var s=t.users.find((function(t){return t.id==e.props.match.params.id}));return console.log("single",s),Object(c.jsxs)("div",{className:"col-md-9 profile-body",children:[Object(c.jsxs)("div",{className:"heading",children:[Object(c.jsx)("h5",{children:" Todo "}),Object(c.jsxs)("div",{className:"profile-heading pull-right",onClick:e.toggle,children:[Object(c.jsx)("img",{src:s.profilepicture,alt:"",className:"img-responsive img-circle user"}),Object(c.jsxs)("p",{children:[" ",s.name," "]})]}),e.state.blkStatus?Object(c.jsxs)("div",{className:"profile-block text-center",children:[Object(c.jsx)("img",{src:s.profilepicture,alt:"",className:"img-responsive img-circle block-img"}),Object(c.jsxs)("h5",{children:[" ",s.name," "]}),Object(c.jsxs)("p",{children:[" ",s.email," "]}),Object(c.jsx)(b.b,{className:"btn btn-danger",to:"/",children:"SignOut"})]}):null,Object(c.jsx)("div",{className:"hr"})]}),Object(c.jsx)("div",{className:"profile-content",children:Object(c.jsx)("h3",{className:"text-center title",children:"Coming Soon"})})]})}})]})})}}]),s}(i.Component),w=function(e){Object(o.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(c.jsx)(b.a,{children:Object(c.jsxs)(h.d,{children:[Object(c.jsx)(h.b,{exact:!0,path:"/",component:f}),Object(c.jsx)(h.b,{exact:!0,path:"/profile/:id",component:k}),Object(c.jsx)(h.b,{exact:!0,path:"/posts/:id",component:S}),Object(c.jsx)(h.b,{exact:!0,path:"/gallery/:id",component:C}),Object(c.jsx)(h.b,{exact:!0,path:"/todo/:id",component:P}),Object(c.jsx)(h.a,{path:"/"})]})})}}]),s}(i.Component),T=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,79)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),c(e),i(e),n(e),a(e)}))};l.a.render(Object(c.jsx)(g,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),T()}},[[78,1,2]]]);
//# sourceMappingURL=main.3fb88ea2.chunk.js.map