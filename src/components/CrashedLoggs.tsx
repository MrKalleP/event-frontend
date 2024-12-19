import { AlertOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import test_data from "../utils/testdata.json";

const CrashedFilterData = test_data.filter(item => item.crashed === "true");

export const CrashedLoggs = () => (
    <Row gutter={16}>
        <Col span={12}>
            <Card bordered={false} style={{ backgroundColor: "#CD0205" }}>
                <Statistic
                    title="Crashed"
                    value={CrashedFilterData.length}
                    precision={0}
                    valueStyle={{ color: 'black' }}
                    prefix={<AlertOutlined />}
                    suffix="logs"
                />
            </Card>
        </Col>
    </Row>
);