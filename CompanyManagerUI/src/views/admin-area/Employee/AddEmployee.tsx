import React, { useContext } from 'react';
import EmployeeTemplate, { EmployeeDetailsData } from '../../../components/Templates/EmployeeTemplate';
import { TemplateView } from '../../../components/enums/TemplateView';
import { UserContext } from '../../../userContext';

const AddEmployee = (props) => {

  const {objectData} = useContext(UserContext);
  const officeId: EmployeeDetailsData = {officeId: objectData.getObjectData.officeId}
  
  return <>
    <EmployeeTemplate viewType={TemplateView.CreateNew} templateData={officeId}/>
  </>
}

export default AddEmployee;