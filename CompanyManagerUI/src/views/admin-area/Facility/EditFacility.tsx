import React, { useContext } from 'react';
import FacilityTemplate, { FacilityDetailsData } from '../../../components/Templates/FacilityTemplate';
import { TemplateView } from '../../../components/enums/TemplateView';
import ApiResource from '../../../helpers/ApiResource';
import { UserContext } from '../../../userContext';

const EditFacility = (props: FacilityDetailsData) => {

  const {objectData} = useContext(UserContext);

  return <>
      <ApiResource url={`facility/${objectData.getObjectData}/details`}>
          {(facilityDetailsData: FacilityDetailsData) => <>
            <FacilityTemplate viewType={TemplateView.Edit} templateData={facilityDetailsData}/>
          </>}
      </ApiResource>
  </>
}

export default EditFacility;