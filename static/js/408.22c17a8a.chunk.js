"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[408],{5408:function(e,t,o){o.r(t),o.d(t,{default:function(){return te}});var r=o(9434),n=o(7689),a=o(2149),i=o(1269),s=o(9332),c=o(2791),l=o(3366),u=o(7462),p=o(8182),d=o(4419),v=o(6934),f=o(1402),m=o(4036),h=o(5527),x=o(5878),g=o(1217);function b(e){return(0,g.Z)("MuiAppBar",e)}(0,x.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var Z=o(184),k=["className","color","enableColorOnDark","position"],S=function(e,t){return e?"".concat(null==e?void 0:e.replace(")",""),", ").concat(t,")"):t},C=(0,v.ZP)(h.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["position".concat((0,m.Z)(o.position))],t["color".concat((0,m.Z)(o.color))]]}})((function(e){var t=e.theme,o=e.ownerState,r="light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[900];return(0,u.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===o.position&&{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===o.position&&{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===o.position&&{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},"static"===o.position&&{position:"static"},"relative"===o.position&&{position:"relative"},!t.vars&&(0,u.Z)({},"default"===o.color&&{backgroundColor:r,color:t.palette.getContrastText(r)},o.color&&"default"!==o.color&&"inherit"!==o.color&&"transparent"!==o.color&&{backgroundColor:t.palette[o.color].main,color:t.palette[o.color].contrastText},"inherit"===o.color&&{color:"inherit"},"dark"===t.palette.mode&&!o.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===o.color&&(0,u.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===t.palette.mode&&{backgroundImage:"none"})),t.vars&&(0,u.Z)({},"default"===o.color&&{"--AppBar-background":o.enableColorOnDark?t.vars.palette.AppBar.defaultBg:S(t.vars.palette.AppBar.darkBg,t.vars.palette.AppBar.defaultBg),"--AppBar-color":o.enableColorOnDark?t.vars.palette.text.primary:S(t.vars.palette.AppBar.darkColor,t.vars.palette.text.primary)},o.color&&!o.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":o.enableColorOnDark?t.vars.palette[o.color].main:S(t.vars.palette.AppBar.darkBg,t.vars.palette[o.color].main),"--AppBar-color":o.enableColorOnDark?t.vars.palette[o.color].contrastText:S(t.vars.palette.AppBar.darkColor,t.vars.palette[o.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===o.color?"inherit":"var(--AppBar-color)"},"transparent"===o.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))})),y=c.forwardRef((function(e,t){var o=(0,f.Z)({props:e,name:"MuiAppBar"}),r=o.className,n=o.color,a=void 0===n?"primary":n,i=o.enableColorOnDark,s=void 0!==i&&i,c=o.position,v=void 0===c?"fixed":c,h=(0,l.Z)(o,k),x=(0,u.Z)({},o,{color:a,position:v,enableColorOnDark:s}),g=function(e){var t=e.color,o=e.position,r=e.classes,n={root:["root","color".concat((0,m.Z)(t)),"position".concat((0,m.Z)(o))]};return(0,d.Z)(n,b,r)}(x);return(0,Z.jsx)(C,(0,u.Z)({square:!0,component:"header",ownerState:x,elevation:4,className:(0,p.Z)(g.root,r,"fixed"===v&&"mui-fixed"),ref:t},h))})),w=o(8551),j=o(4708),B=o(4942),R=o(2466),A=o(3457),G=o(7078),M=o(8519),W=o(5080),P=o(1184),N=o(5682),T=["component","direction","spacing","divider","children","className","useFlexGap"],D=(0,W.Z)(),z=(0,A.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}});function I(e){return(0,G.Z)({props:e,name:"MuiStack",defaultTheme:D})}function O(e,t){var o=c.Children.toArray(e).filter(Boolean);return o.reduce((function(e,r,n){return e.push(r),n<o.length-1&&e.push(c.cloneElement(t,{key:"separator-".concat(n)})),e}),[])}var _=function(e){var t=e.ownerState,o=e.theme,r=(0,u.Z)({display:"flex",flexDirection:"column"},(0,P.k9)({theme:o},(0,P.P$)({values:t.direction,breakpoints:o.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var n=(0,N.hB)(o),a=Object.keys(o.breakpoints.values).reduce((function(e,o){return("object"===typeof t.spacing&&null!=t.spacing[o]||"object"===typeof t.direction&&null!=t.direction[o])&&(e[o]=!0),e}),{}),i=(0,P.P$)({values:t.direction,base:a}),s=(0,P.P$)({values:t.spacing,base:a});"object"===typeof i&&Object.keys(i).forEach((function(e,t,o){if(!i[e]){var r=t>0?i[o[t-1]]:"column";i[e]=r}}));r=(0,R.Z)(r,(0,P.k9)({theme:o},s,(function(e,o){return t.useFlexGap?{gap:(0,N.NA)(n,e)}:{"& > :not(style) + :not(style)":(0,B.Z)({margin:0},"margin".concat((r=o?i[o]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,N.NA)(n,e))};var r})))}return r=(0,P.dt)(o.breakpoints,r)};var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,o=void 0===t?z:t,r=e.useThemeProps,n=void 0===r?I:r,a=e.componentName,i=void 0===a?"MuiStack":a,s=function(){return(0,d.Z)({root:["root"]},(function(e){return(0,g.Z)(i,e)}),{})},v=o(_),f=c.forwardRef((function(e,t){var o=n(e),r=(0,M.Z)(o),a=r.component,i=void 0===a?"div":a,c=r.direction,d=void 0===c?"column":c,f=r.spacing,m=void 0===f?0:f,h=r.divider,x=r.children,g=r.className,b=r.useFlexGap,k=void 0!==b&&b,S=(0,l.Z)(r,T),C={direction:d,spacing:m,useFlexGap:k},y=s();return(0,Z.jsx)(v,(0,u.Z)({as:i,ownerState:C,ref:t,className:(0,p.Z)(y.root,g)},S,{children:h?O(x,h):x}))}));return f}({createStyledComponent:(0,v.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}}),useThemeProps:function(e){return(0,f.Z)({props:e,name:"MuiStack"})}}),F=L,$=o(4554);function H(e){return(0,g.Z)("MuiToolbar",e)}(0,x.Z)("MuiToolbar",["root","gutters","regular","dense"]);var E=["className","component","disableGutters","variant"],V=(0,v.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,!o.disableGutters&&t.gutters,t[o.variant]]}})((function(e){var t=e.theme,o=e.ownerState;return(0,u.Z)({position:"relative",display:"flex",alignItems:"center"},!o.disableGutters&&(0,B.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),"dense"===o.variant&&{minHeight:48})}),(function(e){var t=e.theme;return"regular"===e.ownerState.variant&&t.mixins.toolbar})),q=c.forwardRef((function(e,t){var o=(0,f.Z)({props:e,name:"MuiToolbar"}),r=o.className,n=o.component,a=void 0===n?"div":n,i=o.disableGutters,s=void 0!==i&&i,c=o.variant,v=void 0===c?"regular":c,m=(0,l.Z)(o,E),h=(0,u.Z)({},o,{component:a,disableGutters:s,variant:v}),x=function(e){var t=e.classes,o={root:["root",!e.disableGutters&&"gutters",e.variant]};return(0,d.Z)(o,H,t)}(h);return(0,Z.jsx)(V,(0,u.Z)({as:a,className:(0,p.Z)(x.root,r),ref:t,ownerState:h},m))})),Y=o(890),J=o(9164),K=o(7107),Q=o(4507),U=o(533);function X(){return(0,Z.jsxs)(Y.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(0,Z.jsx)(U.Z,{color:"inherit",href:"https://github.com/stanislav-pravdiuk/goit-react-hw-08-phonebook",children:"Stanislav Pravdiuk"})," ",(new Date).getFullYear(),"."]})}var ee=(0,K.Z)();function te(){var e=(0,r.v9)((function(e){return e.auth})).profile,t=(0,n.s0)(),o=(0,r.I0)();return(0,Z.jsxs)(Q.Z,{theme:ee,children:[(0,Z.jsx)(j.ZP,{}),(0,Z.jsx)(y,{position:"relative",children:(0,Z.jsxs)(q,{children:[(0,Z.jsx)(s.Z,{sx:{mr:2}}),(0,Z.jsx)(Y.Z,{variant:"h6",color:"inherit",noWrap:!0,children:"Profile"})]})}),(0,Z.jsx)("main",{children:(0,Z.jsx)($.Z,{sx:{bgcolor:"background.paper",pt:8,pb:6},children:(0,Z.jsxs)(J.Z,{maxWidth:"xl",children:[(0,Z.jsx)(Y.Z,{component:"h1",variant:"h2",align:"center",color:"text.primary",gutterBottom:!0,children:e.email}),(0,Z.jsxs)(F,{sx:{pt:4},direction:"row",spacing:2,justifyContent:"center",children:[(0,Z.jsx)(w.Z,{variant:"contained",onClick:function(){t("/")},children:"Phonebook"}),(0,Z.jsx)(w.Z,{variant:"outlined",onClick:function(){o((0,a.n)()),(0,i.b9)()},children:"Logout"})]})]})})}),(0,Z.jsx)(j.ZP,{}),(0,Z.jsx)($.Z,{sx:{bgcolor:"background.paper",p:6,position:"fixed",bottom:0,width:"100%"},component:"footer",children:(0,Z.jsx)(X,{})})]})}},9332:function(e,t,o){var r=o(4836);t.Z=void 0;var n=r(o(5649)),a=o(184),i=(0,n.default)((0,a.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"}),"AccountBox");t.Z=i},9164:function(e,t,o){o.d(t,{Z:function(){return y}});var r=o(4942),n=o(3366),a=o(7462),i=o(2791),s=o(8182),c=o(7312),l=o(1217),u=o(4419),p=o(7078),d=o(3457),v=o(5080),f=o(184),m=["className","component","disableGutters","fixed","maxWidth","classes"],h=(0,v.Z)(),x=(0,d.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["maxWidth".concat((0,c.Z)(String(o.maxWidth)))],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),g=function(e){return(0,p.Z)({props:e,name:"MuiContainer",defaultTheme:h})},b=function(e,t){var o=e.classes,r=e.fixed,n=e.disableGutters,a=e.maxWidth,i={root:["root",a&&"maxWidth".concat((0,c.Z)(String(a))),r&&"fixed",n&&"disableGutters"]};return(0,u.Z)(i,(function(e){return(0,l.Z)(t,e)}),o)};var Z=o(4036),k=o(6934),S=o(1402),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,o=void 0===t?x:t,c=e.useThemeProps,l=void 0===c?g:c,u=e.componentName,p=void 0===u?"MuiContainer":u,d=o((function(e){var t=e.theme,o=e.ownerState;return(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!o.disableGutters&&(0,r.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,o){var r=o,n=t.breakpoints.values[r];return 0!==n&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(n).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,o=e.ownerState;return(0,a.Z)({},"xs"===o.maxWidth&&(0,r.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),o.maxWidth&&"xs"!==o.maxWidth&&(0,r.Z)({},t.breakpoints.up(o.maxWidth),{maxWidth:"".concat(t.breakpoints.values[o.maxWidth]).concat(t.breakpoints.unit)}))})),v=i.forwardRef((function(e,t){var o=l(e),r=o.className,i=o.component,c=void 0===i?"div":i,u=o.disableGutters,v=void 0!==u&&u,h=o.fixed,x=void 0!==h&&h,g=o.maxWidth,Z=void 0===g?"lg":g,k=(0,n.Z)(o,m),S=(0,a.Z)({},o,{component:c,disableGutters:v,fixed:x,maxWidth:Z}),C=b(S,p);return(0,f.jsx)(d,(0,a.Z)({as:c,ownerState:S,className:(0,s.Z)(C.root,r),ref:t},k))}));return v}({createStyledComponent:(0,k.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["maxWidth".concat((0,Z.Z)(String(o.maxWidth)))],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,S.Z)({props:e,name:"MuiContainer"})}}),y=C},3457:function(e,t,o){var r=(0,o(4046).ZP)();t.Z=r}}]);
//# sourceMappingURL=408.22c17a8a.chunk.js.map