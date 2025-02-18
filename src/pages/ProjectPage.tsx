import { useState, useEffect } from "react";
import { Input, Row, Col } from "antd";
import useProjects from "../hooks/useFetchAllProjects";
import { Project } from "../utils/Interface";
import ProjectCard from "../components/projects/ProjectCard";

const { Search } = Input;

const ProjectsPage = () => {
    const { dataFromFetchProjects: projects } = useProjects();
    const [searchValue, setSearchValue] = useState<string>("");
    const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

    useEffect(() => {
        if (projects) {
            setFilteredProjects(projects);
        }
    }, [projects]);

    const onSearch = (value: string) => {
        const trimmedValue = value.trim().toLowerCase();
        if (!trimmedValue) {
            setFilteredProjects(projects || []);
        } else {
            setFilteredProjects(
                (projects ?? []).filter((project) => project.name.toLowerCase().includes(trimmedValue))
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
                {filteredProjects.map((project) => (
                    <Col key={project.id} xs={24} sm={24} md={24} lg={8}>
                        <ProjectCard project={project} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ProjectsPage;