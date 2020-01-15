
/**
 * 精确浮点数展示结果
 * @param n 需要格式化的浮点数
 * @param fixed 精确位数
 */
export function formatFloatNum(n: number, fixed: number = 10): number {
    return parseFloat(n.toFixed(fixed))
}

/**
 * 
 * @param n1 input float number1
 * @param n2 input float number2
 * @explanation 在小于 Number.MAX_SAFE_INTEGER 范围的整数是可以被精确表示出来的，所以可以先把小数转化为整数，运算得到结果后再转化为对应的小数
 */
export function addFloatNum(num1: number, num2: number): number {
    let decimalLen1 = (num1.toString().split('.')[1] || '').length; //第一个参数的小数个数  
    let decimalLen2 = (num2.toString().split('.')[1] || '').length; //第二个参数的小数个数  
    let baseNum = Math.pow(10, Math.max(decimalLen1, decimalLen2));
    return (num1 * baseNum + num2 * baseNum) / baseNum;
}

/**
 * convert input number to 64bit float string
 * @param n input number 
 */
export function to64bitFloat(n: number): string {
    let i, result = "";
    let dv = new DataView(new ArrayBuffer(8));
    dv.setFloat64(0, n, false);

    for (i = 0; i < 8; i++) {
        let bits = dv.getUint8(i).toString(2);
        if (bits.length < 8) {
            let str = "0"
            // bits = new Array(8 - bits.length).fill('0').join("") + bits;
            bits = str.repeat(8 - bits.length) + bits
        }
        result += bits;
    }
    return result;
}


