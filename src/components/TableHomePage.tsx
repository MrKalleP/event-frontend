import React, { useState } from 'react';
import { Radio, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

type ColumnsType<T extends object> = TableProps<T>['columns'];
type TablePagination<T extends object> = NonNullable<Exclude<TableProps<T>['pagination'], boolean>>;
type TablePaginationPosition<T extends object> = NonNullable<
    TablePagination<T>['position']
>[number];

interface DataType {
    key: string;
    project: string;
    date: string;
    type: string[];
    message: string[];
}


const bottomOptions = [
    { label: 'Info', value: 'info' },
    { label: 'Warnings', value: 'warnings' },
    { label: 'Erroes', value: 'errors' },
];

const columns: ColumnsType<DataType> = [
    {
        title: 'project',
        dataIndex: 'project',
        key: 'project',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'message',
        dataIndex: 'message',
        key: 'message',
    },
    {
        title: 'type',
        key: 'type',
        dataIndex: 'type',
        render: (tags: string[]) => (
            <span>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>check {record.project}</a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        project: 'John Brown',
        date: "1943-23-23",
        message: [],
        type: ['Info'],
    },
];

const TableHomePage: React.FC = () => {
    const [top, setTop] = useState<TablePaginationPosition<DataType>>('topLeft');
    const [bottom, setBottom] = useState<TablePaginationPosition<DataType>>('bottomRight');
    return (
        <div>
            <Radio.Group
                style={{ marginBottom: 10 }}
                options={bottomOptions}
                value={bottom}
                onChange={(e) => {
                    setBottom(e.target.value);
                }}
            />
            <Table<DataType>
                columns={columns}
                pagination={{ position: [top, bottom] }}
                dataSource={data}
            />
        </div>
    );
};
export default TableHomePage