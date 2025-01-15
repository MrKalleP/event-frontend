import { Table } from 'antd';
import type { TableProps } from 'antd';
import ProjectColumns from '../projects/ProjectColumns';
import { DataType } from "../../utils/Interface";
import { allLogs } from './CrashedLoggs';


const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const TableHomePage = () => (
    <Table<DataType>
        columns={ProjectColumns}
        dataSource={allLogs}
        onChange={onChange}
        showSorterTooltip={{ title: 'Click to sort' }}
        rowKey="id"
        style={{ background: "white", color: "#2A2A2A", borderRadius: ".5rem" }}
    />
);

export default TableHomePage;