import React from 'react'
import { Layout, } from 'antd'
import "./Sidebar.css"
// import {
//     UserOutlined,
//     LaptopOutlined,
//     NotificationOutlined,
//     GithubOutlined,
//     LinkedinOutlined,
//     DownloadOutlined,
  
//   } from '@ant-design/icons';
  


function Sidebar({menu}) {
    return (
      <Layout.Sider
      className="sidebar"
      breakpoint={"lg"}
      theme="dark"
      collapsedWidth={0}
      trigger={null}
    >
      {menu}
   </Layout.Sider>
    )
}

export default Sidebar
