
import React from "react";
import logo from "../assets/logo_skytech_white.png";
import { Row, Col } from 'antd';

const Logo: React.FC<{ isCollapsed: boolean }> = ({ isCollapsed }) => (
    <Row justify="center" align="top" style={{ height: '5vh', margin: isCollapsed ? "0.5rem" : "1rem", transition: "all .4s ease" }}>
        <Col>
            <img
                src={logo}
                width={isCollapsed ? 39 : 160}
                alt="blue text on the companyname Skytech and 2 orange hexagons"
            />
        </Col>
    </Row>
);

export default Logo;
