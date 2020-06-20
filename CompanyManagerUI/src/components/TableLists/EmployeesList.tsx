import React, { useEffect, useState, useContext } from "react";
import { Table, Button } from "reactstrap";
import RedirectButton from '../Buttons/RedirectButton';
import { AdminRoute } from '../../routes';
import { ProfileStatus, EmployeeDetailsData } from "../Templates/EmployeeTemplate";
import DeactivateEmployeeAccessButton from "../Buttons/DeactivateEmployeeAccessButton";
import ActivateEmployeeAccessButton from "../Buttons/ActivateEmployeeAccessButton";
import { UserContext } from "../../userContext";
import { UpdateItem } from "../../helpers/requests";

export type EmployeeListItem = {
    id: string;
    employeeName: string;
    employeeEmail: string;
    ordersCount: string;
    profileStatus: string;
}

type EmployeesListProps = {
    listData: Array<EmployeeListItem>
}

const EmployeesList = (props: EmployeesListProps): JSX.Element => {

  const [profileStatus, setProfileStatus] = useState("");

  const { objectData } = useContext(UserContext);

  const employeeData: EmployeeDetailsData = {} as EmployeeDetailsData;

  // employeeData.id = props.id;
  employeeData.profileStatus = ProfileStatus.Deactivated;
  // const updateDataObject = () => {
  //   UpdateItem(employeeData, "employee");
  // }

  const changeStatusId = (id: string) => {
    console.log(id);
    setProfileStatus(id);
  }

useEffect(() => {
  
},[profileStatus]);
console.log('reloaded');
  return <>
      <Table className="align-items-center table-flush table-striped" responsive>
        <thead className="silver-background black-font-color">
          <tr className="text-center">
            <th className="f-size-16" scope="col"></th>
            <th className="f-size-16" scope="col">Име</th>
            <th className="f-size-16" scope="col">Мейл</th>
            <th className="f-size-16" scope="col">Брой Поръчки</th>
            <th className="f-size-16" scope="col">Статус</th>
          </tr>
        </thead>
        <tbody>
          {props.listData.map((data, index) =>
            <tr className="text-center" key={index} >
              <td><RedirectButton className="teal-background white-font-color" buttonText="Детайли" url={AdminRoute.EmployeeDetails} dataObjectId={data.id}/></td>
              <td className="f-size-16">{data.employeeName}</td>
              <td className="f-size-16">{data.employeeEmail}</td>
              <td className="f-size-16">{data.ordersCount}</td>
              <td className="f-size-16">
              {data.profileStatus === ProfileStatus.Active
                ? <Button onClick={() => changeStatusId(data.id)}>Deactivate</Button>
                
                : <ActivateEmployeeAccessButton id={data.id}/>
              }
              </td>
            </tr>
          )}
        </tbody>
      </Table>
  </>
}

export default EmployeesList;