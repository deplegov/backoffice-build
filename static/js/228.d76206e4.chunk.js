"use strict";(self.webpackChunkgouvernance=self.webpackChunkgouvernance||[]).push([[228],{7947:function(e,t,s){function n(e){return"".concat("http://dam-api-qa.northeurope.cloudapp.azure.com","/").concat(e)}s.d(t,{Z:function(){return n}})},6524:function(e,t,s){var n=s(5671),a=s(3144),r=s(136),i=s(2882),l=s(2791),o=s(8983),u=s(184),d=function(e){(0,r.Z)(s,e);var t=(0,i.Z)(s);function s(){return(0,n.Z)(this,s),t.apply(this,arguments)}return(0,a.Z)(s,[{key:"render",value:function(){return(0,u.jsx)(o.LQ,{})}}]),s}(l.Component);t.Z=d},5710:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var n=s(5671),a=s(3144),r=s(136),i=s(2882),l=s(2791),o=s(8983),u=s(4846),d=s(2412),m=s(7947),c=s(6524),h=s(184),p=function(e){(0,r.Z)(s,e);var t=(0,i.Z)(s);function s(e){var a;return(0,n.Z)(this,s),(a=t.call(this,e)).setName=function(e){a.setState({name:e.target.value})},a.setSurname=function(e){a.setState({surname:e.target.value})},a.setGender=function(e){a.setState({gender:e.target.value})},a.setAddress=function(e){a.setState({address:e.target.value})},a.setNumberPhone=function(e){a.setState({numberPhone:e.target.value})},a.setEmail=function(e){a.setState({email:e.target.value})},a.state={pending:!1,name:"",surname:"",gender:"",address:"",numberPhone:"",email:"",message:"",load:!1},a}return(0,a.Z)(s,[{key:"componentDidMount",value:function(){}},{key:"getError",value:function(e){return{"Username already used.":"Ce nom d'utilisateur est d\xe9j\xe0 utilis\xe9.","Email address already used.":"Cette adresse mail est d\xe9j\xe0 utilis\xe9e.","username should not be empty":" Le champ nom d'utilisateur est obligatoire ","email should not be empty":" Le champ email est obligatoire","email must be an email":" Email incorrect"}[e]}},{key:"addClient",value:function(){var e=this;this.setLoad(!0),this.setPending(!0);var t=this.state.email;""===this.state.email&&(t=null),fetch((0,m.Z)("customer"),{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({name:this.state.name,surname:this.state.surname,gender:this.state.gender,address:this.state.address,number_phone:parseInt(this.state.numberPhone),email:t})}).then((function(t){t.ok?t.json().then((function(t){e.setMessage("Ajout r\xe9ussi"),e.setLoad(!1),e.props.history.push("/Home")})):t.json().then((function(t){t&&(e.setMessage(t.message+", la cr\xe9ation a \xe9chou\xe9"),e.setLoad(!1))}))}))}},{key:"render",value:function(){var e=this,t=this.state,s=t.message,n=t.name,a=t.surname,r=t.address,i=t.numberPhone,l=t.email,m=t.load;return(0,h.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:(0,h.jsx)(o.KB,{children:(0,h.jsx)(o.rb,{className:"justify-content-center",children:(0,h.jsx)(o.b7,{md:9,lg:7,xl:6,children:(0,h.jsx)(o.xH,{className:"mx-4",children:(0,h.jsx)(o.sl,{className:"p-4",children:(0,h.jsxs)(o.lx,{onSubmit:function(e){e.preventDefault()},children:[(0,h.jsx)("h1",{children:"Ajout Client"}),(0,h.jsxs)(o.YR,{className:"mb-3",children:[(0,h.jsx)(o.wV,{children:(0,h.jsx)(u.Z,{icon:d.E})}),(0,h.jsx)(o.jO,{type:"text",placeholder:"Nom",autoComplete:"Nom",value:n,onChange:this.setName})]}),(0,h.jsxs)(o.YR,{className:"mb-3",children:[(0,h.jsx)(o.wV,{children:(0,h.jsx)(u.Z,{icon:d.E})}),(0,h.jsx)(o.jO,{type:"text",placeholder:"Pr\xe9nom",autoComplete:"Pr\xe9nom",value:a,onChange:this.setSurname})]}),(0,h.jsxs)(o.YR,{className:"mb-3",children:[(0,h.jsx)(o.wV,{children:(0,h.jsx)(u.Z,{icon:d.E})}),(0,h.jsx)(o.jO,{type:"text",placeholder:"Adresse",autoComplete:"Adresse",value:r,onChange:this.setAddress})]}),(0,h.jsxs)(o.YR,{className:"mb-3",children:[(0,h.jsx)(o.wV,{children:(0,h.jsx)(u.Z,{icon:d.E})}),(0,h.jsx)(o.jO,{type:"number",placeholder:"Num\xe9ro de t\xe9l\xe9phone",autoComplete:"Num\xe9ro de t\xe9l\xe9phone",value:i,onChange:this.setNumberPhone})]}),(0,h.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",height:"68px"},children:[(0,h.jsx)(o.EC,{inline:!0,type:"radio",id:"Homme",name:"gender",label:"Homme",value:"M",onChange:this.setGender}),(0,h.jsx)(o.EC,{inline:!0,type:"radio",id:"Femme",name:"gender",label:"Femme",value:"F",onChange:this.setGender})]}),(0,h.jsxs)(o.YR,{className:"mb-3",children:[(0,h.jsx)(o.wV,{children:"@"}),(0,h.jsx)(o.jO,{type:"email",placeholder:"Email",autoComplete:"email",value:l,onChange:this.setEmail})]}),(0,h.jsxs)("div",{className:"d-grid",children:[m?(0,h.jsx)(o.u5,{id:"aim-color-green",className:"px-4",disabled:!0,children:(0,h.jsx)(c.Z,{})}):(0,h.jsx)(o.u5,{color:"success",type:"submit",onClick:function(){return e.addClient()},children:"Valider"}),s]})]})})})})})})})}},{key:"setLoad",value:function(e){this.setState({load:e})}},{key:"setPending",value:function(e){this.setState({pending:e})}},{key:"setMessage",value:function(e){this.setState({message:e})}},{key:"setError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e?this.setState({error:e,message:e,hasError:!0}):this.setState({message:"",error:"",hasError:!1})}}]),s}(l.Component)}}]);
//# sourceMappingURL=228.d76206e4.chunk.js.map