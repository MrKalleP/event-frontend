import { useState, useEffect } from "react";
import { Input, Row, Col, Card, Statistic } from "antd";
import { Link } from "react-router-dom";
import { SmileTwoTone } from "@ant-design/icons";
import ProjectBarChart from "../components/projects/BarChart";
import { useProjects } from "../hooks/useFetchAllProjects";
import { DataType } from "../utils/Interface";

const { Search } = Input;

const calculateCrashFreePercentage = (totalLogs: number, crashes: number) => {
    const crashFreeSessions = totalLogs - crashes;
    return ((crashFreeSessions / totalLogs) * 100).toFixed(2);
};

const ProjectsPage = () => {
    const { data: descriptionProject }: { data: DataType[] } = useProjects();
    const [searchValue, setSearchValue] = useState("");
    const [filteredProjects, setFilteredProjects] = useState<DataType[]>([]);

    useEffect(() => {
        if (descriptionProject) {
            setFilteredProjects(descriptionProject);
        }
    }, [descriptionProject]);

    const onSearch = () => {
        if (!searchValue.trim()) {
            setFilteredProjects(descriptionProject);
        } else {
            const filtered = descriptionProject.filter((project) =>
                project.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredProjects(filtered);
        }
        setSearchValue("");
    };

    return (
        <div className="projectPageContainer">
            <h1 className="projectPageTitel">Project Page</h1>
            <Search
                placeholder="Search for projects by name"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />

            <Row gutter={[16, 16]}>
                {filteredProjects.map((project) => {
                    const { name, logs, id } = project;
                    const totalLogs = logs.length;
                    const crashes = logs.filter((log) => log.type === "crashed").length;
                    const crashFreePercentage = calculateCrashFreePercentage(totalLogs, crashes);

                    return (
                        <Col key={id} xs={24} sm={24} md={24} lg={8}>
                            <Card
                                title={
                                    <Link
                                        to={`/project/${name.toLowerCase()}`}
                                        style={{ fontSize: "1.5rem" }}
                                    >
                                        {name}
                                    </Link>
                                }
                                hoverable
                                style={{ fontSize: ".8rem", padding: ".5rem" }}
                            >
                                <ProjectBarChart type={"error"} date={""} />
                                <h3
                                    style={{
                                        fontSize: "1.3rem",
                                        borderTop: "2px solid black",
                                        padding: ".7rem",
                                    }}
                                >
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
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default ProjectsPage;