import React, { useContext } from 'react';
import EmployeeTemplate, { EmployeeDetailsData } from '../../../components/Templates/EmployeeTemplate';
import { TemplateView } from '../../../components/enums/TemplateView';
import { UserContext } from '../../../userContext';

const AddEmployee = (props) => {

  const {objectData} = useContext(UserContext);
  const templateData: EmployeeDetailsData = {officeId: objectData.getObjectData.officeId, companyId: objectData.getObjectData.companyId}
  
  return <>
    <EmployeeTemplate viewType={TemplateView.CreateNew} templateData={templateData}/>
  </>
}

export default AddEmployee;