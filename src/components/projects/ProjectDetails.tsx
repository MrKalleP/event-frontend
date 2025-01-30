import { Col } from "antd";
import { Project } from "../../utils/Interface";

const ProjectDetails = ({ project }: { project: Project, description: string }) => {
    return (
        <Col style={{ backgroundColor: "#F2F2F2", borderRadius: ".5rem" }} xs={24} sm={24} md={24} lg={24}>
            <h3 className="titleProjectSingle">{project.name}</h3>
            <Col key={project.id}>
                <p className="PTagProjectSingle">{project.description}</p>
            </Col>
        </Col>
    );
};

export default ProjectDetails