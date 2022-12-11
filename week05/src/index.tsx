// App组件
import { Todo } from './types'
import TodoItem from "./todo"
import dayjs from 'dayjs'
import  {v4 as uuidv4} from 'uuid'
import * as React from "react"
import ReactDOM from "react-dom/client"
import localStorage from "localStorage"

export default function App(){
    // 定义一个排序函数
    const sorttype = (a, b) => {
        if(a.finished && !b.finished){
            return 1;
        }else if(!a.finished && b.finished){
            return -1;
        }else{
            if (a.ctime < b.ctime) {
                return 1;
                }
                if (a.ctime > b.ctime) {
                return -1;
                }
                return 0;
        }
    }


    // 获取本地缓存数据
    const [TodoList,setTodoList] = React.useState<Todo[]>(() =>{
        const todolist = localStorage.getItem('todos')
        const todolists = JSON.parse(todolist)
        todolists.sort(sorttype)
        console.log(todolists)
        return todolists||[]
    })


    // input框的内容
    const [contents,setcontents] = React.useState("")


    // 将数据写入本地缓存中
    function writelocalStorage(){
        localStorage.setItem('todos', JSON.stringify(TodoList))
    }


    // 改变Todo的finished
    const ChangeFinished=(index)=>{
        console.log(index)
        TodoList[index].finished = !TodoList[index].finished
        // 修改todo条目修改时间
        TodoList[index].mtime = dayjs().format('MM[月]DD[日] HH:mm:ss')
        // 调用父组件函数写入缓存中
        TodoList.sort(sorttype)
        setTodoList([...TodoList])
        writelocalStorage()
    }


    // 添加TodoItem
    function addItem(item: Todo, isInit = true) {
        TodoList.push(item)
        TodoList.sort(sorttype)
        setTodoList(TodoList)
        if (isInit === false) writelocalStorage()
    }


    // 删除TodoItem
    const deleteItem = (deleteIndex) =>{
        TodoList.splice(deleteIndex,1)
        // 参考老师给的例子加载数据
        setTodoList([...TodoList])
        writelocalStorage() 
    }

    
    // 获取input数据
    function input(e){
        // 获取uuid
        const uuid = uuidv4()
        setcontents(e.target.value)
        // 获取时间，初始时ctime与mtime应该相同
        const days = dayjs().format('MM[月]DD[日] HH:mm:ss')
        // 按下回车键
        if(e.keyCode === 13) {
            setcontents("")
            // 添加新的Item
            const todo = new Todo({id:uuid, content: contents, finished: false ,ctime:days ,mtime:days })
            console.log(todo)
            addItem(todo,false)
        }
    }


    return (
        <div id='root'>
            <header>
                <div className='title'>
                    Todo List
                </div>
                <input 
                    id = "input" 
                    type = "text" 
                    className='input' 
                    placeholder="What needs to be done?" 
                    autoComplete="off" 
                    value={contents}
                    onChange={e =>input(e)}
                    onKeyUp={e =>input(e)}/>
            </header>
            <section>
                <div id='todos'>
                {TodoList.map((Todo:Todo,index:number) => (
                    <TodoItem key={index} todo={Todo} index={index} deleteItem={deleteItem} ChangeFinished={ChangeFinished} writelocalStorage={writelocalStorage}/>
                ))}
                </div>
            </section>
        </div>
        
    )
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />)
