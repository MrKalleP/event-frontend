
import { Row, Col } from "antd";
import { ErrorsHome } from "../components/homepage/ErrorsHome";
import { WarningHome } from "../components/homepage/WarningHome";
import TableHomePage from "../components/homepage/TableHomePage";
import { CrashedLoggs } from "../components/homepage/CrashedLoggs";
import { InfoLoggs } from "../components/homepage/InfoLoggs";
import LineChartExample from "../components/homepage/LineChart";
import test_data from "../utils/testdata.json"

const allLogs = test_data.projects.flatMap(project => project.logs);


const HomePage = () => {
    return (
        <Row
            style={{ height: "100vh", width: "100%", padding: "3rem" }}
            gutter={[24, 24]}
            justify="center"
            align="top"
        >
            <Row gutter={[16, 16]} justify="center" style={{ width: "100%" }}>
                <Col xs={24} sm={12} md={6} lg={6} >
                    <InfoLoggs data={allLogs} />
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} >
                    <WarningHome data={allLogs} />
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} >
                    <ErrorsHome data={allLogs} />
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} >
                    <CrashedLoggs data={allLogs} />
                </Col>
            </Row>
            <Row gutter={[24, 24]} style={{ width: "100%" }}>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <TableHomePage data={allLogs} />
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <LineChartExample data={allLogs} />
                </Col>
            </Row>
        </Row>

    );
};

export default HomePage;
