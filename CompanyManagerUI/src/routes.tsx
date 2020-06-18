//theme pages
import Tables from "./views/examples/Tables.jsx";
import Icons from "./views/examples/Icons.jsx";
import Profile from "./views/examples/Profile.jsx";
import Maps from "./views/examples/Maps.jsx";

//admin pages
import Register from "./views/admin-area/Register.jsx";
import Login from "./views/admin-area/Login.jsx";
import TestPage from "./views/admin-area/testpage";
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
import AddClient from "./views/client-area/Client/AddClient";
import EditClient from "./views/shared/Client/EditClient";
import ClientDetails from "./views/shared/Client/ClientDetails";
import AllCustomers from "./views/admin-area/All-Customers";
import Customers from "./views/client-area/Customers";

//client pages
import Landing from "./views/client-area/Orders.jsx";
import Order from "./views/client-area/Order/Order.jsx";

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
  },
  // {
  //   path: AdminRoute.Facilities,
  //   name: "Обекти",
  //   icon: "fas fa-store-alt text-purple",
  //   component: Facilities,
  //   role: UserRole.Administrator
  // },
  // {
  //   path: AdminRoute.Employees,
  //   name: "Служители",
  //   icon: "fas fa-users text-teal",
  //   component: Employees,
  //   role: UserRole.Administrator
  // },
];

var SharedRoutes = [
  {
    path: SharedRoute.EditClient,
    name: "Промени Клиент",
    component: EditClient,
    role: [UserRole.Administrator, UserRole.Client]
  },
  {
    path: SharedRoute.ClientDetails,
    name: "Детайли",
    component: ClientDetails,
    role: [UserRole.Administrator, UserRole.Client]
  },
];

var ClientRoutes = [
  {
    path: ClientRoute.Index,
    name: "Поръчки",
    icon: "fas fa-home text-green",
    component: Landing,
    role: UserRole.Client
  },
  {
    path: ClientRoute.Customers,
    name: "Клиенти",
    icon: "fas fa-users text-teal",
    component: Customers,
    role: UserRole.Client
  },
  {
    path: ClientRoute.Order,
    name: "Поръчка",
    component: Order,
    role: UserRole.Client
  },
  {
    path: ClientRoute.AddClient,
    name: "Детайли",
    component: AddClient,
    role: [UserRole.Client]
  },
];

var ThemeRoutes = [
  
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    role: UserRole.Administrator
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    role: UserRole.Administrator
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    role: UserRole.Administrator
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    role: UserRole.Administrator
  },
  {
    path: "/test-page",
    name: "Test Page",
    icon: "ni ni-circle-08 text-pink",
    component: TestPage,
    role: UserRole.Administrator
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }
  
];

const routes = [].concat(
  AdministratorRoutes, 
  ClientRoutes,
  SharedRoutes,
  // ThemeRoutes
);

export default routes;
