import React, { useContext } from "react";
import EmployeeTemplate, { EmployeeDetailsData } from '../../../components/Templates/EmployeeTemplate';
import { TemplateView } from '../../../components/enums/TemplateView';
import { UserContext } from "../../../userContext";
import ApiResource from "../../../helpers/ApiResource";

const EmployeeDetails = (props): JSX.Element => {

    const { objectData } = useContext(UserContext);
    
    return <>
        <ApiResource url={`employee/${objectData.getObjectData}`}>
            {(employeeData: EmployeeDetailsData) => <>
                <EmployeeTemplate viewType={TemplateView.View} templateData={employeeData}/>
            </>}
        </ApiResource>
    </>
}

export default EmployeeDetails;
