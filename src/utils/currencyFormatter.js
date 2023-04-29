const currencyFormatter = (amount) => {
  const code = "₹";
  return `${code} ${amount}`;
};

export { currencyFormatter };
