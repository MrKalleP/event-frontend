import { FC } from 'react';

export interface ProjectBarChartsProps {
    projectId: string;
    type: string;
}

export interface barChartProps {
    hour: string;
    errors: number
}

export interface Log {
    projectId: string;
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

export interface Project {
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


export type projectDataProps = {
    type: string;
    date: string | number | Date;
}

export interface TypesCardHomeProps {
    type: string;
    title: string;
    bgColor: string;
    textColor: string;
    titleColor: string;
    icon: FC;
}

