//定义数据用于存入localstroge中
let datas = {
    id: 0,
    content: "",
    finished: false
}
let contents = [];
//arr数组存储随机数判断是否重复
let arr = [0, 1];
//获取缓存的localstroge数据创造节点
function read() {
    let read_contents = JSON.parse(localStorage.getItem("_todos"));
    //判断是否存在本地缓存数据
    if (read_contents != null) {
        for (let i = 0; i < read_contents.length; i++) {
            contents[i] = read_contents[i];
            if (contents[i].finished == undefined) {
                contents[i] = JSON.parse(read_contents[i]);
            }
            Create_div(contents[i].content, contents[i].finished, contents[i].id);
        }
    }
}
//用于获取input框输入文本生成对应节点
function onme() {
    //按下回车发生后续动作
    if (event.keyCode == 13) {
        // console.log('发送成功！');
        let data = document.querySelector('input').value;
        //写入本地缓存
        write(data);
        //动态生成节点
        Create_div(data, "false", datas.id);
        //将input清0
        document.querySelector('input').value = "";
    }
}
//写入localstroge
function write(data) {
    datas.content = data;
    datas.id = produceNum(0, 1);
    contents.push(JSON.stringify(datas));
    //写入缓存
    localStorage.setItem("_todos", JSON.stringify(contents));
    //改变格式
    let read_contents = JSON.parse(localStorage.getItem("_todos"));
    for (let i = 0; i < read_contents.length; i++) {
        contents[i] = read_contents[i];
        if (contents[i].finished == undefined) {
            contents[i] = JSON.parse(read_contents[i]);
        }
    }
    localStorage.setItem("_todos", JSON.stringify(contents));
}
//生成div节点
function Create_div(data, finished, id) {
    let section = document.querySelector("section");
    let div2 = document.createElement("div");
    //为div添加id方便查找
    div2.id = id;
    //依据finished确定div的className
    if (finished == "false" || finished == false) {
        div2.className = "todo-item";
    } else {
        div2.className = "todo-item todo-finished";
    }
    let i1 = create_i("iconfont icon-checkbox");
    //绑定函数
    i1.addEventListener("click", click_checkbox);
    div2.appendChild(i1);
    let span = document.createElement("span");
    span.className = "todo-title";
    span.innerHTML = data;
    div2.appendChild(span);
    let i2 = create_i("iconfont icon-delete");
    //绑定函数
    i2.addEventListener("click", () => click_delete(div2));
    div2.appendChild(i2);
    section.appendChild(div2);
}
//生成i节点
function create_i(name) {
    let i = document.createElement("i");
    i.className = name;
    return i;
}
//点击checkbox
function click_checkbox() {
    let div = this.parentNode;
    //t为id在contents中的索引值
    let t = search(div.id);
    if (div.className == "todo-item") {
        div.className = "todo-item todo-finished";
    } else {
        div.className = "todo-item";
    }
    //点击后将finished取反后写入缓存
    contents[t].finished = !contents[t].finished;
    localStorage.setItem("_todos", JSON.stringify(contents));
}
//点击delete
function click_delete(e) {
    e.remove();
    let t = search(e.id);
    //contents去除t所对应的值
    contents.splice(t, 1);
    //写入缓存
    localStorage.setItem("_todos", JSON.stringify(contents));
}
//查找所给id在contents位置
function search(id) {
    let t;
    for (let i = 0; i < contents.length; i++) {
        if (id == contents[i].id) {
            t = i;
            break;
        }
    }
    return t;
}
//生成0-1不重复随机数作为id
function produceNum(a, b) {
    let num = Math.random(a, b);
    //若重复继续生成直至不重复为止
    while (arr.indexOf(num) != -1) {
        num = Math.floor(Math.random(a, b));
    }
    return num;
}
read();