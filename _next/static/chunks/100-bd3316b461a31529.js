"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[100],{79418:function(e,o,n){function i(e){if(null!=e&&("string"!=typeof e||""!==e.trim()))return parseInt(e)}function t(e){if(null!=e&&("string"!=typeof e||""!==e.trim()))return r(e)}function r(e){return!0===e||!1===e?e:"number"==typeof e?e>0:("string"==typeof e&&(e=e.toLowerCase()),"true"===e||"false"===e)?"true"===e:"yes"===e||"no"===e?"yes"===e:"t"===e||"f"===e?"t"===e:("y"===e||"n"===e)&&"y"===e}n.d(o,{$Q:function(){return t},LC:function(){return i},gx:function(){return r},zW:function(){return function e(o){if(o instanceof Array)return o.map(function(o){return"object"==typeof o&&(o=e(o)),o});{let n={};for(let i in o)if(o.hasOwnProperty(i)){let t=(i.charAt(0).toLowerCase()+i.slice(1)||i).toString(),r=o[i];(r instanceof Array||null!==r&&r.constructor===Object)&&(r=e(r)),n[t]=r}return n}}}})},53622:function(e,o,n){n.d(o,{Z:function(){return s},p:function(){return a}});var i=n(57437),t=n(2265),r=n(79418);let a=(0,t.createContext)({});function s(e){var o;let[n,s]=(0,t.useState)({language:null!==(o=e.searchParams.get("lang"))&&void 0!==o?o:void 0,voiceFocus:(0,r.$Q)(e.searchParams.get("vf")),backgroundBlur:(0,r.$Q)(e.searchParams.get("bb")),storage:e.searchParams.get("storage")});return(0,i.jsx)(a.Provider,{value:n,children:e.children})}},17696:function(e,o,n){n.d(o,{Z:function(){return Z}});var i=n(57437),t=n(31193),r=n(2265),a=n(90089),s=n(88904),l=n(41665),c=n(69065),d=n(80824),u=n(66124),p=n(23269),h=n(98784),m=n(96537),f=n(48612),g=n(53622),b=n(4087),v=n(80511),y=n(7547),x=n(32184);let k={a:e=>(0,i.jsx)(l.Z,{href:e.href,rel:"noopener",sx:{color:"#000"},target:"_blank",children:e.children}),h1:e=>(0,i.jsx)(v.Z,{sx:{fontSize:"3rem",marginBottom:"1.25rem"},variant:"h1",children:e.children}),h2:e=>(0,i.jsx)(v.Z,{sx:{fontSize:"1.875rem",marginBottom:"1.5rem",marginTop:"3.25rem","&:first-of-type":{marginTop:"2.25rem"}},variant:"h2",children:e.children}),li:e=>(0,i.jsx)(y.ZP,{sx:{display:"list-item",paddingBottom:"0",paddingTop:"0"},children:e.children}),ol:e=>(0,i.jsx)(x.Z,{component:"ol",start:e.start,sx:{listStyleType:"lower-alpha",marginTop:"0",paddingBottom:"0",paddingInlineStart:"2rem",paddingTop:"0"},children:e.children}),p:e=>(0,i.jsx)(v.Z,{sx:{marginBottom:"1.25rem"},variant:"body3",children:e.children}),ul:e=>(0,i.jsx)(x.Z,{sx:{listStyleType:"disc",paddingBottom:"0",paddingInlineStart:"2rem",paddingTop:"0"},children:e.children})};function w(){let{t:e}=(0,a.$G)(),{language:o}=(0,r.useContext)(g.p),[n,t]=(0,r.useState)(!1),[v,y]=(0,r.useState)(void 0),x=o||f.aB||f.k$;(0,r.useEffect)(()=>{fetch("/privacy-notice-".concat(x,".md")).then(e=>{if(!0===e.ok)return e.text();throw Error("Response not OK")}).then(e=>{y(e)}).catch(o=>{console.error("Error fetching privacy notice: ",o),y(e("onboarding.privacyNotice.errorLoading",{email:"collective.intelligence@nesta.org.uk"}))})},[]);let w=()=>{t(!0)},j=()=>{t(!1)},Z=e=>{e.preventDefault(),w()};return void 0!==v?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z,{color:"#fff",href:"#privacy-notice",onClick:e=>Z(e),variant:"body3",children:(0,i.jsx)(b.Z,{i18nKey:"onboarding.privacyNotice.link"})}),(0,i.jsxs)(c.Z,{"aria-labelledby":"privacy-notice-dialog-title",maxWidth:"md",onClose:j,open:n,scroll:"paper",children:[(0,i.jsx)(d.Z,{id:"privacy-notice-dialog-title",children:(0,i.jsx)(b.Z,{i18nKey:"onboarding.privacyNotice.heading"})}),(0,i.jsx)(u.Z,{dividers:!0,sx:{padding:"0"},children:(0,i.jsx)(p.Z,{color:"#000",component:"div",ref:e=>{null!==e&&e.focus()},sx:{padding:"2.5rem",":focus-visible":{outline:"none"}},tabIndex:0,variant:"body3",children:(0,i.jsx)(s.U,{components:k,children:v})})}),(0,i.jsx)(h.Z,{children:(0,i.jsx)(m.Z,{color:"buttonStandard",onClick:j,sx:{fontSize:"1rem"},children:(0,i.jsx)(b.Z,{i18nKey:"button.close"})})})]})]}):null}function j(e){let[o,n]=(0,r.useState)(!1),[a,f]=(0,r.useState)(void 0);(0,r.useEffect)(()=>{fetch(e.workshopInformationUrl).then(e=>{if(!0===e.ok)return e.text();throw Error("Response not OK")}).then(e=>{f(e)}).catch(e=>console.error("Error fetching workshop information: ",e))},[e.workshopInformationUrl]);let g=()=>{n(!0)},v=()=>{n(!1)},y=e=>{e.preventDefault(),g()};return void 0!==a?(0,i.jsxs)(t.Z,{sx:{borderLeft:"1px solid #ffffffaa",marginLeft:"1rem",paddingLeft:"1rem"},children:[(0,i.jsx)(l.Z,{color:"#fff",href:"#workshop-information",onClick:e=>y(e),variant:"body3",children:(0,i.jsx)(b.Z,{i18nKey:"onboarding.workshopInformationLink"})}),(0,i.jsxs)(c.Z,{"aria-labelledby":"workshop-information-dialog-title",maxWidth:"md",onClose:v,open:o,scroll:"paper",children:[(0,i.jsx)(d.Z,{id:"workshop-information-dialog-title",children:(0,i.jsx)(b.Z,{i18nKey:"onboarding.workshopInformationLink"})}),(0,i.jsx)(u.Z,{dividers:!0,sx:{padding:"0"},children:(0,i.jsx)(p.Z,{color:"#000",component:"div",ref:e=>{null!==e&&e.focus()},sx:{padding:"2.5rem",":focus-visible":{outline:"none"}},tabIndex:0,variant:"body3",children:(0,i.jsx)(s.U,{components:k,children:a})})}),(0,i.jsx)(h.Z,{children:(0,i.jsx)(m.Z,{color:"buttonStandard",onClick:v,sx:{fontSize:"1rem"},children:(0,i.jsx)(b.Z,{i18nKey:"button.close"})})})]})]}):null}function Z(e){var o;let n=null===(o=e.background)||void 0===o||o;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(t.Z,{sx:{width:"100%",height:"100%",backgroundImage:n?"url(/images/zg-poster.png)":void 0,backgroundSize:"cover",backgroundPosition:"center",position:"relative",overflow:"hidden"},children:[(0,i.jsx)(t.Z,{sx:{position:"absolute",left:0,top:0,width:"50%",bottom:0,backgroundColor:"#3E7075CC"}}),e.rightHalfBackground&&(0,i.jsx)(t.Z,{sx:{position:"absolute",right:"0",top:0,width:"50%",bottom:0,backgroundColor:e.rightHalfBackground}}),(0,i.jsxs)(t.Z,{sx:{position:"absolute",left:"5%",right:"5%",top:0,bottom:0,display:"flex",flexDirection:"column",justifyContent:"center",overflowY:"auto"},children:[(0,i.jsx)(t.Z,{sx:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"center"},children:(0,i.jsxs)(t.Z,{sx:{display:"flex",flexDirection:"row",alignItems:"start"},children:[(0,i.jsx)(t.Z,{sx:{flexGrow:1,flexBasis:0,p:2,pr:"10%"},children:e.children}),(0,i.jsx)(t.Z,{sx:{flexGrow:1,flexBasis:0,p:2},children:e.rightPanel})]})}),(0,i.jsxs)(t.Z,{className:"onboarding-full-width-footer-container",sx:{display:"flex",flexDirection:"row",pl:2,pb:4},children:[e.privacyNotice&&(0,i.jsx)(w,{}),e.workshopInformationUrl&&(0,i.jsx)(j,{workshopInformationUrl:e.workshopInformationUrl})]})]})]})})}},44100:function(e,o,n){n.d(o,{Z:function(){return d}});var i=n(57437),t=n(83593),r=n(31193),a=n(80511),s=n(99128),l=n(2265),c=n(17696);function d(e){let[o,n]=(0,l.useState)(),[d,u]=(0,l.useState)({overall:{completed:0,total:0},bars:{}});return(0,l.useEffect)(()=>(t.Z.on(t.M.Content_Progress_Update,n),()=>{t.Z.off(t.M.Content_Progress_Update,n)}),[]),(0,l.useEffect)(()=>{void 0!==o&&o.type===t.M.Content_Progress_Update&&u(o.data)},[o]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(c.Z,{children:(0,i.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[e.preTitle&&(0,i.jsx)(a.Z,{variant:"body1",color:"white",children:e.preTitle}),e.title&&(0,i.jsx)(a.Z,{variant:"h2",color:"white",children:e.title}),(0,i.jsx)(s.Z,{sx:{mt:4,backgroundColor:"#444444","& .MuiLinearProgress-bar":{backgroundColor:"white"}},value:d.overall.total>0?100*d.overall.completed/d.overall.total:void 0,variant:d.overall.total>0?"determinate":"indeterminate"}),e.bar&&(0,i.jsx)(a.Z,{variant:"body2",color:"white",children:e.bar})]})})})}},48612:function(e,o,n){n.d(o,{k$:function(){return s},aB:function(){return l},ZP:function(){return c}});var i=n(46027),t=n(90089),r=JSON.parse('{"button":{"close":"Close","continue":"CONTINUE","getStarted":"GET STARTED","reconnect":"Reconnect","reload":"Reload page","submit":"Submit","goFullScreen":"Go full screen","exitFullScreen":"Exit full screen","retryUpload":"Retry upload","unsure":"Unsure"},"label":{"date":"DATE","time":"TIME"},"field":{"yourName":"Your name"},"onboarding":{"warnings":{"*":{"description":"ℹ️ This could have been caused by a poor internet connection","advice":"Please check your wifi or mobile network signal strength and reload this page."},"ZgSessionUserProvider":{"description":"⚠️ Authorisation did not succeed","advice":["If you are a facilitator, please log in with your facilitator account and try again.","If you are a participant, please contact support for assistance."]},"ZgStaticSessionDataProvider":{"description":"⚠️ Unable to access information about this workshop session","advice":"Please confirm that you are using the correct url for your workshop."},"ZgServerTimeProvider":{"description":"⚠️ Unable to synchronise clock with the server","advice":"This is required to play back videos and other media in sync with other participants."},"ZgStaticSessionContentProvider":{"description":"⚠️ Unable to retrieve session content","advice":"Videos and other media are required to participate in the workshop. This can take a few minutes, and needs a good internet connection."},"ZgResilientWssConnectionProvider":{"description":"⚠️ Unable to establish a live connection to the workshop","advice":"This is required to participate in the workshop."}},"welcomeTo":"WELCOME TO","loadingWorkshop":"Loading workshop information...","almostThere":"Almost there","pleaseEnterName":"Please enter your name","pleaseEnterNameExplanation":"This is so we know what to call you during the session, your name will not be saved or stored","thanks":"THANKS","youAreAboutToJoin":"YOU ARE ABOUT TO JOIN","thisWorkshopIsClosed":"This workshop is closed.","thisWorkshopIsOpen":"This workshop is open.","pressJoinToEnter":"Press JOIN CALL to enter.","youAreRemoved":"You have been removed from this workshop.","joinCall":"JOIN CALL","leaveCall":"LEAVE CALL","waitingForOpen":"Waiting for the host to begin the session. Please wait...","supportInfoHeading":"Support information","supportInfoText1":"If your workshop start time has passed and you are still waiting to enter the workshop, it\'s possible your device has become disconnected. Please check your internet connection, and use the reconnect button to try again.","supportInfoText2":"If you are still unable to enter the workshop, please check your invite for technical support contact information. We may ask you to reload the page.","privacyNotice":{"heading":"Zeitgeist Privacy Notice","link":"Privacy notice","errorLoading":"# Privacy notice unavailable\\n\\nWe\'re sorry, we should be able to show you a privacy notice here, but for some reason it\'s unavailable.\\n\\nPlease email [{{email}}](mailto:{{email}}) to let us know."},"workshopInformationLink":"Workshop information","sessionClosed":{"sessionIsClosed":"This workshop is now closed.","sessionIsClosedRegisterLinkAvailable":"This workshop is now closed, but please join us for a future session.","encouragement":"Use one of these methods to register, and please share with friends and family.","visitWebsite":"Visit the website","orScanQrCode":"Or scan the QR code","signUpText":"Sign up for more workshops","emailUs":"Email us at"},"preview":{"audio":{"prompt":"Your mic level"}}},"poll":{"pointsAllocation":{"remaining":"{{numberOfPoints}} points remaining"},"upDown":{"notSure":"Unsure"}},"demographic":{"multi-select":{"default-selection-item-prompt":"Please select an option","add-item":"Add","remove-item":"Remove"}},"audio":{"audioInputSelection":"Microphone","audioOutputSelection":"Speaker","enableMic":"Enable microphone","muteMic":"Mute microphone","reduceBackgroundNoise":"Reduce background noise","settingsMenu":"Audio settings","muted":"Muted"},"transcribing":{"automaticTranscribing":"Automatic transcribing","downloadTranscription":"Download transcription","startTranscribing":"Start transcribing","stopTranscribing":"Stop transcribing","transcribing":"Transcribing","transcriptionId":"Transcription id","transcribingInformation":"Transcribing information","transcriptionCouldNotUpload":"The transcription could not be uploaded","transcriptionUploadFailed":"Transcription upload failed"},"video":{"blurBackground":"Blur my background","disableCamera":"Disable camera","enableCamera":"Enable camera","settingsMenu":"Camera settings","videoInitFailed":"Video failed to initialise.","videoInputSelection":"Camera","videoManualControl":"Please use the video controls to start your video.","videoReadiness":"Your facilitator will start the video as soon as everybody is ready..."},"upDownResult":{"divisiveDescription":"These statements split the room...","supportedDescription":"Most people agreed with...","opposedDescription":"Most people disagreed with...","unansweredDescription":"Most did not answer..."}}'),a=JSON.parse('{"button":{"continue":"DEVAM ET","getStarted":"Başlayın","reconnect":"Tekrar bağlan","submit":"G\xf6nder","goFullScreen":"Tam ekran moduna ge\xe7","exitFullScreen":"Tam ekranı kapat","unsure":"Fikrim yok"},"label":{"date":"Tarih","time":"Saat"},"field":{"yourName":"Adınız"},"onboarding":{"welcomeTo":"Hoş Geldiniz","loadingWorkshop":"At\xf6lye bilgilerini y\xfckl\xfcyor...","almostThere":"Neredeyse bitti","pleaseEnterName":"L\xfctfen adınızı girin","pleaseEnterNameExplanation":"Bu, seans sırasında size nasıl hitap edeceğimizi bilmek i\xe7indir, adınız kaydedilmeyecek veya saklanmayacaktır","thanks":"Teşekk\xfcrler","youAreAboutToJoin":"Katılmak \xfczeresiniz","waitingForOpen":"Sunucuyu seansı başlatmayı bekliyor. L\xfctfen bekleyin."},"poll":{"pointsAllocation":{"remaining":"{{numberOfPoints}} puan kaldı"},"upDown":{"notSure":"Fikrim yok"}},"video":{"videoInitFailed":"Video başlatılamadı","videoManualControl":"Videonuzu başlatmak i\xe7in video kontrollerini kullanın l\xfctfen","videoReadiness":"Kolaylaştırıcınız herkes hazır olduğunda videoyu başlatacak..."}}');let s="en",l="en";if(!l)throw"No language found in environment";var c=e=>(i.ZP.isInitialized||i.ZP.use(t.Db).init({resources:{en:{common:r},tr:{common:a}},lng:null!=e?e:l,fallbackLng:s,defaultNS:"common",returnObjects:!0}),i.ZP)}}]);