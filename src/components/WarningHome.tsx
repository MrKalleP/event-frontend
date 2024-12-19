
import { ArrowDownOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import test_data from "../utils/testdata.json"

const warningFilterData = test_data.filter(item => item.type === "warning")

export const WarningHome = () => (
    <Row gutter={16} >
        <Col span={12}>
            <Card bordered={false} >
                <Statistic
                    title="Warnings"
                    value={warningFilterData.length}
                    precision={2}
                    valueStyle={{ color: '#cf1322' }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                />
            </Card>
        </Col>
    </Row>
)