import React, { useEffect, useState, useContext } from "react";
import { Table, Button } from "reactstrap";
import RedirectButton from '../Buttons/RedirectButton';
import { AdminRoute } from '../../routes';
import { EmployeeDetailsData } from "../Templates/EmployeeTemplate";
import { UserContext } from "../../userContext";
import { formatDate } from "../../helpers/Formatters";

export enum EmployeeExperienceLevel {
  Junior,
  Mid,
  Senior
}

export type EmployeeListItem = {
  id: string;
  firstName: string;
  lastName: string;
  startingDate: string;
  experienceLevel: EmployeeExperienceLevel;
}

type EmployeesListProps = {
    listData: Array<EmployeeListItem>
}

const EmployeesList = (props: EmployeesListProps): JSX.Element => {

  const { objectData } = useContext(UserContext);
  const employeeData: EmployeeDetailsData = {} as EmployeeDetailsData;

  return <>
      <Table className="align-items-center table-flush table-striped" responsive>
        <thead className="silver-background black-font-color">
          <tr className="text-center">
            <th className="f-size-16" scope="col"></th>
            <th className="f-size-16" scope="col">First Name</th>
            <th className="f-size-16" scope="col">Last Name</th>
            <th className="f-size-16" scope="col">Starting Date</th>
            <th className="f-size-16" scope="col">Experience Level</th>
          </tr>
        </thead>
        <tbody>
          {props.listData.map((data, index) =>
            <tr className="text-center" key={index} >
              <td><RedirectButton className="teal-background white-font-color" buttonText="Details" url={AdminRoute.EmployeeDetails} dataObjectId={data.id}/></td>
              <td className="f-size-16">{data.firstName}</td>
              <td className="f-size-16">{data.lastName}</td>
              <td className="f-size-16">{formatDate(data.startingDate, 'DD/MM/YYYY')}</td>
              <td className="f-size-16">{EmployeeExperienceLevel[data.experienceLevel]}</td>
            </tr>
          )}
        </tbody>
      </Table>
  </>
}

export default EmployeesList;