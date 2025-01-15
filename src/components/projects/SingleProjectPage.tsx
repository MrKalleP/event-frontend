import { Col, Row, Table, Tag, Modal } from "antd";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { FieldTimeOutlined, MessageOutlined, ProjectOutlined } from "@ant-design/icons";
import formatDate from "../../utils/DateFunction";
import { DataType } from "../../utils/Interface";
import { format } from "date-fns";
import { allLogs } from "../homepage/CrashedLoggs";
import DescriptionProject from "./DescriptionProject";


const SingleProjectPage = () => {
    const { projectName } = useParams();
    const project = allLogs.find((p) => String(p.project) === projectName);

    const [selectedProject, setSelectedProject] = useState<DataType | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!project) {
        console.log("Project not found");
        return <p>Project not found</p>;
    }

    const filteredData = allLogs
        .filter((log) => log.project === project.project)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const showModal = (record: DataType) => {
        setSelectedProject(record);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const columns = [
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
            sorter: (a: { date: string | number | Date }, b: { date: string | number | Date }) =>
                new Date(b.date).getTime() - new Date(a.date).getTime(),
            render: (date: string | number | Date) => formatDate(date),
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
            onFilter: (value: any, record: { type: string | any[] }) => record.type.includes(value),
            sorter: (a: { type: string }, b: { type: any }) => a.type.localeCompare(b.type),
            render: (type: string) => {
                const colorMap = {
                    info: "#3A4DCB",
                    error: "#C52E2E",
                    warning: "#FFFF8F",
                    crashed: "#D04CC1",
                };
                const backgroundColor = colorMap[type] || "default";
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
            render: (message: string, record: DataType) => (
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
            <Row gutter={[8, 17]} style={{ padding: "0 1rem 0 1rem", height: "100vh" }}>
                <Col />
                <Col
                    style={{ backgroundColor: "#f5f5f5", borderRadius: ".5rem", padding: "1.5rem" }}
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                >
                    <h3
                        style={{
                            textAlign: "center",
                            fontSize: "4rem",
                            padding: ".6rem",
                            marginBottom: "4rem",
                        }}
                    >
                        {project.project}
                    </h3>
                    < DescriptionProject />
                </Col>

                <Col xs={24} sm={24} md={24} lg={24}>
                    <Table
                        dataSource={filteredData}
                        columns={columns}
                        rowKey={(record) => String(record.id)}
                        pagination={{ pageSize: 10 }}
                    />
                </Col>
            </Row>

            <Modal title="Project Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{ padding: "1rem", textAlign: "center", fontSize: "1rem" }}>
                {selectedProject && (
                    <Col style={{ textAlign: "left", padding: "1rem" }}>
                        <p>
                            <strong>
                                <ProjectOutlined style={{ marginRight: ".4rem" }} />
                                Project Name:
                            </strong>{" "}
                            {selectedProject.project}
                        </p>
                        <p>
                            <strong>
                                <MessageOutlined style={{ marginRight: ".4rem" }} />
                                Message:
                            </strong>{" "}
                            {selectedProject.message}
                        </p>
                        <p>
                            <strong>
                                <FieldTimeOutlined style={{ marginRight: ".4rem" }} />
                                Last Updated:
                            </strong>{" "}
                            {format(new Date(selectedProject.date), "yyyy-MM-dd")}{" "}
                            {format(new Date(selectedProject.date), "HH:mm")}
                        </p>
                    </Col>
                )}
            </Modal>
        </>
    );
};

export default SingleProjectPage;