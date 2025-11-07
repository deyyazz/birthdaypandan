var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// PENTING: Tambahkan baris ini untuk mengaktifkan Static Files
app.UseStaticFiles();

// Ini adalah konfigurasi yang akan membuat server mencari file default (index.html)
app.UseDefaultFiles();

// app.MapGet("/", () => "Hello World!"); // <--- PASTIKAN BARIS INI HILANG ATAU DIKOMENTARI

app.Run();