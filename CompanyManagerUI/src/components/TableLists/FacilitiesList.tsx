import React from "react";
import { Card, Table } from "reactstrap";
import RedirectButton from '../Buttons/RedirectButton';
import { AdminRoute } from '../../routes';

export type FacilityListItem = {
  id: string;
  country: string;
  city: string;
  street: string;
  streetNumber?: number;
  employees?: number;
}

type FacilitiesListProps = {
  listData: Array<FacilityListItem>
}

const FacilitiesList = (props: FacilitiesListProps): JSX.Element => {
 
  return <>
    <Card className="mt-4">
      <Table className="align-items-center table-flush table-striped" responsive>
        <thead className="silver-background black-font-color">
          <tr className="text-center">
            <th className="f-size-16" scope="col"></th>
            <th className="f-size-16" scope="col">Country</th>
            <th className="f-size-16" scope="col">City</th>
            <th className="f-size-16" scope="col">Address</th>
            <th className="f-size-16" scope="col">Employees</th>
          </tr>
        </thead>
        <tbody>
          {props.listData.map((data, index) =>
            <tr className="text-center" key={index} >
              <td><RedirectButton className="teal-background white-font-color" buttonText="Details" url={AdminRoute.OfficeDetails} dataObjectId={data.id}/></td>
              <td className="f-size-16">{data.country}</td>
              <td className="f-size-16">{data.city}</td>
              <td className="f-size-16">{data.street} {data.streetNumber}</td>
              <td className="f-size-16">{data.employees}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Card>
  </>
}

export default FacilitiesList;
