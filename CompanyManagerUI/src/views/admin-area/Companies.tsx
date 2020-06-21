import React, { useEffect, useState } from "react";
import { Card, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup, Button } from "reactstrap";
import RedirectButton from '../../components/Buttons/RedirectButton';
import CompaniesList from '../../components/TableLists/CompaniesList';
import { GetPaginatedItems } from "../../helpers/requests";
import { AdminRoute } from "../../routes";

const Companies = () => {

  const [data, setData] = useState<any>();
  const [search, setSearch] = useState("");

  const loadData = (apiUrl: string) => {
    GetPaginatedItems(apiUrl)
        .catch(error => console.log(error))
        .then((json) => {
            setData(json.results);
        });
  }

  useEffect(() => {
    loadData("company/search");
  },[]);

  const getResults = () => {
    loadData(`company/search?searchText=${search}`);
  }

  return (
    <div className="m-4">
      <Card className="p-4 d-flex-none align-middle w-100">
        <Form className="navbar-search mr-3">
          <FormGroup className="mb-0">
            <InputGroup className="input-group-alternative"
            onChange={e => setSearch(e.target.value)}>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="fas fa-search" />
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Search by name" type="text" />
            </InputGroup>
          </FormGroup>
        </Form>
        <Button color="success" onClick={getResults}>Search</Button>
        <RedirectButton className="teal-background white-font-color" buttonText="Add Company" url={AdminRoute.AddCompany} />
      </Card>
      {data 
        ?
        <CompaniesList listData={data} />
        :
        <h1>Loading...</h1>
      }
    </div>
  );
}

export default Companies;