// 此组件menu为左侧导航栏组件
import React from 'react'
import {
    UsergroupAddOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons'
import { NavLink as Link ,useLocation} from 'react-router-dom'
import{Menu} from 'antd'
import 'antd/lib/menu/style/css'
const Menus: React.FC = () =>{
    const location = useLocation()
    return (
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          items={[
            {
              key: '/Home',
              icon: <UsergroupAddOutlined />,
              label: <Link to="/Home">人员管理</Link>,
            },
            {
              key: '/Home/about',
              icon: <VideoCameraOutlined />,
              label: <Link to="/Home/about">关于</Link>,
            }
          ]}
        />
    )
}
export default Menus