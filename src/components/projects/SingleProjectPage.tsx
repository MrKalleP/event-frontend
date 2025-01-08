
import { Table } from "antd";
import { useParams } from "react-router-dom";
import test_data from "../../utils/testdata.json";

const SingleProjectPage = () => {
    const { id } = useParams();
    const project = test_data.find((p) => p.id === id);

    if (!project) {
        return <p>Project not found</p>;
    }

    const columns = [
        {
            title: "Timestamp", dataIndex: "date", key: "date", defaultSortOrder: 'descend',
        },
        {
            title: "Type", dataIndex: "type", key: "type", defaultSortOrder: 'descend',
        },
        {
            title: "Message", dataIndex: "message", key: "message", defaultSortOrder: 'descend',
        },
    ];

    return (
        <div style={{ padding: "1rem" }}>
            <h1>{project.project}</h1>
            <Table
                dataSource={project.data
                }
                columns={columns}
                rowKey="date"
                pagination={{ pageSize: 10 }}
            />
        </div>
    );
};

export default SingleProjectPage;
