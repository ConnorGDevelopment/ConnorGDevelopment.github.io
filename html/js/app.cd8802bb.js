(function(t){function e(e){for(var s,n,c=e[0],l=e[1],o=e[2],v=0,p=[];v<c.length;v++)n=c[v],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,c=1;c<a.length;c++){var l=a[c];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"024f":function(t,e,a){t.exports=a.p+"img/Flourish.66b1f6d1.png"},"0831":function(t,e,a){t.exports=a.p+"img/Headshot1.79ea9a8b.jpg"},1771:function(t,e,a){var s={"./Flourish.png":"024f","./Headshot.png":"c383","./Headshot1.jpg":"0831","./Headshot2.jpg":"522a","./HeadshotBlank.png":"c48b","./House.jpg":"dc96","./Original.svg":"ed50","./RectangularFlourish.png":"d4df","./Salon.png":"ce0b","./Texture-Blue.png":"261e","./Texture.png":"504d","./blank.jpg":"ffeb"};function i(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=r,t.exports=i,i.id="1771"},"261e":function(t,e,a){t.exports=a.p+"img/Texture-Blue.d2c9329e.png"},"309c":function(t,e,a){"use strict";var s=a("826e"),i=a.n(s);i.a},4230:function(t,e,a){},"504d":function(t,e,a){t.exports=a.p+"img/Texture.4b8c6162.png"},"522a":function(t,e,a){t.exports=a.p+"img/Headshot2.d5f237eb.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("HeaderBar"),a("v-content",{staticClass:"texture-blue"},[a("router-view")],1),a("Footer")],1)},r=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app-bar",{staticClass:"secondary",attrs:{app:""}},[s("v-img",{staticClass:"hidden-sm-and-down",attrs:{"max-height":"100%","max-width":"40%",contain:"",src:a("ed50")}}),s("v-img",{staticClass:"hidden-md-and-up",attrs:{"max-height":"100%","max-width":"80%",contain:"",src:a("ed50")}}),s("v-spacer"),s("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[s("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"accent--text"},expression:"{ class: 'accent--text'}"}],staticClass:"title text-capitalize",attrs:{text:"",to:"#hero"}},[t._v(" Home ")]),s("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"accent--text"},expression:"{ class: 'accent--text'}"}],staticClass:"title text-capitalize",attrs:{text:"",to:"#about"}},[t._v(" About ")]),s("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"accent--text"},expression:"{ class: 'accent--text'}"}],staticClass:"title text-capitalize",attrs:{text:"",to:"#services"}},[t._v(" Services ")]),s("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"accent--text"},expression:"{ class: 'accent--text'}"}],staticClass:"title text-capitalize",attrs:{text:"",to:"#stylists"}},[t._v(" Stylists ")]),s("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"accent--text"},expression:"{ class: 'accent--text'}"}],staticClass:"title text-capitalize",attrs:{text:"",to:"#join"}},[t._v(" Join Our Team ")]),s("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"accent--text"},expression:"{ class: 'accent--text'}"}],staticClass:"title text-capitalize",attrs:{text:"",to:"#instagram"}},[t._v(" Instagram ")])],1),s("v-menu",{staticClass:"hidden-md-and-up",attrs:{"offset-y":"","nudge-top":"-6"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[s("v-btn",t._g({staticClass:"hidden-md-and-up",attrs:{icon:"",color:"accent"}},a),[s("v-icon",[t._v(" mdi-menu ")])],1)]}}])},[s("v-list",{staticClass:"secondary"},[s("v-list-item",[s("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"accent--text"},expression:"{ class: 'accent--text'}"}],staticClass:"title text-capitalize",attrs:{text:"",to:"#hero"}},[t._v(" Home ")])],1),s("v-list-item",[s("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"accent--text"},expression:"{ class: 'accent--text'}"}],staticClass:"title text-capitalize",attrs:{text:"",to:"#about"}},[t._v(" About ")])],1),s("v-list-item",[s("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"accent--text"},expression:"{ class: 'accent--text'}"}],staticClass:"title text-capitalize",attrs:{text:"",to:"#services"}},[t._v(" Services ")])],1),s("v-list-item",[s("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"accent--text"},expression:"{ class: 'accent--text'}"}],staticClass:"title text-capitalize",attrs:{text:"",to:"#stylists"}},[t._v(" Stylists ")])],1),s("v-list-item",[s("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"accent--text"},expression:"{ class: 'accent--text'}"}],staticClass:"title text-capitalize",attrs:{text:"",to:"#join"}},[t._v(" Join Our Team ")])],1),s("v-list-item",[s("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"accent--text"},expression:"{ class: 'accent--text'}"}],staticClass:"title text-capitalize",attrs:{text:"",to:"#instagram"}},[t._v(" Instagram ")])],1)],1)],1)],1)},c=[],l=a("2877"),o=a("6544"),u=a.n(o),v=a("40dc"),p=a("8336"),d=a("132d"),m=a("adda"),f=a("8860"),g=a("da13"),x=a("e449"),h=a("2fa4"),y=a("2a7f"),b=a("269a"),C=a.n(b),_=a("5607"),w={},V=Object(l["a"])(w,n,c,!1,null,null,null),S=V.exports;u()(V,{VAppBar:v["a"],VBtn:p["a"],VIcon:d["a"],VImg:m["a"],VList:f["a"],VListItem:g["a"],VMenu:x["a"],VSpacer:h["a"],VToolbarItems:y["a"]}),C()(V,{Ripple:_["a"]});var j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"white"},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",align:"center"}},[a("h1",{staticClass:"body-1"},[t._v(" XXX-XXX-XXXX "),a("br"),t._v(" 119 South High Street, Dublin, OH ")]),a("v-btn",{attrs:{icon:"",large:"",color:"accent"}},[a("v-icon",[t._v(" mdi-facebook ")])],1),a("v-btn",{attrs:{icon:"",large:"",color:"accent"}},[a("v-icon",[t._v(" mdi-instagram ")])],1),a("h1",{staticClass:"body-1"},[t._v(" The Magnolia © 2020 ")])],1)],1)],1)},O=[],N=a("62ad"),T=a("553a"),k=a("0fd9"),H={},I=Object(l["a"])(H,j,O,!1,null,null,null),P=I.exports;u()(I,{VBtn:p["a"],VCol:N["a"],VFooter:T["a"],VIcon:d["a"],VRow:k["a"]});var B={name:"App",components:{HeaderBar:S,Footer:P},data:function(){return{}}},E=B,z=a("7496"),$=a("a75b"),D=Object(l["a"])(E,i,r,!1,null,null,null),R=D.exports;u()(D,{VApp:z["a"],VContent:$["a"]});var F=a("8c4f"),J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pt-0",attrs:{fluid:""}},[a("Hero"),a("Welcome"),a("Services"),a("Stylists"),a("Join"),a("Instagram")],1)},M=[],X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-row",{attrs:{justify:"center",align:"center",id:"hero"}},[s("v-col",{attrs:{cols:"12",align:"center"}},[s("v-img",{attrs:{"max-width":"90%",src:a("ed50")}})],1),s("v-col",{staticClass:"texture-blue",attrs:{cols:"12",align:"center"}},[s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-img",{attrs:{height:"34px","max-width":"20%",contain:"",src:a("024f")}}),s("h1",{staticClass:"display-1 font-italic d-inline-flex",attrs:{id:"opening-banner"}},[t._v(" Come to our Grand Opening on Month, Day ")]),s("v-img",{staticClass:"custom-reverse",attrs:{height:"34px","max-width":"20%",contain:"",src:a("024f")}})],1)],1)],1)},L=[],A=(a("309c"),{}),W=Object(l["a"])(A,X,L,!1,null,null,null),U=W.exports;u()(W,{VCol:N["a"],VImg:m["a"],VRow:k["a"]});var G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-row",{staticClass:"texture-blue pb-4",attrs:{id:"about"}},[s("v-col",{staticClass:"pt-4",attrs:{cols:"12",align:"center"}},[s("v-row",{attrs:{justify:"center"}},[s("v-img",{attrs:{height:"34px","max-width":"20%",contain:"",src:a("024f")}}),s("p",{staticClass:"display-1 d-inline-flex"},[t._v(" Welcome To The Magnolia ")]),s("v-img",{staticClass:"custom-reverse",attrs:{height:"34px","max-width":"20%",contain:"",src:a("024f")}})],1)],1),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-img",{style:{"border-radius":"4px"},attrs:{"max-height":"420",contain:"",src:a("dc96")}})],1),s("v-col",{attrs:{cols:"12",md:"8"}},[s("p",{staticClass:"body-1"},[t._v(" Text Line "),s("br"),s("br"),t._v(" Text Line 2 "),s("br"),s("br"),t._v(" Text Line 3 "),s("br"),s("br"),t._v(" Text Line 4 ")])])],1)},q=[],K={},Q=Object(l["a"])(K,G,q,!1,null,null,null),Y=Q.exports;u()(Q,{VCol:N["a"],VImg:m["a"],VRow:k["a"]});var Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-row",{staticClass:"white",attrs:{id:"services"}},[s("v-col",{staticClass:"pt-4",attrs:{cols:"12",align:"center"}},[s("v-row",{attrs:{justify:"center"}},[s("v-img",{attrs:{height:"34px","max-width":"20%",contain:"",src:a("024f")}}),s("p",{staticClass:"display-1 d-inline-flex"},[t._v(" Services ")]),s("v-img",{staticClass:"custom-reverse",attrs:{height:"34px","max-width":"20%",contain:"",src:a("024f")}})],1)],1),t._l(t.services,(function(e){return s("v-col",{key:e.categoryName,attrs:{cols:"12",align:"center"}},[s("p",{staticClass:"headline"},[t._v(" "+t._s(e.categoryName)+" ")]),t._l(e.categoryItems,(function(e){return s("v-row",{key:e.serviceName,attrs:{align:"center"}},[s("v-col",{attrs:{cols:"5"}},[s("h1",{staticClass:"body-1"},[t._v(" "+t._s(e.serviceName)+" ")])]),s("v-col",{attrs:{cols:"2"}},[s("v-divider",{staticClass:"accent"})],1),s("v-col",{attrs:{cols:"5"}},[s("h1",{staticClass:"body-1"},[t._v(" "+t._s(e.servicePrice)+" ")])])],1)}))],2)}))],2)},tt=[],et={data:function(){return{services:{category1:{categoryName:"Cut",categoryItems:[{serviceName:"Service 1",servicePrice:"Price 1"},{serviceName:"Service 2",servicePrice:"Price 2"}]},category2:{categoryName:"Dye",categoryItems:[{serviceName:"Service 3",servicePrice:"Price 3"},{serviceName:"Service 4",servicePrice:"Price 4"}]}}}}},at=et,st=a("ce7e"),it=Object(l["a"])(at,Z,tt,!1,null,null,null),rt=it.exports;u()(it,{VCol:N["a"],VDivider:st["a"],VImg:m["a"],VRow:k["a"]});var nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-row",{staticClass:"texture-blue",attrs:{id:"stylists",align:"center",justify:"center"}},[s("v-col",{staticClass:"pt-4",attrs:{cols:"12",align:"center"}},[s("v-row",{attrs:{justify:"center"}},[s("v-img",{attrs:{height:"34px","max-width":"20%",contain:"",src:a("024f")}}),s("h1",{staticClass:"display-1 d-inline-flex"},[t._v(" Stylists ")]),s("v-img",{staticClass:"custom-reverse",attrs:{height:"34px","max-width":"20%",contain:"",src:a("024f")}})],1)],1),s("v-col",{attrs:{cols:"12",align:"center"}},[s("h1",{staticClass:"headline font-italic"},[t._v("Check Back Often To Meet Our New Stylists")])]),t._l(t.stylists,(function(e){return s("StylistProfile",{key:e.stylistName,scopedSlots:t._u([{key:"StylistPicture",fn:function(){return[s("v-img",{attrs:{src:a("1771")("./"+e.stylistPicture)}})]},proxy:!0},{key:"StylistName",fn:function(){return[t._v(" "+t._s(e.stylistName)+" ")]},proxy:!0},{key:"StylistTitle",fn:function(){return[t._v(" "+t._s(e.stylistTitle)+" ")]},proxy:!0},{key:"StylistContact",fn:function(){return[t._v(" "+t._s(e.stylistContact)+" ")]},proxy:!0}],null,!0)})}))],2)},ct=[],lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-col",{attrs:{cols:"9",md:"3"}},[s("v-card",{staticClass:"transparent elevation-0",attrs:{align:"center"}},[t._t("StylistPicture"),s("v-img",{attrs:{height:"52px","max-width":"100%",contain:"",src:a("d4df")}}),s("v-card-title",{staticClass:"headline pt-1"},[s("v-spacer"),t._t("StylistName"),s("v-spacer")],2),s("v-card-subtitle",{staticClass:"body-1"},[t._t("StylistTitle")],2),s("v-card-text",{staticClass:"body-1"},[t._t("StylistContact")],2),s("v-card-actions",[s("v-spacer"),s("v-btn",{staticClass:"accent"},[t._v(" Schedule Now ")]),s("v-spacer")],1),s("v-img",{staticClass:"custom-flip",attrs:{height:"52px","max-width":"100%",contain:"",src:a("d4df")}})],2)],1)},ot=[],ut=a("b0af"),vt=a("99d9"),pt={},dt=Object(l["a"])(pt,lt,ot,!1,null,null,null),mt=dt.exports;u()(dt,{VBtn:p["a"],VCard:ut["a"],VCardActions:vt["a"],VCardSubtitle:vt["b"],VCardText:vt["c"],VCardTitle:vt["d"],VCol:N["a"],VImg:m["a"],VSpacer:h["a"]});var ft={data:function(){return{stylists:{stylist1:{stylistPicture:"Headshot.png",stylistName:"Dyan Reckner",stylistTitle:"Hair Stylist",stylistContact:"Contact Info"},stylist2:{stylistPicture:"HeadshotBlank.png",stylistName:"Jane Doe",stylistTitle:"Esthetician",stylistContact:"Contact Info"},stylist3:{stylistPicture:"HeadshotBlank.png",stylistTitle:"Barber",stylistName:"John Doe",stylistContact:"Contact Info"}}}},components:{StylistProfile:mt}},gt=ft,xt=Object(l["a"])(gt,nt,ct,!1,null,null,null),ht=xt.exports;u()(xt,{VCol:N["a"],VImg:m["a"],VRow:k["a"]});var yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-row",{staticClass:"white",attrs:{id:"join",align:"center",justify:"center"}},[s("v-col",{staticClass:"pt-4",attrs:{cols:"12",align:"center"}},[s("v-row",{attrs:{justify:"center"}},[s("v-img",{attrs:{height:"34px","max-width":"20%",contain:"",src:a("024f")}}),s("p",{staticClass:"display-1 d-inline-flex"},[t._v(" Join Our Team ")]),s("v-img",{staticClass:"custom-reverse",attrs:{height:"34px","max-width":"20%",contain:"",src:a("024f")}})],1)],1),s("v-col",{attrs:{cols:"12",align:"center"}},[s("p",{staticClass:"headline"},[t._v(" Information Coming Soon ")])])],1)},bt=[],Ct={},_t=Object(l["a"])(Ct,yt,bt,!1,null,null,null),wt=_t.exports;u()(_t,{VCol:N["a"],VImg:m["a"],VRow:k["a"]});var Vt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-row",{staticClass:"texture-blue",attrs:{align:"center",justify:"center",id:"instagram"}},[s("v-col",{staticClass:"pt-4",attrs:{cols:"12",align:"center"}},[s("v-row",{attrs:{justify:"center"}},[s("v-img",{attrs:{height:"34px","max-width":"20%",contain:"",src:a("024f")}}),s("p",{staticClass:"display-1 d-inline-flex"},[t._v(" Instagram ")]),s("v-img",{staticClass:"custom-reverse",attrs:{height:"34px","max-width":"20%",contain:"",src:a("024f")}})],1)],1),s("vue-instagram",{attrs:{token:"accessTokenHere",count:6,mediaType:"image"},scopedSlots:t._u([{key:"loading",fn:function(e){return[e.loading?s("h1",{staticClass:"fancy-loading headline"},[t._v("Loading, please wait...")]):t._e()]}},{key:"feeds",fn:function(e){return[s("li",{staticClass:"fancy-list"},[t._v(" "+t._s(e.feed.link)+" ")])]}},{key:"error",fn:function(e){return[s("div",{staticClass:"fancy-alert"},[t._v(" "+t._s(e.error.error_message)+" ")])]}}])})],1)},St=[],jt=a("284a"),Ot=a.n(jt),Nt={components:{VueInstagram:Ot.a}},Tt=Nt,kt=Object(l["a"])(Tt,Vt,St,!1,null,null,null),Ht=kt.exports;u()(kt,{VCol:N["a"],VImg:m["a"],VRow:k["a"]});var It={name:"Home",components:{Hero:U,Welcome:Y,Services:rt,Stylists:ht,Join:wt,Instagram:Ht}},Pt=It,Bt=(a("cccb"),a("a523")),Et=Object(l["a"])(Pt,J,M,!1,null,null,null),zt=Et.exports;u()(Et,{VContainer:Bt["a"]});var $t=a("3384"),Dt=a.n($t);s["a"].use(F["a"]);var Rt=[{path:"/",name:"Home",component:zt}],Ft=new F["a"]({routes:Rt,scrollBehavior:function(t){var e=0;return t.hash&&(e=t.hash),Dt()(e,{duration:900,offset:58})}}),Jt=Ft,Mt=a("f309");s["a"].use(Mt["a"]);var Xt=new Mt["a"]({theme:{light:!0,themes:{light:{primary:"#353745",secondary:"#BFD9D7",accent:"#AE9152"}}}});a("dc44");s["a"].config.productionTip=!1,s["a"].use(Xt,{components:{HeaderBar:S,Hero:U,Welcome:Y,Services:rt,Stylists:ht,StylistProfile:mt,Join:wt,Instagram:Ht,VueInstagram:Ot.a,Footer:P}}),new s["a"]({router:Jt,vuetify:Xt,render:function(t){return t(R)}}).$mount("#app")},"826e":function(t,e,a){},c383:function(t,e,a){t.exports=a.p+"img/Headshot.3d6548b6.png"},c48b:function(t,e,a){t.exports=a.p+"img/HeadshotBlank.209098cc.png"},cccb:function(t,e,a){"use strict";var s=a("4230"),i=a.n(s);i.a},ce0b:function(t,e,a){t.exports=a.p+"img/Salon.35bb9517.png"},d4df:function(t,e,a){t.exports=a.p+"img/RectangularFlourish.aea708d1.png"},dc44:function(t,e,a){},dc96:function(t,e,a){t.exports=a.p+"img/House.8b94c249.jpg"},ed50:function(t,e,a){t.exports=a.p+"img/Original.c8b3b1cd.svg"},ffeb:function(t,e,a){t.exports=a.p+"img/blank.aee936a4.jpg"}});
//# sourceMappingURL=app.cd8802bb.js.map