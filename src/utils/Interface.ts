
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
    description: string;
    id: string;
    name: string;
    type: string;
    logs: Logs[];
    date: string;
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
    id: string,
    description: string,
    logs: string,
    name: string,
}

export interface ProjectBarChartsProps {
    projectId: string;
}

export interface barChartProps {
    hour: string;
    errors: number
}