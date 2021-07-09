(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7336:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var i=t(5893),r=t(1120),a=t(1749),u=t(2318),s=t(3128),c=t(7294),l=t(7596),o=t(8463),d=t(9501),m=t(7513),h=(0,r.Z)((function(e){return{root:{width:"11rem",height:"11rem",padding:"1rem"}}})),j=function(e){var n=e.debt,t=h(),r=(0,c.useState)(!0),j=r[0],x=r[1],f=(0,c.useState)(n.title),Z=f[0],b=f[1],v=(0,c.useState)(n.balance),y=v[0],g=v[1],p=(0,c.useState)(n.interestRate),N=p[0],R=p[1],E=(0,c.useState)(n.minimumPayment),_=E[0],w=E[1],T=d.Ry({title:d.Z_().required("A DEBT TITLE is required"),balance:d.Rx().min(.01).required("A BALANCE is required"),interestRate:d.Rx().min(1e-6).required("An INTEREST RATE is required"),minimumPayment:d.Rx().min(.01).required("A MINIMUM PAYMENT is required")});(0,m.TA)({initialValues:{title:Z,balance:y,interestRate:N,minimumPayment:_},validationSchema:T,onSubmit:function(e){console.log(e)}});return(0,i.jsx)(o.Z,{className:t.root,children:j?(0,i.jsxs)(a.Z,{container:!0,direction:"column",justify:"space-around",children:[(0,i.jsx)(s.Z,{onClick:function(){return x(!1)},children:"Save"}),(0,i.jsx)(l.Z,{label:"Title",value:Z,onChange:function(e){return b(e.target.value)},variant:"outlined"}),(0,i.jsx)(l.Z,{label:"Balance",value:y,onChange:function(e){return g(Number(e.target.value))},variant:"outlined"}),(0,i.jsx)(l.Z,{label:"Interest Rate",value:N,onChange:function(e){return R(Number(e.target.value))},variant:"outlined"}),(0,i.jsx)(l.Z,{label:"Minimum Payment",value:_,onChange:function(e){return w(Number(e.target.value))},variant:"outlined"})]}):(0,i.jsxs)(a.Z,{container:!0,direction:"column",justify:"space-around",children:[(0,i.jsxs)(a.Z,{item:!0,container:!0,justify:"space-between",children:[(0,i.jsx)(u.Z,{variant:"h5",children:Z}),(0,i.jsx)(s.Z,{onClick:function(){return x(!0)},children:"Edit"})]}),(0,i.jsxs)(a.Z,{item:!0,container:!0,justify:"space-between",children:[(0,i.jsx)(u.Z,{variant:"body1",children:"Balance:"}),(0,i.jsxs)(u.Z,{children:[" ",y]})]}),(0,i.jsxs)(a.Z,{item:!0,container:!0,justify:"space-between",children:[(0,i.jsx)(u.Z,{variant:"body1",children:"Interest Rate:"}),(0,i.jsxs)(u.Z,{children:[" ",N]})]}),(0,i.jsxs)(a.Z,{item:!0,container:!0,justify:"space-between",children:[(0,i.jsx)(u.Z,{variant:"body1",children:"Minimum Payment"}),(0,i.jsxs)(u.Z,{children:[" ",_]})]})]})})},x=[{title:"Visa",balance:12130.54,interestRate:.2399,minimumPayment:315}],f={title:"",balance:0,interestRate:0,minimumPayment:0},Z=t(3430),b=(0,r.Z)((function(e){return{root:{height:"100%"},addButton:{marginLeft:"1rem",padding:"0.5rem",height:"3rem",width:"3rem",borderRadius:"50%",border:"1px solid gray"}}})),v=function(){var e=b(),n=(0,c.useState)(x),t=n[0],r=n[1];return(0,i.jsxs)(a.Z,{container:!0,direction:"column",children:[(0,i.jsxs)(a.Z,{item:!0,container:!0,alignItems:"center",children:[(0,i.jsx)(u.Z,{variant:"h4",children:"Your Debts:"}),(0,i.jsx)(s.Z,{className:e.addButton,onClick:function(){r(t.concat(f))},children:(0,i.jsx)(Z.Z,{})})]}),(0,i.jsx)(a.Z,{item:!0,container:!0,children:t.map((function(e,n){return(0,i.jsx)(j,{debt:e},"debt-".concat(n))}))})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7336)}])}},function(e){e.O(0,[847,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);