(this.webpackJsonpnonogram=this.webpackJsonpnonogram||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(4),a=n.n(i),l=(n(9),n(2)),o=(n(10),n(0)),u=function(e){var t=e.handleDifficulty;return Object(o.jsxs)("div",{className:"difficulty-container",onClick:function(e){return t(e)},children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Choose the difficulty:"})}),Object(o.jsxs)("div",{className:"difficulty-select",children:[Object(o.jsx)("div",{className:"difficulty",children:"Easy"}),Object(o.jsx)("div",{className:"difficulty",children:"Medium"})]})]})},r=(n(12),function(e){var t=e.value,n=e.filled,s=e.lockCell,i=e.handleMistakes,a=e.handleMouseDown,u=e.handleMouseUp,r=e.clicked,d=Object(c.useState)(null),j=Object(l.a)(d,2),f=j[0],b=j[1],h=Object(c.useState)(!1),O=Object(l.a)(h,2),v=O[0],x=O[1],m=function(){v||(!0===n?"o"===t?(b({backgroundColor:"blue"}),x(!0),s()):(u(),i()):"x"===t?(b({backgroundColor:"red"}),x(!0)):(u(),i()))};return Object(o.jsx)("div",{className:"cell",onMouseDown:function(){m(),a()},onMouseUp:u,onMouseEnter:function(){r&&m()},style:f,children:t})}),d=(n(13),function(e){var t=e.matrix,n=e.rows,s=e.columns,i=e.filled,a=e.handleMistakes,u=e.callEndGame,d=Object(c.useState)(!1),j=Object(l.a)(d,2),f=j[0],b=j[1],h=Object(c.useState)(0),O=Object(l.a)(h,2),v=O[0],x=O[1],m=Object(c.useState)(null),p=Object(l.a)(m,2),g=p[0],k=p[1];Object(c.useEffect)((function(){!function(){var e=0;n.forEach((function(t){t.forEach((function(t){e+=t}))})),k(e)}()}),[n]),Object(c.useEffect)((function(){console.log(v),v===g&&u("win")}),[v]);var w=function(){b(!0)},M=function(){b(!1)},N=function(){x(v+1)},S=t.map((function(e){var t=e.map((function(e){return Object(o.jsx)(r,{value:e,filled:i,lockCell:N,handleMistakes:a,handleMouseDown:w,handleMouseUp:M,clicked:f})}));return Object(o.jsx)("div",{className:"row",children:t})})),y=n.map((function(e){var t=e.map((function(e){return Object(o.jsx)("div",{className:"single-value-row",children:e})}));return Object(o.jsx)("div",{className:"row-data",children:t})})),C=s.map((function(e){var t=e.map((function(e){return Object(o.jsx)("div",{children:e})}));return Object(o.jsx)("div",{className:"column-data",children:t})}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"columns",children:C}),Object(o.jsxs)("div",{className:"grid",children:[Object(o.jsx)("div",{className:"rows",children:y}),Object(o.jsx)("div",{children:S})]})]})}),j=(n(14),function(e){var t,n,c=e.handleSwitch;return e.filled?(t={backgroundColor:"blue"},n={justifyContent:"flex-end"}):(t={backgroundColor:"red"},n={justifyContent:"flex-start"}),Object(o.jsx)("div",{className:"switch",style:n,onClick:c,children:Object(o.jsx)("div",{className:"toggle",children:Object(o.jsx)("div",{className:"square",style:t})})})});n(15);var f=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(!0),a=Object(l.a)(i,2),r=a[0],f=a[1],b=Object(c.useState)(3),h=Object(l.a)(b,2),O=h[0],v=h[1],x=Object(c.useState)(null),m=Object(l.a)(x,2),p=m[0],g=m[1],k=Object(c.useState)(null),w=Object(l.a)(k,2),M=w[0],N=w[1],S=Object(c.useState)(null),y=Object(l.a)(S,2),C=y[0],E=y[1],D=Object(c.useState)(!1),F=Object(l.a)(D,2),T=F[0],U=F[1];Object(c.useEffect)((function(){s(function(e){for(var t=["x","o"],n=[],c=0;c<e;c++){for(var s=[],i=0;i<e;i++){var a=t[Math.floor(Math.random()*t.length)];s.push(a)}n.push(s)}return n}(C))}),[C]),Object(c.useEffect)((function(){g(function(e,t){if(e){for(var n=[],c=0;c<t;c++){for(var s=[],i=0,a=0;a<t;a++)"o"===e[c][a]?(i++,a===t-1&&(s.push(i),i=0)):"x"!==e[c][a]&&9!==a||i>0&&(s.push(i),i=0);n.push(s)}return n}}(n,C)),N(function(e,t){if(e){for(var n=[],c=0;c<t;c++){for(var s=[],i=0,a=0;a<t;a++)"o"===e[a][c]?(i++,a===t-1&&(s.push(i),i=0)):"x"!==e[a][c]&&9!==a||i>0&&(s.push(i),i=0);n.push(s)}return n}}(n,C))}),[n]),Object(c.useEffect)((function(){console.log(O),O<1&&B("lose")}),[O]);var B=function(e){"win"===e?console.log("win"):console.log("lose")};return Object(o.jsx)("div",{className:"App",children:n&&p&&M&&T?Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{matrix:n,rows:p,columns:M,filled:r,handleMistakes:function(){v(O-1)},callEndGame:B}),Object(o.jsx)(j,{handleSwitch:function(){f(!0!==r)},filled:r}),Object(o.jsxs)("div",{children:["Mistakes = ",O]})]}):Object(o.jsx)(u,{handleDifficulty:function(e){switch(e.target.innerText){case"Easy":E(5),U(!0);break;case"Medium":E(10),U(!0)}}})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),b()}],[[16,1,2]]]);
//# sourceMappingURL=main.1dd47393.chunk.js.map