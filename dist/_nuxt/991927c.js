(window.webpackJsonp=window.webpackJsonp||[]).push([[41,22,23,24,25],{343:function(t,e,n){"use strict";var r=n(2),o=n(3),c=n(39),l=n(27),d=n(41),v=n(235),f=n(14),h=n(4),m=n(234),_=n(152),C=n(344),k=n(345),x=n(95),w=n(346),y=[],D=o(y.sort),R=o(y.push),T=h((function(){y.sort(void 0)})),A=h((function(){y.sort(null)})),M=_("sort"),$=!h((function(){if(x)return x<70;if(!(C&&C>3)){if(k)return!0;if(w)return w<603;var code,t,e,n,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)y.push({k:t+n,v:e})}for(y.sort((function(a,b){return b.v-a.v})),n=0;n<y.length;n++)t=y[n].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:T||!A||!M||!$},{sort:function(t){void 0!==t&&c(t);var e=l(this);if($)return void 0===t?D(e):D(e,t);var n,r,o=[],h=d(e);for(r=0;r<h;r++)r in e&&R(o,e[r]);for(m(o,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:f(e)>f(n)?1:-1}}(t)),n=d(o),r=0;r<n;)e[r]=o[r++];for(;r<h;)v(e,r++);return e}})},344:function(t,e,n){var r=n(72).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},345:function(t,e,n){var r=n(72);t.exports=/MSIE|Trident/.test(r)},346:function(t,e,n){var r=n(72).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},352:function(t,e,n){var content=n(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("8971756a",content,!0,{sourceMap:!1})},353:function(t,e,n){var content=n(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("1d01f3cd",content,!0,{sourceMap:!1})},354:function(t,e,n){"use strict";n.r(e);n(58),n(26);var r=n(8),o=(n(49),n(20),n(40),n(11),n(94),{data:function(){return{topPlan:"",wallets:[]}},methods:{getTopPlan:function(data){if(data.length>0){for(var t=data[0],i=1;i<data.length;i++)data[i].planMinimum>t.planMinimum&&(t=data[i]);return t}},formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},getPlans:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/plans");case 3:n=e.sent,t.topPlan=t.getTopPlan(n.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getWallets:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/wallet/?username=".concat(t.user.username));case 3:n=e.sent,t.wallets=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getPlans(),this.getWallets()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}}}),c=n(57),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return t.topPlan?e("div",{staticClass:"child-d-3"},[e("div",{staticClass:"div-block-67"},[e("h1",{staticClass:"heading-16"},[t._v("Top plan")]),t._v(" "),e("div",{},[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Name")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v(t._s(t.topPlan.planName))])]),t._v(" "),e("div",{staticClass:"div-block-69"})]),t._v(" "),t._m(0),t._v(" "),e("div",[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Rate")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v(t._s(t.topPlan.planPercentage)+"%")])]),t._v(" "),e("div",{staticClass:"div-block-69"})]),t._v(" "),e("div",[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Minimum")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v("\n          "+t._s(t.formatMoney(t.topPlan.planMinimum))+"\n        ")])]),t._v(" "),e("div",{staticClass:"div-block-69"})]),t._v(" "),e("div",[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Maximum")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v("\n          "+t._s(t.formatMoney(t.topPlan.planMaximum))+"\n        ")])]),t._v(" "),e("div",{staticClass:"div-block-69"})])]),t._v(" "),e("div",{staticClass:"div-block-95"},[t.wallets?e("div",{staticClass:"div-block-96"},[e("h1",{staticClass:"heading-30"},[t._v("My Portfolio")]),t._v(" "),t._l(t.wallets,(function(n){return e("div",{key:n._id,staticClass:"div-block-132"},[e("div",{staticClass:"div-block-133"},[e("img",{staticClass:"image-43",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.symbol),loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"div-block-131"},[e("h1",{staticClass:"heading-31"},[t._v(t._s(n.name))])]),t._v(" "),e("div",{staticClass:"div-block-99"},[e("div",{staticClass:"text-block-52"},[t._v(t._s(n.name))]),t._v(" "),e("div",{staticClass:"text-block-52"},[t._v("$"+t._s(t.formatMoney(n.balance)))])])])}))],2):t._e()])]):t._e()}),[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Currency")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v("USD")])]),t._v(" "),e("div",{staticClass:"div-block-69"})])}],!1,null,null,null);e.default=component.exports},355:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),{data:function(){return{company:""}},methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:n=e.sent,t.company=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var n=document.querySelector("#footer");n?n.appendChild(e):console.error("Could not find app node to append script element")}},mounted:function(){this.setFileURL(),this.getCompany()}}),c=n(57),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return t.company?e("div",{staticClass:"div-block-134"},[e("div",{staticClass:"text-block-53"},[t._v("\n    "+t._s((new Date).getFullYear())+" "+t._s(t.company.companyName)+", All Right\n    Reserved\n  ")])]):t._e()}),[],!1,null,null,null);e.default=component.exports},356:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),n(93),{data:function(){return{time:(new Date).toLocaleTimeString(),user:""}},methods:{formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},getClock:function(){var t=this;setInterval((function(){return t.getTime(new Date)}),1e3)},getTime:function(data){var t=new Date(data),e=t.getHours(),n=t.getMinutes(),r=e>=12?"PM":"AM";return(e=(e%=12)||12)+":"+(n=n<10?"0"+n:n)+" "+r},toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},authenticateUser:function(){this.isAuthenticated?"Admin"==this.user.status&&this.$router.push("/admin"):this.$router.push("/")},getAUser:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:n=e.sent,t.user=n.data.user,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;this.authenticateUser(),this.getAUser(),setInterval((function(){t.time=(new Date).toLocaleTimeString()}),1e3)},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),c=(n(365),n(57)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-29"},[e("div",{staticClass:"div-block-139"}),t._v(" "),e("div",{staticClass:"div-block-26"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"image-44",attrs:{src:"/images/Mam-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("img",{staticClass:"icon",attrs:{src:"/dashboard-images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}})],1),t._v(" "),e("div",{staticClass:"div-block-28"},[e("div",{staticClass:"div-block-140"},[e("img",{staticClass:"image-6",attrs:{src:"/dashboard-images/colored-user-profile.svg",loading:"lazy",alt:""}}),t._v(" "),t.user?e("div",{staticClass:"div-block-141"},[e("div",{staticClass:"text-block-9 _1"},[t._v(t._s(t.user.username))]),t._v(" "),e("div",{staticClass:"text-block-9"},[t._v(t._s(t.user.email))])]):t._e()]),t._v(" "),e("div",{staticClass:"div-block-140"},[e("img",{staticClass:"image-6",attrs:{src:"/dashboard-images/calendar.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"div-block-141"},[e("div",{staticClass:"text-block-9 _1"},[t._v(t._s(t.formatDate(new Date)))]),t._v(" "),e("div",{staticClass:"text-block-9"},[t._v(t._s(t.time))])]),t._v(" "),e("img",{staticClass:"image-46",attrs:{src:"/dashboard-images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}})])])])}),[],!1,null,null,null);e.default=component.exports},357:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(26),n(49),{data:function(){return{route:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},hideDashboardNav:function(){this.$store.commit("HIDE_DASHBOARD_NAV")},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{navState:function(){return this.$store.state.dashboardNavState}},mounted:function(){this.route=this.$route.name,this.hideDashboardNav()},head:function(){return{link:[{rel:"stylesheet",type:"text/css",href:"/css/dashboard.css"}]}}}),c=(n(367),n(57)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"child-d-1",class:{hide:!t.navState}},[e("div",{staticClass:"div-block-18"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"image brand",attrs:{src:"/images/Mam-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}}),t._v(" "),e("div",{staticClass:"div-block-21"},[e("img",{staticClass:"image-2",attrs:{src:"/dashboard-images/close-nav.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}})])],1),t._v(" "),e("div",{staticClass:"div-block-25"},[e("nuxt-link",{staticClass:"div-block-19",class:{blue:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642e191c9a0935e1a449bd_dash-icon%20(1).svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link"},[t._v("Account Balance")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"deposit"==t.route},attrs:{to:"/deposit"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642e38650a2eef0383e3ce_deposit%20(1).svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Make deposit")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"deposit-list"==t.route},attrs:{to:"/deposit-list"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642eabd6ddf0a4ed0edf33_deposit_list.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Deposit List")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"withdrawal"==t.route},attrs:{to:"/withdrawal"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642ecc8b338263ec539dfd_withdraw.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Withdrawal")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"history"==t.route},attrs:{to:"/history"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642f06dfc4d15aa04c5f3c_transaction.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("History")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"earnings"==t.route},attrs:{to:"/earnings"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642f06dfc4d15aa04c5f3c_transaction.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Earnings")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"referral"==t.route},attrs:{to:"/referral"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642f225578cd28b192fc2d_referral.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Referrals")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"profile"==t.route},attrs:{to:"/profile"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642fbdc818cd423ff2d48b_setting.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Profile")])])]),t._v(" "),e("div",{staticClass:"div-block-19",on:{click:t.logout}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642fe0a1bc891dfc0c29c0_logout.svg",loading:"lazy",alt:""}}),t._v(" "),t._m(0)])],1),t._v(" "),t._m(1)])}),[function(){var t=this._self._c;return t("h3",{staticClass:"heading-8"},[t("span",{staticClass:"link-9",attrs:{href:"https://realestatefinancecountry.com/?a=logout"}},[t("strong",{staticClass:"bold-text-17"},[this._v("Logout")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-24"},[e("h3",{staticClass:"heading-9"},[t._v("Support")]),t._v(" "),e("div",{staticClass:"text-block-6"},[e("strong",[t._v("For any enquiries about us")]),t._v("‍"),e("strong",[t._v("Kindly chat us on our live support")])]),t._v(" "),e("div",{staticClass:"div-block-23"},[e("div",{staticClass:"text-block-7"},[t._v("Online Enquiry")])])])}],!1,null,null,null);e.default=component.exports},365:function(t,e,n){"use strict";n(352)},366:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".image-44{min-width:100px}.image-46{min-width:25px}",""]),r.locals={},t.exports=r},367:function(t,e,n){"use strict";n(353)},368:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".div-block-19{cursor:pointer}.image.brand{height:auto;min-width:100px}",""]),r.locals={},t.exports=r},374:function(t,e,n){"use strict";var r=n(2),o=n(3),c=n(60),l=n(238),d=n(237),v=n(4),f=RangeError,h=String,m=Math.floor,_=o(d),C=o("".slice),k=o(1..toFixed),x=function(t,e,n){return 0===e?n:e%2==1?x(t,e-1,n*t):x(t*t,e/2,n)},w=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=m(r/1e7)},y=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=m(n/t),n=n%t*1e7},D=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=h(data[t]);s=""===s?e:s+_("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:v((function(){return"0.000"!==k(8e-5,3)||"1"!==k(.9,0)||"1.25"!==k(1.255,2)||"1000000000000000128"!==k(0xde0b6b3a7640080,0)}))||!v((function(){k({})}))},{toFixed:function(t){var e,n,r,o,d=l(this),v=c(t),data=[0,0,0,0,0,0],m="",k="0";if(v<0||v>20)throw f("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return h(d);if(d<0&&(m="-",d=-d),d>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(d*x(2,69,1))-69)<0?d*x(2,-e,1):d/x(2,e,1),n*=4503599627370496,(e=52-e)>0){for(w(data,0,n),r=v;r>=7;)w(data,1e7,0),r-=7;for(w(data,x(10,r,1),0),r=e-1;r>=23;)y(data,1<<23),r-=23;y(data,1<<r),w(data,1,1),y(data,2),k=D(data)}else w(data,0,n),w(data,1<<-e,0),k=D(data)+_("0",v);return k=v>0?m+((o=k.length)<=v?"0."+_("0",v-o)+k:C(k,0,o-v)+"."+C(k,o-v)):m+k}})},411:function(t,e,n){var content=n(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("cbb0b56c",content,!0,{sourceMap:!1})},448:function(t,e,n){"use strict";n(411)},449:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".div-block-52{overflow:auto}.div-block-48,.div-block-54{min-width:400px}.heading-13{text-align:left;width:33.33%}.text-block-18{text-align:left;width:30%}",""]),r.locals={},t.exports=r},533:function(t,e,n){"use strict";n.r(e);n(374),n(236);var r=n(8),o=(n(49),n(20),n(40),n(11),n(94),n(43),n(42),n(58),n(343),n(354)),c=n(355),l=n(356),d=n(357),v={data:function(){return{totalDeposit:"",totalWithdrawal:"",activeDeposit:"",pendingWithdrawal:"",approvedTransactions:[],transactions:[],user:"",company:"",sort:"-time",limit:5,resultLength:"",currentPage:1,pages:function(){for(var t=[],e=Math.ceil(this.resultLength/this.limit),i=0;i<e;i++)t.push("i");return t}}},methods:{formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},capitalizeWord:function(data){return data.charAt(0).toUpperCase()+data.slice(1)},getVolumes:function(data){var t=this;data.forEach((function(e){"withdrawal"==e._id?t.withdrawal=e.volume:t.deposit=e.volume}))},getActive:function(data){if(0==data.length)return 0;var t=0;return data.forEach((function(e){t+=e.amount})),t},getApprovedTransactions:function(data){if(0==data.length)return 0;var t=[];return data.forEach((function(e){1==e.status&&t.push(e)})),t},getPendingWithdrawal:function(data){if(0==data.length)return 0;var t=0;return data.forEach((function(e){t+=e.pendingWithdrawal})),t},getTotalWithdrawal:function(data){if(0==data.length)return 0;var t=0;return data.forEach((function(e){t+=e.totalWithdrawal})),t},getTotalDeposit:function(data){if(0==data.length)return 0;var t=0;return data.forEach((function(e){t+=1*e.totalDeposit})),t},paginate:function(t){this.currentPage=t,this.getTransactions()},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},getWallets:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/wallet/?username=".concat(t.user.username));case 3:return n=e.sent,e.t0=t,e.next=7,n.data.data;case 7:return e.t1=e.sent,t.totalDeposit=e.t0.getTotalDeposit.call(e.t0,e.t1),e.t2=t,e.next=12,n.data.data;case 12:return e.t3=e.sent,t.totalWithdrawal=e.t2.getTotalWithdrawal.call(e.t2,e.t3),e.t4=t,e.next=17,n.data.data;case 17:e.t5=e.sent,t.pendingWithdrawal=e.t4.getPendingWithdrawal.call(e.t4,e.t5),t.wallets=n.data.data,e.next=25;break;case 22:e.prev=22,e.t6=e.catch(0),console.log(e.t6.response);case 25:case"end":return e.stop()}}),e,null,[[0,22]])})))()},getActiveDeposit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/transactions/active-deposits/?username=".concat(t.user.username,"&limit=60"));case 3:n=e.sent,t.activeDeposit=t.getActive(n.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getTransactions:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="?username=".concat(t.user.username,"&limit=").concat(t.limit,"&sort=").concat(t.sort,"&page=").concat(t.currentPage),e.prev=1,e.next=4,t.$axios.get("/transactions/history/".concat(n));case 4:r=e.sent,t.approvedTransactions=t.getApprovedTransactions(r.data.data),t.transactions=r.data.data,t.resultLength=r.data.resultLength,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.response.data.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},getAUser:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:n=e.sent,t.user=n.data.user,t.getTransactions(),t.getActiveDeposit(),t.getWallets(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},mounted:function(){this.getAUser(),this.getCompany()},computed:{authUser:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}},components:{DashboardFooter:c.default,DashboardNavigation:d.default,DashboardAside:o.default,DashboardHeader:l.default}},f=(n(448),n(57)),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"mother-d"},[e("dashboard-navigation"),t._v(" "),e("div",{staticClass:"child-d-2"},[e("dashboard-header"),t._v(" "),e("div",{staticClass:"div-block-30"}),t._v(" "),e("div",{staticClass:"div-block-32"},[e("div",{staticClass:"div-block-31"},[e("h1",{staticClass:"heading-10"},[t._v("My Balance")]),t._v(" "),e("div",{staticClass:"text-block-10"},[t._v("\n              Untill "+t._s(t.formatDate(new Date))+"\n            ")])])]),t._v(" "),e("div",{staticClass:"div-block-38"},[e("div",{staticClass:"div-block-46 starter"},[t._m(0),t._v(" "),e("div",{staticClass:"text-block-13"},[t._v("\n              $"+t._s(t.formatMoney(Number(t.user.totalBalance).toFixed(2)))+"\n              USD\n            ")]),t._v(" "),e("div",{staticClass:"text-block-14"},[t._v("Total Balance")])]),t._v(" "),e("div",{staticClass:"div-block-46 d"},[t._m(1),t._v(" "),e("div",{staticClass:"text-block-13"},[t._v("\n              $"+t._s(t.formatMoney(Number(t.activeDeposit).toFixed(2)))+"\n              USD\n            ")]),t._v(" "),e("div",{staticClass:"text-block-14"},[t._v("Active Deposits")])]),t._v(" "),e("div",{staticClass:"div-block-46 e"},[t._m(2),t._v(" "),e("div",{staticClass:"text-block-13"},[t._v("\n              $"+t._s(t.formatMoney(Number(t.totalDeposit).toFixed(2)))+" USD\n            ")]),t._v(" "),e("div",{staticClass:"text-block-14"},[t._v("Total Deposits")])]),t._v(" "),e("div",{staticClass:"div-block-46 pending"},[t._m(3),t._v(" "),e("div",{staticClass:"text-block-13"},[t._v("\n              $"+t._s(t.formatMoney(Number(t.pendingWithdrawal).toFixed(2)))+"\n              USD\n            ")]),t._v(" "),e("div",{staticClass:"text-block-14"},[t._v("Pending Withdrawals")])]),t._v(" "),e("div",{staticClass:"div-block-46 total"},[t._m(4),t._v(" "),e("div",{staticClass:"text-block-13"},[t._v("\n              $"+t._s(t.formatMoney(Number(t.totalWithdrawal).toFixed(2)))+"\n              USD\n            ")]),t._v(" "),e("div",{staticClass:"text-block-14"},[t._v("Total Withdrawals")])])]),t._v(" "),t._m(5),t._v(" "),e("div",{staticClass:"div-block-52"},[t._m(6),t._v(" "),e("div",{staticClass:"div-block-50"}),t._v(" "),t._l(t.transactions,(function(n){return e("div",{key:n._id},[e("div",{staticClass:"div-block-54"},[e("div",{staticClass:"text-block-18"},[t._v("\n                "+t._s(t.capitalizeWord(n.transactionType))+"\n              ")]),t._v(" "),e("div",{staticClass:"text-block-18"},[t._v("\n                $"+t._s(t.formatMoney(Number(n.amount).toFixed(2)))+"\n                USD\n              ")]),t._v(" "),t._m(7,!0),t._v(" "),e("div",{staticClass:"text-block-18"},[t._v("\n                "+t._s(t.formatDate(n.time))+"\n              ")])])])}))],2)],1),t._v(" "),e("dashboard-aside")],1)]),t._v(" "),e("dashboard-footer")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-39"},[e("img",{staticClass:"image-9",attrs:{src:"/dashboard-images/total-balance1.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"text-block-15"},[t._v("Rare: 10.3%")])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-39"},[t("img",{staticClass:"image-9",attrs:{src:"/dashboard-images/active-deposit.svg",loading:"lazy",alt:""}}),t("img",{attrs:{src:"/dashboard-images/active-icon.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-39"},[t("img",{staticClass:"image-9",attrs:{src:"/dashboard-images/total-deposit.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-39"},[t("img",{staticClass:"image-9",attrs:{src:"/dashboard-images/pending-withdrawal.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-39"},[t("img",{staticClass:"image-9",attrs:{src:"/dashboard-images/hand-usd.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-42"},[t("h1",{staticClass:"heading-12"},[this._v("Recent Activity")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-48"},[e("h2",{staticClass:"heading-13"},[t._v("TRANSACTION")]),t._v(" "),e("h3",{staticClass:"heading-13"},[t._v("AMOUNT")]),t._v(" "),e("h3",{staticClass:"heading-13"},[t._v("DATE")])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-53"},[t("img",{staticClass:"image-13 dot",attrs:{src:"/dashboard-images/colored-dot.svg",loading:"lazy",alt:""}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardNavigation:n(357).default,DashboardHeader:n(356).default,DashboardAside:n(354).default,DashboardFooter:n(355).default})}}]);