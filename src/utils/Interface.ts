export interface DataType {
    type: string;
    id: React.Key;
    project: string;
    date: string;
    message: string;
}

export interface ProcessedDataType {
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
    children: { id: string; project: string; type: string; date: string }[];
}

