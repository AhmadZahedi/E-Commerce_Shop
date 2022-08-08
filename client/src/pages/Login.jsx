import { useState } from "react";
import styled from "styled-components";
import img4 from "../../src/Imgs/img4.jpg";
import { mobile } from "../responsive";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(48, 255, 203, 0.5), rgba(42, 85, 141, 0.5)),
    url(${img4}) center;
  background-size: cover;
  background-position: top;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
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
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 60%;
  margin-bottom: 10px;
  padding: 10px;
  border: none;
`;

const Link = styled.a`
  text-align: left;
  font-size: 10px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  min-width: 400px;
  width: 100%;
  padding-bottom: 30px;
  position: relative;
`;

const Button = styled.button`
  width: 30%;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
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

  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
  margin-top: 10px;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
        <ButtonContainer>
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
        </ButtonContainer>
        {error && <Error>Something went wrong...</Error>}
      </Wrapper>
    </Container>
  );
};

export default Login;
