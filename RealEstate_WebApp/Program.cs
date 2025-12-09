using Microsoft.EntityFrameworkCore;
using RealEstate_WebApp.Models;

var builder = WebApplication.CreateBuilder(args);

// ======================
//  SERVICES (DI)
// ======================

// Enable MVC + API controllers
builder.Services.AddControllersWithViews();

// Database
builder.Services.AddDbContext<RealestateDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("RealEstateDB")));

// CORS for React
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.WithOrigins(
                "http://localhost:3000",
                "https://localhost:3000"
            )
            .AllowAnyMethod()
            .AllowAnyHeader();
        });
});

var app = builder.Build();

// ======================
//  MIDDLEWARE
// ======================

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

// ENABLE CORS BEFORE AUTH + ENDPOINTS
app.UseCors("AllowReactApp");

app.UseAuthorization();

// Map API controllers
app.MapControllers();

// Map MVC (Home, Views)
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}"
);

app.Run();
