(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{360:function(t,e,l){var content=l(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(151).default)("6b1a03ce",content,!0,{sourceMap:!1})},362:function(t,e,l){"use strict";l.r(e);var n=l(8),c=(l(49),{data:function(){return{company:"",address:"",email:""}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var l=document.querySelector("#footer");l?l.appendChild(e):console.error("Could not find app node to append script element")},setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:l=e.sent,t.company=l.data.data,t.address=l.data.data.media[0],t.email=l.data.data.media[1],e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){var t=this;this.setFileURL(),this.getCompany(),this.loadScript(),this.$socket.on("fetchedUsers",(function(data,e){t.users=data}))}}),o=(l(369),l(57)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer wf-section",attrs:{id:"footer"}},[t.company?e("div",{staticClass:"div-block-117"},[e("div",{staticClass:"cumstom-container"},[e("div",{staticClass:"div-block-85"},[e("div",{staticClass:"div-block-87"},[e("nuxt-link",{staticClass:"link-block-4 w-inline-block",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[e("img",{staticClass:"image-13 logo",attrs:{src:"/images/Mam-Logo.png",loading:"lazy",alt:""}}),t._v(" "),e("h1",{staticClass:"heading-20"},[t._v("\n              © "+t._s((new Date).getFullYear())+", "+t._s(t.company.companyName)+".\n            ")])]),t._v(" "),e("div",{staticClass:"media"},[t._v(t._s(t.address.text))]),t._v(" "),e("div",{staticClass:"media"},[t._v(t._s(t.email.text))])],1),t._v(" "),t._m(0),t._v(" "),t._m(1)])])]):t._e()])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-156"},[e("div",{staticClass:"div-block-86"},[e("a",{staticClass:"link-block-5 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("About")])]),e("a",{staticClass:"link-block-5 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Road Map")])]),e("a",{staticClass:"link-block-5 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Document")])]),e("a",{staticClass:"link-block-5 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Distribution")])])]),t._v(" "),e("div",{staticClass:"div-block-88"},[e("a",{staticClass:"link-block-6 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Statistics")])]),e("a",{staticClass:"link-block-6 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("FAQ")])]),e("a",{staticClass:"link-block-6 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Plan")])]),e("a",{staticClass:"link-block-6 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Team")])])]),t._v(" "),e("div",{staticClass:"div-block-89"},[e("a",{staticClass:"link-block-7 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Prospectus")])]),e("a",{staticClass:"link-block-7 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Code of Ethics")])]),e("a",{staticClass:"link-block-7 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Annual Reports")])]),e("a",{staticClass:"link-block-7 w-inline-block",attrs:{href:"#"}},[e("h1",{staticClass:"heading-19"},[t._v("Shareholder Reports")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-90"},[e("div",{staticClass:"form-block w-form"},[e("div",{staticClass:"form"},[e("label",{staticClass:"heading-19 s",attrs:{for:"email-4"}},[t._v("Subscribe")]),t._v(" "),e("div",{staticClass:"div-block-91"},[e("input",{staticClass:"text-field-3 w-input",attrs:{type:"email",maxlength:"256",placeholder:"Email",id:"email-2"}}),e("input",{staticClass:"submit-button-2 w-button",attrs:{type:"submit",value:"Send","data-wait":"Please wait..."}})])])])])}],!1,null,null,null);e.default=component.exports},369:function(t,e,l){"use strict";l(360)},370:function(t,e,l){var n=l(150)((function(i){return i[1]}));n.push([t.i,"img.image-13.logo{min-width:150px}.media{align-items:center;display:flex;margin-bottom:15px}.media img{margin-right:10px;width:20px}",""]),n.locals={},t.exports=n}}]);