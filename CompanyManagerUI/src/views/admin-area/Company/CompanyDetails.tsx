import React, { useContext, useState, useEffect } from "react";
import FacilitiesList from '../../../components/TableLists/FacilitiesList';
import CompanyTemplate, { CompanyDetailsData } from '../../../components/Templates/CompanyTemplate';
import { TemplateView } from '../../../components/enums/TemplateView';
import { Card } from "reactstrap";
import { UserContext } from "../../../userContext";
import ApiResource from "../../../helpers/ApiResource";
import { GetPaginatedItems } from "../../../helpers/requests";

const CompanyDetails = (props): JSX.Element => {

  const {objectData} = useContext(UserContext);

  const [data, setData] = useState<any>();

  const loadData = (apiUrl: string) => {
    GetPaginatedItems(apiUrl)
        .catch(error => console.log(error))
        .then((json) => {
            setData(json.results);
        });
  }

  useEffect(() => {
    loadData("office/search");
  },[]);

  return <>
    <ApiResource url={`company/${objectData.getObjectData}`}>
        {(companyData: CompanyDetailsData) => <>
          <CompanyTemplate viewType={TemplateView.View} templateData={companyData} />
          <Card className="mt-4">
            <h6 className="heading-small f-size-16 m-4">Offices</h6>
            {data 
              ?
              <FacilitiesList listData={data} />
              :
              <h1>Loading...</h1>
            }
          </Card>
        </>}
    </ApiResource>
  </>
}

export default CompanyDetails;