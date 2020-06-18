import React from "react";
import { Card, Table, Button } from "reactstrap";
import RedirectButton from '../Buttons/RedirectButton';
import { ClientRoute } from '../../routes';

export type OrderListItem = {
  id: string;
  date: string;
  manufacturer: string;
  product: string;
  diopter: string;
  status: string;
}

type OrdersListProps = {
  listData: Array<OrderListItem>
}

const tableHeader = [
  "",
  "Дата",
  "Производител",
  "Продукт",
  "Диоптри",
  "Статус"
];

const OrdersList = (props: OrdersListProps): JSX.Element => {

  return <>
    <Table className="align-items-center table-flush" responsive>
      <thead>
        <tr>
          {tableHeader.map((data, index) =>
            <th key={index} className="f-size-16 pt-4 pb-4 border-top-0" scope="col">{data}</th>
          )}
        </tr>
      </thead>
      <tbody>
        {props.listData.map((data, index) =>
          <tr key={index} >
            <td><RedirectButton className="optileader-teal-background white-font-color" buttonText="Детайли" url={ClientRoute.Order} dataObjectId={data.id} /></td>
            <td className="f-size-16">{data.date}</td>
            <td className="f-size-16">{data.manufacturer}</td>
            <td className="f-size-16">{data.product}</td>
            <td className="f-size-16">{data.diopter}</td>
            <td className="f-size-16">{data.status}
              <Button color="success" className="ml-4">Завърши</Button>
              <Button color="danger" className="ml-4">Откажи</Button>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  </>
}

export default OrdersList;
