import styled from "styled-components";
import img2 from "../../src/Imgs/img2.jpg";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(48, 255, 203, 0.5), rgba(42, 85, 141, 0.5)),
    url(${img2}) center;
  background-size: cover;
  background-position: top;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px 10px 20px 20px;
  background-color: #c2fff7;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ width: "75%" })};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 10px 0 0;
  padding: 10px;
  border: none;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
  width: 100%;
  padding-bottom: 50px;
  position: relative;
`;

const Button = styled.button`
  width: 30%;
  border: none;
  border-radius: 5px;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 2px;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  ${mobile({ width: "50%" })}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
        </Form>
        <ButtonContainer>
          <Button>CREATE</Button>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default Register;
