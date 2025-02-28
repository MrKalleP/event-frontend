import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
import LogDetailsModal from "../../utils/LogDetailsModal";
import useModal from "../../utils/ModalFunctionality";
import { Log, Project } from "../../utils/Interface";
import { ProjectLogsTable } from "./ProjectLogsTable";
import ProjectDetails from "./ProjectDetails";
import { useEffect, useState } from "react";
import { ProjectById } from "../../utils/fetchingFromApi/FetchProjectById";
import { ProjectLogsById } from "../../utils/fetchingFromApi/FetchProjectLogsById";
import ProjectLineChart from "./LineChartSinglePPage";

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



    return (
        <>
            <Row gutter={[4, 2]} style={{ height: "100vh", marginInline: "3rem" }}>
                {project?.description && <ProjectDetails project={project} description={project.description} />}

                <Col xs={24} sm={24} md={24} lg={24}>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={24} lg={12}>
                            <ProjectLogsTable logs={logs} showModal={showModal} />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12}>
                            <ProjectLineChart />
                        </Col>
                    </Row>
                </Col>
            </Row>

            <LogDetailsModal log={selectedLog} isOpen={isModalOpen} onClose={handleModalClose} />
        </>
    );
};

export default SingleProjectPage;