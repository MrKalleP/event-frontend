export interface DataType {
    type: string;
    id: React.Key;
    project: string;
    date: string;
    message: string;
}

export interface ProcessedDataType {
    date: string;
    info: string;
    warning: string;
    error: string;
    crashed: string;
}

export interface Project {
    id: string;
    project: string;
    type: string;
    children: {
        name: any; id: string; project: string; type: string; date: string
    }[];
}

export interface LogDetailsModalProps {
    log: DataType | null;
    isOpen: boolean;
    onClose: () => void;
}

export interface LogBody {
    id: string;
    project: string;
    date: string;
    type: string;
    message: string;
}