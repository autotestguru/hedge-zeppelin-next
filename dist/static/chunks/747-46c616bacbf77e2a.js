(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{1248:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return A}});var i=t(5893),a=t(7663),n=t.n(a),r=e=>{let{children:s,outlined:t=!1,onClick:a}=e;return(0,i.jsxs)("button",{className:[t?"outlined":void 0],onClick:a,children:[(0,i.jsx)("span",{}),s,(0,i.jsx)("span",{})]})},l=t(7294);let c=({color:e="currentColor",direction:s="left",distance:t="md",duration:i=.4,easing:a="cubic-bezier(0, 0, 0, 1)",hideOutline:n=!0,label:r,lines:c=3,onToggle:o,render:d,rounded:m=!1,size:h=32,toggle:p,toggled:u})=>{let[x,g]=(0,l.useState)(!1),j=Math.max(12,Math.min(48,h)),v=Math.round((48-j)/2),f=j/12,y=Math.round(f),N=j/(c*(("lg"===t?.25:"sm"===t?.75:.5)+(3===c?1:1.25))),b=Math.round(N),k=y*c+b*(c-1),w=(f-y+(N-b))/(3===c?1:2),C=parseFloat((j/(3===c?"lg"===t?4.0425:"sm"===t?5.1625:4.6325:"lg"===t?6.7875:"sm"===t?8.4875:7.6675)-w/(4/3)).toFixed(2)),T=Math.max(0,i),E={cursor:"pointer",height:"48px",position:"relative",transition:`${T}s ${a}`,userSelect:"none",width:"48px"},O={background:e,height:`${y}px`,left:`${v}px`,position:"absolute"};n&&(E.outline="none"),m&&(O.borderRadius="9em");let I=p||g,S=void 0!==u?u:x;return d({barHeight:y,barStyles:O,burgerStyles:E,easing:a,handler:()=>{I(!S),"function"==typeof o&&o(!S)},isLeft:"left"===s,isToggled:S,label:r,margin:b,move:C,time:T,topOffset:Math.round((48-k)/2),width:j})};function o(){return(o=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}let d=e=>l.createElement(c,o({},e,{render:e=>l.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:s=>"Enter"===s.key&&e.handler(),role:"button",style:{...e.burgerStyles,transform:`${e.isToggled?`rotate(${180*(e.isLeft?-1:1)}deg)`:"none"}`},tabIndex:0},l.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none"}`}}),l.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time}s ${e.easing}`,opacity:`${e.isToggled?"0":"1"}`}}),l.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+2*e.barHeight+2*e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${-1*e.move}px)`:"none"}`}}))}));var m=e=>{let{children:s,onClick:t}=e;return(0,i.jsx)("div",{className:"menu-item",onClick:t,children:s})},h=e=>{let{show:s=!1,listMeniItems:t,onClick:a}=e;return(0,i.jsx)("div",{className:s?"menu-list show":"menu-list",children:t.map(e=>(0,i.jsx)(m,{onClick:a.bind(void 0,e.id),children:e.name},e.id))})};let p={enableCoinGeckoAPI:!0,enableSendGrid:!1,hzepContractAddress:"0x0000000000000000000000000000000000"};var u=e=>{let{showCurOpts:s,toggleMenu:t,alignment:a}=e,n=e=>{window.open(e,"_blank"),t()};return(0,i.jsxs)("div",{className:"currency-opt-container"+(s?"bottomToTop"===a?" dropdown-rev":" dropdown":""),children:[(0,i.jsx)("h3",{onClick:()=>n("https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=".concat(p.hzepContractAddress)),children:"I have BNB"}),(0,i.jsx)("h3",{onClick:()=>n("https://pancakeswap.finance/swap?inputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56&outputCurrency=".concat(p.hzepContractAddress)),children:"I have BUSD"}),(0,i.jsx)("h3",{onClick:()=>n("https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=".concat(p.hzepContractAddress)),children:"I have USDT"})]})},x=()=>{let[e,s]=(0,l.useState)(!1),[t,a]=(0,l.useState)(!1),n=()=>{a(!t)},c=[{id:"whatisthis",name:"What is this"},{id:"tokenomics",name:"Tokenomics"},{id:"offering",name:"Our offering"},{id:"roadmap",name:"Roadmap"},{id:"team",name:"Our Team"},{id:"next",name:"What's happening"},{id:"contact-us",name:"Contact Us"}],o=e=>{let t=document.querySelector("#"+e);t.scrollIntoView({behavior:"smooth",block:"start"}),s(!1)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"navbar-container",onClick:()=>{e&&s(!e)},children:[(0,i.jsx)("div",{className:"banner-logo",children:(0,i.jsx)("img",{src:"/hd_nav_logo.png",style:{width:"80px",height:"20%"},alt:"Banner"})}),(0,i.jsx)("div",{className:"nav-links",children:(0,i.jsx)("ul",{children:c.map(e=>(0,i.jsx)("li",{onClick:()=>o(e.id),children:e.name},e.id))})}),(0,i.jsxs)("div",{className:"nav-buttons",children:[(0,i.jsx)(r,{outlined:!0,onClick:n,children:"Buy HZEP"}),(0,i.jsx)(u,{showCurOpts:t,toggleMenu:n})]}),(0,i.jsx)("div",{className:"menu-button",children:(0,i.jsx)(d,{color:"#ffffff",toggled:e,onToggle:()=>{s(!e)}})})]}),(0,i.jsx)(h,{show:e,listMeniItems:c,onClick:o})]})},g=()=>{let e="https://t.me/OurTGURL",s="https://www.facebook.com/OurFabebookPage/",t="https://twitter.com/OurTwitterPage",a="https://www.instagram.com/OurInstaPage/",[n,c]=(0,l.useState)({fullName:"",emailAddress:"",message:""}),o=()=>{},d=e=>{c(s=>({...s,[e.target.name]:e.target.value}))};return(0,i.jsxs)("div",{className:"contact-container",id:"contact-us",children:[(0,i.jsx)("div",{className:"tok-title",children:"Contact Us"}),(0,i.jsxs)("div",{className:"contact-sections",children:[(0,i.jsxs)("div",{className:"info-links",children:[(0,i.jsx)("h3",{children:"QUICK LINKS"}),(0,i.jsx)("div",{className:"divider"}),(0,i.jsxs)("div",{className:"social-conatiner",children:[(0,i.jsxs)("div",{className:"social-item",onClick:()=>window.open(e,"_blank"),children:[(0,i.jsx)("img",{src:"/telegram.png",className:"social-img",alt:"Telegram"}),(0,i.jsx)("h3",{className:"img-desc",children:e})]}),(0,i.jsxs)("div",{className:"social-item",onClick:()=>window.open(s,"_blank"),children:[(0,i.jsx)("img",{src:"/facebook.png",className:"social-img",alt:"Facebook"}),(0,i.jsx)("h3",{className:"img-desc",children:s})]}),(0,i.jsxs)("div",{className:"social-item",onClick:()=>window.open(s,"_blank"),children:[(0,i.jsx)("img",{src:"/twitter.png",onClick:()=>window.open(t,"_blank"),className:"social-img",alt:"Twitter"}),(0,i.jsx)("h3",{className:"img-desc",children:t})]}),(0,i.jsxs)("div",{className:"social-item",onClick:()=>window.open(a,"_blank"),children:[(0,i.jsx)("img",{src:"/instagram.png",onClick:()=>window.open("https://www.instagram.com/cmccoin.io/","_blank"),className:"social-img",alt:"Instagram"}),(0,i.jsx)("h3",{className:"img-desc",children:a})]})]})]}),(0,i.jsxs)("div",{className:p.enableSendGrid?"email-sec":"email-sec sendemail-disabled",children:[(0,i.jsx)("div",{className:"form-container",children:(0,i.jsxs)("form",{onSubmit:e=>{e.preventDefault(),o(),console.log(n)},className:"form-style",children:[(0,i.jsx)("input",{type:"text",placeholder:"Enter full name",className:"info-input",name:"fullName",value:n.fullName,onChange:d,required:!0}),(0,i.jsx)("input",{type:"email",placeholder:"Enter email address",className:"info-input",name:"emailAddress",value:n.emailAddress,onChange:d,required:!0}),(0,i.jsx)("textarea",{placeholder:"Enter message here",type:"text",className:"info-input textarea",name:"message",value:n.message,onChange:d,required:!0}),(0,i.jsx)("div",{className:"email-action-container",children:(0,i.jsx)(r,{children:"Send Email"})})]})}),!p.enableSendGrid&&(0,i.jsx)("div",{className:"not-available-function",children:"We are working on enabling email support. Please visit our socials links in the meantime."})]})]})]})},j=e=>{let{children:s}=e;return(0,i.jsx)("div",{className:"card-container",children:s})},v=e=>{let{title:s,image:t,data:a}=e;return(0,i.jsxs)("div",{className:"news-card-container",children:[(0,i.jsx)("div",{className:"news-img-container",children:(0,i.jsx)("img",{src:t,width:"100px",height:"100px",alt:"News"})}),(0,i.jsxs)("div",{className:"news-data-container",children:[(0,i.jsx)("div",{className:"news-title",children:s}),(0,i.jsx)("div",{className:"news-data",children:a})]})]})},f=()=>(0,i.jsxs)("div",{className:"next-container",id:"next",children:[(0,i.jsx)("div",{className:"tok-title",children:"In and around us"}),(0,i.jsx)("div",{className:"news-container",children:[{id:0,title:"HZEP partners with biggest marketing platform",data:"Hedge Zeppelin has recently partnered with biggest crypto marketing partner CMCCoin securing access to privileged access to its famous magazine 'CryptoMag'. This partnership also open future access for HZEP to CMCCoin's physical goods marketplace.",image:"/cmclogo.png"},{id:1,title:"Hedge Zep is going live",data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",image:"https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=800"},{id:2,title:"Hedge Zep is going live",data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",image:"https://images.pexels.com/photos/6780838/pexels-photo-6780838.jpeg?auto=compress&cs=tinysrgb&w=800"},{id:3,title:"Hedge Zep is going live",data:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",image:"https://images.pexels.com/photos/14902677/pexels-photo-14902677.jpeg?auto=compress&cs=tinysrgb&w=800"}].map(e=>(0,i.jsx)("div",{className:"news-item",children:(0,i.jsx)(j,{children:(0,i.jsx)(v,{title:e.title,image:e.image,data:e.data})})},e.id))})]}),y=()=>(0,i.jsxs)("div",{className:"offering-container",id:"offering",children:[(0,i.jsx)("div",{className:"tok-title",children:"Our offerings"}),(0,i.jsx)("div",{className:"tok-sub-title",children:"We are not promising an enormous and unsustainable reward, as most of the Crypto Projects in the space, but with a variety of different income value streams, from the early adoption of cutting-edge Projects and technologies to the structural taxation of the transactions, we can keep the token price rising through systematic buybacks and burns. These funds will be generated using the taxes and revenue from variety of crypto investments."}),(0,i.jsxs)("div",{className:"multi-stream",children:[(0,i.jsx)("div",{className:"card-investment",children:(0,i.jsxs)("div",{className:"card-stretch",children:[(0,i.jsx)("div",{className:"card-con",children:(0,i.jsx)(j,{children:(0,i.jsxs)("div",{className:"stream-list",children:[(0,i.jsxs)("div",{className:"stream-list-item",children:[(0,i.jsx)("img",{src:"/investment-bullet.png",className:"bullet",alt:"Investment bullet"}),(0,i.jsx)("div",{children:"Acquiring stake in early key projects with huge growing potential."})]}),(0,i.jsxs)("div",{className:"stream-list-item",children:[(0,i.jsx)("img",{src:"/investment-bullet.png",className:"bullet",alt:"Investment bullet"}),(0,i.jsx)("div",{children:"Diversified portfolios in revenue generating assets across multiple blockchain to manage risk and assured returns."})]})]})})}),(0,i.jsx)("div",{className:"stream-title",children:"Investments"})]})}),(0,i.jsx)("div",{className:"card-investment",children:(0,i.jsxs)("div",{className:"card-stretch",children:[(0,i.jsx)("div",{className:"card-con",children:(0,i.jsx)(j,{children:(0,i.jsxs)("div",{className:"stream-list",children:[(0,i.jsxs)("div",{className:"stream-list-item",children:[(0,i.jsx)("img",{src:"/investment-bullet.png",className:"bullet",alt:"Investment bullet"}),(0,i.jsx)("div",{children:'Partnership with "Cryptazon" initiative, ensuring rewards for each purchase on the platform.'})]}),(0,i.jsxs)("div",{className:"stream-list-item",children:[(0,i.jsx)("img",{src:"/investment-bullet.png",className:"bullet",alt:"Investment bullet"}),(0,i.jsx)("div",{children:"Prime spot in Cryptomag and other marketing avenues, ensuring reach and steady growth of our community."})]})]})})}),(0,i.jsx)("div",{className:"stream-title",style:{width:"265px"},children:"Collaborations"})]})})]}),(0,i.jsx)("div",{className:"dividend",children:(0,i.jsx)("div",{className:"tok-sub-title",children:"The total revenue generated from the various income streams, will be used to support buyback and burns that in turn raise the token price. This mechanism will provide an additional incentive for the investors to hold on to their bags for longer period."})})]}),N=t(2585),b=()=>(0,i.jsxs)("div",{className:"team",id:"team",children:[(0,i.jsx)("div",{className:"tok-title",children:"Meet the Crew"}),(0,i.jsxs)("div",{className:"team-container",children:[(0,i.jsx)("div",{className:"team-card-container",children:(0,i.jsx)(j,{children:(0,i.jsxs)("div",{className:"team-card",children:[(0,i.jsx)("img",{src:"/drew-bio-pic.jpeg",className:"team-img",alt:"CEO"}),(0,i.jsx)("div",{className:"team-title",children:"Captain"}),(0,i.jsx)("div",{className:"team-email",children:"drew@hedgezeppelin.com"}),(0,i.jsx)("div",{className:"team-desc",children:"Awarded his pilot’s license from Hedgehog University in May 2023. When Capt. Drew is not flying zeppelin projects to the moon, he enjoys scuba diving, collecting construction equipment, and traveling. He and wis beloved wife reside in Hedgeville Burrow with their 4 hedgehogs."})]})})}),(0,i.jsx)("div",{className:"team-card-container",children:(0,i.jsx)(j,{children:(0,i.jsxs)("div",{className:"team-card",children:[(0,i.jsx)("img",{src:"/george-bio-pic.jpeg",className:"team-img",alt:"COO"}),(0,i.jsx)("div",{className:"team-title",children:"Chief Engineer"}),(0,i.jsx)("div",{className:"team-email",children:"george@hedgezeppelin.com"}),(0,i.jsx)("div",{className:"team-desc",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."})]})})}),(0,i.jsx)("div",{className:"team-card-container",children:(0,i.jsx)(j,{children:(0,i.jsxs)("div",{className:"team-card",children:[(0,i.jsx)("img",{src:"/john-bio-pic.jpeg",className:"team-img",alt:"CFO"}),(0,i.jsx)("div",{className:"team-title",children:"Chief Financial Officer "}),(0,i.jsx)("div",{className:"team-email",children:"john@hedgezeppelin.com"}),(0,i.jsx)("div",{className:"team-desc",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."})]})})}),(0,i.jsx)("div",{className:"team-card-container",children:(0,i.jsx)(j,{children:(0,i.jsxs)("div",{className:"team-card",children:[(0,i.jsx)("img",{src:"/guru-bio-pic.jpeg",className:"team-img",alt:"CTO"}),(0,i.jsx)("div",{className:"team-title",children:"Chief Technology Officer"}),(0,i.jsx)("div",{className:"team-email",children:"guru@hedgezeppelin.com"}),(0,i.jsx)("div",{className:"team-desc",children:"Completed degree in aviation technology from Hedgeville institute of aviation and technology in Jan 2023. When he is not establishing communication, tracking beacons or maintaining cloud security, he spend his time with his wife and hoglet in suburban gardens of hedgezuala."})]})})})]}),(0,i.jsx)("div",{className:"tok-title",children:"Our flight advisors"}),(0,i.jsxs)("div",{className:"team-container marketing",children:[(0,i.jsx)("div",{className:"team-card-container",children:(0,i.jsx)(j,{children:(0,i.jsxs)("div",{className:"team-card market-card",children:[(0,i.jsx)("img",{src:"/nathan-bio-pic.jpeg",className:"team-img",alt:"CEO"}),(0,i.jsx)("div",{className:"team-title",children:"Chief Marketing Officer"}),(0,i.jsx)("div",{className:"team-email",children:"nathan@hedgezeppelin.com"}),(0,i.jsx)("div",{className:"team-desc",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."})]})})}),(0,i.jsx)("div",{className:"team-card-container",children:(0,i.jsx)(j,{children:(0,i.jsxs)("div",{className:"team-card market-card",children:[(0,i.jsx)("img",{src:"/colin-bio-pic.jpeg",className:"team-img",alt:"CEO"}),(0,i.jsx)("div",{className:"team-title",children:"First Marketing Officer"}),(0,i.jsx)("div",{className:"team-email",children:"colin@hedgezeppelin.com"}),(0,i.jsx)("div",{className:"team-desc",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."})]})})}),(0,i.jsx)("div",{className:"team-card-container",children:(0,i.jsx)(j,{children:(0,i.jsxs)("div",{className:"team-card market-card",children:[(0,i.jsx)("img",{src:"/greg-bio-pic.jpeg",className:"team-img",alt:"CEO"}),(0,i.jsx)("div",{className:"team-title",children:"Chief Security Officer"}),(0,i.jsx)("div",{className:"team-email",children:"greg@hedgezeppelin.com"}),(0,i.jsx)("div",{className:"team-desc",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."})]})})})]}),(0,i.jsx)("div",{className:"tok-title",children:"Open flight deck positions"}),(0,i.jsx)("div",{className:"team-container marketing",children:(0,i.jsx)(j,{children:(0,i.jsxs)("div",{className:"open-team-position",children:[(0,i.jsxs)("p",{children:[(0,i.jsx)(N.yNj,{style:{marginRight:"10px"}}),"First Navigator of Socials"]}),(0,i.jsxs)("p",{children:[" ",(0,i.jsx)(N.yNj,{style:{marginRight:"10px"}}),"First Electrician"]}),(0,i.jsxs)("p",{children:[" ",(0,i.jsx)(N.yNj,{style:{marginRight:"10px"}}),"Radio Operator"]}),(0,i.jsxs)("p",{children:[" ",(0,i.jsx)(N.yNj,{style:{marginRight:"10px"}}),"Digital Communications Officer"]})]})})})]}),k=()=>{let[e,s]=(0,l.useState)({prelaunch:!1,supply:!1,liquidity:!1}),t=(e,s)=>(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexDirection:"row",width:"100%",marginLeft:"10px",marginRight:"10px"},children:[(0,i.jsx)("span",{style:{fontSize:"12px",marginBottom:"4px"},children:e}),(0,i.jsx)("span",{style:{fontSize:"12px",marginBottom:"4px",textAlign:"right"},children:s.map(e=>(0,i.jsxs)(i.Fragment,{children:[e,(0,i.jsx)("br",{})]}))})]}),a=t=>{let i;switch(t){case"prelaunch":i={prelaunch:!e.prelaunch};break;case"supply":i={supply:!e.supply};break;case"liquidity":i={liquidity:!e.liquidity}}s(e=>({...e,...i}))};return(0,i.jsxs)("div",{className:"tokenomics-container",id:"tokenomics",children:[(0,i.jsx)("div",{className:"tok-title",children:"Tokenomics"}),(0,i.jsx)("div",{className:"tok-sub-title",children:"Hedge Zeppelin is a meme token at heart! $HZEP is a deflationary token designed to become more scarce over time. On chain holders of Hedge Zeppelin will see profit rising over time fueled by systematic and sustainable buyback and token burns; all that for simply holding Hedge Zeppelin tokens in your wallet."}),(0,i.jsxs)("div",{className:"highlight-container",children:[(0,i.jsx)(j,{children:(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",width:"300px"},children:[(0,i.jsx)("img",{src:"/checkmark-icon.png",style:{width:"60px",height:"60px"},alt:"Checkmark"}),"100 Million total supply"]})}),(0,i.jsx)(j,{children:(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",width:"300px"},children:[(0,i.jsx)("img",{src:"/checkmark-icon.png",style:{width:"60px",height:"60px"},alt:"Checkmark"}),"5% Buy/Transfer fees"]})}),(0,i.jsx)(j,{children:(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",width:"300px"},children:[(0,i.jsx)("img",{src:"/checkmark-icon.png",style:{width:"60px",height:"60px"},alt:"Checkmark"}),"5% Sell fees"]})}),(0,i.jsx)(j,{children:(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",width:"300px"},children:[(0,i.jsx)("img",{src:"/checkmark-icon.png",style:{width:"60px",height:"60px"},alt:"Checkmark"}),"50,000 HZEP Maximum sell per Hour"]})})]}),(0,i.jsxs)("div",{className:"tk-card-container",children:[(0,i.jsx)(j,{children:(0,i.jsxs)("div",{className:"card-content",onMouseEnter:a.bind(void 0,"prelaunch"),onMouseLeave:a.bind(void 0,"prelaunch"),children:[(0,i.jsxs)("div",{className:"front"+(e.prelaunch?" flipF":""),children:[(0,i.jsx)("img",{src:"/icons8-capital-96.png",style:{width:"180px",height:"120px",margin:"20px"},alt:"Capital"}),(0,i.jsx)("span",{style:{fontSize:"16px",fontWeight:"bold"},children:"Presale / Launch Details"}),(0,i.jsx)("span",{style:{fontSize:"12px"},children:"Hover/Click for details"})]}),(0,i.jsxs)("div",{className:"back"+(e.prelaunch?" unflipB":""),children:[(0,i.jsx)("span",{style:{marginBottom:"20px",fontWeight:"bold"},children:"Tokens Distribution"}),(0,i.jsx)("span",{style:{borderTop:"1px solid #ffffff",width:"100%",marginBottom:"20px"}}),t("Private sale",["15,000,000"]),t("Listing & Liquidity",["50,000,000"])]})]})}),(0,i.jsx)(j,{children:(0,i.jsxs)("div",{className:"card-content",onMouseEnter:a.bind(void 0,"supply"),onMouseLeave:a.bind(void 0,"supply"),children:[(0,i.jsxs)("div",{className:"front"+(e.supply?" flipF":""),children:[(0,i.jsx)("img",{src:"/core-team.png",style:{width:"180px",height:"120px",margin:"20px"},alt:"Core team"}),(0,i.jsx)("span",{style:{fontSize:"16px",fontWeight:"bold"},children:"Supply breakdown"}),(0,i.jsx)("span",{style:{fontSize:"12px"},children:"Hover/Click for details"})]}),(0,i.jsxs)("div",{className:"back"+(e.supply?" unflipB":""),children:[(0,i.jsx)("span",{style:{marginBottom:"20px",fontWeight:"bold"},children:"Tokens Distribution"}),(0,i.jsx)("span",{style:{borderTop:"1px solid #ffffff",width:"100%",marginBottom:"20px"}}),t("Investment Wallet",["15,000,000"]),t("Team & Ops Wallet",["5,000,000"]),t("Marketing Wallet",["5,000,000"]),t("Locked",["10,000,000"])]})]})}),(0,i.jsx)(j,{children:(0,i.jsxs)("div",{className:"card-content",onMouseEnter:a.bind(void 0,"liquidity"),onMouseLeave:a.bind(void 0,"liquidity"),children:[(0,i.jsxs)("div",{className:"front"+(e.liquidity?" flipF":""),children:[(0,i.jsx)("img",{src:"/liquidity.png",style:{width:"180px",height:"120px",margin:"20px"},alt:"Liquidity"}),(0,i.jsx)("span",{style:{fontSize:"16px",fontWeight:"bold"},children:"Liquidity pools"}),(0,i.jsx)("span",{style:{fontSize:"12px"},children:"Hover/Click for details"})]}),(0,i.jsxs)("div",{className:"back"+(e.liquidity?" unflipB":""),children:[(0,i.jsx)("span",{style:{marginBottom:"20px",fontWeight:"bold"},children:"Tokens Distribution"}),(0,i.jsx)("span",{style:{borderTop:"1px solid #ffffff",width:"100%",marginBottom:"20px"}}),t("Initial Liquidity",["10,000,000"]),t("Liquidity Pairs",["HZEP / BNB","HZEP / BUSD","HZEP / USDT"])]})]})})]})]})},w=()=>{let[e,s]=(0,l.useState)({"Unit Price":"","24hr Volume":"","Market cap":""}),t=async()=>{let e={ids:"ripple",vs_currencies:"usd",include_market_cap:!0,include_24hr_vol:!0};try{let t=await fetch("https://api.coingecko.com/api/v3/simple/price?ids=".concat(encodeURIComponent(e.ids),"&vs_currencies=").concat(encodeURIComponent(e.vs_currencies),"&include_market_cap=").concat(encodeURIComponent(e.include_market_cap),"&include_24hr_vol=").concat(encodeURIComponent(e.include_24hr_vol)),{method:"GET",headers:{accept:"application/json"}}),i=await t.json();s({"Unit Price":i.ripple.usd,"24hr Volume":i.ripple.usd_24h_vol,"Market cap":i.ripple.usd_market_cap})}catch(e){console.log("Error occurred while fetching market data"),console.log(e),s({"Unit Price":"","24hr Volume":"","Market cap":""})}};(0,l.useEffect)(()=>{p.enableCoinGeckoAPI&&t()},[]);let a=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:2});return(0,i.jsxs)("div",{className:"whatisthis",id:"whatisthis",children:[(0,i.jsx)("div",{className:"left-side",children:(0,i.jsx)("div",{className:"moving-image",children:(0,i.jsx)("img",{src:"/hedgie_nobg.png",alt:"Hedgie",className:"banner-image"})})}),(0,i.jsxs)("div",{className:"right-side",children:[(0,i.jsx)("h1",{className:"title-text",children:"HEDGE Zeppelin"}),(0,i.jsx)("h2",{className:"sub-title-text",children:"What is this?"}),(0,i.jsx)("div",{className:"sub-text",children:"Hedge Zeppelin is here to provide a sustainable interaction with the cryptocurrency world. Our team, which has a perfect knowledge of risk management and portfolio management, will be able to offer you a token with the perfect safety/profit balance."}),(0,i.jsxs)("div",{className:"market-data-container",children:[(0,i.jsx)("div",{className:"market-data-title",children:"*Live Market data"}),(0,i.jsxs)("div",{className:"mak-data-unit",children:[(0,i.jsx)("div",{className:"madata-header",children:"Unit Price"}),(0,i.jsx)("div",{className:"madata-data",children:a.format(e["Unit Price"])})]}),(0,i.jsxs)("div",{className:"mak-data-unit",children:[(0,i.jsx)("div",{className:"madata-header",children:"24hrs Volume"}),(0,i.jsx)("div",{className:"madata-data",children:a.format(e["24hr Volume"])})]}),(0,i.jsxs)("div",{className:"mak-data-unit",children:[(0,i.jsx)("div",{className:"madata-header",children:"Market Cap"}),(0,i.jsx)("div",{className:"madata-data",children:a.format(e["Market cap"])})]}),(0,i.jsx)("div",{className:"market-data-disc",children:(0,i.jsx)("strong",{children:"* There is a limit to how many times data can be retrieved from the server. If the price shows $0 please refresh after few minutes"})})]})]})]})},C=t(3750),T=e=>{let{title:s,status:t,phases:a}=e,n=a.some(e=>"IN PROGRESS"===e.status);return(0,i.jsxs)("div",{className:"space-section-container",style:{color:"DONE"===t?"goldenrod":""},children:[(0,i.jsx)("div",{className:"rocket-container ".concat(n?"center-rocket":""),children:(0,i.jsx)("img",{src:"/rocket.png",width:"50px",height:"120px",className:"moving-space-image ".concat("IN PROGRESS"===t?"active-rocket":""),alt:"Flying rocket"})}),(0,i.jsxs)("div",{className:"bar-container",children:[(0,i.jsx)("div",{className:"bar ".concat("DONE"===t||n?"bar-done":"")}),(0,i.jsx)("div",{className:"bar ".concat("DONE"===t?"bar-done":"")}),(0,i.jsx)("span",{className:"dot-start ".concat("DONE"===t||n?"dot-done":"")})]}),(0,i.jsxs)("div",{className:"section-data-container",children:[(0,i.jsx)("h1",{className:"sec-title",children:s}),a.map(e=>(0,i.jsxs)("div",{className:"sec-sub-section",style:{color:"DONE"===e.status?"goldenrod":""},children:[(0,i.jsxs)("h2",{className:"sub-sec-title",children:["Phase # ",e.id]}),e.text.split("\n").map(e=>(0,i.jsxs)("p",{children:[(0,i.jsx)(C.M2r,{style:{marginRight:"5px"}}),e]}))]}))]})]})},E=e=>{let{children:s}=e;return(0,i.jsx)("div",{className:"space-wrapper",children:s})},O=()=>(0,i.jsxs)("div",{className:"roadmap-site-container",id:"roadmap",children:[(0,i.jsx)("div",{className:"tok-title",children:"Our Roadmap"}),(0,i.jsx)(E,{children:[{title:"Mar 2023 - May 2023",status:"IN PROGRESS",phases:[{id:1.1,text:"Community Based Meme Concept - Hedge Zeppelin Created\nBuild Core Team & Advisors\nHedgie is Born \uD83E\uDD94",status:"DONE"},{id:1.2,text:"Contract with Crypto Marketing Company to handle marketing\nBuild & Publish Website",status:"DONE"},{id:1.3,text:"Develop Contract\nConduct Initial Audit",status:"IN PROGRESS"}]},{title:"Jun 2023 - Aug 2023",status:"NOT STARTED",phases:[{id:2.1,text:"Release Official Press Documents\nBuild Socials & Community",status:"NOT STARTED"},{id:2.2,text:"Presale on Pinksale and/or other platforms\nWhitelist Distribution\nMajor Marketing Campaign",status:"NOT STARTED"},{id:2.3,text:"Multi-Chain Launch\nDEX Listings\nCMC & CG Listing",status:"NOT STARTED"}]},{title:"Sep 2023 - Feb 2024",status:"NOT STARTED",phases:[{id:3.1,text:"Featured in Crypto Magazine\nMassive marketing campaign\nCollaboration with media celebs and reputed influencers",status:"NOT STARTED"},{id:3.2,text:"Certik Audit\nMajor CEX Listing",status:"NOT STARTED"},{id:3.3,text:"E-commerce Usecase\nCollaboration with Investment Partners\nNFT Project Release",status:"NOT STARTED"}]},{title:"Mar 2024 and beyond",status:"NOT STARTED",phases:[{id:4.1,text:"Additional CEX Listings",status:"NOT STARTED"},{id:4.2,text:"Cutting Edge Utilities\nInvestments for the future",status:"NOT STARTED"}]}].map(e=>(0,i.jsx)(T,{id:e.title,title:e.title,status:e.status,phases:e.phases}))})]}),I=()=>{let e='<iframe width="400" height="600" frameborder="0" src="https://flooz.xyz/embed/trade?swapDisabled=false&swapToTokenAddress='.concat(p.hzepContractAddress,'&swapLockToToken=true&onRampDisabled=false&onRampAsDefault=false&onRampDefaultAmount=200&onRampTokenAddress=bnb&stakeDisabled=true&network=bsc&lightMode=false&primaryColor=%23a00495&backgroundColor=transparent&roundedCorners=10&padding=20"></iframe>');return(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:e}})},S=()=>{let e=p.hzepContractAddress,[s,t]=(0,l.useState)(!1),[a,n]=(0,l.useState)(!1),c=()=>{t(!s)};return(0,i.jsxs)("div",{className:"buy-now-container",children:[(0,i.jsx)("video",{id:"video-container",loop:!0,autoPlay:!0,muted:!0,children:(0,i.jsx)("source",{src:"/digital-pattern.mp4",type:"video/mp4"})}),(0,i.jsx)("div",{className:"overlay"}),(0,i.jsxs)("div",{className:"buy-now-content-container",children:[(0,i.jsxs)("div",{className:"buy-left-section",children:[(0,i.jsxs)("div",{className:"buy-now-punch-line",children:[(0,i.jsx)("h1",{children:"The only Sustainably Scalable MEME Token"}),(0,i.jsxs)("div",{className:"buy-action-container",children:[(0,i.jsx)(r,{outlined:!0,onClick:c,children:"BUY HZEP ON PANCAKESWAP NOW"}),(0,i.jsx)(u,{showCurOpts:s,toggleMenu:c})]}),(0,i.jsxs)("div",{className:"contract-info",children:[(0,i.jsxs)("span",{children:["Contract Address: ",e]}),(0,i.jsx)("br",{}),(0,i.jsx)("span",{style:{textDecoration:"underline",cursor:"pointer"},onClick:async()=>{"clipboard"in navigator?await navigator.clipboard.writeText(e):document.execCommand("copy",!0,e),n(!0)},children:a?"Copied to Clipboard":"Copy Address"})]})]}),(0,i.jsxs)("div",{className:"huge-marketing",children:[(0,i.jsx)("h1",{className:"huge-marketing-title",children:"Partnership with biggest marketing platform"}),(0,i.jsx)("img",{src:"/cmccoinbig-redact.png",className:"marketing-img",alt:"Marketing partner"})]})]}),(0,i.jsx)("div",{className:"flooz-container",children:(0,i.jsx)(I,{})})]})]})},A=function(){let[e,s]=(0,l.useState)(!1),[t,a]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e=()=>{window.pageYOffset>100?s(!0):s(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]);let c=()=>{a(!t)};return(0,i.jsxs)("div",{className:n().App,children:[(0,i.jsx)(x,{}),(0,i.jsx)(S,{}),(0,i.jsx)(w,{}),(0,i.jsx)(k,{}),(0,i.jsx)(y,{}),(0,i.jsx)(O,{}),(0,i.jsx)(b,{}),(0,i.jsx)(f,{}),(0,i.jsx)(g,{}),e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:n().currencyoptfixedright,children:(0,i.jsx)(u,{showCurOpts:t,alignment:"bottomToTop",toggleMenu:c})}),(0,i.jsx)("div",{className:n().buynowfixedright,children:(0,i.jsx)(r,{outlined:!1,onClick:c,children:"Buy HZEP"})})]})]})}},7663:function(e){e.exports={App:"App_App__TWaY_",navcontainer:"App_navcontainer__8zC4a",Appheader:"App_Appheader__1INqR",Applink:"App_Applink__mPCIb",buynowfixedright:"App_buynowfixedright__sHWvc",currencyoptfixedright:"App_currencyoptfixedright__vPHDj"}},8357:function(e,s,t){"use strict";t.d(s,{w_:function(){return c}});var i=t(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=i.createContext&&i.createContext(a),r=function(){return(r=Object.assign||function(e){for(var s,t=1,i=arguments.length;t<i;t++)for(var a in s=arguments[t])Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);return e}).apply(this,arguments)},l=function(e,s){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>s.indexOf(i)&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,i=Object.getOwnPropertySymbols(e);a<i.length;a++)0>s.indexOf(i[a])&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(t[i[a]]=e[i[a]]);return t};function c(e){return function(s){return i.createElement(o,r({attr:r({},e.attr)},s),function e(s){return s&&s.map(function(s,t){return i.createElement(s.tag,r({key:t},s.attr),e(s.child))})}(e.child))}}function o(e){var s=function(s){var t,a=e.attr,n=e.size,c=e.title,o=l(e,["attr","size","title"]),d=n||s.size||"1em";return s.className&&(t=s.className),e.className&&(t=(t?t+" ":"")+e.className),i.createElement("svg",r({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,a,o,{className:t,style:r(r({color:e.color||s.color},s.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&i.createElement("title",null,c),e.children)};return void 0!==n?i.createElement(n.Consumer,null,function(e){return s(e)}):s(a)}}}]);