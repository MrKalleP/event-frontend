import { Row } from "antd";
import { useParams } from "react-router-dom";
import LogDetailsModal from "../../utils/LogDetailsModal";
import useModal from "../../utils/ModalFunctionality";
import { Log, Project } from "../../utils/Interface";
import { ProjectLogsTable } from "./ProjectLogsTable";
import ProjectDetails from "./ProjectDetails";
import { useEffect, useState } from "react";
import { ProjectById } from "../../utils/fetchingFromApi/FetchProjectById";
import { ProjectLogsById } from "../../utils/fetchingFromApi/FetchProjectLogsById";

const SingleProjectPage = () => {
    const { projectId } = useParams();
    const { selectedLog, isModalOpen, showModal, handleModalClose } = useModal();
    const [project, setProject] = useState<Project | null>(null);
    const [logs, setLogs] = useState<Log[]>([]);

    useEffect(() => {
        const fetchProjectData = async () => {
            if (!projectId) return;

            try {
                const [fetchedProject, fetchedLogs] = await Promise.all([
                    ProjectById(projectId),
                    ProjectLogsById(projectId)
                ]);

                setProject(fetchedProject);
                setLogs(fetchedLogs || []);
            } catch (error) {
                console.error("Error fetching project or logs:", error);
            }
        };

        fetchProjectData();
    }, [projectId]);
    console.log(project);
    console.log(logs);


    return (
        <>
            <Row gutter={[24, 2]} align="middle" justify="center" style={{ padding: "0 1rem", height: "100vh" }}>
                {project?.description && <ProjectDetails project={project} description={project.description} />}
                <ProjectLogsTable logs={logs} showModal={showModal} />
            </Row>

            <LogDetailsModal log={selectedLog} isOpen={isModalOpen} onClose={handleModalClose} />
        </>
    );
};

export default SingleProjectPage;