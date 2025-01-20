import { Col, Row } from "antd";

const DescriptionProject = ({ data }) => {

    if (!data) {
        return <p>Loading...</p>;
    }

    if (typeof data === "string") {
        return (
            <Row align={"middle"} justify={"center"}>
                <Col style={{
                    textAlign: "left",
                    marginBottom: "-10.1rem",
                }}>
                    <p className="PTagProjectSingle">{data}</p>
                </Col>
            </Row>
        );
    }


    if (typeof data === "object") {
        return (
            <Row align={"middle"} justify={"center"}>
                <Col>
                    {Object.entries(data).map(([key, value]) => (
                        <div key={key}>
                            <h2 >{key}</h2>
                            <p>{value}</p>
                        </div>
                    ))}
                </Col>
            </Row>
        );
    }

    return <p>Invalid data format</p>;
};

export default DescriptionProject;