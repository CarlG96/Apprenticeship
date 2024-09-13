# Understanding ASP.Net Core

ASP.NET Core can act as the server-side application for a variety of clients:
it can server HTML pages for traditional web apllications, act as a REST
API for client-side SPA applications, or act as an ad hoc RPC service for
client applications.

ASP.NET Core applications are console applications that self-host a web
server and handle requests directly.

## What ASP.NET Core has

- Middleware pipeline for defining your application's behaviour
- Built-in support for dependency injection
- COmbined UI (MVC) and API (web API) infrastructure
- Highly extensible configuration system
- Standardised, extensible logging system
- Uses asynchronous programming by default for built-in
scalability on cloud platforms

## More indepth how a Http Request to ASP.NET Core works example of home page

1) AN HTTP request is made to the server for the home page
2) Goes to reverse proxy/ web host, which forwards it to ASP.NET web server
3) ASP.NET web server receives the HTTP Request and passes it to the middle ware
as a HttpContext object
4) Middleware processes the request, logging some values, for example, and passes
the request to the endpoint middleware
5) The endpoint middleware generates a response such as HTML
6) Response passes back through middleware back to the web server, to the reverse
proxy/ web host and is given as a response

## dotnet stuff

dotnet restore downloads the versions of the NuGet packages
dotnet build builds your does dotnet restore and builds your code
dotnet run does dotnet restore and dotnet build and then runs your code
dotnet new sln -n <nameof solution> creates a new solution
dotnet new web -o <webapplication> creates an empty ASP.NET Core project in a subfolder
dotnet sln add <webapplication> add the new project to the solution folder
dotnet add package Newtonsoft.Json would add the NuGet package Newtonsoft.Json to your project

