import styled from "styled-components";

const Buttons = styled.button`
  margin: 10px;
  font-weight: bold;
  padding: 10px;
  border-radius: 3px;

  border: ${(props) => (props.border ? `1px ${props.border}` : "none")};
  background-color: ${(props) => (props.bg === "blue" ? "#0065ff" : "white")};

  color: ${(props) => (props.color === "white" ? "white" : props.color)};

  a {
    text-decoration: none;
    color: #0d81f1;
  }
`;

export { Buttons };
