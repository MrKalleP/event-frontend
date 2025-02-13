import { Col, Row } from "antd";
import { MessageOutlined } from '@ant-design/icons';

const NotFound = () => {
    return (
        <Row
            justify="center"
            align="middle"
            style={{
                backgroundColor: "#002140",
                borderRadius: ".5rem",
                color: "white",
                margin: ".5rem",
                padding: ".3rem",
                minHeight: "100vh"
            }}>
            <Col> <h1 style={{ fontSize: "6rem" }}><MessageOutlined /> 404 Page Not Found</h1> </Col>
        </Row>
    )
};

export default NotFound;