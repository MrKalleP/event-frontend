

import { ArrowDownOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

export const ErrorsHome = () => (
    <Row gutter={16}>
        <Col span={12}>
            <Card bordered={false} >
                <Statistic
                    title="Errors "
                    value={19.3}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                />
            </Card>
        </Col>
    </Row>
)