import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
import LogDetailsModal from "../../utils/LogDetailsModal";
import useModal from "../../utils/ModalFunctionality";
import { Project, Log } from "../../utils/Interface";
import { ProjectLogsTable } from "./ProjectLogsTable";
import ProjectDetails from "./ProjectDetails";
import { useState, useEffect } from "react";
import { ProjectById } from "../../utils/fetchingFromApi/FetchProjectById";
import { ProjectLogsById } from "../../utils/fetchingFromApi/FetchProjectLogsById";
import ProjectLineChart from "./LineChartSingleProjectPage";
import LogTimeLine from "./TimeLine";

const SingleProjectPage = () => {
    const { projectId } = useParams<{ projectId: string }>();

    const { selectedLog, isModalOpen, showModal, handleModalClose } = useModal();
    const [project, setProject] = useState<Project | null>(null);
    const [allLogs, setAllLogs] = useState<Log[]>([]);

    // Hämtar projektinformation
    useEffect(() => {
        const fetchProject = async () => {
            if (!projectId) return;
            try {
                const fetchedProject = await ProjectById(projectId);
                setProject(fetchedProject);
            } catch (error) {
                console.error("Error fetching project:", error);
            }
        };

        fetchProject();
    }, [projectId]);

    // Hämtar alla loggar för projektet
    useEffect(() => {
        const fetchLogs = async () => {
            if (!projectId) return;
            try {
                const fetchedLogs = await ProjectLogsById(projectId, 1, 1000); // Hämtar alla loggar
                setAllLogs(fetchedLogs.logs);
            } catch (error) {
                console.error("Error fetching logs:", error);
            }
        };

        fetchLogs();
    }, [projectId]);

    return (
        <main style={{ height: "100%" }}>
            <Row gutter={[4, 2]} style={{ height: "100%", marginInline: "3rem" }}>
                {project?.description && (
                    <ProjectDetails project={project} description={project.description} />
                )}
                <Col xs={24} sm={24} md={24} lg={24} style={{ marginTop: "4rem" }}>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} sm={24} md={24} lg={12}>
                                    <ProjectLogsTable projectId={projectId as string} showModal={showModal} />
                                </Col>

                                <Col xs={24} sm={24} md={24} lg={12}>
                                    <ProjectLineChart allLogs={allLogs} projectId={projectId as string} />
                                </Col>

                                <Col xs={24} sm={24} md={24} lg={12}>
                                    {projectId && <LogTimeLine projectId={projectId} />}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <LogDetailsModal log={selectedLog} isOpen={isModalOpen} onClose={handleModalClose} />
        </main>
    );
};

export default SingleProjectPage;



