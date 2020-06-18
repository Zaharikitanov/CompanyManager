import React from "react";
import { Table } from "reactstrap";
import RedirectButton from '../Buttons/RedirectButton';
import { AdminRoute } from '../../routes';

export type FacilityListItem = {
  id: string;
  name: string;
  managerName: string;
  address: string;
  employeesAmount?: number;
  ordersAmount?: number;
}

type FacilitiesListProps = {
  listData: Array<FacilityListItem>
}

const FacilitiesList = (props: FacilitiesListProps): JSX.Element => {
  
  return <>
    <Table className="align-items-center table-flush table-striped" responsive>
      <thead className="silver-background black-font-color">
        <tr className="text-center">
          <th className="f-size-16" scope="col"></th>
          <th className="f-size-16" scope="col">Име</th>
          <th className="f-size-16" scope="col">Мениджър</th>
          <th className="f-size-16" scope="col">Адрес</th>
          <th className="f-size-16" scope="col">Служители</th>
          <th className="f-size-16" scope="col">Брой Поръчки</th>
        </tr>
      </thead>
      <tbody>
        {props.listData.map((data, index) =>
          <tr className="text-center" key={index} >
            <td><RedirectButton className="optileader-teal-background white-font-color" buttonText="Детайли" url={AdminRoute.FacilityDetails} dataObjectId={data.id}/></td>
            <td className="f-size-16">{data.name}</td>
            <td className="f-size-16">{data.managerName}</td>
            <td className="f-size-16">{data.address}</td>
            <td className="f-size-16">{data.employeesAmount}</td>
            <td className="f-size-16">{data.ordersAmount}</td>
          </tr>
        )}
      </tbody>
    </Table>
  </>
}

export default FacilitiesList;
