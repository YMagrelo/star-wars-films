(this.webpackJsonpreact_article=this.webpackJsonpreact_article||[]).push([[0],{25:function(e,t,a){e.exports=a(40)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),s=a.n(r),i=a(7),l=a(9),o=(a(34),a(35),a(2)),m=(a(36),a(12)),u=a.n(m),p=a(18),f=a(13),d=function(e){return fetch("".concat("https://swapi.dev/api/","films/").concat(e)).then((function(e){return e.json()}))},E={films:[],filmDetails:null},_=Object(l.b)((function(e){return{films:e.films}}),(function(e){return{getFilms:function(){return e(function(){var e=Object(p.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://swapi.dev/api/","films/")).then((function(e){return e.json()}));case 2:a=e.sent,t({type:"GET_FILMS",payload:a.results});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.films,a=e.getFilms;return Object(n.useEffect)((function(){a()}),[]),c.a.createElement("div",{className:"episodes"},c.a.createElement("h1",{className:"episodes__heading"},"The list of the star wars episodes"),c.a.createElement("ul",{className:"episodes__list"},t.map((function(e){var t=e.url.slice(-2,-1);return c.a.createElement("li",{key:e.episode_id,className:"episodes__item"},c.a.createElement(i.b,{to:"/films/".concat(t)},e.title),t)}))))})),h=(a(39),Object(o.e)((function(e){var t=e.details,a=e.getFilmDetails,r=e.match.params.filmId;return Object(n.useEffect)((function(){a(r)}),[]),c.a.createElement("div",{className:"details"},c.a.createElement(i.b,{to:"/"},c.a.createElement("span",null,"Back to home page")),c.a.createElement("h1",{className:"details__heading"},"Episode details"),t&&c.a.createElement("div",{className:"details__details-content content"},c.a.createElement("h5",{className:"content__title"},"Title: ".concat(t.title)),c.a.createElement("p",{className:"content__item"},"Opening crawl: ".concat(t.opening_crawl)),c.a.createElement("p",{className:"content__item"},"Director: ".concat(t.director)),c.a.createElement("p",{className:"content__item"},"Producer: ".concat(t.producer)),c.a.createElement("p",{className:"content__item"},"Release date: ".concat(t.release_date)),c.a.createElement("ul",{className:"content__item"},"Characters:",t.characters.map((function(e){return c.a.createElement("li",{key:e},e)}))),c.a.createElement("ul",{className:"content__item"},"Planets:",t.planets.map((function(e){return c.a.createElement("li",{key:e},e)}))),c.a.createElement("ul",{className:"content__item"},"Starships:",t.starships.map((function(e){return c.a.createElement("li",{key:e},e)}))),c.a.createElement("ul",{className:"content__item"},"Vehicles:",t.vehicles.map((function(e){return c.a.createElement("li",{key:e},e)}))),c.a.createElement("ul",{className:"content__item"},"Species:",t.species.map((function(e){return c.a.createElement("li",{key:e},e)})))))}))),v=Object(l.b)((function(e){return{details:e.filmDetails}}),(function(e){return{getFilmDetails:function(t){return e(function(e){return function(){var t=Object(p.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:n=t.sent,a({type:"GET_FILM_DETAILS",payload:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(h),b=function(e){return c.a.createElement("div",{className:"app-wrapper"},c.a.createElement(o.a,{path:"/",component:_,exact:!0}),c.a.createElement(o.a,{path:"/films/:filmId",component:v}))},N=a(11),y=a(24),j=Object(N.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_FILMS":return Object(f.a)(Object(f.a)({},e),{},{films:t.payload});case"GET_FILM_DETAILS":return Object(f.a)(Object(f.a)({},e),{},{filmDetails:t.payload});default:return e}}),Object(N.a)(y.a));window.store=j,s.a.render(c.a.createElement(i.a,null,c.a.createElement(l.a,{store:j},c.a.createElement(b,null))),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.b6f958d2.chunk.js.map