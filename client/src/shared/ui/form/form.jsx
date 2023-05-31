import React, { useCallback, useContext, useState } from "react";
import { FormStyled, SubmitButton } from "./form.style";
import { ScrollButton } from "../scroll-button";
import { TaxValue } from "../../../shared";

export const Form = () => {
  const { taxValue, setTaxValue } = useContext(TaxValue);
  const handleChange = useCallback(() => {
    let sum = taxValue.value;
    if (taxValue.period === "12") {
      setTaxValue({
        ...taxValue,
        period: "1",
        value: (sum = sum / 12),
      });
    } else {
      setTaxValue({
        ...taxValue,
        period: "12",
        value: (sum = sum * 12),
      });
    }
  }, [taxValue]);
  const handleChangeInput = useCallback((e) => {
    const { value } = e.target;
    if (value.length >= 1) {
      setTaxValue({ ...taxValue, value: e.target.value });
    }
  }, []);
  const handleSubmit = useCallback(() => {}, []);
  return (
    <FormStyled>
      <div className="labels-wrapper">
        <label label="form-control">
          <input
            onChange={handleChange}
            id="month"
            value={1}
            name="radio"
            type="radio"
            checked={taxValue.period === String(1)}
          />
          <p>В этом месяце**</p>
        </label>
        <label label="form-control">
          <input
            onChange={handleChange}
            id="year"
            value={12}
            name="radio"
            type="radio"
            checked={taxValue.period === String(12)}
          />
          <p>В этом году**</p>
        </label>
      </div>
      <div className="input-wrapper">
        <input
          type="tel"
          value={taxValue.value}
          onChange={handleChangeInput}
          placeholder="Введите сумму"
        />
        <ScrollButton isValid={taxValue.value} handleClick={handleSubmit}>
          <SubmitButton>
            <p>Узнать</p>
          </SubmitButton>
        </ScrollButton>
      </div>
    </FormStyled>
  );
};
