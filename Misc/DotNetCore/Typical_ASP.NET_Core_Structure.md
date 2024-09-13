# Typical ASP.NET Core structure

1) Create a WebApplicationBuilder instance
2) Register the required services and configuration with the WebApplicationBuilder
3) Call Build() on the builder instance to create a WebApplication instance
4) Add middleware to the application to create a pipeline
5) Map the endpoints to your application
6) Call Run() on the WebApplication to start the server and handle requests

## Adding and configuring services

ASP.NET Core uses small modular components for each distinct feature. This approach allows
individual features to evolve separately, with only a loose coupling to others, and it's
generally considered to be good design practice. The downside to this approach is that it
places the burden on the consumer of a feature to instantiate it correctly. Within your
application, these modular components are exposed as one or more services that are used 
by the application.

Within the context of ASP.NET Core, service refers to any class that provides functionality
to an application. Services could be classes exposed by a library or code you've written for
your application.

## Defining how requests are hadnled with middleware and endpoints

After registering yor services with the IoC container on WebApplicationBuilder and doing any 
further customisation, you create a WebApplication instance. You can do three main things with
the WebApplication instance:

1) Add middleware to the pipeline, which are services such as logging,
identifying the current user for a request, serving static files, and handling errors.
2) Map endpoints that generate a response for a request
3) Run the application by calling Run()

