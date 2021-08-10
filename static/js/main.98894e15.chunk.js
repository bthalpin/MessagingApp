(this["webpackJsonphapin-messaging-app"]=this["webpackJsonphapin-messaging-app"]||[]).push([[0],{17:function(e,t,s){},24:function(e,t,s){},4:function(e,t,s){},40:function(e,t,s){},46:function(e,t,s){},79:function(e,t,s){},80:function(e,t,s){},81:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){"use strict";s.r(t);var n=s(2),i=s.n(n),a=s(41),c=s.n(a),r=(s(46),s(4),s(1)),l=s(10),o=s(3),d=(s(24),s(0)),u=function(e){var t=e.inputType,s=e.onChanges,n=e.value;return Object(d.jsxs)("div",{className:"inputBlock",children:[Object(d.jsx)("label",{className:"inputLabel",htmlFor:t,children:t}),Object(d.jsx)("input",{className:"inputField",type:t,name:t,id:t,value:n,onChange:s})]})},m=s(23),j=Object(m.io)("https://socially-distanced-server.herokuapp.com/"),b=function(e){var t=e.user,s=e.route,n=e.errorMessage,i=e.setRoute,a=e.setUser,c=e.setErrorMessage,l=e.setIsSignedIn,o=e.onRouteChange,m=e.setCurrentMessage,b=(e.pastMessages,e.setPrivateMessages),f=(e.setCurrentPublicMessage,e.setPrivatePublicMessage,e.setConversation),O=e.setPastMessages,p=e.setPastPublicMessages,g=(e.setFilteredMessages,e.filteredMessages,e.loadData),h=e.password,x=e.setPassword,v=t.name,N=t.email,C=function(e){switch(e.target.id){case"Name":a((function(t){return Object(r.a)(Object(r.a)({},t),{},{name:e.target.value})}));break;case"Email":a((function(t){return Object(r.a)(Object(r.a)({},t),{},{email:e.target.value})}));break;case"Password":x(e.target.value);break;default:console.log(e.target.value)}};return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("article",{className:"formWindow",children:Object(d.jsxs)("div",{className:"formcontainer",children:["Register"===s?Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"legend",children:"Register"}),Object(d.jsx)("div",{className:"error",children:n}),Object(d.jsx)(u,{inputType:"Name",value:v,onChanges:C}),Object(d.jsx)(u,{inputType:"Email",value:N,onChanges:C}),Object(d.jsx)(u,{inputType:"Password",value:h,onChanges:C})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"legend",children:"Sign In"}),Object(d.jsx)("div",{className:"error",children:n}),Object(d.jsx)(u,{inputType:"Email",value:N,onChanges:C}),Object(d.jsx)(u,{inputType:"Password",value:h,onChanges:C})]}),Object(d.jsx)("div",{className:"legend",children:Object(d.jsx)("button",{type:"submit",className:"button",onClick:function(){var e=t.email.toUpperCase();"Sign In"===s?function(e){fetch("https://socially-distanced-server.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:h})}).then((function(e){return e.json()})).then((function(s){s.email===e?(a(s),i("home"),l(!0),c(""),x(""),m((function(t){return Object(r.a)(Object(r.a)({},t),{},{name:s.name,email:e})})),f({me:s.email,you:""}),g("friendmessageload",JSON.stringify({email:e,friends:t.friends}),O),g("publicmessageload",JSON.stringify({email:e,friends:t.friends}),p),g("privatemessageload",JSON.stringify({email:e,friends:t.friends}),b),j.emit("loadRead",{recipientemail:e})):(c("Invalid Login Information"),a({name:"",email:"",friends:[],requests:[],pendingrequests:[]}),x(""))})).catch((function(e){return console.log(e)}))}(e):function(e){/\S+@\S+\.\S+/.test(N)&&h.length>=8?fetch("https://socially-distanced-server.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t.name,email:e,password:h,friends:t.friends})}).then((function(e){return e.json()})).then((function(t){"TAKEN"===t?c("That email address is already registered."):(a(t),i("home"),l(!0),c(""),x(""),m((function(e){return Object(r.a)(Object(r.a)({},e),{},{name:t.name,email:t.email})})),g("publicmessageload",JSON.stringify({email:e,friends:t.friends}),p))})).catch((function(e){return console.log(e)})):h.length<8?c("Password must be 8 characters long"):c("Enter a valid email address")}(e)},children:"Submit"})}),Object(d.jsx)("div",{className:"legend",children:"Sign In"===s?Object(d.jsx)("p",{onClick:function(){return o("Register")},className:"loginLink",children:"Register"}):Object(d.jsx)("p",{onClick:function(){return o("Sign In")},className:"loginLink",children:"Sign In"})})]})})})})},f=(s(79),s.p+"static/media/hamburger.745580e9.png"),O=s.p+"static/media/notification.ad736cf8.png",p=function(e){var t,s,i=e.onRouteChange,a=e.isSignedIn,c=e.route,r=e.user,l=e.changePublicStatus,u=e.totalMessages,m=Object(n.useState)("Hidden"),j=Object(o.a)(m,2),b=j[0],p=j[1],g=function(){p("Hidden"===b?"":"Hidden")},h=function(e,t){""===b&&p("Hidden"),!0===t||!1===t?l(e,t):i(e)};return a?Object(d.jsxs)("div",{className:"navroot",children:[Object(d.jsx)("div",{className:"title",children:"Halpin Messaging App"}),Object(d.jsx)("div",{children:Object(d.jsxs)("button",{className:"hideButton",onClick:g,children:[Object(d.jsx)("img",{src:f,alt:"=",width:"30rem"}),(null===r||void 0===r||null===(t=r.requests)||void 0===t?void 0:t.length)||u>0?Object(d.jsx)("img",{className:"notificationIcon",src:O,alt:"=",width:"30rem"}):Object(d.jsx)(d.Fragment,{})]})}),Object(d.jsxs)("div",{className:"mainNav"+b,children:[Object(d.jsx)("button",{className:"wideButton",onClick:g,children:"Close"}),Object(d.jsx)("div",{className:"navButtonContainer ",children:Object(d.jsx)("p",{onClick:function(){return h("home",!0)},className:"navButtons home"+c,children:"Public Chat"})}),Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:"navButtons friend"+c,onClick:function(){return h("friend",!1)},children:"Friends Chat"})}),Object(d.jsx)("div",{children:Object(d.jsxs)("p",{className:"navButtons private mail"+c,onClick:function(){return h("mail")},children:["Private Message",u>0?Object(d.jsx)("span",{className:"message",children:u}):Object(d.jsx)(d.Fragment,{})]})}),Object(d.jsx)("div",{className:"",children:Object(d.jsxs)("p",{className:"navButtons friends"+c,onClick:function(){return h("friends")},children:["Contacts",(null===r||void 0===r||null===(s=r.requests)||void 0===s?void 0:s.length)?Object(d.jsx)("span",{className:"requests",children:r.requests.length}):Object(d.jsx)(d.Fragment,{})]})}),Object(d.jsx)("nav",{className:"",children:Object(d.jsx)("p",{onClick:function(){return i("Sign In")},className:"navButtons ",children:"Sign Out"})})]})]}):Object(d.jsx)("div",{})},g=(s(40),s(80),function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:"picture",alt:"picture",src:e.source})})}),h=s.p+"static/media/like.4c10340e.png",x=s.p+"static/media/liked.62603ce6.png",v=s.p+"static/media/delete.ea6c2f93.png",N=function(e){var t=e.route,s=e.text,n=e.email,i=e.time,a=e.i,c=e.deletePost,r=e.deleteMail,l=e.addLike,o=e.currentUser,u=e.currentId,m=e.filteredMessages,j=e.background,b=e.publicStatus,f=e.addFriend,O=e.likes;return Object(d.jsx)("div",{className:"box",children:Object(d.jsxs)("div",{className:"smallbox",children:[Object(d.jsx)("div",{className:"messageArea "+j,children:Object(d.jsx)("div",{className:"text",children:Object(d.jsx)("div",{className:"textmessage",children:s.includes("#img#")?Object(d.jsx)(g,{source:s.substr(5,s.length-1)}):Object(d.jsx)("p",{children:s})})})}),Object(d.jsxs)("div",{className:"user "+j,children:[Object(d.jsx)("p",{onClick:function(){return f(n)},children:n.toUpperCase().substr(0,n.indexOf("@"))}),Object(d.jsx)("p",{className:"date",children:i})]}),Object(d.jsxs)("div",{className:"likes ",children:["home"===t||"friend"===t?Object(d.jsx)("div",{className:"likeButton",onClick:function(){return l(a,u)},children:O&&JSON.stringify(O).includes(o)?Object(d.jsx)("img",{src:x,alt:"Unlike",width:"23rem"}):Object(d.jsx)("img",{src:h,alt:"like",width:"23rem"})}):Object(d.jsx)(d.Fragment,{}),Object(d.jsxs)("div",{className:"likedelete",children:[("home"===t||"friend"===t)&&O?Object(d.jsx)("div",{className:"liketext",children:O.length>=4?"".concat(O.length," Likes"):O.length>1?O.length>2?JSON.parse(O[0]).name+", "+JSON.parse(O[1]).name+", and "+JSON.parse(O[2]).name+" like this post":JSON.parse(O[0]).name+" and "+JSON.parse(O[1]).name+" like this post":O.length?JSON.parse(O).name+" likes this post":""}):Object(d.jsx)(d.Fragment,{}),Object(d.jsx)("div",{className:"deletContainer",children:"home"===t||"friend"===t?Object(d.jsx)("div",{children:m[a].email===o?Object(d.jsx)("div",{className:"deleteButton",id:a,onClick:function(){return c(a,b,u)},children:Object(d.jsx)("img",{src:v,alt:"delete",width:"22rem"})}):Object(d.jsx)(d.Fragment,{})}):Object(d.jsx)("div",{className:"deleteButton",id:a,onClick:function(){return r(u)},children:Object(d.jsx)("img",{src:v,alt:"delete",width:"22rem"})})})]})]})]})})},C=function(e){var t=e.user,s=e.currentMessage,i=e.pastMessages,a=e.setCurrentMessage,c=e.currentPublicMessage,u=e.pastPublicMessages,m=e.setCurrentPublicMessage,b=e.deletePost,f=e.route,O=e.addFriend,p=e.setFilteredMessages,g=e.filteredMessages,h=e.publicStatus,x=Object(n.useState)({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide",position:" middle"}),v=Object(o.a)(x,2),C=v[0],k=v[1],S="",y="";Object(n.useEffect)((function(){var e=s.time;""!==s.message&&(j.emit("friendmessage",{name:t.name,email:t.email.toUpperCase(),message:s.message,time:e,likes:[]}),a((function(e){return Object(r.a)(Object(r.a)({},e),{},{message:""})})))}),[s.time]),Object(n.useEffect)((function(){var e=c.time;""!==c.message&&(j.emit("publicmessage",{name:t.name,email:t.email.toUpperCase(),message:c.message,time:e,likes:[]}),m((function(e){return Object(r.a)(Object(r.a)({},e),{},{message:""})})))}),[c.time]),Object(n.useEffect)((function(){t.friends&&p((function(){return i.filter((function(e){return e.email===t.email||t.friends.includes(e.email)}))}))}),[t.friends,i]);var M=function(e){var t=(new Date).toLocaleString("en-US",{timeZone:"America/New_York"});!e||""===c.message&&""===s.message||(h?m((function(e){return Object(r.a)(Object(r.a)({},e),{},{message:"#img#"+c.message})})):a((function(e){return Object(r.a)(Object(r.a)({},e),{},{message:"#img#"+s.message})}))),h?m((function(e){return Object(r.a)(Object(r.a)({},e),{},{time:t})})):a((function(e){return Object(r.a)(Object(r.a)({},e),{},{time:t})})),k({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide",position:" middle"})},F=function(e){h?m((function(t){return Object(r.a)(Object(r.a)({},t),{},{message:e.target.value})})):a((function(t){return Object(r.a)(Object(r.a)({},t),{},{message:e.target.value})}))},P=function(e){return JSON.parse(e).email!==t.email.toUpperCase()},U=function(e,s){var n=!0;if(h){var i=Object(l.a)(u);i[e].likes&&(n=i[e].likes.every(P)),i[e].likes,n?j.emit("likes",{name:t.name,email:t.email,id:s,database:"publicmessages"}):j.emit("dislike",{name:t.name,email:t.email,id:s,database:"publicmessages"})}else if(!h){var a=Object(l.a)(g);a[e].likes&&(n=a[e].likes.every(P)),!a[e].likes||n?j.emit("likes",{name:t.name,email:t.email,id:s,database:"friendmessage"}):j.emit("dislike",{name:t.name,email:t.email,id:s,database:"friendmessage"})}},w=function(e){k(e?{picture:"",message:"textareahide",button:"textareahide",submit:"",position:" right"}:{picture:"textareahide",message:"",button:"textareahide",submit:"",position:" right"})},q=function(){k({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide",position:" middle"}),h?m((function(e){return Object(r.a)(Object(r.a)({},e),{},{message:""})})):a((function(e){return Object(r.a)(Object(r.a)({},e),{},{message:""})}))};return Object(d.jsx)("div",{className:"maincomment",children:h?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"inputbox",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{id:"pic",className:"textareapic public "+C.picture,cols:"40",rows:"6",onChange:F,placeholder:"Enter Picture URL",value:c.message,autoFocus:!0}),Object(d.jsx)("textarea",{id:"msg",className:"textarea public "+C.message,onChange:F,value:c.message,autoFocus:!0})]})}),Object(d.jsxs)("div",{className:"commentsection",children:[Object(d.jsxs)("div",{className:"inputbox",children:[Object(d.jsx)("label",{className:"msg "+C.submit,onClick:function(){return M(""===C.picture)},children:"Submit"}),Object(d.jsx)("label",{className:"msg "+C.submit,onClick:q,children:"Back"}),Object(d.jsx)("label",{htmlFor:"msg",className:"msg "+C.button,onClick:function(){return w(!1)},children:"Message"}),Object(d.jsx)("label",{htmlFor:"pic",className:"msg "+C.button,onClick:function(){return w(!0)},children:"Picture"})]}),Object(d.jsx)("div",{className:"bigbox",children:u.map((function(e,s){var n=u.length-1-s,i=u[n].id;return Object(d.jsx)("div",{children:Object(d.jsx)(N,{filteredMessages:u,currentUser:t.email,email:u[n].email,text:u[n].message,time:u[n].time,i:n,currentId:i,deletePost:b,route:f,addLike:U,likes:u[n].likes,publicStatus:h,addFriend:O})},s)}))})]})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"inputbox",children:[Object(d.jsx)("input",{id:"friendpic",className:"textareapic friend "+C.picture,onChange:F,placeholder:"Enter Picture URL",value:s.message}),Object(d.jsx)("textarea",{id:"friendmsg",className:"textarea friend "+C.message,onChange:F,value:s.message})]}),Object(d.jsxs)("div",{className:"commentsection",children:[Object(d.jsxs)("div",{className:"inputbox",children:[Object(d.jsx)("label",{htmlFor:"friendmsg",className:"msg "+C.button,onClick:function(){return w(!1)},children:"Message"}),Object(d.jsx)("label",{htmlFor:"friendpic",className:"msg "+C.button,onClick:function(){return w(!0)},children:"Picture"}),Object(d.jsx)("label",{className:"msg "+C.submit,onClick:function(){return M(""===C.picture)},children:"Submit"}),Object(d.jsx)("label",{className:"msg "+C.submit,onClick:q,children:"Back"})]}),Object(d.jsxs)("div",{className:"bigbox",children:[g.length>0?Object(d.jsx)(d.Fragment,{}):Object(d.jsx)("h1",{children:"Write a message that only your friends can see"}),g.map((function(e,s){var n=g.length-1-s,i=g[n].id;return S=g[n].email.toUpperCase()===t.email.toUpperCase()?"sender":"recipient",y=g[n].email.toUpperCase()===t.email.toUpperCase()?"senderbackground":"",Object(d.jsx)("div",{className:S,children:Object(d.jsx)(N,{filteredMessages:g,currentUser:t.email,email:g[n].email,text:g[n].message,time:g[n].time,i:n,currentId:i,deletePost:b,route:f,addLike:U,likes:g[n].likes,publicStatus:h,addFriend:O,background:y})},s)}))]})]})]})})},k=(s(17),function(e){var t=e.friend,s=e.converse,n=e.route,i=e.unFriend,a=e.pendOrReq;return Object(d.jsx)("div",{className:"radioButton",children:"mail"===n?Object(d.jsxs)("li",{children:[Object(d.jsx)("input",{type:"radio",name:"friend",id:t,onClick:function(){return s(t)}}),Object(d.jsx)("label",{htmlFor:t,children:t})]}):Object(d.jsxs)("li",{children:[Object(d.jsx)("input",{type:"radio",name:"friend",id:t,onClick:function(){return s(t)}}),Object(d.jsx)("label",{htmlFor:t,children:t}),Object(d.jsx)("button",{className:"friendButton",onClick:function(){return i(t,a)},children:"X"})]})})}),S=(s(81),function(e){var t=e.privateMessage,s=e.setPrivateMessage,i=e.privateMessages,a=(e.setPrivateMessages,e.user),c=(e.deletePost,e.conversation),l=e.setConversation,u=e.converse,m=e.route,b=e.unread,f=Object(n.useState)({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"}),O=Object(o.a)(f,2),p=O[0],g=O[1],h="",x="";Object(n.useEffect)((function(){var e=t.time;""!==t.message&&j.emit("privatemessage",{name:a.name,senderemail:a.email,recipientemail:c.you,message:t.message,time:e}),s((function(e){return Object(r.a)(Object(r.a)({},e),{},{name:"",message:"",time:""})}))}),[t.time]);var v=function(e){s((function(t){return Object(r.a)(Object(r.a)({},t),{},{message:e.target.value})}))},C=function(e){j.emit("deletemail",{id:e,database:"privatemessage"})},S=function(e){g(e?{picture:"",message:"textareahide",button:"textareahide",submit:""}:{picture:"textareahide",message:"",button:"textareahide",submit:""})};return Object(d.jsxs)("div",{className:"mailbox",children:[console.log(t.recipientEmail),c.you?Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{id:"picture",className:"mailtextarea "+p.picture,cols:"40",rows:"6",onChange:v,placeholder:"Enter Picture URL",value:t.message}),Object(d.jsx)("textarea",{id:"mail",className:"mailtextarea "+p.message,cols:"40",rows:"6",onChange:v,value:t.message}),Object(d.jsxs)("div",{className:"mailButtons",children:[Object(d.jsx)("label",{htmlFor:"mail",className:"buttons "+p.button,onClick:function(){return S(!1)},children:"Message"}),Object(d.jsx)("label",{htmlFor:"picture",className:"buttons "+p.button,onClick:function(){return S(!0)},children:"Picture"}),Object(d.jsx)("label",{className:"buttons "+p.submit,onClick:function(){return function(e){var n=(new Date).toLocaleString("en-US",{timeZone:"America/New_York"});e&&""!==t.message&&s((function(e){return Object(r.a)(Object(r.a)({},e),{},{message:"#img#"+t.message})})),s((function(e){return Object(r.a)(Object(r.a)({},e),{},{time:n})})),g({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"})}(""===p.picture)},children:"Submit"}),Object(d.jsx)("label",{className:"buttons "+p.submit,onClick:function(){g({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"}),s((function(e){return Object(r.a)(Object(r.a)({},e),{},{message:""})}))},children:"Back"})]}),Object(d.jsxs)("div",{className:"privateMessage",children:[Object(d.jsx)("button",{className:"backButton",onClick:function(){s((function(e){return Object(r.a)(Object(r.a)({},e),{},{recipientEmail:""})})),l((function(e){return Object(r.a)(Object(r.a)({},e),{},{you:""})}))},children:"<"}),Object(d.jsx)("p",{className:"contactName",children:c.you})]})]}),Object(d.jsx)("div",{className:"messages",children:i.map((function(e,t){var s=i.length-1-t,n=i[s].id;if(i[s].recipientemail.toUpperCase()===c.you&&i[s].senderemail.toUpperCase()===a.email||i[s].senderemail.toUpperCase()===c.you&&i[s].recipientemail.toUpperCase()===a.email)return h=i[s].senderemail.toUpperCase()===a.email.toUpperCase()?"sender":"recipient",x=i[s].senderemail.toUpperCase()===a.email.toUpperCase()?"senderbackground":"",Object(d.jsx)("div",{className:h,children:Object(d.jsx)(N,{email:i[s].senderemail,text:i[s].message,time:i[s].time,i:t,deleteMail:C,currentId:n,background:x})})}))})]}):Object(d.jsxs)("div",{className:"nocontactContainer",children:[Object(d.jsx)("p",{className:"contactName",children:"Select a contact to message"}),Object(d.jsx)("ul",{className:"contactScroll",children:b.map((function(e){return Object(d.jsxs)("div",{className:"unreadMessageContainer",children:[Object(d.jsx)(k,{converse:u,friend:e.senderemail,route:m}),e.total-e.read>0?Object(d.jsx)("span",{className:"unreadMessage",children:e.total-e.read}):Object(d.jsx)(d.Fragment,{})]})}))})]})]})}),y=function(e){var t=e.friend,s=e.rejectFriend,n=e.acceptFriend,i=e.pendOrReq;return Object(d.jsx)("div",{className:"radioButton",children:Object(d.jsxs)("li",{children:[Object(d.jsx)("input",{type:"radio",name:"friend",id:t}),Object(d.jsx)("label",{htmlFor:t,children:t}),Object(d.jsx)("button",{className:"friendButton",onClick:function(){return n(t)},children:"Accept"}),Object(d.jsx)("button",{className:"friendButton",onClick:function(){return s(t,i)},children:"X"})]})})},M=function(e){var t=e.friend,s=e.rejectFriend,n=e.pendOrReq;return Object(d.jsx)("div",{className:"radioButton",children:Object(d.jsxs)("li",{children:[Object(d.jsx)("input",{type:"radio",name:"friend",id:t}),Object(d.jsx)("label",{htmlFor:t,children:t}),Object(d.jsx)("button",{className:"friendButton",onClick:function(){return s(t,n)},children:"X"})]})})},F=function(e){var t=e.user,s=e.addFriend,i=e.converse,a=Object(n.useState)(Object(l.a)(new Set(null===t||void 0===t?void 0:t.requests))),c=Object(o.a)(a,2),r=c[0],u=c[1],m=Object(n.useState)(Object(l.a)(new Set(null===t||void 0===t?void 0:t.pendingrequests))),j=Object(o.a)(m,2),b=j[0],f=j[1];Object(n.useEffect)((function(){u(Object(l.a)(new Set(t.requests))),f(Object(l.a)(new Set(t.pendingrequests)))}),[t]);var O=function(e){fetch("https://socially-distanced-server.herokuapp.com/unfriend",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.email,friend:e.toUpperCase()})}).then((function(e){return e.json()})).then((function(e){})).catch((function(e){return console.log(e)}))},p=function(e){fetch("https://socially-distanced-server.herokuapp.com/acceptfriend",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.email,friend:e})}).then((function(e){return e.json()})).then((function(e){})).catch((function(e){return console.log(e)}))},g=function(e,s){"Request"===s?fetch("https://socially-distanced-server.herokuapp.com/reject",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.email,friend:e,option:"request"})}).then((function(e){return e.json()})).then((function(e){})).catch((function(e){return console.log(e)})):fetch("https://socially-distanced-server.herokuapp.com/reject",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,friend:t.email,option:"pending"})}).then((function(e){return e.json()})).then((function(e){})).catch((function(e){return console.log(e)}))},h=t.friends;return Object(d.jsx)("div",{className:"maincomment",children:Object(d.jsx)("div",{className:"mainFriend",children:Object(d.jsx)("div",{className:"",children:Object(d.jsx)("div",{className:"",children:Object(d.jsxs)("div",{className:"",children:[Object(d.jsxs)("div",{children:[h?Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"friendtitlebox",children:Object(d.jsx)("p",{className:"requesttitle",children:"Contacts"})}),Object(d.jsx)("ul",{className:"scroll ",children:h.map((function(e){return Object(d.jsx)(k,{converse:i,friend:e,unFriend:O})}))})]}):Object(d.jsx)(d.Fragment,{}),Object(d.jsx)("button",{className:"addFriend",onClick:function(){return s("No Names")},children:"Add Contact"})]}),r&&r[0]?Object(d.jsxs)("div",{className:"scroll",children:[Object(d.jsx)("div",{className:"friendtitlebox",children:Object(d.jsx)("p",{className:"requesttitle",children:"Request"})}),Object(d.jsx)("ul",{className:"scroll",children:r.map((function(e){return Object(d.jsx)(y,{friend:e,rejectFriend:g,pendOrReq:"Request",acceptFriend:p})}))})]}):Object(d.jsx)(d.Fragment,{}),b&&b[0]?Object(d.jsxs)("div",{className:"scroll",children:[Object(d.jsx)("div",{className:"friendtitlebox",children:Object(d.jsx)("p",{className:"pendingtitle",children:"Pending Request"})}),Object(d.jsx)("ul",{className:"scroll",children:b.map((function(e){return Object(d.jsx)(M,{friend:e,rejectFriend:g,pendOrReq:"Pending"})}))})]}):Object(d.jsx)(d.Fragment,{})]})})})})})};s(82);var P=function(){var e=Object(n.useState)({name:"",email:"",friends:[],request:[],pendingrequests:[]}),t=Object(o.a)(e,2),s=t[0],i=t[1],a=Object(n.useState)(""),c=Object(o.a)(a,2),u=c[0],m=c[1],f=Object(n.useState)("Sign In"),O=Object(o.a)(f,2),g=O[0],h=O[1],x=Object(n.useState)(!1),v=Object(o.a)(x,2),N=v[0],k=v[1],y=Object(n.useState)(""),M=Object(o.a)(y,2),P=M[0],U=M[1],w=Object(n.useState)([]),q=Object(o.a)(w,2),E=q[0],R=q[1],B=Object(n.useState)({id:"",name:"",email:"",message:"",time:"",likes:[]}),I=Object(o.a)(B,2),J=I[0],T=I[1],L=Object(n.useState)([]),A=Object(o.a)(L,2),D=A[0],H=A[1],X=Object(n.useState)({id:"",name:"",email:"",message:"",time:"",likes:[]}),W=Object(o.a)(X,2),Y=W[0],Z=W[1],_=Object(n.useState)([]),K=Object(o.a)(_,2),z=K[0],G=K[1],Q=Object(n.useState)({id:"",name:"",senderemail:"",recipientemail:"",message:"",time:""}),V=Object(o.a)(Q,2),$=V[0],ee=V[1],te=Object(n.useState)({me:"",you:""}),se=Object(o.a)(te,2),ne=se[0],ie=se[1],ae=Object(n.useState)({}),ce=Object(o.a)(ae,2),re=ce[0],le=ce[1],oe=Object(n.useState)(!0),de=Object(o.a)(oe,2),ue=de[0],me=de[1],je=s.email,be=Object(n.useState)([]),fe=Object(o.a)(be,2),Oe=fe[0],pe=fe[1],ge=Object(n.useState)(0),he=Object(o.a)(ge,2),xe=he[0],ve=he[1];Object(n.useEffect)((function(){ve(Oe.reduce((function(e,t){return e+t.total-t.read}),0))}),[Oe]),Object(n.useEffect)((function(){j.on("friendrequest",(function(e){return e[0].email===je&&i(e[0]),function(){j.off("friendrequest")}}))}),[je]),Object(n.useEffect)((function(){return j.on("unfriend",(function(e){console.log(e),e.email===je&&i(e.message[0]),Ce("privatemessageload",JSON.stringify({email:je,friends:s.friends}),G),j.emit("loadRead",{recipientemail:e.email})})),function(){j.off("unfriend")}}),[je,s]),Object(n.useEffect)((function(){return j.on("reject",(function(e){e[0].email===je&&i(e[0])})),function(){j.off("reject")}}),[je]),Object(n.useEffect)((function(){return j.on("acceptfriend",(function(e){e.user[0].email===je&&(i(e.user[0]),pe((function(t){return[].concat(Object(l.a)(t),[{senderemail:e.friend,recipientemail:e.user[0].email,total:0,read:0}])})))})),function(){j.off("acceptfriend")}}),[je]),Object(n.useEffect)((function(){return j.on("updateReadStatus",(function(e){var t;(null===(t=e[0])||void 0===t?void 0:t.recipientemail)!==je.toUpperCase()&&e[0]||(pe(e),console.log("sread",Oe,e))})),function(){j.off("updateReadStatus")}}),[je]),Object(n.useEffect)((function(){return j.on("update",(function(e){var t;console.log("update",e),(null===(t=e[0])||void 0===t?void 0:t.recipientemail)!==je.toUpperCase()&&e[0]||(pe(e),console.log("read",Oe))})),function(){j.off("update")}}),[je]),Object(n.useEffect)((function(){return j.on("privatemessage",(function(e){Ce("privatemessageload",JSON.stringify({email:s.email.toUpperCase(),friends:s.friends}),G),$.recipientEmail===(null===e||void 0===e?void 0:e.senderemail)?j.emit("read",{senderemail:e.senderemail,recipientemail:e.recipientemail}):(console.log("load"),j.emit("loadRead",{recipientemail:s.email.toUpperCase()}))})),function(){j.off("privatemessage")}}),[z,$,s]),j.on("publicmessage",(function(e){H(e)})),j.on("friendmessage",(function(e){R(e)})),j.on("publiclikes",(function(e){H(e)})),j.on("friendlikes",(function(e){R(e)})),j.on("publicdislike",(function(e){H(e)})),j.on("frienddislike",(function(e){R(e)})),j.on("publicdeletemessage",(function(e){H(e)})),j.on("frienddeletemessage",(function(e){R(e)})),j.on("deletemail",(function(e){G(e)})),Object(n.useEffect)((function(){s.friends&&le((function(){return E.filter((function(e){return e.email===s.email||s.friends.includes(e.email)}))}))}),[]);var Ne=function(e){"mail"===e&&(ie((function(e){return Object(r.a)(Object(r.a)({},e),{},{you:""})})),ee((function(e){return Object(r.a)(Object(r.a)({},e),{},{recipientEmail:""})}))),"home"===e||"mail"===e||"friends"===e||"friend"===e?k(!0):(h("Sign In"),k(!1),i({name:"",email:"",friends:[],requests:[],pendingrequests:[]}),T({id:"",name:"",email:"",message:"",time:"",likes:[]}),ee({id:"",name:"",senderemail:"",recipientemail:"",message:"",time:""}),ie({me:"",you:""}),me(!0),U(""),m("")),h(e)},Ce=function(e,t,s){fetch("https://socially-distanced-server.herokuapp.com/".concat(e),{method:"post",headers:{"Content-Type":"application/json"},body:t}).then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(e){return console.log(e)}))},ke=function(e,t,s){t?j.emit("deletemessage",{id:s,database:"publicmessages"}):j.emit("deletemessage",{id:s,database:"friendmessage"})},Se=function(e){"No Names"===e&&(e=prompt("Enter the email address of your friend ")),e&&(s.friends&&s.friends.includes(e)&&s.pendingrequests.includes(e)&&s.request.includes(e)||fetch("https://socially-distanced-server.herokuapp.com/friendrequest",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s.email,newFriend:e.toUpperCase()})}).then((function(e){return e.json()})).then((function(t){alert("Friend request sent to ".concat(e.toUpperCase(),"."))})).catch((function(e){return console.log(e)})))},ye=function(e){ie((function(t){return Object(r.a)(Object(r.a)({},t),{},{you:e})})),ee((function(t){return Object(r.a)(Object(r.a)({},t),{},{recipientEmail:e})})),h("mail"),j.emit("read",{senderemail:e,recipientemail:s.email})};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(p,{onRouteChange:Ne,isSignedIn:N,route:g,user:s,changePublicStatus:function(e,t){me(t),Ne(e)},totalMessages:xe}),N?"home"===g||"friend"===g?Object(d.jsx)("div",{className:"main",children:Object(d.jsx)("div",{className:"mainMessage",children:Object(d.jsx)(C,{user:s,loadData:Ce,route:g,deletePost:ke,currentMessage:J,setCurrentMessage:T,pastMessages:E,setPastMessages:R,currentPublicMessage:Y,setCurrentPublicMessage:Z,pastPublicMessages:D,setPastPublicMessages:H,addFriend:Se,conversation:ne,setFilteredMessages:le,filteredMessages:re,publicStatus:ue,setPublicStatus:me})})}):"mail"===g?Object(d.jsx)("div",{className:"main",children:Object(d.jsx)("div",{className:"mainMessage",children:Object(d.jsx)(S,{user:s,privateMessage:$,setPrivateMessage:ee,privateMessages:z,setPrivateMessages:G,deletePost:ke,conversation:ne,loadData:Ce,setConversation:ie,converse:ye,route:g,unread:Oe})})}):Object(d.jsx)(F,{user:s,addFriend:Se,converse:ye}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(b,{user:s,route:g,errorMessage:P,setUser:i,setRoute:h,setErrorMessage:U,setIsSignedIn:k,onRouteChange:Ne,setCurrentMessage:T,pastMessages:E,setPrivateMessages:G,setPastMessages:R,setCurrentPublicMessage:Z,setPastPublicMessages:H,setConversation:ie,setFilteredMessages:le,loadData:Ce,password:u,setPassword:m})})]})},U=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,84)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),n(e),i(e),a(e),c(e)}))};c.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(P,{})}),document.getElementById("root")),U()}},[[83,1,2]]]);
//# sourceMappingURL=main.98894e15.chunk.js.map