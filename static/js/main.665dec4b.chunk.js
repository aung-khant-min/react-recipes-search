(this["webpackJsonpreact-recipes-search"]=this["webpackJsonpreact-recipes-search"]||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),o=(a(23),a(2)),s=a(3),l=a(6),u=a(5),h=a(4),m=a.n(h),d=a(17),p=(a(41),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={ingredients:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://api.spoonacular.com/recipes/"+this.props.recipeId+"/ingredientWidget.json?apiKey=ee29f98d846b48e4b9a3a3e544121bef").then((function(t){e.setState({ingredients:t.data.ingredients})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("details",null,r.a.createElement("summary",null,"Ingredients"),r.a.createElement("ul",null,this.state.ingredients.map((function(e){return r.a.createElement("li",{key:e.name},e.name," ",e.amount.metric.value," ",e.amount.metric.unit)}))))}}]),a}(r.a.Component)),f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={instructions:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;m.a.get("https://api.spoonacular.com/recipes/"+this.props.recipeId+"/analyzedInstructions?apiKey=ee29f98d846b48e4b9a3a3e544121bef").then((function(t){e.setState({instructions:t.data[0].steps})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("details",null,r.a.createElement("summary",null,"Instructions"),r.a.createElement("ul",null,this.state.instructions.map((function(e){return r.a.createElement("li",{key:e.number},e.step)}))))}}]),a}(r.a.Component),b=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({searchWord:e.target.value})},n.handleEnter=function(e){13===e.keyCode&&n.handleSearch(n.state.searchWord)},n.handleSearch=function(e){e?m.a.get("https://api.spoonacular.com/recipes/search?query="+e+"&apiKey=ee29f98d846b48e4b9a3a3e544121bef").then((function(e){n.setState({recipe:e.data.results})})).catch((function(e){return console.log(e)})):n.setState({recipe:[]})},n.state={searchWord:"",recipe:[]},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("a",{href:"https://spoonacular.com/food-api"},"spoonacular recipe and food API")," ",r.a.createElement("br",null),"Try search a recipe (e.g. burger,cocktail)"),r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"text",className:"searchTerm",placeholder:"Search a recipe",onChange:this.handleChange,onKeyUp:this.handleEnter,autoFocus:!0}),r.a.createElement("button",{className:"searchButton",onClick:function(){return e.handleSearch(e.state.searchWord)}},r.a.createElement("i",{className:"fa fa-search"}))),this.state.recipe?this.state.recipe.map((function(e){return r.a.createElement("div",{className:"card",key:e.id},r.a.createElement(d.LazyLoadImage,{src:" https://spoonacular.com/recipeImages/"+e.id+"-480x360",effect:"blur"}),r.a.createElement("div",{className:"container"},r.a.createElement("h4",null,e.title),r.a.createElement(p,{recipeId:e.id}),r.a.createElement(f,{recipeId:e.id})))})):"")}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.665dec4b.chunk.js.map