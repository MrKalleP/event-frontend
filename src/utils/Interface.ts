
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
    project: string;
    type: string;
    log: Logs[];
}
export interface Logs {
    id: string;
    date: string;
    message: string;
    name: string;
    type: string;
}

export interface LogDetailsModalProps {
    log: Logs;
    isOpen: boolean;
    onClose: () => void;
}


export interface DecriptionForDescription {
    id: number,
    description: string,
    logs: string,
    name: string,
}