(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n(8),i=n.n(a),s=n(2),u=n(5),o=n(9),j=n.n(o);var l=function(e){var t=e.setCategories,n=Object(c.useState)(""),a=Object(s.a)(n,2),i=a[0],o=a[1],l=function(){return o("")};return Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),t((function(e){return function(e,t){if(t){var n=e.find((function(e){return e===t}));return l(),n?Object(u.a)(e):[t].concat(Object(u.a)(e))}return j.a.fire({title:"Error",icon:"error",text:"Debes ingresar un texto",allowOutsideClick:!1,allowEnterKey:!1,allowEscapeKey:!1}),l(),Object(u.a)(e)}(e,i)}))},children:Object(r.jsx)("input",{type:"text",value:i,onChange:function(e){var t=e.target.value;return o(t)}})})},d=n(11),b=n(7),O=n.n(b),f=n(10),p=function(){var e=Object(f.a)(O.a.mark((function e(t){var n,r,c,a,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"gnJOv9a8DsGQR9sT9DOyI3nGa4SY5H7z",10,n="https://api.giphy.com/v1/gifs/search?api_key=".concat("gnJOv9a8DsGQR9sT9DOyI3nGa4SY5H7z","&q=").concat(encodeURI(t),"&limit=").concat(10),e.next=6,fetch(n);case 6:return r=e.sent,e.next=9,r.json();case 9:return c=e.sent,a=c.data,i=a.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 15:return e.prev=15,e.t0=e.catch(0),e.abrupt("return",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}();n(18);var h=function(){return Object(r.jsx)("div",{className:"lds-hourglass"})};var x=function(e){var t=e.title,n=(e.id,e.url);return Object(r.jsxs)("div",{className:"card animate__animated animate__bounceInUp",children:[Object(r.jsx)("img",{src:n,alt:t}),Object(r.jsx)("p",{children:t})]})};var g=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],err:null,loading:!0}),n=Object(s.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){p(e).then((function(e){a(e?{data:e,loading:!1}:{err:{message:"No se pudo obtener"},loading:!1})})).catch((function(e){a({err:e,loading:!1})}))}),[e]),r}(t),a=n.data,i=n.loading,u=n.err;return u?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"Error"}),Object(r.jsx)("p",{children:u.message})]}):i?Object(r.jsx)(h,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:t}),Object(r.jsx)("div",{className:"card-grid",children:Object(r.jsx)("ol",{children:a.map((function(e){return Object(r.jsx)(x,Object(d.a)({},e),e.id)}))})})]})};var v=function(e){var t=Object(c.useState)(["One Punch"]),n=Object(s.a)(t,2),a=n[0],i=n[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"GifExpertApp"}),Object(r.jsx)(l,{setCategories:i}),Object(r.jsx)("hr",{}),Object(r.jsx)("ol",{children:a.map((function(e){return Object(r.jsx)(g,{category:e},e)}))})]})};n(19),n(20);i.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.a3d4b088.chunk.js.map