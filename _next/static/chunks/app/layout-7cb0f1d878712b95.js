(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{93524:function(o,e,t){Promise.resolve().then(t.bind(t,44829)),Promise.resolve().then(t.bind(t,10912)),Promise.resolve().then(t.bind(t,61481)),Promise.resolve().then(t.t.bind(t,53054,23)),Promise.resolve().then(t.bind(t,22908)),Promise.resolve().then(t.bind(t,15286))},44829:function(o,e,t){"use strict";t.d(e,{default:function(){return s}});var n=t(22988),i=t(2265),l=t(95885),r=t(2491),a=t(57437);let f=(o,e)=>(0,n.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},e&&!o.vars&&{colorScheme:o.palette.mode}),m=o=>(0,n.Z)({color:(o.vars||o).palette.text.primary},o.typography.body1,{backgroundColor:(o.vars||o).palette.background.default,"@media print":{backgroundColor:(o.vars||o).palette.common.white}}),c=function(o){var e;let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i={};t&&o.colorSchemes&&Object.entries(o.colorSchemes).forEach(e=>{var t;let[n,l]=e;i[o.getColorSchemeSelector(n).replace(/\s*&/,"")]={colorScheme:null==(t=l.palette)?void 0:t.mode}});let l=(0,n.Z)({html:f(o,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:o.typography.fontWeightBold},body:(0,n.Z)({margin:0},m(o),{"&::backdrop":{backgroundColor:(o.vars||o).palette.background.default}})},i),r=null==(e=o.components)||null==(e=e.MuiCssBaseline)?void 0:e.styleOverrides;return r&&(l=[l,r]),l};var s=function(o){let{children:e,enableColorScheme:t=!1}=(0,l.i)({props:o,name:"MuiCssBaseline"});return(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(r.Z,{styles:o=>c(o,t)}),e]})}},10912:function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"BailoutToCSR",{enumerable:!0,get:function(){return i}});let n=t(55592);function i(o){let{reason:e,children:t}=o;if("undefined"==typeof window)throw new n.BailoutToCSRError(e);return t}},61481:function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"PreloadCss",{enumerable:!0,get:function(){return l}});let n=t(57437),i=t(58512);function l(o){let{moduleIds:e}=o;if("undefined"!=typeof window)return null;let t=(0,i.getExpectedRequestStore)("next/dynamic css"),l=[];if(t.reactLoadableManifest&&e){let o=t.reactLoadableManifest;for(let t of e){if(!o[t])continue;let e=o[t].files.filter(o=>o.endsWith(".css"));l.push(...e)}}return 0===l.length?null:(0,n.jsx)(n.Fragment,{children:l.map(o=>(0,n.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:t.assetPrefix+"/_next/"+encodeURI(o),as:"style"},o))})}},22908:function(o,e,t){"use strict";t.r(e),t.d(e,{default:function(){return r}});var n=t(57437),i=t(98913),l=t(67022);function r(o){let{children:e}=o,t={authority:"https://cognito-idp.eu-west-2.amazonaws.com/eu-west-2_zeeDXoJSC",client_id:"286942jcv7sjgqujeqnu6eit4d",redirect_uri:"https://demo.zg-app.com/facilitator/overview",postLogoutRedirectUri:"https://demo.zg-app.com",automaticSilentRenew:!0,autoSignIn:!0,onSigninCallback:async o=>{console.debug("onSigninCallback")},userStore:new i.bA({store:window.localStorage})};return(0,n.jsx)(l.Ho,{...t,children:e})}},15286:function(o,e,t){"use strict";t.d(e,{default:function(){return w}});var n=t(57437),i=t(67036),l=t.n(i),r=t(74050);let{palette:a}=(0,r.Z)(),f=(0,r.Z)(),m=(0,r.Z)(f,{palette:{primary:{main:"#a6a6ffff"},secondary:{main:"#00b4baff"},pageBackground:a.augmentColor({color:{main:"#f5f9faff"}}),sectionBackground:a.augmentColor({color:{main:"#ffffff"}}),headerBarBackground:a.augmentColor({color:{main:"#ffffff"}}),buttonStandard:a.augmentColor({color:{main:"#000000"}}),buttonReverse:a.augmentColor({color:{main:"#ffffff"}}),buttonDangerReverse:a.augmentColor({color:{main:"#f13b4dff"}}),buttonQuiet:a.augmentColor({color:{main:"#f0f0f0ff"}}),connected:a.augmentColor({color:{main:"#b1d9a5ff"}}),disconnected:a.augmentColor({color:{main:"#ff8b85ff"}}),slideSectionBackground:a.augmentColor({color:{main:"#ffffff"}}),optionButtonSelected:a.augmentColor({color:{main:"#7cd9de"}}),optionButtonSelectedBorder:a.augmentColor({color:{main:"#b2e9eb"}}),optionButtonUnselected:a.augmentColor({color:{main:"#e4f6f7"}}),summaryChartBackground:a.augmentColor({color:{main:"#f0f0f0"}}),promptPanelBackground:a.augmentColor({color:{main:"#f0f0f0"}}),progressBlipUnselected:a.augmentColor({color:{main:"#d9d9d9"}}),progressBlipSelected:a.augmentColor({color:{main:"#000000"}}),backgroundAgree:a.augmentColor({color:{main:"#cae3e0"}}),backgroundDisagree:a.augmentColor({color:{main:"#f0ccd1"}}),backgroundDivided:a.augmentColor({color:{main:"#f5e6c4"}}),updinkBackground:a.augmentColor({color:{main:"#f0f7ed"}}),updinkText:a.augmentColor({color:{main:"#2c2e33"}}),downdinkBackground:a.augmentColor({color:{main:"#ffe6e6"}}),downdinkText:a.augmentColor({color:{main:"#2a2e33"}}),recordingEnabled:a.augmentColor({color:{main:"#27ba02"}}),recordingDisabled:a.augmentColor({color:{main:"#ffffff"}}),recordingUploading:a.augmentColor({color:{main:"#ffcc85"}}),recordingFailed:a.augmentColor({color:{main:"#ff8b85"}}),pollingInProgress:a.augmentColor({color:{main:"#ffcc85"}}),pollingComplete:a.augmentColor({color:{main:"#b1d9a5"}}),pollingInProgressBackground:a.augmentColor({color:{main:"#ebebff"}}),taskReady:a.augmentColor({color:{main:"#b1d9a5ff"}}),taskRunning:a.augmentColor({color:{main:"#7cd9de"}}),taskWaiting:a.augmentColor({color:{main:"#ffcc85"}}),taskCancelled:a.augmentColor({color:{main:"#ffcc85"}}),taskFailed:a.augmentColor({color:{main:"#ff8b85ff"}}),taskSuccess:a.augmentColor({color:{main:"#b1d9a5ff"}}),rankedListAltBackground:a.augmentColor({color:{main:"#eeeeeeff"}}),rankedListItemBorder:a.augmentColor({color:{main:"#808080ff"}}),rankingBarBackground:a.augmentColor({color:{main:"#ffffffff"}}),rankingBarBorder:a.augmentColor({color:{main:"#444444ff"}}),rankingBarCentreLine:a.augmentColor({color:{main:"#0000007f"}}),rankingBarPositive:a.augmentColor({color:{main:"#90ee90ff"}}),rankingBarNeutral:a.augmentColor({color:{main:"#ffa500ff"}}),rankingBarNegative:a.augmentColor({color:{main:"#ff6347ff"}}),rankingBreakdownArrowPositive:a.augmentColor({color:{main:"#40b8a8ff"}}),rankingBreakdownBoxBorder:a.augmentColor({color:{main:"#d3d3d3ff"}}),callControlButton:a.augmentColor({color:{main:"#a5a5ffff",light:"#c1c1ffff",dark:"#6c63ffff"}}),callControlButtonIcon:a.augmentColor({color:{main:"#ffffffff"}}),callControlButtonOff:a.augmentColor({color:{main:"#f13b4dff",dark:"#f13b4d66"}}),callControlMenuBackground:a.augmentColor({color:{main:"#292d32ff",light:"#a5a5ff66"}}),callControlMenuButton:a.augmentColor({color:{main:"#a5a5ff99"}}),callControlMenuDivider:a.augmentColor({color:{main:"#a5a5ff4d"}}),callControlMenuItem:a.augmentColor({color:{main:"#f0f0f0ff"}}),callControlPanelBackground:a.augmentColor({color:{main:"#000000ff"}})},typography:{body1:{fontFamily:l().style.fontFamily},body2:{fontFamily:l().style.fontFamily},body3:{fontSize:"1.15rem"},h1:{fontFamily:l().style.fontFamily},h2:{fontFamily:l().style.fontFamily},h3:{fontFamily:l().style.fontFamily},h4:{fontFamily:l().style.fontFamily},h5:{fontFamily:l().style.fontFamily},h6:{fontFamily:l().style.fontFamily},button:{fontFamily:l().style.fontFamily},slideHeading:{fontFamily:l().style.fontFamily,fontSize:"3rem",fontWeight:"bold"},slideSubHeading:{fontFamily:l().style.fontFamily,fontSize:"2rem",fontWeight:"bold"},slideSubHeadingWhite:{fontFamily:l().style.fontFamily,fontSize:"2rem",fontWeight:"bold",color:"#ffffff"},slideSectionHeading:{fontFamily:l().style.fontFamily,fontSize:"2rem",fontWeight:"bold"},slidePrompt:{fontFamily:l().style.fontFamily,fontSize:"2rem"},slideBody:{fontFamily:l().style.fontFamily,fontSize:"1.75rem",fontWeight:"normal",li:{marginTop:"0.5rem"},"li:not(:last-child)":{marginBottom:"1.5rem"}},slideExplanationWhite:{fontFamily:l().style.fontFamily,fontSize:"2rem",color:"white"},selectTiny:{fontFamily:l().style.fontFamily,fontSize:"0.8rem",textTransform:"uppercase",marginBottom:0,paddingBottom:0},selectLarge:{fontFamily:l().style.fontFamily,fontSize:"1.5rem"},submitButton:{fontFamily:l().style.fontFamily,fontSize:"1rem"},questionInstruction:{fontFamily:l().style.fontFamily,fontSize:"1.5rem",alignSelf:"flex-start",textAlign:"start",textTransform:"uppercase"},questionPrompt:{fontFamily:l().style.fontFamily,fontSize:"2.25rem",alignSelf:"flex-start",fontWeight:"normal",textAlign:"start"},questionExplanation:{fontFamily:l().style.fontFamily,fontSize:"1.25rem",alignSelf:"flex-start",textAlign:"start",textTransform:"uppercase"},multiBoxOption:{fontFamily:l().style.fontFamily,fontSize:"1.5rem",color:"white"},sliderMark:{fontFamily:l().style.fontFamily,fontSize:"0.8rem"},upDownQuestion:{fontFamily:l().style.fontFamily,fontSize:"1.75rem"},upDownCategory:{fontFamily:l().style.fontFamily,fontSize:"1.25rem",fontWeight:"bold",textTransform:"uppercase"},pointsAllocationCategoryTitle:{fontFamily:l().style.fontFamily,fontSize:"1rem",fontWeight:"bold",textTransform:"uppercase"},pointsAllocationCategoryDescription:{fontFamily:l().style.fontFamily,fontSize:"1rem"},topOptionsOptionRank:{fontFamily:l().style.fontFamily,fontSize:"1.6rem",fontWeight:"bold"},topOptionsOptionTitle:{fontFamily:l().style.fontFamily,fontSize:"1.25rem",fontWeight:"bold",textTransform:"uppercase"},topOptionsOptionDescription:{fontFamily:l().style.fontFamily,fontSize:"1rem"},topOptionsOptionPoints:{fontFamily:l().style.fontFamily,fontSize:"1rem"},rankedListItemTitle:{fontFamily:l().style.fontFamily,fontSize:"1.5rem",fontWeight:"bold"},rankedListItemDescription:{fontFamily:l().style.fontFamily,fontSize:"1rem"},orderedListItemTitle:{fontFamily:l().style.fontFamily,fontSize:"1.5rem",fontWeight:"bold"},orderedListItemDescription:{fontFamily:l().style.fontFamily,fontSize:"1rem"},sectionHeadingTitle:{fontFamily:l().style.fontFamily,fontSize:"1.3rem",fontWeight:"bold",textTransform:"uppercase"},sectionHeadingDescription:{fontFamily:l().style.fontFamily,fontSize:"1.25rem"},sectionHeadingTitleQuiet:{fontFamily:l().style.fontFamily,fontSize:"1.3rem",opacity:.5,fontWeight:"bold",textTransform:"uppercase"},summaryTitle:{fontFamily:l().style.fontFamily,fontSize:"2rem",fontWeight:"bold"},summaryPrompt:{fontFamily:l().style.fontFamily,fontSize:"1.5rem"},slideAccordionHeading:{fontFamily:l().style.fontFamily,fontSize:"1rem",fontWeight:"bold"},slideAccordionText:{fontFamily:l().style.fontFamily,fontSize:"1rem"},slideInfoText:{fontFamily:l().style.fontFamily,fontSize:"1rem"},yesNoUnsureButton:{fontFamily:l().style.fontFamily,fontSize:"1.5rem",fontWeight:"normal"},demographicGroupHeading:{fontFamily:l().style.fontFamily,fontSize:"1.5rem",fontWeight:"bold"},consentBody:{fontFamily:l().style.fontFamily,fontSize:"1.25rem"}},components:{MuiButton:{defaultProps:{disableElevation:!0},styleOverrides:{root:{textTransform:"none"}}},MuiCssBaseline:{styleOverrides:{html:{fontFamily:l().style.fontFamily,height:"100%"},body:{fontFamily:l().style.fontFamily,background:"#f5f9faff",height:"100%"}}},MuiSwitch:{styleOverrides:{root:{width:42,height:26,padding:0,"& .MuiSwitch-switchBase":{padding:0,margin:2,transitionDuration:"300ms","&.Mui-checked":{transform:"translateX(16px)",color:"#fff","& + .MuiSwitch-track":{backgroundColor:"#40B8A8",opacity:1,border:0},"&.Mui-disabled + .MuiSwitch-track":{opacity:.5}},"&.Mui-focusVisible .MuiSwitch-thumb":{color:"#7d7d7d",border:"6px solid #fff"},"&.Mui-disabled .MuiSwitch-thumb":{color:f.palette.grey[100]},"&.Mui-disabled + .MuiSwitch-track":{opacity:.7}},"& .MuiSwitch-thumb":{boxShadow:"none",boxSizing:"border-box",width:22,height:22},"& .MuiSwitch-track":{borderRadius:13,backgroundColor:"#E9E9EA",opacity:1,transition:f.transitions.create(["background-color"],{duration:500})}}}},MuiTypography:{defaultProps:{variantMapping:{body3:"p"}}}},customStyles:{focusRingReverse:{outline:"2px solid #ffffffff"}}});var c=t(22988),s=t(23950),u=t(2265);let d=u.createContext(null);function y(){return u.useContext(d)}var g="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__",p=function(o){let{children:e,theme:t}=o,i=y(),l=u.useMemo(()=>{let o=null===i?t:"function"==typeof t?t(i):(0,c.Z)({},i,t);return null!=o&&(o[g]=null!==i),o},[t,i]);return(0,n.jsx)(d.Provider,{value:l,children:e})},h=t(22606),b=t(34828),F=t(55158),C=t(24866);let S={};function k(o,e,t){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return u.useMemo(()=>{let i=o&&e[o]||e;if("function"==typeof t){let l=t(i),r=o?(0,c.Z)({},e,{[o]:l}):l;return n?()=>r:r}return o?(0,c.Z)({},e,{[o]:t}):(0,c.Z)({},e,t)},[o,e,t,n])}var x=function(o){let{children:e,theme:t,themeId:i}=o,l=(0,b.Z)(S),r=y()||S,a=k(i,l,t),f=k(i,r,t,!0),m="rtl"===a.direction;return(0,n.jsx)(p,{theme:f,children:(0,n.jsx)(h.T.Provider,{value:a,children:(0,n.jsx)(F.Z,{value:m,children:(0,n.jsx)(C.Z,{value:null==a?void 0:a.components,children:e})})})})},v=t(52737);let B=["theme"];function z(o){let{theme:e}=o,t=(0,s.Z)(o,B),i=e[v.Z];return(0,n.jsx)(x,(0,c.Z)({},t,{themeId:i?v.Z:void 0,theme:i||e}))}function w(o){let{children:e}=o;return(0,n.jsx)(z,{theme:m,children:e})}},53054:function(){},67036:function(o){o.exports={style:{fontFamily:"'__averta_c9805f', '__averta_Fallback_c9805f'"},className:"__className_c9805f"}}},function(o){o.O(0,[742,732,403,971,23,744],function(){return o(o.s=93524)}),_N_E=o.O()}]);