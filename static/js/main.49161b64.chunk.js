(this.webpackJsonpsociallydistanced=this.webpackJsonpsociallydistanced||[]).push([[0],[,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),c=s(11),i=s.n(c),r=(s(16),s(3)),l=s(1),u=(s(8),s(0)),o=function(e){var t=e.inputType,s=e.onChanges,a=e.value;return Object(u.jsxs)("div",{className:"inputBlock",children:[Object(u.jsx)("label",{className:"inputLabel",htmlFor:t,children:t}),Object(u.jsx)("input",{className:"inputField",type:"text",name:t,id:t,value:a,onChange:s})]})},j=function(e){var t=e.user,s=e.route,a=e.errorMessage,n=e.setRoute,c=e.setUser,i=e.setErrorMessage,r=e.setIsSignedIn,j=e.onRouteChange,b=e.setCurrentMessage,m=e.pastMessages,A=e.setPrivateMessage,d=e.setCurrentPublicMessage,g=(e.setPrivatePublicMessage,t.username),O=t.email,h=t.password,x=function(e){switch(e.target.id){case"Name":c((function(t){return Object(l.a)(Object(l.a)({},t),{},{username:e.target.value})}));break;case"Email":c((function(t){return Object(l.a)(Object(l.a)({},t),{},{email:e.target.value})}));break;case"Password":c((function(t){return Object(l.a)(Object(l.a)({},t),{},{password:e.target.value})}));break;default:console.log(e.target.value)}};return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("article",{className:"formWindow",children:["Register"===s?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"legend",children:"Register"}),Object(u.jsx)(o,{inputType:"Name",value:g,onChanges:x}),Object(u.jsx)(o,{inputType:"Email",value:O,onChanges:x}),Object(u.jsx)(o,{inputType:"Password",value:h,onChanges:x})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"legend",children:"Sign In"}),Object(u.jsx)(o,{inputType:"Email",value:O,onChanges:x}),Object(u.jsx)(o,{inputType:"Password",value:h,onChanges:x})]}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("button",{type:"submit",className:"button",onClick:function(){"Sign In"===s?(n("home"),r(!0),console.log(t),b((function(e){return Object(l.a)(Object(l.a)({},e),{},{email:O})})),A((function(e){return Object(l.a)(Object(l.a)({},e),{},{senderEmail:O})})),d((function(e){return Object(l.a)(Object(l.a)({},e),{},{email:O})}))):(/\S+@\S+\.\S+/.test(O)&&h.length>=8&&(n("home"),r(!0),b((function(e){return Object(l.a)(Object(l.a)({},e),{},{username:g})})),b((function(e){return Object(l.a)(Object(l.a)({},e),{},{email:O})})),console.log(m)),h.length<8?i("Password must be 8 characters long"):i("Enter a valid email address"))},children:"Submit"})}),Object(u.jsx)("div",{className:"",children:"Sign In"===s?Object(u.jsx)("p",{onClick:function(){return j("Register")},className:"loginLink",children:"Register"}):Object(u.jsx)("p",{onClick:function(){return j("Sign In")},className:"loginLink",children:"Sign In"})})]})}),Object(u.jsx)("div",{children:a})]})},b=(s(18),s.p+"static/media/home.2ea0f12c.png"),m=function(e){var t=e.onRouteChange,s=e.isSignedIn,a=e.route;return s?Object(u.jsxs)("div",{className:"navroot",children:["home"===a?Object(u.jsx)("div",{className:"navLeft",children:Object(u.jsx)("p",{className:"navhomemail",onClick:function(){return t("mail")},children:Object(u.jsx)("img",{className:"homemail",src:"data:image/png;base64,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",alt:"Mail",width:"30rem"})})}):Object(u.jsx)("div",{className:"navLeft",children:Object(u.jsx)("p",{className:"navhomemail",onClick:function(){return t("home")},children:Object(u.jsx)("img",{className:"homemail",src:b,alt:"Home",width:"30rem"})})}),Object(u.jsx)("div",{className:"headcontainer",children:Object(u.jsx)("h1",{className:"title",children:"SOCIALLY DISTANCED"})}),Object(u.jsx)("nav",{className:"nav",children:Object(u.jsx)("p",{onClick:function(){return t("Sign In")},className:"navElement",children:"Sign Out"})})]}):Object(u.jsx)("div",{className:"navroot",children:Object(u.jsx)("div",{className:"headcontainer",children:Object(u.jsx)("h1",{className:"title",children:"SOCIALLY DISTANCED"})})})},A=s(4),d=(s(9),s(19),function(e){return console.log(e),Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:"picture",alt:"picture",src:e.source,width:"200rem"})})}),g=s.p+"static/media/like.1fe2cbbc.png",O=s.p+"static/media/liked.82a0b8ca.png",h=function(e){var t=e.route,s=e.text,a=e.username,n=e.time,c=e.i,i=e.deletePost,r=e.deleteMail,l=(e.reply,e.addLike),o=e.count,j=e.currentUser,b=e.filteredMessages,m=e.background,A=e.publicStatus;e.pastPublicMessages;return Object(u.jsx)("div",{className:"box",children:Object(u.jsxs)("div",{className:"smallbox",children:[Object(u.jsxs)("div",{className:"messageArea "+m,children:[Object(u.jsx)("div",{className:"text",children:Object(u.jsx)("div",{className:"textmessage",children:s.includes("#img#")?Object(u.jsx)(d,{source:s.substr(5,s.length-1)}):s})}),Object(u.jsx)("div",{className:"deleteContainer",children:"home"===t?Object(u.jsx)("div",{children:b[c].email===j?Object(u.jsx)("button",{className:"deleteButton",id:c,onClick:function(){return i(c,A)},children:"x"}):Object(u.jsx)(u.Fragment,{})}):Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"deleteButton",id:c,onClick:r,children:"X"})})})]}),Object(u.jsx)("div",{}),Object(u.jsxs)("div",{className:"user "+m,children:[Object(u.jsx)("p",{children:a}),Object(u.jsx)("p",{className:"date",children:n.substr(0,24)})]}),Object(u.jsxs)("div",{className:"likes ",children:["home"===t?Object(u.jsx)("button",{className:"likeButton",onClick:function(){return l(c)},children:o.includes(j)?Object(u.jsx)("img",{src:O,alt:"Unlike",width:"20rem"}):Object(u.jsx)("img",{src:g,alt:"like",width:"20rem"})}):Object(u.jsx)(u.Fragment,{}),"home"===t?Object(u.jsx)("div",{children:o.length>4?"".concat(o.length," Likes"):o.length>1?o.length>2?o.join(", ")+" like this post":o.join(" and ")+" like this post":o.length?o+" likes this post":""}):Object(u.jsx)(u.Fragment,{})]})]})})},x=function(e){var t=e.user,s=e.currentMessage,n=e.pastMessages,c=e.setPastMessages,i=e.setCurrentMessage,o=e.currentPublicMessage,j=e.pastPublicMessages,b=e.setPastPublicMessages,m=e.setCurrentPublicMessage,d=e.deletePost,g=e.route,O=Object(a.useState)(n.filter((function(e){return t.friends.includes(e.email)||t.email===e.email}))),x=Object(r.a)(O,2),f=x[0],v=x[1],p=Object(a.useState)(!0),C=Object(r.a)(p,2),N=C[0],M=C[1],B=Object(a.useState)({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"}),E=Object(r.a)(B,2),w=E[0],P=E[1];Object(a.useEffect)((function(){""!==s.message&&(c([].concat(Object(A.a)(n),[s])),i((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:""})})))}),[s.time]),Object(a.useEffect)((function(){""!==o.message&&(b([].concat(Object(A.a)(j),[o])),m((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:""})})))}),[o.time]),Object(a.useEffect)((function(){v((function(){return n.filter((function(e){return t.friends.indexOf(e.email.toUpperCase())>-1||t.email===e.email}))}))}),[t.friends,n]),console.log("filtered",f,n,"user",t.email);var k=function(e){!e||""===o.message&&""===s.message||(N?m((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:"#img#"+o.message})})):i((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:"#img#"+s.message})}))),console.log(o,"public"),N?m((function(e){return Object(l.a)(Object(l.a)({},e),{},{time:Date().toLocaleString()})})):i((function(e){return Object(l.a)(Object(l.a)({},e),{},{time:Date().toLocaleString()})})),P({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"})},Q=function(e){N?m((function(t){return Object(l.a)(Object(l.a)({},t),{},{message:e.target.value})})):i((function(t){return Object(l.a)(Object(l.a)({},t),{},{message:e.target.value})}))},I=function(e){if(N){var s=Object(A.a)(j);if(s[e].count.includes(t.email)){var a=s[e].count.filter((function(e){return e!==t.email}));s[e]=Object(l.a)(Object(l.a)({},s[e]),{},{count:a}),b(s)}else{var i=[].concat(Object(A.a)(s[e].count),[t.email]);s[e]=Object(l.a)(Object(l.a)({},s[e]),{},{count:i}),console.log(i),b(s)}}else{var r=Object(A.a)(n);if(r[e].count.includes(t.email)){var u=r[e].count.filter((function(e){return e!==t.email}));r[e]=Object(l.a)(Object(l.a)({},r[e]),{},{count:u}),c(r)}else{var o=[].concat(Object(A.a)(r[e].count),[t.email]);r[e]=Object(l.a)(Object(l.a)({},r[e]),{},{count:o}),console.log(o),c(r)}}},S=function(){M(!N)},T=function(e){P(e?{picture:"",message:"textareahide",button:"textareahide",submit:""}:{picture:"textareahide",message:"",button:"textareahide",submit:""})},y=function(){P({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"}),N?m((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:""})})):i((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:""})}))};return Object(u.jsxs)("div",{className:"maincomment",children:[Object(u.jsx)("h1",{children:"Message Board"}),N?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"inputbox",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"submitbutton "+w.button,onClick:function(){return T(!1)},children:"Message"}),Object(u.jsx)("button",{className:"submitbutton "+w.button,onClick:function(){return T(!0)},children:"Picture"}),Object(u.jsx)("button",{className:"submitbutton "+w.submit,onClick:function(){return k(""===w.picture)},children:"Submit"}),Object(u.jsx)("button",{className:"submitbutton "+w.submit,onClick:y,children:"Back"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{className:"textareapic "+w.picture,cols:"40",rows:"6",onChange:Q,placeholder:"Enter Picture URL",value:o.message}),Object(u.jsx)("input",{className:"textarea "+w.message,cols:"40",rows:"6",onChange:Q,value:o.message})]})]}),Object(u.jsxs)("div",{className:"publicButton",children:[Object(u.jsx)("button",{className:"disabledButtons",children:"Public"}),Object(u.jsx)("button",{className:"publicButtons",onClick:S,children:"Friends"})]}),Object(u.jsx)("div",{className:"commentsection",children:Object(u.jsx)("div",{className:"bigbox",children:j.map((function(e,s){var a=j.length-1-s;return console.log("username",j[a]),Object(u.jsx)("div",{children:Object(u.jsx)(h,{filteredMessages:j,currentUser:t.email,username:j[a].email,text:j[a].message,time:j[a].time,i:a,deletePost:d,route:g,addLike:I,count:j[a].count,publicStatus:N})})}))})})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"inputbox",children:[Object(u.jsx)("input",{className:"textarea "+w.picture,cols:"40",rows:"6",onChange:Q,placeholder:"Enter Picture URL",value:s.message}),Object(u.jsx)("input",{className:"textarea "+w.message,cols:"40",rows:"6",onChange:Q,value:s.message}),Object(u.jsx)("button",{className:"submitbutton "+w.button,onClick:function(){return T(!1)},children:"Message"}),Object(u.jsx)("button",{className:"submitbutton "+w.button,onClick:function(){return T(!0)},children:"Picture"}),Object(u.jsx)("button",{className:"submitbutton "+w.submit,onClick:function(){return k(""===w.picture)},children:"Submit"}),Object(u.jsx)("button",{className:"submitbutton "+w.submit,onClick:y,children:"Back"})]}),Object(u.jsxs)("div",{className:"publicButton",children:[Object(u.jsx)("button",{className:"publicButtons",onClick:S,children:"Public"}),Object(u.jsx)("button",{className:"disabledButtons",children:"Friends"})]}),Object(u.jsxs)("div",{className:"commentsection",children:[Object(u.jsx)("div",{className:"bigbox",children:f.map((function(e,s){var a=f.length-1-s;return console.log("current",N),Object(u.jsx)("div",{children:Object(u.jsx)(h,{filteredMessages:f,currentUser:t.email,username:f[a].email,text:f[a].message,time:f[a].time,i:a,deletePost:d,route:g,addLike:I,count:f[a].count})})}))}),console.log("message",n)]})]})]})},f=(s(20),function(e){var t=e.privateMessage,s=e.setPrivateMessage,n=e.privateMessages,c=e.setPrivateMessages,i=(e.user,e.deletePost,e.conversation),o=Object(a.useState)({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"}),j=Object(r.a)(o,2),b=j[0],m=j[1],d="",g="";Object(a.useEffect)((function(){""!==t.message&&(c((function(e){return[].concat(Object(A.a)(e),[t])})),s((function(e){return Object(l.a)(Object(l.a)({},e),{},{username:"",message:"",time:""})})))}),[t.time]);var O=function(e){s((function(t){return Object(l.a)(Object(l.a)({},t),{},{message:e.target.value})}))},x=function(e){var t=n.length-1-e.target.id;c(n.filter((function(e){return e!==n[t]})))},f=function(e){console.log("reply",e),s((function(t){return Object(l.a)(Object(l.a)({},t),{},{recipientEmail:e})}))},v=function(e){m(e?{picture:"",message:"textareahide",button:"textareahide",submit:""}:{picture:"textareahide",message:"",button:"textareahide",submit:""})};return Object(u.jsxs)("div",{className:"mailbox",children:[Object(u.jsx)("h1",{className:"partner",children:i.you}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{className:"textarea "+b.picture,cols:"40",rows:"6",onChange:O,placeholder:"Enter Picture URL",value:t.message}),Object(u.jsx)("input",{className:"textarea "+b.message,cols:"40",rows:"6",onChange:O,value:t.message}),Object(u.jsx)("button",{className:"buttons "+b.button,onClick:function(){return v(!1)},children:"Message"}),Object(u.jsx)("button",{className:"buttons "+b.button,onClick:function(){return v(!0)},children:"Picture"}),Object(u.jsx)("button",{className:"buttons "+b.submit,onClick:function(){return""===b.picture&&""!==t.message&&s((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:"#img#"+t.message})})),s((function(e){return Object(l.a)(Object(l.a)({},e),{},{time:Date().toLocaleString()})})),console.log(n,"private"),void m({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"})},children:"Submit"}),Object(u.jsx)("button",{className:"buttons "+b.submit,onClick:function(){m({picture:"textareahide",message:"textareahide",button:"",submit:"textareahide"}),s((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:""})}))},children:"Back"})]}),Object(u.jsx)("div",{className:"messages",children:n.map((function(e,t){var s=n.length-1-t;if(console.log(i,n[s],"time"),n[s].recipientEmail.toUpperCase()===i.you&&n[s].senderEmail===i.me||n[s].recipientEmail===i.me.toUpperCase()&&n[s].senderEmail.toUpperCase()===i.you)return d=n[s].senderEmail.toUpperCase()===i.me.toUpperCase()?"sender":"recipient",g=n[s].senderEmail.toUpperCase()===i.me.toUpperCase()?"senderbackground":"",console.log(n[s].senderEmail.toUpperCase()===i.me.toUpperCase()),Object(u.jsx)("div",{className:d,children:Object(u.jsx)(h,{username:n[s].senderEmail,text:n[s].message,time:n[s].time,i:t,deleteMail:x,reply:f,background:g})})}))})]})}),v=(s(10),function(e){var t=e.friend,s=e.converse;e.route;return console.log(t),Object(u.jsx)("div",{className:"radioButton",children:Object(u.jsxs)("li",{children:[Object(u.jsx)("input",{type:"radio",name:"friend",id:t,onClick:function(){return s(t)}}),Object(u.jsx)("label",{for:t,children:t})]})})}),p=s.p+"static/media/friend.f4b364da.png",C=function(e){var t=e.user,s=e.setUser,n=e.setPrivateMessage,c=e.route,i=e.setRoute,o=e.setConversation,j=Object(a.useState)(!1),b=Object(r.a)(j,2),m=b[0],d=b[1],g=function(e){o((function(s){return Object(l.a)(Object(l.a)({},s),{},{you:e,me:t.email})})),n((function(t){return Object(l.a)(Object(l.a)({},t),{},{recipientEmail:e})})),i("mail"),console.log("add")},O=function(){d(!m)},h=t.friends;return Object(u.jsxs)("div",{className:"fixed",children:[console.log(h,"friendlsist",t),m?Object(u.jsxs)("div",{className:"friendList",children:[Object(u.jsx)("div",{className:"mainfriend",children:Object(u.jsxs)("div",{children:[console.log(c,"route"),Object(u.jsx)("div",{className:"friendtitlebox",children:Object(u.jsx)("p",{className:"friendtitle",children:"home"===c?"Friends List":"Contacts"})}),Object(u.jsx)("div",{className:"scroll",children:Object(u.jsxs)("ul",{children:[console.log(h),h.map((function(e){return Object(u.jsx)(v,{converse:g,friend:e,route:c})}))]})}),Object(u.jsx)("button",{className:"addFriend",onClick:function(){var e=prompt("Enter the email address of your friend ");if(e){var t=[].concat(Object(A.a)(h),[e.toUpperCase()]);s((function(e){return Object(l.a)(Object(l.a)({},e),{},{friends:t})}))}},children:"Add Friend"})]})}),Object(u.jsx)("button",{className:"hideFriend",onClick:O,children:"<<"})]}):Object(u.jsx)("div",{className:"",children:Object(u.jsx)("button",{className:"showFriend",onClick:O,children:Object(u.jsx)("img",{src:p,alt:"Friends",width:"35rem;"})})})]})};s(21);var N=function(){var e=Object(a.useState)({username:"",email:"",password:"",friends:["BRIAN@GMAIL.COM"]}),t=Object(r.a)(e,2),s=t[0],n=t[1],c=Object(a.useState)("Sign In"),i=Object(r.a)(c,2),l=i[0],o=i[1],b=Object(a.useState)(!1),A=Object(r.a)(b,2),d=A[0],g=A[1],O=Object(a.useState)(""),h=Object(r.a)(O,2),v=h[0],p=h[1],N=Object(a.useState)([]),M=Object(r.a)(N,2),B=M[0],E=M[1],w=Object(a.useState)({username:"",email:"",message:"",time:"",count:[]}),P=Object(r.a)(w,2),k=P[0],Q=P[1],I=Object(a.useState)([]),S=Object(r.a)(I,2),T=S[0],y=S[1],D=Object(a.useState)({username:"",email:"",message:"",time:"",count:[]}),F=Object(r.a)(D,2),L=F[0],U=F[1],R=Object(a.useState)([]),Y=Object(r.a)(R,2),q=Y[0],X=Y[1],H=Object(a.useState)({username:"",senderEmail:"",recipientEmail:"",message:"",time:""}),V=Object(r.a)(H,2),G=V[0],J=V[1],Z=Object(a.useState)({me:"",you:""}),K=Object(r.a)(Z,2),W=K[0],z=K[1],$=function(e){"home"===e||"mail"===e?g(!0):(console.log(s),o("Sign In"),g(!1),n({username:"",email:"",password:"",friends:["BRIAN@GMAIL.COM"]}),p(""),Q({username:"",email:"",message:"",time:"",count:[]}),J({username:"",senderEmail:"",recipientEmail:"",message:"",time:""}),z({me:"",you:""})),o(e)},_=function(e,t){t?T[e].email===s.email?y(T.filter((function(t){return t!==T[e]}))):alert("You can only delete your own messages"):B[e].email===s.email?E(B.filter((function(t){return t!==B[e]}))):alert("You can only delete your own messages")};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(m,{onRouteChange:$,isSignedIn:d,route:l}),d?"home"===l?Object(u.jsxs)("div",{className:"main",children:[Object(u.jsx)(C,{user:s,setUser:n,route:l,setRoute:o,setPrivateMessage:J,setConversation:z}),Object(u.jsx)("div",{className:"mainMessage",children:Object(u.jsx)(x,{user:s,route:l,deletePost:_,currentMessage:k,setCurrentMessage:Q,pastMessages:B,setPastMessages:E,currentPublicMessage:L,setCurrentPublicMessage:U,pastPublicMessages:T,setPastPublicMessages:y})})]}):Object(u.jsxs)("div",{className:"main",children:[Object(u.jsx)(C,{user:s,setUser:n,route:l,setRoute:o,setPrivateMessage:J,setConversation:z}),Object(u.jsx)("div",{className:"mainMessage",children:Object(u.jsx)(f,{user:s,privateMessage:G,setPrivateMessage:J,privateMessages:q,setPrivateMessages:X,deletePost:_,conversation:W})}),console.log(q,G)]}):Object(u.jsxs)(u.Fragment,{children:[console.log(q,G),Object(u.jsx)(j,{user:s,route:l,errorMessage:v,setUser:n,setRoute:o,setErrorMessage:p,setIsSignedIn:g,onRouteChange:$,setCurrentMessage:Q,pastMessages:B,setPrivateMessage:J,setCurrentPublicMessage:U})]})]})},M=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,23)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),M()}],[[22,1,2]]]);
//# sourceMappingURL=main.49161b64.chunk.js.map