import { Row } from "antd";
import { useParams } from "react-router-dom";
import LogDetailsModal from "../../utils/LogDetailsModal";
import useModal from "../../utils/ModalFunctionality";
import { useProjects } from "../../hooks/useFetchAllProjects";
import { useAllLogs } from "../../hooks/useFetchAllLogs";
import { Log, Project, } from "../../utils/Interface";
import { ProjectLogsTable } from "./ProjectLogsTable";
import ProjectDetails from "./ProjectDetails";


const SingleProjectPage = () => {
    const { projectName } = useParams();
    const { data: descriptionProject }: { data: Project[] } = useProjects();
    const { data: allLogs }: { data: Log[] } = useAllLogs();
    const { selectedLog, isModalOpen, showModal, handleModalClose } = useModal();

    if (!descriptionProject || descriptionProject.length === 0 || !allLogs || allLogs.length === 0) {
        return <p>Loading or no projects available.</p>;
    }

    const filteredProject = descriptionProject.find(
        (proj) => proj.name.toLowerCase() === projectName?.toLowerCase()
    );
    console.log(filteredProject);

    if (!filteredProject) {
        return <p>Project not found.</p>;
    }

    const projectsLogsId = allLogs.filter((log) => filteredProject.logs.includes(log.id));


    return (
        <>
            <Row gutter={[24, 2]} align="middle" justify="center" style={{ padding: "0 1rem", height: "100vh" }}>
                <ProjectDetails project={filteredProject} />
                <ProjectLogsTable logs={projectsLogsId} showModal={showModal} />
            </Row>

            <LogDetailsModal log={selectedLog} isOpen={isModalOpen} onClose={handleModalClose} />
        </>
    );
};

export default SingleProjectPage;