(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{L6id:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),t=function(){return function(){}}(),i=u("pMnS"),b=u("oBZk"),e=u("ZZ/e"),r=u("Ip0R"),c=u("t/Na"),p=function(){function l(l){this.httpClient=l,this.API_KEY="e40d07f00b094602953cc3bf8537477e"}return l.prototype.getNews=function(){return this.httpClient.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey="+this.API_KEY)},l.ngInjectableDef=o.S({factory:function(){return new l(o.W(c.c))},token:l,providedIn:"root"}),l}(),a=function(){function l(l){this.apiService=l}return l.prototype.ionViewDidEnter=function(){var l=this;this.apiService.getNews().subscribe(function(n){console.log(n),l.articles=n.articles})},l}(),h=o.nb({encapsulation:0,styles:[["ion-card[_ngcontent-%COMP%]{--background:#021b46;--color:#fff}"]],data:{}});function s(l){return o.Eb(0,[(l()(),o.pb(0,0,null,null,1,"ion-spinner",[["name","dots"]],null,null,null,b.M,b.r)),o.ob(1,49152,null,0,e.ob,[o.h,o.k],{name:[0,"name"]},null)],function(l,n){l(n,1,0,"dots")},null)}function f(l){return o.Eb(0,[(l()(),o.pb(0,0,null,null,15,"ion-card",[],null,null,null,b.B,b.d)),o.ob(1,49152,null,0,e.j,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,1,"ion-img",[],null,null,null,b.F,b.k)),o.ob(3,49152,null,0,e.A,[o.h,o.k],{src:[0,"src"]},null),(l()(),o.pb(4,0,null,0,4,"ion-card-header",[],null,null,null,b.z,b.f)),o.ob(5,49152,null,0,e.l,[o.h,o.k],null,null),(l()(),o.pb(6,0,null,0,2,"ion-card-subtitle",[],null,null,null,b.A,b.g)),o.ob(7,49152,null,0,e.m,[o.h,o.k],null,null),(l()(),o.Db(8,0,["",""])),(l()(),o.pb(9,0,null,0,6,"ion-card-content",[],null,null,null,b.y,b.e)),o.ob(10,49152,null,0,e.k,[o.h,o.k],null,null),(l()(),o.pb(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Db(12,null,[" "," "])),(l()(),o.pb(13,0,null,0,2,"ion-button",[["fill","outline"],["ion-button",""],["large",""]],null,null,null,b.w,b.b)),o.ob(14,49152,null,0,e.h,[o.h,o.k],{fill:[0,"fill"],href:[1,"href"]},null),(l()(),o.Db(-1,0,["Read full article"]))],function(l,n){l(n,3,0,o.rb(1,"",n.context.$implicit.urlToImage,"")),l(n,14,0,"outline",o.rb(1,"",n.context.$implicit.url,""))},function(l,n){l(n,8,0,n.context.$implicit.title),l(n,12,0,n.context.$implicit.description)})}function d(l){return o.Eb(0,[(l()(),o.pb(0,0,null,null,10,"ion-header",[],null,null,null,b.D,b.i)),o.ob(1,49152,null,0,e.y,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,8,"ion-toolbar",[["color","primary"]],null,null,null,b.P,b.u)),o.ob(3,49152,null,0,e.yb,[o.h,o.k],{color:[0,"color"]},null),(l()(),o.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,b.x,b.c)),o.ob(5,49152,null,0,e.i,[o.h,o.k],null,null),(l()(),o.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,b.J,b.p)),o.ob(7,49152,null,0,e.O,[o.h,o.k],null,null),(l()(),o.pb(8,0,null,0,2,"ion-title",[],null,null,null,b.O,b.t)),o.ob(9,49152,null,0,e.wb,[o.h,o.k],null,null),(l()(),o.Db(-1,0,[" Home "])),(l()(),o.pb(11,0,null,null,16,"ion-content",[["color","primary"]],null,null,null,b.C,b.h)),o.ob(12,49152,null,0,e.r,[o.h,o.k],{color:[0,"color"]},null),(l()(),o.pb(13,0,null,0,12,"ion-card",[],null,null,null,b.B,b.d)),o.ob(14,49152,null,0,e.j,[o.h,o.k],null,null),(l()(),o.pb(15,0,null,0,4,"ion-card-header",[],null,null,null,b.z,b.f)),o.ob(16,49152,null,0,e.l,[o.h,o.k],null,null),(l()(),o.pb(17,0,null,0,2,"ion-card-subtitle",[],null,null,null,b.A,b.g)),o.ob(18,49152,null,0,e.m,[o.h,o.k],null,null),(l()(),o.Db(-1,0,["Welcome to our News App"])),(l()(),o.pb(20,0,null,0,5,"ion-card-content",[],null,null,null,b.y,b.e)),o.ob(21,49152,null,0,e.k,[o.h,o.k],null,null),(l()(),o.pb(22,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),o.Db(-1,null,[" Enjoy the latest news from TechCrunch. "])),(l()(),o.gb(16777216,null,0,1,null,s)),o.ob(25,16384,null,0,r.i,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,f)),o.ob(27,278528,null,0,r.h,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,12,0,"primary"),l(n,25,0,!u.articles),l(n,27,0,u.articles)},null)}function k(l){return o.Eb(0,[(l()(),o.pb(0,0,null,null,1,"app-home",[],null,null,null,d,h)),o.ob(1,49152,null,0,a,[p],null,null)],null,null)}var m=o.lb("app-home",a,k,{},{},[]),g=u("gIcY"),x=u("ZYCi");u.d(n,"HomePageModuleNgFactory",function(){return w});var w=o.mb(t,[],function(l){return o.wb([o.xb(512,o.j,o.bb,[[8,[i.a,m]],[3,o.j],o.x]),o.xb(4608,r.k,r.j,[o.u,[2,r.q]]),o.xb(4608,g.c,g.c,[]),o.xb(4608,e.a,e.a,[o.z,o.g]),o.xb(4608,e.Cb,e.Cb,[e.a,o.j,o.q]),o.xb(4608,e.Fb,e.Fb,[e.a,o.j,o.q]),o.xb(1073742336,r.b,r.b,[]),o.xb(1073742336,g.b,g.b,[]),o.xb(1073742336,g.a,g.a,[]),o.xb(1073742336,e.Ab,e.Ab,[]),o.xb(1073742336,x.o,x.o,[[2,x.u],[2,x.m]]),o.xb(1073742336,t,t,[]),o.xb(1024,x.k,function(){return[[{path:"",component:a}]]},[])])})}}]);