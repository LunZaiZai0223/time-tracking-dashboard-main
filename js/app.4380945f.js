(function(){"use strict";var e={5809:function(e,t,r){var i=r(9242),n=r(3396);const a={class:"container"},o=(0,n._)("footer",{class:"footer"},[(0,n._)("p",null,[(0,n.Uk)(" Challenge by "),(0,n._)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank"},"Frontend Mentor"),(0,n.Uk)(". Coded by "),(0,n._)("a",{href:"https://github.com/LunZaiZai0223",target:"_blank"},"LunZaiZai0223"),(0,n.Uk)(". ")])],-1);function s(e,t,r,i,s,c){const l=(0,n.up)("main-card"),u=(0,n.up)("sub-card");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(l,{onSelectTimeState:c.selectTimeState},null,8,["onSelectTimeState"]),(0,n.Wm)(u),o])}var c=r(7139),l=r.p+"img/image-jeremy.8e0382f0.png";const u=e=>((0,n.dD)("data-v-11b271e0"),e=e(),(0,n.Cn)(),e),m={class:"profile"},d={class:"profile-body"},f=u((()=>(0,n._)("img",{class:"profile-body-avatar",src:l,alt:"avatar-jeremy"},null,-1))),p={class:"profile-body-text"},v={class:"profile-body-text-title"},y={class:"profile-body-text-name"},g={class:"button-list"},h=["onClick"];function w(e,t,r,i,a,o){return(0,n.wg)(),(0,n.iD)("section",null,[(0,n._)("div",m,[(0,n._)("div",d,[f,(0,n._)("h1",p,[(0,n._)("span",v,(0,c.zw)(a.title),1),(0,n._)("span",y,[(0,n.Uk)((0,c.zw)(a.firstname)+" ",1),(0,n._)("span",null,(0,c.zw)(a.lastname),1)])])]),(0,n._)("ul",g,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.timeStateList,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{class:"button-item",key:t,onClick:t=>o.selectTimeState(e)},[(0,n._)("span",{class:(0,c.C_)({"is-active":o.setIsActiveClass(e)})},(0,c.zw)(e),3)],8,h)))),128))])])])}var k={name:"MainCard",emits:["select-time-state"],inject:["timeState"],data(){return{title:"Report for",lastname:"Robson",firstname:"Jeremy",timeStateList:["Daily","Weekly","Monthly"],timeStateLocal:this.timeState}},methods:{selectTimeState(e){this.$emit("select-time-state",e.toLowerCase())},setIsActiveClass(e){return e.toLowerCase()===this.timeStateLocal}}},b=r(89);const _=(0,b.Z)(k,[["render",w],["__scopeId","data-v-11b271e0"]]);var S=_;const C={key:0};function D(e,t,r,i,a,o){const s=(0,n.up)("card-item");return o.hasReceivedData?((0,n.wg)(),(0,n.iD)("ul",C,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.list,(({title:e,timeframes:t,color:r},i)=>((0,n.wg)(),(0,n.iD)("li",{key:i},[(0,n.Wm)(s,{title:e,timeframes:t,icon:i,color:r},null,8,["title","timeframes","icon","color"])])))),128))])):(0,n.kq)("",!0)}var I=r.p+"img/icon-ellipsis.569fff1c.svg";const L=e=>((0,n.dD)("data-v-e8898854"),e=e(),(0,n.Cn)(),e),j={class:"card-header"},O={class:"card-icon"},x=["src"],T=["src"],Z=["src"],q=["src"],z=["src"],M=["src"],W={class:"card-body"},P={class:"card-body-header"},R=L((()=>(0,n._)("div",null,[(0,n._)("img",{src:I,alt:"ellipsis icon"})],-1))),U={class:"card-body-content"},$=L((()=>(0,n._)("span",null,"hrs",-1))),A={class:"card-body-footer"};function F(e,t,r,i,a,o){return(0,n.wg)(),(0,n.iD)("div",{class:"card-wrapper",style:(0,c.j5)({"background-color":r.color})},[(0,n._)("div",j,[(0,n._)("div",O,[0===r.icon?((0,n.wg)(),(0,n.iD)("img",{key:0,src:a.workIcon,alt:"icon"},null,8,x)):(0,n.kq)("",!0),1===r.icon?((0,n.wg)(),(0,n.iD)("img",{key:1,src:a.playIcon,alt:"icon"},null,8,T)):(0,n.kq)("",!0),2===r.icon?((0,n.wg)(),(0,n.iD)("img",{key:2,src:a.studyIcon,alt:"icon"},null,8,Z)):(0,n.kq)("",!0),3===r.icon?((0,n.wg)(),(0,n.iD)("img",{key:3,src:a.exerciseIcon,alt:"icon"},null,8,q)):(0,n.kq)("",!0),4===r.icon?((0,n.wg)(),(0,n.iD)("img",{key:4,src:a.socialIcon,alt:"icon"},null,8,z)):(0,n.kq)("",!0),5===r.icon?((0,n.wg)(),(0,n.iD)("img",{key:5,src:a.selfCareIcon,alt:"icon"},null,8,M)):(0,n.kq)("",!0)])]),(0,n._)("div",W,[(0,n._)("header",P,[(0,n._)("p",null,(0,c.zw)(r.title),1),R]),(0,n._)("div",U,[(0,n._)("p",null,[(0,n.Uk)((0,c.zw)(o.getCurrentData),1),$]),(0,n._)("footer",A,(0,c.zw)(o.getPreviousData),1)])])],4)}var E=r.p+"img/icon-work.5c99de8b.svg",H=r.p+"img/icon-play.298c881d.svg",K=r.p+"img/icon-study.78912771.svg",Y=r.p+"img/icon-exercise.3ad7219e.svg",J=r.p+"img/icon-social.16e77c18.svg",N=r.p+"img/icon-self-care.fc8a34f5.svg",B={name:"CardItem",inject:["timeState"],props:{title:{type:String,default:""},timeframes:{type:Object,default(){return{}}},color:{type:String,default:""},icon:{type:Number,default:0}},data(){return{workIcon:E,playIcon:H,studyIcon:K,exerciseIcon:Y,socialIcon:J,selfCareIcon:N}},computed:{lowerCaseTimeState(){return this.timeState.toLowerCase()},getPreviousData(){const e=this.lowerCaseTimeState;return"daily"===e?`Last Day - ${this.timeframes[e].previous}hrs`:"weekly"===e?`Last Week - ${this.timeframes[e].previous}hrs`:"monthly"===e?`Last Month - ${this.timeframes[e].previous}hrs`:null},getCurrentData(){const e=this.lowerCaseTimeState;return this.timeframes[e].current}}};const G=(0,b.Z)(B,[["render",F],["__scopeId","data-v-e8898854"]]);var Q=G,V={name:"SubCard",components:{CardItem:Q},data(){return{list:[],colorList:["#ff8c66","#56c2e6","#ff5c7c","#4acf81","#7536d3","#f1c65b"],data:[{title:"Work",timeframes:{daily:{current:5,previous:7},weekly:{current:32,previous:36},monthly:{current:103,previous:128}}},{title:"Play",timeframes:{daily:{current:1,previous:2},weekly:{current:10,previous:8},monthly:{current:23,previous:29}}},{title:"Study",timeframes:{daily:{current:0,previous:1},weekly:{current:4,previous:7},monthly:{current:13,previous:19}}},{title:"Exercise",timeframes:{daily:{current:1,previous:1},weekly:{current:4,previous:5},monthly:{current:11,previous:18}}},{title:"Social",timeframes:{daily:{current:1,previous:3},weekly:{current:5,previous:10},monthly:{current:21,previous:23}}},{title:"Self Care",timeframes:{daily:{current:0,previous:1},weekly:{current:2,previous:2},monthly:{current:7,previous:11}}}]}},computed:{hasReceivedData(){return this.list.length>0}},methods:{setDataList(e,t){this.list=e.map(((e,r)=>Object.assign(e,{color:t[r]})))}},mounted(){this.setDataList(this.data,this.colorList),console.log(this.list)}};const X=(0,b.Z)(V,[["render",D],["__scopeId","data-v-6ee92217"]]);var ee=X,te={name:"App",components:{MainCard:S,SubCard:ee},data(){return{timeState:"daily"}},provide(){return{timeState:(0,n.Fl)((()=>this.timeState))}},methods:{selectTimeState(e){this.timeState=e}}};const re=(0,b.Z)(te,[["render",s]]);var ie=re;const ne=(0,i.ri)(ie);ne.mount("#app"),ne.config.unwrapInjectedRef=!0}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,i,n,a){if(!i){var o=1/0;for(u=0;u<e.length;u++){i=e[u][0],n=e[u][1],a=e[u][2];for(var s=!0,c=0;c<i.length;c++)(!1&a||o>=a)&&Object.keys(r.O).every((function(e){return r.O[e](i[c])}))?i.splice(c--,1):(s=!1,a<o&&(o=a));if(s){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[i,n,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/time-tracking-dashboard-main/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,a,o=i[0],s=i[1],c=i[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(c)var u=c(r)}for(t&&t(i);l<o.length;l++)a=o[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},i=self["webpackChunktime_tracking_dashboard_main"]=self["webpackChunktime_tracking_dashboard_main"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(5809)}));i=r.O(i)})();
//# sourceMappingURL=app.4380945f.js.map