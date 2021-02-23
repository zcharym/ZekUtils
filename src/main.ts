import { getOriginOrder } from './inbox/1';

const arr = ['x'];
const originArr = ['x', 'y', 'z', 'a'];
const changedArr = ['a', 'y', 'z', 'x'];
const emptyArr = [];

const results = [
  getOriginOrder(originArr, changedArr),
  getOriginOrder(arr, arr),
  getOriginOrder(emptyArr, emptyArr),
];

console.table(results);
