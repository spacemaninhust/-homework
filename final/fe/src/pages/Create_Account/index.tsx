import { Form,message } from 'antd';
import React from "react";
import { useNavigate } from "react-router-dom"
import {FC} from "react"
import "./index.css"
import logo from './logo.svg'
import axios from 'axios'

const CreateAccount:FC = () => {
    const nav = useNavigate()
    // 点击注册后的函数
    const onfinish = (values: string)=>{
        axios.post('http://localhost:3001/api/user/create',{data:JSON.stringify(values)})
        .then((res)=>{
            // 依据返回的code确定三个状态
            const code = res.data.code
            switch(code){
                case 1:
                    message.success('注册成功!')
                    nav('/')
                    break;
                case 0:
                    message.warning('用户名已存在!')
                    break;
            }
        })
    }
    return (
        <div className="login-in-creat">
            {/* 头部标题 */}
            <div className = "head-creat">
                <div >
                    <img src={logo} alt="yun" />
                </div>
                <h1>人员管理系统</h1>
            </div>
            <div className='login-in-form-creat'> 
                <div style={{color:'#8C8D9B',fontSize:'26px',margin:'20px'}}>
                    用户注册
                </div>
                {/* 注册表单，使用Form组件 */}
                <Form
                    name="normal_login"
                    className="login-form-creat"
                    initialValues={{ remember: true }}
                    onFinish={onfinish}
                    >
                    {/* 用户名 包裹两层item防止报错*/}
                    <Form.Item name="Username">
                        <Form.Item name="Username" rules={
                            [
                                { required: true, message: '用户名不可以为空' },
                                {pattern:/^[0-9a-zA-Z]{1,}$/g,message:'只允许数字字母'},
                            ]} 
                        >
                            {/* <Input 
                            type="Username"
                            required
                            className='input-creat'
                            /> */}
                            <input type="text" required className='input-creat' />
                            <span className='span-username-creat'>Username(只允许数字字母)</span>   
                        </Form.Item>
                    </Form.Item>
                    {/* 密码 包裹两层item防止报错*/}
                    <Form.Item name="password" >
                        <Form.Item name="password" rules={
                            [
                                { required: true, message: '密码不可以为空' },
                                {pattern:/(.[^a-z0-9])/g,message:'需大小写字母与数字'},
                                {min:6,message:"长度不得小于6位"}
                            ]} 
                        >
                            {/* <Input 
                            type="password"
                            required
                            className='input-password-creat'
                            /> */}
                            <input type="password" required className='input-password-creat'/>
                            <span className='span-password-creat'>Password(大小写字母加数字不少于6位)</span>
                        </Form.Item>
                    </Form.Item>
                    {/* 重复密码 */}
                    <Form.Item name="repeat-password" >
                        <Form.Item name="repeat-password" rules={
                            [
                                { required: true, message: '密码不可以为空' },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('两次输入密码不同');
                                    },
                                }),
                            ]
                            } 
                        >
                            {/* <Input 
                            type="password"
                            required
                            className='repeat-password-creat'
                            /> */}
                            <input type="password" required className='repeat-password-creat'/>
                            <span className='span-repeat-password-creat'>confirm-Password(确保两次输入相同)</span>
                        </Form.Item>
                    </Form.Item>
                    {/* 注册按钮 */}
                    <Form.Item>
                        <button className="button-creat">
                        注册
                        </button>
                    </Form.Item>
                </Form>
            </div>
        </div>  
    )
}
export default CreateAccount