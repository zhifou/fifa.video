import{r as s,I as ie,a as de,t as ue,R as m,c as j,f as H,m as A,C as M,p as q,v as ge,h as U,T as fe,l as X,w as pe,x as me,y as Ce,z as he,j as y,s as be,A as ye}from"./index-Cp2ZiVFR.js";import{W as ve}from"./index-bb3MvCkS.js";var Se={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"},xe=function(t,o){return s.createElement(ie,de({},t,{ref:o,icon:Se}))},$e=s.forwardRef(xe),Oe=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,je=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,Ee="".concat(Oe," ").concat(je).split(/[\s\n]+/),we="aria-",Te="data-";function V(e,t){return e.indexOf(t)===0}function Pe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o;t===!1?o={aria:!0,data:!0,attr:!0}:t===!0?o={aria:!0}:o=ue({},t);var n={};return Object.keys(e).forEach(function(a){(o.aria&&(a==="role"||V(a,we))||o.data&&V(a,Te)||o.attr&&Ee.includes(a))&&(n[a]=e[a])}),n}function W(e){if(e)return{closable:e.closable,closeIcon:e.closeIcon}}function k(e){const{closable:t,closeIcon:o}=e||{};return m.useMemo(()=>{if(!t&&(t===!1||o===!1||o===null))return!1;if(t===void 0&&o===void 0)return null;let n={closeIcon:typeof o!="boolean"&&o!==null?o:void 0};return t&&typeof t=="object"&&(n=Object.assign(Object.assign({},n),t)),n},[t,o])}function G(){const e={};for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return o.forEach(a=>{a&&Object.keys(a).forEach(r=>{a[r]!==void 0&&(e[r]=a[r])})}),e}const Ie={};function Me(e,t){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ie;const n=k(e),a=k(t),r=m.useMemo(()=>Object.assign({closeIcon:m.createElement($e,null)},o),[o]),l=m.useMemo(()=>n===!1?!1:n?G(r,a,n):a===!1?!1:a?G(r,a):r.closable?r:!1,[n,a,r]);return m.useMemo(()=>{if(l===!1)return[!1,null];const{closeIconRender:i}=r,{closeIcon:f}=l;let c=f;if(c!=null){i&&(c=i(f));const g=Pe(l,!0);Object.keys(g).length&&(c=m.isValidElement(c)?m.cloneElement(c,g):m.createElement("span",Object.assign({},g),c))}return[!0,c]},[l,r])}function R(e){return["small","middle","large"].includes(e)}const J=["wrap","nowrap","wrap-reverse"],K=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],Q=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],Ne=(e,t)=>{const o=t.wrap===!0?"wrap":t.wrap;return{[`${e}-wrap-${o}`]:o&&J.includes(o)}},Le=(e,t)=>{const o={};return Q.forEach(n=>{o[`${e}-align-${n}`]=t.align===n}),o[`${e}-align-stretch`]=!t.align&&!!t.vertical,o},ze=(e,t)=>{const o={};return K.forEach(n=>{o[`${e}-justify-${n}`]=t.justify===n}),o};function De(e,t){return j(Object.assign(Object.assign(Object.assign({},Ne(e,t)),Le(e,t)),ze(e,t)))}const Fe=e=>{const{componentCls:t}=e;return{[t]:{display:"flex","&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},Be=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},Ve=e=>{const{componentCls:t}=e,o={};return J.forEach(n=>{o[`${t}-wrap-${n}`]={flexWrap:n}}),o},We=e=>{const{componentCls:t}=e,o={};return Q.forEach(n=>{o[`${t}-align-${n}`]={alignItems:n}}),o},ke=e=>{const{componentCls:t}=e,o={};return K.forEach(n=>{o[`${t}-justify-${n}`]={justifyContent:n}}),o},Ge=()=>({}),Re=H("Flex",e=>{const{paddingXS:t,padding:o,paddingLG:n}=e,a=A(e,{flexGapSM:t,flexGap:o,flexGapLG:n});return[Fe(a),Be(a),Ve(a),We(a),ke(a)]},Ge,{resetStyle:!1});var _e=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};const He=m.forwardRef((e,t)=>{const{prefixCls:o,rootClassName:n,className:a,style:r,flex:l,gap:i,children:f,vertical:c=!1,component:g="div"}=e,C=_e(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:d,direction:x,getPrefixCls:$}=m.useContext(M),u=$("flex",o),[O,v,P]=Re(u),E=c??(d==null?void 0:d.vertical),w=j(a,n,d==null?void 0:d.className,u,v,P,De(u,e),{[`${u}-rtl`]:x==="rtl",[`${u}-gap-${i}`]:R(i),[`${u}-vertical`]:E}),h=Object.assign(Object.assign({},d==null?void 0:d.style),r);return l&&(h.flex=l),i&&!R(i)&&(h.gap=i),O(m.createElement(g,Object.assign({ref:t,className:w,style:h},q(C,["justify","wrap","align"])),f))}),Ae=e=>{const{paddingXXS:t,lineWidth:o,tagPaddingHorizontal:n,componentCls:a,calc:r}=e,l=r(n).sub(o).equal(),i=r(t).sub(o).equal();return{[a]:Object.assign(Object.assign({},ge(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${U(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${a}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${a}-close-icon`]:{marginInlineStart:i,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${a}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${a}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}}),[`${a}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},N=e=>{const{lineWidth:t,fontSizeIcon:o,calc:n}=e,a=e.fontSizeSM;return A(e,{tagFontSize:a,tagLineHeight:U(n(e.lineHeightSM).mul(a).equal()),tagIconSize:n(o).sub(n(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},L=e=>({defaultBg:new fe(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText}),Y=H("Tag",e=>{const t=N(e);return Ae(t)},L);var qe=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};const Ue=s.forwardRef((e,t)=>{const{prefixCls:o,style:n,className:a,checked:r,onChange:l,onClick:i}=e,f=qe(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:c,tag:g}=s.useContext(M),C=v=>{l==null||l(!r),i==null||i(v)},d=c("tag",o),[x,$,u]=Y(d),O=j(d,`${d}-checkable`,{[`${d}-checkable-checked`]:r},g==null?void 0:g.className,a,$,u);return x(s.createElement("span",Object.assign({},f,{ref:t,style:Object.assign(Object.assign({},n),g==null?void 0:g.style),className:O,onClick:C})))}),Xe=e=>pe(e,(t,o)=>{let{textColor:n,lightBorderColor:a,lightColor:r,darkColor:l}=o;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:n,background:r,borderColor:a,"&-inverse":{color:e.colorTextLightSolid,background:l,borderColor:l},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),Je=X(["Tag","preset"],e=>{const t=N(e);return Xe(t)},L);function Ke(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const T=(e,t,o)=>{const n=Ke(o);return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:e[`color${o}`],background:e[`color${n}Bg`],borderColor:e[`color${n}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},Qe=X(["Tag","status"],e=>{const t=N(e);return[T(t,"success","Success"),T(t,"processing","Info"),T(t,"error","Error"),T(t,"warning","Warning")]},L);var Ye=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]]);return o};const Ze=s.forwardRef((e,t)=>{const{prefixCls:o,className:n,rootClassName:a,style:r,children:l,icon:i,color:f,onClose:c,bordered:g=!0,visible:C}=e,d=Ye(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:x,direction:$,tag:u}=s.useContext(M),[O,v]=s.useState(!0),P=q(d,["closeIcon","closable"]);s.useEffect(()=>{C!==void 0&&v(C)},[C]);const E=me(f),w=Ce(f),h=E||w,ee=Object.assign(Object.assign({backgroundColor:f&&!h?f:void 0},u==null?void 0:u.style),r),p=x("tag",o),[ne,te,oe]=Y(p),ae=j(p,u==null?void 0:u.className,{[`${p}-${f}`]:h,[`${p}-has-color`]:f&&!h,[`${p}-hidden`]:!O,[`${p}-rtl`]:$==="rtl",[`${p}-borderless`]:!g},n,a,te,oe),z=S=>{S.stopPropagation(),c==null||c(S),!S.defaultPrevented&&v(!1)},[,re]=Me(W(e),W(u),{closable:!1,closeIconRender:S=>{const ce=s.createElement("span",{className:`${p}-close-icon`,onClick:z},S);return he(S,ce,b=>({onClick:B=>{var I;(I=b==null?void 0:b.onClick)===null||I===void 0||I.call(b,B),z(B)},className:j(b==null?void 0:b.className,`${p}-close-icon`)}))}}),le=typeof d.onClick=="function"||l&&l.type==="a",D=i||null,se=D?s.createElement(s.Fragment,null,D,l&&s.createElement("span",null,l)):l,F=s.createElement("span",Object.assign({},P,{ref:t,className:ae,style:ee}),se,re,E&&s.createElement(Je,{key:"preset",prefixCls:p}),w&&s.createElement(Qe,{key:"status",prefixCls:p}));return ne(le?s.createElement(ve,{component:"Tag"},F):F)}),Z=Ze;Z.CheckableTag=Ue;const en="_live_gk0jk_1",nn="_signal_gk0jk_5",_={live:en,signal:nn},tn=({time:e,type:t,homeTeam:o,guestTeam:n,signals:a=[]})=>y.jsx(be,{title:`${e} ${t} ${o}vs${n} 高清直播`,children:y.jsxs("div",{className:_.live,children:[y.jsx("div",{className:_.topic,children:"直播中"}),y.jsx(He,{gap:"4px 0",wrap:!0,children:a.map((r,l)=>y.jsx(Z,{color:"default",children:"default"},l))})]})}),rn=()=>{const e=ye(),[t,o]=s.useState(""),[n,a]=s.useState(""),[r,l]=s.useState(""),[i,f]=s.useState(""),[c,g]=s.useState([]);return console.log("EuropeCupMatch",e),s.useEffect(()=>{},[]),y.jsx("div",{children:y.jsx(tn,{time:t,type:n,homeTeam:r,guestTeam:i,signals:c})})};export{rn as default};
