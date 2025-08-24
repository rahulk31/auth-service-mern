export const calculateDiscount = (
  price: number,
  discountPercentage: number,
) => {
  const discount = (price * discountPercentage) / 100;
  return price - discount;
};
