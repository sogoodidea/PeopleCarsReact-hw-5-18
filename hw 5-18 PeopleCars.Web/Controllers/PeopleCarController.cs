using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using hw_5_18_PeopleCars.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace hw_5_18_PeopleCars.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCarController : ControllerBase
    {
        private string _connectionString;
        public PeopleCarController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [Route("GetPeople")]
        public List<Person> GetPeople()
        {
            var repo = new PCRespository(_connectionString);
            return repo.GetPeople();
        }

        [Route("GetPersonById")]
        public Person GetPersonById(int id)
        {
            var repo = new PCRespository(_connectionString);
            return repo.GetPersonById(id);
        }

        [HttpPost][Route("AddPerson")]
        public void AddPerson(Person person)
        {
            var repo = new PCRespository(_connectionString);
            repo.AddPerson(person);
        }

        [HttpPost][Route("AddCar")]
        public void AddCar(Car car)
        {
            var repo = new PCRespository(_connectionString);
            repo.AddCar(car);
        }

        [HttpPost][Route("DeleteCars")]
        public void DeleteCars(Person person)
        {
            var repo = new PCRespository(_connectionString);
            repo.DeleteCars(person.Id);
        }
    }
}