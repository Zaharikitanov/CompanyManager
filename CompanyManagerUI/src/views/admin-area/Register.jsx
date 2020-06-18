import React, { useState } from "react";
// reactstrap components
import {Button, Card, CardBody, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Col} from "reactstrap";
import {ValidateName, ValidateEmail, ValidatePassword} from "../../helpers/validation";
import {CreateItem} from "../../helpers/requests";
import { useHistory } from "react-router-dom";

const Register = () =>  {
  const [firstNameValidationResult, setName] = useState('');
  const [name, getName] = useState('');

  const [emailValidationResult, setEmail] = useState('');
  const [email, getEmail] = useState('');

  const [passwordValidationResult, setPassword] = useState('');
  const [password, getPassword] = useState('');

  const history = useHistory();

  let errorArray = [];

  const validationResult = (validationText) => {
    if (validationText.length !== 0) {
      errorArray.push(validationText);
    }

    return validationText;
  }

  const registerUser = () => {
    setName(validationResult(ValidateName(2, name)));
    setEmail(validationResult(ValidateEmail(email)));
    setPassword(validationResult(ValidatePassword(password)));

    if (checkForErrors(errorArray)){
      console.log("make call");
      let adminData = {
        name: name,
        email: email,
        password: password
      }
      CreateItem(adminData, "registerAdmin");
      history.push("/admin-login");
    }
    else {
      console.log("errors, not able to make the call");
    }
  }

  const checkForErrors = (errorArray) => {

    if (errorArray.length !== 0){
        return false;
    } 

    return true;  
  }

    return (
      <React.Fragment>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form" className="register-form">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Име" type="text" onChange={event => getName(event.target.value)}/>
                  </InputGroup>
                  <span className="result-message">{firstNameValidationResult}</span>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" onChange={event => getEmail(event.target.value)}/>
                  </InputGroup>
                  <span className="result-message">{emailValidationResult}</span>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Парола" type="password" onChange={event => getPassword(event.target.value)}/>
                  </InputGroup>
                  <span className="result-message">{passwordValidationResult.split("\n").map((i,key) => {
                      return <div key={key}>{i}</div>;
                  })}</span>
                </FormGroup>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="button" onClick={registerUser}>
                    Създай профил
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
        </React.Fragment>
    );
}

export default Register;
