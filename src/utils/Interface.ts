
export interface ProjectBarChartsProps {
    projectId: string;
}

export interface barChartProps {
    hour: string;
    errors: number
}

export interface Log {
    date: string;
    id: string;
    message: string;
    project: string;
    type: string;
}

export interface LogDetailsModalProps {
    log?: Log;
    isOpen: boolean;
    onClose: () => void;
}

export interface ProjectProjectPage {
    id: string;
    description: string;
    logs: string[];
    name: string;
}

export interface preProcessDataType {
    date: string;
    info: number;
    warning: number;
    error: number;
    crashed: number;
}



