import React from "react";
import { Table } from "reactstrap";
import RedirectButton from '../Buttons/RedirectButton';
import { SharedRoute } from '../../routes';

export type CustomerListItem = {
    clientName: string;
    phone: string;
    email: string;
    ordersCount: string;
}

type CustomerListProps = {
    listData: Array<CustomerListItem>
}

const CustomersList = (props: CustomerListProps): JSX.Element => {

  return <>
      <Table className="align-items-center table-flush table-striped" responsive>
        <thead className="silver-background black-font-color">
          <tr className="text-center">
            <th className="f-size-16" scope="col"></th>
            <th className="f-size-16" scope="col">Име</th>
            <th className="f-size-16" scope="col">Телефон</th>
            <th className="f-size-16" scope="col">Мейл</th>
            <th className="f-size-16" scope="col">Брой Поръчки</th>
          </tr>
        </thead>
        <tbody>
          {props.listData.map((data, index) =>
            <tr className="text-center" key={index} >
              <td><RedirectButton className="optileader-teal-background white-font-color" buttonText="Детайли" url={SharedRoute.ClientDetails}/></td>
              <td className="f-size-16">{data.clientName}</td>
              <td className="f-size-16">{data.phone}</td>
              <td className="f-size-16">{data.email}</td>
              <td className="f-size-16">{data.ordersCount}</td>
            </tr>
          )}
        </tbody>
      </Table>
  </>
}

export default CustomersList;