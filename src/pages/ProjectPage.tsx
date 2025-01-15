import { useState } from "react";
import { Input, Row, Col, Card, Statistic } from "antd";
import { Link } from "react-router-dom";
import { SmileTwoTone } from "@ant-design/icons";
import ProjectBarChart from "../components/projects/BarChart";
import { Project } from "../utils/Interface"
import { allLogs } from "../components/homepage/CrashedLoggs";


const { Search } = Input;

const calculateCrashFreePercentage = (totalLogs: number, crashes: number) => {
    const crashFreeSessions = totalLogs - crashes;
    return ((crashFreeSessions / totalLogs) * 100).toFixed(2);
};


const uniqueProjects = allLogs.reduce<Project[]>((acc, current) => {
    const existingProject = acc.find(item => item.project === current.project);


    if (!existingProject) {
        const { id, project, type, date } = current;
        acc.push({
            id,
            project,
            type,
            children: [{ id, project, type, date }],
        });
    } else {
        const { id, project, type, date } = current;
        existingProject.children.push({ id, project, type, date });
    }

    return acc;
}, []);


const ProjectsPage = () => {

    const [filteredProjects, setFilteredProjects] = useState(uniqueProjects);
    const [serachValue, setSearchValue] = useState("")

    const onSearch = (value: string) => {
        const matches = uniqueProjects.filter((project) =>
            project.project.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredProjects(matches);
        setSearchValue("")
    };
    return (

        <div
            style={{
                minHeight: "100vh",
                background: "#f0f2f5",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
            }}
        >
            <h1 style={{ textAlign: "center", fontSize: "4rem" }}>Project Page</h1>
            <Search
                placeholder="Search for projects by name"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                value={serachValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />

            <Row gutter={[16, 16]} >
                {filteredProjects.map((project) => {
                    const {
                        id,
                        project: projectName,
                        children,
                    } = project;

                    const totalLogs = children.length;
                    const crashes = children.filter(child => child.type === "crashed").length;
                    const crashFreePercentage = calculateCrashFreePercentage(totalLogs, crashes);

                    return (
                        <Col key={id} xs={24} sm={12} md={8} lg={8}>
                            <Card
                                title={<Link to={`/project/${projectName}`} style={{ fontSize: "1.5rem" }}>{projectName}</Link>}
                                hoverable
                                style={{ fontSize: ".8rem", padding: ".5rem" }}
                            >
                                <ProjectBarChart data={children} />
                                <h3 style={{ fontSize: "1.3rem", borderTop: "2px solid black", padding: ".7rem" }}>{`it is ${crashes} craches of total: ${totalLogs} logs`}</h3>
                                <Statistic
                                    title="Crash Free Sessions"
                                    value={crashFreePercentage}
                                    suffix="%"
                                    prefix={<SmileTwoTone />}
                                    style={{ fontSize: "1.5rem" }}
                                />
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </div>

    );

};

export default ProjectsPage;