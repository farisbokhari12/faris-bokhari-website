import React from 'react'
import './Education.css'
import { Avatar, Card, Divider, Row, Col } from 'antd'
import illipic from "./illi.png"
import dv from "./wildcats.png"



const { Meta } = Card;


function Education() {
    return (
        <div>
        <h1>Education</h1>
        <div className="site-card-border-less-wrapper">
        <Card
        hoverable
        className="education"
        >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col>
            <Avatar shape="square" src={illipic} size="large"/>
            </Col>
            <Col>
            <Meta className="meta" title="B.S. in Computer Science and Advertising (August 2019 - May 2022)" description="University of Illinois Urbana Champaign"/>
            </Col>
            </Row>
            <Divider />
            <ul>
                <li>Currently enrolled in Computer Architecture (CS 233), Probability and Statistics for Computer Science (CS 361), Consumer Insights (ADV 284)</li>
                <li>Have taken Data Structures (CS 225), Discrete Structures (CS 173), Software Design Studio (CS 126), Introduction to Computer Science (CS 125)</li>
            </ul>
        </Card>
        </div>
        <div className="site-card-border-less-wrapper">
        <Card
        hoverable
        className="education"
        >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col>
            <Avatar shape="square" src={dv} size="large"/>
            </Col>
            <Col>
            <Meta className="meta" title="High School Degree (August 2015 - June 2019)" description="Dougherty Valley High School"/>
            </Col>
            </Row>
            <Divider />
        </Card>
        </div>
        </div>
    )
}

export default Education;