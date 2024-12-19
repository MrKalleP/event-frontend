
import { ErrorsHome } from "../components/ErrorsHome";
import { WarningHome } from "../components/WarningHome";
import { Row, Col } from "antd";
import TableHomePage from "../components/TableHomePage";
import { CrashedLoggs } from "../components/CrashedLoggs"
import { InfoLoggs } from "../components/InfoLoggs"
import { LineChart } from "../components/LineChart";

const HomePage = () => {
    return <Row gutter={[8, 13]} justify="center" align="middle" style={{ backgroundColor: "#07495b", borderRadius: ".5rem", color: "white" }}>
        <Col span={6}>
            <h2>This is all loggs</h2>
            <InfoLoggs />
        </Col>
        <Col span={6}>
            <h2>Active warnings</h2>
            <WarningHome />
        </Col>
        <Col span={6}>
            <h2>Active errors</h2>
            <ErrorsHome />
        </Col>
        <Col span={6}>
            <h2>Crached loggs</h2>
            <CrashedLoggs />
        </Col>
        <Col span={12}>
            <TableHomePage />
        </Col>
        <Col span={12} style={{ background: "#fff", borderRadius: ".5rem", minHeight: "75vh" }}>
            <LineChart />
        </Col>

    </Row>
};

export default HomePage;