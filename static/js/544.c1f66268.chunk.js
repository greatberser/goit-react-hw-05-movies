"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{639:function(t,e,r){r.d(e,{a:function(){return i}});var n=r(154),a="Loader_loader__+lRPl",s=r(184),i=function(){return(0,s.jsx)("div",{className:a,children:(0,s.jsx)(n._P,{visible:!0,height:"100",width:"100",color:"#4fa94d",ariaLabel:"rings-loading",wrapperStyle:{},wrapperClass:""})})}},510:function(t,e,r){r.d(e,{e:function(){return f}});var n=r(689),a=r(87),s="MovieList_movieList__uFrOZ",i="MovieList_itemMovie__aFzIB",u="MovieList_movieLink__kzavH",c="MovieList_imgMovie__+wI8y",o="MovieList_titleMovie__YIVrF",p=r(184),f=function(t){var e=t.movies,r=(0,n.TH)();return(0,p.jsx)("ul",{className:s,children:Array.isArray(e)&&e.length>0&&e.map((function(t){var e=t.poster_path,n=t.original_title,s=t.id;return(0,p.jsx)("li",{className:i,children:(0,p.jsxs)(a.rU,{className:u,to:"/movies/".concat(s),state:{from:r},children:[(0,p.jsx)("img",{width:"300",className:c,src:e?"".concat("https://image.tmdb.org/t/p/w200").concat(e):"https://placehold.jp/300x450.png",alt:n}),(0,p.jsx)("p",{className:o,children:n})]})},s)}))})}},544:function(t,e,r){r.r(e),r.d(e,{default:function(){return v}});var n=r(861),a=r(439),s=r(757),i=r.n(s),u=r(510),c=r(639),o=r(390),p=r(791),f=r(184);function v(){var t=(0,p.useState)([]),e=(0,a.Z)(t,2),r=e[0],s=e[1],v=(0,p.useState)(!1),l=(0,a.Z)(v,2),d=l[0],h=l[1],m=(0,p.useState)(null),x=(0,a.Z)(m,2),_=x[0],w=x[1];return(0,p.useEffect)((function(){function t(){return(t=(0,n.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,h(!0),t.next=4,(0,o.Hg)();case 4:e=t.sent,s(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),w(t.t0);case 11:return t.prev=11,h(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),d?(0,f.jsx)(c.a,{}):_?(0,f.jsxs)("div",{children:[(0,f.jsxs)("b",{children:[":","("]}),"Something went wrong"," "]}):(0,f.jsx)(u.e,{movies:r})}},390:function(t,e,r){r.d(e,{Hg:function(){return u},TP:function(){return o},tx:function(){return f},zp:function(){return c},zv:function(){return p}});var n=r(861),a=r(757),s=r.n(a),i=r(294);i.Z.defaults.baseURL="https://api.themoviedb.org/",i.Z.defaults.params={api_key:"16a76550fab4a9d620c3cb364bb90d65"};var u=function(){var t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("3/trending/movie/day");case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("3/search/movie?query=".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("3/movie/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("3/movie/".concat(e,"/credits"));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("3/movie/".concat(e,"/reviews"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.c1f66268.chunk.js.map