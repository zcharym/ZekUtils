/**
 * 
 * @param prop 当前object中需要移除的属性
 * @returns rest of the object
 * @example const user1 = {
  id: 100,
  name: 'Howard Moon',
  password: 'Password!'
}
removeProperty('id') //=> { id: 100, name: 'Howard Moon' }
 */
export const removeProperty = prop => {
  ({ [prop]: _, ...rest }) => rest
}
