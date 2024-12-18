
import { ArrowDownOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

export const WarningHome = () => (
    <Row gutter={16} >
        <Col span={12}>
            <Card bordered={false} >
                <Statistic
                    title="Warnings "
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                />
            </Card>
        </Col>
    </Row>
)