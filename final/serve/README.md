# 大作业后端

## 项目介绍

此项目为大作业前端，具体要求参考[华科前端课程：大项目考核 (kdocs.cn)](https://www.kdocs.cn/l/cfn81iYFv0us)。

此部分为后端部分，具体介绍可参考fe/README.md

## 项目结构

后端部分结构较为简单，index.js为代码部分，构建了一个简易的服务端

Stu.json存储用户所管理的人员信息其数据结构为

```
{
    "Username":{
        key:string,
        avatar:string,
        name:string,
        profession:string,
        grade:string,
        gender:string,
        tel:string,
        mail:string,
        hover:boolean
    }
}
```

key使用uuid生成，Username为用户姓名，在注册页面那里我们要求了用户名是唯一的

User.json存储用户信息，其数据结构为

```
{
	Username:string,
	password:string
}
```

其中Username具有唯一性

## 开发思路

主要开发的部分有

```javascript
router.post("/api/user/login", checkUser);//登录部分
router.post("/api/user/create", createUser);//注册部分
router.get("/api/stu/list",getUserInfo);//获取用户信息session
router.get("/api/stu/lists",getUserList);//获取管理的人员信息
router.post("/api/user/logout",deleteSession);//退出登录删除session
router.post("/api/stu/update",updateUserList);//更新人员信息(添加、编辑)
router.post("/api/stu/delete",deleteUserList);//删除人员信息
```

具体的实现不再赘述，在代码中有很好的体现与详细的注释

## 问题及解决

所遇见的问题

1):对于koa不熟练，参考demo仔细学习慢慢掌握

2):对于跨域出了问题，跟老师及时沟通在前端进行配置proxy解决

3):对于数据的处理以及文件读取没实践过，参考node.js官网学习解决

## 项目执行

```
npm i
```

按照相应依赖包

在fe终端下执行

```
npm run build
```

后会在serve文件夹下生成static文件夹

在serve终端执行

```
node index.js
```

即可启动项目

初始账户为Username:admin,Password:Abc123456