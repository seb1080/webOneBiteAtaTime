
# Web Security

## Securing a Web Application

- Strong Passwords
- Strong Encryption
- Secure Communcation (HTTPS)
- Secure Password Storage
- 2-factor-Authetification
- Password Recovery
- Man-in-the-middle-attacks

## Authentication vs. Authorization

- Authentication: The process of identifying a user as the person they clain to be, ex: password, driving License.

- Authorization: The process to validate that the use have the proper right to access part of the web application.  

### Cookie-based Sessions

At the first visit of a user on a web app. a ID get store into the browser has a Cookie. That cookie link the user browser to a session maintained on the server side.

### Token-based Authentication


### JSON Web Tokens (JWTs)

JWT Structure
```
header.payload.signature
```


### Multi-factor Authetifcation (2FA) 

### TOTP Hardaware device

## OAuth 2.0











## Malicious attack

- Session hijacking: Cookie Hijacking is the exploitation of a valid `session key` to gain unauthorized access to information or fonctionnality of a computer system.

The session Hijacking can take the `source-routed` IP packets or the `blind hijacking` or `man-in-the-middle attack` using a sniffing programm to watch for the conversation.

### Attack 

- Cross-site scripting (XSS): The attacker tricks the user's computer into running code which is treated as trustworthy because it appears to belong to the server, allowing the attacker to obtain a copy of the cookie or perform other operations.

### Solution 

- X-XSS Protection: Use `x-xss-protection` in the header of the request


- Cross-Site Request Forgery (CSRF): is an attacak that forces an end user to execute unwanted actions on a web app. in which they're currently autheticated.

- Distributed Denial of Service (DDoS): is a comprised of several infected systems which all target a specific system with the objective of rendering it inoperable. 

- Denial of service (Dos):  


## JSON Web Tokens (JWT)



# Interesting technologie



# Reference


[Token Based Authentication for SPA](https://stormpath.com/blog/token-auth-spa)
[OAuth 2.0 Autorization Framework](https://tools.ietf.org/html/rfc6749)

[Session Management OWASP Foundation](https://www.owasp.org/index.php/Session_Management_Cheat_Sheet)

[keycdn](https://www.keycdn.com/blog/x-xss-protection/)

[Token Auth for stateless SPA](https://medium.com/lightrail/getting-token-authentication-right-in-a-stateless-single-page-application-57d0c6474e3)