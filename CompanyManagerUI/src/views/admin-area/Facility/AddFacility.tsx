import React, { useContext } from 'react';
import OfficeTemplate, { OfficeDetailsData } from '../../../components/Templates/OfficeTemplate';
import { TemplateView } from '../../../components/enums/TemplateView';
import { UserContext } from '../../../userContext';

const AddFacility = (props) => {

  const {objectData} = useContext(UserContext);

  const companyId: OfficeDetailsData = {companyId: objectData.getObjectData}

  return <>
    <OfficeTemplate viewType={TemplateView.CreateNew} templateData={companyId}/>
  </>
}

export default AddFacility;