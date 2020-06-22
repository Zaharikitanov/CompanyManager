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
import { EmployeeExperienceLevel } from "../TableLists/EmployeesList";

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
  let experienceLevel = [];

  for (let item in EmployeeExperienceLevel) {
      if (!isNaN(Number(item))) {
        experienceLevel.push(item);
      }
  }
  
  const employeeDetails = [
    { label: "First Name", value: undefinedChecker(inputData, "firstName"), newValue: (newValue) => setEmployeeData({ ...employeeData, firstName: newValue}) },
    { label: "Last Name", value: undefinedChecker(inputData, "lastName"), newValue: (newValue) => setEmployeeData({ ...employeeData, lastName: newValue}) },
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
          <Col lg="4">
            <h6 className="heading-small text-muted f-size-16 my-1">
              Experience Level
            </h6>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret className="px-2 w-100px teal-background white-font-color">
                {EmployeeExperienceLevel[EmployeeExperienceLevel.Junior]}
              </DropdownToggle>
              <DropdownMenu>
                {experienceLevel.map((data, index) =>
                  <DropdownItem key={index} onClick={() => setEmployeeData({ ...employeeData, experienceLevel: data})}>{EmployeeExperienceLevel[data]}</DropdownItem>
                )}
              </DropdownMenu>
            </ButtonDropdown>
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
          <Col lg="4">
            <h6 className="heading-small text-muted f-size-16 my-1">
              Experience Level
            </h6>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret className="px-2 w-100px teal-background white-font-color">
                {EmployeeExperienceLevel[employeeData.experienceLevel]}
              </DropdownToggle>
              <DropdownMenu>
                {experienceLevel.map((data, index) =>
                  <DropdownItem key={index} onClick={() => setEmployeeData({ ...employeeData, experienceLevel: data})}>{EmployeeExperienceLevel[data]}</DropdownItem>
                )}
              </DropdownMenu>
            </ButtonDropdown>
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
    UpdateItem(employeeData, `employee/${employeeData.id}`);
  }

  const deleteDataObject = () => {
    DeleteItem(`employee/${employeeData.id}`);
  }  

  const renderButtons = (): JSX.Element => {
    switch (props.viewType) {
      case TemplateView.CreateNew: {
        return <>
        {/* <Button color="success" className="mx-2" onClick={saveDataObject}>Search</Button> */}
          <RedirectButton buttonColor="success" buttonText="Save" url={AdminRoute.OfficeDetails} callback={saveDataObject} dataObjectId={inputData.officeId}/>
        </>
      }
      case TemplateView.Edit: {
        return <>
        {/* <Button color="success" className="mx-2" onClick={updateDataObject}>Search</Button> */}
          <RedirectButton buttonColor="success" buttonText="Save" url={AdminRoute.OfficeDetails} callback={updateDataObject} dataObjectId={inputData.officeId}/>
          <RedirectButton buttonColor="danger" buttonText="Delete" url={AdminRoute.Offices} callback={deleteDataObject} dataObjectId={inputData.officeId}/>
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

        <Row className="mt-4 pb-3">
          {renderFields()}
        </Row>
        {renderButtons()}
      </CardBody>
    </Card>
  </>
}

export default EmployeeTemplate;
