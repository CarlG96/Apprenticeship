using Microsoft.AspNetCore.Mvc;

namespace LeaveBookingSystemAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LeaveController : ControllerBase
    {

        private static readonly string[] Summaries =
        [
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        ];

        [HttpGet("blah")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

		/* All Staff Endpoints */

		// Request Leave endpoint
		// Cancel Leave request endpoint
		// View Status of Leave request endpoint (Pending, Approved, Rejected)
		// View Remaining Annual leave endpoint

		/* Manager Endpoints */
		// View outstanding leave requests for their staff endpoint
		// Approve leave for their staff endpoint
		// Reject leave for their staff endpoint
		// View annual leave for their staff endpoint

		/* Admin Endpoints */
		// Add a new member of staff endpoint
		// Amend the role or department of a member of staff endpoint
		//  View all outstanding leave requests filtered by staff member, manager’s team or 
		// across the company endpoint
		// amend the amount of annual leave for a member of staff endpoint
		// Approve requests on behalf of managers and track system-wide usage.

		// Requires login
		// JWT tokens will be used for authentication
		// Request must check the role of the user to see if they are authorised to view the endpoint
		// The system will limit the amount of requests from a particular endpoint
		//  The system will adjust its HTTP headers so that the server version is obfuscated
		



	}
}
