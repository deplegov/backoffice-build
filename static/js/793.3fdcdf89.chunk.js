"use strict";(self.webpackChunkgouvernance=self.webpackChunkgouvernance||[]).push([[793],{7947:function(e,t,n){function i(e){return"".concat("http://dam-api-qa.northeurope.cloudapp.azure.com","/").concat(e)}n.d(t,{Z:function(){return i}})},6524:function(e,t,n){var i=n(5671),r=n(3144),s=n(136),c=n(2882),a=n(2791),o=n(8983),l=n(184),u=function(e){(0,s.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,i.Z)(this,n),t.apply(this,arguments)}return(0,r.Z)(n,[{key:"render",value:function(){return(0,l.jsx)(o.LQ,{})}}]),n}(a.Component);t.Z=u},5793:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var i=n(5671),r=n(3144),s=n(136),c=n(2882),a=n(2791),o=n(8983),l=n(4846),u=n(511),d=n(7947),h=n(6524),p=n(184),v=function(e){(0,s.Z)(n,e);var t=(0,c.Z)(n);function n(e){var r;(0,i.Z)(this,n),(r=t.call(this,e)).setEntitled=function(e){r.setState({entitled:e.target.value})},r.setPrice=function(e){r.setState({price:e.target.value})},r.setReady=function(e){r.setState({ready:e})},r.setError=function(e){r.setState({error:e})};var s=e.match;return r.state={service_id:s&&s.params&&s.params.id,entitled:"",price:"",service:null,ready:!1,error:"",load:!1},r}return(0,r.Z)(n,[{key:"componentDidMount",value:function(){this.getService()}},{key:"getService",value:function(){var e=this;this.setReady(!1),fetch((0,d.Z)("services/".concat(this.state.service_id))).then((function(t){t.ok&&t.json().then((function(t){t&&t.service&&e.setState({service:t.service,ready:!0,entitled:t.service.entitled,price:t.service.price})}))}))}},{key:"updateService",value:function(){var e=this;this.setLoad(!0),fetch((0,d.Z)("services/".concat(this.state.service_id)),{headers:{"Content-Type":"application/json"},method:"PUT",body:JSON.stringify({entitled:this.state.entitled,price:this.state.price,modification_date:new Date})}).then((function(t){t.ok?(console.log(t),e.setError("Modification r\xe9ussie"),e.setLoad(!1),e.props.history.push("/Home")):t.json().then((function(t){e.setError(t.message),e.setLoad(!1)}))}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.entitled,i=t.price,r=t.service,s=t.ready,c=t.error,a=t.load;return(0,p.jsx)("div",{className:"bg-light min-vh-50 d-flex flex-row align-items-center",children:s?(0,p.jsxs)(o.KB,{children:[" ",(0,p.jsx)(o.rb,{className:"justify-content-center",children:(0,p.jsx)(o.b7,{md:9,lg:9,xl:6,children:(0,p.jsx)(o.xH,{className:"mx-4",children:(0,p.jsx)(o.sl,{className:"p-4",children:(0,p.jsxs)(o.lx,{onSubmit:function(e){e.preventDefault()},children:[(0,p.jsx)("h1",{children:"Modification Service"}),(0,p.jsxs)(o.YR,{className:"mb-3",children:[(0,p.jsx)(o.wV,{children:(0,p.jsx)(l.Z,{icon:u.l})}),(0,p.jsx)(o.jO,{type:"text",placeholder:r.entitled,autoComplete:"Intitule",value:n,onChange:this.setEntitled})]}),(0,p.jsxs)(o.YR,{className:"mb-3",children:[(0,p.jsx)(o.wV,{children:(0,p.jsx)(l.Z,{icon:u.l})}),(0,p.jsx)(o.jO,{type:"number",placeholder:r.price,autoComplete:"Prix",value:i,onChange:this.setPrice})]}),(0,p.jsxs)("div",{className:"d-grid",children:[a?(0,p.jsx)(o.u5,{id:"aim-color-green",className:"px-4",disabled:!0,children:(0,p.jsx)(h.Z,{})}):(0,p.jsx)(o.u5,{color:"success",type:"submit",onClick:function(){return e.updateService()},children:"Modifier"}),(0,p.jsx)("label",{children:c})]})]})})})})})]}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(h.Z,{})})})}},{key:"setLoad",value:function(e){this.setState({load:e})}}]),n}(a.Component)},511:function(e,t,n){n.d(t,{l:function(){return i}});var i=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=793.3fdcdf89.chunk.js.map