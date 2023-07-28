"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[498],{9498:function(e,r,n){n.r(r);var a=n(9439),i=n(2791),l=n(824),s=n(8410),t=n(9589),o=n(5325),d=n(7298),u=n(9163),c=n(9055),m=n(9434),v=n(9385),h=n(184);r.default=function(){var e=(0,m.I0)(),r=(0,i.useState)(""),n=(0,a.Z)(r,2),f=n[0],p=n[1],x=(0,i.useState)(""),b=(0,a.Z)(x,2),Z=b[0],g=b[1],y=(0,i.useState)(""),I=(0,a.Z)(y,2),N=I[0],q=I[1],R=function(e){var r=e.target,n=r.name,a=r.value;switch(n){case"name":return p(a);case"email":return g(a);case"password":return q(a);default:return}};return(0,h.jsx)(l.xu,{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",bgGradient:"linear(to bottom, #f6f6f6, #ffffff)",children:(0,h.jsxs)(s.W,{p:8,maxW:"400px",bg:"white",boxShadow:"md",borderRadius:"lg",children:[(0,h.jsx)(t.X,{as:"h1",size:"xl",mb:6,textAlign:"center",children:"Registration"}),(0,h.jsxs)(l.xu,{as:"form",onSubmit:function(r){r.preventDefault(),e(v.r5.register({name:f,email:Z,password:N})),p(""),g(""),q("")},children:[(0,h.jsxs)(o.NI,{mb:3,children:[(0,h.jsx)(d.l,{children:"Name"}),(0,h.jsx)(u.I,{type:"text",name:"name",placeholder:"Enter name",value:f,onChange:R,required:!0,borderColor:"gray.400"})]}),(0,h.jsxs)(o.NI,{mb:3,children:[(0,h.jsx)(d.l,{children:"Email"}),(0,h.jsx)(u.I,{type:"email",name:"email",placeholder:"Enter email",value:Z,onChange:R,required:!0,borderColor:"gray.400"})]}),(0,h.jsxs)(o.NI,{mb:3,children:[(0,h.jsx)(d.l,{children:"Password"}),(0,h.jsx)(u.I,{type:"password",name:"password",placeholder:"Enter password",value:N,onChange:R,required:!0,borderColor:"gray.400"})]}),(0,h.jsx)(c.z,{type:"submit",colorScheme:"teal",width:"full",children:"Register"})]})]})})}},7298:function(e,r,n){n.d(r,{l:function(){return v}});var a=n(1413),i=n(4925),l=n(5325),s=n(5597),t=n(6232),o=n(2996),d=n(5113),u=n(6992),c=n(184),m=["className","children","requiredIndicator","optionalIndicator"],v=(0,s.G)((function(e,r){var n,s=(0,t.mq)("FormLabel",e),v=(0,o.Lr)(e),f=(v.className,v.children),p=v.requiredIndicator,x=void 0===p?(0,c.jsx)(h,{}):p,b=v.optionalIndicator,Z=void 0===b?null:b,g=(0,i.Z)(v,m),y=(0,l.NJ)(),I=null!=(n=null==y?void 0:y.getLabelProps(g,r))?n:(0,a.Z)({ref:r},g);return(0,c.jsxs)(d.m.label,(0,a.Z)((0,a.Z)({},I),{},{className:(0,u.cx)("chakra-form__label",v.className),__css:(0,a.Z)({display:"block",textAlign:"start"},s),children:[f,(null==y?void 0:y.isRequired)?x:Z]}))}));v.displayName="FormLabel";var h=(0,s.G)((function(e,r){var n=(0,l.NJ)(),i=(0,l.e)();if(!(null==n?void 0:n.isRequired))return null;var s=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,a.Z)((0,a.Z)({},null==n?void 0:n.getRequiredIndicatorProps(e,r)),{},{__css:i.requiredIndicator,className:s}))}));h.displayName="RequiredIndicator"},5325:function(e,r,n){n.d(r,{NI:function(){return R},NJ:function(){return q},e:function(){return g}});var a=n(1413),i=n(4925),l=n(9439),s=n(9886),t=n(4591),o=n(5597),d=n(6232),u=n(2996),c=n(5113),m=n(6992),v=n(2791),h=n(184),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],p=["getRootProps","htmlProps"],x=(0,s.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,l.Z)(x,2),Z=b[0],g=b[1],y=(0,s.k)({strict:!1,name:"FormControlContext"}),I=(0,l.Z)(y,2),N=I[0],q=I[1];var R=(0,o.G)((function(e,r){var n=(0,d.jC)("Form",e),s=function(e){var r=e.id,n=e.isRequired,s=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,i.Z)(e,f),c=(0,v.useId)(),h=r||"field-".concat(c),p="".concat(h,"-label"),x="".concat(h,"-feedback"),b="".concat(h,"-helptext"),Z=(0,v.useState)(!1),g=(0,l.Z)(Z,2),y=g[0],I=g[1],N=(0,v.useState)(!1),q=(0,l.Z)(N,2),R=q[0],j=q[1],_=(0,v.useState)(!1),k=(0,l.Z)(_,2),C=k[0],F=k[1],P=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:b},e),{},{ref:(0,t.lq)(r,(function(e){e&&j(!0)}))})}),[b]),w=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:r,"data-focus":(0,m.PB)(C),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(s),"data-readonly":(0,m.PB)(d),id:void 0!==e.id?e.id:p,htmlFor:void 0!==e.htmlFor?e.htmlFor:h})}),[h,o,C,s,d,p]),S=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:x},e),{},{ref:(0,t.lq)(r,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[x]),O=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)((0,a.Z)({},e),u),{},{ref:r,role:"group"})}),[u]),T=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!s,isReadOnly:!!d,isDisabled:!!o,isFocused:!!C,onFocus:function(){return F(!0)},onBlur:function(){return F(!1)},hasFeedbackText:y,setHasFeedbackText:I,hasHelpText:R,setHasHelpText:j,id:h,labelId:p,feedbackId:x,helpTextId:b,htmlProps:u,getHelpTextProps:P,getErrorMessageProps:S,getRootProps:O,getLabelProps:w,getRequiredIndicatorProps:T}}((0,u.Lr)(e)),o=s.getRootProps,x=(s.htmlProps,(0,i.Z)(s,p)),b=(0,m.cx)("chakra-form-control",e.className);return(0,h.jsx)(N,{value:x,children:(0,h.jsx)(Z,{value:n,children:(0,h.jsx)(c.m.div,(0,a.Z)((0,a.Z)({},o({},r)),{},{className:b,__css:n.container}))})})}));R.displayName="FormControl",(0,o.G)((function(e,r){var n=q(),i=g(),l=(0,m.cx)("chakra-form__helper-text",e.className);return(0,h.jsx)(c.m.div,(0,a.Z)((0,a.Z)({},null==n?void 0:n.getHelpTextProps(e,r)),{},{__css:i.helperText,className:l}))})).displayName="FormHelperText"},9163:function(e,r,n){n.d(r,{I:function(){return p}});var a=n(1413),i=n(4925),l=n(5325),s=n(6992),t=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var r=function(e){var r,n,t,d=(0,l.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,v=e.required,h=e.isRequired,f=e.isInvalid,p=e.isReadOnly,x=e.isDisabled,b=e.onFocus,Z=e.onBlur,g=(0,i.Z)(e,o),y=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&y.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&y.push(d.helpTextId);return(0,a.Z)((0,a.Z)({},g),{},{"aria-describedby":y.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(r=null!=c?c:x)?r:null==d?void 0:d.isDisabled,isReadOnly:null!=(n=null!=m?m:p)?n:null==d?void 0:d.isReadOnly,isRequired:null!=(t=null!=v?v:h)?t:null==d?void 0:d.isRequired,isInvalid:null!=f?f:null==d?void 0:d.isInvalid,onFocus:(0,s.v0)(null==d?void 0:d.onFocus,b),onBlur:(0,s.v0)(null==d?void 0:d.onBlur,Z)})}(e),n=r.isDisabled,d=r.isInvalid,u=r.isReadOnly,c=r.isRequired,m=(0,i.Z)(r,t);return(0,a.Z)((0,a.Z)({},m),{},{disabled:n,readOnly:u,required:c,"aria-invalid":(0,s.Qm)(d),"aria-required":(0,s.Qm)(c),"aria-readonly":(0,s.Qm)(u)})}var u=n(5597),c=n(6232),m=n(2996),v=n(5113),h=n(184),f=["htmlSize"],p=(0,u.G)((function(e,r){var n=e.htmlSize,l=(0,i.Z)(e,f),t=(0,c.jC)("Input",l),o=d((0,m.Lr)(l)),u=(0,s.cx)("chakra-input",e.className);return(0,h.jsx)(v.m.input,(0,a.Z)((0,a.Z)({size:n},o),{},{__css:t.field,ref:r,className:u}))}));p.displayName="Input",p.id="Input"},8410:function(e,r,n){n.d(r,{W:function(){return m}});var a=n(1413),i=n(4925),l=n(5597),s=n(2996),t=n(6232),o=n(5113),d=n(6992),u=n(184),c=["className","centerContent"],m=(0,l.G)((function(e,r){var n=(0,s.Lr)(e),l=n.className,m=n.centerContent,v=(0,i.Z)(n,c),h=(0,t.mq)("Container",e);return(0,u.jsx)(o.m.div,(0,a.Z)((0,a.Z)({ref:r,className:(0,d.cx)("chakra-container",l)},v),{},{__css:(0,a.Z)((0,a.Z)({},h),m&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));m.displayName="Container"},9589:function(e,r,n){n.d(r,{X:function(){return m}});var a=n(1413),i=n(4925),l=n(5597),s=n(6232),t=n(2996),o=n(5113),d=n(6992),u=n(184),c=["className"],m=(0,l.G)((function(e,r){var n=(0,s.mq)("Heading",e),l=(0,t.Lr)(e),m=(l.className,(0,i.Z)(l,c));return(0,u.jsx)(o.m.h2,(0,a.Z)((0,a.Z)({ref:r,className:(0,d.cx)("chakra-heading",e.className)},m),{},{__css:n}))}));m.displayName="Heading"}}]);
//# sourceMappingURL=498.7ab58157.chunk.js.map