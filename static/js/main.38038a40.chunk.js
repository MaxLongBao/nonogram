(this.webpackJsonpnonogram=this.webpackJsonpnonogram||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),i=c.n(a),l=(c(9),c(2)),u=(c(10),c(0)),r=function(e){var t=e.handleDifficulty;return Object(u.jsxs)("div",{className:"difficulty-container",onClick:function(e){return t(e)},children:[Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:"Choose the difficulty:"})}),Object(u.jsxs)("div",{className:"difficulty-select",children:[Object(u.jsx)("div",{className:"difficulty",children:"Easy"}),Object(u.jsx)("div",{className:"difficulty",children:"Medium"})]})]})},o=(c(12),function(e){var t=e.value,c=e.filled,s=e.lockCell,a=e.handleMistakes,i=e.handleMouseDown,r=e.handleMouseUp,o=e.clicked,j=Object(n.useState)(null),d=Object(l.a)(j,2),f=d[0],b=d[1],O=Object(n.useState)(!1),h=Object(l.a)(O,2),v=h[0],x=h[1],m=function(){v||(!0===c?"o"===t?(b({backgroundColor:"blue"}),x(!0),s()):(r(),a()):"x"===t?(b({backgroundColor:"red"}),x(!0)):(r(),a()))};return Object(u.jsx)("div",{className:"cell",onMouseDown:function(){m(),i()},onMouseUp:r,onMouseEnter:function(){o&&m()},style:f,children:t})}),j=(c(13),function(e){var t=e.matrix,c=e.rows,s=e.columns,a=e.filled,i=e.difficulty,r=e.handleMistakes,j=e.callEndGame,d=Object(n.useState)(!1),f=Object(l.a)(d,2),b=f[0],O=f[1],h=Object(n.useState)(0),v=Object(l.a)(h,2),x=v[0],m=v[1],p=Object(n.useState)(null),w=Object(l.a)(p,2),k=w[0],S=w[1],g=Object(n.useState)(null),N=Object(l.a)(g,2),y=N[0],M=N[1];Object(n.useEffect)((function(){!function(){var e=0;c.forEach((function(t){t.forEach((function(t){e+=t}))})),S(e)}()}),[c]),Object(n.useEffect)((function(){x===k&&j("win")}),[x]),Object(n.useEffect)((function(){switch(i){case 5:M({width:"150px"});break;case 10:M({width:"300px"})}}),[i]);var C=function(){O(!0)},E=function(){O(!1)},D=function(){m(x+1)},R=t.map((function(e){var t=e.map((function(e){return Object(u.jsx)(o,{value:e,filled:a,lockCell:D,handleMistakes:r,handleMouseDown:C,handleMouseUp:E,clicked:b})}));return Object(u.jsx)("div",{className:"row",children:t})})),F=c.map((function(e){var t=e.map((function(e){return Object(u.jsx)("div",{className:"single-value-row",children:e})}));return Object(u.jsx)("div",{className:"row-data",children:t})})),G=s.map((function(e){var t=e.map((function(e){return Object(u.jsx)("div",{children:e})}));return Object(u.jsx)("div",{className:"column-data",children:t})}));return Object(u.jsxs)("div",{className:"game-area",style:y,children:[Object(u.jsx)("div",{className:"columns",children:G}),Object(u.jsxs)("div",{className:"grid",children:[Object(u.jsx)("div",{className:"rows",children:F}),Object(u.jsx)("div",{children:R})]})]})}),d=(c(14),function(e){var t,c,n=e.handleSwitch;return e.filled?(t={backgroundColor:"blue"},c={justifyContent:"flex-end"}):(t={backgroundColor:"red"},c={justifyContent:"flex-start"}),Object(u.jsx)("div",{className:"switch",style:c,onClick:n,children:Object(u.jsx)("div",{className:"toggle",children:Object(u.jsx)("div",{className:"square",style:t})})})}),f=function(e){var t=e.handleRestart;return Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:t,children:"Restart"})})},b=function(e){var t=e.outcome;return Object(u.jsx)("div",{children:Object(u.jsxs)("h2",{children:["You ",t]})})};c(15);var O=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!0),i=Object(l.a)(a,2),o=i[0],O=i[1],h=Object(n.useState)(3),v=Object(l.a)(h,2),x=v[0],m=v[1],p=Object(n.useState)(null),w=Object(l.a)(p,2),k=w[0],S=w[1],g=Object(n.useState)(null),N=Object(l.a)(g,2),y=N[0],M=N[1],C=Object(n.useState)(null),E=Object(l.a)(C,2),D=E[0],R=E[1],F=Object(n.useState)(!1),G=Object(l.a)(F,2),T=G[0],U=G[1],A=Object(n.useState)(null),B=Object(l.a)(A,2),I=B[0],J=B[1],L=Object(n.useState)(!1),P=Object(l.a)(L,2),q=P[0],Y=P[1],z=Object(n.useState)(0),H=Object(l.a)(z,2),K=H[0],Q=H[1];Object(n.useEffect)((function(){s(function(e){for(var t=["x","o"],c=[],n=0;n<e;n++){for(var s=[],a=0;a<e;a++){var i=t[Math.floor(Math.random()*t.length)];s.push(i)}c.push(s)}return c}(D))}),[D]),Object(n.useEffect)((function(){S(function(e,t){if(e){for(var c=[],n=0;n<t;n++){for(var s=[],a=0,i=0;i<t;i++)"o"===e[n][i]?(a++,i===t-1&&(s.push(a),a=0)):"x"!==e[n][i]&&9!==i||a>0&&(s.push(a),a=0);c.push(s)}return c}}(c,D)),M(function(e,t){if(e){for(var c=[],n=0;n<t;n++){for(var s=[],a=0,i=0;i<t;i++)"o"===e[i][n]?(a++,i===t-1&&(s.push(a),a=0)):"x"!==e[i][n]&&9!==i||a>0&&(s.push(a),a=0);c.push(s)}return c}}(c,D)),m(3),J(null)}),[c]),Object(n.useEffect)((function(){x<1&&V("lose")}),[x]),Object(n.useEffect)((function(){s(null),S(null),M(null),U(!1),R(null),Y(!1),J(null)}),[K]);var V=function(e){Y(!0),J("win"===e?"won!":"lost!")},W=function(){Q(K+1)};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"NONOGRAM"}),q?Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{outcome:I}),Object(u.jsx)(f,{handleRestart:W})]}):c&&k&&y&&T?Object(u.jsxs)("div",{children:[Object(u.jsx)(j,{matrix:c,rows:k,columns:y,filled:o,difficulty:D,handleMistakes:function(){m(x-1)},callEndGame:V}),Object(u.jsx)(d,{handleSwitch:function(){O(!0!==o)},filled:o}),Object(u.jsxs)("div",{children:["Mistakes = ",x]}),Object(u.jsx)(f,{handleRestart:W})]}):Object(u.jsx)(r,{handleDifficulty:function(e){switch(e.target.innerText){case"Easy":R(5),U(!0);break;case"Medium":R(10),U(!0)}}})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),h()}],[[16,1,2]]]);
//# sourceMappingURL=main.38038a40.chunk.js.map