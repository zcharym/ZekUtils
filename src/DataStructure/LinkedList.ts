import { NodeType } from '../type/ds.type';

export class Node {
  private _value: NodeType;
  private _next: Node | null;

  constructor(value: NodeType) {
    this._value = value;
    this._next = null;
  }

  toString(): string {
    return `${this._value}`;
  }
}

export class LinkedList {
  private count: number;
  private head: Node;

  constructor() {
    this.count = 0;
    this.head = null;
  }

  /**
   * 向链表中添加元素（只能从头按指针方向开始遍历至末尾添加）
   *
   * @param  element input element
   */
  push(element: NodeType): void {
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
    const arr = [];
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

export class DulNode {
  private _next;
  private _prev;

  constructor(elem, next, prev) {
    this._next = next;
    this._prev = prev;
  }
}
