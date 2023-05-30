import styled from "styled-components";

export const H2 = styled.h2`
  text-align: center;
  font-size: 36px;
  margin: 40px 0 0 0;
`;

export const Wrapper = styled.div`
  margin: 10px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }
  img {
    width: 15px;
    height: 15px;
    margin: 0 10px;
  }
`;

export const Text = styled.p`
  font-size: 24px;
  text-align: center;
  span {
    cursor: pointer;
    padding: 0 5px;
    border: ${({ isActive }) =>
      (isActive ? "4px dotted #fff" : "4px dotted #fff00")};
    transition: border 200ms ease;
    border-radius: 5px;
    box-sizing: border-box;
    color: ${({ isActive }) => (isActive ? "#fff" : "#ffffff70")};
  }
`;
