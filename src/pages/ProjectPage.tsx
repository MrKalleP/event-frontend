import { useState } from "react";
import { Input, Row, Col, Card, Statistic } from "antd";
import { BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar, Tooltip, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";
import test_data from "../../src/utils/testdata.json";

const CrashedFilterData = test_data.filter(item => item.type === "crashed");

const { Search } = Input;

const calculateCrashFreePercentage = (totalLogs, crashes) => {
    const crashFreeSessions = totalLogs - crashes;
    return ((crashFreeSessions / totalLogs) * 100).toFixed(2);
};

const ProjectBarChart = ({ data }) => (
    <ResponsiveContainer width="100%" height={250} >
        <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" label={{ value: "Hour", position: "insideBottom", offset: -5 }} />
            <YAxis label={{ value: "Logs", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
    </ResponsiveContainer>
);

const uniqueProjects = test_data.reduce((acc: any[], current) => {
    const project = acc.find(item => item.project === current.project);

    if (!project) {
        // ta bort date, message och type från current
        acc.push({ ...current, children: [current] });
    } else {
        project.children.push(current);
    }
    return acc;
}, [])

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
            <Row gutter={[16, 16]} >
                {filteredProjects.map((project) => {
                    const {
                        id,
                        project: projectName,
                        totalLogs = test_data.length,
                        crashes = CrashedFilterData.length,
                    } = project;

                    const crashFreePercentage = calculateCrashFreePercentage(totalLogs, crashes);

                    return (
                        <Col key={id} xs={24} sm={12} md={8} lg={8}>
                            <Card
                                title={<Link to={`/project/${id}`}>{projectName}</Link>}
                                hoverable
                            >
                                <ProjectBarChart data={test_data} />
                                <Statistic
                                    title="Crash Free Sessions"
                                    value={crashFreePercentage}
                                    suffix="%"
                                    style={{ marginTop: "1rem" }}
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