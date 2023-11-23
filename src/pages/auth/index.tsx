import React, { FC, useEffect } from "react";
import { Wrapper } from "./auth.styled-component";
import { Card, CardBody, CardHeader, Col, Form, Input, Row } from "reactstrap";
import { useAuth } from "./useAuth";
import FormInput from "../../components/FormInput";
import { IAuthenticated } from "../../Types/initial.type";
import { useSelector } from "react-redux";
import { IRootState } from "../../Store";
import { useNavigate } from "react-router-dom";

const Auth: FC = () => {
  const { register, handleSubmit, onSubmit } = useAuth();
  const navigation = useNavigate();
  const Identity: IAuthenticated = useSelector(
    (state: IRootState) => state.InitialReducer
  );

  useEffect(() => {
    if (Identity.is_authenticate) {
      navigation("/");
    }
  }, []);
  return (
    <Wrapper>
      <Row className="justify-content-center pt-5">
        <Col sm="3">
          <Card>
            <CardHeader>
              <h2>Please login</h2>
              <p>A bit authentication needed</p>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                  name="email"
                  type="email"
                  register={register}
                  placeholder="email"
                />
                <FormInput
                  name="password"
                  type="password"
                  register={register}
                  placeholder="password"
                  className="mt-3"
                />
                <Input
                  className="mt-3 bg-success text-white"
                  type="submit"
                  value="Login"
                />
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Auth;
