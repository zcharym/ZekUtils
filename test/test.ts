import {formatFloatNum,addFloatNum, to64bitFloat}from '../src/Number'

console.log(formatFloatNum(0.332000000000001))
console.log(addFloatNum(0.1, 0.2))
console.log(to64bitFloat(-123133231))

import {removeWithFunc} from  "../src/Array"
console.log(removeWithFunc([1,2,3],function(n){return n >2}))