import { Row } from "antd";
import { useParams } from "react-router-dom";
import LogDetailsModal from "../../utils/LogDetailsModal";
import useModal from "../../utils/ModalFunctionality";
import { useAllLogs } from "../../hooks/useFetchAllLogs";
import { Log, Project } from "../../utils/Interface";
import { ProjectLogsTable } from "./ProjectLogsTable";
import ProjectDetails from "./ProjectDetails";
import { useEffect, useState } from "react";
import { ProjectById } from "../../utils/fetchingFromApi/FetchProjectById";

const SingleProjectPage = () => {
    const { projectId } = useParams();
    const { data: allLogs }: { data: Log[] } = useAllLogs();
    const { selectedLog, isModalOpen, showModal, handleModalClose } = useModal();
    const [project, setProject] = useState<Project | null>(null);
    console.log(project);

    useEffect(() => {
        console.log(projectId, "hej");

        const fetchProjectByID = async () => {
            if (!projectId) return;
            const fetchedProject = await ProjectById(projectId);
            console.log("Fetched project:", fetchedProject);
            setProject(fetchedProject);
        };
        fetchProjectByID();
    }, [projectId]);


    const projectsLogs = project?.logs ? allLogs.filter((log) => project.logs.includes(log.id)) : [];


    return (
        <>
            <Row gutter={[24, 2]} align="middle" justify="center" style={{ padding: "0 1rem", height: "100vh" }}>
                {project?.description && <ProjectDetails project={project} description={project.description} />}
                <ProjectLogsTable logs={projectsLogs} showModal={showModal} />
            </Row>

            <LogDetailsModal log={selectedLog} isOpen={isModalOpen} onClose={handleModalClose} />
        </>
    );
};

export default SingleProjectPage;