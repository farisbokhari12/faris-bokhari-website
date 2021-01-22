import React from 'react'
import Sidebar from './Sidebar'
import './Home.css'
import { Layout } from 'antd'

const { Header, Sider } = Layout

function Home() {
    const name = "FARIS BOKHARI"
    return (
        <div>
            <Layout>
                <Header>
                <h1> {name} </h1>
            </Header>
            </Layout>
            <Layout>
            <Sider>
            <Sidebar/>
            </Sider>
            </Layout>
        </div>
    )
}

export default Home
