import React, { useContext } from "react";
import FacilitiesList, { FacilityListItem } from '../../../components/TableLists/FacilitiesList';
import CompanyTemplate, { CompanyDetailsData } from '../../../components/Templates/CompanyTemplate';
import { TemplateView } from '../../../components/enums/TemplateView';
import { Card } from "reactstrap";
import { UserContext } from "../../../userContext";
import ApiResource from "../../../helpers/ApiResource";

export type CompanyViewModel = {
  companyDetails : CompanyDetailsData;
  facilities: FacilityListItem[];
}

const CompanyDetails = (props): JSX.Element => {

  const {objectData} = useContext(UserContext);

  return <>
    <ApiResource url={`company/${objectData.getObjectData}`}>
        {(companyData: CompanyViewModel) => <>
          <CompanyTemplate viewType={TemplateView.View} templateData={companyData.companyDetails} />
          <Card className="mt-4">
            <h6 className="heading-small f-size-16 m-4">Прилежащи обекти</h6>
            <FacilitiesList listData={companyData.facilities} />
          </Card>
        </>}
    </ApiResource>
  </>
}

export default CompanyDetails;