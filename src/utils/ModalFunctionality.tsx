import { useState } from "react";
import { DataType } from "../utils/Interface";

function UseModal() {
    const [selectedLog, setSelectedLog] = useState<DataType | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = (record: DataType) => {
        setSelectedLog(record);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedLog(null);
    };

    return { selectedLog, isModalOpen, showModal, handleModalClose };
}

export default UseModal;