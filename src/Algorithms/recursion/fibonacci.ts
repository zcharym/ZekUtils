/**
 * fibonacci by iteration, get the nth number of fibonacci
 *  <fastest but not readable>
 * @param n input number
 */
export const fibonacciV1 = (n: number) => {
  if (n < 1) return 0;
  if (n <= 2) return n;
  let num1 = 0,
    num2 = 1,
    result = 0;
  for (let i = 2; i < n; i++) {
    result += num1 + num2;
    num2 = num1;
    num1 = result;
  }
  return result;
};

/**
 * fibonacci by recursion
 * @param n input number
 */
export const fibonacciV2 = (n: number): number => {
  if (n < 0) return 0;
  if (n <= 2) return 1;
  return fibonacciV2(n - 1) + fibonacciV2(n - 2);
};

/**
 * fibonacci by memorization
 *  <best choice>
 * @param n input number
 */
export const fibonacciV3 = (n: number): number => {
  const memo = [0, 1];
  const fibonacci = (n: number, memo: number[]) => {
    if (memo[n] != null) return memo[n];
    return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
  };
  return fibonacci(n, memo);
};
