(this.webpackJsonptvshow_search=this.webpackJsonptvshow_search||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(11),r=n.n(c),i=(n(18),n(2)),o=(n(19),n(4)),d=n.n(o),l=n(5),u=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)([]),r=Object(i.a)(c,2),o=r[0],u=r[1];return Object(s.useEffect)((function(){Object(l.a)(d.a.mark((function e(){var t,n,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.tvmaze.com/shows/143/cast");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,a(n),e.next=9,fetch("https://api.tvmaze.com/shows/143/episodes");case 9:return s=e.sent,e.next=12,s.json();case 12:c=e.sent,u(c);case 14:case"end":return e.stop()}}),e)})))()}),[]),{castData:n,episodeData:o}},j=(n(21),n(0)),b=function(e){var t=e.setIsCast,n=e.setIsEpisode;return Object(j.jsxs)("div",{className:"nav",children:[Object(j.jsx)("img",{src:"logo-pied-piper.png",className:"appLogo",alt:"logo"}),Object(j.jsx)("button",{id:"cast",className:"actBtn",onClick:function(){t(!0),n(!1),document.getElementById("cast").className="actBtn",document.getElementById("episodes").className="inactBtn"},children:"Cast"}),Object(j.jsx)("button",{id:"episodes",className:"inactBtn",onClick:function(){n(!0),t(!1),document.getElementById("episodes").className="actBtn",document.getElementById("cast").className="inactBtn"},children:"Episodes"})]})},h=(n(23),n(24),function(e){var t=e.data,n=e.isCast,s=e.isEpisode;if(n)var a="Female"===t.person.gender?"fa fa-female gender":"fa fa-male gender";return Object(j.jsxs)("div",{className:"cardsWrapper",children:[n&&Object(j.jsxs)("div",{className:"cards",children:[Object(j.jsxs)("div",{className:"blockImage",children:[Object(j.jsx)("img",{alt:"character_img",src:t.person.image.medium}),Object(j.jsx)("i",{className:a}),Object(j.jsx)("a",{className:"name",href:t.person.url,target:"_blank",children:Object(j.jsx)("p",{children:t.person.name})})]}),Object(j.jsx)("div",{className:"cardInfo",children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"Country: "}),t.person.country.name]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"Birthday: "}),t.person.birthday]}),Object(j.jsx)("a",{href:t.character.url,target:"_blank",children:Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"Character: "}),t.character.name]})})]})})]}),s&&Object(j.jsxs)("div",{className:"cards",children:[Object(j.jsxs)("div",{className:"blockImage",children:[Object(j.jsx)("img",{alt:"movie_img",src:t.image.medium}),Object(j.jsxs)("p",{className:"series",children:["S",t.season,"/E",t.number]}),Object(j.jsx)("a",{className:"name",href:t.url,target:"_blank",children:Object(j.jsx)("p",{children:t.name})})]}),Object(j.jsx)("div",{className:"cardInfo episode",children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{className:"summary",children:[Object(j.jsx)("b",{children:"Summary: "}),t.summary.replace("<p>","").replace("</p>","")]}),Object(j.jsx)("li",{}),Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"Airtime: "}),t.airtime]})]})})]})]})}),m=(n(25),function(e){var t=e.data,n=e.isCast,s=e.isEpisode;return Object(j.jsx)("div",{className:"cardContainer",children:t.map((function(e){return Object(j.jsx)(h,{data:e,isCast:n,isEpisode:s})}))})}),O=(n(26),function(e){var t=e.searchTerm,n=e.handleChange;return Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",placeholder:"\uf002 Search...",value:t,onChange:n})})}),f=(n(27),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(s.useRef)(void 0),r=Object(s.useRef)(void 0);return Object(s.useEffect)((function(){var e=function(e){var t=c.current&&c.current.contains(e.target),n=r.current&&r.current.contains(e.target);t||n||a(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[c,r]),{isOpen:n,setIsOpen:a,buttonRef:r,dropdownRef:c}}),p=function(e){var t=e.data,n=e.setFilter,s=e.filter,a=e.handleUpdate,c=f(),r=c.isOpen,i=c.setIsOpen,o=c.buttonRef,d=c.dropdownRef,l=function(e){return Array.from(new Set(e)).map((function(e){return Object(j.jsx)("option",{value:e,children:e},e)}))};return Object(j.jsxs)("div",{className:"filterWrapper",children:[Object(j.jsxs)("button",{className:"filterButton",ref:o,onClick:function(){return i(!r)},children:[Object(j.jsx)("i",{class:"fa fa-th"})," Filtering"]}),r&&Object(j.jsx)("div",{ref:d,className:"filterModal",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Country"}),Object(j.jsxs)("select",{value:s.country,onChange:function(e){return n({country:e.target.value})},children:[Object(j.jsx)("option",{value:"",children:" Select Country... "}),l(t.map((function(e){return e.person.country.name})))]}),Object(j.jsx)("h4",{children:"Gender"}),Object(j.jsxs)("select",{value:s.gender,onChange:function(e){return n({gender:e.target.value})},children:[Object(j.jsx)("option",{value:"",children:" Select Gender... "}),l(t.map((function(e){return e.person.gender})))]}),Object(j.jsx)("div",{className:"filterModalActions",children:Object(j.jsx)("button",{onClick:a,children:"Update"})})]})})]})},x=function(e){var t=f().setIsOpen,n=Object(s.useState)(""),a=Object(i.a)(n,2),c=a[0],r=a[1],o=Object(s.useState)({country:"",gender:"",alive:"",bday:""}),u=Object(i.a)(o,2),j=u[0],b=u[1],h=Object(s.useState)([]),m=Object(i.a)(h,2),O=m[0],p=m[1];return Object(s.useEffect)((function(){Object(l.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.filter((function(t){return c?t.character.name.toLowerCase().includes(c.toLowerCase())||t.person.name.toLowerCase().includes(c.toLowerCase()):j.country?t.person.country.name.toLowerCase().includes(j.country.toLowerCase()):j.gender?t.person.gender.toLowerCase().includes(j.gender.toLowerCase()):e}));case 2:n=t.sent,p(n);case 4:case"end":return t.stop()}}),t)})))()}),[e,j.country,j.gender,c]),{result:O,searchTerm:c,filter:j,setFilter:b,handleUpdate:function(e){t(!1),b({country:e.target.value,gender:e.target.value})},handleChange:function(e){r(e.target.value)},setIsOpen:t}},v=function(e){var t=e.data,n=e.isCast,s=e.isEpisode,a=x(t),c=a.result,r=a.searchTerm,i=a.filter,o=a.setFilter,d=a.handleUpdate,l=a.handleChange;return console.log("Casts: "+t),console.log("Current filter: "+i.country+"& "+i.gender),Object(j.jsxs)("div",{className:"castsContainer",children:[Object(j.jsxs)("div",{className:"searchFilter",children:[Object(j.jsx)(O,{searchTerm:r,handleChange:l}),Object(j.jsx)(p,{data:c,filter:i,setFilter:o,handleUpdate:d})]}),Object(j.jsx)(m,{data:c,isCast:n,isEpisode:s})]})},g=(n(28),function(e){var t=Object(s.useState)(""),n=Object(i.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)([]),o=Object(i.a)(r,2),u=o[0],j=o[1];return Object(s.useEffect)((function(){Object(l.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())||e.summary.toLowerCase().includes(a.toLowerCase())}));case 2:n=t.sent,j(n);case 4:case"end":return t.stop()}}),t)})))()}),[e,a]),{searchResults:u,searchTerm:a,handleChange:function(e){c(e.target.value)}}}),C=function(e){var t=e.data,n=e.isCast,s=e.isEpisode,a=g(t),c=a.searchResults,r=a.searchTerm,i=a.handleChange;return Object(j.jsxs)("div",{className:"castsContainer",children:[Object(j.jsx)(O,{searchTerm:r,handleChange:i}),Object(j.jsx)(m,{data:c,isCast:n,isEpisode:s})]})},w=n(13),N=function(){var e=u(),t=e.castData,n=e.episodeData,a=Object(s.useState)(!0),c=Object(i.a)(a,2),r=c[0],o=c[1],d=Object(s.useState)(!1),l=Object(i.a)(d,2),h=l[0],m=l[1];return console.log(t),console.log(n),Object(j.jsx)(w.a,{basename:"/",children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{setIsCast:o,setIsEpisode:m}),r&&Object(j.jsx)(v,{data:t,isCast:r,isEpisode:h}),h&&Object(j.jsx)(C,{data:n,isCast:r,isEpisode:h})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),y()}},[[37,1,2]]]);
//# sourceMappingURL=main.5fbe6913.chunk.js.map