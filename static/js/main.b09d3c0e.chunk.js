(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[5],{11:function(e,t,a){e.exports={navLink:"Navigation_navLink__2GBUT",activeNavLink:"Navigation_activeNavLink__2Jl3b"}},18:function(e,t,a){e.exports={Container:"Container_Container__3BstT"}},25:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(17),n=a.n(s),i=a(16),o=a(7),j=(a(25),a(9)),r=a(2),l=a(18),b=a.n(l),d=a(1),v=function(e){var t=e.children;return Object(d.jsx)("div",{className:b.a.Container,children:t})},p=a(11),O=a.n(p),u=function(){return Object(d.jsxs)("nav",{children:[Object(d.jsx)(j.c,{to:"/",exact:!0,className:O.a.navLink,activeClassName:O.a.activeNavLink,children:"Homepage"}),Object(d.jsx)(j.c,{to:"/Movies",className:O.a.navLink,activeClassName:O.a.activeNavLink,children:"Movies"}),Object(d.jsx)("hr",{})]})},h=Object(c.lazy)((function(){return a.e(1).then(a.bind(null,37))})),x=Object(c.lazy)((function(){return a.e(3).then(a.bind(null,39))})),m=Object(c.lazy)((function(){return a.e(2).then(a.bind(null,41))})),f=Object(c.lazy)((function(){return a.e(0).then(a.bind(null,38))})),y=Object(c.lazy)((function(){return a.e(4).then(a.bind(null,40))})),L={popMovies:[],movieList:[],status:"idle",movieDetails:null,cast:[],reviews:[]};function k(e,t){switch(t.type){case"setStatus":return Object(o.a)(Object(o.a)({},e),{},{status:t.payload});case"setPopMovies":return Object(o.a)(Object(o.a)({},e),{},{popMovies:t.payload});case"setMovieList":return Object(o.a)(Object(o.a)({},e),{},{movieList:t.payload});case"setMovieDetails":return Object(o.a)(Object(o.a)({},e),{},{movieDetails:t.payload});case"setCast":return Object(o.a)(Object(o.a)({},e),{},{cast:t.payload});case"setReviews":return Object(o.a)(Object(o.a)({},e),{},{reviews:t.payload});default:console.log("unexpected action type ".concat(t.type))}}var M=function(){var e=Object(c.useReducer)(k,L),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(d.jsx)(j.a,{children:Object(d.jsxs)(v,{children:[Object(d.jsx)(u,{}),Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)("p",{children:"Loading..."}),children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/",exact:!0,children:Object(d.jsx)(h,{popMovies:a.popMovies,dispatch:s})}),Object(d.jsx)(r.a,{path:"/movies",exact:!0,children:Object(d.jsx)(x,{state:a,dispatch:s})}),Object(d.jsx)(r.a,{path:"/movies/:movieId",exact:!0,children:Object(d.jsx)(m,{state:a,dispatch:s})}),Object(d.jsxs)(r.a,{path:"/movies/:movieId/Cast",exact:!0,children:[Object(d.jsx)(m,{state:a,dispatch:s}),Object(d.jsx)(f,{state:a,dispatch:s})]}),Object(d.jsxs)(r.a,{path:"/movies/:movieId/Reviews",children:[Object(d.jsx)(m,{state:a,dispatch:s}),Object(d.jsx)(y,{state:a,dispatch:s})]}),Object(d.jsx)(r.a,{children:Object(d.jsx)(h,{popMovies:a.popMovies,dispatch:s})})]})})]})})};a(32);n.a.render(Object(d.jsx)(M,{}),document.getElementById("root"))}},[[33,6,7]]]);
//# sourceMappingURL=main.b09d3c0e.chunk.js.map