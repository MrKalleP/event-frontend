import { WarningOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';


export const WarningHome = ({ data }) => {
    const warningFilterData = Array.isArray(data) ? data.filter(item => item.type === "warning") : []
    return (
        <Card bordered={false} style={{ backgroundColor: "#FFD790", padding: ".1rem" }}>
            <Statistic
                title={<span className="warning-title">Warnings</span>}
                value={warningFilterData.length}
                valueStyle={{ color: '#07495B' }}
                prefix={<WarningOutlined />}
                suffix="pcs"
                style={{ fontSize: "1rem" }}
            />
        </Card>
    )
}