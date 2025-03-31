import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
import LogDetailsModal from "../../utils/LogDetailsModal";
import useModal from "../../utils/ModalFunctionality";
import { Log, Project } from "../../utils/Interface";
import { ProjectLogsTable } from "./ProjectLogsTable";
import ProjectDetails from "./ProjectDetails";
import { useEffect, useState } from "react";
import { ProjectById } from "../../utils/fetchingFromApi/FetchProjectById";
import ProjectLineChart from "./LineChartSingleProjectPage";
import LogTimeLine from "./TimeLine";


const SingleProjectPage = () => {

    const { projectId } = useParams();



    const { selectedLog, isModalOpen, showModal, handleModalClose } = useModal();
    const [project, setProject] = useState<Project | null>(null);

    return (
        <main style={{ height: "100%" }}>
            <Row gutter={[4, 2]} style={{ height: "100%", marginInline: "3rem" }}>
                {project?.description && <ProjectDetails project={project} description={project.description} />}
                <Col xs={24} sm={24} md={24} lg={24}
                    style={{ marginTop: "4rem" }}>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Row gutter={[16, 16]}>
                                <Col xs={24} sm={24} md={24} lg={12}>
                                {/* FIXA KALLE! */}
                                {/* <ProjectLogsTable logs={logs} showModal={showModal} /> */}
                                </Col>

                                <Col xs={24} sm={24} md={24} lg={12}>
                                {projectId && (
                                    <LogTimeLine projectId={projectId} />
                                )}
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

/*
  <Col xs={24} sm={24} md={24} lg={12}>
                         {       <ProjectLineChart allLogs={allLogs} projectId={projectId as string} />}
                                </Col>

*/