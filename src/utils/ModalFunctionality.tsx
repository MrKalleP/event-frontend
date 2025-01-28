import { useState } from "react";
import { Project } from "../utils/Interface";

function useModal() {
    const [selectedLog, setSelectedLog] = useState<Project[] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = (record: Project[]) => {
        setSelectedLog(record);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedLog(null);
    };

    return { selectedLog, isModalOpen, showModal, handleModalClose };
}

export default useModal;