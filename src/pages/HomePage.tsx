
import { ErrorsHome } from "../components/ErrorsHome";
import { WarningHome } from "../components/WarningHome";
import { Row, Col } from "antd";
import TableHomePage from "../components/TableHomePage";


const HomePage = () => {
    return <Row gutter={[16, 16]} justify="center" align="middle">
        <Col span={12}>
            <h2>This is the active errors</h2>
            <ErrorsHome />
        </Col>
        <Col span={12}>
            <h2>This is the active warnings</h2>
            <WarningHome />
        </Col>
        <Col span={24}>
            <TableHomePage />
        </Col>
    </Row>
};

export default HomePage;