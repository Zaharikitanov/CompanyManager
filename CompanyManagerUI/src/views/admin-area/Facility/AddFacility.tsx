import React, { useContext } from 'react';
import FacilityTemplate, { FacilityDetailsData } from '../../../components/Templates/FacilityTemplate';
import { TemplateView } from '../../../components/enums/TemplateView';
import { UserContext } from '../../../userContext';

const AddFacility = (props) => {

  const {objectData} = useContext(UserContext);

  const companyId: FacilityDetailsData = {companyId: objectData.getObjectData}

  return <>
    <FacilityTemplate viewType={TemplateView.CreateNew} templateData={companyId}/>
  </>
}

export default AddFacility;