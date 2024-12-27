
import { ErrorsHome } from "../components/ErrorsHome";
import { WarningHome } from "../components/WarningHome";
import { Row, Col } from "antd";
import TableHomePage from "../components/TableHomePage";
import { CrashedLoggs } from "../components/CrashedLoggs"
import { InfoLoggs } from "../components/InfoLoggs"
import LineChartExample from "../components/LineChart"


const HomePage = () => {
    return <Row gutter={[8, 17]} justify="center" align="middle" style={{ backgroundColor: "#002140", borderRadius: ".5rem", color: "white", margin: ".5rem", padding: ".3rem" }}>
        <Col xs={24} sm={12} md={12} lg={6}>
            <InfoLoggs />
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
            <WarningHome />
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
            <ErrorsHome />
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>
            <CrashedLoggs />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ borderRadius: ".5rem", overflow: "auto", backgroundColor: "white" }}>
            <TableHomePage />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} style={{ background: "#002140", overflow: "auto", borderRadius: ".5rem", height: "70vh", padding: ".7rem" }}>
            < LineChartExample />
        </Col>

    </Row>
};

export default HomePage;