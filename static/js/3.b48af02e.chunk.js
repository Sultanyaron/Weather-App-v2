(this["webpackJsonpherolo-assignment-v2"]=this["webpackJsonpherolo-assignment-v2"]||[]).push([[3],{83:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),i=a(7),n=a(21),s=a(23),o=a(44),l=a(6),m=r.a.memo((function(e){var t=e.cityData.data[0],a=t.WeatherIcon,c=t.Temperature,n=t.WeatherText,m=Object(i.c)((function(e){return e.userSettings})).metric,u=Object(s.a)(a),f=Object(i.b)(),v=Math.round(c.Metric.Value);m||(v=c.Imperial.Value);return r.a.createElement("div",{className:"favorites__item"},r.a.createElement(o.a,{cityKey:e.cityKey,cityName:e.cityName,height:"4rem",width:"4rem"}),r.a.createElement("p",{className:"favorites__title",onClick:function(){f(l.s(e.cityName,e.cityKey)),e.history.push("/")}},e.cityName),r.a.createElement("div",{className:"favorites__details"},r.a.createElement("img",{className:"favorites__icon",src:u,alt:n}),r.a.createElement("div",{className:"favorites__container"},r.a.createElement("p",{className:"favorites__temp"},v,"\xb0"),r.a.createElement("p",{className:"favorites__text"},n))))})),u=Object(n.g)(m),f=a(42),v=a(43),y=a(16);t.default=Object(v.a)((function(){for(var e=Object(i.c)((function(e){return e.favorites})).fetchFavoritesLoading,t=Object(i.c)((function(e){return e.favorites})),a=t.favorites,n=t.fetchedFavorites,s=[],o=0;o<a.length;o++)s.push(a[o].cityKey);var m=Object(i.b)(),v=Object(c.useCallback)((function(e){return m(l.h(e))}),[m]),y=Object(c.useCallback)((function(){return m(l.c())}),[m]);console.log("Favorites Render"),Object(c.useEffect)((function(){v(s)}),[v]),Object(c.useEffect)((function(){return function(){y()}}),[y]);var h=r.a.createElement(f.a,null);return e||(h=a.map((function(e){var t=n.filter((function(t){return e.cityKey===t.cityKey}))[0];return r.a.createElement(u,{key:e.cityKey,cityData:t,cityName:e.cityName,cityKey:e.cityKey})}))),0===a.length&&(h=r.a.createElement("h1",{className:"favorites__empty"},"Your favorites is empty",r.a.createElement("br",null),"Add them at Homepage")),r.a.createElement("div",{className:"favorites"},r.a.createElement("div",{className:"favorites__list"},h))}),y.a)}}]);
//# sourceMappingURL=3.b48af02e.chunk.js.map