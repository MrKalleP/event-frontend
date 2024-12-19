
import { ErrorsHome } from "../components/ErrorsHome";
import { WarningHome } from "../components/WarningHome";
import { Row, Col } from "antd";
import TableHomePage from "../components/TableHomePage";
import { CrashedLoggs } from "../components/CrashedLoggs"
import { InfoLoggs } from "../components/InfoLoggs"

const HomePage = () => {
    return <Row gutter={[24, 24]} justify="center" align="middle">
        <Col span={6}>
            <h2>This is all loggs</h2>
            <InfoLoggs />
        </Col>
        <Col span={6}>
            <h2>This is the active warnings</h2>
            <WarningHome />
        </Col>
        <Col span={6}>
            <h2>This is the active errors</h2>
            <ErrorsHome />
        </Col>
        <Col span={6}>
            <h2>This is all the crached loggs</h2>
            <CrashedLoggs />
        </Col>
        <Col span={24}>
            <TableHomePage />
        </Col>

    </Row>
};

export default HomePage;