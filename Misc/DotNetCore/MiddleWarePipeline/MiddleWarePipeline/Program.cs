WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
WebApplication app = builder.Build();

app.UseDeveloperExceptionPage();
app.UseStaticFiles(); // Serve static files
app.UseRouting();
// app.UseWelcomePage(); // Middleware returning a welcome page

app.MapGet("/", () => "Hello World!");
app.Run();
