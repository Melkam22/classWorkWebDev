(window.webpackJsonpblog2react=window.webpackJsonpblog2react||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),l=n.n(r),o=n(1),i=n(2),s=n(4),u=n(3),m=n(5),d=(n(13),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={container:[],word:null},n.inputCalc=function(e){n.setState({word:e.target.value})},n.clickCalc=function(){if(""!==n.state.word){var e=n.state.container;e.push(n.state.word),n.setState({container:e,word:""})}},n.deleteIt=function(e){var t=n.state.container;t.splice(e,1),n.setState({container:t})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t={color:""};return""!==this.state.word&&(t.backgroundColor="rgba(93,58,87,.6)"),c.a.createElement("main",{className:"main container",style:t},c.a.createElement("h3",null,"Simple todo list."),c.a.createElement("label",null," ",c.a.createElement("input",{type:"text",placeholder:"put your todo's here!",value:this.state.word,onChange:this.inputCalc})),c.a.createElement("button",{className:"btn white-text bold",onClick:this.clickCalc},"Submit"),c.a.createElement("div",{className:"my-items center"},this.state.container.map(function(t,n){return c.a.createElement("div",{className:"myKey collection-item",key:n},c.a.createElement("li",null,t," ",c.a.createElement("button",{className:"btn collection",onClick:function(){return e.deleteIt(n)}},"X")," "))})))}}]),t}(a.Component)),b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"todo-title center"},c.a.createElement("h2",{className:"h2 center"},"Todos"),c.a.createElement(d,null))}}]),t}(a.Component);l.a.render(c.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.dbbecee5.chunk.js.map