import './App.css';
import 'antd/dist/antd.css'
import Sidebar from './Sidebar'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home'
import NavBar from "./NavBar";
import React, { useState } from "react";
import {Layout} from "antd";
import TopicMenu from "./TopicMenu"
import Experience from './Experience'
import Education from "./Education"
import Skills from "./Skills"

function App() {
  const topics = ["About", "Experience", "Education", "Skills", "Interests", "Projects", "Awards"];
  const content = [<Home/>, <Experience/>, <Education/>, <Skills/>]
  const [contentIndex, setContentIndex] = useState(0);
  const [selectedKey, setselectedKey] = useState(0);
  const changeSelectedKey = (event) => {
    const key = event.key;
    setselectedKey(key);
    setContentIndex(key);
  };
  const Menu = (
    <TopicMenu
    topics = {topics}
    selectedKey = {selectedKey}
    changeSelectedKey = {changeSelectedKey}
    />
  );
  return (
    <div className="App">
      <Layout className="layout">
      <NavBar menu = { Menu }/>

      <Layout>
      <Sidebar menu = {Menu} />

        <Layout.Content className="content">
              <div>{content[contentIndex]}</div>
        </Layout.Content>
      </Layout>
      </Layout>
      </div>
  );
}

export default App;
