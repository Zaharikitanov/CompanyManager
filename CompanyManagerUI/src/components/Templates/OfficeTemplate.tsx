import React, { useState, useEffect } from "react";
import { Row, Col, Button, InputGroup, InputGroupAddon, InputGroupText, FormGroup, Input, Card, CardBody} from "reactstrap";
import RedirectButton from '../Buttons/RedirectButton';
import { AdminRoute } from '../../routes';
import { TemplateView } from '../enums/TemplateView';
import { CreateItem, UpdateItem, DeleteItem } from "../../helpers/requests";
import { undefinedChecker } from "../../helpers/Checkers";
import { EmployeeListItem } from "../TableLists/EmployeesList";

export type OfficeDetailsData = OfficeUpdateData & {
  id?: string;
  employeesList?: EmployeeListItem[];
}

export type OfficeUpdateData = {
  companyId: string;
  country?: string;
  city?: string;
  street?: string;
  streetNumber?: number;
  isHeadquarters?: boolean;
}

type OfficeTemplateProps = {
  templateData?: OfficeDetailsData;
  viewType: TemplateView;
}

const OfficeTemplate = (props: OfficeTemplateProps): JSX.Element => {
  const inputData = props.templateData;
  const [officeData, setOfficeData] = useState({} as OfficeUpdateData);

  useEffect(() => {
    if (props.viewType == TemplateView.Edit){
      setOfficeData(inputData);
    }

    if (props.viewType == TemplateView.CreateNew){
      setOfficeData({ ...officeData,
        companyId: inputData.companyId
      });
    }
  },[]);

  const inputLabels = [
    { label: "Country", value: undefinedChecker(inputData, "country"), newValue: (newValue) => setOfficeData({ ...officeData, country: newValue}) },
    { label: "City", value: undefinedChecker(inputData, "city"), newValue: (newValue) => setOfficeData({ ...officeData, city: newValue})},
    { label: "Street", value: undefinedChecker(inputData, "street"), newValue: (newValue) => setOfficeData({ ...officeData, street: newValue})},
    { label: "Street Number", value: undefinedChecker(inputData, "streetNumber"), newValue: (newValue) => setOfficeData({ ...officeData, streetNumber: newValue})},
  ];

  const saveDataObject = () => {
    CreateItem(officeData, "office");
  }  

  const updateDataObject = () => {
    console.log(officeData);
    UpdateItem(officeData, `office/${inputData.id}`);
  }

  const deleteDataObject = () => {
    DeleteItem(`office/${inputData.id}`);
  }

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
            <Col lg="4">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <Input addon type="checkbox" aria-label="Checkbox for following text input" 
                    onClick={e => setOfficeData({ ...officeData, isHeadquarters: e.target.checked})} 
                    defaultChecked={inputData.isHeadquarters ? true : false}/>
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Yes" />
              </InputGroup>
            </Col>
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
          <Col lg="4">
            <h6 className="heading-small text-muted f-size-16 my-1">
              Headquarters
            </h6>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <Input addon type="checkbox" aria-label="Checkbox for following text input" 
                  onClick={e => setOfficeData({ ...officeData, isHeadquarters: e.target.checked})} 
                  defaultChecked={inputData.isHeadquarters ? true : false}/>
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Yes" />
            </InputGroup>
          </Col>
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
        <Col lg="4">
            <FormGroup>
              <h6 className="heading-small text-muted f-size-16 my-1">
                HeadQuarters
              </h6>
              <hr className="my-1" />
              <span>{inputData.isHeadquarters ? "Yes" : "No"}</span>
            </FormGroup>
          </Col>
        </> 
      } 
      default: { 
        return <span>Template Type Unknown</span>
      } 
   } 
  }

  const renderButtons = (): JSX.Element => {
    switch(props.viewType) { 
      case TemplateView.CreateNew: { 
         return <>
          <RedirectButton buttonColor="success" buttonText="Save" url={AdminRoute.CompanyDetails} callback={saveDataObject} dataObjectId={inputData.companyId}/>
         </> 
      } 
      case TemplateView.Edit: { 
        return <>
        {/* <Button color="success" className="mx-2" onClick={updateDataObject}>Search</Button> */}
         <RedirectButton buttonColor="success" buttonText="Save" url={AdminRoute.OfficeDetails} callback={updateDataObject} dataObjectId={inputData.id}/>
         <RedirectButton buttonColor="danger" buttonText="Delete" url={AdminRoute.CompanyDetails} callback={deleteDataObject} dataObjectId={inputData.companyId}/>
        </> 
      } 
      case TemplateView.View: { 
        return <>
        <RedirectButton buttonColor="success" buttonText="Add Employee" url={AdminRoute.AddEmployee} dataObjectId={{companyId: inputData.companyId, facilityId: inputData.id}}/>
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
          Office Details
          {props.viewType === TemplateView.View && 
            <RedirectButton className="teal-background white-font-color ml-4" buttonText="Edit" url={AdminRoute.EditFacility} dataObjectId={inputData.id}/>
          }
        </h6>
        <Row className="mt-4">
          {renderFields()}
        </Row>
        {renderButtons()}
      </CardBody>
    </Card>
  </>
}

export default OfficeTemplate;