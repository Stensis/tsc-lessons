// decribes a value that can be one of several types.
function kgToLbs(weight: number | string): number {
  // narrowing
  if (typeof weight === "number") return weight * 2;
  else return parseInt(weight) * 2;
}
kgToLbs(10);
kgToLbs("10kg");
