import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";
const Buttons = styled.button`
  border: 2px solid red;
  border-radius: 10px;
  padding: 10px;
  font-weight: bold;
  margin: 20px;
`;

const H3 = styled.h3`
  color: ${(props) => (props.isAuth ? "blue" : "red")};
  background-color: ${(props) => (props.isAuth ? "yellow" : "aqua")};
  width: 90%;
  margin: auto;
  padding: 5px 0;
`;

export const Navbar = () => {
  const { token, isAuth, handleLogOut, handleSignIn } = useContext(AuthContext);

  console.log("isAuth", token);
  return (
    <>
      {isAuth ? (
        <Buttons
          onClick={() => {
            handleLogOut();
          }}
        >
          Log Out
        </Buttons>
      ) : (
        <Buttons
          onClick={() => {
            handleSignIn();
          }}
        >
          Log In
        </Buttons>
      )}

      <H3 isAuth={isAuth}>
        {isAuth
          ? `User Is Authenticated Now with Token ${token}`
          : "Not Authenticated"}
      </H3>
    </>
  );
};
