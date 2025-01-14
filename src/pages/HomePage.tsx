
import { Row, Col } from "antd";
import { ErrorsHome } from "../components/homepage/ErrorsHome";
import { WarningHome } from "../components/homepage/WarningHome";
import TableHomePage from "../components/homepage/TableHomePage";
import { CrashedLoggs } from "../components/homepage/CrashedLoggs";
import { InfoLoggs } from "../components/homepage/InfoLoggs";
import LineChartExample from "../components/homepage/LineChart";

const HomePage = () => {
    return (

        <Row
            gutter={[24, 24]}
            justify="center"
            align="top"
        >
            <Row gutter={[16, 16]} justify="center" style={{ width: "100%" }}>
                <Col xs={24} sm={12} md={6} lg={6}>
                    <InfoLoggs />
                </Col>
                <Col xs={24} sm={12} md={6} lg={6}>
                    <WarningHome />
                </Col>
                <Col xs={24} sm={12} md={6} lg={6}>
                    <ErrorsHome />
                </Col>
                <Col xs={24} sm={12} md={6} lg={6}>
                    <CrashedLoggs />
                </Col>
            </Row>
            <Row gutter={[24, 24]} style={{ flex: 1, width: "100%" }}>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <TableHomePage />
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <LineChartExample />
                </Col>
            </Row>
        </Row>
        </ConfigProvider >
    );
};

export default HomePage;