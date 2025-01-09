import { Table } from "antd";
import { useParams } from "react-router-dom";
import test_data from "../../utils/testdata.json";

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

    const now: number | Date = new Date();

    const filteredData = test_data?.filter((log: { date: string | number | Date; type: string; }) => {
        const dateObj = new Date(log.date);
        return log.type === "error" && isWithinLast24Hours(dateObj, now);
    }) || [];

    console.log("Filtered data:", filteredData);

    const columns = [
        {
            title: "Timestamp",
            dataIndex: "date",
            key: "date",
            sorter: (a: { date: string | number | Date; }, b: { date: string | number | Date; }) => new Date(a.date) - new Date(b.date),
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
        },
    ];

    return (
        <div style={{ padding: "1rem" }}>
            <h1>{project.project}</h1>
            <Table
                dataSource={filteredData}
                columns={columns}
                rowKey={(record) => `${record.date}-${Math.random()}`} // Unique key
                pagination={{ pageSize: 10 }}
            />
        </div>
    );
};

export default SingleProjectPage;