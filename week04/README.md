# 第四次作业思路

与第三次大致相同，这次使用了工程化的方法.使用uuid与dayjs生成时间与id，编写ts代码.初始时ctime与mtime相同，当点击√时，更改mtime.二者均使用了string类型便于赋值

配置webpack.config.js与tsconfig.js时参考了demo2

.gitignore忽略了dist与node_modules

```
npm i
```

安装需要的模块

```
npm run build
```

生成dist文件夹，其中html打开使用Live Server即可
