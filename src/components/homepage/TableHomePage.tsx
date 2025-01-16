import { Table } from 'antd';
import type { TableProps } from 'antd';
import { DataType } from "../../utils/Interface";
import ProjectColumns from "../projects/ProjectColumns"


const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const TableHomePage = ({ data }) => {



    return (
        <Table<DataType>
            columns={ProjectColumns}
            dataSource={data}
            onChange={onChange}
            showSorterTooltip={{ title: 'Click to sort' }}
            rowKey="id"
            style={{ background: "white", color: "#2A2A2A", borderRadius: ".5rem" }}
        />
    );
};

export default TableHomePage;