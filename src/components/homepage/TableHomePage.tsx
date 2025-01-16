import { Table } from 'antd';
import type { TableProps } from 'antd';
import { DataType } from "../../utils/Interface";
import ProjectColumns from "../projects/ProjectColumns"
import LogDetailsModal from "../../utils/LogDetailsModal";
import useModal from "../../utils/modalFunctionality";


const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const TableHomePage = ({ data }) => {
    const { selectedLog, isModalOpen, showModal, handleModalClose } = useModal();

    return (
        <>
            <Table<DataType>
                columns={ProjectColumns}
                dataSource={data}
                onRow={(record) => ({
                    onClick: () => {
                        showModal(record);
                    },
                })}
                onChange={onChange}
                showSorterTooltip={{ title: 'Click to sort' }}
                rowKey={(record) => String(record.id)}
                style={{ background: "white", color: "#2A2A2A", borderRadius: ".5rem" }} />
            <LogDetailsModal log={selectedLog} isOpen={isModalOpen} onClose={handleModalClose} />
        </>
    );

};

export default TableHomePage;