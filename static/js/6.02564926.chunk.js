"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[6],{377:function(e,n,t){t.d(n,{Ej:function(){return c},Hg:function(){return i},gH:function(){return s},tx:function(){return f},zv:function(){return p}});var r=t(861),a=t(757),u=t.n(a),o=t(263),i=function(){var e=(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=22fa368820f7f9af3c30ea0e6b34461d&page=1");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=22fa368820f7f9af3c30ea0e6b34461d&language=en-US"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=22fa368820f7f9af3c30ea0e6b34461d&language=en-US&page=1&query=".concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=22fa368820f7f9af3c30ea0e6b34461d&language=en-US"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=22fa368820f7f9af3c30ea0e6b34461d&language=en-US&page=1"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},6:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var r,a,u,o,i,c=t(861),s=t(439),p=t(757),f=t.n(p),d=t(791),l=t(377),h=t(87),g=t(689),m=t(168),v=t(444),x=(0,v.ZP)(h.OL)(r||(r=(0,m.Z)(["\n  text-decoration: none;\n"]))),b=v.ZP.main(a||(a=(0,m.Z)(["\n  padding: 30px;\n"]))),Z=v.ZP.form(u||(u=(0,m.Z)(["\n  margin-bottom: 15px;\n"]))),k=v.ZP.input(o||(o=(0,m.Z)(["\n  border: 2px solid black;\n  border-radius: 4px;\n  padding: 5px;\n  margin-right: 10px;\n"]))),w=v.ZP.button(i||(i=(0,m.Z)(["\n  background-color: #27319d;\n  border-radius: 4px;\n  border: none;\n  color: white;\n  padding: 5px 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 14px;\n  "]))),y=t(596),_=t(184),S=function(){var e,n=(0,d.useState)(""),t=(0,s.Z)(n,2),r=t[0],a=t[1],u=(0,d.useState)(null),o=(0,s.Z)(u,2),i=o[0],p=o[1],m=(0,h.lr)(),v=(0,s.Z)(m,2),S=v[0],j=v[1],C=null!==(e=S.get("query"))&&void 0!==e?e:"",P=(0,g.TH)();function q(e){return H.apply(this,arguments)}function H(){return H=(0,c.Z)(f().mark((function e(n){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.gH)(n);case 3:if(0!==(t=e.sent).data.total_results){e.next=7;break}return y.Am.warn("Sorry! We didn't find anything, change your request"),e.abrupt("return");case 7:p(t.data.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),H.apply(this,arguments)}return(0,d.useEffect)((function(){C&&q(C)}),[C]),(0,_.jsxs)(b,{children:[(0,_.jsxs)(Z,{onSubmit:function(e){e.preventDefault(),j(""!==r?{query:r}:{}),""!==r.trim()?(q(C),a("")):y.Am.warn("Enter words to search for")},children:[(0,_.jsx)(k,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"search",onChange:function(e){a(e.target.value.toLowerCase())},value:r}),(0,_.jsx)(w,{type:"submit",children:"Search"})]}),(0,_.jsx)("ul",{children:i&&i.map((function(e){var n;return(0,_.jsx)("li",{children:(0,_.jsx)(x,{to:"".concat(e.id),state:{from:P},children:null!==(n=e.original_name)&&void 0!==n?n:e.original_title})},e.id)}))})]})}}}]);
//# sourceMappingURL=6.02564926.chunk.js.map