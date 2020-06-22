import React, { useState, useEffect } from "react";
import { Row, Col, FormGroup, Input, Card, CardBody } from "reactstrap";
import RedirectButton from '../Buttons/RedirectButton';
import { AdminRoute } from '../../routes';
import { TemplateView } from '../../components/enums/TemplateView';
import { CreateItem, DeleteItem, UpdateItem } from "../../helpers/requests";
import { undefinedChecker } from "../../helpers/Checkers";
import { FacilityListItem } from "../TableLists/FacilitiesList";

export type CompanyDetailsData = {
  id: string;
  name: string;
  offices: FacilityListItem[];
}

type CompanyTemplateProps = {
  templateData?: CompanyDetailsData;
  viewType: TemplateView;
}

const CompanyTemplate = (props?: CompanyTemplateProps): JSX.Element => {

  const [dropdownOpen, setOpen] = useState(false);
  const [companyData, setCompanyData] = useState({} as CompanyDetailsData);
  const inputData = props.templateData;

  const inputLabels = [
    { label: "Company Name", value: undefinedChecker(inputData, "name"), newValue: (newValue) => setCompanyData({ ...companyData, name: newValue}) },
  ];

  useEffect(() => {
    if (props.viewType == TemplateView.Edit){
      setCompanyData(inputData);
    }
  },[]);

  const toggle = () => setOpen(!dropdownOpen);

  const renderFields = (): JSX.Element => {
    switch(props.viewType) { 
      case TemplateView.CreateNew: { 
         return <>
         {inputLabels.map((data, index) =>
            <Col lg="4" key={index}>
              <FormGroup>
                <h6 className="heading-small text-muted f-size-16 my-1">
                  {data.label}
                </h6>
                <Input
                  className="form-control-alternative"
                  type="text"
                  onChange={e => data.newValue(e.target.value)}
                />
              </FormGroup>
            </Col>
          )}
          
        </> 
      } 
      case TemplateView.Edit: { 
        return <>
        {inputLabels.map((data, index) => 
          <Col lg="4" key={index}>
            <FormGroup>
              <h6 className="heading-small text-muted f-size-16 my-1">
                {data.label}
              </h6>
              <Input
                className="form-control-alternative"
                type="text"
                defaultValue={data.value}
                onChange={e => data.newValue(e.target.value)}
              />
            </FormGroup>
          </Col>
        )}
        
        </> 
      } 
      case TemplateView.View: { 
        return <>
        {inputLabels.map((data, index) =>
          <Col lg="4" key={index}>
            <FormGroup>
              <h6 className="heading-small text-muted f-size-16 my-1">
                {data.label}
              </h6>
              <hr className="my-1" />
              <span>{data.value}</span>
            </FormGroup>
          </Col>
        )}
        
        </> 
      } 
      default: { 
        return <span>Template Type Unknown</span>
      } 
    } 
  }

  const saveDataObject = () => {
    CreateItem(companyData, "company");
  }  

  const updateDataObject = () => {
    UpdateItem(companyData, "company");
  }

  const deleteDataObject = () => {
    DeleteItem(`company/${companyData.id}`);
  }  
  
  const renderButtons = (): JSX.Element => {
    switch(props.viewType) { 
      case TemplateView.CreateNew: { 
         return <>
         <RedirectButton buttonColor="success" buttonText="Save" url={AdminRoute.Index} callback={saveDataObject}/>
         </> 
      } 
      case TemplateView.Edit: { 
        return <>
        <RedirectButton buttonColor="success" buttonText="Save" url={AdminRoute.CompanyDetails} callback={updateDataObject}/>
        <RedirectButton buttonColor="danger" buttonText="Delete" url={AdminRoute.Index} callback={deleteDataObject}/>
        </> 
      } 
      case TemplateView.View: { 
        return <>
        <RedirectButton buttonColor="success" buttonText="Add Office" url={AdminRoute.AddFacility} dataObjectId={inputData.id}/>
        </> 
      } 
      default: { 
        return <span>Template Type Unknown</span>
      } 
    } 
  }

  return <>
    <Card className="bg-secondary shadow mt-2">
      <CardBody>
        <h6 className="heading-small f-size-16">
          Company Details
          {props.viewType === TemplateView.View && 
            <RedirectButton className="teal-background white-font-color ml-4" buttonText="Edit" url={AdminRoute.EditCompany} />
          }
        </h6>
        {props 
        ?
        <>
          <Row className="mt-4">
            {renderFields()}
          </Row>
          {renderButtons()}
        </>
        :
        <h1>No Data</h1>
        }
      </CardBody>
    </Card>
  </>
}

export default CompanyTemplate;
