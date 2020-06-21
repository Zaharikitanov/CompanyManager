import React, { useContext } from "react";
import { Card } from "reactstrap";
import EmployeeList, { EmployeeListItem } from '../../../components/TableLists/EmployeesList';
import OfficeTemplate, { OfficeDetailsData } from '../../../components/Templates/OfficeTemplate';
import { TemplateView } from '../../../components/enums/TemplateView';
import { UserContext } from "../../../userContext";
import ApiResource from "../../../helpers/ApiResource";

export type FacilityViewModel = {
  facilityDetails : OfficeDetailsData;
  employees: EmployeeListItem[];
}

const OfficeDetails = (props): JSX.Element => {

  const { objectData } = useContext(UserContext);

  let reload: boolean = false;

  return <>
    <ApiResource url={`office/${objectData.getObjectData}`}>
        {(facilityData: OfficeDetailsData) => 
        <>
          <OfficeTemplate viewType={TemplateView.View} templateData={facilityData} />
          <Card className="mt-4">
            {/* <EmployeeList listData={facilityData.employees} /> */}
          </Card>
        </>}
    </ApiResource>
  </>
}

export default OfficeDetails;
