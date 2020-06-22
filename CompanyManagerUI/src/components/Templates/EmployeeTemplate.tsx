import React, { useState, useEffect } from "react";
import { Row, Col, Button, FormGroup, Input, Card, CardBody, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import RedirectButton from '../Buttons/RedirectButton';
import { AdminRoute } from '../../routes';
import { TemplateView } from '../enums/TemplateView';
import { EmployeeRole } from '../enums/EmployeeRole';
import { undefinedChecker } from "../../helpers/Checkers";
import { CreateItem, UpdateItem, DeleteItem } from "../../helpers/requests";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate } from "../../helpers/Formatters";

export type EmployeeDetailsData = {
  id?: string;
  firstName?: string;
  lastName?: string;
  startingDate?: Date;
  salary?: string;
  vacationDays?: EmployeeRole;
  experienceLevel?: string;
  profileImage?: string;
  officeId?: string;
}

type EmployeeTemplateProps = {
  templateData?: EmployeeDetailsData;
  viewType: TemplateView;
}

const EmployeeTemplate = (props: EmployeeTemplateProps): JSX.Element => {

  const inputData = props.templateData;
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const [employeeData, setEmployeeData] = useState({} as EmployeeDetailsData);
  
  const employeeDetails = [
    { label: "First Name", value: undefinedChecker(inputData, "firstName"), newValue: (newValue) => setEmployeeData({ ...employeeData, firstName: newValue}) },
    { label: "Last Name", value: undefinedChecker(inputData, "lastName"), newValue: (newValue) => setEmployeeData({ ...employeeData, lastName: newValue}) },
    { label: "Starting Date", value: undefinedChecker(inputData, "startingDate"), newValue: (newValue) => setEmployeeData({ ...employeeData, startingDate: newValue}) },
    { label: "Salary", value: undefinedChecker(inputData, "salary"), newValue: (newValue) => setEmployeeData({ ...employeeData, salary: newValue}) },
    { label: "Vacation Days", value: undefinedChecker(inputData, "vacationDays"), newValue: (newValue) => setEmployeeData({ ...employeeData, vacationDays: newValue}) },
    { label: "Profile Image", value: undefinedChecker(inputData, "profileImage"), newValue: (newValue) => setEmployeeData({ ...employeeData, profileImage: newValue}) },
  ];

  useEffect(() => {
    if (props.viewType == TemplateView.Edit){
      setEmployeeData(inputData);
    }
    if (props.viewType == TemplateView.CreateNew){
      setEmployeeData({ ...employeeData,
        officeId: inputData.officeId,
      });
    }
  },[]);
  
  const renderFields = (): JSX.Element => {
    switch (props.viewType) {
      case TemplateView.CreateNew: {
        return <>
          {employeeDetails.map((data, index) =>
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
              <FormGroup>
                <h6 className="heading-small text-muted f-size-16 my-1">
                  Starting Date
                </h6>
                <DayPickerInput 
                placeholder={"DD/MM/YYYY"}
                value={employeeData.startingDate ? formatDate(employeeData.startingDate) : ""}
                onDayChange={day => setEmployeeData({ ...employeeData, startingDate: day})} />
              </FormGroup>
          </Col>
        </>
      }
      case TemplateView.Edit: {
        return <>
          {employeeDetails.map((data, index) =>
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
              <FormGroup>
                <h6 className="heading-small text-muted f-size-16 my-1">
                  Starting Date
                </h6>
                <DayPickerInput 
                  value={formatDate(employeeData.startingDate)}
                  onDayChange={day => setEmployeeData({ ...employeeData, startingDate: day})} />
              </FormGroup>
          </Col>
        </>
      }
      case TemplateView.View: {
        return <>
          {employeeDetails.map((data, index) =>
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
    CreateItem(employeeData, "employee");
  }  

  const updateDataObject = () => {
    console.log(employeeData);
    UpdateItem(employeeData, `employee/${employeeData.id}`);
  }

  const deleteDataObject = () => {
    DeleteItem(`employee/${employeeData.id}`);
  }  

  const renderButtons = (): JSX.Element => {
    switch (props.viewType) {
      case TemplateView.CreateNew: {
        return <>
          <RedirectButton buttonColor="success" buttonText="Save" url={AdminRoute.OfficeDetails} callback={saveDataObject} dataObjectId={inputData.officeId}/>
        </>
      }
      case TemplateView.Edit: {
        return <>
        <Button color="success" className="mx-2" onClick={updateDataObject}>Search</Button>
          {/* <RedirectButton buttonColor="success" buttonText="Save" url={AdminRoute.OfficeDetails} callback={updateDataObject} dataObjectId={inputData.officeId}/> */}
          <RedirectButton buttonColor="danger" buttonText="Delete" url={AdminRoute.OfficeDetails} callback={deleteDataObject} dataObjectId={inputData.officeId}/>
        </>
      }
      case TemplateView.View: {
        return <></>
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
          Employee Details
          {props.viewType === TemplateView.View &&
            <RedirectButton className="teal-background white-font-color ml-4" buttonText="Edit" url={AdminRoute.EditEmployee} />
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

export default EmployeeTemplate;
