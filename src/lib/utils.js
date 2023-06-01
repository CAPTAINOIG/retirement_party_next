export const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(+value)
};
