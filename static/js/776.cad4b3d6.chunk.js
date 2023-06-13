"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[776],{6776:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(4942),a=t(1413),s=t(9439),c=t(2791),i="contact-form_contactForm__g733t",u=t(9434),o=t(3198),l=t(184);var d=function(){var e=(0,u.I0)(),n=(0,c.useState)({name:"",number:""}),t=(0,s.Z)(n,2),d=t[0],h=t[1];function m(e){var n=e.currentTarget,t=n.name,s=n.value;h((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},t,s))}))}return(0,l.jsxs)("form",{className:i,onSubmit:function(n){n.preventDefault(),e((0,o.Rx)(d)),h({name:"",number:""})},children:[(0,l.jsxs)("label",{children:["Name",(0,l.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:d.name,onChange:m})]}),(0,l.jsxs)("label",{children:["Number",(0,l.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d.number,onChange:m})]}),(0,l.jsx)("button",{type:"submit",children:"Add contact"})]})},h=function(e){return e.filter.filter},m=function(e){var n=function(e){return e.contacts.items}(e),t=h(e),r=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r};var f=function(){var e=(0,u.I0)(),n=(0,u.v9)(m);return 0!==n.length?(0,l.jsx)("ul",{children:n.map((function(n){return(0,l.jsxs)("li",{children:[(0,l.jsxs)("span",{children:[n.name," ",n.number]}),(0,l.jsx)("button",{onClick:function(){return e((0,o.xX)(n.id))},children:"Delete"})]},n.id)}))}):(0,l.jsx)("p",{children:"No contacts found"})},x="filter_filter__95Yf4",p=t(5145);var b=function(){var e=(0,u.I0)(),n=(0,u.v9)(h);return(0,l.jsxs)("label",{className:x,children:["Find contacts by name",(0,l.jsx)("input",{type:"text",value:n,onChange:function(n){return e((0,p.x)(n.target.value))}})]})},j=t(3862);var v=function(){var e=(0,u.v9)((function(e){return e.contacts})),n=e.items,t=e.isLoading,r=e.error,a=(0,u.I0)();return(0,c.useEffect)((function(){a((0,o.m$)())}),[a]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Phonebook"}),(0,l.jsx)(d,{}),(0,l.jsx)("h2",{children:"Contacts"}),(0,l.jsx)(b,{}),t&&(0,l.jsx)(j.Z,{}),n&&(0,l.jsx)(f,{}),r&&(0,l.jsx)("h2",{children:r})]})}}}]);
//# sourceMappingURL=776.cad4b3d6.chunk.js.map