(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{423:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},426:function(e,t,n){"use strict";var r=n(5),o=n(427).trim;r({target:"String",proto:!0,forced:n(428)("trim")},{trim:function(){return o(this)}})},427:function(e,t,n){var r=n(24),o="["+n(423)+"]",c=RegExp("^"+o+o+"*"),d=RegExp(o+o+"*$"),l=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(c,"")),2&e&&(n=n.replace(d,"")),n}};e.exports={start:l(1),end:l(2),trim:l(3)}},428:function(e,t,n){var r=n(7),o=n(423);e.exports=function(e){return r((function(){return!!o[e]()||"​᠎"!="​᠎"[e]()||o[e].name!==e}))}},444:function(e,t,n){"use strict";n.r(t);var r=n(93),o=n(10),c=(n(220),n(11),n(44),n(426),n(140),n(58),n(138)),d=n(139),l=n(429),v={components:{Page:c.Page},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return");case 2:return t.abrupt("return",Object(l.getAsyncDataAsync)(e));case 3:case"end":return t.stop()}}),t)})))()},data:function(){return{csrfToken:void 0,viewModel:void 0,brandPageTitle:void 0,pageDescription:void 0,pageKeywords:void 0,url:void 0,previewUrl:void 0,context:void 0}},head:function(){var e,t,n=this,meta=Object(r.a)(d.CommonMeta),o=null!==(e=this.pageDescription)&&void 0!==e?e:"This site for ".concat(this.brandPageTitle," was created on BrandCrowd. Create yours today. Try for free."),c=null===(t=this.viewModel.pages.find((function(p,i){return 0!==i&&p.slug===n.context.currentPageSlug})))||void 0===t?void 0:t.title,title=c?"".concat(this.brandPageTitle," - ").concat(c):this.brandPageTitle;meta.push({name:"og:description",content:o}),meta.push({name:"description",content:o});var l=this.pageKeywords?this.pageKeywords.join(", ").trim():void 0;l&&meta.push({name:"keywords",content:l}),meta.push({name:"og:type",content:"website"}),meta.push({name:"og:title",content:title}),meta.push({name:"og:image",content:this.previewUrl}),meta.push({name:"og:url",content:this.url}),meta.push({name:"csrf-token",content:this.csrfToken});var link=[{hid:"canonical",rel:"canonical",href:this.url.toLowerCase()}];this.viewModel.faviconUrl&&link.push({hid:"favicon",rel:"icon",type:"image/png, image/x-icon",href:this.viewModel.faviconUrl});var script=[];return this.viewModel.measurementID&&script.push({src:"https://www.googletagmanager.com/gtag/js?id=".concat(this.viewModel.measurementID),async:!0,type:"text/javascript"}),{title:title,meta:meta,link:link,script:script}},created:function(){var e=this.context.customDomain?this.$nuxt.context.route.params.slug:this.$nuxt.context.route.params.pageSlug;this.context.currentPageSlug=null!=e?e:this.viewModel.pages[0].slug},mounted:function(){var e=document.createElement("script");e.innerHTML="\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n      gtag('js', new Date());\n      gtag('config', '".concat(this.viewModel.measurementID,"');\n    "),document.body.appendChild(e)}},h=n(46),component=Object(h.a)(v,(function(){var e=this,t=e._self._c;return t("div",[e.viewModel?t("Page",{attrs:{context:e.context,"view-model":e.viewModel}}):t("div",[t("span",[e._v("Loading ...")])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);