(this.webpackJsonpsociallydistanced=this.webpackJsonpsociallydistanced||[]).push([[0],[,,,,,,,,function(e,t,s){},function(e,t,s){},,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(2),a=s.n(n),c=s(10),i=s.n(c),r=(s(15),s(3)),l=s(1),o=(s(8),s(0)),j=function(e){var t=e.inputType,s=e.onChanges,n=e.value;return Object(o.jsxs)("div",{className:"inputBlock",children:[Object(o.jsx)("label",{className:"inputLabel",htmlFor:t,children:t}),Object(o.jsx)("input",{className:"inputField",type:"text",name:t,id:t,value:n,onChange:s})]})},u=function(e){var t=e.user,s=e.route,n=e.errorMessage,a=e.setRoute,c=e.setUser,i=e.setErrorMessage,r=e.setIsSignedIn,u=e.onRouteChange,d=e.setCurrentMessage,m=e.pastMessages,b=e.setPrivateMessage,O=t.username,g=t.email,h=t.password,x=function(e){switch(e.target.id){case"Name":c((function(t){return Object(l.a)(Object(l.a)({},t),{},{username:e.target.value})}));break;case"Email":c((function(t){return Object(l.a)(Object(l.a)({},t),{},{email:e.target.value})}));break;case"Password":c((function(t){return Object(l.a)(Object(l.a)({},t),{},{password:e.target.value})}));break;default:console.log(e.target.value)}};return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("article",{className:"formWindow",children:["Register"===s?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"legend",children:"Register"}),Object(o.jsx)(j,{inputType:"Name",value:O,onChanges:x}),Object(o.jsx)(j,{inputType:"Email",value:g,onChanges:x}),Object(o.jsx)(j,{inputType:"Password",value:h,onChanges:x})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"legend",children:"Sign In"}),Object(o.jsx)(j,{inputType:"Email",value:g,onChanges:x}),Object(o.jsx)(j,{inputType:"Password",value:h,onChanges:x})]}),Object(o.jsx)("div",{className:"",children:Object(o.jsx)("button",{type:"submit",className:"button",onClick:function(){"Sign In"===s?(a("home"),r(!0),console.log(t),d((function(e){return Object(l.a)(Object(l.a)({},e),{},{email:g})})),b((function(e){return Object(l.a)(Object(l.a)({},e),{},{senderEmail:g})}))):(/\S+@\S+\.\S+/.test(g)&&h.length>=8&&(a("home"),r(!0),d((function(e){return Object(l.a)(Object(l.a)({},e),{},{username:O})})),d((function(e){return Object(l.a)(Object(l.a)({},e),{},{email:g})})),console.log(m)),h.length<8?i("Password must be 8 characters long"):i("Enter a valid email address"))},children:"Submit"})}),Object(o.jsx)("div",{className:"",children:"Sign In"===s?Object(o.jsx)("p",{onClick:function(){return u("Register")},className:"loginLink",children:"Register"}):Object(o.jsx)("p",{onClick:function(){return u("Sign In")},className:"loginLink",children:"Sign In"})})]})}),Object(o.jsx)("div",{children:n})]})},d=(s(17),function(e){var t=e.onRouteChange,s=e.isSignedIn,n=e.route;return s?Object(o.jsxs)("div",{children:["home"===n?Object(o.jsx)("div",{className:"navLeft",children:Object(o.jsx)("p",{onClick:function(){return t("mail")},children:Object(o.jsx)("img",{src:"/assets/images/mail-outline.png",alt:"Mail",width:"30rem"})})}):Object(o.jsx)("div",{className:"navLeft",children:Object(o.jsx)("p",{onClick:function(){return t("home")},children:Object(o.jsx)("img",{src:"/assets/images/home.png",alt:"Home",width:"30rem"})})}),Object(o.jsx)("div",{className:"headcontainer",children:Object(o.jsx)("h1",{className:"title",children:"SOCIALLY DISTANCED"})}),Object(o.jsx)("nav",{className:"nav",children:Object(o.jsx)("p",{onClick:function(){return t("Sign In")},className:"navElement",children:"Sign Out"})})]}):Object(o.jsx)("div",{className:"headcontainer",children:Object(o.jsx)("h1",{className:"title",children:"SOCIALLY DISTANCED"})})}),m=s(4),b=(s(9),function(e){return console.log(e),Object(o.jsx)("div",{children:Object(o.jsx)("img",{alt:"picture",src:e.source,width:"200em"})})}),O=function(e){var t=e.route,s=e.text,n=e.username,a=e.time,c=e.i,i=e.deletePost,r=e.deleteMail,l=e.reply,j=e.addLike,u=e.count,d=e.currentUser,m=e.pastMessages;return Object(o.jsx)("div",{className:"box",children:Object(o.jsxs)("div",{className:"smallbox",children:[Object(o.jsxs)("div",{className:"messageArea",children:[Object(o.jsxs)("div",{className:"text",children:[Object(o.jsx)("div",{className:"textmessage",children:s.includes("img")?Object(o.jsx)(b,{source:s.substr(3,s.length-1)}):s}),console.log(s.substr(3,s.length-1))]}),Object(o.jsx)("div",{className:"deleteContainer",children:"home"===t?Object(o.jsx)("div",{children:m[c].email===d?Object(o.jsx)("button",{className:"deleteButton",id:c,onClick:function(){return i(c)},children:"X"}):Object(o.jsx)(o.Fragment,{})}):Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"deleteButton",id:c,onClick:r,children:"X"})})})]}),Object(o.jsx)("div",{}),Object(o.jsxs)("div",{className:"user",children:[Object(o.jsx)("p",{children:n}),Object(o.jsx)("p",{className:"date",children:a.substr(0,24)})]}),console.log(t),Object(o.jsxs)("div",{className:"likes",children:["home"===t?Object(o.jsx)("button",{className:"likeButton",onClick:function(){return j(c)},children:u.includes(d)?Object(o.jsx)("img",{src:"/assets/images/liked.png",alt:"Unlike",width:"20rem"}):Object(o.jsx)("img",{src:"/assets/images/like.png",alt:"like",width:"20rem"})}):Object(o.jsx)("button",{className:"likeButton",onClick:function(){return l(n)},children:"Reply"}),"home"===t?Object(o.jsx)("div",{children:u.length>4?"".concat(u.length," Likes"):u.length>1?u.length>2?u.join(", ")+" like this post":u.join(" and ")+" like this post":u.length?u+" likes this post":""}):Object(o.jsx)(o.Fragment,{})]})]})})},g=function(e){var t=e.user,s=e.currentMessage,a=e.pastMessages,c=e.setPastMessages,i=e.setCurrentMessage,r=e.deletePost,j=e.route;Object(n.useEffect)((function(){""!==s.message&&(c([].concat(Object(m.a)(a),[s])),i((function(e){return Object(l.a)(Object(l.a)({},e),{},{message:""})})))}),[s.time]);var u=function(e){var s=Object(m.a)(a);if(s[e].count.includes(t)){var n=s[e].count.filter((function(e){return e!==t}));s[e]=Object(l.a)(Object(l.a)({},s[e]),{},{count:n}),c(s)}else{var i=[].concat(Object(m.a)(s[e].count),[t]);s[e]=Object(l.a)(Object(l.a)({},s[e]),{},{count:i}),console.log(i),c(s)}};return Object(o.jsxs)("div",{className:"maincomment",children:[Object(o.jsxs)("div",{className:"inputbox",children:[Object(o.jsx)("input",{className:"textarea",cols:"40",rows:"6",onChange:function(e){i((function(t){return Object(l.a)(Object(l.a)({},t),{},{message:e.target.value})}))},value:s.message}),Object(o.jsx)("button",{className:"submitbutton",onClick:function(){i((function(e){return Object(l.a)(Object(l.a)({},e),{},{time:Date().toLocaleString()})}))},children:"Submit"})]}),Object(o.jsxs)("div",{className:"commentsection",children:[Object(o.jsxs)("div",{className:"filter",children:[Object(o.jsx)("label",{name:"filter",className:"filterLabel",children:"Filter Messages"}),Object(o.jsx)("input",{name:"filter"})]}),Object(o.jsx)("div",{children:a.map((function(e,s){var n=a.length-1-s;return Object(o.jsx)("div",{children:Object(o.jsx)(O,{pastMessages:a,currentUser:t,username:a[n].email,text:a[n].message,time:a[n].time,i:n,deletePost:r,route:j,addLike:u,count:a[n].count})})}))}),console.log("message",a)]})]})},h=(s(18),function(e){var t=e.privateMessage,s=e.setPrivateMessage,n=e.privateMessages,a=e.setPrivateMessages,c=e.user,i=(e.deletePost,function(e){switch(e.target.id){case"recipientEmail":s((function(t){return Object(l.a)(Object(l.a)({},t),{},{recipientEmail:e.target.value})}));break;case"messageBody":s((function(t){return Object(l.a)(Object(l.a)({},t),{},{message:e.target.value})}))}}),r=function(e){var t=n.length-1-e.target.id;a(n.filter((function(e){return e!==n[t]})))},j=function(e){console.log("reply",e),s((function(t){return Object(l.a)(Object(l.a)({},t),{},{recipientEmail:e})}))};return Object(o.jsxs)("div",{className:"mailbox",children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{name:"to",children:"To"}),Object(o.jsx)("input",{name:"to",id:"recipientEmail",type:"text",placeholder:"Enter email",onChange:i,value:t.recipientEmail})]}),Object(o.jsx)("label",{name:"body",children:"Message"}),Object(o.jsx)("textarea",{name:"body",id:"messageBody",placeholder:"Enter Message ",onChange:i,value:t.message}),Object(o.jsx)("button",{type:"submit",onClick:function(){a((function(e){return[].concat(Object(m.a)(e),[t])})),s((function(e){return Object(l.a)(Object(l.a)({},e),{},{username:"",recipientEmail:"",message:"",time:""})})),console.log(n)},children:"Send"})]}),n.map((function(e,t){var s=n.length-1-t;if(console.log(n[s].recipientEmail,c.email),n[s].recipientEmail===c.email)return Object(o.jsx)("div",{children:Object(o.jsx)(O,{username:n[s].senderEmail,text:n[s].message,time:n[s].time,i:t,deleteMail:r,reply:j})})}))]})}),x=function(e){var t=e.friend,s=e.messageFriend;return console.log(t),Object(o.jsx)("div",{children:Object(o.jsx)("li",{onClick:function(){return s(t)},children:t})})},v=(s(19),function(e){var t=e.user,s=e.setUser,n=e.setPrivateMessage,a=e.setRoute,c=function(e){n((function(t){return Object(l.a)(Object(l.a)({},t),{},{recipientEmail:e})})),a("mail"),console.log("add")},i=t.friends;return Object(o.jsxs)("div",{className:"mainfriend",children:[Object(o.jsx)("div",{className:"friendtitlebox",children:Object(o.jsx)("p",{className:"friendtitle",children:"Friends List"})}),Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{children:[console.log(i),i.map((function(e){return Object(o.jsx)(x,{messageFriend:c,friend:e})}))]})}),Object(o.jsx)("button",{onClick:function(){var e=prompt("Enter the email address of your friend "),t=[].concat(Object(m.a)(i),[e]);s((function(e){return Object(l.a)(Object(l.a)({},e),{},{friends:t})}))},children:"Add Friend"})]})});s(20);var f=function(){var e=Object(n.useState)({username:"",email:"",password:"",friends:["brian@gmail.com"]}),t=Object(r.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)("Sign In"),i=Object(r.a)(c,2),l=i[0],j=i[1],m=Object(n.useState)(!1),b=Object(r.a)(m,2),O=b[0],x=b[1],f=Object(n.useState)(""),p=Object(r.a)(f,2),N=p[0],C=p[1],M=Object(n.useState)([]),k=Object(r.a)(M,2),S=k[0],E=k[1],y=Object(n.useState)({username:"",email:"",message:"",time:"",count:[]}),P=Object(r.a)(y,2),w=P[0],I=P[1],L=Object(n.useState)([]),F=Object(r.a)(L,2),R=F[0],T=F[1],B=Object(n.useState)({username:"",senderEmail:"",recipientEmail:"",message:"",time:""}),U=Object(r.a)(B,2),A=U[0],D=U[1],Y=function(e){"home"===e||"mail"===e?x(!0):(console.log(s),j("Sign In"),x(!1),a({username:"",email:"",password:"",friends:["brian@gmail.com"]}),C(""),I({username:"",email:"",message:"",time:"",count:[]}),D({username:"",senderEmail:"",recipientEmail:"",message:"",time:""})),j(e)},J=function(e){console.log(S[e].email),S[e].email===s.email?E(S.filter((function(t){return t!==S[e]}))):alert("You can only delete your own messages")};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(d,{onRouteChange:Y,isSignedIn:O,route:l}),O?"home"===l?Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)(v,{user:s,setUser:a,setRoute:j,setPrivateMessage:D}),Object(o.jsx)("div",{className:"mainMessage",children:Object(o.jsx)(g,{user:s.email,route:l,deletePost:J,currentMessage:w,setCurrentMessage:I,pastMessages:S,setPastMessages:E})})]}):Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)(v,{user:s,setUser:a,setRoute:j,setPrivateMessage:D}),Object(o.jsx)("div",{className:"mainMessage",children:Object(o.jsx)(h,{user:s,privateMessage:A,setPrivateMessage:D,privateMessages:R,setPrivateMessages:T,deletePost:J})})]}):Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(u,{user:s,route:l,errorMessage:N,setUser:a,setRoute:j,setErrorMessage:C,setIsSignedIn:x,onRouteChange:Y,setCurrentMessage:I,pastMessages:S,setPrivateMessage:D})})]})},p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,22)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),c(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),p()}],[[21,1,2]]]);
//# sourceMappingURL=main.067639c6.chunk.js.map