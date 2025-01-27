
export interface ProcessedDataType {
    date: "date";
    info: string;
    warning: string;
    error: string;
    crashed: string;
}

export interface preProcessDataType {
    date: string;
    info: number;
    warning: number;
    error: number;
    crashed: number;
}

export interface Project {
    id: string;
    name: string;
    type: string;
    logs: Logs[];
}
export interface Logs {
    id: string;
    date: string;
    message: string;
    name: string;
    type: string;
    logs: Logs[];
}

export interface LogDetailsModalProps {
    logs: Logs[];
    isOpen: boolean;
    onClose: () => void;
}


export interface DecriptionForDescription {
    id: number,
    description: string,
    logs: string,
    name: string,
}