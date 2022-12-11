# ***第一次作业--仿写qq音乐***

所上传的文件中task文件为未经改动的所给资源，使用了其中的数据以及css样式，index.html为所实现的第一次作业，index.js为第一次作业的js代码。

## 完成思路

1）分析qq音乐网页具体样式进行仿写，使用dom动态创建元素并使用addEventListener函数为其添加事件；
2）首先实现导航栏：使用ul与li创建导航栏，并且添加事件，当点击时将其className置为"tab-item tab-active"将其余className设置为"tab-item"；其次加载出相应的页面，页面元素使用dom动态生成，为了实现切换页面时页面发生变化，使用createDocumentFragment()函数；最后实现点击删除将该条目删除，每一个歌曲都是用div实现，因此为图片添加事件删除对应的div。

## bug及解决措施

1)点击导航栏切换时之前页面并未消失，一开始想通过设置display属性将之前页面隐藏，可是后来发现行不通而且原qq音乐并不是这种效果，查询资料想到了createDocumentFragment()函数，解决了此问题；
2)当点击图片删除图标删除对应条目后，切换导航栏发现又复原，使用一个新的数组album代替记录ALBUM_DATA，初始化为ALBUM_DATA数据并且每删除一个条目将对应的元素在数组中删除解决此问题。