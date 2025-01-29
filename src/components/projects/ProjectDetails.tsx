import { Col } from "antd";
import { Project } from "../../utils/Interface";
import DescriptionProject from "./DescriptionProject";

const ProjectDetails = ({ project }: { project: Project }) => {
    return (
        <Col style={{ backgroundColor: "#F2F2F2", borderRadius: ".5rem" }} xs={24} sm={24} md={24} lg={24}>
            <h3 className="titleProjectSingle">{project.name}</h3>
            <Col>
                <DescriptionProject description={project.description} />
            </Col>
        </Col>
    );
};

export default ProjectDetails