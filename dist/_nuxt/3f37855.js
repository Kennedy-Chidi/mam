(window.webpackJsonp=window.webpackJsonp||[]).push([[42,22,23,24,25],{352:function(t,e,n){var content=n(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("8971756a",content,!0,{sourceMap:!1})},353:function(t,e,n){var content=n(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("1d01f3cd",content,!0,{sourceMap:!1})},354:function(t,e,n){"use strict";n.r(e);n(58),n(26);var c=n(8),l=(n(49),n(20),n(40),n(11),n(94),{data:function(){return{topPlan:"",wallets:[]}},methods:{getTopPlan:function(data){if(data.length>0){for(var t=data[0],i=1;i<data.length;i++)data[i].planMinimum>t.planMinimum&&(t=data[i]);return t}},formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},getPlans:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/plans");case 3:n=e.sent,t.topPlan=t.getTopPlan(n.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getWallets:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/wallet/?username=".concat(t.user.username));case 3:n=e.sent,t.wallets=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getPlans(),this.getWallets()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}}}),r=n(57),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return t.topPlan?e("div",{staticClass:"child-d-3"},[e("div",{staticClass:"div-block-67"},[e("h1",{staticClass:"heading-16"},[t._v("Top plan")]),t._v(" "),e("div",{},[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Name")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v(t._s(t.topPlan.planName))])]),t._v(" "),e("div",{staticClass:"div-block-69"})]),t._v(" "),t._m(0),t._v(" "),e("div",[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Rate")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v(t._s(t.topPlan.planPercentage)+"%")])]),t._v(" "),e("div",{staticClass:"div-block-69"})]),t._v(" "),e("div",[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Minimum")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v("\n          "+t._s(t.formatMoney(t.topPlan.planMinimum))+"\n        ")])]),t._v(" "),e("div",{staticClass:"div-block-69"})]),t._v(" "),e("div",[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Maximum")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v("\n          "+t._s(t.formatMoney(t.topPlan.planMaximum))+"\n        ")])]),t._v(" "),e("div",{staticClass:"div-block-69"})])]),t._v(" "),e("div",{staticClass:"div-block-95"},[t.wallets?e("div",{staticClass:"div-block-96"},[e("h1",{staticClass:"heading-30"},[t._v("My Portfolio")]),t._v(" "),t._l(t.wallets,(function(n){return e("div",{key:n._id,staticClass:"div-block-132"},[e("div",{staticClass:"div-block-133"},[e("img",{staticClass:"image-43",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.symbol),loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"div-block-131"},[e("h1",{staticClass:"heading-31"},[t._v(t._s(n.name))])]),t._v(" "),e("div",{staticClass:"div-block-99"},[e("div",{staticClass:"text-block-52"},[t._v(t._s(n.name))]),t._v(" "),e("div",{staticClass:"text-block-52"},[t._v("$"+t._s(t.formatMoney(n.balance)))])])])}))],2):t._e()])]):t._e()}),[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Currency")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v("USD")])]),t._v(" "),e("div",{staticClass:"div-block-69"})])}],!1,null,null,null);e.default=component.exports},355:function(t,e,n){"use strict";n.r(e);var c=n(8),l=(n(49),{data:function(){return{company:""}},methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:n=e.sent,t.company=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var n=document.querySelector("#footer");n?n.appendChild(e):console.error("Could not find app node to append script element")}},mounted:function(){this.setFileURL(),this.getCompany()}}),r=n(57),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return t.company?e("div",{staticClass:"div-block-134"},[e("div",{staticClass:"text-block-53"},[t._v("\n    "+t._s((new Date).getFullYear())+" "+t._s(t.company.companyName)+", All Right\n    Reserved\n  ")])]):t._e()}),[],!1,null,null,null);e.default=component.exports},356:function(t,e,n){"use strict";n.r(e);var c=n(8),l=(n(49),n(93),{data:function(){return{time:(new Date).toLocaleTimeString(),user:""}},methods:{formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},getClock:function(){var t=this;setInterval((function(){return t.getTime(new Date)}),1e3)},getTime:function(data){var t=new Date(data),e=t.getHours(),n=t.getMinutes(),c=e>=12?"PM":"AM";return(e=(e%=12)||12)+":"+(n=n<10?"0"+n:n)+" "+c},toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},authenticateUser:function(){this.isAuthenticated?"Admin"==this.user.status&&this.$router.push("/admin"):this.$router.push("/")},getAUser:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:n=e.sent,t.user=n.data.user,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},logout:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;this.authenticateUser(),this.getAUser(),setInterval((function(){t.time=(new Date).toLocaleTimeString()}),1e3)},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),r=(n(365),n(57)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-29"},[e("div",{staticClass:"div-block-139"}),t._v(" "),e("div",{staticClass:"div-block-26"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"image-44",attrs:{src:"/images/Mam-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("img",{staticClass:"icon",attrs:{src:"/dashboard-images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}})],1),t._v(" "),e("div",{staticClass:"div-block-28"},[e("div",{staticClass:"div-block-140"},[e("img",{staticClass:"image-6",attrs:{src:"/dashboard-images/colored-user-profile.svg",loading:"lazy",alt:""}}),t._v(" "),t.user?e("div",{staticClass:"div-block-141"},[e("div",{staticClass:"text-block-9 _1"},[t._v(t._s(t.user.username))]),t._v(" "),e("div",{staticClass:"text-block-9"},[t._v(t._s(t.user.email))])]):t._e()]),t._v(" "),e("div",{staticClass:"div-block-140"},[e("img",{staticClass:"image-6",attrs:{src:"/dashboard-images/calendar.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"div-block-141"},[e("div",{staticClass:"text-block-9 _1"},[t._v(t._s(t.formatDate(new Date)))]),t._v(" "),e("div",{staticClass:"text-block-9"},[t._v(t._s(t.time))])]),t._v(" "),e("img",{staticClass:"image-46",attrs:{src:"/dashboard-images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}})])])])}),[],!1,null,null,null);e.default=component.exports},357:function(t,e,n){"use strict";n.r(e);var c=n(8),l=(n(26),n(49),{data:function(){return{route:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},hideDashboardNav:function(){this.$store.commit("HIDE_DASHBOARD_NAV")},logout:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{navState:function(){return this.$store.state.dashboardNavState}},mounted:function(){this.route=this.$route.name,this.hideDashboardNav()},head:function(){return{link:[{rel:"stylesheet",type:"text/css",href:"/css/dashboard.css"}]}}}),r=(n(367),n(57)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"child-d-1",class:{hide:!t.navState}},[e("div",{staticClass:"div-block-18"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"image brand",attrs:{src:"/images/Mam-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}}),t._v(" "),e("div",{staticClass:"div-block-21"},[e("img",{staticClass:"image-2",attrs:{src:"/dashboard-images/close-nav.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}})])],1),t._v(" "),e("div",{staticClass:"div-block-25"},[e("nuxt-link",{staticClass:"div-block-19",class:{blue:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642e191c9a0935e1a449bd_dash-icon%20(1).svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link"},[t._v("Account Balance")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"deposit"==t.route},attrs:{to:"/deposit"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642e38650a2eef0383e3ce_deposit%20(1).svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Make deposit")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"deposit-list"==t.route},attrs:{to:"/deposit-list"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642eabd6ddf0a4ed0edf33_deposit_list.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Deposit List")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"withdrawal"==t.route},attrs:{to:"/withdrawal"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642ecc8b338263ec539dfd_withdraw.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Withdrawal")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"history"==t.route},attrs:{to:"/history"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642f06dfc4d15aa04c5f3c_transaction.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("History")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"earnings"==t.route},attrs:{to:"/earnings"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642f06dfc4d15aa04c5f3c_transaction.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Earnings")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"referral"==t.route},attrs:{to:"/referral"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642f225578cd28b192fc2d_referral.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Referrals")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"profile"==t.route},attrs:{to:"/profile"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642fbdc818cd423ff2d48b_setting.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Profile")])])]),t._v(" "),e("div",{staticClass:"div-block-19",on:{click:t.logout}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642fe0a1bc891dfc0c29c0_logout.svg",loading:"lazy",alt:""}}),t._v(" "),t._m(0)])],1),t._v(" "),t._m(1)])}),[function(){var t=this._self._c;return t("h3",{staticClass:"heading-8"},[t("span",{staticClass:"link-9",attrs:{href:"https://realestatefinancecountry.com/?a=logout"}},[t("strong",{staticClass:"bold-text-17"},[this._v("Logout")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-24"},[e("h3",{staticClass:"heading-9"},[t._v("Support")]),t._v(" "),e("div",{staticClass:"text-block-6"},[e("strong",[t._v("For any enquiries about us")]),t._v("‍"),e("strong",[t._v("Kindly chat us on our live support")])]),t._v(" "),e("div",{staticClass:"div-block-23"},[e("div",{staticClass:"text-block-7"},[t._v("Online Enquiry")])])])}],!1,null,null,null);e.default=component.exports},365:function(t,e,n){"use strict";n(352)},366:function(t,e,n){var c=n(150)((function(i){return i[1]}));c.push([t.i,".image-44{min-width:100px}.image-46{min-width:25px}",""]),c.locals={},t.exports=c},367:function(t,e,n){"use strict";n(353)},368:function(t,e,n){var c=n(150)((function(i){return i[1]}));c.push([t.i,".div-block-19{cursor:pointer}.image.brand{height:auto;min-width:100px}",""]),c.locals={},t.exports=c},374:function(t,e,n){"use strict";var c=n(2),l=n(3),r=n(60),o=n(238),d=n(237),v=n(4),m=RangeError,h=String,f=Math.floor,_=l(d),C=l("".slice),k=l(1..toFixed),x=function(t,e,n){return 0===e?n:e%2==1?x(t,e-1,n*t):x(t*t,e/2,n)},y=function(data,t,e){for(var n=-1,c=e;++n<6;)c+=t*data[n],data[n]=c%1e7,c=f(c/1e7)},w=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=f(n/t),n=n%t*1e7},M=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=h(data[t]);s=""===s?e:s+_("0",7-e.length)+e}return s};c({target:"Number",proto:!0,forced:v((function(){return"0.000"!==k(8e-5,3)||"1"!==k(.9,0)||"1.25"!==k(1.255,2)||"1000000000000000128"!==k(0xde0b6b3a7640080,0)}))||!v((function(){k({})}))},{toFixed:function(t){var e,n,c,l,d=o(this),v=r(t),data=[0,0,0,0,0,0],f="",k="0";if(v<0||v>20)throw m("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return h(d);if(d<0&&(f="-",d=-d),d>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(d*x(2,69,1))-69)<0?d*x(2,-e,1):d/x(2,e,1),n*=4503599627370496,(e=52-e)>0){for(y(data,0,n),c=v;c>=7;)y(data,1e7,0),c-=7;for(y(data,x(10,c,1),0),c=e-1;c>=23;)w(data,1<<23),c-=23;w(data,1<<c),y(data,1,1),w(data,2),k=M(data)}else y(data,0,n),y(data,1<<-e,0),k=M(data)+_("0",v);return k=v>0?f+((l=k.length)<=v?"0."+_("0",v-l)+k:C(k,0,l-v)+"."+C(k,l-v)):f+k}})},412:function(t,e,n){var content=n(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("0928a2e1",content,!0,{sourceMap:!1})},450:function(t,e,n){"use strict";n(412)},451:function(t,e,n){var c=n(150)((function(i){return i[1]}));c.push([t.i,".div-block-46,.div-block-78{cursor:pointer}.div-block-78.active{border-color:#ee4284}.form.send{align-items:flex-start;flex-direction:column}.div-block-46.active{border:1px solid #ee4284}",""]),c.locals={},t.exports=c},534:function(t,e,n){"use strict";n.r(e);n(58),n(26),n(374),n(236);var c=n(8),l=(n(49),n(20),n(40),n(11),n(94),n(93),n(42),n(354)),r=n(355),o=n(356),d=n(357),v={data:function(){return{wallets:[],plans:[],currencies:[],selectedPlan:"",selecetedWalletBalance:"",selectedWalletId:"",selectedCurrencyId:"",fromBalance:!1,amount:1e3,percent:"",paymentMethod:"",maxArray:[],percentArray:[],response:"",isError:!1,showResponse:!1,onRequest:!1}},methods:{formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},callResponse:function(t,e){var n=this;this.onRequest=!1,this.response=t,this.isError=e,this.showResponse=!0,setTimeout((function(){n.showResponse=!1}),6e3)},watchInput:function(){""!=this.selectedPlan?1==this.fromBalance&&this.selecetedWalletBalance<this.amount?this.callResponse("Sorry, you have insufficient balance in this wallet",!0):0!=this.selectedPlan.planMaximum&&this.amount>this.selectedPlan.planMaximum&&(this.amount=this.selectedPlan.planMaximum):this.callResponse("Choose a Plan for deposit to proceed",!0)},selectWallet:function(t){var e=this;0!=t.balance&&(this.wallets.forEach((function(t){t.checked=!1})),t.checked=!0,this.selecetedWalletBalance=t.balance,this.checkItems(this.currencies),this.fromBalance=!0,this.selectedWalletId=t._id,this.currencies.forEach((function(n){n.name==t.name&&(e.selectedCurrencyId=n._id)})),this.paymentMethod=t.paymentMethod)},selectSystem:function(t){this.currencies.forEach((function(t){t.checked=!1})),this.checkItems(this.wallets),this.selectedCurrencyId=t._id,this.fromBalance=!1,t.checked=!0,this.paymentMethod=t.paymentMethod},selectPlan:function(t){this.plans.forEach((function(t){t.checked=!1})),this.selectedPlan=t,t.checked=!0,this.amount=t.planMinimum,this.percent=t.planPercentage},checkItems:function(t){return t.forEach((function(t){t.checked=!1})),t},setMaxArray:function(t){var e=this;t.forEach((function(t){e.maxArray.push(t.planMaximum),e.percentArray.push(t.planPercentage)}))},setPercentage:function(){this.watchInput(),Number(this.amount)<Number(this.maxArray[0])?this.percent=Number(this.percentArray[0]):Number(this.amount)>Number(this.maxArray[0])?this.percent=this.percentArray[1]:Number(this.amount)>Number(this.maxArray[1])&&(this.percent=this.percentArray[2])},proceedToDeposit:function(){this.onRequest=!0,""!=this.selectedPlan?""!=this.selectedWalletId||""!=this.selectedCurrencyId?1==this.fromBalance&&this.selecetedWalletBalance<this.amount?this.callResponse("Sorry, you have insufficient balance in this wallet",!0):this.$router.push("/confirm-deposit/?paymentMethod=".concat(this.paymentMethod,"&planId=").concat(this.selectedPlan._id,"&amount=").concat(this.amount,"&walletId=").concat(this.selectedWalletId,"&currencyId=").concat(this.selectedCurrencyId,"&fromBalance=").concat(this.fromBalance)):this.callResponse("Please select a currency to deposit in",!0):this.callResponse("Please select a plan",!0)},getWallets:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/wallet/?username=".concat(t.user.username));case 3:n=e.sent,t.wallets=t.checkItems(n.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getCurrencies:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/currency");case 3:n=e.sent,t.currencies=t.checkItems(n.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getPlans:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/plans");case 3:n=e.sent,t.plans=t.checkItems(n.data.data),t.setMaxArray(t.plans),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){this.getWallets(),this.getPlans(),this.getCurrencies()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}},components:{DashboardFooter:r.default,DashboardNavigation:d.default,DashboardHeader:o.default,DashboardAside:l.default}},m=(n(450),n(57)),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"make-deposit"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"mother-d"},[e("dashboard-navigation"),t._v(" "),e("div",{staticClass:"child-d-2"},[e("dashboard-header"),t._v(" "),e("div",{staticClass:"div-block-30"}),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"div-block-32"},t._l(t.wallets,(function(n,c){return e("div",{key:n._id,staticClass:"div-block-75",class:{starter:0==c||c>3,flex:1==c,erc:2==c,_000:3==c}},[e("img",{staticClass:"image-32",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.symbol),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"text-block-26"},[t._v(t._s(n.name)+" Balance")]),t._v(" "),e("h2",{staticClass:"heading-18"},[t._v("\n              $"+t._s(t.formatMoney(Number(n.balance).toFixed(2)))+" USD\n            ")])])})),0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"div-block-38"},t._l(t.plans,(function(n,c){return e("div",{key:c,staticClass:"div-block-46 starter",class:{starter:0==c,flex:2==c,selected:2==c,active:n.checked},on:{click:function(e){return t.selectPlan(n)}}},[e("div",{staticClass:"text-block-13"},[t._v(t._s(n.planName))]),t._v(" "),e("div",{staticClass:"text-block-13"},[t._v(t._s(n.planPercentage)+"%")]),t._v(" "),t._m(2,!0),t._v(" "),t._m(3,!0),t._v(" "),e("div",{staticClass:"text-block-13"},[t._v("Minimum : $"+t._s(n.planMinimum))]),t._v(" "),n.planMaximum>0?e("div",{staticClass:"text-block-13"},[t._v("\n              Maximum :$"+t._s(n.planMaximum)+"\n            ")]):e("div",{staticClass:"text-block-13"},[t._v("Maximum :Unlimited")])])})),0),t._v(" "),e("h1",{staticClass:"heading-19"},[t._v("Select Payment")]),t._v(" "),e("div",{staticClass:"div-block-79"},[e("div",{staticClass:"div-block-77"},[e("div",{staticClass:"text-block-28"},[t._v("Select from Balance")]),t._v(" "),t._l(t.wallets,(function(n){return e("div",{key:n._id,staticClass:"div-block-78",class:{disabled:0==n.balance,active:n.checked},on:{click:function(e){return t.selectWallet(n)}}},[e("img",{staticClass:"image-33",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.symbol),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"text-block-29"},[e("strong",{staticClass:"bold-text-46"},[t._v(t._s(n.name))])])])}))],2),t._v(" "),e("div",{staticClass:"div-block-77"},[e("div",{staticClass:"text-block-28"},[t._v("Select from System")]),t._v(" "),t._l(t.currencies,(function(n){return e("div",{key:n._id,staticClass:"div-block-78",class:{active:n.checked},on:{click:function(e){return t.selectSystem(n)}}},[e("img",{staticClass:"image-33",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.symbol),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"text-block-29"},[e("strong",{staticClass:"bold-text-50"},[t._v(t._s(n.name))])])])}))],2)]),t._v(" "),e("h1",{staticClass:"heading-20"},[t._v("Amount")]),t._v(" "),e("div",{staticClass:"div-block-81"},[e("div",{staticClass:"form-block w-form"},[e("div",{staticClass:"form send"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"text-field w-input amount",attrs:{type:"number"},domProps:{value:t.amount},on:{keyup:t.setPercentage,input:function(e){e.target.composing||(t.amount=e.target.value)}}}),t._v(" "),t.showResponse?e("div",{staticClass:"response-text",class:{error:t.isError}},[t._v("\n                "+t._s(t.response)+"\n              ")]):t._e(),t._v(" "),e("input",{staticClass:"submit-button w-button",attrs:{type:"submit",value:"Deposit"},on:{click:t.proceedToDeposit}})])]),t._v(" "),e("div",{staticClass:"div-block-82"},[e("div",{staticClass:"div-block-83"},[e("img",{staticClass:"image-34",attrs:{src:"/images/daily.svg",loading:"lazy",alt:""}}),t._v(" "),e("h1",{staticClass:"heading-21"},[e("strong",{staticClass:"bold-text-12"},[t._v("$ "+t._s(t.formatMoney(t.amount*t.percent/100)))])]),t._v(" "),e("div",{staticClass:"text-block-31"},[t._v("Profit Daily")])]),t._v(" "),e("div",{staticClass:"div-block-83 w"},[e("img",{staticClass:"image-34",attrs:{src:"/images/weekly.svg",loading:"lazy",alt:""}}),t._v(" "),e("h1",{staticClass:"heading-21"},[e("strong",{staticClass:"bold-text-12"},[t._v("$ "+t._s(t.formatMoney(t.amount*t.percent*7/100)))])]),t._v(" "),e("div",{staticClass:"text-block-31"},[t._v("Profit Weekly")])]),t._v(" "),e("div",{staticClass:"div-block-83 m"},[e("img",{staticClass:"image-34",attrs:{src:"/images/monthly.svg",loading:"lazy",alt:""}}),t._v(" "),e("h1",{staticClass:"heading-21"},[e("strong",{staticClass:"bold-text-12"},[t._v("$ "+t._s(t.formatMoney(t.amount*t.percent*30/100)))])]),t._v(" "),e("div",{staticClass:"text-block-31"},[t._v("Profit Month")])])])])],1),t._v(" "),e("dashboard-aside")],1)]),t._v(" "),e("dashboard-footer")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-31"},[e("h1",{staticClass:"heading-10"},[t._v("Make Deposit")]),t._v(" "),e("div",{staticClass:"text-block-10"},[t._v("Available Balance")])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-76"},[t("div",{staticClass:"text-block-27"},[this._v("Select plan")])])},function(){var t=this._self._c;return t("div",{staticClass:"text-block-13"},[t("strong",[this._v("income : Daily")])])},function(){var t=this._self._c;return t("div",{staticClass:"text-block-13"},[t("strong",[this._v("Deposit Range")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardNavigation:n(357).default,DashboardHeader:n(356).default,DashboardAside:n(354).default,DashboardFooter:n(355).default})}}]);