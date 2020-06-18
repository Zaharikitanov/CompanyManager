import React from "react";
import { Card, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup } from "reactstrap";
import RedirectButton from '../../components/Buttons/RedirectButton';
import CustomersList from "../../components/TableLists/ClientsList";
import { ClientRoute } from '../../routes';

const Customers = () => {

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
        <RedirectButton className="optileader-teal-background white-font-color" buttonText="Добави Клиент" url={ClientRoute.AddClient}/>
      </Card>

      <CustomersList listData={tableData} />
      
    </div>
  ); 
}

export default Customers;