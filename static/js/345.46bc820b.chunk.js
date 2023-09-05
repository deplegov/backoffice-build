/*! For license information please see 345.46bc820b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgouvernance=self.webpackChunkgouvernance||[]).push([[345],{7947:function(t,e,n){function r(t){return"".concat("https://dam-api-qa.northeurope.cloudapp.azure.com","/").concat(t)}n.d(e,{Z:function(){return r}})},6524:function(t,e,n){var r=n(5671),o=n(3144),i=n(136),a=n(2882),u=n(2791),c=n(8983),s=n(184),l=function(t){(0,i.Z)(n,t);var e=(0,a.Z)(n);function n(){return(0,r.Z)(this,n),e.apply(this,arguments)}return(0,o.Z)(n,[{key:"render",value:function(){return(0,s.jsx)(c.LQ,{})}}]),n}(u.Component);e.Z=l},6345:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(4165),o=n(5861),i=n(5671),a=n(3144),u=n(136),c=n(2882),s=n(2791),l=n(8983),h=n(7947),f=n(6524),d=n(184),p=function(t){(0,u.Z)(n,t);var e=(0,c.Z)(n);function n(t){var r;(0,i.Z)(this,n),(r=e.call(this,t)).setLibelle=function(t){r.setState({libelle:t.target.value})},r.setQuantity=function(t){r.setState({quantity:t.target.value})},r.setUnitPrice=function(t){r.setState({unit_price:t.target.value})},r.setNote=function(t){r.setState({note:t.target.value})},r.setTotalAmount=function(t){r.setState({total_amount:t.target.value})},r.setReady=function(t){r.setState({ready:t})},r.setError=function(t){r.setState({error:t})},r.setCustomerId=function(t){r.setState({customer_id:t.target.value})};var o=t.match;return r.state={entryId:o&&o.params&&o.params.id,libelle:"",quantity:"",unit_price:"",total_amount:"",customer_id:"",note:"",entry:null,ready:!1,load:!1,error:"",customers:null},r}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){var t=(0,o.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.getEntry(),this.getCustomers();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getEntry",value:function(){var t=this;this.setReady(!1),fetch((0,h.Z)("entry/".concat(this.state.entryId))).then((function(e){e.ok&&e.json().then((function(e){e&&e.entry&&(null==e.entry.customer_id?t.setState({entry:e.entry,libelle:e.entry.libelle,quantity:e.entry.quantity,unit_price:e.entry.unit_price,total_amount:e.entry.total_amount,note:e.entry.notes,customer_id:"",ready:!0}):t.setState({entry:e.entry,libelle:e.entry.libelle,quantity:e.entry.quantity,unit_price:e.entry.unit_price,total_amount:e.entry.total_amount,customer_id:e.entry.customer_id.id,note:e.entry.notes,ready:!0}))}))}))}},{key:"getCustomers",value:function(){var t=this;this.setReady(!1),fetch((0,h.Z)("customer"),{method:"GET"}).then((function(e){e.ok&&e.json().then((function(e){e&&e.customer&&t.setState({customers:e.customer,ready:!0})}))}))}},{key:"updateEntry",value:function(){var t=this,e=this.state.customer_id;this.setLoad(!0),null==this.state.customer_id&&(e=null==this.state.entry.customer_id?null:this.state.entry.customer_id.id),fetch((0,h.Z)("entry/".concat(this.state.entryId)),{headers:{"Content-Type":"application/json"},method:"PUT",body:JSON.stringify({libelle:this.state.libelle,quantity:parseInt(this.state.quantity),unit_price:parseInt(this.state.unit_price),total_amount:parseInt(this.state.quantity)*parseInt(this.state.unit_price),customer_id:parseInt(e),notes:this.state.note,modification_date:new Date})}).then((function(e){e.ok?(console.log(e),t.setError("Modification r\xe9ussie"),t.setLoad(!1),t.props.history.push("/Home")):e.json().then((function(e){t.setError(e.message),t.setLoad(!1)}))}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.libelle,r=e.quantity,o=e.unit_price,i=e.entry,a=e.note,u=e.customer_id,c=e.customers,s=e.ready,h=e.error,p=e.load;return(0,d.jsx)("div",{className:"bg-light min-vh-50 d-flex flex-row align-items-center",children:s?(0,d.jsxs)(l.KB,{children:[" ",(0,d.jsx)(l.rb,{className:"justify-content-center",children:(0,d.jsx)(l.b7,{md:9,lg:9,xl:6,children:(0,d.jsx)(l.xH,{className:"mx-4",children:(0,d.jsx)(l.sl,{className:"p-4",children:(0,d.jsxs)(l.lx,{children:[(0,d.jsx)("h1",{children:"Modification Entr\xe9e"}),(0,d.jsxs)(l.YR,{className:"mb-3",children:[(0,d.jsx)(l.wV,{component:"label",htmlFor:"inputGroupSelect01",children:"Libelle"}),(0,d.jsx)(l.jO,{type:"text",placeholder:i.libelle,autoComplete:"Libelle",value:n,onChange:this.setLibelle})]}),(0,d.jsxs)(l.YR,{className:"mb-3",children:[(0,d.jsx)(l.wV,{component:"label",htmlFor:"inputGroupSelect01",children:"Quantit\xe9"}),(0,d.jsx)(l.jO,{type:"number",placeholder:i.quantity,autoComplete:"Quantit\xe9",value:r,onChange:this.setQuantity})]}),(0,d.jsxs)(l.YR,{className:"mb-3",children:[(0,d.jsx)(l.wV,{component:"label",htmlFor:"inputGroupSelect01",children:"Prix unitaire"}),(0,d.jsx)(l.jO,{type:"number",placeholder:i.unit_price,autoComplete:"Prix unitaire",value:o,onChange:this.setUnitPrice})]}),(0,d.jsxs)(l.YR,{className:"mb-3",children:[(0,d.jsx)(l.wV,{component:"label",htmlFor:"inputGroupSelect01",children:"Client"}),(0,d.jsxs)(l.LX,{id:"inputGroupSelect01",onChange:this.setCustomerId,value:u,children:[(0,d.jsx)("option",{value:"",children:" "}),c&&c.map((function(t,e){return(0,d.jsxs)("option",{value:t.id,children:[t.name," ",t.surname]},e)}))]})]}),(0,d.jsx)(l.PB,{type:"text",placeholder:i.notes,autoComplete:"Notes",value:a,onChange:this.setNote}),(0,d.jsxs)("div",{className:"d-grid",style:{marginTop:"18px"},children:[p?(0,d.jsx)(l.u5,{id:"aim-color-green",className:"px-4",disabled:!0,children:(0,d.jsx)(f.Z,{})}):(0,d.jsx)(l.u5,{color:"success",onClick:function(){return t.updateEntry()},children:"Modifier"}),(0,d.jsx)("label",{children:h})]})]})})})})})]}):(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(f.Z,{})})})}},{key:"setLoad",value:function(t){this.setState({load:t})}}]),n}(s.Component)},5861:function(t,e,n){function r(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}n.d(e,{Z:function(){return o}})},4165:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(1002);function o(){o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(N){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=j(a,n);if(u){if(u===f)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=h(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}t.wrap=l;var f={};function d(){}function p(){}function y(){}var m={};s(m,a,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(S([])));g&&g!==e&&n.call(g,a)&&(m=g);var x=y.prototype=d.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(i,a,u,c){var s=h(t[i],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==(0,r.Z)(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):e.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,c)}))}c(s.arg)}var i;this._invoke=function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}}function j(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=h(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=y,s(x,"constructor",y),s(y,"constructor",p),p.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,u,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),s(x,c,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}}}]);
//# sourceMappingURL=345.46bc820b.chunk.js.map