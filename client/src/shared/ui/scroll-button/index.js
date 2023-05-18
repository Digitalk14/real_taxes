import React, { useCallback, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export const ScrollButton = ({ children, handleClick }) => {
  const handleScroll = useCallback(() => {
    handleClick()
    const { innerHeight } = window;
    window.scrollTo({behavior: 'smooth', top: innerHeight})
  }, []);
  return <Button type="button" onClick={handleScroll}>{children}</Button>;
};
