// 此组件为登录页面
import { Link, useNavigate } from "react-router-dom"
import { Form,message } from 'antd'
import React from "react"
import {FC} from "react"
import "./index.css"
import 'antd/lib/message/style/css'
import logo from './logo.svg'
import axios from 'axios'
const Loginin:FC = () => {
    const nav = useNavigate()
    // 点击登录后判断合法的函数
    const onfinish = (values: string)=>{
        console.log('Received values of form: ', values)
        // 接收数据后将数据传入后端进行验证
        axios.post('/api/user/login',{data:JSON.stringify(values)})
        .then((res)=>{
            // 依据返回的code确定三个状态
            const code = res.data.code
            console.log(res)
            switch(code){
                case 1:
                    message.success('登录成功!')
                    nav('/Home')
                    break;
                case 0:
                    message.warning('密码错误!')
                    break;
                default:
                    message.error('用户不存在!')
            }
        })
    }
    return (
        <div className="login-in">
            {/* 头部标题 */}
            <div className = "head">
                <div >
                    <img src={logo} alt="yun" />
                </div>
                <h1>人员管理系统</h1>
            </div>
            
            <div className='login-in-form'> 
                <div style={{color:'#8C8D9B',fontSize:'26px',margin:'20px'}}>
                    用户名密码登录
                </div>
                {/* 登录表单，使用Form组件 */}
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onfinish}
                    >
                    {/* 用户名 包裹两层item防止报错*/}
                    <Form.Item name="Username">
                        <Form.Item name="Username">
                            {/* <Input 
                            type="Username"
                            required
                            className='input'
                            /> */}
                            <input type="text" required className='input'/>
                            <span className='span-username'>Username</span>   
                        </Form.Item>
                    </Form.Item>
                    {/* 密码 包裹两层item防止报错*/}
                    <Form.Item name="password" >
                        <Form.Item name="password" >
                            {/* <Input
                            type="password"
                            required
                            className='input-password'
                            /> */}
                            <input type="password" required className='input-password' />
                            <span className='span-password'>Password</span>
                        </Form.Item>
                    </Form.Item>
                    {/* 跳转至创建账户页面 */}
                    <Form.Item>
                        <Link to="/Create-Account" className="link">没有账号?点击创建</Link>
                    </Form.Item>
                    {/* 登录按钮 */}
                    <Form.Item>
                        <button type="submit" className="button" >
                        登录
                        </button>
                    </Form.Item>
                </Form>
            </div>
        </div>  
    )
}
export default Loginin