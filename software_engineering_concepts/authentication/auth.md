
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

JWT is a JSON-based open standard (RFC 7519) for creating access tokens that assert claims.
FOr example,a server could generate a token that has the claim "loggined in as admin" for a client. The client could then use that token to prove that it is logged in as admin.

JSON Web Token (JWT) is a compact token format intended for space constrained environments such as HTTP Authorization headers and URI query parameters.

JWT are use for Authorization, Single Sign On or information Exchange.


#### JWT Structure

`header.payload.signature`

```
eyJ0eXAiOiJKV1QiLA0KICJhbGciOiJIUzI1NiJ9
.
eyJpc3MiOiJqb2UiLA0KICJleHAiOjEzMDA4MTkzODAsDQogImh0dHA6Ly9leGFt
cGxlLmNvbS9pc19yb290Ijp0cnVlfQ
.
dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk
```

#### Header

The header typically consists of two parts the type of token and the hashing algorithm. The header will be encode using Base64Url to form the first part of th JWT.
```
{
  "alg": "HS256",
  "typ": "JWT"
}
```

#### Payload

The payload contains the claims, the claims are statements about an entity (typically the user). The claims can be registered, public or private. The payload will be encode using Base64Url to form the first part of th JWT.

```
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

#### Signature

The signature is used to verify the message wasn't changed along the way, in the case of toekns signed with a private key, it can also verify that the send of the JWT is who it says it is.

```
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
```

- JSON Web Signature (JWS)


- JSON Web Encryption (JWE)


- Base64url is a group of similiar binary-to-text encoding schemes that represent binary data in a ASCII string format by translating it into radix-64 representation with url safe character.

- HMAC: 

- RSA: 

- ECDSA:



[JWT specs OpenID](https://openid.net/specs/draft-jones-json-web-token-07.html#anchor1)
[JWT Claims](https://www.iana.org/assignments/jwt/jwt.xhtml)


### Multi-factor Authetifcation (2FA) 

### TOTP Hardaware device

## OAuth 2.0



## Encryption 

- public/private key pair 

- HMAC algorithm







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

# Interesting technologie



# Reference


[Token Based Authentication for SPA](https://stormpath.com/blog/token-auth-spa)
[OAuth 2.0 Autorization Framework](https://tools.ietf.org/html/rfc6749)

[Session Management OWASP Foundation](https://www.owasp.org/index.php/Session_Management_Cheat_Sheet)

[keycdn](https://www.keycdn.com/blog/x-xss-protection/)

[Token Auth for stateless SPA](https://medium.com/lightrail/getting-token-authentication-right-in-a-stateless-single-page-application-57d0c6474e3)