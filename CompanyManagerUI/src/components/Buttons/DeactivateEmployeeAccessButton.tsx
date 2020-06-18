import React, { useContext } from 'react';
import { UserContext } from '../../userContext';
import { EmployeeDetailsData, ProfileStatus } from '../Templates/EmployeeTemplate';
import { UpdateItem } from '../../helpers/requests';
import RedirectButton from './RedirectButton';
import { AdminRoute } from '../../routes';
import { ButtonProps } from 'reactstrap';

type DeactivateEmployeeAccessButtonProps = ButtonProps & {
  id: string;
  url?: AdminRoute;
}

const DeactivateEmployeeAccessButton = (props: DeactivateEmployeeAccessButtonProps) => {
  
  const { objectData } = useContext(UserContext);

  const employeeData: EmployeeDetailsData = {} as EmployeeDetailsData;

  employeeData.id = props.id;
  employeeData.profileStatus = ProfileStatus.Deactivated;
  const updateDataObject = () => {
    UpdateItem(employeeData, "employee");
  }

  return <>
    <RedirectButton buttonColor="danger" buttonText="Спри Достъп" url={props.url} callback={updateDataObject} dataObjectId={objectData.getObjectData}/>
  </>
}

export default DeactivateEmployeeAccessButton;