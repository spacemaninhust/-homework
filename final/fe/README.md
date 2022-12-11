# 大作业前端

## 项目介绍

此项目为大作业前端，具体要求参考[华科前端课程：大项目考核 (kdocs.cn)](https://www.kdocs.cn/l/cfn81iYFv0us)。
此部分为前端部分

本项目在满足要求的前提下，将页面进行了优化，看起来更加美观，在功能上添加了按照用户年级与性别进行筛选的功能，注册页面，左侧的导航栏可折叠，并且对于用户的输入数据加入了校验，如电话号码与邮箱判断是否合法等。更多的设计在项目“关于”页面中有介绍，也可以自己使用此项目感受。

## 项目结构

项目结构如下所示，pages为三个页面，components为组件，在各个组件index.tsx中都给出了该组件作用。

fe
    ├─public
    └─src
        ├─components
        │  ├─contents(用户信息部分)
        │  ├─datatype(用户信息数据结构)
        │  ├─deatil(点击查看后的组件)
        │  ├─delete(删除组件)
        │  ├─head(页面头部)
        │  ├─menu(左侧菜单)
        │  ├─modals(编辑与添加用户的Modal)
        │  ├─search(顶部搜索部分)
        │  └─about(关于页面)
        └─pages
            ├─Create_Account(注册账户)
            ├─Home(主页面)
            └─Login_in(登录页面)

## 开发思路

开发主要依靠antd，参考官网所给文档，详细文档可见[组件总览 - Ant Design](https://ant.design/components/overview-cn/)本项目主要使用的组件有Form，Button，Layout，Cascader，Input，Upload，Table，Modal。

## 问题及解决

所遇见的问题很多，这里总结

1):对于antd不熟悉，不太会使用，自己是参照了许多官网的代码以及查对应的api搞明白了antd组件的使用方法;

2):对于react组件间的传参，总是eslint会报错类型不对，自己根据报错内容改相应的类型，也算是解决了错误;

3):对于路由的设置，一开始不太懂子路由这一块，后来是参考上课demo搞懂了子路由的设置。

## 项目执行

`npm i`

安装相应的依赖包

`npm start`

以开发模式下运行此项目

`npm run build`

将项目打包到serve/static下，按照要求在serve中运行此项目
