import { Row } from "antd";
import { Navigate, useParams } from "react-router-dom";
import LogDetailsModal from "../../utils/LogDetailsModal";
import useModal from "../../utils/ModalFunctionality";
import { useProjects } from "../../hooks/useFetchAllProjects";
import { useAllLogs } from "../../hooks/useFetchAllLogs";
import { Log, Project, } from "../../utils/Interface";
import { ProjectLogsTable } from "./ProjectLogsTable";
import ProjectDetails from "./ProjectDetails";


const SingleProjectPage = () => {
    const { projectName } = useParams();
    const { dataFromFetchProjects: descriptionProject }: { dataFromFetchProjects: Project[] } = useProjects();
    const { data: allLogs }: { data: Log[] } = useAllLogs();
    const { selectedLog, isModalOpen, showModal, handleModalClose } = useModal();

    if (!descriptionProject?.length || !allLogs?.length) {
        return <p>Loading or no projects available.</p>;
    }

    const filteredProject = descriptionProject.find(
        (proj) => proj.name.toLowerCase() === projectName?.toLowerCase()
    );

    if (!filteredProject) {
        return <p>Project not found.</p>;
    }

    const projectsLogsId = filteredProject.logs ? allLogs.filter((log) => filteredProject.logs.includes(log.id))
        : [];


    return (
        <>
            <Row gutter={[24, 2]} align="middle" justify="center" style={{ padding: "0 1rem", height: "100vh" }}>
                {filteredProject && <ProjectDetails project={filteredProject} description={filteredProject.description} />}
                <ProjectLogsTable logs={projectsLogsId} showModal={showModal} />
            </Row>

            <LogDetailsModal log={selectedLog} isOpen={isModalOpen} onClose={handleModalClose} />
        </>
    );
};

export default SingleProjectPage;