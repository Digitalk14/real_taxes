import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: ${({ backgroundColor }) => backgroundColor};
  box-sizing: border-box;
  padding: 16px;
  border-radius: 16px;
  margin: 30px 0 0 0;
  transition: background 200ms ease;
  ul {
    margin: 15px 0 0 0;
    list-style: none;
    padding: 0;
    li {
      margin: 10px 0;
    }
  }
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const Subtitle = styled.p`
  font-size: 24px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  color: ${({ darkBackground }) => (darkBackground ? "#fff" : "#073b4c")};
`;

export const H3 = styled.h3`
  font-size: 24px;
  margin: 15px 0 0 0;
`;
