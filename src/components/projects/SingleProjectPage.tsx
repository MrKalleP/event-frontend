import { Table, Row, Col, Tag, } from "antd";
import { useParams } from "react-router-dom";
import formatDate from "../../utils/DateFunction";
import DescriptionProject from "./DescriptionProject";
import test_data from "../../utils/testdata.json";
import LogDetailsModal from "../../utils/LogDetailsModal";
import useModal from "../../utils/ModalFunctionality";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { DataType } from "../../utils/Interface";

const SingleProjectPage = () => {
    const { projectName } = useParams();

    const project = test_data.projects.find((proj) => proj.name.toLowerCase() === projectName?.toLowerCase());

    if (!project) {
        console.log("Project not found");
        return <p>Project not found</p>;
    }

    const { selectedLog, isModalOpen, showModal, handleModalClose } = useModal();

    const filteredData = project.logs;

    const columns = [
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
            sorter: (a: { date: string | number | Date; }, b: { date: string | number | Date; }) => new Date(b.date).getTime() - new Date(a.date).getTime(),
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
            onFilter: (value: any, record: { type: string | any[]; }) => record.type.includes(value),
            sorter: (a: { type: string; }, b: { type: any; }) => a.type.localeCompare(b.type),
            render: (type) => {

                const colorMap = {
                    info: "var(--Info-color-)",
                    error: "var(--errors-color-)",
                    warning: "var(--Warning-color-)",
                    crashed: "var(--Crashed-color-)",
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
            render: (message: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, record: DataType) => (
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
                    <h3 className="titleProjectSingle">
                        {project.name}
                    </h3>
                    <Col>
                        <DescriptionProject />
                    </Col>
                </Col>

                <Col xs={24} sm={24} md={24} lg={16} className="tableProjectPage">
                    <Table
                        dataSource={filteredData}
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

            <LogDetailsModal log={selectedLog} isOpen={isModalOpen} onClose={handleModalClose} />

        </>
    );
};

export default SingleProjectPage;