import { TableColumnsType } from 'antd';
import { DataType } from "../../utils/Interface";
import formatDate from "../../utils/DateFunction";
import { Tag } from 'antd';

import { Link } from 'react-router-dom';


const ProjectColumns: TableColumnsType<DataType> = [
    {
        title: 'Project',
        dataIndex: 'project',
        onFilter: (value, record) => record.project.includes(value as string),
        render: (text) => (
            <Link to={`/project/${text.toLowerCase()}`} style={{ fontSize: '1rem' }}>
                {text}
            </Link>
        ),
        sorter: (a, b) => a.project.localeCompare(b.project),
    },
    {
        title: 'Date',
        dataIndex: 'date',
        defaultSortOrder: 'descend',
        sorter: (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        render: (date: string) => formatDate(date),
    },
    {
        title: 'Message',
        dataIndex: 'message',
    },
    {
        title: 'Type',
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
        onFilter: (value: string, record: { type: string | string[]; }) => {
            return record.type.includes(value as string);
        },
        sorter: (a: { type: string; }, b: { type: any; }) => a.type.localeCompare(b.type),
        render: (type: string) => {
            const colorMap: Record<string, string> = {
                info: "var(--Info-color-)",
                error: "var(--errors-color-)",
                warning: "var(--Warning-color-)",
                crashed: "var(--Crashed-color-)"
            };
            const backgroundColor = colorMap[type] || "default";

            const textColor = type === "warning" ? "black" : "white";

            return (
                <Tag
                    color={backgroundColor}
                    style={{
                        color: textColor,
                        width: "4.4rem"
                    }
                    } >
                    {type}
                </Tag>
            )
        },
    }
];

export default ProjectColumns;