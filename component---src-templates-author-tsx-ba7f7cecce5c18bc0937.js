(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0FFB":function(t,e,a){"use strict";var n=a("Wbzz"),i=a("q1tI"),r=(a("WNjm"),a("qKvR"));var c=function(t){var e,a;function i(e){return t.call(this,e)||this}return a=t,(e=i).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,i.prototype.render=function(){var t=this.props.baseURL,e=void 0===t?"/":t,a=this.props.pageContext,i=a.currentPage,c=a.numPages,o=(a.limit,a.skip,1===i),s=i===c,l=i-1==1?""+e:e+"page/"+(i-1),d=e+"page/"+(i+1);return[Object(r.d)("nav",{className:"pagination",role:"navigation"},!o&&Object(r.d)(n.Link,{to:l,rel:"prev",className:"newer-posts"},"← ",Object(r.d)("span",{className:"hide"},"Previous Page")),Object(r.d)("span",{className:"page-number"},Object(r.d)("span",{className:"hide"},"Page ",i,"/",c)),!s&&Object(r.d)(n.Link,{to:d,rel:"next",className:"older-posts"},Object(r.d)("span",{className:"hide"},"Next Page")," →"))]},i}(i.Component);e.a=c},qPpN:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",(function(){return k}));a("f3/d");var n=a("iYmT"),i=(a("KKXr"),a("wTIg")),r=(a("q1tI"),a("qKvR")),c=a("b2pr"),o=a("62pA"),s=a("0FFB"),l=a("j8Pq"),d=a("uHth"),p=a("+ego"),b=a("uJCF"),m=a("TJpk"),u=a.n(m),j=a("kVF2"),h=a("e9Mt"),O=a("2+o5"),g={name:"16v0z3",styles:"@media (max-width:500px){display:none;}"},w=Object(i.a)("div",{target:"e13x5ytl0"})({name:"1p1atwe",styles:"z-index:10;flex-shrink:0;display:flex;justify-content:center;align-items:center;margin:0 0 10px 0;font-family:Georgia,serif;font-style:italic;"}),f=Object(i.a)("h2",{target:"e13x5ytl1"})({name:"1esyalt",styles:"z-index:10;flex-shrink:0;margin:5px 0 10px 0;max-width:600px;font-size:2rem;line-height:1.3em;font-weight:300;letter-spacing:0.5px;opacity:0.8;"}),y=Object(i.a)("span",{target:"e13x5ytl2"})({name:"1a11e29",styles:"display:inline-block;margin:0 12px;opacity:0.5;"}),x={name:"16irtzw",styles:"z-index:10;flex-shrink:0;margin:0 0 20px 0;width:100px;height:100px;box-shadow:rgba(255,255,255,0.1) 0 0 0 6px;"};e.default=function(t){var e=t.data.authorYaml,a=t.pageContext.authorId,i=t.data.allMarkdownRemark.edges.filter((function(t){return(!0!==t.node.frontmatter.draft||!1)&&t.node.frontmatter.author&&t.node.frontmatter.author.id===e.id})),m=t.data.allMarkdownRemark.totalCount;return Object(r.d)(p.a,null,Object(r.d)(u.a,null,Object(r.d)("html",{lang:j.a.lang}),Object(r.d)("title",null,e.id," - ",j.a.siteTitle),Object(r.d)("meta",{name:"description",content:e.bio}),Object(r.d)("meta",{property:"og:site_name",content:j.a.siteTitle}),Object(r.d)("meta",{property:"og:type",content:"profile"}),Object(r.d)("meta",{property:"og:title",content:e.id+" - "+j.a.siteTitle}),Object(r.d)("meta",{property:"og:url",content:j.a.siteUrl+t.pathContext.slug}),Object(r.d)("meta",{property:"article:publisher",content:"https://www.facebook.com/santypk4"}),Object(r.d)("meta",{property:"article:author",content:"https://www.facebook.com/santypk4"}),Object(r.d)("meta",{name:"twitter:card",content:"summary"}),Object(r.d)("meta",{name:"twitter:title",content:e.id+" - "+j.a.title}),Object(r.d)("meta",{name:"twitter:url",content:j.a.siteUrl+t.pathContext.slug}),j.a.twitter&&Object(r.d)("meta",{name:"twitter:site",content:"@"+j.a.twitter.split("https://twitter.com/")[1]}),j.a.twitter&&Object(r.d)("meta",{name:"twitter:creator",content:"@"+j.a.twitter.split("https://twitter.com/")[1]}),j.a.github&&Object(r.d)("meta",{name:"github:site",content:"@"+j.a.github.split("https://github.com/")[1]})),Object(r.d)(d.a,null,Object(r.d)("header",{className:"no-cover",css:Object(n.a)([b.k,b.e])},Object(r.d)("div",{css:b.j},Object(r.d)(o.a,{isHome:!1}),Object(r.d)(b.f,null,Object(r.d)("img",{css:Object(n.a)([b.a,x]),src:t.data.authorYaml.avatar.childImageSharp.fluid.src,alt:e.id}),Object(r.d)(b.h,null,e.name," "),e.bio&&Object(r.d)(f,null,e.bio),Object(r.d)(w,null,e.location&&Object(r.d)("div",{css:g},"📍 ",e.location," ",Object(r.d)(y,null,"•")),Object(r.d)("div",{css:g},m>1&&m+" posts",1===m&&"1 post",0===m&&"No posts"," ",Object(r.d)(y,null,"•")),e.twitter&&Object(r.d)("a",{className:"social-link-tw",css:b.i,href:"https://twitter.com/"+e.twitter,title:"Twitter",target:"_blank",rel:"noopener noreferrer"},Object(r.d)(h.a,null)),e.github&&Object(r.d)("a",{className:"social-link-gh",css:b.i,href:"https://github.com/"+e.github,title:"Github",target:"_blank",rel:"noopener noreferrer"},Object(r.d)(O.a,null)))))),Object(r.d)("main",{id:"site-main",css:Object(n.a)([b.g,b.k])},Object(r.d)("div",{css:b.j},Object(r.d)("div",{css:Object(n.a)([b.b,b.c])},i.map((function(t){var e=t.node;return Object(r.d)(l.a,{key:e.fields.slug,post:e})}))),Object(r.d)(s.a,{pageContext:t.pageContext,baseURL:"/author/"+a+"/"}))),Object(r.d)(c.a,null)))};var k="1704566019"}}]);
//# sourceMappingURL=component---src-templates-author-tsx-ba7f7cecce5c18bc0937.js.map