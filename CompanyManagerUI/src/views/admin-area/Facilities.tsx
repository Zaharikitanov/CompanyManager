import React, { useState, useEffect } from "react";
import { Button, Card, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup } from "reactstrap";
import FacilitiesList, { FacilityListItem } from '../../components/TableLists/FacilitiesList';
import RedirectButton from '../../components/Buttons/RedirectButton';
import { GetPaginatedItems } from "../../helpers/requests";
import { AdminRoute } from "../../routes";

const Facilities = (props: FacilityListItem[]) => {

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
    loadData("office/search");
  },[]);

  const getResults = () => {
    console.log(search);
    loadData(`office/search?searchText=${search}`);
  }
// console.log(data);
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
              <Input placeholder="Search by country, city or street" type="text" />
            </InputGroup>
          </FormGroup>
        </Form>
        <Button color="success" onClick={getResults}>Search</Button>
        <RedirectButton className="teal-background white-font-color" buttonText="Add Office" url={AdminRoute.AddFacility} />
      </Card>
      {data 
        ?
        <FacilitiesList listData={data} />
        :
        <h1>Loading...</h1>
      }
      
    </div>
  );
}

export default Facilities;