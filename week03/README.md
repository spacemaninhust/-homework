# 第三次作业思路

index.html为网页，index.js为js文件，index.css为css样式，其余为所给图片资源。

构建静态页面使用html加css实现，参考了所给资源。

文本框输入内容后需要动态生成新节点加入到#root中，使用js与dom实现，点击前后图标的变化将节点与事件绑定即可。对于缓存的问题，使用localStroge完成，需要注意数据格式为json，并且为每一个元素都需要有一个id，这里采用了随机数的方式，生成了0-1不重复的随机数代表id，后续删除操作中只需根据id查找到相应值并删除即可。

