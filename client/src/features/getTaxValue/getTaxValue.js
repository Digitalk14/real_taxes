import { Parser } from "expr-eval";

export const getTaxValue = (formula, taxValue) => {
  const matched = formula.replaceAll("${value}", `${taxValue}`);
  const expresssion = Parser.parse(matched);
  const payedTax = expresssion.evaluate({ x: 3 });

  return { payedTax };
};
