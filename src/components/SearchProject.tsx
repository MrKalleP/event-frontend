import { Input, Space, Card, Row, Col } from 'antd';
import { useState } from 'react';
import test_data from "../utils/testdata.json";

const { Search } = Input;

const SearchProject = () => {
    const [filteredProjects, setFilteredProjects] = useState([]);

    const onSearch = (value: string) => {
        const filtered: any = test_data.filter(item =>
            item.project.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProjects(filtered);
    };

    return (
        <Space direction="vertical" style={{ width: "100%", paddingBlock: "1rem" }}>
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
            />

            <Row gutter={[16, 16]} style={{ marginTop: "1rem" }}>
                {filteredProjects.map((item: any) => (
                    <Col key={item.id} xs={24} sm={12} md={8} lg={8}>
                        <Card
                            title={item.project}
                            bordered={true}
                            hoverable
                        >
                            <p>{item.message}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Space>
    );
};

export default SearchProject;

