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
  opacity: 0.95;
  z-index: 2;
`;

const SignInComponent = styled.div`
  height: 46%;
  margin-top: 40%;
  background-color: #0e1a2a;
  border-radius: 30px;

  hr {
    background-color: white;
    height: 2px;
  }
  p {
    color: white;
    font-size: 26px;
    font-weight: bold;
    text-align: left;
    margin-left: 5%;
    padding-top: 5%;
  }
`;

const LoginInput = styled.div`
  padding: 2% 5% 10% 5%;
`;

const PasswordInput = styled.div`
  padding: 0 5% 3% 5%;
`;

const PasswordInputConfirm = styled.div`
  padding: 0 5% 8% 5%;
`;

const ButtonContinue = styled.div`
  margin-top: 0%;
  margin-bottom: 10%;
`;

const SignUpLink = styled.div`
  a {
    text-decoration: none;
    font-size: 13px;
    color: white;
    :hover {
      color: #3aaea9;
      transition-duration: 0.2s;
    }
  }
`;

const StyledButton = styled(Button)`
  width: 85%;
  background-color: #5b5471;
  border-radius: 10px;
  color: white;
`;

const StyledInput = styled(Form.Control)`
  border-radius: 10px;
  background-color: #32364d;
  color: #3aaea9;
  border-color: rgba(0,0,0,0);
`;

const CreateAccount = () => {
  return (
    <StyledSignIn className="row">
      <div className="col-md-8 offset-md-2 row">
        <div className="col-md-4 offset-md-7">
          <SignInComponent>
            <p>Create your account</p>
            <hr />

            <LoginInput className="login">
              <StyledInput type="text" placeholder="E-mail" />
            </LoginInput>

            <PasswordInput className="password">
              <StyledInput type="password" placeholder="Password" />
            </PasswordInput>

            <PasswordInputConfirm className="password">
              <StyledInput type="password" placeholder="Confirm password" />
            </PasswordInputConfirm>

            <ButtonContinue>
              <StyledButton variant="secondary">Continue</StyledButton>
            </ButtonContinue>

            <hr />

            <SignUpLink>
              <a href="#">
                <b>You have an account? Sign in</b>
              </a>
            </SignUpLink>
          </SignInComponent>
        </div>
      </div>
    </StyledSignIn>
  );
};

export default CreateAccount;
