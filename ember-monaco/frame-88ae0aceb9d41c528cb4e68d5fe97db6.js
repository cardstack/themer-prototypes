var runtime=function(e){"use strict"
var t,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag"
function u(e,t,n,r){var o=t&&t.prototype instanceof p?t:p,a=Object.create(o.prototype),i=new I(r||[])
return a._invoke=function(e,t,n){var r=s
return function(o,a){if(r===f)throw new Error("Generator is already running")
if(r===h){if("throw"===o)throw a
return x()}for(n.method=o,n.arg=a;;){var i=n.delegate
if(i){var c=N(i,n)
if(c){if(c===m)continue
return c}}if("next"===n.method)n.sent=n._sent=n.arg
else if("throw"===n.method){if(r===s)throw r=h,n.arg
n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg)
r=f
var u=l(e,t,n)
if("normal"===u.type){if(r=n.done?h:d,u.arg===m)continue
return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}(e,n,i),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(r){return{type:"throw",arg:r}}}e.wrap=u
var s="suspendedStart",d="suspendedYield",f="executing",h="completed",m={}
function p(){}function v(){}function y(){}var g={}
g[a]=function(){return this}
var E=Object.getPrototypeOf,w=E&&E(E(L([])))
w&&w!==n&&r.call(w,a)&&(g=w)
var _=y.prototype=p.prototype=Object.create(g)
function O(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function T(e){var t
this._invoke=function(n,o){function a(){return new Promise((function(t,a){(function t(n,o,a,i){var c=l(e[n],e,o)
if("throw"!==c.type){var u=c.arg,s=u.value
return s&&"object"==typeof s&&r.call(s,"__await")?Promise.resolve(s.__await).then((function(e){t("next",e,a,i)}),(function(e){t("throw",e,a,i)})):Promise.resolve(s).then((function(e){u.value=e,a(u)}),(function(e){return t("throw",e,a,i)}))}i(c.arg)})(n,o,t,a)}))}return t=t?t.then(a,a):a()}}function N(e,n){var r=e.iterator[n.method]
if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,N(e,n),"throw"===n.method))return m
n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,e.iterator,n.arg)
if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m
var a=o.arg
return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function R(e){var t={tryLoc:e[0]}
1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{}
t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(R,this),this.reset(!0)}function L(e){if(e){var n=e[a]
if(n)return n.call(e)
if("function"==typeof e.next)return e
if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n
return n.value=t,n.done=!0,n}
return i.next=i}}return{next:x}}function x(){return{value:t,done:!0}}return v.prototype=_.constructor=y,y.constructor=v,y[c]=v.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor
return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},O(T.prototype),T.prototype[i]=function(){return this},e.AsyncIterator=T,e.async=function(t,n,r,o){var a=new T(u(t,n,r,o))
return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},O(_),_[c]="Generator",_[a]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[]
for(var n in e)t.push(n)
return t.reverse(),function n(){for(;t.length;){var r=t.pop()
if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=L,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0
var e=this.tryEntries[0].completion
if("throw"===e.type)throw e.arg
return this.rval},dispatchException:function(e){if(this.done)throw e
var n=this
function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion
if("root"===i.tryLoc)return o("end")
if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc")
if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)
if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally")
if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n]
if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o
break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null)
var i=a?a.completion:{}
return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg
return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t]
if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t]
if(n.tryLoc===e){var r=n.completion
if("throw"===r.type){var o=r.arg
C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:L(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}("object"==typeof module?module.exports:{})
try{regeneratorRuntime=runtime}catch(accidentalStrictMode){Function("r","regeneratorRuntime = r")(runtime)}(function(){"use strict"
var e,t,n=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ERR_IFRAME_ALREADY_ATTACHED_TO_DOM=t.ERR_NOT_IN_IFRAME=t.ERR_CONNECTION_TIMEOUT=t.ERR_CONNECTION_DESTROYED=void 0
var n="message"
t.ERR_CONNECTION_DESTROYED="ConnectionDestroyed"
t.ERR_CONNECTION_TIMEOUT="ConnectionTimeout"
t.ERR_NOT_IN_IFRAME="NotInIframe"
t.ERR_IFRAME_ALREADY_ATTACHED_TO_DOM="IframeAlreadyAttachedToDom"
var r,o={"http:":"80","https:":"443"},a=/^(https?:|file:)?\/\/([^/:]+)?(:(\d+))?/,i={ERR_CONNECTION_DESTROYED:"ConnectionDestroyed",ERR_CONNECTION_TIMEOUT:"ConnectionTimeout",ERR_NOT_IN_IFRAME:"NotInIframe",ERR_IFRAME_ALREADY_ATTACHED_TO_DOM:"IframeAlreadyAttachedToDom",Promise:function(){try{return window?window.Promise:null}catch(e){return null}}(),debug:!1},c=(r=0,function(){return++r}),u=function(){if(i.debug){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];(e=console).log.apply(e,["[Penpal]"].concat(n))}},l=function(e){var t=[]
return e((function(){t.forEach((function(e){e()}))})),{then:function(e){t.push(e)}}},s=function(e){return{name:e.name,message:e.message,stack:e.stack}},d=function(e){var t=new Error
return Object.keys(e).forEach((function(n){return t[n]=e[n]})),t},f=function(e,t,r,o,a){var l=t.localName,s=t.local,f=t.remote,h=t.remoteOrigin,m=!1
u("".concat(l,": Connecting call sender"))
a.then((function(){m=!0})),r.reduce((function(e,t){return e[t]=function(e){return function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a]
if(u("".concat(l,": Sending ").concat(e,"() call")),f.closed&&o(),m){var p=new Error("Unable to send ".concat(e,"() call due ")+"to destroyed connection")
throw p.code="ConnectionDestroyed",p}return new i.Promise((function(t,o){var a=c()
s.addEventListener(n,(function r(i){if(i.source===f&&i.origin===h&&"reply"===i.data.penpal&&i.data.id===a){u("".concat(l,": Received ").concat(e,"() reply")),s.removeEventListener(n,r)
var c=i.data.returnValue
i.data.returnValueIsError&&(c=d(c)),("fulfilled"===i.data.resolution?t:o)(c)}})),f.postMessage({penpal:"call",id:a,methodName:e,args:r},h)}))}}(t),e}),e)},h=function(e,t,r){var o=e.localName,a=e.local,c=e.remote,l=e.remoteOrigin,d=!1
u("".concat(o,": Connecting call receiver"))
var f=function(e){if(e.source===c&&e.origin===l&&"call"===e.data.penpal){var n=e.data,r=n.methodName,a=n.args,f=n.id
if(u("".concat(o,": Received ").concat(r,"() call")),r in t){var h=function(e){return function(t){if(u("".concat(o,": Sending ").concat(r,"() reply")),d)u("".concat(o,": Unable to send ").concat(r,"() reply due to destroyed connection"))
else{var n={penpal:"reply",id:f,resolution:e,returnValue:t}
"rejected"===e&&t instanceof Error&&(n.returnValue=s(t),n.returnValueIsError=!0)
try{c.postMessage(n,l)}catch(a){throw"DataCloneError"===a.name&&c.postMessage({penpal:"reply",id:f,resolution:"rejected",returnValue:s(a),returnValueIsError:!0},l),a}}}}
new i.Promise((function(e){return e(t[r].apply(t,a))})).then(h("fulfilled"),h("rejected"))}}}
a.addEventListener(n,f),r.then((function(){d=!0,a.removeEventListener(n,f)}))}
i.connectToChild=function(e){var t,r=e.url,c=e.appendTo,s=e.iframe,d=e.methods,m=void 0===d?{}:d,p=e.timeout
if(s&&s.parentNode){var v=new Error("connectToChild() must not be called with an iframe already attached to DOM")
throw v.code="IframeAlreadyAttachedToDom",v}var y=new l((function(e){t=e})),g=window;(s=s||document.createElement("iframe")).src=r
var E=function(e){var t,n,r,i=document.location,c=a.exec(e)
if(c?(t=c[1]?c[1]:i.protocol,n=c[2],r=c[4]):(t=i.protocol,n=i.hostname,r=i.port),"file:"===t)return"null"
var u=r&&r!==o[t]?":".concat(r):""
return"".concat(t,"//").concat(n).concat(u)}(r)
return{promise:new i.Promise((function(e,r){var o
void 0!==p&&(o=setTimeout((function(){var e=new Error("Connection to child timed out after ".concat(p,"ms"))
e.code="ConnectionTimeout",r(e),t()}),p))
var a,i,d={},v=function(n){var r=s.contentWindow
if(n.source===r&&n.origin===E&&"handshake"===n.data.penpal){u("Parent: Received handshake, sending reply")
var c="null"===n.origin?"*":n.origin
n.source.postMessage({penpal:"handshake-reply",methodNames:Object.keys(m)},c)
var p={localName:"Parent",local:g,remote:r,remoteOrigin:c}
i&&i()
var v=new l((function(e){y.then(e),i=e}))
h(p,m,v),a&&a.forEach((function(e){delete d[e]})),a=n.data.methodNames,f(d,p,a,t,y),clearTimeout(o),e(d)}}
g.addEventListener(n,v),u("Parent: Loading iframe"),(c||document.body).appendChild(s)
var w=setInterval((function(){document.contains(s)||(clearInterval(w),t())}),6e4)
y.then((function(){s.parentNode&&s.parentNode.removeChild(s),g.removeEventListener(n,v),clearInterval(w)
var e=new Error("Connection destroyed")
e.code="ConnectionDestroyed",r(e)}))})),iframe:s,destroy:t}},i.connectToParent=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.parentOrigin,o=void 0===r?"*":r,a=t.methods,c=void 0===a?{}:a,s=t.timeout
if(window===window.top){var d=new Error("connectToParent() must be called within an iframe")
throw d.code="NotInIframe",d}var m=new l((function(t){e=t})),p=window,v=p.parent,y=new i.Promise((function(t,r){var a
void 0!==s&&(a=setTimeout((function(){var t=new Error("Connection to parent timed out after ".concat(s,"ms"))
t.code="ConnectionTimeout",r(t),e()}),s))
var i=function r(i){if(("*"===o||o===i.origin)&&i.source===v&&"handshake-reply"===i.data.penpal){u("Child: Received handshake reply"),p.removeEventListener(n,r)
var l={localName:"Child",local:p,remote:v,remoteOrigin:i.origin},s={}
h(l,c,m),f(s,l,i.data.methodNames,e,m),clearTimeout(a),t(s)}}
p.addEventListener(n,i),m.then((function(){p.removeEventListener(n,i)
var e=new Error("Connection destroyed")
e.code="ConnectionDestroyed",r(e)})),u("Child: Sending handshake"),v.postMessage({penpal:"handshake",methodNames:Object.keys(c)},o)}))
return{promise:y,destroy:e}}
var m=i
t.default=m})),r=(e=n)&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e
n.ERR_IFRAME_ALREADY_ATTACHED_TO_DOM,n.ERR_NOT_IN_IFRAME,n.ERR_CONNECTION_TIMEOUT,n.ERR_CONNECTION_DESTROYED
function o(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(l){return void n(l)}c.done?t(u):Promise.resolve(u).then(r,o)}function a(e){return function(){var t=this,n=arguments
return new Promise((function(r,a){var i=e.apply(t,n)
function c(e){o(i,r,a,c,u,"next",e)}function u(e){o(i,r,a,c,u,"throw",e)}c(void 0)}))}}function i(e,t){e.addCommand(monaco.KeyMod.CtrlCmd|monaco.KeyCode.KEY_S,(function(){t.keyCommand({cmd:!0,keys:["s"]})}),""),e.addCommand(monaco.KeyMod.CtrlCmd|monaco.KeyMod.Shift|monaco.KeyCode.KEY_S,(function(){t.keyCommand({cmd:!0,shift:!0,keys:["s"]})}),"")}function c(e,t,n){var r={width:e.offsetWidth,height:e.offsetHeight}
setInterval((function(){var n={width:e.offsetWidth,height:e.offsetHeight}
r.height===n.height&&r.width===n.width||(r=n,t())}),n)}var u=r.connectToParent({methods:{setupEditor:function(e){require(["vs/editor/editor.main"],a(regeneratorRuntime.mark((function n(){var r,o,a,l,s,d
return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"==typeof monaco){n.next=13
break}if(r=window.document.getElementById("monaco-editor-wrapper")){n.next=4
break}throw new Error("No wrapper found")
case 4:return o=e.language,a=e.theme,l=e.value,s=t=window.editor=monaco.editor.create(r,{language:o,theme:a,value:l}),n.next=8,u.promise
case 8:d=n.sent,s.onDidChangeModelContent((function(e){e&&d.onValueChanged({event:e,value:s.getValue()})})),d.onReady(),i(s,d),c(r,t.layout.bind(t),2e3)
case 13:case"end":return n.stop()}}),n)}))))},updateEditor:function(e){var n=e.value,r=e.language
require(["vs/editor/editor.main"],(function(){if("undefined"!=typeof monaco&&void 0!==t){t.setValue(n)
var e=t.getModel()
if(!e)throw new Error("Editor has no model")
monaco.editor.setModelLanguage(e,r)}}))}}})})()
