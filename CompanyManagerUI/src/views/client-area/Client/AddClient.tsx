import React from 'react';
import CustomerTemplate from '../../../components/Templates/CustomerTemplate';
import { TemplateView } from '../../../components/enums/TemplateView';

const AddEmployee = (props) => {

  return <>
    <CustomerTemplate viewType={TemplateView.CreateNew}/>
  </>
}

export default AddEmployee;