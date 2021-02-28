import React from 'react';
import { FaReact,FaAngular, FaGithub, FaHtml5, FaCss3, FaJs, FaJava, FaPython, FaNpm, FaAws, FaJira, FaBootstrap, FaNode} from 'react-icons/fa';
import {SiCplusplus, SiFirebase} from 'react-icons/si'
import {AiOutlineConsoleSql} from 'react-icons/ai'
import { IconContext } from "react-icons";
import {Popover, Button} from 'antd'
import './Skills.css'
const rDesc = (<div>
    <h4>React</h4>
</div>)
const aDesc = (<div><h4>Angular</h4></div>)
const gitDesc = (<div><h4>Github</h4></div>)
const htmlDesc = (<div><h4>HTML 5</h4></div>)
const cssDesc = (<div><h4>CSS 3</h4></div>)
const jsDesc = (<div><h4>JavaScript</h4></div>)
const javaDesc = (<div><h4>Java</h4></div>)
const pythonDesc = (<div><h4>Python</h4></div>)
const npmDesc = (<div><h4>NPM</h4></div>)
const awsDesc = (<div><h4>AWS</h4></div>)
const jiraDesc = (<div><h4>Jira</h4></div>)
const bootstrapDesc = (<div><h4>Bootstrap</h4></div>)
const nodeDesc = (<div><h4>Node JS</h4></div>)
const cppDesc = (<div><h4>C++</h4></div>)
const firebaseDesc = (<div><h4>Firebase</h4></div>)
const sqlDesc = (<div><h4>SQL</h4></div>)

function Skills() {
return (
    
    <div>
        <h1>Skills</h1>
        <h2>Programming Languages & Tools</h2>
        <IconContext.Provider value={{size: "50px"}}>
        <Popover content={rDesc}>
            <FaReact className="popover"/>
        </Popover>
        <Popover content={aDesc} className="popover">
            <FaAngular className="popover"/>
        </Popover>
        <Popover content={gitDesc} className="popover">
            <FaGithub className="popover"/>
        </Popover>
        <Popover content={htmlDesc} className="popover">
            <FaHtml5 className="popover"/>
        </Popover>
        <Popover content={cssDesc} className="popover">
            <FaCss3 className="popover"/>
        </Popover>
        <Popover content={jsDesc} className="popover">
            <FaJs className="popover"/>
        </Popover>
        <Popover content={javaDesc} className="popover">
            <FaJava className="popover"/>
        </Popover>
        <Popover content={pythonDesc} className="popover">
            <FaPython className="popover"/>
        </Popover>
        <Popover content={npmDesc} className="popover">
            <FaNpm className="popover"/>
        </Popover>
        <Popover content={awsDesc} className="popover">
            <FaAws className="popover"/>
        </Popover>
        <Popover content={jiraDesc} className="popover">
            <FaJira className="popover"/>
        </Popover>
        <Popover content={bootstrapDesc} className="popover">
            <FaBootstrap className="popover"/>
        </Popover>
        <Popover content={nodeDesc} className="popover">
            <FaNode className="popover"/>
        </Popover>
        <Popover content={cppDesc} className="popover">
            <SiCplusplus className="popover"/>
        </Popover>
        <Popover content={firebaseDesc} className="popover">
            <SiFirebase className="popover"/>
        </Popover>
        <Popover content={sqlDesc} className="popover">
            <AiOutlineConsoleSql className="popover"/>
        </Popover>
        </IconContext.Provider>
    </div>
)}
export default Skills;