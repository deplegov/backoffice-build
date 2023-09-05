"use strict";(self.webpackChunkgouvernance=self.webpackChunkgouvernance||[]).push([[601],{7947:function(e,t,n){function r(e){return"".concat("http://dam-api-qa.northeurope.cloudapp.azure.com","/").concat(e)}n.d(t,{Z:function(){return r}})},6524:function(e,t,n){var r=n(5671),a=n(3144),i=n(136),s=n(2882),c=n(2791),o=n(8983),l=n(184),u=function(e){(0,i.Z)(n,e);var t=(0,s.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,a.Z)(n,[{key:"render",value:function(){return(0,l.jsx)(o.LQ,{})}}]),n}(c.Component);t.Z=u},9601:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(5785),a=n(5671),i=n(3144),s=n(136),c=n(2882),o=n(2791),l=n(8983),u=n(7947),d=n(4846),h=n(2439),p=n(2800),x=n(2426),j=n.n(x),m=n(6524),f=n(184),g=function(e){(0,s.Z)(n,e);var t=(0,c.Z)(n);function n(e){var r;return(0,a.Z)(this,n),(r=t.call(this,e)).cancelFormModal=function(){r.setFormModalState(!1),r.clearFields(),r.setError()},r.pagination=function(e){for(var t=[],n=1;n<=e;n++)t.push(n);r.setState({pagination:t})},r.getPurchaseData=function(e,t){r.setLoading(!0),fetch((0,u.Z)("purchase/page/".concat(e))).then((function(n){if(n.ok)return n.json().then((function(n){r.setState({purchase:n.purchase,pageList:e,pageNumber:t,totalPage:n.pagination.totalPages}),r.pagination(n.pagination.totalPages)}))}))},r.paginationDebt=function(e){for(var t=[],n=1;n<=e;n++)t.push(n);r.setState({paginationDebt:t})},r.getPurchaseWithDebtData=function(e,t){r.setLoading(!0),fetch((0,u.Z)("purchase/debt/page/".concat(e))).then((function(n){if(n.ok)return n.json().then((function(n){r.setState({purchaseDebt:n.purchase,pageListDebt:e,pageNumberDebt:t,totalPageDebt:n.pagination.totalPages}),r.paginationDebt(n.pagination.totalPages),r.setLoading(!1)}));r.setLoading(!1)}))},r.state={loading:!0,purchase:null,purchaseDebt:null,formModalState:!1,deleteModalState:!1,deleteModalStateWithDebt:!1,purchaseWithDebt:null,load:!1,error:"",pagination:[],role:"",totalPage:0,pageList:1,pageNumber:10,paginationDebt:[],totalPageDebt:0,pageListDebt:1,pageNumberDebt:10,id:0},r}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){if(sessionStorage.getItem("user")){var e=JSON.parse(sessionStorage.getItem("user"));this.setRole(e.role_id.entitled)}this.getPurchaseData(1),this.getPurchaseWithDebtData(1)}},{key:"deleteDebtPurchase",value:function(){var e=this;this.setLoadButton(!0),fetch((0,u.Z)("debtPayment/".concat(this.state.purchaseDebt[this.state.id].id)),{method:"DELETE"}).then((function(t){if(t.ok){var n=(0,r.Z)(e.state.purchaseDebt);n.splice(e.state.id,1),e.setState({purchaseDebt:n}),e.setDeleteModalStateWithDebt(!1)}})),this.setLoadButton(!1)}},{key:"deletePurchase",value:function(){var e=this;this.setLoadButton(!0),fetch((0,u.Z)("purchase/".concat(this.state.purchase[this.state.id].id)),{method:"DELETE"}).then((function(t){if(t.ok){var n=(0,r.Z)(e.state.purchase);n.splice(e.state.id,1),e.setState({purchase:n}),e.setDeleteModalState(!1)}})),this.setLoadButton(!1)}},{key:"purchaseToDelete",value:function(e){this.setId(e),this.setDeleteModalState(!0)}},{key:"purchaseWithDebtToDelete",value:function(e){this.setId(e),this.setDeleteModalStateWithDebt(!0)}},{key:"PurchaseDetail",value:function(e){this.props.history.push("/Purchase/details/"+e)}},{key:"addPurchase",value:function(e){this.props.history.push("/service/purchase/"+e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.loading,r=t.id,a=t.role,i=t.load,s=t.deleteModalState,c=t.deleteModalStateWithDebt,o=t.purchase,u=t.pageList,x=t.pageNumber,g=t.totalPage,b=t.pagination,D=t.purchaseDebt,v=t.pageListDebt,y=t.pageNumberDebt,N=t.totalPageDebt,S=t.paginationDebt;return n?(0,f.jsx)(m.Z,{}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.rb,{children:(0,f.jsx)(l.b7,{xs:12,children:(0,f.jsxs)(l.xH,{className:"mb-4",children:[(0,f.jsx)(l.bn,{children:(0,f.jsxs)("span",{className:"d-grid gap-2 d-md-flex justify-content-between",children:[(0,f.jsx)("strong",{children:"Liste des Achats sans dette"}),(0,f.jsxs)(l.u5,{color:"primary",onClick:function(){return e.addPurchase(0)},children:[(0,f.jsx)(d.Z,{icon:h.q,className:"me-2"}),"Ajouter"]})]})}),(0,f.jsxs)(l.sl,{children:[(0,f.jsxs)(l.Sx,{children:[(0,f.jsx)(l.V,{children:(0,f.jsxs)(l.T6,{children:[(0,f.jsx)(l.is,{scope:"col",children:"Re\xe7u par"}),(0,f.jsx)(l.is,{scope:"col",children:"Client"}),(0,f.jsx)(l.is,{scope:"col",children:"Montant total"}),(0,f.jsx)(l.is,{scope:"col",children:"Date"}),(0,f.jsx)(l.is,{scope:"col",children:"Note"})]})}),(0,f.jsx)(l.NR,{children:o&&o.map((function(t,n){return(0,f.jsxs)(l.T6,{children:[(0,f.jsxs)(l.NN,{children:[t.received_by.name," ",t.received_by.surname]}),t.customer_id?(0,f.jsxs)(l.NN,{children:[t.customer_id.name," ",t.customer_id.surname]}):(0,f.jsx)(l.NN,{children:"Aucun"}),(0,f.jsx)(l.NN,{children:t.total_amount>1e3?(0,f.jsxs)(f.Fragment,{children:[t.total_amount.toLocaleString()," Ar"]}):(0,f.jsxs)(f.Fragment,{children:[t.total_amount," Ar"]})}),(0,f.jsx)(l.NN,{children:j()(t.purchase_datetime).format("YYYY-MM-DD HH:mm:ss")}),(0,f.jsx)(l.NN,{children:t.notes}),(0,f.jsx)(l.NN,{children:(0,f.jsx)(l.u5,{color:"light",onClick:function(){return e.PurchaseDetail(t.id)},children:"Details"})}),"Administrateur"===a?(0,f.jsx)(l.NN,{children:(0,f.jsx)(l.u5,{color:"danger",onClick:function(){return e.purchaseToDelete(n)},children:(0,f.jsx)(d.Z,{icon:p.N})})}):(0,f.jsx)(f.Fragment,{})]},n)}))})]}),(0,f.jsxs)(l.E7,{"aria-label":"Page navigation example",children:[(0,f.jsx)(l.tn,{"aria-label":"Previous",disabled:1===u,onClick:function(){return e.getPurchaseData(u-1,x)},children:(0,f.jsx)("span",{"aria-hidden":"true",children:"\xab"})}),b.map((function(t,n){return(0,f.jsx)(l.tn,{active:t===u,onClick:function(){return e.getPurchaseData(t,x)},children:" ".concat(t," ")},n)})),(0,f.jsx)(l.tn,{"aria-label":"Next",disabled:g-u===0||o&&0===o.length,onClick:function(){return e.getPurchaseData(u+1,x)},children:(0,f.jsx)("span",{"aria-hidden":"true",children:" \xbb "})})]})]})]})})}),(0,f.jsxs)(l.Tk,{alignment:"center",visible:s,onClose:function(){return e.setDeleteModalState(!1)},children:[(0,f.jsx)(l.p0,{children:(0,f.jsx)(l.fl,{children:"Supprimer"})}),(0,f.jsx)(l.sD,{children:(0,f.jsxs)("p",{children:["Voulez vous supprimer"," ",o&&o.length>0&&r<o.length&&o[r].entitled,"?"]})}),(0,f.jsxs)(l.Ym,{children:[(0,f.jsx)(l.u5,{color:"secondary",onClick:function(){return e.setDeleteModalState(!1)},children:"Annuler"}),i?(0,f.jsx)(l.u5,{color:"danger",disabled:!0,children:(0,f.jsx)(m.Z,{})}):(0,f.jsx)(l.u5,{color:"danger",onClick:function(){return e.deletePurchase()},children:"Supprimer"})]})]}),(0,f.jsx)(l.rb,{children:(0,f.jsx)(l.b7,{xs:12,children:(0,f.jsxs)(l.xH,{className:"mb-4",children:[(0,f.jsx)(l.bn,{children:(0,f.jsxs)("span",{className:"d-grid gap-2 d-md-flex justify-content-between",children:[(0,f.jsx)("strong",{children:"Liste des Achats avec dette"}),(0,f.jsxs)(l.u5,{color:"primary",onClick:function(){return e.addPurchase(1)},children:[(0,f.jsx)(d.Z,{icon:h.q,className:"me-2"}),"Ajouter"]})]})}),(0,f.jsxs)(l.sl,{children:[(0,f.jsxs)(l.Sx,{children:[(0,f.jsx)(l.V,{children:(0,f.jsxs)(l.T6,{children:[(0,f.jsx)(l.is,{scope:"col",children:"Re\xe7u par"}),(0,f.jsx)(l.is,{scope:"col",children:"Client"}),(0,f.jsx)(l.is,{scope:"col",children:"Montant total"}),(0,f.jsx)(l.is,{scope:"col",children:"Date"}),(0,f.jsx)(l.is,{scope:"col",children:"Note"})]})}),(0,f.jsx)(l.NR,{children:D&&D.map((function(t,n){return(0,f.jsxs)(l.T6,{children:[(0,f.jsxs)(l.NN,{children:[t.received_by.name," ",t.received_by.surname]}),t.customer_id?(0,f.jsxs)(l.NN,{children:[t.customer_id.name," ",t.customer_id.surname]}):(0,f.jsx)(l.NN,{children:"Aucun"}),(0,f.jsx)(l.NN,{children:t.total_amount>1e3?(0,f.jsxs)(f.Fragment,{children:[t.total_amount.toLocaleString()," Ar"]}):(0,f.jsxs)(f.Fragment,{children:[t.total_amount," Ar"]})}),(0,f.jsx)(l.NN,{children:j()(t.purchase_datetime).format("YYYY-MM-DD HH:mm:ss")}),(0,f.jsx)(l.NN,{children:t.notes}),(0,f.jsx)(l.NN,{children:(0,f.jsx)(l.u5,{color:"light",onClick:function(){return e.PurchaseDetail(t.id)},children:"Details"})}),"Administrateur"===a?(0,f.jsx)(l.NN,{children:(0,f.jsx)(l.u5,{color:"danger",onClick:function(){return e.purchaseWithDebtToDelete(n)},children:(0,f.jsx)(d.Z,{icon:p.N})})}):(0,f.jsx)(f.Fragment,{})]},n)}))})]}),(0,f.jsxs)(l.E7,{"aria-label":"Page navigation example",children:[(0,f.jsx)(l.tn,{"aria-label":"Previous",disabled:1===v,onClick:function(){return e.getPurchaseWithDebtData(v-1,y)},children:(0,f.jsx)("span",{"aria-hidden":"true",children:"\xab"})}),S.map((function(t,n){return(0,f.jsx)(l.tn,{active:t===v,onClick:function(){return e.getPurchaseWithDebtData(t,y)},children:" ".concat(t," ")},n)})),(0,f.jsx)(l.tn,{"aria-label":"Next",disabled:N-v===0||o&&0===o.length,onClick:function(){return e.getPurchaseWithDebtData(v+1,y)},children:(0,f.jsx)("span",{"aria-hidden":"true",children:" \xbb "})})]})]})]})})}),(0,f.jsxs)(l.Tk,{alignment:"center",visible:c,onClose:function(){return e.setDeleteModalStateWithDebt(!1)},children:[(0,f.jsx)(l.p0,{children:(0,f.jsx)(l.fl,{children:"Supprimer"})}),(0,f.jsx)(l.sD,{children:(0,f.jsxs)("p",{children:["Voulez vous supprimer"," ",D&&D.length>0&&r<D.length&&D[r].entitled,"?"]})}),(0,f.jsxs)(l.Ym,{children:[(0,f.jsx)(l.u5,{color:"secondary",onClick:function(){return e.setDeleteModalStateWithDebt(!1)},children:"Annuler"}),i?(0,f.jsx)(l.u5,{color:"danger",disabled:!0,children:(0,f.jsx)(m.Z,{})}):(0,f.jsx)(l.u5,{color:"danger",onClick:function(){return e.deleteDebtPurchase()},children:"Supprimer"})]})]})]})}},{key:"setLoading",value:function(e){this.setState({loading:e})}},{key:"setLoadButton",value:function(e){this.setState({load:e})}},{key:"setId",value:function(e){this.setState({id:e})}},{key:"setRole",value:function(e){this.setState({role:e})}},{key:"setDeleteModalState",value:function(e){this.setState({deleteModalState:e})}},{key:"setDeleteModalStateWithDebt",value:function(e){this.setState({deleteModalStateWithDebt:e})}}]),n}(o.Component)},2439:function(e,t,n){n.d(t,{q:function(){return r}});var r=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='440 240 272 240 272 72 240 72 240 240 72 240 72 272 240 272 240 440 272 440 272 272 440 272 440 240' class='ci-primary'/>"]},2800:function(e,t,n){n.d(t,{N:function(){return r}});var r=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z' class='ci-primary'/><rect width='32' height='200' x='168' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='240' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='312' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z' class='ci-primary'/>"]},5785:function(e,t,n){function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=601.77c09e52.chunk.js.map