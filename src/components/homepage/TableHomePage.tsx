import { Col, Row, Table } from 'antd';
import type { TableProps } from 'antd';
import { DataType, LogBody } from "../../utils/Interface";
import ProjectColumns from "../projects/ProjectColumns";
import LogDetailsModal from "../../utils/LogDetailsModal";
import useModal from "../../utils/ModalFunctionality";

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const TableHomePage = ({ data }: { data: LogBody[] }) => {
    const { selectedLog, isModalOpen, showModal, handleModalClose } = useModal();

    return (
        <div className="containerHome">
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
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
                        scroll={{ x: 800 }}
                        style={{
                            background: "white",
                            color: "#2A2A2A",
                            borderRadius: ".5rem"
                        }}
                    />
                </Col>
                <Col xs={24} sm={24} md={24} lg={6} xl={8}>
                    <LogDetailsModal log={selectedLog} isOpen={isModalOpen} onClose={handleModalClose} />
                </Col>
            </Row>
        </div>
    );
};

export default TableHomePage;