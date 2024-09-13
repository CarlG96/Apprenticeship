using Microsoft.AspNetCore.HttpLogging;
using Microsoft.AspNetCore.Identity;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args); // Creates a WebApplicationBuild using the CreateBuilder method

builder.Services.AddHttpLogging(opts =>
        opts.LoggingFields = HttpLoggingFields.RequestProperties
    );

builder.Logging.AddFilter("Microsoft.AspNetCore.HttpLogging", LogLevel.Information);

WebApplication app = builder.Build(); // Builds and returns an instance of WebApplication from the WebApplication builder

if (app.Environment.IsDevelopment())
{
    app.UseHttpLogging();
}

app.MapGet("/", () => "Hello World!"); // Defines an endpoint for your application, which returns "Hello World!" when the path "/" is called
app.MapGet("/person", () => new Person("Andrew", "Lock"));

app.Run(); // Runs the web application to start listening for requests and generating responses

public class Person
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public Person(string fName, string lName)
    {
        FirstName = fName;
        LastName = lName;
    }
}
