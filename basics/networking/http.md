# Hypertext Transfer Protocol (HTTP)

HTTP is application protocol for distributed collaborative and hypermedia information systems. HTTP is the fondation of data communication for the `World Wide Web`.

Development of HTTP was initiated by `Tim Berners-Lee` at CERN in 1989. Standards development of HTTP was coordinated by the `Internet Engineering Task Force` (IETF) and the World `Wide Web Consortium` (W3C).

The first definition of HTTP/1.1, the version of HTTP in common use, occurred in RFC 2068 in 1997. The successor HTTP/2, was standardized in 2015, and is now supported by major web servers and browsers.

![HTTP-request](./img/http_request.png)

HTTP functions as a request-response protocol in the client-server computing model. A browser has a client request a ressource to application running on a computer hosting a website on a server.

Between the resquest and the response there are numerous entities, collectively designated as `proxies`, which perform different operations and act as gateways or caches. There are more computers between a browser and the server handling the request, routers, modems, and more. HTTP is on top at the application layer.

![Client-Server](./img/Client-server-chain.png)

- User-Agent: Any tool that act has the user, it is mostly web browser.

- Web Server: The server role is to serve the document as reqested by the client. The server is virtuallly represent as one server, but it can by multiple machines sharing the load or software interrogating other computers(likes cache, DB server, e-commerce server)

- Proxies: Proxies respresent the machine between the Client and the Server that relay the message. Those proxies can affect the the performance of the time of response. It can include :

  - caching (the cache can be public or private)
  - filtering (like an antivirus scan)
  - lkoad balancing
  - authentication
  - logging

## Aspects of HTTP

- HTTP is simple : HTTP have been designed to be simple and human readable.

- HTTP is extensible: IN HTTP/1.0 HTTP Headers mage this protocol easy to extend and experiment with, new fonctionnality can be add.

- HTTP is stateless: There is no link between two requests being successively cvarried out on the same connection. That add statefull ability developer have been using HTTP Cookies to allow sateful sessions. Using haeder extensibility, HTTP Cookies are added allowing session creation on each HTTP request to share the same context.

- HTTP and connections: A connection is controlled at the transport layer, therefore out of the scope of HTTP. HTTP need a reliable protocol so it use TCP over UDP.

HTTP/1.0 opena TCP connection for each request/response exchange, ontriducing 2 major flaws 1 opening a connection needs several round-trips of messages and therefore slow,but becomes more efficient when several messages are sent, warm connections are more efficient than cold ones.

## Controlled by HTTP

## Component of HTTP-bases systems

### Uniform Resource Identifiers (URI)

URI is a string of characters designed for unambiguous identification of resources and extensibility via the URI scheme.

`http://example.org/wiki/Main_Page`

resouce identified as: `/wiki/Main_Page`
define the protocol: `Hypertext Transfer Protocol (http:)`
from a network host whose domaine name is: `example.org`

### Uniform Resource Locators (URL)

A URL is a type of URI that Identifies a resource via a respresentation of its primary access mechanism("network location").

### Uniform Resource Name (URN)

Define the name of a resource on the network.

## Request

## Response

- Proxy server:
