# Company Manager

The application provides a possibility for users to CRUD companies, offices and employees.

## Functional Specifications

- Companies have a name and creation date. One company may have different offices.
- Offices have a country, city, street, street number, documents (only word files and pdf) and if it is the
headquarters or not.
- An employee have a first name, last name starting date, salary, vacation days, and experience
level (junior, mid, senior) and image. Also, employees may work from different offices, if they like to
relocate for a summer. 

All fields are required.

There is search to all entities:
- For companies search by name
- For offices search by country, city or street
- For employees search by first name or last name

### Prerequisites
* [Visual Studio](https://visualstudio.microsoft.com/vs/) 2017 or later.
* [Sql Server Express](https://www.microsoft.com/en-us/download/details.aspx?id=55994)
* [Node.js](https://nodejs.org/en/)

### Setup
- items in the prerequsites section should be installed
- project should be downloaded into your local machine

#### API and DB
- to communicate with the database, the connection string should be set in appsettings.json
  - `"ConnectionStrings": {
    "DefaultConnection": "data source=ExampleServerName; initial catalog=CompanyManager; integrated security=SSPI"
  },` where ExampleServerName is the name of your sql server name
  - to retrieve your sql server name you can write in the command prompt: SQLCMD -L (this can take some time)
 - open Visual Studio and type the following commands into the Package Manager Console:
   - add-migration init
   - update-database
 
 #### UI
 Start the command prompt and navigate to the project folder of CompanyManagerUI
 Type the following command to pull all the required packages: npm install
 After that the project can be run with the following command: npm start
 
 
 ## Project Description
 
 ### Technologies Used
 - [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/)
 - [Entity Framework Paginate Core](https://github.com/wdunn001/EntityFrameworkPaginateCore)
 - [Auto Mapper](https://automapper.org/)
 - [Fluent Validation](https://fluentvalidation.net/)
 - [Swashbuckle (Swagger)](https://github.com/domaindrivendev/Swashbuckle.AspNetCore)
 
### Design Patterns Applied
* **Services** - for separation of business logic
* **Repository** - for data-access logic
* **Factory** - for enhancing input data and save it to the database
* **Data mapping** - for populating output data from the database

### Disclaimer
Unit tests are not covering 100% of the code, they are for showcase on the key areas that need to be covered.
