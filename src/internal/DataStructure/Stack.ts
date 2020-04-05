export class Stack {
  public _items:any;
  public _count:number;
  constructor(){
    this._items = {};
    this._count = 0;
  }

  push(item:number|object|string):void {
    this._items[this._count] = item
    this._count++
  }

  pop() {
    if(this.isEmpty()) {return undefined};
    const popped  = this._items[this._count]
    delete this._items[this._count]
    this._count--;
    return popped;
  }

  isEmpty():boolean{
    return this._count ===0;
  }

  peek(){
    return this._items[this._count]
  }

  clear():void{
    this._items = {};
    this._count = 0;
  }
}