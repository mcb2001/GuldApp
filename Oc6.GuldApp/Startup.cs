using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace Oc6.GuldApp
{
    public interface IStartup
    {
        void Configure(IApplicationBuilder app, IWebHostEnvironment env);
    }

    public class Startup : IStartup
    {
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseFileServer();
        }
    }
}
