(window.webpackJsonp=window.webpackJsonp||[]).push([[9,6,7],{501:function(t,e,n){var content=n(507);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("fcced636",content,!0,{sourceMap:!1})},503:function(t,e,n){"use strict";n.r(e);var r=n(143);n(4),n(46),n(54),n(505),n(301),n(13),n(11),n(14),n(16),n(12),n(17);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={name:"Module",props:["role","username","liveClassProxy","scrapedModule"],data:function(){return{}},computed:{iframeOrigin:function(){return new URL(this.scrapedModule.url).origin}},watch:{liveClassProxy:function(){this.updateIframe()},"$store.state.lastRecievedMessage":function(t){null!=t&&this.$refs.iframe.contentWindow.postMessage(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({event:"message"},t),this.iframeOrigin)}},methods:{updateIframe:function(){console.log(this.$store.state.class_),this.$refs.iframe.contentWindow.postMessage({event:"update",origin:window.origin,role:this.role,username:this.username,liveClass:JSON.parse(JSON.stringify(this.liveClassProxy)),module:this.scrapedModule,class_id:this.$store.state.class_.id},this.iframeOrigin)}}},d=l,c=n(107),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%",width:"100%"}},[n("iframe",{ref:"iframe",staticStyle:{height:"100%",width:"100%"},attrs:{src:t.scrapedModule.url.startsWith("data:")?null:t.scrapedModule.url,srcdoc:t.scrapedModule.url.startsWith("data:")?t.scrapedModule.url:null,allow:"camera; microphone; fullscreen; display-capture;",scrolling:"",frameborder:"0"},on:{load:t.updateIframe}})])}),[],!1,null,"6dfcdffe",null);e.default=component.exports},504:function(t,e,n){"use strict";n.r(e);var r=n(85),o=(n(218),n(98),n(14),n(4),n(37),n(55),n(32),{name:"Modules",props:["role","username","liveClassProxy"],data:function(){return{}},computed:{roomName:function(){return this.liveClassProxy.users[this.$store.state.user.email].room},modules_type:function(){return this.roomName.startsWith("Station ")?"station":"chat"},scrapedModules:function(){var t=this;return this.$store.state.scrapedModules.filter((function(e){return e.shownIn.includes(t.modules_type)||"*"==e.shownIn}))}},created:function(){window.addEventListener("message",this.messageHandler)},beforeDestroy:function(){window.removeEventListener("message",this.messageHandler)},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{messageHandler:function(t){switch(t.data.event){case"message":this.sendMessage(t.data.subject,t.data.body,t.data.module);break;case"update":this.setToValue(this.liveClassProxy,t.data.path,t.data.value);break;case"echo":console.log("ECHO:",t.data)}},sendMessage:function(t,body,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.$axios.$get("/data/sendMessage/".concat(n.$store.state.class_.id,"?message=").concat(encodeURIComponent(JSON.stringify({from:n.username,subject:t,body:body,module:e}))));case 2:case"end":return r.stop()}}),r)})))()}}}),l=(n(506),n(107)),d=n(142),c=n.n(d),h=n(209),v=n(97),m=n(613),f=n(614),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{key:t.role},[t._l(t.scrapedModules,(function(e,i){return n("v-row",{key:i,style:{display:t.scrapedModules[i-1]&&"half"==t.scrapedModules[i-1].width&&"half"==t.scrapedModules[i].width||t.scrapedModules[i-1]&&"third"==t.scrapedModules[i-1].width&&"third"==t.scrapedModules[i].width||t.scrapedModules[i-2]&&"third"==t.scrapedModules[i-2].width&&"third"==t.scrapedModules[i-1].width&&"third"==t.scrapedModules[i].width?"none":"",height:"tall"==e.height?"700px":"short"==e.height?"300px":"500px"}},[["full","half","third"].includes(t.scrapedModules[i].width)?n("v-col",[n("Module",{attrs:{username:t.username,"live-class-proxy":t.liveClassProxy,scrapedModule:t.scrapedModules[i],role:t.role}})],1):t._e(),t._v(" "),t.scrapedModules[i+1]&&t.scrapedModules[i+1].width==t.scrapedModules[i].width&&["half","third"].includes(t.scrapedModules[i].width)?n("v-col",[n("Module",{attrs:{username:t.username,"live-class-proxy":t.liveClassProxy,scrapedModule:t.scrapedModules[i+1],role:t.role}})],1):["half","third"].includes(t.scrapedModules[i].width)?n("v-col"):t._e(),t._v(" "),t.scrapedModules[i+2]&&t.scrapedModules[i+1].width==t.scrapedModules[i].width&&t.scrapedModules[i+2].width==t.scrapedModules[i].width&&["third"].includes(t.scrapedModules[i+2].width)?n("v-col",[n("Module",{attrs:{role:t.role,username:t.username,"live-class-proxy":t.liveClassProxy,scrapedModule:t.scrapedModules[i+2]}})],1):["third"].includes(t.scrapedModules[i].width)?n("v-col"):t._e()],1)})),t._v(" "),t.scrapedModules.length?t._e():n("v-card",["teacher"==t.role||"station"==t.role?n("v-card-text",[t._v("\n      Sorry, looks like you have not loaded up any "+t._s(t.modules_type)+" modules.\n      Add some in the class settings to get started.\n    ")]):t._e(),t._v(" "),"student"==t.role?n("v-card-text",[t._v("\n      Sorry, it looks like the class creators have not added any modules yet.\n    ")]):t._e()],1)],2)}),[],!1,null,"23ea438f",null);e.default=component.exports;c()(component,{Module:n(503).default}),c()(component,{VCard:h.a,VCardText:v.c,VCol:m.a,VRow:f.a})},506:function(t,e,n){"use strict";n(501)},507:function(t,e,n){var r=n(19)(!1);r.push([t.i,".row[data-v-23ea438f]{margin:0!important;height:100%}.col[data-v-23ea438f],.row[data-v-23ea438f]{padding:0}",""]),t.exports=r},522:function(t,e,n){var content=n(523);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("c82bbd6a",content,!0,{sourceMap:!1})},523:function(t,e,n){var r=n(19)(!1);r.push([t.i,".theme--light.v-navigation-drawer{background-color:#fff}.theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border{background-color:rgba(0,0,0,.12)}.theme--light.v-navigation-drawer .v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-navigation-drawer{background-color:#363636}.theme--dark.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border{background-color:hsla(0,0%,100%,.12)}.theme--dark.v-navigation-drawer .v-divider{border-color:hsla(0,0%,100%,.12)}.v-navigation-drawer{-webkit-overflow-scrolling:touch;display:flex;flex-direction:column;left:0;max-width:100%;overflow:hidden;pointer-events:auto;top:0;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-property:transform,visibility,width}.v-navigation-drawer:not([data-booted=true]){transition:none!important}.v-navigation-drawer.v-navigation-drawer--right:after{left:0;right:auto}.v-navigation-drawer .v-list:not(.v-select-list){background:inherit}.v-navigation-drawer__border{position:absolute;right:0;top:0;height:100%;width:1px}.v-navigation-drawer__content{height:100%;overflow-y:auto;overflow-x:hidden}.v-navigation-drawer__image{border-radius:inherit;height:100%;position:absolute;top:0;bottom:0;z-index:-1;contain:strict;width:100%}.v-navigation-drawer__image .v-image{border-radius:inherit}.v-navigation-drawer--bottom.v-navigation-drawer--is-mobile{max-height:50%;top:auto;bottom:0;min-width:100%}.v-navigation-drawer--right{left:auto;right:0}.v-navigation-drawer--right>.v-navigation-drawer__border{right:auto;left:0}.v-navigation-drawer--absolute{z-index:1}.v-navigation-drawer--fixed{z-index:6}.v-navigation-drawer--absolute{position:absolute}.v-navigation-drawer--clipped:not(.v-navigation-drawer--temporary):not(.v-navigation-drawer--is-mobile){z-index:4}.v-navigation-drawer--fixed{position:fixed}.v-navigation-drawer--floating:after{display:none}.v-navigation-drawer--mini-variant{overflow:hidden}.v-navigation-drawer--mini-variant .v-list-item>:first-child{margin-left:0;margin-right:0}.v-navigation-drawer--mini-variant .v-list-item>:not(:first-child){position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);white-space:nowrap;display:inline;display:initial}.v-navigation-drawer--mini-variant .v-list-group--no-action .v-list-group__items,.v-navigation-drawer--mini-variant .v-list-group--sub-group{display:none}.v-navigation-drawer--mini-variant.v-navigation-drawer--custom-mini-variant .v-list-item{justify-content:center}.v-navigation-drawer--temporary{z-index:7}.v-navigation-drawer--mobile{z-index:6}.v-navigation-drawer--close{visibility:hidden}.v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close),.v-navigation-drawer--temporary:not(.v-navigation-drawer--close){box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}",""]),t.exports=r},524:function(t,e,n){"use strict";n.r(e);n(26),n(37),n(38),n(55),n(72),n(14),n(4),n(146);var r=n(515),o=n.n(r),l=n(503),d=n(504),c={name:"Teacher",props:["liveClassProxy","isStation","stationName"],data:function(){return{settingspendingEdits:!1,ready:!1,liveTeacherCount:0,liveStudentCount:0,lists:{},myUrl:"",showSettings:!1,stationNameInput:"",stationNameRules:[function(t){return!!t||"Name required"},function(t){return/^([A-Za-z0-9 ]{1,50})$/.test(t)||"Up to 50 letters and numbers only"}]}},computed:{username:function(){return this.isStation?this.stationName:this.$store.state.user.email},currentRoomName:function(){return this.liveClassProxy.users[this.username].room}},watch:{"$store.state.user.displayName":function(){this.$store.state.class_&&(this.liveClassProxy.users[this.username].displayName=this.$store.state.user.displayName)},currentRoomName:function(){["md","sm","xs"].includes(this.$vuetify.breakpoint.name)&&this.$store.commit("toggleDrawer",!1)},liveClassProxy:function(){this.updateDisplay()}},mounted:function(){this.stationNameInput=this.stationName,this.updateDisplay(),this.$route.hash.includes("#settings")&&(this.showSettings=!0,window.location.hash=window.location.hash.replace("#settings",""))},methods:{setStationName:function(){localStorage.stationName=this.stationNameInput,window.location.reload()},exitStationMode:function(){window.location.href=window.location.href.replace("station=true","")},updateDisplay:function(){this.liveTeacherCount=Object.values(this.liveClassProxy.users).filter((function(u){return"teacher"==u.role})).length,this.liveStudentCount=Object.values(this.liveClassProxy.users).filter((function(u){return"student"==u.role})).length,this.liveClassProxy&&!this.ready&&(this.ready=!0)},setCurrentRoom:function(t){this.liveClassProxy.users[this.username].room=t},enableAutoAssign:function(){this.liveClassProxy.autoAssign=this.username},userRoomChange:function(t){if("end"==t.type){var e=t.to.id.replace("$ROOM:",""),n=t.item.id.replace("$EMAIL:","");n==this.username?this.setCurrentRoom(e):this.liveClassProxy.users[n].room=e}}},components:{Settings:n(511).default,Module:l.default,draggable:o.a,Modules:d.default}},h=n(107),v=n(142),m=n.n(v),f=n(231),w=n(209),y=n(97),x=n(613),_=n(526),M=n(492),O=n(565),C=n(221),S=n(63),j=n(6),A=n(8),$=Object(j.a)(C.a,S.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(A.c)("v-hover should only contain a single element",this),element)):(Object(A.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}}),P=n(205),k=n(543),V=n(519),N=n(500),R=n(545),E=n(520),T=(n(13),n(11),n(16),n(12),n(17),n(2)),B=(n(22),n(145),n(32),n(522),n(235)),I=n(170),D=n(39),L=n(222),W=n(521),z=n(206),H=n(116),X=n(24),U=n(224),J=n(220),Y=n(510),Z=n(0);function F(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var G=Object(j.a)(Object(I.a)("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),D.a,L.a,W.a,z.a,H.a,X.a).extend({name:"v-navigation-drawer",directives:{ClickOutside:U.a,Resize:J.a,Touch:Y.a},provide:function(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?F(Object(source),!0).forEach((function(e){Object(T.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):F(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&W.a.options.computed.isMobile.call(this)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX";return{height:Object(Z.g)(this.height),top:this.isBottom?"auto":Object(Z.g)(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(Z.g)(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(Z.g)(this.computedTransform,"%"),")"),width:Object(Z.g)(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},image=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(B.a,{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[image])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={mouseenter:function(){return t.isMouseover=!0},mouseleave:function(){return t.isMouseover=!1},transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var n=document.createEvent("UIEvents");n.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(n)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),e},genPosition:function(t){var slot=Object(Z.m)(this,t);return slot?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},slot):slot},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(Z.m)(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),K=n(210),Q=n(614),tt=n(180),et=n(225),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-navigation-drawer",{attrs:{disabled:t.isStation,width:310,value:t.$store.state.drawer,app:"",clipped:""},on:{input:function(e){return t.$store.commit("toggleDrawer",e)}},scopedSlots:t._u([{key:"append",fn:function(){},proxy:!0}])},[n("v-overlay",{attrs:{value:t.isStation,opacity:.8}},[n("v-card",{staticClass:"blue-grey darken-4 text-center",attrs:{tile:"",width:"100%"}},[n("v-card-text",{staticClass:"white--text"},[t._v(" Station Mode Active ")]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[n("v-text-field",{attrs:{outlined:"",rules:t.stationNameRules,label:"Station Name",required:"","append-icon":"mdi-arrow-right"},on:{"click:append":t.setStationName},model:{value:t.stationNameInput,callback:function(e){t.stationNameInput=e},expression:"stationNameInput"}}),t._v("\n\n          This browser is now running as a station serving students.\n        ")],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[n("v-btn",{on:{click:t.exitStationMode}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-export-variant")]),t._v("\n\n            Exit Station mode\n          ")],1)],1)],1)],1),t._v(" "),n("v-list-item",{staticStyle:{margin:"10px"}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h6"},[t._v("\n          "+t._s(t.$store.state.class_.name)+"\n        ")]),t._v(" "),n("v-list-item-subtitle",[t._v("\n          "+t._s(t.liveStudentCount)+"\n          "+t._s(1==t.liveStudentCount?"student":"students")+",\n          "+t._s(t.liveTeacherCount)+"\n          "+t._s(1==t.liveTeacherCount?"teacher":"teachers")+" online\n        ")])],1),t._v(" "),n("v-list-item-icon",[n("v-btn",{attrs:{icon:"",color:"grey"},on:{click:function(e){t.showSettings=!t.showSettings}}},[n("v-icon",[t._v("mdi-cog")])],1)],1)],1),t._v(" "),n("v-list",{attrs:{dense:""}},[n("v-list-item-group",{attrs:{value:t.currentRoomName,mandatory:""}},t._l(Object.entries(t.liveClassProxy.rooms||{}),(function(e){var r=e[0],o=e[1];return n("div",{key:r,attrs:{value:r}},[n("v-divider"),t._v(" "),n("v-list-item",{attrs:{value:r,link:""},on:{click:function(){t.setCurrentRoom(r)}}},[n("v-list-item-icon",{staticStyle:{"margin-right":"15px"}},[n("v-icon",["Lobby"==r?[t._v("mdi-account-multiple")]:"PA Mode"==r?[t._v("mdi-bullhorn")]:r.startsWith("Station ")?[t._v("mdi-router-wireless")]:[t._v("mdi-forum")]],2)],1),t._v(" "),n("v-list-item-title",[t._v(t._s(r)+" ")]),t._v(" "),n("v-list-item-icon",[n("v-icon",{attrs:{color:"grey"}},[t._v("mdi-arrow-right")])],1)],1),t._v(" "),n("v-list",{attrs:{dense:"",flat:""}},[n("draggable",{attrs:{group:"users",id:"$ROOM:"+r},on:{end:t.userRoomChange}},t._l(Object.entries(t.liveClassProxy.users).filter((function(t){t[0];return t[1].room==r})),(function(e){var r=e[0],l=e[1];return n("v-hover",{key:r,attrs:{id:"$EMAIL:"+r},scopedSlots:t._u([{key:"default",fn:function(e){var d=e.hover;return[n("v-list-item",{directives:[{name:"show",rawName:"v-show",value:o.userLinked!=r,expression:"room.userLinked != email"}],attrs:{inactive:"",ripple:!1,selectable:!1}},[n("v-list-item-icon",{staticStyle:{"margin-right":"15px","margin-left":"20px"}},["student"==l.role?n("v-icon",{attrs:{color:"grey"}},[t._v("mdi-account-circle-outline")]):"teacher"==l.role?n("v-icon",{attrs:{color:"grey"}},[t._v("mdi-clipboard-account-outline")]):t._e()],1),t._v(" "),n("v-list-item-title",[t._v("\n                    "+t._s(l.displayName))]),t._v(" "),n("v-icon",{directives:[{name:"show",rawName:"v-show",value:d,expression:"hover"}],staticClass:"handle",attrs:{color:"grey"}},[t._v("mdi-drag-horizontal-variant")])],1)]}}],null,!0)})})),1)],1)],1)})),0)],1)],1),t._v(" "),n("v-dialog",{attrs:{"max-width":"700px",scrollable:"",persistent:t.settingspendingEdits},model:{value:t.showSettings,callback:function(e){t.showSettings=e},expression:"showSettings"}},[n("Settings",{attrs:{pendingEdits:t.settingspendingEdits},on:{"update:pendingEdits":function(e){t.settingspendingEdits=e},"update:pending-edits":function(e){t.settingspendingEdits=e},close:function(e){t.showSettings=!1}}})],1),t._v(" "),n("v-slide-y-transition"),t._v(" "),n("v-container",[t.ready?n("div",[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"10"}},[n("v-card",[n("v-card-title",[t._v(" "+t._s(t.currentRoomName)+" ")]),t._v(" "),n("Modules",{attrs:{role:t.isStation?"station":"teacher",username:t.username,"live-class-proxy":t.liveClassProxy}})],1)],1)],1)],1):t._e()])],1)}),[],!1,null,"dbb37a7c",null);e.default=component.exports;m()(component,{Settings:n(511).default,Modules:n(504).default}),m()(component,{VBtn:f.a,VCard:w.a,VCardText:y.c,VCardTitle:y.d,VCol:x.a,VContainer:_.a,VDialog:M.a,VDivider:O.a,VHover:$,VIcon:P.a,VList:k.a,VListItem:V.a,VListItemContent:N.a,VListItemGroup:R.a,VListItemIcon:E.a,VListItemSubtitle:N.b,VListItemTitle:N.c,VNavigationDrawer:G,VOverlay:K.a,VRow:Q.a,VSlideYTransition:tt.e,VTextField:et.a})},526:function(t,e,n){"use strict";n(14),n(4),n(13),n(98),n(32),n(302),n(508),n(84),n(99);var r=n(1);var o,l=n(100);e.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var l=data.attrs;if(l){data.attrs={};var d=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));d.length&&(data.staticClass+=" ".concat(d.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,d=data.attrs;return d&&(data.attrs={},n=Object.keys(d).filter((function(t){if("slot"===t)return!1;var e=d[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(l.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})}}]);