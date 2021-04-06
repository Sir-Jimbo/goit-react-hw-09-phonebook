(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[4],{137:function(t,e,n){"use strict";var c=n(37),a=function(t){return t.phonebook.filter},r=function(t){return t.phonebook.contacts},o={getLoading:function(t){return t.phonebook.loading},getFilter:a,getVisibleContacts:Object(c.a)([r,a],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),getAllContacts:r,getError:function(t){return t.phonebook.error}};e.a=o},138:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var c=n(2),a=n(0),r=n(154),o=n(12),i=n(137),s=n(20),u=n(4),l=n(13),b=n(139),j=n.n(b);function f(t){var e=t.message,n=Object(l.b)(),b=Object(l.c)(i.a.getError),f=Object(l.c)(s.a.getError),m=Object(a.useCallback)((function(){return n(o.e())}),[n]),_=Object(a.useCallback)((function(){return n(u.a.clearError())}),[n]);return Object(a.useEffect)((function(){setTimeout((function(){_()}),2500)}),[f,_]),Object(a.useEffect)((function(){setTimeout((function(){m()}),2500)}),[b,m]),Object(c.jsx)(r.a,{in:e,timeout:250,classNames:j.a,unmountOnExit:!0,children:Object(c.jsx)("div",{className:j.a.overlay,children:Object(c.jsx)("p",{className:j.a.message,children:e})})})}},139:function(t,e,n){t.exports={overlay:"Notification_overlay__13cfF",message:"Notification_message__39aLV",enter:"Notification_enter__eNvAZ",enterActive:"Notification_enterActive__34z5D",exit:"Notification_exit__1eTq2",exitActive:"Notification_exitActive__3N3ft"}},140:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(48);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],c=!0,a=!1,r=void 0;try{for(var o,i=t[Symbol.iterator]();!(c=(o=i.next()).done)&&(n.push(o.value),!e||n.length!==e);c=!0);}catch(s){a=!0,r=s}finally{try{c||null==i.return||i.return()}finally{if(a)throw r}}return n}}(t,e)||Object(c.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},145:function(t,e,n){t.exports={container:"ContactForm_container__2r271",label:"ContactForm_label__4jA8B",input:"ContactForm_input__3rd77",button:"ContactForm_button__2Z_ve"}},146:function(t,e,n){t.exports={container:"Filter_container__2Uv33",title:"Filter_title__1wMwU",label:"Filter_label__1fMsg",input:"Filter_input__2l4Y4",appear:"Filter_appear__1Rgec",appearActive:"Filter_appearActive__8hyTh",exit:"Filter_exit__3vZQP",exitActive:"Filter_exitActive__JHNm6"}},147:function(t,e,n){t.exports={item:"Contact_item__2ZKmC",button:"Contact_button__1cB20"}},148:function(t,e,n){t.exports={enter:"ContactList_enter__3k_vr",enterActive:"ContactList_enterActive__2EZzB",exit:"ContactList_exit__4H11e",exitActive:"ContactList_exitActive__14z2B"}},149:function(t,e,n){t.exports={logo:"Logo_logo__rlqmc"}},153:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return L}));var c=n(2),a=n(0),r=n(13),o=n(140),i=n(25),s=n.n(i),u=n(12),l={fetchContacts:function(){return function(t){t(Object(u.j)()),s.a.get("/contacts").then((function(e){var n=e.data;return t(Object(u.k)(n))})).catch((function(e){return t(Object(u.i)(e))}))}},addContact:function(t,e){return function(n){var c={name:t,number:e};n(Object(u.b)()),s.a.post("/contacts",c).then((function(t){var e=t.data;return n(Object(u.c)(e))})).catch((function(t){return n(Object(u.a)(t.message))}))}},deleteContact:function(t){return function(e){e(Object(u.g)()),s.a.delete("/contacts/".concat(t)).then((function(){return e(Object(u.h)(t))})).catch((function(t){return e(Object(u.f)(t.message))}))}}},b=n(137),j=n(138),f=n(145),m=n.n(f);function _(){var t=Object(r.b)(),e=Object(a.useState)(""),n=Object(o.a)(e,2),i=n[0],s=n[1],u=Object(a.useState)(""),f=Object(o.a)(u,2),_=f[0],O=f[1],h=Object(a.useState)(null),d=Object(o.a)(h,2),p=d[0],x=d[1],v=Object(r.c)(b.a.getAllContacts),g=function(t){x(t),setTimeout((function(){x(null)}),2500)},C=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":s(c);break;case"number":O(c);break;default:console.warn("\u0422\u0438\u043f \u043f\u043e\u043b\u044f name - ".concat(n," \u043d\u0435 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f!"))}};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j.a,{message:p}),Object(c.jsxs)("form",{className:m.a.container,onSubmit:function(e){e.preventDefault(),""!==i?""!==_?v.find((function(t){return t.name.toLowerCase()===i.toLowerCase()}))?g("Contact already exists!"):(!function(e,n){t(l.addContact(e,n))}(i,_),s(""),O("")):g("Enter concact phone, please!"):g("Enter contact name, please!")},children:[Object(c.jsx)("label",{className:m.a.label,children:"Name"}),Object(c.jsx)("input",{className:m.a.input,type:"text",name:"name",placeholder:"enter your name",value:i,onChange:C}),Object(c.jsx)("label",{className:m.a.label,children:"Phone number"}),Object(c.jsx)("input",{className:m.a.input,type:"tel",name:"number",placeholder:"enter your number",value:_,onChange:C}),Object(c.jsx)("button",{className:m.a.button,type:"submit",children:"Add contact"})]})]})}var O=n(154),h=n(146),d=n.n(h);function p(){var t=Object(r.b)(),e=Object(r.c)(b.a.getFilter),n=Object(r.c)(b.a.getAllContacts);return Object(c.jsx)(O.a,{in:n.length>1,appear:!0,timeout:250,classNames:d.a,unmountOnExit:!0,children:Object(c.jsxs)("div",{className:d.a.container,children:[Object(c.jsx)("h2",{className:d.a.title,children:" Contacts "}),Object(c.jsx)("label",{className:d.a.label,children:"Find contacts by name:"}),Object(c.jsx)("input",{className:d.a.input,placeholder:"search by name",type:"text",value:e,onChange:function(e){return t(u.d(e.target.value))}})]})})}var x=n(135),v=n(147),g=n.n(v),C=function(t){var e=t.id,n=t.name,a=t.number,r=t.onClick;return Object(c.jsxs)("li",{className:g.a.item,children:[Object(c.jsx)("p",{className:g.a.contact,children:n}),Object(c.jsx)("p",{className:g.a.contact,children:a}),Object(c.jsx)("button",{className:g.a.button,type:"button",onClick:r,children:"x"})]},e)},N=n(148),y=n.n(N);function A(){var t=Object(r.b)(),e=Object(r.c)(b.a.getVisibleContacts);return Object(c.jsx)(x.a,{component:"ul",className:y.a.list,children:e.map((function(e){var n=e.id,a=e.name,r=e.number;return Object(c.jsx)(O.a,{timeout:250,classNames:y.a,children:Object(c.jsx)(C,{id:n,name:a,number:r,onClick:function(){return function(e){return t(l.deleteContact(e))}(n)}})},n)}))})}var k=n(149),F=n.n(k),w=function(){return Object(c.jsx)("h1",{className:F.a.logo,children:"Phonebook"})},E=n(34);function L(){var t=Object(r.c)(b.a.getAllContacts),e=Object(r.c)(b.a.getLoading),n=Object(r.c)(b.a.getError),o=Object(r.b)();return Object(a.useEffect)((function(){o(l.fetchContacts())}),[o]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(w,{}),Object(c.jsx)(j.a,{message:n}),Object(c.jsx)(_,{}),Object(c.jsx)(p,{}),e&&Object(c.jsx)(E.a,{}),Object(c.jsx)(O.a,{in:t.length>0,timeout:0,ommountOnExit:!0,children:Object(c.jsx)(A,{})})]})}}}]);
//# sourceMappingURL=4.d2a641a9.chunk.js.map