
import { InfoCircleOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import test_data from "../utils/testdata.json"

export const InfoLoggs = () => (
    <Row gutter={16} >
        <Col span={12}>
            <Card bordered={false} style={{ backgroundColor: "#8F91FF" }}>
                <Statistic
                    title="Info"
                    value={test_data.length}
                    precision={2}
                    valueStyle={{ color: 'black' }}
                    prefix={<InfoCircleOutlined />}
                    suffix="%"
                />
            </Card>
        </Col>
    </Row>
)