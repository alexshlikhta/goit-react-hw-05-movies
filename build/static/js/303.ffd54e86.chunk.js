"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[303,583],{6214:function(e,t,n){n.d(t,{Fb:function(){return d},TP:function(){return p},dC:function(){return v},tx:function(){return j},zv:function(){return x}});var a=n(5861),r=n(7757),i=n.n(r),s=n(4569),c=n.n(s);c().defaults.baseURL="https://api.themoviedb.org/3/";var o="c3dfb97c4e42ba6803ce4a8859444b9b",u="trending/all/day",l="search/movie",_="movie";function d(){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("".concat(u,"?api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("".concat(l,"?api_key=").concat(o,"&page=1&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("".concat(_,"/").concat(t,"?api_key=").concat(o));case 2:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return b.apply(this,arguments)}function b(){return(b=(0,a.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("".concat(_,"/").concat(t,"/credits?api_key=").concat(o));case 2:return n=e.sent,console.log(n.data.cast),e.abrupt("return",n.data.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("".concat(_,"/").concat(t,"/reviews?api_key=").concat(o));case 2:return n=e.sent,console.log(n.data.results),e.abrupt("return",n.data.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},5303:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var a=n(2791),r=n(501),i=n(6871),s=n(885),c=n(6214);var o=n(1583),u=n(184);function l(){var e=function(){var e=(0,i.UO)().movieId,t=(0,a.useState)(null),n=(0,s.Z)(t,2),r=n[0],o=n[1];return(0,a.useEffect)((function(){c.TP(e).then(o)}),[e]),r}(),t=(0,i.s0)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("main",{className:o.default.movie,children:[(0,u.jsx)("span",{className:o.default.movie_back,onClick:function(){return t(-1)},children:"\u2190 Go back"}),e&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:o.default.movie_box,children:[(0,u.jsx)("div",{className:o.default.movie_box_pic,children:(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(e.backdrop_path),alt:""})}),(0,u.jsxs)("div",{className:o.default.movie_box_desc,children:[(0,u.jsx)("h1",{children:e.title?e.title:e.original_name}),(0,u.jsxs)("span",{className:o.default.movie_box_desc__title,children:[(0,u.jsx)("b",{children:"User Score:"})," ",e.vote_average]}),(0,u.jsxs)("span",{className:o.default.movie_box_desc__title,children:[(0,u.jsx)("b",{children:"Total votes:"})," ",e.vote_count]}),(0,u.jsxs)("span",{className:o.default.movie_box_desc__title,children:[(0,u.jsx)("b",{children:"Overview:"})," ",e.overview]}),(0,u.jsxs)("span",{className:o.default.movie_box_desc__title,children:[(0,u.jsx)("b",{children:"Genres:"})," ",(0,u.jsx)("ul",{children:e.genres.map((function(e,t){return(0,u.jsx)("li",{children:e.name},t)}))})]})]})]}),(0,u.jsx)("span",{className:o.default.movie_box_desc__title,children:"Additional Information"}),(0,u.jsxs)("ul",{className:o.default.movie_add,children:[(0,u.jsx)("li",{className:o.default.movie_add_item,children:(0,u.jsx)(r.OL,{to:"cast",children:"Cast"})}),(0,u.jsx)("li",{className:o.default.movie_add_item,children:(0,u.jsx)(r.OL,{to:"reviews",children:"Reviews"})})]}),(0,u.jsx)(i.j3,{})]}),!e&&(0,u.jsx)("h1",{className:o.default.movie_error,children:"Something went srong..."})]})})}},1583:function(e,t,n){n.r(t),t.default={movie_back:"movieDetails_movie_back__3cPEe",movie_box:"movieDetails_movie_box__JfEAB",movie_box_pic:"movieDetails_movie_box_pic__3VUyK",movie_box_desc:"movieDetails_movie_box_desc__MUyZO",movie_box_desc__title:"movieDetails_movie_box_desc__title__fY89v",movie_add:"movieDetails_movie_add__eT+Rm",movie_add_item:"movieDetails_movie_add_item__EZOPC",movie_error:"movieDetails_movie_error__+f4s9"}}}]);
//# sourceMappingURL=303.ffd54e86.chunk.js.map