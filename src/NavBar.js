import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./Navbar.css";

const NavBar = ({ menu }) => {
    const [visible, setVisible] = useState(false);
    const name = "FARIS BOKHARI"

    return (
        <header className="navbar">
            <div className="container">
            <Button 
            className="menu"
            type="primary"
            icon={<MenuOutlined/>}
            onClick={() => setVisible(true)}
            />
        <div className="namediv">
        <h1 className="name">{name}</h1>
        </div>
        
            
           </div>
        <Drawer className="drawer"
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}
        >
            {menu}
        </Drawer>
        
        </header>

    )
}

export default NavBar;
