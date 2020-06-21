//theme pages
import Tables from "./views/examples/Tables.jsx";
import Icons from "./views/examples/Icons.jsx";
import Profile from "./views/examples/Profile.jsx";
import Maps from "./views/examples/Maps.jsx";

//admin pages
import Companies from "./views/admin-area/Companies";
import Employees from "./views/admin-area/Employees";
import Offices from "./views/admin-area/Offices";
import AdminHome from "./views/admin-area/AdminHome";
import AddCompany from "./views/admin-area/Company/AddCompany";
import CompanyDetails from "./views/admin-area/Company/CompanyDetails";
import EditCompany from "./views/admin-area/Company/EditCompany";
import AddFacility from "./views/admin-area/Facility/AddFacility";
import EditFacility from "./views/admin-area/Facility/EditFacility";
import OfficeDetails from "./views/admin-area/Facility/OfficeDetails";
import AddEmployee from "./views/admin-area/Employee/AddEmployee";
import EditEmployee from "./views/admin-area/Employee/EditEmployee";
import EmployeeDetails from "./views/admin-area/Employee/EmployeeDetails";

//client pages

import { UserRole } from './components/enums/UserRole';

export enum AdminRoute {
  Index = "/",
  Companies = "/companies",
  Offices = "/offices",
  Employees = "/employees",
  AddCompany = "/add-company",
  CompanyDetails = "/company-details",
  EditCompany = "/edit-company",
  AddFacility = "/add-office",
  EditFacility = "/edit-office",
  OfficeDetails = "/office-details",
  AddEmployee = "/add-employee",
  EditEmployee = "/edit-employee",
  EmployeeDetails = "/employee-details",
}

var AdministratorRoutes = [
  {
    path: AdminRoute.Index,
    name: "Companies",
    icon: "fas fa-atlas text-blue",
    component: Companies,
  },
  {
    path: AdminRoute.Offices,
    name: "Offices",
    icon: "fas fa-atlas text-blue",
    component: Offices,
  },
  {
    path: AdminRoute.Employees,
    name: "Employees",
    icon: "fas fa-atlas text-blue",
    component: Employees,
  },
  {
    path: AdminRoute.AddCompany,
    name: "Add Company",
    component: AddCompany,
  },
  {
    path: AdminRoute.EditCompany,
    name: "Edit Company",
    component: EditCompany,
  },
  {
    path: AdminRoute.CompanyDetails,
    name: "Details",
    component: CompanyDetails,
  },
  {
    path: AdminRoute.AddFacility,
    name: "Add Office",
    component: AddFacility,
  },
  {
    path: AdminRoute.EditFacility,
    name: "Edit Office",
    component: EditFacility,
  },
  {
    path: AdminRoute.OfficeDetails,
    name: "Details",
    component: OfficeDetails,
  },
  {
    path: AdminRoute.AddEmployee,
    name: "Add Employee",
    component: AddEmployee,
  },
  {
    path: AdminRoute.EditEmployee,
    name: "Edit Employee",
    component: EditEmployee,
  },
  {
    path: AdminRoute.EmployeeDetails,
    name: "Details",
    component: EmployeeDetails,
  }
];

const routes = [].concat(
  AdministratorRoutes
);

export default routes;
