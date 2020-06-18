import React, { useContext } from 'react';
import EmployeeTemplate, { EmployeeDetailsData } from '../../../components/Templates/EmployeeTemplate';
import { TemplateView } from '../../../components/enums/TemplateView';
import { UserContext } from '../../../userContext';

const AddEmployee = (props) => {

  const {objectData} = useContext(UserContext);

  //TODO remove the hardcoded data
  const newEmployeeData: EmployeeDetailsData = {
    companyId: objectData.getObjectData ? objectData.getObjectData.companyId : "d86e234e-3d6e-4b47-a76e-08d7f70e5559", 
    facilityId: objectData.getObjectData ? objectData.getObjectData.facilityId : "a68be859-cd93-4dbf-7ffe-08d7f7e11b26"
  }

  return <>
    <EmployeeTemplate viewType={TemplateView.CreateNew} templateData={newEmployeeData}/>
  </>
}

export default AddEmployee;