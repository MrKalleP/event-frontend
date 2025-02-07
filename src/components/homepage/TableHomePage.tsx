import { Col, Row, Table } from 'antd';
import ProjectColumns from "../projects/ProjectColumns";
import LogDetailsModal from "../../utils/LogDetailsModal";
import useModal from "../../utils/ModalFunctionality";
import { useAllLogs } from '../../hooks/useFetchAllLogs';
import { Log } from '../../utils/Interface';


const TableHomePage = () => {

    const { data: allLogs } = useAllLogs()
    const { selectedLog, isModalOpen, showModal, handleModalClose } = useModal();

    return (
        <div className="containerHome">
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Table<Log>
                        columns={ProjectColumns}
                        dataSource={allLogs}
                        onRow={(record) => ({
                            onClick: () => {
                                showModal(record);
                            },
                        })}
                        pagination={{
                            position: ["bottomCenter"],
                        }}
                        showSorterTooltip={{ title: 'Click to sort' }}
                        rowKey={(record) => String(record.id)}
                        scroll={{ x: 800 }}
                        style={{
                            background: "white",
                            color: "#2A2A2A",
                            borderRadius: ".5rem",
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