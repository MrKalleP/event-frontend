
import { Col, Row } from "antd";

const DescriptionProject = ({ data }) => {

    if (!data || !data.projects) {
        return <p>Loading...</p>;
    }

    return (
        <Row align={"middle"} justify={"center"}>
            <Col style={{
                textAlign: "left",
                fontSize: "1.4rem",
                marginBottom: ".1rem",
            }}>
                {Object.entries(data.projects).map(([key, value]) => (
                    <div key={key}>
                        <h2>{key}</h2>
                        <p>{value.description}</p>
                    </div>
                ))}
            </Col>
        </Row>
    );
};

export default DescriptionProject;
