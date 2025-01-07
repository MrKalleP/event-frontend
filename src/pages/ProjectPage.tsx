
import { Row, Col } from "antd";
import SearchProject from "../components/SearchProject";


const ProjectPage = () => {
    return <Row gutter={[8, 17]} justify="center" align="middle" style={{ backgroundColor: "#002140", borderRadius: ".5rem", color: "white", margin: ".5rem", padding: ".3rem" }}>

        <Col xs={24} sm={24} md={24} lg={24}>
            <SearchProject />
        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>

        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>

        </Col>
        <Col xs={24} sm={12} md={12} lg={6}>

        </Col>
    </Row>
};

export default ProjectPage;