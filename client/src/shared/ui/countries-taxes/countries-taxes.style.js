import styled from "styled-components";

export const Wrapper = styled.div`
  background: #118ab2;
  padding: 0 16px;
  border-radius: 16px;
  box-sizing: border-box;
  margin: 30px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CountryBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 24%;
  margin: 16px 0;
  img {
    width: 50px;
    height: 50px;
  }
  p {
    font-size: 20px;
    margin: 10px 0;
  }
  h3 {
    font-size: 20px;
  }
`;
