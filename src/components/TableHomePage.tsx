import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import EXAMPLE_DATA from "../utils/testdata.json";

interface DataType {
    type: Type;
    key: React.Key;
    project: string;
    date: string;
    message: string;
}

const project_columns: TableColumnsType<DataType> = [
    {
        title: 'project',
        dataIndex: 'project',
        filters: [
            {
                text: 'John Brown',
                value: 'John Brown',
            },
            {
                text: 'Joe Black',
                value: 'Joe Black',
            },
            {
                text: 'Jim Green',
                value: 'Jim Green',
            },
        ],
        onFilter: (value, record) => record.project.includes(value as string),
        sorter: (a, b) => a.project.localeCompare(b.project),
        sortDirections: ['ascend', 'descend'],
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
    },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const TableHomePage = () => (
    <Table<DataType>
        columns={project_columns}
        dataSource={EXAMPLE_DATA}
        onChange={onChange}
        showSorterTooltip={{ title: 'Click to sort' }}
        rowKey="id"

    />
);

export default TableHomePage;