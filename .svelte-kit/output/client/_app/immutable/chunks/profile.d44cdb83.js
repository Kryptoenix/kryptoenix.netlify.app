import{s as z,n as se,o as ye,k as ke,c as oe,d as Z,u as x,g as $,e as ee,h as ce}from"./scheduler.9b9e513e.js";import{S as G,i as U,g as I,h as D,j as V,f as v,k as m,a as A,y as p,z as we,m as J,s as T,n as K,c as N,B,C as Ee,o as Q,d as E,t as C,e as X,p as te,b as ne,q as fe,r as H,u as M,v as R,w as F,D as ue,E as de,H as Ie,F as De}from"./index.781c9930.js";import{t as Ve}from"./posts.bddda4f7.js";import{e as Y,d as W,s as S}from"./icon.9d7289f6.js";import{H as Oe,P as Ce,F as Le}from"./footer.5fe447a3.js";function $e(s,e){const l={},n={},t={$$scope:1};let i=s.length;for(;i--;){const a=s[i],c=e[i];if(c){for(const r in a)r in c||(n[r]=1);for(const r in c)t[r]||(l[r]=c[r],t[r]=1);s[i]=c}else for(const r in a)t[r]=1}for(const a in n)a in l||(l[a]=void 0);return l}function et(s){return typeof s=="object"&&s!==null?s:{}}function me(s,e,l){const n=s.slice();return n[5]=e[l].depth,n[6]=e[l].title,n[7]=e[l].slug,n}function he(s){let e,l,n=s[6]+"",t,i,a,c,r,f,_;function O(){return s[4](s[7])}return{c(){e=I("li"),l=I("span"),t=J(n),c=T(),this.h()},l(b){e=D(b,"LI",{id:!0,class:!0});var u=V(e);l=D(u,"SPAN",{dir:!0,id:!0,class:!0});var L=V(l);t=K(L,n),L.forEach(v),c=N(u),u.forEach(v),this.h()},h(){m(l,"dir","ltr"),m(l,"id",i=`toc-link-${s[7]}`),m(l,"class",a="cursor-pointer border-l-4 border-transparent transition-all hover:border-primary hover:bg-base-content hover:bg-opacity-10 active:bg-primary active:text-primary-content active:font-bold pr-4 "+(s[5]<=2?"py-3":"py-2")),B(l,"pl-4",s[5]<=2),B(l,"pl-8",s[5]===3),B(l,"pl-12",s[5]===4),B(l,"pl-16",s[5]===5),B(l,"pl-20",s[5]===6),m(e,"id",r=`toc-item-${s[7]}`),m(e,"class","flex flex-col")},m(b,u){A(b,e,u),p(e,l),p(l,t),p(e,c),f||(_=Ee(l,"click",O),f=!0)},p(b,u){s=b,u&1&&n!==(n=s[6]+"")&&Q(t,n),u&1&&i!==(i=`toc-link-${s[7]}`)&&m(l,"id",i),u&1&&a!==(a="cursor-pointer border-l-4 border-transparent transition-all hover:border-primary hover:bg-base-content hover:bg-opacity-10 active:bg-primary active:text-primary-content active:font-bold pr-4 "+(s[5]<=2?"py-3":"py-2"))&&m(l,"class",a),u&1&&B(l,"pl-4",s[5]<=2),u&1&&B(l,"pl-8",s[5]===3),u&1&&B(l,"pl-12",s[5]===4),u&1&&B(l,"pl-16",s[5]===5),u&1&&B(l,"pl-20",s[5]===6),u&1&&r!==(r=`toc-item-${s[7]}`)&&m(e,"id",r)},d(b){b&&v(e),f=!1,_()}}}function Pe(s){let e,l,n,t=Y(s[0]),i=[];for(let a=0;a<t.length;a+=1)i[a]=he(me(s,t,a));return{c(){e=I("aside"),l=I("nav"),n=I("ul");for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=D(a,"ASIDE",{class:!0});var c=V(e);l=D(c,"NAV",{id:!0,"aria-label":!0,dir:!0,class:!0});var r=V(l);n=D(r,"UL",{dir:!0,id:!0});var f=V(n);for(let _=0;_<i.length;_+=1)i[_].l(f);f.forEach(v),r.forEach(v),c.forEach(v),this.h()},h(){m(n,"dir","ltr"),m(n,"id","toc-list-root"),m(l,"id","post-toc"),m(l,"aria-label","TableOfContent"),m(l,"dir","rtl"),m(l,"class","max-h-[calc(100vh-12rem)] overflow-y-hidden hover:overflow-y-auto"),m(e,"class","sticky top-16 py-8")},m(a,c){A(a,e,c),p(e,l),p(l,n);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(n,null)},p(a,[c]){if(c&1){t=Y(a[0]);let r;for(r=0;r<t.length;r+=1){const f=me(a,t,r);i[r]?i[r].p(f,c):(i[r]=he(f),i[r].c(),i[r].m(n,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=t.length}},i:se,o:se,d(a){a&&v(e),we(i,a)}}}function je(s,e,l){let{toc:n}=e,t=[],i=!0,a=[];ye(()=>{if(window.screen.availWidth>=1280){const r=new IntersectionObserver(_=>_.forEach(O=>O.isIntersecting?t.push(O.target.id):l(1,t=t.filter(b=>b!==O.target.id))),{rootMargin:"-64px 0px 0px 0px"}),f=new IntersectionObserver(_=>l(2,i=_[0].isIntersecting));Array.from(document.querySelectorAll("main h2, main h3, main h4, main h5, main h6")).forEach(_=>r.observe(_)),f.observe(document.getElementsByTagName("main")[0])}}),ke(()=>{typeof headingsObserver<"u"&&headingsObserver.disconnect(),typeof articleObserver<"u"&&articleObserver.disconnect()});const c=r=>document.getElementById(r).scrollIntoView({behavior:"smooth"});return s.$$set=r=>{"toc"in r&&l(0,n=r.toc)},s.$$.update=()=>{s.$$.dirty&2&&t.length>0&&l(3,a=t),s.$$.dirty&4&&i===!1&&l(3,a=[]),s.$$.dirty&9&&a&&n.forEach(r=>{var f,_;return a.includes(r.slug)?(f=document.getElementById(`toc-link-${r.slug}`))==null?void 0:f.classList.add("!border-accent"):(_=document.getElementById(`toc-link-${r.slug}`))==null?void 0:_.classList.remove("!border-accent")})},[n,t,i,a,c]}class Se extends G{constructor(e){super(),U(this,e,je,Pe,z,{toc:0})}}function _e(s,e,l){const n=s.slice();return n[2]=e[l],n}function Ae(s){let e,l,n=Y(Object.values(s[1])),t=[];for(let a=0;a<n.length;a+=1)t[a]=ge(_e(s,n,a));const i=a=>C(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=X()},l(a){for(let c=0;c<t.length;c+=1)t[c].l(a);e=X()},m(a,c){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(a,c);A(a,e,c),l=!0},p(a,c){if(c&3){n=Y(Object.values(a[1]));let r;for(r=0;r<n.length;r+=1){const f=_e(a,n,r);t[r]?(t[r].p(f,c),E(t[r],1)):(t[r]=ge(f),t[r].c(),E(t[r],1),t[r].m(e.parentNode,e))}for(te(),r=n.length;r<t.length;r+=1)i(r);ne()}},i(a){if(!l){for(let c=0;c<n.length;c+=1)E(t[c]);l=!0}},o(a){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)C(t[c]);l=!1},d(a){a&&v(e),we(t,a)}}}function ge(s){let e,l,n;var t=s[2];function i(a,c){return{props:{post:a[0]}}}return t&&(e=fe(t,i(s))),{c(){e&&H(e.$$.fragment),l=X()},l(a){e&&M(e.$$.fragment,a),l=X()},m(a,c){e&&R(e,a,c),A(a,l,c),n=!0},p(a,c){if(t!==(t=a[2])){if(e){te();const r=e;C(r.$$.fragment,1,0,()=>{F(r,1)}),ne()}t?(e=fe(t,i(a)),H(e.$$.fragment),E(e.$$.fragment,1),R(e,l.parentNode,l)):e=null}else if(t){const r={};c&1&&(r.post=a[0]),e.$set(r)}},i(a){n||(e&&E(e.$$.fragment,a),n=!0)},o(a){e&&C(e.$$.fragment,a),n=!1},d(a){a&&v(l),e&&F(e,a)}}}function Be(s){let e,l=Object.keys(s[1]).length,n,t=l&&Ae(s);return{c(){e=I("div"),t&&t.c(),this.h()},l(i){e=D(i,"DIV",{class:!0});var a=V(e);t&&t.l(a),a.forEach(v),this.h()},h(){m(e,"class","sticky top-24 hidden xl:flex flex-col gap-4 w-fit h-[calc(100vh-12rem)] ml-auto mr-8 my-8 justify-center")},m(i,a){A(i,e,a),t&&t.m(e,null),n=!0},p(i,[a]){l&&t.p(i,a)},i(i){n||(E(t),n=!0)},o(i){C(t),n=!1},d(i){i&&v(e),t&&t.d()}}}function Te(s,e,l){let{post:n}=e;const t=Object.assign({});return s.$$set=i=>{"post"in i&&l(0,n=i.post)},[n,t]}class Ne extends G{constructor(e){super(),U(this,e,Te,Be,z,{post:0})}}const qe=()=>{const s=document.querySelectorAll("pre"),e="Copy",l="Copied!",n=async(t,i)=>{const a=document.createRange(),c=t.childNodes.length;a.setStart(t,2),a.setEnd(t,c);const r=window.getSelection();!r||(r.removeAllRanges(),r.addRange(a),document.execCommand("copy",!1),!(async()=>navigator.clipboard.writeText(r.toString())))||(i.textContent=l,setTimeout(()=>{i.textContent=e},1e3),r.removeRange(a))};s.forEach(t=>{const i=document.createElement("button");i.textContent=e,i.classList.add("btn","btn-secondary","btn-xs","absolute","right-2","top-3","hidden"),t.prepend(i),t.addEventListener("mouseenter",()=>{i.classList.remove("hidden")}),t.addEventListener("mouseleave",()=>{i.classList.add("hidden")}),i.addEventListener("click",a=>{a.preventDefault(),n(t,i)})})};function He(s){let e,l;return e=new Ne({props:{post:s[0]}}),{c(){H(e.$$.fragment)},l(n){M(e.$$.fragment,n)},m(n,t){R(e,n,t),l=!0},p(n,t){const i={};t&1&&(i.post=n[0]),e.$set(i)},i(n){l||(E(e.$$.fragment,n),l=!0)},o(n){C(e.$$.fragment,n),l=!1},d(n){F(e,n)}}}function ve(s){let e,l,n;return l=new Se({props:{toc:s[0].toc}}),{c(){e=I("div"),H(l.$$.fragment),this.h()},l(t){e=D(t,"DIV",{class:!0});var i=V(e);M(l.$$.fragment,i),i.forEach(v),this.h()},h(){m(e,"class","h-full hidden xl:block")},m(t,i){A(t,e,i),R(l,e,null),n=!0},p(t,i){const a={};i&1&&(a.toc=t[0].toc),l.$set(a)},i(t){n||(E(l.$$.fragment,t),n=!0)},o(t){C(l.$$.fragment,t),n=!1},d(t){t&&v(e),F(l)}}}function Re(s){let e;const l=s[1].default,n=Z(l,s,s[2],null);return{c(){n&&n.c()},l(t){n&&n.l(t)},m(t,i){n&&n.m(t,i),e=!0},p(t,i){n&&n.p&&(!e||i&4)&&x(n,l,t,t[2],e?ee(l,t[2],i,null):$(t[2]),null)},i(t){e||(E(n,t),e=!0)},o(t){C(n,t),e=!1},d(t){n&&n.d(t)}}}function Fe(s){let e,l,n,t,i,a,c,r,f,_,O,b,u,L,P,j;e=new Oe({props:{post:s[0]}});let k=He(s),h=s[0].toc&&ve(s);return u=new Ce({props:{post:s[0],$$slots:{default:[Re]},$$scope:{ctx:s}}}),P=new Le({props:{sticky:!0}}),{c(){H(e.$$.fragment),l=T(),n=I("div"),t=I("div"),k&&k.c(),c=T(),r=I("div"),h&&h.c(),O=T(),b=I("div"),H(u.$$.fragment),L=T(),H(P.$$.fragment),this.h()},l(o){M(e.$$.fragment,o),l=N(o),n=D(o,"DIV",{class:!0});var d=V(n);t=D(d,"DIV",{class:!0});var q=V(t);k&&k.l(q),q.forEach(v),c=N(d),r=D(d,"DIV",{class:!0});var w=V(r);h&&h.l(w),w.forEach(v),O=N(d),b=D(d,"DIV",{class:!0});var g=V(b);M(u.$$.fragment,g),L=N(g),M(P.$$.fragment,g),g.forEach(v),d.forEach(v),this.h()},h(){m(t,"class","flex-1 w-full order-first ease-out transform mx-auto xl:mr-0 xl:ml-0"),m(r,"class","flex-1 w-full xl:order-last ease-out transform mx-auto xl:ml-0 xl:mr-0"),m(b,"class","flex-none w-full max-w-screen-md mx-auto xl:mx-0"),m(n,"class","flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap")},m(o,d){R(e,o,d),A(o,l,d),A(o,n,d),p(n,t),k&&k.m(t,null),p(n,c),p(n,r),h&&h.m(r,null),p(n,O),p(n,b),R(u,b,null),p(b,L),R(P,b,null),j=!0},p(o,[d]){const q={};d&1&&(q.post=o[0]),e.$set(q),k.p(o,d),o[0].toc?h?(h.p(o,d),d&1&&E(h,1)):(h=ve(o),h.c(),E(h,1),h.m(r,null)):h&&(te(),C(h,1,1,()=>{h=null}),ne());const w={};d&1&&(w.post=o[0]),d&4&&(w.$$scope={dirty:d,ctx:o}),u.$set(w)},i(o){j||(E(e.$$.fragment,o),E(k),o&&oe(()=>{j&&(a&&a.end(1),i=ue(t,W,{x:25,duration:300,delay:500}),i.start())}),E(h),o&&oe(()=>{j&&(_&&_.end(1),f=ue(r,W,{x:-25,duration:300,delay:500}),f.start())}),E(u.$$.fragment,o),E(P.$$.fragment,o),j=!0)},o(o){C(e.$$.fragment,o),C(k),i&&i.invalidate(),o&&(a=de(t,W,{x:25,duration:300})),C(h),f&&f.invalidate(),o&&(_=de(r,W,{x:-25,duration:300})),C(u.$$.fragment,o),C(P.$$.fragment,o),j=!1},d(o){o&&(v(l),v(n)),F(e,o),k&&k.d(),o&&a&&a.end(),h&&h.d(),o&&_&&_.end(),F(u),F(P)}}}function Me(s,e,l){let{$$slots:n={},$$scope:t}=e,{post:i}=e;return ye(()=>{qe()}),s.$$set=a=>{"post"in a&&l(0,i=a.post),"$$scope"in a&&l(2,t=a.$$scope)},[i,n,t]}class ze extends G{constructor(e){super(),U(this,e,Me,Fe,z,{post:0})}}function Ge(s){let e;const l=s[13].default,n=Z(l,s,s[14],null);return{c(){n&&n.c()},l(t){n&&n.l(t)},m(t,i){n&&n.m(t,i),e=!0},p(t,i){n&&n.p&&(!e||i&16384)&&x(n,l,t,t[14],e?ee(l,t[14],i,null):$(t[14]),null)},i(t){e||(E(n,t),e=!0)},o(t){C(n,t),e=!1},d(t){n&&n.d(t)}}}function Ue(s){let e,l;return e=new ze({props:{post:s[0],$$slots:{default:[Ge]},$$scope:{ctx:s}}}),{c(){H(e.$$.fragment)},l(n){M(e.$$.fragment,n)},m(n,t){R(e,n,t),l=!0},p(n,[t]){const i={};t&16384&&(i.$$scope={dirty:t,ctx:n}),e.$set(i)},i(n){l||(E(e.$$.fragment,n),l=!0)},o(n){C(e.$$.fragment,n),l=!1},d(n){F(e,n)}}}function We(s,e,l){let{$$slots:n={},$$scope:t}=e,{path:i}=e,{slug:a}=e,{toc:c}=e,{created:r}=e,{updated:f}=e,{published:_}=e,{summary:O}=e,{tags:b}=e,{flags:u}=e,{title:L}=e,{image:P}=e,{in_reply_to:j}=e,k={path:i,slug:a,toc:c,created:r,updated:f,published:_,summary:O,tags:b,flags:u,title:L,image:P,in_reply_to:j},h={type:Ve(k),...k};return s.$$set=o=>{"path"in o&&l(1,i=o.path),"slug"in o&&l(2,a=o.slug),"toc"in o&&l(3,c=o.toc),"created"in o&&l(4,r=o.created),"updated"in o&&l(5,f=o.updated),"published"in o&&l(6,_=o.published),"summary"in o&&l(7,O=o.summary),"tags"in o&&l(8,b=o.tags),"flags"in o&&l(9,u=o.flags),"title"in o&&l(10,L=o.title),"image"in o&&l(11,P=o.image),"in_reply_to"in o&&l(12,j=o.in_reply_to),"$$scope"in o&&l(14,t=o.$$scope)},[h,i,a,c,r,f,_,O,b,u,L,P,j,n,t]}class tt extends G{constructor(e){super(),U(this,e,We,Ue,z,{path:1,slug:2,toc:3,created:4,updated:5,published:6,summary:7,tags:8,flags:9,title:10,image:11,in_reply_to:12})}}function be(s){let e,l;return{c(){e=I("div"),l=J(s[2]),this.h()},l(n){e=D(n,"DIV",{class:!0});var t=V(e);l=K(t,s[2]),t.forEach(v),this.h()},h(){m(e,"class","opacity-50")},m(n,t){A(n,e,t),p(e,l)},p(n,t){t&4&&Q(l,n[2])},d(n){n&&v(e)}}}function pe(s){let e,l,n=(s[3]??S.author.bio)+"";return{c(){e=I("div"),l=new Ie(!1),this.h()},l(t){e=D(t,"DIV",{});var i=V(e);l=De(i,!1),i.forEach(v),this.h()},h(){l.a=null},m(t,i){A(t,e,i),l.m(n,e)},p(t,i){i&8&&n!==(n=(t[3]??S.author.bio)+"")&&l.p(n)},d(t){t&&v(e)}}}function Je(s){let e,l,n=(s[1]??S.author.name)+"",t,i,a,c,r,f,_,O,b,u,L=(s[1]??S.author.name)+"",P,j,k,h,o=s[2]&&be(s),d=(s[3]||S.author.bio)&&pe(s);const q=s[5].default,w=Z(q,s,s[4],null);return{c(){e=I("div"),l=I("div"),t=J(n),i=T(),a=I("div"),c=I("div"),r=I("img"),O=T(),o&&o.c(),b=T(),u=I("div"),P=J(L),j=T(),d&&d.c(),k=T(),w&&w.c(),this.h()},l(g){e=D(g,"DIV",{class:!0});var y=V(e);l=D(y,"DIV",{class:!0});var le=V(l);t=K(le,n),le.forEach(v),i=N(y),a=D(y,"DIV",{class:!0});var ae=V(a);c=D(ae,"DIV",{class:!0});var ie=V(c);r=D(ie,"IMG",{class:!0,src:!0,alt:!0,loading:!0,decoding:!0}),ie.forEach(v),ae.forEach(v),O=N(y),o&&o.l(y),b=N(y),u=D(y,"DIV",{class:!0});var re=V(u);P=K(re,L),re.forEach(v),j=N(y),d&&d.l(y),k=N(y),w&&w.l(y),y.forEach(v),this.h()},h(){m(l,"class","absolute -top-4 opacity-10 text-[12rem] text-neutral leading-tight rotate-[30deg]"),m(r,"class","hover:rotate-[360deg] transition-transform duration-1000 ease-in-out m-0"),ce(r.src,f=s[0]??S.author.avatar)||m(r,"src",f),m(r,"alt",_=s[1]??S.author.name),m(r,"loading","lazy"),m(r,"decoding","async"),m(c,"class","rounded-full border-2 border-white shadow-xl w-16 h-16"),m(a,"class","avatar mb-4"),m(u,"class","text-2xl mb-2"),m(e,"class","relative w-auto min-h-48 rounded-box overflow-hidden bg-gradient-to-b from-primary to-secondary text-primary-content transition-shadow duration-200 shadow-xl hover:shadow-2xl p-4 md:p-8 my-4")},m(g,y){A(g,e,y),p(e,l),p(l,t),p(e,i),p(e,a),p(a,c),p(c,r),p(e,O),o&&o.m(e,null),p(e,b),p(e,u),p(u,P),p(e,j),d&&d.m(e,null),p(e,k),w&&w.m(e,null),h=!0},p(g,[y]){(!h||y&2)&&n!==(n=(g[1]??S.author.name)+"")&&Q(t,n),(!h||y&1&&!ce(r.src,f=g[0]??S.author.avatar))&&m(r,"src",f),(!h||y&2&&_!==(_=g[1]??S.author.name))&&m(r,"alt",_),g[2]?o?o.p(g,y):(o=be(g),o.c(),o.m(e,b)):o&&(o.d(1),o=null),(!h||y&2)&&L!==(L=(g[1]??S.author.name)+"")&&Q(P,L),g[3]||S.author.bio?d?d.p(g,y):(d=pe(g),d.c(),d.m(e,k)):d&&(d.d(1),d=null),w&&w.p&&(!h||y&16)&&x(w,q,g,g[4],h?ee(q,g[4],y,null):$(g[4]),null)},i(g){h||(E(w,g),h=!0)},o(g){C(w,g),h=!1},d(g){g&&v(e),o&&o.d(),d&&d.d(),w&&w.d(g)}}}function Ke(s,e,l){let{$$slots:n={},$$scope:t}=e,{avatar:i}=e,{name:a}=e,{subname:c}=e,{bio:r}=e;return s.$$set=f=>{"avatar"in f&&l(0,i=f.avatar),"name"in f&&l(1,a=f.name),"subname"in f&&l(2,c=f.subname),"bio"in f&&l(3,r=f.bio),"$$scope"in f&&l(4,t=f.$$scope)},[i,a,c,r,t,n]}class nt extends G{constructor(e){super(),U(this,e,Ke,Je,z,{avatar:0,name:1,subname:2,bio:3})}}export{tt as P,et as a,nt as b,$e as g};