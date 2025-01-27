import { Col, Row } from "antd";

const DescriptionProject = ({ description }: any) => {

    return (
        <Row align="middle" justify="center">
            <Col style={{ textAlign: "left", marginBottom: "-10.1rem" }}>
                <div key={description} className="PTagProjectSingle">
                    <p>{description}</p>
                </div>
            </Col>
        </Row>
    );
};

export default DescriptionProject;