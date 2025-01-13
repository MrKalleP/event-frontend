import { Col, Row, Table, Tag } from "antd";
import { useParams } from "react-router-dom";
import { useState } from "react";
import test_data from "../../utils/testdata.json";
import { ResponsiveContainer } from "recharts";
import { FieldTimeOutlined, IdcardOutlined, MessageOutlined, ProjectOutlined } from "@ant-design/icons";
import Logo from "../../utils/Logo";
import formatDate from "../../utils/DateFunction";
import { DataType } from "../../utils/Interface";

const isWithinLast24Hours = (date: number | Date, now: number | Date) => {
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    return date >= oneDayAgo && date <= now;
};

const SingleProjectPage = () => {
    const { id } = useParams();
    const project = test_data.find((p) => String(p.id) === id);
    const [selectedProject, setSelectedProject] = useState<DataType>(project);

    if (!project) {
        console.log("Project not found");
        return <p>Project not found</p>;
    }

    const now = new Date();

    const filteredData = test_data.filter((log) => {
        const dateObj = new Date(log.date);
        return (
            log.project === project.project &&
            isWithinLast24Hours(dateObj, now) &&
            log.type
        );
    });

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
                    info: "#3A4DCB",
                    error: "#C52E2E",
                    warning: "#FFFF8F",
                    crashed: "#D04CC1",
                };
                const backgroundColor = colorMap[type] || "default";
                const textColor = type === "warning" ? "black" : "white";

                return <Tag color={backgroundColor} style={{ color: textColor, width: "4.4rem" }}>{type}</Tag>;
            },
        },
        {
            title: "Message",
            dataIndex: "message",
            key: "message",
            render: (message, record) => (
                <a
                    href={`/message/${record.id}`}
                    onClick={(e) => {
                        e.preventDefault();
                        setSelectedProject(record);
                    }}
                >
                    {message}
                </a>
            ),
        },
    ];

    return (
        <ResponsiveContainer>
            <Row gutter={[8, 17]} style={{ padding: "2rem" }}>
                <Col style={{ width: "100%", textAlign: "center", color: "black", fontSize: "2.5rem" }}>
                    <h1>{selectedProject.project}<Logo isCollapsed={false} /></h1>
                </Col>
                <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    style={{
                        color: "black",
                        backgroundColor: "#f0f2f5",
                        borderRadius: "4px",
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: "1rem",
                    }}
                >
                    <h3 style={{ fontSize: "2rem", padding: "1.4rem" }}>Project Details</h3>
                    <Col style={{ padding: "1rem" }}>
                        <p><strong><IdcardOutlined style={{ padding: ".5rem" }} />Project ID:</strong> {selectedProject.id}</p>
                        <p><strong><ProjectOutlined style={{ padding: ".5rem" }} />Project Name:</strong> {selectedProject.project}</p>
                        <p><strong><MessageOutlined style={{ padding: ".5rem" }} />Message:</strong> {selectedProject.message}</p>
                        <p><strong><FieldTimeOutlined style={{ padding: ".5rem" }} />Last Updated:</strong> {new Date(selectedProject.date).toLocaleString()}</p>
                    </Col>
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} style={{ overflow: "auto", backgroundColor: "white", borderRadius: ".5rem", padding: ".5rem" }}>
                    <Table
                        dataSource={filteredData}
                        columns={columns}
                        rowKey={(record) => String(record.id)}
                        pagination={{ pageSize: 10 }}
                    />
                </Col>
            </Row>
        </ResponsiveContainer>
    );
};

export default SingleProjectPage;