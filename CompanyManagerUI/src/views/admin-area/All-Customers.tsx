import React, { useState } from "react";
import { Card, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import RedirectButton from '../../components/Buttons/RedirectButton';
import CustomersList from "../../components/TableLists/ClientsList";

const AllCustomers = () => {

  const tableData = [
    {
      clientName: "Димитър Бербатов",
      phone: "0898 555 666",
      email: "d.berbatov@gmail.com",
      ordersCount: "40",
    },
    {
      clientName: "Валери Божинов",
      phone: "0898 777 888",
      email: "v.bojinov@gmail.com",
      ordersCount: "20",
    },
    {
      clientName: "Димитър Пенев",
      phone: "0898 444 333",
      email: "d.penev@gmail.com",
      ordersCount: "120",
    },
  ];

  const companiesList = [
    {
      companyId: "2222",
      companyName: "Оптики Ради"
    },
    {
      companyId: "3333",
      companyName: "Оптики Fox"
    }
  ];

  
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div className="m-4">
      <Card className="p-4 d-flex-none align-middle w-100">
        <Form className="navbar-search mr-3">
          <FormGroup className="mb-0">
            <InputGroup className="input-group-alternative">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="fas fa-search" />
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Търси Клиент" type="text" />
            </InputGroup>
          </FormGroup>
        </Form>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret className="px-5 optileader-teal-background white-font-color">
              Фирми
          </DropdownToggle>
          <DropdownMenu>
            {companiesList.map((data) =>
              <DropdownItem key={data.companyId}>{data.companyName}</DropdownItem>
            )}
          </DropdownMenu>
        </ButtonDropdown>
      </Card>

      <CustomersList listData={tableData} />
      
    </div>
  ); 
}

export default AllCustomers;