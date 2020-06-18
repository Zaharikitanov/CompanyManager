import React, { useContext } from 'react';
import { AdminRoute } from '../../routes';
import RedirectButton from './RedirectButton';
import { UserContext } from '../../userContext';
import { UpdateItem } from '../../helpers/requests';
import { EmployeeDetailsData, ProfileStatus } from '../Templates/EmployeeTemplate';
import { ButtonProps } from 'reactstrap';

type ActivateEmployeeAccessButtonProps = ButtonProps & {
    id: string;
    url?: AdminRoute;
}

const ActivateEmployeeAccessButton = (props: ActivateEmployeeAccessButtonProps) => {

  const { objectData } = useContext(UserContext);

  const employeeData: EmployeeDetailsData = {} as EmployeeDetailsData;

  employeeData.id = props.id;
  employeeData.profileStatus = ProfileStatus.Active;
  const updateDataObject = () => {
    // UpdateItem(employeeData, "employee");
  }

  return <>
    <RedirectButton buttonColor="success" buttonText="Активирай" url={props.url} callback={updateDataObject} dataObjectId={objectData.getObjectData}/>
  </>
}

export default ActivateEmployeeAccessButton;