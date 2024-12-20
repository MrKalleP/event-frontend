
import { ErrorsHome } from "../components/ErrorsHome";
import { WarningHome } from "../components/WarningHome";
import { Row, Col } from "antd";
import TableHomePage from "../components/TableHomePage";
import { CrashedLoggs } from "../components/CrashedLoggs"
import { InfoLoggs } from "../components/InfoLoggs"
import LineChartExample from "../components/LineChart"


const HomePage = () => {
    return <Row gutter={[8, 17]} justify="center" align="middle" style={{ backgroundColor: "#07495b", borderRadius: ".5rem", color: "white", margin: ".5rem", padding: ".3rem" }}>
        <Col span={6}>
            <InfoLoggs />
        </Col>
        <Col span={6}>
            <WarningHome />
        </Col>
        <Col span={6}>
            <ErrorsHome />
        </Col>
        <Col span={6}>
            <CrashedLoggs />
        </Col>
        <Col span={12} style={{ borderRadius: ".5rem" }}>
            <TableHomePage />
        </Col>
        <Col span={12} style={{ background: "#F6FFFF", borderRadius: ".5rem", height: "70vh", padding: ".7rem" }}>
            < LineChartExample />
        </Col>

    </Row>
};

export default HomePage;