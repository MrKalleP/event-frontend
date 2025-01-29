import { Col, Table, TableColumnsType, Tag } from "antd";
import { Log } from "../../utils/Interface";
import { SortOrder } from "antd/es/table/interface";
import formatDate from "../../utils/DateFunction";

export const ProjectLogsTable = ({ logs, showModal }: { logs: Log[], showModal: (log: Log) => void }) => {
    const columns: TableColumnsType<Log> = [
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
            sorter: (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
            render: (date: string) => formatDate(date),
            defaultSortOrder: "descend" as SortOrder,
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
            onFilter: (value, record) => record.type.includes(value as string),
            sorter: (a, b) => a.type.localeCompare(b.type),
            render: (type?: string) => {
                const colorMap = {
                    info: "var(--Info-color-)",
                    error: "var(--errors-color-)",
                    warning: "var(--Warning-color-)",
                    crashed: "var(--Crashed-color-)",
                };

                return (
                    <Tag color={colorMap[type as keyof typeof colorMap] || "default"} style={{ color: type === "warning" ? "black" : "white" }}>
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
                <a href="#" onClick={(e) => { e.preventDefault(); showModal(record); }}>
                    {message}
                </a>
            ),
        },
    ];

    return (
        <Col xs={24} sm={24} md={24} lg={16} className="tableProjectPage">
            <Table<Log>
                dataSource={logs}
                columns={columns}
                onRow={(record) => ({
                    onClick: () => showModal(record),
                })}
                rowKey={(record) => String(record.id)}
                pagination={{ pageSize: 10 }}
            />
        </Col>
    );
};