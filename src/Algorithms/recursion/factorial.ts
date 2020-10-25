/**
 * factorial by recursion
 * @param n input n
 */
export const factorial = (n: number): number => {
  if (n <= 1) return n;
  return n * factorial(n - 1);
};
