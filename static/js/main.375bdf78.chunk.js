(this["webpackJsonpherolo-assignment-v2"]=this["webpackJsonpherolo-assignment-v2"]||[]).push([[0],{16:function(e,t,n){"use strict";var a=n(45),r=n.n(a).a.create({baseURL:"https://dataservice.accuweather.com/"});t.a=r},22:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){return"./icons/"+e+"-s.png"}},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"n",(function(){return c})),n.d(t,"o",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"r",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return m})),n.d(t,"p",(function(){return f})),n.d(t,"k",(function(){return d})),n.d(t,"m",(function(){return y})),n.d(t,"l",(function(){return v})),n.d(t,"q",(function(){return p})),n.d(t,"h",(function(){return E})),n.d(t,"i",(function(){return h})),n.d(t,"j",(function(){return b})),n.d(t,"c",(function(){return _}));var a="CHANGE_TEMP",r="CHANGE_THEME",c="FETCH_SEARCH",i="FETCH_SEARCH_SUCCESS",u="CLEAR_SEARCH_RESULTS",o="UPDATE_SELECTED_CITY",s="FETCH_CITY_DATA",l="FETCH_CITY_DATA_START",m="FETCH_CITY_DATA_SUCCESS",f="GET_GEO_LOCATION",d="FETCH_GEO_LOCATION",y="FETCH_GEO_LOCATION_SUCCESS",v="FETCH_GEO_LOCATION_FAIL",p="SET_FAVORITES",E="FETCH_FAVORITES",h="FETCH_FAVORITES_START",b="FETCH_FAVORITES_SUCCESS",_="CLEAR_FETCHED_FAVORITES"},41:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(7),i=n(6);t.a=function(e){var t=Object(c.c)((function(e){return e.favorites})).favorites,n=Object(c.b)(),a="#e31b23",u={backgroundColor:"#777",height:e.height,width:e.width},o=function(e,t){return t.some((function(t){return t.cityKey===e}))};o(e.cityKey,t)&&(u.backgroundColor=a);var s=function(e,a){o(e,t)?function(e,t){n(i.r(e,t))}(e,t):function(e,t,a){n(i.a(e,t,a))}(e,a,t)};return r.a.createElement("div",{className:"favoriteHeart",style:u,onClick:function(){return s(e.cityKey,e.cityName)}})}},42:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(48),i=n.n(c);t.a=function(){return r.a.createElement("img",{className:"spinner",src:i.a,alt:"Loading..."})}},43:function(e,t,n){"use strict";var a=n(20),r=n(0),c=n.n(r),i=function(e){return e.show?c.a.createElement("div",{className:"backdrop",onClick:e.clicked}):null},u=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i,{show:e.show,clicked:e.clicked}),c.a.createElement("div",{className:"modal",style:{transform:e.show?"translate(-50% , 0) ":"translate(-50% , -100vh)",opacity:e.show?"1":"0"}},e.children))};t.a=function(e,t){return function(n){var i=function(e){var t=Object(r.useState)(null),n=Object(a.a)(t,2),c=n[0],i=n[1],u=e.interceptors.request.use((function(e){return i(null),e})),o=e.interceptors.response.use((function(e){return e}),(function(e){i(e)}));Object(r.useEffect)((function(){return function(){e.interceptors.request.eject(u),e.interceptors.response.eject(o)}}),[e.interceptors.request,e.interceptors.response,u,o]);return[c,function(){i(null)}]}(t),o=Object(a.a)(i,2),s=o[0],l=o[1],m=null;return s&&(m=c.a.createElement("div",{className:"errorHandler"},c.a.createElement("p",{className:"errorHandler__title"},"Error occurred"),c.a.createElement("p",{className:"errorHandler__message"},s.message,", please try again in few minutes"))),c.a.createElement(c.a.Fragment,null,c.a.createElement(u,{show:s,clicked:l},m),c.a.createElement(e,Object.assign({error:s},n)))}}},48:function(e,t,n){e.exports=n.p+"static/media/sunLoading.3d7f5242.png"},50:function(e,t,n){e.exports=n.p+"static/media/celsius.802510af.svg"},51:function(e,t,n){e.exports=n.p+"static/media/fahrenheit.0a3403d1.svg"},53:function(e,t,n){e.exports=n(82)},6:function(e,t,n){"use strict";var a=n(3),r=function(){return{type:a.a}},c=function(e){return{type:a.o,searchResults:e}},i=function(e){return{type:a.n,value:e}},u=function(){return{type:a.d}},o=function(e,t){return{type:a.r,cityName:e,cityKey:t}},s=function(e){return{type:a.e,cityKey:e}},l=function(){return{type:a.f}},m=function(e,t){return{type:a.g,currentWeatherData:e,forecastData:t}},f=function(){return{type:a.p}},d=function(e){return{type:a.k,coords:e}},y=function(e,t){return{type:a.m,cityName:e,cityKey:t}},v=function(){return{type:a.l}},p=function(){var e=[],t=localStorage.getItem("userFav");return null!==t&&(e=JSON.parse(t)),{type:a.q,newFavorites:e}},E=function(e,t){var n=t.filter((function(t){return e!==t.cityKey}));return localStorage.setItem("userFav",JSON.stringify(n)),{type:a.q,newFavorites:n}},h=function(e,t,n){var r=n.concat({cityKey:e,cityName:t});return localStorage.setItem("userFav",JSON.stringify(r)),{type:a.q,newFavorites:r}},b=function(e){return{type:a.h,cityList:e}},_=function(){return{type:a.i}},g=function(e){return{type:a.j,citysData:e}},O=function(){return{type:a.c}};n.d(t,"b",(function(){return r})),n.d(t,"n",(function(){return i})),n.d(t,"o",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"s",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return m})),n.d(t,"p",(function(){return f})),n.d(t,"k",(function(){return d})),n.d(t,"m",(function(){return y})),n.d(t,"l",(function(){return v})),n.d(t,"q",(function(){return p})),n.d(t,"r",(function(){return E})),n.d(t,"a",(function(){return h})),n.d(t,"h",(function(){return b})),n.d(t,"i",(function(){return _})),n.d(t,"j",(function(){return g})),n.d(t,"c",(function(){return O}))},80:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),i=n.n(c),u=n(7),o=n(18),s=n(9),l=n.n(s),m=n(8),f=n(3),d=n(20),y=n(6),v=n(16),p="VxkuCnywGLMJ0fGsm2MlaKr1tlW4VgDe",E="https://dataservice.accuweather.com/",h=function(e){return E+"locations/v1/cities/autocomplete?apikey="+p+"&q="+e},b=function(e){return E+"currentconditions/v1/"+e+"?apikey="+p},_=function(e,t){return E+"locations/v1/cities/geoposition/search?apikey="+p+"&q="+e+"%2C"+t},g=function(e){return E+"forecasts/v1/daily/5day/"+e+"?apikey="+p+"&metric=true"},O=l.a.mark(F),C=l.a.mark(k),N=l.a.mark(w),j=l.a.mark(x);function F(e){var t,n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h(e.value);case 2:return t=a.sent,a.prev=3,a.next=6,v.a.get(t);case 6:return n=a.sent,a.next=9,Object(m.c)(y.o(n.data));case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(3),console.error(a.t0);case 14:case 15:case"end":return a.stop()}}),O,null,[[3,11]])}function k(e){var t,n,a,r,c,i;return l.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,b(e.cityKey);case 2:return t=u.sent,u.next=5,g(e.cityKey);case 5:return n=u.sent,u.next=8,Object(m.c)(y.f());case 8:return u.prev=8,u.next=11,Object(m.a)([Object(m.b)(v.a.get,t),Object(m.b)(v.a.get,n)]);case 11:return a=u.sent,r=Object(d.a)(a,2),c=r[0],i=r[1],u.next=17,Object(m.c)(y.g(c.data,i.data));case 17:u.next=22;break;case 19:u.prev=19,u.t0=u.catch(8),console.error(u.t0);case 22:case 23:case"end":return u.stop()}}),C,null,[[8,19]])}var T=function(){return new Promise((function(e){navigator.geolocation.getCurrentPosition((function(t){return e(t)}),(function(t){return e(t)}))}))};function w(e){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.b)(T);case 2:if(!(t=e.sent).coords){e.next=8;break}return e.next=6,Object(m.c)(y.k(t.coords));case 6:e.next=12;break;case 8:return e.next=10,Object(m.c)(y.s("Tel-Aviv","215854"));case 10:return e.next=12,Object(m.c)(y.l());case 12:case 13:case"end":return e.stop()}}),N)}function x(e){var t,n,a,r,c,i,u,o;return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.coords,n=t.latitude,a=t.longitude,s.next=3,_(n,a);case 3:return r=s.sent,s.prev=4,s.next=7,v.a.get(r);case 7:return c=s.sent,i=c.data,u=i.EnglishName,o=i.Key,s.next=11,Object(m.c)(y.m(u,o));case 11:s.next=19;break;case 13:return s.prev=13,s.t0=s.catch(4),s.next=17,Object(m.c)(y.s("Tel-Aviv","215854"));case 17:return s.next=19,Object(m.c)(y.l());case 19:case 20:case"end":return s.stop()}}),j,null,[[4,13]])}var S=l.a.mark(H),A=l.a.mark(D);function H(e){var t,n,a,r;return l.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(m.c)(y.i());case 2:return t=[],c.next=5,e.cityList.map((function(e){return D(e)}));case 5:return n=c.sent,c.next=8,Object(m.a)(n);case 8:for(t=c.sent,a=!1,r=0;r<t.length;r++)"undefined"===typeof t[r]&&(a=!0);if(a){c.next=15;break}return c.next=15,Object(m.c)(y.j(t));case 15:case 16:case"end":return c.stop()}}),S)}function D(e){var t,n,a;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=b(e),r.prev=1,r.next=4,v.a.get(t);case 4:return n=r.sent,a={cityKey:e,data:n.data},r.abrupt("return",a);case 9:r.prev=9,r.t0=r.catch(1),console.error("Error fetching Favorite: "+e);case 12:case 13:case"end":return r.stop()}}),A,null,[[1,9]])}var L=l.a.mark(I),K=l.a.mark(R);function I(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)([Object(m.e)(f.n,F),Object(m.e)(f.e,k),Object(m.d)(f.p,w),Object(m.d)(f.k,x)]);case 2:case"end":return e.stop()}}),L)}function R(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)([Object(m.e)(f.h,H)]);case 2:case"end":return e.stop()}}),K)}var W=n(19),P=n(52),q=n(46),V=n(47);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var G=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){Object(V.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t)},U={selectedCityKey:null,selectedCityName:null,searchResults:[],fetchCityDataLoading:!0,currentWeather:null,forecasts:null,geoLocationArrived:!1},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.o:return G(e,{searchResults:t.searchResults});case f.d:return G(e,{searchResults:[]});case f.r:return G(e,{selectedCityKey:t.cityKey,selectedCityName:t.cityName});case f.f:return G(e,{fetchCityDataLoading:!0});case f.g:return G(e,{currentWeather:t.currentWeatherData,forecasts:t.forecastData,fetchCityDataLoading:!1});case f.m:return G(e,{selectedCityKey:t.cityKey,selectedCityName:t.cityName,geoLocationArrived:!0});case f.l:return G(e,{geoLocationArrived:!0});default:return e}},B={favorites:[],fetchedFavorites:[],fetchFavoritesLoading:!0},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.q:return G(e,{favorites:t.newFavorites});case f.i:return G(e,{fetchFavoritesLoading:!0});case f.j:return G(e,{fetchedFavorites:t.citysData,fetchFavoritesLoading:!1});case f.c:return G(e,{fetchedFavorites:[],fetchFavoritesLoading:!0});default:return e}},z={metric:!0,darkTheme:!1},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.a:return G(e,{metric:!e.metric});case f.b:return G(e,{darkTheme:!e.darkTheme});default:return e}},Q=(n(80),n(21)),X=function(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),c=n[0],i=n[1],o=Object(u.c)((function(e){return e.home})).selectedCityKey,s=Object(u.b)(),l=Object(a.useCallback)((function(e){return s(y.n(e))}),[s]),m=Object(a.useCallback)((function(){return s(y.d())}),[s]);Object(a.useEffect)((function(){if(" "!==c&&0!==c.length){var e=setTimeout((function(){l(c)}),300);return function(){clearTimeout(e)}}}),[c,l]),Object(a.useEffect)((function(){i("")}),[o]);return r.a.createElement("input",{className:"searchCity__input",placeholder:"Search city",type:"text",onChange:function(e){i(e.target.value),0===e.target.value.length&&m()},onKeyPress:function(e){(function(e){var t=e.charCode;return t>=60&&t<=90||(t>=97&&t<=122||32===t)})(e)||e.preventDefault()},value:c})},Z=function(){var e=Object(u.c)((function(e){return e.home})).selectedCityKey,t=Object(u.c)((function(e){return e.home})).searchResults,n=Object(u.b)(),a=function(t,a){t!==e&&(!function(e,t){n(y.s(e,t))}(t,a),n(y.d()))},c=t.map((function(e){var t=e.LocalizedName,n=e.Key;return r.a.createElement("li",{className:"searchCity__item",onClick:function(){return a(t,n)},key:n},t)}));return r.a.createElement("ul",{className:"searchCity__results"},c)},ee=function(){return r.a.createElement("div",{className:"searchCity"},r.a.createElement("div",{className:"searchCity-wrapper"},r.a.createElement(X,null),r.a.createElement(Z,null)))},te=n(41),ne=n(22),ae=function(e){return r.a.createElement("header",{className:"cityHeader"},r.a.createElement("div",{className:"cityHeader__details"},r.a.createElement("p",{className:"cityHeader__details-title"},e.cCityName),r.a.createElement("div",{className:"cityHeader__details-container"},r.a.createElement("img",{className:"cityHeader__icon",src:Object(ne.a)(e.cWeatherIcon),alt:"dsd"}),r.a.createElement("div",{className:"cityHeader__details-subContainer"},r.a.createElement("p",{className:"cityHeader__details-temp"},e.cWeatherTemp,"\xb0"),r.a.createElement("div",{className:"cityHeader__details-text"},r.a.createElement("em",null,e.cWeatherText))))),r.a.createElement(te.a,{cityKey:e.cCityKey,cityName:e.cCityName,height:"7rem",width:"7rem"}))},re=function(e){return(1.8*e+32).toFixed(0)},ce=r.a.memo((function(e){var t=e.dailyForecast,n=t.Temperature,a=t.Day,c=t.Night,i=e.dailyForecast.Date,o=Object(ne.a)(a.Icon),s=Object(ne.a)(c.Icon),l=Math.round(n.Maximum.Value),m=Math.round(n.Minimum.Value),f=new Date(i).getDay(),d=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][f];return Object(u.c)((function(e){return e.userSettings})).metric||(l=re(l),m=re(m)),r.a.createElement("div",{className:"cityForecast__day"},r.a.createElement("p",{className:"cityForecast__day-title"},d),r.a.createElement("div",{className:"cityForecast__day-container"},r.a.createElement("div",{className:"cityForecast__details"},r.a.createElement("p",{className:"cityForecast__details-title"},"Day:"),r.a.createElement("p",{className:"cityForecast__details-temp"},l,"\xb0"),r.a.createElement("img",{className:"cityForecast__icon",src:o,alt:"dsd"})),r.a.createElement("div",{className:"cityForecast__details"},r.a.createElement("p",{className:"cityForecast__details-title"},"Night:"),r.a.createElement("p",{className:"cityForecast__details-temp"},m,"\xb0"),r.a.createElement("img",{className:"cityForecast__details-icon",src:s,alt:"dsd"}))))})),ie=r.a.memo((function(){var e=Object(u.c)((function(e){return e.home})).forecasts,t=null;if(e){var n=e.Headline,a=e.DailyForecasts;t=r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"cityForecast__title"},r.a.createElement("em",null,n.Text)),r.a.createElement("div",{className:"cityForecast__forecasts"},a.map((function(e){return r.a.createElement(ce,{key:e.EpochDate,dailyForecast:e})}))))}return r.a.createElement("div",{className:"cityForecast"},t)})),ue=n(42),oe=function(){var e=Object(u.c)((function(e){return e.home})),t=e.selectedCityKey,n=e.selectedCityName,c=e.fetchCityDataLoading,i=Object(u.c)((function(e){return e.home.currentWeather})),o=Object(u.c)((function(e){return e.userSettings})).metric,s=Object(u.b)(),l=Object(a.useCallback)((function(e){return s(y.e(e))}),[s]);Object(a.useEffect)((function(){t&&l(t)}),[l,t]);var m=r.a.createElement(ue.a,null);if(!c){var f=i[0],d=f.WeatherText,v=f.WeatherIcon,p=f.Temperature,E=p.Metric.Value;o||(E=p.Imperial.Value),m=r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,{cWeatherText:d,cWeatherIcon:v,cWeatherTemp:E,cCityName:n,cCityKey:t}),r.a.createElement(ie,null))}return r.a.createElement("div",{className:"currentCity"},r.a.createElement("div",{className:"currentCity__box"},m))},se=n(43),le=Object(se.a)((function(e){return r.a.createElement("div",{className:"home"},r.a.createElement(ee,null),r.a.createElement(oe,null))}),v.a),me=function(){return r.a.createElement("ul",{className:"navigation__links"},r.a.createElement("li",{className:"navigation__item"},r.a.createElement(W.c,{to:"/",exact:!0,className:"navigation__link",activeClassName:"navigation__item--active"},"Home")),r.a.createElement("li",{className:"navigation__item"},r.a.createElement(W.c,{to:"/favorites",className:"navigation__link",activeClassName:"navigation__item--active"},"Favorites")))},fe=function(){return r.a.createElement(W.b,{className:"navigation__logo",to:"/"},r.a.createElement("h1",null,"Herolo Weather"))},de=n(50),ye=n.n(de),ve=n(51),pe=n.n(ve),Ee=function(e){var t=Object(u.b)(),n=Object(u.c)((function(e){return e.userSettings.metric})),a=ye.a;return n||(a=pe.a),r.a.createElement("div",{className:"tempCheckBox",onClick:function(){t(y.b())}},r.a.createElement("p",{className:"tempCheckBox__title"},"Temperature"),r.a.createElement("img",{className:"tempCheckBox__img",src:a,alt:"Temp Selector"}))},he=function(e){return r.a.createElement("div",{className:"navigation"},r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,null),r.a.createElement(me,null),r.a.createElement("div",{className:"navigation__settings"},r.a.createElement(Ee,null))))},be=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",{className:"footer__title"},"Developed by Yaron Sultan - 2019"),r.a.createElement("div",{className:"footer__media"},r.a.createElement("a",{className:"footer__icon footer__icon--linkedin",href:"https://www.linkedin.com/in/yaron-sultan-b52bb9164/"},"\xa0"),r.a.createElement("a",{className:"footer__icon footer__icon--github",href:"https://github.com/Sultanyaron"},"\xa0")))},_e=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(he,null),e.children,r.a.createElement(be,null))},ge=r.a.lazy((function(){return n.e(3).then(n.bind(null,83))})),Oe=function(e){var t=Object(u.b)(),n=Object(a.useCallback)((function(){return t(y.q())}),[t]),c=Object(a.useCallback)((function(){return t(y.p())}),[t]);Object(a.useEffect)((function(){n()}),[n]),Object(a.useEffect)((function(){c()}),[c]);var i=r.a.createElement(Q.d,null,r.a.createElement(Q.b,{path:"/favorites",component:ge}),r.a.createElement(Q.b,{path:"/",component:le}),r.a.createElement(Q.a,{to:"/"}));return r.a.createElement("div",{className:"App"},r.a.createElement(_e,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement("p",null,"Loading...")},r.a.createElement("main",{className:"mainContainer"},i))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=o.d,Ne=Object(o.c)({home:J,favorites:Y,userSettings:$}),je=Object(P.a)(),Fe=Object(o.e)(Ne,Ce(Object(o.a)(q.a,je)));je.run(I),je.run(R);var ke=r.a.createElement(u.a,{store:Fe},r.a.createElement(W.a,{basename:"/Weather-App-v2"},r.a.createElement(Oe,null)));i.a.render(ke,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[53,1,2]]]);
//# sourceMappingURL=main.375bdf78.chunk.js.map