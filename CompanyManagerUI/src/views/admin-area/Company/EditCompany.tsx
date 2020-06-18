import React, { useContext } from 'react';
import CompanyTemplate, { CompanyDetailsData } from '../../../components/Templates/CompanyTemplate';
import { TemplateView } from '../../../components/enums/TemplateView';
import ApiResource from '../../../helpers/ApiResource';
import { UserContext } from '../../../userContext';

const EditCompany = (props: CompanyDetailsData) => {

  const {objectData} = useContext(UserContext);
  
  return <>
    <ApiResource url={`company/${objectData.getObjectData}/details`}>
          {(companyDetailsData: CompanyDetailsData) => <>
            <CompanyTemplate viewType={TemplateView.Edit} templateData={companyDetailsData}/>
          </>}
      </ApiResource>
  </>
}

export default EditCompany;