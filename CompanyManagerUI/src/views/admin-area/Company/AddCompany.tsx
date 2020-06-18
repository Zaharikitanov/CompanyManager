import React from 'react';
import CompanyTemplate from '../../../components/Templates/CompanyTemplate';
import { TemplateView } from '../../../components/enums/TemplateView';

const AddCompany = (props) => {

  return <>
    <CompanyTemplate viewType={TemplateView.CreateNew}/>
  </>
}

export default AddCompany;