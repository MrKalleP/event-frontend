export interface DataType {
    name: any;
    logs: any;
    type: string;
    id: string;
    project: string;
    date: "date";
    message: string;
}

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
    children: {
        name: string; id: string; project: string; type: string; date: string
    }[];
}

export interface LogDetailsModalProps {
    log: DataType;
    isOpen: boolean;
    onClose: () => void;
}


export interface DecriptionForDescription {
    id: number,
    description: string,
    logs: string,
    name: string,
}