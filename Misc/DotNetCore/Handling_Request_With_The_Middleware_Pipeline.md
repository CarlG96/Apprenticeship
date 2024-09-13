# Handling Requests with the Middleware Pipeline

In ASP.NET Core, middleware consists of C# classes or functions that handle an
HTTP request or response. Middleware is chained together, with the output of one
acting as the input to the next to form a pipeline.

Middleware can:

1) Handle an incoming HTTP request by generating an HTTP response
2) Process an incoming HTTP request, modify it, and pass it on to
another piece of middleware
3) Process an outgoing HTTP response, modify it, and pass it on to
another piece of middleware or the ASP.NET Core web server

## An example

1) The ASP.NET Core web server passes the request to the middleware pipeline
2) The authentication middleware associates a user with the current request
3) The authorisation middleware checks if the request is allowed to be
executed for the user
4) If the user is not allowed, the authorisation middleware will 
short-circuit the pipeline
5) Because the authorisation middleware hadnled the request, the
endpoint middleware
6) The response passes back through each middleware that ran previously in the
pipeline
7) The response is returned to the ASP.NET Core web server, which sends the 
response

The pipeline is bidirectional, the request passes through the pipeline in one 
direction until a response is generated, at which point the response passes
back through the pipeline, passing through each piece of middleware a second
time, in reverse order. All middleware has access to the HttpContext as it goes
through the pipeline, and it can be filled with data about the request, errors that
have occurred, data that has been loaded etc. After going through the middleware
pipeline, the web server sends converts the representation to a raw HTTP response
and sends it to the client.

The middleware can be thought of as a Russian doll, where you bypass each layer to
get to the core, where the response is, and then have to go through all the layers
again.

## Endpoints

Typically, you add endpoints after your middleware, and routing and endpoint
middleware use these endpoints.

## Order of Middleware

The order of middleware is very important! It can lead to termination of a 
middleware pipeline before you want it to happen

