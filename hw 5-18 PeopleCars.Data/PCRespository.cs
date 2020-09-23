using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace hw_5_18_PeopleCars.Data
{
    public class PCRespository
    {
        private readonly string _connectionString;

        public PCRespository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Person> GetPeople()
        {
            using (var context = new PCContext(_connectionString))
            {
                return context.People.Include(p => p.Cars).ToList();
            }
        }
        public Person GetPersonById(int id)
        {
            using (var context = new PCContext(_connectionString))
            {
                return context.People.Include(p => p.Cars).FirstOrDefault(p => p.Id == id);
            }
        }
        public void DeleteCars(int id)
        {
            using (var context = new PCContext(_connectionString))
            {
                context.Database.ExecuteSqlRaw(
                    "DELETE FROM Cars WHERE PersonId = @id",
                    new SqlParameter("@id", id));
            }
        }
        public void AddPerson(Person person)
        {
            using (var context = new PCContext(_connectionString))
            {
                context.People.Add(person);
                context.SaveChanges();
            }
        }
        public void AddCar(Car car)
        {
            using (var context = new PCContext(_connectionString))
            {
                context.Cars.Add(car);
                context.SaveChanges();
            }
        }
    }
}
