(this.webpackJsonptvshow_search=this.webpackJsonptvshow_search||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(6),r=n.n(c),i=(n(11),n(2)),o=(n(12),n(3)),d=n.n(o),l=n(4),u=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)([]),r=Object(i.a)(c,2),o=r[0],u=r[1];return Object(s.useEffect)((function(){Object(l.a)(d.a.mark((function e(){var t,n,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.tvmaze.com/shows/143/cast");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,a(n),e.next=9,fetch("https://api.tvmaze.com/shows/143/episodes");case 9:return s=e.sent,e.next=12,s.json();case 12:c=e.sent,u(c);case 14:case"end":return e.stop()}}),e)})))()}),[]),{castData:n,episodeData:o}},j=(n(14),n.p+"static/media/logo-pied-piper.85544334.png"),b=n(0),h=function(e){var t=e.setIsCast,n=e.setIsEpisode;return Object(b.jsxs)("div",{className:"nav",children:[Object(b.jsx)("img",{src:j,className:"appLogo",alt:"logo"}),Object(b.jsx)("button",{id:"cast",className:"actBtn",onClick:function(){t(!0),n(!1),document.getElementById("cast").className="actBtn",document.getElementById("episodes").className="inactBtn"},children:"Cast"}),Object(b.jsx)("button",{id:"episodes",className:"inactBtn",onClick:function(){n(!0),t(!1),document.getElementById("episodes").className="actBtn",document.getElementById("cast").className="inactBtn"},children:"Episodes"})]})},m=(n(16),n(17),function(e){var t=e.data,n=e.isCast,s=e.isEpisode;if(n)var a="Female"===t.person.gender?"fa fa-female gender":"fa fa-male gender";return Object(b.jsxs)("div",{className:"cardsWrapper",children:[n&&Object(b.jsxs)("div",{className:"cards",children:[Object(b.jsxs)("div",{className:"blockImage",children:[Object(b.jsx)("img",{alt:"character_img",src:t.person.image.medium}),Object(b.jsx)("i",{className:a}),Object(b.jsx)("a",{className:"name",href:t.person.url,target:"_blank",rel:"noreferrer",children:Object(b.jsx)("p",{children:t.person.name})})]}),Object(b.jsx)("div",{className:"cardInfo",children:Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("b",{children:"Country: "}),t.person.country.name]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("b",{children:"Birthday: "}),t.person.birthday]}),Object(b.jsx)("a",{href:t.character.url,target:"_blank",rel:"noreferrer",children:Object(b.jsxs)("li",{children:[Object(b.jsx)("b",{children:"Character: "}),t.character.name]})})]})})]}),s&&Object(b.jsxs)("div",{className:"cards",children:[Object(b.jsxs)("div",{className:"blockImage",children:[Object(b.jsx)("img",{alt:"movie_img",src:t.image.medium}),Object(b.jsxs)("p",{className:"series",children:["S",t.season,"/E",t.number]}),Object(b.jsx)("a",{className:"name",href:t.url,target:"_blank",rel:"noreferrer",children:Object(b.jsx)("p",{children:t.name})})]}),Object(b.jsx)("div",{className:"cardInfo episode",children:Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{className:"summary",children:[Object(b.jsx)("b",{children:"Summary: "}),t.summary.replace("<p>","").replace("</p>","")]}),Object(b.jsx)("li",{}),Object(b.jsxs)("li",{children:[Object(b.jsx)("b",{children:"Airtime: "}),t.airtime]})]})})]})]})}),f=(n(18),function(e){var t=e.data,n=e.isCast,s=e.isEpisode;return Object(b.jsx)("div",{className:"cardContainer",children:t.map((function(e){return Object(b.jsx)(m,{data:e,isCast:n,isEpisode:s})}))})}),O=(n(19),function(e){var t=e.searchTerm,n=e.handleChange;return Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"text",placeholder:"\uf002 Search...",value:t,onChange:n})})}),p=(n(20),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(s.useRef)(void 0),r=Object(s.useRef)(void 0);return Object(s.useEffect)((function(){var e=function(e){var t=c.current&&c.current.contains(e.target),n=r.current&&r.current.contains(e.target);t||n||a(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[c,r]),{isOpen:n,setIsOpen:a,buttonRef:r,dropdownRef:c}}),x=function(e){var t=e.data,n=e.setFilter,s=e.filter,a=e.handleUpdate,c=p(),r=c.isOpen,i=c.setIsOpen,o=c.buttonRef,d=c.dropdownRef,l=function(e){return Array.from(new Set(e)).map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))};return Object(b.jsxs)("div",{className:"filterWrapper",children:[Object(b.jsxs)("button",{className:"filterButton",ref:o,onClick:function(){return i(!r)},children:[Object(b.jsx)("i",{class:"fa fa-th"})," Filter"]}),r&&Object(b.jsxs)("div",{ref:d,className:"filterModal",children:[Object(b.jsx)("h4",{children:"Country"}),Object(b.jsxs)("select",{value:s.country,onChange:function(e){return n({country:e.target.value})},children:[Object(b.jsx)("option",{value:"",children:" Select Country... "}),l(t.map((function(e){return e.person.country.name})))]}),Object(b.jsx)("h4",{children:"Gender"}),Object(b.jsxs)("select",{value:s.gender,onChange:function(e){return n({gender:e.target.value})},children:[Object(b.jsx)("option",{value:"",children:" Select Gender... "}),l(t.map((function(e){return e.person.gender})))]}),Object(b.jsx)("div",{className:"filterModalActions",children:Object(b.jsx)("button",{onClick:a,children:"Update"})})]})]})},v=function(e){var t=p().setIsOpen,n=Object(s.useState)(""),a=Object(i.a)(n,2),c=a[0],r=a[1],o=Object(s.useState)({country:"",gender:"",alive:"",bday:""}),u=Object(i.a)(o,2),j=u[0],b=u[1],h=Object(s.useState)([]),m=Object(i.a)(h,2),f=m[0],O=m[1];return Object(s.useEffect)((function(){Object(l.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.filter((function(t){return c?t.character.name.toLowerCase().includes(c.toLowerCase())||t.person.name.toLowerCase().includes(c.toLowerCase()):j.country?t.person.country.name.toLowerCase().includes(j.country.toLowerCase()):j.gender?t.person.gender.toLowerCase().includes(j.gender.toLowerCase()):e}));case 2:n=t.sent,O(n);case 4:case"end":return t.stop()}}),t)})))()}),[e,j.country,j.gender,c]),{result:f,searchTerm:c,filter:j,setFilter:b,handleUpdate:function(e){t(!1),b({country:e.target.value,gender:e.target.value})},handleChange:function(e){r(e.target.value)},setIsOpen:t}},g=function(e){var t=e.data,n=e.isCast,s=e.isEpisode,a=v(t),c=a.result,r=a.searchTerm,i=a.filter,o=a.setFilter,d=a.handleUpdate,l=a.handleChange;return console.log("Current filter: "+i.country+"& "+i.gender),Object(b.jsxs)("div",{className:"castsContainer",children:[Object(b.jsxs)("div",{className:"searchFilter",children:[Object(b.jsx)(O,{searchTerm:r,handleChange:l}),Object(b.jsx)(x,{data:c,filter:i,setFilter:o,handleUpdate:d})]}),Object(b.jsx)(f,{data:c,isCast:n,isEpisode:s})]})},C=(n(21),function(e){var t=Object(s.useState)(""),n=Object(i.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)([]),o=Object(i.a)(r,2),u=o[0],j=o[1];return Object(s.useEffect)((function(){Object(l.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())||e.summary.toLowerCase().includes(a.toLowerCase())}));case 2:n=t.sent,j(n);case 4:case"end":return t.stop()}}),t)})))()}),[e,a]),{searchResults:u,searchTerm:a,handleChange:function(e){c(e.target.value)}}}),N=function(e){var t=e.data,n=e.isCast,s=e.isEpisode,a=C(t),c=a.searchResults,r=a.searchTerm,i=a.handleChange;return Object(b.jsxs)("div",{className:"episodeContainer",children:[Object(b.jsx)("div",{className:"search",children:Object(b.jsx)(O,{searchTerm:r,handleChange:i})}),Object(b.jsx)(f,{data:c,isCast:n,isEpisode:s})]})},w=function(){var e=u(),t=e.castData,n=e.episodeData,a=Object(s.useState)(!0),c=Object(i.a)(a,2),r=c[0],o=c[1],d=Object(s.useState)(!1),l=Object(i.a)(d,2),j=l[0],m=l[1];return console.log(t),console.log(n),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{setIsCast:o,setIsEpisode:m}),r&&Object(b.jsx)(g,{data:t,isCast:r,isEpisode:j}),j&&Object(b.jsx)(N,{data:n,isCast:r,isEpisode:j})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root")),y()}],[[22,1,2]]]);
//# sourceMappingURL=main.2bf24358.chunk.js.map