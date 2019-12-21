/**
 * get a customed size of indents with  string Feature repeat.
 * @param {number} size indent-size
 * @param {number} num number of indents
 * @returns {string} a customed size of indents
 */
export const makeIndention = (size=4, num=1)=> {
     //repeat(0) --> ''
    let indent = ' '.repeat(size);
    return indent.repeat(num);
}
