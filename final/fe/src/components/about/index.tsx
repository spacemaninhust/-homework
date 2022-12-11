// 此组件为关于组件
import React, { useState,FC } from 'react'
import "./index.css"
const About: FC = () =>{
    return (
        <div className='content'>
            <div className='Head'>
                人员管理系统介绍
            </div>
            <div>
                <div className='content_0'>
                    此项目为大作业项目,具体的要求可参见
                    <a href="https://www.kdocs.cn/l/cfn81iYFv0us">作业要求</a>
                </div>
                <div className='content_1'>
                    <div >
                        1:此项目在完成要求的基础上对登录页面进行了优化设计
                        登录页面如图,点击输入框时会有动画效果,确保安全隐藏了密码<br />
                        依据结果有三种信息提示
                    </div>
                    <img src="./1.png" />
                </div>
                <div className='content_1'>
                    <div >
                        2:增加了注册用户页面,页面风格与首页相同,对用户的注册限定了条件<br />
                        依据结果有两种信息提示
                    </div>
                    <img src="./2.png" />
                </div>
                <div className='content_1'>
                    <div >
                        3:搜索框中添加了筛选性别与年级的选项,默认为全部,当点击搜索时会按照
                        三个条件的叠加进行搜索,<br />
                        选择年级与性别时会直接搜索
                    </div>
                </div>
                <div className='content_1'>
                    <div >
                        4:在添加以及编辑用户时对用户的数据进行判断是否合法并给予提示，
                        数据请求均采用分页请求方式
                    </div>
                </div>
                <div className='content_1'>
                    <div >
                        5:退出登录后会直接返回登录页面，此时若返回此页面会提示未登录，
                        <br />
                        右上角的图片发生改变，鼠标悬浮时出现登录选项
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About