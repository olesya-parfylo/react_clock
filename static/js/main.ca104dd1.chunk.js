(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(7),o=c.n(n),a=c(2),i=c(3),r=c(5),l=c(4),s=c(1),u=c.n(s),h=c(0),d=function(t){Object(r.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).timerId=void 0,t.state={date:new Date},t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){console.log(t.state.date),t.setState({date:new Date})}),1e3)}},{key:"componentDidUpdate",value:function(t){var e=t.clockName;console.log("The Clock was renamed from ".concat(e," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state.date,e=this.props.clockName;return Object(h.jsxs)(h.Fragment,{children:[t.toLocaleTimeString(),Object(h.jsx)("div",{children:e})]})}}]),c}(u.a.Component),b=(c(13),function(t){Object(r.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!0,clockName:Math.random()},t.changeShowClock=function(e){t.setState({isClockVisible:e})},t}return Object(i.a)(c,[{key:"render",value:function(){var t=this,e=this.state,c=e.isClockVisible,n=e.clockName;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"React clock"}),Object(h.jsxs)("p",{children:["Current time:"," ",c&&Object(h.jsx)(d,{clockName:n})]}),Object(h.jsx)("button",{type:"button",onClick:function(){t.changeShowClock(!0)},children:"Show Clock"}),Object(h.jsx)("button",{type:"button",onClick:function(){t.changeShowClock(!1)},children:"Hide Clock"}),Object(h.jsx)("button",{type:"button",onClick:function(){t.setState({clockName:Math.random()})},children:"Set random name"})]})}}]),c}(u.a.Component)),k=b;o.a.render(Object(h.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ca104dd1.chunk.js.map