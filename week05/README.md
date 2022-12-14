# 第五次作业

## 查看作业

执行

```
npm i
```

安装对应的模块，执行

```
npm run build
```

生成dist，其中的index.html使用Live Server打开。

## 思路

作业的要求跟前两次差不多，添加了排序的功能，但是此次是使用react开发，还是对我有一定难度的。

react是数据驱动型，脱离了dom的相关操作，在思路上的转变还是花费了一些时间。

按照要求，每一个TodoItem是一个组件，因此在todo.tsx文件中定义了子组件TodoItem，type.ts中定义了Todo的类，最初我在子组件中定义了相关函数，后来发现有许多不便，于是最终还是将所有的函数定义在了父组件中。使用props传递函数与参数，因此子组件的实现并不复杂。

在父组件中，我将所有的TodoItem组成了一个数组TodoList，通过遍历此数组调用子组件生成相关节点。其中在删除以及改变状态的函数，通过父组件向子组件传递的key作为唯一的标识实现此功能。对于排序函数，因为是数组因此也不复杂，使用sort并且自定义了soorttype实现。作业的具体实现在代码中写出了较为详细的注释。
