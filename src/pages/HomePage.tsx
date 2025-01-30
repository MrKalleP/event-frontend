import { Row, Col } from "antd";
import TableHomePage from "../components/homepage/TableHomePage";
import LineChartExample from "../components/homepage/LineChart";
import TypesCardHome from "../components/homepage/TypesCardHome";
import { AlertOutlined, FireOutlined, InfoCircleOutlined, WarningOutlined } from "@ant-design/icons";


const HomePage = () => {
    return (
        <Row
            style={{ padding: "4rem" }}
            gutter={[24, 24]}
            justify="center"
            align="top">
            <Row gutter={[16, 16]} justify="center" style={{ width: "100%" }}>
                <Col xs={24} sm={12} md={6} lg={6} >
                    <TypesCardHome
                        type="info"
                        title="Info"
                        bgColor="var(--Info-color-)"
                        textColor="var(--white-color-)"
                        icon={InfoCircleOutlined}
                    />
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} >
                    <TypesCardHome
                        type="warning"
                        title="Warnings"
                        bgColor="var(--Warning-color-)"
                        textColor="var(--dark-color-)"
                        icon={WarningOutlined}
                    />
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} >
                    <TypesCardHome
                        type="error"
                        title="Errors"
                        bgColor="var(--errors-color-)"
                        textColor="var(--white-color-)"
                        icon={FireOutlined}
                    />
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} >
                    <TypesCardHome
                        type="crashed"
                        title="Crashed"
                        bgColor="var(--Crashed-color-)"
                        textColor="var(--white-color-)"
                        icon={AlertOutlined}
                    />
                </Col>
            </Row>
            <Row gutter={[24, 24]} style={{ width: "100%" }}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={12}>
                    <TableHomePage />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={12}>
                    <LineChartExample />
                </Col>
            </Row>
        </Row>

    );
};

export default HomePage;
