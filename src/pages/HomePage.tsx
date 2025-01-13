
import { ErrorsHome } from "../components/homepage/ErrorsHome";
import { WarningHome } from "../components/homepage/WarningHome";
import { Row, Col } from "antd";
import TableHomePage from "../components/homepage/TableHomePage";
import { CrashedLoggs } from "../components/homepage/CrashedLoggs"
import { InfoLoggs } from "../components/homepage/InfoLoggs"
import LineChartExample from "../components/homepage/LineChart"


const HomePage = () => {
    return <Row
        gutter={[16, 24]}
        justify="center"
        align="middle"
        style={{
            backgroundColor: "rgba(0, 0, 0, 0.01)",
            borderRadius: ".5rem",
            color: "white",
            padding: "1rem",
        }}
    >
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

        <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            style={{
                borderRadius: "0.5rem 0 0 0.5rem",
                overflow: "auto",
                backgroundColor: "white",
                height: "70vh",
            }}
        >
            <TableHomePage />
        </Col>

        <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            style={{
                background: "white",
                overflow: "auto",
                borderRadius: "0 0.5rem 0.5rem 0",
                height: "70vh",
            }}
        >
            <LineChartExample />
        </Col>
    </Row>
};

export default HomePage;