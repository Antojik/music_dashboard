import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const StyledSignIn = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  background-color: black;
  opacity: 0.75;
  z-index: 2;
`;

const SignInComponent = styled.div`
  height: 50%;
  margin-top: 40%;
  background-color: white;
`;
const LoginInput = styled.div`
  padding: 10% 10% 5% 10%;
`;
const PasswordInput = styled.div`
  padding: 0 10% 10% 10%;
  
`;

const ButtonContinue = styled.div`
  margin-top: 5%;
  margin-bottom: 100px;
  
`

const SignIn = () => {
  return (
    <StyledSignIn className="row">
      <div className="col-md-8 offset-md-2 row">
        <div className="col-md-4 offset-md-4">
          <SignInComponent>
            <LoginInput className="login">
              <b>
                <p>Email or username</p>
              </b>
              <Form.Control type="text"  />
            </LoginInput>
            
            <PasswordInput className="password">
              <b>
                <p>Password</p>
              </b>
              <Form.Control type="password"  />
            </PasswordInput>
            <ButtonContinue>
              <Button variant="secondary">Continue</Button>
            </ButtonContinue>

            <hr />
          </SignInComponent>
        </div>
      </div>
    </StyledSignIn>
  );
};

export default SignIn;
