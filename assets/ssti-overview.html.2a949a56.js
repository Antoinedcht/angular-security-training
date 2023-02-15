import{o as a,c as s,a as n,t,F as i,d as e}from"./app.f041b3af.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";var r="/angular-security-training/assets/template-injection-example.7b0e393c.png";const p={},l=e(`<h1 id="_5-1-ssti-overview" tabindex="-1"><a class="header-anchor" href="#_5-1-ssti-overview" aria-hidden="true">#</a> 5.1 SSTI Overview</h1><h2 id="ssti-in-a-nutshell" tabindex="-1"><a class="header-anchor" href="#ssti-in-a-nutshell" aria-hidden="true">#</a> SSTI in a nutshell</h2><p>Server-Side Template Injection is an attack where a <strong>malicious payload is injected into a template</strong> which is then executed server-side.</p><h2 id="what-are-templates" tabindex="-1"><a class="header-anchor" href="#what-are-templates" aria-hidden="true">#</a> What are Templates ?</h2><p>Templates allow to <strong>pre-populate dynamic data from the server into a web page.</strong> Web pages coming from web templates can structure the component of web pages in such a way that can be modified independently of each other. Templates are commonly used for:</p><ul><li>Displaying information about users (username, bio...), products, companies.</li><li>Sending bulk emails.</li><li>Displaying a gallery of photos or videos.</li></ul><p>Example:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>Hello <span class="token punctuation">{</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="expression-sandbox" tabindex="-1"><a class="header-anchor" href="#expression-sandbox" aria-hidden="true">#</a> Expression Sandbox</h2>`,9),c=e(`<ul><li>Expressions are evaluated in your html. For example, 2 renders at 2.</li><li>To support the basic logic that is necessary to be able to render the user interface.</li><li>Allows a limited subset of JavaScript inside templates / prevent accessing global objects (window, ...)</li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Expression Sandbox is not intended for security purpose, but developers tend to use it as a secure sandbox (which is not!)</p></div><h2 id="template-injection-using-expression-sandbox" tabindex="-1"><a class="header-anchor" href="#template-injection-using-expression-sandbox" aria-hidden="true">#</a> Template Injection using Expression Sandbox</h2><p>This attack exploits vulnerable expression sandbox as shown in this example:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token operator">&lt;</span>p<span class="token operator">&gt;</span> Welcome
<span class="token punctuation">{</span><span class="token punctuation">{</span>constructor<span class="token punctuation">.</span><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token string">&#39;alert(1)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="`+r+'" alt="template-injection-example"></p>',6);function u(d,h){return a(),s(i,null,[l,n("p",null,"Expression Sandbox is a mechanism that checks Angular expressions inside "+t(),1),c],64)}var x=o(p,[["render",u]]);export{x as default};
