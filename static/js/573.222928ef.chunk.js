"use strict";(self.webpackChunkgouvernance=self.webpackChunkgouvernance||[]).push([[573],{7947:function(e,t,r){function n(e){return"".concat("https://dam-api-qa.northeurope.cloudapp.azure.com","/").concat(e)}r.d(t,{Z:function(){return n}})},6524:function(e,t,r){var n=r(5671),i=r(3144),a=r(136),c=r(2882),o=r(2791),s=r(8983),l=r(184),u=function(e){(0,a.Z)(r,e);var t=(0,c.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"render",value:function(){return(0,l.jsx)(s.LQ,{})}}]),r}(o.Component);t.Z=u},3573:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(5785),i=r(5671),a=r(3144),c=r(136),o=r(2882),s=r(2791),l=r(8983),u=r(4846),d=r(2439),h=r(511),f=r(2800),p=r(7947),v=r(6524),m=r(184),g=function(e){(0,c.Z)(r,e);var t=(0,o.Z)(r);function r(e){var n;return(0,i.Z)(this,r),(n=t.call(this,e)).pagination=function(e){for(var t=[],r=1;r<=e;r++)t.push(r);n.setState({pagination:t})},n.getServiceData=function(e,t){n.setLoading(!0),fetch((0,p.Z)("services/page/".concat(e,"/type"))).then((function(r){if(r.ok)return r.json().then((function(r){n.setState({services:r.services,pageList:e,pageNumber:t,totalPage:r.pagination.totalPages}),n.pagination(r.pagination.totalPages),n.setLoading(!1)}))}))},n.cancelFormModal=function(){n.setFormModalState(!1),n.clearFields(),n.setError()},n.setOffset=function(e){n.setState({offset:e})},n.setLimit=function(e){n.setState({limit:e})},n.state={formModalState:!1,deleteModalState:!1,loading:!0,services:null,error:"",pagination:[],totalPage:0,pageList:1,pageNumber:10,id:0,offset:0,limit:0},n}return(0,a.Z)(r,[{key:"componentDidMount",value:function(){this.getServiceData(1)}},{key:"serviceToDelete",value:function(e){this.setId(e),this.setDeleteModalState(!0)}},{key:"deleteService",value:function(){var e=this;fetch((0,p.Z)("services/".concat(this.state.services[this.state.id].id)),{method:"DELETE"}).then((function(t){if(t.ok){var r=(0,n.Z)(e.state.services);r.splice(e.state.id,1),e.setState({services:r}),e.setDeleteModalState(!1)}}))}},{key:"serviceUpdate",value:function(e){this.props.history.push("/service/update/"+e)}},{key:"addService",value:function(){this.props.history.push("/service/insert")}},{key:"render",value:function(){var e=this,t=this.state,r=t.services,n=t.loading,i=t.deleteModalState,a=t.id,c=t.pageList,o=t.pageNumber,s=t.pagination,p=t.totalPage;return n?(0,m.jsx)(v.Z,{}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.rb,{children:(0,m.jsx)(l.b7,{xs:12,children:(0,m.jsxs)(l.xH,{className:"mb-4",children:[(0,m.jsx)(l.bn,{children:(0,m.jsxs)("span",{className:"d-grid gap-2 d-md-flex justify-content-between",children:[(0,m.jsx)("strong",{children:"Liste des service"}),(0,m.jsxs)(l.u5,{color:"primary",onClick:function(){return e.addService()},children:[(0,m.jsx)(u.Z,{icon:d.q,className:"me-2"}),"Ajouter"]})]})}),(0,m.jsxs)(l.sl,{children:[(0,m.jsxs)(l.Sx,{children:[(0,m.jsx)(l.V,{children:(0,m.jsxs)(l.T6,{children:[(0,m.jsx)(l.is,{scope:"col",children:"Intitule"}),(0,m.jsx)(l.is,{scope:"col",children:"Prix"})]})}),(0,m.jsx)(l.NR,{children:r&&r.map((function(t,r){return(0,m.jsxs)(l.T6,{children:[(0,m.jsx)(l.NN,{children:t.entitled}),(0,m.jsx)(l.NN,{children:t.price>1e3?(0,m.jsxs)(m.Fragment,{children:[t.price.toLocaleString()," Ar"]}):(0,m.jsxs)(m.Fragment,{children:[t.price," Ar"]})}),(0,m.jsx)(l.NN,{children:(0,m.jsx)(l.u5,{color:"light",onClick:function(){return e.serviceUpdate(t.id)},children:(0,m.jsx)(u.Z,{icon:h.l})})}),(0,m.jsx)(l.NN,{children:(0,m.jsx)(l.u5,{color:"danger",onClick:function(){return e.serviceToDelete(r)},children:(0,m.jsx)(u.Z,{icon:f.N})})})]},t.id)}))})]}),(0,m.jsxs)(l.E7,{"aria-label":"Page navigation example",children:[(0,m.jsx)(l.tn,{"aria-label":"Previous",disabled:1===c,onClick:function(){return e.getServiceData(c-1,o)},children:(0,m.jsx)("span",{"aria-hidden":"true",children:"\xab"})}),s.map((function(t,r){return(0,m.jsx)(l.tn,{active:t===c,onClick:function(){return e.getServiceData(t,o)},children:" ".concat(t," ")},r)})),(0,m.jsx)(l.tn,{"aria-label":"Next",disabled:p-c===0||r&&0===r.length,onClick:function(){return e.getServiceData(c+1,o)},children:(0,m.jsx)("span",{"aria-hidden":"true",children:" \xbb "})})]})]})]})})}),(0,m.jsxs)(l.Tk,{alignment:"center",visible:i,onClose:function(){return e.setDeleteModalState(!1)},children:[(0,m.jsx)(l.p0,{children:(0,m.jsx)(l.fl,{children:"Supprimer"})}),(0,m.jsx)(l.sD,{children:(0,m.jsxs)("p",{children:["Voulez vous supprimer"," ",r&&r.length>0&&a<r.length&&r[a].entitled,"?"]})}),(0,m.jsxs)(l.Ym,{children:[(0,m.jsx)(l.u5,{color:"secondary",onClick:function(){return e.setDeleteModalState(!1)},children:"Annuler"}),(0,m.jsx)(l.u5,{color:"danger",onClick:function(){return e.deleteService()},children:"Supprimer"})]})]})]})}},{key:"setLoading",value:function(e){this.setState({loading:e})}},{key:"setId",value:function(e){this.setState({id:e})}},{key:"setDeleteModalState",value:function(e){this.setState({deleteModalState:e})}}]),r}(s.Component)},511:function(e,t,r){r.d(t,{l:function(){return n}});var n=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]},2439:function(e,t,r){r.d(t,{q:function(){return n}});var n=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='440 240 272 240 272 72 240 72 240 240 72 240 72 272 240 272 240 440 272 440 272 272 440 272 440 240' class='ci-primary'/>"]},2800:function(e,t,r){r.d(t,{N:function(){return n}});var n=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z' class='ci-primary'/><rect width='32' height='200' x='168' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='240' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='312' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z' class='ci-primary'/>"]},5785:function(e,t,r){function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=573.222928ef.chunk.js.map