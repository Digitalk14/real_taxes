import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: none;
  border-radius: 100%;
  background: #118ab2;
  position: fixed;
  color: #fff;
  bottom: 30px;
  right: 30px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: background 200ms ease;
  &: hover {
    background: rgb(17 138 178 / 77%);
  }
`;

export const Modal = styled.div`
  position: fixed;
  bottom: 75px;
  right: 30px;
  padding: 12px;
  border-radius: 12px;
  background: #118ab2;
  max-width: 400px;
  overflow: hidden;
  transition: transform 200ms ease;
  transform: ${({ isActive }) => (isActive ? "scale(1)" : "scale(0)")};
  p {
    font-size: 14px;
  }
`;
