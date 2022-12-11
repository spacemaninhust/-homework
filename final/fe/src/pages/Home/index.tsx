// 此组件为主页页面
import React, { useState } from 'react'
import { Outlet } from "react-router-dom"
import './index.css'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import{ Layout } from 'antd'
import 'antd/lib/menu/style/css'
import 'antd/lib/layout/style/css'
import Menus from '../../components/menu'
import Head from '../../components/head/'
const { Header, Sider } = Layout

const Home: React.FC = () => {
  // 用于点击收缩按钮时调整页面
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout>
      {/* 左侧导航栏 */}
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={collapsed?"logo-hide":"logo"}>zyh人员管理系统</div>
        <img src="/profile.png" alt="profile" className={collapsed?"profile":"logo-hide"} />
        {/* 外部组件Menus,在components中封装好 */}
        <Menus />
      </Sider>
      <Layout className="site-layout">
        {/* 头部 */}
        <Header className="site-layout-background-1" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          {/* 头部组件，在head中封装好 */}
          <Head />
        </Header>
        {/* 此处设置子路由实现 */}
          <Outlet />
      </Layout>
    </Layout>
  )
}

export default Home