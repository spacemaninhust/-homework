import { ITodo, Todo } from './types'
const { v4: uuidv4 } = require('uuid')
const dayjs = require('dayjs')
//获得列表容器DOM节点
let lists = document.getElementById('todos')
//获得Todo列表数据容器
let todos: Todo[] = []

//创建Todo对于的Dom对象
function createElements(item: Todo){
    let className = 'todo-item'
    if(item.finished === true)
        className += ' todo-finished'
    let el = document.createElement('div')
    el.className = className
    let checkbox = document.createElement('i')
    checkbox.className = 'iconfont icon-checkbox'
    //绑定事件
    checkbox.addEventListener('click',() => click_i(item))
    let content = document.createElement('span')
    content.className = 'todo-title'
    content.innerText = item.content 
    let time = document.createElement('span')
    time.className = 'todo-time'
    time.innerText = item.ctime
    let close = document.createElement('i')
    close.className = 'iconfont icon-delete'
    //绑定事件
    close.addEventListener('click',() => deleteItem(item))
    el.appendChild(checkbox)
    el.appendChild(content)
    el.appendChild(time)
    el.appendChild(close)
    item.el = el
    return el
}

//将数据写入localStorage
function write_localStorage(){
    localStorage.setItem('todos', JSON.stringify(todos))
}

//添加todo条目
function addItem(item: Todo, isInit = false) {
    todos.push(item)
    let el = createElements(item)
    lists.appendChild(el)
    if (isInit === false) write_localStorage()
}


//点击i标签时切换todo状态
function click_i(item: Todo) {
    item.finished = !item.finished
    let className = 'todo-item'
    if (item.finished === true) className += ' todo-finished'
    item.el.className = className
    //修改todo条目修改时间
    item.mtime = dayjs().format('MM[月]DD[日] HH:mm:ss')
    write_localStorage()
}

// 删除Todo条目
function deleteItem(item: Todo) {
    lists.removeChild(item.el)
    let index = todos.indexOf(item)
    todos.splice(index, 1)
    write_localStorage()
}

//获取输入框的内容，添加条目
let input = document.getElementById('input') as HTMLInputElement
input.addEventListener('keydown', event => {
  //获取uuid
  let uuid = uuidv4(); 
  let value = input.value.trim()
  //获取时间，初始时ctime与mtime应该相同
  let days = dayjs().format('MM[月]DD[日] HH:mm:ss')
  if (event.key === 'Enter' && value !== '') {
    let todo = new Todo({id:uuid, content: value, finished: false ,ctime:days ,mtime:days })
    addItem(todo)
    input.value = ''
  }
})


// 加载localStorage中的缓存数据
let _todos = localStorage.getItem('todos')
if (_todos) {
  try {
    // 缓存中的数据只有 content、finished 属性，没有el，对应的是ITodo接口而不是Todo
    let items: ITodo[] = JSON.parse(_todos)
    for (let item of items) {
      let todo = new Todo(item)
      addItem(todo, true)
    }
  } catch (error) {
    console.error('invalid cache')
  }
}
