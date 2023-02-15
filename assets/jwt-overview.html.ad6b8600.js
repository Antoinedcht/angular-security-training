import{d as t}from"./app.f041b3af.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";var n="/angular-security-training/assets/jwt-structure.af7c9b60.png";const a={},o=t('<h1 id="_1-1-jwt-overview" tabindex="-1"><a class="header-anchor" href="#_1-1-jwt-overview" aria-hidden="true">#</a> 1.1 JWT Overview</h1><h2 id="jwt-in-a-nutshell" tabindex="-1"><a class="header-anchor" href="#jwt-in-a-nutshell" aria-hidden="true">#</a> JWT in a nutshell</h2><p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a <strong>compact</strong> and self-contained way for securely <strong>transmitting</strong> information between parties as a <strong>JSON object</strong>.</p><ul><li><p>Information can be <strong>verified</strong> and trusted because it is <strong>digitally signed</strong>.</p></li><li><p>Used in <strong>URL</strong>, <strong>POST</strong> parameter, or an <strong>HTTP header</strong>.</p></li><li><p>Used to <strong>authenticate an API</strong>.</p></li></ul><p>It contains all important information about an entity, meaning that <strong>no database queries are necessary</strong> and <strong>no need to save the session on the server</strong>.</p><h2 id="what-is-jwt-structure" tabindex="-1"><a class="header-anchor" href="#what-is-jwt-structure" aria-hidden="true">#</a> What is JWT Structure ?</h2><p>JWT looks like the following in its JWS compact serialization :</p><p><img src="'+n+'" alt="jwt-structure"></p><p><strong>JOSE Header:</strong> (Javascript Object Signing and Encryption) Indicates to the receiver which <strong>type of signature algorithm</strong> to use for <strong>payload validation</strong>.</p><p><strong>JWS Payload:</strong> Can contain any information but note that <strong>the content is not encrypted</strong>. So any information that you put in <strong>the token is readable</strong> by anyone who intercepts it. It is possible to use JSON Web Encryption (<strong>JWE</strong>) to <strong>encrypt the content of the payload</strong> which is then signed with JWS.</p><p><strong>JWS Signature:</strong> is a MAC (Message authentication code) produced with the header, payload and the secret key.</p><h2 id="what-is-a-bearer-token" tabindex="-1"><a class="header-anchor" href="#what-is-a-bearer-token" aria-hidden="true">#</a> What is a Bearer Token ?</h2><p>The Bearer Token is a <strong>JWT used during an authentication process</strong>. Bearer Tokens are <strong>part of the OAuth V2 standard</strong> and widely adopted by many APIs. In the JWT authentication workflow, the bearer token becomes a signed <strong>temporary replacement for the login/password credentials</strong>. JWS Payload indicates the bearer standard properties for JWT Based Authentication:</p><ul><li><code>iss</code> means the issuing entity, in this case, our <strong>authentication server</strong></li><li><code>iat</code> is the <strong>timestamp</strong> of creation of the JWT</li><li><code>sub</code> contains the <strong>technical identifier of the user</strong></li><li><code>exp</code> contains the <strong>token expiration timestamp</strong></li></ul><h2 id="what-are-jwt-benefits-for-authentication" tabindex="-1"><a class="header-anchor" href="#what-are-jwt-benefits-for-authentication" aria-hidden="true">#</a> What are JWT benefits for authentication ?</h2><p>The main authentication methods are the following:</p><ul><li><strong>HTTP basic authentication:</strong> relies on a simple credential scheme with <strong>username:password</strong>. They are sent in every request with <strong>risk of exposure</strong> even if sent in a secure connection. <strong>The password management is not trivial</strong> as you have to ask the user to change their passwords regularly. <strong>This method must be avoided in modern web applications</strong>, unless you <strong>add a multi-factor authentication layer</strong>.</li><li><strong>Authentication Cookies :</strong> CSRF and XSS can be mitigated if you <strong>always use HttpOnly flag</strong> and use <strong>signed cookies for authentication</strong>. This method is <strong>incompatible with REST</strong> as it introduces a state into a stateless protocol.</li><li><strong>Signature:</strong> Requires <strong>private key management</strong>. Useful for <strong>API authentication only</strong> and not adapted for browser/client authentication.</li><li><strong>JWT:</strong> Token based authentication widely spread today for both browser / client (SPA) and RESTful API authentication. <strong>Secure implementation</strong> is needed to avoid potential threats.</li></ul><p>JWT key benefit is to allow the possibility to <strong>separate the Authentication logic from the Application Server</strong>.</p><p>The Application servers become safer and faster by <strong>delegating authentication to a third party server</strong> that can be one of the following:</p><ul><li><p>A centralized in-house custom developed authentication server.</p></li><li><p>A commercial product like LDAP capable of issuing JWTs.</p></li><li><p>A completely external third-party authentication provider such as for example OAuth.</p></li></ul><p>Another benefit is to make the application server completely stateless and no need to store password digests in application server database.</p>',21);function r(i,s){return o}var d=e(a,[["render",r]]);export{d as default};