# Company Manager

TODO

## Functional Specifications

TODO


### Prerequisites
* [Visual Studio](https://visualstudio.microsoft.com/vs/) 2017 or later.
* [Sql Server Express](https://www.microsoft.com/en-us/download/details.aspx?id=55994)

### Setup
- items in the prerequsites section should be installed
- project should be downloaded into your local machine
- to communicate with the database, the connection string should be set in appsettings.json
  - `"ConnectionStrings": {
    "DefaultConnection": "data source=ExampleServerName; initial catalog=GatewaysManager; integrated security=SSPI"
  },` where ExampleServerName is the name of your sql server name
  - to retrieve your sql server name you can write in the command prompt: SQLCMD -L (this can take some time)
 - open Visual Studio and type the following commands into the Package Manager Console:
   - add-migration init
   - update-database
   
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
