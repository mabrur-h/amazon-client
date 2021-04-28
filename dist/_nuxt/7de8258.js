(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{292:function(t,e,r){"use strict";r.r(e);var n=r(22),o=(r(55),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.prev=1,e.next=4,r.$get("/api/countries");case 4:return n=e.sent,e.abrupt("return",{countries:n});case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},data:function(){return{country:"Uzbekistan",fullName:"",streetAddress1:"",streetAddress2:"",city:"",state:"",zipCode:"",phoneNumber:"",deliverInstructions:"",securityCode:""}},methods:{onAddAddress:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,data={country:t.country,fullName:t.fullName,streetAddress1:t.streetAddress1+" "+t.streetAddress2,city:t.city,state:t.state,zipCode:t.zipCode,phoneNumber:t.phoneNumber,deliverInstructions:t.deliverInstructions,securityCode:t.securityCode},e.next=4,t.$axios.$post("/api/addresses",data);case 4:e.sent.success&&t.$router.push("/address"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}}),c=r(32),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("div",{staticClass:"registerAddress mt-3"},[r("div",{staticClass:"container-fluid c-section"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-3"}),t._v(" "),r("div",{staticClass:"col-sm-6"},[t._m(0),t._v(" "),r("div",{staticClass:"a-section"},[r("h2",[t._v("Add a new address")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("form",[r("div",{staticClass:"a-spacing-medium a-spacing-top-medium"},[r("div",{staticClass:"a-spacing-top-medium"},[r("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("Country/Region")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],staticClass:"a-select-option",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.country=e.target.multiple?r:r[0]}}},t._l(t.countries,(function(e){return r("option",{key:e.alpha2Code,domProps:{value:e.name}},[t._v(t._s(e.name))])})),0)]),t._v(" "),r("div",{staticClass:"a-spacing-top-medium"},[r("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("Full Name")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.fullName,expression:"fullName"}],staticClass:"a-input-text",staticStyle:{width:"100%"},attrs:{type:"text"},domProps:{value:t.fullName},on:{input:function(e){e.target.composing||(t.fullName=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"a-spacing-top-medium"},[r("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("Street Address")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.streetAddress1,expression:"streetAddress1"}],staticClass:"a-input-text",staticStyle:{width:"100%"},attrs:{type:"text",placeholder:"Street and number, P.O. box, c/o."},domProps:{value:t.streetAddress1},on:{input:function(e){e.target.composing||(t.streetAddress1=e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.streetAddress2,expression:"streetAddress2"}],staticClass:"a-input-text a-spacing-top-small",staticStyle:{width:"100%"},attrs:{type:"text",placeholder:"Apartment, suite, unit, building, floor, etc."},domProps:{value:t.streetAddress2},on:{input:function(e){e.target.composing||(t.streetAddress2=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"a-spacing-top-medium"},[r("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("City")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"a-input-text",staticStyle:{width:"100%"},attrs:{type:"text"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"a-spacing-top-medium"},[r("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("State / Province / Region")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.state,expression:"state"}],staticClass:"a-input-text",staticStyle:{width:"100%"},attrs:{type:"text"},domProps:{value:t.state},on:{input:function(e){e.target.composing||(t.state=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"a-spacing-top-medium"},[r("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("Zip Code")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.zipCode,expression:"zipCode"}],staticClass:"a-input-text",staticStyle:{width:"100%"},attrs:{type:"text"},domProps:{value:t.zipCode},on:{input:function(e){e.target.composing||(t.zipCode=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"a-spacing-top-medium"},[r("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("Phone Number")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],staticClass:"a-input-text",staticStyle:{width:"100%"},attrs:{type:"text"},domProps:{value:t.phoneNumber},on:{input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}}),t._v(" "),t._m(3)]),t._v(" "),t._m(4),t._v(" "),r("div",{staticClass:"a-spacing-top-medium"},[r("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("Do we need additional instructions to find this address?")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.deliverInstructions,expression:"deliverInstructions"}],staticStyle:{height:"6em",width:"100%"},attrs:{placeholder:"Provide details such as building description, a nearby landmark, or other navigation instructions"},domProps:{value:t.deliverInstructions},on:{input:function(e){e.target.composing||(t.deliverInstructions=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"a-spacing-top-medium"},[r("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("Do we need a security code or a call box number to access this building?")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.securityCode,expression:"securityCode"}],staticClass:"a-input-text",staticStyle:{width:"100%"},attrs:{type:"text",placeholder:"1234"},domProps:{value:t.securityCode},on:{input:function(e){e.target.composing||(t.securityCode=e.target.value)}}})]),t._v(" "),t._m(5),t._v(" "),r("div",{staticClass:"a-spacing-top-medium"}),t._v(" "),r("hr"),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),r("div",{staticClass:"a-spacing-top-large"},[r("span",{staticClass:"a-button-register"},[r("span",{staticClass:"a-button-inner"},[r("span",{staticClass:"a-button-text",on:{click:t.onAddAddress}},[t._v("Add address")])])])])])])])]),t._v(" "),r("div",{staticClass:"col-sm-3"})])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"a-section a-spacing-medium"},[r("div",{staticClass:"a-subheader a-breadcrumb a-spacing-small"},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[r("span",[t._v("Your Account")])])]),t._v(" "),r("li",{staticClass:"a-breadcrumb-divider"},[t._v("›")]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("span",[t._v("Your Adresses")])])]),t._v(" "),r("li",{staticClass:"a-breadcrumb-divider"},[t._v("›")]),t._v(" "),r("li",{staticClass:"active"},[r("a",{attrs:{href:"#"}},[r("span",[t._v("New Address")])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"a-section a-spacing-none a-spacing-top-small"},[r("b",[t._v("\n                Or pick up your packages at your convenience from our self-service locations. To add an Amazon Pickup Point or Locker, click\n                "),r("a",{attrs:{href:"#"}},[t._v("here")]),t._v(".\n              ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"a-section a-spacing-none a-spacing-top-small"},[e("b")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"a-section a-spacing-none a-spacing-top-micro"},[r("span",{staticClass:"a-size-mini"},[t._v("May be used to assist delivery")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"a-spacing-base a-spacing-top-medium"},[r("h3",[t._v("Add delivery instructions")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"a-spacing-top-medium"},[r("label",{staticStyle:{"margin-bottom":"0px"}},[t._v("Weekend delivery")]),t._v(" "),r("a",{attrs:{href:"#"}},[r("i",{staticClass:"fas fa-angle-down"}),t._v(" Which days can you receive packages?\n                  ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"a-spacing-top-medium"},[r("span",[r("b",[t._v("Make sure your address is correct")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",[t._v("If the address contains typos or other errors, your package may be undeliverable.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"a-spacing-top-small"},[r("span",[r("a",{attrs:{href:"#"}},[t._v("Tips for entering addresses")])]),t._v(" "),r("span",[t._v("|")]),t._v(" "),r("span",[r("a",{attrs:{href:"#"}},[t._v("APO/FPO address tips")])])])}],!1,null,null,null);e.default=component.exports}}]);