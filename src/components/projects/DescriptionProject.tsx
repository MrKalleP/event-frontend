
import { Col, Row } from "antd";
import { useState, useEffect } from "react";

const DescriptionProject = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('../src/utils/testdata.json')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    if (!data) {
        return <p>Loading...</p>;
    }



    return (
        <Row align={"middle"} justify={"center"}>
            <Col style={{
                textAlign: "left",
                fontSize: "1.4rem",
                marginBottom: ".1rem",
            }}>
                {Object.entries(data.projects).map(([key, project]) => (
                    <div key={key}>
                        <h2>{key}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </Col>
        </Row>
    );
};

export default DescriptionProject;