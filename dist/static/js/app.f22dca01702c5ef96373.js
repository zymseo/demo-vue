webpackJsonp([1],{GYOZ:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("IvJb"),r={props:{message:{type:String,required:!0},content:{type:[Object,Array],required:!0},test:{type:String,default:function(){return""}}},data:function(){return{name:"Hello"}}},s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"hello-container"})},staticRenderFns:[]},i={data:function(){return{isShowTest:!0,message:"hello world",content:{},formData:{},test:"test"}},components:{Hello:n("C7Lr")(r,s,!1,null,null,null).exports},mounted:function(){console.log(this.$parent)},methods:{switchHello:function(){var t=this;this.isShowTest=!1,this.$nextTick(function(){t.test=void 0})}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("hello",{attrs:{message:t.message,content:t.content,test:t.test}}),t._v(" "),n("hello",{attrs:{message:t.message,content:t.content}}),t._v(" "),n("button",{on:{click:t.switchHello}},[t._v("切换hello组件")])],1)},staticRenderFns:[]};var c=n("C7Lr")(i,a,!1,function(t){n("GYOZ")},null,null).exports;n("A5Uk");o.a.config.productionTip=!1;new o.a({el:"#app",data:function(){return{name:"Root"}},render:function(t){return t(c)}})}},["NHnr"]);
//# sourceMappingURL=app.f22dca01702c5ef96373.js.map