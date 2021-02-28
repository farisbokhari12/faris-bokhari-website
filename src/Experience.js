import React from 'react'
import './Experience.css'
import { Avatar, Card, Divider, Row, Col } from 'antd'
import illipic from "./illi.png"
import hcl from "./hcl.png"
import sap from "./sap.png"
import knodemy from "./knodemy.png"
import briia from "./briia.png"


const { Meta } = Card;


function Experience() {
    return (
        <div>
        <h1>Experience</h1>
        <div className="site-card-border-less-wrapper">
        <Card
        hoverable
        className="experience"
        >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col>
            <Avatar shape="square" src={illipic} size="large"/>
            </Col>
            <Col>
            <Meta className="meta" title="Research Assistant (August 2020 - Present)" description="University of Illinois Urbana Champaign"/>
            </Col>
            </Row>
            <Divider />
            <ul>
                <li>Created mock Twitter feeds and YouTube video page in HTML/CSS/JavaScript to simulate user interaction and behavior</li>
                <li>Integrated external cloud storage through Cloudinary and ImageKit to store videos and images</li>
                <li>Helped researchers enhance data collection by incorporating mock HTML pages within Qualtrics survey’s</li>
            </ul>
        </Card>
        </div>
        <div className="site-card-border-less-wrapper">
        <Card
        hoverable
        className="experience"
        >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col>
            <Avatar shape="square" src={hcl} size="large"/>
            </Col>
            <Col>
            <Meta className="meta" title="CERT Tester (August 2020 – September 2020)" description="HCL"/>
            </Col>
            </Row>
            <Divider />
            <ul>
                <li>Recorded test case results for Microsoft gaming products to track passed/failed cases.</li>
                <li>Created bug reports for unintended bugs</li>
            </ul>
        </Card>
        </div>
        <div className="site-card-border-less-wrapper">
        <Card
        hoverable
        className="experience"
        >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col>
            <Avatar shape="square" src={sap} size="large"/>
            </Col>
            <Col>
            <Meta className="meta" title="Technical Orientation (July 2018)" description="SAP America"/>
            </Col>
            </Row>
            <Divider />
            <ul>
                <li>Developed an Alexa Skill that used a machine learning algorithm in R</li>
                <li>Worked with SAP’s HANA database to predict and speak the future value of a stock.</li>
            </ul>
        </Card>
        </div>
        <div className="site-card-border-less-wrapper">
        <Card
        hoverable
        className="experience"
        >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col>
            <Avatar shape="square" src={briia} size="large"/>
            </Col>
            <Col>
            <Meta className="meta" title="Marketing and Business Development Intern (June 2017 - August 2017)" description="Bishop Ranch Intelligence Innovation Accelerator"/>
            </Col>
            </Row>
            <Divider />
            <ul>
                <li>Created and implemented social media strategy which included developing a variety of posts and creating social sites</li>
                <li>Reviewed and did background research on applicants applying for the Accelerator program</li>
            </ul>
        </Card>
        </div>
        <div className="site-card-border-less-wrapper">
        <Card
        hoverable
        className="experience"
        >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col>
            <Avatar shape="square" src={knodemy} size="large"/>
            </Col>
            <Col>
            <Meta className="meta" title="Technology Intern (June 2017 - August 2017)" description="Knodemy"/>
            </Col>
            </Row>
            <Divider />
            <ul>
                <li>Created and implemented social media strategy which included developing a variety of posts and creating social sites</li>
                <li>Reviewed and did background research on applicants applying for the Accelerator program</li>
            </ul>
        </Card>
        </div>
        </div>
    )
}

export default Experience;