import { Col, Row } from "antd";
import { useProjects } from "../../hooks/useFetchAllProjects";
import { useParams } from "react-router-dom";
import { DecriptionForDescription } from "../../utils/Interface";

const DescriptionProject = () => {
    const { data: descriptionProject }: { data: DecriptionForDescription[] } = useProjects();
    const { projectName } = useParams();

    const filteredProject = descriptionProject.find((proj) => proj.name.toLowerCase() === projectName?.toLowerCase());

    if (!filteredProject) return <p>Project not found.</p>;

    return (
        <Row align="middle" justify="center">
            <Col style={{ textAlign: "left", marginBottom: "-10.1rem" }}>
                <div key={filteredProject.id} className="PTagProjectSingle">
                    <p>{filteredProject.description}</p>
                </div>
            </Col>
        </Row>
    );
};

export default DescriptionProject;