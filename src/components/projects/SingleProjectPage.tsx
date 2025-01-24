import { Table, Row, Col, Tag } from "antd";
import { useParams } from "react-router-dom";
import DescriptionProject from "./DescriptionProject";
import LogDetailsModal from "../../utils/LogDetailsModal";
import useModal from "../../utils/ModalFunctionality";
import { useProjects } from "../../hooks/useFetchAllProjects";
import formatDate from "../../utils/DateFunction";
import { useAllLogs } from "../../hooks/useFetchAllLogs";


const SingleProjectPage = () => {
    const { projectName } = useParams();
    const { data: descriptionProject = [] } = useProjects();
    const { data: allLogs = [] } = useAllLogs();
    const { selectedLog, isModalOpen, showModal, handleModalClose } = useModal();

    console.log(descriptionProject);
    console.log(allLogs);
    console.log(projectName);



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

    const projectsLogsId = allLogs.filter((log) =>
        filteredProject.logs.includes(String(log.id))
    );
    console.log(projectsLogsId);



    const columns = [
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
            sorter: (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
            render: (date) => formatDate(date),
            defaultSortOrder: "descend",
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
            filters: [
                { text: "Info", value: "info" },
                { text: "Warning", value: "warning" },
                { text: "Error", value: "error" },
                { text: "Crashed", value: "crashed" },
            ],
            onFilter: (value, record) => record.type.includes(value),
            sorter: (a, b) => a.type.localeCompare(b.type),
            render: (type) => {
                const colorMap = {
                    info: "var(--Info-color-)",
                    error: "var(--errors-color-)",
                    warning: "var(--Warning-color-)",
                    crashed: "var(--Crashed-color-)",
                };
                const backgroundColor = colorMap[type as keyof typeof colorMap] || "default";
                const textColor = type === "warning" ? "black" : "white";
                return (
                    <Tag color={backgroundColor} style={{ color: textColor, width: "4.4rem" }}>
                        {type}
                    </Tag>
                );
            },
        },
        {
            title: "Message",
            dataIndex: "message",
            key: "message",
            render: (message, record) => (
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        showModal(record);
                    }}
                >
                    {message}
                </a>
            ),
        },
    ];

    return (
        <>
            <Row gutter={[24, 2]} align="middle" justify="center" style={{ padding: "0 1rem", height: "100vh" }}>
                <Col style={{ backgroundColor: "#F2F2F2", borderRadius: ".5rem" }} xs={24} sm={24} md={24} lg={24}>
                    <h3 className="titleProjectSingle">{filteredProject.name}</h3>
                    <Col>
                        <DescriptionProject description={filteredProject} />
                    </Col>
                </Col>

                <Col xs={24} sm={24} md={24} lg={16} className="tableProjectPage">
                    <Table
                        dataSource={projectsLogsId}
                        columns={columns}
                        onRow={(record) => ({
                            onClick: () => {
                                showModal(record);
                            },
                        })}
                        rowKey={(record) => String(record.id)}
                        pagination={{ pageSize: 10 }}
                    />
                </Col>
            </Row>

            <LogDetailsModal log={selectedLog || {}} isOpen={isModalOpen} onClose={handleModalClose} />
        </>
    );
};

export default SingleProjectPage;
