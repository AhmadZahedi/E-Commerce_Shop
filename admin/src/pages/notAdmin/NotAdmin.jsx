// import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 30vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px auto;
  padding: 10px 30px;
  background-color: yellow;
  border-radius: 5px;
`;

const Text = styled.p`
  font-size: 24px;
`;

const Button = styled.button`
  font-weight: bold;
  cursor: pointer;
  padding: 5px;
  color: white;
  background-color: red;
  border: none;
  border-radius: 5px;
`;

export default function NotAdmin() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <Container>
      <Text>You are NOT admin</Text>
      <Button onClick={handleClick}>GO TO LOGIN PAGE</Button>
    </Container>
  );
}
