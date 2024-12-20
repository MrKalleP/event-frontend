
import { ErrorsHome } from "../components/ErrorsHome";
import { WarningHome } from "../components/WarningHome";
import { Row, Col } from "antd";
import TableHomePage from "../components/TableHomePage";
import { CrashedLoggs } from "../components/CrashedLoggs"
import { InfoLoggs } from "../components/InfoLoggs"


const HomePage = () => {
    return <Row gutter={[8, 13]} justify="center" align="middle" style={{ backgroundColor: "#07495b", borderRadius: ".5rem", color: "white", margin: ".2rem" }}>
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
        <Col span={12} style={{ background: "#fff", borderRadius: ".5rem" }}>
        </Col>

    </Row>
};

export default HomePage;