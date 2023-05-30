import styled from "styled-components";

export const H2 = styled.h2`
  text-align: center;
  font-size: 36px;
  color: white;
  width: 100%;
  transition: border 200ms ease;
  border: ${({ isActive }) => (isActive ? "4px dotted white" : "4px dotted #ffffff00")};
  border-radius: 10px;
  box-sizing: border-box;
  padding: 4px 0;
  transition: border 200ms ease;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  p {
    font-size: 24px;
    text-align: center;
  }
`;

export const Tab = styled.button`
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin: 10px 0 0 0;
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  cursor: pointer;
  background: ${({ backgroundColor }) => backgroundColor};
`;
