//theme pages
import Tables from "./views/examples/Tables.jsx";
import Icons from "./views/examples/Icons.jsx";
import Profile from "./views/examples/Profile.jsx";
import Maps from "./views/examples/Maps.jsx";

//admin pages
import Companies from "./views/admin-area/Companies";
import Employees from "./views/admin-area/Employees";
import Facilities from "./views/admin-area/Facilities";
import AdminHome from "./views/admin-area/AdminHome";
import AddCompany from "./views/admin-area/Company/AddCompany";
import CompanyDetails from "./views/admin-area/Company/CompanyDetails";
import EditCompany from "./views/admin-area/Company/EditCompany";
import AddFacility from "./views/admin-area/Facility/AddFacility";
import EditFacility from "./views/admin-area/Facility/EditFacility";
import FacilityDetails from "./views/admin-area/Facility/FacilityDetails";
import AddEmployee from "./views/admin-area/Employee/AddEmployee";
import EditEmployee from "./views/admin-area/Employee/EditEmployee";
import EmployeeDetails from "./views/admin-area/Employee/EmployeeDetails";
import AllCustomers from "./views/admin-area/All-Customers";
import Customers from "./views/client-area/Customers";

//client pages

import { UserRole } from './components/enums/UserRole';

export enum AdminRoute {
  Index = "/admin",
  Companies = "/companies",
  Facilities = "/facilities",
  Employees = "/employees",
  AddCompany = "/add-company",
  CompanyDetails = "/company-details",
  EditCompany = "/edit-company",
  AddFacility = "/add-facility",
  EditFacility = "/edit-facility",
  FacilityDetails = "/facility-details",
  AddEmployee = "/add-employee",
  EditEmployee = "/edit-employee",
  EmployeeDetails = "/employee-details",
  Customers = "/all-customers",
}

export enum ClientRoute {
  Index = "/",
  Order = "/order",
  AddClient = "/add-customer",
  Customers = "/customers",
}

export enum SharedRoute {
  EditClient = "/edit-customer",
  ClientDetails = "/customer-details",
}

var AdministratorRoutes = [
  {
    path: AdminRoute.Index,
    name: "Фирми",
    icon: "fas fa-atlas text-blue",
    component: AdminHome,
    role: UserRole.Administrator
  },
  {
    path: AdminRoute.Customers,
    name: "Клиенти",
    icon: "fas fa-users text-purple",
    component: AllCustomers,
    role: UserRole.Administrator
  },
  {
    path: AdminRoute.AddCompany,
    name: "Добави Фирма",
    component: AddCompany,
    role: UserRole.Administrator
  },
  {
    path: AdminRoute.EditCompany,
    name: "Промени Фирма",
    component: EditCompany,
    role: UserRole.Administrator
  },
  {
    path: AdminRoute.CompanyDetails,
    name: "Детайли",
    component: CompanyDetails,
    role: UserRole.Administrator
  },
  {
    path: AdminRoute.AddFacility,
    name: "Добави Обект",
    component: AddFacility,
    role: UserRole.Administrator
  },
  {
    path: AdminRoute.EditFacility,
    name: "Промени Обект",
    component: EditFacility,
    role: UserRole.Administrator
  },
  {
    path: AdminRoute.FacilityDetails,
    name: "Детайли",
    component: FacilityDetails,
    role: UserRole.Administrator
  },
  {
    path: AdminRoute.AddEmployee,
    name: "Добави Служител",
    component: AddEmployee,
    role: UserRole.Administrator
  },
  {
    path: AdminRoute.EditEmployee,
    name: "Промени Служител",
    component: EditEmployee,
    role: UserRole.Administrator
  },
  {
    path: AdminRoute.EmployeeDetails,
    name: "Детайли",
    component: EmployeeDetails,
    role: UserRole.Administrator
  }
];

const routes = [].concat(
  AdministratorRoutes
);

export default routes;
