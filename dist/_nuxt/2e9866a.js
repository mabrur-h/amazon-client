(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{294:function(e,t,n){"use strict";n.r(t);var r=n(22),o=(n(20),n(55),{name:"category",middleware:function(e){var t=e.store,n=e.redirect;if(!t.state.auth.user.isAdmin)return n("/")},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.prev=1,t.next=4,n.$get("/api/owners");case 4:return r=t.sent,t.abrupt("return",{owners:r.owners});case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},data:function(){return{name:"",about:"",selectedFile:null,fileName:""}},methods:{onFileSelect:function(e){this.selectedFile=e.target.files[0],this.fileName=e.target.files[0].name},onAddOwner:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(data=new FormData).append("name",e.name),data.append("about",e.about),data.append("photo",e.selectedFile,e.selectedFile.name),t.next=7,e.$axios.$post("/api/owners",data);case 7:t.sent,e.owners.push({name:e.name}),e.name="",e.about="",e.fileName="",e.selectedFile=null,e.type="",t.next=19;break;case 16:t.prev=16,t.t0=t.catch(0),console.log(t.t0.message);case 19:case"end":return t.stop()}}),t,null,[[0,16]])})))()}}}),l=n(32),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-3"}),e._v(" "),n("div",{staticClass:"col-sm-6"},[n("h2",{staticClass:"text-center mt-3"},[e._v("Add a new owner")]),e._v(" "),n("form",{on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onAddOwner(t)}}},[n("div",{staticClass:"mt-3"},[n("label",{attrs:{for:"name"}},[e._v("Name")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"a-input-text w-100",attrs:{type:"text",id:"name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"mt-3"},[n("label",{attrs:{for:"about"}},[e._v("About")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.about,expression:"about"}],staticClass:"a-input-text w-100",attrs:{type:"text",id:"about"},domProps:{value:e.about},on:{input:function(t){t.target.composing||(e.about=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"mt-3"},[n("label",[e._v("Add Photo")]),e._v(" "),n("div",{staticClass:"d-flex justify-content-between w-100"},[n("div",[n("label",{staticClass:"choosefile-button",attrs:{for:"photo"}},[n("i",{staticClass:"fa fa-plus"}),e._v(" "),n("input",{attrs:{type:"file",id:"photo"},on:{change:e.onFileSelect}})]),e._v(" "),n("p",{staticClass:"font-weight-bold"},[e._v("Photo name: "),n("span",{staticClass:"text-muted"},[e._v(e._s(e.fileName))])])]),e._v(" "),n("div",{staticClass:"justify-content-end"},[n("span",{staticClass:"a-button-register"},[n("span",{staticClass:"a-button-inner"},[n("span",{staticClass:"a-button-text",on:{click:e.onAddOwner}},[e._v("Add owner")])])])])])])]),e._v(" "),n("ul",{staticClass:"ml-0 mt-4"},e._l(e.owners,(function(t){return n("li",{key:t._id,staticClass:"list-group-item"},[e._v(e._s(t.name))])})),0)]),e._v(" "),n("div",{staticClass:"col-sm-3"})])])])}),[],!1,null,"09235d20",null);t.default=component.exports}}]);