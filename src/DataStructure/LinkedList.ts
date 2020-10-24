export class LinkedList {
  private count: number;
  private head;

  constructor() {
    this.count = 0;
    this.head = null;
  }

  /**
   * 向链表中添加元素（只能从头按指针方向开始遍历至末尾添加）
   * @param {*} element input element
   */
  push(element) {
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

  indexOf(element) {
    let arr = [];
    while (this.head !== null) {}
  }

  getElementAt(index) {}

  insert(element, index) {}

  remove(element): LinkedList {
    const node = new Node(element);
    while (this.head !== null) {}
    return;
  }

  removeAt(index) {}

  /**
   * @returns 返回链表长度
   */
  size() {
    return this.count;
  }

  /**
   * @returns 返回头节点
   */
  getHead() {
    return this.head;
  }

  /**
   * 清空链表
   */
  clear() {
    this.head = null;
    this.count = 0;
  }

  /**
   * 判空
   */
  isEmpty() {
    return this.count === 0;
  }
}

export class Node {
  public _element;
  public _next;

  constructor(elem) {
    this._element = elem;
    this._next = null;
  }

  toString() {
    return `${this._element}`;
  }
}

export class DulNode extends Node {
  public _next;
  public _prev;

  constructor(elem, next, prev) {
    super(elem);
    this._next = next;
    this._prev = prev;
  }
}
