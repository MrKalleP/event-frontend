import { useState } from "react";
import { Input, Row, Col, Card, Statistic } from "antd";
import { Link } from "react-router-dom";
import test_data from "../../src/utils/testdata.json";
import { SmileTwoTone } from "@ant-design/icons";
import ProjectBarChart from "../components/projects/BarChart";
import { Project } from "../utils/Interface"

const { Search } = Input;

const calculateCrashFreePercentage = (totalLogs, crashes) => {
    const crashFreeSessions = totalLogs - crashes;
    return ((crashFreeSessions / totalLogs) * 100).toFixed(2);
};


const uniqueProjects = test_data.reduce<Project[]>((acc, current) => {
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
    const onSearch = (value) => {
        const matches = uniqueProjects.filter((project) =>
            project.project.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredProjects(matches);
    };
    return (
        <div style={{ padding: "1.1rem" }}>
            <Search
                placeholder="Search for projects by name"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                style={{ marginBottom: ".5rem" }}
            />
            <Row gutter={[16, 16]} justify="center" align="middle" style={{ backgroundColor: "0000002E", borderRadius: ".5rem", color: "white", marginBlock: "1.5rem" }}>
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
                                title={<Link to={`/project/${id}`}>{projectName}</Link>}
                                hoverable
                            >
                                <ProjectBarChart data={children} />
                                <Statistic
                                    title="Crash Free Sessions"
                                    value={crashFreePercentage}
                                    suffix="%"
                                    style={{
                                        marginBlock: "1rem",
                                        padding: ".1rem",
                                        borderTop: "1px solid black",
                                    }}
                                    prefix={<SmileTwoTone />}
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