// 此组件为页面上方的头部组件，显示用户姓名以及头像
import React ,{ useEffect, useState }from 'react'
import { Button,Modal } from 'antd'
import loginin from './loginin.svg'
import './index.css'
import { useNavigate } from "react-router-dom"
import loginout from './loginout.svg'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import axios from 'axios'

const Head: React.FC = () =>{

    // show用来判断是否展示退出
    const [show,setShow] = useState(false)
    // 展示Modal
    const [open1,setOpen1] = useState(false)
    const [open2,setOpen2] = useState(false)
    const [username,setUsername] = useState('')
    const [modalText, setModalText] = useState('确认退出登录吗')
    const [log,setLog] = useState(false)
    // 使用axios获得用户名
    useEffect(()=>{
      axios.get('/api/stu/list')
      .then((res)=>{
          // 依据返回的code确定三个状态
          const code = res.data.code
          if(code === 1){
            const username = res.data.name.username
            // 设置用户名
            setUsername(username)
            setLog(true)
          }
      })
    },[])
    // 退出后删除session
    const nav = useNavigate()
    const showButton =()=>{
      setShow(true)
    }
    const closeButton = ()=>{
      setShow(false)
    }
    // 展示modal
    const showModal = ()=>{
      setOpen1(true)
      setOpen2(true)
    }
    // 确认退出跳转首页
    const handleOk = () => {
      setOpen1(!open1)
      setModalText('再次确认要退出登录吗')
      // 退出登录部分，需要删除session
      if(!open1){
          setOpen1(false)
          setOpen2(false)
          axios.post('/api/user/logout',{data:document.cookie})
          .then(()=>{
              setUsername('')
              nav('/')
          })
      }
    }
    // 取消
    const handleCancel = () => {
        setOpen1(false)
        setOpen2(false)
    }
    // 登录
    const login = ()=>{
      nav('/')
    }
    return (
      <>
        <div className="user">
            <div className='userName'>
              {username}
            </div>
            <div className='userAvatar'>
              {log?
                <img src="/admin.png" onMouseEnter={showButton} onMouseLeave={closeButton}/>
                :
                <img src={loginin} onMouseEnter={showButton} onMouseLeave={closeButton}/>
              }
            </div>
        </div>
        <div className={show?'buttonshow':'buttonhide'} onMouseEnter={showButton} onMouseLeave={closeButton}>
              <img src={loginout} className='img' />
              {/* 依据是否登录显示不同button */}
                {log?
                  <Button style={{border:'0',padding:'2px'}} type='primary' onClick={showModal}>
                    退出登录
                  </Button>
                  :
                  <Button style={{border:'0',padding:'2px'}} type='primary' onClick={login}>
                    登录
                  </Button>
                }
              <Modal
                title={
                    [<div key="title"><ExclamationCircleOutlined key="title" color="yello"/>提示</div>]
                }
                open={open1||open2}
                onCancel={handleCancel}
                footer={[
                    // 可根据需要定义 一个或者 2个按钮
                   <Button key="back" onClick={handleCancel}>取消</Button>,
                   <Button key="submit" type="primary" onClick={handleOk}>确认</Button>
                ]}
                >
                {modalText}
              </Modal>
        </div>
      </>
    )
} 
export default Head