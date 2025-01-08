import { useState } from "react";
import { Input, Row, Col, Card, Statistic } from "antd";
import { Link } from "react-router-dom";
import test_data from "../../src/utils/testdata.json";
import { SmileTwoTone } from "@ant-design/icons";
import ProjectBarChart from "../components/projects/BarChart";


const CrashedFilterData = test_data.filter(item => item.type === "crashed");

const { Search } = Input;

const calculateCrashFreePercentage = (totalLogs, crashes) => {
    const crashFreeSessions = totalLogs - crashes;
    return ((crashFreeSessions / totalLogs) * 100).toFixed(2);
};



interface Project {
    id: string;
    project: string;
    type: string;
    children: { id: string; project: string; type: string }[];
}

const uniqueProjects = test_data.reduce<Project[]>((acc, current) => {
    const existingProject = acc.find(item => item.project === current.project);
    console.log(existingProject);

    if (!existingProject) {

        const { id, project, type } = current;
        acc.push({
            id,
            project,
            type,
            children: [{ id, project, type }],
        });
    } else {

        const { id, project, type } = current;
        existingProject.children.push({ id, project, type });
    }

    return acc;
}, []);

const ProjectsPage = () => {
    const [filteredProjects, setFilteredProjects] = useState(uniqueProjects);

    const onSearch = (value) => {
        const filtered = test_data.filter((project) =>
            project.project.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProjects(filtered);
    };


    return (
        <div style={{ padding: "1rem" }}>
            <Search
                placeholder="Search for projects by name"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                style={{ marginBottom: "1rem" }}
            />
            <Row gutter={[16, 16]} justify="center" align="middle" style={{ backgroundColor: "#002140", borderRadius: ".5rem", color: "white", marginBlock: "1.5rem" }}>
                {filteredProjects.map((project) => {
                    const {
                        id,
                        project: projectName,
                        totalLogs = test_data.length,
                        crashes = CrashedFilterData.length,
                    } = project;

                    const crashFreePercentage = calculateCrashFreePercentage(totalLogs, crashes);

                    return (

                        <Col key={id} xs={24} sm={12} md={8} lg={8} >
                            <Card
                                title={<Link to={`/project/${id}`}>{projectName}</Link>}
                                hoverable
                            >
                                <ProjectBarChart data={test_data} />
                                <Statistic
                                    title="Crash Free Sessions"
                                    value={crashFreePercentage}
                                    suffix="%"
                                    style={{ marginBlock: "1rem", padding: ".1rem", borderTop: "1px solid black" }}
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