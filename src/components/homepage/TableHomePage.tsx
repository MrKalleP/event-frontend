import { Table } from 'antd';
import type { TableProps } from 'antd';
import { DataType } from "../../utils/Interface";
import ProjectColumns from "../projects/ProjectColumns";
import LogDetailsModal from "../../utils/LogDetailsModal";
import useModal from "../../utils/ModalFunctionality";

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const TableHomePage = ({ data }) => {
    const { selectedLog, isModalOpen, showModal, handleModalClose } = useModal();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "60vh",
                background: "white",
                color: "#2A2A2A",
                borderRadius: ".5rem",
                padding: "1rem",
            }}
        >
            <Table<DataType>
                columns={ProjectColumns}
                dataSource={data}
                onRow={(record) => ({
                    onClick: () => {
                        showModal(record);
                    },
                })}
                onChange={onChange}
                pagination={{
                    position: ["bottomCenter"],
                }}
                showSorterTooltip={{ title: 'Click to sort' }}
                rowKey={(record) => String(record.id)}
                style={{
                    background: "white",
                    color: "#2A2A2A",
                }}
            />
            <LogDetailsModal log={selectedLog} isOpen={isModalOpen} onClose={handleModalClose} />
        </div>
    );
};

export default TableHomePage;