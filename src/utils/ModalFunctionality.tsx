import { useState } from "react";
import { Log } from "./Interface";


function useModal() {
    const [selectedLog, setSelectedLog] = useState<Log | undefined>(undefined);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = (record: Log) => {
        setSelectedLog(record);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedLog(undefined);
    };

    return { selectedLog, isModalOpen, showModal, handleModalClose };
}

export default useModal;