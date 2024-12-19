import React from 'react';
import { Table, Tag } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import test_data from "../utils/testdata.json";


interface DataType {
    type: Type;
    id: React.id;
    project: string;
    date: string;
    message: string;
    crashed: string;
}

const project_columns: TableColumnsType<DataType> = [
    {
        title: 'Project',
        dataIndex: 'project',
        filters: Array.from(
            new Set(test_data.map((item) => item.project))
        ).map((project) => ({
            text: project,
            value: project,
        })),
        onFilter: (value, record) => record.project.includes(value as string),
        sorter: (a, b) => a.project.localeCompare(b.project),
    },
    {
        title: 'Date',
        dataIndex: 'date',
        defaultSortOrder: 'ascend',
        sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    },
    {
        title: 'message',
        dataIndex: 'message',
        defaultSortOrder: 'ascend',
    },

    {
        title: 'type',
        dataIndex: 'type',
        filters: [
            {
                text: 'Info',
                value: 'info',
            },
            {
                text: 'Warning',
                value: 'warning',
            },
            {
                text: 'Error',
                value: 'error',
            },
        ],
        onFilter: (value, record) => record.type.includes(value as string),
        render: (type: string, record: { crashed: string }) => {
            const colorMap: Record<string, string> = {
                info: "#8F91FF",
                error: "#FA8D8F",
                warning: "#FFF266",
                crashed: "#CD0205"
            };

            const color = record.crashed === "true" ? "#f50" : colorMap[type] || "default";

            return <Tag color={color}>{type}</Tag>;
        },
    },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const TableHomePage = () => (
    <Table<DataType>
        columns={project_columns}
        dataSource={test_data}
        onChange={onChange}
        showSorterTooltip={{ title: 'Click to sort' }}
        rowKey="id"

    />
);

export default TableHomePage;