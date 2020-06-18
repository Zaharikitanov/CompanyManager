import React from "react";
import { Card} from "reactstrap";
import OrdersList from '../../components/TableLists/OrdersList';

const Landing = () => {

  const tableData = [
    {
      id: "111-111",
      date: "20/01/2020",
      manufacturer: "Hoya",
      product: "Очила",
      diopter: "4",
      status: "Поръчана"
    },
    {
      id: "222-222",
      date: "10/01/2020",
      manufacturer: "Hoya",
      product: "Лещи",
      diopter: "4",
      status: "Поръчана"
    },
    {
      id: "333-333",
      date: "05/01/2020",
      manufacturer: "Essylor",
      product: "Очила",
      diopter: "1",
      status: "Поръчана"
    },
    {
      id: "444-444",
      date: "17/01/2020",
      manufacturer: "Leica",
      product: "Очила",
      diopter: "1.25",
      status: "Поръчана"
    },
    {
      id: "555-555",
      date: "17/01/2020",
      manufacturer: "Leica",
      product: "Очила",
      diopter: "1.25",
      status: "Поръчана"
    }
  ]

  return (
    <div className="m-4">
      {/* <Card className="p-4 d-flex-none align-middle w-100">
        <Form className="navbar-search mr-3">
          <FormGroup className="mb-0">
            <InputGroup className="input-group-alternative">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="fas fa-search" />
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Търси" type="text" />
            </InputGroup>
          </FormGroup>
        </Form>
      </Card> */}

      <Card className="mt-4">
        <OrdersList listData={tableData}/>
      </Card>
    </div>
  );

}

export default Landing;
