import React, { useCallback, useState } from "react";
import { FormStyled, SubmitButton } from "./form.style";
import { ScrollButton } from "../scroll-button";

export const Form = () => {
  const [radioValue, setRadioValue] = useState("month");
  const [salaryAmount, setSalaryAmount] = useState('');
  const handleChange = useCallback(
    (e) => {
      setRadioValue(e.target.value);
    },
    [radioValue]
  );
  const handleChangeInput = useCallback((e) => {
    setSalaryAmount(e.target.value);
  }, []);
  const handleSubmit = () => {

  }
  return (
    <FormStyled>
      <div className="labels-wrapper">
        <label label="form-control">
          <input
            onChange={handleChange}
            id="month"
            value="month"
            name="radio"
            type="radio"
            checked={radioValue === "month"}
          />
          <p>В этом месяце**</p>
        </label>
        <label label="form-control">
          <input
            onChange={handleChange}
            id="year"
            value="year"
            name="radio"
            type="radio"
            checked={radioValue === "year"}
          />
          <p>В этом году**</p>
        </label>
      </div>
      <div className="input-wrapper">
        <input type="tel" value={salaryAmount} onChange={handleChangeInput} />
        <ScrollButton handleClick={handleSubmit}>
            <SubmitButton>
                <p>Узнать</p>
            </SubmitButton>
        </ScrollButton>
      </div>
    </FormStyled>
  );
};
