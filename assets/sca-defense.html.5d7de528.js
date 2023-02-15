import{d as e}from"./app.f041b3af.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const n={},t=e('<h1 id="_6-3-vulnerable-component-defense" tabindex="-1"><a class="header-anchor" href="#_6-3-vulnerable-component-defense" aria-hidden="true">#</a> 6.3 Vulnerable Component Defense</h1><h2 id="how-do-i-prevent-using-vulnerable-components" tabindex="-1"><a class="header-anchor" href="#how-do-i-prevent-using-vulnerable-components" aria-hidden="true">#</a> How do I prevent using vulnerable components ?</h2><p>Continuously monitoring SCA tools reports and addressing the vulnerabilities raised will allow to reduce the risk of using vulnerable components. You can also add fail gates in your CI pipelines to avoid adding new vulnerable components in new code changes.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Continuously grooming and maintaining your application with a proper obsolescence management is key to reduce risks of having high/critical vulnerabilities.</p></div><h2 id="how-to-address-existing-vulnerable-components" tabindex="-1"><a class="header-anchor" href="#how-to-address-existing-vulnerable-components" aria-hidden="true">#</a> How to address existing vulnerable components ?</h2><ol><li><p><strong>Identify</strong> the Business criticality of your application (high or low importance ?)</p></li><li><p><strong>Prioritize</strong> by using the prioritization matrix (CVSS x business criticality) and order the vulnerabilities by their final priority.</p></li><li><p><strong>Analyze</strong> and discuss with your team about the vulnerability description by starting with the most critical vulnerabilities.</p></li><li><p><strong>Filter</strong> out false positives and ensure evidence is well documented and accessible.</p></li><li><p><strong>Document</strong> evidence and justification of your decisions and ensure they are always accessible.</p></li><li><p><strong>Plan</strong> to process vulnerabilities within their corresponding remediation time.</p></li><li><p><strong>Fix</strong> and remediate the vulnerabilities by agreeing on a resolution action for each vulnerability such as:</p><ul><li><p>Patch vulnerable code.</p></li><li><p>Upgrade vulnerable component version.</p></li><li><p>Virtual Patch your application with WAF in case patching vulnerable code is impossible.</p></li><li><p>Block vulnerable functionality.</p></li></ul></li><li><p><strong>Test</strong> any fix made to ensure the vulnerabilities are no longer present and exploitable. If possible, add unit tests for this specific flow.</p></li><li><p><strong>Monitor</strong> the security scans on a regular basis.</p></li><li><p><strong>Repeat</strong> the previous steps at each new vulnerability scan report.</p></li></ol>',6);function o(s,a){return t}var c=i(n,[["render",o]]);export{c as default};
