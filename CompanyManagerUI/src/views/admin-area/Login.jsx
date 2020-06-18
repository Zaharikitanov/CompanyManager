import React from "react";
import { Button, Card, CardBody, FormGroup, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Col } from "reactstrap";
import { useContext } from "react";
import { UserContext } from "../../userContext";
import {login} from "../../login";
import { useHistory } from "react-router-dom";
import {UserRole} from '../../components/enums/UserRole';
import {AdminRoute, ClientRoute} from '../../routes';

const Login = () => {
// eslint-disable-next-line
    const {userData, setUserData} = useContext(UserContext);
    const history = useHistory();
    const createCookieInHour = (cookieName, cookieValue, hourToExpire) => {
      let date = new Date();
      date.setTime(date.getTime()+(hourToExpire*60*60*1000));
      document.cookie = cookieName + " = " + cookieValue + "; expires = " +date.toGMTString();
    }

    const loginUser = async () => {
  
      const user = await login();
      setUserData(user);
      createCookieInHour("uid", "4", 4);
      switch(user.role) {
        case UserRole.Administrator:
          history.push(AdminRoute.Index);
          break;
        case UserRole.Client:
          history.push(ClientRoute.Index);
          break;
        default:
          history.push("/auth/login");
      }
    }

    return <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Запомни ме</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button" onClick={loginUser}>
                    Вход
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
}

export default Login;