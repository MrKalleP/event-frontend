import { TableColumnsType } from 'antd';
import formatDate from "../../utils/DateFunction";
import { Tag } from 'antd';
import { Log } from '../../utils/Interface';
import ProjectName from '../../utils/fetchingFromApi/ProjectName';

const ProjectColumns: TableColumnsType<Log> = [
    {
        title: 'Project',
        dataIndex: 'projectId',
        render: (projectId: string) => {
            return <ProjectName projectId={projectId} />;
        },
        sorter: (a, b) => a.projectId.localeCompare(b.projectId),
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
        ellipsis: true,
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
        onFilter: (value, record) => record.type.includes(value as string),
        sorter: (a: { type: string; }, b: { type: string; }) => a.type.localeCompare(b.type),
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