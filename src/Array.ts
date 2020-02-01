/**
 * 从数组中按特定方法移除元素，并返回删除这些元素后的新数组
 * @param arr input arr
 * @param func remove func
 */
export function removeWithFunc(arr: any[], func): any[] {
  return Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
      arr.splice(arr.indexOf(val), 1);
      return acc.concat(val);
    }, [])
    : [];
}

/**
 * select random item in the array.
 * @param arr input arr
 * @returns a random item
 */
export function randomSelect(arr: any[]): any[] {
  return arr[arr.length * Math.random() | 0]
}