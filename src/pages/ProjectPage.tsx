import { useState, useEffect } from "react";
import { Input, Row, Col, Card, Statistic } from "antd";
import { Link } from "react-router-dom";
import { SmileTwoTone } from "@ant-design/icons";
import ProjectBarChart from "../components/projects/BarChart";
import { useProjects } from "../hooks/useFetchAllProjects";
import { Project } from "../utils/Interface";
import { fetchCrashes } from "../utils/fetchingFromApi/FetchCrashes";

const { Search } = Input;

const calculateCrashFreePercentage = (totalLogs: number, crashed: number) => {
    if (totalLogs === 0) return "100.00";
    const crashFreeSessions = totalLogs - crashed;
    return ((crashFreeSessions / totalLogs) * 100).toFixed(2);
};

const ProjectsPage: React.FC<{ projectId: string, type: string }> = ({ projectId, type }) => {

    const { dataFromFetchProjects: projects } = useProjects();

    const [searchValue, setSearchValue] = useState<string>("");
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

    const [crashes, setCrashes] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            if (projects) {
                setFilteredProjects(projects);
            }
            if (projectId && type) {
                const crashData = await fetchCrashes(projectId, "crashed");
                setCrashes(crashData.length);
            }
        };

        fetchData();
    }, [projects, projectId, type]);

    const onSearch = (value: string) => {
        const trimmedValue = value.trim().toLowerCase();
        if (!trimmedValue) {
            setFilteredProjects(projects || []);
        } else {
            setFilteredProjects(
                (projects ?? []).filter((project: { name: string; }) => project?.name?.toLowerCase().includes(trimmedValue)) || []
            );
        }
    };

    return (
        <div className="projectPageContainer">
            <h1 className="projectPageTitel">Project Page</h1>
            <Search
                placeholder="Search for projects by name"
                allowClear
                enterButton="Search"
                size="large"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onSearch={onSearch}
            />

            <Row gutter={[16, 16]}>
                {filteredProjects.map((project) => {
                    const { name, logs, id } = project;

                    const totalLogs = logs.length;
                    const crashFreePercentage = totalLogs > 0
                        ? calculateCrashFreePercentage(totalLogs, crashes)
                        : 100;

                    return (
                        <Col key={id} xs={24} sm={24} md={24} lg={8}>
                            <Card
                                title={<Link to={`/project/${name.toLowerCase()}`} style={{ fontSize: "1.5rem" }}>{name}</Link>}
                                hoverable
                                style={{ fontSize: ".8rem", padding: ".5rem" }}
                            >
                                <ProjectBarChart projectId={project.id} type={"error"} />

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
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
};

export default ProjectsPage;