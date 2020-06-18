import React, { useEffect, useState } from "react";
import { Card, Form, FormGroup, InputGroupAddon, InputGroupText, Input, InputGroup } from "reactstrap";
import RedirectButton from '../../components/Buttons/RedirectButton';
import CompaniesList, { CompanyListItem } from '../../components/TableLists/CompaniesList';
import ApiResource from "../../helpers/ApiResource";
import { GetItems } from "../../helpers/requests";

const Companies = () => {

  const [data, setData] = useState<any>();
  const [search, setSearch] = useState("");
  const [filteredEntities, setFilteredEntities] = useState([]);

  useEffect(() => {
        GetItems("company")
        .catch(error => console.log(error))
        .then((json) => {
            setData(json);
        });
  },[]);

  useEffect(() => {
    if (data){
      setFilteredEntities(
        data.filter(item =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, data]);

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
          <RedirectButton className="optileader-teal-background white-font-color" buttonText="Add Company" url="/add-company" />
        </Card>
        <CompaniesList listData={filteredEntities} />
      </div>
  );
}

export default Companies;