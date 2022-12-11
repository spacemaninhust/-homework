// TodoItem组件
import { Todo } from './types'
import * as React from "react"

interface Props {
    todo:Todo
    index:Number
    deleteItem:Function
    writelocalStorage:Function
    ChangeFinished:Function
}
export default function TodoItem(props: Props){
    // 一个Todo是一个组件
    return(
        // 根据finished判断className
        <div className={props.todo.finished?'todo-item todo-finished':'todo-item'}>
            {/* 调用父组件函数ChangeFinished */}
            <i className='iconfont icon-checkbox' onClick={()=>{props.ChangeFinished(props.index)}}></i>
            <span className='todo-title'>{props.todo.content}</span>
            <span className='todo-time'>{props.todo.ctime}</span>
            {/* 调用父组件函数deleteItem */}
            <i className='iconfont icon-delete' onClick={()=>{
                props.deleteItem(props.index)
            }}></i>
        </div>
    )
}


