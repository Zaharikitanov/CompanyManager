import React, { useContext } from 'react';
import OfficeTemplate, { OfficeDetailsData } from '../../../components/Templates/OfficeTemplate';
import { TemplateView } from '../../../components/enums/TemplateView';
import ApiResource from '../../../helpers/ApiResource';
import { UserContext } from '../../../userContext';

const EditFacility = (props: OfficeDetailsData) => {

  const {objectData} = useContext(UserContext);

  return <>
      <ApiResource url={`office/${objectData.getObjectData}`}>
          {(facilityDetailsData: OfficeDetailsData) => <>
            <OfficeTemplate viewType={TemplateView.Edit} templateData={facilityDetailsData}/>
          </>}
      </ApiResource>
  </>
}

export default EditFacility;