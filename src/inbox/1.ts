/**
 *
 * 暂时性解决id插入无顺序的问题
 *
 * @param originArr
 * @param changedArr
 */
export const getOriginOrder = (
  originArr: string[],
  changedArr: string[]
): string => {
  if (originArr.length === 0) {
    return '';
  }
  const indexArr = [];
  changedArr.forEach((item) => {
    indexArr.push(originArr.indexOf(item) + 1);
  });
  return indexArr.join(',');
};
