const Koa = require("koa");
// 引入session
const session = require("koa-session");
// 引入文件模块
var fs = require("fs");
var Router = require("koa-router");
const koaBody = require('koa-body');
const { randomUUID } = require("crypto");
const app = new Koa();
const static = require("koa-static"); // CJS: require('koa-static')
const path = require("path");
const staticPath = path.resolve(__dirname, "static");
app.use(static(staticPath));
// 路由
const router = new Router();
// koaBody配置
app.use(
    koaBody({
        multipart: true,    //解析多个文件
        formidable: {
            maxFileSize: 100 * 1024 * 1024,    // 设置上传文件大小最大限制，默认2M
            //uploadDir: 可以填写一个路径，不填写默认为 os.tmpDir()
        }
    })
)
// session配置
app.keys = ["i love hust"];
// const SessionStore = {};
const CONFIG = {
  key: "koa.sess" /** (string) cookie key (default is koa.sess) */,
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  autoCommit: true /** (boolean) automatically commit headers (default true) */,
  overwrite: true /** (boolean) can overwrite or not (default true) */,
  httpOnly: true /** (boolean) httpOnly or not (default true) */,
  signed: true /** (boolean) signed or not (default true) */,
  rolling: false /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */,
  renew: false /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/,
  secure: false /** (boolean) secure cookie*/,
  sameSite:
    null /** (string) session cookie sameSite options (default null, don't set it) */,
//   store: {
//     get: (key) => {
//       return SessionStore[key];
//     },
//     set: (key, value, maxAge) => {
//       console.log("set", key, value, maxAge);
//       //存储在Node.js内存中，进程结束就没了。最合适的是存储在三方体系中，比如redis
//       SessionStore[key] = value;
//     },
//     destroy: (key) => {
//       //  /api/user/logout
//       SessionStore[key] = null;
//       console.log("destroy");
//     },
//   },
};
app.use(session(CONFIG, app));
// 打开文件User判断输入的数据是否在其中
function isUservalid(user){
    const datas = fs.readFileSync('User.json', 'utf8');
    // 将文件转为json
    const config = JSON.parse(datas);
    // 获取config的list数据
    const list = config.list;
    // 遍历文件查看是否存在该用户
    for(let i = 0;i < list.length;i++){
        if(list[i].Username === user.Username){
            if(list[i].password === user.password){
                // 成功登录
                return 1;
            }else{
                // 密码错误
                return 0;
            }
        }
    }
    // 用户不存在
    return -1;
}
// 打开文件将注册的账户输入
function writeUser(user){
    const users = {Username: user.Username,password: user.password}; 
    const datas = fs.readFileSync('User.json', 'utf8');
    // 将文件转为json
    let config = JSON.parse(datas);
    // 获取config的list数据
    let list = config.list;
    list.push(users);
    config = {"list":list};
    // 将数据写入文件中
    fs.writeFileSync('User.json',JSON.stringify(config),'utf8');
}
// 校验用户提交的用户名密码
async function checkUser(ctx, next) {
    // 1.先接收用户提交的数据 2.处理数据。3.回包
    const data = ctx.request.body;
    const user = JSON.parse(data.data);
    // 判断该用户输入信息是否正确
    let isCorrect = isUservalid(user);
    if (isCorrect === 1) {
        // 成功登录 
        // 写入 koa-session
        // 使用redis方式
        ctx.session.username = user.Username
        ctx.body = { code: 1, message: "登录成功", key:ctx.session };
    } else if(isCorrect === 0){
        // 密码错误，提示
        ctx.body = { code: 0, message: "密码错误" };
    }else{
        // 用户不存在
        ctx.body = { code: -1, message: "用户不存在" };
    }
}
// 注册账户
async function createUser(ctx, next) {
    // 1.先接收用户提交的数据 2.处理数据。3.回包
    const data = ctx.request.body;
    // 判断该用户输入信息是否正确
    let isCorrect = isUservalid(data);
    if(isCorrect === 0){
        // 用户名已存在错误，提示
        ctx.body = { code: 0, message: "用户名已存在" };
    }else{
        // 注册成功
        // 将信息写入User.json中
        writeUser(data);
        ctx.body = { code: 1, message: "注册成功" };
    }
}
// 获取用户缓存
async function getUserInfo(ctx,next){
    if(ctx.session.username != undefined){
        ctx.body = { code: 1, message: "用户已登录" ,name:ctx.session };
    }else{
        ctx.body = { code: 0, message: "用户未登录" ,name:'' };
    }
}
// 删除用户缓存
async function deleteSession(ctx,next){
    // 删除session，返回
    ctx.session = null;
    ctx.body = 1;
}
// 获取该用户的成员数据
// 打开文件Stu.json读取该用户数据
// 写的有些复杂，没有数据库只能遍历查找
async function getUserList(ctx,next){
    // 获得页面大小与页面数传递数据
    const number = ctx.query.page_number;
    const size = ctx.query.page_size;
    const data = ctx.query.msg;
    const gender = ctx.query.gender;
    const grade = ctx.query.grade;
    // 用户已登录
    if(ctx.session.username!=undefined){
        let list = [];
        let res = [];
        const name = ctx.session.username;
        const datas = fs.readFileSync('Stu.json', 'utf8');
        // 将文件转为json
        const config = JSON.parse(datas);
        // list获得全部数据
        list = config[name];
        if(data != '' && gender != '[object Object]' && grade != '[object Object]'){
            // 遍历list查找名字性别年级相同的数据
            for(let i = 0;i < list.length;i++){
                if(list[i].name === data && list[i].grade === grade && list[i].gender === gender){
                    res.push(list[i]);
                }
            }
        }
        else if (data != '' && gender != '[object Object]' && grade === '[object Object]'){
            // 遍历list查找名字性别年级相同的数据
            for(let i = 0;i < list.length;i++){
                if(list[i].name === data && list[i].gender === gender){
                    res.push(list[i]);
                }
            }
            
        }
        else if (data != '' && gender === '[object Object]' && grade != '[object Object]'){
            // 遍历list查找名字性别年级相同的数据
            for(let i = 0;i < list.length;i++){
                if(list[i].name === data && list[i].grade === grade){
                    res.push(list[i]);
                }
            } 
        }
        else if (data != '' && gender === '[object Object]' && grade === '[object Object]'){
            // 遍历list查找名字性别年级相同的数据
            for(let i = 0;i < list.length;i++){
                if(list[i].name === data){
                    res.push(list[i]);
                }
            }
            
        }
        else if (data === '' && gender != '[object Object]' && grade != '[object Object]'){
            // 遍历list查找名字性别年级相同的数据
            for(let i = 0;i < list.length;i++){
                if(list[i].grade === grade && list[i].gender === gender){
                    res.push(list[i]);
                }
            }
            
        }
        else if (data === '' && gender != '[object Object]' && grade === '[object Object]'){
            // 遍历list查找名字性别年级相同的数据
            for(let i = 0;i < list.length;i++){
                if(list[i].gender === gender){
                    res.push(list[i]);
                }
            }
        }
        else if (data === '' && gender === '[object Object]' && grade != '[object Object]'){
            // 遍历list查找名字性别年级相同的数据
            for(let i = 0;i < list.length;i++){
                if(list[i].grade === grade){
                    res.push(list[i]);
                }
            }
        }
        else{
            // 获取所需数据依据number与size计算
            // [(number-1)*size,number*size-1]
            // res = list.slice((number-1)*size,number*size > list.length?list.length:number*size);
            // ctx.body = { code: 1, message: "成功获取数据" ,list:res,size:list.length };
            res=list
        }
        // 有数据
        if(res.length > 0){
            // 分页
            let ress = res.slice((number-1)*size,number*size > list.length?list.length:number*size);
            ctx.body = { code: 1, message: "成功获取数据" ,list:ress,size:res.length };
        }
        // 无数据
        else{
            ctx.body = { code: -1, message: "无数据" };
        }
    }else{
        ctx.body = { code: 0, message: "用户未登录" };
    }
}
// 获得前端传递的数据，将其写入Stu.json中
async function updateUserList(ctx,next){
    // 获得传递的数据
    const data = ctx.request.body.data;
    // 获得前端的key是否存在
    const key = ctx.request.body.key;
    // 获取用户名
    const name = ctx.session.username;
    // 获取该用户文件
    const datas = fs.readFileSync('Stu.json', 'utf8');
    // 将文件转为json
    const config = JSON.parse(datas);
    // list获得全部数据
    // 此list为该user的用户信息
    let list = config[name];
    // 删除config中用户字段以供更新
    delete config[name];
    // 依据data构建一个对象存储数据为其添加key与hover
    let value = {
        "key":randomUUID(),
        "avatar":data.avatar,
        "name":data.nickname,
        "profession":data.profession,
        "grade":data.grade[0],
        "gender":data.gender[0],
        "tel":data.tel,
        "mail":data.email,
        "hover":false
    }
    // 若key为undefined，则为添加
    if(key === undefined){
        // 向list中追加此数据
        list.push(value);
    }
    // 否则为编辑，查找key对应的索引，将数据更新
    else{
        // 查找key对应索引，无法用indexof
        for(let i = 0;i < list.length;i++){
            if(list[i].key === key){
                // 未list[i]赋值
                list[i] = {
                    "key":key,
                    "avatar":data.avatar,
                    "name":data.nickname,
                    "profession":data.profession,
                    "grade":data.grade[0],
                    "gender":data.gender[0],
                    "tel":data.tel,
                    "mail":data.email,
                    "hover":false
                }
                break;
            }
        }
    }
    // 重构一个json将数据写入其中
    // 合并config与{name:list}
    let newconfig = {};
    newconfig[name] = list;
    for(const key in config){
        newconfig[key] = config[key];
    }
    // 写入文件中
    fs.writeFileSync('Stu.json',JSON.stringify(newconfig),'utf8');
    ctx.body = 1;
}
// 删除用户信息
async function deleteUserList(ctx,next){
    // 获得传递的数据
    const data = ctx.request.body.data;
    const key = data.key;
    // 获取用户名
    const name = ctx.session.username;
    // 获取该用户文件
    const datas = fs.readFileSync('Stu.json', 'utf8');
    // 将文件转为json
    const config = JSON.parse(datas);
    // list获得全部数据
    // 此list为该user的用户信息
    let list = config[name];
    // 删除config中用户字段以供更新
    delete config[name];
    // 查找list中key相等的索引
    // 查找key对应索引，无法用indexof
    for(let i = 0;i < list.length;i++){
        if(list[i].key === key){
            // 删除该数据，splice
            list.splice(i,1);
            break;
        }
    }
    // 重构一个json将数据写入其中
    // 合并config与{name:list}
    let newconfig = {};
    newconfig[name] = list;
    for(const key in config){
        newconfig[key] = config[key];
    }
    // 写入文件中
    fs.writeFileSync('Stu.json',JSON.stringify(newconfig),'utf8');
    ctx.body = 1;
    
}
router.post("/api/user/login", checkUser);
router.post("/api/user/create", createUser);
router.get("/api/stu/list",getUserInfo);
router.get("/api/stu/lists",getUserList);
router.post("/api/user/logout",deleteSession);
router.post("/api/stu/update",updateUserList);
router.post("/api/stu/delete",deleteUserList);
app.use(router.routes()).use(router.allowedMethods());;
app.listen(3001);