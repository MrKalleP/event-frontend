import React from 'react';
import logo from "../assets/logo_skytech_white.png"
import { Row, Col } from 'antd';


const Logo: React.FC = () => (
    <>
        <Row justify="center" align="top" style={{ height: '5vh', margin: "1rem" }}>
            <Col>
                <img src={logo} width={160} alt="blue text on the companyname Skytech and a 2 orange hexagons" />
            </Col>
        </Row>
    </>
);

export default Logo;