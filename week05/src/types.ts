// 创建Todo的结构

export interface ITodo {
    // id
    id: string;
    // 内容
    content: string;
    // 是否完成操作
    finished: boolean;
    // 创建时间
    ctime: string;
    // 修改时间
    mtime: string;
}
export class Todo implements ITodo {
    id: string
    content: string
    finished: boolean
    ctime:string
    mtime:string
    // 当前对象对应的DOM
    // el: HTMLElement
  
    // 重写JSON序列化
    toJSON() {
      return {
        id: this.id,
        content: this.content,
        finished: this.finished,
        ctime: this.ctime,
        mtime: this.mtime
      }
    }

    // 构造函数
    constructor(obj: ITodo) {
      this.id = obj.id
      this.content = obj.content
      this.finished = obj.finished
      this.ctime = obj.ctime
      this.mtime = obj.mtime
      // this.el = null
    }
  }