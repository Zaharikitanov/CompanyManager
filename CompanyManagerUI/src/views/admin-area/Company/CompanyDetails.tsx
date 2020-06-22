import React, { useContext } from "react";
import FacilitiesList, { FacilityListItem } from '../../../components/TableLists/FacilitiesList';
import CompanyTemplate, { CompanyDetailsData } from '../../../components/Templates/CompanyTemplate';
import { TemplateView } from '../../../components/enums/TemplateView';
import { Card } from "reactstrap";
import { UserContext } from "../../../userContext";
import ApiResource from "../../../helpers/ApiResource";

const CompanyDetails = (props): JSX.Element => {

  const {objectData} = useContext(UserContext);

  return <>
    <ApiResource url={`company/${objectData.getObjectData}`}>
        {(companyData: CompanyDetailsData) => <>
          <CompanyTemplate viewType={TemplateView.View} templateData={companyData} />
          <Card className="mt-4">
            <h6 className="heading-small f-size-16 m-4">Offices</h6>
            <FacilitiesList listData={companyData.offices} />
          </Card>
        </>}
    </ApiResource>
  </>
}

export default CompanyDetails;