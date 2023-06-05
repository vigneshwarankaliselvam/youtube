(function(){"use strict";var e={166:function(e,n,t){var i=t(9242),a=t(3396),o=t(7139);const c={class:"sticky-header"},s={class:"dashboard__choices"},r={class:"dashboard__chip-list"},l=(0,a._)("div",{class:"dashboard__choices-next"},[(0,a._)("svg",{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",focusable:"false"},[(0,a._)("g",null,[(0,a._)("path",{d:"M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z"})])])],-1),d={class:"dashboard"},u=(0,a._)("div",{class:"side-bar"},null,-1),h={class:"main-content"},C={class:"dashboard__videos"};function p(e,n,t,i,p,v){const f=(0,a.up)("HeaderComponent"),g=(0,a.up)("ChipButton"),m=(0,a.up)("VideoCard");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",c,[(0,a.Wm)(f),(0,a._)("div",s,[(0,a._)("div",r,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(p.chipList,((e,n)=>((0,a.wg)(),(0,a.iD)("div",{key:n},[(0,a.Wm)(g,{chip:e.value,onClick:n=>v.changeActive(e.value),isSelected:e.isActive},null,8,["chip","onClick","isSelected"])])))),128))]),l])]),(0,a._)("div",d,[u,(0,a._)("div",h,[(0,a._)("div",C,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(p.cards,((e,n)=>((0,a.wg)(),(0,a.iD)("div",{key:n},[(0,a.Wm)(m,(0,o.vs)((0,a.F4)(e)),null,16)])))),128))])])])])}const v={class:"chip"};function f(e,n,t,i,c,s){return(0,a.wg)(),(0,a.iD)("div",v,[(0,a._)("div",{class:(0,o.C_)({"chip-selected":t.isSelected})},(0,o.zw)(t.chip),3)])}var g={name:"ChipButton",props:{chip:String,isSelected:Boolean}},m=t(89);const _=(0,m.Z)(g,[["render",f],["__scopeId","data-v-103fd080"]]);var A=_;const w=e=>((0,a.dD)("data-v-cca06a66"),e=e(),(0,a.Cn)(),e),y={class:"video-card__img"},M=["src"],L={class:"video-card__timer"},b={class:"video-card__desc"},S=["href"],V=["src"],H={class:"video-card__desc-info"},B=w((()=>(0,a._)("g",null,[(0,a._)("path",{d:"M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"})],-1))),I=[B],k={class:"channel-name"},T=w((()=>(0,a._)("svg",{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",focusable:"false"},[(0,a._)("g",null,[(0,a._)("path",{d:"M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z"})])],-1))),q=w((()=>(0,a._)("span",null,null,-1)));function F(e,n,t,i,c,s){return(0,a.wg)(),(0,a.iD)("div",{class:"video-card",onMouseenter:n[1]||(n[1]=e=>c.isCardActive=!0),onMouseleave:n[2]||(n[2]=e=>c.isCardActive=!1)},[(0,a._)("div",y,[(0,a._)("img",{src:t.thumbnail,alt:"thumbnail"},null,8,M),(0,a._)("div",L,[(0,a._)("p",null,(0,o.zw)(t.duration),1)])]),(0,a._)("div",b,[(0,a._)("a",{href:t.channelLink,target:"_blank"},[(0,a._)("img",{src:t.channelLogo,alt:"channel-logo"},null,8,V)],8,S),(0,a._)("div",H,[(0,a._)("h3",null,(0,o.zw)(t.heading),1),c.isCardActive?((0,a.wg)(),(0,a.iD)("svg",{key:0,viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",focusable:"false",class:"hover-option",onClick:n[0]||(n[0]=e=>s.alert(e))},I)):(0,a.kq)("",!0),(0,a._)("div",null,[(0,a._)("p",k,(0,o.zw)(t.channelName),1),T]),(0,a._)("div",null,[(0,a._)("p",null,(0,o.zw)(t.viewsCount)+" views",1),q,(0,a._)("p",null,(0,o.zw)(t.uploadedTime)+" ago",1)])])])],32)}var D={name:"VideoCard",props:{thumbnail:String,channelLink:String,channelLogo:String,heading:String,duration:String,channelName:String,viewsCount:String,uploadedTime:String},data(){return{isCardActive:!1}},methods:{alert(){alert("hi")}}};const R=(0,m.Z)(D,[["render",F],["__scopeId","data-v-cca06a66"]]);var x=R;const O=e=>((0,a.dD)("data-v-ce4d4496"),e=e(),(0,a.Cn)(),e),Z={class:"header"},j=O((()=>(0,a._)("div",{class:"header__left"},[(0,a._)("svg",{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",focusable:"false",class:"menu-icon"},[(0,a._)("g",null,[(0,a._)("path",{d:"M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"})])]),(0,a._)("svg",{viewBox:"0 0 90 20",preserveAspectRatio:"xMidYMid meet",focusable:"false",class:"yt-logo"},[(0,a._)("g",{viewBox:"0 0 90 20",preserveAspectRatio:"xMidYMid meet"},[(0,a._)("g",null,[(0,a._)("path",{d:"M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z",fill:"#FF0000"}),(0,a._)("path",{d:"M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z",fill:"white"})]),(0,a._)("g",null,[(0,a._)("g",{id:"youtube-paths"},[(0,a._)("path",{d:"M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"}),(0,a._)("path",{d:"M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"}),(0,a._)("path",{d:"M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"}),(0,a._)("path",{d:"M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"}),(0,a._)("path",{d:"M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"}),(0,a._)("path",{d:"M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"}),(0,a._)("path",{d:"M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"})])])])])],-1))),E={class:"header__middle"},P=O((()=>(0,a._)("svg",{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",focusable:"false"},[(0,a._)("g",null,[(0,a._)("path",{d:"M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"})])],-1))),N=O((()=>(0,a._)("div",{class:"header__right"},null,-1)));function z(e,n,t,i,o,c){const s=(0,a.up)("SearchInput");return(0,a.wg)(),(0,a.iD)("div",Z,[j,(0,a._)("div",E,[(0,a.Wm)(s),P]),N])}const U=e=>((0,a.dD)("data-v-c031fae0"),e=e(),(0,a.Cn)(),e),X={class:"search-input"},Y={key:0,viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",focusable:"false",class:"search-icon-active"},G=U((()=>(0,a._)("g",null,[(0,a._)("path",{d:"M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"})],-1))),K=[G],Q=U((()=>(0,a._)("div",{class:"search-input__right"},[(0,a._)("svg",{viewBox:"0 0 24 24",preserveAspectRatio:"xMidYMid meet",focusable:"false",class:"search-icon-active"},[(0,a._)("g",null,[(0,a._)("path",{d:"M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"})])])],-1)));function W(e,n,t,i,c,s){return(0,a.wg)(),(0,a.iD)("div",X,[(0,a._)("div",{class:(0,o.C_)(["search-input__left",{"search-input__focused":c.inputFocused}])},[c.inputFocused?((0,a.wg)(),(0,a.iD)("svg",Y,K)):(0,a.kq)("",!0),(0,a._)("input",{type:"text",placeholder:"Search",onFocusin:n[0]||(n[0]=e=>c.inputFocused=!0),onFocusout:n[1]||(n[1]=e=>c.inputFocused=!1)},null,32)],2),Q])}var J={name:"SearchInput",props:{chip:String,isSelected:Boolean},data(){return{inputFocused:!1}}};const $=(0,m.Z)(J,[["render",W],["__scopeId","data-v-c031fae0"]]);var ee=$,ne={name:"HeaderComponent",components:{SearchInput:ee},props:{chip:String,isSelected:Boolean}};const te=(0,m.Z)(ne,[["render",z],["__scopeId","data-v-ce4d4496"]]);var ie=te;function ae(){const e=["All","Tamil Cinema","News","Mixes","Music","England cricket team","Wickets","Live","A. R. Rahman","Driving","Stock Markets","Melodies","Train","Politics","Football"];return e.map(((e,n)=>({isActive:0==n,value:e})))}function oe(){const e=[{heading:"ஆதரவு தெரிவித்த முதல்வருக்கு சீமான் அதிரடி பதில் | Seeman | Mk Stalin | PTS",duration:"4:04",channelName:"PuthiyathalaimuraiTV",viewsCount:"149K",uploadedTime:"15 hours",channelLogo:"https://yt3.ggpht.com/5ZtoCHyWV95KdgDkYjVfhC1TCdZjHHE8_ar96Uvd8ulPp9rPbKhyds_ULHZUTdR27_XMdGbcLPE=s68-c-k-c0x00ffffff-no-rj",channelLink:"https://www.youtube.com/@PuthiyaThalaimuraiTV",thumbnail:"https://i.ytimg.com/vi/ALWjVHIExeI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDL7Zm14xWoOPoSjNTGYTgAf9oCPA"},{heading:"கோகுல்ராஜ் கொலை வழக்கு! பாண்டே சாட்சிக்கு வராதது ஏன்? | Adv Bhavani B.Mohan Interview | IBC Tamil",duration:"38:49",channelName:"IBC Tamil",viewsCount:"3,582",uploadedTime:"2 days",channelLogo:"https://yt3.googleusercontent.com/2ZFXZvc61QrDrSh2Vb1Klo_PJrOncCS20B2ut9ROD9EkIJFPnvXtk_cn38OTLZnrOH3_9FA=s176-c-k-c0x00ffffff-no-rj",channelLink:"https://www.youtube.com/@IBCTamil",thumbnail:"https://i.ytimg.com/vi/GBv6wF83kX0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYMnCPP4_tKnqXnyYRwQ4BwcDXjA"},{heading:"Stokes Stars In Opener! | England vs South Africa - Match Highlights | ICC Cricket World Cup 2019",duration:"5:16",channelName:"ICC",viewsCount:"14M",uploadedTime:"4 years",channelLogo:"https://yt3.googleusercontent.com/3K6h6gpMPf4mK9qh6SXTl0W3PLxnOMzUnFHc2lbS9t-ucS-b4JGcR8nW7ja9XDYkHM-kAnijk2c=s176-c-k-c0x00ffffff-no-rj",channelLink:"https://www.youtube.com/@ICC",thumbnail:"https://i.ytimg.com/vi/95Ia6yBcnXI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBo32vuvcT5HUC2ID8LwIWi8zvTiw"},{heading:"ITC Vs RELIANCE Vs TATAITC Vs ரிலையன்ஸ் Vs டாடா |Anandsrinivasan| |Albin|",duration:"21:24",channelName:"Money Pechu",viewsCount:"21K",uploadedTime:"6 hours",channelLogo:"https://yt3.googleusercontent.com/FI3JpLNr5OFwX1rLntohcQeKn5yv5clMuCmAascJzPPdGHUcuUPhnvOz3pYvwS4qOEZxGKXecA=s176-c-k-c0x00ffffff-no-rj",channelLink:"https://www.youtube.com/@MoneyPechu",thumbnail:"https://i.ytimg.com/vi/jA8lhy2Eh7s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrEGBGSaRKyIwEXjZbbTIhvg2e0w"},{heading:"Inside Report From Station Panel Control Room | Odisha Train Accident",duration:"21:24",channelName:"Hindustan Times",viewsCount:"130K",uploadedTime:"5 hours",channelLogo:"https://yt3.googleusercontent.com/PkHy298NcLen2IGd0jO7m29FC8wfCYRIBplND1ZgheqIVSLjq0b-RQlu_pEfKoSpX6lcqRVGSA=s176-c-k-c0x00ffffff-no-rj",channelLink:"https://www.youtube.com/@HT-Videos",thumbnail:"https://i.ytimg.com/vi/sBigT3BOrcI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTuTPoxRGq9YEhVDsDMU89UqCJgQ"},{heading:"Jimmy With The New Ball 🙌 | Watch Anderson's Lord's Opening Spell | England v New Zealand 2022",duration:"4:58",channelName:"England & Wales Cricket Board",viewsCount:"15.1M",uploadedTime:"11 months",channelLogo:"https://yt3.googleusercontent.com/fRTh6Q0FUUZ50HFjtiUw_5DeDhQy87dhpUOdLzPySHsZXipNu3lpD4R9oxyKUzXY_DDUVPZB=s176-c-k-c0x00ffffff-no-rj",channelLink:"https://www.youtube.com/@officialenglandcricket",thumbnail:"https://i.ytimg.com/vi/5upQGvf22qA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTFbTlc9DsT239YDQFRKjYIoBsAA"},{heading:"Easy Reverse Technique in Car | Reference points for reverse | Reverse எளிதான முறை | Birlas Parvai",duration:"14:14",channelName:"Birlas Parvai",viewsCount:"140K",uploadedTime:"1 year",channelLogo:"https://yt3.googleusercontent.com/ytc/AGIKgqNvT1RMvv2LdTJRuhbg4AR_hHXRuiIDG4UqmqGyNg=s176-c-k-c0x00ffffff-no-rj",channelLink:"https://www.youtube.com/@birlasparvai",thumbnail:"https://i.ytimg.com/vi/OZUdsMwdJfo/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdMSBD-L1Q3oLWd-cYc1s_ObqqtQ"}];return e}var ce={name:"App",components:{ChipButton:A,VideoCard:x,HeaderComponent:ie},data(){return{chipList:ae(),cards:oe()}},methods:{changeActive(e){this.chipList.forEach((n=>{n.isActive=e==n.value}))}}};const se=(0,m.Z)(ce,[["render",p]]);var re=se;(0,i.ri)(re).mount("#app")}},n={};function t(i){var a=n[i];if(void 0!==a)return a.exports;var o=n[i]={exports:{}};return e[i].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,i,a,o){if(!i){var c=1/0;for(d=0;d<e.length;d++){i=e[d][0],a=e[d][1],o=e[d][2];for(var s=!0,r=0;r<i.length;r++)(!1&o||c>=o)&&Object.keys(t.O).every((function(e){return t.O[e](i[r])}))?i.splice(r--,1):(s=!1,o<c&&(c=o));if(s){e.splice(d--,1);var l=a();void 0!==l&&(n=l)}}return n}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[i,a,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,i){var a,o,c=i[0],s=i[1],r=i[2],l=0;if(c.some((function(n){return 0!==e[n]}))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(r)var d=r(t)}for(n&&n(i);l<c.length;l++)o=c[l],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(d)},i=self["webpackChunkyoutube"]=self["webpackChunkyoutube"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(166)}));i=t.O(i)})();
//# sourceMappingURL=app.2cdf0f48.js.map