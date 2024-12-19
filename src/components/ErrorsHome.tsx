

import { ArrowDownOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import test_data from "../utils/testdata.json"

const errorFilterData = test_data.filter(item => item.type === "error")

export const ErrorsHome = () => (
    <Row gutter={16}>
        <Col span={12}>
            <Card bordered={false} >
                <Statistic
                    title="Errors "
                    value={errorFilterData.length}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                />
            </Card>
        </Col>
    </Row>
)