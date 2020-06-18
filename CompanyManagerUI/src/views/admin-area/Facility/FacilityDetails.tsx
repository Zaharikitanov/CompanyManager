import React, { useContext } from "react";
import { Card } from "reactstrap";
import EmployeeList, { EmployeeListItem } from '../../../components/TableLists/EmployeesList';
import FacilityTemplate, { FacilityDetailsData } from '../../../components/Templates/FacilityTemplate';
import { TemplateView } from '../../../components/enums/TemplateView';
import { UserContext } from "../../../userContext";
import ApiResource from "../../../helpers/ApiResource";

export type FacilityViewModel = {
  facilityDetails : FacilityDetailsData;
  employees: EmployeeListItem[];
}

const FacilityDetails = (props): JSX.Element => {

  const { objectData } = useContext(UserContext);

  let reload: boolean = false;

  return <>
    <ApiResource url={`facility/${objectData.getObjectData}`} reloadData={reload}>
        {(facilityData: FacilityViewModel) => 
        <>
          <FacilityTemplate viewType={TemplateView.View} templateData={facilityData.facilityDetails} />
          <Card className="mt-4">
            <EmployeeList listData={facilityData.employees} />
          </Card>
        </>}
    </ApiResource>
  </>
}

export default FacilityDetails;
