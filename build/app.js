var et="esbuild-svelte-ts";var nt={type:"git",url:"https://github.com/Valexr/esbuild-svelte-ts.git"};function m(){}function G(e){return e()}function N(){return Object.create(null)}function x(e){e.forEach(G)}function L(e){return typeof e=="function"}function I(e,t){return e!=e?t==t:e!==t}function rt(e){return Object.keys(e).length===0}var W=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;var P=class e{_listeners="WeakMap"in W?new WeakMap:void 0;_observer=void 0;options;constructor(t){this.options=t}observe(t,n){return this._listeners.set(t,n),this._getObserver().observe(t,this.options),()=>{this._listeners.delete(t),this._observer.unobserve(t)}}_getObserver(){return this._observer??(this._observer=new ResizeObserver(t=>{for(let n of t)e.entries.set(n.target,n),this._listeners.get(n.target)?.(n)}))}};P.entries="WeakMap"in W?new WeakMap:void 0;var ot=!1;function it(){ot=!0}function st(){ot=!1}function $(e,t){e.appendChild(t)}function a(e,t,n){e.insertBefore(t,n||null)}function l(e){e.parentNode&&e.parentNode.removeChild(e)}function _(e){return document.createElement(e)}function H(e){return document.createTextNode(e)}function w(){return H(" ")}function y(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ct(e){return Array.from(e.childNodes)}function lt(e,t){t=""+t,e.data!==t&&(e.data=t)}function ut(e){let t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}var O;function b(e){O=e}var v=[];var at=[],C=[],pt=[],St=Promise.resolve(),V=!1;function dt(){V||(V=!0,St.then(R))}function D(e){C.push(e)}var U=new Set,M=0;function R(){if(M!==0)return;let e=O;do{try{for(;M<v.length;){let t=v[M];M++,b(t),Ot(t.$$)}}catch(t){throw v.length=0,M=0,t}for(b(null),v.length=0,M=0;at.length;)at.pop()();for(let t=0;t<C.length;t+=1){let n=C[t];U.has(n)||(U.add(n),n())}C.length=0}while(v.length);for(;pt.length;)pt.pop()();V=!1,U.clear(),b(e)}function Ot(e){if(e.fragment!==null){e.update(),x(e.before_update);let t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(D)}}function _t(e){let t=[],n=[];C.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),C=t}var B=new Set,Mt;function A(e,t){e&&e.i&&(B.delete(e),e.i(t))}function q(e,t,n,r){if(e&&e.o){if(B.has(e))return;B.add(e),Mt.c.push(()=>{B.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}var Ct=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"],At=new Set([...Ct]);function ht(e){e&&e.c()}function J(e,t,n){let{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),D(()=>{let i=e.$$.on_mount.map(G).filter(L);e.$$.on_destroy?e.$$.on_destroy.push(...i):x(i),e.$$.on_mount=[]}),o.forEach(D)}function Q(e,t){let n=e.$$;n.fragment!==null&&(_t(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(e,t){e.$$.dirty[0]===-1&&(v.push(e),dt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function z(e,t,n,r,o,i,p,u=[-1]){let d=O;b(e);let s=e.$$={fragment:null,ctx:[],props:i,update:m,not_equal:o,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:N(),dirty:u,skip_bound:!1,root:t.target||d.$$.root};p&&p(s.root);let j=!1;if(s.ctx=n?n(e,t.props||{},(f,k,...g)=>{let E=g.length?g[0]:k;return s.ctx&&o(s.ctx[f],s.ctx[f]=E)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](E),j&&Tt(e,f)),k}):[],s.update(),j=!0,x(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){it();let f=ct(t.target);s.fragment&&s.fragment.l(f),f.forEach(l)}else s.fragment&&s.fragment.c();t.intro&&A(e.$$.fragment),J(e,t.target,t.anchor),st(),R()}b(d)}var Nt;typeof HTMLElement=="function"&&(Nt=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&this.attachShadow({mode:"open"})}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){let r=this.$$c.$on(e,t);this.$$l_u.set(t,r)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){let r=this.$$l_u.get(t);r&&(r(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(o){return()=>{let i;return{c:function(){i=_("slot"),o!=="default"&&y(i,"name",o)},m:function(d,s){a(d,i,s)},d:function(d){d&&l(i)}}}};if(await Promise.resolve(),!this.$$cn)return;let t={},n=ut(this);for(let o of this.$$s)o in n&&(t[o]=[e(o)]);for(let o of this.attributes){let i=this.$$g_p(o.name);i in this.$$d||(this.$$d[i]=X(i,o.value,this.$$p_d,"toProp"))}this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$scope:{ctx:[]}}});let r=()=>{this.$$r=!0;for(let o in this.$$p_d)if(this.$$d[o]=this.$$c.$$.ctx[this.$$c.$$.props[o]],this.$$p_d[o].reflect){let i=X(o,this.$$d[o],this.$$p_d,"toAttribute");i==null?this.removeAttribute(o):this.setAttribute(this.$$p_d[o].attribute||o,i)}this.$$r=!1};this.$$c.$$.after_update.push(r),r();for(let o in this.$$l)for(let i of this.$$l[o]){let p=this.$$c.$on(o,i);this.$$l_u.set(i,p)}this.$$l={}}}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=X(e,n,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function X(e,t,n,r){let o=n[e]?.type;if(t=o==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(o){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(o){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}var F=class{$$=void 0;$$set=void 0;$destroy(){Q(this,1),this.$destroy=m}$on(t,n){if(!L(n))return m;let r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{let o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!rt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}};var mt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(mt);var xt='<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/></svg>';function It(e){let t,n;return{c(){t=_("a"),y(t,"href",n=e[0].url),y(t,"target","_blank"),y(t,"rel","noreferrer"),y(t,"id","gh")},m(r,o){a(r,t,o),t.innerHTML=xt},p(r,[o]){o&1&&n!==(n=r[0].url)&&y(t,"href",n)},i:m,o:m,d(r){r&&l(t)}}}function Pt(e,t,n){let{repository:r}=t;return e.$$set=o=>{"repository"in o&&n(0,r=o.repository)},[r]}var Z=class extends F{constructor(t){super(),z(this,t,Pt,It,I,{repository:0})}},$t=Z;function Rt(e){let t,n,r,o,i,p,u,d,s,j,f,k,g,E,T,S;return document.title=t=e[0],u=new $t({props:{repository:e[1]}}),{c(){n=w(),r=_("header"),o=_("button"),o.textContent="Some",i=w(),p=_("h1"),ht(u.$$.fragment),d=w(),s=H(e[0]),j=w(),f=_("button"),f.textContent="Else",k=w(),g=_("main"),g.innerHTML="<p>Main</p>",E=w(),T=_("footer"),T.innerHTML="<p>Footer</p>"},m(c,h){a(c,n,h),a(c,r,h),$(r,o),$(r,i),$(r,p),J(u,p,null),$(p,d),$(p,s),$(r,j),$(r,f),a(c,k,h),a(c,g,h),a(c,E,h),a(c,T,h),S=!0},p(c,[h]){(!S||h&1)&&t!==(t=c[0])&&(document.title=t);let K={};h&2&&(K.repository=c[1]),u.$set(K),(!S||h&1)&&lt(s,c[0])},i(c){S||(A(u.$$.fragment,c),S=!0)},o(c){q(u.$$.fragment,c),S=!1},d(c){c&&(l(n),l(r),l(k),l(g),l(E),l(T)),Q(u)}}}function Bt(e,t,n){let{name:r}=t,{repository:o}=t;return e.$$set=i=>{"name"in i&&n(0,r=i.name),"repository"in i&&n(1,o=i.repository)},[r,o]}var Y=class extends F{constructor(t){super(),z(this,t,Bt,Rt,I,{name:0,repository:1})}},yt=Y;var Bn=new yt({target:document.body,props:{name:et,repository:nt}});export{Bn as default};
