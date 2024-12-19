

import { FireOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import test_data from "../utils/testdata.json"

const errorFilterData = test_data.filter(item => item.type === "error")

export const ErrorsHome = () => (
    <Row gutter={16}>
        <Col span={12}>
            <Card bordered={false} style={{ backgroundColor: "#FA8D8F" }}>
                <Statistic
                    title="Errors "
                    value={errorFilterData.length}
                    precision={2}
                    valueStyle={{ color: 'black' }}
                    prefix={<FireOutlined />}
                    suffix="%"
                />
            </Card>
        </Col>
    </Row>
)