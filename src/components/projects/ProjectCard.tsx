import { useState, useEffect } from "react";
import { Card, Statistic } from "antd";
import { Link } from "react-router-dom";
import { SmileTwoTone } from "@ant-design/icons";
import ProjectBarChart from "../projects/BarChart";
import { Project } from "../../utils/Interface";
import { fetchCrashes } from "../../utils/fetchingFromApi/FetchCrashes";

const calculateCrashFreePercentage = (totalLogs: number, crashed: number) => {
    if (totalLogs === 0) return "100.00";
    return (((totalLogs - crashed) / totalLogs) * 100).toFixed(2);
};

const ProjectCard = ({ project }: { project: Project }) => {

    const { name, logs, id } = project;
    const totalLogs = logs.length;
    const [crashes, setCrashes] = useState<number>(0);

    useEffect(() => {
        const fetchCrashData = async () => {
            try {
                const crashCount = await fetchCrashes(id);
                setCrashes(Number(crashCount.length) || 0);
            } catch {
                console.log("Error fetching crashes:");
                setCrashes(0);
            }
        };
        fetchCrashData();
    }, [id]);

    const crashFreePercentage = totalLogs > 0 ? calculateCrashFreePercentage(totalLogs, crashes) : "100.00";

    return (
        <Card
            title={<Link to={`/project/${id}`} style={{ fontSize: "1.5rem", cursor: "pointer" }}>{name}</Link>}
            hoverable
            style={{ fontSize: ".8rem", padding: ".5rem", cursor: "default" }}
        >
            <ProjectBarChart projectId={id} type={"error"} />

            <h3 style={{ fontSize: "1.3rem", borderTop: "2px solid black", padding: ".7rem" }}>
                {`It is ${crashes} crashes of total: ${totalLogs} logs`}
            </h3>

            <Statistic
                title="Crash Free Sessions"
                value={crashFreePercentage}
                suffix="%"
                prefix={<SmileTwoTone />}
                style={{ fontSize: "1.5rem" }}
            />
        </Card>
    );
};

export default ProjectCard;