"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[778],{1778:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var r=t(9434),c=t(2791),a=t(4190),o=t(6916),s=function(e){return e.contacts.items},i=function(e){return e.contacts.isLoading},l=function(e){return e.contacts.error},u=(0,o.P1)([s,function(e){return e.filter}],(function(e,n){var t=n.query.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))})),x=t(7583),d=t(5705),m=t(2797),f=t(5863),h=t(824),p=t(5777),j=t(3329),y=m.Ry().shape({name:m.Z_().required(),number:m.Z_().required()}),b={name:"",number:""},v=function(){var e=(0,r.I0)();return(0,j.jsx)(a.xu,{m:"0 auto",w:"500px",p:5,children:(0,j.jsx)(d.J9,{initialValues:b,validationSchema:y,children:(0,j.jsx)(d.l0,{autoComplete:"off",onSubmit:function(n){n.preventDefault();var t=n.target.name.value,r=n.target.number.value;e((0,x.uK)({name:t,number:r})),n.target.name.value="",n.target.number.value=""},children:(0,j.jsxs)(f.NI,{isRequired:!0,children:[(0,j.jsxs)(a.Kq,{mb:"20px",children:[(0,j.jsx)(f.lX,{children:"Name"}),(0,j.jsx)(h.II,{name:"name",focusBorderColor:"cyan.500",placeholder:"Name"}),(0,j.jsx)(f.lX,{children:"Number"}),(0,j.jsx)(h.II,{type:"tel",name:"number",focusBorderColor:"cyan.500",placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses"})]}),(0,j.jsx)(p.zx,{type:"submit",colorScheme:"cyan",display:"block",m:"0 auto",color:"white",style:{textTransform:"uppercase"},children:"Add contact"})]})})})})},g=function(e){var n=e.contacts,t=(0,r.I0)();return(0,j.jsx)(a.QI,{w:"700px",m:"0 auto",children:n.map((function(e,n){var r=e.id,c=e.name,o=e.number;return(0,j.jsxs)(a.HC,{display:"flex",justifyContent:"space-between",alignItems:"center",p:2,children:[(0,j.jsxs)(a.xu,{display:"flex",children:[(0,j.jsxs)(a.xv,{fontSize:"xl",as:"b",color:"cyan.500",children:[n+1,"."]}),(0,j.jsxs)(a.xv,{fontSize:"xl",as:"b",color:"cyan.500",children:[c,":"]})]}),(0,j.jsxs)(a.xu,{w:"50%",display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,j.jsx)(a.xv,{fontSize:"xl",as:"b",color:"cyan.500",children:o}),(0,j.jsx)(p.zx,{colorScheme:"cyan",color:"white",onClick:function(){return function(e){t((0,x.GK)(e))}(r)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]},r)}))})},C=t(7574),w=function(e){var n=e.text,t=(0,r.I0)();return(0,j.jsxs)(a.kC,{flexDirection:"column",alignItems:"center",w:"500px",m:"0 auto",p:5,children:[(0,j.jsx)(a.xu,{as:"h2",color:"cyan.500",fontSize:"lg",fontWeight:"bold",mb:5,children:n}),(0,j.jsx)(h.II,{placeholder:"Find your contact...",focusBorderColor:"cyan.500",type:"text",name:"find",onChange:function(e){t((0,C.T)(e.currentTarget.value))}})]})},I=t(3673),k=function(){return(0,j.jsx)(a.xu,{display:"flex",justifyContent:"center",padding:"20px",children:(0,j.jsx)(a.X6,{as:"h2",color:"cyan.500",children:"Add your first friend!"})})},S=function(){var e=(0,r.I0)(),n=(0,r.v9)(s),t=(0,r.v9)(u),o=(0,r.v9)(i),d=(0,r.v9)(l);return(0,c.useEffect)((function(){e((0,x.yF)())}),[e]),(0,j.jsxs)(a.xu,{w:"1200px",m:"0 auto",children:[(0,j.jsx)(a.X6,{as:"h2",size:"3xl",textAlign:"center",m:"20px",color:"cyan.500",style:{textTransform:"uppercase"},children:"Phonebook"}),(0,j.jsx)(v,{}),(0,j.jsx)(a.X6,{as:"h3",textAlign:"center",m:"10px",color:"cyan.500",style:{textTransform:"uppercase"},children:"Contacts"}),(0,j.jsx)(w,{text:"Find contacts by name"}),o&&!d&&(0,j.jsx)(I.a,{}),0!==n.length||o?(0,j.jsx)(g,{contacts:t}):(0,j.jsx)(k,{})]})}}}]);
//# sourceMappingURL=778.f926d7e8.chunk.js.map