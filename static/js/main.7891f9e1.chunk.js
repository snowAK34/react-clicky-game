(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,c){e.exports=c(21)},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(0),r=c.n(a),n=c(2),i=c.n(n),o=(c(14),c(15),c(3)),l=c(4),s=c(6),u=c(5),m=c(7);c(16);var d=function(e){return r.a.createElement("nav",{className:"navbar fixed-top"},r.a.createElement("p",null,"Score: ",e.score," | Top Score: ",e.score),r.a.createElement("button",{onClick:e.reset},"Reset Game"))};c(17);var g=function(){return r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",null,"Clicky Game!"),r.a.createElement("h3",null,"Click and image to earn points, but don't click any image more than once!"))};c(18);var p=function(e){return r.a.createElement("div",{className:"card",onClick:e.onClick},r.a.createElement("img",{src:e.image,alt:"gamepiece"}))};c(19);var f=function(e){return r.a.createElement("div",{id:"card-set"},e.cards.map(function(t,c){return r.a.createElement(p,{image:t.url,onClick:function(){return e.clickImage(t.id,t.clicked)}})}))},h=(c(20),function(e){function t(){var e,c;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(c=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={score:0,topScore:0,cards:[]},c.clickImage=function(e,t){if(!1===t){for(var a=c.state.cards,r=0;r<a.length;r++)console.log("id: ",a[r].id,"param: ",e),a[r].id===e&&(a[r].clicked=!0);c.setState({cards:a,score:c.state.score+1}),c.state.score>c.state.topscore&&c.setState({topScore:c.state.score}),12===c.state.score&&(alert("You won!"),c.resetGame()),c.shuffleImages(c.state.cards.slice(0))}else c.gameOver()},c.shuffleImages=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),r=[e[a],e[t]];e[t]=r[0],e[a]=r[1]}c.setState({cards:e})},c.gameOver=function(){alert("you lose"),c.resetGame()},c.resetGame=function(){for(var e=c.state.cards,t=0;t<e.length;t++)e[t].clicked=!1;c.setState({score:0,cards:e})},c}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({cards:[{id:1,url:"https://i.imgur.com/u2DDdRX.jpg",clicked:!1},{id:2,url:"https://i.imgur.com/6I7UcfA.jpg",clicked:!1},{id:3,url:"https://i.imgur.com/ITuiIAD.jpg",clicked:!1},{id:4,url:"https://i.imgur.com/aO0kVkQ.jpg",clicked:!1},{id:5,url:"https://i.imgur.com/4VD2pmy.jpg",clicked:!1},{id:6,url:"https://i.imgur.com/iVeEHY9.jpg",clicked:!1},{id:7,url:"https://i.imgur.com/kFycEJD.jpg",clicked:!1},{id:8,url:"https://i.imgur.com/YFyTXlz.jpg",clicked:!1},{id:9,url:"https://i.imgur.com/1MkWFVf.jpg",clicked:!1},{id:10,url:"https://i.imgur.com/n8T7R09.jpg",clicked:!1},{id:11,url:"https://i.imgur.com/gGEcwSs.jpg",clicked:!1},{id:12,url:"https://i.imgur.com/tWQBDQA.jpg",clicked:!1}]})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,{score:this.state.score,topScore:this.state.topScore,reset:this.resetGame}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(g,null),r.a.createElement(f,{cards:this.state.cards,clickImage:this.clickImage})))}}]),t}(a.Component));var k=function(){return r.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.7891f9e1.chunk.js.map