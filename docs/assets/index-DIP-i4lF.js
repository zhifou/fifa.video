import{B as ee,v as fe,E as de,F as pe,r as g,G as z,f as ve,o as ie,d as se,C as ue,c as ge,H as Te,R as oe,J as ye,e as be,K as we,M as C}from"./index-BksNmbZj.js";function D(){D=function(){return o};var e,o={},a=Object.prototype,c=a.hasOwnProperty,m=Object.defineProperty||function(n,t,r){n[t]=r.value},d=typeof Symbol=="function"?Symbol:{},v=d.iterator||"@@iterator",w=d.asyncIterator||"@@asyncIterator",T=d.toStringTag||"@@toStringTag";function h(n,t,r){return Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{h({},"")}catch{h=function(r,i,u){return r[i]=u}}function p(n,t,r,i){var u=t&&t.prototype instanceof j?t:j,s=Object.create(u.prototype),l=new M(i||[]);return m(s,"_invoke",{value:K(n,r,l)}),s}function L(n,t,r){try{return{type:"normal",arg:n.call(t,r)}}catch(i){return{type:"throw",arg:i}}}o.wrap=p;var O="suspendedStart",V="suspendedYield",Y="executing",A="completed",_={};function j(){}function P(){}function R(){}var W={};h(W,v,function(){return this});var U=Object.getPrototypeOf,y=U&&U(U(Q([])));y&&y!==a&&c.call(y,v)&&(W=y);var f=R.prototype=j.prototype=Object.create(W);function x(n){["next","throw","return"].forEach(function(t){h(n,t,function(r){return this._invoke(t,r)})})}function S(n,t){function r(u,s,l,b){var E=L(n[u],n,s);if(E.type!=="throw"){var k=E.arg,N=k.value;return N&&ee(N)=="object"&&c.call(N,"__await")?t.resolve(N.__await).then(function(I){r("next",I,l,b)},function(I){r("throw",I,l,b)}):t.resolve(N).then(function(I){k.value=I,l(k)},function(I){return r("throw",I,l,b)})}b(E.arg)}var i;m(this,"_invoke",{value:function(s,l){function b(){return new t(function(E,k){r(s,l,E,k)})}return i=i?i.then(b,b):b()}})}function K(n,t,r){var i=O;return function(u,s){if(i===Y)throw Error("Generator is already running");if(i===A){if(u==="throw")throw s;return{value:e,done:!0}}for(r.method=u,r.arg=s;;){var l=r.delegate;if(l){var b=q(l,r);if(b){if(b===_)continue;return b}}if(r.method==="next")r.sent=r._sent=r.arg;else if(r.method==="throw"){if(i===O)throw i=A,r.arg;r.dispatchException(r.arg)}else r.method==="return"&&r.abrupt("return",r.arg);i=Y;var E=L(n,t,r);if(E.type==="normal"){if(i=r.done?A:V,E.arg===_)continue;return{value:E.arg,done:r.done}}E.type==="throw"&&(i=A,r.method="throw",r.arg=E.arg)}}}function q(n,t){var r=t.method,i=n.iterator[r];if(i===e)return t.delegate=null,r==="throw"&&n.iterator.return&&(t.method="return",t.arg=e,q(n,t),t.method==="throw")||r!=="return"&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),_;var u=L(i,n.iterator,t.arg);if(u.type==="throw")return t.method="throw",t.arg=u.arg,t.delegate=null,_;var s=u.arg;return s?s.done?(t[n.resultName]=s.value,t.next=n.nextLoc,t.method!=="return"&&(t.method="next",t.arg=e),t.delegate=null,_):s:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,_)}function J(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function G(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function M(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(J,this),this.reset(!0)}function Q(n){if(n||n===""){var t=n[v];if(t)return t.call(n);if(typeof n.next=="function")return n;if(!isNaN(n.length)){var r=-1,i=function u(){for(;++r<n.length;)if(c.call(n,r))return u.value=n[r],u.done=!1,u;return u.value=e,u.done=!0,u};return i.next=i}}throw new TypeError(ee(n)+" is not iterable")}return P.prototype=R,m(f,"constructor",{value:R,configurable:!0}),m(R,"constructor",{value:P,configurable:!0}),P.displayName=h(R,T,"GeneratorFunction"),o.isGeneratorFunction=function(n){var t=typeof n=="function"&&n.constructor;return!!t&&(t===P||(t.displayName||t.name)==="GeneratorFunction")},o.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,R):(n.__proto__=R,h(n,T,"GeneratorFunction")),n.prototype=Object.create(f),n},o.awrap=function(n){return{__await:n}},x(S.prototype),h(S.prototype,w,function(){return this}),o.AsyncIterator=S,o.async=function(n,t,r,i,u){u===void 0&&(u=Promise);var s=new S(p(n,t,r,i),u);return o.isGeneratorFunction(t)?s:s.next().then(function(l){return l.done?l.value:s.next()})},x(f),h(f,T,"Generator"),h(f,v,function(){return this}),h(f,"toString",function(){return"[object Generator]"}),o.keys=function(n){var t=Object(n),r=[];for(var i in t)r.push(i);return r.reverse(),function u(){for(;r.length;){var s=r.pop();if(s in t)return u.value=s,u.done=!1,u}return u.done=!0,u}},o.values=Q,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(G),!t)for(var r in this)r.charAt(0)==="t"&&c.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if(t.type==="throw")throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(k,N){return l.type="throw",l.arg=t,r.next=k,N&&(r.method="next",r.arg=e),!!N}for(var u=this.tryEntries.length-1;u>=0;--u){var s=this.tryEntries[u],l=s.completion;if(s.tryLoc==="root")return i("end");if(s.tryLoc<=this.prev){var b=c.call(s,"catchLoc"),E=c.call(s,"finallyLoc");if(b&&E){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(b){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!E)throw Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(t,r){for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i];if(u.tryLoc<=this.prev&&c.call(u,"finallyLoc")&&this.prev<u.finallyLoc){var s=u;break}}s&&(t==="break"||t==="continue")&&s.tryLoc<=r&&r<=s.finallyLoc&&(s=null);var l=s?s.completion:{};return l.type=t,l.arg=r,s?(this.method="next",this.next=s.finallyLoc,_):this.complete(l)},complete:function(t,r){if(t.type==="throw")throw t.arg;return t.type==="break"||t.type==="continue"?this.next=t.arg:t.type==="return"?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):t.type==="normal"&&r&&(this.next=r),_},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),G(i),_}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc===t){var u=i.completion;if(u.type==="throw"){var s=u.arg;G(i)}return s}}throw Error("illegal catch attempt")},delegateYield:function(t,r,i){return this.delegate={iterator:Q(t),resultName:r,nextLoc:i},this.method==="next"&&(this.arg=e),_}},o}function ne(e,o,a,c,m,d,v){try{var w=e[d](v),T=w.value}catch(h){return void a(h)}w.done?o(T):Promise.resolve(T).then(c,m)}function ce(e){return function(){var o=this,a=arguments;return new Promise(function(c,m){var d=e.apply(o,a);function v(T){ne(d,c,m,v,w,"next",T)}function w(T){ne(d,c,m,v,w,"throw",T)}v(void 0)})}}var F=fe({},de),Ee=F.version,_e=F.render,Se=F.unmountComponentAtNode,H;try{var Le=Number((Ee||"").split(".")[0]);Le>=18&&(H=F.createRoot)}catch{}function ae(e){var o=F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;o&&ee(o)==="object"&&(o.usingClientEntryPoint=e)}var B="__rc_react_root__";function Re(e,o){ae(!0);var a=o[B]||H(o);ae(!1),a.render(e),o[B]=a}function xe(e,o){_e(e,o)}function Ce(e,o){if(H){Re(e,o);return}xe(e,o)}function Oe(e){return te.apply(this,arguments)}function te(){return te=ce(D().mark(function e(o){return D().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",Promise.resolve().then(function(){var m;(m=o[B])===null||m===void 0||m.unmount(),delete o[B]}));case 1:case"end":return c.stop()}},e)})),te.apply(this,arguments)}function Ne(e){Se(e)}function ke(e){return re.apply(this,arguments)}function re(){return re=ce(D().mark(function e(o){return D().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(H===void 0){c.next=2;break}return c.abrupt("return",Oe(o));case 2:Ne(o);case 3:case"end":return c.stop()}},e)})),re.apply(this,arguments)}const Ie=e=>{const{componentCls:o,colorPrimary:a}=e;return{[o]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${a})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${e.motionEaseOutCirc}`,`opacity 2s ${e.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0},"&.wave-quick":{transition:[`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`,`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")}}}}},Ae=pe("Wave",e=>[Ie(e)]),me="ant-wave-target";function Pe(e){const o=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return o&&o[1]&&o[2]&&o[3]?!(o[1]===o[2]&&o[2]===o[3]):!0}function X(e){return e&&e!=="#fff"&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&e!=="rgba(255, 255, 255, 1)"&&Pe(e)&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&e!=="transparent"}function We(e){const{borderTopColor:o,borderColor:a,backgroundColor:c}=getComputedStyle(e);return X(o)?o:X(a)?a:X(c)?c:null}function Z(e){return Number.isNaN(e)?0:e}const $e=e=>{const{className:o,target:a,component:c}=e,m=g.useRef(null),[d,v]=g.useState(null),[w,T]=g.useState([]),[h,p]=g.useState(0),[L,O]=g.useState(0),[V,Y]=g.useState(0),[A,_]=g.useState(0),[j,P]=g.useState(!1),R={left:h,top:L,width:V,height:A,borderRadius:w.map(y=>`${y}px`).join(" ")};d&&(R["--wave-color"]=d);function W(){const y=getComputedStyle(a);v(We(a));const f=y.position==="static",{borderLeftWidth:x,borderTopWidth:S}=y;p(f?a.offsetLeft:Z(-parseFloat(x))),O(f?a.offsetTop:Z(-parseFloat(S))),Y(a.offsetWidth),_(a.offsetHeight);const{borderTopLeftRadius:K,borderTopRightRadius:q,borderBottomLeftRadius:J,borderBottomRightRadius:G}=y;T([K,q,G,J].map(M=>Z(parseFloat(M))))}if(g.useEffect(()=>{if(a){const y=z(()=>{W(),P(!0)});let f;return typeof ResizeObserver<"u"&&(f=new ResizeObserver(W),f.observe(a)),()=>{z.cancel(y),f==null||f.disconnect()}}},[]),!j)return null;const U=(c==="Checkbox"||c==="Radio")&&(a==null?void 0:a.classList.contains(me));return g.createElement(ve,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(y,f)=>{var x;if(f.deadline||f.propertyName==="opacity"){const S=(x=m.current)===null||x===void 0?void 0:x.parentElement;ke(S).then(()=>{S==null||S.remove()})}return!1}},(y,f)=>{let{className:x}=y;return g.createElement("div",{ref:ie(m,f),className:se(o,{"wave-quick":U},x),style:R})})},je=(e,o)=>{var a;const{component:c}=o;if(c==="Checkbox"&&!(!((a=e.querySelector("input"))===null||a===void 0)&&a.checked))return;const m=document.createElement("div");m.style.position="absolute",m.style.left="0px",m.style.top="0px",e==null||e.insertBefore(m,e==null?void 0:e.firstChild),Ce(g.createElement($e,Object.assign({},o,{target:e})),m)},Ue=(e,o,a)=>{const{wave:c}=g.useContext(ue),[,m,d]=ge(),v=Te(h=>{const p=e.current;if(c!=null&&c.disabled||!p)return;const L=p.querySelector(`.${me}`)||p,{showEffect:O}=c||{};(O||je)(L,{className:o,token:m,component:a,event:h,hashId:d})}),w=g.useRef();return h=>{z.cancel(w.current),w.current=z(()=>{v(h)})}},Xe=e=>{const{children:o,disabled:a,component:c}=e,{getPrefixCls:m}=g.useContext(ue),d=g.useRef(null),v=m("wave"),[,w]=Ae(v),T=Ue(d,se(v,w),c);if(oe.useEffect(()=>{const p=d.current;if(!p||p.nodeType!==1||a)return;const L=O=>{!we(O.target)||!p.getAttribute||p.getAttribute("disabled")||p.disabled||p.className.includes("disabled")||p.className.includes("-leave")||T(O)};return p.addEventListener("click",L,!0),()=>{p.removeEventListener("click",L,!0)}},[a]),!oe.isValidElement(o))return o??null;const h=ye(o)?ie(o.ref,d):d;return be(o,{ref:h})};var $=(e=>(e.unStarted="unStarted",e.inprogress="inprogress",e.finish="finish",e.history="history",e))($||{});const Ze={unStarted:"即将开始",inprogress:"正在直播",finish:"赛事结束",history:"历史赛事"},le=e=>{const o=C(e);let a=$.unStarted;return o.isAfter(C())?a=$.unStarted:o.isBefore(C())&&o.add(2.5,"hour").isAfter(C())?a=$.inprogress:o.add(2.5,"hour").isBefore(C())&&o.add(1,"year").isAfter(C())?a=$.finish:a=$.history,e==="2024-06-22 21:00"&&(console.log("1111",o.isBefore(C()),o.add(2.5,"hour").isAfter(C())),console.log(22,a)),a},Ge="欧洲杯",Me="europe-cup",De=2024,Fe=e=>`/${Me}/${De}/${e}`,Ye=[{homeTeam:"德国",guestTeam:"苏格兰",time:"2024-06-15 03:00"},{homeTeam:"匈牙利",guestTeam:"瑞士",time:"2024-06-15 21:00"},{homeTeam:"西班牙",guestTeam:"克罗地亚",time:"2024-06-16 00:00"},{homeTeam:"意大利",guestTeam:"阿尔巴尼亚",time:"2024-06-16 03:00"},{homeTeam:"波兰",guestTeam:"荷兰",time:"2024-06-16 21:00"},{homeTeam:"斯洛文尼亚",guestTeam:"丹麦",time:"2024-06-17 00:00"},{homeTeam:"塞尔维亚",guestTeam:"英格兰",time:"2024-06-17 03:00"},{homeTeam:"罗马尼亚",guestTeam:"乌克兰",time:"2024-06-17 21:00"},{homeTeam:"比利时",guestTeam:"斯洛伐克",time:"2024-06-18 00:00"},{homeTeam:"奥地利",guestTeam:"法国",time:"2024-06-18 03:00"},{homeTeam:"土耳其",guestTeam:"格鲁吉亚",time:"2024-06-19 00:00"},{homeTeam:"葡萄牙",guestTeam:"捷克",time:"2024-06-19 03:00"},{homeTeam:"克罗地亚",guestTeam:"阿尔巴尼亚",time:"2024-06-19 21:00"},{homeTeam:"德国",guestTeam:"匈牙利",time:"2024-06-20 00:00"},{homeTeam:"苏格兰",guestTeam:"瑞士",time:"2024-06-20 03:00"},{homeTeam:"斯洛文尼亚",guestTeam:"塞尔维亚",time:"2024-06-20 21:00"},{homeTeam:"丹麦",guestTeam:"英格兰",time:"2024-06-21 00:00"},{homeTeam:"西班牙",guestTeam:"意大利",time:"2024-06-21 03:00"},{homeTeam:"斯洛伐克",guestTeam:"乌克兰",time:"2024-06-21 21:00"},{homeTeam:"波兰",guestTeam:"奥地利",time:"2024-06-22 00:00"},{homeTeam:"荷兰",guestTeam:"法国",time:"2024-06-22 03:00"},{homeTeam:"格鲁吉亚",guestTeam:"捷克",time:"2024-06-22 21:00"},{homeTeam:"土耳其",guestTeam:"葡萄牙",time:"2024-06-23 00:00"},{homeTeam:"比利时",guestTeam:"罗马尼亚",time:"2024-06-23 03:00"},{homeTeam:"苏格兰",guestTeam:"匈牙利",time:"2024-06-24 03:00"},{homeTeam:"瑞士",guestTeam:"德国",time:"2024-06-24 03:00"},{homeTeam:"阿尔巴尼亚",guestTeam:"西班牙",time:"2024-06-25 03:00"},{homeTeam:"克罗地亚",guestTeam:"意大利",time:"2024-06-25 03:00"},{homeTeam:"荷兰",guestTeam:"奥地利",time:"2024-06-26 00:00"},{homeTeam:"法国",guestTeam:"荷兰",time:"2024-06-26 00:00"},{homeTeam:"丹麦",guestTeam:"塞尔维亚",time:"2024-06-26 03:00"},{homeTeam:"英格兰",guestTeam:"斯洛文尼亚",time:"2024-06-26 03:00"},{homeTeam:"斯洛伐克",guestTeam:"罗马尼亚",time:"2024-06-27 00:00"},{homeTeam:"乌克兰",guestTeam:"比利时",time:"2024-06-27 00:00"},{homeTeam:"捷克",guestTeam:"土耳其",time:"2024-06-27 03:00"},{homeTeam:"格鲁吉亚",guestTeam:"葡萄牙",time:"2024-06-27 03:00"}],qe=Ye.map((e,o)=>{const a=C(e.time).format("YYYYMMDDHHmm")+o;return{...e,value:a,type:Ge,url:Fe(a)}}),ze="美洲杯",Be="america-cup",He=2024,Ve=e=>`/${Be}/${He}/${e}`,Ke=[{homeTeam:"阿根廷",guestTeam:"加拿大",time:"2024-06-21 08:00"},{homeTeam:"秘鲁",guestTeam:"智利",time:"2024-06-22 08:00"},{homeTeam:"厄瓜多尔",guestTeam:"委内瑞拉",time:"2024-06-23 06:00"},{homeTeam:"墨西哥",guestTeam:"牙买加",time:"2024-06-23 09:00"},{homeTeam:"美国",guestTeam:"玻利维亚",time:"2024-06-24 06:00"},{homeTeam:"乌拉圭",guestTeam:"巴拿马",time:"2024-06-24 09:00"},{homeTeam:"哥伦比亚",guestTeam:"巴拉圭",time:"2024-06-25 06:00"},{homeTeam:"巴西",guestTeam:"哥斯达黎加",time:"2024-06-25 09:00"},{homeTeam:"秘鲁",guestTeam:"加拿大",time:"2024-06-26 06:00"},{homeTeam:"智利",guestTeam:"阿根廷",time:"2024-06-26 09:00"},{homeTeam:"厄瓜多尔",guestTeam:"牙买加",time:"2024-06-27 06:00"},{homeTeam:"委内瑞拉",guestTeam:"墨西哥",time:"2024-06-27 09:00"},{homeTeam:"巴拿马",guestTeam:"美国",time:"2024-06-28 06:00"},{homeTeam:"乌拉圭",guestTeam:"玻利维亚",time:"2024-06-28 09:00"},{homeTeam:"哥伦比亚",guestTeam:"哥斯达黎加",time:"2024-06-29 06:00"},{homeTeam:"巴拉圭",guestTeam:"巴西",time:"2024-06-29 09:00"},{homeTeam:"阿根廷",guestTeam:"秘鲁",time:"2024-06-30 08:00"},{homeTeam:"加拿大",guestTeam:"智利",time:"2024-06-30 08:00"},{homeTeam:"牙买加",guestTeam:"委内瑞拉",time:"2024-07-01 08:00"},{homeTeam:"墨西哥",guestTeam:"厄瓜多尔",time:"2024-07-01 08:00"},{homeTeam:"美国",guestTeam:"乌拉圭",time:"2024-07-02 09:00"},{homeTeam:"玻利维亚",guestTeam:"巴拿马",time:"2024-07-02 09:00"},{homeTeam:"巴西",guestTeam:"哥伦比亚",time:"2024-07-03 09:00"},{homeTeam:"哥斯达黎加",guestTeam:"巴拉圭",time:"2024-07-03 09:00"}],Je=Ke.map((e,o)=>{const a=C(e.time).format("YYYYMMDDHHmm")+o;return{...e,value:a,type:ze,url:Ve(a)}}),he=[{label:"高清直播",value:"leqiu67",url:"https://www.leqiu67.vip/#/"},{label:"悟空直播",value:"wk03",url:"https://wk03.tv/#/"},{label:"酷球直播",value:"kuqiuwl",url:"https://kuqiuwl.cc/main"},{label:"爱看直播高清",value:"akzb4",url:"https://akzb4.top/"},{label:"833欧洲杯直播",value:"833zb95",url:"https://833zb95.app/pc/#/home"},{label:"欧洲杯直播",value:"9uzb5",url:"https://9uzb5.cc/"},{label:"小九直播",value:"iqv9w",url:"https://www.iqv9w.click/main?channel_code=aann"},{label:"免费直播",value:"178tiyu6",url:"https://178tiyu6.com/"}],et={2024:qe.map(e=>({...e,status:le(e.time),lives:he}))},tt={2024:Je.map(e=>({...e,status:le(e.time),lives:he}))};export{tt as A,et as E,$ as M,Xe as W,Ze as a};