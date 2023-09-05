"use strict";(self.webpackChunkgouvernance=self.webpackChunkgouvernance||[]).push([[976],{7947:function(e,t,s){function n(e){return"".concat("https://dam-api-qa.northeurope.cloudapp.azure.com","/").concat(e)}s.d(t,{Z:function(){return n}})},6524:function(e,t,s){var n=s(5671),a=s(3144),r=s(136),i=s(2882),o=s(2791),l=s(8983),u=s(184),c=function(e){(0,r.Z)(s,e);var t=(0,i.Z)(s);function s(){return(0,n.Z)(this,s),t.apply(this,arguments)}return(0,a.Z)(s,[{key:"render",value:function(){return(0,u.jsx)(l.LQ,{})}}]),s}(o.Component);t.Z=c},4976:function(e,t,s){s.r(t),s.d(t,{default:function(){return j}});var n=s(5671),a=s(3144),r=s(136),i=s(2882),o=s(2791),l=s(8983),u=s(4846),c=s(2412),d=s(3232),m=s(7947),h=s(6524),p=s(184),j=function(e){(0,r.Z)(s,e);var t=(0,i.Z)(s);function s(e){var a;return(0,n.Z)(this,s),(a=t.call(this,e)).setUserName=function(e){a.setState({username:e.target.value})},a.setName=function(e){a.setState({name:e.target.value})},a.setSurname=function(e){a.setState({surname:e.target.value})},a.setGender=function(e){a.setState({gender:e.target.value})},a.setAddress=function(e){a.setState({address:e.target.value})},a.setNumberPhone=function(e){a.setState({numberPhone:e.target.value})},a.setEmail=function(e){a.setState({email:e.target.value})},a.setPassword=function(e){a.setState({password:e.target.value})},a.setRole=function(e){a.setState({role:e.target.value})},a.state={pending:!1,users:[],roles:[],name:"",surname:"",gender:"",username:"",address:"",numberPhone:"",email:"",password:"",role:"",message:"",load:!1},a}return(0,a.Z)(s,[{key:"componentDidMount",value:function(){this.getAllRole()}},{key:"getError",value:function(e){return{"Username already used.":"Ce nom d'utilisateur est d\xe9j\xe0 utilis\xe9.","Email address already used.":"Cette adresse mail est d\xe9j\xe0 utilis\xe9e.","username should not be empty":" Le champ nom d'utilisateur est obligatoire ","email should not be empty":" Le champ email est obligatoire","email must be an email":" Email incorrect"}[e]}},{key:"getAllRole",value:function(){var e=this;fetch((0,m.Z)("role")).then((function(t){t.ok&&t.json().then((function(t){t&&t.roles&&e.setState({roles:t.roles})}))}))}},{key:"addUser",value:function(){var e=this,t=this.state.email;""===this.state.email&&(t=null),this.setLoad(!0),fetch((0,m.Z)("users/createUser"),{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({name:this.state.name,surname:this.state.surname,gender:this.state.gender,address:this.state.address,number_phone:parseInt(this.state.numberPhone),email:t,username:this.state.username,password:this.state.password,role_id:parseInt(this.state.role)})}).then((function(t){t.ok?t.json().then((function(t){e.setMessage("Ajout r\xe9ussi"),e.setLoad(!1),e.props.history.push("/Home")})):t.json().then((function(t){t&&(e.setMessage(t.message+", la cr\xe9ation a \xe9chou\xe9."),e.setLoad(!1))}))}))}},{key:"render",value:function(){var e=this,t=this.state,s=t.roles,n=t.name,a=t.surname,r=t.password,i=t.username,o=t.address,m=t.numberPhone,j=t.email,x=t.message,g=t.load;return(0,p.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:(0,p.jsx)(l.KB,{children:(0,p.jsx)(l.rb,{className:"justify-content-center",children:(0,p.jsx)(l.b7,{md:9,lg:7,xl:6,children:(0,p.jsx)(l.xH,{className:"mx-4",children:(0,p.jsx)(l.sl,{className:"p-4",children:(0,p.jsxs)(l.lx,{onSubmit:function(e){e.preventDefault()},children:[(0,p.jsx)("h1",{children:"Ajout Utilisateur"}),(0,p.jsxs)(l.YR,{className:"mb-3",children:[(0,p.jsx)(l.wV,{children:(0,p.jsx)(u.Z,{icon:c.E})}),(0,p.jsx)(l.jO,{type:"text",placeholder:"Nom",autoComplete:"Nom",value:n,onChange:this.setName})]}),(0,p.jsxs)(l.YR,{className:"mb-3",children:[(0,p.jsx)(l.wV,{children:(0,p.jsx)(u.Z,{icon:c.E})}),(0,p.jsx)(l.jO,{type:"text",placeholder:"Pr\xe9nom",autoComplete:"Pr\xe9nom",value:a,onChange:this.setSurname})]}),(0,p.jsxs)(l.YR,{className:"mb-3",children:[(0,p.jsx)(l.wV,{children:(0,p.jsx)(u.Z,{icon:c.E})}),(0,p.jsx)(l.jO,{type:"text",placeholder:"Adresse",autoComplete:"Adresse",value:o,onChange:this.setAddress})]}),(0,p.jsxs)(l.YR,{className:"mb-3",children:[(0,p.jsx)(l.wV,{children:(0,p.jsx)(u.Z,{icon:c.E})}),(0,p.jsx)(l.jO,{type:"number",placeholder:"Num\xe9ro de t\xe9l\xe9phone",autoComplete:"Num\xe9ro de t\xe9l\xe9phone",value:m,onChange:this.setNumberPhone})]}),(0,p.jsxs)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"center",height:"68px"},children:[(0,p.jsx)(l.EC,{inline:!0,type:"radio",id:"Homme",name:"gender",label:"Homme",value:"M",onChange:this.setGender}),(0,p.jsx)(l.EC,{inline:!0,type:"radio",id:"Femme",name:"gender",label:"Femme",value:"F",onChange:this.setGender})]}),(0,p.jsxs)(l.YR,{className:"mb-3",children:[(0,p.jsx)(l.wV,{children:"@"}),(0,p.jsx)(l.jO,{type:"email",placeholder:"Email",autoComplete:"email",value:j,onChange:this.setEmail})]}),(0,p.jsxs)(l.YR,{className:"mb-3",children:[(0,p.jsx)(l.wV,{children:(0,p.jsx)(u.Z,{icon:d.U})}),(0,p.jsx)(l.jO,{type:"text",placeholder:"Nom d'utilisateur",autoComplete:"Nom d'utilisateur",value:i,onChange:this.setUserName})]}),(0,p.jsxs)(l.YR,{className:"mb-3",children:[(0,p.jsx)(l.wV,{children:(0,p.jsx)(u.Z,{icon:d.U})}),(0,p.jsx)(l.jO,{type:"password",placeholder:"Mot de passe",autoComplete:"Mot de passe",value:r,onChange:this.setPassword})]}),(0,p.jsxs)(l.YR,{className:"mb-3",children:[(0,p.jsx)(l.wV,{component:"label",htmlFor:"inputGroupSelect01",children:"Role"}),(0,p.jsxs)(l.LX,{id:"inputGroupSelect01",onChange:this.setRole,children:[(0,p.jsx)("option",{children:" "}),s&&s.map((function(e,t){return(0,p.jsx)("option",{value:e.id,children:e.entitled},t)}))]})]}),(0,p.jsxs)("div",{className:"d-grid",children:[g?(0,p.jsx)(l.u5,{id:"aim-color-green",className:"px-4",disabled:!0,children:(0,p.jsx)(h.Z,{})}):(0,p.jsx)(l.u5,{type:"submit",color:"success",onClick:function(){return e.addUser()},children:"Valider"}),x]})]})})})})})})})}},{key:"setPending",value:function(e){this.setState({pending:e})}},{key:"setMessage",value:function(e){this.setState({message:e})}},{key:"setLoad",value:function(e){this.setState({load:e})}},{key:"setError",value:function(e){e?this.setState({error:e,message:e,hasError:!0}):this.setState({message:"",error:"",hasError:!1})}}]),s}(o.Component)},3232:function(e,t,s){s.d(t,{U:function(){return n}});var n=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=976.3e730bf6.chunk.js.map