export class LinkedList {
  constructor() {
    this.count = 0;
    this.head = null;
  }

  /**
   * 向链表中添加元素（只能从头按指针方向开始遍历至末尾添加）
   * @param {*} element input element
   */
  push (element) {
    const node = new Node(element);
    let current = null;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }


  indexOf (element) {

  }

  getElementAt (index) {

  }

  insert (element, index) {

  }

  remove (element) {

  }

  removeAt (element) {

  }

  /**
   * @returns 返回链表长度
   */
  size () {
    return this.count;
  }

  /**
   * @returns 返回头节点
   */
  getHead () {
    return this.head;
  }

  /**
   * 清空链表
   */
  clear () {
    this.head = null;
    this.count = 0;
  }

  /**
   * 判空
   */
  isEmpty () {
    return this.size === 0;
  }

}


export class Node {
  constructor(elem) {
    this.element = elem;
    this.next = null
  }

  toString () {
    return `${this.element}`
  }
}

export class extends Node {
  constructor(elem, next, prev) {
    super(elem);
    this.next = next;
    this.prev = prev;
  }
}