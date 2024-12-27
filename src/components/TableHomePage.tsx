import React from 'react';
import { Table, Tag } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import test_data from "../utils/testdata.json";



interface DataType {
    type: string;
    id: React.Key;
    project: string;
    date: string;
    message: string;
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
        defaultSortOrder: 'descend',
        sorter: (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
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
            {
                text: 'Crashed',
                value: 'crashed',
            },
        ],
        onFilter: (value, record) => {
            return record.type.includes(value as string);
        },
        sorter: (a, b) => a.type.localeCompare(b.type),
        render: (type: string) => {
            const colorMap: Record<string, string> = {
                info: "#0022FF",
                error: "#FF0000",
                warning: "#FFFF00",
                crashed: "#FF00E1"
            };
            const backgroundColor = colorMap[type] || "default";

            return <Tag color={backgroundColor} style={{ color: "black" }}>{type}</Tag>;
        },
    }
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
        style={{ background: "white", color: "#2A2A2A", borderRadius: ".5rem" }}
    />
);

export default TableHomePage;