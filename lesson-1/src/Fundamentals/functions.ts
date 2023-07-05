// with retun value
// can supply an ar or amke a default value
function calculateTax(income: number, taxYear?: number): number {
  if ((taxYear || 2022) < 2022) return income * 10;
  return income + income;
}
calculateTax(30_000, 2022);
