
import { InfoCircleOutlined } from '@ant-design/icons';
import { Card, Statistic } from 'antd';




export const InfoLoggs = ({ data }) => {
    const filtredInfo = Array.isArray(data) ? data.filter(item => item.type === "info") : []
    return (
        <Card bordered={false} style={{ backgroundColor: "#3A4DCB", padding: ".1rem" }}>
            <Statistic
                title={<span className="info-title">Info</span>}
                value={filtredInfo.length}
                valueStyle={{ color: 'white' }}
                prefix={<InfoCircleOutlined />}
                suffix="pcs"
                style={{ fontSize: "1rem" }}
            />
        </Card>

    )
}