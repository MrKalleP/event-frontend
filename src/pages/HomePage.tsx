import React from "react";
import { ErrorsHome } from "../components/ErrorsHome";
import { WarningHome } from "../components/WarningHome";
import { Row, Col } from "antd";
import TableHomePage from "../components/TableHomePage";


const HomePage: React.FC = () => {
    return <Row gutter={[16, 16]} justify="center" align="middle">

        <Col span={10}>
            <h2 >This is the active errors</h2>
            <ErrorsHome />
        </Col>
        <Col span={10}>
            <h2 >This is the active warnings</h2>
            <WarningHome />
        </Col>
        <Col>
            <TableHomePage />
        </Col>
    </Row>
};

export default HomePage;