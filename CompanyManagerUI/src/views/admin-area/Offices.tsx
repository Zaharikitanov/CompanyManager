import React, { useState, useEffect } from "react";
import { Button, ButtonDropdown, Card, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup } from "reactstrap";
import FacilitiesList, { FacilityListItem } from '../../components/TableLists/FacilitiesList';
import { GetPaginatedItems } from "../../helpers/requests";

export enum OfficeSearchOptions {
  Country = "Country",
  City = "City",
  Street = "Street"
}

const Offices = (props: FacilityListItem[]) => {

  const [data, setData] = useState<any>();
  const [search, setSearch] = useState("");
  const [dropdownOpen, setOpen] = useState(false);
  const [searchBy, setSearchBy] = useState(OfficeSearchOptions.City);
  const toggle = () => setOpen(!dropdownOpen);
  let searchOptionsArray = Object.values(OfficeSearchOptions);

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
    loadData(`office/search?searchText=${search}&searchBy=${searchBy}`);
  }
console.log(data);
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
              <Input placeholder="Search" type="text" />
            </InputGroup>
          </FormGroup>
        </Form>
        <span className="d-flex align-items-center mr-2">By</span>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret className="px-2 w-100px teal-background white-font-color">
            {OfficeSearchOptions[searchBy]}
          </DropdownToggle>
          <DropdownMenu>
            {searchOptionsArray.map((data, index) =>
              <DropdownItem key={index} onClick={() => setSearchBy(OfficeSearchOptions[`${data}`])}>{data}</DropdownItem>
            )}
          </DropdownMenu>
        </ButtonDropdown>
        <Button color="success" className="mx-2" onClick={getResults}>Search</Button>
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

export default Offices;