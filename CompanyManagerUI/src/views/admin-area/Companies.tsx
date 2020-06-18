import React from "react";
import { Card, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup } from "reactstrap";
import RedirectButton from '../../components/Buttons/RedirectButton';
import {SubscriptionStatus} from '../../components/enums/SubscriptionStatus';
import CompaniesList, { CompanyListItem } from '../../components/TableLists/CompaniesList';
import { GetItems } from "../../helpers/requests";

const Companies = () => {
  // const tableItems: CompanyListItem[] = GetItems('company');
  const tableData = [
    {
      id: "11",
      companyName: "Ради",
      facilitiesAmount: "2",
      profilesCount: "2",
      ordersCount: "40",
      expirationDate: "14.03.2020",
      status: SubscriptionStatus.Active
    },
    {
      id: "22",
      companyName: "Joy",
      facilitiesAmount: "14",
      profilesCount: "40",
      ordersCount: "120",
      expirationDate: "14.03.2020",
      status: SubscriptionStatus.Suspended
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
              <Input placeholder="Търси Фирма" type="text" />
            </InputGroup>
          </FormGroup>
        </Form>
        <RedirectButton className="optileader-teal-background white-font-color" buttonText="Добави Фирма" url="/add-company"/>
      </Card>
      <CompaniesList listData={null}/>
    </div>
  );
}

export default Companies;
