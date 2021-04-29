(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(36),s=n.n(a),i=(n(45),n(46),n(37)),o=n(3),u=n(4),d=n(15),l=n(5),b=n(72),h=function e(t){Object(d.a)(this,e),this[l.b]=!0,this.name=t,this.password="",this.id=Object(b.a)(),this.vehicles=[]},j=function e(t,n){Object(d.a)(this,e),this[l.b]=!0,this.numberOfSeats=n,this.numberPlate=t,this.id=Object(b.a)(),this.trips=[]},p=function e(t,n){Object(d.a)(this,e),this[l.b]=!0,this.destination=t,this.fare=n,this.id=Object(b.a)(),this.payments=[]},O=function e(t,n){Object(d.a)(this,e),this[l.b]=!0,this.amount=t,this.phoneNumber=n,this.fullyPaid=!1,this.id=Object(b.a)()};function f(e){return e.payments=e.payments.map((function(e){return t=e,Object.assign(new O,t);var t})),Object.assign(new p,e)}function m(e){return e.vehicles=e.vehicles.map((function(e){return(t=e).trips=t.trips.map((function(e){return f(e)})),Object.assign(new j,t);var t})),Object.assign(new h,e)}function x(e,t){return e.payments=function(e){for(var t=[],n=0;n<e;n++)t.push(new O(Math.floor(500*Math.random()),Math.floor(1e10*Math.random())));return t}(t),e}function v(e,t){return e.trips=function(e){for(var t=[],n=0;n<e;n++)t.push(new p("anywhere",Math.floor(500*Math.random())));return t}(t),e}var g,w,k,y,S,C=n(8),E=n(9),I=Object(E.a)("div")(g||(g=Object(C.a)(["\n  padding: 1em 1.5em;\n  border-radius: 0.5em;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  input {\n    margin: 0.3em 0em;\n  }\n"]))),N=Object(E.a)("div")(w||(w=Object(C.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #4b778d;\n  margin: 0.3em 0em;\n  padding: 0.4em 0.6em;\n  border-radius: 0.5em;\n"]))),A=n(0);function T(e){var t=e.payment;return Object(A.jsxs)(N,{children:[Object(A.jsx)("p",{children:t.phoneNumber}),Object(A.jsxs)("p",{children:[t.amount," Ksh"]})]})}var P,U,M=Object(E.a)("div")(k||(k=Object(C.a)(["\n  width: 60vw;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  .dashboard-header {\n    display: flex;\n    align-items: center;\n  }\n"]))),z=Object(E.a)("div")(y||(y=Object(C.a)(["\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.4);\n  display: ",";\n  justify-content: center;\n  align-items: center;\n  color: black;\n"])),(function(e){return e.show?"flex":"none"})),B=Object(E.a)("button")(S||(S=Object(C.a)(["\n  background-color: #9f5f80;\n  color: white;\n  padding: 0.4em 0.6em;\n  border: none;\n  border-radius: 0.4em;\n  margin: 0.1em 0.4em;\n"]))),Y=n(2),L=n.n(Y),V=n(6),D=n(11),J=n.n(D),R="http://localhost:5500/";function K(e,t){return q.apply(this,arguments)}function q(){return(q=Object(V.a)(L.a.mark((function e(t,n){var r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=localStorage.getItem("accessToken")){e.next=3;break}throw new Error("You must be logged in to add payments");case 3:return e.next=5,J.a.post(R+"payment/add",{payment:t,tripId:n},{headers:{Authorization:"Bearer "+r}});case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){var t=e.user,n=e.setUser,c=e.vehicleIndex,a=e.tripIndex,s=Object(r.useState)(new O(0,"")),i=Object(o.a)(s,2),u=i[0],d=i[1],b=t.vehicles[c].numberOfSeats-t.vehicles[c].trips[a].payments.length,h=Object(r.useState)(""),j=Object(o.a)(h,2),p=j[0],f=j[1];return Object(A.jsxs)(I,{onClick:function(e){return e.stopPropagation()},children:[Object(A.jsx)("h1",{children:"Add payments"}),""===p?null:Object(A.jsx)("p",{children:p}),Object(A.jsxs)("p",{children:[b,"/",t.vehicles[c].numberOfSeats," seats remaining"]}),Object(A.jsx)("input",{type:"number",placeholder:"Enter phone number...",value:u.phoneNumber,onChange:function(e){d(Object(l.a)(u,(function(t){t.phoneNumber=e.target.value})))}}),Object(A.jsx)("button",{onClick:Object(V.a)(L.a.mark((function e(){var r,s,i,o;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=/(254)\d{9}/i,u.phoneNumber.match(r)){e.next=4;break}throw new Error("Invalid phone number. Enter a number with the format 254xxxxxxxxx");case 4:return b>0&&(n(Object(l.a)(t,(function(e){e.vehicles[c].trips[a].payments.push(u)}))),d(new O(0,""))),s=t.vehicles[c].trips[a].id,e.next=8,K(u,s);case 8:if(i=e.sent,(o=i.data).success){e.next=12;break}throw new Error(o.message);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),f(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])}))),children:"Add"})]})}var G,H,Q=Object(E.a)("div")(P||(P=Object(C.a)(["\n  padding: 1em 1.5em;\n  border-radius: 0.5em;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  input {\n    margin: 0.3em 0em;\n  }\n"]))),W=Object(E.a)("div")(U||(U=Object(C.a)(["\n  background-color: #393e46;\n  color: white;\n  padding: 0.4em 0.8em;\n  margin: 0.2em;\n  border-radius: 0.1em;\n  .trip-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n"])));function X(e){var t=e.trip,n=e.vehicleIndex,c=e.tripIndex,a=e.user,s=e.setUser,i=Object(r.useState)(!1),d=Object(o.a)(i,2),l=d[0],b=d[1],h=Object(r.useState)(!1),j=Object(o.a)(h,2),p=j[0],O=j[1],f=Object(u.f)();return Object(A.jsxs)(W,{children:[Object(A.jsxs)("div",{children:[Object(A.jsxs)("div",{className:"trip-header",children:[Object(A.jsxs)("h3",{children:["Destination: ",t.destination]}),Object(A.jsxs)("div",{children:[Object(A.jsx)(B,{onClick:function(){return O(!0)},children:"Add payments"}),Object(A.jsx)(B,{onClick:function(){return f.push("/report/trip/"+t.id)},children:"Trip report"})]})]}),l?Object(A.jsx)("span",{className:"dropdown",onClick:function(){return b(!1)},children:"Close payments"}):Object(A.jsx)("span",{className:"dropdown",onClick:function(){return b(!0)},children:"Open payments"})]}),l&&Object(A.jsx)("div",{children:t.payments.map((function(e){return Object(A.jsx)(T,{payment:e},e.id)}))}),Object(A.jsx)(z,{show:p,onClick:function(){O(!1)},children:Object(A.jsx)(F,{vehicleIndex:n,tripIndex:c,user:a,setUser:s})})]})}var Z=Object(E.a)("div")(G||(G=Object(C.a)(["\n  padding: 1em 1.5em;\n  border-radius: 0.5em;\n  display: flex;\n  flex-direction: column;\n  background-color: white;\n  input {\n    margin: 0.3em 0em;\n  }\n"]))),$=Object(E.a)("div")(H||(H=Object(C.a)(["\n  background-color: #d8e3e7;\n  min-width: 500px;\n  padding: 0.5em;\n  margin: 0.4em 0em;\n  border-radius: 0.5em;\n  .vehicle-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .dropdown {\n    cursor: pointer;\n    background-color: #ffc996;\n    padding: 0.2em;\n    border-radius: 0.2em;\n    color: black;\n  }\n"])));function _(e){return ee.apply(this,arguments)}function ee(){return(ee=Object(V.a)(L.a.mark((function e(t){var n,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("accessToken")){e.next=3;break}throw new Error("You need to be logged in to add a vehicle");case 3:return e.next=5,J.a.post(R+"vehicle/add",{vehicle:t},{headers:{Authorization:"Bearer "+n}});case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e){var t=e.setUser,n=e.user,c=Object(r.useState)(new j("","")),a=Object(o.a)(c,2),s=a[0],i=a[1],u=Object(r.useState)(""),d=Object(o.a)(u,2),b=d[0],h=d[1];return Object(A.jsxs)(Z,{onClick:function(e){return e.stopPropagation()},children:[Object(A.jsx)("h1",{children:"Add vehicle"}),""===b?null:Object(A.jsx)("p",{children:b}),Object(A.jsx)("input",{type:"text",placeholder:"Enter number plate...",value:s.numberPlate,onChange:function(e){i(Object(l.a)(s,(function(t){t.numberPlate=e.target.value})))}}),Object(A.jsx)("input",{type:"number",placeholder:"Enter number of seats...",value:s.numberOfSeats,onChange:function(e){i(Object(l.a)(s,(function(t){t.numberOfSeats=e.target.value})))}}),Object(A.jsx)("button",{onClick:Object(V.a)(L.a.mark((function e(){var r,c,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=/^k[a-z]{2}[-]{0,1}\d{3}[a-z]{1}/i,s.numberPlate.match(r)){e.next=4;break}throw new Error("Incorrect number plate. Enter kenyan number plate with format kxx-dddx. where x->letter and d->digit");case 4:if(!(s.numberOfSeats<0)){e.next=6;break}throw new Error("Number of seats must be more than 0");case 6:return t(Object(l.a)(n,(function(e){e.vehicles.push(s)}))),e.next=9,_(s);case 9:if(c=e.sent,!(a=c.data).success){e.next=14;break}e.next=15;break;case 14:throw new Error(a.message);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),h(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[0,17]])}))),children:"Add Vehicle"})]})}function ne(e,t){return re.apply(this,arguments)}function re(){return(re=Object(V.a)(L.a.mark((function e(t,n){var r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=localStorage.getItem("accessToken")){e.next=3;break}throw new Error("You need to be logged in to add a trip");case 3:return e.next=5,J.a.post(R+"trip/add",{trip:t,vehicleId:n},{headers:{Authorization:"Bearer "+r}});case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(e){var t=e.setUser,n=e.user,c=e.vehicleIndex,a=Object(r.useState)(new p("","")),s=Object(o.a)(a,2),i=s[0],u=s[1],d=Object(r.useState)(""),b=Object(o.a)(d,2),h=b[0],j=b[1];return Object(A.jsxs)(Q,{onClick:function(e){return e.stopPropagation()},children:[Object(A.jsx)("h1",{children:"Add trip"}),""===h?null:Object(A.jsx)("p",{children:h}),Object(A.jsx)("input",{type:"text",placeholder:"Enter destination...",value:i.destination,onChange:function(e){u(Object(l.a)(i,(function(t){t.destination=e.target.value})))}}),Object(A.jsx)("input",{type:"number",placeholder:"Enter fare charge...",value:i.fare,onChange:function(e){u(Object(l.a)(i,(function(t){t.fare=e.target.value})))}}),Object(A.jsx)("button",{onClick:Object(V.a)(L.a.mark((function e(){var r,a,s;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(i.destination.length<=0)){e.next=3;break}throw new Error("Invalid destination...");case 3:if(!(i.fare<0||void 0===i.fare)){e.next=5;break}throw new Error("Enter a valid fare amount...");case 5:return t(Object(l.a)(n,(function(e){e.vehicles[c].trips.push(i)}))),r=n.vehicles[c].id,e.next=9,ne(i,r);case 9:if(a=e.sent,(s=a.data).success){e.next=13;break}throw new Error(s.message);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),j(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])}))),children:"Add trip"})]})}function ae(e){var t=e.vehicle,n=e.vehicleIndex,c=e.user,a=e.setUser,s=Object(r.useState)(!1),i=Object(o.a)(s,2),u=i[0],d=i[1],l=Object(r.useState)(!1),b=Object(o.a)(l,2),h=b[0],j=b[1];return Object(A.jsxs)($,{children:[Object(A.jsxs)("div",{children:[Object(A.jsxs)("div",{className:"vehicle-header",children:[Object(A.jsxs)("h3",{children:["Plate: ",t.numberPlate]}),Object(A.jsx)(B,{onClick:function(){return j(!0)},children:"Add trip"})]}),u?Object(A.jsx)("span",{className:"dropdown open-trips",onClick:function(){return d(!1)},children:"Close trips"}):Object(A.jsx)("span",{className:"dropdown close-trips",onClick:function(){return d(!0)},children:"Open trips"})]}),u&&Object(A.jsxs)("div",{children:[Object(A.jsx)("h4",{children:"Trips"}),t.trips.map((function(e,t){return Object(A.jsx)(X,{trip:e,tripIndex:t,user:c,setUser:a,vehicleIndex:n},e.id)}))]}),Object(A.jsx)(z,{show:h,onClick:function(){return j(!1)},children:Object(A.jsx)(ce,{user:c,setUser:a,vehicleIndex:n})})]})}new h("Dummy").vehicles=function(e){var t=function(e){for(var t=[],n=0;n<e;n++)t.push(new j(Object(b.a)().slice(0,6),Math.floor(25*Math.random())));return t}(e).map((function(t){return v(t,e)}));return t=t.map((function(e){return e.trips=e.trips.map((function(e){return x(e,3)})),e}))}(4);var se,ie=n(17),oe=Object(E.a)("div")(se||(se=Object(C.a)(["\n  display: flex;\n\n  flex-direction: column;\n  align-items: center;\n\n  th,\n  td {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  }\n  td,\n  th {\n    padding: 0.3em 0.4em;\n    text-align: left;\n  }\n  th {\n    height: 50px;\n    background-color: #132c33;\n    color: white;\n  }\n  tr:nth-child(even) {\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n  table {\n    border-collapse: collapse;\n    min-width: 500px;\n  }\n"])));function ue(){return(ue=Object(V.a)(L.a.mark((function e(t){var n,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("accessToken")){e.next=3;break}throw new Error("You must be logged in to view this page!");case 3:return e.next=5,J.a.get(R+"trip/"+t,{headers:{Authorization:"Bearer "+n}});case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var de,le,be=x(new p("Buruburu",50),4);var he=Object(E.a)("div")(de||(de=Object(C.a)(["\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),je=Object(E.a)("div")(le||(le=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  input {\n    margin: 0.2em 0em;\n  }\n  button {\n    width: 100%;\n    margin: 0.1em 0em;\n  }\n  .extra {\n    text-align: center;\n    width: 100%;\n  }\n"])));function pe(e){return Oe.apply(this,arguments)}function Oe(){return(Oe=Object(V.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.a.post(R+"user/register",{user:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(e){return me.apply(this,arguments)}function me(){return(me=Object(V.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.a.post(R+"user/login",{user:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var xe=[{path:"/",Component:function(){var e=Object(r.useState)(new h("")),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(o.a)(a,2),i=s[0],d=s[1],b=Object(u.f)();return Object(A.jsx)(he,{children:Object(A.jsxs)(je,{children:[Object(A.jsx)("h1",{children:"Log In"}),""!==i?Object(A.jsx)("p",{children:i}):null,Object(A.jsx)("input",{type:"text",placeholder:"Enter name...",value:n.name,onChange:function(e){c(Object(l.a)(n,(function(t){t.name=e.target.value})))}}),Object(A.jsx)("input",{type:"password",placeholder:"Enter password...",value:n.password,onChange:function(e){c(Object(l.a)(n,(function(t){t.password=e.target.value})))}}),Object(A.jsx)(B,{onClick:function(){var e=Object(V.a)(L.a.mark((function e(t){var r,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fe(n);case 3:if(r=e.sent,!(c=r.data).success){e.next=10;break}localStorage.setItem("accessToken",c.accessToken),b.push("/dashboard"),e.next=11;break;case 10:throw new Error(c.message);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),d(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),children:"Submit"}),Object(A.jsx)("div",{className:"extra",children:Object(A.jsx)(ie.b,{to:"/register",children:"Or register"})})]})})},exact:!0},{path:"/register",Component:function(){var e=Object(r.useState)(new h("")),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(o.a)(a,2),i=s[0],d=s[1],b=Object(u.f)();return Object(A.jsx)(he,{children:Object(A.jsxs)(je,{children:[Object(A.jsx)("h1",{children:"Register"}),""!==i?Object(A.jsx)("p",{children:i}):null,Object(A.jsx)("input",{type:"text",placeholder:"Enter name...",value:n.name,onChange:function(e){c(Object(l.a)(n,(function(t){t.name=e.target.value})))}}),Object(A.jsx)("input",{type:"password",placeholder:"Enter password...",value:n.password,onChange:function(e){c(Object(l.a)(n,(function(t){t.password=e.target.value})))}}),Object(A.jsx)(B,{onClick:Object(V.a)(L.a.mark((function e(){var t,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pe(n);case 3:if(t=e.sent,!(r=t.data).success){e.next=10;break}localStorage.setItem("accessToken",r.accessToken),b.push("/dashboard"),e.next=11;break;case 10:throw new Error(r.message);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),d(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),children:"Submit"}),Object(A.jsx)("div",{className:"extra",children:Object(A.jsx)(ie.b,{to:"/",children:"Or login"})})]})})},exact:!0},{path:"/dashboard",Component:function(){var e=Object(r.useState)(new h),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),s=Object(o.a)(a,2),d=s[0],l=s[1],b=Object(u.f)(),j=Object(r.useState)(""),p=Object(o.a)(j,2),O=p[0],f=p[1],x=Object(r.useState)(!0),v=Object(o.a)(x,2),g=v[0],w=v[1];return Object(r.useEffect)((function(){(function(){var e=localStorage.getItem("accessToken");if(!e)throw new Error("You must be logged in to view this page correctly!");return J.a.get(R+"user/",{headers:{Authorization:"Bearer "+e}})})().then((function(e){var t=e.data;if(!t.success)throw new Error(t.message);c(m(t.user))})).then((function(){w(!1)})).catch((function(e){return f(e.message)}))}),[]),g?""===O?Object(A.jsx)("p",{children:"Loading..."}):Object(A.jsx)("p",{children:O}):Object(A.jsxs)(M,{children:[Object(A.jsxs)("div",{className:"dashboard-header",children:[Object(A.jsx)("h1",{children:"Registered Vehicles"}),Object(A.jsx)(B,{onClick:function(){return l(!0)},children:"Add Vehicle"}),Object(A.jsx)(B,{onClick:function(){localStorage.removeItem("accessToken"),b.push("/")},children:"Log out"})]}),n.vehicles.map((function(e,t){return Object(A.jsx)(ae,Object(i.a)({vehicle:e,vehicleIndex:t,user:n,setUser:c},"setUser",c),e.id)})),Object(A.jsx)(z,{onClick:function(){l(!1)},show:d,children:Object(A.jsx)(te,{setUser:c,user:n})})]})},exact:!0},{path:"/report/trip/:tripId",Component:function(){var e=Object(r.useState)(be),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(u.g)().tripId,s=Object(r.useState)(""),i=Object(o.a)(s,2),d=i[0],l=i[1],b=Object(r.useState)(!0),h=Object(o.a)(b,2),j=h[0],p=h[1];return Object(r.useEffect)((function(){try{(function(e){return ue.apply(this,arguments)})(a).then((function(e){var t=e.data;if(!t.success)throw new Error(t.message);var n=f(t.trip);c(n),p(!1)})).catch((function(e){return l(e.message)}))}catch(d){l(d.message)}}),[]),j?""===d?Object(A.jsx)("p",{children:"Loading..."}):Object(A.jsx)("p",{children:d}):Object(A.jsx)(oe,{children:Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{children:"Trip report"}),""===d?null:Object(A.jsx)("p",{children:d}),Object(A.jsxs)("table",{children:[Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{children:"Seat Number"}),Object(A.jsx)("th",{children:"Paid by"}),Object(A.jsx)("th",{children:"Paid or not paid"})]}),Object(A.jsx)("tbody",{children:n.payments.map((function(e,t){var n=e.phoneNumber.toString().substring(0,6)+"*********";return Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:t}),Object(A.jsx)("td",{children:n}),Object(A.jsx)("td",{children:"True"})]})}))})]})]})})},exact:!0}];var ve=function(){return Object(A.jsx)(ie.a,{children:Object(A.jsx)(u.c,{children:xe.map((function(e){return Object(A.jsx)(u.a,{path:e.path,exact:e.exact,children:Object(A.jsx)(e.Component,{})})}))})})};s.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(ve,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.36d8e699.chunk.js.map