import styled from "styled-components";
export const Button = styled.button`
  width: 220px;
  height: 44px;
  padding: 10px 18px;
  border-radius: 5px;
  cursor: pointer;
  background-color: black;
  color: white;
  border: none;
  font-size: 16px;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: transparent;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
    transition: 0.3s background ease-in;
  }
`;
