import styled from "styled-components";

export const FormStyled = styled.form`
  width: 100%;
  .labels-wrapper {
    display: flex;
    margin: 15px 0;
  }
  label {
    display: flex;
    margin: 0 15px 0 0;
    input {
      margin: 0 5px 0 0;
    }
    p {
      font-size: 20px;
      margin: 0 0 0 5px;
    }
  }

  .input-wrapper {
    background: #fff;
    max-width: 350px;
    border-radius: 14px;
    box-sizing: border-box;
    padding: 3px 2px 3px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      border: none;
      background: none;
      outline: none;
      font-size: 20px;
    }
  }
`;

export const SubmitButton = styled.div`
  background: #118ab2;
  border-radius: 12px;
  padding: 7px 25px;
  transition: all 200ms ease;
  &: hover {
    background: rgb(17 138 178 / 77%);
  }
  p {
    color: #fff;
    font-size: 16px;
  }
`;
