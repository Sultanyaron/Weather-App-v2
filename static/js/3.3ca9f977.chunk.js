(this["webpackJsonpherolo-assignment-v2"]=this["webpackJsonpherolo-assignment-v2"]||[]).push([[3],{83:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),i=a(7),n=a(20),s=a(23),o=a(44),l=a(6),m=Object(n.g)((function(e){var t=e.cityData.data[0],a=t.WeatherIcon,c=t.Temperature,n=t.WeatherText,m=Object(i.c)((function(e){return e.userSettings})).metric,u=Object(s.a)(a),f=Object(i.b)(),v=Math.round(c.Metric.Value);m||(v=c.Imperial.Value);return r.a.createElement("div",{className:"favorites__item"},r.a.createElement(o.a,{cityKey:e.cityKey,cityName:e.cityName,height:"4rem",width:"4rem"}),r.a.createElement("p",{className:"favorites__title",onClick:function(){f(l.v(e.cityName,e.cityKey)),e.history.push("/")}},e.cityName),r.a.createElement("div",{className:"favorites__details"},r.a.createElement("img",{className:"favorites__icon",src:u,alt:n}),r.a.createElement("div",{className:"favorites__container"},r.a.createElement("p",{className:"favorites__temp"},v,"\xb0"),r.a.createElement("p",{className:"favorites__text"},n))))})),u=a(42),f=a(43),v=a(16);t.default=Object(f.a)((function(e){e.error;for(var t=Object(i.c)((function(e){return e.favorites})).fetchFavoritesLoading,a=Object(i.c)((function(e){return e.favorites})),n=a.favorites,s=a.fetchedFavorites,o=[],f=0;f<n.length;f++)o.push(n[f].cityKey);var v=Object(i.b)(),y=Object(c.useCallback)((function(e){return v(l.h(e))}),[v]),h=Object(c.useCallback)((function(){return v(l.c())}),[v]);Object(c.useEffect)((function(){y(o)}),[y]),Object(c.useEffect)((function(){return function(){h()}}),[h]);var b=r.a.createElement(u.a,null);return t||e.error||(b=n.map((function(e){var t=s.filter((function(t){return e.cityKey===t.cityKey}))[0];return r.a.createElement(m,{key:e.cityKey,cityData:t,cityName:e.cityName,cityKey:e.cityKey})}))),0===n.length&&(b=r.a.createElement("h1",{className:"favorites__empty"},"Your favorites is empty",r.a.createElement("br",null),"Add them at Homepage")),r.a.createElement("div",{className:"favorites"},r.a.createElement("div",{className:"favorites__list"},b))}),v.a)}}]);
//# sourceMappingURL=3.3ca9f977.chunk.js.map