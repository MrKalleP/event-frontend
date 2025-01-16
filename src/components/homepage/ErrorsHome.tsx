import { FireOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';

export const ErrorsHome = ({ data }) => {
    const errorFilterData = Array.isArray(data) ? data.filter(item => item.type === "error") : []
    return (
        <Card bordered={false} style={{ backgroundColor: "#C52E2E ", padding: ".1rem" }}>
            <Statistic
                title={<span className="error-title">Errors</span>}
                value={errorFilterData.length}
                valueStyle={{ color: 'white' }}
                prefix={<FireOutlined />}
                suffix="pcs"
                style={{ fontSize: "1rem" }}
            />
        </Card>

    )
}