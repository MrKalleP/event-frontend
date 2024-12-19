
import { WarningOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import test_data from "../utils/testdata.json"

const warningFilterData = test_data.filter(item => item.type === "warning")

export const WarningHome = () => (
    <Row gutter={16} >
        <Col span={12}>
            <Card bordered={false} style={{ backgroundColor: "#FFF266" }}>
                <Statistic
                    title="Warnings"
                    value={warningFilterData.length}
                    precision={2}
                    valueStyle={{ color: 'black' }}
                    prefix={<WarningOutlined />}
                    suffix="%"
                />
            </Card>
        </Col>
    </Row>
)