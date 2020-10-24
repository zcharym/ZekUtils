/**
 * instanceOf运算符的简单实现
 * @param left 表达式左值
 * @param right 表达式右值
 */
export function myInstanceOf(left, right) {
    // 首先判断是否为基础类型
    if (typeof left !== 'object' || left === null) return false

    let proto = Object.getPrototypeOf(left)
    while (true) {
        if (proto == null) return false;
        if (proto == Object.getPrototypeOf(right)) return true;
        proto = Object.getPrototypeOf(proto)
    }

}


