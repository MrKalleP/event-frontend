import { useState } from "react";
import { Input, Row, Col, Card, Statistic } from "antd";
import { Link } from "react-router-dom";
import { SmileTwoTone } from "@ant-design/icons";
import ProjectBarChart from "../components/projects/BarChart";
import test_data from "../utils/testdata.json"


const { Search } = Input;

const calculateCrashFreePercentage = (totalLogs: number, crashes: number) => {
    const crashFreeSessions = totalLogs - crashes;
    return ((crashFreeSessions / totalLogs) * 100).toFixed(2);
};

const ProjectsPage = () => {
    const [serachValue, setSearchValue] = useState("")
    const [filteredProjects, setFilteredProjects] = useState(test_data.projects);

    const onSearch = () => {
        if (serachValue.trim() === "") {
            setFilteredProjects(test_data.projects);
        } else {
            const filtered = test_data.projects.filter((project) =>
                project.name.toLowerCase().includes(serachValue.toLowerCase())
            );
            setFilteredProjects(filtered);
        }
        setSearchValue("");
    };
    return (

        <div
            style={{
                minHeight: "100vh",
                background: "#f0f2f5",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
            }}
        >
            <h1 style={{ textAlign: "center", fontSize: "4rem", color: "var(--errors-color-)", letterSpacing: ".4rem", fontWeight: "700" }}>Project Page</h1>
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
                        name,
                        logs,
                        id,
                    } = project;

                    const totalLogs = logs.length;
                    const crashes = logs.filter(log => log.type === "crashed").length;
                    const crashFreePercentage = calculateCrashFreePercentage(totalLogs, crashes);

                    return (
                        <Col key={id} xs={24} sm={24} md={24} lg={8}>
                            <Card
                                title={<Link to={`/project/${name.toLowerCase()}`} style={{ fontSize: "1.5rem" }}>{name}</Link>}
                                hoverable
                                style={{ fontSize: ".8rem", padding: ".5rem" }}
                            >
                                <ProjectBarChart data={logs} />
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



export default ProjectsPage