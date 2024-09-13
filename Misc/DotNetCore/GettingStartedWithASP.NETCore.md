# Getting Started With ASP.NET Core

## What is ASP.NET Core?

- Modern, high-performance, open-source web framework
- Uses familiar design patterns and paradigms
- Can build and run on any platform

## How ASP.NET Core Processes a request

- An HTTP request is made to the server and is received by the ASP.NET Core Web Server
- The ASP.NET Core web server server receives the HTTP request, parses it into a HttpContext object,
and passes it to your application logic
- The request is processed by the application, which generates a response
- The response passes back to the ASP.NET Core web server
- The web server sends response to the browser