(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{DVng:function(t,e,n){t.exports={container:"pagination-module--container--jH0P2",active:"pagination-module--active--2gHKl",ellipsis:"pagination-module--ellipsis--xvUoZ",previous:"pagination-module--previous--WUxFk",next:"pagination-module--next--1rF_K"}},YBKJ:function(t,e,n){"use strict";var r=n("emib"),a=n("qDzq"),i=n("CCE/"),o=n("TUPI"),c=n("kxs/"),d=n("96qb"),s=n("chL8").f,l=n("Drra").f,p=n("rjfK").f,u=n("EU/P").trim,m=r.Number,g=m,f=m.prototype,b="Number"==i(n("nsRs")(f)),h="trim"in String.prototype,j=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){var n,r,a,i=(e=h?e.trim():u(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+e}for(var o,d=e.slice(2),s=0,l=d.length;s<l;s++)if((o=d.charCodeAt(s))<48||o>a)return NaN;return parseInt(d,r)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof m&&(b?d((function(){f.valueOf.call(n)})):"Number"!=i(n))?o(new g(j(e)),n,m):j(e)};for(var O,y=n("QPJK")?s(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;y.length>x;x++)a(g,O=y[x])&&!a(m,O)&&p(m,O,l(g,O));m.prototype=f,f.constructor=m,n("IYdN")(r,"Number",m)}},y7hu:function(t,e,n){"use strict";n("t+fG")("link",(function(t){return function(e){return t(this,"a","href",e)}}))},zvhb:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return x}));n("3nLz");var r=n("iYmT"),a=(n("YBKJ"),n("HQhv"),n("q1tI"),n("qKvR")),i=n("TJpk"),o=n.n(i),c=n("TVx/"),d=n("Wm/0"),s=n("RdLo"),l=n("d2D+"),p=n("+ego"),u=n("kVF2"),m=(n("pJf4"),n("rzGZ"),n("m210"),n("4DPX"),n("y7hu"),n("YbXK"),n("cFtU"),n("q8oJ"),n("8npG"),n("Wbzz")),g=n("DVng"),f=n.n(g);function b(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var j=function(t){var e=t.currentPage,n=t.numPages,r=1===e,i=e===n,o=e-1==1?"/":(e-1).toString(),c=(e+1).toString(),d=function(t,e,n){return void 0===n&&(n=2),Array.from({length:t},(function(t,r){return{link:"/"+(r+n),index:r+n,current:e===r+n}}))},s=[{link:"/",index:1,current:e}];return s=n<=5?[].concat(b(s),b(Array.from({length:n-1},(function(t,n){return{link:"/"+(n+2),index:n+2,current:e===n+2}})))):e<=3?[].concat(b(s),b(d(3,e)),[{separator:!0,index:"finisher-separator"},{link:"/"+n+"/",index:n,current:!1}]):e>n-3?[].concat(b(s),[{separator:!0,index:"finisher-separator"}],b(d(4,e,n-3))):[].concat(b(s),[{separator:!0,index:"starter-separator"}],b(d(3,e,e-1)),[{separator:!0,index:"finisher-separator"},{link:"/"+n+"/",index:n,current:!1}]),Object(a.d)("nav",{className:f.a.container,role:"navigation"},Object(a.d)("div",null,!r&&Object(a.d)(m.Link,{to:o,rel:"prev",className:f.a.previous},String.fromCharCode(171)),Object(a.d)("span",{className:"pagination-list"},s.map((function(t){return Object(a.d)("span",{key:t.index},t.separator?Object(a.d)("a",{className:""+f.a.ellipsis},"…"):Object(a.d)(m.Link,{to:t.link||"",className:t.index===e?f.a.active:"","aria-label":"Goto page "+t.index},t.index))}))),!i&&Object(a.d)(m.Link,{to:c,rel:"next",className:f.a.next},String.fromCharCode(187))))},O=n("uJCF"),y={name:"gg1ax7",styles:"@media (min-width:795px){.post-card:nth-of-type(6n + 1):not(.no-image){flex:1 1 100%;flex-direction:row;}.post-card:nth-of-type(6n + 1):not(.no-image) .post-card-image-link{position:relative;flex:1 1 auto;border-radius:5px 0 0 5px;}.post-card:nth-of-type(6n + 1):not(.no-image) .post-card-image{position:absolute;width:100%;height:100%;}.post-card:nth-of-type(6n + 1):not(.no-image) .post-card-content{flex:0 1 357px;}.post-card:nth-of-type(6n + 1):not(.no-image) h2{font-size:2.6rem;}.post-card:nth-of-type(6n + 1):not(.no-image) p{font-size:1.8rem;line-height:1.55em;}.post-card:nth-of-type(6n + 1):not(.no-image) .post-card-content-link{padding:30px 40px 0;}.post-card:nth-of-type(6n + 1):not(.no-image) .post-card-meta{padding:0 40px 30px;}}"},x=(e.default=function(t){var e=t.data.header.childImageSharp.fluid.sizes.split(", ")[1].split("px")[0],n=String(Number(e)/t.data.header.childImageSharp.fluid.aspectRatio);return Object(a.d)(p.a,{css:y},Object(a.d)(o.a,null,Object(a.d)("html",{lang:u.a.lang}),Object(a.d)("title",null,u.a.title),Object(a.d)("meta",{name:"description",content:u.a.description}),Object(a.d)("meta",{property:"og:site_name",content:u.a.title}),Object(a.d)("meta",{property:"og:type",content:"website"}),Object(a.d)("meta",{property:"og:title",content:u.a.title}),Object(a.d)("meta",{property:"og:description",content:u.a.description}),Object(a.d)("meta",{property:"og:url",content:u.a.siteUrl}),Object(a.d)("meta",{property:"og:image",content:""+u.a.siteUrl+t.data.header.childImageSharp.fluid.src}),u.a.facebook&&Object(a.d)("meta",{property:"article:publisher",content:u.a.facebook}),u.a.googleSiteVerification&&Object(a.d)("meta",{name:"google-site-verification",content:u.a.googleSiteVerification}),Object(a.d)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(a.d)("meta",{name:"twitter:title",content:u.a.title}),Object(a.d)("meta",{name:"twitter:description",content:u.a.description}),Object(a.d)("meta",{name:"twitter:url",content:u.a.siteUrl}),Object(a.d)("meta",{name:"twitter:image",content:""+u.a.siteUrl+t.data.header.childImageSharp.fluid.src}),u.a.twitter&&Object(a.d)("meta",{name:"twitter:site",content:"@"+u.a.twitter.split("https://twitter.com/")[1]}),Object(a.d)("meta",{property:"og:image:width",content:e}),Object(a.d)("meta",{property:"og:image:height",content:n})),Object(a.d)(l.a,null,Object(a.d)("header",{css:Object(r.a)([O.k,O.e]),style:{backgroundImage:"url('"+t.data.header.childImageSharp.fluid.src+"')"}},Object(a.d)("div",{css:O.j},Object(a.d)(O.f,null,Object(a.d)(O.h,null,t.data.logo?Object(a.d)("img",{style:{maxHeight:"45px"},src:t.data.logo.childImageSharp.fixed.src,alt:u.a.title}):u.a.title),Object(a.d)(O.d,null,u.a.description)),Object(a.d)(d.a,{isHome:!0}))),Object(a.d)("main",{id:"site-main",css:Object(r.a)([O.g,O.k])},Object(a.d)("div",{css:O.j},Object(a.d)("div",{css:Object(r.a)([O.b,O.c])},t.data.allMarkdownRemark.edges.map((function(t){return!0!==t.node.frontmatter.draft&&Object(a.d)(s.a,{key:t.node.fields.slug,post:t.node})}))))),t.children,Object(a.d)(j,{currentPage:t.pageContext.currentPage,numPages:t.pageContext.numPages}),Object(a.d)(c.a,null)))},"1615794124")}}]);
//# sourceMappingURL=component---src-templates-index-tsx-791b0082a8d4c32a1fed.js.map