import { Col, Row, Table } from "antd";
import { useParams } from "react-router-dom";
import test_data from "../../utils/testdata.json";
import { ResponsiveContainer } from "recharts";
import { FieldTimeOutlined, IdcardOutlined, MessageOutlined, ProjectOutlined } from "@ant-design/icons";

const isWithinLast24Hours = (date: number | Date, now: number | Date) => {
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    return date >= oneDayAgo && date <= now;
};

const SingleProjectPage = () => {
    const { id } = useParams();
    const project = test_data.find((p) => String(p.id) === id);

    if (!project) {
        console.log("Project not found");
        return <p>Project not found</p>;
    }

    const now: Date = new Date();

    const filteredData = test_data
        ?.filter((log: { project: string; date: string | number | Date; type: string; }) => {
            const dateObj = new Date(log.date);
            return (
                log.project === project.project &&
                log.type === "error" &&
                isWithinLast24Hours(dateObj, now)
            );
        }) || [];

    const columns = [
        {
            title: "Timestamp",
            dataIndex: "date",
            key: "date",
            sorter: (a: { date: string | number | Date }, b: { date: string | number | Date }) =>
                new Date(a.date).getTime() - new Date(b.date).getTime(),
            defaultSortOrder: "descend",
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
        },
        {
            title: "Message",
            dataIndex: "message",
            key: "message",
            render: (message: string, record: any) => {
                console.log("Record data:", record);
                return (
                    <a
                        href={`/message/${record.date}`}
                        onClick={(e) => {
                            e.preventDefault();
                            console.log("Clicked message:", message);
                        }}
                    >
                        {message}
                    </a>
                );
            },
        },
    ];

    return (
        <ResponsiveContainer>
            <Row gutter={[8, 17]} style={{ padding: "1rem" }}>
                <h1 style={{ width: "100%", textAlign: "center", color: "black", fontSize: "4REM" }}>{project.project}</h1>
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
                    <h3 style={{ fontSize: "2rem", textAlign: "center", padding: "1rem" }}>Project Details</h3>
                    <Col style={{ padding: "1rem" }}>
                        <p><strong><IdcardOutlined style={{ padding: ".5rem" }} />Project ID:</strong> {project.id}</p>
                        <p><strong><ProjectOutlined style={{ padding: ".5rem" }} />Project Name:</strong> {project.project}</p>
                        <p><strong><MessageOutlined style={{ padding: ".5rem" }} />Message:</strong> {project.message}</p>
                        <p><strong><FieldTimeOutlined style={{ padding: ".5rem" }} />Last Updated:</strong> {new Date(project.date).toLocaleString()}</p>

                    </Col>
                </Col>

                <Col xs={24} sm={24} md={24} lg={24}>
                    <Table
                        dataSource={filteredData}
                        columns={columns}
                        rowKey={(record) => String(record.date)}
                        pagination={{ pageSize: 10 }}
                    />

                </Col>

            </Row>

        </ResponsiveContainer>
    );
};

export default SingleProjectPage;
