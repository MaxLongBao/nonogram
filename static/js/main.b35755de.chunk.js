(this.webpackJsonpnonogram=this.webpackJsonpnonogram||[]).push([[0],[,,,,,,,,,function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),s=t.n(c),a=t(4),o=t.n(a),r=(t(9),t(2)),u=(t(10),t(0)),i=function(e){var n=e.value,t=e.filled,s=e.handleMistakes,a=e.handleMouseDown,o=e.handleMouseUp,i=e.clicked,l=Object(c.useState)(null),d=Object(r.a)(l,2),j=d[0],f=d[1],b=Object(c.useState)(!1),h=Object(r.a)(b,2),O=h[0],v=h[1],m=function(){O||(!0===t?"o"===n?(f({backgroundColor:"blue"}),v(!0)):(o(),s()):"x"===n?(f({backgroundColor:"red"}),v(!0)):(o(),s()))};return Object(u.jsx)("div",{className:"cell",onMouseDown:function(){m(),a()},onMouseUp:o,onMouseEnter:function(){i&&m()},style:j})},l=(t(12),function(e){var n=e.matrix,t=e.rows,s=e.columns,a=e.filled,o=e.handleMistakes,l=Object(c.useState)(!1),d=Object(r.a)(l,2),j=d[0],f=d[1],b=function(){f(!0)},h=function(){f(!1)},O=n.map((function(e){var n=e.map((function(e){return Object(u.jsx)(i,{value:e,filled:a,handleMistakes:o,handleMouseDown:b,handleMouseUp:h,clicked:j})}));return Object(u.jsx)("div",{className:"row",children:n})}));console.log(j);var v=t.map((function(e){var n=e.map((function(e){return Object(u.jsx)("div",{className:"single-value-row",children:e})}));return Object(u.jsx)("div",{className:"row-data",children:n})})),m=s.map((function(e){var n=e.map((function(e){return Object(u.jsx)("div",{children:e})}));return Object(u.jsx)("div",{className:"column-data",children:n})}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"columns",children:m}),Object(u.jsxs)("div",{className:"grid",children:[Object(u.jsx)("div",{className:"rows",children:v}),Object(u.jsx)("div",{children:O})]})]})}),d=(t(13),function(e){var n,t,c=e.handleSwitch;return e.filled?(n={backgroundColor:"blue"},t={justifyContent:"flex-end"}):(n={backgroundColor:"red"},t={justifyContent:"flex-start"}),Object(u.jsx)("div",{className:"switch",style:t,onClick:c,children:Object(u.jsx)("div",{className:"toggle",children:Object(u.jsx)("div",{className:"square",style:n})})})});t(14);var j=function(){var e=Object(c.useState)(null),n=Object(r.a)(e,2),t=n[0],s=n[1],a=Object(c.useState)(!0),o=Object(r.a)(a,2),i=o[0],j=o[1],f=Object(c.useState)(0),b=Object(r.a)(f,2),h=b[0],O=b[1],v=Object(c.useState)(null),m=Object(r.a)(v,2),x=m[0],p=m[1],g=Object(c.useState)(null),M=Object(r.a)(g,2),k=M[0],w=M[1];return Object(c.useEffect)((function(){s(function(e){for(var n=["x","o"],t=[],c=0;c<e;c++){for(var s=[],a=0;a<e;a++){var o=n[Math.floor(Math.random()*n.length)];s.push(o)}t.push(s)}return t}(10))}),[]),Object(c.useEffect)((function(){p(function(e,n){if(e){for(var t=[],c=0;c<n;c++){for(var s=[],a=0,o=0;o<n;o++)"o"===e[c][o]?(a++,9===o&&(s.push(a),a=0)):"x"!==e[c][o]&&9!==o||a>0&&(s.push(a),a=0);t.push(s)}return t}}(t,10)),w(function(e,n){if(e){for(var t=[],c=0;c<n;c++){for(var s=[],a=0,o=0;o<n;o++)"o"===e[o][c]?(a++,9===o&&(s.push(a),a=0)):"x"!==e[o][c]&&9!==o||a>0&&(s.push(a),a=0);t.push(s)}return t}}(t,10))}),[t]),Object(u.jsxs)("div",{className:"App",children:[t&&x&&k?Object(u.jsx)(l,{matrix:t,rows:x,columns:k,filled:i,handleMistakes:function(){O(h+1)}}):null,Object(u.jsx)(d,{handleSwitch:function(){j(!0!==i)},filled:i}),Object(u.jsxs)("div",{children:["Mistakes = ",h]})]})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),c(e),s(e),a(e),o(e)}))};o.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),f()}],[[15,1,2]]]);
//# sourceMappingURL=main.b35755de.chunk.js.map