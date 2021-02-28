import React from 'react'
// import Sidebar from './Sidebar'
import './Home.css'
import { Layout, Avatar, Button } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import pfp from "./pfp.jpg"
import { DownloadOutlined,
GithubOutlined,
LinkedinOutlined } from '@ant-design/icons'
import resume from "./Faris_Bokhari_Resume_2021v1.pdf"

// const { Header, Sider } = Layout

const openResume = () => {
    window.open(resume);
}


function Home() {
    const description = "I am a Computer Science and Advertising Major at the University of Illinois Urbana-Champaign. I have interests in a multitude of programming languages, but am strongest in Java, Python, and C++, and JavaScript. I am quick learner, ready to adapt to any situation, and aim for perfection in all aspects."
    return (
        <div>
            <Layout>
            <Content>
               <div className="pfp">
               <Avatar src={pfp}
                size={{ xs: 50, sm: 100, md: 150, lg: 200, xl: 250, xxl: 300 }}/>
               </div>
               <div className="aboutDescription">
               <h3>{description}</h3>
                </div>
               <div className="aboutlinks">
                <Button type="primary" shape="round" icon={<DownloadOutlined />} size={'large'} onClick={openResume}>
                    Resume
                </Button>
                <Button type="primary" shape="round" icon={<LinkedinOutlined />} size={'large'} onClick={() => window.open("https://www.linkedin.com/in/faris-b/", "_blank")}>
                    Linkedin
                </Button>
                <Button type="primary" shape="round" icon={<GithubOutlined />} size={'large'} onClick={() => window.open("https://github.com/farisab2", "_blank")}>
                    Github
                </Button>
               </div>
            </Content>
            </Layout>

        </div>
    )
}

export default Home
