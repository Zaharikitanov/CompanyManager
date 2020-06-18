import React from "react";
import { Card, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup } from "reactstrap";
import RedirectButton from '../../components/Buttons/RedirectButton';
import EmployeesList from '../../components/TableLists/EmployeesList';
import { AdminRoute } from '../../routes';

const Employees = () => {

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
              <Input placeholder="Търси Служител" type="text" />
            </InputGroup>
          </FormGroup>
        </Form>
        <RedirectButton className="optileader-teal-background white-font-color" buttonText="Добави Служител" url={AdminRoute.AddCompany}/>
      </Card>

      
    </div>
  ); 
}

export default Employees;