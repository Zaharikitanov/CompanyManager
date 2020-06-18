import React, { useContext } from 'react';
import EmployeeTemplate, { EmployeeDetailsData } from '../../../components/Templates/EmployeeTemplate';
import { TemplateView } from '../../../components/enums/TemplateView';
import { UserContext } from '../../../userContext';
import ApiResource from '../../../helpers/ApiResource';

const EditEmployee = (props) => {

  const { objectData } = useContext(UserContext);

  return <>
    <ApiResource url={`employee/${objectData.getObjectData}`}>
        {(employeeData: EmployeeDetailsData) => <>
            <EmployeeTemplate viewType={TemplateView.Edit} templateData={employeeData}/>
        </>}
    </ApiResource>
  </>
}

export default EditEmployee;